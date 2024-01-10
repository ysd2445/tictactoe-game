let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let turn0=true;
let count=0;
const draw=()=>{
    msg.innerText="this game draw";
    msgcontainer.classList.add("hide");
    disableboxes();
}
const winpattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  
  const newgame=()=>{
    count=0;
turn0=true;
enableboxes();
  }
  const resetgame=()=>{
    turn0=true;
    count=0;
    enableboxes();
  }
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("im clicked");
        if(turn0){
            box.innerText="0";
            // box.classList.add("box1");
            // box.classList.remove("box2");

            turn0=false;
        }
        else{
            box.innerText="X";

            // box.classList.add("box2");
            // box.classList.remove("box1");
            turn0=true;   
        }
        box.disabled=true;
        count++;
         let win = checkwinner();
         if (count === 9 && !win) {
            draw();
          }
        
        
    })
})
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        msgcontainer.classList.add("hide")
    }
}
const disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`congratulations,player ${winner} win`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for(pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="" ){
            if(pos1val==pos2val && pos2val==pos3val ){
                // console.log("winner",pos1val);
                showWinner(pos1val);
                return true;
                // msg.innerHTML=`congras ${pos1val} win`;
                // msgcontainer.classList.remove("hide");
                
            }
        }
    }
}
reset.addEventListener("click",newgame)
newbtn.addEventListener("click",newgame)