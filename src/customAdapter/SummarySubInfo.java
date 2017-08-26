package customAdapter;

import java.util.List;

public class SummarySubInfo {
	private String name;
	private String title;
	private String titleDesc;
	private String titleInfo;
	private Boolean userEvent;
	private List lists;
	private Boolean showId;//显示用户事件选择按钮
	private Boolean labelShow;//显示用户事件标签标志
	
	private String eventDate;
	
	public SummarySubInfo(String name, String title, String titleDesc, String titleInfo, Boolean userEvent,
			List lists,Boolean showId,Boolean labelShow,String eventDate) {
		super();
		this.name = name;
		this.title = title;
		this.titleDesc = titleDesc;
		this.titleInfo = titleInfo;
		this.userEvent = userEvent;
		this.lists = lists;
		this.showId=showId;
		this.labelShow=labelShow;
		this.eventDate=eventDate;
	}
	
	public Boolean getLabelShow() {
		return labelShow;
	}

	public void setLabelShow(Boolean labelShow) {
		this.labelShow = labelShow;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getTitleDesc() {
		return titleDesc;
	}
	public void setTitleDesc(String titleDesc) {
		this.titleDesc = titleDesc;
	}
	public String getTitleInfo() {
		return titleInfo;
	}
	public void setTitleInfo(String titleInfo) {
		this.titleInfo = titleInfo;
	}
	public Boolean getUserEvent() {
		return userEvent;
	}
	public void setUserEvent(Boolean userEvent) {
		this.userEvent = userEvent;
	}
	public List getLists() {
		return lists;
	}
	public void setLists(List lists) {
		this.lists = lists;
	}

	public Boolean getShowId() {
		return showId;
	}

	public void setShowId(Boolean showId) {
		this.showId = showId;
	}

	public String getEventDate() {
		return eventDate;
	}

	public void setEventDate(String eventDate) {
		this.eventDate = eventDate;
	}
	
	
	
	
}
