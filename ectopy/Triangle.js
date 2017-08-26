define(function(){
  return {
  getPath: function(x,y,side,lside){

　　var dpi=72;
    var side=side ||2;
    var lside=lside ||3;
    var width=side*dpi/25.4;
    var height=Math.sqrt(lside*lside-(side/2)*(side/2))*dpi/25.4;
    var path='M'+x+','+y+'L'+(x+width/2)+','+(y-height)+'L'+(x-width/2)+','+(y-height)+'z';
    return path;

　　}
    }
});