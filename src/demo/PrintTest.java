package demo;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import customAdapter.EcgDataFactory;
import customAdapter.OtherInfo;
import customAdapter.OtherInfoFactory;
import customAdapter.SumEcgData;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

public class PrintTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try{
			//	InputStream stream=	this.getClass().getResourceAsStream("/report/summary.jasper");
				    String url="C:\\Users\\Administrator\\JaspersoftWorkspace\\ecg\\other.jasper";
					Map<String, Object> parameters = new HashMap<String, Object>();
							
				    List<OtherInfo> lists=OtherInfoFactory.getCollection();
				    System.out.println(lists.size());
				
					
					JasperPrint jpSummary = JasperFillManager.fillReport(url,
							parameters, 
							new JRBeanCollectionDataSource(lists)
							);
					JasperExportManager.exportReportToPdfFile(jpSummary,"c:\\other.pdf");
					
					
				}catch(Exception ex){
					ex.printStackTrace();
				}
	}

}
