from django.contrib import admin
from .models import Purchase, PurchaseProduct

class PurchaseProductInline(admin.TabularInline):
    model = PurchaseProduct
    extra = 1

@admin.register(Purchase)
class PurchaseAdmin(admin.ModelAdmin):
    list_display = ('id', 'supplier', 'date')
    inlines = [PurchaseProductInline]
