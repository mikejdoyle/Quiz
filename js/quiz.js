//file:///Users/michaeldoyle/coding_projects/quiz/index.html
function slctrl ($scope){
  $scope.itemlist = [];
  $scope.additem = function(){if($.trim($scope.itemtext)!="")$scope.itemlist.push({text:$scope.itemtext,bought:false});$scope.itemtext = "";}
  $scope.strike = function(item){item.bought?(item.bought=false):(item.bought=true);}
  $scope.clear = function(){
          var oldList = $scope.itemlist;
          $scope.itemlist = [];
          angular.forEach (oldList, function (item){
            if(!item.bought) $scope.itemlist.push(item);
          });
  };
}//end of crtl

function quizctrl ($scope){
$scope.questions =[
  {
    question: "What is 0 + 0?",
    choices:  ["0", "1", "2"],
    correct:  0
  },

  {
    question: "What is 1 + 0?",
    choices:  ["0", "1", "2"],
    correct:  1
  },

  {
    question: "What is 0 + 2?",
    choices:  ["0", "1", "2"],
    correct:  2
  }]
}
