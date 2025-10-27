from rest_framework import serializers
from .models import Sale, SaleProduct
from products.serializers import ProductSerializer

class SaleProductSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = SaleProduct
        fields = ['product', 'quantity']

class SaleSerializer(serializers.ModelSerializer):
    products = SaleProductSerializer(source='saleproduct_set', many=True, read_only=True)
    total = serializers.SerializerMethodField()

    class Meta:
        model = Sale
        fields = ['id', 'customer', 'date', 'products', 'total']

    def get_total(self, obj):
        return obj.total()
