const logo = document.getElementById("logo-tab");
const homeTab = document.getElementById("home");
const tabLinks = document.querySelectorAll(".nav-link");

// Hide home when any nav link is clicked
tabLinks.forEach((link) => {
  link.addEventListener("click", () => {
    homeTab.classList.add("hidden");
  });
});

// Show home when logo is clicked
logo.addEventListener("click", (e) => {
  e.preventDefault();

  // Remove 'active' class from other nav links
  tabLinks.forEach((link) => link.classList.remove("active"));

  // Show home
  homeTab.classList.remove("hidden");
  homeTab.classList.add("show", "active");

  // Hide all other tab panes
  document.querySelectorAll(".tab-pane").forEach((pane) => {
    if (pane.id !== "home") {
      pane.classList.remove("show", "active");
    }
  });
});

