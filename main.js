let clickedNum = []

//Selecionar os btns
let btnsNum = document.querySelectorAll(".urna-teclado-num");
console.log(btnsNum);
//adicionando uma função que tras os 
btnsNum.forEach(e => e.addEventListener("click", () =>{
    // return event.target.id[4]
    
    if(clickedNum.length < 2) {
        clickedNum.push(Number(event.target.id[3]))
        console.log(clickedNum);
        if(clickedNum.length === 2) {
            let doisNum = Number(clickedNum.join(""))
            console.log(doisNum);
        }
    }
   
}))
