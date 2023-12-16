var dom = document.getElementById("box3_right");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
   tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: [ '旅游总收入', '旅游总人数'],
    textStyle:{
     color :'#ccc'
    }
  },
  xAxis: [
    {
      type: 'category',
      data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      axisPointer: {
        type: 'shadow'
      },
    axisLabel: { color: '#ccc'  }

    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '旅游总收入',
      min: 0,
      max: 7,
      interval: 1,
      axisLabel: {
        formatter: '{value} 万亿元'
      },
    axisLabel: { color: '#ccc'  }
    },
    {
      type: 'value',
      name: '旅游总人数',
      min: 0,
      max: 70,
      interval: 10,
      axisLabel: {
        formatter: '{value} °万人'
      },
    axisLabel: { color: '#ccc'  }
    }
  ],
  series: [
    {
      name: '旅游总收入',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + '万亿元';
        }
      },
      data: [
        4.6, 5.1, 5.7, 2.2, 2.9, 2, 5.2
      ]
    },
    {
      name: '旅游总人数',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + '万人';
        }
      },
      data: [50, 55.4, 60.1, 28.8,32.5, 25.3,54.07]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }