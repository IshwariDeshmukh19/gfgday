function add(x,y)
{
    return x+y
}

function mult(a,b)
{
    return a*b

}
function sub(a,b)
{
    return a-b
}
console.log(mult(7,3))

module.exports={
    addition : add,
    mulitply : mult,
    subt : sub

}