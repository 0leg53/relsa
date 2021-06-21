<h1> Relsa 🚂</h1>
<p>
  <img alt="Tests coverage" src="https://github.com/0leg53/relsa/blob/main/coverage/badge.svg" />
  <a href="https://www.npmjs.com/package/relsa"><img src="https://badge.fury.io/js/relsa.svg" alt="npm version"></a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  
</p>

> Relsa is javascript-made horizontal progress bar with switchable steps. No dependencies. My first project btw :)

<img alt="Demo GIF" src="https://github.com/0leg53/relsa/blob/main/demo/demo.gif" />

### 🏠 [Homepage](https://github.com/0leg53/relsa)

## Install

```sh
npm install relsa
```

# Usage

1. Include css- and js- files to page:

```html
<link rel="stylesheet" href="../dist/relsa.css" />
<script src="../dist/relsa.js"></script>
```

or

```js
import Relsa from 'relsa';
import '~/node_modules/relsa/module/relsa.css';
```

2. Add block with selector classname:

```html
<body>
  <div class="relsa"></div>
</body>
```

3. Call the Relsa's instance with 'container' property:

```js
var relsa = new Relsa({
  container: '.relsa',
});
```

# Options and methods:

### Options:

- `container` (String), `default: ".relsa-container"` — selector for Relsa's render node.

- `render` (Number), `default: 4 ` — sets quanity of rendering dots in Relsa.

- `startIndex` (Number), `default: 1` — sets initial active dot.

- `customDotClassName` (String), `default: ""` — adds custom classname for dots.

- `isResponsive` (Boolean), `default: true` — add compact view for small screens (max-width: 426px).

### Methods:

- `render()` — renders Relsa instance
- `setNext()` — sets next active dot
- `setPrev()` — sets previous active dot
- `setActiveItem(index)` — sets active dot by index

## Contacts

👤 **Oleg Sergeev**

- Github: [@0leg53](https://github.com/0leg53)
- LinkedIn: [@sergeevoleg](https://linkedin.com/in/sergeevoleg)
- Telegram: [@sergeevoleg](https://t.me/sergeevoleg)

## 🤝 Contributing

Contributions, issues and feature requests are highly welcome!
<br />
Feel free to check [issues page](https://github.com/0leg53/relsa/issues).
<br />
Also you can help me with this README :)

## Show your support

Press [project's ⭐️](https://github.com/0leg53/relsa)

Send 💸💰💸 [here](https://www.tinkoff.ru/sl/5VzYA1sA3Eh)

---

README was generated by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)
