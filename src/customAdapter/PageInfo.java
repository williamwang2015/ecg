package customAdapter;

import java.util.List;

public class PageInfo {
	private String pageName;
	private int pageNum;
	private List<PageInfo> subList;
	
	public PageInfo(){
		
	}
	public PageInfo(String pageName, int pageNum) {
		super();
		this.pageName = pageName;
		this.pageNum = pageNum;
	}
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public String getPageName() {
		return pageName;
	}
	public void setPageName(String pageName) {
		this.pageName = pageName;
	}
	public List<PageInfo> getSubList() {
		return subList;
	}
	public void setSubList(List<PageInfo> subList) {
		this.subList = subList;
	}
	
	
	
}
