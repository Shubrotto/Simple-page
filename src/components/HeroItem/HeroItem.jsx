import "./heroItem.css";
import { Paper, Button } from "@mui/material";

const HeroItem = ({ smile }) => {
  console.log(smile);
  return (
    <>
      <Paper className="hero_item" style={{ height: "500px" }}>
        <div className="info">
          <h1>{smile.title}</h1>
          <p>{smile.desc}</p>
        </div>
        <div className="info_img">
          <img src={smile.Image} alt="" />
        </div>
      </Paper>
      <Button className="info_btn">Next Slide</Button>
    </>
  );
};

export default HeroItem;
