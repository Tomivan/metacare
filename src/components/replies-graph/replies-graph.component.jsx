import React from "react";
import { CategoryScale, Chart, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import './replies-graph.styles.css';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const RepliesResolutionGraph = () => {
    const labels = ['January', 'February','March','April','May','June','July','Aug'];
    
      const data = {
        labels: labels,
        datasets: [{
          label: 'Replies per resolution',
          backgroundColor: '#ffffff',
          borderColor: '#3e68ff',
          data: [11, 19, 49, 19, 40, 31, 45, 45],
        }]
      };
    
    return(
        <div className="response-time">
            <Line data={data} datasetIdKey='id' height={40} />
            <div className="graph-cards">
                <div className="graph-card">
                    <p>Average Response Time</p>
                    <p><strong>30 Mins</strong></p>
                </div>
                <div className="graph-card">
                    <p>Response Time</p>
                    <p><strong>1 Hour 30 Mins</strong></p>
                </div>
            </div>
        </div>
    )
}

export default RepliesResolutionGraph;