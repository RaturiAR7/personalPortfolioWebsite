import linkedIn_icon from "../assets/linkedIn_icon.png";
import leetcode from "../assets/leetcode.png";
import insta_icon from "../assets/insta_icon.png";
import gmail_icon from "../assets/gmail_icon.png";
import { styles } from "../styles";
const Footer = () => {
  return (
    <div
      style={{ height: "50px" }}
      className={`${styles.paddingX} w-full flex items-center top-0 z-20 bg-black-100 `}
    >
      <div className="w-full h-[20px] flex justify-center flex-row">
        <a
          className="px-5"
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBxnVhCQTCsDgQvzVLJnLLcVMsdzlxvsNLsWcCMHVzlrBhsWJVxTMVlQTcXPBpdlNvDBKr"
        >
          <img
            style={{ height: "40px" }}
            src={gmail_icon}
            alt="linkedlin_icon"
          />
        </a>
        <a className="px-5" href="https://www.instagram.com/_uchiha_ar7_/">
          <img style={{ height: "40px" }} src={insta_icon} />
        </a>
        <a
          className="px-5"
          href="https://www.linkedin.com/in/anshul-raturi-9224a4244/"
        >
          <img style={{ height: "40px" }} src={linkedIn_icon} />
        </a>
        <a className="px-5" href="https://leetcode.com/anshulraturi007/">
          <img style={{ height: "40px" }} src={leetcode} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
