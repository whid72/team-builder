import React from "react";

export default function TeamForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
      }
    
      const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='inputs'>
                <label>First Name
                    <input
                        name="name"
                        type="text"
                        placeholder="First Name"
                        maxLength="30"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input
                        name="email"
                        type="email"
                        placeholder="EMAIL"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-- Select a Role --</option>
                        <option value="student">Student</option>
                        <option value="frontend engineer">frontend engineer</option>
                        <option value="backend engineer">backend engineer</option>
                        <option value="Coach">Coach</option>
                        <option value="Student">Quarter Back</option>
                        <option value="Fish">Fish?</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}