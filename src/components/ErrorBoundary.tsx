import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md mx-auto text-center p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Oops, quelque chose s'est mal passé
            </h1>
            <p className="text-gray-600 mb-6">
              Une erreur technique est survenue. Veuillez rafraîchir la page ou revenir plus tard.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Rafraîchir la page
              </button>
              <a
                href="/"
                className="block w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Retour à l'accueil
              </a>
            </div>
            <noscript>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                  JavaScript semble être désactivé. Pour une meilleure expérience, veuillez l'activer.
                </p>
              </div>
            </noscript>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;