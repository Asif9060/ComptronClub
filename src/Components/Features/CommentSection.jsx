import { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ eventId }) => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (eventId) {
      fetchComments();
    }
  }, [eventId]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `https://comptron-server-2.onrender.com/api/comments/${eventId}`
      );
      setComments(response.data.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }

    try {
      await axios.post(
        "https://comptron-server-2.onrender.com/api/comments/add",
        {
          name,
          email,
          message,
          eventId,
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      fetchComments();
    } catch (error) {
      setError("Failed to submit comment. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 text-white w-[132rem] p-4 rounded-lg shadow-md mt-4">
      <div className="p-4 max-w-lg flex flex-col mx-auto add-comment">
        <h2 className="text-2xl font-bold mb-4">Feedback</h2>

        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full comment-input p-2 border rounded mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 comment-input border rounded mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your feedback"
            className="w-full p-2 border rounded mb-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 submit-btn text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>

        <div>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment._id} className="border-b comments-section py-2">
                <p className="font-bold text-white mb-2">{comment.name}</p>
                <p className="comment-box">{comment.message}</p>
                <small className="text-gray-500">
                  {new Date(comment.createdAt).toLocaleString()}
                </small>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to share your thoughts!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
