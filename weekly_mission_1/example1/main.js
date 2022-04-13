//Creación de un objeto con propiedades

let myCar = new Object();
myCar.make = "Ford"; //Guardamos un valor dentro del objeto
myCar.model = "Mustang";
myCar.year = 1969;
console.log(myCar) //imprimimos el objeto

//2 Declaración de un objeto con variables locales y públicas

const myModule = (() => {
    //variables de contextom local
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
    const privateBar = [1, 2, 3, 4]
    const baz = "Soy un valor que va a ser expuesto"

    //Variables para guardar las variables locales
    const exported = {
        publicFoo: "Valor púlico, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
        publicBaz: baz
    }

    //Exposición de variables locales
    return exported

})()

console.log(myModule);