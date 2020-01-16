from django.contrib import admin
from .models import User, Community, CommunityMember


# Register your models here.
admin.site.register(User)
admin.site.register(Community)
admin.site.register(CommunityMember)