//file:///Users/michaeldoyle/coding_projects/quiz/index.html

var qs =[
  {
    question: "hasta la vista baby?",
    choices:  ["Terminator", "Terminator 2", "Kindergarden Cop"],
    correct:  "Teminator"
  },

  {
    question: "I'll Be back",
    choices:  ["Commando", "The Terminator", "Terminator 2 Judgement Day", "Terminator 3 Rise of the Machines"],
    correct:  "The Terminator"
  },

  {
    question: "I'm the famous comedian Arnold Braunschweiger.",
    choices:  ["Twins", "Junior", "Last Action Hero", "Raw Deal"],
    correct:  "Last Action Hero"
  },
{
    question: "hasta la vista baby?",
    choices:  ["Terminator", "Terminator 2", "Kindergarden Cop"],
    correct:  "Teminator"
  },

  {
    question: "I'll Be back",
    choices:  ["Commando", "The Terminator", "Terminator 2 Judgement Day", "Terminator 3 Rise of the Machines"],
    correct:  "The Terminator"
  }];

function quizCtrl ($scope){
  $scope.showCorrect = "";
  $scope.done = false;
  $scope.user = {answer:"",
                 right: 0,
                 wrong: 0
                };
  $scope.index = 0;
  $scope.questions = qs;
  $scope.qCount = qs.length;
  $scope.submit = function(){
    if(this.index < $scope.qCount){
       if(this.user.answer==$scope.questions[$scope.index].correct){
         $scope.user.right++;
         $scope.index++;
         $scope.showCorrect=$scope.questions[$scope.index].correct;

       }else{
         $scope.user.wrong++;
         $scope.index++;
         $scope.showCorrect=$scope.questions[$scope.index].correct;

       }

    }
    if(this.index == $scope.qCount){
      $scope.done=true;
    }
  };
}

