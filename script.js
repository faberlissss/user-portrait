let databirth = Number(prompt('Enter your year of birth: '));
let city = prompt('What city do you live in?');
let sport = prompt('What is your favourite sport?');
if (databirth === null || databirth === 0) {
    messageofage = 'Its a pity that you didnt enter your year of birth';
} else {
    const currentYear = (new Date).getFullYear()
    age = currentYear - databirth;
    messageofage = 'Your age:' + age;
}
if (city === 'Kyiv') {
    country = 'Ukraine';
} else if (city === 'Washington') {
    country = 'USA';
} else if (city === 'London') {
    country = 'England';
} 
if (city === 'Kyiv' || city === 'Washington' || city === 'London') {
    messageofcountry = 'You live in the capital of  ' + country + ';';
} else if (city === null) {
    messageofcountry = 'Its a pity that you didnt enter your city';
} else {
    messageofcountry = 'You live in the ' + city + ' ;';
}
if (sport === 'Football') {
    messageofsport = 'Cool! Do you want to become Ronaldo ?';
} else if (sport === 'Basketball') {
    messageofsport = 'Cool! Do you want to become Michael Jordan?';
} else if (sport === 'Skiing') {
    messageofsport = 'Cool! Do you want to become Franz Klammer?';
} else if(sport===null) {
    messageofsport = 'Its a pity that you didnt enter your favorite sport';
}


alert(`${messageofage}\n ${messageofcountry}\n ${messageofsport}`);









































