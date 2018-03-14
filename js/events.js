function searchHotel() {
    var name = $("#nameSearch").val();
    loadApartments().then(hotels => {
        apartamentsAll = hotels.filter(hotels => hotels["Hotel Image"].alt.toLowerCase().includes(name.toLowerCase()));
        if (apartamentsAll.length != 0) {
            currentPage = 0;
            cleanPage();
            createPage(apartamentsAll,Math.trunc((apartamentsAll.length / numApartmentsPage) - 1));
        } else {
            cleanPage();
            createPage(apartamentsAll,0);
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
    createPage(apartamentsAll,Math.trunc((apartamentsAll.length / numApartmentsPage) - 1));
}

