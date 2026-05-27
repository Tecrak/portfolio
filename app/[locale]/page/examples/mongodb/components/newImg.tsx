import styles from "./styles/newImg.module.css";
export default function NewImg() {
  return (
    <div className={styles.newImgBox}>
      <button className={styles.newImgBttn}>Add new</button>
      <form className={styles.newImgForm}></form>
    </div>
  );
}
