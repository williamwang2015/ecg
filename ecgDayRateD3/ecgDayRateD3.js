define(['d3','Triangle'], function (d3,Triangle) {

	 return function (instanceData) {	
        var h=220;//
        var w=567;//
        var paddingTop=10;
        var paddingBottom=10;
        var paddingLeft=22;
    
        var svgHeight=paddingTop+h+paddingBottom;
        var svg = d3.select("#"+instanceData.id).append("svg").attr("width", w).attr("height", svgHeight);
    
        var series0 = instanceData.series[0];
        
        var length=series0.length;
        //传递的数据
        var rateData=series0[length-1];
    
        var xScale = d3.scaleLinear()
                .domain([0,24*60/20]).range([paddingLeft, w-108]);
        var xScaleAf = d3.scaleLinear()
                .domain([0,24*60]).range([paddingLeft, w-108]);
        var yScale = d3.scaleLinear()
                .domain([0, 250]).range([h/2+paddingTop, paddingTop]);
        //画矩形
        svg.append("rect").attr("x",paddingLeft).attr('y',h/10*3+paddingTop).attr("height",h/10).attr("width",w-paddingLeft).attr("fill","#ECF8FC");
    
        svg.append("rect").attr("x",paddingLeft).attr('y',h/2+h/4/6+paddingTop).attr("height",h/4/6).attr("width",w-paddingLeft).attr("fill","#E5E5E5");
    
        svg.append("rect").attr("x",paddingLeft).attr('y',h/2+h/4/6*3+paddingTop).attr("height",h/4/6).attr("width",w-paddingLeft).attr("fill","#E5E5E5");
    
        svg.append("rect").attr("x",paddingLeft).attr('y',h/2+h/4/6*5+paddingTop).attr("height",h/4/6).attr("width",w-paddingLeft).attr("fill","#E5E5E5");
    
        //左侧竖线
        svg.append("line").attr("x1",paddingLeft).attr("y1",paddingTop).attr("x2",paddingLeft).attr("y2",svgHeight).
        attr("stroke-width",0.6).attr("stroke","#000");
        //横线
        svg.append("line").attr("x1",paddingLeft).attr("y1",paddingTop+h/2).attr("x2",w-108).attr("y2",paddingTop+h/2).
        attr("stroke-width",0.6).attr("stroke","#000");
        svg.append("line").attr("x1",paddingLeft).attr("y1",paddingTop+h/4*3).attr("x2",w).attr("y2",paddingTop+h/4*3).
        attr("stroke-width",0.6).attr("stroke","#000").attr("fill","#000");
    
        svg.append("line").attr("x1",paddingLeft).attr("y1",paddingTop+h/4*3+h/12).attr("x2",w-108).attr("y2",paddingTop+h/4*3+h/12).
        attr("stroke-width",0.6).attr("stroke","#000").attr("fill","#000").attr("stroke-dasharray","5,5");
        svg.append("line").attr("x1",paddingLeft).attr("y1",paddingTop+h/4*3+h/12*2).attr("x2",w-108).attr("y2",paddingTop+h/4*3+h/12*2).
        attr("stroke-width",0.6).attr("stroke","#000").attr("fill","#000").attr("stroke-dasharray","5,5");
        svg.append("line").attr("x1",paddingLeft).attr("y1",paddingTop+h).attr("x2",w).attr("y2",paddingTop+h).
        attr("stroke-width",0.6).attr("stroke","#000").attr("fill","#000");
        //画竖分割线
    	svg.selectAll(".hlines").data(d3.range(3,73,3).filter(function(sn) { if (sn!==18 &&sn!==54) return true; else return false })).enter().append("line").attr("stroke", "#A6A6A6").attr("stroke-width", 0.4)
            .attr("x1", xScale).attr("y1", paddingTop)
            .attr("x2", xScale).attr("y2", paddingTop+h);
    	svg.selectAll(".hlines").data([18,54]).enter().append("line").attr("stroke", "#A6A6A6").attr("stroke-width", 0.4)
            .attr("x1", xScale).attr("y1", paddingTop)
            .attr("x2", xScale).attr("y2", paddingTop+h);
   		//画时间刻度
    	svg.selectAll(".time").data([3*3,6*3,9*3,12*3,15*3,18*3,21*3]).enter().append("text").attr("text-anchor", "middle").attr('font-size', 6)
            .attr("x", xScale).attr("y", paddingTop-1).text(function(d){return d/3%24});
        //写y轴刻度
        svg.selectAll(".text").data(d3.range(0,300,50)).enter().append("text").attr("text-anchor", "end").attr('font-size', 6)
                .attr("x", paddingLeft-2).attr("y", yScale).text(function(d){return d}).attr('dy',".35em");
        //左侧三个动态改变的刻度
        var maxUnit=100;
        
        
        //房早
        if (rateData.maxSve!=null&&rateData.maxSve>0) maxUnit=rateData.maxSve; else maxUnit=100;
        svg.append("text").attr("text-anchor", "end").attr('font-size', 6)
                .attr("x", paddingLeft-2).attr("y", paddingTop+h/4*3).text(maxUnit).attr('dy',".35em");
        //室早
        if (rateData.maxVe!=null&&rateData.maxVe>0) maxUnit=rateData.maxVe; else maxUnit=100;
        svg.append("text").attr("text-anchor", "end").attr('font-size', 6)
                .attr("x", paddingLeft-2).attr("y", paddingTop+h/4*3+h/12).text(maxUnit).attr('dy',".35em");
        //R on T
         
        if (rateData.maxRt!=null&&rateData.maxRt>0) maxUnit=rateData.maxRt; else maxUnit=100;
        svg.append("text").attr("text-anchor", "end").attr('font-size', 6)
                .attr("x", paddingLeft-2).attr("y", paddingTop+h/4*3+h/6).text(maxUnit).attr('dy',".35em");
    
        //画点
        svg.selectAll(".circle").data(d3.range(0,300,50)).enter().append("circle").attr("stroke-width", "0.6").attr('fill', '#000').attr("stroke",'#000')
                .attr("cx", paddingLeft).attr("cy", yScale).attr("r",1);
    
        //写底部日期
        svg.append("text").attr("text-anchor", "middle").attr('font-size', 6)
                .attr("x", paddingLeft+(w-paddingLeft-108)/2).attr("y", h+paddingBottom+paddingTop).text(rateData.date1);
     
        //右边内容
        svg.append("rect").attr("x",w-100).attr("y",paddingTop).attr("width",100).attr("height",10).attr("fill","#000");
        //天数
        svg.append("text").attr("x",w-95).attr("y",paddingTop+30).text(rateData.days).attr("font-size",14);
    
        svg.append("text").attr("x",w-95).attr("y",paddingTop+h/10*2+h/20).text("心率统计(每20分钟)").attr('font-size',7).attr('dy',".35em");;
        svg.append("text").attr("x",w-95).attr("y",paddingTop+h/10*3+h/20).text("最大/最小").attr('font-size',6).attr('dy',".35em");;
       //右边方框
        var  path="M"+(w-58)+','+(paddingTop+h/10*3+5)+'L'+(w-63)+','+(paddingTop+h/10*3+5)+'L'+(w-63)+','+(paddingTop+h/10*4-5)+
                        'L'+(w-58)+','+(paddingTop+h/10*4-5);
        svg.append('path')
                .attr('d', path).attr("fill", "none")
                .attr("stroke", "#000")
                .attr("stroke-width", 0.4)
                .attr("stroke-dasharray","2,2");;
    
        svg.append("line").attr('x1',w-53).attr('y1',(paddingTop+h/10*3+5))
                .attr('x2',w-53).attr('y2',paddingTop+h/10*4-5).attr("stroke","#000").attr("fill","#000")
                .attr('stroke-width','0.6');
        svg.append("circle").attr('cx',w-53).attr('cy',paddingTop+h/10*3+h/20).attr('r',1).attr('fill','#000').attr('stroke','#000');
        svg.append("line").attr('x1',w-48).attr('y1',paddingTop+h/10*3+h/20)
                .attr('x2',w-38).attr('y2',paddingTop+h/10*3+h/20).attr("stroke-width",0.6).attr("stroke-dasharray","2,2")
                .attr("stroke", "#000");
        svg.append("text").attr("x",w-35).attr("y",paddingTop+h/10*3+h/20).text("平均").attr('font-size',6).attr('dy',".35em");;
        //
        //画时间开始和结束标志线
        // var beginIndex=20;
        // var endIndex=100;
        var lineIndex=[];
        if (rateData.beginIndex!=null&&rateData.beginIndex>0)
             lineIndex.push(rateData.beginIndex);
        if (rateData.endIndex!=null&&rateData.endIndex>0)
             lineIndex.push(rateData.endIndex);     
        //
        if (lineIndex.length>0){
        svg.selectAll(".lines").data(lineIndex).enter().append("line").attr("x1",xScaleAf).attr("y1",paddingTop+30).attr("x2",xScaleAf).attr("y2",paddingTop+h).
                attr("stroke","#00B8E4");
        svg.selectAll(".paths").data(lineIndex).enter().append('path')
                .attr('d',function(d) {return Triangle.getPath(xScaleAf(d), paddingTop+30)}).attr("fill", "#0080ff")
                .attr("stroke", "#0080ff")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 0.4);
       }
        var marks = [ '用户事件', '室颤/多形性室速/室速/TdP',  '室上速', '长间歇', '房颤 %', '房室传导阻滞','房早', '室早','R on T'];
    
        for (var k = 0; k < 9; k++) {
            if (k<=5){
    
                var y=paddingTop+h/2+h/4/6*(k)+h/4/12;
                svg.append("text").attr("x",w-85).attr("y",y).text(marks[k]).attr('font-size',7).attr('dy',".35em");
                //事件数量
                svg.append("text").attr("x",w-90).attr("y",y).text(rateData.events[k]).attr('font-size',7).attr('dy',".35em").attr("text-anchor","end");
    
            }else{
                var y=paddingTop+h*3/4+h/24+h/12*(k-6);
                svg.append("text").attr("x",w-85).attr("y",y).text(marks[k]).attr('font-size',7).attr('dy',".35em");
                //事件数量
                svg.append("text").attr("x",w-90).attr("y",y).text(rateData.events[k]).attr('font-size',7).attr('dy',".35em").attr("text-anchor","end");
    
            }
    
        }
    
        //绘制心率数据信息
        // var rateList=[{index:2,min:68,max:146,avg:76},{index:4,min:66,max:115,avg:80}];
        var rateList=rateData.rateList;
        if (rateList){
        svg.selectAll(".lines").data(rateList).enter().append("line").attr("stroke", "#000").attr("stroke-width", 0.8)
                .attr("x1", function(d) {return xScale(d.index)}).attr("y1",function(d){return yScale(d.max)})
                .attr("x2", function(d) {return xScale(d.index)}).attr("y2",function(d){return  yScale(d.min)});
    
        svg.selectAll(".circle").data(rateList).enter().append("circle").attr("cx",function(d) {return xScale(d.index)}).attr("cy",function(d){return  yScale(d.avg)}).
                attr("r",1).attr("fill","#000").attr("stroke","#000");
        }
        //事件信息
       // var eventList=[{eventIndex:4,datas:[2,8,10]},{eventIndex:5,datas:[{start:120,end:130},{start:72,end:78}]},{eventIndex:6,datas:[20,24]},{eventIndex:7,datas:[{index:46,value:50}]}];
        var eventList=rateData.eventList;
        for (var m = 0; m < eventList.length; m++) {
            var event = eventList[m];
    
            if (event.eventIndex<=4||event.eventIndex==6){//画圆
                var y=paddingTop+h/2+h/4/6*(event.eventIndex-1)+h/4/12;
                svg.selectAll(".circle").data(event.datas).enter().append("circle").
                attr("cx",function(d) {console.log(d); return xScale(d.index)}).attr("cy",y).
                attr("r",2).attr("fill","#000");
    
            } else if (event.eventIndex ==5) {//房颤采用新比例尺，单位为分钟
                var y=paddingTop+h/2+h/4/6*(event.eventIndex-1)+3;
                svg.selectAll(".rect").data(event.datas).enter().append("rect").
                attr("x",function(d) {return xScaleAf(d.start)}).attr("y",y).
                        attr("width",function(d){return xScaleAf(d.end)-xScaleAf(d.start)}).
                        attr("height",4).attr("fill","#000");
            }else{
    
                var dataList=event.datas;
                var unit=100;
    
    
               if (event.eventIndex==7&&rateData.maxSve!=null&&rateData.maxSve>0)
                   unit=rateData.maxSve;
               if (event.eventIndex==8&&rateData.maxVe!=null&&rateData.maxVe>0)
                   unit=rateData.maxVe;
               if (event.eventIndex==9&&rateData.maxRt!=null&&rateData.maxRt>0)
                   unit=rateData.maxRt;
                var yScale1= d3.scaleLinear()
                        .domain([unit,0]).range([paddingTop+h*3/4+h/12*(event.eventIndex-7), paddingTop+h*3/4+h/12*(event.eventIndex-6)]);
                if (dataList) {
    
                        svg.selectAll(".lines1").data(dataList).enter().append("line").attr("stroke", "#000").attr("stroke-width", 0.8)
                                .attr("x1", function(d) {return xScale(d.index)}).attr("y1",function(d){return yScale1(d.value)})
                                .attr("x2", function(d) {return xScale(d.index)}).attr("y2",function(d){return  yScale1(0)});
                
                }
    
            }
        }

	};
    	
});

