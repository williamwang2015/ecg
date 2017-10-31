define(['d3'], function (d3) {

	 return function (instanceData) {	
	var svgWidth =instanceData.width;
    var svgHeight = instanceData.height;
    var padding =  40;
  
    var series0 = instanceData.series[0];
    
    var data = series0[0].rrLorenz;
    data.filter(function(d) {return d[1] <= 2000});
    
    // generate the dataviz
    var svg = d3.select("#"+instanceData.id)
            .append('svg:svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

    var xScale = d3.scaleLinear()
            .domain([0, 2000]).range([padding, svgWidth-10]);

    var yScale = d3.scaleLinear()
            .domain([0, 2000]).range([svgHeight - padding, padding]);

    svg.selectAll('.circle')
            .data( data )
            .enter()
            .append('circle')
            .attr('r', 0.7)
            .attr('fill', '#9B9B9B')
            .attr('cx', function(d){ return xScale(d[0]); })
            .attr('cy', function(d){ return yScale(d[1]); });

    var xAxis = d3.axisBottom(xScale).ticks(4);
    
    // 定义Y轴
    var yAxis = d3.axisLeft(yScale).ticks(4);

    // 创建X轴, svg中： g元素是一个分组元素
    svg.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(0, ' + (svgHeight - padding) + ')')
            .call(xAxis);

    // 创建Y轴
    svg.append('g').attr('class', 'axis')
            .attr('transform', 'translate(' + padding + ', 0)')
            .call(yAxis);
            
           
                

		
	};
		
});

