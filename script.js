let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd', 'Radiohead'];

function sortBandNames(names) {
  const articles = ['a', 'an', 'the'];

  // Remove articles from band names
  const sortedNames = names.map((name) => {
    const words = name.toLowerCase().split(' ');
    const filteredWords = words.filter((word) => !articles.includes(word));
    return filteredWords.join(' ');
  });

  // Sort band names in lexicographic order
  sortedNames.sort();

  return sortedNames;
}

function displayBandNames(names) {
  const bandList = document.getElementById('band');
  names.forEach((name) => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    bandList.appendChild(listItem);
  });
}

const sortedBandNames = sortBandNames(bandNames);
displayBandNames(sortedBandNames);


