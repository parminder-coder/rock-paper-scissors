let human_score=0;
let computer_score=0;
const vs=document.getElementById("vs");
const choice=["rock","paper","scissors"];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function random_index(){
    return(Math.floor(Math.random()*3));
}
function computer_choice(){
    return choice[random_index()];
}

function human_choice(){
    return prompt("enter rock , paper or scissors");
}

function changing_images(computer_choice,human_choice){
    const human_img=document.getElementById('user_image');
    const computer_img=document.getElementById('computer_image');

    const h_image_name=document.getElementById('user_image_name');
    const c_image_name=document.getElementById('computer_image_name');

    computer_img.innerHTML = `<img src="images/${computer_choice}.png" alt="${computer_choice}">`;
    human_img.innerHTML=`<img src="images/${human_choice}.png" alt="${human_choice}">`;

    h_image_name.innerText=`${human_choice}`
    c_image_name.innerText=`${computer_choice}`
}

function play_game(computer_choice,human_choice){

    

    if(computer_choice==="rock"){

        if(human_choice=="rock"){
            console.log("rock and rock");
            console.log("match tied");
            vs.innerText="tie"
        }

        else if(human_choice==="paper"){
            console.log("paper beats rock");
            console.log("you won");
            vs.innerText="beats"
            human_score+=1;
        }

        else if(human_choice==="scissors"){
            console.log("scissors loses to rock");
            console.log("you lost");
            vs.innerText="loses to"
            computer_score+=1;
        }
    }

    else if(computer_choice==="paper"){

        if(human_choice=="rock"){
            console.log("rock loses to paper");
            console.log("you lost");
            vs.innerText="loses to"
            computer_score+=1;
        }

        else if(human_choice==="paper"){
            console.log("paper and paper");
            console.log("match tied");  
            vs.innerText="tie"          
        }

        else if(human_choice==="scissors"){
            console.log("scissors beats paper");
            console.log("you won");
            vs.innerText="beats"
            human_score+=1;
        }
    }

    else if(computer_choice==="scissors"){

        if(human_choice=="rock"){
            console.log("rock beats scissors");
            console.log("you won");
            vs.innerText="beats"
            human_score+=1;
        }

        else if(human_choice==="paper"){
            console.log("paper loses to scissors");
            console.log("you lost")
            vs.innerText="loses"
            computer_score+=1;
        }

        else if(human_choice==="scissors"){
            console.log("scissors and scissors");
            console.log("match tied");
            vs.innerText="tie"
        }
    }
}

const round_no=document.getElementById("round");

console.log("game started");


async function main(){
    for(let i=1; i<=5;i++){

        await sleep(3000);
        round_no.innerText=`Round ${i}`;    

        console.log("match",i);

        const human=human_choice();
        const computer=computer_choice();

        changing_images(computer,human);

        play_game(computer,human);

        console.log("computer score",computer_score);
        console.log("human score",human_score);

        document.getElementById('human_score').innerText=`Your score: ${human_score}`;
        document.getElementById('computer_score').innerText=`Computer score: ${computer_score}`;

        

    }


    if(computer_score<human_score){
            document.getElementById('final_result').innerText="Congratulations You won"
            console.log("you won the game");            
        }

        else if(human_score<computer_score){
            document.getElementById('final_result').innerText="Sadly You lost"
            console.log("you lost the game");
        }

        else{
            document.getElementById('final_result').innerText="Game tied"
            console.log("game tied");
    }
}

main();