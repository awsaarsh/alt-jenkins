# D:\ai\aindices\accounts\admin.py

from django.contrib import admin
from .models import CustomUser

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'has_permission')
    list_filter = ('has_permission',)
    search_fields = ('username', 'email')

admin.site.register(CustomUser, CustomUserAdmin)