package customAdapter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EcgRateInfoFactory {

	public static List<EcgRateInfo> getCollection() {
		ArrayList<EcgRateInfo> lists = new ArrayList<EcgRateInfo>();
		for (int i = 0; i < 1; i++) {
			EcgRateInfo info = new EcgRateInfo();
			if (i==0){
				info.setBeginIndex(760);
				info.setEndIndex(775);
			}
				info.setBeginIndex(760);
			if (i==2)
				info.setEndIndex(1440);
			int day = i + 1;
			info.setDate1("11/" + (16 + i * 2));
			info.setDate2("11/" + (16 + day));
			info.setDays("第 " +day+" 天");
			List events = new ArrayList();
			events.add(9);
			events.add(0);
			events.add(0);
			events.add(25);
			events.add(25);
			events.add(6);
			events.add("Y");
			events.add("Y");
			events.add("N");
			info.setEvents(events);
			List rateList = new ArrayList();
			//Map rate = new HashMap();
			//rate.put("startIndex", 20);
			//List rateDatas = new ArrayList();
			//for (int k=0;k<20;k++){
				EcgRate rate=new EcgRate(10,45, 100, 76, 23, 0);
				rateList.add(rate);
				
			//}
			
			
			//rate.put("datas", rateDatas);
			//rateList.add(rate);
			info.setRateList(rateList);
			
			
			
			List eventList=new ArrayList();
			
			Map event1=new HashMap();
			event1.put("eventIndex", 1);
			List eventList1=new ArrayList();
			Map mapz=new HashMap();
			mapz.put("index", 144);
			mapz.put("value", 5);
			eventList1.add(mapz);
			
			event1.put("datas", eventList1);
			eventList.add(event1);
			
			Map event2=new HashMap();
			event2.put("eventIndex", 2);
			List eventList2=new ArrayList();
			Map mapz2=new HashMap();
			mapz2.put("index", 40);
			mapz2.put("value", 5);
			eventList2.add(mapz2);
			
			event2.put("datas", eventList2);
			eventList.add(event2);
			
			Map event5=new HashMap();
			event5.put("eventIndex", 5);
			List eventList5=new ArrayList();
			Map map=new HashMap();
			map.put("start", 120);
			map.put("end", 180);
			Map map1=new HashMap();
			map1.put("start", 300);
			map1.put("end", 600);
			eventList5.add(map);
			eventList5.add(map1);
			event5.put("datas", eventList5);
			eventList.add(event5);
			
			
			Map event7=new HashMap();
			event7.put("eventIndex", 9);
		
			List eventList7=new ArrayList();
			
			for (int m=7;m<18;m++){
				Map  data=new HashMap();
				data.put("index", 2+m);
				data.put("value", 100);
				eventList7.add(data);
			}
			event7.put("datas", eventList7);
			eventList.add(event7);
			
			
//			Map event8=new HashMap();
//			event8.put("eventIndex", 8);
//			event8.put("startIndex", 30);
//			List eventList8=new ArrayList();
//			eventList8.add(23);
//			eventList8.add(25);
//			eventList8.add(33);
//			eventList8.add(57);
//			event8.put("datas", eventList8);
//			eventList.add(event8);
//			
//			Map event9=new HashMap();
//			event9.put("eventIndex",9 );
//			event9.put("startIndex", 120);
//			List eventList9=new ArrayList();
//			eventList9.add(6);
//			eventList9.add(30);
//			eventList9.add(20);
//			eventList9.add(37);
//			event9.put("datas", eventList9);
//			eventList.add(event9);
			
			info.setEventList(eventList);
			info.setMaxRt(0);
			info.setMaxSve(456);
			info.setMaxVe(231);
			lists.add(info);
			
		}
		EcgRateInfo info=new EcgRateInfo();
		List events = new ArrayList();
		events.add(0);
		events.add(0);
		events.add(0);
		events.add(0);
		events.add(0);
		events.add(0);
		events.add("N");
		events.add("N");
		events.add("N");
		info.setEvents(events);
		lists.add(info);
		return lists;
	}
}
