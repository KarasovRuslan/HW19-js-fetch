let listUrl = 'https://jsonplaceholder.typicode.com/albums';
let imgUrl = 'https://jsonplaceholder.typicode.com';
let imgList = document.getElementById('imgList');
let list = document.getElementById('list');
let listStart = 1;

async function getAlbumList() {
    let albums = await fetch(`${listUrl}`);
    return albumsArr = await albums.json();
};

async function getImages(id) {
    let images = await fetch(`${imgUrl}/photos?albumId=${id}`);
    return imagesArr = await images.json();
};

function showAlbumList(albumsArr) {
    list.innerHTML = albumsArr.map(item => {
        let li = `<li><a href name=${item.id}>album №${item.id}</a><p>${item.title}</p></li>`;
        return li;
    }).join('');
};

function showImages(imagesArr) {
    imgList.innerHTML = imagesArr.map(img => {
        let image = `<img src="${img.url}"></img>`;
        return image;
    }).join('');
};

getAlbumList().then((albumsArr) => showAlbumList(albumsArr));
getImages(listStart).then((imagesArr) => showImages(imagesArr));

list.addEventListener('click', (e) => {
    e.preventDefault();
    getImages(e.target.name).then((imagesArr) => showImages(imagesArr));
});