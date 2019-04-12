const selectElement = () => {
  d3.select("div")
      .text("Hello World!")
      // .html("<p>Hello World!</p>")
      .attr("class", "text")
      .style("color", "blue")
  ;
};

const selectAllElements = () => {
  d3.selectAll("div")
      .text("Hello World!")
      .attr("class", "text")
      .style("color", "red")
  ;
};

const setData = () => {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  d3.selectAll("div")
      .attr("class", "text")
      .data(data)
      .text((d, i) => d % 2 == 0 ? `${d} = par` : `${d} = ímpar`)
      .style("color", (d, i) => d % 2 == 0 ? "red" : "blue")
  ;
};

const cSSChart = () => {
  d3.select("#chart")
      .selectAll("div")
      .data([100, 50, 300, 200, 250, 150, 75, 220, 400, 340, 20, 420, 170, 390, 230])
      .enter()
      .append("div")
      .text((d, i) => d)
      .style("height", (d, i) => d)
      .attr("title", d => d)
  ;
};

const sVGChart = () => {
  var svg = d3.select("svg"),
      margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

  var x = d3
    .scaleBand()
    .rangeRound([0, width])
    .padding(0.1),
  y = d3.scaleLinear().rangeRound([height, 0]);

  var g = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.tsv("data.tsv").then(data => {
    return data.map(d => {
      d.frequency = +d.frequency;
      return d;
    });
  })
  .then(data => {
    x.domain(
      data.map(function(d) {
        return d.letter;
      })
    );
    y.domain([
      0,
      d3.max(data, function(d) {
        return d.frequency;
      })
    ]);

    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) {
        return x(d.letter);
      })
      .attr("y", function(d) {
        return y(d.frequency);
      })
      .attr("width", x.bandwidth())
      .attr("height", function(d) {
        return height - y(d.frequency);
      });
  })
  .catch(error => {
    throw error;
  });
};

const dCChart = () => {
  d3.json("data.json").then(data => {
    let monthChart = dc.pieChart("#month-chart"),
      yearChart = dc.pieChart("#year-chart"),
      expenseChart = dc.rowChart("#expense-chart");

    let cf = crossfilter(data);

    let monthDim = cf.dimension(d => d.month);
    let yearDim = cf.dimension(d => d.year);
    let nameDim = cf.dimension(d => d.name);

    let spendPerMonth = monthDim.group().reduceSum(d => +d.spent);
    let spendPerYear = yearDim.group().reduceSum(d => +d.spent);
    let spendPerName = nameDim.group().reduceSum(d => +d.spent);

    monthChart
      .dimension(monthDim)
      .group(spendPerMonth)
      .legend(dc.legend())
      .on("pretransition", chart =>
        chart
          .selectAll("text.pie-slice")
          .text(d => (d.data.value != 0 ? "R$ " + d.data.value.toFixed(2) : ""))
      );

    yearChart
      .dimension(yearDim)
      .group(spendPerYear)
      .legend(dc.legend())
      .on("pretransition", chart =>
        chart
          .selectAll("text.pie-slice")
          .text(d => (d.data.value != 0 ? "R$ " + d.data.value.toFixed(2) : ""))
      );

    expenseChart
      .dimension(nameDim)
      .group(spendPerName)
      .elasticX(true);

    dc.renderAll();

    document.getElementById("resetLink").addEventListener("click", () => {
      monthChart.filterAll();
      yearChart.filterAll();
      expenseChart.filterAll();
      dc.redrawAll();
    });
  });
};

(() => {
  /* Basic methods */
  /* 1 */
  // selectElement();
  /* 2 */
  // selectAllElements();


  /* Set data to an element */
  /* 3 */
  // setData();


  /* Building a simple bar chart using html and css */
  /* 4 */
  // cSSChart();


  /* Building a bar chart using svg */
  /* 5 */
  // sVGChart();


  /* Building a dashboard with DC.js */
  /* 6 */
  // dCChart();
})();