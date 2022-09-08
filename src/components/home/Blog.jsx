import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import { FixedSizeList } from "react-window";
import { useState } from "react";
import "./style.css";
import { selectProfile } from "../../ProfileSlice";
import { useSelector } from "react-redux";

const Comment = (props) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={props.alt} src={props.src} />
      </ListItemAvatar>
      <ListItemText
        primary={props.userName}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {props.subject}
            </Typography>
            {" " + props.date}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

const Blog = () => {
  let today = new Date();
  const [change, setChange] = useState("");
  const [comments, setComment] = useState([]);

  const handelChange = (par) => {
    let copy = [...comments];
    copy.push(par);
    setComment(copy);
  };

  const values = useSelector(selectProfile);

  return (
    <Box className="blog-container backgroung-brown">
      <Box className="blog">
        <List className="comments-container">
          <Comment
            alt="Remy Sharp"
            src="https://www.aceshowbiz.com/images/photo/gary_oldman.jpg"
            userName="Remy Sharp"
            subject="Brunch this weekend?"
            date="17:13"
          />
          <Divider variant="inset" component="li" />
          <Comment
            alt="Travis Howard"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            userName="Travis Howard"
            subject="Wish I could come, but I'm out of town this…"
            date="17:23"
          />
          <Divider variant="inset" component="li" />
          <Comment
            alt="Cindy Baker"
            src="https://t3.ftcdn.net/jpg/03/17/23/90/360_F_317239009_UW4LCUmTHOxYyH4W9RHTIsslLygTonc9.jpg"
            userName="Cindy Baker"
            subject="Anyone saw the new shop downsters???"
            date="18:43"
          />
          {comments.map((comment) => {
            return (
              <div>
                <Divider variant="inset" component="li" />
                <Comment
                  alt="Cindy Baker"
                  src={values.photo}
                  userName={values.firstName + " " + values.lastName}
                  subject={comment}
                  date={today.getHours() + ":" + today.getMinutes()}
                />
              </div>
            );
          })}
        </List>
        <FormControl className="add-comment-container" variant="standard">
          <InputLabel
            className="comment-lable"
            htmlFor="input-with-icon-adornment"
          ></InputLabel>
          <Input
            sx={{ height: 40, marginLeft: 3, marginRight: 3 }}
            id="input-with-icon-adornment"
            placeholder="Message"
            onChange={(e) => setChange(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <Avatar
                  alt="Cindy Baker"
                  src={values.photo}
                  sx={{ height: 33, width: 33, marginBottom: 0.5 }}
                  />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <Button
                variant="text"
                onClick={() => {
                  handelChange(change);
                }}>
            <SendIcon/>
          </Button>
                </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Blog;
