from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('notes/', views.getNotes, name='notes'),
    path('notes/<int:pk>/update/', views.updateNote, name='update-note'),

    path('notes/<int:pk>/', views.getNote, name='note'),
]