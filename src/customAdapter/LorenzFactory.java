package customAdapter;


import java.util.ArrayList;
import java.util.List;

public class LorenzFactory {
   public static List<LorenzRrInfo> getCollection(){
	   List<LorenzRrInfo> rrList=new ArrayList<LorenzRrInfo>();
	   for (int i=1;i<=2;i++){
		   LorenzRrInfo result=new LorenzRrInfo();
			result.setDay("day"+i);
			List rr=new ArrayList();
		
			if (i==1){
	    	int n=1000;
	    	for (int j=0;j<n;j++){
	    		Object[] obj=new Object[2];
	    		obj[0]=Math.random()*2000;
	    		obj[1]=Math.random()*2000;
	    		rr.add(obj);
	    	}
			}else{
				int n=13;
		    	for (int j=0;j<n;j++){
		    		Object[] obj=new Object[2];
		    		obj[0]=Math.random()*2000;
		    		obj[1]=Math.random()*2000;
		    		rr.add(obj);
		    	}
			}
			
	    	result.setRrInfo(rr);
	    	rrList.add(result);
	   }
	   return rrList;
   }
}
