import { useState } from "react";

const Button = ({ text, onClick }) => {
  return (
    <button style={{ margin: "5px", cursor: "pointer" }} onClick={onClick}>
      {text}
    </button>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${positive} %`} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good * 100) / all;

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        text="good"
        onClick={() => {
          setGood(good + 1);
        }}
      />
      <Button
        text="neutral"
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      />
      <Button
        text="bad"
        onClick={() => {
          setBad(bad + 1);
        }}
      />

      <h1>statistics</h1>

      {good === 0 && neutral === 0 && bad === 0 ? (
        <div>No feedback given</div>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
      )}
    </div>
  );
};

export default App;
