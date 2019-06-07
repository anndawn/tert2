var svg=d3.select("body").append("svg")
                  .attr("height","100%").attr("width","100%");

var LH=d3.scaleLinear(dataArray)
                 .domain([0,d3.max(dataArray)])
                 .range([550,0])
var BW=d3.scaleBand(dataArray)
                   .domain(d3.range(0, dataArray.length))
                   .range([0, 1200]);
                   .paddingInner(0.08);
                   .paddingOuter(0.7);


var yAxis=d3.axisLeft(LH)
var xAxis=d3.axisBottom(BW)

var SC= d3.scaleSequential(dataArray)
                  .domain([0,d3.max(dataArray)])
                  .interpolator(d3.interpolateWarm)

svg.append("g").attr("class", "y axis")
      .attr("transform","translate(20,8)")
      .call(yAxis);
svg.append("g").attr("class","x axis")
      .attr("transform","translate(-31,560)")
      .call(xAxis);
svg.selectAll("rect")
   .data(dataArray)
   .enter()
   .append("rect")
   .attr("height", LH)
   .attr("width",BW.bandwidth())
   .attr("fill", SC)
   .attr("x", function(d,i) {return BW(i);})
   .attr("y", function(d) {return (560-LH(d));})
svg.append("g").attr("class","tooltip")
   .data(dataArray)
   .enter()
   .append("text")
   .text(function (d) {
     return d
   })
   .attr("x", function(d,i) {return BW(i);})
   .attr("y", function(d) {return (560-LH(d));})
