import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
// import { FormsModule } from '@angular/forms';


@Component({
    selector: 'courses',
    template: `
        <!-- Interpolation -->
        <h1 class="my-3">{{ getTitle() }}</h1>
        
        <!-- Attribute binding -->
        <div class="mb-3">
            <img [src]="imageUrl" [alt]="title" [width]="80" [height]="80">
        </div>

        <!-- Directives -- Loops and Conditionals -->
        <ul>
            <li *ngFor="let course of courses">
                {{ course.name }} <br>
                <span *ngIf="course.desc">
                    {{ course.desc}}
                </span>
            </li>
        </ul>

        <table class="mb-3">
            <tr>
                <td [attr.colspan]="colSpan">JavaScript Development</td>
                <td [attr.colspan]="colSpan">Python Development</td>
            </tr>
        </table>

        <!-- Events -->
        <div class="mb-3" (click)="clickDiv($event)">
            <!-- Class binding and Style binding -->

            <!-- Use [class.active]="isActive" or [ngClass]="isActive? 'active': ''" -->
            <button class="btn btn-primary me-1" [class.active]="isActive" [style.backgroundColor]="isActive? 'blue' : 'darkblue'">Save</button>

            <button class="btn btn-danger" [ngClass]="isActive? 'active': ''" [ngStyle]="isActive? style1 : style2" (click)="onSave($event)">Save</button>
        </div>

        <div class="mb-3">
            <input class="me-1" type="text" (keyup)="onKeyUp($event)">

            <!-- Event Filter -->
            <input class="me-1" type="text" (keyup.enter)="onKeyUp2($event)">

            <!-- Template Variables -->
            <input class="me-1" type="text" #inputName (keyup.enter)="onKeyUp3(inputName.value)">
        </div>

        <!-- Two-way Binding -->
        <div class="mb-3">
            <!-- method1 -->
            <input class="me-1" type="text" [value]="emailInput1" (keyup.enter)="onKeyUp4($event)">
            <span>{{ emailInput1 }}</span>
        </div>
        <div>
            <!-- method2 -->
            <input class="me-1" type="text" [(ngModel)]="emailInput2" (keyup.enter)="onKeyUp5()">
            <span>{{ emailInput2 }}</span>
        </div>
    `
})

export class CoursesComponent {
    /* Interpolation ------ */
    title = "List of courses";

    /* Attribute binding ------ */
    imageUrl = "https://lh3.googleusercontent.com/ogw/ADea4I71wuZ_VObcWF2j-qUldZXjn9BQU6B3iOIBhr0ABg=s32-c-mo";
    colSpan = 2;

    /* Directives -- Loops and Conditionals ------ */
    courses: any;
    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    };

    getTitle() {
        return this.title;
    };

    /* Class binding ------ */
    isActive = true;

    /* Style binding ------ */
    style1 = {
        backgroundColor: "#a52834",
        color: "white",
    }    
    style2 = {
        backgroundColor: "white",
        color: "#a52834",
    }    

    /* Events ------ */
    clickDiv(evt: any) {
        console.log("Div element clicked", evt);
    };

    // prevent event bubbling to parent element
    onSave(evt: any) {
        evt.stopPropagation();

        this.isActive = !this.isActive;
        console.log("Button was clicked", evt);
    };

    /* Event Filter ------ */
    onKeyUp(evt: any) {
        if(evt.keyCode === 13) {
            console.log(
                `${evt.key} key was pressed.`,
                `Value is: ${evt.target.value}.`
            );

            evt.target.value = "";
        }
    }
    onKeyUp2(evt: any) {
        console.log("Input2: Enter was pressed");
        evt.target.value = "";
    }

    /* Template Variables ------ */
    onKeyUp3(name: any) {
        console.log("Input3 value: " + name);
    }

    emailInput1 = "test email1";
    emailInput2 = "test email2";
    /* Two-way Binding ------ */
    onKeyUp4(evt: any) {
        this.emailInput1 = evt.target.value;
        console.log("test email1 value: " + this.emailInput1);
    }
    onKeyUp5() {
        console.log("test email2 value: " + this.emailInput2);
    }
}