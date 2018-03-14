var apartamentsFilter = [];

function check(query) {
    return $(query).prop("checked");
}
function removeChecks (){
    if (check("#defaultCheck1"))$("#defaultCheck1").prop("checked",false);
    if (check("#defaultCheck2"))$("#defaultCheck2").prop("checked",false);
}

function checkBoxReviews() {
    if (check("#defaultCheck1")) {
        if (check("#defaultCheck3"))$("#defaultCheck3").prop("checked",false);
        bestReviews();
        showFilterPage(apartamentsFilter, Math.trunc((apartamentsFilter.length / numApartmentsPage) - 1));
    } else {
        apartamentsFilter = apartamentsAll.slice();
        if (check("#defaultCheck2")) mostComments();
        showFilterPage(apartamentsFilter, Math.trunc((apartamentsFilter.length / numApartmentsPage) - 1));
    }
}

function checkBoxComments() {
    if (check("#defaultCheck2")) {
        if (check("#defaultCheck3"))$("#defaultCheck3").prop("checked",false);
        mostComments();
        showFilterPage(apartamentsFilter, Math.trunc((apartamentsFilter.length / numApartmentsPage) - 1));
    } else {
        apartamentsFilter = apartamentsAll.slice();
        if (check("#defaultCheck1")) bestReviews();
        showFilterPage(apartamentsFilter, Math.trunc((apartamentsFilter.length / numApartmentsPage) - 1));
    }
}

function bestReviews() {
    apartamentsFilter = _.orderBy(apartamentsAll, hotel => parseInt(hotel["Reviews Core 4"].text), ['desc', 'asc']);
}

function mostComments() {
    apartamentsFilter = _.orderBy(apartamentsAll, hotel => parseInt(hotel["Reviews Core 3"].text), ['desc', 'asc']);
}

function checkBoxTopReviews() {
    if (check("#defaultCheck3")) {
        removeChecks();
        bestReviews();
        showFilterPage(apartamentsFilter.slice(0, 10), 0);
    } else {
        showFilterPage(apartamentsFilter, (Math.trunc(apartaments.length / numApartmentsPage) - 1));
    }
}

function showFilterPage(apartaments, lastPage) {
    cleanPage();
    currentPage = 0;
    createPage(apartaments, lastPage);
}