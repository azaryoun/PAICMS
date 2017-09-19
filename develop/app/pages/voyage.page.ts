import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Voyage } from './../models/voyage';
import { VoyageService } from './../services/voyage.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'voyage',
  templateUrl: 'html/pages/voyage.page.html'
})
export class VoyagePage implements OnInit {

  public filterControl: FormControl;

  public displayRowId: boolean;

  public headerColumns: string[];

  public voyages: Voyage[];

  constructor(private _voyageService: VoyageService) { }

  ngOnInit() {

    this.filterControl = new FormControl();

    this.filterControl.valueChanges
      .filter(text => text.length > 3)
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(value => {
        console.log(value);
      });

    this.displayRowId = true;

    this.headerColumns = ['voyage', 'vessel', 'Agent name', 'Line name', 'ETA'];

    this.voyages = this._voyageService.getVoyages();



  }



}