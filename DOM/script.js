//1.
document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    var text = document.createTextNode('Click Me');
    button.appendChild(text);
    button.className = 'myButton';
    button.id = "startButton";
    button.onclick = clickButton;
    document.body.appendChild(button);
    //2.
    var input = document.createElement('input'); 
    input.type = "text";  
    input.id = "inputBox"   
    document.body.appendChild(input);
    var buttonTwo = document.createElement('button');
    var textTwo = document.createTextNode('Click Me Too');
    buttonTwo.appendChild(textTwo);
    buttonTwo.onclick = submitText;
    document.body.appendChild(buttonTwo);
    //3.
    var newBox = document.getElementById('coloredBox');
    newBox.addEventListener('mouseenter', mouseEnter);
    newBox.addEventListener('mouseleave', mouseLeave);
    //4.
    var paragraph = document.createElement('p');
    var sentences = document.createTextNode('This is a paragraph. It is full of words.');
    paragraph.appendChild(sentences);
    paragraph.onclick = clickParagraph;
    document.body.appendChild(paragraph);
    //5.
    var buttonThree = document.createElement('button');
    var textThree = document.createTextNode('Name Button');
    buttonThree.appendChild(textThree);
    buttonThree.onclick = myName;
    document.body.appendChild(buttonThree);
    buttonThree.className = 'myButton';
    //6.
    var friendList = document.getElementById("friends");
    friendList.addEventListener("click", function(){
    var num1 = document.getElementById("list");
    var friends = ["Thomas", "Nick", "Mary", "Melissa", "Jane", "Jerry", "Joe", "Andrew", "Chris", "Brian"];
    for(var i = 0; i < friends.length; i++){
       var num2 = document.createElement("li");
    num2.appendChild(document.createTextNode(friends[i]));
    num1.appendChild(num2);    
    };
    })
});

function clickButton () {
    alert('you clicked the button!');
};

//2.

// var input = document.createElement('input'); 
// input.type = "text";     
// document.body.appendChild(input);
// var buttonTwo = document.createElement('button');
// var text = document.createTextNode('Click Me Too');
// buttonTwo.appendChild(text);
// document.body.appendChild(buttonTwo);
function submitText (){
    var text = document.getElementById('inputBox').value;
    alert(text);
}

//3.
// var newBox = document.getElementById('coloredBox');
// newBox.addEventListener('mouseenter', mouseEnter);
// newBox.addEventListener('mouseleave', mouseLeave);

function mouseEnter(e){
    e.target.style.backgroundColor = 'green';
};

function mouseLeave(e){
    e.target.style.backgroundColor = 'blue';
}

//4.
    // var paragraph = document.createElement('p');
    // var sentences = document.createTextNode('This is a paragraph. it is full of words.');
    // paragraph.appendChild(sentences);
    // paragraph.onclick = clickParagraph;
    // document.body.appendChild(paragraph);
    
function clickParagraph(e){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    e.target.style.color = color;;
}
    
//5.
function myName (){
    var span = document.createElement('span');
    var newDiv = document.createElement('div');
    var name = document.createTextNode('Thomas Walker');
    span.appendChild(name);
    newDiv.appendChild(span);
    document.body.appendChild(newDiv);
}    

//6.
// var friendList = document.getElementById("friends");
//     friendList.addEventListener("click", function(){
//     var num1 = document.getElementById("list");
//     var friends = ["Thomas", "Nick", "Mary", "Melissa", "Jane", "Jerry", "Joe", "Andrew", "Chris", "Brian"];
//     for(var i = 0; i < friends.length; i++){
//        var num2 = document.createElement("li");
//     num2.appendChild(document.createTextNode(friends[i]));
//     num1.appendChild(num2);    
//    };
// })
