import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model'

@Injectable({
  providedIn: 'root'
})
export class WisheService {

  listas: Lista[] = [];

  constructor() { 
    
    
     const lista1 = new Lista('recolectar piedras del infinito');
     const lista2 = new Lista('heroes a desaparecer');

     this.listas.push(lista1,lista2);

     
  }
}
