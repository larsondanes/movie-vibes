import { ReactNode, FormEvent } from 'react';

interface AuthFormProps {
  title: string;
  onSubmit: (_e: FormEvent) => void;
  children: ReactNode;
  error?: string;
  isLoading?: boolean;
}

function AuthForm({
  title,
  onSubmit,
  children,
  error,
  isLoading,
}: AuthFormProps) {
  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={onSubmit}>
        <h2>{title}</h2>
        {error && <div className="error-message">{error}</div>}
        {children}
        <button type="submit" disabled={isLoading} className="submit-button">
          {isLoading ? 'Loading...' : title}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
