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
	<a href="../index.html">Main</a>
	<div class="dropdown">
		<button class="dropbtn-active">Celebrity</button>
		<div class="dropdown-content">
			<a href="Random.html">Random</a>
			<a href="Alessandra Ambrosio.html">Alessandra Ambrosio</a>
			<a href="Alexandra Daddario.html">Alexandra Daddario</a>
			<a href="Amanda Cerny.html">Amanda Cerny</a>
			<a href="Amanda Seyfried.html">Amanda Seyfried</a>
			<a href="Amouranth.html">Amouranth</a>
			<a href="Arizona Sky.html">Arizona Sky</a>
			<a href="Beatrice Barichella.html">Beatrice Barichella</a>
			<a href="Belle Delphine.html">Belle Delphine</a>
			<a href="Brooke Shield.html">Brooke Shield</a>
			<a href="Cherubesque.html">Cherubesque</a>
			<a href="Chyburd.html">Chyburd</a>
			<a href="Corinna Kopf.html">Corinna Kopf</a>
			<a href="Elizabeth Olsen.html">Elizabeth Olsen</a>
			<a href="Emila Clarke.html">Emila Clarke</a>
			<a href="Emily Ratajkowski.html">Emily Ratajkowski</a>
			<a href="Emilywoods1.html">Emilywoods1</a>
			<a href="Gloria Guida.html">Gloria Guida</a>
			<a href="Isabel Lucas.html">Isabel Lucas</a>
			<a href="Jennifer Connelly.html">Jennifer Connelly</a>
			<a href="Julia Rose.html">Julia Rose</a>
			<a href="Katarina Deme.html">Katarina Deme</a>
			<a href="Kendall Jenner.html">Kendall Jenner</a>
			<a href="Lana Rhoades.html">Lana Rhoades</a>
			<a href="Lauren Alexis.html">Lauren Alexis</a>
			<a href="Lyna Perez.html">Lyna Perez</a>
			<a href="Margot Robbie.html">Margot Robbie</a>
			<a href="Mathilda May.html">Mathilda May</a>
			<a href="Mercedes Blanche.html">Mercedes Blanche</a>
			<a href="Mila Sobolov.html">Mila Sobolov</a>
			<a href="Missy.html">Missy</a>
			<a href="MSFIIIRE.html">MSFIIIRE</a>
			<a href="Nata Lee.html">Nata Lee</a>
			<a href="Neol Leon.html">Neol Leon</a>
			<a href="Seltin Sweety.html">Seltin Sweety</a>
			<a href="Shaiden Rogue.html">Shaiden Rogue</a>
			<a href="Sophia Diamond.html">Sophia Diamond</a>
			<a href="Sophie Mudd.html">Sophie Mudd</a>
			<a href="Sydney Sweeney.html">Sydney Sweeney</a>
			<a href="Vanessa Mariposa.html">Vanessa Mariposa</a>
			<a href="Yua Mikami.html">Yua Mikami</a>
			<a href="Yui Hatano.html">Yui Hatano</a>
			<a href="Zhou Yan Xi.html">Zhou Yan Xi</a>
		</div>
	</div>
	<div class="dropdown">
		<button class="dropbtn">VSCO</button>
		<div class="dropdown-content">
			<a href="../VSCO/Clara.html">Clara</a>
			<a href="../VSCO/Rachel.html">Rachel</a>
			<a href="../VSCO/Riley.html">Riley</a>
		</div>
	</div>
	<div class="dropdown">
		<button class="dropbtn">Instagram</button>
		<div class="dropdown-content">
			<a href="../Instagram/Alicia.xcxc.html">Alicia.xcxc</a>
			<a href="../Instagram/Shanni.dornan.html">Shanni.dornan</a>
		</div>
	</div>
</div>
`;
	}
}

customElements.define('header-component', Header);