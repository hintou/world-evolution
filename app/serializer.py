from rest_framework import serializers

class RecursosSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    nome_do_recurso = serializers.CharField()
    quantidade = serializers.IntegerField()
    preco = serializers.IntegerField()