from django.shortcuts import render
from rest_framework import viewsets, permissions, filters
from rest_framework.decorators import permission_classes
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import User, Community, CommunityMember, Post, Comment
from .serializers import (
    UserSerializer,
    CommunitySerializer,
    CommunityMemberSerializer,
    PostSerializer,
    CommentSerializer,
    LoginSerializer,
)


# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    search_fields = ["=username", "=email"]
    filter_backends = (filters.SearchFilter,)
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_permissions(self):
        if self.action == "list":
            self.permission_classes = [
                IsAuthenticated,
            ]
        elif self.action == "retrieve":
            self.permission_classes = [AllowAny]
        return super(self.__class__, self).get_permissions()


class CommunityViewSet(viewsets.ModelViewSet):
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer


class CommunityMemberViewSet(viewsets.ModelViewSet):
    queryset = CommunityMember.objects.all()
    serializer_class = CommunityMemberSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


# class RegisterViewset(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = RegisterSerializer
#     print(queryset)

#     def get_permissions(self):
#         if self.action == "list":
#             self.permission_classes = [
#                 IsAuthenticated,
#             ]
#         elif self.action == "retrieve":
#             self.permission_classes = [AllowAny]
#         return super(self.__class__, self).get_permissions()
