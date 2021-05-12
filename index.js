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

!(function (d) {
  // All code will go in here. We've renamed 'document' to 'd'.
  var itemClassName = "carousel__photo";
  (items = d.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0),
    (moving = true);

  // Set classes
  function setInitialClasses() {
    // Targets the previous, current, and next items
    // This assumes there are at least three items.
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  }
  // Set event listeners
  function setEventListeners() {
    var next = d.getElementsByClassName("carousel__button--next")[0],
      prev = d.getElementsByClassName("carousel__button--prev")[0];
    next.addEventListener("click", moveNext);
    prev.addEventListener("click", movePrev);
  }

  // Next navigation handler
  function moveNext() {
    // Check if moving
    if (!moving) {
      // If it's the last slide, reset to 0, else +1
      if (slide === totalItems - 1) {
        slide = 0;
      } else {
        slide++;
      }
      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }
  // Previous navigation handler
  function movePrev() {
    // Check if moving
    if (!moving) {
      // If it's the first slide, set as the last slide, else -1
      if (slide === 0) {
        slide = totalItems - 1;
      } else {
        slide--;
      }

      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }
  function disableInteraction() {
    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)

    moving = true;
    // setTimeout runs its function once after the given time
    setTimeout(function () {
      moving = false;
    }, 500);
  }
  function moveCarouselTo(slide) {
    // Check if carousel is moving, if not, allow interaction
    if (!moving) {
      // temporarily disable interactivity
      disableInteraction();
      // Update the "old" adjacent slides with "new" ones
      var newPrevious = slide - 1,
        newNext = slide + 1,
        oldPrevious = slide - 2,
        oldNext = slide + 2;
      // Test if carousel has more than three items
      if (totalItems - 1 > 3) {
        // Checks and updates if the new slides are out of bounds
        if (newPrevious <= 0) {
          oldPrevious = totalItems - 1;
        } else if (newNext >= totalItems - 1) {
          oldNext = 0;
        }
        // Checks and updates if slide is at the beginning/end
        if (slide === 0) {
          newPrevious = totalItems - 1;
          oldPrevious = totalItems - 2;
          oldNext = slide + 1;
        } else if (slide === totalItems - 1) {
          newPrevious = slide - 1;
          newNext = 0;
          oldNext = 1;
        }
        // Now we've worked out where we are and where we're going,
        // by adding/removing classes we'll trigger the transitions.
        // Reset old next/prev elements to default classes
        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;
        // Add new classes
        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
      }
    }
  }
  function initCarousel() {
    setInitialClasses();
    setEventListeners();
    // Set moving to false so that the carousel becomes interactive
    moving = false;
  }
  // make it rain
  initCarousel();
})(document);
