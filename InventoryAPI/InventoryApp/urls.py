from django.urls import re_path, path
from InventoryApp import views


urlpatterns=[
    re_path(r'^category[\/]$', views.categoryApi),
    re_path(r'^category/([0-9]+)$', views.categoryApi),
    re_path(r'^item[\/]*$', views.itemApi),
    re_path(r'^item/([0-9]+)$', views.itemApi)
]