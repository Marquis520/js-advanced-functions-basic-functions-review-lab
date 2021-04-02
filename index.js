// Your code here
function saturdayFun(a = "roller-skate"){
    return `This Saturday, I want to ${a}!`
}

function mondayWork(b = "go to the office"){
    return `This Monday, I will ${b}.`
}

function wrapAdjective(c = "*"){
    return function(d = "special"){
        return `You are ${c}${d}${c}!`
    }
}

let Calculator = {
    add: function (e , f){
        return e + f;
    } ,
    subtract: function (e , f){
        return e - f;
    } ,
    multiply: function (e , f){
        return e * f;
    } ,
    divide: function (e , f){
        return e / f;
    }
}

function actionApplyer(start, array){
    let h = start
        for (let i = 0; i < array.length; i++){
            h = array[i](h)
        }
        return h
}
