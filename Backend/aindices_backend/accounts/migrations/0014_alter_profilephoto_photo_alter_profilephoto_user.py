# Generated by Django 5.0.7 on 2024-08-04 15:28

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0013_alter_profilephoto_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilephoto',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='profile_photos/'),
        ),
        migrations.AlterField(
            model_name='profilephoto',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile_photo', to=settings.AUTH_USER_MODEL),
        ),
    ]
