import { DecimalPipe } from "@angular/common";

export interface PokemonI{
    id:bigint;
    idSexoM:bigint;
    idSexoH:bigint;
    habilidad:string;
    categoria:string;
    nombre:string;
    peso:DecimalPipe;
    atura:DecimalPipe,
    version1:string;
    version2:string;
}