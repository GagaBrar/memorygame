
const deck = document.querySelector(".deck");                                                  // to select the container of all the cards.
const cardm = document.querySelectorAll(".card");                                              //to select each of the cards present in the deck. 
const moves = document.querySelector(".score-panel .moves");                                   //to select the container containing the moves,stars and no of moves.
const restart = document.querySelector(".restart");                                            // to select the restart button present in the body.
let bob = document.getElementsByClassName("match");                                            // to select the matched cards in the deck.
const card = [];                                                                               // it denotes that the array of cards is empty.                           
const winning = document.getElementById("won");                                                //to get the page congratulating when all the cards getmatched



//This select function is to open the card when it is clicked.
function select(e){
     if(
     e.target.classList == ("card")

         )    {
         e.target.classList.add("open","show");
         card.push(e.target);

       if(card.length == 2){

           setTimeout(function(){


                                      //This is to check if two cards match or not.
           if(card[0].innerHTML == card[1].innerHTML){
                card[0].classList.add('match');
                card[1].classList.add("match");
                card.length = 0;
                match();
                }



           else if (card[0].innerHTML != card[1].innerHTML){
                card[0].classList.remove("open","show");
                card[1].classList.remove("open","show");
                card.length = 0;    
               }

            },400)



         moves.textContent++;
        restart.addEventListener("click",function (event){                                          //it listens to click on restart button.
        const cardSave = deck.querySelectorAll(".card")
        for(z = 0; z < cardSave.length ; z++ ){
            cardSave[z].classList.remove("open", "show" , "match");
    
        }                         
        //All the cards get to their initial stage after restarting button.
       
       
       
        moves.innerHTML = "0";
        winning.style.display = "none";
    //     let shuffledCards = Shuffle(z);
    //    cardSave =document.querySelectorAll(shuffledCards);
        })
        }}
};
const selectit = document.body.addEventListener("click",select);
// This is the main eventlistener which executes the main function which opens the cards, closes the cards, matches the cards.
function match() { 
    if (bob.length == 16)
    winning.style.display = "flex";
   };
// The display flex lets the congratulations to come up on screen when all the cards get matched.

//    function Shuffle(o) {
// 	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
//	    return o;
//     };


