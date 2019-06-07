var chart1=echarts.init(document.getElementById('g1'), null, {renderer: 'svg'});
var options;
let data2=[
{
"LOCATION": "BEN",
"Country": "Benin",
"TIME": 2006,
"Time": 2006,
"Value": 6.81086,
"school age population": 737425,
"population in universities": 50224.98436
},
{
"LOCATION": "BEN",
"Country": "Benin",
"TIME": 2007,
"Time": 2007,
"Value": 8.13719,
"school age population": 759230,
"population in universities": 61779.98764
},
{
"LOCATION": "BEN",
"Country": "Benin",
"TIME": 2008,
"Time": 2008,
"Value": 8.04726,
"school age population": 781757,
"population in universities": 62910.01836
},
{
"LOCATION": "BEN",
"Country": "Benin",
"TIME": 2009,
"Time": 2009,
"Value": 10.23199,
"school age population": 805337,
"population in universities": 82402.00131
},
{
"LOCATION": "BEN",
"Country": "Benin",
"TIME": 2010,
"Time": 2010,
"Value": 13.77512,
"school age population": 830352,
"population in universities": 114381.9844
},
{
"LOCATION": "BEN",
"Country": "Benin",
"TIME": 2011,
"Time": 2011,
"Value": 12.85589,
"school age population": 857047,
"population in universities": 110181.0196
},
{
"LOCATION": "BEN",
"Country": "Benin",
"TIME": 2012,
"Time": 2012,
"Value": 13.95525,
"school age population": 883438,
"population in universities": 123285.9815
},
{
"LOCATION": "BEN",
"Country": "Benin",
"TIME": 2013,
"Time": 2013,
"Value": 15.96498,
"school age population": 911144,
"population in universities": 145463.9574
},
{
"LOCATION": "BEN",
"Country": "Benin",
"TIME": 2014,
"Time": 2014,
"Value": 15.95374,
"school age population": 939673,
"population in universities": 149912.9873
},
{
"LOCATION": "BEN",
"Country": "Benin",
"TIME": 2015,
"Time": 2015,
"Value": 13.55354,
"school age population": 968743,
"population in universities": 131298.97
},
{
"LOCATION": "BEN",
"Country": "Benin",
"TIME": 2016,
"Time": 2016,
"Value": 13.20178,
"school age population": 998517,
"population in universities": 131822.0176
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"TIME": 2006,
"Time": 2006,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"TIME": 2007,
"Time": 2007,
"Value": 9.24186,
"school age population": 1696326,
"population in universities": 156772.0741
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"TIME": 2008,
"Time": 2008,
"Value": 8.75439,
"school age population": 1732514,
"population in universities": 151671.0324
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"TIME": 2009,
"Time": 2009,
"Value": 8.62271,
"school age population": 1773179,
"population in universities": 152896.083
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"TIME": 2010,
"Time": 2010,
"Value": 7.9305,
"school age population": 1819178,
"population in universities": 144269.9113
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"TIME": 2011,
"Time": 2011,
"Value": 3.53923,
"school age population": 1871368,
"population in universities": 66232.01767
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"TIME": 2012,
"Time": 2012,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"TIME": 2013,
"Time": 2013,
"Value": 8.48597,
"school age population": 1995658,
"population in universities": 169350.9392
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"TIME": 2014,
"Time": 2014,
"Value": 8.55048,
"school age population": 2064259,
"population in universities": 176504.0529
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"TIME": 2015,
"Time": 2015,
"Value": 9.02083,
"school age population": 2136044,
"population in universities": 192688.898
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"TIME": 2016,
"Time": 2016,
"Value": 9.16049,
"school age population": 2210678,
"population in universities": 202508.9371
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"TIME": 2006,
"Time": 2006,
"Value": 5.26451,
"school age population": 2092960,
"population in universities": 110184.0885
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"TIME": 2007,
"Time": 2007,
"Value": 6.51153,
"school age population": 2150293,
"population in universities": 140016.9738
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"TIME": 2008,
"Time": 2008,
"Value": 8.63052,
"school age population": 2204652,
"population in universities": 190272.9318
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"TIME": 2009,
"Time": 2009,
"Value": 9.01088,
"school age population": 2257006,
"population in universities": 203376.1023
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"TIME": 2010,
"Time": 2010,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"TIME": 2011,
"Time": 2011,
"Value": 12.09263,
"school age population": 2363935,
"population in universities": 285861.913
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"TIME": 2012,
"Time": 2012,
"Value": 12.23217,
"school age population": 2414485,
"population in universities": 295343.9098
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"TIME": 2013,
"Time": 2013,
"Value": 14.0297,
"school age population": 2529049,
"population in universities": 354817.9876
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"TIME": 2014,
"Time": 2014,
"Value": 15.57372,
"school age population": 2582183,
"population in universities": 402141.9503
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"TIME": 2015,
"Time": 2015,
"Value": 15.83591,
"school age population": 2636627,
"population in universities": 417533.8788
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"TIME": 2016,
"Time": 2016,
"Value": 15.66995,
"school age population": 2693832,
"population in universities": 422122.1275
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"TIME": 2017,
"Time": 2017,
"Value": 16.16359,
"school age population": 2746779,
"population in universities": 443978.0958
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"TIME": 2006,
"Time": 2006,
"Value": 5.02478,
"school age population": 850007,
"population in universities": 42710.98173
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"TIME": 2007,
"Time": 2007,
"Value": 7.83324,
"school age population": 871427,
"population in universities": 68260.96833
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"TIME": 2008,
"Time": 2008,
"Value": 8.96901,
"school age population": 894435,
"population in universities": 80221.96459
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"TIME": 2009,
"Time": 2009,
"Value": 9.13156,
"school age population": 918649,
"population in universities": 83886.98462
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"TIME": 2010,
"Time": 2010,
"Value": 10.4405,
"school age population": 943710,
"population in universities": 98528.04255
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"TIME": 2011,
"Time": 2011,
"Value": 10.64376,
"school age population": 969507,
"population in universities": 103191.9983
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"TIME": 2012,
"Time": 2012,
"Value": 10.17368,
"school age population": 994458,
"population in universities": 101172.9747
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"TIME": 2013,
"Time": 2013,
"Value": 10.72575,
"school age population": 1020479,
"population in universities": 109454.0263
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"TIME": 2014,
"Time": 2014,
"Value": 11.25905,
"school age population": 1047540,
"population in universities": 117943.0524
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"TIME": 2015,
"Time": 2015,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"TIME": 2016,
"Time": 2016,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"TIME": 2017,
"Time": 2017,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"TIME": 2006,
"Time": 2006,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"TIME": 2007,
"Time": 2006,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"TIME": 2008,
"Time": 2006,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"TIME": 2009,
"Time": 2006,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"TIME": 2010,
"Time": 2010,
"Value": 9.32247,
"school age population": 359025,
"population in universities": 33469.99792
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"TIME": 2011,
"Time": 2011,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"TIME": 2012,
"Time": 2012,
"Value": 11.66735,
"school age population": 376118,
"population in universities": 43883.00347
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"TIME": 2013,
"Time": 2013,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"TIME": 2014,
"Time": 2014,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"TIME": 2015,
"Time": 2015,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"TIME": 2016,
"Time": 2016,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"TIME": 2017,
"Time": 2017,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"TIME": 2006,
"Time": 2006,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"TIME": 2007,
"Time": 2007,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"TIME": 2008,
"Time": 2008,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"TIME": 2009,
"Time": 2009,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"TIME": 2010,
"Time": 2010,
"Value": 9.56658,
"school age population": 14577680,
"population in universities": 1394585.419
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"TIME": 2011,
"Time": 2011,
"Value": 10.16896,
"school age population": 14882259,
"population in universities": 1513370.965
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"TIME": 2012,
"Time": 2012,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"TIME": 2013,
"Time": 2013,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"TIME": 2014,
"Time": 2014,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"TIME": 2015,
"Time": 2015,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"TIME": 2016,
"Time": 2016,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"TIME": 2017,
"Time": 2017,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "TGO",
"Country": "Togo",
"TIME": 2006,
"Time": 2006,
"Value": 4.97524,
"school age population": 564314,
"population in universities": 28075.97585
},
{
"LOCATION": "TGO",
"Country": "Togo",
"TIME": 2007,
"Time": 2007,
"Value": 5.63135,
"school age population": 577162,
"population in universities": 32502.01229
},
{
"LOCATION": "TGO",
"Country": "Togo",
"TIME": 2008,
"Time": 2008,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "TGO",
"Country": "Togo",
"TIME": 2009,
"Time": 2009,
"Value": null,
"school age population": null,
"population in universities": null
},
{
"LOCATION": "TGO",
"Country": "Togo",
"TIME": 2010,
"Time": 2010,
"Value": 9.1147,
"school age population": 613942,
"population in universities": 55958.97147
},
{
"LOCATION": "TGO",
"Country": "Togo",
"TIME": 2011,
"Time": 2011,
"Value": 10.16912,
"school age population": 624400,
"population in universities": 63495.98528
},
{
"LOCATION": "TGO",
"Country": "Togo",
"TIME": 2012,
"Time": 2012,
"Value": 10.36135,
"school age population": 633286,
"population in universities": 65616.97896
},
{
"LOCATION": "TGO",
"Country": "Togo",
"TIME": 2013,
"Time": 2013,
"Value": 10.75014,
"school age population": 642103,
"population in universities": 69026.97144
},
{
"LOCATION": "TGO",
"Country": "Togo",
"TIME": 2014,
"Time": 2014,
"Value": 10.20477,
"school age population": 651901,
"population in universities": 66524.99768
},
{
"LOCATION": "TGO",
"Country": "Togo",
"TIME": 2015,
"Time": 2015,
"Value": 10.72507,
"school age population": 663436,
"population in universities": 71153.97541
},
{
"LOCATION": "TGO",
"Country": "Togo",
"TIME": 2016,
"Time": 2016,
"Value": 12.26898,
"school age population": 676674,
"population in universities": 83020.99773
},
{
"LOCATION": "TGO",
"Country": "Togo",
"TIME": 2017,
"Time": 2017,
"Value": 12.89195,
"school age population": 691067,
"population in universities": 89092.01211
}
]
newdata=data2.map(function(d) {
return {
popu: d["population in universities"],
time:d["Time"],
country: d["Country"]
};
})

