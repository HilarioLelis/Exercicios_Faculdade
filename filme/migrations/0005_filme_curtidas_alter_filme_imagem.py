# Generated by Django 5.2.1 on 2025-05-22 00:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('filme', '0004_alter_filme_imagem'),
    ]

    operations = [
        migrations.AddField(
            model_name='filme',
            name='curtidas',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='filme',
            name='imagem',
            field=models.URLField(blank=True, null=True),
        ),
    ]
