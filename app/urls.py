from django.urls import path
from app.views import home
from app.api import pegar_dados, pegar_data, carregar_recursos, adicionar_recurso

urlpatterns = [
    path('', home),
    path('api/dados', pegar_dados),
    path('api/data', pegar_data),
    path('api/recursos', carregar_recursos),
    path('api/adicionar-recurso', adicionar_recurso),
]
