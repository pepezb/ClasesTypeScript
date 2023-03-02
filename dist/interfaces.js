"use strict";
/*****
 *
 * INTERFACES
 *
 */
class carnivoro {
    constructor(nombre, extremidades, habitat, alimentacion, reino, tipo) {
        this.nombre = nombre;
        this.extremidades = extremidades;
        this.habitat = habitat;
        this.alimentacion = alimentacion;
        this.reino = reino;
        this.tipo = tipo;
        this.tipo = 'Carnivoro';
        this.nombre = nombre;
        this.extremidades = extremidades;
        this.habitat = habitat;
        this.alimentacion = alimentacion;
        this.reino = reino;
    }
    display() {
        let msg = `${this.nombre + ' come ' + this.alimentacion + ' y es ' + this.tipo}`;
        console.log(msg);
    }
}
class hervivoro {
    constructor(nombre, extremidades, habitat, alimentacion, reino, tipo) {
        this.nombre = nombre;
        this.extremidades = extremidades;
        this.habitat = habitat;
        this.alimentacion = alimentacion;
        this.reino = reino;
        this.tipo = tipo;
        this.tipo = 'Hervivoro';
        this.extremidades = extremidades;
        this.habitat = habitat;
        this.alimentacion = alimentacion;
        this.reino = reino;
        this.nombre = nombre;
    }
    display() {
        let msg = `${this.nombre + ' come ' + this.alimentacion + ' y es ' + this.tipo}`;
        console.log(msg);
    }
}
let leon = new carnivoro("Leon", 4, "Sabana", "Cebras y ñus", "Felinos");
leon.display();
let manati = new hervivoro("Manati", 2, "Lagunas", "Hierba y lirios", "Mamifero");
manati.display();
