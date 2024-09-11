
const url = `http://localhost:3000`;



const getTask = async () => {
    try {
        const response = await fetch(`${url}/tasks`);
        
        if (!response) {
            throw new Error('Fetch to failed')
        }
        const tasks = await response.json();
        // console.log(tasks);
        
        render(tasks)
    } catch (e) {
        console.log(e);
    }
}
const formAdd = document.querySelector('.form-add');
const btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click', () => { 
    formAdd.innerHTML = `
        <div class="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-gray-700/60 p-4">
                <div class="w-full max-w-md">
                    <form class="rounded-lg bg-white shadow">
                        <div class="p-6">
                            <input required id="new-task" type="text" class="w-full bg-gray-50 p-4 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                        </div>
                        <div class="btn-save flex items-center justify-center space-x-8 p-4 rounded-b border-t border-gray-200">
                            <button class="rounded-lg bg-emerald-700 px-5 py-2.5 text-center font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300">
                                Save
                            </button>
                            <button class="btn-cancel bg-white px-5 py-2.5 rounded-lg border border-gray-200 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    `

    const btnCancel = document.querySelector('.btn-cancel');

    btnCancel.addEventListener('click', (e) => {
        // e.preventDefault();
        formAdd.innerHTML = '';
    })
    const btnSave = document.querySelector('.btn-save');
    btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    const inputTask = document.querySelector('#new-task');
    const data = {
        title: inputTask.value,
        completed: false,
    }
    addTask(data);
});
});

const addTask = async (data) => { 
    try {
        const response = await fetch(`${url}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response) {
            throw new Error("Fetch to failed")
        }
    } catch (error) {
        console.log(error);
        
    }
    
    
};

const editTask = async (id) => {
    const response = await fetch(`${url}/tasks/${id}`);
    const task = await response.json();
    formAdd.innerHTML = `
    <div class="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-gray-700/60 p-4">
            <div class="w-full max-w-md">
                <form class="rounded-lg bg-white shadow">
                    <div class="p-6">
                        <input required value="${task.title}" id="new-task" type="text" class="w-full bg-gray-50 p-4 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                    </div>
                    <div class="btn-save flex items-center justify-center space-x-8 p-4 rounded-b border-t border-gray-200">
                        <button class="rounded-lg bg-emerald-700 px-5 py-2.5 text-center font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300">
                            Save
                        </button>
                        <button class="btn-cancel bg-white px-5 py-2.5 rounded-lg border border-gray-200 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `
    
    const btnCancel = document.querySelector('.btn-cancel');
    btnCancel.addEventListener('click', () => {
        formAdd.innerHTML = '';
    })

    const btnSave = document.querySelector('.btn-save');
    btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        const inputTask = document.querySelector('#new-task');
        const data = {
            id: task.id,
            title: inputTask.value,
            completed: false,
        }
        updateTask(data);
    });

};

const updateTask = async (data) => {
    try {
        const response = await fetch(`${url}/tasks/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
    
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Fetch to failed')
        }
    } catch (error) {
        console.log(error);
        
    }

}

const render = (tasks) => {
    const task = document.querySelector('#tasks')
    // console.log(task);
    
    task.innerHTML = tasks.map(({ id, title, completed }, index) => {
        
        return `
            <div class="mt-2.5 flex w-full items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow">
                <span class="font-normal text-gray-700">${title}</span>
                <div class="flex gap-2">
                    <button data-id="${id}" class="btn-del flex h-10 w-10 items-center justify-center rounded-lg bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-300"><i class="fa-regular fa-trash-can text-white"></i></button>
                    <button data-id="${id}" class="btn-edit flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"><i class="fa-regular fa-pen-to-square text-white"></i></button>
                    <button data-id="${id}" class="btn-complete bg-gray-400 flex h-10 w-10 items-center justify-center rounded-lg hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300"><i class="fa-solid fa-check-to-slot text-white"></i></button>
                </div>
            </div>
        `
    }).join('');


    const btnDels = document.querySelectorAll('.btn-del');
    // console.log(btnDels);
    
    btnDels.forEach((item) => {
        item.addEventListener('click', () => {
            const id = item.dataset.id;
            // console.log(id);
            
            if (confirm('Are you sure you want to delete')) {
                deleteTask(id);
            }
        })
    })

    const btnEdits = document.querySelectorAll('.btn-edit');
    btnEdits.forEach((item) => {
        item.addEventListener('click', () => {
            const id = item.dataset.id;
            editTask(id);
        })
    });

    const btnCompleted = document.querySelectorAll('.btn-complete');
    btnCompleted.forEach((item) => { 
        item.addEventListener('click', () =>{
            const id = item.dataset.id;
            updateStatus(id);
            if (item.completed === false) {
                deleteTask(id);
            }
        });
    });
};

const updateStatus = async (id) => { 
    try {
        const response = await fetch(`${url}/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: true }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to update status');
        }
        
        // Lấy danh sách nhiệm vụ mới sau khi cập nhật
        getTask();
    } catch (error) {
        console.log(error);
    }
}

const deleteTask = async (id) => {
    try {
        const response = await fetch(`${url}/tasks/${id}`, {
            method: 'DELETE',
       
        });
        if (response.ok) {
            console.log('Deleted successfully');
        }
    } catch (error) {
        console.log(error);
        
    }

};
getTask()

const btnShowCompletedTask = document.querySelector('#completed-task')
// Biến trạng thái để theo dõi trạng thái của nút
let isCompletedVisible = false;

btnShowCompletedTask.addEventListener('click', () => {
    const display = document.querySelector('.completed-place');
    
    if (isCompletedVisible) {

        display.innerHTML = `
            <button id="completed-task" class="bg-emerald-700 hover:bg-emerald-800 focus:ring-emerald-300 mt-2.5 flex items-center gap-2 rounded-lg px-4 py-2.5 transition-all focus:outline-none focus:ring-4">
                <span class="font-medium text-white">Completed Todos <span>1</span></span>
                <i class="fa-regular fa-circle-down text-white rotate-0 h-4 w-4 transition-all"></i>
            </button>
        `;
        isCompletedVisible = false;
    } else {
        isCompletedVisible = true;
        display.innerHTML = `
        
            <button id="completed-task" class="bg-gray-400 hover:bg-gray-500 focus:ring-gray-100 mt-2.5 flex items-center gap-2 rounded-lg px-4 py-2.5 transition-all focus:outline-none focus:ring-4">
                <span class="font-medium text-white">Completed Todos  <span>1</span></span>
                <i class="fa-regular fa-circle-down text-white -rotate-90 h-4 w-4 transition-all"></i>
            </button>
        `
        
    }
});