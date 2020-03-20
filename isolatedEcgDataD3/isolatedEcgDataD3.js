define(['d3','Triangle'], function (d3,Triangle) {

	 return function (instanceData) {	
	var series=instanceData.series[0];
     
    
    var datas=series[0].list;
    var total=series[0].num;
   
    
        
    var seconds = 2.4;
    var miniChatSeconds=9;
    var annos=series[0].annos;//标注信息  
  
     //图表宽度
    var chatWidth = instanceData.width;
    //高度根据宽度自动计算
    var chatHeight = chatWidth / 13 * 6 ;

    // 定义x和y比例尺
    x = d3.scaleLinear().domain([0, 650]).range([0, chatWidth]),
    cx = d3.scaleLinear().domain([0, 600]).range([chatWidth/13, chatWidth]),
    y = d3.scaleLinear().domain([-1.5, 1.5]).range([chatHeight, 0]);
    //(3) 绘制SVG
    var miniChatHeight=chatHeight/3;//底部小图高度
    var miniChatWidth=chatWidth;
    var offsetY=2;
    var paperHeight=chatHeight+miniChatHeight+offsetY+10;

    minY = d3.scaleLinear().domain([-1.5, 1.5]).range([miniChatHeight+offsetY+chatHeight, chatHeight+offsetY]);
    minX = d3.scaleLinear().domain([0, miniChatSeconds*1000/4]).range([miniChatWidth/13, miniChatWidth]);

    function tW(d) {
            return x((d + 1) * 50);
        }
    function tH(d) {
            return y(d / 2);
        }

    var svg = d3.select("body").append("svg").attr("width", chatWidth).attr("height", paperHeight );
    if (datas!=null&&datas.length>0){
        svg.append("rect").attr("x", 0).attr("y", 0).attr("width", chatWidth).attr("height", chatHeight).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#000');

    //竖线
    svg.selectAll(".vlines").data(d3.range(12)).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4)
            .attr("x1", tW).attr("y1", 0)
            .attr("x2", tW).attr("y2", chatHeight);
    //横线
    svg.selectAll(".hlines").data([-1.5,-1,-0.5,0,0.5,1,1.5]).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4)
            .attr("x1", 0).attr("y1", y)
            .attr("x2", chatWidth).attr("y2", y);

        //中间区域散点
        var points = [];
        for (var i = 0; i < 65; i++) {
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
                    return cx(i);
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
        var markerData = [[10, 0], [20, 0], [20, 1], [40,1],[40, 0],[50, 0]];
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
                .attr("stroke-width", 0.6);
        //中间画标志线
        var lineIndex=[seconds*1000/4/2];
        svg.selectAll(".lines").data(lineIndex).enter().append("line").attr("x1",cx).attr("y1",0).attr("x2",cx).attr("y2",chatHeight).
        attr("stroke","#0080ff").attr("stroke-width",0.4);
        svg.selectAll(".paths").data(lineIndex).enter().append('path')
                .attr('d',function(d) {return Triangle.getPath(cx(d), 5)}).attr("fill", "#0080ff")
                .attr("stroke", "#0080ff")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 0.4);
        //左侧底部刻度
        svg.append("text").attr('x', x(50)).attr('y', y(-1.4)).text('25mm/s 10mm/mV').attr('font-size', 6).attr('text-anchor', 'start');
         //右侧底部秒数
        svg.append("text").attr('x', x(600)).attr('y', y(-1.4)).text(seconds + ' s').attr('font-size', 6).attr('text-anchor', 'end');

        //画底部小图
        svg.append("rect").attr("x",miniChatWidth/13+ (miniChatWidth/13*12) / miniChatSeconds * ((miniChatSeconds - seconds) / 2)).attr("y", chatHeight+offsetY)
                .attr("width",  (miniChatWidth/13*12) / miniChatSeconds * seconds).attr("height", miniChatHeight).attr("stroke-width", 0.6).attr("fill", "#ECF8FC").attr('stroke', '#ECF8FC');
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
        svg.append("text").attr('x', minX(2200)).attr('y', miniChatHeight+chatHeight).text(miniChatSeconds + ' s').attr('font-size',6).attr('text-anchor', 'end');
       //小图前标识
        var minMarkerData = [[10, 0 ], [20, 0 ], [20, 1], [40, 1],[40,0],[50,0 ]];

        var minMarkerLine = d3.line()
                .x(function (d) {
                    return x(d[0]);
                })
                .y(function (d) {
                    return minY(d[1]);
                });

        svg.append('path')
                .attr('d', minMarkerLine(minMarkerData)).attr("fill", "none")
                .attr("stroke", "#000")
                .attr("stroke-width", 0.4);
      if (total!=null&&total>0)
        svg.append("text").attr('x',chatWidth).attr('y',paperHeight-5).text('总数:'+total).attr('text-anchor','end').attr('font-size',7).attr('dy',".35em");
    
     
    if (annos!=null){
    	var anno=[];
    	for(j = 0,len=annos.length; j < len; j++) {
    	    if (annos[j][0]>1450) break;
          	if (annos[j][0]>=825 && annos[j][0]<1450)//3.3~5.8秒之间
          	    anno.push(annos[j]);
          	    
         }
      
   svg.selectAll('.text').data(anno).enter().append('text').attr("x",function(d,i){
       return  cx(d[0]-825);
    }).attr("y",6).text(function(d){
        return d[1];
    }).attr('font-size', 6).attr('text-anchor', 'middle');
    //rr 间期和心率
    svg.selectAll('.text').data(anno).enter().append('text').attr("x",function(d,i){
        if (d[2]>0){
        if (i>0){
            return cx((d[0]-anno[i-1][0])/2+anno[i-1][0]-825);
        }else{
            return cx((d[0]-825)/2);
        }
        }
        return  0;
        
    }).attr("y",6).text(function(d,i){
         if (i>0) return  d[2];
    }).attr('font-size', 6).attr('text-anchor', 'middle');
    
    svg.selectAll('.text').data(anno).enter().append('text').attr("x",function(d,i){
        if (d[2]>0){
        if (i>0){
            return cx((d[0]-anno[i-1][0])/2+anno[i-1][0]-825);
        }else{
        
            return cx((d[0]-825)/2);
        }
        }
        return  0;
    }).attr("y",12).text(function(d,i){
         if (i>0) return  d[3];
    }).attr('font-size', 6).attr('text-anchor', 'middle');
    
    
    }
       
    
    }else{
        svg.append("rect").attr("x", 0).attr("y", 0).attr("width", chatWidth).attr("height", paperHeight-8).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#000');
        svg.append("text").attr("x",10).attr("y",10).text('无').attr('font-size',7);
    }
    
	}
    	
});

