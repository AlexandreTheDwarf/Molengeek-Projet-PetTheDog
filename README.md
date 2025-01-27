# Molengeek-Projet-PetTheDog

## 🐶 DONT FORGET TO PET THE DOG

**"DONT FORGET TO PET THE DOG"** est un jeu incrémental dans lequel vous collectez des friandises grâce à l’aide de votre fidèle chien. Prenez soin de lui et améliorez votre production pour atteindre de nouveaux sommets !

---

## 📝 Description

Dans ce jeu, vous devrez :
- Explorer pour collecter du chocolat.
- Gérer les statistiques de votre chien : **Affection** (LOVE), **Satiété** (FOOD), et **Propreté** (POOPY).
- Acheter des améliorations pour produire automatiquement du chocolat.
- Ajouter des compagnons (buddies) pour accélérer votre collecte.
- Surveillez vos statistiques : si elles tombent à zéro, c'est la fin de la partie !

---

## 🎮 Fonctionnalités

### Objectifs de jeu :
1. **Créer le contexte JS** :
   - Initialiser les variables LOVE, FOOD, POOPY, et CHOCOLAT.
   - Lier les jauges HTML aux variables JS pour afficher leur état initial.

2. **Interagir avec le bouton "Explore"** :
   - Collecter du chocolat en cliquant sur un bouton.
   - Mettre à jour dynamiquement le score de chocolat.

3. **Dégradation de la santé du chien** :
   - Réduire les statistiques LOVE et FOOD à intervalles réguliers.
   - Empêcher ces valeurs de descendre en dessous de 0.

4. **Restaurer les statistiques** :
   - Nourrir ou caresser le chien pour augmenter LOVE et FOOD.
   - Limiter ces statistiques à une valeur maximale de 100.

5. **Acheter des Buddies** :
   - Ajouter des compagnons qui génèrent automatiquement du chocolat chaque seconde.
   - Gérer les coûts et les intervalles associés.

6. **Gérer une fin de partie** :
   - Terminer la partie si LOVE ou FOOD atteint 0.
   - Afficher un écran de "Game Over".

---

## ⚙️ Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/pet-the-dog.git
