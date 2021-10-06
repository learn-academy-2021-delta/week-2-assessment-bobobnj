// // // // ASSESSMENT 2: Coding practical questions with Jest
// // // //
// // // // Please read all questions thoroughly
// // // // Pseudo coding is REQUIRED
// // // // If you get stuck, please leave comments to help us understand your thought process
// // // //
// // // // Use test driven development to complete the following questions
// // // // Add appropriate dependencies: $ yarn add jest
// // // //
// // // // Reminder: The test will call your function
// // // // Run the file with the following command: $ yarn jest
// // // //
// // // //// // // --------------------1) Create a function that takes a number as an argument and decides if the number is
// // // //evenly divisble by three or not.
// // // //
// declare function input(number){action of function}
// create conditional if statement (number divided by three and has 0 remainder) to solve input
// create a return (output) informing that number is divisible by three
// create else statement for all other outputs that returns 'definitely not'
// //
// //
function divByTre(number) {

    if(number % 3 === 0) {
      return 'Divisible by three';
  } else {
        return 'definitely not'
    }

  }
  console.log(divByTre(15));
  console.log(divByTre(0));
  console.log(divByTre(-7));
// //
// //
// //
// //   // // // a) Create a test with expect statements for each of the variables provided.
// //   // //
// //   // // var num1 = 15
// //   // // // Expected output: "15 is divisible by three"
// //   // // var num2 = 0
// //   // // // Expected output: "0 is divisible by three"
// //   // // var num3 = -7
// //   // // // Expected output: "-7 is not divisible by three"
// //
// //   //Use -describe- to give easy descriptor for developer to identify and open anonomous ()+>{
// //   //use -it- (or test) to test the unit ('strings for the developer to refer to') ()=>{
// //   //use expect to take the argument of function and pair with jest matcher -built-in-method-
// //   //execute (yarn jest)
  describe('if evenly divided by three',()=>{
    it('should evaluate the input and give an output of satisfactory ot not', ()=>{
        expect(divByTre(15)).toEqual(1)
        expect(divByTre(0)).toBeLessThanOrEqual(1)
        expect(divByTre(-7)).not.toEqual(1)

    })
})
//--------------> test failed for missing input
// //
// // // b) Create the function that makes the test pass.
// //
// // // This part is driving me crazy. I've tried it a hundred ways and watched our lessson again.
// // // I followed all of the error suggstions in jest but it walks me in circles. I've watched other videos and
// // // their methods are similar but different than what we practice in class. I'll dive into that this weekend.
// //
describe('if evenly divided by three',()=>{
    it('should evaluate the input and give an output of is or is not', ()=>{
      let num1 = (15 % 3)
      let num2 = (0 % 3)
      let num3 = (-7 % 3)
        expect(divByTre(15)).toEqual(1)
        expect(divByTre(0)).toBeLessThanOrEqual(1)
        expect(divByTre(-7)).not.toEqual(1)

    })
  })
      const divByTre = (num1) => {
        if(number % 3 === 0) {
              return 'Divisible by three';
          } else {
                return 'definitely not'
            }

           }
      }
// // //
// //
// // // //
// // // //
// // // //
// // // // // --------------------2) Create a function that takes in an array of words and returns an array with
// // // // all the words capitalized.
// // //     //  // Need new function = allCaps
//   // Need to iterate across the array (randomNouns1.maps)
//   // Need to to capitalize along the iteration by using .toUpercase
//   // Need to log new variable
//   // expected results is array returned with all words capitalized.
          const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
          const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"];


          const allCaps1 = randomNouns1.map(word => word.toUpperCase());
          console.log(allCaps1);
          const allCaps2 = randomNouns2.map(word => word.toUpperCase());
          console.log(allCaps2);
// //     //
// // // // // a) Create a test with expect statements for each of the variables provided.
//
// //decsribe ' an array capitalizer' ()=>{
// ////it 'should capitalize array' ()=>{
// ///////expect randomnoun1 to equal allCaps1
// //////expect randomNouns2 to equal allCaps2
//
describe('an array capitalizer', ()=>{
    it('should capitalize all letters in array', ()=>{
      let randomNouns1 = []
      let randomNouns2 = []
      let allCaps1 = []
      let allCaps2 = []
        expect(randomNouns1()).toEqual(allCaps1())
        expect(randomNouns2()).toEqual(allCaps2())
        expect(randomNouns1()).not.toEqual(randomNouns1())
        expect(randomNouns2()).not.toEqual(randomNouns2())
    })

})
//
//   //
//   // To continue with what I said earlier. I need to practice testing. Everthing is bleeding over, lesson to lesson
//   // and now week to week. This is going to sink in soon. Repetition!
// //
// // // //
// // // // var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // // // // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// // // // var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // // // // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
// // // //
// // // //
// // // //
// // // // // b) Create the function that makes the test pass.
//
// // I'm sorry if the information on this one is extra confusing. I tried a million different things to get this right
// // but failed. The amplifying information available uses a different approach then we do in class and I need to dive in more
//
// let randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
// let randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"];
// let allCaps1 = [ 'STREETLAMP', 'POTATO', 'TEETH', 'CONCLUSION', 'NEPHEW' ]
// let allCaps2 = [ 'TEMPERATURE', 'DATABASE', 'CHOPSTICKS', 'MANGO', 'DEDUCTION' ]
//   expect(randomnoun1()).toEqual(allCaps1())
//   expect(randomNouns2()).toEqual(allCaps2())
// })
const arrayCap = (allCaps1, allCaps2) => {
  console.log('all capitalized', allCaps1, allCaps2 );
  let allCaps1 = randomNouns1.map(word => word.toUpperCase())
  let allCaps2 = randomNouns2.map(word => word.toUpperCase());
    return capitalized

// }
// // // //
// // // //
// // // //
// // // // // --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// // //
// // //
// // // //
// // // create function to test vowels - firstVowel()
// // // inside this function use .search for vowels insde of function()
// // // honestly googled how to search for specific values in an index (.search)
// // // let newVariable = (function).search
// // // log newVariable
// // // invoke function
// // // expected output 1, 0, 2, respectively in individual line items
// // //
// // //
        function firstVowel(string){
          let check = string.search(/[a,e,i,o,u,A,E,I,O,U]/)
          console.log(check)
        }
        firstVowel('learn')
        firstVowel('academy')
        firstVowel('challenges')
// //
// // // // // a) Create a test with expect statements for each of the variables provided.
//
describe('index of first aeiou logger')
  it('should find the first index of vowel and log it')
    expect(firstVowel()).toEqual(check())

//
// var vowelTester1 = "learn"
// // Expected output: 1
// var vowelTester2 = "academy"
// // Expected output: 0
// var vowelTester3 = "challenges"
// // Expected output: 2
//
//
//
// b) Create the function that makes the test pass.

  const check = (string) => {
    return string.search((/[a,e,i,o,u,A,E,I,O,U]/)=>{return firstVowel}
  }

// This all feels like a basketball game. Except I'm on the freshman team and Developing is the Pro-league
// I get my layups and hit a basket hear and there but am still just a freshman. I'm going to get this down.
