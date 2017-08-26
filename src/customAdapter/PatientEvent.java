package customAdapter;

import java.util.List;

public class PatientEvent {
	private String eventDate;
	private String eventTime;
	private String eventName;
	private List eventList;
	
	
	public String getEventDate() {
		return eventDate;
	}
	public void setEventDate(String eventDate) {
		this.eventDate = eventDate;
	}
	public String getEventTime() {
		return eventTime;
	}
	public void setEventTime(String eventTime) {
		this.eventTime = eventTime;
	}
	public String getEventName() {
		return eventName;
	}
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	public List getEventList() {
		return eventList;
	}
	public void setEventList(List eventList) {
		this.eventList = eventList;
	}
	
	
	
}
