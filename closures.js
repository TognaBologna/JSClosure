var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};


//////////////////PROBLEM 1////////////////////

// Above you're given a function that returns another function which has a closure over the name variable.
// Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

inner();

//////////////////PROBLEM 2////////////////////


var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};


// Above you're given a callFriend function that returns another function.
// Create a makeCall function that when invoked logs  'Calling Jake at 435-215-9248' in your console.

function makeCall() {
  return console.log(callF('435-215-9248'));
};


//////////////////PROBLEM 3////////////////////


/*
  Write a function called makeCounter that makes the following code work properly.
*/

function makeCounter() {
  var counter = 0;
  return function count() {
    counter++;
    return counter;
  }
}

//Uncomment this once you make your function
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//////////////////PROBLEM 4////////////////////


// Inside the function called counterFactory
// return two functions that implement up/down counter.
// The first function is called inc, this function is responsible for incrementing the value once
// The second function is called dec, this function is responsible for decrementing the value by one
// You will need to use the module pattern to achieve this.

function counterFactory(value) {

  function inc() {
    value++;
    return value;
  }
  function dec() {
    value--;
    return value;
  }

  return {
    inc: inc,
    dec: dec
  }
}


counter = counterFactory(10);


//////////////////PROBLEM 5////////////////////


// Inside the motivation function create another function called message that will return 'You're doing awesome, keep it up firstname lastname.'

  function motivation(firstname, lastname){

    var welcomeText = 'You\'re doing awesome, keep it up ';

    // code message function here.
    function message() {
      var message = welcomeText + firstname + ' ' + lastname + '.';
      return message;
    }

    //Uncommment this to return the value of your invoked message function
    return message()

  }

  motivation('Billy', 'Bob'); // 'Your doing awesome keep it up Billy Bob


//////////////////PROBLEM 7////////////////////
// Here we have a for loop that will iterate as long as i is less than or equal to 5. What we need to do is console.log(i)
// So that it logs ( 0 then 1 then 2 then 3, etc). Run this code in your console to see what the output is.


function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    newScope(i);
  }

  function newScope(i) {
    setTimeout(function(){
      console.log(i)
    }, i * 1000)
  }
}
timeOutCounter();
  // To make this code work you will need to create a new scope for every iteration.





//////////////////PROBLEM 8////////////////////
var funcArray = [];

function arrayFunc() {
  for(var i = 0; i < 6; i++) {
    funcArray.push(
      (function (i) {
        return function() {
          return i;
        }
      }
    )(i))
  }
}

arrayFunc();

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5


