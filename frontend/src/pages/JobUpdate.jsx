import { useRef, useState } from 'react'
import EditNav from '../components/EditNav'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import "./PostEdit.scss"
import TextEditor, { getEditorContent } from '../components/TextEditor'
import { cloudname } from '../utils/cloudinary'

const PostEdit = () => {
  let [featuredImg1, setFeaturedImg1] = useState("")
  let [featuredImg2, setFeaturedImg2] = useState("")
  let logoAccent = useRef(null);
  let companyName = useRef(null);
  let jobTitle = useRef(null);
  let jobType = useRef(null);
  let jobLocation = useRef(null);
  let applicationDeadline = useRef(null);
  let drafted = false;
  let host = `http://localhost:4000`

  let validate = (input)=>{
    if(input.current.value && typeof input.current.value === "string"){
      return input.current.value
    }else{
      input.current.classList.add("is-invalid")
      input.current.scrollIntoView({block: "center"})
      throw new Error(`${input.current.id} field is empty`)
    }
  }

  let save = async()=>{
    console.log("Publishing")
    let payload = {
      companyCoverImg: featuredImg1,
      companyLogo: featuredImg2,
      logoAccent: logoAccent.current.value,
      jobTitle: validate(jobTitle),
      jobType: validate(jobType),
      jobLocation: validate(jobLocation),
      companyName: validate(companyName),
      applicationDeadline: validate(applicationDeadline),
      postType: "course",
      content: getEditorContent(),
    }
    let req = await fetch(`${host}/draft`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    if(!req.ok){
      alert("An error occured while trying to publish this job")
    }
    let res = await req.json()
    console.log(res)
  }
  // set featured Image preview
  let setPreview1 = async(e)=>{
    try {
      let imgUpload = e.target.files[0]
      let formData = new FormData()
      formData.append("file", imgUpload)
      formData.append("upload_preset", "fnmi-academy")
      formData.append("folder", "job")
      let req = await fetch(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, {
        method: "POST",
        body: formData
      })
      let res = await req.json()
      // console.log(res)
      setFeaturedImg1(res.secure_url)
      e.target.value = ""
    } catch (error) {
      console.log(error)
    }
  }
  // set featured2 Image preview
  let setPreview2 = async(e)=>{
    try {
      let imgUpload = e.target.files[0]
      let formData = new FormData()
      formData.append("file", imgUpload)
      formData.append("upload_preset", "fnmi-academy")
      formData.append("folder", "job")
      let req = await fetch(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, {
        method: "POST",
        body: formData
      })
      let res = await req.json()
      // console.log(res)
      setFeaturedImg2(res.secure_url)
      e.target.value = ""
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='fixed-top'>
        <EditNav publishButton={save}/>
      </div>
      <main id='post-edit'>
        <div className="container">
          {/* back arrow link */}
          <Link to={"/blog"} className='text-decoration-none link-dark fs-5 fw-bold'>
            <span className='me-1'><FaArrowLeftLong/></span> Back
          </Link>
          <div className='row mt-3 gy-4'>
            <div className="col-lg-8">
              <form className='border vstack gap-3 p-3 bg-white shadow-sm'>
                {/* Title input */}
                <div>
                  <label htmlFor="title-input" className='form-label'>Title</label>
                  <input ref={jobTitle} type="text" id="title-input" className='form-control rounded-0' />
                  <div className="invalid-feedback">Title Field is empty</div>
                </div>
                {/* content input */}
                <div>
                  <label htmlFor="content" className='form-label'>Content</label>
                  <TextEditor/>
                </div>
              </form>
              {/* Job type select */}
              <div className='border p-3 bg-white mt-3 shadow-sm'>
                <label htmlFor='job-type' className='fw-bold form-label'>Type</label>
                <select ref={jobType} id="job-type" className="form-select rounded-0">
                  <option value="">Select Job Type</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
                <div className="invalid-feedback">Please select a valid Job type</div>
              </div>
              {/* Job location select */}
              <div className='border p-3 bg-white mt-3 shadow-sm'>
                <label htmlFor='job-location' className='fw-bold form-label'>Location</label>
                <select ref={jobLocation} id="job-location" className="form-select rounded-0">
                  <option value="">Select Job Location</option>
                  <option value="remote">Remote</option>
                  <option value="onsite">Onsite</option>
                  <option value="hybrid">Hybrid</option>
                </select>
                <div className="invalid-feedback">Please select a valid Job Location</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className='vstack gap-3'>
                {/* company name inputs */}
                <div className='border p-3 bg-white shadow-sm'>
                  <label htmlFor='company-name' className='fw-bold form-label'>Company Name</label>
                  <input ref={companyName} type="text" id='company-name' className='form-control rounded-0' />
                  <div className="invalid-feedback">Company Name Field is empty</div>
                </div>
                {/* Application deadline inputs */}
                <div className='border p-3 bg-white shadow-sm'>
                  <label htmlFor='deadline' className='fw-bold form-label'>Application Deadline</label>
                  <input ref={applicationDeadline} type="date" id='deadline' className='form-control rounded-0' />
                  <div className="invalid-feedback">Kindly select the application deadline</div>
                </div>
                  {/* first feature image */}
                <div className='border p-3 bg-white shadow-sm'>
                  <span className='fw-bold'>Featured Image</span>
                  <div className='mt-3' id='feature-img1'>
                    <div>
                      <input onChange={setPreview1} type="file" id='featuredImg1-input' hidden={true}/>
                      <label htmlFor="featuredImg1-input" className='featuredImg-label' style={{display: featuredImg1? "none": "block"}}>
                        <small>Upload Banner-Image</small>
                        <div className='form-text'>Max File Size: 4MB</div>
                      </label>
                      <img src={featuredImg1} style={{ display: featuredImg1 ? "inline" : "none" }} className='img-fluid' alt="" />
                    </div>
                    <div className='img-mod mt-2' hidden={!featuredImg1}>
                      <label htmlFor='featuredImg1-input'>Update</label>
                      <span onClick={()=>{setFeaturedImg1("")}}>Remove</span>
                    </div>
                  </div>
                  {/* feature image 2 for job and logo image */}
                  <div className='mt-3' id='feature-img2'>
                    <div>
                      <input onChange={setPreview2} type="file" id='featuredImg2-input' hidden={true}/>
                      <label htmlFor="featuredImg2-input" className='featuredImg-label' style={{display: featuredImg2? "none": "block"}}>
                        <small>Upload Logo</small>
                        <div className='form-text'>Max File Size:</div>
                      </label>
                      <img src={featuredImg2} style={{ display: featuredImg2 ? "inline" : "none" }} className='img-fluid' alt="" />
                    </div>
                    <div className='img-mod mt-2' hidden={!featuredImg2}>
                      <label htmlFor='featuredImg2-input'>Update</label>
                      <span onClick={()=>{setFeaturedImg2("")}}>Remove</span>
                    </div>
                    <div className='d-flex align-items-start mt-3 gap-2'>
                      <label htmlFor="logo-accent" className="form-label fw-bold">Logo accent</label>
                      <input ref={logoAccent} type="color" className="form-control form-control-sm form-control-color" id="logo-accent" title="Choose Logo accent"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PostEdit