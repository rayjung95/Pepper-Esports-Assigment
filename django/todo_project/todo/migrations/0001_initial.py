# Generated by Django 2.2 on 2019-04-22 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TodoItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('state', models.TextField()),
                ('date_created', models.DateTimeField(verbose_name='date created')),
                ('content', models.TextField()),
            ],
        ),
    ]
