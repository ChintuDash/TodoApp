  function addItem(){
            let input=document.getElementById("todo-input");
            let inputdate=document.getElementById("todo-date");
            let item=input.value;
            let itemdate=inputdate.value;

            if(item === '' && itemdate === ''){
                alert("Enter an Item..");
                return;
            }

            let list=document.createElement("li");
            list.textContent=item;
            list.classList="mt-1 px-2"

            let span=document.createElement("span");
            span.textContent=itemdate;
            list.appendChild(span);
            
            document.querySelector(".todo-list").appendChild(list);

            let del=document.createElement("button");
            del.textContent="✕";
            del.classList="btn btn-lg text-dark py-0 px-2"
            del.onclick=()=>list.remove();
            list.appendChild(del);           
                    

            input.value='';
            inputdate.value='';
          
        }