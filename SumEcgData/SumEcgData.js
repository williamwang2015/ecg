//报告首页6秒心电图
define('SumEcgData',['Raphael'], function (Raphael) {

	 return function (instanceData) {	
		
	 	var w = instanceData.width,
            h = instanceData.height;

     var series=instanceData.series[0];
   //   var ecgData=series[series.length-1];
     var ecgData=series[series.length-1].list;
    
    //6秒钟的高度和宽度
	var seconds=6;
	var chatWidth=300;
	var chatHeight=chatWidth/30*6;
	var paper = Raphael(instanceData.id, chatWidth, chatHeight);
    var startX=0;
    var startY=0;
    var maxLine=seconds/0.2;
    var unit=chatWidth/maxLine/5;

    
    if (ecgData!=null){
     
    for (var i=1;i<maxLine;i++){
        var lineBegX=startX+(5*unit)*i;
        var lineBegY=startY;
        var lineEndX=lineBegX;
        var lineEndY=chatHeight;
        paper.path('M' + lineBegX + ','+ lineBegY + ' L' + lineEndX + ',' + lineEndY  + 'Z').attr({"stroke-width": 0.4,"stroke":"#9B9B9B"});
    }
    //循环画横线
    for (var j=1;j<6;j++){
        var lineBegX=startX;
        var lineBegY=startY+(5*unit)*j;
        var lineEndX=chatWidth;
        var lineEndY=lineBegY;
        paper.path('M' + lineBegX + ','+ lineBegY + ' L' + lineEndX + ',' + lineEndY  + 'Z').attr({"stroke-width": 0.4,"stroke":"#9B9B9B"});

    }
   
    paper.rect(startX,startY,chatWidth,chatHeight).attr({"stroke-width":0.6});
    //画刻度标识
    var labelX=5*unit;
    var labelY=chatHeight-4*unit;
    paper.path('M'+labelX+','+labelY+' L'+labelX+','+(labelY-unit)+' L'+(labelX+10*unit)+','+(labelY-unit)+' L'+(labelX+10*unit)+','+labelY+'');
    paper.text(labelX+5*unit,labelY+unit,'400 ms').attr({'text-anchor':'middle','font-size':'6'});
    //右边 10mm/mv 8s
    paper.text(chatWidth-5*unit,labelY+unit,seconds+' sec').attr({'text-anchor':'end','font-size':'6'});

    //根据数据心电图
   
        var pointStr='';
     
        for (var k=0;k<ecgData.length;k++){
           
            var ecg=ecgData[k];
            if (ecg>1.5) ecg=1.5;
            if (ecg<-1.5) ecg=-1.5;
            //计算xy坐标
            var ecgX=startX+chatWidth/1500*k;
            var ecgY=(startY+chatHeight/2)-ecg*(chatHeight/3);
            if (k==0)
                pointStr='M'+ecgX+','+ecgY;
            else
                pointStr=pointStr +' L'+ecgX+','+ecgY;
        }
      
        paper.path(pointStr).attr({'stroke':'#333','stroke-width':0.4});
    
    }else{
        paper.rect(startX,startY,chatWidth,chatHeight);
        paper.text(startX+5,startY+10,"无").attr({'text-anchor':'start','font-size':7});
    }
    
   
        };
		
});

