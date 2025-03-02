console.log("hello");

let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector(".set");

    let ply1=true;

    let winarr=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ];

    boxes.forEach((box)=>{
     box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(ply1){
            box.innerHTML="X";
            ply1=false;
        }else{
            box.innerHTML="O";
            ply1=true;
        }
        box.disable=true;
        for(let i=0;i<winarr.length;i++){
            if(boxes[winarr[i][0]].innerHTML=="X" && boxes[winarr[i][1]].innerHTML=="X" && boxes[winarr[i][2]].innerHTML=="X"){
                console.log("X wins");
                alert("X wins");
                boxes.forEach((box)=>{
                    box.innerHTML="";
                })
            }
            if(boxes[winarr[i][0]].innerHTML=="O" && boxes[winarr[i][1]].innerHTML=="O" && boxes[winarr[i][2]].innerHTML=="O"){
                console.log("O wins");
                alert("O wins");
                boxes.forEach((box)=>{
                    box.innerHTML="";
                })
            }
        }
     })
    })
    
;    


