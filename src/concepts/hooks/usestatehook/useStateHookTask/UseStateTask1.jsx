import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdHeartBroken } from "react-icons/md";

const UseStateTask1=()=>{
    const[proposal,setProposal]=useState(<IoIosHeartEmpty />)
    const acceptProposal=()=>{
        setProposal(<GoHeartFill fill="red"/>)
    }
    const rejectProposal=()=>{
        setProposal(<MdHeartBroken fill="red"/>)
    }
    const reset=()=>{
        setProposal(<IoIosHeartEmpty />)
    }
    return (
        <div>
            <div className="mainbox">
            <div className="box">
              {/* {
                (proposal===null)?<IoIosHeartEmpty />:(proposal===true)?<GoHeartFill fill="red"/>:<MdHeartBroken fill="red"/>
              } */}
            </div>
            <div className="heart">
                {
                    proposal
                }
            </div>
            <div className="btn">
                <button onClick={acceptProposal}>Accept</button>
                <button onClick={rejectProposal}>Reject</button>
                <button onClick={reset}>reset</button>
            </div>
            </div>
        </div>
    )
}
export default UseStateTask1