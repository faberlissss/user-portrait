let databirth = Number(prompt('Enter your year of birth: '));
let city = prompt('What city do you live in?');
let sport = prompt('What is your favourite sport?');
const currentYear = (new Date).getFullYear()
let age = currentYear - databirth;
if (city === 'Kyiv') {
    country = 'Ukraine';
} else if (city === 'Washington') {
    country = 'USA';
} else if (city === 'London') {
    country = 'England';
} 
if (city === 'Kyiv' || city === 'Washington' || city === 'London') {
    messageofcountry = 'You live in the capital of  ' + country  + ' ;';
} else {
    messageofcountry = 'You live in the   ' + city + ' ;';
}

if (sport === 'Football') {
    messageofsport = '  Cool! Do you want to become Ronaldo?';
} else if (sport === 'Basketball') {
    messageofsport = '  Cool! Do you want to become Michael Jordan?';
} else if (sport === 'Skiing') {
    messageofsport = '  Cool! Do you want to become Franz Klammer?';
}

if (databirth === null || databirth===0 ) {
    alert(messageofcountry + ' Its a pity that you didnt want to enter your(s) data of birth ' + messageofsport);
} else if (city === null) {
    alert('Its a pity that you didnt want to enter your(s) city:( ' + '  Your age: ' + age + ' ;' + messageofsport);
} else if (sport === null) {
    alert(messageofcountry + '  Your age: ' + age + ' ;' + 'Its a pity that you didnt want to enter your(s) favourite sport:( ');
} else {
    alert(messageofcountry + 'Your age: ' + age + ';' + messageofsport);
}

































// if (city === 'Kyiv' || city === 'London' || city === 'Washington' || city===city) {
//     switch (city) {
//         case 'Kyiv':
//             country = 'Ukraine';
//             break;
//         case 'London':
//             country = 'England';
//             break;
//         case 'Washington':
//             country = 'USA';
//             break;
//         default:
//             city === city;
//     }
//     alert('You live in the capital of ' + country)
// }
// if (sport === 'Football' || sport === 'Basketball' || sport === 'Skiing') {
//     switch (sport) {
//         case 'Football':
//             star1 = 'Ronaldo';
//             break;
//         case 'Basketball':
//             star2 = 'Jordan';
//             break;
//         case 'Skiing':
//             star3 = 'Mikel';
//             break;
        
//     }
// }











// let city1 = 'Kyiv';
// let city2 = 'London';
// let city3 = 'Washington';
// let sport1 = 'Football';
// let sport2 = 'Basketball';
// let sport3 = 'Skiing';
// if (city === 'Kyiv' || sport==='Football') {
//     let country = 'Ukraine';
//     // alert('Your age: ' + age + ' ;' + ' You live in the capital of  ' + country);
// } else if (city === 'London') {
//     let country2 = 'England';
//     // alert('Your age: ' + age + ' ;' + ' You live in the capital of ' + country2);
// } else if (city === 'Washington') {
//     let country3 = 'USA';
//     // alert('Your age: ' + age + ' ;' + ' You live in the capital of ' + country3);
// } else if (city === city) {
//     // alert('Your age: ' + age + ' ;' + ' You live in the city ' + city);
// }

// if (sport === 'Football') {
//     let star1 = 'Ronaldo';
//     alert()
// }