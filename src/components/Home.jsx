import "../css/Home.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
// import Face from '../images/Face.png';

const Home = () => {


  return (
    <div className="Home">
      <div className="Home_Banner">
        <div className="Banner_Back"></div>
        <div className="Banner_Overlay">
          <div className="Banner_Title">
            <h1 className="Banner_Title_Header">
              <span>Discover my Amazing</span>
              <br />
              <span>
                Art Space!
              </span>
            </h1>

            <div className="code">
              {'<'}<i>code</i>{'>'}
              <TypeAnimation
                sequence={[
                  ' I Build Web Interfaces.', 2000,
                  ' I Build Web Apps.', 2000,
                  ' I Build E-Commerce Stores.', 2000,
                  ' I Build Automation Tools.', 2000
                ]}
                deletionSpeed={60}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
              {'</'}<i>code</i>{'>'}
            </div>

            <div className="Banner_Btn">
              <Link to='/portfolio'>Explore Now</Link>
            </div>
          </div>
          {/* <img src={Face} alt="Profile Photo" /> */}
        </div>
      </div>
      <div className="Home_Services container-fluid my-5 p-0">
        <h4 className="text-white">My Services</h4>

        <div className="row w-100 m-0 my-3 justify-content-between align-items-stretch">
          <div className="col-md-4 col-lg-12 col-xl-4 text-center Service_Col pe-md-2 pe-lg-0 pe-xl-4 px-0 my-2">
            <div className="card text-center bg-transparent rounded-0 p-4 w-100 h-100">
              <div className="card-header border-0 p-0 mb-4">
                <i className="fa-solid fa-code fa-2x text-warning"></i>
              </div>
              <div className="card-body p-0">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">I have extensive knowledge of HTML, Css, JavaScript, React js, and much more. I have always been passionate about web development, which led me to pursue a Bachelor of Computer Science degree. I am constantly seeking out new technologies and staying up-to-date on trends</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-12 col-xl-4 text-center Service_Col px-0 my-2">
            <div className="card text-center bg-transparent rounded-0 p-4 w-100 h-100">
              <div className="card-header border-0 p-0 mb-4">
                <i className="fa-solid fa-cart-shopping fa-2x text-warning"></i>
              </div>
              <div className="card-body p-0">
                <h5 className="card-title">E-Commerce Store</h5>
                <p className="card-text">Ecommerce has come a long way since its humble beginnings and is now a major industry. It has revolutionized the way we do business and has made it possible for anyone to start their own online store. To build e-commerce stores for a Business is my Favourite part of Web development.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-12 col-xl-4 text-center Service_Col ps-md-2 ps-lg-0 ps-xl-4 px-0 my-2">
            <div className="card text-center bg-transparent rounded-0 p-4 w-100 h-100">
              <div className="card-header border-0 p-0 mb-4">
                <i className="fa-solid fa-wand-magic-sparkles fa-2x text-warning"></i>
              </div>
              <div className="card-body p-0">
                <h5 className="card-title">Graphic Designing</h5>
                <p className="card-text">I started my journey as Graphic Designer. I completed 3 months graphic designer course from DigiSkill. After that, for a long time, I completed projects like minimalistic logo designing, bruchures, banners, etc.  I am experienced in Adobe software like Photoshop, Illustrator, and Figma.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Home;