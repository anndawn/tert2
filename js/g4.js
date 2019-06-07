var charts4=echarts.init(document.getElementById('g4'), null, {renderer: 'svg'});
var options;
var datachart4=[
{
"LOCATION": "BEN",
"Country": "Benin",
"Time": 2006,
"MGER": 10.26739,
"Mschoolagepopu": 370357,
"Mpopu": 38026,
"MFGER": 6.81086,
"MFschool age population": 737425,
"MFpopulation in universities": 50225,
"Fpopu": 12199
},
{
"LOCATION": "BEN",
"Country": "Benin",
"Time": 2007,
"MGER": 12.10635,
"Mschoolagepopu": 381304,
"Mpopu": 46162,
"MFGER": 8.13719,
"MFschool age population": 759230,
"MFpopulation in universities": 61780,
"Fpopu": 15618
},
{
"LOCATION": "BEN",
"Country": "Benin",
"Time": 2008,
"MGER": 11.70601,
"Mschoolagepopu": 392559,
"Mpopu": 45953,
"MFGER": 8.04726,
"MFschool age population": 781757,
"MFpopulation in universities": 62910,
"Fpopu": 16957
},
{
"LOCATION": "BEN",
"Country": "Benin",
"Time": 2009,
"MGER": 14.68724,
"Mschoolagepopu": 404351,
"Mpopu": 59388,
"MFGER": 10.23199,
"MFschool age population": 805337,
"MFpopulation in universities": 82402,
"Fpopu": 23014
},
{
"LOCATION": "BEN",
"Country": "Benin",
"Time": 2010,
"MGER": 20.30728,
"Mschoolagepopu": 416954,
"Mpopu": 84672,
"MFGER": 13.77512,
"MFschool age population": 830352,
"MFpopulation in universities": 114382,
"Fpopu": 29710
},
{
"LOCATION": "BEN",
"Country": "Benin",
"Time": 2011,
"MGER": 20.15385,
"Mschoolagepopu": 430558,
"Mpopu": 86774,
"MFGER": 12.85589,
"MFschool age population": 857047,
"MFpopulation in universities": 110181,
"Fpopu": 23407
},
{
"LOCATION": "BEN",
"Country": "Benin",
"Time": 2012,
"MGER": 20.69445,
"Mschoolagepopu": 444148,
"Mpopu": 91914,
"MFGER": 13.95525,
"MFschool age population": 883438,
"MFpopulation in universities": 123286,
"Fpopu": 31372
},
{
"LOCATION": "BEN",
"Country": "Benin",
"Time": 2013,
"MGER": 23.07001,
"Mschoolagepopu": 458461,
"Mpopu": 105767,
"MFGER": 15.96498,
"MFschool age population": 911144,
"MFpopulation in universities": 145464,
"Fpopu": 39697
},
{
"LOCATION": "BEN",
"Country": "Benin",
"Time": 2014,
"MGER": 23.29549,
"Mschoolagepopu": 473216,
"Mpopu": 110238,
"MFGER": 15.95374,
"MFschool age population": 939673,
"MFpopulation in universities": 149913,
"Fpopu": 39675
},
{
"LOCATION": "BEN",
"Country": "Benin",
"Time": 2015,
"MGER": 19.26964,
"Mschoolagepopu": 488250,
"Mpopu": 94084,
"MFGER": 13.55354,
"MFschool age population": 968743,
"MFpopulation in universities": 131299,
"Fpopu": 37215
},
{
"LOCATION": "BEN",
"Country": "Benin",
"Time": 2016,
"MGER": 18.44806,
"Mschoolagepopu": 503641,
"Mpopu": 92912,
"MFGER": 13.20178,
"MFschool age population": 998517,
"MFpopulation in universities": 131822,
"Fpopu": 38910
},
{
"LOCATION": "BEN",
"Country": "Benin",
"Time": 2017,
"MGER": "",
"Mschoolagepopu": "",
"Mpopu": "",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"Time": 2006,
"MGER": "",
"Mschoolagepopu": 835771,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"Time": 2007,
"MGER": 12.27427,
"Mschoolagepopu": 851953,
"Mpopu": 104571,
"MFGER": 9.24186,
"MFschool age population": 1696326,
"MFpopulation in universities": 156772,
"Fpopu": 52201
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"Time": 2008,
"MGER": 11.28327,
"Mschoolagepopu": 870581,
"Mpopu": 98230,
"MFGER": 8.75439,
"MFschool age population": 1732514,
"MFpopulation in universities": 151671,
"Fpopu": 53441
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"Time": 2009,
"MGER": 11.26129,
"Mschoolagepopu": 891683,
"Mpopu": 100415,
"MFGER": 8.62271,
"MFschool age population": 1773179,
"MFpopulation in universities": 152896,
"Fpopu": 52481
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"Time": 2010,
"MGER": 10.43869,
"Mschoolagepopu": 915498,
"Mpopu": 95566,
"MFGER": 7.9305,
"MFschool age population": 1819178,
"MFpopulation in universities": 144270,
"Fpopu": 48704
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"Time": 2011,
"MGER": 4.21611,
"Mschoolagepopu": 942408,
"Mpopu": 39733,
"MFGER": 3.53923,
"MFschool age population": 1871368,
"MFpopulation in universities": 66232,
"Fpopu": 26499
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"Time": 2012,
"MGER": "",
"Mschoolagepopu": 973229,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"Time": 2013,
"MGER": 10.42981,
"Mschoolagepopu": 1006250,
"Mpopu": 104950,
"MFGER": 8.48597,
"MFschool age population": 1995658,
"MFpopulation in universities": 169351,
"Fpopu": 64401
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"Time": 2014,
"MGER": 10.76413,
"Mschoolagepopu": 1041087,
"Mpopu": 112064,
"MFGER": 8.55048,
"MFschool age population": 2064259,
"MFpopulation in universities": 176504,
"Fpopu": 64440
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"Time": 2015,
"MGER": 10.83797,
"Mschoolagepopu": 1077287,
"Mpopu": 116756,
"MFGER": 9.02083,
"MFschool age population": 2136044,
"MFpopulation in universities": 192689,
"Fpopu": 75933
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"Time": 2016,
"MGER": 10.77914,
"Mschoolagepopu": 1114671,
"Mpopu": 120152,
"MFGER": 9.16049,
"MFschool age population": 2210678,
"MFpopulation in universities": 202509,
"Fpopu": 82357
},
{
"LOCATION": "CIV",
"Country": "Côte d'Ivoire",
"Time": 2017,
"MGER": "",
"Mschoolagepopu": "",
"Mpopu": "",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"Time": 2006,
"MGER": 7.01963,
"Mschoolagepopu": 1041081,
"Mpopu": 73080,
"MFGER": 5.26451,
"MFschool age population": 2092960,
"MFpopulation in universities": 110184,
"Fpopu": 37104
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"Time": 2007,
"MGER": 8.62679,
"Mschoolagepopu": 1067326,
"Mpopu": 92076,
"MFGER": 6.51153,
"MFschool age population": 2150293,
"MFpopulation in universities": 140017,
"Fpopu": 47941
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"Time": 2008,
"MGER": 12.1613,
"Mschoolagepopu": 1093822,
"Mpopu": 133023,
"MFGER": 8.63052,
"MFschool age population": 2204652,
"MFpopulation in universities": 190273,
"Fpopu": 57250
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"Time": 2009,
"MGER": 11.38285,
"Mschoolagepopu": 1121011,
"Mpopu": 127603,
"MFGER": 9.01088,
"MFschool age population": 2257006,
"MFpopulation in universities": 203376,
"Fpopu": 75773
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"Time": 2010,
"MGER": "",
"Mschoolagepopu": 1150002,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"Time": 2011,
"MGER": 15.19522,
"Mschoolagepopu": 1181766,
"Mpopu": 179572,
"MFGER": 12.09263,
"MFschool age population": 2363935,
"MFpopulation in universities": 285862,
"Fpopu": 106290
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"Time": 2012,
"MGER": 15.16755,
"Mschoolagepopu": 1213050,
"Mpopu": 183990,
"MFGER": 12.23217,
"MFschool age population": 2414485,
"MFpopulation in universities": 295344,
"Fpopu": 111354
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"Time": 2013,
"MGER": 17.09837,
"Mschoolagepopu": 1282292,
"Mpopu": 219251,
"MFGER": 14.0297,
"MFschool age population": 2529049,
"MFpopulation in universities": 354818,
"Fpopu": 135567
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"Time": 2014,
"MGER": 18.61221,
"Mschoolagepopu": 1313740,
"Mpopu": 244516,
"MFGER": 15.57372,
"MFschool age population": 2582183,
"MFpopulation in universities": 402142,
"Fpopu": 157626
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"Time": 2015,
"MGER": 18.61945,
"Mschoolagepopu": 1344793,
"Mpopu": 250393,
"MFGER": 15.83591,
"MFschool age population": 2636627,
"MFpopulation in universities": 417534,
"Fpopu": 167141
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"Time": 2016,
"MGER": 18.1721,
"Mschoolagepopu": 1375746,
"Mpopu": 250002,
"MFGER": 15.66995,
"MFschool age population": 2693832,
"MFpopulation in universities": 422122,
"Fpopu": 172120
},
{
"LOCATION": "GHA",
"Country": "Ghana",
"Time": 2017,
"MGER": 18.68156,
"Mschoolagepopu": 1403191,
"Mpopu": 262138,
"MFGER": 16.16359,
"MFschool age population": 2746779,
"MFpopulation in universities": 443978,
"Fpopu": 181840
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"Time": 2006,
"MGER": 7.86028,
"Mschoolagepopu": 427364,
"Mpopu": 33592,
"MFGER": 5.02478,
"MFschool age population": 850007,
"MFpopulation in universities": 42711,
"Fpopu": 9119
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"Time": 2007,
"MGER": 12.08895,
"Mschoolagepopu": 438417,
"Mpopu": 53000,
"MFGER": 7.83324,
"MFschool age population": 871427,
"MFpopulation in universities": 68261,
"Fpopu": 15261
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"Time": 2008,
"MGER": 13.47072,
"Mschoolagepopu": 450206,
"Mpopu": 60646,
"MFGER": 8.96901,
"MFschool age population": 894435,
"MFpopulation in universities": 80222,
"Fpopu": 19576
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"Time": 2009,
"MGER": 13.61828,
"Mschoolagepopu": 462584,
"Mpopu": 62996,
"MFGER": 9.13156,
"MFschool age population": 918649,
"MFpopulation in universities": 83887,
"Fpopu": 20891
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"Time": 2010,
"MGER": 15.63558,
"Mschoolagepopu": 475422,
"Mpopu": 74335,
"MFGER": 10.4405,
"MFschool age population": 943710,
"MFpopulation in universities": 98528,
"Fpopu": 24193
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"Time": 2011,
"MGER": 15.6614,
"Mschoolagepopu": 488692,
"Mpopu": 76536,
"MFGER": 10.64376,
"MFschool age population": 969507,
"MFpopulation in universities": 103192,
"Fpopu": 26656
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"Time": 2012,
"MGER": 14.79559,
"Mschoolagepopu": 501575,
"Mpopu": 74211,
"MFGER": 10.17368,
"MFschool age population": 994458,
"MFpopulation in universities": 101173,
"Fpopu": 26962
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"Time": 2013,
"MGER": 14.85299,
"Mschoolagepopu": 515041,
"Mpopu": 76499,
"MFGER": 10.72575,
"MFschool age population": 1020479,
"MFpopulation in universities": 109454,
"Fpopu": 32955
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"Time": 2014,
"MGER": 15.49948,
"Mschoolagepopu": 529050,
"Mpopu": 82000,
"MFGER": 11.25905,
"MFschool age population": 1047540,
"MFpopulation in universities": 117943,
"Fpopu": 35943
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"Time": 2015,
"MGER": "",
"Mschoolagepopu": "",
"Mpopu": "",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"Time": 2016,
"MGER": "",
"Mschoolagepopu": "",
"Mpopu": "",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "GIN",
"Country": "Guinea",
"Time": 2017,
"MGER": "",
"Mschoolagepopu": "",
"Mpopu": "",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"Time": 2006,
"MGER": "",
"Mschoolagepopu": 161046,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"Time": 2007,
"MGER": "",
"Mschoolagepopu": 165400,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"Time": 2008,
"MGER": "",
"Mschoolagepopu": 170619,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"Time": 2009,
"MGER": "",
"Mschoolagepopu": 176231,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"Time": 2010,
"MGER": 12.11954,
"Mschoolagepopu": 181624,
"Mpopu": 22012,
"MFGER": 9.32247,
"MFschool age population": 359025,
"MFpopulation in universities": 33470,
"Fpopu": 11458
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"Time": 2011,
"MGER": "",
"Mschoolagepopu": "",
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"Time": 2012,
"MGER": 14.26156,
"Mschoolagepopu": 190477,
"Mpopu": 27165,
"MFGER": 11.66735,
"MFschool age population": 376118,
"MFpopulation in universities": 43883,
"Fpopu": 16718
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"Time": 2013,
"MGER": "",
"Mschoolagepopu": 194758,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"Time": 2014,
"MGER": "",
"Mschoolagepopu": 199837,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"Time": 2015,
"MGER": "",
"Mschoolagepopu": "",
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"Time": 2016,
"MGER": "",
"Mschoolagepopu": "",
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "LBR",
"Country": "Liberia",
"Time": 2017,
"MGER": "",
"Mschoolagepopu": "",
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"Time": 2006,
"MGER": "",
"Mschoolagepopu": 6875464,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"Time": 2007,
"MGER": "",
"Mschoolagepopu": 6994871,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"Time": 2008,
"MGER": "",
"Mschoolagepopu": 7119162,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"Time": 2009,
"MGER": "",
"Mschoolagepopu": 7251575,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"Time": 2010,
"MGER": 10.97252,
"Mschoolagepopu": 7393522,
"Mpopu": 811256,
"MFGER": 9.56658,
"MFschool age population": 14577680,
"MFpopulation in universities": 1394585,
"Fpopu": 583330
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"Time": 2011,
"MGER": 11.98937,
"Mschoolagepopu": 7547118,
"Mpopu": 904852,
"MFGER": 10.16896,
"MFschool age population": 14882259,
"MFpopulation in universities": 1513371,
"Fpopu": 608519
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"Time": 2012,
"MGER": "",
"Mschoolagepopu": 7699340,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"Time": 2013,
"MGER": "",
"Mschoolagepopu": 7866193,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"Time": 2014,
"MGER": "",
"Mschoolagepopu": 8052646,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"Time": 2015,
"MGER": "",
"Mschoolagepopu": "",
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"Time": 2016,
"MGER": "",
"Mschoolagepopu": "",
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "NGA",
"Country": "Nigeria",
"Time": 2017,
"MGER": "",
"Mschoolagepopu": "",
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "TGO",
"Country": "Togo",
"Time": 2006,
"MGER": "",
"Mschoolagepopu": 282260,
"Mpopu": "#VALUE!",
"MFGER": 4.97524,
"MFschool age population": 564314,
"MFpopulation in universities": 28076,
"Fpopu": "#VALUE!"
},
{
"LOCATION": "TGO",
"Country": "Togo",
"Time": 2007,
"MGER": "",
"Mschoolagepopu": 288829,
"Mpopu": "#VALUE!",
"MFGER": 5.63135,
"MFschool age population": 577162,
"MFpopulation in universities": 32502,
"Fpopu": "#VALUE!"
},
{
"LOCATION": "TGO",
"Country": "Togo",
"Time": 2008,
"MGER": "",
"Mschoolagepopu": 295536,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "TGO",
"Country": "Togo",
"Time": 2009,
"MGER": "",
"Mschoolagepopu": 301908,
"Mpopu": "#VALUE!",
"MFGER": "",
"MFschool age population": "",
"MFpopulation in universities": "",
"Fpopu": "#VALUE!"
},
{
"LOCATION": "TGO",
"Country": "Togo",
"Time": 2010,
"MGER": "",
"Mschoolagepopu": 307687,
"Mpopu": "#VALUE!",
"MFGER": 9.1147,
"MFschool age population": 613942,
"MFpopulation in universities": 55959,
"Fpopu": "#VALUE!"
},
{
"LOCATION": "TGO",
"Country": "Togo",
"Time": 2011,
"MGER": "",
"Mschoolagepopu": 313019,
"Mpopu": "#VALUE!",
"MFGER": 10.16912,
"MFschool age population": 624400,
"MFpopulation in universities": 63496,
"Fpopu": "#VALUE!"
},
{
"LOCATION": "TGO",
"Country": "Togo",
"Time": 2012,
"MGER": 16.24344,
"Mschoolagepopu": 317482,
"Mpopu": 51570,
"MFGER": 10.36135,
"MFschool age population": 633286,
"MFpopulation in universities": 65617,
"Fpopu": 14047
},
{
"LOCATION": "TGO",
"Country": "Togo",
"Time": 2013,
"MGER": "",
"Mschoolagepopu": 321885,
"Mpopu": "#VALUE!",
"MFGER": 10.75014,
"MFschool age population": 642103,
"MFpopulation in universities": 69027,
"Fpopu": "#VALUE!"
},
{
"LOCATION": "TGO",
"Country": "Togo",
"Time": 2014,
"MGER": 14.38163,
"Mschoolagepopu": 326778,
"Mpopu": 46996,
"MFGER": 10.20477,
"MFschool age population": 651901,
"MFpopulation in universities": 66525,
"Fpopu": 19529
},
{
"LOCATION": "TGO",
"Country": "Togo",
"Time": 2015,
"MGER": 15.0034,
"Mschoolagepopu": 332558,
"Mpopu": 49895,
"MFGER": 10.72507,
"MFschool age population": 663436,
"MFpopulation in universities": 71154,
"Fpopu": 21259
},
{
"LOCATION": "TGO",
"Country": "Togo",
"Time": 2016,
"MGER": 17.11854,
"Mschoolagepopu": 339217,
"Mpopu": 58069,
"MFGER": 12.26898,
"MFschool age population": 676674,
"MFpopulation in universities": 83021,
"Fpopu": 24952
},
{
"LOCATION": "TGO",
"Country": "Togo",
"Time": 2017,
"MGER": 17.73867,
"Mschoolagepopu": 346469,
"Mpopu": 61459,
"MFGER": 12.89195,
"MFschool age population": 691067,
"MFpopulation in universities": 89092,
"Fpopu": 27633
}
];
var newdatachart4=datachart4.map((d)=>{
return{
coun:d.Country,
mpopu:d.Mpopu,
fpopu:d.Fpopu,
year:d.Time,
fper:d.Fpopu/d["MFpopulation in universities"]
}
})
var newdatachart42 = d3.nest()
             .key(function(d) { return d.coun; })
             .entries(newdatachart4);
