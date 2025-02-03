import { Link, useLocation, useOutletContext } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import CreateButton from "../components/CreateButton"
import { fetchPosts } from "../components/MiniCard"
import MiniCard from "../components/MiniCard"


const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [posts, setPosts] = useState([]);
    const {search} = useLocation()
    const [postQuery, setPostQuery] = useState({postType: search.includes("jobs") ? "job" : "", search:""})
    const [showSpinner, setShowSpinner] = useState(true)
    const postLimit = 12
    const [postSkip, setPostSkip] = useState(0);
    const [buttonLoad, setButtonLoad] = useState(false);
    const [hideLoadButton, setHideLoadButton] = useState(false);
    const filteredJobs = useRef(null);
    const {setStaticNotification, user} = useOutletContext();

    // Take caution useEffect(with passed dependency)in Strict Mode. You would have to disable React Strict mode when working with this function in development as strict will execute the function twice, doubling the expexted value
    useEffect(() => {
        if (search.includes("jobs")){
            filteredJobs.current.value = "job"
        }
    }, [])

    useEffect(() => {
        const sideEffect = async () => {
            try {
                let morePost = await fetchPosts(postLimit, postSkip, postQuery);
                if(morePost.length !== 0){
                    setPosts(prevState => [...prevState, ...morePost])
                    setHideLoadButton(false)
                } else {
                    setHideLoadButton(true)
                }
                setButtonLoad(false)
                setShowSpinner(false)
                setPostSkip(prevState => prevState + postLimit)
            } catch (error) {
                setStaticNotification({ message: error.message, time: (new Date()).toString() })
                setShowSpinner(false)
            }
        }
        sideEffect()
    }, [postQuery])

    const handleFilter = (e) =>{
        setShowSpinner(true)
        setPostQuery(prevState => ({...prevState, postType: e.target.value}))
        setPosts([])
        setPostSkip(0)
    }
    const formSubmit = (e) => {
        e.preventDefault()
        setShowSpinner(true)
        setPostQuery(prevState => ({...prevState, search: searchQuery}))
        setPosts([])
        setPostSkip(0)
    }
    const handleSearchInput = (e) => {
        setSearchQuery(e.target.value)
    }
    const handleLoadMore = async()=>{
        setButtonLoad(true)
        let morePost = await fetchPosts(postLimit, postSkip, postQuery);
        if (morePost.length !==0) {
            setPosts(prevState => [...prevState, ...morePost])
            setHideLoadButton(false)
        } else {
            setHideLoadButton(true)
        }
        setButtonLoad(false)
        setPostSkip(prevState => prevState + postLimit)
    }

    return (
        <main>
            <section className="vertical-padding rounded-bottom text-center banner bg-dark">
                <h1 className="text-white fw-bold">Blog</h1>
                <nav className="text-white fw-bold"> <Link className="text-decoration-none" to="/">Home</Link> {'>>'} Blog </nav>
            </section>
            <section className="container mt-5">
                <div className="row justify-content-between gy-3">
                    <div className="col-auto">
                        <select ref={filteredJobs} onChange={handleFilter} className="form-select rounded-0" aria-label="Default select example">
                            <option value="">Filter</option>
                            <option value="job">Jobs</option>
                            <option value="article">Articles</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <form onSubmit={formSubmit} className="input-group search-form">
                            <input type="text" value={searchQuery} onChange={handleSearchInput} className="form-control rounded-0" placeholder="Search Posts" aria-label="Search Blog Form" />
                            <button className="btn btn-primary rounded-0" type="submit"><FaSearch /></button>
                        </form>
                    </div>
                    <section className="mt-4">
                        <div className="container pt-3">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-2 gy-4 justify-content-center">
                                {showSpinner ?   <div className="spinner-border text-primary p-5 fs-3" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div> : 
                                            posts.length === 0 ? <p>No Posts Found</p> :
                                            posts.map((e) => 
                                                <MiniCard 
                                                key={e._id} 
                                                imgPublicID={e.featuredImg || e.companyCoverImg} 
                                                title={e.title} 
                                                applicationDeadline={e.applicationDeadline} 
                                                description={e.description} 
                                                updatedAt={e.updatedAt}
                                                slug={e.slug}
                                                ID={e._id} />
                                            )
                                }
                                <div className="col text-center" style={{display: showSpinner || posts.length === 0 ? "none" : "block"}}>
                                    <p style={{ display: hideLoadButton? "block":"none" }}>No more Posts!!!</p>
                                    <button 
                                        hidden={hideLoadButton}
                                        disabled={buttonLoad} 
                                        onClick={handleLoadMore} 
                                        className="btn btn-outline-primary btn-lg rounded-0 fw-bold">
                                        {buttonLoad ? <><div className="spinner-grow spinner-grow-sm" role="status"></div> Loading</> : 'Load More'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {user && <CreateButton/>}
            </section>
        </main>
    )
}

export default Blog