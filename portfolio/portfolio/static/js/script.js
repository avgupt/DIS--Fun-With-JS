var LANGUAGES = ["Python", "Java", "C++", "JavaScript", ""]
var DESIGN_TOOLS = ["Illustrator", "Figma", "InDesign", ""]

var swiper = new Swiper('.background-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: '.background-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.project-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.project-pagination',
      clickable: true,
    },
});

let code = document.getElementById("code");
let design = document.getElementById("design");

code.addEventListener("mouseover", viewCodingLanguages);
design.addEventListener("mouseover", viewDesignTools);

var i = 0;
function viewCodingLanguages() {
    setTimeout(function() {
        // console.log(i);
        code.innerHTML = LANGUAGES[i];
        i++;
        if (i < LANGUAGES.length) {
            viewCodingLanguages();
        } else {
            i = 0;
            code.innerHTML = "code";
        }
    }, 1000)
}

var j = 0;
function viewDesignTools() {
    setTimeout(function() {
        console.log(j);
        design.innerHTML = DESIGN_TOOLS[j];
        j++;
        if (j < DESIGN_TOOLS.length) {
            viewDesignTools();
        } else {
            j = 0;
            design.innerHTML = "design";
        }
    }, 1000)
}

let intro_text = document.getElementById("intro-text");

function viewText() {
    intro_text.classList.add("loaded");
}
