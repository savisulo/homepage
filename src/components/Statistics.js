import StatisticLine from './StatisticLine'

const Statistics = (props) => {
    if (props.all > 0) {
      return (
        <div>
          <h3>Statistics</h3>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positive + ' %'} />
        </div>
      )
    } else {
      return <p>No feedback given yet</p>
    }    
}

export default Statistics;