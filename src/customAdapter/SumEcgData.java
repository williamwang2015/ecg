package customAdapter;

import java.util.List;

public class SumEcgData {
	private String reportNo;//报告单号
	private String name;
	private String birthday;
	private String sex;
	private String patientId;
	private String indication;
	private String clinic;
	private String doctor;
	private String doctorTitle;
	private String recordTimes;//记录时长
	private String beginTime;//开始时间
	private String endTime;//结束时间
	private String analysisTimes;//分析时长
	private String maxRate;//最大心率
	private String maxRateTime;
	private String minRate;
	private String minRateTime;
	private String avgRate;
	private String sveIsolated;//单发-室上性异常
	private String sveIsolatedPercent;
	private String sveCouplet;//成对
	private String sveCoupletPercent;
	private String sveTriplet;//联发
	private String sveTripletPercent;
	private String sveCount;//总数
	private String sveLvbe;//二联律
	private String sveLvte;//三联律
	
	private String veIsolated;//单发-室性异常
	private String veIsolatedPercent;
	
	private String veCouplet;//成对
	private String veCoupletPercent;
	private String veTriplet;//联发
	private String veTripletPercent;
	private String veRont;//R onT
	private String veRontPercent;
	private String veCount;//总数
	private String veLvbe;//二联律
	private String veLvte;//三联律
	
	private String hrvSdnn;
	private String hrvSdnnIndex;
	private String hrvRmsdd;
	private String hrvPnn50;
	private String hrvTi;//三角指数
	private String hrvHf;
	private String hrvLf;
	private String hrvVlf;
	
	private String confirmDate;
	private String signUrl;
	private String confirmDoctor;
	public String getConfirmDoctor() {
		return confirmDoctor;
	}
	public void setConfirmDoctor(String confirmDoctor) {
		this.confirmDoctor = confirmDoctor;
	}
	public String getSignUrl() {
		return signUrl;
	}
	public void setSignUrl(String signUrl) {
		this.signUrl = signUrl;
	}
	private int beatNum;
	
	public int getBeatNum() {
		return beatNum;
	}
	public void setBeatNum(int beatNum) {
		this.beatNum = beatNum;
	}
	private String result;//自动分析结果
	private String doctorAdvice;//医生诊断
	
	private List<SummarySubInfo> lists;
	

