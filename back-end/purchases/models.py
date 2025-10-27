from django.db import models
from sales.models import Sale
from products.models import Product

class Purchase(models.Model):
    supplier = models.CharField(max_length=100)
    date = models.DateField(auto_now_add=True)
    sale = models.ForeignKey(Sale, on_delete=models.CASCADE, related_name='purchases')
    products = models.ManyToManyField(Product, through='PurchaseProduct')

    def total(self):
        return sum(item.product.price * item.quantity for item in self.purchaseproduct_set.all())

    def __str__(self):
        return f"Purchase #{self.id} - {self.supplier}"

class PurchaseProduct(models.Model):
    purchase = models.ForeignKey(Purchase, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
