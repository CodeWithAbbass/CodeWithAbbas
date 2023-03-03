import { useState } from 'react';
import '../css/Contact.css';

const Contact = () => {
    const [res, setRes] = useState(false);

    // const Submit = (e) => {
    //     e.preventDefault();
    //     setRes(true)
    // }
    return (
        <div className='Contact'>
            <h4 className='text-white'>Contact Information</h4>
            <div className="row w-100 m-0 my-3 justify-content-between align-items-stretch">
                <div className="col-md-4 col-lg-12 col-xl-4 text-center Contact_Col pe-md-2 pe-lg-0 pe-xl-4 px-0 my-2">
                    <ul className="list-group bg-transparent text-start p-4 rounded-0 h-100">
                        <li className='list-group-item bg-transparent rounded-0 border-0 d-flex justify-content-between p-0 my-1'>
                            <span className='text-white'>Country:</span> <span className=''>Pakistan</span>
                        </li>
                        <li className='list-group-item bg-transparent rounded-0 border-0 d-flex justify-content-between p-0 my-1'>
                            <span className='text-white'>City:</span> <span className=''>Pattoki</span>
                        </li>
                        <li className='list-group-item bg-transparent rounded-0 border-0 d-flex justify-content-between p-0 my-1'>
                            <span className='text-white'>Area:</span> <span className=''>Model Town</span>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 col-lg-12 col-xl-4 text-center Contact_Col pe-md-2 pe-lg-0 pe-xl-4 px-0 my-2">
                    <ul className="list-group bg-transparent text-start p-4 rounded-0 h-100">
                        <li className='list-group-item bg-transparent rounded-0 border-0 d-flex justify-content-between p-0 my-1'>
                            <span className='text-white'>Email:</span> <a href="mailto:abbas152052@gmail.com" target="_blank" className=''>Abbas152052@gmail.com</a>
                        </li>
                        <li className='list-group-item bg-transparent rounded-0 border-0 d-flex justify-content-between p-0 my-1'>
                            <span className='text-white'>LinkedIn:</span> <a href='https://www.linkedin.com/in/abbass-ali/' target='_blank' className=''>@abbass-ali</a>
                        </li>
                        <li className='list-group-item bg-transparent rounded-0 border-0 d-flex justify-content-between p-0 my-1'>
                            <span className='text-white'>Facebook:</span> <a href='https://www.facebook.com/Abbas152052' target='_blank' className=''>@abbas152052</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 col-lg-12 col-xl-4 text-center Contact_Col pe-md-2 pe-lg-0 pe-xl-4 px-0 my-2">
                    <ul className="list-group bg-transparent text-start p-4 rounded-0 h-100">
                        <li className='list-group-item bg-transparent rounded-0 border-0 d-flex justify-content-between p-0 my-1'>
                            <span className='text-white'>Whatsapp:</span> <a href='https://wa.me/+92016083148?text=Help' target='_blank' className=''>+92016083148</a>
                        </li>
                        <li className='list-group-item bg-transparent rounded-0 border-0 d-flex justify-content-between p-0 my-1'>
                            <span className='text-white'>Call:</span> <a href='tel:+92016083148' target='_blank' className=''>+92016083148</a>
                        </li>
                        <li className='list-group-item bg-transparent rounded-0 border-0 d-flex justify-content-between p-0 my-1'>
                            <span className='text-white'>Support:</span> <a href='sms:+92016083148' target='_blank' className=''>+92016083148</a>
                        </li>
                    </ul>
                </div>
            </div>

            <h4 className='text-white'>Get in touch</h4>
            <form className='px-4 py-5 my-4' name="contact" method="post">

                <input type="hidden" name='form-name' value="contact" />

                <div className="Name w-100 input_Container position-relative">
                    <input type="text" id="name" name='name' className='form-control w-100 border-0 rounded-0 shadow-none ' placeholder='Name' required />
                    <label htmlFor="name" className='text-center'><i className='fa fa-user'></i></label>
                </div>
                <div className="Email w-100 input_Container position-relative my-4">
                    <input type="email" id='email' name='email' className='form-control w-100 border-0 rounded-0 shadow-none' placeholder='Email' required />
                    <label htmlFor="email" className='text-center'><i className='fas fa-at'></i></label>
                </div>
                <div className="Message w-100 input_Container position-relative ">
                    <textarea className='form-control w-100 border-0 rounded-0 shadow-none pt-3 ' name="message" id="message" cols="40" rows="10" placeholder='Message' required></textarea>
                    <label htmlFor="message" className='text-center TextArea_Label'><i className='fa fa-envelope'></i></label>
                </div>
                <button type='submit' className='SubmitBtn border-0 rounded-0 mt-4 fw-semibold'>Send Message</button>
            </form >
        </div >
    )
}

export default Contact
