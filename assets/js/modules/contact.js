export const initContactForm = function () {
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  if (!form || !formBtn) return;

  // Validasi input untuk mengaktifkan/menonaktifkan tombol submit
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }

  // Mengosongkan form dan mengunci tombol kembali saat disubmit
  form.addEventListener("submit", function () {
    setTimeout(() => {
      form.reset();
      formBtn.setAttribute("disabled", "");
    }, 500);
  });
};
