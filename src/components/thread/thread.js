import React, { useState, useEffect } from "react"
import axios from "axios"
import { useQueryParam, StringParam } from "use-query-params"

const Thread = () => {
  const [thread_id] = useQueryParam("thread_id", StringParam)
  const [_id, setId] = useState(null)
  const [bumped_on, setBumpedOn] = useState(undefined)
  const [text, setText] = useState("")
  const [replies, setReplies] = useState([])

  const [deletePassword, setDeletePassword] = useState("")
  const [newReplyText, setNewReplyText] = useState("")
  const [newReplyDeletePassword, setNewReplyDeletePassword] = useState("")

  useEffect(() => {
    ;(async function fetchData() {
      try {
        const response = await axios.get(
          `https://flask-anon-message-board.andrew-horn-portfolio.life/api/replies/general?thread_id=${thread_id}`
        )
        setId(response.data._id)
        setBumpedOn(response.data.bumped_on)
        setText(response.data.text)
        setReplies(response.data.replies)
      } catch (e) {
        console.log(e)
      }
    })()
  })

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
        {replies.map((replyData, index) => (
          <Reply replyData={replyData} key={index} />
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

const Reply = ({ replyData: { _id, text, created_on, thread_id } }) => {
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

export default Thread
