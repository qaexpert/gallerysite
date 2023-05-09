from django.shortcuts import render


# Create your views here.
def base_page(request):
    return render( request, 'gallery/base.html' )

def index_page(request):
    return render( request, 'gallery/index.html' )