// used w/ChartBar to show the chart of expenses by month/year
// 1 ChartBar per month / 12 per year
// props received will be data points
// plot the chart in terms of max value item purchased
// label = month

import ChartBar from "./ChartBar";
import "./Chart.css";

// props are chartDataPoints from ExpensesChart
const Chart = (props) => {

    // get array of values (numbers) from props.dataPoints
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    // find maxValue from props.dataPoints
    // Math.max wants a comma separated list of args
    // spread operator gives comma separated list from an array
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
