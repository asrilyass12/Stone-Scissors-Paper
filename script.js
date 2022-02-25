let paper = document.getElementById('1').src;
let scissors = document.getElementById('2').src;
let stone = document.getElementById('3').src;

function randomimg1(){
    var img = new Array("img/paper.png", "img/stone.png", "img/scissors.png");
    var item = img[Math.floor(Math.random()*img.length)];
    document.getElementById('imgrand1').src = item;

    let btnSend1 = document.querySelector('#btnSend1');
    let btnSend2 = document.querySelector('#btnSend2');
        if (btnSend1) {
            btnSend1.setAttribute('disabled', '');
            btnSend2.removeAttribute('disabled','');
            let sc1 = parseInt(document.getElementById('turn').value);
            sc1++;
            document.getElementById('turn').value = sc1;
            document.getElementById('turn1').style.color = "red";
            document.getElementById('turn').style.color = "red";
        }
}

function randomimg2(){
    var img = new Array("img/paper.png","img/scissors.png","img/stone.png");
    var item = img[Math.floor(Math.random()*img.length)];
    document.getElementById('imgrand2').src = item;

    let p1 = document.getElementById('imgrand1').src;
    let p2 = document.getElementById('imgrand2').src;
    let sc1 = parseInt(document.getElementById('s1').value);
    let sc2 = parseInt(document.getElementById('s2').value);

    if((p1 == scissors && p2 == scissors)  || (p1 == paper && p2 == paper) || (p1 == stone && p2 == stone)){
        document.getElementById('res').innerHTML = "draw";
    }else if((p1 == scissors && p2 == paper)  || (p1 == paper && p2 == stone) || (p1 == stone && p2 == scissors)){
        document.getElementById('res').innerHTML = "player 1 win";
        sc1++;
        document.getElementById('s1').value = sc1;
    }else if((p2 == scissors && p1 == paper)  || (p2 == paper && p1 == stone) || (p2 == stone && p1 == scissors)){
        document.getElementById('res').innerHTML = "player 2 win";
        sc2++;
        document.getElementById('s2').value  = sc2;
    }

    let btnSend2 = document.querySelector('#btnSend2');
    let again = document.querySelector('#again');
    if (btnSend2) {
        btnSend2.setAttribute('disabled', '');
        again.removeAttribute('disabled', '');
        document.getElementById('turn1').style.color = "#fff";
        document.getElementById('turn').style.color = "#fff";
    }
}

function playagain(){
    document.getElementById('res').innerHTML = "vs"
    document.getElementById('imgrand1').src = "img/point.jpg";
    document.getElementById('imgrand2').src = "img/point.jpg";

    let again = document.querySelector('#again');
    if (again) {
        btnSend1.removeAttribute('disabled', '');
        let sc1 = parseInt(document.getElementById('turn').value);
            sc1--;
            document.getElementById('turn').value = sc1;
            document.getElementById('turn1').style.color = "green";
            document.getElementById('turn').style.color = "green";
    }
}