from rest_framework import routers
from .api import TodoItemViewSet
from django.urls import path, include
from todo.views import *

router  = routers.DefaultRouter()
router.register('todoItems', TodoItemViewSet)
urlpatterns = [
    path('api/', include(router.urls)),
]
