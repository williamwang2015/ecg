package customAdapter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class RrLorenzFactory {
	public static List<RrHour> getList(){
		List list=new ArrayList();
    	int n=10000;
    	long start=new Date().getTime();
    	for (int i=0;i<n;i++){
    		RrHour rrHour=new RrHour();
    		rrHour.setRrDate((long)(Math.random()*2000));
    		rrHour.setRrValue((int)(Math.random()*2000));
    	
    		list.add(rrHour);
    	}
    	return list;
	}
}
