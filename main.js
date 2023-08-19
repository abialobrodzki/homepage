alert('Hola, wędrowcze! Przed wyruszeniem w drogę należy zebrać drużynę.');

//NOTATKI
// dodanie zmiennych
const firstName = 'Adrian';
const age = 31; // liczby nie wymagają apostrofów

// kroki w kodzie wykonowane po kolei - z góry do dołu
// przykładowe wywołanie funkcji "alert" - wyświetlenie okna alertu przy załadowaniu strony
// alert('WTF! - znacznik');
// alert("WTF! - cudzysłów"); //można używać podwójnych apostrofów

// przykładowe wywołanie funkcji "console.log" - komunikat wyświetlany w zakładce Konsola (DevTools)
console.log('Siema!');
// console.log('ok');
// wywołanie funkcji z użyciem zmiennych
// console.log(firstName);
// console.log(age);

// tworzenie dłuższych ciągów znaków z użyciem ` (patrz tylda)
console.log(`Nazywam się ${firstName} i mam ${age} lat`);

// zmiana elementu klasy z użyciem JS
const header = document.querySelector('.page-article__header--js');
console.log(header);
header.innerHTML = `Fragment generowany przez JS: ${firstName} czy wiek ${age} lat to dobry czas na zmianę motocykla?😉`;

const description = document.querySelector('.page-article__description--js');
console.log(description);
description.innerHTML = `W 2023 roku gama motocykli ADV jest duża i w średniej kategorii możemy wyróżnić np.:`;

const image0 = document.querySelector('.page-article__image--js0');
image0.src = `main/tenere.png`;
image0.alt = `Zdjęcie z porpozycją motocykla Yamaha Tenere`;

const image1 = document.querySelector('.page-article__image--js1');
image1.src = `main/v-strom.png`;
image1.alt = `Zdjęcie z porpozycją motocykla Suzuki V-Strom`;

const image2 = document.querySelector('.page-article__image--js2');
image2.src = `main/transalp.jpg`;
image2.alt = `Zdjęcie z porpozycją motocykla Honda Transalp`;