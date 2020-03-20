package customAdapter;

import java.util.List;
import java.util.Map;

public class VesInfo extends ReportDetail {
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
	
	private List isolatedAnno1;
	private List isolatedAnno2;
	private List isolatedAnno3;
	
	private List coupletAnno;
	private List tripletAnno;
	
	private boolean isolatedShow1=false;
	private boolean isolatedShow2=false;
	private boolean isolatedShow3=false;
	
	private int isolatedIndex;
	private int coupletIndex;
	private int tripletIndex;
	
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
	
	
	public int getIsolatedIndex() {
		return isolatedIndex;
	}
	public void setIsolatedIndex(int isolatedIndex) {
		this.isolatedIndex = isolatedIndex;
	}
	public int getCoupletIndex() {
		return coupletIndex;
	}
	public void setCoupletIndex(int coupletIndex) {
		this.coupletIndex = coupletIndex;
	}
	public int getTripletIndex() {
		return tripletIndex;
	}
	public void setTripletIndex(int tripletIndex) {
		this.tripletIndex = tripletIndex;
	}
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
	public List getIsolatedAnno1() {
		return isolatedAnno1;
	}
	public void setIsolatedAnno1(List isolatedAnno1) {
		this.isolatedAnno1 = isolatedAnno1;
	}
	public List getIsolatedAnno2() {
		return isolatedAnno2;
	}
	public void setIsolatedAnno2(List isolatedAnno2) {
		this.isolatedAnno2 = isolatedAnno2;
	}
	public List getIsolatedAnno3() {
		return isolatedAnno3;
	}
	public void setIsolatedAnno3(List isolatedAnno3) {
		this.isolatedAnno3 = isolatedAnno3;
	}
	public List getCoupletAnno() {
		return coupletAnno;
	}
	public void setCoupletAnno(List coupletAnno) {
		this.coupletAnno = coupletAnno;
	}
	public List getTripletAnno() {
		return tripletAnno;
	}
	public void setTripletAnno(List tripletAnno) {
		this.tripletAnno = tripletAnno;
	}
	public boolean isIsolatedShow1() {
		return isolatedShow1;
	}
	public void setIsolatedShow1(boolean isolatedShow1) {
		this.isolatedShow1 = isolatedShow1;
	}
	public boolean isIsolatedShow2() {
		return isolatedShow2;
	}
	public void setIsolatedShow2(boolean isolatedShow2) {
		this.isolatedShow2 = isolatedShow2;
	}
	public boolean isIsolatedShow3() {
		return isolatedShow3;
	}
	public void setIsolatedShow3(boolean isolatedShow3) {
		this.isolatedShow3 = isolatedShow3;
	}
	
	
	
}
