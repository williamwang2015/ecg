package customAdapter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RrFactory {
    public static List<Object> getRrHouse(){
    	List list=new ArrayList();
    	int n=1000;
    	for (int i=0;i<n;i++){
    		Object[] obj=new Object[2];
    		obj[0]=Math.random()*24*3600;
    		obj[1]=Math.random()*1500;
    		list.add(obj);
    	}
    	return list;
    }
    
    public static List<Object> getRrLorenz(){
    	List list=new ArrayList();
    	int n=1000;
    	for (int i=0;i<n;i++){
    		Object[] obj=new Object[2];
    		obj[0]=Math.random()*2000;
    		obj[1]=Math.random()*2000;
    		list.add(obj);
    	}
    	return list;
    }
    
    public static List<RrInfo> getList(){
    	List list=new ArrayList();
    	RrInfo rrInfo=new RrInfo();
    	rrInfo.setHour(getRrHouse());
    	rrInfo.setLorenz(getRrLorenz());
    	list.add(rrInfo);
    	return list;
    }
}
