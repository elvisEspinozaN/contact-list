function ContactRow({ contact, setSelectedContactId }) {
  const { name, email, phone, id } = contact;
  return (
    <tr
      onClick={() => {
        setSelectedContactId(id);
      }}
    >
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}

export default ContactRow;
