from django.db import models
from products.models import Product

class Sale(models.Model):
    customer = models.CharField(max_length=100)
    date = models.DateField(auto_now_add=True)
    products = models.ManyToManyField(Product, through='SaleProduct')

    def total(self):
        return sum(item.product.price * item.quantity for item in self.saleproduct_set.all())

    def __str__(self):
        return f"Sale #{self.id} - {self.customer}"

class SaleProduct(models.Model):
    sale = models.ForeignKey(Sale, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
