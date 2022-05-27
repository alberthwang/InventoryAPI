from rest_framework import serializers
from InventoryApp.models import Categories, Items

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Categories
        fields=('CategoryId', 'CategoryName')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=Items
        fields=('ItemId', 'ItemName', 'Category', 'Quantity', 'Details', 'AmazonLink', 'InsertBy', 'InsertDate', 'LastUpdated')



            