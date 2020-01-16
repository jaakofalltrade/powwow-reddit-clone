from django.contrib import admin
from .models import (
    User,
    Community,
    CommunityMember,
    Post,
    Comment
)


# Register your models here.
admin.site.register(User)
admin.site.register(Community)
admin.site.register(CommunityMember)
admin.site.register(Post)
admin.site.register(Comment)