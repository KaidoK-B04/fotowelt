$(document).ready(function () {
  // Hide the dropdown content initially
  $(".dropdown-content").hide();

  // Toggle the dropdown on icon click (for smaller screens)
  $(".menu-icon").on("click", function () {
    $(".dropdown-content").slideToggle();
    $(this).toggleClass("active");
  });

  // Close the dropdown when clicking outside of it
  $(document).on("click", function (event) {
    if (!event.target.matches(".menu-icon")) {
      var dropdown = $(".dropdown-content");
      if (dropdown.is(":visible")) {
        dropdown.slideUp();
        $(".menu-icon").removeClass("active");
      }
    }
  });

  // Smooth scroll to anchor links
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top,
      },
      800,
      "swing",
      function () {
        window.location.hash = target;
      }
    );
  });
});

// Date calendar for booking
// Get a reference to the calendar container
const calendar = document.getElementById("calendar");

// Function to generate the calendar for February 2024
function generateCalendar() {
  // Define the number of days in February 2024
  const daysInFebruary = 29;

  // Create the header for the month
  const monthHeader = document.createElement("div");
  monthHeader.classList.add("month");
  monthHeader.textContent = "February 2024";
  calendar.appendChild(monthHeader);

  // Create the header row for the days of the week
  const daysRow = document.createElement("div");
  daysRow.classList.add("days");
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  daysOfWeek.forEach((day) => {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = day;
    daysRow.appendChild(dayCell);
  });
  calendar.appendChild(daysRow);

  // Create the dates grid
  const datesGrid = document.createElement("div");
  datesGrid.classList.add("dates");
  for (let i = 1; i <= daysInFebruary; i++) {
    const dateCell = document.createElement("div");
    dateCell.classList.add("date");
    dateCell.textContent = i;
    datesGrid.appendChild(dateCell);
  }
  calendar.appendChild(datesGrid);
}

// Call the function to generate the calendar
generateCalendar();
