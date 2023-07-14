import {useState} from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import BannerConnexionInscription from '../components/BannerConnexionInscription';
import FormLogin from '../components/FormLogin';
import Cookies from '../components/Cookies';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Profil = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Prénom",
      errorMessage:
        "Votre Prénom doit être composé de 3 à 16 caractères et ne doit pas comporter de caractères spéciaux !",
      label: "Prénom",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Il doit s'agir d'une adresse électronique valide !",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Anniversaire",
      label: "Anniversaire",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "mot de passe",
      errorMessage:
        "Votre mot de passe doit comporter de 8 à 20 caractères, dont au moins 1 lettre, 1 chiffre et 1 caractère spécial !",
      label: "mot de passe",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirmer votre mot de passe",
      errorMessage: "Votre mot de passe ne correspond pas",
      label: "Confirmer votre mot de passe",
      pattern: values.password,
      required: true,
    },
  ];
const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  return (
    <div>
            <Livraison />
            <Navigation />
            <BannerConnexionInscription />
            <div className="containerform">
      <form onSubmit={handleSubmit}>
        <h1>Inscription</h1>
        {inputs.map((input) => (
          <FormLogin
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className='register'>S'inscrire</button>
        <Link to="/Login">
  <button className='register'>Se connecter</button>
</Link>

      </form>
    </div>
    <Footer />
    <Cookies />
    </div>
    
  );
};

export default Profil;