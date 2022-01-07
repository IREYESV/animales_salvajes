class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;

    }
    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    get img() {
        return this._img;
    }
    set comentarios(nuevo_comentarios) {
        this.comentarios = nuevo_comentarios;
    }
    get sonido() {
        return this._sonido;
    }
}
export class Leon extends Animal {
    rugir() {
        console.log("rugiendo")
    }    
}
export class Lobo extends Animal {
    aullar() {
        console.log("aullando")
    }    
}   
export class Oso extends Animal {
    gruñir() {
        console.log("gruñendo")
    }    
}  
export class Serpiente extends Animal {
    sisear() {
        console.log("siseando")
    }    
} 
export class Aguila extends Animal {
    chillar() {
        console.log("chillando")
    }    
}









