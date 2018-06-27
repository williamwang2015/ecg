define(['d3','Triangle'], function (d3,Triangle) {

	 return function (instanceData) {	
	//var svgWidth =instanceData.width;
    
    //绘制的秒数
    var seconds = 8;
  
   var series=instanceData.series[0];
   
   var datas=series[series.length-1];
     
   var ecgDatas = [];
   //处理越界数据
   if (datas.list!=null){
   datas.list.forEach(function (d, i) {
             if (d>1.5) d=1.5;
             if (d<-1.5) d=-1.5
            ecgDatas.push(d);
        });
   }
   var duration=datas.duration;
   var nums=1;
   if (datas.nums!=null)
        nums=datas.nums;
   
   if (datas.seconds!=null)
        seconds=datas.seconds;
   var miniChat=true;//是否画底部小图
   if (datas.miniChat!=null)
        miniChat=datas.miniChat  
   var miniChatSeconds=datas.miniChatSeconds|30;//小图秒数         
   var ecgData = new Array();
  

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
   
    var w = 560;
    
    //高度根据宽度自动计算
    var h = w / 40 * 6 * nums;
    var minH = h / 3 / nums;//底部小图高度
    var minW = w;
    
    // 定义x和y比例尺
    x = d3.scaleLinear().domain([0, 2000]).range([0, w]),
            y = d3.scaleLinear().domain([0, 3 * nums]).range([0, h]);

    minY = d3.scaleLinear().domain([-1.5, 1.5]).range([h + 5 + minH, h + 5]);
    minX = d3.scaleLinear().domain([0, 7500]).range([0, w]);
    //(3) 绘制SVG
     var svgHeight;
    if (nums==1 && miniChat)
            svgHeight=h+minH+10;
    else
            svgHeight=h+10;
    var svg = d3.select("#"+instanceData.id).append("svg").attr("width", w).attr("height",svgHeight);

    function tW(d) {
        return x((d + 1) * 50);
    }
    function tH(d) {
        return y(d / 2);
    }
    //上方大图边框
    svg.append("rect").attr("x", 0).attr("y", 0).attr("width", w).attr("height", h).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#000');
    //竖线
    svg.selectAll(".vlines").data(d3.range(39)).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4)
            .attr("x1", tW).attr("y1", 0)
            .attr("x2", tW).attr("y2", h);
    //横线
    svg.selectAll(".hlines").data(d3.range(6 * nums)).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4)
            .attr("x1", 0).attr("y1", tH)
            .attr("x2", w).attr("y2", tH);
    //中间区域散点
    var points = [];
    for (var i = 0; i < 200; i++) {
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
            .attr('fill', '#000')
            .attr('cx', function (d) {
                return x(d[0]);
            })
            .attr('cy', function (d) {
                return y(d[1]);
            });
    var line = d3.line()
            .x(function (d, i) {
                return x(i);
            })
            .y(function (d) {
                return y(d);
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

        if (num == 0 ) {
             if (duration!=null){
             var secStr=duration.replace('secs','').trim();
             var sec=parseFloat(secStr);
             if (sec < seconds){
                //大图画标志线
            var beginX = (seconds - sec) / 2 * (w / seconds);
            var endX = (sec + (seconds - sec) / 2) * (w / seconds);
            svg.append('path')
                    .attr('d', Triangle.getPath(beginX, 5)).attr("fill", "#0080ff")
                    .attr("stroke", "#0080ff")
                    .attr("stroke-linejoin", "round")
                    .attr("stroke-linecap", "round")
                    .attr("stroke-width", 0.4);

            svg.append("line").attr("stroke", "#0080ff").attr("stroke-width", 0.4)
                    .attr("x1", beginX).attr("y1", 5)
                    .attr("x2", beginX).attr("y2", h);

            svg.append('path')
                    .attr('d', Triangle.getPath(endX, 5)).attr("fill", "#0080ff")
                    .attr("stroke", "#0080ff")
                    .attr("stroke-linejoin", "round")
                    .attr("stroke-linecap", "round")
                    .attr("stroke-width", 0.4);

            svg.append("line").attr("stroke", "#0080ff").attr("stroke-width", 0.4)
                    .attr("x1", endX).attr("y1", 5)
                    .attr("x2", endX).attr("y2", h);
                
                
                }}else{//没有事件秒数画中心线
                   var beginX=seconds/2*(w/seconds);
                   svg.append('path')
                    .attr('d', Triangle.getPath(beginX, 5)).attr("fill", "#0080ff")
                    .attr("stroke", "#0080ff")
                    .attr("stroke-linejoin", "round")
                    .attr("stroke-linecap", "round")
                    .attr("stroke-width", 0.4);

                 svg.append("line").attr("stroke", "#0080ff").attr("stroke-width", 0.4)
                    .attr("x1", beginX).attr("y1", 5)
                    .attr("x2", beginX).attr("y2", h);
                }
             
             
             
            
        }

    }
    //刻度标记位置
    var markerData = [[50, 3 * nums - 0.4], [50, 3 * nums - 0.5], [150, 3 * nums - 0.5], [150, 3 * nums - 0.4]];
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
    svg.append("text").attr('x', x(100)).attr('y', y(3 * nums - 0.3)).text('400ms').attr('font-size', 6).attr('text-anchor', 'middle');
    //右侧底部秒数
    svg.append("text").attr('x', x(1950)).attr('y', y(3 * nums - 0.3)).text(nums * seconds + ' sec').attr('font-size', '7').attr('text-anchor', 'end');


    if (nums == 1&&miniChat) {
        //小图中间背景
        svg.append("rect").attr("x", w / miniChatSeconds * ((miniChatSeconds - seconds) / 2)).attr("y", h + 6).attr("width", w / miniChatSeconds * seconds).attr("height", minH - 2).attr("stroke-width", 0.6).attr("fill", "#ECF8FC").attr('stroke', '#ECF8FC');
        //小图边框
        svg.append("rect").attr("x", 0).attr("y", h + 5).attr("width", minW).attr("height", minH).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#000');
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
        svg.append("text").attr('x', x(1950)).attr('y', h + minH).text(miniChatSeconds + ' sec').attr('font-size', 7).attr('text-anchor', 'end');

        if (duration!=null){
         var sec=parseFloat(duration.replace('secs','').trim());
        if (sec >= seconds && sec < miniChatSeconds) {

            //底部小图标识持续时长
            var beginX = (miniChatSeconds - sec) / 2 * (w / miniChatSeconds);
            var endX = (sec + (miniChatSeconds - sec) / 2) * (w / miniChatSeconds);
            svg.append('path')
                    .attr('d', Triangle.getPath(beginX, h + 10)).attr("fill", "#0080ff")
                    .attr("stroke", "#0080ff")
                    .attr("stroke-linejoin", "round")
                    .attr("stroke-linecap", "round")
                    .attr("stroke-width", 0.4);

            svg.append("line").attr("stroke", "#0080ff").attr("stroke-width", 0.4)
                    .attr("x1", beginX).attr("y1", h + 10)
                    .attr("x2", beginX).attr("y2", h + minH + 5);

            svg.append('path')
                    .attr('d', Triangle.getPath(endX, h + 10)).attr("fill", "#0080ff")
                    .attr("stroke", "#0080ff")
                    .attr("stroke-linejoin", "round")
                    .attr("stroke-linecap", "round")
                    .attr("stroke-width", 0.4);
            svg.append("line").attr("stroke", "#0080ff").attr("stroke-width", 0.4)
                    .attr("x1", endX).attr("y1", h + 10)
                    .attr("x2", endX).attr("y2", h + minH + 5);
        }
        }
    }

	};
    	
});

