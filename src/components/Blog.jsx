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

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Itemx ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

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
  console.log(comments);

  const handelChange = (par) => {
    let copy = [...comments];
    copy.push(par);
    setComment(copy);
  };

  return (
    <Box
      sx={{
        width: 400,
        height: "100%",
        backgroundColor: "info.light",
        borderRadius: "12px",
      }}
    >
      <Box
        sx={{
          marginLeft: "20px",
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            overflow: "auto",
            maxHeight: 300,
            bgcolor: "background.paper",
          }}
        >
          <Comment
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            userName="Remy Sharp"
            subject="Brunch this weekend?"
            date="17:13"
          />
          <Divider variant="inset" component="li" />
          <Comment
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
            userName="Travis Howard"
            subject="Wish I could come, but I'm out of town this…"
            date="17:23"
          />
          <Divider variant="inset" component="li" />
          <Comment
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
            userName="Cindy Baker"
            subject="Anyone saw the new shop downsters???"
            date="18:43"
          />
          {comments.map((comment) => {
            return (
              <Comment
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
                userName="Cindy Baker"
                subject={comment}
                date={today.getHours() + ":" + today.getMinutes()}
              />
            );
          })}
        </List>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">Comment</InputLabel>
          <Input
            sx={{ height: 40 }}
            id="input-with-icon-adornment"
            placeholder="Message"
            startAdornment={
              <InputAdornment position="start">
                <Avatar
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                  sx={{ height: 33, width: 33, marginBottom: 0.5 }}
                />
              </InputAdornment>
            }
            onChange={(e) => setChange(e.target.value)}
          />
        </FormControl>
        <Button
          sx={{ marginTop: 2 }}
          variant="text"
          onClick={() => {
            handelChange(change);
          }}
        >
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Blog;
