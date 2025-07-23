document.addEventListener("DOMContentLoaded", function() {
  console.log("Document height:", document.documentElement.scrollHeight);
  console.log("Window height:", window.innerHeight);
  console.log("Body height:", document.body.scrollHeight);
  console.log("All elements with height > 1000:", Array.from(document.querySelectorAll("*")).filter(el => el.getBoundingClientRect().height > 1000).map(el => ({ tag: el.tagName, className: el.className, height: el.getBoundingClientRect().height })));
});
