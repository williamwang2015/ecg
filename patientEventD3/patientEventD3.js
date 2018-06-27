define(['d3'], function (d3) {

    return function (instanceData) {	
    
    var w = instanceData.width; 
    //绘制的秒数
    var seconds = 6;
    //需要绘制的数据
    
    var series0 = instanceData.series[0];
    var length=series0.length;
    var ecgData=series0[length-1].eventList;
   
   
    
    var points = [];
   //处理越界数据
    ecgData.forEach(function (d, i) {
             if (d>1.5) d=1.5;
             if (d<-1.5) d=-1.5
            points.push(d);
        });
        
    var seconds=90;
	var chatWidth=w;
	var chatHeight=90;
	
   
    // 定义x和y比例尺
    var xScale = d3.scaleLinear().domain([0, 7500]).range([0, chatWidth]);
    
    var y1 = d3.scaleLinear().domain([-1.5, 1.5]).range([30, 0]);
	var y2 = d3.scaleLinear().domain([-1.5, 1.5]).range([60, 30]);
	var y3 = d3.scaleLinear().domain([-1.5, 1.5]).range([90, 60]);

    
    var svg = d3.select("#"+instanceData.id).append("svg").attr("width", chatWidth).attr("height", chatHeight);

    
    svg.append("rect").attr("x", 0).attr("y", 0).attr("width", chatWidth).attr("height", chatHeight).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#000');
    
    if (points != null) {
        var line;
        for (var index = 1; index <= 3; index++) {
            var start = (index - 1) * 7500;
            var end = index * 7500;
            var lines = points.slice(start, end);
           
            if (index == 1)
                line = d3.line().x(function (d, i) {
                            return xScale(i);
                        }).y(function (d) {
                            return y1(d);
                        });
              if (index == 2)
                line = d3.line().x(function (d, i) {
                            return xScale(i);
                        }).y(function (d) {
                            return y2(d);
                        });
            if (index == 3)
                line = d3.line().x(function (d, i) {
                            return xScale(i);
                        }).y(function (d) {
                            return y3(d);
                        });

            svg.append('path')
                    .attr('d', line(lines)).attr("fill", "none")
                    .attr("stroke", "#333")
                    .attr("stroke-linejoin", "round")
                    .attr("stroke-linecap", "round")
                    .attr("stroke-width", 0.6);
        }

      svg.append("circle").attr('cx',chatWidth/2).attr('cy',chatHeight/2).attr('r',15).attr('stroke','#f00').attr('fill','none').attr("stroke-dasharray","5,5");
     //右侧底部秒数
      svg.append("text").attr('x',xScale(7450)).attr('y', y3(-1.3)).text( '90sec').attr('font-size',5).attr('text-anchor', 'end');
    }else{
       svg.append("text").attr('x', xScale(50)).attr('y', y1(1.2)).text( ' 无').attr('font-size',6).attr('text-anchor', 'start');
    }  

	}
    	
});

