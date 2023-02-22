import React from "react";

const DeleteBudgetButton = ({ id }) => {
  const handleClick = async () => {
    console.log(id);
    try {
      const response = await fetch(`http://localhost:8080/api/budget/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Refresh the list of budget entries
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex float-right">
      <button
        className="bg-black p-1 text-white rounded-lg"
        onClick={handleClick}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteBudgetButton;
