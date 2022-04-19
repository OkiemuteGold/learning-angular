import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";


@Component({
    selector: 'courses',
    styleUrls: ['./courses.component.css'],
    template: `
        <!-- Interpolation -->
        <h1 class="my-3">{{ getTitle() }}</h1>
        
        <!-- Attribute binding -->
        <h2 class="my-3">Attribute binding on image</h2>
        <div class="mb-3">
            <img [src]="imageUrl" [alt]="title" [width]="80" [height]="80">
        </div>

        <!-- Directives -- Loops and Conditionals -->
        <h2 class="my-3">Directives -- Loops and Conditionals</h2>
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

        <!-- Events, Class binding and Style binding -->
        <h2 class="my-3">Events, Class binding and Style binding</h2>
        <div class="mb-3" (click)="clickDiv($event)">
            <!-- Class binding and Style binding -->

            <h3 class="my-3">Event to change class and style</h3>
            <!-- Use [class.active]="isActive" or [ngClass]="isActive? 'active': ''" -->
            <button class="btn btn-primary me-1" [class.active]="isActive" [style.backgroundColor]="isActive? 'blue' : 'darkblue'">Save</button>

            <button class="btn btn-danger" [ngClass]="isActive? 'active': ''" [ngStyle]="isActive? style1 : style2" (click)="onSave($event)">Toggle Background Color</button>
        </div>

        <div class="mb-3">
            <input class="me-1" type="text" (keyup)="onKeyUp($event)">

            <!-- Event Filter -->
            <h3 class="my-3">Event Filter</h3>
            <input class="me-1" type="text" (keyup.enter)="onKeyUp2($event)">

            <!-- Template Variables -->
            <input class="me-1" type="text" #inputName (keyup.enter)="onKeyUp3(inputName.value)">
        </div>

        <!-- Two-way Binding -->
        <h2 class="my-3">Two-way Binding</h2>
        <div class="mb-3">
            <!-- method1 -->
            <h3 class="my-3">Method 1</h3>
            <input class="me-1" type="text" [value]="emailInput1" (keyup.enter)="onKeyUp4($event)">
            <span>{{ emailInput1 }}</span>
        </div>
        <div>
            <!-- method2 -->
            <h3 class="my-3">Method 2</h3>
            <input class="me-1" type="text" [(ngModel)]="emailInput2" (keyup.enter)="onKeyUp5()">
            <span>{{ emailInput2 }}</span>
        </div>

        <!-- Pipes --Uppercase, Lowercase, Currency, Decimal (number), Percentage -->
        <h2 class="my-3">Pipes</h2>
        <p class="my-3">Show only the courses that have description</p>
        <ul>
            <span ngClass="courses" *ngFor="let course of courses">
                <li *ngIf="course.desc || course.desc !== ''">
                    <h3>
                        <span ngClass="sub_head">
                            {{course.name | uppercase }}
                        </span>
                    </h3>
                    <p>
                        <span ngClass="sub_head">Description:</span> 
                        {{course.desc | lowercase}}
                    </p>
                    <p>
                        <span ngClass="sub_head">No. of Students:</span> 
                        {{course.students | number}}
                    </p>

                    <hr>
                    <p>
                        <span ngClass="sub_head">Rating:</span> 
                        {{course.rating | number: '1.2-2'}} 
                        <!-- --- int: 1, after decimal__min: 2, max: 2. -->
                    </p>
                    <p>
                        <span ngClass="sub_head">Rating:</span> 
                        {{course.rating | number: '1.1-1'}} 
                        <!-- --- int: 1, after decimal__min: 1, max: 1. -->
                    </p>
                    <p>
                        <span ngClass="sub_head">Rating:</span> 
                        {{course.rating | number: '1.2-4'}} 
                        <!-- --- int: 1, after decimal__min: 2, max: 4. -->
                    </p>
                    <hr>
                    
                    <p>
                        <span ngClass="sub_head">Price:</span> 
                        {{course.price | currency: '$'}}
                        <!-- default reads as --- int: normal, min: 2, max: 2. -->
                    </p>
                    <p>
                        <span ngClass="sub_head">Price:</span> 
                        {{course.price | currency: 'AUD':true:'1.1-1'}}
                        <!-- --- int: 1, after decimal__min: 1, max: 1. -->
                    </p>
                    <hr>

                    <p>
                        <span ngClass="sub_head">Release Date:</span> 
                        {{course.releaseDate | date}}
                    </p>
                    <p>
                        <span ngClass="sub_head">Release Date:</span> 
                        {{course.releaseDate | date: 'fullDate'}}
                    </p>
                    <p>
                        <span ngClass="sub_head">Release Date:</span> 
                        {{course.releaseDate | date: 'shortDate'}}
                    </p>
                    <p>
                        <span ngClass="sub_head">Release Date:</span> 
                        {{course.releaseDate | date: 'dd-MM-yy'}}
                    </p>
                </li>
            </span>
        </ul>

        <!-- Custom Pipe -->
        <h2 class="my-3">Custom Pipe</h2>
        <p>{{longText | summary: 15}}</p>
    `
})

export class CoursesComponent {
    /* Interpolation ------ */
    title = "List of courses";
    longText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis error, fugit amet sint commodi aut beatae sunt voluptatem expedita dolor placeat animi dolorum, atque obcaecati vitae maxime minima perferendis alias quidem."

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