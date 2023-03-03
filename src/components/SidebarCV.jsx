import '../css/SidebarCV.css';
import Avatar from '../images/Avatar.jpeg';

const SidebarCV = () => {

  return (
    <aside className='Sidebar'>

      <div className="Sidebar_Header_Container w-100">
        <div className="Avatar_Container">
          <img src={Avatar} alt="Avatar" className='w-100 h-100 rounded-circle' />
          <div className="Amp_Light" title='I am Available to Hiring.'>
            <div className="Amp_Light_Available">

            </div>
          </div>
        </div>
        <h5>Abbas Ali</h5>
        <p className='m-1'>Full Stack Web Developer</p>
        <p className='m-0'>Graphic Designer</p>
      </div>

      <div className="Sidebar_Body_Container container-fluid p-4">

        {/* Bio  */}
        <div className="Sidebar_Bio">
          <div className="Bio_Residence d-flex justify-content-between align-items-center">
            <h6 className='m-0'>Residence:</h6><span className='m-0 Bio_Value'>Model Town</span>
          </div>
          <div className="Bio_City d-flex justify-content-between align-items-center">
            <h6 className='m-0'>City:</h6><span className='m-0 Bio_Value'>Pattoki</span>
          </div>
          <div className="Bio_Age d-flex justify-content-between align-items-center" >
            <h6 className='m-0'>Age:</h6><span className='m-0 Bio_Value'>24</span>
          </div>
        </div>

        <hr />

        {/* Counter  */}

        <div className="Counter_Container row d-flex justify-content-center">
          <div className="col-4 text-center Counter_Col">
            <div className="progress Urdu m-auto mb-3">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">90%</div>
            </div>
            <h6 className='text-center m-0'>Urdu</h6>
          </div>
          <div className="col-4 text-center Counter_Col">
            <div className="progress Punjabi m-auto mb-3">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">99%</div>
            </div>
            <h6 className='text-center m-0'>Punjabi</h6>
          </div>
          <div className="col-4 text-center Counter_Col">
            <div className="progress English m-auto mb-3">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">70%</div>
            </div>
            <h6 className='text-center m-0'>English</h6>
          </div>
        </div>


        {/* Progress Bar  */}
        <div className="Sidebar_Progress">
          <hr className='my-4 ' />
          <h4 className='text-center'>Frontend</h4>
          <hr className='my-4' />
          <div className="progress_Container my-3">
            <div className="progress_txt d-flex align-items-center justify-content-between">
              <p className='m-0'>HTML</p>
              <p className='m-0'>90%</p>
            </div>
            <div className="progress my-2 rounded-0">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="progress_Container my-3">
            <div className="progress_txt d-flex align-items-center justify-content-between">
              <p className='m-0'>CSS</p>
              <p className='m-0'>92%</p>
            </div>
            <div className="progress my-2 rounded-0">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '92%' }} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="progress_Container my-3">
            <div className="progress_txt d-flex align-items-center justify-content-between">
              <p className='m-0'>JAVASCRIPT</p>
              <p className='m-0'>75%</p>
            </div>
            <div className="progress my-2 rounded-0">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="progress_Container my-3">
            <div className="progress_txt d-flex align-items-center justify-content-between">
              <p className='m-0'>REACT JS</p>
              <p className='m-0'>85%</p>
            </div>
            <div className="progress my-2 rounded-0">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="progress_Container my-3">
            <div className="progress_txt d-flex align-items-center justify-content-between">
              <p className='m-0'>JQUERY</p>
              <p className='m-0'>95%</p>
            </div>
            <div className="progress my-2 rounded-0">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <hr className='my-4' />

          <ul className="p-0">
            <li className="list-group-item"><i className='fas fa-check me-2'></i>Bootstrap</li>
            <li className="list-group-item"><i className='fas fa-check me-2'></i>Sass</li>
            <li className="list-group-item"><i className='fas fa-check me-2'></i>NPM Packages</li>
            <li className="list-group-item"><i className='fas fa-check me-2'></i>GIT knowledge</li>
          </ul>

          <hr className='my-4' />
          <h4 className='text-center'>Backend</h4>
          <hr className='my-4' />

          <div className="progress_Container my-3">
            <div className="progress_txt d-flex align-items-center justify-content-between">
              <p className='m-0'>NODE JS</p>
              <p className='m-0'>50%</p>
            </div>
            <div className="progress my-2 rounded-0">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="progress_Container my-3">
            <div className="progress_txt d-flex align-items-center justify-content-between">
              <p className='m-0'>EXPRESS JS</p>
              <p className='m-0'>80%</p>
            </div>
            <div className="progress my-2 rounded-0">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="progress_Container my-3">
            <div className="progress_txt d-flex align-items-center justify-content-between">
              <p className='m-0'>MONGODB</p>
              <p className='m-0'>82%</p>
            </div>
            <div className="progress my-2 rounded-0">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '82%' }} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="progress_Container my-3">
            <div className="progress_txt d-flex align-items-center justify-content-between">
              <p className='m-0'>MONGOOSE (ODM)</p>
              <p className='m-0'>75%</p>
            </div>
            <div className="progress my-2 rounded-0">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <hr className='my-4' />
          <h4 className='text-center'>Graphic Designing</h4>
          <hr className='my-4' />

          <div className="progress_Container my-3">
            <div className="progress_txt d-flex align-items-center justify-content-between">
              <p className='m-0'>Photoshop</p>
              <p className='m-0'>75%</p>
            </div>
            <div className="progress my-2 rounded-0">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="progress_Container my-3">
            <div className="progress_txt d-flex align-items-center justify-content-between">
              <p className='m-0'>Illustrator</p>
              <p className='m-0'>50%</p>
            </div>
            <div className="progress my-2 rounded-0">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="progress_Container my-3">
            <div className="progress_txt d-flex align-items-center justify-content-between">
              <p className='m-0'>Figma</p>
              <p className='m-0'>82%</p>
            </div>
            <div className="progress my-2 rounded-0">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '82%' }} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>


        </div>

        <hr className='mt-4' />

        <div className="Sidebar_CV">
          <a href="/AbbasAli_Resume.pdf" download="AbbasAli_Resume" target="_blank" rel="noopener noreferrer">Download CV</a> <i className='fas fa-download'></i>
        </div>

      </div>

      <div className="Sidebar_Footer_Container w-100 d-flex justify-content-center align-items-center">
        <a href="http://" target='_blank' className='mx-2'><i className='fab fa-linkedin'></i></a>
        <a href="http://" target='_blank' className='mx-2'><i className='fab fa-dribbble'></i></a>
        <a href="http://" target='_blank' className='mx-2'><i className='fab fa-behance'></i></a>
        <a href="http://" target='_blank' className='mx-2'><i className='fab fa-github'></i></a>
        <a href="http://" target='_blank' className='mx-2'><i className="fa-brands fa-square-facebook"></i></a>
      </div>

    </aside>
  )
}

export default SidebarCV;
