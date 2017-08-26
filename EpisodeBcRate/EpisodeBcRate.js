//心动过缓刻度从0~200
define('EpisodeBcRate',['Raphael','Triangle'], function (Raphael,Triangle) {

	 return function (instanceData) {	
		
	 	var w = instanceData.width,
            h = instanceData.height;
        var series=instanceData.series[0];
     
       var rateData=series[0].list;
      
   		 var days=8;//最小8天
    var chatHeight=120;
    var chatWidth=432;
    var startX=45;
    var startY=15;
    var maxLine=days*2;
    var unit=chatWidth/maxLine;
    //分钟索引
   /* var rateData = {
        dates: ['11/16','11/17','11/18','11/19','11/20','11/21','11/22','11/23','11/24'],
        rateList: [{rateIndex: 240, min: 56, max: 120, avg:76,day:1}
            ,
                {rateIndex: 2880,min: 80, max: 160, avg: 100,day:0}

            ]
        };*/



    var paper = Raphael(instanceData.id, startX+chatWidth+90,startY+chatHeight+15);

    for (var i=1;i<maxLine;i++){
        var lineBegX=startX+(chatWidth/maxLine)*i;
        var lineBegY=startY;
        var lineEndX=lineBegX;
        var lineEndY=chatHeight+startY;
        paper.path('M' + lineBegX + ','+ lineBegY + ' L' + lineEndX + ',' + lineEndY  + 'Z').attr({"stroke-width": 0.4,"stroke-dasharray":". ","stroke":"#9B9B9B" });
    }
    //循环画横线
    for (var j=1;j<8;j++){
        var lineBegX=startX;
        var lineBegY=startY+(chatHeight/8)*j;
        var lineEndX=startX+chatWidth;
        var lineEndY=lineBegY;
        paper.path('M' + lineBegX + ','+ lineBegY + ' L' + lineEndX + ',' + lineEndY  + 'Z').attr({"stroke-width": 0.4,"stroke":"#333"});

    }
    //循环画Y刻度
    for (var m=0;m<9;m++){
        paper.text(40, startY+(chatHeight/8)*m, 200 - m * 25).attr({"text-anchor": "end","font-size":7});
    }
    //白天晚上标识
    paper.text(12,startY+60,'心率').attr({'font-size':7});
    paper.text(12,startY+70,'(bpm)').attr({'font-size':7});
    paper.circle(startX+chatWidth+10, startY+50, 3).attr({"fill": "#fff", "stroke": "#000"});
    paper.text(startX+chatWidth+15, startY+50,'白天 (6:00--18:00)').attr({'font-size':7,'text-anchor':'start'});
    paper.circle(startX+chatWidth+10, startY+70, 3).attr({"fill": "#000", "stroke": "#000"});
    paper.text(startX+chatWidth+15, startY+70,'夜晚').attr({'font-size':7,'text-anchor':'start'});
    var dates=rateData.dates;
    //循环画xkedu
    for (var n=1;n<16;n++){
        if (n%2==0){
            paper.text(startX+(chatWidth/maxLine)*n,8,'0').attr({"font-size":7});
        }else{
            paper.text(startX+(chatWidth/maxLine)*n,8,'12').attr({"font-size":7});
            var index=parseInt(n/2);

            paper.text(startX+(chatWidth/maxLine)*n,chatHeight+startY+7,dates[index]).attr({"font-size":8});
        }

    }
    paper.rect(startX,startY,chatWidth,chatHeight).attr({"stroke-width": 0.6});;

    //画时间开始和结束标志线
     var markColor="#00B8E4";
    
     if (rateData.beginIndex!=null&&rateData.beginIndex>0){
        var lineX= startX + rateData.beginIndex/(12*60) * unit;
        paper.path('M'+lineX+','+(startY+30)+' L'+lineX+','+(startY + chatHeight  )).attr({"stroke":markColor});
        //三角 传入顶点坐标
        var trianglePath = Triangle.getPath(lineX, (startY+30));

        paper.path(trianglePath).attr({"fill": markColor, "stroke": markColor});
        
        paper.text(lineX,startY+15,"开始").attr( {'font-size': '6','fill':markColor,'font-weight':'bold'});
     }
     if (rateData.endIndex!=null&&rateData.endIndex>0){
       var lineX= startX + rateData.endIndex/(12*60) * unit;
        paper.path('M'+lineX+','+(startY+30)+' L'+lineX+','+(startY + chatHeight  )).attr({"stroke":markColor});
        //三角 传入顶点坐标
        var trianglePath = Triangle.getPath(lineX, (startY+30));

        paper.path(trianglePath).attr({"fill": markColor, "stroke": markColor});
        
        paper.text(lineX,startY+15,"结束").attr( {'font-size': '6','fill':markColor});
     }

    //根据数据画心率数据

    var rateList=rateData.rateList;
    for (var i = 0; i < rateList.length; i++) {
        var data=rateList[i];
        var start =data.rateIndex;
        if (data.min<0)
            data.min=0;
        if (data.max>200)
            data.max=200;
        //第一个点的位置X
        var posX = startX + start*(chatWidth/(8*24*60));
        var maxY=chatHeight+startY-((chatHeight/8/25)*(data.max));
        var minY=chatHeight+startY-((chatHeight/8/25)*(data.min));
        var avgY=chatHeight+startY-((chatHeight/8/25)*(data.avg));
    
        paper.path('M' + posX + ',' + maxY + ' L' + posX + ',' + minY + ' z').attr({"stroke-width": 0.8});
        if (data.avg>0 && data.avg<200){
          if (data.day==1){
            paper.circle(posX, avgY,2).attr({"fill": "#fff", "stroke": "#000"});
        }else{
            paper.circle(posX, avgY, 2).attr({"fill": "#000", "stroke": "#000"});
        }
        }
    }
    
   
        };
		
});

