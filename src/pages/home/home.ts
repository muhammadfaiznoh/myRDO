import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import chartJs from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('barCanvas') barCanvas;
 

  barChart: any;
  

  constructor(public navCtrl: NavController) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.barChart = this.getBarChart();
      // this.doughnutChart = this.getDoughnutChart();
      // this.halfDoughnutChart = this.getHalfDoughnutChart();
    }, 150);
    

  }



  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType,
    });
  }

  /*
  *  By specifying different types inside each dataset
  *  it's possible to have multiple bar types mixed into one.
  */
 
  getBarChart() {
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
      datasets: [{
        label: 'mmol/L',
        data: [12, 19, 3, 5, 2, 3,20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 0, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 0, 64, 0.2)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
  }

}
