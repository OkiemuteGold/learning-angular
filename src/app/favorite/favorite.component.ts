import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
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

