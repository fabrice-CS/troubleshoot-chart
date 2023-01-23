import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "troubleshoot-chart";

  yAxes = [{ format: "unit" }];
  xAxes = [{}];

  lines = [
    {
      color: "red",
      format: "unit",
      data: [
        { x: new Date(Date.parse("2019-01-01")), y: 10 },
        { x: new Date(Date.parse("2019-01-02")), y: 20 },
        { x: new Date(Date.parse("2019-01-03")), y: 50 },
        { x: new Date(Date.parse("2019-01-04")), y: 40 },
        { x: new Date(Date.parse("2019-01-05")), y: 30 },
      ],
    },
  ];

  line2 = [
    {
      color: "blue",
      format: "unit",
      data: [
        { x: new Date(Date.parse("2019-01-01")), y: 90 },
        { x: new Date(Date.parse("2019-01-02")), y: 50 },
        { x: new Date(Date.parse("2019-01-03")), y: 20 },
        { x: new Date(Date.parse("2019-01-04")), y: 70 },
        { x: new Date(Date.parse("2019-01-05")), y: 10 },
      ],
    },
  ];

  line3 = [
    {
      color: "green",
      format: "unit",
      data: [
        { x: new Date(Date.parse("2019-11-01")), y: 70 },
        { x: new Date(Date.parse("2019-11-02")), y: 70 },
        { x: new Date(Date.parse("2019-11-03")), y: 10 },
        { x: new Date(Date.parse("2019-11-04")), y: 90 },
        { x: new Date(Date.parse("2019-11-05")), y: 80 },
      ],
    },
  ];

  line4 = [
    {
      color: "pink",
      format: "unit",
      data: [
        { x: new Date(Date.parse("2019-11-01")), y: 40 },
        { x: new Date(Date.parse("2019-11-02")), y: 30 },
        { x: new Date(Date.parse("2019-11-03")), y: 90 },
        { x: new Date(Date.parse("2019-11-04")), y: 10 },
        { x: new Date(Date.parse("2019-11-05")), y: 80 },
      ],
    },
  ];

  chartId = 1;
  showChart1 = true;

  chartId2 = 1;
  showChart2 = true;

  toggleShowChart2() {
    this.showChart2 = !this.showChart2;
  }

  get selectedChart() {
    return this.chartId === 1 ? this.lines : this.line2;
  }

  get selectedChart2() {
    return this.chartId2 === 1 ? this.line3 : this.line4;
  }

  useReRender = false;

  toggleChart() {
    if (this.chartId == 1) {
      this.chartId = 2;
    } else {
      this.chartId = 1;
    }

    if (this.useReRender) {
      this.showChart1 = false;
      setTimeout(() => {
        this.showChart1 = true;
      }, 2000);
    }
  }

  toggleChart2() {
    if (this.chartId2 == 1) {
      this.chartId2 = 2;
    } else {
      this.chartId2 = 1;
    }
  }
}
