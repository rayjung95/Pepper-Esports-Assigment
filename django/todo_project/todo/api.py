from .models import TodoItem
from rest_framework import viewsets, permissions
from .serializers import TodoItemSerializer
from url_filter.integrations.drf import DjangoFilterBackend

# TodoItems viewset
class TodoItemViewSet(viewsets.ModelViewSet):
    queryset = TodoItem.objects.all()
    # def get_queryset(self):
    #     queryset = TodoItem.objects.all()
    #     state = self.request.query_params.get('state', '')
    #     if state:
    #         if state == '1':
    #             state = 1
    #         elif state == '2':
    #             state = 2
    #         elif  state == '3':
    #             state = 3
    #         else:
    #             return queryset
    #         return queryset.filter(state = state)
    #     return queryset
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['state', 'due_date']

    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TodoItemSerializer

