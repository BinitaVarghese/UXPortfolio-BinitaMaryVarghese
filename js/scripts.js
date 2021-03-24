
function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className = ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

function s () {
  var x = document.getElementById('myImgtoggle')
  if (x.className === 'showimage1') {
    x.className = 'showimage2'
  } else {
    x.className = 'showimage1'
  }
}

function setToggle () {
  var x = document.getElementById('myNavtoggle')
  x.className = 'navtoggle'
}

function setImgToggle () {
  var y = document.getElementById('myImgToggle')
  y.className = ''
}


//Get the button:
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
