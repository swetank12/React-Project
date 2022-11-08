import React from 'react'

export default function Register(props) {
  return (
    <div className='container card p-3 mt-2 register-container'>
        <h1 className='text-center'>Registration Form</h1>
        <form onSubmit={props.submit}>
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" required className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" required className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" required className='form-control' />
            </div>
            <button type="submit" className='btn btn-primary'>Register</button>
        </form>
    </div>
  )
}
