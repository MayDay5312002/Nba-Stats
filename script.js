const jsonFilePath = 'stat.json';

window.onload = function() {
  const profilePic = document.querySelector("#profilePic");
  const divModal = document.querySelector("#modal > div");
  const h2s = document.querySelectorAll("h2");

  // Fetch the JSON file
  fetch(jsonFilePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${jsonFilePath}: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      // Sort data
      data.sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return a.place - b.place;
      });

      let dateYes = document.querySelector('span.date');
      let i = 0;
      let j = 0;
      let k = 0;

      // Populate table with data
      while (i < 45) {
        let arr = document.querySelectorAll(`table.${['assists', 'blocks', 'FantasyP', 'freeT', 'points', 'rebounds', 'steals', 'threePts', 'turnovers'][k]} tr.${['first', 'second', 'third', 'fourth', 'fifth'][j]} td`);
        
        if (arr.length < 3) {
          console.error("Not enough table columns found for index: ", k, j);
          break;
        }

        let ending = getEnding(data[i].place);
        arr[0].innerText = data[i].place + ending;

        let a = document.createElement('a');
        a.setAttribute("href", "#");
        a.innerText = `${data[i].player_name} - ${data[i].team_name}`;

        a.addEventListener('click', (function(index) {
          return function(event) {
            event.preventDefault();
            document.getElementById('modalContent').innerText = `Player: ${data[index].player_name}\nTeam: ${data[index].team_name}`;
            document.getElementById('modal').style.display = 'block';
            profilePic.setAttribute("src", data[index].photo);
            document.getElementById("statPlayer").innerText = `PPG: ${data[index].ppg}\nRPG: ${data[index].rpg}\nAPG: ${data[index].apg}\nPIE: ${data[index].pie}`;
          };
        })(i));

        arr[1].innerText = '';
        arr[1].appendChild(a);
        arr[2].innerText = data[i].stat;

        i++;
        if (i % 5 === 0 && i !== 0) {
          j = 0;
          k++;
        } else {
          j++;
        }
      }

      // Close modal logic
      document.getElementById('close').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
      });

      window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });

      // Detect orientation on resize
      window.addEventListener("resize", detectOrientation);
      // detectOrientation();  // Uncomment this if you want to detect orientation on page load
    })
    .catch(error => {
      console.error(error);
    });

  function detectOrientation() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    console.log("Screen width: " + screenWidth);
    console.log("Screen height: " + screenHeight);
    if ((screenWidth / screenHeight) >= 1.77) {
      profilePic.style.width = "13.5rem";
      divModal.style.width = "17rem";
      for(let i = 0; i < h2s.length; i++){
        h2s[i].style.fontSize = "1.15rem";
      }
      console.log("Landscape");
    } else {
      profilePic.style.width = "17.5rem";
      divModal.style.width = "20rem";
      for(let i = 0; i < h2s.length; i++){
        h2s[i].style.fontSize = "1.5rem";  // Adjusted different font size
      }
      console.log("Portrait");
    }
  }

  // Helper function
  function getEnding(place) {
    if (place === 1) return "st";
    if (place === 2) return "nd";
    if (place === 3) return "rd";
    return "th";
  }
};
