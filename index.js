// code your solution here
function saturdayFun(activity = "roller-skate") { //
        return (`This Saturday, I want to ${activity}!`)
    }

    //NOTES
    //use the grouping operator to wrap an entire anonymous function
    //ex: (function () {
    //     console.log("Yet more razzling!")
    // });



    //function expression! assign a variable with a funciton in it
    const mondayWork = function (activity = "go to the office") {
        return (`This Monday, I will ${activity}.`)
    }


    // function outer(greeting, msg = "It's a fine day to learn") { //function declaration
    //     const innerFunction = function (name = 'Dylan', lang = 'Python') { //function expression nested inside a function
    //         return `${greeting}, ${name}! ${msg} ${lang}`
    //     }
    //     //return innerFunction(undefined, 'JavaScript'); //need to pass undefined as the first argument in order to pass default argument
    //     return innerFunction
    // }

    // console.log(outer("Hello")(undefined, 'Javascript'))

//     function introEmail(name) {
//         return function emailBody(message) {
//             return `Hi ${name}, ${message}`
//         }
//     }
// const message1 = 'congrats, you have been accepted into Flatiron School!'
// const message2 = 'unfortunately, you have not been accepted into Flatiron School.'

//     console.log(introEmail('Dylan')(message2))

function wrapAdjective(specialCharacter = '*') {
    return function (param = 'special') {
        return `You are ${specialCharacter}${param}${specialCharacter}!`
    }
}


