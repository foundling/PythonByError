const breadcrumbs = document.querySelectorAll('.breadcrumb'); 
const direction = {39: 1, 37: -1};
let activeBreadcrumb = [].filter.call(breadcrumbs, el => el.classList.contains('active'))[0];
let activeIndex = [].slice.call(breadcrumbs).indexOf(activeBreadcrumb);

function navigate(e) {

    let dir = direction[e.keyCode]; 

    if (!dir || activeIndex + dir >= breadcrumbs.length || activeIndex + dir < 0)
        return 

    activeIndex += dir;

    breadcrumbs[activeIndex].click();


}

document.addEventListener('keydown', navigate);
