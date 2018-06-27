define(['d3','Triangle'], function (d3,Triangle) {

	 return function (instanceData) {	
	var series=instanceData.series[0];
     
    
    var datas=series[0].list;
    var total=series[0].num;
    
   
    var seconds = 3.4;
    var miniChatSeconds=12.75;

    
     //图表宽度
    var chatWidth = 225;
    //高度根据宽度自动计算
    var chatHeight = chatWidth/(seconds/0.2)*6 ;

    // 定义x和y比例尺
    x = d3.scaleLinear().domain([0, seconds*1000/4]).range([0, chatWidth]),
    y = d3.scaleLinear().domain([-1.5, 1.5]).range([chatHeight, 0]);
    //绘制SVG
    var miniChatHeight=chatHeight/3;//底部小图高度
    var miniChatWidth=chatWidth;
    var offsetY=2;
    var paperHeight=chatHeight+miniChatHeight+offsetY+10;

    minY = d3.scaleLinear().domain([-1.5, 1.5]).range([miniChatHeight+offsetY+chatHeight, chatHeight+offsetY]);
    minX = d3.scaleLinear().domain([0, miniChatSeconds*1000/4]).range([0, miniChatWidth]);

    function tW(d) {
        return x((d + 1) * 50);
    }
    function tH(d) {
        return y(d / 2);
    }

    var svg = d3.select("body").append("svg").attr("width", chatWidth).attr("height", paperHeight );
    if (total>0){
        svg.append("rect").attr("x", 0).attr("y", 0).attr("width", chatWidth).attr("height", chatHeight).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#000');

        //竖线
        svg.selectAll(".vlines").data(d3.range(16)).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4)
                .attr("x1", tW).attr("y1", 0)
                .attr("x2", tW).attr("y2", chatHeight);
        //横线
        svg.selectAll(".hlines").data([-1.5,-1,-0.5,0,0.5,1,1.5]).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4)
                .attr("x1", 0).attr("y1", y)
                .attr("x2", chatWidth).attr("y2", y);

        //中间区域散点
        var points = [];
        for (var i = 0; i < 85; i++) {
            for (var j = 0; j < 6*5; j++) {
                if (i % 5 == 0 || j % 5 == 0) {
                    continue
                } else {
                    var point = [];
                    point.push(i * 10);
                    point.push(1.5-j / 10);
                    points.push(point);
                }

            }
        }

        svg.selectAll('.circle')
                .data(points)
                .enter()
                .append('circle')
                .attr('r', 0.2)
                .attr('fill', '#000')
                .attr('cx', function (d) {
                    return x(d[0]);
                })
                .attr('cy', function (d) {
                    return y(d[1]);
                });
         var ecgDatas = [];
   //处理越界数据
       datas.forEach(function (d, i) {
             if (d>1.5) d=1.5;
             if (d<-1.5) d=-1.5
            ecgDatas.push(d);
        });
         
        var ecgData =ecgDatas.slice((miniChatSeconds - seconds) / 2 * 1000 / 4, ((miniChatSeconds - seconds) / 2 + seconds) * 1000 / 4);


        var line = d3.line()
                .x(function (d, i) {
                    return x(i);
                })
                .y(function (d) {
                    return y(d);
                });

        svg.append('path')
                .attr('d', line(ecgData)).attr("fill", "none")
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
        //中间画标志线
        var lineIndex=[seconds*1000/4/2];
        svg.selectAll(".lines").data(lineIndex).enter().append("line").attr("x1",x).attr("y1",0).attr("x2",x).attr("y2",chatHeight).
        attr("stroke","#00B8E4");
        svg.selectAll(".paths").data(lineIndex).enter().append('path')
                .attr('d',function(d) {return Triangle.getPath(x(d), 5)}).attr("fill", "#0080ff")
                .attr("stroke", "#0080ff")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 0.4);
        //左侧底部刻度
        svg.append("text").attr('x', x(100)).attr('y', y(-1.2)).text('400ms').attr('font-size', 6).attr('text-anchor', 'middle');
        //右侧底部秒数
        svg.append("text").attr('x', x(800)).attr('y', y(-1.2)).text(seconds + ' sec').attr('font-size', 6).attr('text-anchor', 'end');

        //画底部小图
        svg.append("rect").attr("x", miniChatWidth / miniChatSeconds * ((miniChatSeconds - seconds) / 2)).attr("y", chatHeight+offsetY)
                .attr("width", miniChatWidth / miniChatSeconds * seconds).attr("height", miniChatHeight).attr("stroke-width", 0.6).attr("fill", "#ECF8FC").attr('stroke', '#ECF8FC');
        svg.append("rect").attr("x", 0).attr("y", chatHeight+offsetY).attr("width", chatWidth).attr("height", miniChatHeight).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#000');

        //整理路径点
        var minLine = d3.line()
                .x(function (d, i) {
                    return minX(i);
                })
                .y(function (d) {
                    return minY(d);
                });

        svg.append('path')
                .attr('d', minLine(ecgDatas)).attr("fill", "none")
                .attr("stroke", "#333")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 0.4);
        //小图秒数
        svg.append("text").attr('x', minX(3150)).attr('y', miniChatHeight+chatHeight).text(miniChatSeconds + ' S').attr('font-size', 7).attr('text-anchor', 'end');

        svg.append("text").attr('x',chatWidth).attr('y',paperHeight-5).text('总数:'+total).attr('text-anchor','end').attr('font-size',7).attr('dy',".35em");
    }else{
        svg.append("rect").attr("x", 0).attr("y", 0).attr("width", chatWidth).attr("height", paperHeight-8).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#000');
        svg.append("text").attr("x",10).attr("y",10).text('无').attr('font-size',7);
    }


    
	}
    	
});

