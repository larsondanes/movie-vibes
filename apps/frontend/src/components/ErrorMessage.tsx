import React from 'react';

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
  type?: 'error' | 'warning' | 'info';
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title,
  message,
  onRetry,
  className = '',
  type = 'error',
}) => {
  const getIcon = () => {
    switch (type) {
      case 'warning':
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        );
      case 'info':
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        );
      default:
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        );
    }
  };

  const getTypeClasses = () => {
    switch (type) {
      case 'warning':
        return 'bg-warning-500/10 border-warning-500/30 text-orange-200';
      case 'info':
        return 'bg-blue-500/10 border-blue-500/30 text-blue-200';
      default:
        return 'bg-error-500/10 border-error-500/30 text-red-200';
    }
  };

  return (
    <div
      className={`flex items-start gap-4 p-5 rounded-xl my-8 border ${getTypeClasses()} ${className}`}
    >
      <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>

      <div className="flex-1">
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        <p className="mb-4 leading-relaxed">{message}</p>

        {onRetry && (
          <button
            onClick={onRetry}
            className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-current cursor-pointer transition-all hover:bg-white/20 font-medium"
            type="button"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M3 21v-5h5" />
            </svg>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
