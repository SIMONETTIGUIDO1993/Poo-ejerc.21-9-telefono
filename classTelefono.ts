export class Telefono{

    private estaPrendido:boolean;
    private bateriaActual: number;

    constructor(paramBateria:number){
        this.bateriaActual = paramBateria;
        this.estaPrendido = false;
    }

    public mandarMensaje():void{
        console.log("mensaje enviado")
    }

    public hacerLlamada():void{
        console.log("llamando")

    }

    public prenderApagar (): void{
        if (this.estaPrendido) 
            this.estaPrendido =false;
            else this.estaPrendido =true;
    }

    public estadoBateria (): number{
        return this.bateriaActual;
    }

}


