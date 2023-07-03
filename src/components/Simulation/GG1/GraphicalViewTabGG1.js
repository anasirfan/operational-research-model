import React, { useEffect, useRef } from 'react';
import './GraphicalViewTabGG1.css';

const GraphicalViewTab = ({ calculatedData }) => {
  const ganttChartRef = useRef(null);

  return (
    <div>
       <h3 className="text-3xl  text-center text-red-800 font-bold mb-10">Graphical View</h3>
       <h3 className='text-2xl  text-centerfont-bold'>Server 1</h3>
      <div className="gantt-chart" ref={ganttChartRef}>
        
        {calculatedData.calculatedData.map((data, index) => (
          <div className="gantt-chart-bar" key={data.customer}>
            <div className="gantt-chart-label">
              <div className="start-time">{data.startTime}</div>
              <div className="end-time">{data.endTime}</div>
            </div>
              <div className="customer-name">Customer {data.customer}</div>
          </div>
        ))}
      </div>
    </div>
  ); 
};

export default GraphicalViewTab;
