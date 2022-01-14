import { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Norification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterFeetback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.bad + this.state.good + this.state.neutral;

  countPositiveFeedbackPercentage = () => {
    let countTotal = this.countTotalFeedback();
    if (!countTotal) {
      countTotal = 1;
    }
    return Math.round((this.state.good * 100) / countTotal);
  };

  render() {
    return (
      <>
        <Section title="Please laeve feetback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.counterFeetback}
          />
        </Section>

        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
export default App;
