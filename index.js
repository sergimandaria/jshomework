let gameopen = document.querySelector(".parent")
let gamebutton = document.querySelector(".mainbutton")

let rock = document.querySelector ("#js-click")
let paper = document.querySelector ("#js-click2")
let scissors = document.querySelector ("#js-click3")

let numberhuman = document.querySelector("#numberhuman")
let numbercomputer = document.querySelector("#numbercomputer")

let rockhuman = document.querySelector(".rockhuman")
let paperhuman = document.querySelector(".paperhuman")
let scissorshuman = document.querySelector(".scissorshuman")

  let rockcomputer = document.querySelector(".rockcomputer")
  let papercomputer = document.querySelector(".papercomputer")
  let scissorscomputer = document.querySelector(".scissorscomputer")

  let gameover = document.querySelector("#gamefinish")
  

  gamebutton.addEventListener("click", () => {
     gameopen.style.display = "block";
     gamebutton.className = "addclick"
  }

  ) 

  const ramdomComp = () => {
     let game = [rockcomputer,papercomputer,scissorscomputer]
     let randomNum = Math.floor(Math.random() * game.length);
     let randomWord = game[randomNum]
         for (let i = 0; i < 3;++i) {
          if (i != randomNum ) {
          game[i].style.display = "none";
         }
       }
        randomWord.style.display = "block";
        return randomNum;
  }

rock.addEventListener("click",() => {
       paperhuman.style.display = "none";
       scissorshuman.style.display = "none";
       rockhuman.style.display = "block" ;
       let compchoise =   ramdomComp();

          switch (compchoise ) {
          case 1:
          numbercomputer.textContent = +numbercomputer.textContent + 1;
          break;
          case 2:
          numberhuman.textContent = +numberhuman.textContent + 1;
          break;
       }
   
     if (numberhuman.textContent>4 || numbercomputer.textContent>4) {
         gameover.style.display = "block"
          gameopen.style.display = "none";
          gamer.style.display = ""
         
     }  
      
})

paper.addEventListener("click",() => {
   
       scissorshuman.style.display = "none";
       rockhuman.style.display = "none";
       paperhuman.style.display = "block";
       let compchoise =   ramdomComp();
        switch (compchoise) {
          case 0:
          numberhuman.textContent =+numberhuman.textContent +1;
          break;
          case 2:
          numbercomputer.textContent =+numbercomputer.textContent +1;
          break;
       }

     if (numberhuman.textContent>4 || numbercomputer.textContent>4) {
         gameover.style.display = "block"
          gameopen.style.display = "none";
          gamer.style.display = ""
         
     }  


})

scissors.addEventListener("click",() => {
    paperhuman.style.display = "none";
    rockhuman.style.display = "none";
    scissorshuman.style.display = "block";
     let compchoise =   ramdomComp();
      switch (compchoise) {
          case 1:
          numberhuman.textContent = +numberhuman.textContent+1;
          break;
          case 0:
          numbercomputer.textContent = +numbercomputer.textContent+1;
          break;
       }



       if (numberhuman.textContent>4 || numbercomputer.textContent>4) {
          gameover.style.display = "block"
          gameopen.style.display = "none";
          gamer.style.display = ""
         
     }  
    
})




