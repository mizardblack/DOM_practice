const toggleClassName = function (element) {
    if (element.classList.contains('dark_mode')) {
        // Remove the highlighst class
        element.classList.remove('dark_mode');

        // Add alt class
        element.classList.add('light_mode');
    } else {
        // Remove the alt class
        element.classList.remove('light_mode');

        // Add highlight class
        element.classList.add('dark_mode');
    }
}

const theElementIWantToFind = document.querySelector('.target');
const interval = 1000;
const timer = setInterval(function () {
    toggleClassName(theElementIWantToFind)
}, interval)