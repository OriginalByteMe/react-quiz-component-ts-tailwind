import React, { useState, useEffect, useRef } from 'react';

function QuizResultFilter({ filteredValue, handleChange, appLocale }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    handleChange({ target: { value } });
    setIsOpen(false);
  };

  const selectedOptionClass = isOpen ? 'selected-open' : '';
  const selectedValuesLocale = {
    all: appLocale.resultFilterAll,
    correct: appLocale.resultFilterCorrect,
    incorrect: appLocale.resultFilterIncorrect,
    unanswered: appLocale.resultFilterUnanswered,
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isOpen
        && dropdownRef.current
        && !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="quiz-result-filter">
      <div className="relative w-48">
        <div
          ref={dropdownRef}
          className={`flex items-center justify-between w-full px-4 py-2 bg-white border rounded-lg cursor-pointer ${
            isOpen ? 'border-blue-500' : 'border-gray-300'
          }`}
          onClick={toggleDropdown}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              toggleDropdown();
            }
          }}
          role="button"
          tabIndex={0}
        >
          <span className="block truncate">
            {selectedValuesLocale[filteredValue]}
          </span>
          <span className={`ml-2 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}>
            ▼
          </span>
        </div>
      </div>
      {isOpen && (
        <div
          className="dropdown-options"
          role="menu"
          aria-labelledby="quiz-filter"
        >
          <div
            className={`dropdown-options-item ${
              filteredValue === 'all' ? 'selected' : ''
            }`}
            onClick={() => handleOptionClick('all')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleOptionClick('all');
              }
            }}
            role="menuitem"
            tabIndex={0}
          >
            {appLocale.resultFilterAll}
          </div>
          <div
            className={`dropdown-options-item ${
              filteredValue === 'correct' ? 'selected' : ''
            }`}
            onClick={() => handleOptionClick('correct')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleOptionClick('correct');
              }
            }}
            role="menuitem"
            tabIndex={0}
          >
            {appLocale.resultFilterCorrect}
          </div>
          <div
            className={`dropdown-options-item ${
              filteredValue === 'incorrect' ? 'selected' : ''
            }`}
            onClick={() => handleOptionClick('incorrect')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleOptionClick('incorrect');
              }
            }}
            role="menuitem"
            tabIndex={0}
          >
            {appLocale.resultFilterIncorrect}
          </div>
          <div
            className={`dropdown-options-item ${
              filteredValue === 'unanswered' ? 'selected' : ''
            }`}
            onClick={() => handleOptionClick('unanswered')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleOptionClick('unanswered');
              }
            }}
            role="menuitem"
            tabIndex={0}
          >
            {appLocale.resultFilterUnanswered}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizResultFilter;
