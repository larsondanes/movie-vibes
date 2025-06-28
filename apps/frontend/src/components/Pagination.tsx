import React, { useMemo } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  onPageChange: (_page: number) => void;
  className?: string;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalResults,
  onPageChange,
  className = '',
  maxVisiblePages = 7,
}) => {
  const pageRange = useMemo(() => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Calculate smart page range
      const sidePages = Math.floor(maxVisiblePages / 2);
      let startPage = Math.max(1, currentPage - sidePages);
      let endPage = Math.min(totalPages, currentPage + sidePages);

      // Adjust if we're near the beginning or end
      if (currentPage <= sidePages + 1) {
        endPage = Math.min(totalPages, maxVisiblePages);
      } else if (currentPage >= totalPages - sidePages) {
        startPage = Math.max(1, totalPages - maxVisiblePages + 1);
      }

      // Always show first page
      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push('...');
        }
      }

      // Add visible page range
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Always show last page
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }

    return pages;
  }, [currentPage, totalPages, maxVisiblePages]);

  if (totalPages <= 1) {
    return null;
  }

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number' && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getResultsRange = () => {
    const itemsPerPage = 20; // TMDb default
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, totalResults);
    return { start, end };
  };

  const { start, end } = getResultsRange();

  return (
    <div
      className={`flex flex-col items-center gap-4 my-12 p-8 bg-white/5 rounded-xl backdrop-blur-md ${className}`}
    >
      <div className="text-center">
        <span className="text-sm opacity-80">
          Showing {start.toLocaleString()}-{end.toLocaleString()} of{' '}
          {totalResults.toLocaleString()} results
        </span>
      </div>

      <nav
        className="flex items-center gap-2 flex-wrap justify-center"
        aria-label="Search results pagination"
      >
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white cursor-pointer transition-all hover:bg-white/20 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to previous page"
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
            <polyline points="15,18 9,12 15,6" />
          </svg>
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex gap-1 order-1 w-full sm:w-auto sm:order-none justify-center">
          {pageRange.map((page, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handlePageClick(page)}
              disabled={page === '...' || page === currentPage}
              className={`flex items-center justify-center min-w-10 h-10 border-none rounded-lg text-white cursor-pointer transition-all font-medium ${
                page === currentPage
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : page === '...'
                    ? 'cursor-default bg-transparent'
                    : 'bg-white/10 hover:bg-white/20'
              }`}
              aria-label={
                typeof page === 'number' ? `Go to page ${page}` : 'More pages'
              }
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white cursor-pointer transition-all hover:bg-white/20 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go to next page"
        >
          <span className="hidden sm:inline">Next</span>
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
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </button>
      </nav>

      <div className="flex items-center gap-2 text-sm">
        <span className="opacity-80">Jump to:</span>
        <select
          value={currentPage}
          onChange={e => onPageChange(Number(e.target.value))}
          className="bg-white/10 border border-white/20 rounded-md text-white px-2 py-1 cursor-pointer"
          aria-label="Jump to page"
        >
          {Array.from(
            { length: Math.min(totalPages, 100) },
            (_, i) => i + 1
          ).map(page => (
            <option key={page} value={page} className="bg-gray-800">
              Page {page}
            </option>
          ))}
          {totalPages > 100 && (
            <option disabled className="bg-gray-800">
              ... and {totalPages - 100} more pages
            </option>
          )}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
