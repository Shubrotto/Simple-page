import "./blog.css";

const Blog = () => {
  return (
    <div className="blog_container" style={{ paddingTop: "90px" }}>
      <h1 className="blog_title">Blogs</h1>
      <p className="blog_desc">Here is some blogs</p>
      <div className="blog_wrapper">
        <div className="blog_item">
          <img
            src="https://i.pinimg.com/originals/d8/ae/07/d8ae07083b5ef20906ea7d66139bca9d.jpg"
            alt=""
          />
          <div className="blog_item_info">
            <h4>always need happiness</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              explicabo, iusto vel, impedit iure rerum deserunt maiores.
            </p>
          </div>
        </div>
        <div className="blog_item">
          <img
            src="https://i.pinimg.com/originals/d8/ae/07/d8ae07083b5ef20906ea7d66139bca9d.jpg"
            alt=""
          />
          <div className="blog_item_info">
            <h4>always need happiness</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              explicabo, iusto vel, impedit iure rerum deserunt maiores.
            </p>
          </div>
        </div>
        <div className="blog_item">
          <img
            src="https://i.pinimg.com/originals/d8/ae/07/d8ae07083b5ef20906ea7d66139bca9d.jpg"
            alt=""
          />
          <div className="blog_item_info">
            <h4>always need happiness</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              explicabo, iusto vel, impedit iure rerum deserunt maiores.
            </p>
          </div>
        </div>
        <div className="blog_item">
          <img
            src="https://i.pinimg.com/originals/d8/ae/07/d8ae07083b5ef20906ea7d66139bca9d.jpg"
            alt=""
          />
          <div className="blog_item_info">
            <h4>always need happiness</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              explicabo, iusto vel, impedit iure rerum deserunt maiores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
