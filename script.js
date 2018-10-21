
// var margin = {top: 20, right: 20, botton:20, left:20},
    width = 500 
    height = 500
    radius = width/2;
 
    var arc = d3.arc()
    .outerRadius(radius-10)
    .innerRadius(0); 
 
    var labelArc = d3.arc()
        .outerRadius(radius -50)
        .innerRadius(radius -50); 

    var pie = d3.pie()
    .sort (null)
    .value(function (d){return d.count; });

    var svg = d3.select ("grafico").append ("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width/2 +","+ height/2 + ")"); 

    // import data  
    d3.json("data.json", function(error, json){ // <-F
        data = data.concat(json);
        render(data);
    //     if (error) throw error;
    //     //parse the data 
    //     data.forEach(function(d) {

    //         d.tablet = d.tablet;
    //         d.smartphone = d.smartphone;
    //     });
    
    //     var g = svg.selectAll(".arc")
    //     .data(pie(data))
    //     .enter().append("g")
    //     .attr("class","arc");
    
    // g.append("path")
    //     .attr("d", arc)
    //     .style("fill", "blue")
    
    // g.append("text")
    //     .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")";})
    //     .attr("dy", ".35em")
    //     .text(function(d) {return d.data.smartphone;} )
    //     .text(function(d) {return d.data.tablet;} );
    

    })

    