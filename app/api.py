from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Recursos
from .serializer import RecursosSerializer

@api_view(['GET'])
def pegar_dados(request):
    return Response({'dados':['michelan333', 'iriphyel', 'nonaGen']})

@api_view(['GET'])
def pegar_data(request):
    from datetime import datetime
    data_atual = datetime.now()
    data_convertida = data_atual.strftime('%d/%m/%Y')
    hora_convertida = data_atual.strftime('%H:%M:%S')
    return Response({'dados': [data_convertida, hora_convertida]})

@api_view(['GET'])
def carregar_recursos(request):
    get_dados = Recursos.objects.all()
    dados = RecursosSerializer(get_dados, many=True)
    return Response({'dados': dados.data})

@api_view(['GET'])
def adicionar_recurso(request):
    return Response({'dados': ['Recurso adicionado no banco de dados!','']})

