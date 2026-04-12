import { CONTACT_INFO } from "@/app/config/contactInfo";
export default function ContactsList() {
  return (
    <ul className="contactsList">
      {CONTACT_INFO.map((contact, index) =>
        contact.linkType ? (
          <a
            href={
              contact.linkType === "email"
                ? `mailto:${contact.label}`
                : `https://${contact.label}`
            }
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li key={index} className="contactItem">
              <div className="contactIcon">
                <img src={contact.icon} alt={contact.label} />
              </div>
              <span>{contact.label}</span>
            </li>
          </a>
        ) : (
          <li key={index} className="contactItem">
            <div className="contactIcon">
              <img src={contact.icon} alt={contact.label} />
            </div>
            <span>{contact.label}</span>
          </li>
        ),
      )}
    </ul>
  );
}
