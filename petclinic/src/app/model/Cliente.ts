import{Mascota} from './Mascota';
import { from } from 'rxjs';
class Cliente {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    celular: string;
    genero: string;
    nit: string;
    direccion: string;
    rating: number;
    Mascota: Mascota;

    nombreCompleto(): string {
        return this.nombre + " " + this.apellido
    }

    esVip(): boolean {
        return this.rating > 3
    }
}