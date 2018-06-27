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
	
	

}
