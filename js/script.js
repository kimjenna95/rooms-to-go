var productImage = document.getElementById('product-image');
var imageThumbnails = document.getElementsByClassName('img-thumbnail');
for (let thumbnail of imageThumbnails) {
    thumbnail.addEventListener('mouseover', function() {
        var thumbnailSrc = thumbnail.getAttribute('src')
        productImage.setAttribute('src', thumbnailSrc);
    });
    thumbnail.addEventListener('click', function() {
        for (let thumbnail of imageThumbnails) {
            var thumbnailContainer = thumbnail.parentElement;
            thumbnailContainer.classList.remove('active')
        }
        var thumbnailContainer = thumbnail.parentElement;
        thumbnailContainer.classList.add('active')
    });
}