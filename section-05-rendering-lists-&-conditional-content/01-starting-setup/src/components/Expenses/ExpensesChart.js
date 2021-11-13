// passes data to the Chart
import Chart from "../Chart/Chart";

// get filtered expenses as a prop from Expenses
const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: "Jan", value: 0 }, // value init to 0
        { label: "Feb", value: 0 }, // changes when an expense is found
        { label: "Mar", value: 0 }, // for the given month
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
    ];

    for (const expense of props.expenses) {
        // get month of expense
        // update appropriate value of chartDataPoint by expense amount
        // Date.getMonth() returns month starting at 0 = Jan
        const expenseMonth = expense.date.getMonth();

        // increase value of given month by expense amount
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
