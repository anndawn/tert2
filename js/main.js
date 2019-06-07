// console.log($("#choice1 option:selected").text());

d3.csv("data.csv", function(data) {
  var    nest = d3.nest()
                  .key(function(d) { return d.LOCATION; })
                  .entries(data);

  let datai=nest[0]["values"];
  let init=datai.filter(d=>{return d["MFGER"]-0>0})
  console.log(init);
  let fperset=[]
  let initpie=init.map((d)=>{return {Time:d.Time, fper:parseInt((d.fper-0).toFixed(2)*100), mper:100-((d.fper-0).toFixed(2)-0)*100}})
  console.log(initpie);
//piechart
for (var i = 0; i < initpie.length; i++) {
            let dset=[];
            dset[0]=initpie[i].fper;
            dset[1]=initpie[i].mper;
            let datapie=dset
            var widthpie = 350,
                heightpie = 300,
                radius = Math.min(widthpie, heightpie) / 2;

            var color = d3.scaleOrdinal()
               .range(["rgba(230, 48, 182, 0.74)","rgba(118, 168, 208, 0.79)"]);

            var arc = d3.arc()
               .outerRadius(function () {
                 if (Math.sqrt(i)<2) {
                   return 95/10*(i+1)
                 }else {
                   return (100-Math.sqrt(i))/10*(i+1)
                 }
               })
               .innerRadius(100/10*i);
            var labelArc = d3.arc()
                             .outerRadius(100/10*(i+1))
                             .innerRadius(100/10*i);

            var pie = d3.pie()
               .sort(null)
               .value(function(d) { return d; });

            var svgpie = d3.select("#piechar")
            // svgpie;

               svgpie.append("g").attr("width", widthpie).attr("height", heightpie).attr("class",'pb'+i)
               .attr("transform", "translate(" + widthpie/2+ ","+(heightpie/2-10)+")")

             var gpie = d3.select(".pb"+i).selectAll(".arc"+i)
                         .data(pie(datapie))
                         .enter().append("g")
                         .attr("class", "arc"+i);

             gpie.append("path")
                 .attr("d", arc)
                 .style("fill", function(d) { return color(d.data); });

             gpie.append("text")
                 .attr("transform", function(d) {
                        trans="translate(" + labelArc.centroid(d)[0]+","+(labelArc.centroid(d)[1])+ ")"
                   return trans; })
                 .attr("dy", ".35em")
                 .style("font-size","5px")
                 .text(function(d) {return d.data; });
                 gpie.append("text").attr("transform", function(d) {
                    trans="translate(0,"+(100/10*i+5)+")"
                    return trans; }).text(initpie[i].Time)
                    .style("font-size","6px")
               }



  //BarChart
      var heightbar=230;
      var widthbar=500;
      var margin = {left:20,right:20,top:10,bottom:0};
    // data
      let databar=init.map((d)=>{
        return{
          "MP":parseInt(d.mpu),
          "FP":parseInt(d.fpu),
          "Time":d.Time
        }
      })
      var datamale=[];var datebar=[];var datafe=[];
      for (let g of databar){
        datamale.push(g["MP"]);
        datebar.push(g["Time"]);
        datafe.push(g["FP"])
      }
    // scale
      var LH=d3.scaleLinear()
               .domain([0,d3.max(datamale)])
               .range([heightbar,0])
      var LHF=d3.scaleLinear()
              .domain([0,d3.max(datamale)])
              .range([0,heightbar])
      var BW=d3.scaleBand()
               .domain(datebar)
               .range([0, widthbar])
               .paddingInner(0.08)
               .paddingOuter(0.7)
      var SC= d3.scaleSequential()
                        .domain([0,d3.max(datamale)])
                        .interpolator(d3.interpolateRgb("rgb(215, 60, 154)", "rgb(106, 196, 255)") )
      var yAxisbar=d3.axisLeft(LH)
      var yAxisbar2=d3.axisLeft(LHF)
      var xAxisbar=d3.axisBottom(BW)
      // start drawing g
      let barboard=d3.select("#barchar")
      let bargroup= barboard.append("g").attr("transform","translate(50,"+margin.top+")");
      let labelgroup= barboard.append("g").attr("transform","translate(50,"+margin.top+")");
      let divm = d3.select("body").append("div")
                  .attr("id", "tooltipm")
                  .style("opacity", 0);
      // male rect
       bargroup.selectAll(".rectsma")
               .data(datamale)
               .attr("class","rectsma")
               .enter()
               .append("rect")
               .attr("height", function (d) {
                 console.log(LH(d));
                 return (heightbar-LH(d))
               })
               .attr("width",BW.bandwidth())
               .attr("fill", SC)
               .attr("x", function(d,i) {return BW(datebar[i])})
               .attr("y", function(d) {return LH(d) })
               .on("mouseover",function(d,i) {
                   divm.style("opacity", 1);
                   divm.html("Benin "+datebar[i]+"<br/>"+"Male: "+d)
                     .style("left", BW(datebar[i])+30+1/2*BW.bandwidth()+"px")
                     .style("top", (LH(d)+30)+ "px")
                   })
               .on("mouseout", function(d) {
                 divm.style("opacity", 0);
                 });
     let divf = d3.select("body").append("div")
                 .attr("id", "tooltipf")
                 .style("opacity", 0);
      // female rect
      bargroup.selectAll(".rectsfe")
             .data(datafe)
             .attr("class","rectsfe")
             .enter()
             .append("rect")
             .attr("height", function (d) {
               console.log(LHF(d));
               return (LHF(d))
             })
             .attr("width",BW.bandwidth())
             .attr("fill", SC)
             .attr("x", function(d,i) {return BW(datebar[i])})
             .attr("y", function(d) {return heightbar})
             .on("mouseover",function(d,i) {
                 divf.style("opacity", 1);
                 divf.html("Benin "+datebar[i]+"<br/>"+"Female: "+d)
                   .style("left", BW(datebar[i])+30+1/2*BW.bandwidth()+"px")
                   .style("top", (LHF(d)+heightbar+84)+ "px")
                 })
             .on("mouseout", function(d) {
               divf.style("opacity", 0);
               });
       // Axis
     bargroup.append("g").attr("class", "yaxb")
             .attr("transform","translate(0,0)")
             .call(yAxisbar);
     bargroup.append("g").attr("class", "yaxb2")
             .attr("transform","translate(0,"+heightbar+")")
             .call(yAxisbar2);
     bargroup.append("g").attr("class","xaxb")
              .attr("transform","translate(0,"+(heightbar)+")")
              .call(xAxisbar);
      bargroup.append("text")
              .attr("transform",
                 "translate(" + (widthbar) + " ," +
                                (heightbar + margin.top + 20) + ")")
              .style("text-anchor", "middle")
              .text("Year");
        bargroup.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 )
                .attr("x",0 - (heightbar/2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Number of Male Students");
        bargroup.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 )
                .attr("x",0 - (heightbar*1.5))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Number of Female Students");
// Linechart
      var height = 250;
      var width = 350;
      // data
          var parseTime = d3.timeParse("%Y");
          var tdata= init.map((d)=>{return{"Time" : parseTime(d.Time),
            "value" : +d.MFGER,
            "fv":+d.FGER,
            "mv":+d.MGER}
            });
            console.log(tdata,init);
          var max = d3.max(tdata,function(d){ return d.value; });
          let bisectDate = d3.bisector(function(d) { return d.Time; }).left;
      // scale
          var y = d3.scaleLinear()
                      .domain([0,max])
                      .range([height,0]);

        var x=d3.scaleTime()
            .domain(d3.extent(tdata, function(d) { return d.Time; })).range([0, width]);
          var yAxis = d3.axisLeft(y);
          var xAxis = d3.axisBottom(x).ticks(d3.timeYear.every(1));
      // start drawing
          let lineboard=d3.select("#linechar");
          var chartGroup = lineboard.append("g").attr("class","cg")
                      .attr("transform","translate("+margin.left+","+margin.top+")");
          var line = d3.line()
                      .x(function(d){ return x(d.Time); })
                      .y(function(d){ return y(d.value); });

          chartGroup.append("path")
                    .attr("d",line(tdata))
                    .attr("class","linestr")
          chartGroup.append("g")
                    .attr("class","xaxis")
                    .attr("transform","translate(0,"+height+")")
                    .call(xAxis);
          chartGroup.append("g")
                    .attr("class","yaxis")
                    .call(yAxis);
          chartGroup.append("text")
                  .attr("transform",
                     "translate(" + (width) + " ," +
                                    (height + margin.top + 20) + ")")
                  .style("text-anchor", "middle")
                  .text("Year");
          chartGroup.append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 0)
                    .attr("x",0 - (height/2))
                    .attr("dy", "1em")
                    .style("text-anchor", "middle")
                    .text("Gross Enrollment Rate");
          var focus = chartGroup.append("g")
                                .attr("class", "focus")
                                .style("display", "none");

              focus.append("line")
                  .attr("class", "x-hover-line hover-line")
                  .attr("y1", 0)
                  .attr("y2", height);

              focus.append("circle")
                  .attr("r", 7.5);

              focus.append("text")
                  .attr("x", 15)
                	.attr("dy", ".31em");
              d3.select(".cg")
                  .append("rect")
                  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                  .attr("class", "overlay")
                  .attr("width", width)
                  .attr("height", height)
                  .on("mouseover", function() { focus.style("display", null); })
                  .on("mouseout", function() { focus.style("display", "none"); })
                  .on("mousemove", mousemove(tdata));

                  function mousemove(data) {
                        return function () {
                        var x0 = x.invert(d3.mouse(this)[0]),
                            i = bisectDate(data, x0, 1),
                            d0 = data[i - 1],
                            d1 = data[i],
                            d = x0 - d0.Time > d1.Time - x0 ? d1 : d0;
                        focus.attr("transform", "translate(" + x(d.Time) + "," + y(d.value) + ")");
                        focus.select("text").text(function() { return (d.value).toFixed(2); });
                        focus.select(".x-hover-line").attr("y2", height - y(d.value));
                        focus.select(".y-hover-line").attr("x2", width + width);
                        console.log(1);
                      }
                    }

$(".choice").change(
  function(){
    // get value from user input
    let country= $("#choice1 option:selected").val();
    let country2= $("#choice1 option:selected").text();

    let gender= $("#choice2 option:selected").val();
    console.log(gender,country);
    let newdata=[];
    for(let v of nest){console.log(v);
     if (v["key"]==country) {
       newdata=v["values"]
     }
    }

    let newdata3=newdata.filter(d=>{return d["mpu"]-0>0})
       .map((d)=>{return{"Time": d.Time,"MP":parseInt(d.mpu),"FP":parseInt(d.fpu)}})
   // change bar graph
   function updateDataBar(dataq) {
        // get data
        let dm=[];
        let dateb=[];
        let df=[];
        for (let x of dataq){dm.push(x.MP);dateb.push(x.Time);df.push(x.FP)}
        // rescale
          BW.domain(dateb);
          LH.domain([0, d3.max(dm)]);
          LHF.domain([0, d3.max(dm)])
          SC.domain([0, d3.max(dm)])
          d3.selectAll("rect").remove()
          var selection =bargroup.selectAll(".rectsma").data(dm)
          var selection2=bargroup.selectAll(".rectsfe").data(df)
              selection
                .enter()
                .append("rect")
                .merge(selection)
                .attr("class","rectsma")
                .attr("y",heightbar)
                .attr("height",0)
                  .transition()
                    .duration(450)
                      .attr("height", function (d) {
                        console.log(LH(d));
                        return (heightbar-LH(d))
                      })
                      .attr("x",function(d,i) {return BW(dateb[i])})
                      .attr("width",BW.bandwidth())
                      .attr("y", function(d) {return LH(d) })
                      .attr("fill",SC)
                    d3.selectAll(".rectsma")
                      .on("mouseover",function(d,i) {
                          divm.style("opacity", 1);
                          divm.html(country2+" "+dateb[i]+"<br/>"+"Male: "+d)
                            .style("left", BW(dateb[i])+30+1/2*BW.bandwidth()+"px")
                            .style("top", (LH(d)+30)+ "px")
                          })
                      .on("mouseout", function(d) {
                        divm.style("opacity", 0);
                        });

              selection2
                .enter()
                .append("rect")
                .merge(selection2)
                .attr("class","rectsfe")
                .attr("y",heightbar)
                .attr("height",0)
                  .transition()
                    .duration(450)
                      .attr("height", function (d) {
                        console.log(LHF(d));
                        return LHF(d)
                      })
                      .attr("x",function(d,i) {return BW(dateb[i])})
                      .attr("width",BW.bandwidth())
                      .attr("y", heightbar)
                      .attr("fill",SC);
                    d3.selectAll(".rectsfe")
                      .on("mouseover",function(d,i) {
                          divf.style("opacity", 1);
                          divf.html(country2+" "+dateb[i]+"<br/>"+"Female: "+d)
                            .style("left", BW(dateb[i])+30+1/2*BW.bandwidth()+"px")
                            .style("top", (LHF(d)+heightbar+84)+ "px")
                          })
                      .on("mouseout", function(d) {
                        divf.style("opacity", 0);
                        });
              selection.exit().remove();
              selection2.exit().remove();

              var svg2 = d3.select("#barchar").transition();
                  svg2.select(".yaxb")
                      .duration(450)
                      .call(yAxisbar);
                  svg2.select(".yaxb2")
                      .duration(450)
                      .call(yAxisbar2);
                  svg2.select(".xaxb")
                      .delay(100)
                      .duration(500)
                      .call(xAxisbar);
                  bargroup.selectAll(".xaxb").data([]).exit().remove()
                  bargroup.append("g").attr("class","xaxb")
                           .attr("transform","translate(0,"+(heightbar)+")")
                           .call(xAxisbar);
              }
   updateDataBar(newdata3)
    // data for line graph
    function updateDataLine(dataq) {
    // rescale
  console.log(d3.max(dataq, function(d) { return d.value; }));
        x.domain(d3.extent(dataq,(d)=>d.Time));
        y.domain([0, d3.max(dataq, function(d) { return d.value; })]);
      var svg = d3.select("#linechar").transition();
          svg.select(".linestr")
              .duration(750)
              .attr("d",line(dataq));
          svg.select(".xaxis")
              .duration(750)
              .call(xAxis);
          svg.select(".yaxis")
              .duration(750)
              .call(yAxis);
              d3.select(".cg")
                  .append("rect")
                  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                  .attr("class", "overlay")
                  .attr("width", width)
                  .attr("height", height)
                  .on("mouseover", function() { focus.style("display", null); })
                  .on("mouseout", function() { focus.style("display", "none"); })
                  .on("mousemove", mousemove(dataq));
          }
if (gender=="MF") {
  let newdataa=newdata.filter(d=>{return d["MFGER"]-0>0})
    .map((d)=>{return{"Time": parseTime(d.Time),"value":d.MFGER-0}})
    updateDataLine(newdataa);
}else if (gender=="M") {
  let newdatab=newdata.filter(d=>{return d["MGER"]-0>0})
    .map((d)=>{return{"Time": parseTime(d.Time),"value":d.MGER-0}})
    updateDataLine(newdatab)
}else if(gender="F"){
  let newdatac=newdata.filter(d=>{return d["FGER"]-0>0})
    .map((d)=>{return{"Time": parseTime(d.Time),"value":d.FGER-0}})
    updateDataLine(newdatac)
}


      let newpie=newdata.map((d)=>{return {Time:d.Time, fper:parseInt((d.fper-0).toFixed(2)*100), mper:100-((d.fper-0).toFixed(2)-0)*100}})
      .filter(d=>{return d["fper"]-0>0})
      console.log(newpie);

      function updatepie0(det) {
        d3.select("#piechar").selectAll("g").remove()
        for (var i = 0; i < det.length; i++) {
         let dset=[];
         dset[0]=det[i].fper;
         dset[1]=det[i].mper;
         function updatepie(data) {
            var pie = d3.pie()
               .sort(null)
               .value(function(d) { console.log(d);return d; });
            // var arc = d3.arc()
            //            .outerRadius((100-Math.sqrt(i))/newpie.length*(i+1))

             var arc = d3.arc()
                .outerRadius(function () {
                  if (Math.sqrt(i)<2) {
                    return 95/newpie.length*(i+1)
                  }else {
                    return (100-Math.sqrt(i))/newpie.length*(i+1)
                  }
                }).innerRadius(100/newpie.length*i);
             var labelArc = d3.arc()
                              .outerRadius(100/newpie.length*(i+1))
                              .innerRadius(100/newpie.length*i);
             svgpie.append("g").attr("width", widthpie).attr("height", heightpie).attr("class",'pb'+i)
                         .attr("transform", "translate(" + widthpie/2+ ","+(heightpie/2-10)+")")
              function arcTween(a) {
                 var i = d3.interpolate(this._current, a);
                 this._current = i(0);
                 return function(t) {
                   return arc(i(t));
                 };
               }
              var gpie = d3.selectAll(".pb"+i).selectAll(".arc")
                           .data(pie(data)).enter().append("g").attr("class","arc")
              var arcs= gpie.append("path").attr("d",arc)
                            .style("fill", function(d) { return color(d.index); });
              arcs.transition().duration(750);
              gpie.append("text")
                  .attr("transform", function(d) {
                      trans="translate(" + labelArc.centroid(d)[0]+","+(labelArc.centroid(d)[1]+4)+ ")"
                 return trans; })
               .attr("dy", ".35em")
               .style("font-size",function () {
                 if (40/det.length<5) {
                   return "5px"
                 }else {
                   return 40/det.length+"px"
                 }
               })
               .text(function(d) {return d.data; });
              gpie.append("text").attr("transform", function(d) {
                 trans="translate(0,"+(100/newpie.length*i+5)+")"
                 return trans; }).text(det[i].Time)
                 .style("font-size","6px")

         };
         updatepie(dset);
      }  }
      updatepie0(newpie);

});
})
