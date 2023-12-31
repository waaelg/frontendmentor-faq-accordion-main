document.querySelectorAll(".question").forEach(function (fi) {
  fi.addEventListener("click", function () {
    if (this.parentElement.classList.contains("active")) {
      this.parentElement.classList.remove("active");
    } else {
      document.querySelectorAll(".faqs-item").forEach(function (fi) {
        fi.classList.remove("active");
      });
      this.parentElement.classList.add("active");
    }
  });
});
