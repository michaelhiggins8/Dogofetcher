# 🐶 Dogofetcher

Welcome to **Dogofetcher**, a React-based app that helps dog lovers search, sort, and match with adoptable shelter dogs using the Fetch API.

Users can log in with their name and email, explore dogs by breed, favorite their top picks, and generate a perfect match. Built as part of a take-home assignment for Fetch.

---

## 📸 Preview

_(Screenshots from the app)_

- **Login Page**: users log in with name and email
  ![m](https://github.com/user-attachments/assets/010ee91a-5585-488a-a60c-62215e6a6f8b)

- **Search Page**: filter by breed, paginate, favorite dogs
  ![L](https://github.com/user-attachments/assets/dc570d15-ea53-451f-93e5-64a53d47954b)
![I](https://github.com/user-attachments/assets/ce11d7d6-d2c7-45c1-b8ec-f39064005321)

![r](https://github.com/user-attachments/assets/414a8a7e-15cc-4694-b2aa-13bbbbf9df93)

- **Match Page**: animated match reveal 🎉  
![h](https://github.com/user-attachments/assets/6905ee47-8ecf-4600-ae6b-eb8a8305cf64)

---

## 🚀 Live Demo

👉 [Visit the live site](http://dogofetcher.s3-website-us-west-1.amazonaws.com/)  


---

## ✨ Features

- 🔐 **Login** with name and email
- 🐾 **Browse** shelter dogs with live images and info
- 🔍 **Filter by breed**
- 🔀 **Sort alphabetically** (ascending/descending)
- 📄 **Paginated results**
- ❤️ **Favorite dogs** from search results
- 🎯 **Generate a match** based on favorites
- 🌈 Lottie-based animations + clean UI

---

## 🛠 Tech Stack

- ⚛️ React (v19)
- ⚡ Vite
- 🧭 React Router v7
- 📡 Axios
- 🎞️ Lottie React
- 🧹 ESLint

---

## 📁 Project Structure

src/ ├── App.jsx ├── main.jsx ├── index.css ├── App.css │ ├── assets/ │ ├── dog_man_bw.json │ ├── party.json │ └── react.svg │ └── componets/ ├── LogInPage/ │ ├── LogInPage.jsx │ ├── LogInPage.css │ ├── AnimationSection/ │ │ ├── AnimationSection.jsx │ │ └── AnimationSection.css │ └── LogInCard/ │ ├── LogInCard.jsx │ └── LogInCard.css │ ├── MatchPage/ │ ├── MatchPage.jsx │ └── MatchPage.css │ └── SearchPage/ ├── SearchPage.jsx ├── SearchPage.css ├── ContentSection/ │ ├── ContentSection.jsx │ └── ContentSection.css ├── DogDisplayCard/ │ ├── DogDisplayCard.jsx │ └── DogDisplayCard.css ├── DogDisplaySection/ │ ├── DogDisplaySection.jsx │ ├── DogDisplaySection.css │ └── PaginationBar/ │ ├── PaginationBar.jsx │ └── PaginationBar.css └── FilterBar/ ├── FilterBar.jsx └── FilterBar.css

yaml
Copy
Edit

---

## 🔧 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/dogofetcher.git
cd dogofetcher
2️⃣ Install dependencies
bash
Copy
Edit
npm install
3️⃣ Start the dev server
bash
Copy
Edit
npm run dev
The app will be available at http://localhost:5173

🧪 API Reference (Powered by Fetch)
POST /auth/login – Log in with name and email

GET /dogs/breeds – Get list of dog breeds

GET /dogs/search – Search/filter/paginate dogs

POST /dogs – Get dog details by ID

POST /dogs/match – Generate match from selected dog IDs

All API requests include withCredentials: true to handle authentication cookies.

🐛 Known Limitations
Login requires only name + email (per spec)

Some images may load slowly from external URLs

Backend server (provided by Fetch) may timeout occasionally

🙌 Acknowledgements
Thanks to Fetch for the engaging assignment and useful API.

📄 License
This project is for educational/demo purposes only. All dog data and images provided by Fetch.

yaml
Copy
Edit
