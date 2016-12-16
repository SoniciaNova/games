//SoniciaNova website programming by Andrew Alban, 2016.
//This code is property of SoniciaNova. Piracy of this code is illegal.

//Define variables:

//Initial function:

function init() {
	replace('<div id="header"><a href="https://sonicianova.github.io/home"><img src="website_title.png" id="website_title" /></a></div><div id="navBar"><a href="https://sonicianova.github.io/games"><div class="navButton" type="button" id="gamesButton">GAMES</div></a><a href="https://sonicianova.github.io/home"><div class="navButton" type="button" id="homeButton">HOME</div></a><a href="https://sonicianova.github.io/programs"><div class="navButton" type="button" id="programsButton">PROGRAMS</div></a></div><br><br><h1>Games</h1><p>Here you can find all of the games we\'ve made.</p><div id="divider"></div><h2>Press the Arrow</h2><p>This is a challenging, fast paced skill game! Try to get over 100 points!</p><a href="https://sonicianova.github.io/press_the_arrow"><div class="playButton" id="ptaButton">PLAY</div></a><div id="divider"></div><h2>Cryptic Escape</h2><p>This is a difficult game in which you must solve different puzzles in order to open the door and proceed to the next room.</p><a href="https://sonicianova.github.io/games-crypticescape"><div class="playButton" id="ptaButton">PLAY</div></a>'); //This code creates the basic elements of the website.
}

//Tools:

function replace(object) { //This replaces what is currently inside of the mainContainer.
	document.getElementById("mainContainer").innerHTML = object;
}