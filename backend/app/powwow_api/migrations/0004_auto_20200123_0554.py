# Generated by Django 3.0.2 on 2020-01-23 05:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('powwow_api', '0003_auto_20200123_0349'),
    ]

    operations = [
        migrations.RenameField(
            model_name='community',
            old_name='members',
            new_name='users',
        ),
    ]