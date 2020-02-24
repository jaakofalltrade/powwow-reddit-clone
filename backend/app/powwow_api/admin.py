from django.contrib import admin
from .models import User, Community, CommunityMember, Post, Comment


class UserAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {"fields": (["username"]),}),
        ("Email", {"fields": (["email"])}),
        ("Password", {"fields": (["password"])}),
    )

    list_display = ("username", "email", "password")
    list_filter = ["username"]
    search_fields = ["username", "email"]


# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Community)
admin.site.register(CommunityMember)
admin.site.register(Post)
admin.site.register(Comment)
