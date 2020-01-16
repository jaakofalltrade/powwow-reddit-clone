from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import (
    User,
    Community,
    CommunityMember,
    Post,
    Comment
)
from .serializers import (
    UserSerializer,
    CommunitySerializer,
    CommunityMemberSerializer,
    PostSerializer,
    CommentSerializer
)


# Create your views here.
class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class CommunityView(viewsets.ModelViewSet):
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer


class CommunityMemberView(viewsets.ModelViewSet):
    queryset = CommunityMember.objects.all()
    serializer_class = CommunityMemberSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer