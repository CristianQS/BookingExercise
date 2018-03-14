function init () {
    loadApartments().then(hotels => {
        createPage(hotels, Math.trunc((hotels.length / numApartmentsPage) - 1));
    });
}

init();