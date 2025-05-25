from rest_framework import serializers
from filme.models import Comentario
from ...models import Filme

class FilmeSerializer(serializers.ModelSerializer):
    curtido = serializers.SerializerMethodField()

    class Meta:
        model = Filme
        fields = '__all__'

    def get_curtido(self, obj):
        request = self.context.get("request")
        if request and hasattr(request, "user") and request.user.is_authenticated:
            return obj.usuarios_que_curtiram.filter(id=request.user.id).exists()
        return False
    
class ComentarioSerializer(serializers.ModelSerializer):
    autor_username = serializers.CharField(source="autor.username", read_only=True)

    class Meta:
        model = Comentario
        fields = "__all__"
        read_only_fields = ["id", "criado_em", "usuario", "autor_username"]