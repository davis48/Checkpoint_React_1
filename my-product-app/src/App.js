// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import product from './product';

// Définissez votre prénom ici. Laissez une chaîne vide pour afficher "Bonjour !"
const firstName = "Emmanuel";

function App() {
  return (
    <Container className="mt-5">
      {/* Animation de la carte */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <Card style={{ maxWidth: '400px', margin: '0 auto' }} className="shadow">
          {/* Animation de l'image du produit */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card.Img variant="top" src={product.image} alt="Image du produit" />
          </motion.div>
          <Card.Body>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Name />
              <Price />
              <Description />
            </motion.div>
          </Card.Body>
        </Card>
      </motion.div>

      {/* Animation du message de bienvenue */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {firstName ? (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Bonjour, {firstName} !
            </motion.p>
            <motion.img
              src="https://media.istockphoto.com/id/1056445350/photo/neon-sign-on-brick-wall-background-welcome-3d-rendering.webp?s=1024x1024&w=is&k=20&c=n_UjX4qPVM9KabNwbZON-xJv95ZVg2y8h2aqdBHpms0="
              alt="Image de bienvenue"
              className="rounded-circle"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            />
          </>
        ) : (
          <p>Bonjour !</p>
        )}
      </motion.div>
    </Container>
  );
}

export default App;
