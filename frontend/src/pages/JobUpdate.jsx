import { useEffect, useRef, useState } from 'react'
import EditNav from '../components/EditNav'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link, useOutletContext, useLocation, useParams, useNavigate } from 'react-router-dom'
import "./PostEdit.scss"
import TextEditor from '../components/TextEditor'
import { cloudname, cloudAPI } from '../utils/cloudinary'
import Spinner from 'react-bootstrap/Spinner';
import ExpiredSession from '../components/ExpiredSession'

const JobUpdate = () => {
  let [featuredImg1, setFeaturedImg1] = useState("")
  let [featuredImg2, setFeaturedImg2] = useState("")
  const { setShowLoading, setStaticNotification, setFadeNotification } = useOutletContext()
  let logoAccent = useRef(null);
  let companyName = useRef(null);
  let title = useRef(null);
  let jobType = useRef(null);
  let jobLocation = useRef(null);
  let applicationDeadline = useRef(null);
  const [drafted, setDrafted] = useState((new Date()).getTime());
  let editorRef = useRef(null)
  let imgSrc = useRef(null)
  let imgSrc2 = useRef(null)
  let { pathname } = useLocation()
  let onEditPage = pathname.includes("/edit");
  let onCreatePage = pathname.includes("/new");
  let { id } = useParams();
  let navigate = useNavigate();
  const [editerInitialValue, setEditorInitialvalue] = useState("<p> Start putting your ideas here.</p>")
  const [sessionExpired, setSessionExpired] = useState(false)

  useEffect(() => {
    let sideEffect = async () => {
      if (onCreatePage) {
        try {
          setShowLoading(true)
          let req = await fetch(`/api/draft/job`)
          if (!req.ok) {
            if (req.status === 401) {
              setFadeNotification({ message: "Your Session has expired. Login Again", time: (new Date()).toString() })
              return navigate("/fla-admin", { state: { from: pathname } });
            }
            throw new Error("Error trying to check for any saved data from server");
          }
          if (req.status !== 204) {
            let res = await req.json()
            title.current.value = res.title
            setEditorInitialvalue(res.content)
            jobType.current.value = res.jobType;
            jobLocation.current.value = res.jobLocation;
            companyName.current.value = res.companyName;
            applicationDeadline.current.value = res.applicationDeadline;
            setFeaturedImg1(res.companyCoverImg)
            setFeaturedImg2(res.companyLogo)
            logoAccent.current.value = res.logoAccent
            setDrafted(res.assetFolder)
          }
        } catch (error) {
          setFadeNotification({ message: error.message, time: (new Date()).toString() })
        } finally {
          setShowLoading(false)
        }
      }
      if (onEditPage) {
        try {
          setShowLoading(true)
          let req = await fetch(`/api/jobs/${id}`)
          if (!req.ok) {
            if (req.status === 401) throw new Error("You need to be Logged In to do this");
            throw new Error("Couldn't load data for editing");
          } 
          let res = await req.json()
          title.current.value = res.title
          setEditorInitialvalue(res.content)
          jobType.current.value = res.jobType;
          jobLocation.current.value = res.jobLocation;
          companyName.current.value = res.companyName;
          applicationDeadline.current.value = res.applicationDeadline;
          setFeaturedImg1(res.companyCoverImg)
          setFeaturedImg2(res.companyLogo)
          logoAccent.current.value = res.logoAccent
          setDrafted(res.assetFolder)
        } catch (error) {
          setStaticNotification({ message: error.message, time: (new Date()).toString() })
          navigate("/blog");
        } finally {
          setShowLoading(false)
        }
      }
    }
    sideEffect()
  }, [])

  let validate = (input)=>{
    if(input.current.value && typeof input.current.value === "string"){
      return input.current.value
    }else{
      input.current.classList.add("is-invalid")
      input.current.scrollIntoView({block: "center"})
      input.current.focus();
      throw new Error(`${input.current.id} field is empty`)
    }
  }
  
  let save = async()=>{
    if(onEditPage){
      console.log("Auto Save is Off")
      return
    }
    console.log("Saving")
    let payload = {
      companyCoverImg: featuredImg1,
      companyLogo: featuredImg2,
      logoAccent: logoAccent.current.value,
      title: title.current.value,
      jobType: jobType.current.value,
      jobLocation: jobLocation.current.value,
      companyName: companyName.current.value,
      applicationDeadline: applicationDeadline.current.value,
      postType: "job",
      content: editorRef.current.getContent(),
      assetFolder: drafted
    }
    let req = await fetch(`/api/draft`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    if(!req.ok){
      if (req.status === 401) return setSessionExpired(true);
      setStaticNotification({ message: "An error occured while trying to save this job", time: (new Date()).toString() })
    }
    let res = await req.json()
    console.log(res)
  }
  let publish = async()=>{
    console.log("Publishing")
    let payload = {
      companyCoverImg: featuredImg1,
      companyLogo: featuredImg2,
      logoAccent: logoAccent.current.value,
      title: validate(title),
      jobType: validate(jobType),
      jobLocation: validate(jobLocation),
      companyName: validate(companyName),
      applicationDeadline: validate(applicationDeadline),
      content: editorRef.current.getContent(),
      assetFolder: drafted
    }
    setShowLoading(true)
    try {
      let req = await fetch(`/api/jobs/${id || ""}`, {
        method: !id ? "POST" : "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      if (!req.ok) {
        if (req.status === 401) {
          setShowLoading(false)
          return setSessionExpired(true)
        };
        throw new Error("An error occured while trying to publish this job")
      }
      setStaticNotification({ message: !id ? "New Job Created" : "Job Updated", time: (new Date()).toString() })
      let res = await req.json();
      setTimeout(() => {
        setShowLoading(false)
        window.location.href = `/job/${res.id}/${res.slug}`
      }, 1000);
    } catch (error) {
      console.log(error)
      setStaticNotification({ message: error.message, time: (new Date()).toString() })
      setShowLoading(false);
    }
  }

  // Text Editor Image Upload Function
  let imageUploadFunction = async (blobInfo, progress) => {
    const formData = new FormData();
    formData.append('file', blobInfo.blob());
    formData.append('asset_folder', `job/${drafted}`);
    formData.append('upload_preset', 'fnmi-academy');
    try {
      const req = await fetch(`${cloudAPI}`, {
        method: 'POST',
        body: formData
      });
      if (!req.ok) {
        throw new Error('An error occured while trying to upload the image');
      }
      await save();
      const res = await req.json();
      return res.secure_url;
    } catch (error) {
      console.log(error);
      error.remove = true;
      throw error;
    }
  }

  // set featured Image preview
  let setPreview1 = async(e)=>{
    let prevValue = imgSrc.current.src
    try {
      setFeaturedImg1(null)
      e.target.setAttribute("disabled", true)
      let imgUpload = e.target.files[0]
      let formData = new FormData()
      formData.append("file", imgUpload)
      formData.append("upload_preset", "fnmi-academy")
      formData.append("asset_folder", `job/${drafted}`)
      let req = await fetch(`${cloudAPI}`, {
        method: "POST",
        body: formData
      })
      if(!req.ok){
        throw new Error("An error occured while trying to upload the image")
      }
      let res = await req.json()
      await save()
      setFeaturedImg1(res.public_id)
      e.target.removeAttribute("disabled")
      e.target.value = ""
    } catch (error) {
      e.target.removeAttribute("disabled")
      let time = new Date()
      setStaticNotification({message: error.message, time: time.toString()})
      setFeaturedImg1(prevValue)
      console.log(error)
    }
  }
  // set featured2 Image preview
  let setPreview2 = async(e)=>{
    let prevValue = imgSrc2.current.src
    try {
      setFeaturedImg2(null)
      e.target.setAttribute("disabled", true)
      let imgUpload = e.target.files[0]
      let formData = new FormData()
      formData.append("file", imgUpload)
      formData.append("upload_preset", "fnmi-academy")
      formData.append("asset_folder", `job/${drafted}`)
      let req = await fetch(`${cloudAPI}`, {
        method: "POST",
        body: formData
      })
      if (!req.ok) {
        throw new Error("An error occured while trying to upload the image")
      }
      let res = await req.json()
      await save()
      setFeaturedImg2(res.public_id)
      e.target.removeAttribute("disabled")
      e.target.value = ""
    } catch (error) {
      e.target.removeAttribute("disabled")
      setStaticNotification({ message: error.message, time: (new Date()).toString() })
      setFeaturedImg2(prevValue)
      console.log(error)
    }
  }

  return (
    <>
      <header className='fixed-top'>
        <EditNav publishButton={publish} saveButton={save}/>
      </header>
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
                  <input ref={title} type="text" id="title-input" className='form-control rounded-0' />
                  <div className="invalid-feedback">Job Title Field is empty</div>
                </div>
                {/* content input */}
                <div>
                  <label htmlFor="content" className='form-label'>Content</label>
                  <TextEditor editorRef= {editorRef} imageUploadFunction={imageUploadFunction} editerInitialValue={editerInitialValue}/>
                </div>
              </form>
              {/* Job type select */}
              <div className='border p-3 bg-white mt-3 shadow-sm'>
                <label htmlFor='job-type' className='fw-bold form-label'>Type</label>
                <select ref={jobType} id="job-type" className="form-select rounded-0">
                  <option value="">Select Job Type</option>
                  <option value="Full-time">Full Time</option>
                  <option value="Part-time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
                <div className="invalid-feedback">Please select a valid Job type</div>
              </div>
              {/* Job location select */}
              <div className='border p-3 bg-white mt-3 shadow-sm'>
                <label htmlFor='job-location' className='fw-bold form-label'>Location</label>
                <select ref={jobLocation} id="job-location" className="form-select rounded-0">
                  <option value="">Select Job Location</option>
                  <option value="Remote">Remote</option>
                  <option value="Onsite">Onsite</option>
                  <option value="Hybrid">Hybrid</option>
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
                      <input accept='image/*' onChange={setPreview1} type="file" id='featuredImg1-input' hidden={true}/>
                      <label htmlFor="featuredImg1-input" className='featuredImg-label' style={{display: featuredImg1? "none": "block"}}>
                        <small>
                          {featuredImg1 === null? <div><Spinner animation="border" size='sm' /> <span>Loading</span></div> : "Upload Banner Image"}
                        </small>
                      </label>
                      <img ref={imgSrc} src={featuredImg1 ? `${cloudname}/w_1000,c_limit,dpr_${devicePixelRatio}/${featuredImg1}` : null} style={{ display: featuredImg1 ? "inline" : "none" }} className='img-fluid' alt="" />
                    </div>
                    <div className='img-mod mt-2' hidden={!featuredImg1}>
                      <label htmlFor='featuredImg1-input'>Update</label>
                      <span onClick={()=>{setFeaturedImg1("")}}>Remove</span>
                    </div>
                  </div>
                  {/* feature image 2 for job and logo image */}
                  <div className='mt-3' id='feature-img2'>
                    <div>
                      <input accept='image/*' onChange={setPreview2} type="file" id='featuredImg2-input' hidden={true}/>
                      <label htmlFor="featuredImg2-input" className='featuredImg-label' style={{display: featuredImg2? "none": "block"}}>
                        <small>
                          {featuredImg2 === null ? <div><Spinner animation="border" size='sm' /> <span>Loading</span></div> : "Upload Logo"}
                        </small>
                        <div className='form-text'>Formats: png, webp</div>
                      </label>
                      <img ref={imgSrc2} src={featuredImg2 ? `${cloudname}/w_1000,c_limit,dpr_${devicePixelRatio}/${featuredImg2}` : null} style={{ display: featuredImg2 ? "inline" : "none" }} className='img-fluid' alt="" />
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
        <ExpiredSession sessionExpired={sessionExpired} setSessionExpired={setSessionExpired} />
      </main>
    </>
  )
}

export default JobUpdate