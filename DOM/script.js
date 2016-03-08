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
    var newDiv = document.createElement('div');
    var buttonThree = document.createElement('button');
    var textThree = document.createTextNode('Name Button');
    buttonThree.appendChild(textThree);
    buttonThree.onclick = myName;
    document.body.appendChild(buttonThree);
    document.body.appendChild(newDiv);
    buttonThree.className = 'myButton';
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
    var name = String('Thomas Walker');
    var newDiv = document.createElement('div');
    newDiv.appendChild(name);
}    
