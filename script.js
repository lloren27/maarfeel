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
    var myCanvas = document.createElement('canvas')
    myCanvas.setAttribute("id", "myChart");

    var total = dataOpcion[i].smartphone + dataOpcion[i].tablet;

    myH1.textContent = dataOpcion[i].title +" "+ total;
    myPara1.textContent = "Smartphone " 
    myPara2.textContent = "Tablet " 
    myPara3.textContent = (100 * dataOpcion[i].smartphone) / (total)+  "%"  +  " " + dataOpcion[i].smartphone;
    myPara4.textContent = (100 * dataOpcion[i].tablet) / (total) + "%" + " " + dataOpcion[i].tablet;
    
    var data = {
      datasets: [
            {
              backgroundColor: ["#72d801", "#2f6800"],
              data: [dataOpcion[i].smartphone,dataOpcion[i].tablet]
            },
    
          ]

    };
   // var canvas = document.getElementById("myChart");
    var ctx = myCanvas.getContext('2d')
     var myChart = new Chart(ctx, {
     type: 'doughnut',
     data: data,
     options: {
      responsive: false,
      elements: {
				center: {
					text: myH1,
          color: '#FF6384', // Default is #000000
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20 // Defualt is 20 (as a percentage)
				}
			}
    }
     });

    
    /*
    var canvas = document.getElementById("myChart");
    var ctx = canvas.getContext('2d')
     var myChart = new Chart(ctx, {
     type: 'doughnut',
     data: data
     });

    myCanvas.appendChild(myChart);
    */


    myArticle.appendChild(myH1);
    myArticle.appendChild(myCanvas);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara4);
   



    section.appendChild(myArticle);
   
  }
}

