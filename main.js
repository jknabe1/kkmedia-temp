
document.addEventListener('DOMContentLoaded', ()=> {
    const toggleModeBtn = document.querySelector('.toggle-cap-container');

    toggleModeBtn.addEventListener('click', ()=> {
        document.body.classList.toggle('dark-mode');
    })
})
