import { AnswerObject } from "../App";

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNumber: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNumber,
	totalQuestions,
}) => (
	<div className="card">
		<p className="number">
			Question: {questionNumber} / {totalQuestions}
		</p>
		<p className="question" dangerouslySetInnerHTML={{ __html: question }} />
		<div className="answerContainer">
			{answers.map((answer, i) => (
				<div key={i}>
					<button
						className="answerButton"
						disabled={userAnswer ? true : false}
						value={answer}
						onClick={callback}
					>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
					</button>
				</div>
			))}
		</div>
	</div>
);

export default QuestionCard;
