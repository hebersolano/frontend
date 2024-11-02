import { X } from "lucide-react";

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
        <div
          onClick={onClose}
          className="fixed inset-x-0 inset-y-0 z-50 flex items-center justify-center bg-black/30"
        >
          <div onClick={(e) => e.stopPropagation()} className="">
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
