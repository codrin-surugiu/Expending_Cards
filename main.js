const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.add("active");
    withoutActives();
  });
});

const withoutActives = function () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
