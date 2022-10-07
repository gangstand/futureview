from django.contrib import admin

from pages.models import Project, Articles, Awards, Team

admin.site.register(Articles)
admin.site.register(Project)
admin.site.register(Awards)
admin.site.register(Team)