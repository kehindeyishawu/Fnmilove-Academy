import { useState } from 'react'
import EditNav from '../components/EditNav'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import "./PostEdit.scss"
import TextEditor from '../components/TextEditor'

const PostEdit = () => {
  let [featuredImg1, setFeaturedImg1] = useState("")
  let [featuredImg2, setFeaturedImg2] = useState("")
  let [postType, setPostType] = useState("")

  let setPreview1 = (e)=>{
    let imgUpload = e.target.files[0]
    setFeaturedImg1(URL.createObjectURL(imgUpload))
  }
  let setPreview2 = (e)=>{
    let imgUpload = e.target.files[0]
    setFeaturedImg2(URL.createObjectURL(imgUpload))
  }
  let handlePickPostType = (e)=>{
    setPostType(e.target.value)
  }
  return (
    <>
      <div className='fixed-top'>
        <EditNav/>
      </div>
      <main id='post-edit'>
        <div className="container">
          <Link to={""} className='text-decoration-none link-dark fs-5 fw-bold'>
            <span className='me-1'><FaArrowLeftLong/></span> Home(dynamic)
          </Link>
          <div className='row mt-3 gy-4'>
            <div className="col-lg-8">
              <form className='border vstack gap-3 p-3 bg-white shadow-sm'>
                <div>
                  <label htmlFor="title-input" className='form-label'>Title</label>
                  <input type="text" id="title-input" className='form-control rounded-0' />
                </div>
                <div>
                  <label htmlFor="content" className='form-label'>Content</label>
                  <TextEditor/>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className='vstack gap-3'>
                <div className='border p-3 bg-white shadow-sm'>
                  <span className='fw-bold'>Post Type</span>
                  <select onChange={handlePickPostType} value={postType} className='form-select rounded-0 mt-1' name="posttype">
                    <option value={null} selected>Choose post type</option>
                    <option value="Article">Article</option>
                    <option value="Job">Job</option>
                    <option value="Course">Course</option>
                  </select>
                </div>
                <div className='border p-3 bg-white shadow-sm'>
                  <span className='fw-bold'>Url Slug</span>
                  <input type="text" className='form-control rounded-0 mt-1' name="slug" />
                </div>
                <div className='border p-3 bg-white shadow-sm'>
                  <span className='fw-bold'>Featured Image</span>
                  <div className='mt-3' id='feature-img1'>
                    <div>
                      <input onChange={setPreview1} type="file" id='featuredImg1-input' hidden={true}/>
                      <label htmlFor="featuredImg1-input" className='featuredImg-label' style={{display: featuredImg1? "none": "block"}}>
                        <small>Upload {postType === "Job"? "Banner" : "Image" }</small>
                        <div className='form-text'>Max File Size:</div>
                      </label>
                      <img src={featuredImg1} style={{ display: featuredImg1 ? "inline" : "none" }} className='img-fluid' alt="" />
                    </div>
                    <div className='img-mod mt-2' hidden={!featuredImg1}>
                      <label htmlFor='featuredImg1-input'>Update</label>
                      <span onClick={()=>{setFeaturedImg1("")}}>Remove</span>
                    </div>
                  </div>
                  <div className='mt-3' id='feature-img2' hidden={postType!=="Job"}>
                    <div>
                      <input onChange={setPreview2} type="file" id='featuredImg2-input' hidden={true}/>
                      <label htmlFor="featuredImg2-input" className='featuredImg-label' style={{display: featuredImg2? "none": "block"}}>
                        <small>Upload Logo</small>
                        <div className='form-text'>Max File Size:</div>
                      </label>
                      <img src={featuredImg2} style={{ display: featuredImg2 ? "inline" : "none" }} className='img-fluid' alt="" />
                    </div>
                    <div className='img-mod mt-2' hidden={!featuredImg1}>
                      <label htmlFor='featuredImg2-input'>Update</label>
                      <span onClick={()=>{setFeaturedImg2("")}}>Remove</span>
                    </div>
                    <div className='d-flex align-items-start mt-3 gap-2'>
                      <label htmlFor="logo-accent" className="form-label fw-bold">Logo accent</label>
                      <input type="color" className="form-control form-control-sm form-control-color" id="logo-accent" title="Choose Logo accent"></input>
                    </div>
                  </div>
                </div>
                {/* <div className='border p-3 bg-white shadow-sm'>
                  <p>jbxmccx</p>
                  <input type="text" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PostEdit