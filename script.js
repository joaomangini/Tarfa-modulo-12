// Seleciona os elementos do DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim();
    
    // Verifica se o campo de texto não está vazio
    if (taskText !== '') {
        // Cria um novo item de lista (li)
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        // Cria um span para o texto da tarefa
        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;
        
        // Cria o botão de remover
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remover';
        
        // Adiciona um evento de clique para remover a tarefa
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        
        // Monta o item da lista
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(removeBtn);
        
        // Adiciona o item à lista de tarefas
        taskList.appendChild(taskItem);
        
        // Limpa o campo de texto
        taskInput.value = '';
    }
}

// Adiciona um evento de clique ao botão "Adicionar"
addTaskBtn.addEventListener('click', addTask);

// Permite adicionar a tarefa com a tecla "Enter"
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});