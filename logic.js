let human=0;
let computer=0;
let choice=["rock","paper","scissors"];

function random_index(){
    return(Math.floor(Math.random()*3));
}
function computer_choice(){
    return choice[random_index()];
}

function human_choice(){
    return prompt("enter rock , paper or scissors");
}

function play_game(computer_choice,human_choice){

    if(computer_choice==="rock"){

        if(human_choice=="rock"){
            console.log("rock and rock");
            console.log("match tied");
        }

        else if(human_choice="paper"){
            console.log("paper beats rock");
            console.log("you won");
            human+=1;
        }

        else{
            console.log("rock loses to scissors");
            console.log("you lost");
            computer+=1;
        }
    }

    else if(computer_choice==="paper"){

        if(human_choice=="rock"){
            console.log("rock loses to paper");
            console.log("you lost");
            computer+=1;
        }

        else if(human_choice="paper"){
            console.log("paper and paper");
            console.log("match tied");            
        }

        else{
            console.log("scissors beats paper");
            console.log("you won");
            human+=1;
        }
    }

    else if(computer_choice==="scissors"){

        if(human_choice=="rock"){
            console.log("rock beats scissors");
            console.log("you won");
            human+=1;
        }

        else if(human_choice="paper"){
            console.log("paper loses to scissors");
            console.log("you lost")
            computer+=1;
        }

        else{
            console.log("scissors and scissors");
            console.log("match tied");
        }
    }
}

console.log("game started");

for(let i=0; i<5;i++){

    console.log("match",i+1);

    play_game(computer_choice(),human_choice());
    console.log("computer score",computer);
    console.log("huaman score",human);

}

if(computer>human){
        console.log("you lost the game");
    }

    else if(human>computer){
        console.log("you won the game");
    }

    else{
        console.log("game tied");
}