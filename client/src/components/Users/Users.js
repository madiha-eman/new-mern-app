import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPosts } from "../../store/apis";
import DeleteModal from "../subComponents/DeleteModal";
import { useHistory, useParams } from 'react-router-dom'
import Editable from "../Tables/Editable";

function Users() {
  const [state, setstate] = useState([]);
  const [cols, setcols] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' }
  ])
  const history = useHistory();

  const dispatch = useDispatch()
  // const [dummy, setdd] = useState([
  //   {name:'Faiza',email:'faz@gmail.com',id:1},
  //   {name:'Shehla',email:'shehla@gmail.com',id:2},
  const [msg, setmsg] = useState('')

  const handleDelete = async(id) => {
    console.log(id)
    axios.delete('http://localhost:4000/api/users/:id' + id)
      .then((res) => {

        console.log('not del',res.data);

        // console.log(res.data);

        setmsg(`${id} is deleted successfully`);
        history.push('/users')

      })
      .catch((e) => console.log('errrr',e));


  }
  useEffect(() => {
    async function fetchUsers() {
      const users = await axios.get('http://localhost:4000/api/users')
      console.log(users.data.data);
      setstate(users.data.data)

    }
    fetchUsers()
  }, []);

  return (
    <div>
    {msg}
    <Editable rows={state} cols={cols} type='users' onClick={(_id)=>handleDelete()}/>
    <button onClick={()=>handleDelete()}>add</button>
    </div>
  );
}
export default Users;

