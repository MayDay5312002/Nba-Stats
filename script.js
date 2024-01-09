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
    // Data is the decoded JSON object
    console.log(data);

    // You can now work with the decoded JSON object here
    // For example, you can access properties like data.propertyName
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });