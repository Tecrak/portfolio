import BlockToClose from "./closingButton";
import "./styles/education.css";
import { useMessages, useTranslations } from "next-intl";
export default function Education() {
  const messages = useMessages();
  const tED = useTranslations("Education");
  type EducationItem = {
    id: number;
    Lvl: string;
    Date: string;
    Place: string;
    Marks: string;
    Description: string;
  };
  const educationItems = (messages.Education as any).items as EducationItem[];
  return (
    <>
      <BlockToClose id="educationToClose">
        <div className="education_main">
          <div className="education_content">
            {educationItems.map((item) => (
              <div key={item.id} className="education_item">
                <div className="education_info">
                  <div className="education_header">
                    <h3>{item.Lvl}</h3>
                    <h4>{item.Date}</h4>
                  </div>
                  <div className="education_place">
                    <h4>{item.Place}</h4>
                  </div>
                  <div className="education_marks">{item.Marks}</div>
                </div>

                <div className="education_desc">
                  <p>{item.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlockToClose>
    </>
  );
}
