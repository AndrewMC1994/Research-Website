AmCharts.useUTC = true;
var chart = AmCharts.makeChart("chartdiv", {
  type: "gantt",
  theme: "light",
  marginRight: 40,
  period: "DD",
  dataDateFormat: "MM-DD-YYYY",
  balloonDateFormat: "JJ:NN",
  columnWidth: 0.25,
  valueAxis: {
    type: "date",
    minimum: 1,
    maximum: 200,
    fontSize: 10,
    titleFontSize: 18
  },
  balloon: {
    adjustBorderColor: true,
    borderThickness: 2,
    shadowAlpha: 0,
    color: "#353535",
    cornerRadius: 3,
    fillColor: "#FFFFFF"
  },
  categoryAxis: {
    fontSize: 10,
    fillColor: "#ededed"
  },
  brightnessStep: 10,
  graph: {
    fillAlphas: 1,
    balloonText: "<b>[[task]]</b><br/>Start：[[open]]<br/>End：[[value]]"
  },
  rotate: true,
  categoryField: "category",
  segmentsField: "segments",
  colorField: "color",
  startDate: "09-25-2018",
  startField: "start",
  endField: "end",
  durationField: "duration",
  dataProvider: [
    {
      category: "Idea Generation",
      segments: [
        {
          start: 1,
          duration: 5,
          color: "#55c4f5",
          task: "Three Ideas Project"
        },
        {
          duration: 1,
          color: "#fed230",
          task: "Discuss and choose an idea"
        },
      ]
    },
    {
      category: "User Research",
      segments: [
        {
          start: 7,
          duration: 2,
          color: "#fed230",
          task: "Brand Name"
        },
        {
          duration: 2,
          color: "#259e39",
          task: "Target Audience"
        },
        {
          duration: 2,
          color: "#55c4f5",
          task: "Features"
        }
      ]
    },
    {
      category: "Research Website",
      segments: [
        {
          start: 7,
          duration: 1,
          color: "#fed230",
          task: "Sketches"
        },
        {
          duration: 2,
          color: "#55c4f",
          task: "Adobe IXD Prototype"
        },
        {
          duration: 3,
          color: "#259e39",
          task: "Adobe IXD Prototype"
        } 
      ]
    },
    {
      category: "Essay",
      segments: [
        {
          start: 13,
          duration: 15,
          color: "#55c4f5",
          task: "Proposal"
        },
        {
          duration: 55,
          color: "#fed230",
          task: "4000 Word Essay + Bibliography"
        }
      ]
    },
    {
      category: "",
      segments: [
        {
          start: 0,
          duration: 0,
          color: "#259e39",
          task: "タスク名 #3"
        },
        {
          duration: 0,
          color: "#55c4f5",
          task: "タスク名 #1"
        }
      ]
    },
    {
      category: "",
      segments: [
        {
          start: 0,
          duration: 0,
          color: "#fed230",
          task: "タスク名 #2"
        }
      ]
    },
    {
      category: "",
      segments: [
        {
          start: 0,
          duration: 0,
          color: "#55c4f5",
          task: "タスク名 #1"
        },
        {
          duration: 0,
          color: "#fed230",
          task: "タスク名 #2"
        },
        {
          duration: 0,
          color: "#259e39",
          task: "タスク名 #3"
        }
      ]
    },
    {
      category: "",
      segments: [
        {
          start: 0,
          duration: 0,
          color: "#fed230",
          task: "タスク名 #2"
        },
        {
          duration: 0,
          color: "#259e39",
          task: "タスク名 #3"
        }
      ]
    },
    {
      category: "",
      segments: [
        {
          start: 0,
          duration: 0,
          color: "#fed230",
          task: "タスク名 #2"
        },
        {
          start: 0,
          duration: 0,
          color: "#FFE4C4",
          task: "タスク名 #4"
        }
      ]
    },
    {
      category: "",
      segments: [
        {
          start: 0,
          duration: 0,
          color: "#55c4f5",
          task: "タスク名 #1"
        },
        {
          duration: 0,
          color: "#fed230",
          task: "タスク名 #2"
        },
        {
          duration: 0,
          color: "#259e39",
          task: "タスク名 #3"
        }
      ]
    }
  ],
  valueScrollbar: {
    autoGridCount: true
  },
  chartCursor: {
    cursorColor: "#55bb76",
    valueBalloonsEnabled: false,
    cursorAlpha: 0,
    valueLineAlpha: 0.5,
    valueLineBalloonEnabled: true,
    valueLineEnabled: true,
    zoomable: false,
    valueZoomable: true
  },
  export: {
    enabled: true
  }
});
