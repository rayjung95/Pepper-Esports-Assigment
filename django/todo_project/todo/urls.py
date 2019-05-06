from rest_framework import routers
from .api import TodoItemViewSet, TodoItemListAPIView
from django.urls import path, include
from django.conf.urls import url
from todo.views import *

# router  = routers.DefaultRouter()
# router.register('todoItems', TodoItemViewSet)
urlpatterns = [
    # path('api/', include(router.urls)),
    path('todoItems/<int:pk>/', TodoItemViewSet.as_view(), name='todo-crud'),
    path('todoItems/', TodoItemListAPIView.as_view(), name='todo-list'),
    # path('todoItem/', TodoItemViewSet.as_view(), name='todo-listall')
    # url(r'^(?P<pk>\d+)/$', TodoItemViewSet.as_view(), name='todo-listall')
]
