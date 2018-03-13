var apartamentsFilter = [];

function checkBoxReviews() {
    var check = $("#defaultCheck1").prop("checked");
    if (check) {
        bestReviews();
        cleanPage();
        currentPage = 0;
        showApartment(apartamentsFilter);
        choosePage();
    } else {

    }
}

function checkBoxComments() {
    var check = $("#defaultCheck2").prop("checked");
    if (check) {
        mostComments();
        cleanPage();
        currentPage = 0;
        showApartment(apartamentsFilter);
        choosePage();
    } else {

    }
}

function bestReviews() {
    apartamentsFilter = apartamentsAll.sort((a, b) => {
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
    apartamentsFilter = apartamentsAll.sort((a, b) => {
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