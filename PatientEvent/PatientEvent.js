define('PatientEvent',['Raphael'], function (Raphael) {

	 return function (instanceData) {	
		
	 	var w = instanceData.width,
            h = instanceData.height;
        var series0 = instanceData.series[0];
        var length=series0.length;
        var ecgData=series0[length-1];
        var points=ecgData.eventList;
    //90秒钟的高度和宽度 每行显示30秒
	var seconds=90;
	var chatWidth=w;
	var chatHeight=90;
	var paper = Raphael(instanceData.id, chatWidth, chatHeight);
    var startX=0;
    var startY=0;
    

    
    if (points!=null){
    paper.rect(startX,startY,chatWidth,chatHeight).attr({'stroke-width':0.6});
    //右边 90s
    paper.text(chatWidth-10,chatHeight-7,seconds+' sec').attr({'text-anchor':'end','font-size':7});
  
    var pointStr='';
    for (var line=1;line<=3;line++){
       var start=(line-1)*7500;
       var end=line*7500;
       var lines=points.slice(start,end);
       var pointStr='';
       for (var k=0;k<lines.length;k++){
            var ecg=lines[k];
            //计算xy坐标
            var ecgX=startX+chatWidth/7500*k;
            var ecgY=startY+(chatHeight/6*(2*line-1))-ecg*(chatHeight/6/3);
            if (k==0)
                pointStr='M'+ecgX+','+ecgY;
            else
                pointStr=pointStr +' L'+ecgX+','+ecgY;
        } 
        paper.path(pointStr).attr({'stroke':'#333','stroke-width':0.4});
    }
    
    //中间点画圆形
    paper.circle(chatWidth/2,chatHeight/2,15).attr({'stroke':'#f00','stroke-dasharray':'-'});

    }else{
        paper.rect(startX,startY,chatWidth,chatHeight);
        paper.text(startX+5,startY+10,"None found").attr({'text-anchor':'start'});
    }
    
   
        };
		
});

