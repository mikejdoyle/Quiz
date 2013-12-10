//file:///Users/michaeldoyle/coding_projects/quiz/index.html

var qs =[
  {
    question: "Thank you for the cookies. I look forward to tossing them",
    choices:  [" Twins", " The Running Man", " Batman and Robin", " Predator"],
    correct:  "Twins",
    image: "http://unrealitymag.bcmediagroup.netdna-cdn.com/wp-content/uploads/2009/03/devito.jpg"
  },

  {
    question: "Don't disturb my friend, he's dead tired.",
    choices:  [" Last Action Hero", " Commando", " Conan the Barbarian", " Predator"],
    correct:  "Commando",
    image: "http://filmdump.files.wordpress.com/2013/04/commando-1.jpg"
  },

  {
    question: "I'm the famous comedian Arnold Braunschweiger.",
    choices:  [" Twins", " Junior", " Last Action Hero", " Raw Deal"],
    correct:  "Last Action Hero",
    image: "http://www.empireonline.com/images/uploaded/arnold-schwarzenegger-last-action-hero.jpg"
  },

  {
    question: "If I am not me, then who the hell am I?",
    choices:  [" Total Recall", " Terminator 3: Rise of the Machines", " Commando", " The Running Man"],
    correct:  "Total Recall",
    image: "http://cdn.wegotthiscovered.com/wp-content/uploads/Total-Recall-Blu-Review-Pic-2-670x360.jpg"
  },

  {
    question: "Hasta la vista, baby!",
    choices:  [" The Terminator", " Terminator 2 Judgement Day", " Kindergarden Cop", " Commando"],
    correct:  "Terminator 2 Judgement Day",
    image: "http://www.mostlybymotorcycle.com/wp-content/uploads/2012/02/Arnie.jpg"
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
       }else{
         $scope.user.wrong++;
       }
      $scope.showCorrect=$scope.questions[$scope.index].correct;
      if(this.index < $scope.qCount-1){
       $scope.index++;
      }
      else{
        $scope.done=true;
      }
    }

  };
}

