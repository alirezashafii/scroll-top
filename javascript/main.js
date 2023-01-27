$(document).ready(function () {
  let scroll_top = $("div");

  scroll_top.hide(300);

  $(window).scroll(function () {
    $(this).scrollTop() > 200 ? scroll_top.show(300) : scroll_top.hide(300);
  });

  scroll_top.on("click", () => {
    $("html").animate({ scrollTop: 0 }, 500);
  });
});
