import React, { useState } from "react"
import { Link } from "gatsby"
import axios from "axios"

const PartialThread = ({
  threadData: { _id, replies, bumped_on, text, reply_count },
}) => {
  const [deletePassword, setDeletePassword] = useState("")
  const [newReplyText, setNewReplyText] = useState("")
  const [newReplyDeletePassword, setNewReplyDeletePassword] = useState("")

  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.delete(
        `https://flask-anon-message-board.andrew-horn-portfolio.life/api/threads/general?thread_id=${_id}&delete_password=${deletePassword}`
      )
      alert(response.data.message || "incorrect password")
      setDeletePassword("")
    } catch (e) {
      console.log(e)
    }
  }

  const handleNewReply = async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        `https://flask-anon-message-board.andrew-horn-portfolio.life/api/replies/general`,
        {
          thread_id: _id,
          text: newReplyText,
          delete_password: newReplyDeletePassword,
        }
      )
      setNewReplyText("")
      setNewReplyDeletePassword("")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div style={{ border: "black 1px solid" }}>
      <div style={{ margin: "1% 0 0 1%" }}>
        <h6>
          id: {_id} ({bumped_on})
        </h6>
        <button onClick={() => alert("reported")}>Report</button>
        <br />
        <input
          placeholder="password"
          required={true}
          value={deletePassword}
          onChange={({ target: { value } }) => setDeletePassword(value)}
        />
        <button onClick={handleDelete}>Delete</button>

        <br />
        <br />
        <h3>{text}</h3>
      </div>
      <div style={{ marginLeft: "5%" }}>
        <h4>
          {reply_count} replies total ({reply_count >= 3 ? reply_count - 3 : 0}{" "}
          hidden)-{" "}
          <Link to={`/thread?thread_id=${_id}`}>See the full thread here</Link>.
        </h4>
        {replies.map((replyData, index) => (
          <PartialReply replyData={replyData} key={index} />
        ))}
        <br />
        <textarea
          placeholder="quick reply..."
          value={newReplyText}
          onChange={({ target: { value } }) => setNewReplyText(value)}
        />
        <br />
        <input
          placeholder="password to delete"
          value={newReplyDeletePassword}
          onChange={({ target: { value } }) => setNewReplyDeletePassword(value)}
        />
        <button onClick={handleNewReply}>Submit</button>
      </div>
      <br />
      <br />
      <hr />
    </div>
  )
}

const PartialReply = ({ replyData: { _id, text, created_on, thread_id } }) => {
  const [deletePassword, setDeletePassword] = useState("")
  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.delete(
        `https://flask-anon-message-board.andrew-horn-portfolio.life/api/replies/general?thread_id=${thread_id}&delete_password=${deletePassword}&reply_id=${_id}`
      )
      alert(response.data.message || "incorrect password")
      setDeletePassword("")
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div style={{ border: "black 1px dotted" }}>
      <h6>
        id: {_id} ({created_on})
      </h6>
      <button onClick={() => alert("reported")}>Report</button>
      <br />
      <input
        placeholder="password"
        value={deletePassword}
        onChange={({ target: { value } }) => setDeletePassword(value)}
      />
      <button onClick={handleDelete}>Delete</button>
      <p>
        <b>{text}</b>
      </p>
    </div>
  )
}

export default PartialThread
