import React, { useState } from 'react';

const CommentSection = ({ blogId }) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [likes, setLikes] = useState(0);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment) {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    return (
        <div className="mt-4 border-top">
            <h3 className="mt-4">Comments</h3>
            <form onSubmit={handleCommentSubmit} className="mb-3">
                <div className="input-group">
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment"
                        className="form-control"
                    />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
            <ul className="list-group">
                {comments.map((c, index) => (
                    <li key={index} className="list-group-item">{c}</li>
                ))}
            </ul>
            <div className="mt-3">
                <button onClick={() => setLikes(likes + 1)} className="btn btn-success">
                    Like {likes}
                </button>
            </div>
        </div>
    );
};

export default CommentSection;