(()=>{"use strict";const e=document.querySelector("#navbar-container");document.querySelector("#nav-button-expand").addEventListener("click",(()=>{e.classList.toggle("visible")})),(()=>{const e=document.querySelector("#content");e.classList.add("todo-content");const t=document.createElement("div");t.classList.add("todo-header"),t.innerHTML="Inbox",e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-items-container"),n.append(function(e){const t=document.createElement("div");t.classList.add("todo-list-container");for(const n in e){const c=document.createElement("div");c.classList.add("item");const o=document.createElement("h2");o.classList.add("title"),o.innerHTML=e[n][0];const d=document.createElement("p");d.classList.add("description"),d.innerHTML=e[n][1];const s=document.createElement("p");s.classList.add("date"),s.innerHTML=e[n][2];const i=document.createElement("p");i.classList.add("priority"),i.innerHTML=e[n][3];const a=document.createElement("p");a.classList.add("done"),a.innerHTML=e[n][4],c.append(o,d,s,i,a),t.appendChild(c)}return t}([["run","run description","date","high","not done"],["walk","walk description","date","low","done"]])),e.appendChild(n)})(),(()=>{let e=[];function t(){e.forEach((function(e){const t=document.createElement("li");t.classList.add("project-title"),t.innerHTML=e,console.log(e);const n=document.createElement("button");n.classList.add("edit-btn");const o=document.createElement("img");o.src="./images/pencil-outline.png",n.appendChild(o),t.appendChild(n),c.appendChild(t)}))}document.querySelector("#add-project").addEventListener("click",(function(){n.style.display="block"}));const n=document.querySelector(".new-project-form"),c=document.querySelector("#project-links");function o(){n.style.display="none"}document.querySelector("#cancel-project-btn").addEventListener("click",o),document.querySelector("#save-project-btn").addEventListener("click",(function(){const d=document.querySelector("#new-project-title");e.push(d.value),c.innerHTML="",t(),n.reset(),o()})),o(),e.push("Personal","Work"),t()})()})();