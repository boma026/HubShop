from django.contrib import admin
from .models import Sale, SaleProduct

class SaleProductInline(admin.TabularInline):
    model = SaleProduct
    extra = 1

@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer', 'date')
    inlines = [SaleProductInline]
