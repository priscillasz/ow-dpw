/*-----NAVBAR-----*/
const toggleButton = document.getElementById('toggle-button');
const navList = document.getElementById('navlist');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
})