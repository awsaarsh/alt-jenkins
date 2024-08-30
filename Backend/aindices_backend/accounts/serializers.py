# D:\ai\aindices\accounts\serializers.py
from django.db import models
from django.conf import settings  # Import settings
from rest_framework import serializers
from .models import CustomUser, FirmManagerFundProfile, AboutUs, ContactDetails, ProfilePhoto
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'company_name', 'email', 'password', 'country', 'state']
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
            'company_name': {'required': True},
            'country': {'required': True},
            'state': {'required': True}
        }

    def create(self, validated_data):
        # Generate unique username
        last_user = CustomUser.objects.last()
        if last_user:
            last_username = last_user.username
            if last_username.startswith('user_'):
                numeric_part = int(last_username.split('_')[-1]) + 1
                new_username = f"user_{numeric_part}"
            else:
                new_username = "user_1"
        else:
            new_username = "user_1"

        user = CustomUser.objects.create_user(
            username=new_username,
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            company_name=validated_data['company_name'],
            email=validated_data['email'],
            password=validated_data['password'],
            country=validated_data['country'],
            state=validated_data['state']
        )
        return user
    

class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        user = CustomUser.objects.filter(email=value).first()
        if user is not None:
            return value
        else:
            raise serializers.ValidationError("This email is not associated with any account.")

class FirmManagerFundProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = FirmManagerFundProfile
        fields = '__all__'

class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ['content']

class ContactDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactDetails
        fields = ['city', 'address', 'state_country', 'zip_code', 'website', 'telephone']

class ProfilePhotoSerializer(serializers.ModelSerializer):  # Added missing serializer
    class Meta:
        model = ProfilePhoto
        fields = ['user', 'photo']

