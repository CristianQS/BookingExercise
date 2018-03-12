function loadApartments() {
    return $.get('data/london.json')
        .then(data => {
            return data;
        })
}

