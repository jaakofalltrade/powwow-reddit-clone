from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User, Community, CommunityMember, Post, Comment
from django.contrib.auth import get_user_model, authenticate

User = get_user_model()


class UserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True
    )

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "email",
            "community",
            "password",
            "url",
        )

    extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        """ Creates and returns a new user """
        validated_data["password"] = make_password(validated_data.get("password"))

        return super(UserSerializer, self).create(validated_data)


# class RegisterSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(
#         max_length=255, style={"input_type": "password"}, write_only=True
#     )

#     class Meta:
#         model = User
#         fields = (
#             "id",
#             "username",
#             "email",
#             "community",
#             "password",
#         )
#         extra_kwargs = {"password": {"write_only": True}}

#         # def create(self, validated_data):
#         #     user = User(
#         #         email=validated_data["email"], username=validated_data["username"],
#         #     )
#         #     user.set_password(make_password(validated_data["password"]))
#         #     user.save()
#         #     # """ Creates and returns a new user """
#         #     # validated_data["password"] = make_password(validated_data.get("password"))

#         #     return user

#         def create(self, validated_data):
#             """ Creates and returns a new user """
#             validated_data["password"] = make_password(validated_data.get("password"))

#             return super(RegisterSerializer, self).create(validated_data)


class CommunitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Community
        fields = (
            "id",
            "community_name",
            "community_description",
            "date_created",
            "url",
        )


class CommunityMemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CommunityMember
        fields = (
            "id",
            "community",
            "user",
            "date_joined",
            "url",
        )


class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = (
            "id",
            "community",
            "user",
            "post_title",
            "post_description",
            "post_date",
            "url",
        )


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = (
            "id",
            "post",
            "user",
            "comment_content",
            "comment_date",
            "url",
        )


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials!")
