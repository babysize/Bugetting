import { connect } from "react-redux"
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const CalculateSumForCategory = (category, operations) => {
  const values = operations.filter(operation => {
    return operation.category === category
  }).map(operation => {
    return operation.value
  }).reduce((sum, curr) => {
    return sum+curr
  }, 0)
  return values
}

const PieChartByCategory = (props) => {
  const sum = props.categories.map(category => {
    return CalculateSumForCategory(category, props.operations)
  })

  const pieChartData = {
    labels: props.categories,
    datasets: [{
      data: sum
    }]
  }

  return (
      <Doughnut data={pieChartData} />
  )
}

const mapStateToProps = state => {
  return {
    operations : state.operations.operationsList,
    categories: state.form.categoryforExpence,
  }
}

export default connect(mapStateToProps, null)(PieChartByCategory)