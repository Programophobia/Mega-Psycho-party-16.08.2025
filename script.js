var carouselEl = document.getElementById("carousel");
var carouselObj = new JPCarousel(carouselEl);
var carouselObj = JPCarousel.getObject(document.getElementById("carousel"));
carouselObj.setActive(false); // Wyłącza karuzelę
var index = carouselObj.getCurrentIndex(); // Pobiera aktualny indeks
