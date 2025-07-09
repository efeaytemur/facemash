// Kullanılacak resimler (proje klasöründe /images içinde olmalı)
const images = [
    'images/image1.jpeg',
    'images/image2.jpeg',
    'images/image3.jpeg',
    'images/image4.jpeg',
    'images/image5.jpeg',
    'images/image6.jpeg',
    'images/image7.jpeg',
    'images/image8.jpeg',
    'images/image9.jpeg', 
    'images/image10.jpeg',
    'images/image11.jpeg',
    'images/image12.jpeg',
    'images/image13.jpeg'
];

let shownImages = []; // Gösterilen resimleri tutar
let currentImages = [null, null]; // [image1, image2]

function getNextImage(excludeList) {
    const remaining = images.filter(img => !excludeList.includes(img));
    if (remaining.length === 0) return null;
    const randIndex = Math.floor(Math.random() * remaining.length);
    return remaining[randIndex];
}

function loadInitialImages() {
    const img1 = getNextImage(shownImages);
    shownImages.push(img1);

    const img2 = getNextImage(shownImages);
    shownImages.push(img2);

    currentImages[0] = img1;
    currentImages[1] = img2;

    document.getElementById('image1').src = img1;
    document.getElementById('image2').src = img2;
}

function vote(selectedIndex) {
    const keepImage = currentImages[selectedIndex];
    const replaceIndex = selectedIndex === 0 ? 1 : 0;

    let newImage = getNextImage(shownImages);
    if (!newImage) {
        alert("Tüm resimler gösterildi!");
        return;
    }

    shownImages.push(newImage);
    currentImages[selectedIndex] = keepImage;
    currentImages[replaceIndex] = newImage;

    document.getElementById(`image${selectedIndex + 1}`).src = keepImage;
    document.getElementById(`image${replaceIndex + 1}`).src = newImage;
}

// İlk başlat
loadInitialImages();