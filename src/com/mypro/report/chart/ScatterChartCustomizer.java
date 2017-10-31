package com.mypro.report.chart;

import java.awt.Color;
import java.awt.Font;
import java.awt.Shape;
import java.awt.geom.Ellipse2D;
import java.text.SimpleDateFormat;

import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.DateAxis;
import org.jfree.chart.axis.DateTickMarkPosition;
import org.jfree.chart.plot.XYPlot;
import org.jfree.chart.renderer.category.ScatterRenderer;
import org.jfree.chart.renderer.xy.XYLineAndShapeRenderer;
import org.jfree.ui.RectangleInsets;

import net.sf.jasperreports.engine.JRChart;
import net.sf.jasperreports.engine.JRChartCustomizer;

public class ScatterChartCustomizer implements JRChartCustomizer {

	

	@Override
	public void customize(JFreeChart chart, JRChart jasperChart) {
		XYLineAndShapeRenderer renderer = (XYLineAndShapeRenderer) chart.getXYPlot().getRenderer();
		Color color=new Color(155,155,155);
		renderer.setSeriesPaint(0, color);
		//renderer.setSeriesPaint(1, Color.orange);
		Shape shape=new Ellipse2D.Double(0, 0, 2, 2);//创建圆形对象
		renderer.setSeriesShape(0, shape);
		
		 XYPlot plot = (XYPlot) chart.getPlot();
		// plot.setBackgroundPaint(Color.lightGray);
//	       plot.setDomainGridlinePaint(Color.white);
	        plot.setRangeGridlinePaint(Color.white);
//	        plot.setAxisOffset(new RectangleInsets(5.0, 5.0, 5.0, 5.0));
	
	     //   plot.setRangeCrosshairVisible(false);
	        plot.setDomainGridlinesVisible(false);
		DateAxis xAxis = new DateAxis("");
	//	xAxis.setDateFormatOverride(new SimpleDateFormat("HH:mm"));
		 //xAxis.setTickMarkPaint(Color.red);
//		 xAxis.setAxisLinePaint(Color.black);
		xAxis.setTickLabelFont(new Font("ArialMT", Font.PLAIN, 10));
       xAxis.setTickMarkPosition(DateTickMarkPosition.MIDDLE);
       plot.setDomainAxis(xAxis);
     //   plot.setRangeAxis(new DateAxis("Time"));
	}

}
