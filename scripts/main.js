container = document.getElementById("container");
let gridblocks;
let griddy;
btnR = document.createElement("button");
btnG = document.createElement("button");
btn = document.createElement("button");
btn.setAttribute("id","reset");
btnR.setAttribute("id","rainbow");
btnG.setAttribute("id","gradient");
btn.textContent = "Reset";
btnR.textContent = "Rainbows!";
btnG.textContent = "Gradual";
document.body.insertBefore(btn,container);
document.body.insertBefore(btnR,container);
document.body.insertBefore(btnG,container);
btn.addEventListener("click",resetti);
btnR.addEventListener("click",rainbow);
btnG.addEventListener("click",Gradual);
function Createdivs(Ncolumns,Nrows){
    let divTotal=Ncolumns*Nrows;
    for(let i =1;i<divTotal+1;i++){
        div = document.createElement("div");
        div.className ="gridblock";
        div.setAttribute("id",`div${i}`);
        container.appendChild(div); 
    }
    let columnP = Math.round((1/Ncolumns)*100);
    let rowP = Math.round((1/Nrows)*100); 
    document.getElementById("container").style.gridTemplateColumns = `repeat(${Ncolumns},${columnP}%)`;
    document.getElementById("container").style.gridTemplateRows= `repeat(${Nrows},${rowP}%)`;
    gridblocks = document.getElementsByClassName("gridblock");
    griddy = Array.from(gridblocks);
}
Createdivs(16,16);
griddy.forEach(block => {
    block.addEventListener("mouseover",() =>{
        block.style.backgroundColor = "black";
    });  
});
function resetti(){
    griddy.forEach(block =>{
        container.removeChild(block)
    })
    let resultP= prompter();
    console.log(resultP)
    Createdivs(resultP[0],resultP[1]);
    griddy.forEach(block => {
        block.addEventListener("mouseover",() =>{
        block.style.backgroundColor = "black";
        });  
    });
}
function rainbow(){
    griddy.forEach(block =>{
        container.removeChild(block)
    })
    let resultP= prompter();
    console.log(resultP)
    Createdivs(resultP[0],resultP[1]);
    griddy.forEach(block => {
        block.addEventListener("mouseover",() =>{
        block.style.backgroundColor = randomColor();
        });  
    });
}
function randomColor(){
    let resultV= Math.floor(Math.random()*7+1)
    switch (resultV) {
        case 1:
            return "violet";
            break;
        case 2:
            return "indigo";
        case 3:
            return "blue";
        case 4:
            return "green";
        case 5:
            return "yellow";
        case 6:
            return "orange";
        case 7:
            return "red";
        default:
            break;
    }
}
function Gradual(){
    griddy.forEach(block =>{
        container.removeChild(block)
    })
    let resultP= prompter();
    console.log(resultP)
    Createdivs(resultP[0],resultP[1]);
    griddy.forEach(block => {
        block.addEventListener("mouseover",() =>{
            let currentOpacity = Number(block.style.backgroundColor.slice(-4, -1));
            if (currentOpacity <= 0.9) {
                block.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                block.classList.add('gray');
            } else if (block.classList == 'gray' && block.style.backgroundColor == 'rgb(0, 0, 0)') {
            return;
        } else {
            block.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
        }
        
        });  
    });
}
function prompter(){
    let Ncolumns = prompt("how many columns? Max 100",16);
    let Nrows = Ncolumns;
    let result=[];
    if (Ncolumns == null|| Nrows == null){
        result.push(16);
        result.push(16);
        return result;
    };
    Ncolumns = parseInt(Ncolumns);
    Nrows = parseInt(Nrows);
    if (isNaN(Ncolumns) || isNaN(Nrows)|| Ncolumns>100||Nrows>100){
        alert("please enter a correct number of columns and rows.");
        return prompter();
    } else {
        result.push(Ncolumns);
        result.push(Nrows);
        console.log(result);
        return result;
    }
}