from django.db import models

# Create your models here.

class Category(models.Model):
    CategoryId = models.AutoField(primary_key=True)
    CategoryName = models.CharField(max_length=500)
    

class Item(models.Model):
    ItemId = models.AutoField(primary_key=True)
    ItemName = models.CharField(max_length=500)
    Category = models.CharField(max_length=500)
    Quantity = models.IntegerField()
    AmazonLink = models.CharField(max_length=500)
    InsertBy = models.CharField(max_length=20)