import { DecimalPipe } from "@angular/common";

export interface ResponseI{
    data:any;
    value:any;
    meta:any;
    dataRow:any;
    EstateException:any;
    totalPaginas:number;
    cantTotalRegistros:bigint;
    paginaActual:number;
    montoTotal:DecimalPipe;
}
