import React, { useState } from 'react';

const DesktopAlert = () => {
  const [showAlert, setShowAlert] = useState(true);

  if (!showAlert) {
    return null;
  }

  return (
    <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 lg:hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-2 rounded-lg bg-blue-600 shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-blue-800">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">Open in desktop for a better experience!</span>
                <span className="hidden md:inline">We recommend opening this application in desktop view for a better experience.</span>
              </p>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button type="button" onClick={() => setShowAlert(false)} className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                <span className="sr-only">Dismiss</span>
                {/* Close Icon */}
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopAlert;
