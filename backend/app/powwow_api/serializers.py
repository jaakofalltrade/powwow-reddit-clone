from rest_framework import serializers
from .models import (
    User,
    Community,
    CommunityMember,
    Post,
    Comment
)


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'url',)


class CommunitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Community
        fields = ('id', 'community_name', 'community_description', 'date_created', 'url',)


class CommunityMemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CommunityMember
        fields = ('id', 'community_id', 'user_id', 'date_joined', 'url',)


class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'community_id', 'user_id', 'post_title', 'post_description', 'post_date', 'url',)


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'post_id', 'user_id', 'comment_content', 'comment_date', 'url',)