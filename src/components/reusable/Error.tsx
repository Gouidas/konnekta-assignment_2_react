// Importing required resources
import React from 'react';
import { ErrorComponentProps } from '../../lib/types';

// ErrorComponent is a functional component responsible for rendering the error message
// It receives props as per ErrorComponentProps type, which contains:
// 1. message: The error message to be displayed
// 2. visible: A boolean to determine if the error should be visible
// 3. dismissError: A function to dismiss the error message
const ErrorComponent: React.FC<ErrorComponentProps> = ({ message, visible, dismissError, dismissable = true }) => {
    // If visible is false, render nothing
    if (!visible) {
        return null;
    }

    // If visible is true, render the error message along with a dismiss button
    return (
        <div className="error-component">
            {/* Display the error message */}
            <span>{message}</span>
            {/* Add a dismiss button to hide the error message, it calls the dismissError function when clicked. Only render the button if the error is dismissable. */}
            {dismissable && <button onClick={dismissError}><b>X</b></button>}
        </div>
    );
};

export default ErrorComponent;
