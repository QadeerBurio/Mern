import React from 'react'

const Office = () => {
    // Define an array of branch cities
  const branches = [
    { city: 'Karachi', address: '123 Main St, Karachi' },
    { city: 'Islamabad', address: '456 Park Ave, Islamabad' },
    { city: 'Hyderabad', address: '789 Broadway, Hyderabad' },
    { city: 'Lahore', address: '101 Pine St, Lahore' },
    { city: 'Larkana', address: '222 Oak St, Larkana' },
    { city: 'Multan', address: '333 Elm St, Multan' },
    { city: 'Sukkur', address: '444 Maple St, Sukkur' }
  ];

  return (
    <div className="branches-container">
      <h2>Our Branches</h2>
      <div className="branch-list">
        {branches.map(branch => (
          <div key={branch.city} className="branch">
            <h3>{branch.city}</h3>
            <p>{branch.address}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Office
