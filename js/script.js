/* Challange1: Your age in Days  */
function ageindays() {
    let birthyear = prompt ("What is your birth year");
    let ageindays =  (2020 - birthyear)*365;
    let ageinyear = ageindays/365;
    
    let h1 = document.createElement('h2');
    let result = document.createTextNode("You are " + ageinyear + " old.");
    h1.setAttribute('id','age_final');
    h1.appendChild(result);
  

    let element = document.getElementById("flex-box-container-1-result");
    element.appendChild(h1);
    //console.log(ageinyear)
}

function reset () {
    document.getElementById('flex-box-container-1-result').innerHTML = '';
}

function generatepc() {
    var img = document.createElement('img');
    var div = document.getElementById('pc-gen-div');
    img.src='laptop.png';
    div.appendChild(img)
}

function itementer() {
    var input = document.getElementById("myinput").value;
    
    var li = document.createElement("li");
    var t = document.createTextNode(input);
    li.appendChild(t);

    var span = document.createElement("SPAN");
    var txt_span = document.createTextNode ("\u00D7");
    span.appendChild(txt_span);
    span.className="close";
    span.id= "close";
    li.appendChild(span);
    
    
    if (input === ''){
        alert ("Please Enter a item");
    } else {
        document.getElementById("list").appendChild(li)
        }
    var close = document.getElementsByClassName("close");
    for (var i =0  ;  i < close.length ; i++){
        close[i].onclick = function(){
            this.parentElement.style.display = "none";
        }
    }


    document.getElementById("myinput").value = "";
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

    
function reset() {
    document.getElementById("container-3-result").innerHTML = '';
}