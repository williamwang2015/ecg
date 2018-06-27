define(['d3','Triangle'], function (d3,Triangle) {

	 return function (instanceData) {	
	var series=instanceData.series[0];
     
    var rateData=series[0].list;
      
   	
    
    var chatHeight=120;
    var chatWidth=432;
    var startX=45;
    var startY=15;
    var days=8;
    var maxLine=days*2;
    var unit=chatWidth/maxLine;

    var maxRate=250;
    var minRate=50;
    var unitRate=25;
    var bc=series[0].bc|0;
    if (bc==1){//心动过缓
        maxRate=200;
        minRate=0;
    }

    var svg = d3.select("#"+instanceData.id).append("svg").attr("width", startX+chatWidth+90).attr("height", startY+chatHeight+15);

    var xScale = d3.scaleLinear()
            .domain([0,8*24*60]).range([startX, startX+chatWidth]);

    var yScale = d3.scaleLinear()
            .domain([maxRate, minRate]).range([startY, startY+chatHeight]);


    //画矩形
    svg.append("rect").attr("x",startX).attr('y',startY).attr("height",chatHeight).attr("width",chatWidth).attr("stroke-width",0.6).attr("stroke","#000").attr("fill","none");

    //画竖线
    svg.selectAll(".hlines").data(d3.range(1,maxLine)).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4).attr("stroke-dasharray",'1,1')
            .attr("x1", function(d){return startX+unit*d}).attr("y1", startY)
            .attr("x2", function(d){return startX+unit*d}).attr("y2", startY+chatHeight);
    //画横线
    svg.selectAll(".vlines").data(d3.range(1,8)).enter().append("line").attr("stroke", "#333").attr("stroke-width", 0.4)
            .attr("x1", startX).attr("y1", function(d){return startY+chatHeight/8*d})
            .attr("x2", startX+chatWidth).attr("y2", function(d){return startY+chatHeight/8*d});
    //写时间
    svg.selectAll(".text").data(d3.range(1,maxLine)).enter().append("text").text(function(d){if (d%2==0) return 0; else return 12})
            .attr("x",function(d){return startX+unit*d} ).attr("y", startY-5).attr("text-anchor", "middle").attr('font-size',7).attr('dy',".35em");
    //写刻度
    svg.selectAll(".text").data(d3.range(0,9)).enter().append("text").text(function(d){return maxRate-d*unitRate})
            .attr("x", startX-1).attr("y", function(d){return startY+chatHeight/8*d}).attr("text-anchor", "end").attr('font-size',7).attr('dy',".35em");

    svg.append("text").text('心率').attr("x",12).attr("y",startY+60).attr('font-size',7).attr("text-anchor", "middle");
    svg.append("text").text('(bpm)').attr("x",12).attr("y",startY+70).attr('font-size',7).attr("text-anchor", "middle");
    svg.append("circle").attr("cx",startX+chatWidth+10).attr("cy",startY+50).attr("r",3).attr("fill","#fff").attr("stroke","#000");

    svg.append("text").text('白天 (6:00--18:00)').attr("x",startX+chatWidth+15).attr("y",startY+50).attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;
    svg.append("circle").attr("cx",startX+chatWidth+10).attr("cy",startY+70).attr("r",3).attr("fill","#000").attr("stroke","#000");
    svg.append("text").text('夜晚').attr("x",startX+chatWidth+15).attr("y",startY+70).attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;

    var datas=rateData.dates;

    svg.selectAll(".text").data(datas).enter().append("text").text(function(d){return d})
            .attr("x",function(d,i){return startX+unit*i*2+unit} ).attr("y", startY+chatHeight+5).attr("text-anchor", "middle").attr('font-size',8).attr('dy',".35em");


    var rateList=rateData.rateList;
    svg.selectAll(".lines").data(rateList).enter().append("line").attr("stroke", "#000").attr("stroke-width", 0.8)
            .attr("x1", function(d) {return xScale(d.rateIndex)}).attr("y1",function(d){var rate= d.max; if (rate> maxRate) rate= maxRate;return yScale(rate)})
            .attr("x2", function(d) {return xScale(d.rateIndex)}).attr("y2",function(d){var rate= d.min; if (rate< minRate) rate= minRate;return yScale(rate)});

    svg.selectAll(".circle").data(rateList.filter(function (d){if (d.avg>=minRate&& d.avg<=maxRate) return true; else return false;})).enter().append("circle").attr("cx",function(d) {return xScale(d.rateIndex)}).attr("cy",function(d){return  yScale(d.avg)}).
    attr("r",2).attr("stroke","#000").attr("fill",function(d){if (d.day==1) return "#fff";else return "#000"});


  
    var lineIndex=[];
    if (rateData.beginIndex!=null&&rateData.beginIndex>0)
             lineIndex.push(rateData.beginIndex);
    if (rateData.endIndex!=null&&rateData.endIndex>0)
             lineIndex.push(rateData.endIndex);   
     if (lineIndex.length>0){
    svg.selectAll(".lines").data(lineIndex).enter().append("line").attr("x1",xScale).attr("y1",startY).attr("x2",xScale).attr("y2",startY+chatHeight).
    attr("stroke","#00B8E4");
    svg.selectAll(".paths").data(lineIndex).enter().append('path')
            .attr('d',function(d) {return Triangle.getPath(xScale(d), startY+5)}).attr("fill", "#0080ff")
            .attr("stroke", "#0080ff")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 0.4);

	};
	}
    	
});

