# -*- coding: utf-8 -*-
from django.db import models


class Product( models.Model ):
    name = models.CharField( max_length=255, verbose_name="Наименование" )
    sort = models.CharField( max_length=255, verbose_name="Сорт" )
    color = models.CharField( max_length=255, verbose_name="Цвет" )
    supplier = models.CharField( max_length=255, verbose_name="Поставщик" )
    price = models.DecimalField( max_digits=10, decimal_places=2, verbose_name="Цена" )
    discount = models.DecimalField( max_digits=10, decimal_places=2, verbose_name="Скидка" )
    summa = models.IntegerField( verbose_name="Сумма" )

    def __str__(self):
        return self.name
