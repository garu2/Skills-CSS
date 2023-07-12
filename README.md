
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
1. [Repeating Linear Gradient](#repeating-linear-gradient)
1. [Subíndice y Superíndice](#subíndice-y-superíndice)
1. [Letra Capital](#letra-capital)
1. [Neon Effect](#neon-effect)
1. [Text Gradient](#text-gradient)
1. [Image Blur](#image-blur)
1. [Custon ScrollBar](#custon-scrollBar)
1. [Animation Emoji](#animation-emoji)
1. [Change Input Color](#change-input-color)
1. [Btn Hover 01](#btn-hover-01)
1. [Image Mirror](#image-mirror)
1. [Spinner](#spinner)
1. [Text Area Resize](#text-area-resize)
1. [Loader Animation 01](#loader-animation-01)
1. [Hover Opacity](#hover-opacity)
1. [Hover Btn 02](#hover-btn-02)
1. [Border Hover Animation](#horder-hover-animation)
1. [Heart Animation](#heart-animation)
1. [Card Slice Effect](#sard-slice-effect)
1. [Background Gradient Animated](#background-gradient-animated)
1. [Loader 3 Dots](#loader-3-dots)
1. [Expand Tag](#expand-tag)
1. [Customize Seacrh Input](#customize-seacrh-input)
1. [Background Image Text](#background-image-text)
1. [Hover Image Scale](#hover-image-scale)
1. [Input Shake Validator](#input-shake-validator)
1. [Hover Btn 03 Gradient](#hover-btn-03-gradient)
1. [Clock Loader](#clock-loader)
1. [Stroke Title](#stroke-title)
1. [Display Attributes of tag](#display-attributes-of-tag)
1. [Circular Image with Text](#circular-image-with-text)
1. [Autocomplete Input](#autocomplete-input)
1. [Hover Zoom Images](#hover-zoom-images)
1. [Hover Image Profile](#hover-image-profile)
1. [Custom Input Radio](#custom-input-radio)
1. [Add Styles to HTML](#add-styles-to-html)
1. [Ellipses Multiline](#ellipses-multiline)
1. [Image Preview Js](#image-preview-js)
1. [Marker li Custom Icon](#marker-li-custom-icon)
1. [Responsive Columns](#responsive-columns)

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
<sup>🚀 [Demo](https://htmlpreview.github.io/?https://github.com/garu2/Skills-CSS/blob/main/tips/AlignText/index.html)</sup>

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
<sup>🚀 [Demo](https://htmlpreview.github.io/?https://github.com/garu2/Skills-CSS/blob/main/tips/BgProperties/index.html)</sup>

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
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7165603686092197126?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

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
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7168220377687133445?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>
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
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7166651035304447237?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

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
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7169251986280369413?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

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
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7162731438821920006?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación 1</a></sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7164408226119716102?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación 2</a></sup>

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
### Repeating Linear Gradient

```html
<div class="box-bg"></div>
```
```css
.box-bg {
  	border: 1px solid gray;
  	width: 400px; height: 200px;
  	background: repeating-linear-gradient(
      	45deg,
      	tomato 0px,
      	tomato 20px,
      	white 20px,
     	 white 40px
	);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7176053681127771398?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Subíndice y Superíndice

```html
<h2>CO<sub>2</sub></h2>
<h2>E = mc<sup>2</sup></h2>
```
```css
sub {
  color: cyan;
}
sup { 
  color: red;
  font-size: 18px;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7174586662406589701?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Letra Capital

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.  Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. 
</p>
```
```css
p::first-letter {
  font-size: 80px;
  float: left;
  line-height: 60px;
  margin-right: 16px;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7171947172156476677?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Neon Effect

```html
<div class="neon"></div>
```
```css
.neon {
  width: 350px;
  height: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px cyan,
              0 0 25px cyan,
              0 0 50px cyan,
              0 0 100px cyan;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7170842024160136453?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Text Gradient

```html
<h2>Gradient Text</h2>
```
```css
h2 {
  width: fit-content;
  background: linear-gradient(to left,blueviolet,cyan);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7173300753975512326?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Image Blur

```html
<div class="bg-box">
  <div class="glass">
    <p>Merry Christmas</p>
  </div>
</div>
```
```css
.bg-box {
  width: 400px; height: 250px;
  background-image: url(./example.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
}
.glass {
  background-color: #ffffff44;
  backdrop-filter: blur(5px);
  padding: 0 20px;
  border-radius: 9px;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7178692241635020037?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Custon ScrollBar

```html
<div>
  Lorem ipsum dolor sit amet, consectetur 
  adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. 
  adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. 
  adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. 
</div>
```
```css
div {
  width: 400px; height: 200px;
  overflow: auto;
}
::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-track {
  background: gold;
}
::-webkit-scrollbar-thumb {
  background: blueviolet;
  border-radius: 15px;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7181215333087333637?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Animation Emoji

```html
<h1><span>✋</span> Hello!</h1>
```
```css
span{
  transform: rotate(-40deg);
  display: inline-block;
  animation: 1s infinite alternate movehand;
}
@keyframes movehand {
  0% {
    transform:rotate(-40deg) translate(10px);
  }
  50% {
    transform:rotate(-40deg) translate(0px);
  }
  100% {
    transform:rotate(-40deg) translate(10px);
  }
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7183830744941202694?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Change Input Color

```html
<form>
  <label>Checkbox:</label>
  <input type="checkbox"><br>
  <label>Radio1:</label>
  <input type="radio" name="test">
  <label>Radio2:</label>
  <input type="radio" name="test"><br>
  <label>Range:</label>
  <input type="range"><br>
</form>
```
```css
input {
  accent-color: gold;
}
input[type=radio] {
  accent-color: blueviolet;
}
input[type=range] {
  accent-color: cyan;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7186475076018130182?is_copy_url=1&is_from_webapp=v1&lang=es">Video Explicación</a></sup>

---
### Btn Hover 01

```html
<a href="#">Hover 01</a>
```
```css
a {
  border: 3px solid gold;
  text-decoration: none;
  padding: 20px;
  color: #000;
  background: linear-gradient(
    45deg, gold 50%, transparent 50%
  );
  background-position: 100%;
  background-size: 250%;
  transition: 0.5s background
}
a:hover {
  background-position: 0;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7189019780077063430?lang=es">Video Explicación</a></sup>

---
### Image Mirror

```html
<img src="./example.png" alt="rick">
<img src="./example.png" alt="rick">
```
```css
img:last-of-type {
  /* -webkit-box-reflect: right; Deprecate...*/
  /* transform: scaleX(-1); */
  transform: rotateY(180deg);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7190173300939656454?lang=es">Video Explicación</a></sup>

---
### Spinner

```html
<div class="spinner"></div>
```
```css
.spinner {
  width: 80px; height: 80px;
  border: 10px solid blueviolet;
  border-top: 10px solid plum;
  border-radius: 50%;
  animation: 1s linear infinite spiner;
}
@keyframes spiner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7191435906195148037?lang=es">Video Explicación</a></sup>

---
### Text Area Resize

```html
<textarea cols="30" rows="10"></textarea>
```
```css
textarea {
  border: 2px solid #000;
  resize: both;
  resize: horizontal;
  resize: vertical;
  resize: none;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7192721730589281542?lang=es">Video Explicación</a></sup>

---
### Loader Animation 01

```html
<div class="loader"></div>
```
```css
.loader {
  width: 60px; height: 60px;
  background-color: blueviolet;
  border-radius: 50%;
  animation: 1s scaler infinite linear;
}
@keyframes scaler {
  to {
    transform: scale(0);
    opacity: 1;
  }
  from {
    transform: scale(1);
    opacity: 0;
  }
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7194218916929948934?lang=es">Video Explicación</a></sup>

---
### Hover Opacity

```html
<section>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</section>
```
```css
section {
  display: flex;
  gap: 5px;
}
.card {
  width: 90px; height: 90px;
  background-color: aquamarine;
  border-radius: 5px;
  transition: 0.3s;
}
section:hover > :not(:hover) {
  opacity: 0.4;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7197019110604016902?lang=es">Video Explicación</a></sup>

---
### Hover Btn 02

```html
<a href="#">Hover 02</a>
```
```css
a {
  color: #fff;
  text-decoration: none;
  background-color: cyan;
  padding: 20px;
  border-radius: 10px;
}
a:hover {
  /* x, y, desenfoque, propagacion, color */
  box-shadow: 0 0 10px 0 cyan inset, 0 0 10px 4px cyan;
  background-color: transparent;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7197938613559069958?lang=es">Video Explicación</a></sup>

---
### Border Hover Animation

```html
<div class="profile"></div>
```
```css
.profile {
  width: 150px; 
  height: 150px;
  background: url(./profile.jpg);
  background-size: cover;
}
.profile::before {
  content: "";
  width: 90%; 
  height: 90%;
  border: 10px solid cyan;
  display: block;
  transition: 0.5s;
}
.profile:hover:before {
  transform: rotate(45deg);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7195343962259868933?lang=es">Video Explicación</a></sup>

---
### Heart Animation

```html
<div class="heart">❤️</div>
```
```css
.heart {
  font-size: 50px;
  width: fit-content;
  animation: 0.5s bigHeart alternate infinite;
}

@keyframes bigHeart {
  to { transform: scale(1); }
  from { transform: scale(1.5); }
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7199396821544848645?lang=es">Video Explicación</a></sup>

---
### Card Slice Effect

```html
<div class="box">Description</div>
```
```css
.box {
  width: 150px; height: 150px;
  background-color: aquamarine;
  display: grid;
  place-content: center;
  position: relative;
}
.box:before {
  content: "";
  position: absolute;
  inset: 0;
  background: url(./user.jpg);
  background-size: cover;
  transition: 0.5s;
}
.box:hover:before {
  transform: translateX(150px);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7200531103432625414?lang=es">Video Explicación</a></sup>

---
### Background Gradient Animated

```html
<div class="bg-gradient"></div>
```
```css
.bg-gradient {
  width: 300px; 
  height: 150px;
  background: linear-gradient(90deg, cyan, blueviolet);
  background-size: 400% 400%;
  border-radius: 10px; 
  animation: 2s gradient infinite;
}
@keyframes gradient {
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7201876476554136837?lang=es">Video Explicación</a></sup>

---
### Loader 3 Dots

```html
<div class="dots">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
```
```css
.dots {
  display: flex; 
  gap: 5px;
}
.dot {
  width: 30px; 
  height: 30px;
  background-color: blueviolet;
  border-radius: 50%;
  animation: 0.3s updown infinite
    alternate ease-in-out;
}
.dot:nth-child(2) {
  animation-delay: 0.1s;
}
@keyframes updown {
  0% { transform: translateY(25px); }
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7203116830179790085?lang=es">Video Explicación</a></sup>

---
### Expand Tag 
`details` y `summary`

```html
<details>
  <summary>
    Read more:
  </summary>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati deleniti quia, saepe nostrum incidunt, dicta 
  </details>

<details>
  <summary>
    Read more:
  </summary>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
</details>
```
```css
details {
  width: 300px;
  border: 1px solid gray;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7204474428460125445?lang=es">Video Explicación</a></sup>

---
### Customize Seacrh Input

```html
<div class="search">
  <img src="./lenss.png" alt="icon">
  <input type="search" placeholder="search">
</div>
```
```css
.search {
  background-color: tomato;
  width: fit-content;
  padding: 4px;
  display: flex;
  border-radius: 25px;
}
img {
  width: 20px;
  background-color: gold;
  padding: 10px;
  border-radius: 50%;
}
.search:hover input {
  width: 140px;
  padding: 0 10px 0 10px;
}
input {
  transition: 0.4s;
  width: 0;
  background-color: transparent;
  border: 0;
  outline: none;
  font-size: 20px;
  padding: 0;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7207232913568451846?lang=es">Video Explicación</a></sup>

---
### Background Image Text

```html
<h2 class="text">BgImage</h2>
```
```css
.text {
  font-size: 70px;
  background: url(./textImage.jpg);
  width: fit-content;
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 900;
  text-transform: uppercase;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7208359690676374790?lang=es">Video Explicación</a></sup>

---
### Hover Image Scale

```html
<div class="card">
  <img src="./controller.png" alt="image">
</div>
```
```css
.card {
  width: 200px; height: 200px;
  overflow: hidden;
  border-radius: 10px;
}
img {
  width: 100%; height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: 0.5s;
}
.card:hover img {
  transform: scale(1.2);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7205740752230567174?lang=es">Video Explicación</a></sup>

---
### Input Shake Validator

```html
<input type="text" pattern="[a-z]*">
```
```css
input {
  padding: 10px;
  border-radius: 5px;
  outline: none;
}
input:invalid {
  border: 2px solid tomato;
  animation: 0.2s valid 3;
}
@keyframes valid {
  to { transform: translateX(0); }
  from { transform: translateX(10px); }
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7212412070178852102?lang=es">Video Explicación</a></sup>

---
### Text Wave Animation

```html
<body>
  <span style="--n:1">B</span>
  <span style="--n:2">L</span>
  <span style="--n:3">A</span>
  <span style="--n:4">C</span>
  <span style="--n:5">K</span>
</body>
```
```css
span {
  animation: 1.5s waves infinite;
  display: inline-block;
  animation-delay: calc(0.1s * var(--n));
  font-size: 40px;
  font-weight: 800;
}
@keyframes waves {
  0%,40%,100% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(-30px);
  }
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7209809853689203974?lang=es">Video Explicación</a></sup>

---
### Hover Btn 03 Gradient

```html
<a href="#">HOVER 03</a>
```
```css
a {
  text-decoration: none;
  background: linear-gradient(
    90deg, aqua, fuchsia
  );
  padding: 15px 35px;
  color: #fff;
  border-radius: 7px;
  display: inline-block;
  transition: 0.4s transform;
}
a:hover {
  background-size: 200%;
  transform: scale(1.1);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7211093623901818117?lang=es">Video Explicación</a></sup>

---
### Clock Loader

```html
<div class="loader"></div>
```
```css
.loader {
  width: 70px; 
  height: 70px;
  border: 5px dotted blueviolet;
  border-radius: 50%;
  position: relative;
}
.loader:after {
  content: "";
  width: 3px; 
  height: 30px;
  background: darkblue;
  display: block;
  position: absolute;
  left: 35px; bottom: 35px;
  transform-origin: 0 100%;
  animation: 2s clock infinite;
}
@keyframes clock {
  to { transform: rotate(360deg); }
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7213392448192580869?lang=es">Video Explicación</a></sup>

---
### Stroke Title

```html
<h1>TITLE</h1>
```
```css
h1 {
  text-shadow: 4px 4px cyan;
    -webkit-text-stroke-color: #fff;
    -webkit-text-stroke-width: 1px;
  color: transparent;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7216436182706638085?lang=es">Video Explicación</a></sup>

---
### Display Attributes of tag

```html
<span data="Black">Code 💻</span>
```
```css
span:after {
  content: attr(data);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7226131669231635718?lang=es">Video Explicación</a></sup>

---
### Circular Image with Text

```html
<div class="circle">
  <img src="./aple.png" alt="aple">
</div>
<p>
	Lorem ipsum dolor, sit amet consec tetur adipi sicLorem ipsum dolor, sit amet consec tetur adipi sim ipsu dolor sit amet consectetur adipisim ipsum dolor, sit amet consec tetur adipi sicing elit. Enim omnis veniam facilis autem, ipsa doloribus dolor quasi repre henderit quod in quis atque facere consec tetur iste? Ipsam dolorum dignissimos facere ad! Lorem ipsum dolor, sit amet consec tetur adipisic Lorem ipsum 
</p>
```
```css
.circle {
  width: 100px;
  height: 100px;
  float: left;
  shape-outside: circle(50%);
}
img {
  width: 90%;
  height: 90%;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7223385383197805829?lang=es">Video Explicación</a></sup>

---
### Autocomplete Input

```html
<label>Lenguajes:</label>
<input type="text" list="lista">

<datalist id="lista">
  <!-- <option value="JavaScript"></option>
  <option value="Python"></option>
  <option value="Java"></option>
  <option value="C#"></option> -->
</datalist>
  
<script>
  const callApi = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/list");
    const dataJson = await data.json();
    //console.log(dataJson.message);
    let lista = document.querySelector("#lista");
    console.log(lista);
    dataJson.message.forEach(item => {
      let element = document.createElement("option");
      element.value = item;
      //console.log(element);
      lista.appendChild(element);
    });
  }
callApi();
</script>
```
<sup>⬆️ [back to table of contents](#tips)  </sup>
<sup>🎬 <a target="_blank" href="https://www.tiktok.com/@blackcode222/video/7227648625243999493?lang=es">Video Explicación</a></sup>

---
### Hover Zoom Images

```html
<div class="container">
  <div class="card">
    <img src="./one.jpg" alt="...">
  </div>
  <div class="card">
    <img src="./two2.jpg" alt="...">
  </div>
  <div class="card">
    <img src="./three.jpg" alt="...">
  </div>
  <div class="card">
    <img src="./four.jpg" alt="...">
  </div>
</div>
```
```css
.container {
  display: flex;
  width: 200px;
}
.card {
  flex: 1;
  overflow: hidden;
  filter: grayscale(1);
  transition: 0.5s;
}
.card img {
  width: 100px;
  height: 100px;
}
.card:hover {
  flex: 2;
  filter: grayscale(0);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

---
### Hover Image Profile

```html
<figure>
  <img src="./profile.jpg" alt="profile">
</figure>
```
```css
figure {
  width: 150px;
  height: 150px;
  border: 7px solid gray;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.5s;
  transform-origin: 0 100%;
  transform: scale(0.70)rotateZ(-10deg);
}
figure:hover { 
  transform: scale(0.70)rotateZ(0deg); 
}
figure:hover img { 
  transform: rotateZ(0deg); 
}
img {
  width: 100%; 
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
  transform: scale(1.2)rotateZ(10deg);
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

---
### Custom Input Radio

```html
<figure>
  <img src="./profile.jpg" alt="profile">
</figure>
```
```css
input[type=radio] {
  appearance: none;
  width: 25px; 
  height: 25px;
  border: 2px solid gold;
  border-radius: 50%;
}
input[type=radio]:checked::before {
  content: "";
  width: 100%; 
  height: 100%;
  background: linear-gradient(45deg,purple, red, gold);
  display: block;
  border-radius: 50%;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

---

### Add Styles to HTML

**Estilos en con la etiqueta `style`**
```html
<head>
  <style>
    h2 {
      color: blueviolet;
      font-size: 40px;
    }
  </style>
</head>
```
**Estilos en linea**
```html
<h2 style="color: green">Titulo Pricipal</h2>
```
**Estilos en un archivo `css`**
```html
<head>
  <link rel="stylesheet" href="./style.css">
</head>
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

---
### Ellipses Multiline

```html
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, iure? Voluptatem necessitatibus praesentium culpa rem odit neque facilis, hic quisquam, incidunt nobis omnis, laborum molestias voluptas eaque vitae eligendi ratione!
</p>
```
```css
p {
  width: 320px;
  display: -webkit-box;
  white-space: normal;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

---
### Image Preview Js

```html
<img 
  id="preview" 
  src="./preview.jpg" 
  height="200"
> 
<br>
<input type="file" id="input">
```
```js
let img = document.querySelector("#preview")
let file = document.querySelector("#input")

file.onchange = (e) => {
  if (file.files[0]) {
    img.src = URL.createObjectURL(
      file.files[0]
    )
  }
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

---
### Marker li Custom Icon

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item</li>
</ul>
```
```css
li {
  list-style: disc;
}
li::marker {
  content: "Paso " counter(list-item)": ";
  color: blueviolet;
}
li::marker {
  /* content: "🤪"; */
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

---
### Responsive Columns

```html
<div>
  <h2>The Title</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse temporibus accusantium iure sint. Dignissimos illum quaerat eveniet placeat, eum error blanditiis quos est hic tenetur quia aliquam corporis maxime?
  </p>
</div>
```
```css
div {
  border: 1px solid black;
  padding: 10px;
  border-radius: 8px;
  columns: 200px 2;
}
h2 {
  column-span: all;
  margin: 0;
}
```
<sup>⬆️ [back to table of contents](#tips)  </sup>

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
