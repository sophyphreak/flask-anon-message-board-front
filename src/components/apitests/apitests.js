import React, { useState } from "react"
import NewThread from "./newThread"
import ReportThread from "./reportThread"
import DeleteThread from "./deleteThread"
import NewReply from "./newReply"
import ReportReply from "./reportReply"
import DeleteReply from "./deleteReply"

const Apitests = () => {
  return (
    <div id="testui" style={{ marginLeft: "5%" }}>
      <h2 style={{ textAlign: "left" }}>API Tests:</h2>
      <NewThread />
      <hr />
      <ReportThread />
      <hr />
      <DeleteThread />

      <hr />
      <NewReply />

      <hr />
      <ReportReply />
      <hr />
      <DeleteReply />
    </div>
  )
}

export default Apitests
