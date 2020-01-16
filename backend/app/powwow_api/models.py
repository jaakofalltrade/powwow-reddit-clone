import datetime

from django.db import models
from django.utils import timezone

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name_plural = "users"


class Community(models.Model):
    community_id = models.AutoField(primary_key=True)
    community_name = models.CharField(max_length=50, default=None, null=True, blank=True)
    community_description = models.CharField(max_length=150, default=None, blank=True, null=True)
    date_created = models.DateTimeField('date created', default=None)
    def __str__(self):
        return f'{self.community_name}'

    class Meta:
        verbose_name_plural = "community"

class CommunityMember(models.Model):
    cm_id = models.AutoField(primary_key=True)
    community_id = models.ForeignKey(Community, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date_joined = models.DateTimeField('date published')

    def __str__(self):
        return f'{self.id}'

    class Meta:
        verbose_name_plural = "community_member"