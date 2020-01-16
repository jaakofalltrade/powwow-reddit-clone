from rest_framework import serializers
from .models import User, Community, CommunityMember


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