import '../css/Portfolio.css';
import Gemslifestyle from '../images/Gemslifestyle.png';
import TextUtils from '../images/TextUtils.png';
import NewsMonkey from '../images/NewsMonkey.png';
import iNotebook from '../images/iNotebook.png';
import BurgerHouse from '../images/BurgerHouse.png';
import Phoenix from '../images/Phoenix.png';

const Portfolio = () => {

    return (
        <div className='Portfolio'>
            <h4 className='text-white'>Portfolio</h4>
            <div className="row w-100 m-0 my-3 justify-content-start align-items-stretch">
                <div className="col-md-4 col-lg-12 col-xl-4 text-center pe-md-2 pe-lg-0 pe-xl-4 px-0 my-4 Site_Preview_Container">
                    <h5>E-Commerce Website</h5>
                    <a href='https://gemlifestyles.com/' target='_blank' className="Image_Frame d-block">
                        <img src={Gemslifestyle} alt="Site Preview" className="Image_Preview w-100" />
                    </a>
                </div>
                <div className="col-md-4 col-lg-12 col-xl-4 text-center px-0 my-4 Site_Preview_Container">
                    <h5>Text Manipulation</h5>
                    <a href='https://codewithabbass.github.io/TextUtils-React-App/' target='_blank' className="Image_Frame d-block bg-success">
                        <img src={TextUtils} alt="Site Preview" className="Image_Preview w-100" />
                    </a>
                </div>
                <div className="col-md-4 col-lg-12 col-xl-4 text-center ps-md-2 ps-lg-0 ps-xl-4 px-0 my-4 Site_Preview_Container">
                    <h5>News Update Website</h5>
                    <a href='https://youtu.be/SpbkXRIjz2U' target='_blank' className="Image_Frame d-block bg-white position-relative">
                        <img src={NewsMonkey} alt="Site Preview" className="Image_Preview w-100" />
                        <div className='Frame_Cover w-100 position-absolute bottom-0 pb-4'>
                            Click to See Result on Youtube
                        </div>
                    </a>
                </div>
            </div>
            <div className="row w-100 m-0 my-3 justify-content-start align-items-stretch">
                <div className="col-md-4 col-lg-12 col-xl-4 text-center pe-md-2 pe-lg-0 pe-xl-4 px-0 my-4 Site_Preview_Container">
                    <h5>Personal Notebook App</h5>
                    <a href='https://www.youtube.com/watch?v=fEN-pnN-iyU' target='_blank' className="Image_Frame d-block bg-white position-relative">
                        <img src={iNotebook} alt="Site Preview" className="Image_Preview w-100" />
                        <div className='Frame_Cover w-100 position-absolute bottom-0 pb-4'>
                            Click to See Result on Youtube
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-lg-12 col-xl-4 text-center px-0 my-4 Site_Preview_Container">
                    <h5>Burger House Booking Website</h5>
                    <a href='https://burgerhouseapp.netlify.app/' target='_blank' className="Image_Frame d-block bg-white">
                        <img src={BurgerHouse} alt="Site Preview" className="Image_Preview w-100" />
                    </a>
                </div>
                <div className="col-md-4 col-lg-12 col-xl-4 text-center ps-md-2 ps-lg-0 ps-xl-4 px-0 my-4 Site_Preview_Container">
                    <h5>Phoenix Multi Vendor Website</h5>
                    <a href='https://www.youtube.com/watch?v=g9M2wskeCo0' target='_blank' className="Image_Frame d-block position-relative">
                        <img src={Phoenix} alt="Site Preview" className="Image_Preview w-100" />
                        <div className='Frame_Cover w-100 position-absolute bottom-0 pb-4'>
                            Click to See Result on Youtube
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
