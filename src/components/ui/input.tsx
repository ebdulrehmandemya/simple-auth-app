'use client';

import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={`
            flex h-10 w-full rounded-md border 
            ${error ? 'border-red-500' : 'border-gray-300'} 
            bg-white px-3 py-2 text-sm 
            ring-offset-white file:border-0 file:bg-transparent 
            file:text-sm file:font-medium placeholder:text-gray-500 
            focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-blue-500 focus-visible:ring-offset-2
            disabled:cursor-not-allowed disabled:opacity-50
            transition-colors
          `}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
