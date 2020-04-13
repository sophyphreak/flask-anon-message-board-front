import React from "react"
import { Link } from "gatsby"

import "./style.css"
import Apitests from "../components/apitests/apitests"

const IndexPage = () => (
  <div>
    <header style={{ marginLeft: "5%", marginTop: "5%" }}>
      <h1>ISQA_3 - Anon Message Board</h1>
    </header>
    <div id="userstories" style={{ marginLeft: "5%", marginTop: "5%" }}>
      <h3>User Stories</h3>
      <ol>
        <li>
          I can <b>POST</b> a thread to a specific message board by passing form
          data <code>text</code> and <code>delete_password</code> to
          <i>/api/threads/{"{board}"}</i>.(Recomend res.redirect to board page
          /b/{"{board}"}) Saved will be <code>_id</code>, <code>text</code>,
          <code>created_on</code>(date&amp;time),
          <code>bumped_on</code>(date&amp;time, starts same as created_on),
          <code>reported</code>(boolean), <code>delete_password</code>, &amp;
          <code>replies</code>(array).
        </li>
        <li>
          I can <b>POST</b> a reply to a thead on a specific board by passing
          form data <code>text</code>, <code>delete_password</code>, &amp;
          <code>thread_id</code> to <i>/api/replies/{"{board}"}</i> and it will
          also update the bumped_on date to the comments date.(Recomend
          res.redirect to thread page /b/{"{board}"}/{"{thread_id}"}) In the
          thread's 'replies' array will be saved <code>_id</code>,{" "}
          <code>text</code>,<code>created_on</code>,{" "}
          <code>delete_password</code>, &amp;
          <code>reported</code>.
        </li>
        <li>
          I can <b>GET</b> an array of the most recent 10 bumped threads on the
          board with only the most recent 3 replies from
          <i>/api/threads/{"{board}"}</i>. The <code>reported</code> and
          <code>delete_passwords</code> fields will not be sent.
        </li>
        <li>
          I can <b>GET</b> an entire thread with all it's replies from
          <i>
            /api/replies/{"{board}"}?thread_id={"{thread_id}"}
          </i>
          . Also hiding the same fields.
        </li>
        <li>
          I can delete a thread completely if I send a <b>DELETE</b> request to
          <i>/api/threads/{"{board}"}</i> and pass along the
          <code>thread_id</code> &amp; <code>delete_password</code>. (Text
          response will be 'incorrect password' or 'success')
        </li>
        <li>
          I can delete a post(just changing the text to '[deleted]') if I send a
          <b>DELETE</b> request to <i>/api/replies/{"{board}"}</i> and pass
          along the <code>thread_id</code>, <code>reply_id</code>, &amp;
          <code>delete_password</code>. (Text response will be 'incorrect
          password' or 'success')
        </li>
        <li>
          I can report a thread and change it's reported value to true by
          sending a <b>PUT</b> request to <i>/api/threads/{"{board}"}</i> and
          pass along the <code>thread_id</code>. (Text response will be
          'success')
        </li>
        <li>
          I can report a reply and change it's reported value to true by sending
          a <b>PUT</b> request to <i>/api/replies/{"{board}"}</i> and pass along
          the
          <code>thread_id</code> &amp; <code>reply_id</code>. (Text response
          will be 'success')
        </li>
      </ol>
      <img src="https://cdn.gomix.com/8f5547a1-a0d6-48f6-aa38-51753a0105f4%2FScreen%20Shot%202017-01-02%20at%201.04.10%20AM.png" />
      <br />
      <br />
      <h2>
        <Link to="/board/">
          Go to testing <i>'/b/general/'</i> board
        </Link>
      </h2>
    </div>
    <p style={{ padding: "3%", border: "solid black 1px" }}>
      <b>
        Try yourself with the endpoint of <br />{" "}
        <code>
          https://flask-stock-price-checker.andrew-horn-portfolio.life/api/stock-prices
        </code>
      </b>
    </p>
    <hr style={{ margin: "50px" }} />
    <Apitests />
    <hr style={{ margin: "50px", marginTop: "200px" }} />
    {/* <!-- Your web-app is https, so your scripts need to be too -->
    <script
      src="https://code.jquery.com/jquery-2.2.1.min.js"
      integrity="sha256-gvQgAFzTH6trSrAWoH1iPo9Xc96QxSZ3feW6kem+O00="
      crossorigin="anonymous"
    ></script>
    <script>
      $(function() {
        $('#newThread').submit(function () {
          var board = $('#board1').val();
          $(this).attr('action', '/api/threads/' + board);
        });
        $('#newReply').submit(function() {
          var board = $('#board4').val();
          $(this).attr('action', '/api/replies/' + board);
        });
        $('#reportThread').submit(function(e) {
          var url = '/api/threads/' + $('#board2').val();
          $.ajax({
        type: 'PUT',
            url: url,
            data: $(this).serialize(),
            success: function(data) {
        alert(data);
            }
          });
          e.preventDefault();
        });
        $('#deleteThread').submit(function(e) {
          var url = '/api/threads/' + $('#board3').val();
          $.ajax({
        type: 'DELETE',
            url: url,
            data: $(this).serialize(),
            success: function(data) {
        alert(data);
            }
          });
          e.preventDefault();
        });
        $('#reportReply').submit(function(e) {
          var url = '/api/replies/' + $('#board5').val();
          $.ajax({
        type: 'PUT',
            url: url,
            data: $(this).serialize(),
            success: function(data) {
        alert(data);
            }
          });
          e.preventDefault();
        });
        $('#deleteReply').submit(function(e) {
          var url = '/api/replies/' + $('#board6').val();
          $.ajax({
        type: 'DELETE',
            url: url,
            data: $(this).serialize(),
            success: function(data) {
        alert(data);
            }
          });
          e.preventDefault();
        });
      });
    </script> */}
  </div>
)

export default IndexPage
