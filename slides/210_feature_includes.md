## Inclusions de fichiers

SCSS permet de découper le code source en plusieurs fichiers pour gagner en maintenabilité.

SCSS

body {
  background: whitesmoke;
}

// Fichier possédant h1 {color: blue;}
@import "partials/typo";


CSS

body {
  background: whitesmoke;
}

h1 {
  color: blue;
}


/!\ Il faut bien distinguer @import CSS vs Sass
