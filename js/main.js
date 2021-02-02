
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