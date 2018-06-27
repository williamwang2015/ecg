define('scatterRr',['Raphael'], function (Raphael) {

	 return function (instanceData) {	
		
	 var w = instanceData.width;
    
      var data = [],
                n = 60000,
                i;
        var timestamp = Date.parse(new Date());
        for (i = 0; i < n; i += 1) {
            data.push([
                Math.pow(Math.random(), 2) * 86400,//秒
                Math.pow(Math.random(), 2) * 2000
            ]);
        }

        var width = 800,
                height = 300,
                leftgutter = 30,
                bottomgutter = 20,
                topgutter=20;
                rightgutter=30;
                r = Raphael(instanceData.id, width+leftgutter+rightgutter, height+bottomgutter+topgutter),
                txt = {"font": '10px Fontin-Sans, Arial', stroke: "none", fill: "#000"},
                X = (width) / 24,
                Y = (height ) / 10,
               
        r.path('M'+leftgutter+','+(height+topgutter)+',L'+(leftgutter+width)+','+(height+topgutter)+'');
        for (var i = 0, ii = 24; i < ii; i++) {
            r.text(leftgutter + X * i, height+topgutter+5,i+':00').attr(txt);
        }

        r.path('M'+leftgutter+','+topgutter+',L'+leftgutter+','+(height+topgutter));

        for (var i = 0, ii =10; i < ii; i++) {
            r.text(leftgutter-10, topgutter+Y * (i),100- i*10).attr(txt);
        }

        for (var m=0;m<data.length;m++){
             var point=data[m];
            var px=leftgutter+width/86400*point[0];
            var py=height-(height/100*point[1])+topgutter;
           // console.log(point[0]+'-'+point[1]);
           // console.log(px,py);
          //  r.circle(px, py, 30).attr({stroke: "none", fill: "#f00", opacity: 0});
            r.circle(px, py, 2).attr({"fill": "#00f", "stroke": "#00f",opacity: 0.5});
        }
     
     

   
        };
		
});

