import HomePage from './modules/home/HomePage';
import ErrorBoundary from './wrappers/ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            <HomePage />
        </ErrorBoundary>
    );
}

export default App;
