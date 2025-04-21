import "./ErrorMessage.css";

interface ErrorMessageProps  {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className="errorMessageContainer">{message}</div>;
};

export default ErrorMessage;
