from django.urls import path, include
from . import views
from . import api
from rest_framework import routers


router = routers.DefaultRouter()
router.register("users", views.UserViewSet)
router.register("community", views.CommunityViewSet)
router.register("community_member", views.CommunityMemberViewSet)
router.register("posts", views.PostViewSet)
router.register("comments", views.CommentViewSet)
# router.register("login", api.LoginApi.as_view(), basename="LoginView")
# router.register("register", views.RegisterViewset)

urlpatterns = [
    path("", include(router.urls)),
    path("login", api.LoginApi.as_view()),
    path("user", api.UserApi.as_view()),
]


# path("users/register", RegisterApi.as_view()),

