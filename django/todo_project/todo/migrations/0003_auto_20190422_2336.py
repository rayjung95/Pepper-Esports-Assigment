# Generated by Django 2.2 on 2019-04-22 23:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_auto_20190422_2244'),
    ]

    operations = [
        migrations.AddField(
            model_name='todoitem',
            name='due_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='todoitem',
            name='content',
            field=models.TextField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='todoitem',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
