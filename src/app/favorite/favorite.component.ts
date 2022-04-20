import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  /* ViewEncapsulation prevents style bleeding from point of definition 
    .Emulated emulates the default Shadow Dom encapsulation behavior like .createShadowRoot() in js.
    .Native/ShadowDom uses the browser's native Shadow Dom API.
    .None means don't provide any form of CSS Style encapsulation.. Leads to style bleeding/overflow
   */
  // encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  // we use alias to keep the component stable, incase there is change.
  @Input('is-favorite') // is-favorite is an input alias
  isFavorite: boolean = false;

  @Output('change') change = new EventEmitter(); // change is an output alias

  constructor() { }

  ngOnInit(): void {
  }

  onFavoriteChange() {
    this.isFavorite = !this.isFavorite;

    // for output
    this.change.emit({newValue: this.isFavorite})

    console.log(this.isFavorite);
  }
}

// passing event data---output
export interface onFavoriteChangeEventArgs {
  newValue: boolean,
}

