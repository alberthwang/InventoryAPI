# Generated by Django 4.0.4 on 2022-06-08 06:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('InventoryApp', '0003_alter_categories_categoryid_alter_items_itemid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='items',
            name='InsertDate',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='items',
            name='LastUpdated',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
