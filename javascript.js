

const setOfWords =["If you really want to hear about it" , 
                    "the first thing you’ll probably want to know is where I was born", 
                    "and what my lousy childhood was like", "and how my parents were occupied before they had me", 
                    "and all that David Copperfield kind of crap", 
                    "but I don’t feel like going into it", 
                    "if you want to know the truth."];

const msg = document.getElementById('msg');

const typewords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime , endTime;

const playGame =()=>{
    let randomNumber = Math.floor(Math.random()* setOfWords.length);
    msg.innerText = setOfWords[randomNumber];

    let date = new Date();
    startTime = date.getTime();
    btn.innerText ="Done";

}
const endPlay=()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) /1000);

    let totalStr = typewords.value;
    let wordCount =wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime)*60);

    let finalMsg ="You typed total at "+speed + "words per minutes. ";

    finalMsg += compareWords(msg.innerText, totalStr);

    msg.innerText = finalMsg;

}

const compareWords = (str1, str2 )=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt =0;

    words1.forEach(function(item, index){
        if (item == words2[index]){
            cnt++;
        }
    })

    let errorWords = (words1.length - cnt);

    return (cnt +" correct out of "+ words1.length+ "words and the total number of error are  " + errorWords +".");


}



const wordCounter=(str)=>{
    let response =str.split(" ").length;
    return response;
}



btn.addEventListener('click', function(){
    // console.log(this);

      if (this.innerText == 'Start'){
            typewords.disabled = false;
            playGame();
             
      }else if (this.innerText == "Done"){
          typewords.disabled =true;
          btn.innerText = "Start";
          endPlay();
      }

} )


