import styles from "./styles/newImg.module.css";
export default function NewImg() {
  return (
    <div className={styles.newImgBox}>
      <button className={styles.newImgBttn}>Add new</button>
      <form className={styles.newImgForm}>
        <p>Please provide some information to add photo :)</p>
        <div>
          <label htmlFor="imgSrc"> Please type link for your image:</label>
          <input type="text" name="imgSrc" />
        </div>
        <div>
          <label htmlFor="authComment">
            If u want add some comment to ur photo
          </label>
          <input type="text" name="authComment" />
        </div>
        <button type="submit">Add img</button>
      </form>
    </div>
  );
}
