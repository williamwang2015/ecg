define(['d3'], function (d3) {

	 return function (instanceData) {	
	var svgWidth =instanceData.width;
    var svgHeight = instanceData.height;
    var padding =  40;

    var series0 = instanceData.series[0];

    var data =series0[series0.length-1].rrHour;

     data=data.filter(function(d) {return d[1] <= 2000});
     var max=d3.max(data, function(d) {return d[0];});
    var min=d3.min(data,function(d){return d[0];});
    var day=((max-min)/1000/3600/24);
  
    // generate the dataviz
    var svg = d3.select("#"+instanceData.id)
            .append('svg:svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

    var xScale = d3.scaleTime()
            .domain([min, max]).range([padding, svgWidth-10]);

    var yScale = d3.scaleLinear()
            .domain([0, 2000]).range([svgHeight - padding, 10]);

    svg.selectAll('.circle')
            .data( data )
            .enter()
            .append('circle')
            .attr('r', 0.7)
            .attr('fill', '#9B9B9B')
            .attr('cx', function(d){ return xScale(d[0]); })
            .attr('cy', function(d){ return yScale(d[1]); });

    var xAxis = d3.axisBottom(xScale);
    if (day>1)
        xAxis.ticks(d3.timeDay, 1).tickFormat(d3.timeFormat("%m-%d"));
    else 
        xAxis.ticks(d3.timeHour, 1).tickFormat(d3.timeFormat("%H"));
   
    // 定义Y轴
    var yAxis = d3.axisLeft(yScale);

    // 创建X轴, svg中： g元素是一个分组元素
    svg.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(0, ' + (svgHeight - padding) + ')')
            .call(xAxis);

    // 创建Y轴
    svg.append('g').attr('class', 'axis')
            .attr('transform', 'translate(' + padding + ', 0)')
            .call(yAxis);
            
    var s = new Date(data[0][0]);

    var format = d3.timeFormat('%Y-%m-%d');
    var rrDate=format(s);
   
    //显示文字
    var text = svg.append("text").attr("x",svgWidth/2).attr("y",svgHeight-5).attr("font-size",11)
            .attr("text-anchor", "middle").text(rrDate);

	};
    	
});

