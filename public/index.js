const form = document.querySelector('.the-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('.student-name').value;
    const sport = document.querySelector('.sport').value;

    const data = {
        name: name,
        sport: sport
    };

    const requestOptions = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/register', requestOptions,)
    .then(response => response.json())
    .then(result => {
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
})