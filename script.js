const main=document.getElementById('start-page');
const choose=document.querySelector('.choose');
const cross_choose=document.getElementById("choose_cross");
const choosebox=document.querySelector(".choosebox");
const circle_choose=document.getElementById("choose_circle");
const game_button=document.getElementById("start-game-button");
const result=document.querySelector(".result");
    const scorecross=document.getElementById("score_cross");
    const scorecircle=document.getElementById("score_circle");
let choose_option;
let false_option;
let status=false;
let clicks=0;
let winningpiece="";
let circlewin=0;
let crosswin=0;


function choosemanage(e){
status=true;
if(e.dataset.choose==="circle"){
choose_option="circle";
false_option="cross";
}
else{
choose_option="cross";
false_option="circle";
}

console.log(choose_option);
console.log(status);
reset();


}


function changepage(){
    
main.style.display="none";
choose.style.display="flex";
result.style.display="none";
}



function reset(){




    const allBox=document.querySelectorAll('.box');
    allBox.forEach(box=>{box.dataset.assigned="false";
        box.innerHTML="";
    });
    const arrow=document.querySelector(".arrow");
    const status_info=document.querySelector(".status-info");
    main.style.display="flex";
choose.style.display="none";
arrow.innerText="↺";
status_info.innerText="Play again";
result.style.display="none";
clicks=0;
winningpiece="";
}



function boxclick(e){
    



    let choose_sign;
    let false_sign;
if(choose_option=="circle"){

    choose_sign="Ｏ";
    false_sign="✖";
}else{

    choose_sign="✖";
    false_sign="Ｏ";
}

console.log(clicks);
console.log(e.dataset.assigned);
if(status==true && e.dataset.assigned==="false" && winningpiece===""){

    if(clicks%2==0){
        
const newSpan=document.createElement('span');
newSpan.dataset.piece=choose_option;
newSpan.innerText=choose_sign;
e.appendChild(newSpan);
e.dataset.assigned="true";
clicks++;

}
else{
const newSpan=document.createElement('span');
newSpan.dataset.piece=false_option;
newSpan.innerText=false_sign;
e.appendChild(newSpan);
e.dataset.assigned="true";
clicks++

}

}


game_check();


}


function game_check(){
let winningcombo=[1,5,9,3,5,7,4,5,6,2,5,8,1,2,3,3,6,9,7,8,9,1,4,7];
let i,j;
let array=0;


for(i=0;i<8;i++){
let crosscount=[false,false,false];
let circlecount=[false,false,false];    
    for(j=1;j<=3;j++){
        const box=document.querySelector(`[data-boxno="${winningcombo[array]}"]`) ;
if(box.querySelector('span[data-piece="cross"]')){
crosscount[j-1]=true;

}
if(box.querySelector('span[data-piece="circle"]')){
    circlecount[j-1]=true;
}

        array++;
    }
    if(crosscount.every(Boolean)){
winningpiece="cross";
crosswin++;
scorecross.innerText=crosswin;
setTimeout(()=>win(winningpiece),500);

return;
    }
    if(circlecount.every(Boolean)){

winningpiece="circle";
setTimeout(()=>win(winningpiece),500);
    circlewin++;
    scorecircle.innerText=circlewin;
    return;
    }

}    
if(clicks===9&& winningpiece===""){
winningpiece="draw";
setTimeout(()=>win(winningpiece),500);
}
console.log(winningpiece);
}


function win(winner){
const circle_win=document.getElementById("circle_win");
const cross_win=document.getElementById("cross_win");
const draw_condition=document.querySelector(".draw");
main.style.display="none";
result.style.display="flex";
if(winner=="circle"){
    cross_win.style.display="none";
    draw_condition.style.display="none"
    circle_win.style.display="flex";
}
else if(winner=="cross"){
cross_win.style.display="flex";
    draw_condition.style.display="none"
    circle_win.style.display="none";
}
else{
cross_win.style.display="none";
    draw_condition.style.display="flex"
    circle_win.style.display="none";
}

setTimeout(resetwin,2000);



}
function resetwin(){
main.style.display="flex";
result.style.display="none";

}