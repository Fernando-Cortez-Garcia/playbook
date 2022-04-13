export default MyPokemon = {
    constructor(name) {
        this.name = name;
    },

    sayHello() {
        console.log(`Hi, I'm ${this.name}!`);
    }

}