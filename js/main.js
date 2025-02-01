//Step 1: Select the element the user will click on to show the menu
const btn = document.querySelector('.toggle-button');

//Step 2: Add a click event to the button
btn.addEventListener('click', function(){
    // when the button is clicked, add that special class name to the hidden element
    // note: do not add a period to the classList element because it already knows it's a class
    document.querySelector('nav').classList.toggle('show-nav');
});