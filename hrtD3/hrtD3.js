define(['d3'], function (d3) {

	 return function (instanceData) {	
	var svgWidth =instanceData.width;
    var svgHeight = instanceData.height;
    var left =  60;
    var top =  20
    var series0 = instanceData.series[0];
    
    var data = series0[series0.length-1].list;
    var pos= series0[series0.length-1].pos;//位置
    
    var minRr=series0[series0.length-1].minRr;
    var maxRr=series0[series0.length-1].maxRr;
    
    var svg = d3.select("#"+instanceData.id)
            .append('svg:svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

    var x = d3.scaleLinear()
        .domain([-5,25]).range([left, svgWidth - left]);
    var y = d3.scaleLinear()
        .domain([minRr, maxRr]).range([svgHeight - top, top]);

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

        }).curve(d3.curveLinear);

    if (data.length>1){
    	 for (var m=0;m<data.length-1;m++){

        svg.append('path')
            .attr('d', line(data[m])).attr("fill", "none")
            .attr("stroke", "#333")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 0.6);

        }
    //miter | round | bevel | inherit
     svg.append('path')
        .attr('d', line(data[data.length-1])).attr("fill", "none")
        .attr("stroke", "#ff0000")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "miter")
        .attr("stroke-width", 1);
    }else{
        //
    	 

          svg.append('path')
            .attr('d', line(data[0])).attr("fill", "none")
            .attr("stroke", "#333")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 0.6);

    
    }
   

   
            
           
                

		
	};
		
});

