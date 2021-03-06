define(['d3'], function (d3,Triangle) {

	 return function (instanceData) {	
	
    
    //3行8秒 绘制的秒数
    var seconds = 8;
  
   var series=instanceData.series[0];
   
   var datas=series[series.length-1];
     
   var ecgDatas = [];
 
   var nums=3;
   if (datas.nums!=null)
        nums=datas.nums;
   
   if (datas.seconds!=null)
        seconds=datas.seconds;
        
   var ecgData = new Array();
    var w =instanceData.width;;
    
    //高度根据宽度自动计算
    var h = w / 41 * 6 * nums;//增加一个小格画标尺
    var minH = h / 3 / nums;//底部小图高度
    var minW = w;
    
    // 定义x和y比例尺
    x = d3.scaleLinear().domain([0, 2050]).range([0, w]),
    cx = d3.scaleLinear().domain([0, 2000]).range([ w/51, w]),//ecg图形比例
    y = d3.scaleLinear().domain([0, 3 * nums]).range([0, h]);

    minY = d3.scaleLinear().domain([-1.5, 1.5]).range([h + 5 + minH, h + 5]);
    minX = d3.scaleLinear().domain([0, 7500]).range([w/41, w]);
    //(3) 绘制SVG
     var svgHeight;
    if (nums==1 && miniChat)
            svgHeight=h+minH+10;
    else
            svgHeight=h+5;
    var svg = d3.select("#"+instanceData.id).append("svg").attr("width", w).attr("height",svgHeight);

    function tW(d) {
        return x((d + 1) * 50);
    }
    function tH(d) {
        return y(d / 2);
    }
    //上方大图边框
    
    if (datas.list!=null){
    
    datas.list.forEach(function (d, i) {
             if (d>1.5) d=1.5;
             if (d<-1.5) d=-1.5
            ecgDatas.push(d);
        });
        
      if (nums==1){//取中间数据秒数据
       
        ecgData.push(ecgDatas.slice((miniChatSeconds-seconds)/2*1000/4,((miniChatSeconds-seconds)/2+seconds)*1000/4));
       
    }else if (nums==2){
        ecgData.push(ecgDatas.slice(0/4,seconds*1000/4));
        ecgData.push(ecgDatas.slice(seconds*1000/4,seconds*1000*2/4));
    }else{
        ecgData.push(ecgDatas.slice(0/4,seconds*1000/4));
        ecgData.push(ecgDatas.slice(seconds*1000/4,seconds*1000*2/4));
        ecgData.push(ecgDatas.slice(seconds*1000*2/4,seconds*1000*3/4));
    }  
    
     svg.append("rect").attr("x", 0).attr("y", 0).attr("width", w).attr("height", h).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#9B9B9B');
   
    //竖线
    svg.selectAll(".vlines").data(d3.range(75)).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4)
            .attr("x1", tW).attr("y1", 0)
            .attr("x2", tW).attr("y2", h);
    //横线
    svg.selectAll(".hlines").data(d3.range(6 * nums)).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width",function (d,i){if (d%6==0) return 0.8; else return 0.4;})
            .attr("x1", 0).attr("y1", tH)
            .attr("x2", w).attr("y2", tH);
    //中间区域散点
    var points = [];
    for (var i = 0; i < 205; i++) {
        for (var j = 0; j < 6 * nums * 5; j++) {
            if (i % 5 == 0 || j % 5 == 0) {
                continue
            } else {
                var point = [];
                point.push(i * 10);
                point.push(j / 10);
                points.push(point);
            }

        }
    }
    svg.selectAll('.circle')
            .data(points)
            .enter()
            .append('circle')
            .attr('r', 0.2)
            .attr('fill', '#9B9B9B')
            .attr('cx', function (d) {
                return x(d[0]);
            })
            .attr('cy', function (d) {
                return y(d[1]);
            });
    var line = d3.line()
            .x(function (d, i) {
                return cx(i);
            })
            .y(function (d) {
                return y(d);
            });

 var markerLine = d3.line()
            .x(function (d) {
                return x(d[0]);
            })
            .y(function (d) {
                return y(d[1]);
            });

    for (var num = 0; num < nums; num++) {
        var dataset = [];
        var data = ecgData[num].forEach(function (d, i) {
            dataset.push((1.5 - d) + num * 3);//转换数据刻度
        });

        svg.append('path')
                .attr('d', line(dataset)).attr("fill", "none")
                .attr("stroke", "#333")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 0.6);

     //刻度标记位置
     if (num==0){
        var markerData = [[10, 3 * num +1.5], [20, 3 * num + 1.5], [20, 3 * num+0.5 ], [40, 3 * num+0.5],[40, 3 * num + 1.5],[50, 3 * num + 1.5]];


        var markerPath = svg.append('path')
                .attr('d', markerLine(markerData)).attr("fill", "none")
                .attr("stroke", "#000")
                .attr("stroke-width", 0.6);
                }
    }
   


    //左侧底部刻度
     svg.append("text").attr('x', x(50)).attr('y', y(3 * nums - 0.3)).text('25mm/s 10mm/mV').attr('font-size', 6).attr('text-anchor', 'start');
     //右侧底部秒数
    svg.append("text").attr('x', x(2500)).attr('y', y(3 * nums - 0.3)).text(nums * seconds + ' s').attr('font-size', 6).attr('text-anchor', 'end');


    
}else{
    //没有数据画一个框
    svg.append("rect").attr("x", 0).attr("y", 0).attr("width", w).attr("height", h+5+minH).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#000');
    svg.append("text").attr('x', 15).attr('y', 10).text( '无').attr('font-size',7).attr('text-anchor', 'start');
    
}
	};
    	
});

