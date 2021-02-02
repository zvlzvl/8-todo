import { Todo } from './components/Todo.js';

const blynai = new Todo('Blynu kepimas');

blynai.add('uzmaisyti tesla');
blynai.add('ijungti kaitlente');
blynai.add('istraukti keptuve');
blynai.add('ipilti tesla i keptuve');
blynai.add('apversti blynus');
blynai.add('isimti blynus');
blynai.add('isjungti kaitlente');

blynai.edit(0, 'isplauti dubeni ir uzmaisyti tesla')

blynai.remove(4);
blynai.taskCompleted(0); 
blynai.taskCompleted(1); 
blynai.taskCompleted(2); 

blynai.summary();

blynai.print();
blynai.printCompletedOnly();
blynai.printNotCompletedOnly();




/*
console.clear();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a);

const aKvadratu = [];

for (let i=0; i < a.length; i++) {
    aKvadratu.push(a[i] * a[i])
}
console.log(aKvadratu);

const bMap = a.map(n => n * n);
console.log(bMap);

const lyginiai = [];
for (let i=0; i < a.length; i++) {
    if (a[i] % 2 === 0){
        lyginiai.push(a[i]);
    }
}
console.log(lyginiai);


const cFilter = a.filter(n => n%2===0);
console.log(cFilter);

const lygyniuKvadratai = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 ===0) {
        lygyniuKvadratai.push(a[i]* a[i]);
    }
}
console.log(lygyniuKvadratai);

const dMapFilter = a.filter(n => n%2===0).map(n => n*n)
console.log(dMapFilter);*/






// difoltine reiksme
/*
console.clear();

function labas(name = 'zmogau') {
    console.log(`Labas, ${name}!`);
}
labas('Petrai')
labas()


function daugyba(a = 1, b =1) {
    return a*b;
}
console.log(daugyba(4, 5));
console.log(daugyba(4));

console.log(daugyba(2, 7));
console.log(daugyba(2));

console.log(daugyba());*/


// arrow functions

/*function suma(a, b) {
    return a + b;
}
    console.log(suma(4, 5));

    const skirtumas = function (a, b) {
        return a - b;
    }
    console.log(skirtumas(4, 5));

    const daugyba = (a, b) => {
        return a * b;
    }
    console.log(daugyba(4, 5));

    
    const dalyba = (a, b) => a / b;
    console.log(dalyba(4, 5));

    const kvadratu = a => a * a;
    console.log(kvadratu(4));*/