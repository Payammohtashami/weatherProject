// Image
import pic1 from "../assets/image/LeftSection/1.png"
import pic2 from "../assets/image/LeftSection/2.png"
import pic3 from "../assets/image/LeftSection/3.png"
import pic4 from "../assets/image/LeftSection/4.png"
import pic5 from "../assets/image/LeftSection/5.png"
import pic6 from "../assets/image/LeftSection/6.png"
import pic7 from "../assets/image/LeftSection/7.png"
import pic8 from "../assets/image/LeftSection/8.png"
import pic9 from "../assets/image/LeftSection/9.png";
import pic10 from "../assets/image/LeftSection/10.png"
import pic11 from "../assets/image/LeftSection/11.png"
import pic12 from "../assets/image/LeftSection/12.png"

export function WeekDays() {
    const day = new Date().getDay()
    switch (day) {
        case 0:
            return "Sun"
            case 1:
            return "Mon"
            case 2:
            return "Tue"
            case 3:
            return "Wed"
            case 4:
            return "Thu"
            case 5:
            return "Fri"
            case 6:
            return "Sat"
            default:
            return "Invalid Input"
    }
    }


export function Month() {
    const month = new Date().getMonth()
    switch (month) {
        case 0:
        return "Jan"
        case 1:
        return "Feb"
        case 2:
        return "Mar"
        case 3:
        return "Apr"
        case 4:
        return "May"
        case 5:
        return "Jun"
        case 6:
        return "Jul"
        case 7:
        return "Aug"
        case 8:
        return "Sep"
        case 9:
        return "Oct"
        case 10:
        return "Nov"
        case 11:
        return "Dec"
        default:
        return "Invalid Input"
    }
    }
export function hour(){
    const hour = new Date().getHours()
    let min = new Date().getMinutes()
    if(min < 10){
        min = `0${min}`
    }
    return `${hour} : ${min}`
}
export function dayTime(){
    const hour = new Date().getHours()
    let mid = ""
    if(0 <= hour & hour < 6 ){
        mid = "Midnight"
    }
    if(7 <= hour & hour < 12){
        mid = "Morning"
    }
    if(12 <= hour & hour < 18){
        mid = "Afternoon"
    }
    if(18 <= hour & hour < 20){
        mid = "Sunset"
    }
    if(20 <= hour & hour < 23){
        mid = "Night"
    }
    return mid
}
export const setMood = item => {
    switch(item) {
        case "clear sky":
            return pic1
        case "overcast clouds":
            return pic3;
        case "mist":
            return pic4
        case "light intensity shower rain":
            return pic5
        case "shower rain":
            return pic6
        case "broken clouds":
            return pic8
        case "light snow":
            return pic8
        case "shower snow":
            return pic8
        case "moderate rain":
            return pic10
        default:
            return pic1
    }
}