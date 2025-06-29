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
    <div className="max-w-sm mx-auto mt-8 px-4">
      <form
        className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl"
        onSubmit={onSubmit}
      >
        <h2 className="mb-6 text-2xl font-bold text-white text-center">
          {title}
        </h2>
        {error && (
          <div className="bg-red-500/10 text-red-300 p-3 rounded-lg mb-4 border border-red-500/20 text-sm font-medium">
            {error}
          </div>
        )}
        <div className="space-y-4">{children}</div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full mt-6 p-3 text-base rounded-lg font-medium cursor-pointer transition-all duration-200 ${
            isLoading
              ? 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-60'
              : 'bg-primary-500 hover:bg-primary-600 text-white hover:transform hover:-translate-y-0.5 hover:shadow-lg'
          }`}
        >
          {isLoading ? 'Loading...' : title}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
