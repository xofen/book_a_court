const dropdowns = document.querySelectorAll(".dropdown");
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const main = document.querySelector('main');

const toggleDropdown = (event) => {
  event.stopPropagation();
  const dropdown = event.currentTarget.closest(".dropdown");
  dropdown.classList.toggle("opened");
};

const selectOption = (event) => {
  const option = event.currentTarget;
  const dropdown = option.closest(".dropdown");
  const input = dropdown.querySelector("input");

  dropdown.querySelectorAll(".option").forEach((opt) => {
    opt.classList.remove("selected");
  });

  option.classList.add("selected");
  input.value = option.textContent;
};

const closeDropdownFromOutside = () => {
  dropdowns.forEach((dropdown) => {
    if (dropdown.classList.contains("opened")) {
      dropdown.classList.remove("opened");
    }
  });
};

body.addEventListener("click", closeDropdownFromOutside);

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", toggleDropdown);
  dropdown.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", selectOption);
  });
});

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
    main.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    main.classList.remove('dark-mode');
  }
});