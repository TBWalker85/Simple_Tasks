//1.
$(document).ready(function(){
    $("<button id='firstButton' class='myButton'>Click Me</button>").appendTo('#firstDiv');
    $('#firstButton').click(function() {
        alert('welcome!');
    })

//2.
$('#buttonTwo').click(function(){
    var text = $('#text').val();
    console.log('working');
    alert(text);
});

//3.
$("#coloredBox").mouseenter(function(){
    $("#coloredBox").css("background-color", "green");
}); 
    
$("#coloredBox").mouseleave(function(){
    $("#coloredBox").css("background-color", "blue");
});

//4.
$("#paragraph").click(function(){
    var arr =['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    $(this).css('color', arr[Math.floor(Math.random()* arr.length)]);    
});   
   
 //5.
 $("#numberFive").click(function(){
    $("<span>Thomas Walker</span>").appendTo("#five"); 
 });
    
//6.
$('#numberSix').click(function(){
   var friends = ["Thomas", "Nick", "Mary", "Melissa", "Jane", "Jerry", "Joe", "Andrew", "Chris", "Brian"];
   for(var i = 0; i < friends.length; i++){
       var friendsLi = $("<li></li>").text(friends[i]); 
        $("#list").append(friendsLi);
   }    
});
});