var currentPage = parseInt(localStorage.getItem("idPage"));

loadApartments().then(hotels => {
    showApartment(hotels);
})

function showApartment(apartaments) {
    var apartamentsPage = apartaments.slice(currentPage*15, (currentPage+1)*15);
    for (let i = 0; i < apartamentsPage.length; i++) {
        createApartmentHtml(apartamentsPage[i]);
    }
    createPagination();
}


function createApartmentHtml(apartament) {
    var Image = apartament["Hotel Image"];
    var descriptionHotel = apartament["Hotel Description"];
    var urlHotel = apartament["Hotel Name Url"];
    $("#apartaments").append(
        `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${Image.src} alt=${Image.alt}>
        <div class="card-body">
            <h5 class="card-title">${Image.alt}</h5>
            <p class="card-text">${descriptionHotel.text}</p>
            <a href=${urlHotel.href} class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`);
}

function createPagination() {
    var html = `<li class="page-item"><a class="page-link" onclick="prevPage()">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#"  onclick="goPage(event, ${currentPage})">${currentPage}</a></li>
        <li class="page-item"><a class="page-link" href="#"  onclick="goPage(event, ${currentPage+1})">${currentPage+1}</a></li>
        <li class="page-item"><a class="page-link" href="#"  onclick="goPage(event, ${currentPage+2})">${currentPage+2}</a></li>
        <li class="page-item"><a class="page-link" href="#" onclick="nextPage()">Next</a></li>`;
    $("#pages").append(html);
}

function prevPage() {
    currentPage = currentPage-1;
    saveActualPage();
}

function nextPage () {
    currentPage = currentPage +1;
    saveActualPage();
}

function goPage(event, idPage) {
    event.preventDefault();
    currentPage=idPage;
    saveActualPage();
}

function saveActualPage() {
    localStorage.setItem('idPage', currentPage);
    cleanPage();
    loadApartments().then(hotels => {
        showApartment(hotels);
    })
}

function cleanPage() {
    $("#pages").children().remove();
    $("#apartaments").children().remove();
}