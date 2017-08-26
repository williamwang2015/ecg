package customAdapter;

import java.util.ArrayList;
import java.util.List;

public class MarkerFactory {
	public static List<PageInfo> getCollection(){
		List<PageInfo> markers=new ArrayList<PageInfo>();
		markers.add(new PageInfo("心率统计图表",2));
		markers.add(new PageInfo("用户记录心电图",2));
		PageInfo page=new PageInfo("特征心电图",2);
		//markers.add(new PageInfo("特征心电图",2));
		
		List<PageInfo> subs=new ArrayList<PageInfo>();
		subs.add(new PageInfo("室颤",3));
		subs.add(new PageInfo("室速",3));
		subs.add(new PageInfo("室上速",3));
		subs.add(new PageInfo("停搏",3));
		subs.add(new PageInfo("房颤",3));
		subs.add(new PageInfo("房室传导阻滞",3));
		subs.add(new PageInfo("室上性心率失常",3));
		subs.add(new PageInfo("室性心率失常",3));
		
		page.setSubList(subs);
		
		markers.add(page);
		
		
		markers.add(new PageInfo("典型条图",4));
		return markers;
	}
}
