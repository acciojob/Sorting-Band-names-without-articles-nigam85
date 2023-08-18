let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'Aerosmith', 'The Rolling Stones', 'Queen', 'Anathema'];

// Function to remove articles and sort the band names
function sortBandNames(bandNames) {
    const articles = ['the', 'an', 'a'];
    const sortedNames = bandNames.sort((a, b) => {
        const cleanA = a.toLowerCase().replace(/^(the|an|a)\s+/i, '');
        const cleanB = b.toLowerCase().replace(/^(the|an|a)\s+/i, '');
        return cleanA.localeCompare(cleanB);
    });
    return sortedNames;
}

const sortedBandNames = sortBandNames(bandNames);

// Generating the HTML list
const ul = document.createElement('ul');
ul.setAttribute('id', 'band');

for (const name of sortedBandNames) {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
}

// Adding the list to the HTML body
document.body.appendChild(ul);
