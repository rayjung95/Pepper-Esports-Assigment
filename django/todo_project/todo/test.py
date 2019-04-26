from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import TodoItem
from django.urls import reverse


class TodoItemTestCase(TestCase):
    def setUp(self):
        TodoItem.objects.create(
            state="1", content="test1", due_date="2018-01-01")
        TodoItem.objects.create(
            state="3", content="test2", due_date="2018-01-02")

    def test_animals_can_speak(self):
        test1 = TodoItem.objects.get(content="test1")
        test2 = TodoItem.objects.get(content="test2")
        self.assertEqual(test1.showState(), 1)
        # self.assertEqual(cat.speak(), 'The cat says "meow"')


class TodoItemAPITestCase(APITestCase):
    def setUp(self):
        TodoItem.objects.create(
            state="1", content="test1", due_date="2018-01-01")
        TodoItem.objects.create(
            state="3", content="test2", due_date="2018-01-02")

    def test_get_alltodo(self):
        client = APIClient()
        response = client.get('/api/todoItems/', {}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post_todo(self):
        client = APIClient()
        data = {
            "state": 1,
            "content": "new created data",
            "due_date": "2019-01-09T00:00:00Z"
        }
        response = client.post('/api/todoItems/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_delete_todo(self):
        client = APIClient()
        response = client.delete('/api/todoItems/1/', {}, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
