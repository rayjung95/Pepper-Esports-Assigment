# Generated by Django 2.2 on 2019-05-06 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0003_auto_20190422_2336'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todoitem',
            name='due_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
