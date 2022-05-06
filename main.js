const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log("muieMie");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove(".active");
  });
}

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     console.log("muie");
//   });
// });
