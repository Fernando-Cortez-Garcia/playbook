const explorers = [{
            name: "Explorer 1",
            exercises_completed: 10,
            rate: 99,
            city: "CDMX",
            stack: [
                "js",
                "c#"
            ],
            missions: {
                onboarding: {
                    isFinished: true,
                    exercisesFinished: true
                },
                frontend: {
                    isFinished: true,
                    exercisesFinished: true
                }
            }
        },
        {
            name: "Explorer 2",
            exercises_completed: 9,
            city: "Veracruz",
            rate: 50,
            stack: [
                "js"
            ],
            missions: {
                onboarding: {
                    isFinished: false,
                    exercisesFinished: false
                },
                frontend: {
                    isFinished: false,
                    exercisesFinished: false
                }
            }
        },
        {
            name: "Explorer 3",
            exercises_completed: 3,
            city: "Sonora",
            rate: 100,
            stack: [
                "elixir"
            ],
            missions: {
                onboarding: {
                    isFinished: true,
                    exercisesFinished: true
                },
                frontend: {
                    isFinished: false,
                    exercisesFinished: false
                }
            }
        }
    ]
    //
    //1.Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach((explorer) => console.log(explorer.name))
    //2._Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach((explorer) => console.log(explorer.stack))
    //3._Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
var newList = explorers.map(
    (explorer) => explorer.stack);
console.log(newList)
    //4._Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
let filterStack = explorers.filter(explore => explore.stack.includes("js"))
console.log(filterStack)
    //5._ Busca el primer explorer que sea de la CDMX, usa FIND
let firsExplore = explorers.find(explore => explore.city === "CDMX")
console.log(firsExplore);
//6._Obtén la suma de todos los exercises_completed, usa REDUCE
let sumExercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log(sumExercises)
    //7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
let isExercisesFinished = explorers.some(explore => explore.missions.frontend.exercisesFinished)
console.log(isExercisesFinished)
    //8._Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
let onbordingFinished = explorers.every(explore => explore.missions.onboarding.isFinished)
console.log(onbordingFinished)