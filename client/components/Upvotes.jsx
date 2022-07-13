import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Upvotes = props => {
  const [upvotes, setUpvotes] = useState(props.upvotes)
  const [voted, setVoted] = useState(false);

  const handleUpvote = () => {
    if(!voted) {
      const newVote = upvotes + 1;
      setUpvotes(newVote);
      setVoted(true);
    }
  };

  useEffect(() => {
    axios.put('/api/userData', {
      upvotes: props.upvotes + 1,
      qid: props.qid
    });
  }, [upvotes]);
  return (
    <div>
      
      <button className="upvotes" onClick={handleUpvote}>{!voted ? <i class="fa-regular fa-star"></i> : <i class="fa-solid fa-star"></i>} {upvotes}</button>
    </div>
  );
};

export default Upvotes;