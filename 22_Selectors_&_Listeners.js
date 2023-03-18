// Selector: Selects the element by type
const target = document.querySelector('h1')

// event handler function. can be customized
function evetnHandler() {
    console.log('h1 was clicked')
}

// adding event listener to the element
target.addEventListener('click', evetnHandler)