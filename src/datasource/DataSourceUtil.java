package datasource;

import customAdapter.RrFactory;
import customAdapter.RrHourFactory;
import customAdapter.RrLorenzFactory;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

public class DataSourceUtil {
	public static JRBeanCollectionDataSource createHourDataSource(){
		return new JRBeanCollectionDataSource(RrHourFactory.getList());
	}
	public static JRBeanCollectionDataSource createLorenzDataSource(){
		return new JRBeanCollectionDataSource(RrLorenzFactory.getList());
	}
	
	public static JRBeanCollectionDataSource createHourDataSource1(){
		return new JRBeanCollectionDataSource(RrFactory.getRrHouse());
	}
}
