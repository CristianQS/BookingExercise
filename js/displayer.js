var currentPage = 0;
var previousPage = 0;
var lastPage = 0;

function showApartment(hotels) {
    apartamentsPage = hotels.slice(currentPage * numApartmentsPage, (currentPage + 1) * numApartmentsPage);
    for (let i = 0; i < apartamentsPage.length; i++) {
        createApartmentHtml(apartamentsPage[i]);
    }
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

function createPage(hotels, numberLastPage) {
    lastPage = numberLastPage;
    showApartment(hotels);
    createPagination();
}

function createPagination() {
    $("#pages").append(`<li class="page-item"><a class="page-link" href="#" onclick="prevPage()">Previous</a></li>`);
    if (previousPage != lastPage) {
        var difference = lastPage - previousPage;
        if (difference <= 3) {
            for (let i = 0; i < difference; i++) {
                $("#pages").append(`<li class="page-item"><a class="page-link" href="#"  onclick="goPage(${i})">${i}</a></li>`);
            }
        } else {
            if (currentPage + 1 == lastPage || currentPage == lastPage) {
                controlLastPage();
                if (currentPage + 1 == lastPage) $("#pages").append(`<li class="page-item"><a class="page-link" href="#"  onclick="goPage(${lastPage})">${lastPage}</a></li>`);
            } else if (currentPage - 1 == previousPage || currentPage == previousPage) {
                if (currentPage - 1 == previousPage) $("#pages").append(`<li class="page-item"><a class="page-link" href="#"  onclick="goPage(${previousPage})">${previousPage}</a></li>`);
                controlPreviousPage();
            } else {
                controlMiddlePage();
            }
        }
    } else {
        $("#pages").append(`<li class="page-item"><a class="page-link" href="#"  onclick="goPage(${currentPage})">${currentPage}</a></li>`);
    }
    $("#pages").append(`<li class="page-item"><a class="page-link" href="#" onclick="nextPage()">Next</a></li>`);
}

function controlLastPage() {
    $("#pages").append(`<li class="page-item"><a class="page-link" href="#"  onclick="goPage(${previousPage})">${previousPage}</a></li>`);
    var html = `<li class="page-item"><a class="page-link" href="#" > ... </a></li>
    <li class="page-item"><a class="page-link" href="#"  onclick="goPage(${currentPage - 1})">${currentPage - 1}</a></li>
    <li class="page-item"><a class="page-link" href="#"  onclick="goPage(${currentPage})">${currentPage}</a></li>`;
    $("#pages").append(html);
}

function controlPreviousPage() {
    var html = `<li class="page-item"><a class="page-link" href="#"  onclick="goPage(${currentPage})">${currentPage}</a></li>
    <li class="page-item"><a class="page-link" href="#"  onclick="goPage(${currentPage + 1})">${currentPage + 1}</a></li>
    <li class="page-item"><a class="page-link" href="#" > ... </a></li>`;
    $("#pages").append(html);
    $("#pages").append(`<li class="page-item"><a class="page-link" href="#"  onclick="goPage(${lastPage})">${lastPage}</a></li>`);
}

function controlMiddlePage() {
    var html = `<li class="page-item"><a class="page-link" href="#" > ... </a></li>
    <li class="page-item"><a class="page-link" href="#"  onclick="goPage(${currentPage - 1})">${currentPage - 1}</a></li>
    <li class="page-item"><a class="page-link" href="#"  onclick="goPage(${currentPage})">${currentPage}</a></li>
    <li class="page-item"><a class="page-link" href="#"  onclick="goPage(${currentPage + 1})">${currentPage + 1}</a></li>
    <li class="page-item"><a class="page-link" href="#" > ... </a></li>`;
    $("#pages").append(`<li class="page-item"><a class="page-link" href="#"  onclick="goPage(${previousPage})">${previousPage}</a></li>`);
    $("#pages").append(html);
    $("#pages").append(`<li class="page-item"><a class="page-link" href="#"  onclick="goPage(${lastPage})">${lastPage}</a></li>`);
}





