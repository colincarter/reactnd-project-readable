import React from "react";
import FlatButton from "material-ui/FlatButton";

const VotingButtons = ({ post, incVoteScore, decVoteScore }) => {
  return (
    <span>
      <FlatButton
        title="Increment Voting Score"
        label="+"
        style={{ minWidth: 1 }}
        onClick={e => {
          e.stopPropagation();
          incVoteScore(post);
        }}
      />
      <FlatButton
        title="Decrement Voting Score"
        label="-"
        style={{ minWidth: 1 }}
        onClick={e => {
          e.stopPropagation();
          decVoteScore(post);
        }}
      />
    </span>
  );
};

export default VotingButtons;
