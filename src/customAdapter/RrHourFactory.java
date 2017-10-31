package customAdapter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class RrHourFactory {
	public static List<RrHour> getList(){
		List list=new ArrayList();
    	int n=10000;
    	long start=new Date().getTime();
    	for (int i=0;i<n;i++){
    		RrHour rrHour=new RrHour();
    		rrHour.setRrDate(start+i*60*10);
    		rrHour.setRrValue((int)Math.random()*1500+50);
    	
    		list.add(rrHour);
    	}
    	return list;
	}
}
