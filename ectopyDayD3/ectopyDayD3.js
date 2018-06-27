define(['d3','Triangle'], function (d3,Triangle) {

return function (instanceData) {
  	var series0 = instanceData.series[0];
    var rateData=series0[0].list;
  	var chatHeight=114;
    var chatWidth=424;
    var startX=60;
    var startY=15;
    var days=12;
    var maxLine=days*2;
    var unit=chatWidth/maxLine;

    var yUnit=rateData.unit;
  

    var svg = d3.select("#"+instanceData.id).append("svg").attr("width", startX+chatWidth+76).attr("height", startY+chatHeight+35);

   
    var xScale = d3.scaleLinear().domain([0,24]).range([startX, startX+chatWidth]);

    var yScale = d3.scaleLinear().domain([yUnit*5, 0]).range([startY, startY+chatHeight]);


    //画矩形
    svg.append("rect").attr("x",startX).attr('y',startY).attr("height",chatHeight).attr("width",chatWidth).attr("stroke-width",0.6).attr("stroke","#000").attr("fill","none");

    //画竖线
    svg.selectAll(".hlines").data(d3.range(1,maxLine)).enter().append("line").attr("stroke", "#9B9B9B").attr("stroke-width", 0.4).attr("stroke-dasharray",'1,1')
            .attr("x1", function(d){return startX+unit*d}).attr("y1", startY)
            .attr("x2", function(d){return startX+unit*d}).attr("y2", startY+chatHeight);
    //画横线
    svg.selectAll(".vlines").data(d3.range(1,5)).enter().append("line").attr("stroke", "#333").attr("stroke-width", 0.4).attr("stroke-dasharray",'1,1')
            .attr("x1", startX).attr("y1", function(d){return startY+chatHeight/5*d})
            .attr("x2", startX+chatWidth).attr("y2", function(d){return startY+chatHeight/5*d});
    //写时间
    svg.selectAll(".text").data(d3.range(3,24,3)).enter().append("text").text(function(d){ return d;})
            .attr("x",function(d){return startX+unit*d} ).attr("y", startY-5).attr("text-anchor", "middle").attr('font-size',7).attr('dy',".35em");
    //写刻度

   svg.selectAll(".text").data(d3.range(0,yUnit*6,yUnit)).enter().append("text").text(function(d){return yUnit*5-d})
            .attr("x", startX-2).attr("y", function(d,i){return startY+chatHeight/5*i}).attr("text-anchor", "end").attr('font-size',7).attr('dy',".35em");

    svg.append("text").text('早搏').attr("x",18).attr("y",startY+48).attr('font-size',7).attr("text-anchor", "middle");
    svg.append("text").text('(次数/小时)').attr("x",18).attr("y",startY+60).attr('font-size',7).attr("text-anchor", "middle");

    //数量和百分比标签
    svg.append("text").text('每小时数量').attr("x",0).attr("y",chatHeight+startY+16).attr("font-size",7).attr("text-anchor", "start");
    //写百分比
    svg.append("text").text('每小时百分比').attr("x",0).attr("y",chatHeight+startY+26).attr("font-size",7).attr("text-anchor", "start");

    svg.append("rect").attr("x",startX+chatWidth+5).attr("y",startY+50-3).attr("width",6).attr("height",6).attr("fill","none").attr("stroke","#000").attr("stroke-width",0.7);
    svg.append("text").text('白天 (6:00--18:00)').attr("x",startX+chatWidth+15).attr("y",startY+50).attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;
    svg.append("rect").attr("x",startX+chatWidth+5).attr("y",startY+70-3).attr("width",6).attr("height",6).attr("fill","#000").attr("stroke","#000");
    svg.append("text").text('夜晚').attr("x",startX+chatWidth+15).attr("y",startY+70).attr('font-size',7).attr('text-anchor','start').attr('dy',".35em");;
    //
 
    var dates=rateData.dates;
    var nums=rateData.nums;
    var percents=rateData.percent;
    //日期
    svg.append("text").text(dates[0])
            .attr("x",startX+chatWidth/2).attr("y", startY+chatHeight+5).attr("text-anchor", "middle").attr('font-size',8).attr('dy',".35em");
    //数量
    svg.selectAll(".text").data(nums).enter().append("text").text(function(d){return d})
            .attr("x",function(d,i){return startX+unit*i+unit/2} ).attr("y", startY+chatHeight+15).attr("text-anchor", "middle").attr('font-size',5).attr('dy',".35em");
    //百分比
    svg.selectAll(".text").data(percents).enter().append("text").text(function(d){return d})
            .attr("x",function(d,i){return startX+unit*i+unit/2} ).attr("y", startY+chatHeight+25).attr("text-anchor", "middle").attr('font-size',5).attr('dy',".35em");


    var rateList=rateData.rateList;

    svg.selectAll(".rect").data(rateList).enter().append("rect").attr("stroke", "#000").attr("fill",function(d){if (d.day==1) return "#fff";else return "#000"})
            .attr("x", function(d) {return xScale(d.index)}).attr("y",function(d){return yScale(d.nums)})
            .attr("width", chatWidth/24).attr("height",function(d){return startY+chatHeight-yScale(d.nums)})
            .attr("stroke-width",0.4);





   var lineIndex=[];
    if (rateData.beginIndex!=null&&rateData.beginIndex>0)
             lineIndex.push(rateData.beginIndex);
    if (rateData.endIndex!=null&&rateData.endIndex>0)
             lineIndex.push(rateData.endIndex);   
    if (lineIndex.length>0){

    //
    svg.selectAll(".lines").data(lineIndex).enter().append("line").attr("x1",xScale).attr("y1",startY).attr("x2",xScale).attr("y2",startY+chatHeight).
    attr("stroke","#00B8E4");
    svg.selectAll(".paths").data(lineIndex).enter().append('path')
            .attr('d',function(d) {return Triangle.getPath(xScale(d), startY+5)}).attr("fill", "#0080ff")
            .attr("stroke", "#0080ff")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 0.4);
    }	
    }
});

