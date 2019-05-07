
import { Injectable } from '@angular/core';

@Injectable()
export class AutomovilesService {

  private automoviles: Automovil[] = [

    {
      Marca: "Audi",
      Modelo: "TTS 2.0 TFSI STronic Quattro Coupe",
      Kilometros: "20.000 kms.",
      img: "assets/img/2013 Audi TTS 2.0 TFSI STronic Quattro Coupe.PNG",
      Anio: "2013",
      Transmision: "Automatica",
      Nota: "Venta Al Contado Y Con Financiera",
      Precio: "$22.000.000",
      Region: "Metropolitana"
    },
    {
      Marca: "Toyota",
      Modelo: "Tundra 5.7 Auto Limited 4WD",
      Kilometros: "No especificado",
      img: "assets/img/2015 Toyota Tundra 5.7 Auto Limited 4WD.PNG",
      Anio: "2015",
      Transmision: "Automatica",
      Nota: "Vehículo Con Motor No Funcionando, No Anda, Si Girando",
      Precio: "$9.800.000",
      Region: "Metropolitana"
    },
    {
      Marca: "Audi",
      Modelo: "A3 2.0 TDI S Tronic Progressiv Spe",
      Kilometros: "11.300 kms.",
      img: "assets/img/2017 Audi A3 2.0 TDI S Tronic Progressiv Sp.PNG",
      Anio: "2017",
      Transmision: "Automatica",
      Nota: "No especificado",
      Precio: "$16.900.000",
      Region: "Metropolitana"
    },
    {
      Marca: "Toyota",
      Modelo: "Hilux HILUX 2.4 DX 4X4 FULL.PNG",
      Kilometros: "No especificado",
      img: "assets/img/2017 Toyota Hilux HILUX 2.4 DX 4X4 FULL.PNG",
      Anio: "2017",
      Transmision: "Manual",
      Nota: "No especificado",
      Precio: "$15.490.000",
      Region: "Metropolitana"
    }
  ];

  constructor() {
    console.log("servicio listo para usar")
  }

  getAutosmoviles(): Automovil[] {
    return this.automoviles;
  }

  getAutomovil(idx: string) {
    return this.automoviles[idx];
  }

}

export interface Automovil {
  Marca: string;
  Modelo: string;
  Kilometros: string;
  img: string;
  Anio: string;
  Transmision: string;
  Nota: string;
  Precio: string;
  Region: string;
}
