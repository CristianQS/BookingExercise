function searchHotel() {
    var name = $("#nameSearch").val();
    loadApartments().then(hotels => {
        apartamentsAll = hotels.filter(hotels => hotels["Hotel Image"].alt.toLowerCase() === name.toLowerCase());
        if (apartamentsAll.length != 0) {
            lastPage = Math.trunc((apartamentsAll.length / 15) - 1);
            cleanPage();
            currentPage = 0;
            showApartment(apartamentsAll);
            choosePage();
        } else {
            lastPage = Math.trunc((hotels.length / 15) - 1);
            cleanPage();
            apartamentsAll = hotels;
            showApartment(apartamentsAll);
            choosePage();
        }
    })
}

function cleanPage() {
    $("#pages").children().remove();
    $("#apartaments").children().remove();
}

function prevPage() {
    if (currentPage != previousPage) {
        currentPage = currentPage - 1;
        saveActualPage();
    }
}

function nextPage() {
    if (currentPage != lastPage) {
        currentPage = currentPage + 1;
        saveActualPage();
    }
}

function goPage(idPage) {
    currentPage = idPage;
    saveActualPage();
}

function saveActualPage() {
    cleanPage();

    showApartment(apartamentsAll);
    choosePage();

}

