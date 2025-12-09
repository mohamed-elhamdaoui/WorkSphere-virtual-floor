# 🏢 Virtual Workspace

Une application web interactive de gestion d'espace de travail virtuel permettant d'organiser et d'assigner des employés à différentes salles selon leurs rôles.

## 📋 Description

Virtual Workspace est une interface de gestion visuelle qui permet de :
- Créer et gérer des profils d'employés
- Assigner des employés à différentes zones de travail
- Filtrer les employés selon leurs rôles et compétences
- Visualiser l'occupation des salles en temps réel

## ✨ Fonctionnalités

### Gestion des Employés
- **Ajout d'employés** avec informations complètes (nom, rôle, email, téléphone, photo)
- **Expériences professionnelles** : ajout multiple d'expériences par employé
- **Rôles disponibles** : Réceptionniste, Technicien IT, Agent de sécurité, Manager, Nettoyage, Autres rôles

### Gestion des Espaces
- **Salle de conférence** - Accès tous rôles
- **Réception** - Réceptionniste, Manager, Nettoyage
- **Salle serveur** - Technicien IT, Manager, Nettoyage
- **Salle de sécurité** - Technicien IT, Manager, Nettoyage, Agent de sécurité
- **Espace personnel** - Accès tous rôles
- **Archives** - Manager uniquement

### Interface
- Filtrage automatique par rôle selon la salle
- Compteur d'employés en attente d'assignation

## 🚀 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/virtual-workspace.git
```

2. **Accéder au dossier**
```bash
cd virtual-workspace
```

3. **Ouvrir dans le navigateur**
```bash
# Ouvrir directement index.html ou utiliser un serveur local
# Avec VS Code Live Server ou :
npx serve .
```

## 📁 Structure du Projet

```
virtual-workspace/
│
├── index.html      # Structure HTML principale
├── main.js         # Logique JavaScript
└── README.md       # Documentation
```

## 🛠️ Technologies Utilisées

- **HTML5** - Structure de l'application
- **TailwindCSS** (via CDN) - Styles et mise en page
- **JavaScript** (Vanilla) - Logique et interactivité
- **Font Awesome** - Icônes

## 💻 Utilisation

1. **Ajouter un employé** : Cliquez sur le bouton "+ Ajouter un employé" dans le panneau gauche
2. **Remplir le formulaire** : Nom, rôle, photo URL, email, téléphone
3. **Ajouter des expériences** (optionnel) : Cliquez sur "Ajouter une expérience"
4. **Assigner à une salle** : Cliquez sur le bouton "+" de la salle souhaitée
5. **Sélectionner l'employé** : Choisissez parmi les employés disponibles pour ce rôle
6. **Retirer d'une salle** : Cliquez sur le "X" de la carte employé dans la salle

## 📸 Aperçu

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌─────────────────────────────────────┐  │
│  │ Employés │  │         Plan de l'espace            │  │
│  │          │  │  ┌─────────┐  ┌─────────┬─────────┐ │  │
│  │ [Card 1] │  │  │ Conf.   │  │ Server  │ Sécur.  │ │  │
│  │ [Card 2] │  │  │  Room   │  │  Room   │  Room   │ │  │
│  │ [Card 3] │  │  ├─────────┤  ├─────────┼─────────┤ │  │
│  │          │  │  │Reception│  │Personnel│ Archive │ │  │
│  │ [+ Add]  │  │  │         │  │         │         │ │  │
│  └──────────┘  └─────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## 🔮 Améliorations Futures

- [ ] Persistance des données (LocalStorage / Base de données)
- [ ] Export/Import des données
- [ ] Mode sombre
- [ ] Responsive design pour mobile
- [ ] Historique des assignations

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push sur la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur

**Votre Nom**
- GitHub: [@votre-username](https://github.com/votre-username)

---

⭐ N'hésitez pas à mettre une étoile si ce projet vous a été utile !

