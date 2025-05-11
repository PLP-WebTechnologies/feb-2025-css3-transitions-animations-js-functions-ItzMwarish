// This script handles the theme toggle and name saving functionality
window.onload = function () {
  //here, we check if the user has a saved theme in localStorage
  const theme = localStorage.getItem("theme");

  const name = localStorage.getItem("name");

  // If theme is 'dark', apply the dark class to <body>
  if (theme === "dark") {
    document.body.classList.add("dark");
  }

  // If the user has a name saved, greet them
  if (name) {
    document.getElementById("greeting").textContent = `Welcome back, ${name}!`;
  }
};

// When the toggleTheme button is clicked
document.getElementById("toggleTheme").addEventListener("click", () => {
  // Toggle the dark class on <body> (switches theme)
  document.body.classList.toggle("dark");

  // Save the current theme to localStorage
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// When the saveName button is clicked
document.getElementById("saveName").addEventListener("click", () => {
  // Get the value from the input field
  const name = document.getElementById("username").value;

  // Save the name to localStorage
  localStorage.setItem("name", name);

  // Update the greeting text
  document.getElementById("greeting").textContent = `Welcome, ${name}!`;
});