	private Boolean veShow;
	private Boolean sveShow;
	
	
	public String getMaxRateTime() {
		return maxRateTime;
	}
	public void setMaxRateTime(String maxRateTime) {
		this.maxRateTime = maxRateTime;
	}
	public String getMinRateTime() {
		return minRateTime;
	}
	public void setMinRateTime(String minRateTime) {
		this.minRateTime = minRateTime;
	}
	public String getReportNo() {
		return reportNo;
	}
	public void setReportNo(String reportNo) {
		this.reportNo = reportNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getPatientId() {
		return patientId;
	}
	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}
	public String getIndication() {
		return indication;
	}
	public void setIndication(String indication) {
		this.indication = indication;
	}
	public String getClinic() {
		return clinic;
	}
	public void setClinic(String clinic) {
		this.clinic = clinic;
	}
	public String getDoctor() {
		return doctor;
	}
	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}
	public String getDoctorTitle() {
		return doctorTitle;
	}
	public void setDoctorTitle(String doctorTitle) {
		this.doctorTitle = doctorTitle;
	}
	public String getRecordTimes() {
		return recordTimes;
	}
	public void setRecordTimes(String recordTimes) {
		this.recordTimes = recordTimes;
	}
	public String getBeginTime() {
		return beginTime;
	}
	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public String getAnalysisTimes() {
		return analysisTimes;
	}
	public void setAnalysisTimes(String analysisTimes) {
		this.analysisTimes = analysisTimes;
	}
	public String getMaxRate() {
		return maxRate;
	}
	public void setMaxRate(String maxRate) {
		this.maxRate = maxRate;
	}
	public String getMinRate() {
		return minRate;
	}
	public void setMinRate(String minRate) {
		this.minRate = minRate;
	}
	public String getAvgRate() {
		return avgRate;
	}
	public void setAvgRate(String avgRate) {
		this.avgRate = avgRate;
	}
	public String getSveIsolated() {
		return sveIsolated;
	}
	public void setSveIsolated(String sveIsolated) {
		this.sveIsolated = sveIsolated;
	}
	public String getSveCouplet() {
		return sveCouplet;
	}
	public void setSveCouplet(String sveCouplet) {
		this.sveCouplet = sveCouplet;
	}
	public String getSveTriplet() {
		return sveTriplet;
	}
	public void setSveTriplet(String sveTriplet) {
		this.sveTriplet = sveTriplet;
	}
	public String getSveCount() {
		return sveCount;
	}
	public void setSveCount(String sveCount) {
		this.sveCount = sveCount;
	}
	public String getVeIsolated() {
		return veIsolated;
	}
	public void setVeIsolated(String veIsolated) {
		this.veIsolated = veIsolated;
	}
	public String getVeCouplet() {
		return veCouplet;
	}
	public void setVeCouplet(String veCouplet) {
		this.veCouplet = veCouplet;
	}
	public String getVeTriplet() {
		return veTriplet;
	}
	public void setVeTriplet(String veTriplet) {
		this.veTriplet = veTriplet;
	}
	public String getVeRont() {
		return veRont;
	}
	public void setVeRont(String veRont) {
		this.veRont = veRont;
	}
	public String getVeCount() {
		return veCount;
	}
	public void setVeCount(String veCount) {
		this.veCount = veCount;
	}
	public String getVeLvbe() {
		return veLvbe;
	}
	public void setVeLvbe(String veLvbe) {
		this.veLvbe = veLvbe;
	}
	public String getVeLvte() {
		return veLvte;
	}
	public void setVeLvte(String veLvte) {
		this.veLvte = veLvte;
	}
	public String getHrvSdnn() {
		return hrvSdnn;
	}
	public void setHrvSdnn(String hrvSdnn) {
		this.hrvSdnn = hrvSdnn;
	}
	public String getHrvSdnnIndex() {
		return hrvSdnnIndex;
	}
	public void setHrvSdnnIndex(String hrvSdnnIndex) {
		this.hrvSdnnIndex = hrvSdnnIndex;
	}
	public String getHrvRmsdd() {
		return hrvRmsdd;
	}
	public void setHrvRmsdd(String hrvRmsdd) {
		this.hrvRmsdd = hrvRmsdd;
	}
	public String getHrvPnn50() {
		return hrvPnn50;
	}
	public void setHrvPnn50(String hrvPnn50) {
		this.hrvPnn50 = hrvPnn50;
	}
	public String getHrvTi() {
		return hrvTi;
	}
	public void setHrvTi(String hrvTi) {
		this.hrvTi = hrvTi;
	}
	public String getHrvHf() {
		return hrvHf;
	}
	public void setHrvHf(String hrvHf) {
		this.hrvHf = hrvHf;
	}
	public String getHrvLf() {
		return hrvLf;
	}
	public void setHrvLf(String hrvLf) {
		this.hrvLf = hrvLf;
	}
	public String getHrvVlf() {
		return hrvVlf;
	}
	public void setHrvVlf(String hrvVlf) {
		this.hrvVlf = hrvVlf;
	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getDoctorAdvice() {
		return doctorAdvice;
	}
	public void setDoctorAdvice(String doctorAdvice) {
		this.doctorAdvice = doctorAdvice;
	}
	public List<SummarySubInfo> getLists() {
		return lists;
	}
	public void setLists(List<SummarySubInfo> lists) {
		this.lists = lists;
	}
	public Boolean getVeShow() {
		return veShow;
	}
	public void setVeShow(Boolean veShow) {
		this.veShow = veShow;
	}
	public Boolean getSveShow() {
		return sveShow;
	}
	public void setSveShow(Boolean sveShow) {
		this.sveShow = sveShow;
	}
	public String getSveIsolatedPercent() {
		return sveIsolatedPercent;
	}
	public void setSveIsolatedPercent(String sveIsolatedPercent) {
		this.sveIsolatedPercent = sveIsolatedPercent;
	}
	public String getSveCoupletPercent() {
		return sveCoupletPercent;
	}
	public void setSveCoupletPercent(String sveCoupletPercent) {
		this.sveCoupletPercent = sveCoupletPercent;
	}
	public String getSveTripletPercent() {
		return sveTripletPercent;
	}
	public void setSveTripletPercent(String sveTripletPercent) {
		this.sveTripletPercent = sveTripletPercent;
	}
	public String getVeIsolatedPercent() {
		return veIsolatedPercent;
	}
	public void setVeIsolatedPercent(String veIsolatedPercent) {
		this.veIsolatedPercent = veIsolatedPercent;
	}
	public String getVeCoupletPercent() {
		return veCoupletPercent;
	}
	public void setVeCoupletPercent(String veCoupletPercent) {
		this.veCoupletPercent = veCoupletPercent;
	}
	public String getVeTripletPercent() {
		return veTripletPercent;
	}
	public void setVeTripletPercent(String veTripletPercent) {
		this.veTripletPercent = veTripletPercent;
	}
	public String getVeRontPercent() {
		return veRontPercent;
	}
	public void setVeRontPercent(String veRontPercent) {
		this.veRontPercent = veRontPercent;
	}
	public String getConfirmDate() {
		return confirmDate;
	}
	public void setConfirmDate(String confirmDate) {
		this.confirmDate = confirmDate;
	}
	public String getSveLvbe() {
		return sveLvbe;
	}
	public void setSveLvbe(String sveLvbe) {
		this.sveLvbe = sveLvbe;
	}
	public String getSveLvte() {
		return sveLvte;
	}
	public void setSveLvte(String sveLvte) {
		this.sveLvte = sveLvte;
	}
	

	
	
	
}
