import { connect } from "react-redux"
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const CalculateSumForCategory = (category, operations) => {
  const values = operations.filter(operation => {
    return operation.category === category
  }).map(operation => {
    return operation.value
  }).reduce((sum, curr) => {
    return Math.round((sum+Number(curr)+Number.EPSILON)*100)/100
  }, 0)
  return values
}

  const PieChartByCategory = (props) => {
    const sum = props.categories.map(category => {
      return CalculateSumForCategory(category, props.operations)
    }
  )

  const pieChartData = {
    labels: props.categories,
    datasets: [{
      data: sum
    }]
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        //position: 'right',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = ''
            if (context.parsed) label += (context.parsed * 100 / context.dataset.data.reduce((a, b) => a + b)).toFixed(2) + '%'
            return label
          }
        }
      },
    }
  }
  
  return (
    <Doughnut data={pieChartData} options={options}/>
  )
}

const mapStateToProps = state => {
  return {
    operations : state.operations.operationsList,
    categories: state.form.categoryforExpence,
  }
}

export default connect(mapStateToProps, null)(PieChartByCategory)