const searchBtn = document.getElementById("search-btn");
        const searchBar = document.querySelector(".search-bar");

        searchBtn.addEventListener("click", () => {
            searchBar.classList.toggle("d-none"); // Toggle visibility on click
        });

        $(document).ready(function(){
          $('.nav-link').click(function(){
            $('.nav-link').removeClass('btn-primary');
            $('.nav-link').removeClass('active');
            $(this).addClass('btn-primary');
            $(this).addClass('active');
          });
        });

        document.getElementById("testModeSwitch").addEventListener("click", function() {
          if (this.checked) {
            document.body.classList.add("active"); // Add class for styling changes
          } else {
            document.body.classList.remove("active"); // Remove class for styling changes
          }
        });
        function toggleTestMode() {
          var testModeButton = document.getElementById('testModeButton');
          testModeButton.classList.toggle('active');
        }
        function toggleColor(element) {
          if (element.style.color === "blue") {
            element.style.color = "black";
          } else {
            element.style.color = "blue";
          }
        }
        function toggleColor(element) {
          // Update classes to toggle active state and background color
          element.classList.toggle("active");
        }
        var checkbox = document.getElementById('myCheckbox');

  // Add a click event listener to the checkbox
  checkbox.addEventListener('click', function(event) {
    // Prevent the default behavior of the checkbox
    event.preventDefault();
    checkbox.checked = true;
  });
  const ellipsisIcon = document.getElementById('ellipsis5');
  const leftArrowIcon = document.getElementById('left-arrow5');
  const mailIcon = document.getElementById('mail-icon5');
  const boxContainer = document.getElementById('box-container5');

  // Add click event listener to the ellipsis icon
  ellipsisIcon.addEventListener('click', function() {
      // Toggle the visibility of left arrow icon, mail icon, and box container
      leftArrowIcon.style.display = leftArrowIcon.style.display === 'none' ? 'inline' : 'none';
      mailIcon.style.display = mailIcon.style.display === 'none' ? 'inline' : 'none';
      boxContainer.style.display = boxContainer.style.display === 'none' ? 'block' : 'none';
  });









