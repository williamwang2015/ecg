package customAdapter;

import java.util.List;
import java.util.Map;

public class EcgData {
	private List dataList;
	private List annoList;
	private Boolean markLine=true;
	private String eventDate;
	private String eventName;
	private String eventTime;
	private String beats;
	private String duration;
	private String average;
	private String range;
	private int nums;//几条制定秒数的图形
	private int seconds;//大图一条的秒数
	private int miniSeconds;//底部小图的秒数
	private boolean miniChat;//是否画小图
	private Map rateData1;
	private Map rateData2;
	
	private Boolean ptTriggerShow;
	private Boolean ptTrigger;
	private int index;
	
	
	
	public List getAnnoList() {
		return annoList;
	}
	public void setAnnoList(List annoList) {
		this.annoList = annoList;
	}
	public Boolean getMarkLine() {
		return markLine;
	}
	public void setMarkLine(Boolean markLine) {
		this.markLine = markLine;
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
	public List getDataList() {
		return dataList;
	}
	public void setDataList(List dataList) {
		this.dataList = dataList;
	}
	public String getEventDate() {
		return eventDate;
	}
	public void setEventDate(String eventDate) {
		this.eventDate = eventDate;
	}
	public String getEventName() {
		return eventName;
	}
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	public String getEventTime() {
		return eventTime;
	}
	public void setEventTime(String eventTime) {
		this.eventTime = eventTime;
	}
	public String getBeats() {
		return beats;
	}
	public void setBeats(String beats) {
		this.beats = beats;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getAverage() {
		return average;
	}
	public void setAverage(String average) {
		this.average = average;
	}
	public String getRange() {
		return range;
	}
	public void setRange(String range) {
		this.range = range;
	}
	public int getNums() {
		return nums;
	}
	public void setNums(int nums) {
		this.nums = nums;
	}
	public int getSeconds() {
		return seconds;
	}
	public void setSeconds(int seconds) {
		this.seconds = seconds;
	}
	public int getMiniSeconds() {
		return miniSeconds;
	}
	public void setMiniSeconds(int miniSeconds) {
		this.miniSeconds = miniSeconds;
	}
	public boolean isMiniChat() {
		return miniChat;
	}
	public void setMiniChat(boolean miniChat) {
		this.miniChat = miniChat;
	}
	public Boolean getPtTriggerShow() {
		return ptTriggerShow;
	}
	public void setPtTriggerShow(Boolean ptTriggerShow) {
		this.ptTriggerShow = ptTriggerShow;
	}
	public Boolean getPtTrigger() {
		return ptTrigger;
	}
	public void setPtTrigger(Boolean ptTrigger) {
		this.ptTrigger = ptTrigger;
	}
	public int getIndex() {
		return index;
	}
	public void setIndex(int index) {
		this.index = index;
	}
	
	
	
	
	
	
}
