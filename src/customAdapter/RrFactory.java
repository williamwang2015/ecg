package customAdapter;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RrFactory {
    public static List<Object> getRrHouse(){
    	List list=new ArrayList();
//    	int n=1000;
//    	long initTime=new Date().getTime();
//    	for (int i=0;i<n;i++){
//    		Object[] obj=new Object[2];
//    		obj[0]=initTime+i*4*500;
//    		obj[1]=Math.random()*2500;
//    		list.add(obj);
//    	}
//    	return list;
    	Map map=new HashMap();
    	for (int i=0;i<2000;i++){
    		int value=(int)(Math.random()*800);
    		
    		Object[] obj=new Object[2];
    		obj[0]=i;
    		obj[1]=value;
    		list.add(obj);
    	}
    	
    	return list;
    	
    }
    
    public static List<Object> getRrHour(){
    	List list=new ArrayList();
    	int n=50;
    	long initTime=1509345035000l;
    	for (int i=0;i<n;i++){
    		Object[] obj=new Object[2];
    		obj[0]=initTime+i*4*500;
    		obj[1]=Math.random()*2500;
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
    	
    	rrInfo.setInterval(getRrHouse());
    	rrInfo.setLorenz(getRrLorenz());
    	list.add(rrInfo);
    	
//    	RrInfo rrInfo1=new RrInfo();
//    	rrInfo1.setHour(getRrHour());
//    	rrInfo1.setLorenz(null);
    
//    	list.add(rrInfo1);
    	
    	return list;
    }
}
