
const dialogToys = document.getElementById('dialogToys');
const button1 = document.getElementById('button1');
const dialogCloseButton = document.querySelector('.dialog__close__button');

button1.addEventListener('click', () => {
    dialogToys.showModal();
})

dialogCloseButton.addEventListener('click', () => {
    dialogToys.close();
})

