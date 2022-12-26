var random_num1=Math.floor(Math.random()*6)+1;
var random_dice_img="dice"+random_num1+".png";
var random_img_src="images/" +random_dice_img;

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",random_img_src);



var randomNum2=Math.floor(Math.random()*6)+1;
var randomImgSrc="images/dice" +randomNum2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc);

if(random_num1>randomNum2){
    document.querySelector("h1").innerHTML="player 1 wins!!";
}
else if(randomNum2>random_num1){
    document.querySelector("h1").innerHTML="player 2 wins!!";
}
else{
    document.querySelector("h1").innerHTML="draw!!";
}