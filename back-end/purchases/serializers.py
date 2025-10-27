from rest_framework import serializers
from .models import Purchase, PurchaseProduct
from products.serializers import ProductSerializer
from sales.models import Sale

class PurchaseProductSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = PurchaseProduct
        fields = ['product', 'quantity']

class PurchaseSerializer(serializers.ModelSerializer):
    products = PurchaseProductSerializer(source='purchaseproduct_set', many=True, read_only=True)
    sale_id = serializers.PrimaryKeyRelatedField(source='sale', queryset=Sale.objects.all())
    total = serializers.SerializerMethodField()

    class Meta:
        model = Purchase
        fields = ['id', 'supplier', 'date', 'sale_id', 'products', 'total']

    def get_total(self, obj):
        return obj.total()
