import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { FaFilter } from "react-icons/fa";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export function FilterDropdown({ options, value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel = useMemo(
    () => options.find((o) => o.value === value)?.label,
    [options, value]
  );

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [close]);

  return (
    <div ref={ref} className="relative inline-block mb-10">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="
          flex items-center gap-2
          rounded-full border border-gray-200
          px-4 py-2 text-sm font-medium text-gray-700
          hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-300
          transition
        "
      >
        <FaFilter className="h-4 w-4" />
        <span>{selectedLabel}</span>
      </button>

      {open && (
        <div
          className="
            absolute right-0 z-50 mt-2 w-48
            rounded-xl border border-gray-200 bg-white
            shadow-lg
            overflow-hidden
          "
        >
          {options.map((o) => (
            <button
              key={o.value}
              onClick={() => {
                onChange(o.value);
                close();
              }}
              className={`
                block w-full px-4 py-2 text-left text-sm
                transition
                ${
                  value === o.value
                    ? "bg-gray-100 font-semibold text-gray-900"
                    : "text-gray-600 hover:bg-gray-50"
                }
              `}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
