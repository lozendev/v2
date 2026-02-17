import ErrorBoundary from './ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <LozenApp />
    </ErrorBoundary>
  </StrictMode>,
)
