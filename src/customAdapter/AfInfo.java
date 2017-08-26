package customAdapter;

public class AfInfo {
	private int total;//总时长-分钟
	private int af;//af时长-分钟
	private String totalStr;//总时长描述
	private String unanaStr;//不可分析时长描述
	private String percent;//百分比 af在可分析时长百分比
	
	
	public AfInfo(int total, int af) {
		super();
		this.total = total;
		this.af = af;
	}
	
	public AfInfo(int total, int af, String hoursStr, String unanaStr, String percent) {
		super();
		this.total = total;
		this.af = af;
		this.totalStr = totalStr;
		this.unanaStr = unanaStr;
		this.percent = percent;
	}

	
	public int getAf() {
		return af;
	}
	public void setAf(int af) {
		this.af = af;
	}

	

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public String getTotalStr() {
		return totalStr;
	}

	public void setTotalStr(String totalStr) {
		this.totalStr = totalStr;
	}

	public String getUnanaStr() {
		return unanaStr;
	}

	public void setUnanaStr(String unanaStr) {
		this.unanaStr = unanaStr;
	}

	public String getPercent() {
		return percent;
	}

	public void setPercent(String percent) {
		this.percent = percent;
	}
	
	
}
