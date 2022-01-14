const CustomersList = ({ title, arrCustomers }) => {
  return (
    <div>
      <h1> {title}</h1>
      <ul>
        {arrCustomers.map((customer) => (
          <li key={customer.id}>
            <span>{customer.name}</span>
            <span>{customer.email}</span>
            <span>{customer.age}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersList;
