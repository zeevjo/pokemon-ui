import "./ErrorMessage.css";

interface ErrorMessageProps  {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className="errorMessageContainer">{message}</div>;
};
