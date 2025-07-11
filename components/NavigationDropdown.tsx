'use client';

import { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavigationDropdownProps {
  label: string;
  items: DropdownItem[];
}

export default function NavigationDropdown({ label, items }: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2 px-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div 
        className={`dropdown-menu ${isOpen ? 'show' : ''}`}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="dropdown-item block"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}