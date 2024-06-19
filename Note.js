const AddBtn = document.querySelector("#Addbtn")
const main = document.querySelector("#main")
const SaveNotes = ()=>{

    const notes = document.querySelectorAll(".note textarea");
    const data =[];
  
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
    //console.log(data)
    localStorage.setItem("notes", JSON.stringify(data))
}


AddBtn.addEventListener(
    "click",
    function(){
        AddNote()

    }
)

const AddNote = ( text = "")=>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
    </div>
   <textarea>${text}</textarea>
   </div>
    `;
    note.querySelector(".trash").addEventListener(
     "click",
     function(){
        note.remove()
        SaveNotes()
     }

    )
    note.querySelector(".save").addEventListener(
        "click", 
        function(){
            SaveNotes()
        }
    )
    main.appendChild(note);
    SaveNotes()
}
(
    function()
    {  
     const lsNote = JSON.parse(localStorage.getItem("notes"));
     console.log(lsNote)
     lsNote.forEach(
        (lsNote) =>{
            AddNote(lsNote)

        }
     )
     

    }


)()