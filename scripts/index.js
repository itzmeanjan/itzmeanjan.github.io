'use strict';
window.addEventListener('DOMContentLoaded', () => {
    let style = 'background: linear-gradient(to top right, #333333, white);';
    setInterval(() => {
        style = style === 'background: linear-gradient(to top right, #333333, white);' ? 'background: linear-gradient(to bottom right, #333333, white);' : 'background: linear-gradient(to top right, #333333, white);';
        document.getElementById('parentDiv').style = style;
    }, 10);
    document.getElementById('myProfileDiv').addEventListener('mouseenter', () => {
        document.getElementById('myProfileDiv').style = 'background: linear-gradient(to bottom right, #7763c0, rgb(85, 161, 167));';
        document.getElementById('profileText1').style = 'color: white';
        document.getElementById('profileText2').style='display: inline';
    });
    document.getElementById('myProfileDiv').addEventListener('mouseleave', () => {
        document.getElementById('myProfileDiv').style = 'background: linear-gradient(to bottom right, black, white);';
        document.getElementById('profileText1').style = 'color: black';
        document.getElementById('profileText2').style='display: none';
    });
    document.getElementById('articleButton').addEventListener('click', () => {
        document.getElementById('articleButton').style = 'background: violet;';
        setTimeout(() => {
            window.open('https://github.com/itzmeanjan?tab=repositories');
            document.getElementById('articleButton').style = 'background: linear-gradient(to bottom right,#ddeeff, #11bb11);';
        }, 100);
    });
    document.getElementById('projectButton').addEventListener('click', () => {
        document.getElementById('projectButton').style = 'background: violet;';
        setTimeout(() => {
            window.open('https://dev.to/itzmeanjan');
            document.getElementById('projectButton').style = 'background: linear-gradient(to bottom left,#ddeeff, #11bb11);';
        }, 100);
    });
});
