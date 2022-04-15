export class CoursesService {
    getCourses () {
        return [
            {
                name: "Course 1",
                desc: "Description of Course 1",
                rating: "4.546",
                students: "25010",
                price: "195.564",
                releaseDate: new Date(2022, 3, 14)
            },
            {
                name: "Course 2",
                desc: "",
                rating: "4.675",
                students: "20200",
                price: "190.295",
                releaseDate: new Date(2022, 3, 12)
            },
            {
                name: "Course 3",
                desc: "Description of Course 3",
                rating: "4.401",
                students: "30230",
                price: "1210.5465",
                releaseDate: new Date(2022, 3, 9)
            },
            {
                name: "Course 4",
                desc: "Description of Course 4",
                rating: "4.9875",
                students: "68230",
                price: "287.99",
                releaseDate: new Date(2021, 3, 25)
            }
        ]
    }
}