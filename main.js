let body_page = document.querySelector("body");
let mode_day = document.querySelector(".mode-dark-sun");
let icon_theme = document.querySelector("i");
let text_theme = document.querySelector(".text-mode");

mode_day.onclick = function () {
  if (body_page.classList.contains("theme-light")) {
    body_page.className = "theme-dark";
    icon_theme.className = "fa-regular fa-sun";
    text_theme.textContent = "Light Mode";
  } else {
    body_page.className = "theme-light";
    icon_theme.className = "fa-regular fa-moon";
    text_theme.textContent = "Dark Mode";
  }
};

// ----- section

// -------- countries

let row_page = document.querySelector(".row");
let searchInput = document.querySelector(".srch-name");
let row_africa = document.querySelector(".row-africa");
let row_america = document.querySelector(".row-america");
let row_asia = document.querySelector(".row-asia");
let row_euro = document.querySelector(".row-euro");
let row_ocean = document.querySelector(".row-ocean");
// ---- info- country

let icon_back = document.querySelector(".icon-back");
let insideInfo = document.querySelector(".inside-info");
let collectorItems = document.querySelector(".choices");
let pages_info_country = document.querySelector(".page-info-country");

async function countries() {
  let fetchCountry = await fetch("data.json");
  let result = await fetchCountry.json();

  for (let i = 0; i < result.length; i++) {
    let parent = document.createElement("div");
    let country = document.createElement("button");
    let img = document.createElement("img");
    let txt_country = document.createElement("div");
    let name = document.createElement("div");
    let population = document.createElement("p");
    let region = document.createElement("p");
    let capital = document.createElement("p");
    // ---- className
    txt_country.className = "p-3";
    name.className = "mb-3 fw-bolder name-country";
    img.className = "img-fluid";
    country.type = "button";
    country.className = "country-ger  overflow-hidden rounded-3";
    parent.className = "col-lg-3 col-md-4 col-sm-6 mb-3 items item";

    img.alt = "";
    // ------- adding css Style
    img.style.cssText = "width: 100%; height: 200px; object-fit: cover;";
    country.style.cssText =
      "background-color: var(--white-header); color : var(--black-text); border:none; outline: none; text-align: start; width: 100%";

    // ---- adding data

    img.src = result[i].flag;
    name.textContent = result[i].name;
    population.textContent = `Population: ${result[i].population}`;
    region.textContent = `Region: ${result[i].region}`;
    capital.textContent = `Capital: ${result[i].capital}`;

    // ----- appending elements

    txt_country.append(name, population, region, capital);

    country.append(img, txt_country);

    parent.append(country);

    row_page.appendChild(parent);

    // ============ Africa continent ====================

    let parentAfrica = document.createElement("div");
    let africa = document.createElement("div");
    let img_africa = document.createElement("img");
    let txt_africa = document.createElement("div");
    let name_africa = document.createElement("div");
    let population_af = document.createElement("p");
    let region_af = document.createElement("p");
    let capital_af = document.createElement("p");

    if (result[i].region === "Africa") {
      // ------ className
      txt_africa.className = "p-3";
      name_africa.className = "mb-3 fw-bolder name-country";
      img_africa.className = "img-fluid";
      africa.className = "country-ger overflow-hidden rounded-3";
      parentAfrica.className =
        "col-lg-3 col-md-4 col-sm-6 mb-3 item item-africa";
      // ---- adding CSS Stlye
      africa.style.cssText =
        "background-color: var(--white-header); color : var(--black-text);";
      img_africa.style.cssText =
        "width: 100%; height: 200px; object-fit: cover;";
      // ----- adding data

      img_africa.src = result[i].flag;
      name_africa.textContent = result[i].name;
      population_af.textContent = `Population: ${result[i].population}`;
      region_af.textContent = `Region: ${result[i].region}`;
      capital_af.textContent = `Capital: ${result[i].capital}`;

      // ----- appending elements

      txt_africa.append(name_africa, population_af, region_af, capital_af);

      africa.append(img_africa, txt_africa);

      parentAfrica.append(africa);

      row_africa.appendChild(parentAfrica);
    }

    // ============= America continent =================

    let parentAmerica = document.createElement("div");
    let america = document.createElement("div");
    let img_america = document.createElement("img");
    let txt_america = document.createElement("div");
    let name_america = document.createElement("div");
    let population_am = document.createElement("p");
    let region_am = document.createElement("p");
    let capital_am = document.createElement("p");

    if (result[i].region === "Americas") {
      // ------- className
      txt_america.className = "p-3";
      name_america.className = "mb-3 fw-bolder name-country";
      img_america.className = "img-fluid";
      america.className = "country-ger  overflow-hidden rounded-3";
      parentAmerica.className = "col-lg-3 col-md-4 col-sm-6 mb-3 item";
      // ---- adding CSS Style
      america.style.cssText =
        "background-color: var(--white-header); color : var(--black-text);";
      img_america.style.cssText =
        "width: 100%; height: 200px; object-fit: cover;";

      // ------ adding data
      img_america.src = result[i].flag;
      name_america.textContent = result[i].name;
      population_am.textContent = `Population: ${result[i].population}`;
      region_am.textContent = `Region: ${result[i].region}`;
      capital_am.textContent = `Capital: ${result[i].capital}`;

      // ------- appending elements

      txt_america.append(name_america, population_am, region_am, capital_am);

      america.append(img_america, txt_america);

      parentAmerica.append(america);

      row_america.appendChild(parentAmerica);
    }

    // ============== Asia continent ======================
    let parentAsia = document.createElement("div");
    let asia = document.createElement("div");
    let img_asia = document.createElement("img");
    let txt_asia = document.createElement("div");
    let name_asia = document.createElement("div");
    let population_as = document.createElement("p");
    let region_as = document.createElement("p");
    let capital_as = document.createElement("p");

    if (result[i].region === "Asia") {
      // ------- className
      txt_asia.className = "p-3";
      name_asia.className = "mb-3 fw-bolder name-country";
      img_asia.className = "img-fluid";
      asia.className = "country-ger  overflow-hidden rounded-3";
      parentAsia.className = "col-lg-3 col-md-4 col-sm-6 mb-3 item";
      // ---- adding CSS Style
      asia.style.cssText =
        "background-color: var(--white-header); color : var(--black-text);";
      img_asia.style.cssText = "width: 100%; height: 200px; object-fit: cover;";

      // ------ adding data
      img_asia.src = result[i].flag;
      name_asia.textContent = result[i].name;
      population_as.textContent = `Population: ${result[i].population}`;
      region_as.textContent = `Region: ${result[i].region}`;
      capital_as.textContent = `Capital: ${result[i].capital}`;

      // ------- appending elements

      txt_asia.append(name_asia, population_as, region_as, capital_as);

      asia.append(img_asia, txt_asia);

      parentAsia.append(asia);

      row_asia.appendChild(parentAsia);
    }

    // =============== Europe continent ===================
    let parentEuro = document.createElement("div");
    let euro = document.createElement("div");
    let img_euro = document.createElement("img");
    let txt_euro = document.createElement("div");
    let name_euro = document.createElement("div");
    let population_eu = document.createElement("p");
    let region_eu = document.createElement("p");
    let capital_eu = document.createElement("p");

    if (result[i].region === "Europe") {
      // ------- className
      txt_euro.className = "p-3";
      name_euro.className = "mb-3 fw-bolder name-country";
      img_euro.className = "img-fluid";
      euro.className = "country-ger overflow-hidden rounded-3";
      parentEuro.className = "col-lg-3 col-md-4 col-sm-6 mb-3 item";
      // ---- adding CSS Style
      euro.style.cssText =
        "background-color: var(--white-header); color : var(--black-text);";
      img_euro.style.cssText = "width: 100%; height: 200px; object-fit: cover;";

      // ------ adding data
      img_euro.src = result[i].flag;
      name_euro.textContent = result[i].name;
      population_eu.textContent = `Population: ${result[i].population}`;
      region_eu.textContent = `Region: ${result[i].region}`;
      capital_eu.textContent = `Capital: ${result[i].capital}`;

      // ------- appending elements

      txt_euro.append(name_euro, population_eu, region_eu, capital_eu);

      euro.append(img_euro, txt_euro);

      parentEuro.append(euro);

      row_euro.appendChild(parentEuro);
    }

    // ================ Oceania continent ====================
    let parentOcean = document.createElement("div");
    let ocean = document.createElement("div");
    let img_ocean = document.createElement("img");
    let txt_ocean = document.createElement("div");
    let name_ocean = document.createElement("div");
    let population_oc = document.createElement("p");
    let region_oc = document.createElement("p");
    let capital_oc = document.createElement("p");

    if (result[i].region === "Oceania") {
      // ------- className
      txt_ocean.className = "p-3";
      name_ocean.className = "mb-3 fw-bolder name-country";
      img_ocean.className = "img-fluid";
      ocean.className = "country-ger overflow-hidden rounded-3";
      parentOcean.className = "col-lg-3 col-md-4 col-sm-6 mb-3 item";
      // ---- adding CSS Style
      ocean.style.cssText =
        "background-color: var(--white-header); color : var(--black-text);";
      img_ocean.style.cssText =
        "width: 100%; height: 200px; object-fit: cover;";

      // ------ adding data
      img_ocean.src = result[i].flag;
      name_ocean.textContent = result[i].name;
      population_oc.textContent = `Population: ${result[i].population}`;
      region_oc.textContent = `Region: ${result[i].region}`;
      capital_oc.textContent = `Capital: ${result[i].capital}`;

      // ------- appending elements

      txt_ocean.append(name_ocean, population_oc, region_oc, capital_oc);

      ocean.append(img_ocean, txt_ocean);

      parentOcean.append(ocean);

      row_ocean.appendChild(parentOcean);
    }
  }
  // ------- Search Input
  let all = document.querySelectorAll(".row .item");
  let allNames = document.querySelectorAll(".row .item .name-country");

  searchInput.oninput = function () {
    allNames.forEach((ele, ind) => {
      if (this.value === "") {
        all[ind].style.cssText = "display: flex";
      } else if (
        ele.textContent.toLowerCase().includes(this.value.toLowerCase())
      ) {
        all[ind].style.cssText = "display: flex";
      } else {
        all[ind].style.cssText = "display: none";
      }
    });
  };

  // ------ Page Info Country
  let itemsNames = document.querySelectorAll(".row .items .name-country");
  let allItems = document.querySelectorAll(".row .items");

  let img_only = document.createElement("img");
  let info_count = document.createElement("div");
  let name_count = document.createElement("div");
  let inside_pages = document.createElement("div");
  let page_one = document.createElement("div");
  let page_two = document.createElement("div");
  let page_one_paragraph_one = document.createElement("div");
  let page_one_paragraph_two = document.createElement("div");
  let page_one_paragraph_three = document.createElement("div");
  let page_one_paragraph_four = document.createElement("div");
  let page_one_paragraph_five = document.createElement("div");
  let page_two_paragraph_one = document.createElement("div");
  let page_two_paragraph_two = document.createElement("div");
  let page_two_paragraph_three = document.createElement("div");
  let page_two_paragraph_four = document.createElement("div");
  let page_two_paragraph_five = document.createElement("div");
  let wholeEle = document.createElement("div");
  let borders_cntry = document.createElement("div");
  let wholeBorders = document.createElement("div");

  allItems.forEach((ele, ind) => {
    ele.addEventListener("click", function () {
      collectorItems.classList.replace("show-all", "hide-all");
      pages_info_country.classList.replace("hide-all", "show-all");

      // ----- adding className
      inside_pages.className = "d-flex align-items-start gap-5 inside-pages";
      name_count.className = "mb-4";
      wholeEle.className = "d-flex align-items-center whole-info";
      img_only.className = "img-countries";
      // ----
      name_count.style.cssText = "font-size: 36px; font-weight: 700;";
      wholeEle.style.cssText = "gap: 10rem";
      page_one.style.cssText = "margin-bottom:0.7rem;";
      page_two.style.cssText = "margin-bottom:0.7rem;";
      img_only.style.cssText = "width: 600px; object-fit:cover";
      // ---- Putting Data API
      img_only.src = result[ind].flag;
      name_count.textContent = `${result[ind].name}`;
      page_one_paragraph_one.textContent = `Native Name: ${result[ind].nativeName}`;
      page_one_paragraph_two.textContent = `Population: ${result[ind].population}`;
      page_one_paragraph_three.textContent = `Region: ${result[ind].region}`;
      page_one_paragraph_four.textContent = `Sub Region: ${result[ind].subregion}`;
      page_one_paragraph_five.textContent = `Capital: ${result[ind].capital}`;
      page_two_paragraph_one.textContent = `Top Level Damin: ${result[ind].topLevelDomain}`;
      // ======
      const newOne = result[ind].currencies;
      let [one, two, three] = newOne;
      page_two_paragraph_two.textContent = `Currencies: ${one?.code ?? "None"}`;
      const newTwo = result[ind].languages;
      let [ones, twos, threes] = newTwo;
      page_two_paragraph_three.textContent = `Languages: ${ones.iso639_1}, ${ones.iso639_2},${ones.name}`;

      // ==== convert alpha3 to name

      let newThree = result[ind].borders ?? [];

      borders_cntry.textContent = `Borders : ${newThree
        .map((ele) => {
          let country = result.find((eles) => {
            return eles.alpha3Code === ele;
          });
          return country?.name;
        })
        .join(" , ")}`;
      borders_cntry.style.cssText = " display: flex; gap: 1rem;";

      // ----- Appending elements
      page_one.append(
        page_one_paragraph_one,
        page_one_paragraph_two,
        page_one_paragraph_three,
        page_one_paragraph_four,
        page_one_paragraph_five,
      );
      page_two.append(
        page_two_paragraph_one,
        page_two_paragraph_two,
        page_two_paragraph_three,
        page_two_paragraph_four,
        page_two_paragraph_five,
        borders_cntry,
      );

      inside_pages.append(page_one, page_two);
      info_count.append(name_count, inside_pages);
      wholeEle.append(img_only, info_count);
      insideInfo.appendChild(wholeEle);
    });
  });

  // ---------- icon back ---------

  let iconBack = document.querySelector(".icon-back");

  iconBack.onclick = function () {
    collectorItems.classList.replace("hide-all", "show-all");
    pages_info_country.classList.replace("show-all", "hide-all");

    img_only.src = "";
    name_count.textContent = ``;
    page_one_paragraph_one.textContent = ``;
    page_one_paragraph_two.textContent = ``;
    page_one_paragraph_three.textContent = ``;
    page_one_paragraph_four.textContent = ``;
    page_one_paragraph_five.textContent = ``;
    page_two_paragraph_one.textContent = ``;
    page_two_paragraph_two.textContent = ``;
    page_two_paragraph_three.textContent = ``;
    borders_cntry.textContent = "";
  };
}

countries();

// ============ Filter list ============

let icon_filter = document.querySelector(".filter-by-region .head-filter");
let bottom_filter = document.querySelector(".bottom-filter");

icon_filter.onclick = function () {
  if (bottom_filter.classList.contains("hide")) {
    bottom_filter.classList.replace("hide", "show");
  } else {
    bottom_filter.classList.replace("show", "hide");
  }
};

// =======
let continent = document.querySelectorAll("ul li");
let pages = document.querySelectorAll(".page");

continent.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    pages.forEach((ele) => {
      ele.style.display = "none";
    });

    document.querySelector(e.currentTarget.dataset.contnent).style.display =
      "block";
  });
});
