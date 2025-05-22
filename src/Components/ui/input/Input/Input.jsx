import classes from "./input.module.css";
export default function Input({
  id,
  label,
  error,
  textarea,
  select,
  options = [],
  ...props
}) {
  return (
    <div className={classes.header}>
      <label htmlFor={id} className={classes.label}>
        {label}{" "}
      </label>
      {textarea ? (
        <textarea id={id} {...props} className={classes.txt} />
      ) : select ? (
        <select id={id} className={classes.select} {...props}>
          <option value=""disabled hidden>Select Services</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input id={id} {...props} className={classes.inp} />
      )}

      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
}
