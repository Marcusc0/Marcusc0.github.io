class Header extends HTMLElement {
	constructor() {
		super();
	}

connectedCallback() {
this.innerHTML = `
<style>
.topnav {
	overflow: hidden;
	background-color: #333;
}
.topnav a {
	float: left;
	display: block;
	color: #f2f2f2;
	text-align: center;
	padding: 15px 21.9px;
	text-decoration: none;
	font-size: 14px;
}
.topnav a:hover {
	background-color: #ddd;
	color: black;
}
.topnav a.active {
	background-color: #00ccff;
	color: #f2f2f2;
}
.dropdown {
	float: left;
	overflow: hidden;
}
.dropdown .dropbtn {
	font-size: 14px;
	border: none;
	outline: none;
	color: #f2f2f2;
	padding: 15px 21.9px;
	background-color: inherit;
	font-family: Arial, snas-serif;
	font-weight: bold;
	margin: 0;
}
.dropdown .dropbtn-active {
	font-size: 14px;
	border: none;
	outline: none;
	color: #f2f2f2;
	padding: 15px 21.9px;
	background-color: #00ccff;
	font-family: Arial, snas-serif;
	font-weight: bold;
	margin: 0;
}
.dropdown-content {
	display: none;
	position: absolute;
	background-color: #333;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	z-index: 1;
}
.dropdown-content a {
	float: none;
	color: #f2f2f2;
	padding: 15px 20px;
	text-decoration: none;
	display: block;
	text-align: left;
}
.dropdown:hover .dropbtn {
	background-color: #ddd;
	color: black;
}
.dropdown-content a:hover {
	background-color: #ddd;
	color: black;
}
.dropdown:hover .dropdown-content {
	display: block;
}
</style>
<div class="topnav">
	<a class="active" href="index.html">Main</a>
	<div class="dropdown">
		<button class="dropbtn">Celebrity</button>
		<div class="dropdown-content">
			<a href="Celebrity/Random.html">Random</a>
			<a href="Celebrity/Alessandra Ambrosio.html">Alessandra Ambrosio</a>
			<a href="Celebrity/Alexandra Daddario.html">Alexandra Daddario</a>
			<a href="Celebrity/Amanda Cerny.html">Amanda Cerny</a>
			<a href="Celebrity/Amanda Seyfried.html">Amanda Seyfried</a>
			<a href="Celebrity/Amouranth.html">Amouranth</a>
			<a href="Celebrity/Arizona Sky.html">Arizona Sky</a>
			<a href="Celebrity/Beatrice Barichella.html">Beatrice Barichella</a>
			<a href="Celebrity/Belle Delphine.html">Belle Delphine</a>
			<a href="Celebrity/Brooke Shield.html">Brooke Shield</a>
			<a href="Celebrity/Cherubesque.html">Cherubesque</a>
			<a href="Celebrity/Chyburd.html">Chyburd</a>
			<a href="Celebrity/Corinna Kopf.html">Corinna Kopf</a>
			<a href="Celebrity/Denise Richards.html">Denise Richards</a>
			<a href="Celebrity/Elizabeth Olsen.html">Elizabeth Olsen</a>
			<a href="Celebrity/Emilia Clarke.html">Emila Clarke</a>
			<a href="Celebrity/Emily Ratajkowski.html">Emily Ratajkowski</a>
			<a href="Celebrity/Emilywoods1.html">Emilywoods1</a>
			<a href="Celebrity/Emma Kotos.html">Emma Kotos</a>
			<a href="Celebrity/Gloria Guida.html">Gloria Guida</a>
			<a href="Celebrity/Isabel Lucas.html">Isabel Lucas</a>
			<a href="Celebrity/Jennifer Connelly.html">Jennifer Connelly</a>
			<a href="Celebrity/Julia Rose.html">Julia Rose</a>
			<a href="Celebrity/Katarina Deme.html">Katarina Deme</a>
			<a href="Celebrity/Kendall Jenner.html">Kendall Jenner</a>
			<a href="Celebrity/Lana Rhoades.html">Lana Rhoades</a>
			<a href="Celebrity/Lauren Alexis.html">Lauren Alexis</a>
			<a href="Celebrity/Lyna Perez.html">Lyna Perez</a>
			<a href="Celebrity/Margot Robbie.html">Margot Robbie</a>
			<a href="Celebrity/Mathilda May.html">Mathilda May</a>
			<a href="Celebrity/Mercedes Blanche.html">Mercedes Blanche</a>
			<a href="Celebrity/Mila Sobolov.html">Mila Sobolov</a>
			<a href="Celebrity/Missy.html">Missy</a>
			<a href="Celebrity/MSFIIIRE.html">MSFIIIRE</a>
			<a href="Celebrity/Nata Lee.html">Nata Lee</a>
			<a href="Celebrity/Neol Leon.html">Neol Leon</a>
			<a href="Celebrity/Rose Cassidy.html">Rose Cassidy</a>
			<a href="Celebrity/Seltin Sweety.html">Seltin Sweety</a>
			<a href="Celebrity/Shaiden Rogue.html">Shaiden Rogue</a>
			<a href="Celebrity/Sophia Diamond.html">Sophia Diamond</a>
			<a href="Celebrity/Sophie Mudd.html">Sophie Mudd</a>
			<a href="Celebrity/Summer Brookes.html">Summer Brookes</a>
			<a href="Celebrity/Sydney Sweeney.html">Sydney Sweeney</a>
			<a href="Celebrity/Vanessa Mariposa.html">Vanessa Mariposa</a>
			<a href="Celebrity/Yua Mikami.html">Yua Mikami</a>
			<a href="Celebrity/Yui Hatano.html">Yui Hatano</a>
			<a href="Celebrity/Zhou Yan Xi.html">Zhou Yan Xi</a>
		</div>
	</div>
	<div class="dropdown">
		<button class="dropbtn">VSCO</button>
		<div class="dropdown-content">
			<a href="VSCO/Clara.html">Clara</a>
			<a href="VSCO/Rachel.html">Rachel</a>
			<a href="VSCO/Riley.html">Riley</a>
		</div>
	</div>
	<div class="dropdown">
		<button class="dropbtn">Instagram</button>
		<div class="dropdown-content">
			<a href="Instagram/Alicia.xcxc.html">Alicia.xcxc</a>
			<a href="Instagram/Shanni.dornan.html">Shanni.dornan</a>
		</div>
	</div>
</div>
`;
	}
}

customElements.define('header-component', Header);