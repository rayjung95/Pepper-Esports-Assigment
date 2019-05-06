from django.contrib import admin
from django.urls import path, include
from todo.views import todoView, addTodo, deleteTodo
urlpatterns = [
    path('api/', include('todo.urls')),
    path('todo/', todoView),
    path('addTodo/', addTodo),
    path('deleteTodo/<int:todo_id>', deleteTodo),
]
