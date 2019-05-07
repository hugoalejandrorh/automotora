import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutomovilesService } from '../../services/automoviles.service';
@Component({
  selector: 'app-automovil',
  templateUrl: './automovil.component.html'
})
export class AutomovilComponent {

  automovil: any = {};


  constructor(private _activatedRoute: ActivatedRoute,
    private _automovilesService: AutomovilesService
  ) {

    this._activatedRoute.params.subscribe(params => {
      this.automovil = this._automovilesService.getAutomovil(params['id']);

    })
  }
}
