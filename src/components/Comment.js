import {useState} from "react";
import bin from "./images/bin.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Comment.css";

const Comment = () => {
    const [comments,setComments] = useState(["useState","useEffect"]) ;
    const [text, setText] = useState("");
    const addCommentChangeHandle = (e) => {
        setText(e.target.value);
    }

    const addCommentClickHandle = (e) => {
        e.preventDefault();
        if(text !== "") {
            setComments([...comments, text]);
        }
        setText("");
    }

    const deleteHandle = (text) => {
        const removedComments = comments.filter(item=>item !==text);
        setComments(removedComments);
    }

    return (
        <>
            <Form onSubmit={addCommentClickHandle}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={addCommentChangeHandle} value={text} type="text"  />
                </Form.Group>
                <Button type="submit">
                    ADD COMMENT
                </Button>
            </Form>

            {comments.map((item)=>{
                return<ListGroup className="list">
                        <ListGroup.Item className="listItem">
                            <div className="item-text">{item}</div>
                            <img onClick={()=>deleteHandle(item)} draggable="false" src={bin} alt=""/>
                        </ListGroup.Item>
                    </ListGroup>
            })}
        </>
    );
};

export default Comment;
