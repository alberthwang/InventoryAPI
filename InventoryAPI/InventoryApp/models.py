from django.db import models

# Create your models here.

class Categories(models.Model):
    CategoryId = models.AutoField(primary_key=True)
    CategoryName = models.CharField(max_length=150)

    def __str__(self):
        return str(self.name)
    

class Items(models.Model):
    ItemId = models.AutoField(primary_key=True)
    ItemName = models.CharField(max_length=150)
    Category = models.CharField(max_length=150)
    Quantity = models.PositiveSmallIntegerField()
    Details = models.TextField()
    AmazonLink = models.CharField(max_length=150)
    InsertBy = models.CharField(max_length=42)
    InsertDate = models.DateField()
    LastUpdated = models.DateTimeField()

    def __str__(self):
        return str(self.name)