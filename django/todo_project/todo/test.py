from django.test import TestCase
from .models import TodoItem

class TodoItemTestCase(TestCase):
    def setUp(self):
        TodoItem.objects.create(state="1", content="test1", due_date="2018-01-01")
        TodoItem.objects.create(state="3", content="test2", due_date="2018-01-02")
    def test_animals_can_speak(self):
        test1 = TodoItem.objects.get(content="test1")
        test2 = TodoItem.objects.get(content="test2")
        self.assertEqual(test1.showState(), 1)
        # self.assertEqual(cat.speak(), 'The cat says "meow"')