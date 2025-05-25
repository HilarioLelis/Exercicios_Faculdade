from rest_framework.routers import DefaultRouter
from .viewsets import ComentarioViewSet, FilmeViewSet

router = DefaultRouter()
router.register(r'filmes', FilmeViewSet, basename='filmes')
router.register(r'comentarios', ComentarioViewSet,  basename='comentarios')

urlpatterns = router.urls
