import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error);
    console.error("Component stack:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          <h2>Something went wrong.</h2>
          <p>This part of Addis Eats could not be displayed.</p>
          <button
            onClick={() =>
              this.setState({
                hasError: false,
              })
            }
          >
            Try Again
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
