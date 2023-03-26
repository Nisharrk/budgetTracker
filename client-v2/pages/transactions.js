import React, { useEffect, useState } from "react";
import TransactionItem from "@/components/transactionItem";
import Modal from "@/components/transactionModal";

export default function Transactions() {
  const [budgetEntry, setBudgetEntry] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      fetch("http://localhost:8080/api/budget")
        .then((res) => res.json())
        .then((data) => {
          setBudgetEntry(data);
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedEntry(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center pt-10">
      {budgetEntry &&
        budgetEntry.map((entry) => (
          <div
            key={entry._id}
            className="w-full max-w-xl my-2"
            onClick={() => handleEntryClick(entry)}
          >
            <TransactionItem entry={entry} />
          </div>
        ))}
      {selectedEntry && (
        <Modal
          entry={selectedEntry}
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
        />
      )}
    </div>
  );
}
