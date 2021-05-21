const page_menu = document.querySelector('.page-menu__wrapper');
page_menu.addEventListener('click', (e) => {
  e.preventDefault();
  let link = e.target;
  if (!link.classList.contains('page-menu__link')) {
    return;
  }
  let section_item = document.querySelector(link.hash)
  scrollToTarget(section_item);



})

const scrollToTarget = (section) => {
    if (section != undefined) {
        let target_pos = section.offsetTop;
        window.scrollTo({
            top: target_pos,
            behavior: "smooth"
        });
    }
}
