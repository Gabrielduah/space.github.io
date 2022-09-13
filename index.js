let open = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');


open.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");

    if(visibility ==="false") {
        nav.setAttribute("data-visible", true);
        open.setAttribute("aria-expanded", true)
    }else {
        nav.setAttribute("data-visible", false)
        open.setAttribute("aria-expanded", false)
    }
    
})