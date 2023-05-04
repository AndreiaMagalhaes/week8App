import "./index.css"
import Image from "mui-image"
import { Stamp } from "../stamp"

export function Card({ user }) {
    const { name, department, grade, imgSrc, wish, sender } = user
    
    return (
        <div className="card">
            <div className="card-content">
                <div className="addresse_infos">
                    <div className="infos">
                        <div className="name">{name}</div>
                        <div className="department">{department + " " + grade}</div>
                    </div>                    
                    <div className="photo">
                        <div className="photo_content" />
                    </div>
                </div>
                <Stamp/>
                <div className="message_part">
                    <div className="years">
                        <div className="year1_bgd">
                            <div className="year1_text">2019</div>
                        </div>
                        <div className="year2_bgd">
                            <div className="year2_text">2023</div>
                        </div>  
                    </div>
                    <div className="wish">{wish + " - " + sender}</div>
                </div>
            </div>
        </div>

  
    )
  }





