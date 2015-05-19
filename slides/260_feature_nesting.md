
Sass permet l'imbrication des sélecteurs, ceci afin de gagner en lisibilité.

SCSS

.container {
  border: 1px solid whitesmoke;
  article {
    margin-top: 10px;
  }
  .alert {
    colour: red;
  }
}

CSS

.container {
  border: 1px solid whitesmoke;
}
.container article {
  margin-top: 10px;
}
.container .alert {
  colour: red;
}
