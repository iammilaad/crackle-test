import FooterMenu from "./FooterMenu";
import Social from "./Social";
import { Style } from "./style";

const learnMore = [
  {
    name: "about crackle",
    link: "#",
  },
  {
    name: "supported deviced",
    link: "#",
  },
  {
    name: "careers",
    link: "#",
  },
  {
    name: "advertise with us",
    link: "#",
  },
];
const getHelp = [
  {
    name: "FAQs",
    link: "#",
  },
  {
    name: "submit a request",
    link: "#",
  },
];
const stayLegal = [
  {
    name: "ad choices",
    link: "#",
  },
  {
    name: "privacy policy",
    link: "#",
  },
  {
    name: "terms of service",
    link: "#",
  },
  {
    name: "accessibility",
    link: "#",
  },
];
const social = [
  {
    icon: "fa-facebook",
    link: "#",
  },
  {
    icon: "fa-twitter",
    link: "#",
  },
  {
    icon: "fa-instagram",
    link: "#",
  },
  {
    icon: "fa-youtube",
    link: "#",
  },
  {
    icon: "fa-linkedin",
    link: "#",
  },
];
export default function Footer() {
  return (
    <Style>
      <div className="footer">
        <div className="container">
          <div className="flex space-between">
            <FooterMenu menuTitle="learn more" items={learnMore} />
            <FooterMenu menuTitle="get help" items={getHelp} />
            <FooterMenu menuTitle="stay legal" items={stayLegal} />
          </div>
          <div className="social">
            <Social items={social} />
          </div>
          <div className="copyright">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="bootom-footer" />
      </div>
    </Style>
  );
}
