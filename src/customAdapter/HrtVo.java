package customAdapter;

import java.util.List;

public class HrtVo {
	private List datas;//点多个,最后一条为平均值
	private int pos;//数组中的值与坐标轴偏移多少 
	public List getDatas() {
		return datas;
	}
	public void setDatas(List datas) {
		this.datas = datas;
	}
	public int getPos() {
		return pos;
	}
	public void setPos(int pos) {
		this.pos = pos;
	}
	
	
	
}
