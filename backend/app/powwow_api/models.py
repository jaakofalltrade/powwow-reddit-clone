import datetime
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import make_password


# Needed when using AbstractUser
class UserManager(BaseUserManager):

    use_in_migrations = True

    # Method template for create_user and create_superuser
    def _create_user(self, email, username, password, **extra_fields):
        if not email:
            raise ValueError("The email cannot be empty!")
        if not username:
            raise ValueError("The username cannot be empty!")
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(make_password(password))
        user.save(using=self._db)
        return user

    # Creates a regular user
    def create_user(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault("is_admin", False)
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    # Creates a super user
    def create_superuser(self, email, username, password, **extra_fields):
        extra_fields.setdefault("is_admin", True)
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(email, password, **extra_fields)


class Community(models.Model):
    community_name = models.CharField(max_length=50)
    community_description = models.CharField(max_length=150)
    date_created = models.DateTimeField("date created")

    def __str__(self):
        return f"{self.community_name}"

    class Meta:
        verbose_name_plural = "community"


class User(AbstractUser):
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=50, unique=True)
    password = models.CharField(max_length=100)
    community = models.ManyToManyField(Community, through="CommunityMember",)

    USERNAME_FIELD = "username"

    def __str__(self):
        return self.username

    class Meta:
        verbose_name_plural = "users"


class CommunityMember(models.Model):
    community = models.ForeignKey(Community, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_joined = models.DateTimeField("date joined")

    def __str__(self):
        return f"{self.id}"

    class Meta:
        verbose_name_plural = "community_member"


class Post(models.Model):
    community = models.ForeignKey(Community, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post_title = models.CharField(max_length=50)
    post_description = models.CharField(max_length=150)
    post_date = models.DateTimeField("post date")

    def __str__(self):
        return f"{self.post_title}"

    class Meta:
        verbose_name_plural = "posts"


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_content = models.CharField(max_length=150)
    comment_date = models.DateTimeField("comment date")

    def __str__(self):
        return f"{self.id}"

    class Meta:
        verbose_name_plural = "comments"
