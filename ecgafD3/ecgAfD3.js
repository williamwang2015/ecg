define(['d3'], function (d3) {

return function (instanceData) {
  
       
    var series0 = instanceData.series[0];
      
    var datas=series0[0].list;
    
        
    var afDatas=datas.afDatas;
    var rateData=datas.rateList;	
    
	var chatHeight=180;
    var chatWidth=378;
    var startX=96;
    var startY=10;
    var days=8;
    var maxLine=days*2;
    var unit=chatWidth/maxLine;



    var afHeight=54;


    var svg = d3.select("#"+instanceData.id).append("svg").attr("width", startX+chatWidth).attr("height", startY+chatHeight);

     var lineBegX=startX;
    var lineBegY=startY;
    var lineEndX=startX+chatWidth;
    var lineEndY=lineBegY;
    svg.append("line").attr("x1",lineBegX).attr("y1",lineBegY).attr("x2",lineEndX).attr("y2",lineEndY).attr("stroke-width",0.4).attr("stroke",'#333');
    svg.append("line").attr("x1",lineBegX).attr("y1",lineBegY+afHeight).attr("x2",lineEndX).attr("y2",lineBegY+afHeight).attr("stroke-width",0.4).attr("stroke",'#333');

    //左边刻度
    svg.selectAll(".vlines").data(d3.range(0,25)).enter().append("line").attr("stroke", "#a8a8a8").attr("stroke-width", 0.4)
                .attr("x1", lineBegX).attr("y1", function(d){return startY+afHeight/24*d})
                .attr("x2", lineBegX+10).attr("y2", function(d){return startY+afHeight/24*d});
    //右边刻度
    svg.selectAll(".vlines").data(d3.range(1,4)).enter().append("line").attr("stroke", "#a8a8a8").attr("stroke-width", 0.4)
            .attr("x1", lineEndX-10).attr("y1", function(d){return startY+afHeight/4*d})
            .attr("x2", lineEndX).attr("y2", function(d){return startY+afHeight/4*d});
    //左侧刻度文字
    svg.selectAll(".text").data(d3.range(0,25,4)).enter().append("text").attr("stroke", "#a8a8a8").attr("stroke-width", 0.4)
            .attr("x", startX-3).attr("y", function(d,i){return startY+afHeight/6*i}).text(function(d) {return 24-d})
            .attr("font-size",7).attr("text-anchor","end").attr('dy',".35em");;

    svg.append("text").attr("x",0).attr("y",startY+20).text('每日时长').attr('font-size',7).attr('text-anchor','start');
    svg.append("rect").attr("x",0).attr("y",startY+30).attr("width",8).attr("height",8).attr("fill",'#000').attr("stroke",'#000').attr('stroke-width',0.7);
    svg.append("text").attr("x",10).attr("y",startY+34).text('有').attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;
    svg.append("rect").attr("x",0).attr("y",startY+40).attr("width",8).attr("height",8).attr("fill",'#fff').attr('stroke','#000').attr('stroke-width',0.7);
    svg.append("text").attr("x",10).attr("y",startY+44).text('无').attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;

    svg.append("text").attr("x",0).attr("y",startY+afHeight+6).text('房颤时长').attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;
    svg.append("text").attr("x",0).attr("y",startY+afHeight+14).text('有效时长').attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;
    svg.append("text").attr("x",0).attr("y",startY+afHeight+22).text('房颤占比').attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;

    var dayWidth=30;
    var dayDiff=14;
    var startDay=12;

    
    for (var j=0;j<8;j++){
        var dayX=startDay+(dayWidth+dayDiff)*j+startX+10;
        //传入的数据为秒数
        var dayY=afHeight-afDatas[j].total*(afHeight/24/60/60)+startY;
        svg.append("rect").attr("x",dayX).attr("y",dayY).attr("width",dayWidth).attr("height",afDatas[j].total*(afHeight/24/60/60)).
                attr("stroke",'#333').attr("fill","#fff").attr("stroke-width",0.5)
        //黑色矩形填充
        if (afDatas[j].af>0){
            var afY=afHeight-afDatas[j].af*(afHeight/24/60/60)+startY;
            svg.append("rect").attr("x",dayX).attr("y",afY).attr("width",dayWidth).attr("height",afDatas[j].af*(afHeight/24/60/60)).
            attr("stroke",'#333').attr("fill","#000").attr("stroke-width",0.1)
        }
        //底部标签
        svg.append("text").attr("x",dayX).attr("y",startY+afHeight+6).text(afDatas[j].totalStr).attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");
        svg.append("text").attr("x",dayX).attr("y",startY+afHeight+14).text(afDatas[j].unanaStr).attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");
        svg.append("text").attr("x",dayX).attr("y",startY+afHeight+22).text(afDatas[j].percent).attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");
    }


    //画下方心率图
    var startRateY=startY+afHeight+40;
    var rateHeight=72;


    //心率图横线
    svg.selectAll(".vlines").data(d3.range(0,6)).enter().append("line").attr("stroke", "#333").attr("stroke-width", 0.4)
            .attr("x1", lineBegX).attr("y1", function(d){return startRateY+rateHeight/5*d})
            .attr("x2", lineEndX).attr("y2", function(d){return startRateY+rateHeight/5*d});
    //刻度文字
    svg.selectAll(".text").data(d3.range(0,6)).enter().append("text").attr("stroke", "#a8a8a8").attr("stroke-width", 0.4)
            .attr("x", lineBegX-3).attr("y", function(d,i){return startRateY+rateHeight/5*d}).text(function(d) {return 250-d*50})
            .attr("font-size",7).attr("text-anchor","end").attr('dy',".35em");;

    //左侧文字标识
    svg.append("text").attr("x",0).attr("y",startRateY+30).text('心率').attr('font-size',7).attr('text-anchor','start');
    svg.append("text").attr("x",0).attr("y",startRateY+40).text(' (bpm) ').attr('font-size',7).attr('text-anchor','start');

    //循环画8天刻度
    var dates=rateData.dates;
    for (var n= 0;n<8;n++){
        var posX=startX+(chatWidth/16)*(2*n+1);
        var posY=startRateY+rateHeight;
        svg.append("circle").attr("cx",posX).attr("cy",posY).attr("r",0.5);
        svg.append("text").attr("x",posX).attr("y",posY+8).text(dates[n]).attr("font-size",7).attr("text-anchor","middle");
    }

    var rateList=rateData.rateList;

    for (var i = 0; i < rateList.length; i++) {
        var data=rateList[i];
        if (data.min<0)
            data.min=0;
        if (data.max>250)
            data.max=250;

        var start =data.rateIndex;//日期索引
        var posX = startX + start*(chatWidth/(8))-chatWidth/16;
        var maxY=rateHeight+startRateY-((rateHeight/250)*data.max);
        var minY=rateHeight+startRateY-((rateHeight/250)*data.min);
        var avgY=rateHeight+startRateY-((rateHeight/250)*data.avg);

        svg.append("line").attr("x1",posX).attr("y1",maxY).attr("x2",posX).attr("y2",minY).attr("stroke-width",0.8).attr("stroke","#000");
        if (data.avg>0 && data.avg<250){

            if (data.day==1){
                svg.append("circle").attr("cx",posX).attr("cy",avgY).attr("r",3).attr("fill","#fff").attr("stroke","#000");
            }else{
                svg.append("circle").attr("cx",posX).attr("cy",avgY).attr("r",3).attr("fill","#000").attr("stroke","#000");
            }
        }

    }
    }	
});

