import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const [listShows, setListShows] = useState("");

  const MouseEnter = () => {
    contacts.fullname = contacts.phone_number;
  };

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="Filter..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="inputs"
      />
      <ul className="listUl">
        {filtered.map((contact, i) => (
          <li key={i} className="list" onMouseEnter={MouseEnter}>
            {contact.fullname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
