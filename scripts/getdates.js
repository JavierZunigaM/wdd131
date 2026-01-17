// Get current year and populate the copyright year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get and display the last modified date
document.getElementById("lastModified").innerHTML = document.lastModified;