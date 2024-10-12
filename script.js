const jsonFilePath = 'stat.json';
let previousData = null;
let refreshInterval = 5000;  // Set polling interval to 5 seconds

window.onload = function() {
  const profilePic = document.querySelector("#profilePic");
  const divModal = document.querySelector("#modal > div");
  const h2s = document.querySelectorAll("h2");

  // Function to fetch and update the data
  function fetchDataAndUpdate() {
    // Fetch the JSON file
    fetch(jsonFilePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${jsonFilePath}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        // Sort data; data sorting start heere b/c stringify of a data changes if not sorted prior
        data.sort((a, b) => {
          if (a.category < b.category) return -1;
          if (a.category > b.category) return 1;
          return a.place - b.place;
        });
        // Check if data has changed compared to previous fetch
        if (previousData === null || JSON.stringify(data) !== JSON.stringify(previousData)) {
          console.log("Data has changed or first load, updating...");
          // console.log(JSON.stringify(data));//these were used for debugging
          // console.log(JSON.stringify(previousData));//these were used for debugging
          previousData = data;  // Store the fetched data for future comparison
          
          

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
                document.getElementById('modalContent').innerHTML = `Player: <a href="${data[index].player_link}" target="_blank">${data[index].player_name}`;
                document.getElementById('modal').style.display = 'block';
                profilePic.setAttribute("src", data[index].photo);
                document.getElementById("statPlayer").innerText = `Team: ${data[index].team_name}\nPPG: ${data[index].ppg}\nRPG: ${data[index].rpg}\nAPG: ${data[index].apg}\nPIE: ${data[index].pie}`;
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
          //if click target is not modal, then close modal.
          window.addEventListener('click', function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
              modal.style.display = 'none';
            }
          });

          // Detect orientation on resize
          window.addEventListener("resize", detectOrientation);
          // detectOrientation();  // Call this initially to set correct styles
        }
        // else{
        //   console.log("prevData is same as currentData");
        // }
      })
      .catch(error => {
        console.error(error);
      });
  }

  // Polling function to check for JSON updates every X seconds
  setInterval(fetchDataAndUpdate, refreshInterval);

  // Initial load
  fetchDataAndUpdate();

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
