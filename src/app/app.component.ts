import { Component } from '@angular/core';
import { onFavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  post = {
    title: "My Title",
    isFavorite: true
  };

  // using interface instead of just args: boolean or args: {newValue: boolean}... For compiled time checking, intellisense, cleaner code
  onChanged(args: onFavoriteChangeEventArgs) {
    console.log("Favorite changed", args);
  }
}
