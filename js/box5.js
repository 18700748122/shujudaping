var dom = document.getElementById("box5");
var myChart = echarts.init(dom);
var app = {};
option = null;
 option = {
  xAxis: {
    type: 'category',
    data: ['1天', '2天', '3天', '4天', '5+天'],
    axisLabel: { color: '#ccc'  }
  },
  yAxis: {
    type: 'value',
    axisLabel: { color: '#ccc'  }
  },
  series: [
    {
      data: [6.90, 18.20, 21.60, 23.70, 29.60],
      type: 'line',
      symbol: 'triangle',
      symbolSize: 20,
      lineStyle: {
        color: '#5470C6',
        width: 4,
        type: 'dashed'
      },
      itemStyle: {
        borderWidth: 3,
        borderColor: '#EE6666',
        color: 'yellow'
      }
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }