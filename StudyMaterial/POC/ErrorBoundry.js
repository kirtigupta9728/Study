// Error Boundaries: Error Boundaries basically provide some 
//sort of boundaries or checks on errors, 
//They are React components that are used to handle 
//JavaScript errors in their child component tree.

// React components that catch JavaScript errors
/// anywhere in their child component tree, 
//log those errors, and display a fallback UI. 
//It catches errors during rendering, in lifecycle methods, etc.

// Reason to Use: Suppose there is an error in JavaScript 
//inside component then it used to corrupt React’s 
//internal state and cause it to emit cryptic errors. 
//Error boundaries help in removing these errors and 
//display a Fallback UI instead(Which means a display of 
//an error that something broke in the code).


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }
  
  class BuggyCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 5) {
        // Simulate a JS error
        throw new Error('I crashed!');
      }
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
  }
  
  function App() {
    return (
      <div>
        <p>
          <b>
            This is an example of error boundaries in React 16.
            <br /><br />
            Click on the numbers to increase the counters.
            <br />
            The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
          </b>
        </p>
        <hr />
        <ErrorBoundary>
          <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <ErrorBoundary><BuggyCounter /></ErrorBoundary>
        <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  