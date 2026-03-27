fetch('facts.csv')
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n');
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    document.getElementById('random-fact').innerText = randomLine;
  })
  .catch(error => console.error('Error:', error));
