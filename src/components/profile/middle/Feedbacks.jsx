import { Avatar, Button, Grid } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import { selectProfile } from "../../../ProfileSlice"
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";


const Feedbacks = () => {

    const [change, setChange] = useState("");
    const [feedbacks, setFeedbacks] = useState([
        {   src: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
            firstName: "Nethan",
            lastName: "Bour",
            des: "Thanks for helpping me with your amaizing talent!",
            role: "CTO"
        }, 
        {   src: "https://thumbs.dreamstime.com/b/old-businessman-portrait-executive-salesman-standing-office-business-people-47156049.jpg",
            firstName: "Eren",
            lastName: "Benth",
            des: "Was fun working with you the other day!",
            role: "CMO"
        }, 
        {   src: "https://thumbs.dreamstime.com/b/beautiful-older-business-woman-wearing-eyeglasses-smiling-portrait-isolated-174022477.jpg",
            firstName: "Reachel",
            lastName: "Madison",
            des: "We should do that again :)",
            role: "Finance"
        },
        {   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkySrD8VjxmNFYAVdkiGqc3eI0rEeSosn8gA&usqp=CAU",
            firstName: "Oliver",
            lastName: "Clark",
            des: "was fun talking with you, seems to me like an interesting person!",
            role: "COO"
        }, 
        {   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XI6u79kJMA8ao9wluO1kADMwi8gzEi8JfQ&usqp=CAU",
            firstName: "Olivia",
            lastName: "Jackson",
            des: "I know I can always count on you :D",
            role: "Product manager"
        }, 
        {   src: "https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?w=900&quality=86&strip=all",
            firstName: "James",
            lastName: "Thompson",
            des: "Thanks for joining me to the loop ;)",
            role: "Sales representative"
        }, 
        {   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lEEhA0viFCmzCZoxmxq1rMQyfGlrCudMqQ&usqp=CAU",
            firstName: "Henry",
            lastName: "Johnson",
            des: "Keep the hard work, I'm seeing you :)",
            role: "CEO"
        }, 
        {   src: "https://media.gettyimages.com/photos/portrait-of-a-happy-businesswoman-wearing-blazer-at-desk-in-corporate-picture-id1358721004?s=612x612",
            firstName: "Ava",
            lastName: "Martinez",
            des: "Just jumped in to your folders, you're so orginized!",
            role: "Advisor"
        },  
    ])
 
    const profile = useSelector(selectProfile)
    const handelChange = (par) => {
        let copy = [...feedbacks];
        copy.push({ src: profile.photo ,firstName: profile.firstName, lastName: profile.lastName, des: par, role: profile.rule});
        setFeedbacks(copy);
        
      };
    return(
        <Box className="body-container">
            <div className="input-container">
                <div className="add-feedback-container">
                    <Avatar className="add-feedback-avatar" alt={profile.firstname} src={profile.photo}></Avatar>
                    <input onChange={(e) => setChange(e.target.value)} className="add-feedback" type="text" placeholder="Add feedback..."/>    
                <Button
                variant="text"
                onClick={() => {
                  handelChange(change);
                }}>
                <SendIcon className="send-icon"/>
                </Button>
                </div>
            </div>
            <div className="feedbacks-contianer">
            {feedbacks.map((e) => {
                return(
                    <div className="feedbacks">
                        <div className="upper-feedback">
                            <Avatar className="feedback-avatar" alt={e.firstname} src={e.src}></Avatar>
                            <p className="feedback-author">
                                {e.firstName + " " + e.lastName}
                                <p className="author-rule">{"(" + e.role + ")"}</p>
                                </p>
                        </div>
                        <div>
                            <p className="feedback-content">{e.des}</p>
                        </div>    
                    </div>
                )
            })}
            </div>
        </Box>
    )
}

export default Feedbacks