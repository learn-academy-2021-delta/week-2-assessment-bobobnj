// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
// console.log(cohort.split(""))

// a) Your answer: The split method is exclusive to strings and converts them to single arrays so I expect the output to be
// "D", "e, "l..... you get the picture.

// b) Verify and explain: The output listed below is as expected. Notice even the space has a place. That is because each
// index in the string is converted into an array; even the empty ones.
  ['D', 'e', 'l', 't',
  'a', ' ', '2', '0',
  '2', '1'
]



// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: My expectation is that js will give an error because we have an => without a return call to wait for.
// b) Verify and explain: On Tuesday we learned that every => must be followed by a return. Without this there is no way
// for the funtio to know what to do with the message or name. The corrected code is below
const greeter = (name) => {
  return `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: I'm expecting each number in the array to be multiplied by two and logged in an array.
// b) Verify and explain: According to the syllabus, .maps iterates throgh an array, returning a new one
// without altering the length. In this case we asked .maps to iterate until all numbers within the array are
// successfully multiplied by 2
//                                  Results returned: [ 8, 10, 12, 14, 16 ]

// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer: From what I remember of filter, it will log specifically what you asked for so I expect
// that only the even will display.
// b) Verify and explain: As the syllabus states, .filter returns thruthy values or those that satisfy the
// request. Like .maps, it loops through the entire array but returns a new one of a different length (in this case).
// For S&Giggles I logged the results of the .maps version and it gave an array of true and false statements for each
// index within the array; but thats another conversation.


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: I don't know. There are no parenthesis after Learn (where variable is declared). I know the colors
// are supposed to help but I'm color blind; such is life. I honestly feel like parameters need to be added to the first
//LEARN before we can assign the name George to LearnStudent within the construct of class Learn. Or maybe it's being called
// upon incorrectly log(LearnStudent). If the variable learnStudent became Learn("George"), shouldn't we be calling on that?

// b) Verify and explain: When I logged it, it returned undefined. Clearly LearnStudent was the wrong call. After some trial
// and error I realized that adding parenthesis after Learn was not it. After referring to the syllabus I was reminded that
// classes are like functions (reusable each object in it is independant) and that new variables can gain access to the class.
// I belive I could have added George and pushed in a different cohort and  year if required.

  class Learn {
    constructor(name){
      this.student = name,
      this.cohort = "Delta",
      this.year = 2021
    }
  }
  var learnStudent = new Learn("George")

  console.log(new Learn("George"))
