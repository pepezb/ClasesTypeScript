/*****
 * 
 * INTERFACES
 * 
 */

interface Animal {
   tipo?:string;
   extremidades:number;
   habitat:string;
   alimentacion:string;
   nombre:string;
   reino:string;
}

class carnivoro implements Animal{
    public constructor(
        public nombre:string,public extremidades: number,public habitat:string,public alimentacion:string,public reino:string,public tipo?:string 
    ) { 
        this.tipo = 'Carnivoro';
        this.nombre = nombre;
        this.extremidades = extremidades;
        this.habitat = habitat;
        this.alimentacion = alimentacion;
        this.reino = reino;
    }
    
    display():void{
        let msg:string = `${this.nombre + ' come ' + this.alimentacion + ' y es ' + this.tipo }`;
        console.log(msg);
    }
}

class hervivoro implements Animal{
    public constructor(
         public nombre:string,public extremidades: number,public habitat:string,public alimentacion:string,public reino:string,public tipo?: string
    ) { 
        this.tipo = 'Hervivoro';
        this.extremidades = extremidades;
        this.habitat = habitat;
        this.alimentacion = alimentacion;
        this.reino = reino;
        this.nombre = nombre;
    }
    display():void{
        let msg:string = `${this.nombre + ' come ' + this.alimentacion + ' y es ' + this.tipo }`;
        console.log(msg);
    }
}

let leon = new carnivoro("Leon",4,"Sabana","Cebras y ñus","Felinos");
leon.display();

let manati = new hervivoro("Manati",2,"Lagunas","Hierba y lirios","Mamifero");
manati.display();