package customAdapter;

import java.util.List;
import java.util.Map;

public class VesInfo {
	private int isolatedNum1;//数量为0不绘制
	private int isolatedNum2;
	private int isolatedNum3;
	private List isolated1;
	private List isolated2;
	private List isolated3;
	
	private List couplet;
	private List triplet;
	private int coupletNum;
	private int tripletNum;
	
	private String coupletDate;
	private String coupletTime;
	private String tripletDate;
	private String tripletTime;
	
	public String getCoupletDate() {
		return coupletDate;
	}
	public void setCoupletDate(String coupletDate) {
		this.coupletDate = coupletDate;
	}
	public String getCoupletTime() {
		return coupletTime;
	}
	public void setCoupletTime(String coupletTime) {
		this.coupletTime = coupletTime;
	}
	public String getTripletDate() {
		return tripletDate;
	}
	public void setTripletDate(String tripletDate) {
		this.tripletDate = tripletDate;
	}
	public String getTripletTime() {
		return tripletTime;
	}
	public void setTripletTime(String tripletTime) {
		this.tripletTime = tripletTime;
	}
	private List details;//二联律
	
	
	
	
	private Map rateData1;
	private Map rateData2;
	
	
	public List getIsolated1() {
		return isolated1;
	}
	public void setIsolated1(List isolated1) {
		this.isolated1 = isolated1;
	}
	public List getIsolated2() {
		return isolated2;
	}
	public void setIsolated2(List isolated2) {
		this.isolated2 = isolated2;
	}
	public List getIsolated3() {
		return isolated3;
	}
	public void setIsolated3(List isolated3) {
		this.isolated3 = isolated3;
	}
	public List getCouplet() {
		return couplet;
	}
	public void setCouplet(List couplet) {
		this.couplet = couplet;
	}
	public List getTriplet() {
		return triplet;
	}
	public void setTriplet(List triplet) {
		this.triplet = triplet;
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

	public List getDetails() {
		return details;
	}
	public void setDetails(List details) {
		this.details = details;
	}
	public int getIsolatedNum1() {
		return isolatedNum1;
	}
	public void setIsolatedNum1(int isolatedNum1) {
		this.isolatedNum1 = isolatedNum1;
	}
	public int getIsolatedNum2() {
		return isolatedNum2;
	}
	public void setIsolatedNum2(int isolatedNum2) {
		this.isolatedNum2 = isolatedNum2;
	}
	public int getIsolatedNum3() {
		return isolatedNum3;
	}
	public void setIsolatedNum3(int isolatedNum3) {
		this.isolatedNum3 = isolatedNum3;
	}
	public int getCoupletNum() {
		return coupletNum;
	}
	public void setCoupletNum(int coupletNum) {
		this.coupletNum = coupletNum;
	}
	public int getTripletNum() {
		return tripletNum;
	}
	public void setTripletNum(int tripletNum) {
		this.tripletNum = tripletNum;
	}
	
	
	
}
