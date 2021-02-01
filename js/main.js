import { Suo } from './components/Suo.js';
import { Todo } from './components/Todo.js';

const randomUzduotys = new Todo('Random uzduotys');
const namuDarbai = new Todo('Namu darbai');


randomUzduotys.add('Sukurti pirma uzduoti');
namuDarbai.add('Susitvarky Serloko projekta');
namuDarbai.add('Susitvarky Serloko projekta');
namuDarbai.add('Susitvarky Serloko projekta');
randomUzduotys.add('Uzmaisyti tesla');
namuDarbai.add('Susitvarky Serloko projekta');
randomUzduotys.add('Nusiskusti');
namuDarbai.add('Susitvarky Serloko projekta');
namuDarbai.add('Susitvarky Serloko projekta');

console.log(randomUzduotys);
console.log(namuDarbai);

randomUzduotys.summary();
namuDarbai.summary();



const suo1 = new Suo('Prada', 'black');
suo1.greeting();
