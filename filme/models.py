from django.db import models
from django.contrib.auth.models import User

class Filme(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField()
    data_lancamento = models.DateField()
    categoria = models.CharField(max_length=50)
    imagem = models.URLField(null=True, blank=True)
    curtidas = models.PositiveIntegerField(default=0)
    usuarios_que_curtiram = models.ManyToManyField(User, related_name="filmes_curtidos", blank=True)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.titulo
    
class Comentario(models.Model):
    filme = models.ForeignKey("Filme", on_delete=models.CASCADE, related_name="comentarios")
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    texto = models.TextField()
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.usuario.username} - {self.filme.titulo}"