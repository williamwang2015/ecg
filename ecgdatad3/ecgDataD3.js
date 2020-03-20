define(['d3','Triangle'], function (d3,Triangle) {

	 return function (instanceData) {	
	//var svgWidth =instanceData.width;
    
    //绘制的秒数
    var seconds = 8;
  
   var series=instanceData.series[0];
   
   var datas=series[series.length-1];
   
   var annos=datas.annos;//标注信息  
   
   var markLine=datas.markLine;//画标志线标志
   //未定义则画
   if (markLine==undefined)
       markLine=true;
       
   var ecgDatas = [];
   //处理越界数据
  
   var duration=datas.duration;
   
   //根据间期转换秒数
   var sec=0;
  if (duration!=null){
  	 duration=duration.replace(/\s+/g,"");
    if (duration.indexOf('h')!=-1){

        var h=parseInt(duration.substr(0,2));
        var m=parseInt(duration.substr(3,2));
        var s=parseInt(duration.substr(6,2));
        sec=h*3600+m*60+s;
    }else if (duration.indexOf('m')!=-1)
    {
        var m=parseInt(duration.substr(0,2));
        var s=parseInt(duration.substr(3,2));
      	sec=m*60+s;
    }else{
    	var secStr=duration.replace('s','').trim();
        sec=parseFloat(secStr);
    }
    
  } 
  
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
  

    
   
    var w = 560;
    
    //高度根据宽度自动计算
    var h = w / 41 * 6 * nums;//增加一个小格画标尺
    var minH = h / 3 / nums;//底部小图高度
    var minW = w;
    
    // 定义x和y比例尺
    x = d3.scaleLinear().domain([0, 2050]).range([0, w]),
    cx = d3.scaleLinear().domain([0, 2000]).range([ w/41, w]),//ecg图形比例
    y = d3.scaleLinear().domain([0, 3 * nums]).range([0, h]);

    minY = d3.scaleLinear().domain([-1.5, 1.5]).range([h + 5 + minH, h + 5]);
    minX = d3.scaleLinear().domain([0, 7500]).range([w/41, w]);
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
    
     svg.append("rect").attr("x", 0).attr("y", 0).attr("width", w).attr("height", h).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#000');
   
    //竖线
    svg.selectAll(".vlines").data(d3.range(40)).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4)
            .attr("x1", tW).attr("y1", 0)
            .attr("x2", tW).attr("y2", h);
    //横线
    svg.selectAll(".hlines").data(d3.range(6 * nums)).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4)
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
            .attr('fill', '#000')
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

        if (num == 0&&markLine ) {
             
             if (duration!=null){
             
            
             if (sec < seconds){
                //大图画标志线
            var beginX =w/41+ (seconds - sec) / 2 * ((w/41*40) / seconds);
            
            var endX = w/41+(sec + (seconds - sec) / 2) * ((w/41*40) / seconds);
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
               
                   var beginX=w/41+seconds/2*((w/41*40)/seconds);
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
    var markerData = [[10, 3 * nums -1.5], [20, 3 * nums - 1.5], [20, 3 * nums - 2.5], [40, 3 * nums - 2.5],[40, 3 * nums - 1.5],[50, 3 * nums - 1.5]];
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


    //左侧底部刻度
     svg.append("text").attr('x', x(50)).attr('y', y(3 * nums - 0.1)).text('25mm/s 10mm/mV').attr('font-size', 6).attr('text-anchor', 'start');
     //右侧底部秒数
    svg.append("text").attr('x', x(2000)).attr('y', y(3 * nums - 0.1)).text(nums * seconds + ' s').attr('font-size', 6).attr('text-anchor', 'end');


    if (nums == 1&&miniChat) {
        //小图中间背景
         svg.append("rect").attr("x", w/41+ (w/41*40)/ miniChatSeconds * ((miniChatSeconds - seconds) / 2)).attr("y", h + 6).attr("width", (w/41*40) / miniChatSeconds * seconds).attr("height", minH - 2).attr("stroke-width", 0.6).attr("fill", "#ECF8FC").attr('stroke', '#ECF8FC');
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
        svg.append("text").attr('x', x(2000)).attr('y', h + minH).text(miniChatSeconds + ' s').attr('font-size', 6).attr('text-anchor', 'end');

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

        if (duration!=null&&markLine){
        
        if (sec >= seconds && sec < miniChatSeconds) {

            //底部小图标识持续时长
            var beginX =w/41+ (miniChatSeconds - sec) / 2 * ((w/41*40) / miniChatSeconds);
            var endX = w/41+(sec + (miniChatSeconds - sec) / 2) * ((w/41*40) / miniChatSeconds);
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
        }else if (sec>=miniChatSeconds){//超过小图秒数，画两个箭头
         svg.append('path')
                    .attr('d', Triangle.getPathLeft(5+w/41, h + 5)).attr("fill", "#0080ff")
                    .attr("stroke", "#0080ff")
                    .attr("stroke-linejoin", "round")
                    .attr("stroke-linecap", "round")
                    .attr("stroke-width", 0.4);
        svg.append('path')
                    .attr('d', Triangle.getPathRight(minW-5, h + 5)).attr("fill", "#0080ff")
                    .attr("stroke", "#0080ff")
                    .attr("stroke-linejoin", "round")
                    .attr("stroke-linecap", "round")
                    .attr("stroke-width", 0.4);
        }
        }
    }
    //画标注
    
    if (num==1 && annos!=null){
    	var anno=[];
    	for(j = 0,len=annos.length; j < len; j++) {
    	    if (annos[j][0]>4750) break;
          	if (annos[j][0]>=2750 && annos[j][0]<4750)//11~19秒之间
          	    anno.push(annos[j]);
          	    
         }
      
   svg.selectAll('.text').data(anno).enter().append('text').attr("x",function(d,i){
       return  cx(d[0]-2750);
    }).attr("y",6).text(function(d){
        return d[1];
    }).attr('font-size', 6).attr('text-anchor', 'middle');
    //rr 间期和心率
    svg.selectAll('.text').data(anno).enter().append('text').attr("x",function(d,i){
        if (d[2]>0){
        if (i>0){
            return cx((d[0]-anno[i-1][0])/2+anno[i-1][0]-2750);
        }else{
            return cx((d[0]-2750)/2);
        }
        }
        return  0;
        
    }).attr("y",6).text(function(d,i){
         if (d[2]>0&&i>0) return  d[2];
    }).attr('font-size', 6).attr('text-anchor', 'middle');
    
    svg.selectAll('.text').data(anno).enter().append('text').attr("x",function(d,i){
        if (d[2]>0){
        if (i>0){
            return cx((d[0]-anno[i-1][0])/2+anno[i-1][0]-2750);
        }else{
        
            return cx((d[0]-2750)/2);
        }
        }
        return  0;
    }).attr("y",12).text(function(d,i){
         if (d[3]>0&&i>0) return  d[3];
    }).attr('font-size', 6).attr('text-anchor', 'middle');
    
    
    }
       
    
    
}else{
    //没有数据画一个框
    svg.append("rect").attr("x", 0).attr("y", 0).attr("width", w).attr("height", h+5+minH).attr("stroke-width", 0.6).attr("fill", "none").attr('stroke', '#000');
    svg.append("text").attr('x', 15).attr('y', 10).text( '无').attr('font-size',7).attr('text-anchor', 'start');
    
}
	};
    	
});

