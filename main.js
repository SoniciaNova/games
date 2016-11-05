

//All programming by Andrew Alban, founder of SoniciaNova, 2016

//Define variables:

pageWidth = getWidth();

//Initial function run when page loads:

function init() {
	replace("header",'<a href="https://sonicianova.github.io/home"><img src="https://images.cooltext.com/4699727.png" id="main_logo" alt="SoniciaNova" /></a>');
	replace("navbar",'<a class="nav_link" href="https://sonicianova.github.io/games"><div class="nav_button">GAMES</div></a><a class="nav_link" href="https://sonicianova.github.io/home"><div class="nav_button">HOME</div></a><a class="nav_link" href="https://sonicianova.github.io/programs"><div class="nav_button">PROGRAMS</div></a>');
	replace("container",'<h1 class="title">Games</h1><div class="divider"></div><p class="subtitle">Press the Arrow</p><p class="text">This is a fun and intense skill game that is very addicting! Press the arrow key in the corresponding direction of the white arrow and opposite the direction of the black arrow within one second to score as many points as you can! Try to beat your hi-score!</p><a href="https://sonicianova.github.io/games-press_the_arrow"><div class="play_button">PLAY</div></a><br><p class="subtitle">Cryptic Escape</p><p class="text">This is a challenging puzzle game in which you must solve 8 levels in order to escape. This contains a variety of puzzles that are fun to crack!</p><a href="https://sonicianova.github.io/games-crypticescape"><div class="play_button">PLAY</div></a>');
}

//Main functions page uses:



//Tools:

function replace(x,y) {
	document.getElementById(x).innerHTML = y;
}