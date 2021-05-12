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
  setTimeout(showSlides, 4000);
}

var serviceSlideIndex = 0;
showServiceSlides();

function showServiceSlides() {
  var i;
  var serviceSlides = document.getElementsByClassName("myServiceSlides");
  for (i = 0; i < serviceSlides.length; i++) {
    serviceSlides[i].style.display = "none";
  }
  serviceSlideIndex++;
  if (serviceSlideIndex > serviceSlides.length) {
    serviceSlideIndex = 1;
  }
  serviceSlides[serviceSlideIndex - 1].style.display = "block";
  setTimeout(showServiceSlides, 4000); // Change image every 2 seconds
}

function audioServices() {
  document.getElementById("myDropdown1").classList.toggle("show");
  document.getElementById("visual-services").classList.toggle("open");
}

function visualServices() {
  document.getElementById("myDropdown2").classList.toggle("show");
  document.getElementById("media-services").classList.toggle("open");
}

function mediaServices() {
  document.getElementById("myDropdown3").classList.toggle("show");
  document.getElementById("event-services").classList.toggle("open");
}

function eventServices() {
  document.getElementById("myDropdown4").classList.toggle("show");
  document.getElementById("contact").classList.toggle("open");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var contact = document.getElementById("contact");
    var dropdown = document.getElementsByClassName("dropdown");

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      var openDropdowns = dropdown[i];

      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        contact.classList.remove("open");
        openDropdowns.classList.remove("open");
      }
    }
  }
};

window.onclick = function (event) {
  if (event.target.matches(".read-more")) {
    document.getElementById("bio-more").classList.toggle("bio-more");
    document.getElementById("read-more").classList.toggle("hide-button");
  }
};
