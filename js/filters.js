var apartamentsFilter = [];

function check(query) {
    apartamentsFilter = apartamentsAll.slice();
    return $(query).prop("checked");
}

function checkBoxReviews() {
    if (check("#defaultCheck1")) {
        bestReviews();
        cleanPage();
        currentPage = 0;
        showApartment(apartamentsFilter);
        choosePage();
    } else {
        apartamentsFilter = apartamentsAll.slice();
        if (check("#defaultCheck2")) mostComments();

        cleanPage();
        currentPage = 0;
        showApartment(apartamentsFilter);
        choosePage();
    }
    console.log(apartamentsFilter);
}

function checkBoxComments() {
    if (check("#defaultCheck2")) {
        mostComments();
        cleanPage();
        currentPage = 0;
        showApartment(apartamentsFilter);
        choosePage();
    } else {
        apartamentsFilter = apartamentsAll.slice();
        if (check("#defaultCheck1")) bestReviews();

        cleanPage();
        currentPage = 0;
        showApartment(apartamentsFilter);
        choosePage();
    }
    console.log(apartamentsFilter);

}

function bestReviews() {
    apartamentsFilter = apartamentsFilter.sort((a, b) => {
        if (a["Reviews Core 4"] && b["Reviews Core 4"]) {
            return parseFloat(b["Reviews Core 4"].text) - parseFloat(a["Reviews Core 4"].text);
        }
        if (!b["Reviews Core 4"]) {
            return -1;
        }
        if (!a["Reviews Core 4"]) {
            return 1;
        }
    });
}

function mostComments() {
    apartamentsFilter = apartamentsFilter.sort((a, b) => {
        if (a["Reviews Core 3"] && b["Reviews Core 3"]) {
            return parseFloat(b["Reviews Core 3"].text) - parseFloat(a["Reviews Core 3"].text);
        }
        if (!b["Reviews Core 3"]) {
            return -1;
        }
        if (!a["Reviews Core 3"]) {
            return 1;
        }
    });
}

function checkBoxTopReviews() {
    if (check("#defaultCheck3")) {
        apartamentsFilter = apartamentsAll.slice();

        bestReviews();
        cleanPage();
        currentPage = 0;
        lastPage = 0;
        apartamentsFilter = apartamentsFilter.slice(0, 10);
        showApartment(apartamentsFilter);
        choosePage();
    }else{
        cleanPage();
        currentPage = 0;
        lastPage = 69;
        apartamentsFilter =  apartamentsAll.slice();
        showApartment(apartamentsFilter);
        choosePage();
    }

}