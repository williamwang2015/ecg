package customAdapter;

import java.util.ArrayList;
import java.util.List;

public class AnaResultByDayFactory {
	public static List<AnaResultDayInfo> getCollection(){
		List<AnaResultDayInfo> datas=new ArrayList<AnaResultDayInfo>();
		String[] items=new String[]{"心律正常","疑似心律失常","疑似严重心律失常","信号收到干扰","传输尚未结束"};
		for (int i=0;i<6;i++){
			String day="5/"+(i+1);
			for (int j=0;j<5;j++){
				AnaResultDayInfo info=new AnaResultDayInfo();
				info.setDay(day);
				info.setItem(items[j]);
				info.setNum((int)(Math.random()*240));
				datas.add(info);
			}
		}
		return datas;
	}
}
