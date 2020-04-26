//for loops
/*for(let i = 0;i < 5; i++){
    console.log('loop:', i);
}

console.log('Finished');*/

/*const name = ['Sheyla','Jhoedy','Artemio'];

for(i = 0;i < name.length; i++){
    //console.log(i, name[i])
    let loop = `<div>${name[i]}</div>`
    console.log(loop);
}*/

//while loops

/*let i = 0;

while(i < 5){
    console.log('loop:', i);
    i++;
}*/

/*const name = ['Sheyla','Jhoedy','Artemio'];
let i = 0;
while(i < name.length){
    console.log(name[i]);
    i++
}*/

//do while loops

/*let i = 5;
do{
    console.log('val of i:', i);
    i++
}while(i < 5);*/

//if statements
/*const age = 25;

if(age > 20){
    console.log('Over 20 years old');
}

const persons = ['Sheyla', 'Jhoedy', 'Adrian', 'Artemio'];

if (persons.length > 3){
    console.log("A lot of people");
}*/

//else if statements

/*const password = 'p@ssword';

if(password.length >= 12){
    console.log('Strong');
}else if(password.length >= 8){
    console.log('Long');
}else{
    console.log('Too short')
}*/

//logical operators - OR || and AND &&

/*const password = 'p@ssword';

if(password.length >= 12 && password.includes('@')){
    console.log('Strong');
}else if(password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log('Long');
}else{
    console.log('Too short')
}*/

//logical NOT (!)

/*let user = false;

if(!user){
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);*/

//break and continue

/*const scores = [80, 20, 15, 0, 90, 100, 5];

for(let i = 0;i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}*/

//switch statements

const grade = 'D';

switch(grade){
    case 'A':
        console.log('You got an A');
        break;    
    case 'B':
        console.log('You got a B');
        break;  
    case 'C':
        console.log('You got a C');
        break;  
    case 'D':
        console.log('You got a D');
        break;  
    case 'E':
        console.log('You got an E');
        break;  
    default:
        console.log('Error');
}

//variables & block escape
let age = 20;
if(true){
    let age = 20;
    let name = 'Sheyla';
    console.log('1st code block: ', age, name);

    if(true){
        let age = 30;
        console.log('2nd code block: ', age);
    }
}

console.log('outside the code block: ', age, name, test);