from .models import TodoItem
from django.db.models  import Q
from rest_framework import permissions, generics, mixins
from .serializers import TodoItemSerializer
from url_filter.integrations.drf import DjangoFilterBackend
from django.http import HttpResponse, JsonResponse
import json

class TodoItemListAPIView(mixins.DestroyModelMixin, generics.ListCreateAPIView):
    lookup_field = 'pk'
    serializer_class = TodoItemSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['state', 'due_date']

    def get_queryset(self):
        return TodoItem.objects.all()

    def delete(self, request, *args, **kwargs):
        data = json.loads(request.body)
        if data.get('todoItems') :
            querySet = TodoItem.objects.filter(id__in=data.get('todoItems'))
            print (querySet)
            querySet.delete()
            return JsonResponse({'Status': 'Successfully Deleted'})
        return JsonResponse({'Error': 'Please send items in an array format'})


class TodoItemViewSet(generics.RetrieveUpdateDestroyAPIView):
    
    lookup_field = 'pk'
    serializer_class = TodoItemSerializer

    def get_queryset(self):
        return TodoItem.objects.all()
