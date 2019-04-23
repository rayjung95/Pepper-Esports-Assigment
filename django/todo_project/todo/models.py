from django.db import models

STATE_CHOICES = (
    (1, 'Todo'),
    (2, 'In-Progress'),
    (3, 'Done'),
)

# Create your models here.
class TodoItem(models.Model):
    state = models.IntegerField(choices=STATE_CHOICES, default=1)
    date_created = models.DateTimeField(auto_now_add=True)
    content = models.TextField(max_length=200, blank=True, null=True)
    due_date = models.DateTimeField(blank=True, null=True)

    def showState(self):
        return self.state
