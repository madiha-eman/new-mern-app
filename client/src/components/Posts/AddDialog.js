import React, { useState, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { Dialog, DialogActions, DialogContent } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField, Divider } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});



export default function AddDialog(props) {

    // console.log(props);

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [img, setimg] = useState('')
    const [user, setuser] = useState('')
    const [token, settoken] = useState('')


    const history = useHistory();
    

    // for alert if email already exists
    const [unique, setUnique] = useState(true);


    // add new post
    const handleSubmit = (e) => {
        e.preventDefault()
        let newPost = { title, description, img,user};
        axios.post('http://localhost:4000/api/posts/add',newPost ,
          {
            
            headers: {
            'Content-Type': 'application/json',
            'Authorization': token    }
    })
          .then(res => {
                    console.log(res)
                    //history.push('/posts');
          })
          .catch(err => console.log(err, 'error'));
      }

  return (
    <div>

      <Dialog fullWidth={true} onClose={props.mainHandleClose} aria-labelledby="customized-dialog-title" open={props.mainOpen}>
        <DialogTitle id="customized-dialog-title" onClose={props.mainHandleClose}>
          Add New Post
        </DialogTitle>
        <DialogContent dividers>

        <form onSubmit={handleSubmit}>
        <Row className="mt-5" >
          <Col lg={3} md={2} sm={1} xs={1}></Col>
          <Col lg={6} md={8} sm={10} xs={10}>
            <ListGroup>
              <ListGroup.Item variant="primary" className="col-headers">
                New Post
            </ListGroup.Item>
              <ListGroup.Item variant="light">
                <Row>
                  <Col className="col-headers">Title</Col>
                  <Col>
                    <input type="text" name='title' onChange={(e) => settitle(e.target.value)} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-headers">Desc</Col>
                  <Col>
                    <input type="text" name='description' onChange={(e) => setdescription(e.target.value)} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col-headers">Desc</Col>
                  <Col>
                    <FileBase64
                      multiple={false}
                      onDone={({base64})=>setimg(base64)}
                    />                </Col>
                </Row>
                <Row className="my-2">
                  <Col className="text-center">
                    <Button type='submit' variant="info" size="md">
                      Add
                  </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={3} md={2} sm={1} xs={1}></Col>
        </Row>
      </form>

        </DialogContent>
        
      </Dialog>
    </div>
  );
}