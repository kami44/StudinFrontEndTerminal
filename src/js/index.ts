import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"


interface IStudent{
    id: number
    scannerkey: number
    firstName: string
    lastName: string
    courses:[]
    currentCourse:{
        id:number
        lessonId:number
        lessonStart:string
        lessonEnd:string
        courseName:string
        classRoomName:string
        students:[]
    }
    
}
interface lal{
    scannerkey:number;
    currentLessonTime: Date;
}
let baseUrl: string = "https://studinapifinal.azurewebsites.net/api/";


new Vue({
    el: "#wrapper",
    data:{
        userStudent:{
            id:1,
            scannerkey:1,
            firstName:"",
            lastName:"",
            courses: [],
            currentCourse: {
                id:1,
                lessonId:1,
                lessonStart:"",
                lessonEnd:"",
                courseName:"",
                classRoomName:"",
                students: []
            }
          },
          sendData:{
                Scannerkey:1,
                CurrentLessonTime: new Date(2020, 4, 19, 9, 15, 1, 1);
          }
    },
    methods:{
        GetStudent:function (){
            axios.post<IStudent>(baseUrl+"frontendstudent", this.sendData)
            .then((response: AxiosResponse<IStudent>) => {
                this.userStudent = response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        }
    },
    created()
    {
        this.GetStudent();
    }
})



