var header = document.querySelector('header');
var section = document.querySelector('section');

  var data = {
    labels: ["Smartphone", "Tablet"],
    datasets: [
          {
            label: "REVENUE",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [80000,120000]
          },
          {
            label: "IMPRESIONS",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [30000000,20000000]
          },
          {
            label: "VISITS",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [120000000,480000000]
          },

        ]
  };
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: data
});

var requestURL = 'http://localhost:3000/data';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var datos = request.response;
  showDates(datos);
}

function showDates(jsonObj) {
  var dataOpcion = jsonObj;
      
  for (var i = 0; i < dataOpcion.length; i++) {
    var myArticle = document.createElement('article');
    var myH1 = document.createElement('h1');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');


    myH1.textContent = dataOpcion[i].title;
    myPara1.textContent = dataOpcion[i].tablet;
    myPara2.textContent = dataOpcion[i].smartphone;


    myArticle.appendChild(myH1);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);


    section.appendChild(myArticle);
  }
}


// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON

// // var margin = {top: 20, right: 20, botton:20, left:20},
//     width = 500 
//     height = 500
//     radius = width/2;
 
//     var arc = d3.arc()
//     .outerRadius(radius-10)
//     .innerRadius(0); 
 
//     var labelArc = d3.arc()
//         .outerRadius(radius -50)
//         .innerRadius(radius -50); 

//     var pie = d3.pie()
//     .sort (null)
//     .value(function (d){return d.count; });

//     var svg = d3.select ("grafico").append ("svg")
//         .attr("width", width)
//         .attr("height", height)
//         .append("g")
//         .attr("transform", "translate(" + width/2 +","+ height/2 + ")"); 

//     // import data  
//     d3.json("data.json", function(error, json){ // <-F
//         data = data.concat(json);
//         render(data);
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
    // })
