import { X } from "lucide-react";

import type { JSX } from "react";

function ControlledModal({
  display,
  onClose,
  children,
}: {
  display: boolean;
  onClose: () => void;
  children: JSX.Element;
}) {
  return (
    <>
      {display && (
        <div className="fixed inset-x-0 inset-y-0 z-50 bg-black/50">
          <div
            onClick={onClose}
            className="flex h-full items-center justify-center"
          >
            <button onClick={onClose} className="absolute right-2 top-2">
              <X />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default ControlledModal;
