# Generated by Django 4.0.4 on 2022-06-07 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('InventoryApp', '0002_rename_category_categories_rename_item_items'),
    ]

    operations = [
        migrations.AlterField(
            model_name='categories',
            name='CategoryId',
            field=models.AutoField(primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='items',
            name='ItemId',
            field=models.AutoField(primary_key=True, serialize=False, unique=True),
        ),
    ]
