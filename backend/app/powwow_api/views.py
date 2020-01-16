from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Community, CommunityMember
from .serializers import UserSerializer, CommunitySerializer, CommunityMemberSerializer


# Create your views here.
class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CommunityView(viewsets.ModelViewSet):
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer


class CommunityMemberView(viewsets.ModelViewSet):
    queryset = CommunityMember.objects.all()
    serializer_class = CommunityMemberSerializer