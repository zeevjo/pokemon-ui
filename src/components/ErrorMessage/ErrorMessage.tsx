import ErrorMessageProps from "../../interfaces/ErrorMessageProps";
import "./ErrorMessage.css"

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className="errorMessageContainer">{message}</div>;
};

export default ErrorMessage;
