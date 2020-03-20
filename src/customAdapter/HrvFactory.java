package customAdapter;

import java.util.ArrayList;
import java.util.List;

public class HrvFactory {
	public static List<HrvInfo> getCollection(){
		List<HrvInfo> list=new ArrayList();
		for (int i=0;i<10;i++){
			HrvInfo hrv=new HrvInfo();
			hrv.setHrvDate("2019-12-21");
			hrv.setHf(19);
			hrv.setLf(i+1560);
			hrv.setPnn50(12.5);
			list.add(hrv);
		}
		return list;
	}
}
