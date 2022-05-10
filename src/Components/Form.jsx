import React, { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);
    // console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Name"
          value={form.fullname}
          onChange={onChangeInput}
          className="inputs"
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
          className="inputs"
        />
      </div>
      <div className="addButton__div">
        <button className="addButton">Add</button>
      </div>
    </form>
  );
}

export default Form;
