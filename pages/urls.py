from django.urls import path
from .views import index, ProjectsPageView, AboutPageView, ContactPageView

urlpatterns = [
    path('', index, name='home'),
    path('projects/', ProjectsPageView.as_view(), name='projects'),
    path('about/', AboutPageView.as_view(), name='about'),
    path('contact/', ContactPageView.as_view(), name='contact'),
]
