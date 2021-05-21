const height_win = document.documentElement.clientHeight;
const back_to_top_btn = document.querySelector('.back-to-top');
const page_menu_pos = page_menu.offsetTop;
const page_menu_outer_pos = page_menu_pos + page_menu.clientHeight;
const scrollWindow = () => {
  if (window.pageYOffset > page_menu_outer_pos && !back_to_top_btn.classList.contains('back-to-top-visible')) {
    back_to_top_btn.classList.add('back-to-top-visible');
  }
  else {
    back_to_top_btn.classList.remove('back-to-top-visible');
  }
}
const backToTop = () => {
  window.scrollTo({top:0, behavior: "smooth"})
}
window.addEventListener('scroll',scrollWindow);
back_to_top_btn.addEventListener('click',backToTop)






