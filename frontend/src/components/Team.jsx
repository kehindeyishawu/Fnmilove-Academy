import { BiSolidSchool } from 'react-icons/bi';
import "./Team.scss"
import TeamCard from './TeamCard';

let members = [
    {
        img: "face1_rl3dax",
        name: "Vincent Henry",
        position: "Cinematographer",
        socialMedia: {
            fb: "",
            ig: "",
            in: "",
            x:  ""
        }
    },
    {
        img: "face2_tpasfv",
        name: "Princess Okafor",
        position: "Hair Stylist",
        socialMedia: {
            fb: "",
            ig: "",
            in: "",
            x:  ""
        }
    },
    {
        img: "face3_af6epz",
        name: "Fatima Abdullahi",
        position: "Fashion Designer",
        socialMedia: {
            fb: "",
            ig: "",
            in: "",
            x:  ""
        }
    },
    {
        img: "face4_z4aeir",
        name: "Emeka Nwosu",
        position: "Photographer",
        socialMedia: {
            fb: "",
            ig: "",
            in: "",
            x:  ""
        }
    },
    {
        img: "face1_rl3dax",
        name: "John Elliot",
        position: "Choregrapher",
        socialMedia: {
            fb: "",
            ig: "",
            in: "",
            x:  ""
        }
    },
    {
        img: "face1_rl3dax",
        name: "Elizabeth Ade",
        position: "Junior Makeup Artist",
        socialMedia: {
            fb: "",
            ig: "",
            in: "",
            x:  ""
        }
    },
    {
        img: "face1_rl3dax",
        name: "Levi Johnson",
        position: "Visual Artist",
        socialMedia: {
            fb: "",
            ig: "",
            in: "",
            x:  ""
        }
    }
]

const Team = ({present=4}) => {
    return (
        <div className="team-container">
            <small className="fw-bold text-primary fs-6 d-block text-center">
                <BiSolidSchool /> {""}
                Our Experts
            </small>
            <h1 className='fw-bold text-center'>Meat Our Team</h1>
            <p className='text-center text-light mb-4'>The Brains Behind the Operation: Dedicated to Your Success and Growth</p>
            <div className="container">
                <div className="row gy-3 justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {members.map((e, i)=>{
                        if (i >= present) {return null}
                        return <TeamCard img={e.img} name={e.name} position={e.position} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team