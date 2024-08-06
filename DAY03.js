// Activity 1


let FirstNum = 3
if (FirstNum>0) {
    console.log(`${FirstNum} is postive`);
}
else if(FirstNum<0) {
    console.log(`${FirstNum} is negative`);
}
else if (FirstNum=0) {
    console.log(`${FirstNum} is equal to zero`);
}

let Age = 19
if (Age>=18) {
    console.log(`eligible to vote`);
} else {
    console.log(`not eligible to vote`);
}

// Activity 2


let num1 = 3
let num2 = 4
let num3 = 5


if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(num1 + " is the largest number.");
    } else {
        console.log(num3 + " is the largest number.");
    }
} else {
    if (num2 >= num3) {
        console.log(num2 + " is the largest number.");
    } else {
        console.log(num3 + " is the largest number.");
    }
}


// Activity 3

// let Day = monday

// switch (Day) {
//     case monday:
// console.log("Monday");
//         break;
// case tuesday:
//     console.log("tuesday");
//     break;
//     case wed:
//         console.log("wed");
//         break;
//         case thur:
//             console.log("thur");
//             break;
//             case fri:
//                 console.log("fri");
//             break;
//     default :
//     console.log("invlaid");
//     break;
// }

let Marks = 7

switch (Marks) {
    case 1:
        console.log("F");
        break;
    case 2:
        console.log("D");
        break;
        case 3:
            console.log("C");
            break;
            case 4:
                console.log("B");
                break;
                case 5:
                    console.log("A");
                    break;
    default:
        console.log("Invalid");
        break;
}

// Activity 4

let number = 4;

let result = (number % 2 === 0) ? "even" : "odd";
console.log("The number " + num + " is " + result + ".");


// Activity 5


let year = 2024; 

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

