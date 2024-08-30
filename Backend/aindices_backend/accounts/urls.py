# D:\ai\aindices\accounts\urls.py

from django.urls import path
from . import views
from .views import PasswordResetRequestAPIView
from .views import create_about_us, about_us, create_contact_details, retrieve_contact_details, update_contact_details, ProfilePhotoView

from .views import UserSerializer, PasswordResetSerializer, FirmManagerFundProfileSerializer, AboutUsSerializer, ContactDetailsSerializer, UploadProfilePhotoView


urlpatterns = [
    path('register/', views.register_user, name='register_user'),
    path('login/', views.user_login, name='user_login'),
    path('logout/', views.user_logout, name='user_logout'),
    path('user-details/', views.user_details, name='user_details'),
    path('logout-all-devices/', views.logout_all_devices, name='logout_all_devices'),
    path('provinces-or-states/', views.get_provinces_or_states, name='provinces_or_states'),
    path('password-reset/', PasswordResetRequestAPIView.as_view(), name='password_reset_request'),
    path('firm-manager-fund-profile/', views.firm_manager_fund_profile, name='firm_manager_fund_profile'),
    path('firm-manager-fund-profile/<int:pk>/', views.firm_manager_fund_profile_detail, name='firm_manager_fund_profile_detail'),
    path('about-us/', views.create_about_us, name='create_about_us'),
    path('about-us/info/', views.about_us, name='about_us'),
    path('contact-details/', retrieve_contact_details, name='retrieve_contact_details'),
    path('contact-details/create/', create_contact_details, name='create_contact_details'),
    path('contact-details/update/', update_contact_details, name='update_contact_details'),
    path('upload-profile-photo/', UploadProfilePhotoView.as_view(), name='upload-profile-photo'),
    path('profile-photo/', ProfilePhotoView.as_view(), name='profile-photo'),
    path('profile-photo/update/', views.update_profile_photo, name='update_profile_photo'),
]

