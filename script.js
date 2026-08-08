
const dialogSpider = document.getElementById('dialog__spiderman');

const dialogRobin = document.getElementById('dialog__robin');

const button1 = document.getElementById('button1');

const button2 = document.getElementById('button2');

const dialogCloseButton = document.querySelector('.dialog__close__button');

button1.addEventListener('click', () => {
    dialogSpider.showModal();
})

dialogCloseButton.addEventListener('click', () => {
    dialogSpider.close();
})



button2.addEventListener('click', () => {
    dialogRobin.showModal();
})

dialogCloseButton.addEventListener('click', () => {
    dialogSpider.close();
})


