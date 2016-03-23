var allotted = [['Iowa', 44], ['New Hampshire', 24], ['Nevada', 35], ['South Carolina', 53],
	    ['Alabama', 53], ['Arkansas', 32], ['Colorado', 66], ['Georgia', 102], ['Massachusetts', 91],
	    ['Minnesota', 77], ['Oklahoma', 38], ['Tennessee', 67], ['Texas', 222], ['Vermont', 16], ['Virginia', 95],
	    ['Kansas', 33], ['Louisiana', 51], ['Nebraska', 25], ['Maine', 25], ['Michigan', 127], ['Mississippi', 34],
	    ['Florida', 198], ['Illinois', 135], ['Missouri', 64], ['North Carolina', 104], ['Ohio', 141]];

var unallocated = [['Arizona', 85], ['Idaho', 27], ['Utah', 37], ['Alaska', 20],
		   ['Hawaii', 34], ['Washington State', 118], ['Wisconsin', 96], ['Wyoming', 18],
		   ['New York', 291], ['Connecticut', 70], ['Delaware', 31], ['Maryland', 118],
		   ['Pennsylvania', 210], ['Rhode Island', 33], ['Indiana', 92], ['West Virginia', 37],
		   ['Kentucky', 61], ['Oregon', 74], ['California', 546], ['Montana', 27], ['New Jersey', 142],
		   ['New Mexico', 43], ['North Dakota', 23], ['South Dakota', 25], ['District of Columbia', 45]];

var rallotted = [['Iowa', 30], ['New Hampshire', 23], ['Nevada', 30], ['South Carolina', 50], ['Alabama', 50], ['Alaska', 28], ['Arkansas', 40], ['Georgia', 76], ['Massachusetts', 42], ['Minnesota', 38], ['Oklahoma', 43], ['Tennessee', 58], ['Texas', 155], ['Vermont', 16], ['Virginia', 49], ['Kansas', 40], ['Kentucky', 46], ['Louisiana', 46], ['Maine', 23], ['Puerto Rico', 23], ['Hawaii', 19], ['Idaho', 32], ['Michigan', 59], ['Mississippi', 40], ['Virgin Islands', 9], ['District of Columbia', 19], ['Guam', 9], ['Wyoming', 29], ['Florida', 99], ['Illinois', 69], ['Missouri', 52], ['North Carolina', 72], ['Northern Marianas', 9], ['Ohio', 66]]

var runallocated = [['American Samoa', 9], ['Arizona', 58], ['Utah', 40], ['North Dakota', 28], ['Wisconsin', 42], ['Colorado', 37], ['New York', 95], ['Connecticut', 28], ['Delaware', 16], ['Maryland', 38], ['Pennsylvania', 71], ['Rhode Island', 19], ['Indiana', 57], ['Nebraska', 36], ['West Virginia', 34], ['Oregon', 28], ['Washington', 44], ['California', 172], ['Montana', 27], ['New Jersey', 51], ['New Mexico', 24], ['South Dakota', 29]]

var f = d3.scale.linear()
    .domain([0, d3.max(allotted, function(d) {
	return d[1];
	          
    })])
    .range([0, 222]);

var g = d3.scale.linear()
    .domain([0, d3.max(unallocated, function(d) {
	return d[1];
	          
    })])
    .range([0, 546]);

var h = d3.scale.linear()
    .domain([0, d3.max(rallotted, function(d) {
	return d[1];
	          
    })])
    .range([0, 155]);

var j = d3.scale.linear()
    .domain([0, d3.max(runallocated, function(d) {
	return d[1];
	          
    })])
    .range([0, 172]);

d3.select('.allotted')
    .selectAll('div')
    .data(allotted)
    .enter().append('div')
    .style('width', function(d) {
	return f(d[1]) * 10 +'px';
    })
    .text(function(d) { return d; });

d3.select('.unallocated')
    .selectAll('div')
    .data(unallocated)
    .enter().append('div')
    .style('width', function(d) {
	return g(d[1]) * 10 + 'px';
    })
    .text(function(d) {return d;});


d3.select('.rallotted')
    .selectAll('div')
    .data(rallotted)
    .enter().append('div')
    .style('width', function(d) {
	return f(d[1]) * 10 +'px';
    })
    .text(function(d) { return d; });

d3.select('.runallocated')
    .selectAll('div')
    .data(runallocated)
    .enter().append('div')
    .style('width', function(d) {
	return g(d[1]) * 10 + 'px';
    })
    .text(function(d) {return d;});

var party = "democrats";

console.log(document.getElementById("democrats") )
console.log(document.getElementById("republicans") )

var democrats = document.getElementById("democrats");
var republicans = document.getElementById("republicans");

//Democrats
democrats.style.cursor = "pointer";

democrats.onclick = function() {
    console.log("clicked democrats");
    
  /*  d3.select("democrats").transition().style.display = "none"; 
    d3.select("republicans").transition().style.display = "block"; */

    democrats.style.display = "none";
   republicans.style.display = "block";
        
    party = "republicans";
    return true;
}

//Republicans
republicans.style.cursor = "pointer";

republicans.onclick = function() {
    console.log("clicked republicans");
    
/*    d3.select("republicans").transition().style.display = "none"; 
    d3.select("democrats").transition().style.display = "block"; */
    
    republicans.style.display = "none";
    democrats.style.display = "block";
    
	    party = "democrats";
    return true;
}    



