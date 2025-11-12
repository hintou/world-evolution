from django.db import models

class Recursos(models.Model):
    nome_do_recurso = models.CharField(max_length=50)
    quantidade = models.PositiveIntegerField()
    preco = models.PositiveIntegerField()
    def __str__(self):
        return self.nome_do_recurso
