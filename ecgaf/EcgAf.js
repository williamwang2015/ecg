define('EcgAf',['Raphael'], function (Raphael) {

	 return function (instanceData) {	
		
	 	var w = instanceData.width,
            h = instanceData.height;
        var series0 = instanceData.series[0];
      // console.log(series0);
        var datas=series0[0].list;
    
        
     var afDatas=datas.afDatas;
     var rateData=datas.rateList;
     

 
    var days=8;//最小8天
    var chatHeight=180;
    var chatWidth=378;
    var startX=96;
    var startY=10;
    var maxLine=days*2;
    var unit=chatWidth/maxLine;
    //分钟索引
   /* var rateData = {
        dates: ['11/16','11/17','11/18','11/19','11/20','11/21','11/22','11/23','11/24'],
        rateList: [{rateIndex: 24, min: 56, max: 120, avg:76,day:1}
            ,
            {rateIndex: 120,min: 80, max: 160, avg: 100,day:0}
        ]
    };*/



    var paper = Raphael(instanceData.id, chatWidth+startX, chatHeight+startY);

     var afHeight=54;
    //画上方Af占比横线
      var lineBegX=startX;
      var lineBegY=startY;
      var lineEndX=startX+chatWidth;
      var lineEndY=lineBegY;
      paper.path('M' + lineBegX + ','+ lineBegY + ' L' + lineEndX + ',' + lineBegY  + 'Z').attr({"stroke-width": 0.4,"stroke":"#333"});
      paper.path('M' + lineBegX + ','+ (lineBegY+afHeight) + ' L' + lineEndX + ',' + (lineBegY+afHeight)  + 'Z').attr({"stroke-width": 0.4,"stroke":"#333"});

    //画af刻度
    for (var i=0;i<=24;i++){
        var markY=afHeight/24*i+startY
        paper.path('M' + lineBegX + ','+ markY + ' L' + (lineBegX+10) + ',' + markY  + 'Z').attr({"stroke-width": 0.4,"stroke":"#a8a8a8"});
        if (i%6==0){
            paper.text(startX-3,markY,24-i).attr({'text-anchor':'end','font-size':7});
            if (i!=0&&i!=24){// 右边三条分割线
                paper.path('M' + (lineEndX-10) + ','+ markY + ' L' + lineEndX + ',' + markY  + 'Z').attr({"stroke-width": 0.4,"stroke":"#a8a8a8"});
            }
        }
    }
    //左侧文字标识
    paper.text(0,startY+20,'每日房颤时长').attr({'font-size':7,'text-anchor':'start'});;
    paper.rect(0,startY+30,8,8).attr({fill:'#000',stroke:'#000','stroke-width':0.7});
    paper.text(10,startY+34,'房颤').attr({'font-size':7,'text-anchor':'start'});
    paper.rect(0,startY+40,8,8).attr({fill:'#fff',stroke:'#000','stroke-width':0.7});
    paper.text(10,startY+44,'无房颤').attr({'font-size':7,'text-anchor':'start'});
  
    paper.text(0,startY+afHeight+6,'房颤时长').attr({'font-size':7,'text-anchor':'start'});
    paper.text(0,startY+afHeight+14,'不可分析时长').attr({'font-size':7,'text-anchor':'start'});
    paper.text(0,startY+afHeight+22,'有效数据房颤占比').attr({'font-size':7,'text-anchor':'start'});
    //
    var dayWidth=30;
    var dayDiff=14;
    var startDay=12;
   
    for (var j=0;j<8;j++){
        var dayX=startDay+(dayWidth+dayDiff)*j+startX+10;
        //传入的数据为秒数
        var dayY=afHeight-afDatas[j].total*(afHeight/24/60/60)+startY;
        paper.rect(dayX,dayY,dayWidth,afDatas[j].total*(afHeight/24/60/60)).attr({'stroke':'#333','fill':'#fff','stroke-width':0.5});
        //黑色矩形填充
        if (afDatas[j].af>0){
            var afY=afHeight-afDatas[j].af*(afHeight/24/60/60)+startY;
            paper.rect(dayX,afY,dayWidth,afDatas[j].af*(afHeight/24/60/60)).attr({'stroke':'#333','fill':'#000','stroke-width':0.1});
        }
        //底部标签
        paper.text(dayX,startY+afHeight+6,afDatas[j].totalStr).attr({'font-size':7,'text-anchor':'start'});
        paper.text(dayX,startY+afHeight+14,afDatas[j].unanaStr).attr({'font-size':7,'text-anchor':'start'});
        paper.text(dayX,startY+afHeight+22,afDatas[j].percent).attr({'font-size':7,'text-anchor':'start'});
    }


    //画下方心率图
    var startRateY=startY+afHeight+40;
    var rateHeight=72;
    for (var m=0;m<6;m++){
        var rateY=startRateY+(rateHeight/5)*m;
        paper.path('M' + lineBegX + ','+ rateY + ' L' + lineEndX + ',' + rateY  + 'Z').attr({"stroke-width": 0.4,"stroke":"#333"});
        paper.text(lineBegX-3,rateY,250-m*50).attr({'text-anchor':'end','font-size':7});
    }
   //左侧文字标识
    paper.text(0,startRateY+30,'心率').attr({'font-size':7,'text-anchor':'start'});;
    paper.text(0,startRateY+40,' (bpm) ').attr({'font-size':7,'text-anchor':'start'});;
    //循环画8天刻度
    var dates=rateData.dates;
    for (var n= 0;n<8;n++){
        var posX=startX+(chatWidth/16)*(2*n+1);
        var posY=startRateY+rateHeight;
        paper.circle(posX,posY,0.5);
        paper.text(posX,posY+6,dates[n]).attr({'font-size':7});
    }


    var rateList=rateData.rateList;
    for (var i = 0; i < rateList.length; i++) {
        var data=rateList[i];
        if (data.min<0)
        	data.min=0;
        if (data.max>250)
           data.max=250;
           
        var start =data.rateIndex;//日期索引
        var posX = startX + start*(chatWidth/(8))-chatWidth/16;
        var maxY=rateHeight+startRateY-((rateHeight/250)*data.max);
        var minY=rateHeight+startRateY-((rateHeight/250)*data.min);
        var avgY=rateHeight+startRateY-((rateHeight/250)*data.avg);
      
        paper.path('M' + posX + ',' + maxY + ' L' + posX + ',' + minY + ' z').attr({"stroke-width": 0.8});
        if (data.avg>0 && data.avg<250){
        
        if (data.day==1){
            paper.circle(posX, avgY, 3).attr({"fill": "#fff", "stroke": "#000"});
        }else{
            paper.circle(posX, avgY, 3).attr({"fill": "#000", "stroke": "#000"});
        }
        }

    }
           
        };
		
});

