from rest_framework import viewsets, permissions
from .models import Tasks
from .serializers import TasksSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


class TasksViewSet(viewsets.ModelViewSet):
    queryset = Tasks.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = TasksSerializer

    @action(detail=True, methods=['POST'])
    def done(self, request, pk=None):
        task = self.get_object()
        task.done = not task.done
        task.save()
        return Response({
            'status': 'task done' if task.done else 'task failed'
        }, status=status.HTTP_200_OK)
