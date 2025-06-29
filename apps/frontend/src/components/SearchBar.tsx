import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface SearchBarProps {
  value: string;
  onSearch: (_query: string) => void;
  onClear: () => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  debounceMs?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onSearch,
  onClear,
  placeholder = 'Search...',
  className = '',
  autoFocus = false,
  debounceMs = 300,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  // Sync with external value changes
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Auto focus if requested
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Debounced search
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      if (inputValue !== value) {
        onSearch(inputValue);
      }
    }, debounceMs);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [inputValue, value, onSearch, debounceMs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Clear debounce and search immediately
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      onSearch(inputValue);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleClear();
      inputRef.current?.blur();
    }
  };

  const handleClear = () => {
    setInputValue('');
    onClear();
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear debounce and search immediately
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    onSearch(inputValue);
  };

  const showClearButton = inputValue.length > 0;

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      <div
        className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl transition-all duration-300 ${
          isFocused
            ? 'ring-2 ring-primary-500/50 border-primary-500/50'
            : 'hover:border-white/30'
        }`}
      >
        {/* Search Icon */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/60"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full h-14 pl-12 pr-20 bg-transparent text-white placeholder-white/50 text-lg font-medium outline-none"
          autoComplete="off"
          spellCheck="false"
        />

        {/* Action Buttons Container */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          {/* Clear Button */}
          {showClearButton && (
            <button
              type="button"
              onClick={handleClear}
              className="p-2 text-white/60 hover:text-white/90 hover:bg-white/10 rounded-lg transition-all duration-200"
              aria-label="Clear search"
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`p-2 rounded-lg transition-all duration-200 ${
              inputValue.trim().length >= 2
                ? 'text-primary-400 hover:text-primary-300 hover:bg-primary-500/20'
                : 'text-white/30 cursor-not-allowed'
            }`}
            aria-label="Search"
            disabled={inputValue.trim().length < 2}
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
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="flex justify-center">
        <span className="text-white/50 text-sm font-medium">
          Press{' '}
          <kbd className="px-2 py-1 bg-white/10 text-white/70 font-mono text-xs rounded border border-white/20">
            Enter
          </kbd>{' '}
          to search,{' '}
          <kbd className="px-2 py-1 bg-white/10 text-white/70 font-mono text-xs rounded border border-white/20">
            Esc
          </kbd>{' '}
          to clear
        </span>
      </div>
    </form>
  );
};

export default SearchBar;
