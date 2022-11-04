
<div align="center">
   <img height="100" src="https://res.cloudinary.com/dqd5x0s7w/image/upload/v1667315329/github/css-tips_urqtz3.png" alt="css image">

 <h1>Tips CSS</h1>
 ⚡️⭐️🌟Una colección de tips para ayudarte a mejorar sus habilidades de CSS.🌟⭐️⚡️
</div>

## Tips

1. [Align Text](#align-text)
1. [Background Image con Overlay](#background-image-con-overlay)
1. [Border Gradient](#border-gradient)
1. [Border vs Outline](#border-vs-outline)
1. [Box Shadow (Ej: Bandera 🇲🇽)](#box-shadow-ej-bandera-)
1. [Box Shadow to Image](#box-shadow-to-image)
1. [Button Style](#button-style)
1. [Center DIV with Flex](#center-div-with-flex)
1. [Center DIV with Position](#center-div-with-position)
1. [Dinamic Checkbox](#dinamic-checkbox)
1. [Change Color Cursor in textarea](#change-color-cursor-in-textarea)
1. [Divide Paragraph in 3 columns](#divide-paragraph-in-3-columns)
1. [Cursor del maus Personalizado](#cursor-del-maus-personalizado)
1. [Valores de la Propiedad Cursor](#valores-de-la-propiedad-cursor)
1. [Destacar primera Letra](#destacar-primera-letra)
1. [Enumerar Headings](#enumerar-headings)
1. [Cambiar el Color de una Imagen](#cambiar-el-color-de-una-imagen)
1. [Forma Circular a una Imagen](#forma-circular-a-una-imagen)
1. [Cambiar la Imagen con un Hover](#cambiar-la-imagen-con-un-hover)
1. [Mostrar un Atributo como Valor](#mostrar-un-atributo-como-valor)
1. [Cambiar los iconos de una lista "ul"](#cambiar-los-iconos-de-una-lista-ul)
1. [Como rotar una imagen](#como-rotar-una-imagen)
1. [Estilizar un Input "email"](#estilizar-un-input-email)
1. [Diferencia entre `last-of-type` y `last-child`](#diferencia-entre-last-of-type-y-last-child)
1. [Linear Gradient "Degradado"](#linear-gradient-degradado)
1. [Background with Opacity in Image](#background-with-opacity-in-image)
1. [Flex Order](#flex-order)
1. [Paralax](#paralax)
1. [Vertical Word](#vertical-word)
1. [Overflow Scroll](#overflow-scroll)
1. [Customizar la selecciond de texto](#customizar-la-selecciond-de-texto)
1. [Separador de una Lista](#separador-de-una-lista)
1. [Text Decoration](#text-decoration)
1. [Alinear Texto y Imagen](#alinear-texto-y-imagen)
1. [Font Style](#font-style)
1. [Text Transform](#text-transform)
1. [Toggle](#toggle)
1. [ToolTip](#tooltip)
1. [Slide Effect](#slide-effect)
1. [Triangulo con CSS](#triangulo-con-css)
1. [Agregar tres puntos al final de un texto](#agregar-tres-puntos-al-final-de-un-texto)
1. [All Unset](#all-unset)
1. [Viñetas Triangulares](#vietas-triangulares)
1. [Word Break](#word-break)

---
### Align Text

La propiedad `text-align` nos ayuda a alinear horizontalmente,  sus propiedades mas usadas son: `center`, `justify`, `left`, `right`, `end`, `start`.

```css
p {
	text-align: center;
	text-align: justify;
	text-align: left;
	text-align: right;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a href="https://www.tiktok.com/@blackcode222/video/7142172810415295750?is_copy_url=1&is_from_webapp=v1&lang=es" target="_blank">Video Explicación</a></sup>

---
### Background Image con Overlay

```html
<div class="bg-image">
	<h3>Title</h3>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora maxime deserunt ea corrupti sequi dignissimos voluptate asperiores</p>
</div>
```
```css
.bg-image {
	width: 400px;
	height: 270px;
	background-image: linear-gradient(#ffffff79, #ffffff79),url(./rick-morty.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0  10%;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7156711163252706565?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---

### Border Gradient

```html
<div class="box"></div>
```
```css
.box {
	width: 300px;
	height: 100px;
	border: 10px  solid;
	border-image-slice: 1;
	border-image-source: linear-gradient(to right, blueviolet, pink);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

---
### Border vs Outline

```html
<div class="box"></div>
```
```css
.box {
	width: 200px;
	height: 100px;
	background-color: aquamarine;
	/* Border Properties*/
	border: 10px  dashed  blueviolet;
	border-top: 10px  dotted  violet;
	border-bottom: 20px  double  blue;
	/* Outline Properties*/
	outline: 10px  dotted  gold;
	outline-offset: 10px;
	outline-style: outset;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7155478970203409670?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Box Shadow (Ej: Bandera 🇲🇽)

```html
<div  class="box"></div>
```
```css
.box {
	width: 50px;
	height: 100px;
	background-color: green;
	box-shadow: 50px  0px  white, 100px  0px  red;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7124004364804558086?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Box Shadow to Image

```html
<img  src="./images/rick-sanchez.png">
```
```css
/*Values to: drop-shadow(x y blur color) */
img {
	filter: drop-shadow(10px  10px  30px  gold);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7121687655506611461?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Button Style

```html
<a href="#">Enviar Email</a>
```
```css
a {
	background-color: blueviolet;
	color: #fff;
	text-decoration: none;
	padding: 4px  12px;
	border: solid  2px  blueviolet;
	border-radius: 8px;
	transition: 0.3s;
}
a:hover {
	background-color: #fff;
	color: blueviolet;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7140709211977075974?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Center DIV with Flex

```html
<section>
	<div class="box">Content</div>
</section>
```
```css
section {
	display: grid;
	place-content: center;
	/* display: flex;
	justify-content: center; */
}
.box {
	border: solid;
	width: 200px;
	/* margin: 0 auto; */
	display: flex;
	justify-content: center;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7138089519508622597?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Center DIV with Position

```html
<section>
	<div  class="box">content</div>
</section>
```
```css
section {
	border: 1px  solid  black;
	width: 350px; 
	height: 200px;
	position: relative;
}
/*  Center Option 1 */
.box {
	border: 2px  solid  blueviolet;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
/*  Center Option 2 */
.box {
	border: 2px  solid  blueviolet;
	width: 100px;
	height: 30px;
	position: absolute;
	inset: 0;
	margin: auto;
}
/*Center Horizontally*/
.box {
	border: 2px  solid  blueviolet;
	width: 100px;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0  auto;
}
/*Center Vertically*/
.box {
	border: 2px  solid  blueviolet;
	width: 100px;
	height: 30px;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto  0;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7148561147178781958?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Dinamic Checkbox 

```html
<body>
	<input class="check"  type="checkbox" >
	<span></span>
	<!-- 😀 😔 -->
</body>
```
```css
span::after {
	content: "😔";
}
.check:checked ~ span:after {
	content: "😀";
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

---
### Change Color Cursor in textarea

```html
<textarea>  </textarea>
```
```css
textarea {
	padding: 5px  14px;
	font-size: 21px;
	caret-color: orangered;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7137035951871724806?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Divide Paragraph in 3 columns

```html
<p>
	It was the best of times, it was the worst
	of times, it was the age of wisdom, it was
	the age of foolishness, it was the epoch of belief, it was the 
</p>
```
```css
p {
	columns: 3;
	column-rule-style: solid;
	column-rule-color: blueviolet;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7129241523035639045?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Cursor del maus Personalizado

```html
<button>Test Cursor</button>
```
```css
button {
	width: 150px;
	cursor: var(--pizza), auto;
	cursor: var(--corazon), auto;
}
html {
	cursor: var(--mano), auto;
	--pizza: url("./images/pizza.png");
	--mano: url("./images/hand.png");
	--corazon: url("./images/heard.png");
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7112623043570158854?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Valores de la Propiedad Cursor

```html
<body>
	<div  class="cr-waiting">Waiting</div>
	<div  class="cr-help">Get help</div>
	<div  class="cr-crosshair">Crosshair</div>
	<div  class="cr-grab">Grab</div>
</body>
```
```css
div {
	border: solid 2px  #cecdcd;
	padding: 8px 3px;
	color: #5a5858;
}
.cr-waiting:hover { cursor: wait; }
.cr-help:hover { cursor: help; }
.cr-crosshair:hover { cursor: crosshair; }
.cr-grab:hover { cursor: grab; }
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7131797063527959814?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Destacar primera Letra

```html
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit
	Asperiores laborum amet cumque dolore facere praesentium
</p>
```
```css
p::first-letter {
	font-size: 40px;
	color: blue;
	text-shadow: 5px  5px  5px  black;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7112979625520794886?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Enumerar Headings

```html
<div class="titulos">
	<h1>Título uno</h1>
	<h1>Título dos</h1>
	<h1>Título tres</h1>
	<h1>Título cuatro</h1>
</div>
```
```css
.titulos {
	counter-reset: heading;
}
h1:before {
	content: counter(heading)". ";
	counter-increment: heading;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7111140941829819654?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Cambiar el Color de una Imagen

```html
<div class="image">
	<img src="./images/jungle.jpg"  alt="jngle image"  width="400"  height="300">
</div>
```
```css
.image img {
	filter: grayscale(100%);
	filter: brightness();
	filter: contrast();
	filter: saturate()
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7113334278645206277?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Forma Circular a una Imagen

```html
<img  src="./images/dunas.jpg"  alt="dunas">
```
```css
img {
	width: 200px;
	height: 200px;
	aspect-ratio: 4/3;
	object-fit: cover;
	border-radius: 50%;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7127986598993612037?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Cambiar la Imagen con un Hover

```html
<div class="contenedor">
	<img src="./images/dunas.jpg" />
	<img class="over" src="./images/sea.jpg" />
</div>
```
```css
.contenedor {
	position: relative;
	width: 250px;
	height: 160px;
}
.contenedor  img {
	position: absolute;
	width: 100%;
	height: 100%;
	transition: 1.5s;
}
.contenedor  img.over:hover {
	opacity: 0;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7117341080089021701?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Mostrar un Atributo como Valor

```html
<section>
	<a href="https://google.com/">Google</a>
	</br>
	<a href="https://google.com/"></a>
</section>
```
```css
a:empty::before {
	content: attr(href);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7112258229052165381?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Cambiar los iconos de una lista "ul"

```html
<ul>
	<li>Example list 1</li>
	<li>Example list 2</li>
	<li>Example list 3</li>
	<li>Example list 4</li>
	<li>Example list 4</li>
	<li>Example list 4</li>
</ul>
```
```css
ul { list-style: none; }
li { position: relative; }
li:before {
	content: "";
	width: 20px;
	height: 20px;
	background-image: url(./iconStart.png);
	background-size: 100%;
	display: inline-block;
	position: absolute;
	left: -30px;
	top: 3px;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7150126448420867334?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Como rotar una imagen

```html
<body>
	<img  src="./images/rick-sanchez.png">
	<img  src="./images/arrow-right.png">
</body>
```
```css
img {
	transform: rotateY(0deg);
	transform: rotateX(0deg);
	transform: rotate(360deg);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7132885484707007749?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Estilizar un Input "email"

```html
<div class="box-email">
	<input  type="email">
</div>
```
```css
input {
	font-size: inherit;
	padding: 10px;
	border-radius: 10px;
	border: 2px  solid  blueviolet;
	outline: none;
}
.box-email { position: relative; }
.box-email:before {
	content: "email";
	position: absolute;
	top: -10px;
	left: 20px;
	background-color: #fff;
	padding: 0  4px;
	color: blueviolet;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7159004164352216325?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Diferencia entre `last-of-type` y `last-child`

```html
<section>
	<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, asperiores.</p>
	<p>Optio nulla perferendis officiis quo deserunt eum sint quis aliquam dignissimos</p>
	<p>quas aperiam vero eius dolorem corporis asperiores?</p>
	<!-- <img src="" alt=""> -->
</section>
```
```css
p:last-of-type {
	color: red;
}
p:first-of-type {
	font-weight: 800;
}
p:last-child {
	color: violet;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7122609043448941830?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Linear Gradient "Degradado"

```html
<div class="box"></div>
```
```css
.box {
	border: 1px  solid  gray;
	width: 300px;
	height: 200px;
	/*lg(direccion, color %, color %)*/
	background:
	linear-gradient(violet  10%, aqua  50%);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7153993063839452422?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Background with Opacity in Image

```html
<div>
	<h4>Title Card</h4>
	<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam.</p>
</div>
```
```css
div {
	width: 250px;
	height: 200px;
	position: relative;
	padding: 10px;
}
div::after {
	content: "";
	background-image: url(./images/dunas.jpg);
	background-size: cover;
	position: absolute;
	inset: 0;
	opacity: 0.5;
	z-index: -1;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7135540971202153733?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Flex Order

```html
<div  class="flex-container">
	<div  class="item c-1">1</div>
	<div  class="item c-2">2</div>
	<div  class="item c-3">3</div>
</div>
```
```css
.flex-container {
	display: flex;
}
.item {
	width: 70px; 
	height: 70px;
	background-color: gold;
	border: 1px  solid  gray;
}
.c-1 { order: 6; }
.c-2 { order: 4; }
.c-3 { order: 9; }
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

---
### Paralax

```html
<section>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam nisi corporis tenetur consequuntur voluptatibus? Neque quaerat omnis est! Voluptas quae eligendi iure, aliquid consequuntur amet corrupti odit perferendis explicabo.</p>
	<div class="image"></div>
	<p>numquam nisi corporis tenetur consequuntur voluptatibus? Neque quaerat omnis est! Voluptas quae eligendi iure, aliquid consequuntur amet corrupti odit perferendis explicabo.</p>
</section>
```
```css
section {
	border: 1px  solid  gray;
	width: 400px; 
	height: 300px;
	overflow: auto;
}
.image {
	height: 150px;
	background-image: url(./sabana.jpg);
	background-attachment: fixed;
	background-size: contain;
	background-position: center ;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

---
### Vertical Word

```html
<body>
	<!-- <h2>Vertical Word.</h2> -->
	<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, asperiores. Optio nulla perferendis officiis quo deserunt eum sint saepe praesentium quis aliquam dignissimos, quas aperiam vero eius dolorem corporis asperiores?</p>
</body>
```
```css
p, h2 {
	writing-mode: vertical-lr;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7116661910111538438?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Overflow Scroll

```html
<div>
	Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto
	de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y estándar de las industrias desde el año.
</div>
```
```css
div {
	width: 300px;
	height: 180px;
	border: 1px  solid  gray;
	overflow: auto;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7139616834633911557?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Customizar la seleccion de texto

```html
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit.
	Pariatur, doloribus incidunt. Modi asperiores corrupti
	accusantium beatae corporis iure rem, animi ea velit?
</p>
```
```css
p::selection {
	color: blueviolet;
	background-color: aquamarine;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7114439205094280453?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Separador de una Lista

```html
<ul>
	<li>ListOne</li>
	<li>ListTwo</li>
	<li>ListThree</li>
</ul>
```
```css
ul {
	display: flex;
}
ul > li {
	list-style: none;
}
ul > li:not(:last-child)::after{
	content: "-";
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7114068125536029958?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Text Decoration

```html
<p>
	Lorem ipsum dolor, modi consequatur voluptates possimus.
	<a  href="#">consectetur adipisicing</a>
	aperiam atque beatae odit, cupiditate voluptatibus rem
	<a  href="#">aperiam atque beatae odit, cupiditate voluptatibus rem </a>
</p>
```
```css
a {
	text-decoration-color: aqua;
	text-decoration-thickness: 4px;
	text-decoration-style: solid;
}
a:hover {
	text-decoration-style: dotted;
	text-decoration-color: orange;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7134351812777217286?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Alinear Texto y Imagen

```html
<body>
	<p>Simply dummy text of the printing and
	<img  src="./images/dunas.jpg"  alt="dunas">
	typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.text ever since the 1500s, when an unknown It has survived not only five centuries, but also the leap into electronic
	</p>
</body>
```
```css
img {
	float: right;
	margin-left: 15px;
}
p {
	text-align: justify;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7143547014674976005?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Font Style

```html
<p>This is a example paragraph</p>
```
```css
p {
	font-style: normal;
	font-style: italic;
	font-style: oblique;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7145024517876780293?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Text Transform

```html
<h2>Texto De ejemplo</h2>
```
```css
h2 {
	text-transform: uppercase;
	text-transform: lowercase;
	text-transform: capitalize;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7120011224917478661?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Toggle

```html
<div class="toggle-box ">
	<div  class="circle"></div>
</div>
```
```css
.toggle-box {
	width: 70px; 
	height: 40px;
	background-color: blueviolet;
	border-radius: 25px;
	display: flex;
	align-items: center;
	padding: 0  2px;
	cursor: pointer;
}
.circle {
	background-color: #fff;
	width: 35px; height: 35px;
	border-radius: 50%;
}
.toggle-box.dark {
	justify-content: right;
}
```
```js
let  toggle = document.querySelector(".toggle-box");
toggle.addEventListener('click', () => {
	toggle.classList.toggle("dark")
})
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

---
### ToolTip

```html
<p>
	Lorem<span tooltip="Tooltip Content">ipsum</span>
	dolor sit, eius dolorem corporis asperiores?
</p>
```
```css
span {
	border-bottom: solid  2px  #000;
	position: relative;
}
span::after {
	content: attr(tooltip);
	position: absolute;
	font-size: 15px;
	top: -35px;
	left: 0;
	background-color: aquamarine;
	border-radius: 5px;
	display: none;
}
p  span:hover::after {
	display: block;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7125940974475332869?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Slide Effect

```html
<div  class="box">
	<div  class="child">this is a title</div>
</div>
```
```css
.box {
	height: 150px; width: 200px;
	border: 2px  solid  gray;
	position: relative;
	overflow: hidden;
}
.box:hover .child {
	transform: translateX(-200px);
}
.child {
	width: 200px; height: 50px;
	background-color: aquamarine;
	position: absolute;
	right: -200px;
	transition: 1s;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7147351505329261830?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Triangulo con CSS

```html
<div class="triangle"></div>
```
```css
.triangle {
	width: 0px;
	height: 0px;
	/* background-color: aqua; */
	border-left: 50px  solid  transparent;
	border-right: 50px  solid  transparent;
	border-bottom: 100px  solid  blueviolet;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7160855412579863814?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Agregar tres puntos al final de un texto

```html
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit.
	Pariatur, doloribus incidunt. Modi asperiores corrupti
	accusantium beatae corporis iure rem, animi ea velit?
</p>
```
```css
p {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 200px;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7115030819466398982?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### All Unset
```html
<a href="#">Example</a>
```
```css
a {
	text-decoration: none;
	color: #000;
	background-color: cyan;
	padding: 6px  23px;
	border-radius: 9px;
	/* all: unset; */
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7115806299215990022?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Viñetas Triangulares

```html
<ul>
	<li>Título uno</li>
	<li>Título dos</li>
	<li>Título tres</li>
	<li>Título cuatro</li>
</ul>
```
```css
ul {
	list-style: none;
}
ul  li::before {
	content: "";
	border-color: transparent  #000;
	border-style: solid;
	border-width: 7px  0  7px  10px;
	display: block;
	width: 0;
	position: relative;
	left: -20px;
	top: 18px;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7111666171958627589?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Word Break

```html
<h1>WORDBREAK</h1>
```
```css
h1 {
	word-break: break-all;
	width: 40px;
	line-height: 35px;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7130379186627153157?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---

<a href="https://github.com/garu2/Skills-CSS">
  <table align="center" >
      <tr>
          <td>
            👉 &nbsp;&nbsp; <strong>Si te sirvió Deja Tu:</strong> ⭐️
          </td>
      </tr>
  </table>
</a>
</hr>
<a href="https://www.tiktok.com/@blackcode222?is_from_webapp=1&sender_device=pc">
  <table align="center" >
      <tr>
          <td>
            🎬 &nbsp;<strong>@blackcode222</strong> 👍
          </td>
      </tr>
  </table>
</a>
