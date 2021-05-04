function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function audioServices() {
  document.getElementById("myDropdown1").classList.toggle("show");
  document.getElementById("contact").classList.add("open");
  document.getElementById("visual-services").classList.toggle("mobile-open");
}

function visualServices() {
  document.getElementById("myDropdown2").classList.toggle("show");
  document.getElementById("contact").classList.add("open");
  document.getElementById("media-services").classList.toggle("mobile-open");
}

function mediaServices() {
  document.getElementById("myDropdown3").classList.toggle("show");
  document.getElementById("contact").classList.add("open");
  document.getElementById("event-services").classList.toggle("mobile-open");
}

function eventServices() {
  document.getElementById("myDropdown4").classList.toggle("show");
  document.getElementById("contact").classList.add("open");
  document.getElementById("contact").classList.toggle("mobile-open");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var contact = document.getElementById("contact");
    var dropdown = document.getElementsByClassName("dropdown");

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        contact.classList.remove("open");
        contact.classList.remove("mobile-open");
        dropdown.classList.remove("mobile-open");
      }
    }
  }
};
