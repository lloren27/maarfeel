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
    var myDivTablet = document.createElement('div');
    myDivTablet.setAttribute("class", "tablet");
    var myDivSmartphone = document.createElement('div');
    myDivSmartphone.setAttribute("class", "smartphone");
    var myH1 = document.createElement('h4');
    var myH2 = document.createElement('h2');
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
    var myHr = document.createElement('hr');

    var total = dataOpcion[i].smartphone + dataOpcion[i].tablet;

    myH1.textContent = dataOpcion[i].title;
    myH2.textContent = total;
    myPara1.textContent = "Smartphone " 
    myPara2.textContent = "Tablet " 
    myPara3.textContent = (100 * dataOpcion[i].smartphone) / (total)+  "%"  +  " " + dataOpcion[i].smartphone;
    myPara4.textContent = (100 * dataOpcion[i].tablet) / (total) + "%" + " " + dataOpcion[i].tablet;
    
    
    var data = {
      datasets: [
            {
              labels: ["Smartphone","Tablet"],
              backgroundColor: [dataOpcion[i].colorSmartphone,dataOpcion[i].colorTablet],
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
      cutoutPercentage: 90,
      responsive: false,
    }
     });
   
    var centerX = ((myChart.chartArea.left + myChart.chartArea.right) / 2);
    var centerY = ((myChart.chartArea.top + myChart.chartArea.bottom) / 2);
    var txt =  dataOpcion[i].title +" "+ total;
    ctx.fillText(txt, centerX, centerY);
    myArticle.appendChild(myH1);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myCanvas);
    myDivTablet.appendChild(myPara2)
    myDivTablet.appendChild(myPara4);
    myArticle.appendChild(myDivTablet);
    myDivSmartphone.appendChild(myPara1);
    myDivSmartphone.appendChild(myPara3);
    myArticle.appendChild(myDivSmartphone);

    myArticle.appendChild(myHr);
   
   



    section.appendChild(myArticle);
   
  }
}

