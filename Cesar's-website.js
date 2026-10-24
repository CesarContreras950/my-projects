const main = () => {
    console.log("App started!");
}
const btn = document.querySelector('.submit-btn');
if (btn) {
    btn.addEventListener('click', function(event) {
        event.preventDefault(); 
        console.log("The button was successfully clicked!");
    })
} else {
    console.error("Button not found!");
}

// Call the function so it actually runs
main.js ()
document.querySelector('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    console.log("The button was successfully clicked!");
    // This stops the page from reloading!
    // Your code here
});
 


  