//file:///Users/michaeldoyle/coding_projects/quiz/index.html

var qs =[
  {
    question: "Hasta la vista, baby!",
    choices:  ["The Terminator", "Terminator 2 Judgement Day", "Kindergarden Cop", "Commando"],
    correct:  "Terminator 2 Judgement Day"
  },

  {
    question: "Don't disturb my friend, he's dead tired.",
    choices:  ["Last Action Hero", "Commando", "Conan the Barbarian", "Predator"],
    correct:  "Commando"
  },

  {
    question: "I'm the famous comedian Arnold Braunschweiger.",
    choices:  ["Twins", "Junior", "Last Action Hero", "Raw Deal"],
    correct:  "Last Action Hero"
  },

  {
    question: "If I am not me, then who the hell am I?",
    choices:  ["Total Recall", "Terminator 3: Rise of the Machines" "Commando", "The Running Man"],
    correct:  "Total Recall"
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

