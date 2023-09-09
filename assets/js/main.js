/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

Infine stampa separatamente i 3 array. */

cars = [
    {
        brand: "Tesla",
        model: "la macchina che si guida sola",
        power: "elettrico",
    },

    {
        brand: "Fiat",
        model: "pandino",
        power: "benzina",
    },

    {
        brand: "Lancia",
        model: "Delta",
        power: "diesel",
    },

    {
        brand: "Fiat",
        model: "500",
        power: "metano",
    },

    {
        brand: "Citroen",
        model: "AX",
        power: "benzina",
    },

    {
        brand: "Ferrari",
        model: "la macchina rossa",
        power: "benzina",
    },

    {
        brand: "Audi",
        model: "Il macchinone",
        power: "metano",
    },

    {
        brand: "Fiat",
        model: "Fiorino",
        power: "metano",
    },

    {
        brand: "Subaro",
        model: "4DR",
        power: "diesel",
    },

    {
        brand: "Mustang",
        model: "il macchinone più costoso",
        power: "benzina",
    }
];

const ArrBenzina = [];
const ArrDiesel = [];
const ArrElettrico = [];
const ArrMetano = [];


cars.filter((car) => {

    if (car.power == "benzina") {

        ArrBenzina.push(car);


    } else if (car.power == "diesel") {

        ArrDiesel.push(car);


    } else if (car.power == "elettrico") {

        ArrElettrico.push(car);

    } else if (car.power == "metano") {

        ArrMetano.push(car);

    }

});

/* console.log(("Benzina =", ArrBenzina));
console.log(("Diesel =", ArrDiesel));
console.log(("Elettrico =", ArrElettrico));
console.log(("Metano =", ArrMetano)); */

/*A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const disneyNames = ["pippo", "PLUTO", "Paperino"];

function capitalize(word) {
    const maiusc = word.charAt(0).toUpperCase();
    const restoParola = word.slice(1).toLowerCase();

    return maiusc + restoParola;

};

console.log(capitalize("fdgfEs"));

const CapitalizedNames = disneyNames.map(nome => {
    const maiusc = nome.charAt(0).toUpperCase();
    const restoParola = nome.slice(1).toLowerCase();
    return maiusc + restoParola;
});

console.log(CapitalizedNames);

/* CORREZIONI */

const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

/* element, index, array (elementi da prendere per l'array) */
for (let i = 0; i < teamMembers.length; i++) {
    const element = teamMembers[i];
    console.log(element);
}

/* Syntax
element, index, array (il forEach me li mette subito a disposizione) */
teamMembers.forEach((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
})
teamMembers.forEach((element, i, my_team) => {
    console.log(element);
    console.log(i);
    console.log(my_team);
})

/* team.forEach(function() {}) */
const cats = [
    { name: 'jerry', color: 'gray' },
    { name: 'felix', color: 'black and white' },
    { name: 'garfield', color: 'orange' }
];

cats.forEach((element) => {
    console.log(`${element.name}'s color is ${element.color}`);
});

cats.forEach((element) => {
    return `${element.name}'s color is ${element.color}`;
});

/* map cycle */
const numeri = [1, 2, 3, 4, 5];
const quadrati = numeri.map((numero) => {
    const sum = numero + 2;
    return sum;
})
console.log(numeri);
console.log(quadrati);

/* filter
semplificazione intermedia */
const numbers = [1, 2, 3, 4, 5];
const pari = numbers.filter((numb, index, array) => {
    if (numb % 2 === 0) {
        return true;
    }
    return false;
});

console.log(pari);

/* single line arrow funcion */
const numbs = numbers.filter(numb => numb % 2 === 0);
console.log(numbs);

/* Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

const cars2 = [
    {
        marca: 'Tesla',
        modello: 'Model 3',
        alimentazione: 'Elettrica'
    },
    {
        marca: 'Rimac',
        modello: 'Nevera',
        alimentazione: 'Elettrica'
    },
    {
        marca: 'Mercedes',
        modello: 'GLC',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Bugatti',
        modello: 'Chiron',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Peugeot',
        modello: '3008',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Lamborghini',
        modello: 'Revuelto',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Ferrari',
        modello: '488 Pista',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Audi',
        modello: 'Q8',
        alimentazione: 'Diesel'
    },
    {
        marca: 'BMW',
        modello: '430i',
        alimentazione: 'Benzina'
    },
    {
        marca: 'BYD',
        modello: 'Seal U',
        alimentazione: 'Elettrica'
    }
];

const diesel = cars2.filter(cars => cars2.alimentazione === 'Diesel')
console.log(diesel);
const benzina = cars2.filter(cars => cars2.alimentazione === 'Benzina')
console.log(benzina);
const others = cars2.filter(cars => cars2.alimentazione !== 'Diesel' && cars2.alimentazione !== 'Benzina')
console.log(others);

/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola. */

/* Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]; */

const names = ['pippo', 'PLUTO', 'Paperino'];
const newStrings = names.map(name => {
    let firstChar = name.charAt(0).toUpperCase();
    let restOfCharsToLower = (name.slice(1)).toLowerCase()
    return firstChar + restOfCharsToLower
});

console.log(newStrings);
const newNames = names.map(name => name.charAt(0).toUpperCase() + (name.slice(1)).toLowerCase());
console.log(newNames);