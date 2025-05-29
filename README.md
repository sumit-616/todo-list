# Todo - The Task Manager

**Todo - The Task Manager** is a modern and intuitive task management application that helps you efficiently create, update, delete, and organize your daily tasks. With features like filtering, bulk actions, smooth animations, and persistent storage using local storage, it’s the perfect productivity companion.

---

## 🚀 Live Demo

👉 [Try the App Live](https://todo-the-task-manager.vercel.app/)

---

## 📦 GitHub Repository

[https://github.com/sumit-616/todo-list](https://github.com/sumit-616/todo-list)

---

## ✨ Features

- **Add Tasks:** Quickly add new tasks using a simple input form.
- **Edit Tasks:** Update the text of any existing task.
- **Mark as Completed:** Toggle tasks between "Active" and "Completed" status.
- **Delete Tasks:** Remove individual tasks or clear all tasks at once.
- **Filter Tasks:**  
  - **All:** Show all tasks  
  - **Active:** Show only incomplete tasks  
  - **Completed:** Show only completed tasks
- **Bulk Actions:**  
  - **Delete All:** Remove all tasks  
  - **Toggle All:** Invert the completion status of all tasks  
  - **Complete All:** Mark all tasks as completed (or not completed)
- **Persistent Storage:** All tasks are saved in your browser's **local storage** and persist across sessions.
- **Smooth Animations:** Enjoy delightful UI transitions powered by **Framer Motion**.
- **Responsive Design:** Looks great on all devices, with a modern dark-themed interface.
- **Instant Feedback:** Get real-time toast notifications for every action.

---

## 🛠️ Tech Stack

- **React.js** – Frontend framework
- **Tailwind CSS** – Utility-first CSS styling
- **Framer Motion** – Animations and transitions
- **Sonner** – Toast notifications
- **Local Storage** – Persistent client-side data

---

## 📥 Installation

To run the app locally:

1. **Clone the repository:**
git clone https://github.com/sumit-616/todo-list.git
cd todo-list

2. **Install dependencies:**
npm install

3. **Start the development server:**
npm start

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📝 How to Use

- **Add a Task:**  
Enter your task in the input field and press Enter or click "Add Task".

- **Edit a Task:**  
Click the edit icon next to a task, modify the text, and save.

- **Toggle Completion:**  
Click on a task or its checkbox to mark it as completed or active.

- **Delete a Task:**  
Click the delete icon on a task to remove it.

- **Bulk Actions:**  
- **Delete All:** Remove all tasks at once.
- **Toggle All:** Invert the completion status of all tasks.
- **Complete All:** Mark all tasks as completed.

- **Filter Tasks:**  
Use the filter buttons (All, Active, Completed) to view tasks by status.

---

**Key Components:**
- `ManageTodo.js` – Core logic for managing tasks and app state
- `FilterButton.js` – Handles task filtering UI
- `Form.js` – Input form for adding new tasks
- `Todo.js` – Displays and manages individual tasks
- `useLocalStorage.js` – Custom hook for persistent storage

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Clone your fork:
git clone https://github.com/your-username/todo-list.git

3. Create a new branch:
git checkout -b feature/your-feature-name

4. Commit your changes:
git commit -m "Describe your changes"

5. Push to your fork:
git push origin feature/your-feature-name

6. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Author

Built with ❤️ by [Sumit Kumar](https://github.com/sumit-616)
