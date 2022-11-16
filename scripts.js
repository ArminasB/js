// console.log(Boolean("")); // false
// console.log(Boolean(0));  // false
// console.log(Boolean("a"));  // true
// console.log(Boolean(1));  // true
// console.log(Boolean(-1)); // true

// console.log(Number(true)); // 1
// console.log(Number(false));  // 0


// let x = -3;
// x = -x;
// console.log(x);

// console.log(4 **2);  //kvadratu 16
// console.log(4 ** 1 / 2); //saknis 2

// console.log(7 % 2);  // liekana 1 


// let pirmasZodis = "Vardenis";
// let antrasZodis = "Pavardenis";

// let pilnaFraze = `${pirmasZodis} ${antrasZodis}`;
// let kitaFraze = pirmasZodis + " " + antrasZodis;
// console.log(pilnaFraze === kitaFraze);

// console.log('1' + 2);  //12

// const currentHours = Number(prompt("kiek dabar valandu?"));
// const currentMinutes = Number(prompt("kiek dabar minuciu?"));

// const shouldReduceHour = currentMinutes > 0;

// const additionalHour = Number(shouldReduceHour);

// const isNotToLate = Number(currentHours < 18);

// const hourDifference = (18 - currentHours - additionalHour) * isNotToLate;
// const minuteDifference = (60 - currentMinutes) * additionalHour * isNotToLate;


// a 10
// b -1
// c 1
// d 2
// e 6
// f 9px
// g $45
// h 2 
// i nan
// j "  -9  5"
// k -14
// l 1
/// m un

// let i = 0;
// i += 3;
// console.log(i);

// i++;

// console.log(i);

// ++i;

// console.log(i);

// let y = 0;

// console.log(y++);
// console.log(++y);


// const color = prompt("What color?");

// if (color === "red") {
//     const year = prompt("what year?");
//     if (Number(year) > 2010) {
//         alert("Buy!");
//     } else {
//         const mileage = prompt("what mileage (km) ?");
//         if (Number(mileage) < 50000) {
//             alert("Buy!");
//         } else {
//             alert("Don't buy!");
//         }
//     }
// } else if (color === "yellow") {
//     const make = prompt("what make?");
//     if (make === "ferrari") {
//         alert("Buy!");
//     } else {
//         alert("Don't buy!");
//     }
// } else {
//     alert("Don't buy!");
// }


// const weight = Number(prompt("Koks tavo svoris ?"));
// const heightSquared = Number(prompt("Koks tavo ugis (m)?"))**2;
// const bmi = weight / heightSquared;

// if (bmi < 18.5) {
//     alert(`your bmi is ${bmi}, you are underweight`);
// } else if (bmi < 25){
//     alert(`your bmi is ${bmi}, you are normal`);
// } else if (bmi < 30){
//     alert(`your bmi is ${bmi}, you are overweight`);
// } else {
//     alert(`your bmi is ${bmi}, you are obese`);
// }


// const weight = Number(prompt("koks tavo svoris?"));
// const height = Number(prompt("koks tavo ugis ?"));
// const age = Number(prompt("koks tavo amzius ?"));
// const activityLevel = Number(prompt("koks jusu aktyvumo lygis ? ( 0, 1, 2, 3, 4)"));
// const sex = prompt("kokia tavo lytis? (moteris / vyras)");

// let bmr;
// let dailyCal;

// if (sex === "moteris") {
//     bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
// } else {
//     bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
// }

// if (activityLevel === 0) {
//     dailyCal = bmr * 1.2;
// } else if (activityLevel === 1) {
//     dailyCal = bmr * 1.375;
// } else if (activityLevel === 2) {
//     dailyCal = bmr * 1.555;
// } else if (activityLevel === 3) {
//     dailyCal = bmr * 1.725;
// } else {
//     dailyCal = bmr * 1.9;
// }

// alert(dailyCal);

const budget = prompt("definite budget ? (y/n)");

if (budget === "y") {
    const champion = prompt("Known champion for it?(y/n)");
    if (champion === "y"){
        const clearScope = prompt("Clear project Scope? (y/n)");
        if (clearScope === "y") {
            const timescale = prompt("Achievable Timescalale? (y/n)");
            if (timescale === "y") {
                alert("Go for it.");
            } else {
                alert("Get more time.");
            }
        } else {
            const profit = prompt("Happy to profit? (y/n)");
            if (profit === "y") {
                alert("Cash In");
            } else {
                alert("Explain why it matters");
            }
        }
    } else {
        alert("Leave it alone");
    }
} else  {
    const funding = prompt("Alternative funding? (y/n)")
    if (funding === "y") {
        alert("Sort out funding");
    } else {
        alert("Leave it alone");
    }
}