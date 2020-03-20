define(['d3'], function (d3) {

	 return function (instanceData) {	
	var svgWidth =instanceData.width;
    var svgHeight = instanceData.height;
    var left =  60;
    var top =  20
    var series0 = instanceData.series[0];
   
    var data = series0[series0.length-1].list;
    var lineData = series0[series0.length-1].line;
    var pos= series0[series0.length-1].pos;//位置
    var linePos= series0[series0.length-1].linePos;//斜线开始位置
    //y轴范围
    var minRr=series0[series0.length-1].minRr;
    var maxRr=series0[series0.length-1].maxRr;
    var svg = d3.select("#"+instanceData.id)
            .append('svg:svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

    var x = d3.scaleLinear()
        .domain([-5,25]).range([left, svgWidth - left]);
    var y = d3.scaleLinear()
        .domain([minRr,maxRr]).range([svgHeight - top, top]);

     var xAxis = d3.axisBottom(x).ticks(5);



    // 定义Y轴
    var yAxis = d3.axisLeft(y).ticks(3);
    // 创建X轴, svg中： g元素是一个分组元素
    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0, ' + (svgHeight - top) + ')')
        .call(xAxis).selectAll("text")
        .style("text-anchor", "center");
    // 创建Y轴
    svg.append('g').attr('class', 'axis')
        .attr('transform', 'translate(' + left + ', 0)')
        .call(yAxis);

    var line = d3.line()
        .x(function (d, i) {
            return x(i-pos);
        })
        .y(function (d) {
            return y(d);

        }).curve(d3.curveStep);

    var line1 = d3.line()
        .x(function (d, i) {
            console.log(i);
            return x(i-pos+linePos);
        })
        .y(function (d) {
            return y(d);

        }).curve(d3.curveBasis);
        
        svg.append('path')
            .attr('d', line(data[data.length-1])).attr("fill", "none")
            .attr("stroke", "#333")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round").attr("stroke-width", 0.6);
            
             svg.append('path')
            .attr('d', line1(lineData)).attr("fill", "none")
            .attr("stroke", "#333")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round").attr("stroke-width", 0.6);
};
		
});

