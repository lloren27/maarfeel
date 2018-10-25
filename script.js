var section = document.querySelector('section');


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
    var myPara1 = document.createElement('h3');
    myPara1.setAttribute("id", "smartphoneTitulo");
    var myPara2 = document.createElement('h3');
    myPara2.setAttribute("id", "tabletTitulo");
    var myPara3 = document.createElement('p');
    myPara3.setAttribute("id", "smartphoneData");
    var myPara4 = document.createElement('p');
    myPara4.setAttribute("id", "tableData");
    var myCanvas = document.createElement ('canvas')
    myCanvas.setAttribute("id", "myChart");

    var total = dataOpcion[i].smartphone + dataOpcion[i].tablet;

    myH1.textContent = dataOpcion[i].title;
    myPara1.textContent = "Smartphone " 
    myPara2.textContent = "Tablet " 
    myPara3.textContent = (100 * dataOpcion[i].smartphone) / (total)+  "%"  +  " " + dataOpcion[i].smartphone;
    myPara4.textContent = (100 * dataOpcion[i].tablet) / (total) + "%" + " " + dataOpcion[i].tablet;
    // var ctx = document.getElementById("myChart").getContext('2d');
    var data = {
      labels: ["Smartphone", "Tablet"],
      datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2"],
              data: [dataOpcion[i].smartphone,dataOpcion[i].tablet]
            },
    
          ]
    };
    // var myChart = new Chart(document.getElementById("myChart").getContext('2d'), {
    // type: 'doughnut',
    // data: data
    // });


    myArticle.appendChild(myH1);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myCanvas);



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
