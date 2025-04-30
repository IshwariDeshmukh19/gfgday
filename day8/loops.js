let myName="ishwari"
let age=21
let city="pune"
console.log("my name is "+ myName+" my age is "+ age+" i live in "+ city)
//console.log('my name is ${myName} I live in ${city} and  my age is ${age}')

console.log("*************")
for(i=1; i<6; i++)
{
    console.log(i + " hello")
}
//console.log("*************table of 2*************")

/*let n = 2;
for (let i = 1; i <= 10; ++i){
    console.log(n + " * " + i +" = " + n * i);
}
*/
console.log("------------------------------------------")
for(i=2;i<6;i++){
    for(j=1;j<11;j++)
    {
        console.log( i + " X " + j+ " = "+ i*j)
    }
    console.log("********************")
}


let speed =40
while( speed < 50)
{
    speed +=4
}
console.log(speed)
