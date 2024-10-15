/* I need to create a prompt, telling the user to input a 
temperature and that the number will be returned to them
in celcius
- 32) * 5/9;
*/

const convertToCelcius = (farhenheit)=>{
 return ((farhenheit)- 32) * 5/9;
}
const userInput = prompt(`enter temp in FH to return in C`);
const userOutput = convertToCelcius(Number(userInput));

alert(Number.parseInt(userOutput));


// next I need to create a function that will give a description of the temp

const describeTemp = (farhenheit) =>{ 
    let description = ``;
if (farhenheit < 32 ) {
    description = `very cold`;
} else if (farhenheit < 64){
    description = `cold`
}
 else if (farhenheit < 86){
    description = `warm`
 }
 else if (farhenheit < 100){
    description = `hot`
 }
 else if (farhenheit >= 100){
    description = `very hot`
 }
return description
}
alert(describeTemp(userInput));





