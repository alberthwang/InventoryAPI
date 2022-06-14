from distutils.command.upload import upload
from django.db import models

# Create your models here.

class Categories(models.Model):
    CategoryId = models.AutoField(primary_key=True, unique=True)
    CategoryName = models.CharField(max_length=150)

    def __str__(self):
        return str(self.CategoryName)
    

class Items(models.Model):
    ItemId = models.AutoField(primary_key=True, unique=True)
    ItemName = models.CharField(max_length=150)
    Category = models.CharField(max_length=150)
    Quantity = models.PositiveSmallIntegerField()
    Details = models.TextField()
    AmazonLink = models.CharField(max_length=150)
    InsertBy = models.CharField(max_length=42)
    InsertDate = models.DateTimeField(auto_now_add=True)
    LastUpdated = models.DateTimeField(auto_now=True)
    Barcode = models.ImageField(upload_to='barcodes/', blank=True)

    def __str__(self):
        return str(self.ItemName)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
