package customAdapter;

import java.util.List;
import java.util.Map;

public class ReportDetail {
	//循环显示的片段信息
	private List details;
	//报告上方的图表信息1
	private Map rateData1;
	//报告上方的图表信息2
	private Map rateData2;
	
	private List hrtList;
	
	private int offset; 
	
    private List avgList;
	
	private int avgStart;
	
	//y轴范围
	private int minRr;
	private int maxRr;
	
	
	
	
	public List getDetails() {
		return details;
	}
	public void setDetails(List details) {
		this.details = details;
	}
	public Map getRateData1() {
		return rateData1;
	}
	public void setRateData1(Map rateData1) {
		this.rateData1 = rateData1;
	}
	public Map getRateData2() {
		return rateData2;
	}
	public void setRateData2(Map rateData2) {
		this.rateData2 = rateData2;
	}
	public List getHrtList() {
		return hrtList;
	}
	public void setHrtList(List hrtList) {
		this.hrtList = hrtList;
	}
	public int getOffset() {
		return offset;
	}
	public void setOffset(int offset) {
		this.offset = offset;
	}
	public List getAvgList() {
		return avgList;
	}
	public void setAvgList(List avgList) {
		this.avgList = avgList;
	}
	public int getAvgStart() {
		return avgStart;
	}
	public void setAvgStart(int avgStart) {
		this.avgStart = avgStart;
	}
	public int getMinRr() {
		return minRr;
	}
	public void setMinRr(int minRr) {
		this.minRr = minRr;
	}
	public int getMaxRr() {
		return maxRr;
	}
	public void setMaxRr(int maxRr) {
		this.maxRr = maxRr;
	}
	
	
	

}
