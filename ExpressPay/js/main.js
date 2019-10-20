let elementCreator = function (tagname, classname, appendto) {
    let element = document.createElement(tagname);
    if (classname != null) {
        element.className = classname;
    }
    appendto.appendChild(element);

    return element;
}


let container = elementCreator('div', 'container', document.body);
let header = elementCreator('header', 'header', container);
let logo = elementCreator('img', null, header);
let services = elementCreator('div', null, container);
let servicesHead = elementCreator('section', 'servicesHead', services);
let chooseService = elementCreator('h1', null, servicesHead);
let btnSection = elementCreator('section', null, services);
let bigBtns = elementCreator('section', null, services);
let footer = elementCreator('footer', null, container);
let langDiv = elementCreator('div', null, footer)
chooseService.innerText = "Xidmeti Secin";
logo.src = "images/expresspay.png";



let langAZ = elementCreator('button', 'azbutton', langDiv);
let langEN = elementCreator('button', 'enbutton', langDiv);
let langRU = elementCreator('button', 'rubutton', langDiv);



for (let f in circleButtons.config) {
    let elements = elementCreator(circleButtons.element, 'circle-btn', btnSection)
    elements.innerText = circleButtons.config[f].text;
    elements.addEventListener('click', () => {
        document.location = circleButtons.config[f].link;
    })
}



for (let f in bigButtons.config) {
    let elements = elementCreator(bigButtons.element, 'big-btn',bigBtns)
    elements.innerText = bigButtons.config[f].textAZ;
    langEN.addEventListener('click', () => {
        chooseService.innerText = bigButtons.headEN;
        elements.innerText = bigButtons.config[f].textEN;

    })
    langRU.addEventListener('click', () => {
        chooseService.innerText = bigButtons.headRU;
        elements.innerText = bigButtons.config[f].textRU;


    })
    langAZ.addEventListener('click', () => {
        chooseService.innerText = bigButtons.headAZ;
        elements.innerText = bigButtons.config[f].textAZ;

    })

    elements.addEventListener('click', () => {
        document.location = bigButtons.config[f].link;
    })
}
