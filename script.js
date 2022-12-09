const bar = document.getElementById('bar');
const nav = document.getElementById('nvabar');

if (bar) {
    bar.addEventListener('click', () =>  {
        nav.classList.add(active);
    })
}