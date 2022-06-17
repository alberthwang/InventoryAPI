from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from InventoryApp.models import Categories, Items
from InventoryApp.serializers import CategorySerializer, ItemSerializer

from django.core.files.storage import default_storage

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
         

#api for item
@csrf_exempt
def itemApi(request, id=0):
    if request.method == 'GET':
        items = Items.objects.all()
        items_serializer = ItemSerializer(items, many=True)
        return JsonResponse(items_serializer.data, safe=False)
    elif request.method == 'POST':
        item_data = JSONParser().parse(request)
        items_serializer = ItemSerializer(data=item_data)
        if items_serializer.is_valid():
            items_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        item_data = JSONParser().parse(request)
        item = Items.objects.get(ItemId=item_data['ItemId'])
        items_serializer = ItemSerializer(item, data=item_data)
        if items_serializer.is_valid():
            items_serializer.save()
            return JsonResponse("Update Successfully", safe=False)
        return JsonResponse("Failed to Update")
    elif request.method == 'DELETE':
        item = Items.objects.get(ItemId=id)
        item.delete()
        return JsonResponse("Deleted Successfully", safe=False)

#save item barcode file
@csrf_exempt  
def savefile(request):
    file = request.FILES['file']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name)




