import { BtnList, BtnItem, Btn } from './Feedback.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnList>
      {options.map(option => {
        return (
          <BtnItem
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            <Btn>{option}</Btn>
          </BtnItem>
        );
      })}
    </BtnList>
  );
}
