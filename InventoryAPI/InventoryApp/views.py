from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from InventoryApp.models import Categories, Items
from InventoryApp.serializers import CategorySerializer, ItemSerializer

# Create your views here.

#api for category
@csrf_exempt
def categoryApi(request, id=0):
    if request.method == 'GET':
        categories = Categories.objects.all()
        categories_serializer = CategorySerializer(categories, many=True)
        return JsonResponse(categories_serializer.data, safe=False)
    elif request.method == 'POST':
        category_data = JSONParser().parse(request)
        categories_serializer = CategorySerializer(data=category_data)
        if categories_serializer.is_valid():
            categories_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        category_data = JSONParser().parse(request)
        category = Categories.objects.get(CategoryId=category_data['CategoryId'])
        categories_serializer = CategorySerializer(category, data=category_data)
        if categories_serializer.is_valid():
            categories_serializer.save()
            return JsonResponse("Update Successfully", safe=False)
        return JsonResponse("Failed to Update")
    elif request.method == 'DELETE':
        category = Categories.objects.get(CategoryId=id)
        category.delete()
        return JsonResponse("Deleted Successfully", safe=False)
         




