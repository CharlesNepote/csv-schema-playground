(En français ci-dessous.)

# CSV Schema Playground: playing with Table Schema

CSV Schema Playground allows people to build or edit schema for their datasets, and to produce human readable schema documentation.

It is an extension of [Table Schema](https://specs.frictionlessdata.io/table-schema/) specification and fully compatible with it.

This tool is already usable while at early stage. CSV Schema Playground is a single page application all written in HTML, CSS and Javascript: just copy the file somewhere and it works! (You only have to be connected to the internet.)

If you want to save schemas, you will have to install the server part with nodejs.


# CSV Schema Playground : jouer avec le standard Table Schema

Cet outil permet de générer la documentation d'un jeu de données à partir d'un schéma au format [Table Schema](https://specs.frictionlessdata.io/table-schema/).

Table Schema est un format qui permet de décrire le contenu d'un jeu de données. Pour chaque champ il permet de fournir son libellé, son format, son type, des exemples de valeur, etc.
Un fichier Table Schema est exprimé au format JSON.

Ce générateur prend en entrée un fichier au format Table Schema. Il produit la documentation correspondante.

# changelog

0.0.2
* [x] validate json (CodeMirror plug-in) : https://codemirror.net/demo/lint.html
* [x] json download to test in IE (IE 11 ok, released 10/2013)
* [x] html doc download to test in IE (IE 11 ok)
* [x] https://codemirror.net/demo/fullscreen.html + https://developer.mozilla.org/en-US/docs/Web/CSS/z-index on #fullscreen id

0.0.1: initial release, released for few people.
