# Generated by Django 5.0.7 on 2024-08-04 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0012_profilephoto'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilephoto',
            name='photo',
            field=models.ImageField(default='path/to/default/image.jpg', upload_to='photos/'),
        ),
    ]
