var apartamentsAll = [];
var numApartmentsPage = 15;
function loadApartments() {
    return $.get('data/london.json')
        .then(data => {
            apartamentsAll = data;
            filterJSON();
            return apartamentsAll;
        })
}

function filterJSON() {
    apartamentsAll = noRepeat(apartamentsAll);
    addFalseReviewApartment();
    changeComaForPoint();
}

function addFalseReviewApartment() {
    for (let i = 0; i < apartamentsAll.length; i++) {
        if (!apartamentsAll[i]["Reviews Core 1"]) {
            apartamentsAll[i]["Reviews Core 4"] = { text: "0" };
            apartamentsAll[i]["Reviews Core 3"] = { text: "0" };
        }
    }
}

function changeComaForPoint() {
    for (let i = 0; i < apartamentsAll.length; i++) {
        if (apartamentsAll[i]["Reviews Core 3"]) {
            apartamentsAll[i]["Reviews Core 3"].text = apartamentsAll[i]["Reviews Core 3"].text.replace(',', '.');
        }
    }
}

function noRepeat(apartaments) {
    return _.uniqBy(apartamentsAll, hotel => hotel["Hotel Image"].alt);
}
