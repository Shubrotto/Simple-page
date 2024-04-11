import "./gallery.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { gallery } from "../../data";

export default function StandardImageList() {
  return (
    <div className="gallery_container" style={{ paddingTop: "90px" }}>
      <h1>Gallery</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, animi.
      </p>
      <div className="gallery_wrapper">
        <ImageList sx={{ width: "100%" }} cols={3} rowHeight={164}>
          {gallery.map((item) => (
            <ImageListItem
              key={item.img}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                gap: "10px",
              }}
            >
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
