import { Telefono } from "./classTelefono";
class TelefonoConRadio extends Telefono{
    private frecuenciaActual: number;

    public verFrecuenciaActual():number{
        return this.frecuenciaActual;
    }
}

