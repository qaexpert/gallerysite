from django.shortcuts import render

from .models import Product


# Create your views here.
def base_page(request):
    return render( request, 'gallery/base.html' )


def index_page(request):
    return render( request, 'gallery/index.html' )


def product_list(request):
    products = Product.objects.all()
    context = {'products': products}
    return render( request, 'gallery/product_list.html', context )
