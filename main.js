
document.addEventListener('DOMContentLoaded', ()=> {
    let stickersEffect;
    const toggleModeBtn = document.querySelector('.toggle-cap-container');

    toggleModeBtn.addEventListener('click', ()=> {
        document.body.classList.toggle('dark-mode');
    })
    const cursorTxt = document.querySelector('.cursorTxt');

    const cursorHtmlEl = document.querySelector('.cursor');

    if(cursorHtmlEl && cursorHtmlEl.clientWidth) {
        const main = document.querySelector('main');
        const mainImgs = main.querySelectorAll('img');
        
        stickersEffect = new StickersEffect(main, mainImgs, cursorTxt);
        stickersEffect.init();

        const cursor = new Cursor(cursorHtmlEl, cursorTxt);
        [...document.querySelectorAll('.clickable')].forEach(el => {
            el.addEventListener('mouseenter', () => cursor.enter());
            el.addEventListener('mouseleave', () => cursor.leave());
        });
    }
})