let ar=[];
var newdata2 = d3.nest()
              .key(function(d) { return d.country; })
              .entries(newdata);
              console.log(newdata2);
let keys=[];
for (var i = 0; i < newdata2.length; i++) {
keys.push(newdata2[i]["key"])
}
console.log(keys);
let obj=[];
for(let i of newdata2){let detail=i["values"] ;
let arr=[];
let arr1=[];
for(let k of detail){console.log(k);
arr.push(parseInt(k["popu"]));
arr1.push(k["time"]);
console.log(arr1);
ar=arr1;
}
obj.push(arr);
}
console.log(keys);

console.log(ar);
options = {
  legend: {
    padding:10,
    right:"10%",
    data:['Benin','Côte dIvoire','Ghana','Guinea','','Liberia','Nigeria','Togo'],
    // ["Benin", "Côte d'Ivoire", "Ghana", "Guinea",'',"Liberia", "Nigeria", "Togo"]
    textStyle:{
        fontSize:10},
    itemGap:16
},
grid:{
  x:77,
  y:50
},
  tooltip: {
    trigger: 'axis'
},
  xAxis: {
      type: 'category',
      data: ar,
      offset:5
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      name: keys[0],
      data: obj[0],
      type: 'line'
  },
  {   name: keys[1],
      data:obj[1],
      type: 'line'
  },
  {   name: keys[2],
      data:obj[2],
      type: 'line'
  },
  {   name: keys[3],
      data:obj[3],
      type: 'line'
  },
  {   name: keys[4],
      data:obj[4],
      type: 'line',
      color:"black"
  },{ name: keys[5],
      data:obj[5],
      type: 'line',
      color:"rgb(235, 76, 249)"
  },
  {   name: keys[6],
      data:obj[6],
      type: 'line'
  }
]
};

chart1.setOption(options);
