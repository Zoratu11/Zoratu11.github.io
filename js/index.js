const homePage = document.getElementById("siteHome");
const servicesPage = document.getElementById("ourServices");
const companyPage = document.getElementById("ourCompany");
const staffPage = document.getElementById("ourStaff");
const contactPage = document.getElementById("contactUs");

const servicesButton = document.getElementById("services");
const companyButton = document.getElementById("company");
const staffButton = document.getElementById("staff");
const contactButton = document.getElementById("contact");
const homeButton = document.getElementById("home");

homeButton.addEventListener("click", homeBtnHandler);
servicesButton.addEventListener("click", servicesBtnHandler);
companyButton.addEventListener("click", companyBtnHandler);
staffButton.addEventListener("click", staffBtnHandler);
contactButton.addEventListener("click", contactBtnHandler);

window.addEventListener("popstate", (event) => {
    let previousPage = event.state["previousPage"];

    switch(previousPage) {
        case "home":
            goToHome();
            break;
        case "services":
            goToServices();
            break;
        case "company":
            goToCompany();
            break;
        case "staff":
            goToStaff();
            break;
        case "contact":
            goToContact();
            break;
        default:
            //This shouldnt happen though, it probably will cause i suck
            goToHome();
            break;
    }
});

let currentPage = "home";

function homeBtnHandler() {
    let state = {"previousPage": currentPage};
    let title = "Home";
    let url = "home";

    currentPage = "home";

    window.history.pushState(state, title, url);
    goToHome();
}

function servicesBtnHandler() {
    let state = {"previousPage": currentPage};
    let title = "Our Services";
    let url = "services";

    currentPage = "services";

    window.history.pushState(state, title, url);

    goToServices();
}

function companyBtnHandler() {
    let state = {"previousPage": currentPage};
    let title = "Our Company";
    let url = "company";

    currentPage = "company";

    window.history.pushState(state, title, url);

    goToCompany();
}

function staffBtnHandler() {
    let state = {"previousPage": currentPage};
    let title = "Our Staff";
    let url = "staff";

    currentPage = "staff";

    window.history.pushState(state, title, url);

    goToStaff();
}

function contactBtnHandler() {
    let state = {"previousPage": currentPage};
    let title = "Contact Us";
    let url = "contact_us";

    currentPage = "contact";

    window.history.pushState(state, title, url);

    goToContact();
}

function goToHome() {
    homePage.style.display = "block";
    servicesPage.style.display = "none";
    companyPage.style.display = "none";
    staffPage.style.display = "none";
    contactPage.style.display = "none";
}

function goToServices() {
    homePage.style.display = "none";
    servicesPage.style.display = "block";
    companyPage.style.display = "none";
    staffPage.style.display = "none";
    contactPage.style.display = "none";
}

function goToCompany() {
    homePage.style.display = "none";
    servicesPage.style.display = "none";
    companyPage.style.display = "block";
    staffPage.style.display = "none";
    contactPage.style.display = "none";
}

function goToStaff() {
    homePage.style.display = "none";
    servicesPage.style.display = "none";
    companyPage.style.display = "none";
    staffPage.style.display = "block";
    contactPage.style.display = "none";
}

function goToContact() {
    homePage.style.display = "none";
    servicesPage.style.display = "none";
    companyPage.style.display = "none";
    staffPage.style.display = "none";
    contactPage.style.display = "block";
}