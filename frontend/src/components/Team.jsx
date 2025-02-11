import { BiSolidSchool } from 'react-icons/bi';
import "./Team.scss"
import TeamCard from './TeamCard';

let members = [
    {
        img: "Team_Makeup_Artist_r0typm",
        name: "Elisabeth Omashaye",
        position: "Makeup Artist",
        social: {
            fb: "",
            ig: "",
            in: "",
            x:  ""
        }
    },
    {
        img: "Team_Esthetician_ax6",
        name: "Isoken Isibo",
        position: "Esthetician",
        social: {
            fb: "",
            ig: "",
            in: "",
            x:  ""
        }
    },
    {
        img: "Vincent_Henry_nvfoly",
        name: "Vincent Henry",
        position: "SMM/Cinematographer",
        social: {
            fb: "",
            ig: "",
            in: "",
            x:  ""
        }
    },
    {
        img: "Team_CEO_mkoobc",
        name: "Emeka Nwosu",
        position: "Photographer",
        social: {
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
        social: {
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
        social: {
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
        social: {
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
                        return <TeamCard key={e.img} img={e.img} name={e.name} position={e.position} social={e.social} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team