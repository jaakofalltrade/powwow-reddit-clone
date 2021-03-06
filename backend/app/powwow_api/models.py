import datetime

from django.db import models
from django.utils import timezone

class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name_plural = "users"


class Community(models.Model):
    community_name = models.CharField(max_length=50)
    community_description = models.CharField(max_length=150)
    date_created = models.DateTimeField('date created')
    def __str__(self):
        return f'{self.community_name}'

    class Meta:
        verbose_name_plural = "community"

class CommunityMember(models.Model):
    community_id = models.ForeignKey(Community, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    date_joined = models.DateTimeField('date joined')

    def __str__(self):
        return f'{self.id}'

    class Meta:
        verbose_name_plural = "community_member"


class Post(models.Model):
    community_id = models.ForeignKey(Community, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    post_title = models.CharField(max_length=50)
    post_description = models.CharField(max_length=150)
    post_date = models.DateTimeField('post date')
    
    def __str__(self):
        return f'{self.post_title}'

    class Meta:
        verbose_name_plural = "posts"


class Comment(models.Model):
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_content = models.CharField(max_length=150)
    comment_date = models.DateTimeField('comment date')
    
    def __str__(self):
        return f'{self.id}'

    class Meta:
        verbose_name_plural = "comments"