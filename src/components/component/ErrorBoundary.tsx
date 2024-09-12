import React from "react";
import { getErrorMessage } from "../../utils/errorMessages";

interface State {
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  State
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <h1>{getErrorMessage(Number((this.state.error as Error).message))}</h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
