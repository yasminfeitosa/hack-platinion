import React, { useState } from 'react';
import './Address.css';

interface Address {
  id: number;
  name: string;
  street: string;
  city: string;
  state: string;
}

const Address: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    { id: 1, name: 'Casa', street: 'R. Dom Tito Marchese, 102', city: 'São Paulo', state: 'SP' },
    { id: 2, name: 'Trabalho', street: 'Av. Paulista, 1000', city: 'São Paulo', state: 'SP' },
  ]);
  
  const [newAddress, setNewAddress] = useState({ name: '', street: '', city: '', state: '' });
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);

  const handleAddressSelect = (id: number) => {
    setSelectedAddress(id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = addresses.length ? addresses[addresses.length - 1].id + 1 : 1;
    const address = { ...newAddress, id: newId };
    setAddresses([...addresses, address]);
    setNewAddress({ name: '', street: '', city: '', state: '' });
  };

  return (
    <div className="address-page">
      <h2>Selecione um Endereço</h2>
      <div className="address-list">
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`address-item ${selectedAddress === address.id ? 'selected' : ''}`}
            onClick={() => handleAddressSelect(address.id)}
          >
            <h4>{address.name}</h4>
            <p>{address.street}, {address.city} - {address.state}</p>
          </div>
        ))}
      </div>

      <h2>Adicionar Novo Endereço</h2>
      <form className="address-form" onSubmit={handleAddAddress}>
        <input
          type="text"
          name="name"
          placeholder="Nome do Endereço (ex: Casa, Trabalho)"
          value={newAddress.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="street"
          placeholder="Rua e Número"
          value={newAddress.street}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Cidade"
          value={newAddress.city}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="Estado (ex: SP)"
          value={newAddress.state}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Adicionar Endereço</button>
      </form>
    </div>
  );
};

export default Address;
