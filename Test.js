let games = ['Roblox', 'Valorant', 'Fortnite'];
games.push('Rocket League');
games.unshift('VR chat');
console.log(games);
let person = {
    firstName: 'John',
    lastName: 'Doe',
    Address: {  //not real adress just for show//
        street: '50 Largo Road',
        city: 'Vatican City',
        state: 'Canaan', 
        country: 'Israel'
    }

};
alert(person.Address.city);
console.log('Hello I live in a country called' + " " + person.Address.country)
let x = `My name is ${person.firstName}. I live in ${person.Address.city}`;
console.log(x);