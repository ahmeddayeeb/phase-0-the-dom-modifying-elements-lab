// Write your code here!

// Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new <h1> element and assign it to a variable named 'newHeader'
const newHeader = document.createElement('h1');

// Set the id of the 'newHeader' element to 'victory'
newHeader.id = 'victory';

// Set the text content of the 'newHeader' element to "YOUR-NAME is the champion"
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the 'newHeader' element to the document body
document.body.append(newHeader);
