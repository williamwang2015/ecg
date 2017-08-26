define('EcgData',['Raphael','Triangle'], function (Raphael,Triangle) {

	 return function (instanceData) {	
		
	 var w = instanceData.width,
            h = instanceData.height;
    
     var series=instanceData.series[0];
        
     var ecgData=series[series.length-1];
     
     var ecgDatas=ecgData.list;
     var duration=ecgData.duration;
     var miniChat=true;//是否画底部小图
    if (ecgData.miniChat!=null)
        miniChat=ecgData.miniChat
	
	//8秒钟的高度和宽度
    var nums=1;
    if (ecgData.nums!=null)
        nums=ecgData.nums;
        
    var seconds=8;
    if (ecgData.seconds!=null)
        seconds=ecgData.seconds;
    var miniChatSeconds=ecgData.miniChatSeconds|30;//小图秒数
    
    var chatWidth=560;
	var chatHeight=chatWidth/(seconds/0.2)*6*nums;
    
    
    var startX=0;
    var startY=0;
    var maxLine=seconds/0.2;
    var unit=chatWidth/maxLine/5;

    //定义底部小图的宽度和高度
    
    var miniChatHeight=chatHeight/3/nums;//底部小图高度
    var miniChatWidth=chatWidth;
    var offsetY=2;
	var paperHeight=chatHeight;
    if (nums==1&&miniChat){
       paperHeight+=miniChatHeight+offsetY+10;
    }else{
      paperHeight+=10;
    }
    
    var paper = Raphael(instanceData.id, chatWidth, paperHeight);
    
    //画矩形框

   

    for (var i=1;i<maxLine;i++){
        var lineBegX=startX+(5*unit)*i;
        var lineBegY=startY;
        var lineEndX=lineBegX;
        var lineEndY=chatHeight;
        paper.path('M' + lineBegX + ','+ lineBegY + ' L' + lineEndX + ',' + lineEndY  + 'Z').attr({"stroke-width": 0.4,"stroke":"#9B9B9B"});
    }
    //循环画横线
    for (var j=1;j<6*nums;j++){
        var lineBegX=startX;
        var lineBegY=startY+(5*unit)*j;
        var lineEndX=chatWidth;
        var lineEndY=lineBegY;
        paper.path('M' + lineBegX + ','+ lineBegY + ' L' + lineEndX + ',' + lineEndY  + 'Z').attr({"stroke-width": 0.4,"stroke":"#9B9B9B"});

    }
    //画正方形内点
    for (var m=1;m<maxLine*5;m++){
        for (var n=1;n<30*nums;n++){
            if (m%5==0||n%5==0){
                continue
            }else{
                var pointX=startX+(unit)*m;
                var pointY=startY+(unit)*n;
               // paper.circle(pointX, pointY, 0.02).attr({"fill": "#AEAEAE", "stroke": "#AEAEAE"});
               // paper.rect(pointX, pointY, 0.00497,0.00497).attr({"fill": "#000", "stroke": "#000"});
               paper.rect(pointX, pointY, 0.2,0.2).attr({"fill": "#000", "stroke": "#000","stroke-width":0});
            }

        }
    }
    paper.rect(startX,startY,chatWidth,chatHeight).attr({'stroke-width':0.6});;
    //画刻度标识
    var labelX=5*unit;
    var labelY=chatHeight-4*unit;
    paper.path('M'+labelX+','+labelY+' L'+labelX+','+(labelY-unit)+' L'+(labelX+10*unit)+','+(labelY-unit)+' L'+(labelX+10*unit)+','+labelY+'').attr({'stroke-width':1});
    paper.text(labelX+5*unit,labelY+unit,'400ms').attr({'font-size':'6'});
    //右边 10mm/mv 8s
    paper.text(chatWidth-3*unit,labelY+2*unit,seconds*nums+' sec').attr({'text-anchor':'end','font-size':7});
    if (ecgDatas!=null){
    var ecgData=new Array();
   if (nums==1){//取中间数据秒数据
       
        ecgData.push(ecgDatas.slice((miniChatSeconds-seconds)/2*1000/4,((miniChatSeconds-seconds)/2+seconds)*1000/4));
       
    }else if (nums==2){
        ecgData.push(ecgDatas.slice(0/4,seconds*1000/4));
        ecgData.push(ecgDatas.slice(seconds*1000/4,seconds*1000*2/4));
    }else{
        ecgData.push(ecgDatas.slice(0/4,seconds*1000/4));
        ecgData.push(ecgDatas.slice(seconds*1000/4,seconds*1000*2/4));
        ecgData.push(ecgDatas.slice(seconds*1000*2/4,seconds*1000*3/4));
    }
    
    //根据数据心电图
    for (var num=0;num<nums;num++){
        var pointStr='';
     
        for (var k=0;k<ecgData[num].length;k++){
            var ecgdatas=ecgData[num];
            var ecg=ecgdatas[k];
            if (ecg>1.5) ecg=1.5;
            if (ecg<-1.5) ecg=-1.5;
            //计算xy坐标
            var ecgX=startX+chatWidth/(seconds*1000/4)*k;
            var ecgY=(startY+unit*15)-ecg*(chatHeight/3/nums)+num*30*unit;
            if (k==0)
                pointStr='M'+ecgX+','+ecgY;
            else
                pointStr=pointStr +' L'+ecgX+','+ecgY;
        }
       
        paper.path(pointStr).attr({'stroke':'#333','stroke-width':0.6});
        
        //画时间标示开始和结束线
        if (num==0){
       
        if (duration!=null){
         var secStr=duration.replace('secs','').trim();
         var sec=parseFloat(secStr);
         if (sec<seconds){
        var beginX=startX+(seconds-sec)/2*(chatWidth/seconds);
        var endX=startX+(sec+(seconds-sec)/2)*(chatWidth/seconds);
        paper.path( Triangle.getPath(beginX,5)).attr({"fill": "#0080ff", "stroke": "#0080ff"});
        paper.path('M '+beginX+','+0+' L'+beginX+','+chatHeight).attr({"fill": "#0080ff", "stroke": "#0080ff","stroke-width":0.6});
        paper.path( Triangle.getPath(endX, 5)).attr({"fill": "#0080ff", "stroke": "#0080ff"});
         paper.path('M '+endX+','+0+' L'+endX+','+chatHeight).attr({"fill": "#0080ff", "stroke": "#0080ff","stroke-width":0.6});
        }
        }else{//没有秒数则画中心点
            var beginX=startX+seconds/2*(chatWidth/seconds);
            paper.path( Triangle.getPath(beginX,5)).attr({"fill": "#0080ff", "stroke": "#0080ff"});
            paper.path('M '+beginX+','+0+' L'+beginX+','+chatHeight).attr({"fill": "#0080ff", "stroke": "#0080ff","stroke-width":0.6});
        
        }
        
      }
        
    }
    
    
    //画底部小图
    if (nums==1&&miniChat){

        //中间秒数画蓝色背景
        paper.rect(startX+miniChatWidth/miniChatSeconds*(miniChatSeconds-seconds)/2,(chatHeight+offsetY),miniChatWidth/miniChatSeconds*seconds,miniChatHeight).attr({"fill": "#ECF8FC","stroke": "#ECF8FC"});
       //外边矩形框
        paper.rect(startX,(chatHeight+offsetY),miniChatWidth,miniChatHeight).attr({'stroke-width':0.6});
        //画30S文字
        paper.text(miniChatWidth-2,chatHeight+offsetY+miniChatHeight-5,miniChatSeconds+' sec').attr({"text-anchor":"end","font-size":"7"});
        //画心电图 30S  7500个点
        var pointStr='';
        

        for (var k=0;k<ecgDatas.length;k++){

                var ecg=ecgDatas[k];
                if (ecg>1.5) ecg=1.5;
                if (ecg<-1.5) ecg=-1.5;
                //计算xy坐标
                var ecgX=startX+chatWidth/(miniChatSeconds*1000/4)*k;

                var ecgY=(chatHeight+offsetY+unit*5)-ecg*(miniChatHeight/3);

                if (k==0)
                    pointStr='M'+ecgX+','+ecgY;
                else
                    pointStr=pointStr +' L'+ecgX+','+ecgY;
            }
        paper.path(pointStr).attr({'stroke':'#333','stroke-width':0.4});

        if (duration!=null){
       
         var sec=parseFloat(duration.replace('secs','').trim());
         if (sec>=seconds&&sec<miniChatSeconds){
       
           //底部小图划线
          var beginX=startX+(miniChatSeconds-sec)/2*(chatWidth/miniChatSeconds);
         var endX=startX+(sec+(miniChatSeconds-sec)/2)*(chatWidth/miniChatSeconds);
         paper.path( Triangle.getPath(beginX,chatHeight+offsetY+5)).attr({"fill": "#0080ff", "stroke": "#0080ff"});
         paper.path('M '+beginX+','+(chatHeight+offsetY)+' L'+beginX+','+(chatHeight+miniChatHeight+offsetY)).attr({"fill": "#0080ff", "stroke": "#0080ff","stroke-width":0.6});
         paper.path( Triangle.getPath(endX, chatHeight+offsetY+5)).attr({"fill": "#0080ff", "stroke": "#0080ff"});
         paper.path('M '+endX+','+(chatHeight+offsetY)+' L'+endX+','+(chatHeight+miniChatHeight+offsetY)).attr({"fill": "#0080ff", "stroke": "#0080ff","stroke-width":0.6});
       
         }
        }
    }
    }

   
        };
		
});

