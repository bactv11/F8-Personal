import { methodGet, methodPost, methodPut, methodDelete } from "./src/ultis/api.js"; // Đảm bảo file này đúng tên

const todoListContainer = document.querySelector(".todo-list");
const titleInput = document.getElementById("title");
const addBtn = document.getElementById("add-todo-btn");

// get todos
const renderTodos = async () => {
    const todos = await methodGet("");
    todoListContainer.innerHTML = "";

    todos.forEach((todo) => {
        const todoDiv = document.createElement("div");
        todoDiv.className = "todo-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", async () => {
            await methodPut(todo.id, {
                title: todo.title,
                completed: checkbox.checked,
            });
            renderTodos();
        });

        const contentDiv = document.createElement("div");
        contentDiv.className = "todo-content";
        contentDiv.textContent = todo.title;
        if (todo.completed) contentDiv.classList.add("completed");
        //update
        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn fa-solid fa-pen-to-square";
        editBtn.addEventListener("click", async () => {
            const newTitle = prompt("Nhập tiêu đề mới:", todo.title);
            const trimmed = newTitle.trim();
            if (!trimmed) {
                alert("Không được để trống!");
                return;
            }
            await methodPut(todo.id, {
                title: trimmed,
                completed: todo.completed,
            });
            renderTodos();
        });
        //delete
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "del-btn fa-solid fa-trash";
        deleteBtn.addEventListener("click", async () => {
            const confirmDelete = confirm(`Bạn có chắc muốn xoá ${todo.title}?`);
            if (!confirmDelete) return;
            await methodDelete(todo.id);
            renderTodos();
        });

        todoDiv.appendChild(checkbox);
        todoDiv.appendChild(contentDiv);
        todoDiv.appendChild(editBtn);
        todoDiv.appendChild(deleteBtn);
        todoListContainer.appendChild(todoDiv);
    });
};

// post todos
addBtn.addEventListener("click", async () => {
    //lấy dữ liệu từ ô input
    const title = titleInput.value.trim();
    // tạo 1 obj mới
    const newTodos={
        title:title,
        completed:false,
    }
    //check rỗng
    if (title === '') {
       alert('Vui lòng không để trống phần này!')
        return;
    }
    // post
    await methodPost("", newTodos);
    titleInput.value = "";
    titleInput.focus(); // sau khi thêm sẽ tự động quay lại ô input
    renderTodos();
});


renderTodos();