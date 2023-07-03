import React, { useEffect, useRef } from 'react';
import './GraphicalViewTabMM2.css';

const GraphicalViewTabMM2 = ({ calculatedData }) => {
  const server1GanttChartRef = useRef(null);
  const server2GanttChartRef = useRef(null);

  useEffect(() => {
    const animateGanttChart = (ganttChartRef, serverData) => {
      const ganttChart = ganttChartRef.current;
      const bars = ganttChart.querySelectorAll('.gantt-chart-bar');

      bars.forEach((bar, index) => {
        const { startTime, endTime, idle } = serverData[index];
        const barWidth = calculateBarWidth(startTime, endTime);

        bar.style.width = barWidth + '%';
        bar.style.animationDuration = `${barWidth * 2}s`;

        if (idle) {
          bar.classList.add('idle');
        }
      });
    };

    animateGanttChart(server1GanttChartRef, calculatedData.server1Data);
    animateGanttChart(server2GanttChartRef, calculatedData.server2Data);
  }, [calculatedData.server1Data, calculatedData.server2Data]);

  const calculateBarWidth = (startTime, endTime) => {
    const timeDifference = endTime - startTime;
    const currentTime = Date.now() - startTime;
    const barWidth = (currentTime / timeDifference) * 100;

    return Math.min(barWidth, 100);
  };

  return (
    <div>
      <h3 className="text-3xl  text-center text-red-800 font-bold mb-10">Graphical View</h3>

      <div className="gantt-chart-container w-full">
        <div className="server1-gantt-chart">
          <h3 className='text-2xl font-bold'>Server 1</h3>
          <div className="gantt-chart w-full" ref={server1GanttChartRef}>
            {calculatedData.server1Data.map((data, index) => (
              <div className="gantt-chart-bar" key={data.customer}>
                <div className="gantt-chart-label">
                  <div className="start-time2">{data.starttime}</div>
                  <div className="end-time2">{data.endtime}</div>
                </div>
                <div className="customer-name">Customer {data.customer}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="server2-gantt-chart">
          <h3 className='text-2xl font-bold'>Server 2</h3>
          <div className="gantt-chart" ref={server2GanttChartRef}>
            {calculatedData.server2Data.map((data, index) => (
              <div className="gantt-chart-bar" key={data.customer}>
                <div className="gantt-chart-label">
                  <div className="start-time2">{data.starttime}</div>
                  <div className="end-time2">{data.endtime}</div>
                </div>
                <div className="customer-name">Customer {data.customer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicalViewTabMM2;
