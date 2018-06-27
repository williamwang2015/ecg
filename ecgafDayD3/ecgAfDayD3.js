define(['d3'], function (d3) {

return function (instanceData) {
  var series0 = instanceData.series[0];
      
    var datas=series0[0].list;
    
        
    var afDatas=datas.afDatas;
    var rateData=datas.rateList;	
    
	var chatHeight=166;
    var chatWidth=458;
    var startX=86;
    var startY=6;
 



    var afHeight=54;


    var svg = d3.select("#"+instanceData.id).append("svg").attr("width", startX+chatWidth).attr("height", startY+chatHeight);

    var lineBegX=startX;
    var lineBegY=startY;
    var lineEndX=startX+chatWidth;
    var lineEndY=lineBegY;
    svg.append("line").attr("x1",lineBegX).attr("y1",lineBegY).attr("x2",lineEndX).attr("y2",lineEndY).attr("stroke-width",0.4).attr("stroke",'#333');
    svg.append("line").attr("x1",lineBegX).attr("y1",lineBegY+afHeight).attr("x2",lineEndX).attr("y2",lineBegY+afHeight).attr("stroke-width",0.4).attr("stroke",'#333');

    //左边刻度
    svg.selectAll(".vlines").data(d3.range(0,6)).enter().append("line").attr("stroke", "#a8a8a8").attr("stroke-width", 0.4)
                .attr("x1", lineBegX).attr("y1", function(d){return startY+afHeight/6*d})
                .attr("x2", lineBegX+10).attr("y2", function(d){return startY+afHeight/6*d});
    //右边刻度
    svg.selectAll(".vlines").data(d3.range(1,3)).enter().append("line").attr("stroke", "#a8a8a8").attr("stroke-width", 0.4)
            .attr("x1", lineEndX-10).attr("y1", function(d){return startY+afHeight/3*d})
            .attr("x2", lineEndX).attr("y2", function(d){return startY+afHeight/3*d});
    //左侧刻度文字
    svg.selectAll(".text").data(d3.range(0,61,20)).enter().append("text").attr("stroke-width", 0.4)
            .attr("x", startX-3).attr("y", function(d,i){return startY+afHeight/3*i}).text(function(d) {return 60-d})
            .attr("font-size",7).attr("text-anchor","end").attr('dy',".35em");;

    svg.append("text").attr("x",0).attr("y",startY+20).text('每小时时长').attr('font-size',7).attr('text-anchor','start');
    svg.append("rect").attr("x",0).attr("y",startY+30).attr("width",8).attr("height",8).attr("fill",'#000').attr("stroke",'#000').attr('stroke-width',0.7);
    svg.append("text").attr("x",10).attr("y",startY+34).text('有').attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;
    svg.append("rect").attr("x",0).attr("y",startY+40).attr("width",8).attr("height",8).attr("fill",'#fff').attr('stroke','#000').attr('stroke-width',0.7);
    svg.append("text").attr("x",10).attr("y",startY+44).text('无').attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;

    svg.append("text").attr("x",0).attr("y",startY+afHeight+6).text('时长').attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;
    svg.append("text").attr("x",0).attr("y",startY+afHeight+14).text('不可分析时长').attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;
    svg.append("text").attr("x",0).attr("y",startY+afHeight+22).text('有效数据占比').attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;

    var dayWidth=12;
    var dayDiff=6;
    var startDay=16;

    
    for (var j=0;j<24;j++){
        var dayX=startDay+(dayWidth+dayDiff)*j+startX;
        //传入的数据为秒数
        var dayY=afHeight-afDatas[j].total*(afHeight/60/60)+startY;
        svg.append("rect").attr("x",dayX).attr("y",dayY).attr("width",dayWidth).attr("height",afDatas[j].total*(afHeight/60/60)).
                attr("stroke",'#333').attr("fill","#fff").attr("stroke-width",0.5)
        //黑色矩形填充
        if (afDatas[j].af>0){
            var afY=afHeight-afDatas[j].af*(afHeight/60/60)+startY;
            svg.append("rect").attr("x",dayX).attr("y",afY).attr("width",dayWidth).attr("height",afDatas[j].af*(afHeight/60/60)).
            attr("stroke",'#333').attr("fill","#000").attr("stroke-width",0.1)
        }
        //底部标签
        svg.append("text").attr("x",dayX).attr("y",startY+afHeight+6).text(afDatas[j].totalStr).attr('font-size',5).attr('text-anchor','start').attr('dy',".35em");
        svg.append("text").attr("x",dayX).attr("y",startY+afHeight+14).text(afDatas[j].unanaStr).attr('font-size',5).attr('text-anchor','start').attr('dy',".35em");
        svg.append("text").attr("x",dayX).attr("y",startY+afHeight+22).text(afDatas[j].percent).attr('font-size',5).attr('text-anchor','start').attr('dy',".35em");
    }


    //画下方心率图
    var startRateY=startY+afHeight+30;
    var rateHeight=72;


    //心率图横线
    svg.selectAll(".vlines").data(d3.range(0,6)).enter().append("line").attr("stroke", "#333").attr("stroke-width", 0.4)
            .attr("x1", lineBegX).attr("y1", function(d){return startRateY+rateHeight/5*d})
            .attr("x2", lineEndX).attr("y2", function(d){return startRateY+rateHeight/5*d});
    //刻度文字
    svg.selectAll(".text").data(d3.range(0,6)).enter().append("text").attr("stroke-width", 0.4)
            .attr("x", lineBegX-3).attr("y", function(d,i){return startRateY+rateHeight/5*d}).text(function(d) {return 250-d*50})
            .attr("font-size",7).attr("text-anchor","end").attr('dy',".35em");;

    //左侧文字标识
    svg.append("text").attr("x",0).attr("y",startRateY+30).text('心率').attr('font-size',7).attr('text-anchor','start');
    svg.append("text").attr("x",0).attr("y",startRateY+40).text(' (bpm) ').attr('font-size',7).attr('text-anchor','start');

    //循环画24小时刻度
    var dates=rateData.dates;
    for (var n= 0;n<24;n++){
        var posX=startDay+(dayWidth+dayDiff)*n+startX+(dayWidth/2);
        var posY=startRateY+rateHeight;
        svg.append("circle").attr("cx",posX).attr("cy",posY).attr("r",0.5).attr("fill","#000").attr("stroke","#000");
        svg.append("text").attr("x",posX).attr("y",posY+8).text(n).attr("font-size",7).attr("text-anchor","middle");
    }

    var rateList=rateData.rateList;

    for (var i = 0; i < rateList.length; i++) {
        var data=rateList[i];
        if (data.min<0)
            data.min=0;
        if (data.max>250)
            data.max=250;

        var start =data.rateIndex;//日期索引
        var posX=startDay+(dayWidth+dayDiff)*i+startX+(dayWidth/2);
        var maxY=rateHeight+startRateY-((rateHeight/250)*data.max);
        var minY=rateHeight+startRateY-((rateHeight/250)*data.min);
        var avgY=rateHeight+startRateY-((rateHeight/250)*data.avg);

        svg.append("line").attr("x1",posX).attr("y1",maxY).attr("x2",posX).attr("y2",minY).attr("stroke-width",0.8).attr("stroke","#000");
        if (data.avg>0 && data.avg<250){

            if (data.day==1){
                svg.append("circle").attr("cx",posX).attr("cy",avgY).attr("r",1).attr("fill","#fff").attr("stroke","#000");
            }else{
                svg.append("circle").attr("cx",posX).attr("cy",avgY).attr("r",1).attr("fill","#000").attr("stroke","#000");
            }
        }

    }
       
    
    }	
});

