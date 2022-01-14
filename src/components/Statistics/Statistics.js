import { StatisticsList, StatisticsItem } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsList>
      <StatisticsItem>
        <p>Good:{good}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Neutral:{neutral}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Bad:{bad}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Total:{total}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Positive feedback:{positivePercentage}%</p>
      </StatisticsItem>
    </StatisticsList>
  );
}
