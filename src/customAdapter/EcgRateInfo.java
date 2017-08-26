package customAdapter;

import java.util.List;

public class EcgRateInfo  {
	private int beginIndex;//分钟索引48小时内
	private int endIndex;////分钟索引48小时内
	private String date1;
	private String date2;
	private String days;
	private int maxSve;//房早 最大值
	private int maxVe;//室早 最大值
	private int maxRt;//RT 最大值
	private List events;
	
	private List rateList;
	
	private List eventList;

	
	public String getDate1() {
		return date1;
	}

	public void setDate1(String date1) {
		this.date1 = date1;
	}

	public String getDate2() {
		return date2;
	}

	public void setDate2(String date2) {
		this.date2 = date2;
	}

	public String getDays() {
		return days;
	}

	public void setDays(String days) {
		this.days = days;
	}

	

	public List getEvents() {
		return events;
	}

	public void setEvents(List events) {
		this.events = events;
	}

	public List getRateList() {
		return rateList;
	}

	public void setRateList(List rateList) {
		this.rateList = rateList;
	}

	public List getEventList() {
		return eventList;
	}

	public void setEventList(List eventList) {
		this.eventList = eventList;
	}

	public int getBeginIndex() {
		return beginIndex;
	}

	public void setBeginIndex(int beginIndex) {
		this.beginIndex = beginIndex;
	}

	public int getEndIndex() {
		return endIndex;
	}

	public void setEndIndex(int endIndex) {
		this.endIndex = endIndex;
	}

	public int getMaxSve() {
		return maxSve;
	}

	public void setMaxSve(int maxSve) {
		this.maxSve = maxSve;
	}

	public int getMaxVe() {
		return maxVe;
	}

	public void setMaxVe(int maxVe) {
		this.maxVe = maxVe;
	}

	public int getMaxRt() {
		return maxRt;
	}

	public void setMaxRt(int maxRt) {
		this.maxRt = maxRt;
	}
	
	
	
}
