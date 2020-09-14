//javascript
// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);
// message.addClass('beautText');

//jQuery
//content to be removed
var contents = $('#contents');
//storing content in a variable to change later
var contentsParent = contents.parent();
//renove contents from page
contents.remove();

//colors to be cycled
const colors = ['red', 'green','blue']

//create a random number to use
function randoNum (type, min=0, max=3) {
  return type[Math.floor(Math.random() * (max - min) + min)];
}


//create a div to attach content to
const div = $('<div></div>').attr('class', 'focus')

//create message in variable
const message = $('<h1>Get back to work dummy!</h1>').attr('class', 'beautText').css('color', randoNum(colors));
//append the message to the div
message.appendTo(div);
//add div to contents
div.appendTo(contentsParent);
//animate message
message.animate({fontSize: '10em'});
// helper function for retrieving a new, random image
function getNewImage (e) {
	$.ajax({
    method: 'GET',
    url: 'https://picsum.photos/list',
    success: result => {
     const image = randoNum(result, 0, result.length);
     $(e.target).attr('src', 'https://unsplash.it/1200/800?image=' + image.id);
    },
    error: err => console.log(err)
	});
}

// get a random image from unsplash and add it to the page in place of distracting content
$.ajax({
  method: 'GET',
  url: 'https://picsum.photos/list',
  success: function(result) {
   const image = randoNum(result, 0, result.length);
   $('<img>').attr('src', `https://unsplash.it/1200/800?image=` + image.id)
     .attr('height', '500px').attr('width', 'auto')
     .click(e => getNewImage(e)) // generate new, random image when image is clicked
     .appendTo(div) // add to page
     .hide().fadeIn('slow'); // fade in image
  },
  error: err => console.log(err)
});


//append to the parent content of page
// message.appendTo(contentsParent);

// alerts of any div click
$('div').click(function() {
  alert('I mean it!!!');
});
