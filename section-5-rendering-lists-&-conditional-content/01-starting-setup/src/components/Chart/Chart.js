// used w/ChartBar to show the chart of expenses by month/year
// 1 ChartBar per month / 12 per year
// props received will be data points
// plot the chart in terms of max value item purchased
// label = month

import ChartBar from "./ChartBar";
import "./Char.css";

const Chart = (props) => {
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint}
                    maxValue={null}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
