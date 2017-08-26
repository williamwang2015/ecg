define('VeEcgData',['Raphael','Triangle'], function (Raphael,Triangle) {

	 return function (instanceData) {	
		
	 	var w = instanceData.width,
            h = instanceData.height;

        var series=instanceData.series[0];
     
     var ecgDatas=series[0].list;
     var total=series[0].num;
    var miniChat=true;
	
		
	//	var R = Raphael(instanceData.id, w, h);
	//	R.setViewBox(0,0,300,300,true);
	//	R.setSize('100%','100%');
	//	R.canvas.setAttribute("preserveAspectRatio", "xMidYMid meet");
		//8秒钟的高度和宽度
    var nums=1;
    var seconds=3.4;
    
    var chatWidth=225;
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
    if (nums==1){
       paperHeight+=miniChatHeight+offsetY+10;
    }else{
       paperHeight+=10;
    }
    var paper = Raphael(instanceData.id, chatWidth, paperHeight);
    //画矩形框

    if (total>0){

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
             //   paper.circle(pointX, pointY, 0.2).attr({"fill": "#AEAEAE", "stroke": "#AEAEAE"});
            // paper.rect(pointX, pointY, 0.0002,0.0002).attr({"fill": "#000", "stroke": "#000"});
             paper.rect(pointX, pointY, 0.2,0.2).attr({"fill": "#000", "stroke": "#000","stroke-width":0});
            }

        }
    }
    paper.rect(startX,startY,chatWidth,chatHeight).attr({"stroke-width":0.6});;
    //画刻度标识
    var labelX=5*unit;
    var labelY=chatHeight-4*unit;
    paper.path('M'+labelX+','+labelY+' L'+labelX+','+(labelY-unit)+' L'+(labelX+10*unit)+','+(labelY-unit)+' L'+(labelX+10*unit)+','+labelY+'');
    paper.text(labelX+5*unit,labelY+unit,'400ms').attr({'font-size':'7'});
    //右边 10mm/mv 8s
    paper.text(chatWidth,labelY+unit,seconds*nums+' sec').attr({'text-anchor':'end','font-size':7});
    
    var ecgData=new Array();
    if (nums==1){//取中间3.4秒数据
       ecgData.push(ecgDatas.slice(4675/4,8075/4));
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

        paper.path(pointStr).attr({'stroke':'#333','stroke-width':0.4});
        
           //中间画标志线
        var beginX=startX+seconds/2*(chatWidth/seconds);
        paper.path( Triangle.getPath(beginX,5)).attr({"fill": "#0080ff", "stroke": "#0080ff"});
        paper.path('M '+beginX+','+0+' L'+beginX+','+chatHeight).attr({"fill": "#0080ff", "stroke": "#0080ff","stroke-width":0.6});
   
    }
    //画底部小图
    if (nums==1){

        //中间8秒画蓝色背景
    
        paper.rect(startX+miniChatWidth/12.75*(12.75-seconds)/2,(chatHeight+offsetY),miniChatWidth/12.75*seconds,miniChatHeight).attr({"fill": "#ECF8FC","stroke": "#ECF8FC"});
     
        
        //外边矩形框
        paper.rect(startX,(chatHeight+offsetY),miniChatWidth,miniChatHeight).attr({'stroke-width':0.6});
        //画30S文字
        paper.text(miniChatWidth-2,chatHeight+offsetY+miniChatHeight-5,'12.75 S').attr({"text-anchor":"end","font-size":"7"});
        //画心电图 9S 2500个点
        var pointStr='';
        

        for (var k=0;k<ecgDatas.length;k++){

                var ecg=ecgDatas[k];
                if (ecg>1.5) ecg=1.5;
                if (ecg<-1.5) ecg=-1.5;
                //计算xy坐标
                var ecgX=startX+chatWidth/(12750/4)*k;

                var ecgY=(chatHeight+offsetY+unit*5)-ecg*(miniChatHeight/3);

                if (k==0)
                    pointStr='M'+ecgX+','+ecgY;
                else
                    pointStr=pointStr +' L'+ecgX+','+ecgY;
            }
        paper.path(pointStr).attr({'stroke':'#333','stroke-width':0.4});

    }
    
    //写底部文字
    paper.text(chatWidth,paperHeight-5,'总数:'+total).attr({'text-anchor':'end','font-size':7});
    }else{
    
        paper.rect(startX,startY,chatWidth,paperHeight-8).attr({"stroke-width":0.6});
        paper.text(startX+10,startY+10,'无');
    
    }
}
		
});

