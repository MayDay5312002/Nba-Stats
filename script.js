const jsonFilePath = 'stat.json';
var x;
// Fetch the JSON file using the Fetch API
fetch(jsonFilePath)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch ${jsonFilePath}: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    // Assign the data to a property of the global object
    let dateYes = document.querySelector('span.date');
    // dateYes.innerText = 
    let i = 0;
    let j = 1;
    let k = 1;
    while(i < 45){
      
      if((i % 5 ) === 0){
        console.log(1);
      }
      if(i < 5){//1 - Points
        if(i == 0){
          let arr = document.querySelectorAll("table.points tr.first td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(i == 1){
          let arr = document.querySelectorAll("table.points tr.second td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(i == 2){
          let arr = document.querySelectorAll("table.points tr.third td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(i == 3){
          let arr = document.querySelectorAll("table.points tr.fourth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(i == 4){
          let arr = document.querySelectorAll("table.points tr.fifth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        
      }
      else if(i < 10){//2 - Rebounds
        let r = i - 5;
        if(r == 0){
          let arr = document.querySelectorAll("table.rebounds tr.first td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 1){
          let arr = document.querySelectorAll("table.rebounds tr.second td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 2){
          let arr = document.querySelectorAll("table.rebounds tr.third td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 3){
          let arr = document.querySelectorAll("table.rebounds tr.fourth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 4){
          let arr = document.querySelectorAll("table.rebounds tr.fifth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        
      }
      else if(i < 15){//3 - Assists
        let r = i - 10;
        if(r == 0){
          let arr = document.querySelectorAll("table.assists tr.first td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 1){
          let arr = document.querySelectorAll("table.assists tr.second td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 2){
          let arr = document.querySelectorAll("table.assists tr.third td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 3){
          let arr = document.querySelectorAll("table.assists tr.fourth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 4){
          let arr = document.querySelectorAll("table.assists tr.fifth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        
      }
      else if(i < 20){//4 - Blocks
        let r = i - 15;
        if(r == 0){
          let arr = document.querySelectorAll("table.blocks tr.first td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 1){
          let arr = document.querySelectorAll("table.blocks tr.second td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 2){
          let arr = document.querySelectorAll("table.blocks tr.third td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 3){
          let arr = document.querySelectorAll("table.blocks tr.fourth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 4){
          let arr = document.querySelectorAll("table.blocks tr.fifth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        
      }
      else if(i < 25){//5 - Steals
        let r = i - 20;
        if(r == 0){
          let arr = document.querySelectorAll("table.steals tr.first td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 1){
          let arr = document.querySelectorAll("table.steals tr.second td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 2){
          let arr = document.querySelectorAll("table.steals tr.third td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 3){
          let arr = document.querySelectorAll("table.steals tr.fourth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 4){
          let arr = document.querySelectorAll("table.steals tr.fifth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        
      }
      else if(i < 30){//6 - Turnovers
        let r = i - 25;
        if(r == 0){
          let arr = document.querySelectorAll("table.turnovers tr.first td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 1){
          let arr = document.querySelectorAll("table.turnovers tr.second td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 2){
          let arr = document.querySelectorAll("table.turnovers tr.third td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 3){
          let arr = document.querySelectorAll("table.turnovers tr.fourth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 4){
          let arr = document.querySelectorAll("table.turnovers tr.fifth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        
      }
      else if(i < 35){//7 - Three Pointers Made
        let r = i - 30;
        if(r == 0){
          let arr = document.querySelectorAll("table.threePts tr.first td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 1){
          let arr = document.querySelectorAll("table.threePts tr.second td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 2){
          let arr = document.querySelectorAll("table.threePts tr.third td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 3){
          let arr = document.querySelectorAll("table.threePts tr.fourth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 4){
          let arr = document.querySelectorAll("table.threePts tr.fifth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        
      }
      else if(i < 40){//8 - Free Throws Made
        let r = i - 35;
        if(r == 0){
          let arr = document.querySelectorAll("table.freeT tr.first td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 1){
          let arr = document.querySelectorAll("table.freeT tr.second td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 2){
          let arr = document.querySelectorAll("table.freeT tr.third td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 3){
          let arr = document.querySelectorAll("table.freeT tr.fourth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 4){
          let arr = document.querySelectorAll("table.freeT tr.fifth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        
      }
      else {//9 - Fantasy Points
        let r = i - 40;
        if(r == 0){
          let arr = document.querySelectorAll("table.FantasyP tr.first td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 1){
          let arr = document.querySelectorAll("table.FantasyP tr.second td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 2){
          let arr = document.querySelectorAll("table.FantasyP tr.third td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 3){
          let arr = document.querySelectorAll("table.FantasyP tr.fourth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        if(r == 4){
          let arr = document.querySelectorAll("table.FantasyP tr.fifth td")
          let ending;          
          if(data[i].place == 1){
            ending = "st";
          }
          else if(data[i].place == 2){ ending = "nd";}
          else if(data[i].place == 3){ending = "rd";}
          else {ending = "th";}
          arr[0].innerText = data[i].place + ending;
          arr[1].innerText = data[i].player_name + " - " + data[i].team_name;
          arr[2].innerText = data[i].stat;
          console.log(data[i].player_name);
        }
        
      }
      i++
      if(i === 45){
        console.log(1);
      }
      // let x = document.querySelector("table.points tr.first ");
      // x.innerText = "Hello World";
    }

    // console.log(window.myAppData);
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });


 
  
