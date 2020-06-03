import { CribsService } from './../services/cribs.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;
  constructor(
    private http: HttpClient, 
    private cribsService: CribsService
    ) { }

  ngOnInit(): void {
    // // make an http request
    this.http.get('data/cribs.json')
    //.map(res => res.json())
    .subscribe(
      data => this.cribs  = data,
      error => this.error = error.statusText
    );
    // this.cribsService.getAllCribs()
    // .subscribe(
    //   data => this.cribs = data,
    //   error => this.error = error.statusText
    // );
  }

}
