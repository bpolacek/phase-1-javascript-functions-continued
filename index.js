// code your solution here
/*function saturdayFun(activity = "roller-skate") {
    console.log(`This Saturday, I want to ${activity}!`);
}*/
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};


function wrapAdjective(flair='*'){
   const innerFunction = function(adjective ='special') {
        return `You are ${flair}${adjective}${flair}!`;
    };
    return innerFunction;
};

/*function outer(greeting, msg = "It's a fine day to learn") {
    // 2
    const innerFunction = function (name, lang = "Python") {
      // 3
      return `${greeting}, ${name}! ${msg} ${lang}`; // 4
    };
    return innerFunction("student", "JavaScript"); // 5
  }*/