function ContactRow({ contact }) {
  const { name, email, phone } = contact;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}

export default ContactRow;
