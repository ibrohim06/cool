const styleSwitcherToggle = document.querySelector(".style__switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    console.log('style__switcher');
    document.querySelector(".style__switcher").classList.toggle('open');
})