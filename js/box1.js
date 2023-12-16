var dom = document.getElementById("box1");
var myChart = echarts.init(dom);
var app = {};
option = null;
var labelRight = {
    normal: {
        position: 'right'
    }
};
option = {
  title:{
    textStyle:{
        color:'#ccc'
    }

  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    // doesn't perfectly work with our tricks, disable it
    selectedMode: false,
    textStyle:{
     color :'#ccc'
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '70%'],
      // adjust the start angle
      startAngle: 180,
      label: {
        show: true,
        formatter(param) {
          // correct the percentage
          return param.name + ' (' + param.percent * 2 + '%)';
        },
        color:'#ccc'
      },
      data: [
        { value: 1128, name: '男性' },
        { value: 1380, name: '女性' },
        {
          // make an record to fill the bottom 50%
          value: 1048 + 1380,
          itemStyle: {
            // stop the chart from rendering this piece
            color: 'none',
            decal: {
              symbol: 'none'
            }
          },
          label: {
            show: false,
            color:'#ccc'
          }
        }
      ]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }