import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  comment: string = "";

  log(firstName: any) {
    console.log(firstName);
  }

  submit(f: any) {
    console.log(f);
    this.comment = f.value.comment;
  }

  ngOnInit(): void {
  }

}
