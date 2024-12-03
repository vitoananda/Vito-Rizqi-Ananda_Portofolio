import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  isLoading?: boolean; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] w-96 relative">
        <h2 className="text-lg font-bold mb-4">{title}</h2>

        {isLoading ? (
          <div className="flex justify-center items-center mb-4">
            <div className="animate-spin rounded-full border-4 border-t-4 border-blue-500 w-8 h-8"></div>
          </div>
        ) : (
          children
        )}

        <button
          onClick={onClose}
          className="mt-4 bg-black text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
