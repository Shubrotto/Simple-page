import "./contact.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaFacebook, FaVoicemail } from "react-icons/fa";
import {
  DialerSipOutlined,
  EmailOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";

const Contact = () => {
  return (
    <div className="contact_form">
      <h1>Contact me</h1>
      <p className="form_info_p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam.
      </p>
      <div className="form_wrapper">
        <div className="form_icons">
          <h4>Let get in touch</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            laborum omnis doloribus accusamus fugiat deserunt.
          </p>
          <div className="contact_icon">
            <span>
              <EmailOutlined className="icon_contact_bg" />{" "}
              <span>xyz@gmail.com</span>
            </span>
            <span>
              <DialerSipOutlined className="icon_contact_bg" />{" "}
              <span>+880 1311 479092</span>
            </span>
          </div>
          <div className="Social_info">
            <h4>Contact with me</h4>
            <div className="social_icon">
              <FaFacebook className="social_btn" />
              <Twitter className="social_btn" />
              <LinkedIn className="social_btn" />
              <Instagram className="social_btn" />
            </div>
          </div>
        </div>
        <form>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            fullWidth
            style={{ cursor: "pointer" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
