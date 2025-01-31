document.addEventListener("DOMContentLoaded", function () {
  // Show current year in the footer
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Show last modified date
  document.getElementById("lastModified").textContent = document.lastModified;

  // Temperature and wind speed variables
  const temperature = 22; // Celsius
  const windSpeed = 5; // km/h

  function calculateWindChill(temp, wind) {
      if (temp <= 10 && wind > 4.8) {
          return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2);
      }
      return "N/A";
  }

  // Display wind chill factor
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("windChill").textContent = `${windChill} °C`;
});