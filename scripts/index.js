let width = 5;
document.addEventListener( // listens to dom event, when page is loaded completely, this callback gets invoked.
    "DOMContentLoaded", () => {
        setTimeout(() => { // invocation is delayed by 2000ms, on purpose
            setInterval(startProgressBar, 1000); // then this function keeps invoking `startProgressBar` after each 1000ms.
        }, 1000);
    }
);
function startProgressBar() {
    // extending width of progress bar, displaying div element.
    width = (width + 5) % 100;
    document.getElementById("div2").style.width = `${width}%`;
}
function iconOnClickHandler() {
    window.open("https://github.com/itzmeanjan", "_blank");
}
