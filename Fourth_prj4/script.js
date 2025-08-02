const viewBtn = document.querySelector(".view-model"),
  popup = document.querySelector(".popup"),
  CloseBtn = popup.querySelector(".close"),
  field = popup.querySelector(".field"),
  input = popup.querySelector("input"),
  copybtn = popup.querySelector(".copy");

viewBtn.addEventListener("click", function () {
  popup.classList.toggle("show");
});

CloseBtn.addEventListener("click", function () {
  viewBtn.click();
});

copy.addEventListener("click", function () {
  input.select();
  if (document.execCommand("copy")) {
    field.classList.add("active");
    copybtn.innerText = "Copied";
  }
});
