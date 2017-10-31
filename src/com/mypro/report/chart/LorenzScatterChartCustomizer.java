package com.mypro.report.chart;

import java.awt.Color;
import java.awt.Font;
import java.awt.Shape;
import java.awt.geom.Ellipse2D;
import java.text.SimpleDateFormat;

import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.DateAxis;
import org.jfree.chart.axis.DateTickMarkPosition;
import org.jfree.chart.axis.NumberAxis;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.plot.XYPlot;
import org.jfree.chart.renderer.category.ScatterRenderer;
import org.jfree.chart.renderer.xy.XYLineAndShapeRenderer;
import org.jfree.ui.RectangleInsets;

import net.sf.jasperreports.engine.JRChart;
import net.sf.jasperreports.engine.JRChartCustomizer;

public class LorenzScatterChartCustomizer implements JRChartCustomizer {

	@Override
	public void customize(JFreeChart chart, JRChart jasperChart) {
		XYLineAndShapeRenderer renderer = (XYLineAndShapeRenderer) chart.getXYPlot().getRenderer();
		Color color = new Color(155, 155, 155);
		renderer.setSeriesPaint(0, color);
		// renderer.setSeriesPaint(1, Color.orange);
		Shape shape = new Ellipse2D.Double(0, 0, 0.1, 0.1);// 创建圆形对象
		renderer.setSeriesShape(0, shape);

		XYPlot plot = (XYPlot) chart.getPlot();
		
		plot.setRangeGridlinePaint(Color.white);
		plot.setDomainGridlinesVisible(false);

		ValueAxis domainAxis = plot.getDomainAxis();

		domainAxis.setRangeWithMargins(0, 2000);
		domainAxis.setTickLabelFont(new Font("ArialMT", Font.PLAIN, 10));
		plot.setDomainAxis(domainAxis);
		
		
	}

}
