import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listLocalidades } from '../mock/localidades';

@Injectable({
    providedIn: 'root'
})
export class ConsultaFiltrosService {


    public headers: Headers = new Headers();

    public getHeaders(res): void {
        this.headers.delete('Authorization');
        this.headers.delete('Content-type');
        this.headers.append('Content-type', 'application/json');

    }

    constructor() { }


    getFiltroBuscarLocalidades() {
        return listLocalidades;
    }

}
