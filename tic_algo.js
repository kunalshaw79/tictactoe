    let mus1 = new Audio("mus1.mp3");
    let start = new Audio("start.mp3");
    let wins = new Audio("wins.mp3");
    setTimeout(start.play(),2000);
        var turn= document.getElementById('change').innerHTML;
        function change(){
            if(turn==". X .")
        {
            turn = ". O ."
        }
        else{
            turn = ". X ."
        }
        }
        var arr =["ini"]
            for(let i=1;i<=9;i++){
                 arr.push(document.getElementById(`a${i}`).innerHTML);
            }
        function checkwin(){
            var arr =["ini"]
            for(let i=1;i<=9;i++){
                 arr.push(document.getElementById(`a${i}`).innerHTML);
            }
          console.log(arr);
          for(let i=1;i<=3;i++)
          {
            if((arr[i]==arr[i+3] && arr[i+3]==arr[i+6]) && (arr[i]==". X ." || arr[i]==". O .") )
             {
                 win();
            }
          }
          for(let i=1;i<=7;i+=3)
          {
            if((arr[i]==arr[i+1] && arr[i+1]==arr[i+2]) && (arr[i]==". X ." || arr[i]==". O .") )
             {
                 win();
            }
          }
          if((arr[1]==arr[5] && arr[5]==arr[9]) && (arr[1]==". X ." || arr[1]==". O .") )
          {
              win();
         }
         if((arr[3]==arr[5] && arr[5]==arr[7]) && (arr[3]==". X ." || arr[3]==". O .") )
         {
             win();
        }
        }
    for(let i=1;i<=9;i++){
    document.getElementById(`a${i}`).addEventListener("click",fun1);
    function fun1() {
        document.getElementById(`a${i}`).innerHTML=turn;
        mus1.play();
        change();
        document.getElementById('change').innerHTML=turn;
        checkwin();
        start.play()
    } 
    }
    function restart(){
        location.reload()
    }
    function win(){
        document.getElementById('wish').style.display="inherit";
        wins.play()
        start.pause()
        whowins()
    }
    function mute()
    {
        start.pause()
    }
    function play()
    {
        start.play()
    }
    function whowins(){
        let a,b,c;
        for(let i=0;i<=9;i++){
            if(arr[i]==". X .")
            {
                a++;
            }
            else if(arr[i]==". O .")
            {
                b++
            }
            console.log(a,b);
        }
        if(a>b){
            document.getElementById('winner').innerHTML="O wins"
        }
        else if(a==b)
        {
console.log("i dont know the logic")
        }
        else{
            document.getElementById('winner').innerHTML="X wins"
        }

    }
    
