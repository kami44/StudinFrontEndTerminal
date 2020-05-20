
/*import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"
interface IStudent{
    id: number;
    firstName: string;
    lastName: string;
    attendancy: boolean;
}
interface lol{
    id:number;
    currentLessonTime: Date;
}
interface ITeacher{
    courses:[
        {id:number; name:string;}
    ]
    firstName:string;
    lastName:string;
    currentCourse:{
        id:number;
        name:string;
        students:[
            {id:number;firstName:string;lastName:string;attendancy:boolean;}
        ]
    }
}
interface IUserLesson{
    id:number
    fkusers:number
    fklessons:number
    checkedout:boolean
    minutesStayed:number
    minutesLate:number
}
interface ICourse{
    id:number
    name:string
    fkusers:number
}
let baseUrl: string = "https://studinapifinal.azurewebsites.net/api/";

let buttonwrap: HTMLDivElement = <HTMLDivElement> document.getElementById("buttonwrap");*/
interface IStudent{
    id: number;
    scannerkey: number;
    firstName: string;
    lastName: string;
    
}
let buttonwrap: HTMLDivElement = <HTMLDivElement> document.getElementById("buttonwrap");

new Vue({
    el: "#wrapper",
    data:{
        userStudent:{
            id:1,
            scannerkey:1,
            firstName:"Patrick Poul",
            lastName:"Nielsen",
            courses: [
                {id:1, name:"Programmering"},
                {id:2, name:"Technology"},
                {id:3, name:"Systemudvikling"},
            ],
            currentCourse: {
                id:1,
                lessonId:1,
                lessonStart:"9.00",
                lessonEnd:"9.45",
                courseName:"lal",
                classRoomName:"Lokale a",
                students: []
            }
          },
    }
})



