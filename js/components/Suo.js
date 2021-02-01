
class Suo {
    constructor (name, color) {
        this.name = name;
        this.color = color;
    }
    
    greeting () {
        const greet = `Hello my name is ${this.name} and my fur is ${this.color}!`;
        console.log(greet);
    }
}
export { Suo }