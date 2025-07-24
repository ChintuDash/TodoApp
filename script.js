  function addItem(){
            let input=document.getElementById("todo-input");
            let inputdate=document.getElementById("todo-date");
            let item=input.value;
            let itemdate=inputdate.value;

            if(item === '' && itemdate === ''){
                alert("Enter an Item..");
                return;
            }else{

            let list=document.createElement("li");
            list.textContent=item;
            list.classList="mt-1 px-2 position-relative"

            let span=document.createElement("span");
            span.textContent=itemdate;
            list.appendChild(span);
            
            document.querySelector(".todo-list").appendChild(list);

            let del=document.createElement("button");
            del.textContent="✕";
            del.classList="btn btn-lg text-primary fw-bold  p-0 position-absolute top-50 end-0 translate-middle-y"
            del.onclick=()=>list.remove();
            list.appendChild(del);           
                    

            input.value='';
            inputdate.value='';
            };
          
        }