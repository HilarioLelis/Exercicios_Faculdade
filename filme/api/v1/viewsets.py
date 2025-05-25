from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from filme.models import Comentario
from ...models import Filme
from .serializers import FilmeSerializer
from filme.api.v1.serializers import ComentarioSerializer

class FilmeViewSet(viewsets.ModelViewSet):
    serializer_class = FilmeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = Filme.objects.filter(is_deleted=False)

        categoria = self.request.query_params.get("categoria")
        if categoria:
            queryset = queryset.filter(categoria__icontains=categoria)

        ordenar_por = self.request.query_params.get("ordenar")
        if ordenar_por == "curtidas":
            queryset =queryset.order_by("-curtidas")

        return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_deleted = True
        instance.save()
        return Response({"detail": "Filme marcado como excluído."}, status=status.HTTP_204_NO_CONTENT)
    
    def get_serializer_context(self):
        context =  super().get_serializer_context()
        context ["request"] = self.request
        return context
    
    @action(detail=True, methods=["post"])
    def curtir(self, reques, pk=None):
        filme = self.get_object()
        user = self.request.user

        if user in filme.usuarios_que_curtiram.all():
            filme.usuarios_que_curtiram.remove(user)
            filme.curtidas -= 1
            curtido = False
        else:
            filme.usuarios_que_curtiram.add(user)
            filme.curtidas += 1
            curtido = True

        filme.save()
        return Response({"curtido": curtido, "curtidas": filme.curtidas}, status=status.HTTP_200_OK)
    
class ComentarioViewSet(viewsets.ModelViewSet):
    serializer_class = ComentarioSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        filme_id = self.request.query_params.get("filme")
        if filme_id:
            return Comentario.objects.filter(filme_id=filme_id).order_by("-criado_em")
        return Comentario.objects.none()


    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)