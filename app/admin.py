from django.contrib import admin
from .models import Recursos

@admin.register(Recursos)
class RecursoAdmin(admin.ModelAdmin):
    pass