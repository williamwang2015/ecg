define(function(){
  return {
  getPath: function(x,y,side,lside){

　
    var side=side ||3;
    var lside=lside ||5;
    var width=side;
    var height=Math.sqrt(lside*lside-(side/2)*(side/2));
    var path='M'+x+','+y+'L'+(x+width/2)+','+(y-height)+'L'+(x-width/2)+','+(y-height)+'z';
    return path;

　　}
    }
});