# D3.js and D3.js tutorial

This is an introductory tutorial of D3.js and DC.js libraries.

## How to use

This project contains 3 main files: <b>styles.css</b>, <b>app.js</b> and <b>index.html</b>. The index.html file contains 6 blocks of html code and the app.js contains 6 blocks of javascript code. All of them are commented and numbered. To run one of them, just uncomment the code on both files with the same number. The styles file don't need to be changed.

## What's D3?

D3 (Data Driven Documents) is a JavaScript library used to create dynamic and interactive data visualization components with web elements (HTML, SVG and CSS).

Official Website: https://d3js.org/

Examples:

* https://bl.ocks.org/kerryrodden/766f8f6d31f645c39f488a0befa1e3c8
* http://bl.ocks.org/NPashaP/a74faf20b492ad377312
* https://naustud.io/tech-stack/
* https://bost.ocks.org/mike/hive/
* http://xliberation.com/googlecharts/d3concept.html
* https://archive.nytimes.com/www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html

More examples here: https://github.com/d3/d3/wiki/Gallery

## What's DC?

DC.js (Dimensional charting) is a multi-dimensional charting library built to work natively with crossfilter and rendered using d3.js.

Official Website: http://dc-js.github.io/dc.js/docs/html/index.html

Examples:

* https://dc-js.github.io/dc.js/examples/download-table.html
* https://dc-js.github.io/dc.js/examples/filter-stacks.html
* https://dc-js.github.io/dc.js/examples/scatter-brushing.html
* https://dc-js.github.io/dc.js/examples/table-pagination.html

More examples here: https://dc-js.github.io/dc.js/examples/

## Instalation

To use these two libraries it's necessary to download and import the js and css files as described below (in the same order):

```
<link rel="stylesheet" type="text/css" href="/css/dc.min.css" />

<script src="/js/d3.min.js"></script>
<script src="/js/crossfilter.min.js"></script>
<script src="/js/dc.min.js"></script>
```

But, there's no need for this because the project is ready to use. Just clone the project from the repository and run the command:

```
npm install
```

And then, on the root folder, run:

```
npm start
```

## D3

## Basic methods

These are the basic methods needed to work with D3:

* <b>select()</b> - Selects the first element on the page (Examples: "#id", ".class" or "htmlTag");
* <b>selectAll()</b> - Same as select(), but selects all the elements;
* <b>attr()</b> - Updates an attribute of one or more elements;
* <b>classed()</b> - Updates a class of an element;
* <b>text()</b> - Updates the content of an element with plain text;
* <b>html()</b> - Updates the content of an element with html;
* <b>style()</b> - Updates the style of an element;
* <b>data()</b> - Sets the data of the chart;
* <b>append()</b> - Inserts a tag on the end of an element;
* <b>enter()</b> - Identifies any element that need to be added when the data is longer than the selection;
* <b>exit()</b> - Identifies any element that need to be removed when the selection is longer than the data.

To use these methods, just call <b>d3.[method]</b>. And if you want, you can call the methods using the chain syntax. Ex.: <b>d3.select("div").style("color", "red")</b>.

## DC

## Basic methods

These are the basic methods needed to work with DC:

* <b>pieChart()</b> - Creates an object used to render a pie chart;
* <b>lineChart()</b> - Creates an object used to render a line chart;
* <b>barChart()</b> - Creates an object used to render a bar chart;
* <b>bubbleChart()</b> - Creates an object used to render a bubble chart;
* <b>compositeChart()</b> - Creates an object used to render a composite chart;
* <b>seriesChart()</b> - Creates an object used to render a series chart;
* <b>height</b> - Gets or sets the height of the chart;
* <b>width</b> - Gets or sets the width of the chart;
* <b>legend</b> - Sets the legend of the chart;
* <b>dimension</b> - Sets the dimension of the chart;
* <b>filter</b> - Filter the data of the chart;

Crossfilter methods:

* <b>crossfilter()</b> - Creates a crossfilter object;
* <b>groupAll()</b> - Group all records reducing to a single value;
* <b>add()</b> - Adds data to a crossfilter object;
* <b>remove()</b> - Removes all the data from a crossfilter object;
* <b>size()</b> - Returns the number of records in the crossfilter;
* <b>dimension()</b> - Creates a dimension;
* <b>dimension.group()</b> - Creates a group;