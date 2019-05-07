import { Component, OnInit } from '@angular/core';
import { AutomovilesService, Automovil } from '../../services/automoviles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-automoviles',
  templateUrl: './automoviles.component.html'
})
export class AutomovilesComponent implements OnInit {

  automoviles: Automovil[] = [];

  constructor(private _automovilesService: AutomovilesService,
    private _router: Router) {
  }

  ngOnInit() {
    this.automoviles = this._automovilesService.getAutosmoviles();
    // console.log(this.automoviles);
  }

  verAutomovil(idx: number) {
    this._router.navigate(['/automovil', idx])
  }

}
