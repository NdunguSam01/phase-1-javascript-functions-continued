// code your solution here
const saturdayFun=(activity="roller-skate")=>
{
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun())
console.log(saturdayFun("clean the house"))

const mondayWork=(activity="go to the office")=>
{
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork())
console.log(mondayWork("work from home"))

const wrapAdjective=(symbol)=>
{
    const returnMessage=(emphatic)=>
    {
        return `You are ${symbol}${emphatic}${symbol}!`
    }
    return returnMessage
}
console.log(wrapAdjective("%")("a dedicated programmer"))
