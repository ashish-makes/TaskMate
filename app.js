const addButton = document.querySelector('#push');
const todo = document.querySelector('#newtask input');
const todoDisplay = document.querySelector('#tasks');
const errorToast = document.querySelector('#toast-bottom-right');

addButton.onclick = function () {
    if (todo.value.length == 0) {
        setTimeout(function () { errorToast.classList.remove("hidden") }, 100);
        setTimeout(function () { errorToast.classList.add("hidden") }, 3000);

    }

    else {
        todoDisplay.innerHTML += `
            <div class="task p-3 border border-slate-200 mb-2 rounded-[8px] bg-slate-100">
                <span class='' id="taskname">
                    ${todo.value}
                </span>
                <button class="delete float-right -m-1 p-1 bg-red-500 w-[80px] text-white rounded-[6px] hover:bg-red-400 hover:shadow-[rgb(0_0_0_/5%)_10px_10px_40px_0px] duration-300">Delete</button>
                <button class="done float-right -m-1 mx-2 p-1 bg-green-500 w-[80px] text-white rounded-[6px] hover:bg-green-400 hover:shadow-[rgb(0_0_0_/5%)_10px_10px_40px_0px] duration-300">Done</button>
            </div>
        `;

        todo.value = ""

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        var completed_tasks = document.querySelectorAll(".done");
        for (var i = 0; i < completed_tasks.length; i++) {
            completed_tasks[i].onclick = function () {
                this.innerHTML = 'Completed';
                this.classList.add("bg-blue-500", "w-[120px]", "hover:bg-blue-500")
            }
        }
    }
}