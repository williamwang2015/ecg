define(['d3'], function (d3) {

	 return function (instanceData) {	
      
    //绘制的秒数
    var seconds = 6;


    //需要绘制的数据
   var series=instanceData.series[0];
   
    var ecgDatas=series[series.length-1].list;
   
    //图表宽度
    var w = 300;
    //高度根据宽度自动计算
    var h = w / 30 * 6 ;
    var duration = 4;//事件持续时间
    // 定义x和y比例尺
    x = d3.scaleLinear().domain([0, 1500]).range([0, w]),
    y = d3.scaleLinear().domain([-1.5, 1.5]).range([h, 0]);


    //(3) 绘制SVG
    var svg = d3.select("#"+instanceData.id).append("svg").attr("width", w).attr("height", h );

    function tW(d) {
        return x((d + 1) * 50);
    }
    function tH(d) {
        return y(d / 2);
    }
    //上方大图边框
    svg.append("rect").attr("x", 0).attr("y", 0).attr("width", w).attr("height", h).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#000');
    if (ecgDatas!=null){
    //竖线
    svg.selectAll(".vlines").data(d3.range(29)).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4)
            .attr("x1", tW).attr("y1", 0)
            .attr("x2", tW).attr("y2", h);
    //横线
    svg.selectAll(".hlines").data([-1.5,-1,-0.5,0,0.5,1,1.5]).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4)
            .attr("x1", 0).attr("y1", y)
            .attr("x2", w).attr("y2", y);
   

    var line = d3.line()
            .x(function (d, i) {
                return x(i);
            })
            .y(function (d) {
                return y(d);
            });


        svg.append('path')
                .attr('d', line(ecgDatas)).attr("fill", "none")
                .attr("stroke", "#333")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 0.6);

    //刻度标记位置
    var markerData = [[50, -1.1], [50, -1], [150, -1], [150, -1.1]];
    var markerLine = d3.line()
            .x(function (d) {
                return x(d[0]);
            })
            .y(function (d) {
                return y(d[1]);
            });

    var markerPath = svg.append('path')
            .attr('d', markerLine(markerData)).attr("fill", "none")
            .attr("stroke", "#000")
            .attr("stroke-width", 1);


    //左侧底部刻度
    svg.append("text").attr('x', x(100)).attr('y', y(-1.3)).text('400ms').attr('font-size', 5).attr('text-anchor', 'middle');
    //右侧底部秒数
    svg.append("text").attr('x', x(1450)).attr('y', y(-1.3)).text( '6sec').attr('font-size',5).attr('text-anchor', 'end');
    }else{
      
       svg.append("text").attr('x', x(50)).attr('y', y(1)).text( ' 无').attr('font-size',7).attr('text-anchor', 'start');
    
    }
      

	};
    	
});

