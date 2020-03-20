package customAdapter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SvtInfoFactory {
	public static List<ReportDetail> getCollection(){
		List<ReportDetail> details=new ArrayList();
		ReportDetail detail=new ReportDetail();
		
		List<SvtInfo> lists=new ArrayList();
		for (int i=0;i<3;i++){
			SvtInfo info=new SvtInfo();
			if (i==0){
				info.setEventName("最快心率");
				info.setRateData1(getRateData());
				info.setRateData2(getRateData1());
			}
				
			if (i==1)
				info.setEventName("最快平均心率");
			if (i==2)
				info.setEventName("最长片段");
			info.setIndex(i+1);
			info.setEventDate("11/16/17");
			info.setEventTime("17:32:56");
		//	info.setBeats((i+2)+"");
			info.setDuration("12 secs");
			info.setAverage("158 bpm");
			info.setRange("150~171 bpm");
			
			info.setNums(i+1);
			info.setSeconds(8);
			info.setMiniChat(false);
			info.setMiniSeconds(30);
			info.setPtTriggerShow(true);
			if (i%2==0){
			     info.setPtTrigger(true);
	        	info.setDataList(getList());
	        }else{
	        	info.setDataList(getList1());
	        	info.setPtTrigger(false);
	        }
			
			lists.add(info);
		}
		detail.setDetails(lists);
		detail.setRateData1(getRateData1());
		detail.setRateData2(getRateData());
		details.add(detail);
		return details;
	}
	
	
	public static List getList(){
		List list=new ArrayList();
		String zz="0.01,0.0,-0.01,-0.01,0.0,0.01,0.02,0.01,-0.01,-0.03,-0.02,0.02,0.06,0.05,-0.06,-0.24,-0.46,-0.63,-0.71,-0.7,-0.65,-0.6,-0.59,-0.59,-0.6,-0.59,-0.56,-0.54,-0.53,-0.53,-0.53,-0.53,-0.52,-0.51,-0.49,-0.47,-0.45,-0.43,-0.42,-0.4,-0.39,-0.37,-0.33,-0.29,-0.26,-0.23,-0.21,-0.2,-0.19,-0.18,-0.16,-0.13,-0.11,-0.1,-0.09,-0.09,-0.08,-0.08,-0.08,-0.08,-0.08,-0.07,-0.07,-0.06,-0.06,-0.05,-0.05,-0.05,-0.05,-0.04,-0.04,-0.04,-0.03,-0.03,-0.03,-0.03,-0.04,-0.04,-0.04,-0.03,-0.02,0.0,0.0,-0.01,-0.03,-0.04,-0.04,-0.03,-0.02,-0.01,-0.01,-0.03,-0.04,-0.06,-0.07,-0.07,-0.05,-0.03,-0.01,0.01,0.02,0.01,0.01,0.01,0.01,0.03,0.05,0.07,0.08,0.08,0.08,0.06,0.04,0.01,-0.01,-0.04,-0.05,-0.06,-0.08,-0.09,-0.1,-0.11,-0.11,-0.11,-0.11,-0.11,-0.13,-0.15,-0.16,-0.16,-0.14,-0.11,-0.07,-0.05,-0.02,0.02,0.08,0.17,0.24,0.26,0.2,0.08,-0.08,-0.24,-0.39,-0.5,-0.58,-0.61,-0.57,-0.47,-0.33,-0.2,-0.1,-0.06,-0.06,-0.08,-0.08,-0.06,-0.05,-0.04,-0.05,-0.05,-0.04,-0.03,-0.01,0.01,0.02,0.03,0.03,0.04,0.06,0.08,0.09,0.11,0.14,0.15,0.16,0.17,0.17,0.18,0.2,0.23,0.27,0.3,0.33,0.36,0.38,0.39,0.4,0.4,0.4,0.4,0.39,0.38,0.36,0.34,0.32,0.31,0.31,0.3,0.29,0.27,0.24,0.2,0.17,0.14,0.12,0.1,0.07,0.04,0.01,-0.01,-0.02,-0.02,-0.03,-0.03,-0.05,-0.07,-0.08,-0.09,-0.08,-0.05,-0.03,-0.03,-0.03,-0.05,-0.06,-0.06,-0.04,-0.03,-0.02,-0.02,-0.02,-0.03,-0.02,-0.02,-0.02,-0.02,-0.03,-0.03,-0.04,-0.03,-0.03,-0.03,-0.03,-0.03,-0.02,0.0,0.02,0.03,0.04,0.04,0.04,0.05,0.06,0.07,0.08,0.08,0.07,0.05,0.04,0.03,0.02,0.0,-0.02,-0.03,-0.05,-0.06,-0.06,-0.06,-0.06,-0.07,-0.07,-0.07,-0.08,-0.09,-0.09,-0.09,-0.09,-0.08,-0.08,-0.09,-0.1,-0.1,-0.06,0.03,0.14,0.23,0.26,0.2,0.07,-0.09,-0.24,-0.35,-0.42,-0.46,-0.49,-0.49,-0.45,-0.36,-0.25,-0.15,-0.07,-0.04,-0.03,-0.04,-0.04,-0.03,-0.03,-0.03,-0.03,-0.02,0.0,0.02,0.03,0.05,0.05,0.06,0.07,0.07,0.08,0.1,0.12,0.15,0.17,0.19,0.2,0.21,0.22,0.24,0.27,0.31,0.35,0.38,0.41,0.42,0.43,0.45,0.46,0.47,0.47,0.46,0.44,0.42,0.41,0.4,0.4,0.39,0.38,0.35,0.31,0.27,0.23,0.19,0.16,0.13,0.12,0.1,0.09,0.07,0.04,0.01,-0.01,-0.02,-0.03,-0.03,-0.02,-0.02,-0.02,-0.02,-0.03,-0.05,-0.06,-0.06,-0.05,-0.04,-0.04,-0.03,-0.04,-0.04,-0.04,-0.04,-0.03,-0.03,-0.02,-0.01,0.0,0.0,0.0,-0.01,-0.02,-0.03,-0.03,-0.03,-0.02,-0.02,-0.02,-0.01,0.0,0.02,0.05,0.07,0.08,0.08,0.07,0.06,0.06,0.05,0.05,0.05,0.04,0.02,-0.01,-0.04,-0.07,-0.09,-0.1,-0.1,-0.1,-0.09,-0.09,-0.09,-0.09,-0.09,-0.09,-0.09,-0.1,-0.11,-0.12,-0.12,-0.12,-0.09,-0.04,0.04,0.14,0.21,0.23,0.17,0.05,-0.1,-0.23,-0.35,-0.43,-0.49,-0.51,-0.49,-0.41,-0.28,-0.16,-0.07,-0.04,-0.04,-0.06,-0.07,-0.05,-0.03,-0.01,0.0,0.0,-0.01,-0.01,0.01,0.03,0.05,0.06,0.07,0.07,0.08,0.09,0.11,0.14,0.18,0.21,0.24,0.26,0.27,0.28,0.27,0.28,0.3,0.34,0.41,0.47,0.51,0.52,0.51,0.5,0.49,0.5,0.5,0.5,0.49,0.47,0.45,0.42,0.4,0.36,0.33,0.29,0.27,0.24,0.22,0.19,0.16,0.12,0.09,0.07,0.04,0.02,-0.01,-0.03,-0.04,-0.04,-0.04,-0.02,-0.02,-0.02,-0.02,-0.03,-0.04,-0.05,-0.05,-0.06,-0.05,-0.04,-0.02,-0.01,-0.01,-0.02,-0.03,-0.04,-0.03,-0.03,-0.02,-0.02,-0.02,-0.03,-0.04,-0.03,-0.02,-0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.04,0.05,0.07,0.09,0.09,0.07,0.04,0.01,-0.01,-0.02,-0.03,-0.02,-0.03,-0.04,-0.06,-0.08,-0.1,-0.11,-0.12,-0.12,-0.11,-0.11,-0.11,-0.12,-0.13,-0.14,-0.15,-0.14,-0.11,-0.04,0.05,0.15,0.21,0.22,0.15,0.03,-0.1,-0.23,-0.34,-0.42,-0.49,-0.53,-0.53,-0.48,-0.37,-0.24,-0.13,-0.07,-0.05,-0.05,-0.04,-0.02,0.0,0.01,0.01,0.0,-0.01,-0.01,0.0,0.02,0.04,0.05,0.06,0.06,0.05,0.06,0.07,0.1,0.13,0.16,0.19,0.21,0.23,0.27,0.31,0.35,0.39,0.42,0.44,0.45,0.47,0.49,0.5,0.51,0.52,0.52,0.5,0.48,0.45,0.43,0.42,0.41,0.4,0.38,0.34,0.3,0.27,0.25,0.23,0.21,0.18,0.14,0.1,0.06,0.04,0.02,0.0,-0.03,-0.05,-0.07,-0.08,-0.08,-0.06,-0.04,-0.03,-0.03,-0.04,-0.05,-0.06,-0.05,-0.04,-0.02,-0.01,-0.01,-0.02,-0.02,-0.03,-0.02,-0.02,-0.02,-0.03,-0.04,-0.04,-0.03,-0.02,-0.02,-0.01,-0.01,-0.01,-0.01,-0.01,0.01,0.02,0.02,0.02,0.03,0.03,0.04,0.05,0.06,0.06,0.06,0.05,0.05,0.06,0.05,0.04,0.01,-0.02,-0.04,-0.06,-0.08,-0.09,-0.1,-0.11,-0.11,-0.11,-0.11,-0.12,-0.13,-0.15,-0.14,-0.12,-0.09,-0.07,-0.06,-0.05,-0.03,0.02,0.1,0.17,0.19,0.14,0.03,-0.12,-0.26,-0.39,-0.49,-0.56,-0.58,-0.53,-0.42,-0.28,-0.15,-0.07,-0.03,-0.03,-0.03,-0.03,-0.02,-0.02,-0.02,-0.02,-0.02,0.0,0.02,0.04,0.04,0.03,0.03,0.04,0.07,0.09,0.12,0.12,0.13,0.13,0.14,0.18,0.22,0.27,0.31,0.35,0.37,0.39,0.41,0.43,0.45,0.47,0.5,0.51,0.52,0.52,0.51,0.5,0.49,0.49,0.48,0.47,0.43,0.39,0.35,0.31,0.29,0.28,0.27,0.25,0.22,0.17,0.13,0.1,0.07,0.04,0.02,0.0,-0.02,-0.02,-0.02,-0.02,-0.02,-0.02,-0.02,-0.03,-0.03,-0.04,-0.04,-0.05,-0.06,-0.05,-0.03,-0.01,0.01,0.01,0.01,-0.01,-0.02,-0.02,-0.02,-0.03,-0.04,-0.05,-0.06,-0.06,-0.05,-0.04,-0.02,0.0,0.01,0.01,0.01,0.0,-0.01,-0.01,-0.01,0.02,0.05,0.07,0.09,0.08,0.07,0.06,0.05,0.05,0.05,0.03,0.0,-0.04,-0.08,-0.09,-0.09,-0.08,-0.06,-0.06,-0.08,-0.11,-0.12,-0.13,-0.12,-0.11,-0.1,-0.1,-0.11,-0.12,-0.13,-0.13,-0.12,-0.08,0.0,0.1,0.19,0.24,0.22,0.13,-0.02,-0.19,-0.33,-0.45,-0.53,-0.58,-0.57,-0.5,-0.38,-0.24,-0.12,-0.06,-0.05,-0.08,-0.11,-0.12,-0.1,-0.07,-0.04,-0.02,-0.01,0.0,0.01,0.02,0.03,0.04,0.05,0.05,0.06,0.08,0.1,0.14,0.17,0.2,0.22,0.23,0.24,0.25,0.26,0.27,0.3,0.33,0.38,0.43,0.47,0.5,0.51,0.51,0.51,0.5,0.5,0.5,0.5,0.48,0.47,0.45,0.42,0.37,0.32,0.27,0.23,0.2,0.19,0.18,0.16,0.13,0.1,0.07,0.05,0.04,0.02,0.0,-0.02,-0.05,-0.07,-0.08,-0.07,-0.06,-0.05,-0.05,-0.05,-0.06,-0.06,-0.07,-0.07,-0.07,-0.05,-0.04,-0.03,-0.03,-0.03,-0.03,-0.03,-0.02,-0.01,0.0,0.01,0.01,0.01,0.0,-0.01,-0.02,-0.03,-0.04,-0.05,-0.05,-0.04,-0.03,0.0,0.03,0.05,0.06,0.06,0.05,0.05,0.06,0.07,0.07,0.08,0.07,0.05,0.03,0.01,-0.02,-0.04,-0.05,-0.07,-0.07,-0.08,-0.09,-0.1,-0.11,-0.12,-0.13,-0.13,-0.14,-0.13,-0.13,-0.11,-0.1,-0.1,-0.11,-0.12,-0.1,-0.04,0.06,0.18,0.25,0.25,0.17,0.03,-0.12,-0.26,-0.38,-0.48,-0.55,-0.59,-0.56,-0.46,-0.32,-0.19,-0.09,-0.04,-0.04,-0.05,-0.06,-0.06,-0.05,-0.05,-0.04,-0.03,-0.01,0.01,0.03,0.04,0.05,0.05,0.06,0.07,0.09,0.11,0.14,0.17,0.19,0.21,0.23,0.25,0.27,0.29,0.32,0.34,0.37,0.41,0.45,0.48,0.51,0.51,0.51,0.51,0.51,0.51,0.51,0.5,0.47,0.45,0.42,0.4,0.38,0.37,0.35,0.31,0.27,0.23,0.2,0.17,0.16,0.14,0.12,0.09,0.06,0.03,0.01,-0.01,-0.02,-0.03,-0.03,-0.03,-0.03,-0.03,-0.03,-0.03,-0.03,-0.02,-0.03,-0.04,-0.05,-0.07,-0.08,-0.07,-0.05,-0.03,-0.02,-0.02,-0.02,-0.03,-0.04,-0.05,-0.05,-0.05,-0.04,-0.03,-0.01,0.0,-0.01,-0.02,-0.04,-0.05,-0.04,-0.02,0.01,0.04,0.06,0.06,0.07,0.07,0.06,0.06,0.05,0.04,0.03,0.02,0.01,0.01,-0.01,-0.03,-0.05,-0.08,-0.1,-0.11,-0.11,-0.1,-0.08,-0.08,-0.09,-0.12,-0.14,-0.14,-0.13,-0.1,-0.07,-0.04,-0.03,0.0,0.05,0.14,0.28,0.42,0.53,0.58,0.54,0.42,0.26,0.08,-0.08,-0.22,-0.33,-0.38,-0.38,-0.33,-0.25,-0.17,-0.11,-0.07,-0.05,-0.04,-0.04,-0.05,-0.06,-0.06,-0.05,-0.03,-0.02,-0.01,-0.01,-0.01,-0.02,0.0,0.02,0.04,0.06,0.07,0.07,0.07,0.09,0.11,0.13,0.16,0.17,0.19,0.2,0.21,0.22,0.24,0.25,0.26,0.27,0.27,0.27,0.27,0.27,0.27,0.27,0.26,0.24,0.22,0.19,0.17,0.15,0.15,0.14,0.14,0.13,0.11,0.09,0.06,0.04,0.02,0.01,0.01,0.0,-0.01,-0.03,-0.04,-0.05,-0.06,-0.06,-0.06,-0.06,-0.06,-0.06,-0.06,-0.06,-0.05,-0.03,-0.01,-0.01,-0.02,-0.04,-0.07,-0.09,-0.09,-0.07,-0.05,-0.03,-0.01,-0.01,-0.02,-0.03,-0.04,-0.04,-0.04,-0.04,-0.04,-0.04,-0.05,-0.05,-0.05,-0.03,0.0,0.03,0.04,0.05,0.05,0.04,0.03,0.03,0.02,0.03,0.05,0.06,0.07,0.07,0.06,0.04,0.03,0.01,-0.01,-0.03,-0.05,-0.07,-0.07,-0.07,-0.07,-0.07,-0.07,-0.08,-0.08,-0.08,-0.07,-0.05,-0.04,-0.03,-0.03,0.0,0.06,0.18,0.32,0.46,0.54,0.56,0.49,0.36,0.21,0.05,-0.1,-0.22,-0.31,-0.35,-0.33,-0.26,-0.19,-0.12,-0.09,-0.07,-0.06,-0.05,-0.05,-0.04,-0.05,-0.05,-0.05,-0.03,-0.01,0.01,0.03,0.05,0.06,0.06,0.05,0.04,0.03,0.03,0.05,0.08,0.12,0.15,0.17,0.17,0.17,0.18,0.2,0.22,0.25,0.26,0.26,0.26,0.27,0.29,0.32,0.33,0.33,0.31,0.29,0.28,0.26,0.25,0.24,0.22,0.19,0.16,0.14,0.12,0.1,0.09,0.08,0.08,0.08,0.06,0.03,-0.01,-0.04,-0.04,-0.02,0.0,0.01,0.0,-0.04,-0.08,-0.1,-0.09,-0.06,-0.02,0.0,0.01,0.0,-0.01,-0.01,0.0,0.0,-0.01,-0.02,-0.04,-0.04,-0.03,-0.01,0.0,-0.01,-0.03,-0.05,-0.05,-0.04,-0.01,0.01,0.01,-0.01,-0.03,-0.04,-0.04,-0.02,0.0,0.01,0.01,0.0,0.0,0.01,0.03,0.05,0.06,0.06,0.05,0.05,0.04,0.04,0.05,0.05,0.03,0.0,-0.04,-0.06,-0.07,-0.06,-0.05,-0.05,-0.05,-0.06,-0.06,-0.06,-0.06,-0.08,-0.11,-0.13,-0.15,-0.14,-0.12,-0.1,-0.1,-0.1,-0.08,-0.02,0.1,0.22,0.3,0.29,0.19,0.03,-0.14,-0.28,-0.39,-0.46,-0.52,-0.55,-0.53,-0.45,-0.33,-0.19,-0.1,-0.06,-0.06,-0.09,-0.1,-0.09,-0.06,-0.03,-0.01,0.0,0.01,0.03,0.05,0.08,0.1,0.11,0.12,0.12,0.12,0.12,0.12,0.13,0.16,0.19,0.22,0.24,0.25,0.26,0.28,0.31,0.36,0.4,0.43,0.46,0.48,0.5,0.53,0.54,0.54,0.53,0.52,0.53,0.54,0.56,0.56,0.53,0.48,0.42,0.38,0.34,0.31,0.28,0.23,0.19,0.14,0.11,0.08,0.05,0.03,0.02,0.01,0.0,0.0,-0.02,-0.04,-0.07,-0.09,-0.09,-0.08,-0.05,-0.02,0.0,0.0,-0.01,-0.02,-0.03,-0.04,-0.04,-0.04,-0.04,-0.04,-0.04,-0.03,-0.03,-0.03,-0.04,-0.03,-0.02,-0.01,-0.01,-0.01,-0.02,-0.04,-0.04,-0.04,-0.03,-0.01,0.0,0.0,0.0,0.0,0.01,0.01,0.02,0.02,0.03,0.04,0.04,0.05,0.05,0.05,0.04,0.04,0.05,0.05,0.05,0.03,0.02,0.0,-0.02,-0.03,-0.04,-0.06,-0.08,-0.09,-0.1,-0.09,-0.09,-0.09,-0.1,-0.13,-0.15,-0.15,-0.12,-0.09,-0.06,-0.04,-0.04,-0.02,0.05,0.14,0.23,0.27,0.23,0.1,-0.07,-0.24,-0.38,-0.49,-0.55,-0.58,-0.57,-0.5,-0.38,-0.25,-0.16,-0.11,-0.1,-0.11,-0.1,-0.08,-0.04,-0.01,0.0,0.01,0.01,0.03,0.04,0.05,0.06,0.06,0.06,0.06,0.06,0.08,0.1,0.12,0.13,0.15,0.16,0.19,0.23,0.27,0.32,0.35,0.38,0.4,0.43,0.46,0.5,0.53,0.54,0.54,0.54,0.54,0.55,0.55,0.54,0.52,0.5,0.47,0.45,0.44,0.42,0.39,0.35,0.3,0.26,0.21,0.17,0.13,0.09,0.07,0.05,0.04,0.03,0.02,0.01,0.0,-0.02,-0.04,-0.05,-0.06,-0.05,-0.03,-0.01,0.01,0.0,-0.01,-0.03,-0.04,-0.04,-0.02,0.0,0.01,0.01,0.0,-0.01,-0.02,-0.02,-0.01,0.0,0.0,0.0,0.0,-0.01,-0.01,-0.01,-0.02,-0.03,-0.03,-0.03,-0.02,-0.01,0.0,-0.01,-0.02,-0.04,-0.04,-0.04,-0.04,-0.03,-0.02,-0.01,-0.01,0.0,0.01,0.02,0.03,0.04,0.06,0.06,0.06,0.05,0.04,0.01,-0.01,-0.02,-0.04,-0.05,-0.06,-0.08,-0.1,-0.11,-0.12,-0.11,-0.1,-0.1,-0.1,-0.12,-0.14,-0.15,-0.15,-0.14,-0.14,-0.14,-0.13,-0.1,-0.02,0.09,0.21,0.29,0.29,0.21,0.07,-0.1,-0.25,-0.37,-0.47,-0.54,-0.58,-0.57,-0.51,-0.39,-0.26,-0.15,-0.07,-0.04,-0.03,-0.02,-0.02,-0.01,-0.01,-0.01,-0.02,-0.01,0.0,0.01,0.03,0.04,0.05,0.06,0.06,0.08,0.1,0.12,0.14,0.15,0.16,0.17,0.19,0.22,0.24,0.27,0.3,0.34,0.38,0.42,0.46,0.48,0.5,0.51,0.51,0.51,0.5,0.49,0.47,0.46,0.45,0.45,0.45,0.44,0.42,0.39,0.35,0.31,0.28,0.25,0.22,0.18,0.14,0.09,0.05,0.02,0.01,0.01,0.0,-0.01,-0.02,-0.03,-0.05,-0.05,-0.05,-0.05,-0.05,-0.05,-0.04,-0.02,0.0,0.01,0.01,0.01,-0.01,-0.03,-0.04,-0.04,-0.03,-0.02,-0.01,0.0,0.0,0.0,-0.01,-0.01,-0.02,-0.01,-0.01,0.0,0.01,0.01,-0.01,-0.03,-0.05,-0.05,-0.04,-0.03,-0.01,-0.01,-0.01,-0.02,-0.03,-0.02,-0.01,-0.01,0.0,0.0,-0.01,0.0,0.01,0.03,0.05,0.07,0.07,0.06,0.05,0.04,0.03,0.02,0.01,0.0,-0.03,-0.04,-0.06,-0.06,-0.06,-0.07,-0.1,-0.13,-0.15,-0.15,-0.13,-0.1,-0.09,-0.08,-0.09,-0.1,-0.1,-0.08,-0.04,0.02,0.09,0.18,0.25,0.27,0.23,0.13,0.0,-0.15,-0.27,-0.37,-0.43,-0.47,-0.47,-0.42,-0.32,-0.21,-0.11,-0.04,-0.02,-0.03,-0.04,-0.04,-0.03,-0.01,0.0,0.0,0.0,0.0,0.0,0.01,0.02,0.03,0.04,0.05,0.07,0.09,0.11,0.13,0.14,0.14,0.15,0.17,";
	    String ss=zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz;
		String[] datas=ss.split(",");
	    for (int i=0;i<datas.length;i++){
	    	
	    	list.add(datas[i]);
	    }
		
	    return list;
	}
	
	public static List getList1(){
		List list=new ArrayList();
		String zz="0.27,0.3,0.33,0.36,0.38,0.39,0.4,0.4,0.4,0.4,0.39,0.38,0.36,0.34,0.32,0.31,0.31,0.3,0.29,0.27,0.24,0.2,0.17,0.14,0.12,0.1,0.07,0.04,0.01,-0.01,-0.02,-0.02,-0.03,-0.03,-0.05,-0.07,-0.08,-0.09,-0.08,-0.05,-0.03,-0.03,-0.03,-0.05,-0.06,-0.06,-0.04,-0.03,-0.02,-0.02,-0.02,-0.03,-0.02,-0.02,-0.02,-0.02,-0.03,-0.03,-0.04,-0.03,-0.03,-0.03,-0.03,-0.03,-0.02,0.0,0.02,0.03,0.04,0.04,0.04,0.05,0.06,0.07,0.08,0.08,0.07,0.05,0.04,0.03,0.02,0.0,-0.02,-0.03,-0.05,-0.06,-0.06,-0.06,-0.06,-0.07,-0.07,-0.07,-0.08,-0.09,-0.09,-0.09,-0.09,-0.08,-0.08,-0.09,-0.1,-0.1,-0.06,0.03,0.14,0.23,0.26,0.2,0.07,-0.09,-0.24,-0.35,-0.42,-0.46,-0.49,-0.49,-0.45,-0.36,-0.25,-0.15,-0.07,-0.04,-0.03,-0.04,-0.04,-0.03,-0.03,-0.03,-0.03,-0.02,0.0,0.02,0.03,0.05,0.05,0.06,0.07,0.07,0.08,0.1,0.12,0.15,0.17,0.19,0.2,0.21,0.22,0.24,0.27,0.31,0.35,0.38,0.41,0.42,0.43,0.45,0.46,0.47,0.47,0.46,0.44,0.42,0.41,0.4,0.4,0.39,0.38,0.35,0.31,0.27,0.23,0.19,0.16,0.13,0.12,0.1,0.09,0.07,0.04,0.01,-0.01,-0.02,-0.03,-0.03,-0.02,-0.02,-0.02,-0.02,-0.03,-0.05,-0.06,-0.06,-0.05,-0.04,-0.04,-0.03,-0.04,-0.04,-0.04,-0.04,-0.03,-0.03,-0.02,-0.01,0.0,0.0,0.0,-0.01,-0.02,-0.03,-0.03,-0.03,-0.02,-0.02,-0.02,-0.01,0.0,0.02,0.05,0.07,0.08,0.08,0.07,0.06,0.06,0.05,0.05,0.05,0.04,0.02,-0.01,-0.04,-0.07,-0.09,-0.1,-0.1,-0.1,-0.09,-0.09,-0.09,-0.09,-0.09,-0.09,-0.09,-0.1,-0.11,-0.12,-0.12,-0.12,-0.09,-0.04,0.04,0.14,0.21,0.23,0.17,0.05,-0.1,-0.23,-0.35,-0.43,-0.49,-0.51,-0.49,-0.41,-0.28,-0.16,-0.07,-0.04,-0.04,-0.06,-0.07,-0.05,-0.03,-0.01,0.0,0.0,-0.01,-0.01,0.01,0.03,0.05,0.06,0.07,0.07,0.08,0.09,0.11,0.14,0.18,0.21,0.24,0.26,0.27,0.28,0.27,0.28,0.3,0.34,0.41,0.47,0.51,0.52,0.51,0.5,0.49,0.5,0.5,0.5,0.49,0.47,0.45,0.42,0.4,0.36,0.33,0.29,0.27,0.24,0.22,0.19,0.16,0.12,0.09,0.07,0.04,0.02,-0.01,-0.03,-0.04,-0.04,-0.04,-0.02,-0.02,-0.02,-0.02,-0.03,-0.04,-0.05,-0.05,-0.06,-0.05,-0.04,-0.02,-0.01,-0.01,-0.02,-0.03,-0.04,-0.03,-0.03,-0.02,-0.02,-0.02,-0.03,-0.04,-0.03,-0.02,-0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.04,0.05,0.07,0.09,0.09,0.07,0.04,0.01,-0.01,-0.02,-0.03,-0.02,-0.03,-0.04,-0.06,-0.08,-0.1,-0.11,-0.12,-0.12,-0.11,-0.11,-0.11,-0.12,-0.13,-0.14,-0.15,-0.14,-0.11,-0.04,0.05,0.15,0.21,0.22,0.15,0.03,-0.1,-0.23,-0.34,-0.42,-0.49,-0.53,-0.53,-0.48,-0.37,-0.24,-0.13,-0.07,-0.05,-0.05,-0.04,-0.02,0.0,0.01,0.01,0.0,-0.01,-0.01,0.0,0.02,0.04,0.05,0.06,0.06,0.05,0.06,0.07,0.1,0.13,0.16,0.19,0.21,0.23,0.27,0.31,0.35,0.39,0.42,0.44,0.45,0.47,0.49,0.5,0.51,0.52,0.52,0.5,0.48,0.45,0.43,0.42,0.41,0.4,0.38,0.34,0.3,0.27,0.25,0.23,0.21,0.18,0.14,0.1,0.06,0.04,0.02,0.0,-0.03,-0.05,-0.07,-0.08,-0.08,-0.06,-0.04,-0.03,-0.03,-0.04,-0.05,-0.06,-0.05,-0.04,-0.02,-0.01,-0.01,-0.02,-0.02,-0.03,-0.02,-0.02,-0.02,-0.03,-0.04,-0.04,-0.03,-0.02,-0.02,-0.01,-0.01,-0.01,-0.01,-0.01,0.01,0.02,0.02,0.02,0.03,0.03,0.04,0.05,0.06,0.06,0.06,0.05,0.05,0.06,0.05,0.04,0.01,-0.02,-0.04,-0.06,-0.08,-0.09,-0.1,-0.11,-0.11,-0.11,-0.11,-0.12,-0.13,-0.15,-0.14,-0.12,-0.09,-0.07,-0.06,-0.05,-0.03,0.02,0.1,0.17,0.19,0.14,0.03,-0.12,-0.26,-0.39,-0.49,-0.56,-0.58,-0.53,-0.42,-0.28,-0.15,-0.07,-0.03,-0.03,-0.03,-0.03,-0.02,-0.02,-0.02,-0.02,-0.02,0.0,0.02,0.04,0.04,0.03,0.03,0.04,0.07,0.09,0.12,0.12,0.13,0.13,0.14,0.18,0.22,0.27,0.31,0.35,0.37,0.39,0.41,0.43,0.45,0.47,0.5,0.51,0.52,0.52,0.51,0.5,0.49,0.49,0.48,0.47,0.43,0.39,0.35,0.31,0.29,0.28,0.27,0.25,0.22,0.17,0.13,0.1,0.07,0.04,0.02,0.0,-0.02,-0.02,-0.02,-0.02,-0.02,-0.02,-0.02,-0.03,-0.03,-0.04,-0.04,-0.05,-0.06,-0.05,-0.03,-0.01,0.01,0.01,0.01,-0.01,-0.02,-0.02,-0.02,-0.03,-0.04,-0.05,-0.06,-0.06,-0.05,-0.04,-0.02,0.0,0.01,0.01,0.01,0.0,-0.01,-0.01,-0.01,0.02,0.05,0.07,0.09,0.08,0.07,0.06,0.05,0.05,0.05,0.03,0.0,-0.04,-0.08,-0.09,-0.09,-0.08,-0.06,-0.06,-0.08,-0.11,-0.12,-0.13,-0.12,-0.11,-0.1,-0.1,-0.11,-0.12,-0.13,-0.13,-0.12,-0.08,0.0,0.1,0.19,0.24,0.22,0.13,-0.02,-0.19,-0.33,-0.45,-0.53,-0.58,-0.57,-0.5,-0.38,-0.24,-0.12,-0.06,-0.05,-0.08,-0.11,-0.12,-0.1,-0.07,-0.04,-0.02,-0.01,0.0,0.01,0.02,0.03,0.04,0.05,0.05,0.06,0.08,0.1,0.14,0.17,0.2,0.22,0.23,0.24,0.25,0.26,0.27,0.3,0.33,0.38,0.43,0.47,0.5,0.51,0.51,0.51,0.5,0.5,0.5,0.5,0.48,0.47,0.45,0.42,0.37,0.32,0.27,0.23,0.2,0.19,0.18,0.16,0.13,0.1,0.07,0.05,0.04,0.02,0.0,-0.02,-0.05,-0.07,-0.08,-0.07,-0.06,-0.05,-0.05,-0.05,-0.06,-0.06,-0.07,-0.07,-0.07,-0.05,-0.04,-0.03,-0.03,-0.03,-0.03,-0.03,-0.02,-0.01,0.0,0.01,0.01,0.01,0.0,-0.01,-0.02,-0.03,-0.04,-0.05,-0.05,-0.04,-0.03,0.0,0.03,0.05,0.06,0.06,0.05,0.05,0.06,0.07,0.07,0.08,0.07,0.05,0.03,0.01,-0.02,-0.04,-0.05,-0.07,-0.07,-0.08,-0.09,-0.1,-0.11,-0.12,-0.13,-0.13,-0.14,-0.13,-0.13,-0.11,-0.1,-0.1,-0.11,-0.12,-0.1,-0.04,0.06,0.18,0.25,0.25,0.17,0.03,-0.12,-0.26,-0.38,-0.48,-0.55,-0.59,-0.56,-0.46,-0.32,-0.19,-0.09,-0.04,-0.04,-0.05,-0.06,-0.06,-0.05,-0.05,-0.04,-0.03,-0.01,0.01,0.03,0.04,0.05,0.05,0.06,0.07,0.09,0.11,0.14,0.17,0.19,0.21,0.23,0.25,0.27,0.29,0.32,0.34,0.37,0.41,0.45,0.48,0.51,0.51,0.51,0.51,0.51,0.51,0.51,0.5,0.47,0.45,0.42,0.4,0.38,0.37,0.35,0.31,0.27,0.23,0.2,0.17,0.16,0.14,0.12,0.09,0.06,0.03,0.01,-0.01,-0.02,-0.03,-0.03,-0.03,-0.03,-0.03,-0.03,-0.03,-0.03,-0.02,-0.03,-0.04,-0.05,-0.07,-0.08,-0.07,-0.05,-0.03,-0.02,-0.02,-0.02,-0.03,-0.04,-0.05,-0.05,-0.05,-0.04,-0.03,-0.01,0.0,-0.01,-0.02,-0.04,-0.05,-0.04,-0.02,0.01,0.04,0.06,0.06,0.07,0.07,0.06,0.06,0.05,0.04,0.03,0.02,0.01,0.01,-0.01,-0.03,-0.05,-0.08,-0.1,-0.11,-0.11,-0.1,-0.08,-0.08,-0.09,-0.12,-0.14,-0.14,-0.13,-0.1,-0.07,-0.04,-0.03,0.0,0.05,0.14,0.28,0.42,0.53,0.58,0.54,0.42,0.26,0.08,-0.08,-0.22,-0.33,-0.38,-0.38,-0.33,-0.25,-0.17,-0.11,-0.07,-0.05,-0.04,-0.04,-0.05,-0.06,-0.06,-0.05,-0.03,-0.02,-0.01,-0.01,-0.01,-0.02,0.0,0.02,0.04,0.06,0.07,0.07,0.07,0.09,0.11,0.13,0.16,0.17,0.19,0.2,0.21,0.22,0.24,0.25,0.26,0.27,0.27,0.27,0.27,0.27,0.27,0.27,0.26,0.24,0.22,0.19,0.17,0.15,0.15,0.14,0.14,0.13,0.11,0.09,0.06,0.04,0.02,0.01,0.01,0.0,-0.01,-0.03,-0.04,-0.05,-0.06,-0.06,-0.06,-0.06,-0.06,-0.06,-0.06,-0.06,-0.05,-0.03,-0.01,-0.01,-0.02,-0.04,-0.07,-0.09,-0.09,-0.07,-0.05,-0.03,-0.01,-0.01,-0.02,-0.03,-0.04,-0.04,-0.04,-0.04,-0.04,-0.04,-0.05,-0.05,-0.05,-0.03,0.0,0.03,0.04,0.05,0.05,0.04,0.03,0.03,0.02,0.03,0.05,0.06,0.07,0.07,0.06,0.04,0.03,0.01,-0.01,-0.03,-0.05,-0.07,-0.07,-0.07,-0.07,-0.07,-0.07,-0.08,-0.08,-0.08,-0.07,-0.05,-0.04,-0.03,-0.03,0.0,0.06,0.18,0.32,0.46,0.54,0.56,0.49,0.36,0.21,0.05,-0.1,-0.22,-0.31,-0.35,-0.33,-0.26,-0.19,-0.12,-0.09,-0.07,-0.06,-0.05,-0.05,-0.04,-0.05,-0.05,-0.05,-0.03,-0.01,0.01,0.03,0.05,0.06,0.06,0.05,0.04,0.03,0.03,0.05,0.08,0.12,0.15,0.17,0.17,0.17,0.18,0.2,0.22,0.25,0.26,0.26,0.26,0.27,0.29,0.32,0.33,0.33,0.31,0.29,0.28,0.26,0.25,0.24,0.22,0.19,0.16,0.14,0.12,0.1,0.09,0.08,0.08,0.08,0.06,0.03,-0.01,-0.04,-0.04,-0.02,0.0,0.01,0.0,-0.04,-0.08,-0.1,-0.09,-0.06,-0.02,0.0,0.01,0.0,-0.01,-0.01,0.0,0.0,-0.01,-0.02,-0.04,-0.04,-0.03,-0.01,0.0,-0.01,-0.03,-0.05,-0.05,-0.04,-0.01,0.01,0.01,-0.01,-0.03,-0.04,-0.04,-0.02,0.0,0.01,0.01,0.0,0.0,0.01,0.03,0.05,0.06,0.06,0.05,0.05,0.04,0.04,0.05,0.05,0.03,0.0,-0.04,-0.06,-0.07,-0.06,-0.05,-0.05,-0.05,-0.06,-0.06,-0.06,-0.06,-0.08,-0.11,-0.13,-0.15,-0.14,-0.12,-0.1,-0.1,-0.1,-0.08,-0.02,0.1,0.22,0.3,0.29,0.19,0.03,-0.14,-0.28,-0.39,-0.46,-0.52,-0.55,-0.53,-0.45,-0.33,-0.19,-0.1,-0.06,-0.06,-0.09,-0.1,-0.09,-0.06,-0.03,-0.01,0.0,0.01,0.03,0.05,0.08,0.1,0.11,0.12,0.12,0.12,0.12,0.12,0.13,0.16,0.19,0.22,0.24,0.25,0.26,0.28,0.31,0.36,0.4,0.43,0.46,0.48,0.5,0.53,0.54,0.54,0.53,0.52,0.53,0.54,0.56,0.56,0.53,0.48,0.42,0.38,0.34,0.31,0.28,0.23,0.19,0.14,0.11,0.08,0.05,0.03,0.02,0.01,0.0,0.0,-0.02,-0.04,-0.07,-0.09,-0.09,-0.08,-0.05,-0.02,0.0,0.0,-0.01,-0.02,-0.03,-0.04,-0.04,-0.04,-0.04,-0.04,-0.04,-0.03,-0.03,-0.03,-0.04,-0.03,-0.02,-0.01,-0.01,-0.01,-0.02,-0.04,-0.04,-0.04,-0.03,-0.01,0.0,0.0,0.0,0.0,0.01,0.01,0.02,0.02,0.03,0.04,0.04,0.05,0.05,0.05,0.04,0.04,0.05,0.05,0.05,0.03,0.02,0.0,-0.02,-0.03,-0.04,-0.06,-0.08,-0.09,-0.1,-0.09,-0.09,-0.09,-0.1,-0.13,-0.15,-0.15,-0.12,-0.09,-0.06,-0.04,-0.04,-0.02,0.05,0.14,0.23,0.27,0.23,0.1,-0.07,-0.24,-0.38,-0.49,-0.55,-0.58,-0.57,-0.5,-0.38,-0.25,-0.16,-0.11,-0.1,-0.11,-0.1,-0.08,-0.04,-0.01,0.0,0.01,0.01,0.03,0.04,0.05,0.06,0.06,0.06,0.06,0.06,0.08,0.1,0.12,0.13,0.15,0.16,0.19,0.23,0.27,0.32,0.35,0.38,0.4,0.43,0.46,0.5,0.53,0.54,0.54,0.54,0.54,0.55,0.55,0.54,0.52,0.5,0.47,0.45,0.44,0.42,0.39,0.35,0.3,0.26,0.21,0.17,0.13,0.09,0.07,0.05,0.04,0.03,0.02,0.01,0.0,-0.02,-0.04,-0.05,-0.06,-0.05,-0.03,-0.01,0.01,0.0,-0.01,-0.03,-0.04,-0.04,-0.02,0.0,0.01,0.01,0.0,-0.01,-0.02,-0.02,-0.01,0.0,0.0,0.0,0.0,-0.01,-0.01,-0.01,-0.02,-0.03,-0.03,-0.03,-0.02,-0.01,0.0,-0.01,-0.02,-0.04,-0.04,-0.04,-0.04,-0.03,-0.02,-0.01,-0.01,0.0,0.01,0.02,0.03,0.04,0.06,0.06,0.06,0.05,0.04,0.01,-0.01,-0.02,-0.04,-0.05,-0.06,-0.08,-0.1,-0.11,-0.12,-0.11,-0.1,-0.1,-0.1,-0.12,-0.14,-0.15,-0.15,-0.14,-0.14,-0.14,-0.13,-0.1,-0.02,0.09,0.21,0.29,0.29,0.21,0.07,-0.1,-0.25,-0.37,-0.47,-0.54,-0.58,-0.57,-0.51,-0.39,-0.26,-0.15,-0.07,-0.04,-0.03,-0.02,-0.02,-0.01,-0.01,-0.01,-0.02,-0.01,0.0,0.01,0.03,0.04,0.05,0.06,0.06,0.08,0.1,0.12,0.14,0.15,0.16,0.17,0.19,0.22,0.24,0.27,0.3,0.34,0.38,0.42,0.46,0.48,0.5,0.51,0.51,0.51,0.5,0.49,0.47,0.46,0.45,0.45,0.45,0.44,0.42,0.39,0.35,0.31,0.28,0.25,0.22,0.18,0.14,0.09,0.05,0.02,0.01,0.01,0.0,-0.01,-0.02,-0.03,-0.05,-0.05,-0.05,-0.05,-0.05,-0.05,-0.04,-0.02,0.0,0.01,0.01,0.01,-0.01,-0.03,-0.04,-0.04,-0.03,-0.02,-0.01,0.0,0.0,0.0,-0.01,-0.01,-0.02,-0.01,-0.01,0.0,0.01,0.01,-0.01,-0.03,-0.05,-0.05,-0.04,-0.03,-0.01,-0.01,-0.01,-0.02,-0.03,-0.02,-0.01,-0.01,0.0,0.0,-0.01,0.0,0.01,0.03,0.05,0.07,0.07,0.06,0.05,0.04,0.03,0.02,0.01,0.0,-0.03,-0.04,-0.06,-0.06,-0.06,-0.07,-0.1,-0.13,-0.15,-0.15,-0.13,-0.1,-0.09,-0.08,-0.09,-0.1,-0.1,-0.08,-0.04,0.02,0.09,0.18,0.25,0.27,0.23,0.13,0.0,-0.15,-0.27,-0.37,-0.43,-0.47,-0.47,-0.42,-0.32,-0.21,-0.11,-0.04,-0.02,-0.03,-0.04,-0.04,-0.03,-0.01,0.0,0.0,0.0,0.0,0.0,0.01,0.02,0.03,0.04,0.05,0.07,0.09,0.11,0.13,0.14,0.14,0.15,0.17,";
	    String ss=zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz+zz;
		String[] datas=ss.split(",");
	    for (int i=0;i<datas.length;i++){
	    	
	    	list.add(datas[i]);
	    }
	    return list;
	}
	
	
	public static Map getRateData(){
		Map map=new HashMap();
		List datas=new ArrayList();
		for (int i=0;i<8;i++){
			datas.add("11/1"+(i));
			
		}
		map.put("dates", datas);
		List rates=new ArrayList();
		for (int j=0;j<3;j++){
			RateData rate=new RateData();
			rate.setRateIndex(60+j*60);
			rate.setMax(130);
			rate.setMin(40);
			rate.setAvg(80);
			rate.setDay(j);
			rates.add(rate);
		}
		map.put("rateList", rates);
		
//		map.put("beginIndex",720);
//		map.put("endIndex", 8640);//每个表格的分钟索引
		return map;
		
	}
	public static Map getRateData1(){
		Map map=new HashMap();
		List datas=new ArrayList();
		for (int i=0;i<8;i++){
			datas.add("10/1"+(i));
			
		}
		map.put("dates", datas);
		List rates=new ArrayList();
		for (int j=0;j<2;j++){
			RateData rate=new RateData();
			rate.setRateIndex(480+j*10);
			rate.setMax(260);
			rate.setMin(40);
			rate.setAvg(80);
			rate.setDay(j);
			rates.add(rate);
		}
		map.put("rateList", rates);
		
//		map.put("beginIndex",40);
//		map.put("endIndex", 8640);//每个表格的分钟索引
		return map;
		
	}
	
	public static List getAnnoList(){
		List annoList=new ArrayList();
		Object[] anno=new Object[]{130,'N',0,0};
		Object[] anno1=new Object[]{230,'S',670,45};
		Object[] anno2=new Object[]{340,'V',600,70};
		Object[] anno3=new Object[]{430,'N',620,72};
		Object[] anno4=new Object[]{780,'S',1000,33};
		Object[] anno5=new Object[]{780+2500,'S',1000,33};
		Object[] anno6=new Object[]{980+2500,'S',1000,33};
		Object[] anno7=new Object[]{780+5000,'S',1000,33};
		Object[] anno8=new Object[]{880+5000,'S',1000,33};
		annoList.add(anno);
		annoList.add(anno1);
		annoList.add(anno2);
		annoList.add(anno3);
		annoList.add(anno4);
		annoList.add(anno5);
		annoList.add(anno6);
		annoList.add(anno7);
		annoList.add(anno8);
		return annoList;
	}
}
