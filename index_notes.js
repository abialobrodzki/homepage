//Przykład zastosowania alarmu
// alert('Hola, wędrowcze! Przed wyruszeniem w drogę należy zebrać drużynę.');

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

// wyświetlenie zawartości elementu h1
const header = document.querySelector('.page-header__heading--js');

console.log(header);

// przykład operacji na elemencie
console.log(header.innerHTML);

header.innerHTML = 'Hej';

header.innerHTML = `Nazywam się ${firstName} i mam ${age} lat`;

// lista opracji na stylach
console.log(header.style);

header.style.color = 'yellow';

// przykład funkcji
function calculate(myNumber) {
    myNumber = myNumber + 3;
    console.log(myNumber);
    return myNumber * 7; // nie jest wyświetlany w konsoli
}
calculate(1);
const result = calculate(2);
console.log(result);

function hello() {
    console.log('hello');
    console.log('hello');
    console.log('hello');
    console.log('hello');
}
hello();
console.log(hello()); // undefined

// fat arrow functions
const calculate2 = (myNumber) => {
    myNumber = myNumber + 3;
    console.log(myNumber);
    return myNumber * 7; // nie jest wyświetlany w konsoli
}
calculate(1);
const result2 = calculate(2);
console.log(result2);

// fat arrow functions - dla jednej zmiennej można skrócić zapis
const calculate3 = myNumber => (myNumber + 3) * 7;
calculate(1);
const result3 = calculate(2);
console.log(result3);

// przykład - obiekt
const deathStar = {
    diameter: 120000, // własność
    fire: (target) => { // metoda
        console.log(`${target} destroyed 💥`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 1000,
    commander: {
        name: 'darth vader'
    }
}
console.log(deathStar);
console.log(deathStar.name);
deathStar.fire(); // undefined
deathStar.fire('Alderaan');
console.log(deathStar['name']);
console.log(deathStar.commander); // odwoływanie się do zagnieżdzonego obiektu
console.log(deathStar.commander.name);
console.log(deathStar.commander['name']);