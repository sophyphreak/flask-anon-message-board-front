import React, { useState } from "react"

const DeleteReply = () => {
  return (
    <>
      <h4>Delete reply (DELETE /api/replies/:board)</h4>
      <form id="deleteReply">
        <input
          type="text"
          placeholder="board"
          id="board6"
          name="board"
          required=""
        />
        <br />
        <input
          type="text"
          placeholder="thread id"
          name="thread_id"
          required=""
        />
        <br />
        <input
          type="text"
          placeholder="id to delete"
          name="reply_id"
          required=""
        />
        <br />
        <input
          type="text"
          placeholder="password"
          name="delete_password"
          required=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default DeleteReply
