import { Component } from "@angular/core";
import { CoursesService } from "../all-services/courses.service";


@Component({
    selector: 'courses',
    styleUrls: ['./courses.component.css'],
    templateUrl: './courses.component.html'
})

export class CoursesComponent {
    /* Directives */
    viewMode = "grid";
    showCourse = false;

    courseName = "";
    courseDescription = "";
    courseRating = null;
    courseStudents = null;
    coursePrice = null;
    courseDate = "";

    /* Interpolation ------ */
    title = "List of courses";
    
    longText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis error, fugit amet sint commodi aut beatae sunt voluptatem expedita dolor placeat animi dolorum, atque obcaecati vitae maxime minima perferendis alias quidem."

    /* Attribute binding ------ */
    imageUrl = "https://lh3.googleusercontent.com/ogw/ADea4I71wuZ_VObcWF2j-qUldZXjn9BQU6B3iOIBhr0ABg=s32-c-mo";
    colSpan = 2;

    /* Directives -- Loops and Conditionals ------ */
    courses: any;
    service: any;
    constructor(service: CoursesService) {
        this.service = service
        // let service = new CoursesService();
        this.courses = service.getCourses();
    };

    isInvalid() {
        return this.courseName == "" ||
            this.courseDescription == "" ||
            this.courseRating == null ||
            this.courseStudents == null ||
            this.coursePrice == null ||
            this.courseDate == ""
    };

    addCourse() {
        let courseObj = {
            name: this.courseName,
            desc: this.courseDescription,
            rating: this.courseRating,
            students: this.courseStudents,
            price: this.coursePrice,
            releaseDate: this.courseDate,
        }

        // console.log(courseObj);
        
        if (this.isInvalid()) {
            return
        } else {
            this.courses.push(courseObj);

            this.courseName = "";
            this.courseDescription = "";
            this.courseRating = null;
            this.courseStudents = null;
            this.coursePrice = null;
            this.courseDate = "";
        }
    };

    deleteCourse(course: object) {
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    };

    // using trackBy ensures that each time button is clicked to reloadCourse, Angular doesn't reconstruct the <ul> element, but rather track the object based on the id NOT the reference generated
    trackCourse(index: number, course: any) {
        return index? course.id : undefined;
    };

    reloadCourse() {
        // console.log(this.service);
        this.courses = this.service.getCourses()
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