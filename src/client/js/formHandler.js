function handleSubmit(event) {
    event.preventDefault()

    const formText = document.getElementById('url').value;
    const isValidUrl = Client.validateUrl(formText)

    if (isValidUrl) {
        const data = { url: formText };

        fetch('http://localhost:8081/process', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((res) => {
            showResult(res);
        }).catch((err) => {
            alert('Error calling API');
        });
    } else {
        alert('url is not valid!');
        document.getElementById('url').value = '';
    }
}

function showResult(data) {
    document.getElementById('polarity').value = data.polarity;
    document.getElementById('polarity_confidence').value = data.polarity_confidence;
    document.getElementById('subjectivity').value = data.subjectivity;
    document.getElementById('subjectivity_confidence').value = data.subjectivity_confidence;
    document.getElementById('excerpt').value = data.text;
}

export { handleSubmit }
