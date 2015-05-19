Puisque l'on peut faire des opérations, factorisons les en fonctions.

SCSS

@function pxtoem($pxval, $base) {
  @return ($pxval / $base) * 1em;
}

CSS

h1 {
  margin: pxtoem(24px, 16px);
}