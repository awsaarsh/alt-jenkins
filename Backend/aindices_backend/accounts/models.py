# D:\ai\aindices\accounts\models.py

from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model
from django.db import models
from django.conf import settings


# User = get_user_model()

class CustomUser(AbstractUser):
    company_name = models.CharField(max_length=100, default='')
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=10, unique=True, blank=True, null=True)
    state = models.CharField(max_length=100,default='')
    country = models.CharField(max_length=100,default='')
    has_permission = models.BooleanField(default=False)
    first_login = models.BooleanField(default=True)

    # Add custom fields or methods here if needed
class LogEntry(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    level = models.CharField(max_length=20)
    message = models.TextField()

    def __str__(self):
        return f"{self.timestamp} - {self.level}: {self.message}"


class FirmManagerFundProfile(models.Model):
    firm_type = models.CharField(max_length=100)
    years_established = models.IntegerField()
    currency_managed = models.CharField(max_length=50)
    pe_main_firm_strategy = models.CharField(max_length=100)
    aum_cur_mn = models.DecimalField(max_digits=15, decimal_places=2)
    aum_usd_mn = models.DecimalField(max_digits=15, decimal_places=2)
    aum_eur_mn = models.DecimalField(max_digits=15, decimal_places=2)

class AboutUs(models.Model):
    content = models.TextField()
    
    def __str__(self):
        return "About Us Information"

class ContactDetails(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    city = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    state_country = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=20)
    website = models.URLField(max_length=200, blank=True)
    telephone = models.CharField(max_length=15)
    
    def __str__(self):
        return f"Contact details for {self.user.email}"






class ProfilePhoto(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='profile_photos/')


    def __str__(self):
        return f"{self.user.username}'s profile photo"