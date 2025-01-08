import { useEffect, useRef, useState } from 'react'
import EditNav from '../components/EditNav'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link, useOutletContext, useLocation } from 'react-router-dom'
import "./PostEdit.scss"
import TextEditor from '../components/TextEditor'
import { cloudname } from '../utils/cloudinary'
import Spinner from 'react-bootstrap/Spinner';

const CourseUpdate = () => {
    let [featuredImg1, setFeaturedImg1] = useState("")
    const { setShowLoading, setStaticNotification } = useOutletContext()
    let price = useRef(null);
    let title = useRef(null);
    let tutors = useRef(null);
    let drafted = false;
    let editorRef = useRef(null)
    let imgSrc = useRef(null)
    let tag = useRef(null)
    let { pathname } = useLocation()
    let onEditPage = pathname.includes("/edit")

    useEffect(() => {
        // check if the user has a draft. If yes, load the draft by equating the drafted variable to the createdAt date
        // then fill the form with the draft data by setting their values with the useRef.current.value
    })

    let validate = (input) => {
        if (input.current.value && typeof input.current.value === "string") {
            return input.current.value
        } else {
            input.current.classList.add("is-invalid")
            input.current.scrollIntoView({ block: "center" })
            input.current.focus();
            throw new Error(`${input.current.id} field is empty`)
        }
    }

    let save = async () => {
        if (onEditPage) {
            console.log("Auto Save is Off")
            return
        }
        console.log("Saving")
        drafted = drafted || (new Date()).getTime();
        let payload = {
            featuredImg: featuredImg1,
            title: title.current.value,
            tutors: tutors.current.value,
            price: price.current.value,
            tag: tag.current.value,
            postType: "course",
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
        if (!req.ok) {
            setStaticNotification({ message: "An error occured while trying to save this course", time: (new Date()).toString() })
        }
        let res = await req.json()
        console.log(res)
    }
    let publish = async () => {
        console.log("Publishing")
        drafted = drafted || (new Date()).getTime();
        let payload = {
            featuredImg: featuredImg1,
            title: validate(title),
            tutors: validate(tutors),
            price: validate(price),
            tag: tag.current.value,
            postType: "course",
            content: editorRef.current.getContent(),
            assetFolder: drafted
        }
        setShowLoading(true)
        try {
            let req = await fetch(`/api/courses`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })
            if (!req.ok) {
                throw new Error("An error occured while trying to publish this course")
            }
            setStaticNotification({ message: "New Course Created", time: (new Date()).toString() })
            setTimeout(() => {
                setShowLoading(false)
                
            }, 1000);
        } catch (error) {
            console.log(error)
            setStaticNotification({ message: error.message, time: (new Date()).toString() })
            setShowLoading(false)
        }
    }

    // Text Editor Image Upload Function
    let imageUploadFunction = async (blobInfo, progress) => {
        drafted = drafted || (new Date()).getTime();
        const formData = new FormData();
        formData.append('file', blobInfo.blob());
        formData.append('folder', `course/${drafted}`);
        formData.append('upload_preset', 'fnmi-academy');
        try {
            const req = await fetch(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, {
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
            // setStaticNotification({ message: error.message, time: (new Date()).toString() });
        }
    }

    // set featured Image preview
    let setPreview1 = async (e) => {
        let prevValue = imgSrc.current.src
        drafted = drafted || (new Date()).getTime();
        try {
            setFeaturedImg1(null)
            e.target.setAttribute("disabled", true)
            let imgUpload = e.target.files[0]
            let formData = new FormData()
            formData.append("file", imgUpload)
            formData.append("upload_preset", "fnmi-academy")
            formData.append("folder", `course/${drafted}`)
            let req = await fetch(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, {
                method: "POST",
                body: formData
            })
            if (!req.ok) {
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
            setStaticNotification({ message: error.message, time: time.toString() })
            setFeaturedImg1(prevValue)
            console.log(error)
        }
    }

    return (
        <>
            <header className='fixed-top'>
                <EditNav publishButton={publish} saveButton={save} />
            </header>
            <main id='post-edit'>
                <div className="container">
                    {/* back arrow link */}
                    <Link to={"/courses"} className='text-decoration-none link-dark fs-5 fw-bold'>
                        <span className='me-1'><FaArrowLeftLong /></span> Back
                    </Link>
                    <div className='row mt-3 gy-4'>
                        <div className="col-lg-8">
                            <form className='border vstack gap-3 p-3 bg-white shadow-sm'>
                                {/* Title input */}
                                <div>
                                    <label htmlFor="title-input" className='form-label'>Title</label>
                                    <input ref={title} type="text" id="title-input" className='form-control rounded-0' />
                                    <div className="invalid-feedback">Title Field is empty</div>
                                </div>
                                {/* content input */}
                                <div>
                                    <label htmlFor="content" className='form-label'>Content</label>
                                    <TextEditor editorRef={editorRef} imageUploadFunction={imageUploadFunction} />
                                </div>
                            </form>
                            {/* Tutors inputs */}
                            <div className='border p-3 bg-white mt-3 shadow-sm'>
                                <label htmlFor='tutors' className='fw-bold form-label'>Tutors</label>
                                <input ref={tutors} id='tutors' type="text" className="form-control rounded-0"/>
                                <span className='form-text'>Seperate tutors will a "," e.g Fnmilove Academy, Henry Vicent, Aiyesha Alade</span>
                                <div className="invalid-feedback">Please fill the tutors field</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='vstack gap-3'>
                                {/* course price inputs */}
                                <div className='border p-3 bg-white shadow-sm'>
                                    <label htmlFor='course-name' className='fw-bold form-label'>Price</label>
                                    <div className="input-group">
                                        <span class="input-group-text rounded-0" id="currency-addon">₦</span>
                                        <input ref={price} type="number" id='course-name' className='form-control rounded-0' aria-describedby="currency-addon"/>
                                    </div>
                                    <div className="invalid-feedback">Price Field is empty</div>
                                </div>
                                {/* first feature image */}
                                <div className='border p-3 bg-white shadow-sm'>
                                    <span className='fw-bold'>Featured Image</span>
                                    <div className='mt-3' id='feature-img1'>
                                        <div>
                                            <input accept='image/*' onChange={setPreview1} type="file" id='featuredImg1-input' hidden={true} />
                                            <label htmlFor="featuredImg1-input" className='featuredImg-label' style={{ display: featuredImg1 ? "none" : "block" }}>
                                                <small>
                                                    {featuredImg1 === null ? <div><Spinner animation="border" size='sm' /> <span>Loading</span></div> : "Upload Featured Image"}
                                                </small>
                                            </label>
                                            <img ref={imgSrc} src={featuredImg1 ? `https://res.cloudinary.com/kkenny/image/upload/w_1000,c_limit,dpr_${devicePixelRatio}/${featuredImg1}` : null} style={{ display: featuredImg1 ? "inline" : "none" }} className='img-fluid' alt="" />
                                        </div>
                                        <div className='img-mod mt-2' hidden={!featuredImg1}>
                                            <label htmlFor='featuredImg1-input'>Update</label>
                                            <span onClick={() => { setFeaturedImg1("") }}>Remove</span>
                                        </div>
                                    </div>
                                </div>
                                {/* course tag inputs */}
                                <div className='border p-3 bg-white shadow-sm'>
                                    <label htmlFor='course-tag' className='fw-bold form-label'>Tag</label>
                                    <input ref={tag} type="text" id='course-tag' className='form-control rounded-0' />
                                    <div className="form-text">e.g Top Rated, Expert Recommended, Most Popular etc</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CourseUpdate