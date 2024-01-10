const jsonFilePath = 'stat.json';
let jsonFile;
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
    jsonfile = data
    print(jsonFile)
    // You can now work with the decoded JSON object here
    // For example, you can access properties like data.propertyName
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });

print(jsonFile)