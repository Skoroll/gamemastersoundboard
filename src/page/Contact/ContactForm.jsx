import React, { useState } from "react";

const ContactForm = () => {
  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Gestion du changement des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique à définir pour traiter les données du formulaire
    console.log("Formulaire soumis :", formData);

    // Réinitialisation des champs du formulaire
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form_input_div">
        {/* Champ pour le nom */}
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {/* Champ pour l'email */}
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      {/* Champ pour le message */}
      <textarea
        name="message"
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      {/* Bouton pour envoyer le formulaire */}
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
