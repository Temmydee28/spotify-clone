


document.querySelector(".nav-link").innerHTML="DAYS";










const d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var time =h;
console.log(time);
var greetings = document.getElementById('greetings');

if(time >= 12 && time <= 16){
    
    greetings.textContent='Afternoon';
    console.log('afternoon');
}
else if(time >= 0 && time < 12 ){
    greetings.textContent='Morning';
console.log('morning');
}
else if (time > 16 && time <= 23){
    greetings.textContent='Evening';
    console.log('Evening');
}

for (var i = 0; i<document.querySelectorAll(".card-title").length; i++){




document.querySelectorAll(".card-title")[i].addEventListener("click", function(){
//console.log(this.textContent);
 var buttonInnerHtml = this.textContent;
switch (buttonInnerHtml) {
    case "Timeless" :
        var kante = new Audio('music/Davido_Ft_Fave_-_Kante.mp3');
        kante.play();
        break;
    case "Play Boy-Alone":
           var soso = new Audio('music/Omah_Lay_-_Soso.mp3');
          soso.play();
           break;
    case "Love Damini":
           var last  = new Audio('music/Burna_Boy_-_Last_Last_Breakfast_.mp3');
           last.play();
           break;

    case "Playboy":
            var playboy  = new Audio('music/Fireboy-DML-Playboy-New-Song-(TrendyBeatz.com).mp3');
            playboy.play();
            break;

    case "More Love Less Ego":
            var badToMe = new Audio('music/Wizkid-Bad-To-Me-.mp3');
            badToMe.play();
            break;
     case "Black Panther: Wakanda":
                 var liftMeUp  = new Audio('music/Rihanna-Lift-Me-Up-From-Black-Panther-Wakanda-Forever-Music-From-and-Inspired-By.mp3');
                    liftMeUp.play();
                    break;
    default:
        console.log(buttonInnerHtml);
        break;
}


    // var audio = new Audio('music/Davido_Ft_Fave_-_Kante.mp3');
    //  audio.play()
});
}



// document.querySelectorAll(".sound")[i].addEventListener("click",function(){


// 

// })