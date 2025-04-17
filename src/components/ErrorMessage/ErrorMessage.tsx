import ErrorMessageProps from "../../interfaces/errorMessageProps";
import "./ErrorMessage.css"

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className="errorMessageContainer">{message}</div>;
};

export default ErrorMessage;
