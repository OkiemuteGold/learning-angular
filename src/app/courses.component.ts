import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";


@Component({
    selector: 'courses',
    styleUrls: ['./courses.component.css'],
    templateUrl: './courses.component.html'
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