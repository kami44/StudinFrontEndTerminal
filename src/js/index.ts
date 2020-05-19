
/*interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user);*/
interface IStudent{
    id: number;
    firstName: string;
    lastName: string;
    
}
let buttonwrap: HTMLDivElement = <HTMLDivElement> document.getElementById("buttonwrap");

new Vue({
    el: "#wrapper",
    data:{
        userStudent:{
            courses: [
                {id:1, name:"Programmering Lokale A"},
                {id:2, name:"Technology Lokale B"},
                {id:3, name:"Systemudvikling Lokale C"},
            ],
            firstName:"Lal",
            lastName:"john",
            currentCourse: {
                id:1,
                name:"Programmering Lokale A",
                time:"Kl. 09.00",
                
            students: [
                {id:1, firstName:"Patrick Poul", lastName:"Nielsen"}
            ],
            
 
          }
        },

    }
})



