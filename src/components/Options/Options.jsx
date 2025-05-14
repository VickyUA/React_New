import css from "./Options.module.css";

export default function Options({ update, type }) {
  return (
    <div className={css.btnWrapper}>
      <button type="button" onClick={() => update(type)}>
        {type}
      </button>
    </div>
  );
}
