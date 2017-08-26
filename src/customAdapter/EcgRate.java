package customAdapter;

public class EcgRate {
	private int index;
	private int min;
	private int max;
	private int avg;
	private int sve;
	private int ve;
	
	
	
	public EcgRate(int index,int min, int max, int avg, int sve, int ve) {
		super();
		this.index=index;
		this.min = min;
		this.max = max;
		this.avg = avg;
		this.sve = sve;
		this.ve = ve;
	}
	
	public int getMin() {
		return min;
	}
	public void setMin(int min) {
		this.min = min;
	}
	public int getMax() {
		return max;
	}
	public void setMax(int max) {
		this.max = max;
	}
	public int getAvg() {
		return avg;
	}
	public void setAvg(int avg) {
		this.avg = avg;
	}
	public int getSve() {
		return sve;
	}
	public void setSve(int sve) {
		this.sve = sve;
	}
	public int getVe() {
		return ve;
	}
	public void setVe(int ve) {
		this.ve = ve;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}
	
	
}
