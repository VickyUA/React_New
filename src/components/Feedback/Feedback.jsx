import css from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positive} %</li>
      </ul>
    </div>
  );
}
