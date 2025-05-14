import css from "./App.module.css";
// import Profile from "../Profile/Profile";
// import FriendList from "../FriendList/FriendList";
// import TransactionHistory from "../TransactionHistory/TransactionHistory";
// import userData from "../Profile/userData.json";
// import friends from "../FriendList/friends.json";
// import transactions from "../TransactionHistory/transactions.json";
import { useState } from "react";
import { useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import ResetBtn from "../ResetBtn/ResetBtn";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedObject = window.localStorage.getItem("saved-feedback");

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className={css.container}>
      <Description />
      <Options update={updateFeedback} type={"good"} />
      <Options update={updateFeedback} type={"neutral"} />
      <Options update={updateFeedback} type={"bad"} />
      {totalFeedback > 0 && <ResetBtn resetFunction={resetFeedback} />}
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        "No feedback yet"
      )}
      {/* <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </div>
  );
}
