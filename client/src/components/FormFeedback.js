import { StyledFormFeedback } from '../styles';

const FormFeedback = ({ success, message }) => {
    switch(success) {
        case (1):
            return (
                <StyledFormFeedback>
                    <div className="success-msg">
                        <span>Success! Playlist Generated.</span>
                    </div>
                </StyledFormFeedback>)
        case (-1):
            return (
            <StyledFormFeedback>
                <div className="error-msg">
                    <span>Oops! Something went wrong.</span>
                </div>
            </StyledFormFeedback>)
        case (-2):
            return (
                <StyledFormFeedback>
                    <div className="warning-msg">
                        <span>{message}</span>
                    </div>
                </StyledFormFeedback>)
        default:
            return (<StyledFormFeedback></StyledFormFeedback>)
    }
};

export default FormFeedback;
