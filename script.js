const jsonFilePath = 'stat.json';

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
    window.myAppData = data;
    console.log(window.myAppData); // Access the data globally
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });
