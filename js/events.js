var apartamentsFilter = [];

function searchHotel() {
    var name = $("#nameSearch").val();
    if(apartamentsFilter.length === 0) apartamentsFilter = apartamentsAll.slice();
    apartamentsFilter = apartamentsFilter.filter(hotels => hotels["Hotel Image"].alt.toLowerCase().includes(name.toLowerCase()));
    if (apartamentsFilter.length != 0) {
        currentPage = 0;
        cleanPage();
        createPage(apartamentsFilter, Math.trunc((apartamentsFilter.length / numApartmentsPage) - 1));
    } else {
        cleanPage();
        createPage(apartamentsAll, 0);
    }
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
    console.log(currentPage);
    if(apartamentsFilter.length === 0) apartamentsFilter = apartamentsAll.slice();
    createPage(apartamentsFilter, Math.trunc((apartamentsFilter.length / numApartmentsPage) - 1));
}

