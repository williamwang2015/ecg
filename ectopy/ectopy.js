/*房早和室早上方的柱状图*/
define('ectopy',['Raphael','Triangle'], function (Raphael,Triangle) {

	 return function (instanceData) {	
		
	 	var w = instanceData.width,
            h = instanceData.height;
        var series0 = instanceData.series[0];
        var rateData=series0[0].list;
      
    var days=8;//最小8天
    var chatHeight=114;
    var chatWidth=424;
    var startX=60;
    var startY=15;
    var maxLine=days*2;
    var unit=chatWidth/maxLine;
    var unitY=rateData.unit;//y轴每个单元格表示的值
    //分钟索引
   /* var rateData = {
        dates: ['11/16','11/17','11/18','11/19','11/20','11/21','11/22','11/23','11/24'],
        rateList: [{rateIndex: 24,nums:2,day:1},
            {rateIndex: 35,nums:211,day:0},
            {rateIndex: 46,nums:422,day:1},
            {rateIndex: 47,nums:1000,day:1}
        ]
    };*/



    var paper = Raphael(instanceData.id, startX+chatWidth+76, startY+chatHeight+35);

    for (var i=1;i<maxLine;i++){
        var lineBegX=startX+(chatWidth/maxLine)*i;
        var lineBegY=startY;
        var lineEndX=lineBegX;
        var lineEndY=chatHeight+startY;
        paper.path('M' + lineBegX + ','+ lineBegY + ' L' + lineEndX + ',' + lineEndY  + 'Z').attr({"stroke-width": 0.4,"stroke-dasharray":". ","stroke":"#9B9B9B","stroke-width":0.4 });
    }
    //循环画横线
    for (var j=1;j<5;j++){
        var lineBegX=startX;
        var lineBegY=startY+(chatHeight/5)*j;
        var lineEndX=startX+chatWidth;
        var lineEndY=lineBegY;
        paper.path('M' + lineBegX + ','+ lineBegY + ' L' + lineEndX + ',' + lineEndY  + 'Z').attr({"stroke-width":0.4,"stroke":"#333","stroke-width":0.4});

    }
    //循环画Y刻度
    for (var m=0;m<6;m++){
        paper.text(55,startY+(chatHeight/5)*m, unitY*(5-m)).attr({"text-anchor": "end"}).attr({"font-size":7});
    }
    
    paper.text(18,startY+48,'早搏').attr({'font-size':7});
    paper.text(18,startY+60,'(次数/小时)').attr({'font-size':7});
    //数量和百分比标签
    paper.text(0,chatHeight+startY+16,'每日数量').attr({"font-size":7,"text-anchor": "start"});
    //写百分比
    paper.text(0,chatHeight+startY+26,'每日百分比').attr({"font-size":7,"text-anchor": "start"});
    paper.rect(startX+chatWidth+5, startY+50,6,6).attr({"fill": "#fff", "stroke": "#000",'stroke-width':0.7});
    paper.text(startX+chatWidth+15, startY+53,'白天 (6:00--18:00)').attr({'font-size':7,'text-anchor':'start'});
   // paper.text(startX+chatWidth+15, startY+60,'(6:00--18:00)').attr({'font-size':7,'text-anchor':'start'});
    paper.rect(startX+chatWidth+5, startY+70, 6,6).attr({"fill": "#000", "stroke": "#000",'stroke-width':0.7});
    paper.text(startX+chatWidth+15, startY+73,'夜晚').attr({'font-size':7,'text-anchor':'start'});
    var dates=rateData.dates;
    //循环画xkedu
    for (var n=1;n<16;n++){
        if (n%2==0){
            paper.text(startX+(chatWidth/maxLine)*n,8,'0').attr({"font-size":7});
        }else{
            paper.text(startX+(chatWidth/maxLine)*n,8,'12').attr({"font-size":7});
            var index=parseInt(n/2);

            paper.text(startX+(chatWidth/maxLine)*n,chatHeight+startY+6,dates[index]).attr({"font-size":7});
            
              //写数量
            paper.text(startX+(chatWidth/maxLine)*n,chatHeight+startY+16,rateData.nums[index]).attr({"font-size":7});
            //写百分比
            paper.text(startX+(chatWidth/maxLine)*n,chatHeight+startY+26,rateData.percent[index]).attr({"font-size":7});
        }

    }
    paper.rect(startX,startY,chatWidth,chatHeight).attr({"stroke-width":0.6});
    //画时间开始和结束标志线
     var markColor="#00B8E4";
     alert(rateData.beginIndex);
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
        var start =data.index;//小时索引
        var rectWidth=chatWidth/(8*24);
        var rectHeight=chatHeight/(unitY*5)*data.nums;
        //第一个点的位置X
        var posX = startX + start*(chatWidth/(8*24));

        var posY=chatHeight+startY-rectHeight;


        //  paper.path('M' + posX + ',' + maxY + ' L' + posX + ',' + minY + ' z').attr({"stroke-width": 1});
        if (data.day==1){
            paper.rect(posX, posY, rectWidth,rectHeight).attr({"fill": "#fff", "stroke-width": 0.4});
        }else{
            paper.rect(posX, posY, rectWidth,rectHeight).attr({"fill": "#000", "stroke-width": 0.4});
            //   paper.circle(posX, avgY, 3).attr({"fill": "#000", "stroke": "#000"});
        }




    }
           
        };
		
});

