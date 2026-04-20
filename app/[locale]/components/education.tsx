import BlockToClose from "./closingButton";
import "./styles/education.css";
export default function Education() {
  return (
    <>
      <BlockToClose id="educationToClose">
        <div className="education_main">
          <div className="education_content">
            <div className="education_item">
              <div className="education_header">
                <h3>Level 3 BTEK Computer Science (Level in EQF:4)</h3>
                <h4>SEP 2022- JUN 2024</h4>
              </div>
              <div className="education_place">
                <h4>Stockport College</h4>
              </div>
              <div className="education_marks">Abschlussnote: D*DD</div>
              <div className="education_desc">
                <p>
                  Im Rahmen dieses Kurses wurden folgende Technologien und
                  Themen behandelt: Java, HTML / HTML5, HTML Scripting, PHP,
                  MySQL / SQL, Cybersecurity und Cybersecurity-Risiken,
                  Cascading Style Sheets (CSS) und CSS Flexbox, JavaScript
                </p>
              </div>
            </div>
            <div className="education_item">
              <div className="education_header">
                <h3>2222Level 3 BTEK Computer Science (Level in EQF:4)</h3>
                <h4>SEP 2022- JUN 2024</h4>
              </div>
              <div className="education_place">
                <h4>Stockport College</h4>
              </div>
              <div className="education_marks">Abschlussnote: D*DD</div>
              <div className="education_desc">
                <p>
                  Im Rahmen dieses Kurses wurden folgende Technologien und
                  Themen behandelt: Java, HTML / HTML5, HTML Scripting, PHP,
                  MySQL / SQL, Cybersecurity und Cybersecurity-Risiken,
                  Cascading Style Sheets (CSS) und CSS Flexbox, JavaScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </BlockToClose>
    </>
  );
}
