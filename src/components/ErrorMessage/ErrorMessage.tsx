import ErrorMessageProps from "../../interfaces/ErrorMessageProps";

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div>{message}</div>;
};

export default ErrorMessage;
