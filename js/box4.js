var dom = document.getElementById("box4");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['微信', '携程', '抖音', '去哪儿', '途家', '同城', '马蜂窝', '美团'],
    axisLabel: { color: '#ccc'  }
  },
  yAxis: {
    type: 'value',
    axisLabel: { color: '#ccc'  }
  },
  series: [
    {
      data: [6, 8, 9, 6, 5, 7, 5, 4],
      type: 'line',
      areaStyle: {}
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }