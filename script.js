//GENERADOR DE PERSONAJES DE DUNGEONS AND DRAGONS


//Generamos los primeros datos de nuestro personaje

let nombre = String (prompt("Ingrese el nombre de su personaje"))
let clase = Number (prompt("¿Qué clase es su personaje? \n 1- Bárbaro\n 2- Guerrero\n 3- Explorador \n 4- Mago"))
let clasePersonaje = clase


//Verificamos si los datos son válidos
if (clasePersonaje < 1 || clasePersonaje > 4 || isNaN(clase)){

do {
    alert("El valor ingresado es inválido, intente de nuevo")
    let clase = Number (prompt("¿Qué clase es su personaje? \n 1- Bárbaro\n 2- Guerrero\n 3- Explorador \n 4- Mago"))
    clasePersonaje = clase
}


while (clasePersonaje < 1 || clasePersonaje > 4 || isNaN(clase))
}

let raza = Number (prompt("¿Qué raza es su personaje? \n 1- Humano (+1 a todas las stats) \n 2- Elfo (+2 a Destreza y +1 Inteligencia) \n 3- Enano (+2 a Constitución y +1 a Sabiduria) \n 4- Semiorco (+2 a Fuerza y +1 a Constitución)"))
    razaPersonaje = raza

//Verificamos también para la raza
if (razaPersonaje < 1 || razaPersonaje > 4 || isNaN(raza)){

do {
    alert("El valor ingresado es inválido, intente de nuevo")
    raza = Number (prompt("¿Qué raza es su personaje? \n 1- Humano (+1 a todas las stats) \n 2- Elfo (+2 a Destreza y +1 Inteligencia) \n 3- Enano (+2 a Constitución y +1 a Sabiduria) \n 4- Semiorco (+2 a Fuerza y +1 a Constitución)"))
    razaPersonaje = raza
}
while (razaPersonaje < 1 || razaPersonaje > 4 || isNaN(raza))
}

//Selección de clase y raza

switch(clasePersonaje){
    case 1 :
        clasePersonaje = "Bárbaro"
        break
    case 2 :
        clasePersonaje = "Guerrero"
        break
    case 3 :
        clasePersonaje = "Explorador"
        break
    case 4 :
        clasePersonaje = "Mago"
        break
        
}

switch(razaPersonaje){
    case 1 :
        razaPersonaje = "Humano"
        break
    case 2 :
        razaPersonaje = "Elfo"
        break
    case 3 :
        razaPersonaje = "Enano"
        break
    case 4 :
        razaPersonaje = "Semiorco"
}

alert("Su personaje se llama " + nombre + " y es un " + clasePersonaje + " " + razaPersonaje)

// GENERAMOS STATS

//FUERZA

let fuerza = Number(prompt("Ingrese la stat de FUERZA de su personaje (es un número del 8 al 15)"))
let fuerzaPersonaje = fuerza

// Verificamos stat

if (fuerzaPersonaje < 8 || fuerzaPersonaje > 15 || isNaN(fuerza)){

    do {
        alert("El valor ingresado es inválido, intente de nuevo")
        fuerza = Number(prompt("Ingrese la stat de FUERZA de su personaje (es un número del 8 al 15)"))
        fuerzaPersonaje = fuerza
    }
    
    
    while (fuerzaPersonaje < 8 || fuerzaPersonaje > 15 || isNaN(fuerza))
    }
if (razaPersonaje == "Humano"){
    fuerzaPersonaje = fuerzaPersonaje + 1
}

if (razaPersonaje == "Semiorco"){
    fuerzaPersonaje = fuerzaPersonaje + 2
}

//DESTREZA

let destreza = Number(prompt("Ingrese la stat de DESTREZA de su personaje (es un número del 8 al 15)"))
let destrezaPersonaje = destreza

// Verificamos stat

if (destrezaPersonaje < 8 || destrezaPersonaje > 15 || isNaN(destreza)){

    do {
        alert("El valor ingresado es inválido, intente de nuevo")
        destreza = Number(prompt("Ingrese la stat de DESTREZA de su personaje (es un número del 8 al 15)"))
        destrezaPersonaje = destreza
    }
    
    
    while (destrezaPersonaje < 8 || destrezaPersonaje > 15 || isNaN(destreza))
    }

    if (razaPersonaje == "Humano"){
        destrezaPersonaje = destrezaPersonaje + 1
    }

    if (razaPersonaje == "Elfo"){
        destrezaPersonaje = destrezaPersonaje + 2
    }

//CONSTITUCIÓN

let constitucion = Number(prompt("Ingrese la stat de CONSTITUCIÓN de su personaje (es un número del 8 al 15)"))
let constitucionPersonaje = constitucion

// Verificamos stat

if (constitucionPersonaje < 8 || constitucionPersonaje > 15 || isNaN(constitucion)){

    do {
        alert("El valor ingresado es inválido, intente de nuevo")
        constitucion = Number(prompt("Ingrese la stat de CONSTITUCION de su personaje (es un número del 8 al 15)"))
        constitucionPersonaje = constitucion
    }
    
    
    while (constitucionPersonaje < 8 || constitucionPersonaje > 15 || isNaN(constitucion))
    }

    if (razaPersonaje == "Humano" || razaPersonaje == "Semiorco"){
        constitucionPersonaje = constitucionPersonaje + 1
    }

    if (razaPersonaje == "Enano"){
        constitucionPersonaje = constitucionPersonaje + 2
    }
//INTELIGENCIA

let inteligencia = Number(prompt("Ingrese la stat de INTELIGENCIA de su personaje (es un número del 8 al 15)"))
let inteligenciaPersonaje = inteligencia

// Verificamos stat

if (inteligenciaPersonaje < 8 || inteligenciaPersonaje > 15 || isNaN(inteligencia)){

    do {
        alert("El valor ingresado es inválido, intente de nuevo")
        inteligencia = Number(prompt("Ingrese la stat de INTELIGENCIA de su personaje (es un número del 8 al 15)"))
        inteligenciaPersonaje = inteligencia
    }
    
    
    while (inteligenciaPersonaje < 8 || inteligenciaPersonaje > 15 || isNaN(inteligencia))
    }

    if (razaPersonaje == "Humano"){
        inteligenciaPersonaje = inteligenciaPersonaje + 1
    }

    if (razaPersonaje == "Elfo"){
        inteligenciaPersonaje = inteligenciaPersonaje + 2
    }

//SABIDURIA

let sabiduria = Number(prompt("Ingrese la stat de SABIDURÍA de su personaje (es un número del 8 al 15)"))
let sabiduriaPersonaje = sabiduria

// Verificamos stat

if (sabiduriaPersonaje < 8 || sabiduriaPersonaje > 15 || isNaN(sabiduria)){

    do {
        alert("El valor ingresado es inválido, intente de nuevo")
        sabiduria = Number(prompt("Ingrese la stat de SABIDURÍA de su personaje (es un número del 8 al 15)"))
        sabiduriaPersonaje = sabiduria
    }
    
    
    while (sabiduriaPersonaje < 8 || sabiduriaPersonaje > 15 || isNaN(sabiduria))
    }

    if (razaPersonaje == "Humano" || razaPersonaje == "Enano"){
        sabiduriaPersonaje = sabiduriaPersonaje + 1
    }

//CARISMA

let carisma = Number(prompt("Ingrese la stat de CARISMA de su personaje (es un número del 8 al 15)"))
let carismaPersonaje = carisma

// Verificamos stat

if (carismaPersonaje < 8 || carismaPersonaje > 15 || isNaN(carisma)){

    do {
        alert("El valor ingresado es inválido, intente de nuevo")
        carisma = Number(prompt("Ingrese la stat de CARISMA de su personaje (es un número del 8 al 15)"))
        carismaPersonaje = carisma
    }
    
    
    while (carismaPersonaje < 8 || carismaPersonaje > 15 || isNaN(carisma))
    }

    if (razaPersonaje == "Humano"){
        carismaPersonaje = carismaPersonaje + 1
    }

alert("Sus stats son:\nFuerza: " + fuerzaPersonaje + "\nDestreza: " + destrezaPersonaje + "\nConstitución: " + constitucionPersonaje + "\nInteligencia: " + inteligenciaPersonaje + "\nSabiduría: " + sabiduriaPersonaje + "\nCarisma: " + carismaPersonaje)

//CALCULAMOS LOS MODIFICADORES DE ATAQUE
let modFuerza = (fuerzaPersonaje - 10) / 2
let modDestreza = (destrezaPersonaje - 10) / 2



//MENÚ

let volverMenu = 1

