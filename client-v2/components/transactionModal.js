import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function CustomModal({ entry, isOpen, onRequestClose }) {
  const isIncome = entry.type === "income";
  const amountColor = isIncome ? "text-green-800" : "text-red-800";
  const sign = isIncome ? "+" : "-";

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold">{entry.name}</h2>
        <div className="flex items-center justify-between my-2">
          <span
            className={`px-2 py-1 rounded-full text-sm font-medium ${
              isIncome
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {entry.type}
          </span>
          <div className={`text-lg font-medium ${amountColor}`}>
            {sign} ${entry.amount}
          </div>
        </div>
        <p className="text-gray-600">{entry.notes}</p>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4">
          Delete
        </button>
      </div>
    </Modal>
  );
}
