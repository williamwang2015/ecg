define('EcgRate',['Raphael','Triangle'], function (Raphael,Triangle) {

	 return function (instanceData) {	
		
	 	var w = instanceData.width,
            h = instanceData.height;
     //   console.log(instanceData.series);
        var series0 = instanceData.series[0];
               
        var length=series0.length;
        console.log(series0[length-1]);
        var rateData=series0[length-1];
        var margin = 20;

		var dpi=72;
		var  UNIT_PIXEL=25.4;

		var marks = [ '用户事件', '室颤/多形性室速/室速/TdP',  '室上速', '长间歇', '房颤 %', '房室传导阻滞','房早', '室早','R on T'];

		 var chatHeight=85*dpi/UNIT_PIXEL;//高度为85mm
    var chatWidth=200*dpi/UNIT_PIXEL;//宽度为195mm
    var leftLabelWidth=8*dpi/UNIT_PIXEL;//左侧标签宽度；
    var topLabelWidth=6*dpi/UNIT_PIXEL;//上部标签高度;
    var yAxis=74*dpi/UNIT_PIXEL;//y轴高度
    var xUnit=3.2;

    var contentWidth=xUnit*48*dpi/25.4;
    //初始化画布
    var paper = Raphael(instanceData.id, chatWidth, chatHeight);

    var startX = leftLabelWidth;//y轴x
    var startY = topLabelWidth;//y轴Y
    var endY = startY + yAxis;//Y轴结束坐标


    //上方蓝色背景-心率区
    paper.rect(startX, startY + 3 * (7 * dpi / UNIT_PIXEL), chatWidth , 7 * dpi / UNIT_PIXEL).attr({
        "stroke": "#ECF8FC",
        "fill": "#ECF8FC"
    });

    //下方事件背景间隔
    var blockY = startY + 5 * (7 * dpi / UNIT_PIXEL) + 3 * dpi / UNIT_PIXEL;
    for (var k = 0; k < 3; k++) {
        var y = blockY + k * 2 * (3 * dpi / UNIT_PIXEL);
        paper.rect(startX, y, contentWidth * dpi / UNIT_PIXEL, 3 * dpi / UNIT_PIXEL).attr({"stroke": "#E5E5E5", "fill": "#E5E5E5"});
    }

    //画第一条X轴
    var endX = leftLabelWidth + contentWidth;
    paper.path('M' + startX + "," + (startY + (35 * dpi /UNIT_PIXEL)) + ' L' + endX + ',' + (startY +  (35 * dpi/ UNIT_PIXEL)) + 'Z').attr({"stroke-width": 0.6});
    //画第二条X轴
    paper.path('M' + startX + "," + (startY + (53 * dpi /UNIT_PIXEL)) + ' L' + chatWidth + ',' + (startY +  (53 * dpi/ UNIT_PIXEL)) + 'Z').attr({"stroke-width": 0.6,"stroke":"#000","stroke-dasharray": "- "});
    //画第三条X轴
    paper.path('M' + startX + "," + (startY + (59 * dpi /UNIT_PIXEL)) + ' L' + endX + ',' + (startY +  (59 * dpi/ UNIT_PIXEL)) + 'Z').attr({"stroke-width": 0.6,"stroke-dasharray": "- "});
    //画第四条X轴
    paper.path('M' + startX + "," + (startY + (65 * dpi /UNIT_PIXEL)) + ' L' + endX + ',' + (startY +  (65 * dpi/ UNIT_PIXEL)) + 'Z').attr({"stroke-width": 0.6,"stroke-dasharray": "- "});

    //画最下面一条X轴
    paper.path('M' + startX + ',' + (startY + (71 * dpi / UNIT_PIXEL) ) + ' L' + chatWidth + ',' + (startY + (71 * dpi / UNIT_PIXEL) ) + ' z').attr({"stroke-width": 0.6});
        //y轴
    paper.path('M' + startX + ',' + startY + ' L' + startX + ',' + endY + ' z').attr({"stroke-width": 0.6});
    //画y轴刻度
    for (var i = 0; i <= 5; i++) {
        var labelY = startY + i * (7 * dpi / UNIT_PIXEL);//每7mm一个刻度
        paper.circle(startX, labelY, 1).attr({"fill": "#000", "stroke": "#000","stroke-width": 0.6});
        //写刻度标签
        paper.text(20, labelY, 250 - i * 10 * 5).attr({"text-anchor": "end","font-size":"7"});
    }
    // 画sve ve rt刻度
    
    for (var j=0;j<3;j++){
        var numsLabelY=startY + ((53 +(j*6))* dpi /UNIT_PIXEL);
       // paper.circle(startX, numsLabelY, 1).attr({"fill": "#000", "stroke": "#000"});
        //写刻度标签
        var maxUnit=100;
        if (j==0&&rateData.maxSve!=null&&rateData.maxSve>0) maxUnit=rateData.maxSve;
        if (j==1&&rateData.maxSve!=null&&rateData.maxVe>0) maxUnit=rateData.maxVe;
        if (j==2&&rateData.maxSve!=null&&rateData.maxRt>0) maxUnit=rateData.maxRt;
        paper.text(20, numsLabelY, maxUnit).attr({"text-anchor": "end","font-size":"7"});
    }  
    //画48小时的分割线  顶部时间标签 底部日期标签
    var xStep = xUnit * dpi / UNIT_PIXEL;
    var labelY=12;
    for (var i = 1; i <= 48; i++) {
        var x = leftLabelWidth + i * xStep;
        var strokeWidth=0.4;
        if (i==12||i==36)
            strokeWidth=0.6;
        paper.path('M' + x + ',' + startY + ' L' + x + ',' + (startY +71* dpi / UNIT_PIXEL) + 'z').attr({
            "stroke-width": strokeWidth,
            "fill": "#A6A6A6",
            "stroke": "#A6A6A6"
        });
        if (i == 6) {
            paper.text(x, labelY, '6').attr({"font-size":"7"});;
        }
        if (i == 12) {
            paper.text(x, labelY, '12').attr({"font-size":"7"});;
            paper.text(x, (startY + 76 * dpi/ UNIT_PIXEL), rateData.date1).attr({"font-size":"8"});
        }
        if (i == 18) {
            paper.text(x, labelY, '18').attr({"font-size":"7"});;
        }
        if (i == 24) {
            paper.text(x, labelY, '0').attr({"font-size":"7"});;

        }
        if (i == 30) {
            paper.text(x, labelY, '6').attr({"font-size":"7"});;
        }
        if (i == 36) {
            paper.text(x, labelY, '12').attr({"font-size":"7"});
            if (rateData.date2!=null)
              paper.text(x, (startY + 76 * dpi / UNIT_PIXEL), rateData.date2).attr({"font-size":"8"});;
        }
        if (i == 42) {
            paper.text(x, labelY, '18').attr({"font-size":"7"});;
        }
    }

    //
    //右侧矩形标注
    paper.rect(startX + contentWidth+10, startY, 100, 8).attr({"fill": "#000", "stroke": "#000"});
    //天数
    paper.text(startX + contentWidth  + 15, startY + 20, rateData.days).attr({
        "text-anchor": "start",
        'font-size': '14'
    });
    
    //心率图示
    //标识信息
    paper.text(startX + contentWidth  + 15, startY + 50, '心率统计(/20 min)').attr({
        "text-anchor": "start",
        'font-size': '7'
    });  
    //心率右侧方框
    var startRectX=startX + contentWidth  +60;
    var startRectY=startY+65;
    paper.text(startX + contentWidth  + 15, startRectY + 5, '最大/最小').attr({
        "text-anchor": "start",
        'font-size': '6'
        
    }); 
    paper.path('M' + startRectX + ',' + startRectY + ' L' + (startRectX-6) + ',' + (startRectY) +  ' L' + (startRectX-6) + ',' + (startRectY+10)+' L'+startRectX+','+(startRectY+10)).attr({"stroke-width": 0.4,"stroke-dasharray": "- "});
    //最高、最近及平均线
    paper.path('M' + (startRectX+5) + ',' + startRectY + ' L' + (startRectX+5) + ',' + (startRectY+10) ).attr({"stroke-width": 0.6});
    paper.circle((startRectX+5),startRectY+5,1).attr({"fill": "#000", "stroke": "#000"});
    paper.path('M' + (startRectX+8) + ',' + (startRectY+5) + ' L' + (startRectX+14) + ',' + (startRectY+5) ).attr({"stroke-width": 0.6,"stroke-dasharray": "- "});
    paper.text(startRectX+15,startRectY+5,'平均').attr({"text-anchor": "start", 'font-size': '6'});
    
    
    var eventY = startY + 5 * (7 * dpi / UNIT_PIXEL);
    for (var k = 0; k < 9; k++) {
        if (k<=5){
            var y = eventY + k * (3 * dpi / UNIT_PIXEL) + 1.5 * dpi / UNIT_PIXEL;//位置位置需要向下移动半个格
            //传入的数组
            paper.text(startX +contentWidth  + 20, y, rateData.events[k]).attr({"text-anchor": "end", 'font-size': '7'});
            //标签
            paper.text(startX + contentWidth + 25, y, marks[k]).attr({
                "text-anchor": "start",
                'font-size': '7'
            });
        }else{
                var y = eventY + (k+(k-6)) * (3 * dpi / UNIT_PIXEL) + 3.5 * dpi / UNIT_PIXEL;//位置位置需要向下移动半个格
                //传入的数组
                paper.text(startX +contentWidth  + 20, y, rateData.events[k]).attr({"text-anchor": "end", 'font-size': '7'});
                //标签
                paper.text(startX + contentWidth + 25, y, marks[k]).attr({
                    "text-anchor": "start",
                    'font-size': '7'
                });
        }

    }
    //未分析三角标志--暂不使用
   // var trianglePath = Triangle.getPath(startX + contentWidth + 10, startY + (66 * dpi / UNIT_PIXEL));
   // paper.path(trianglePath).attr({"fill": "#0080ff", "stroke": "#0080ff"});
   // paper.text(startX + contentWidth  + 20, startY + (66 * dpi / UNIT_PIXEL) + 5, 'Unanalyzable ECG').attr({"text-anchor": "start"});

     //画时间开始和结束标志线
     var markColor="#00B8E4";
     if (rateData.beginIndex!=null&&rateData.beginIndex>0){
        var lineX= startX + rateData.beginIndex/20 * (xUnit* dpi / UNIT_PIXEL/3);
        paper.path('M'+lineX+','+(startY+30)+' L'+lineX+','+(startY + (71 * dpi / UNIT_PIXEL) )).attr({"stroke":markColor});
        //三角 传入顶点坐标
        var trianglePath = Triangle.getPath(lineX, (startY+30));

        paper.path(trianglePath).attr({"fill": markColor, "stroke": markColor});
        
        paper.text(lineX,startY+15,"开始").attr( {'font-size': '6','fill':markColor,'font-weight':'bold'});
     }
     if (rateData.endIndex!=null&&rateData.endIndex>0){
       var lineX= startX + rateData.endIndex/20 * (xUnit* dpi / UNIT_PIXEL/3);
        paper.path('M'+lineX+','+(startY+30)+' L'+lineX+','+(startY + (71 * dpi / UNIT_PIXEL) )).attr({"stroke":markColor});
        //三角 传入顶点坐标
        var trianglePath = Triangle.getPath(lineX, (startY+30));

        paper.path(trianglePath).attr({"fill": markColor, "stroke": markColor});
        
        paper.text(lineX,startY+15,"结束").attr( {'font-size': '6','fill':markColor});
     }
    //绘制心率数据
    var startPointY = startY + 5 * (7 * dpi / UNIT_PIXEL);
    //显示未分析标志
    /*for (var i=0;i<rateData.unEcg.length;i++){
        var unEcg=rateData.unEcg[i];
        var posx=startX+(xUnit * dpi / UNIT_PIXEL / 60) * unEcg;
        var posy=(startY + (65 * dpi / UNIT_PIXEL) + 2);
     //   paper.path(getTriangle(posx,posy)).attr({"fill": "#0080ff", "stroke": "#0080ff"});
    }*/
    var rateList=rateData.rateList;
    if (rateList){
    for (var j = 0; j < rateList.length; j++) {
                var data = rateList[j];
                if (data.max>250)
                	data.max=250;
                if (data.min<50)
                    data.min=50;
                //计算位置
              //  var posX = startPointX + j * (xUnit/3) * dpi / UNIT_PIXEL;
                var posX=startX + data.index*20 * (xUnit* dpi / UNIT_PIXEL/60);
                var maxY = startPointY - ((data.max / 50) * 7 * dpi / UNIT_PIXEL);
                var minY = startPointY - ((data.min / 50) * 7 * dpi / UNIT_PIXEL);
                var avgY = startPointY - ((data.avg / 50) * 7 * dpi / UNIT_PIXEL);
                paper.path('M' + posX + ',' + maxY + ' L' + posX + ',' + minY + ' z').attr({"stroke-width": 0.8});
                if (data.avg>50 && data.avg<250)
                  paper.circle(posX, avgY, 1).attr({"fill": "#000", "stroke": "#000"});

        }
    }

    //画事件信息
    var startEventY = startY + 5 * (7 * dpi / UNIT_PIXEL);
    var eventList=rateData.eventList;
    for (var m = 0; m < eventList.length; m++) {
        var event = eventList[m];
        if (event.eventIndex < 5||event.eventIndex==6) {//画圆形
            var datas = event.datas;
           if (datas){
            //获取y的位置
            var y = startEventY + 3 * dpi / UNIT_PIXEL * (event.eventIndex-1) + 1.5 * dpi / UNIT_PIXEL;
            for (var n = 0; n < datas.length; n++) {
                var data = datas[n];
                var x = startX + (xUnit * dpi / UNIT_PIXEL / 60) * data.index*20;
                paper.circle(x, y, 2).attr({"fill": "#000", "stroke": "#000"});
            }
            }
        } else if (event.eventIndex ==5) {
            var datas = event.datas;
            //获取y的位置
             if (datas){
            var y = startEventY + 3 * dpi / UNIT_PIXEL * (event.eventIndex-1) + 1 * dpi / UNIT_PIXEL;
            for (var n = 0; n < datas.length; n++) {
                var data = datas[n];
                var x = startX + (xUnit * dpi / UNIT_PIXEL / 60) * data.start;
                var eventWidth = (xUnit * dpi / UNIT_PIXEL / 60) * (data.end - data.start);
                var eventHeigh = 1 * dpi / UNIT_PIXEL;
                if (eventWidth>0)
                  paper.rect(x, y, eventWidth, eventHeigh).attr({"fill": "#000", "stroke": "#000"});
            }
            }
        }else {//早搏类似心率画线
            var dataList=event.datas;
            var unit=100;
           
            if (event.eventIndex==7&&rateData.maxSve!=null&&rateData.maxSve>0)
            	unit=rateData.maxSve;
            if (event.eventIndex==8&&rateData.maxVe!=null&&rateData.maxVe>0)
            	unit=rateData.maxVe;
            if (event.eventIndex==9&&rateData.maxRt!=null&&rateData.maxRt>0)
            	unit=rateData.maxRt;
            		
            if (dataList) {
                    for (var j = 0; j < dataList.length; j++) {
                        var data = dataList[j];
                        //计算位置
                        //var posX = startPointX + j * (xUnit/3) * dpi / UNIT_PIXEL;
                        var posX=startX + data.index * (xUnit* dpi / UNIT_PIXEL/60)*20;
                       
                        var minY = startY + ((59+(event.eventIndex-7)*6) * dpi /UNIT_PIXEL);//从第三条横线向上画
                        var maxY = minY - ((data.value/unit) * 6 * dpi / UNIT_PIXEL);
                        paper.path('M' + posX + ',' + maxY + ' L' + posX + ',' + minY + ' z').attr({"stroke-width": 0.8});
                    }
                }
        }
    }   
        };
		
});