while (volverMenu == 1) {
    let menuPersonaje = Number(prompt("¿Qué desea saber de su personaje?\n 1-Ver hoja con los datos del personaje\n 2-Simular daño de los ataques"))
    let menuEleccion = menuPersonaje

    //Verificamos si los datos son válidos
    if (menuEleccion < 1 || menuEleccion > 2 || isNaN(menuPersonaje)){

        do {
        alert("El valor ingresado es inválido, intente de nuevo")
        menuPersonaje = Number(prompt("¿Qué desea saber de su personaje?\n 1-Ver hoja con los datos del personaje\n 2-Simular daño de los ataques"))
        menuEleccion = menuPersonaje
        }
    
    
        while (menuEleccion < 1 || menuEleccion > 2 || isNaN(menuPersonaje))
        }

    switch(menuEleccion){

        //MOSTRAR HOJA DE PERSONAJE

        case 1 :
            alert("Su personaje se llama " + nombre + " y es un " + clasePersonaje + " " + razaPersonaje + "\n Modificador de ataque con espada= " + (2+Math.floor(modFuerza)) + "\nDaño con espada: dado de 8 + " + Math.floor(modFuerza) + "\n Modificador de ataque con arco= " + (2+Math.floor(modDestreza)) + "\nDaño con arco: dado de 8 + " + Math.floor(modDestreza) + "\n \nSus stats son:\nFuerza: " + fuerzaPersonaje + "\nDestreza: " + destrezaPersonaje + "\nConstitución: " + constitucionPersonaje + "\nInteligencia: " + inteligenciaPersonaje + "\nSabiduría: " + sabiduriaPersonaje + "\nCarisma: " + carismaPersonaje)

            volverMenu = Number(prompt("Presione 1 para volver al menú.\nPresione 2 para salir"))
            volverChoice = volverMenu

            //VERIFICAMOS DATOS

            if (volverChoice < 1 || volverChoice > 2 || isNaN(volverMenu)){

                do {
                alert("El valor ingresado es inválido, intente de nuevo")
                volverMenu = Number(prompt("Presione 1 para volver al menú.\nPresione 2 para salir"))
                volverChoice = volverMenu
                }
            
            
                while (volverChoice < 1 || volverChoice > 2 || isNaN(volverMenu))
                }
            
            if (volverMenu == 2) {
                alert("¡Disfruta de tu campaña!")
            }
            break
        
            //SIMULADOR DE DAÑO CON TIRADA DE DADO

        case 2 :
            let elegirAtaque = Number(prompt("1- Calcular ataque con espada \n2- Calcular ataque con arco"))
            let eleccionAtaque = elegirAtaque
            
            //Verificamos si los datos son válidos
            if (eleccionAtaque < 1 || eleccionAtaque > 2 || isNaN(elegirAtaque)){

            do {
                alert("El valor ingresado es inválido, intente de nuevo")
                elegirAtaque = Number(prompt("1- Calcular ataque con espada \n2- Calcular ataque con arco"))
                eleccionAtaque = elegirAtaque
                }
    
    
                while (eleccionAtaque < 1 || eleccionAtaque > 2 || isNaN(elegirAtaque))
                }

            switch(eleccionAtaque) {
                
                //ATAQUE CON ESPADA

                case 1:
                let salida = ""
                function getRandomInt(max) {
                    return Math.floor(Math.random() * max) +1

                }                     
                for (let i = 1; i < 11; i++) {
                    salida = salida + "ataque " + i + ": " + (Math.floor(modFuerza) + getRandomInt(8)) + "\n"
                }
                alert(salida)
                           
                break   
                    
                case 2:
                 
                //ATAQUE CON ARCO

                let salida1 = ""
                function getRandomInt(max) {
                    return Math.floor(Math.random() * max) +1

                }                     
                for (let i = 1; i < 11; i++) {
                    salida1 = salida1 + "ataque " + i + ": " + (Math.floor(modDestreza) + getRandomInt(8)) + "\n"
                }
                alert(salida1)
                break
                }

                volverMenu = Number(prompt("Presione 1 para volver al menú.\nPresione 2 para salir"))
            volverChoice = volverMenu

            //VERIFICAMOS DATOS

            if (volverChoice < 1 || volverChoice > 2 || isNaN(volverMenu)){

                do {
                alert("El valor ingresado es inválido, intente de nuevo")
                volverMenu = Number(prompt("Presione 1 para volver al menú.\nPresione 2 para salir"))
                volverChoice = volverMenu
                }
            
            
                while (volverChoice < 1 || volverChoice > 2 || isNaN(volverMenu))
                }
            
            if (volverMenu == 2) {
                alert("¡Disfruta de tu campaña!")
            }

                break
            }
        }


        






    




