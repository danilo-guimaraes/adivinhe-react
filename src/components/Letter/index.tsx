import styles from "./styles.module.css"
type Pros = {
    value?: string
    size?: "default" | "small"
    color?: "default" | "correct" | "wrong"
}
export function Letter({value = "", size = "default", color = "default"}: Pros){
    return (
      <div
        className={`
      ${styles.letter}
      ${size === "small" && styles.letterSmall}
      ${color === "correct" && styles.letterCorrect}
      ${color === "wrong" && styles.letterWrong}
      `}
      >
        <span>{value} </span>
      </div>
    );
}
