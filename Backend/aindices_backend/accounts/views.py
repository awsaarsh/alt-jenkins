# D:\ai\aindices\accounts\views.py
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.core.exceptions import ObjectDoesNotExist
from .serializers import UserSerializer, PasswordResetSerializer, FirmManagerFundProfileSerializer, AboutUsSerializer, ContactDetailsSerializer, ProfilePhotoSerializer
from .models import CustomUser, FirmManagerFundProfile, AboutUs, ContactDetails, ProfilePhoto

from rest_framework.permissions import IsAuthenticated
import logging
from django.contrib.auth.hashers import check_password
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.core.mail import send_mail
from rest_framework.parsers import MultiPartParser, FormParser  # Corrected typo
from rest_framework import generics, permissions







logger = logging.getLogger(__name__)

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        ip_address = request.META.get('REMOTE_ADDR', None)
        logger.info(f"Registration attempt from IP: {ip_address}")
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            # Save the user with has_permission set to False by default
            serializer.save(has_permission=False)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        ip_address = request.META.get('REMOTE_ADDR', None)
        logger.info(f"Login attempt from IP: {ip_address}")
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)

        user = None
        if '@' in username:
            try:
                user = CustomUser.objects.get(email=username)
            except CustomUser.DoesNotExist:
                pass

        if user:
            if user.has_permission:  
                if check_password(password, user.password):
                    token, created = Token.objects.get_or_create(user=user)
                    first_login = user.first_login
                    if first_login:
                        user.first_login = False
                        user.save()
                    return Response({'token': token.key, 'first_login': first_login}, status=status.HTTP_200_OK)
                else:
                    return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)
            else:
                return Response({'error': 'Permission denied. Please contact the alt_indices Administrator'}, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    if request.method == 'POST':
        try:
            # Delete the user's token to logout
            request.user.auth_token.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_details(request):
    """
    Retrieve details of the authenticated user.
    """
    user = request.user  # Get the authenticated user

    serializer = UserSerializer(user)  # Serialize user details
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_all_devices(request):
    """
    Logout the user from all devices by generating a new token.
    """
    user = request.user

    # Generate a new token for the user
    new_token, _ = Token.objects.get_or_create(user=user)

    # Delete all existing tokens associated with the user
    user.auth_token.delete()

    return Response({'message': 'Successfully logged out from all devices.', 'new_token': new_token.key}, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_provinces_or_states(request):
    country = request.GET.get('country')
    if country == 'Canada':
        provinces = [
            'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 
            'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 
            'Northwest Territories', 'Nunavut', 'Yukon'
        ]
        return Response({'provinces': provinces})
    elif country == 'USA':
        states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
            'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
            'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
            'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 
            'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 
            'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
        return Response({'states': states})
    else:
        return Response({'error': 'Country not supported'}, status=status.HTTP_400_BAD_REQUEST)

class PasswordResetRequestAPIView(APIView):
    serializer_class = PasswordResetSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            user = CustomUser.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)
            reset_url = f'http://your-domain.com/reset-password/{uid}/{token}/'
            send_mail(
                'Password Reset Request',
                f'Please click the following link to reset your password: {reset_url}',
                'from@example.com',
                [email],
                fail_silently=False,
            )
            return Response({'message': 'Password reset email sent.'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def firm_manager_fund_profile(request):
    if request.method == 'GET':
        profile = FirmManagerFundProfile.objects.all()
        serializer = FirmManagerFundProfileSerializer(profile, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = FirmManagerFundProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def firm_manager_fund_profile_detail(request, pk):
    try:
        profile = FirmManagerFundProfile.objects.get(pk=pk)
    except FirmManagerFundProfile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = FirmManagerFundProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def create_about_us(request):
    if AboutUs.objects.exists():
        return Response({'error': 'About Us information already exists. Use PUT to update.'}, status=status.HTTP_400_BAD_REQUEST)
    
    serializer = AboutUsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def about_us(request):
    try:
        about_us = AboutUs.objects.get()
    except AboutUs.DoesNotExist:
        return Response({'error': 'About Us information not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = AboutUsSerializer(about_us)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = AboutUsSerializer(about_us, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_contact_details(request):
    if ContactDetails.objects.filter(user=request.user).exists():
        return Response({'error': 'Contact details already exist. Use PUT to update.'}, status=status.HTTP_400_BAD_REQUEST)
    
    serializer = ContactDetailsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def retrieve_contact_details(request):
    try:
        contact_details = ContactDetails.objects.get(user=request.user)
    except ContactDetails.DoesNotExist:
        return Response({'error': 'Contact details not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = ContactDetailsSerializer(contact_details)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_contact_details(request):
    try:
        contact_details = ContactDetails.objects.get(user=request.user)
    except ContactDetails.DoesNotExist:
        return Response({'error': 'Contact details not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = ContactDetailsSerializer(contact_details, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class UploadProfilePhotoView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, *args, **kwargs):
        user = request.user
        if 'photo' not in request.FILES:
            return Response({"error": "No profile photo provided."}, status=status.HTTP_400_BAD_REQUEST)

        profile, created = ProfilePhoto.objects.get_or_create(user=user)
        profile.photo = request.FILES['photo']
        profile.save()

        serializer = ProfilePhotoSerializer(profile)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_profile_photo(request):
    user = request.user
    if 'profile_photo' not in request.FILES:
        return Response({'error': 'No profile photo provided.'}, status=status.HTTP_400_BAD_REQUEST)

    profile, created = Profile.objects.get_or_create(user=user)
    profile.profile_photo = request.FILES['profile_photo']
    profile.save()

    serializer = ProfilePhotoSerializer(profile)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def retrieve_profile_photo(request):
    user = request.user
    try:
        photo_instance = ProfilePhoto.objects.get(user=user)
    except ProfilePhoto.DoesNotExist:
        return Response({'error': 'Profile photo not found.'}, status=status.HTTP_404_NOT_FOUND)

    serializer = ProfilePhotoSerializer(photo_instance)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_profile_photo(request):
    user = request.user
    if 'photo' not in request.FILES:
        return Response({'error': 'No profile photo provided.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        photo_instance = ProfilePhoto.objects.get(user=user)
    except ProfilePhoto.DoesNotExist:
        return Response({'error': 'Profile photo not found.'}, status=status.HTTP_404_NOT_FOUND)

    photo_instance.photo = request.FILES['photo']
    photo_instance.save()

    serializer = ProfilePhotoSerializer(photo_instance)
    return Response(serializer.data, status=status.HTTP_200_OK)


class UploadProfilePhotoView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, *args, **kwargs):
        user = request.user
        if 'profile_photo' not in request.FILES:
            return Response({"error": "No profile photo provided."}, status=status.HTTP_400_BAD_REQUEST)

        profile, created = ProfilePhoto.objects.get_or_create(user=user)  # Corrected from Profile to ProfilePhoto
        profile.profile_photo = request.FILES['profile_photo']
        profile.save()

        serializer = ProfilePhotoSerializer(profile)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class ProfilePhotoView(generics.RetrieveUpdateAPIView):
    serializer_class = ProfilePhotoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return ProfilePhoto.objects.get(user=self.request.user)