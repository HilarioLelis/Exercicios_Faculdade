# Generated by Django 5.2.1 on 2025-05-20 23:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('filme', '0002_filme_is_deleted'),
    ]

    operations = [
        migrations.AddField(
            model_name='filme',
            name='imagem',
            field=models.ImageField(blank=True, null=True, upload_to='filmes/'),
        ),
    ]