console.log(newdatachart42);
let keyschart4=[];

for (let i of newdatachart42){
i["MP"]=[];
i["FP"]=[];
i["fper"]=[];
keyschart4.push(i["key"])
for(let k of i["values"]){i["MP"].push(k["mpopu"]-0);
i["FP"].push(k["fpopu"]-0);
i["fper"].push(parseInt(k["fper"]*100))}
}

options = {

tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
},toolbox: {

　　show: true,

　　feature: {

　　　　saveAsImage: {

　　　　show:false
　　　　}

　　}

},
legend: {
        right:"10%",
        data:['Benin','Côte dIvoire','Ghana','Guinea','','Liberia','Nigeria','Togo'],
        // ["Benin", "Côte d'Ivoire", "Ghana", "Guinea",'',"Liberia", "Nigeria", "Togo"]
        textStyle:{
            fontSize:10},
        padding:12,
        itemGap:16
      
},
grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
},
xAxis : [
    {
        type : 'category',
        data :[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
        offset:5
    }
],
yAxis : [
    {
        type : 'value'
    }
],
series : [
    {
        name:keyschart4[0],
        type:'line',
        data:newdatachart42[0]["fper"],
        color:"rgb(233, 80, 14)"

    },
    {
        name:keyschart4[1],
        type:'line',
        data:newdatachart42[1]["fper"],
        color:"rgb(78, 233, 14)"
    },
    {
        name:keyschart4[2],
        type:'line',
        data:newdatachart42[2]["fper"],
        color:"rgb(216, 14, 233)"

    },
    {
        name:keyschart4[3],
        type:'line',
        data:newdatachart42[3]["fper"],
        color:"rgb(14, 43, 233)"
    },
    {
        name:keyschart4[4],
        type:'line',
        data:newdatachart42[4]["fper"],
        color:"rgb(9, 9, 9)"

    },
    {
        name:keyschart4[5],
        type:'line',
        data:newdatachart42[5]["fper"],
        color:"rgb(196, 22, 72)"

    },
    {
        name:keyschart4[6],
        type:'line',
        stack: 'TOG',
        data:newdatachart42[6]["fper"],
        color:"rgb(22, 196, 133)"
    }
]
};

charts4.setOption(options);
