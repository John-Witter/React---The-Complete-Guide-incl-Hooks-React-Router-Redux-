import "./ChartBar.css";

// receives props from Chart
// bar__fill height depends on the data/value received for maxValue
const ChartBar = (props) => {
    // calculate chartbar fill height based on maxValue
    let barFillHeight = "0%"; // will be css

    if (props.maxValue > 0) {
        // get % b/t 0-100 of bar fill height, round to nearest int
        // convert to string w/ + '%';
        // this value will be a css value
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;
