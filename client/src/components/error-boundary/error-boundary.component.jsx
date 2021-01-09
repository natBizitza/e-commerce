import React from "react";
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor(){
        super();

        this.state = {
          hasErrored: false  
        };
    }

    //allows us to catch the error ahead of time when it gets thrown inside of any children nested inside the ErrorBoundary component
    static getDerivedStateFromError(error) {
        //process the error
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/oEUksmz.png'/>
                    <ErrorImageText>Don’t Cry Over Spilled Page</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;