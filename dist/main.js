(()=>{"use strict";const e=document.querySelector("#navbar-container");document.querySelector("#nav-button-expand").addEventListener("click",(()=>{e.classList.toggle("visible")})),(()=>{let e=[];function t(){for(const t in e){const n=document.createElement("div");n.classList.add("item");const c=document.createElement("h2");c.classList.add("title"),c.innerHTML=e[t][0];const o=document.createElement("p");o.classList.add("description"),o.innerHTML=e[t][1];const d=document.createElement("p");d.classList.add("date"),d.innerHTML=e[t][2];const l=document.createElement("p");l.classList.add("priority"),l.innerHTML=e[t][3];const i=document.createElement("p");i.classList.add("done"),i.innerHTML=e[t][4],n.append(c,o,d,l,i),r.appendChild(n)}}function n(){s.style.display="none",a.placeholder="Todo Title",a.value=""}function c(){e.push(a.value),r.innerHTML="",t(),s.reset(),n()}const o=document.querySelector("#content");o.classList.add("todo-content");const d=document.createElement("div");d.classList.add("todo-header");const l=document.createElement("h2");l.classList.add("todo-title"),l.innerHTML="Inbox",d.appendChild(l);const i=document.createElement("button");i.type="button",i.classList.add("add-todo-btn"),i.innerHTML="+",i.addEventListener("click",(function(){u.innerHTML="Add Todo",a.placeholder="Todo Title",s.style.padding="30px 40px 30px 40px",s.style.display="block",a.focus(),p.addEventListener("click",c),m.style.display="none"})),d.appendChild(i),o.appendChild(d);const r=document.createElement("div");r.classList.add("todo-items-container"),o.appendChild(r);const s=document.querySelector(".new-todo-form"),a=document.querySelector("#new-todo-title"),u=document.querySelector("#add-todo-header");document.querySelector("#cancel-todo-btn").addEventListener("click",n);const p=document.querySelector("#save-todo-btn"),m=document.querySelector("#delete-todo-btn-group");e.push(["run","run description","date","high","not done"],["walk","walk description","date","low","done"]),n(),t()})(),(()=>{let e=[];function t(){e.forEach((t=>{const o=document.createElement("div");o.classList.add("project-title-container");const u=document.createElement("li");u.classList.add("project-title"),u.innerHTML=t;const p=document.createElement("button");p.classList.add("edit-btn"),p.addEventListener("click",(()=>{i.innerHTML="Edit Project",a.placeholder="";const t=u.innerText;function o(){u.innerHTML=a.value;const n=e.indexOf(t);-1!==n&&(e[n]=u.innerHTML),c(),r.removeEventListener("click",o)}a.value=t,d.style.display="block",a.focus(),r.removeEventListener("click",n),r.addEventListener("click",o),d.style.padding="30px 40px 70px 40px",s.style.display="flex",document.querySelector("#delete-project-btn").addEventListener("click",(()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1),c(),r.removeEventListener("click",o)}))}));const m=document.createElement("img");m.src="./images/pencil-outline.png",p.appendChild(m),u.appendChild(p),o.appendChild(u),l.appendChild(o)}))}function n(){e.push(a.value),c()}function c(){l.innerHTML="",t(),d.reset(),o()}function o(){d.style.display="none",a.placeholder="Project Title",a.value=""}document.querySelector("#add-project").addEventListener("click",(function(){i.innerHTML="Add Project",a.placeholder="Project Title",d.style.padding="30px 40px 30px 40px",d.style.display="block",a.focus(),r.addEventListener("click",n),s.style.display="none"}));const d=document.querySelector(".new-project-form"),l=document.querySelector("#project-links"),i=document.querySelector("#add-project-header");document.querySelector("#cancel-project-btn").addEventListener("click",o);const r=document.querySelector("#save-project-btn"),s=document.querySelector("#delete-project-btn-group"),a=document.querySelector("#new-project-title");a.addEventListener("keydown",(e=>{"Enter"==e.key&&(e.preventDefault(),r.click())})),o(),e.push("Personal","Work"),t()})()})();