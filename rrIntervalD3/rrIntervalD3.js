define(['d3'], function (d3) {
     //rr间期直方图
	 return function (instanceData) {	
	var svgWidth =instanceData.width;
    var svgHeight = instanceData.height;
   
    var series0 = instanceData.series[0];
    
    var rrData =series0[series0.length-1].rrInterval;
    
    if (rrData){
        var array = [];
        var rrValue=[];
       /* var keys = Object.keys(rrData);
        for (let i = 0; i < keys.length; i++) {
            if (rrData[keys[i]]<=2000){//排除大于2000的值
                array.push([keys[i], rrData[keys[i]]]);
                rrValue.push(rrData[keys[i]]);
           }
        }*/
        var array=rrData.filter(function(d) {return d[0] <= 2000}); 
        var maxCount=Math.ceil(d3.max(array, function(d) {return d[1];})/100)*100;
       
        var padding =  40;

        var svg = d3.select("#"+instanceData.id)
                .append('svg:svg')
                .attr('width', svgWidth)
                .attr('height', svgHeight);

        var x = d3.scaleLinear()
                .domain([0,2000]).range([padding, svgWidth - 40]);
        var y = d3.scaleLinear()
                .domain([0, parseInt(maxCount)]).range([svgHeight - 40, 10]);

        var xAxis = d3.axisBottom(x)

        // 定义Y轴
        var yAxis = d3.axisLeft(y).ticks(10);
        // 创建X轴, svg中： g元素是一个分组元素
        svg.append('g')
                .attr('class', 'axis')
                .attr('transform', 'translate(0, ' + (svgHeight - 40) + ')')
                .call(xAxis);
       // 创建Y轴
        svg.append('g').attr('class', 'axis')
                .attr('transform', 'translate(' + padding + ', 0)')
                .call(yAxis)

        var barColor = '#9B9B9B';
        var bars = svg.selectAll(".bar").data(array).enter()
                .append("g");

        //create the rectangles.
        bars.append("rect")
                .attr("x", function(d) {
                    return x(parseInt(d[0])); })
                .attr("y", function(d) { return y(parseInt(d[1])); })
                .attr("width", 1)
                .attr("height", function(d) {
                    return svgHeight - 40-y(parseInt(d[1])); })
                .attr('fill',barColor).attr("stroke",barColor);
    }
	};
    	
});

