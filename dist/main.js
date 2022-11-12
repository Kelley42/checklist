(()=>{"use strict";const e=document.querySelector("#navbar-container");document.querySelector("#nav-button-expand").addEventListener("click",(()=>{e.classList.toggle("visible")})),(()=>{let e=[];function t(){for(const n in e)if("not done"==e[n][0]){const c=document.createElement("div");c.classList.add("item");const l=document.createElement("div");l.classList.add("todo-done-title-descrip-container");const i=document.createElement("button");function r(){"not done"==e[n][0]?(e[n][0]="done",i.innerHTML="✓"):(e[n][0]="not done",i.innerHTML=""),c.classList.toggle("hidden-item"),setTimeout((()=>{s.innerHTML="",t()}),"2000")}i.type="button",i.classList.add("done"),i.addEventListener("click",r),l.appendChild(i);const L=document.createElement("div");L.classList.add("todo-title-description-container");const h=document.createElement("h2");h.classList.add("title"),h.innerHTML=e[n][1],L.appendChild(h);const k=document.createElement("p");k.classList.add("description"),k.innerHTML=e[n][2],L.appendChild(k),l.appendChild(L);const b=document.createElement("div");b.classList.add("todo-date-edit-container");const T=document.createElement("p");T.classList.add("date"),T.innerHTML=e[n][3],b.appendChild(T),"Low"==e[n][4]?(i.style.border="solid var(--pewter-blue) 4px",i.style.backgroundColor="var(--light-pewter-blue)"):"Medium"==e[n][4]?(i.style.border="solid var(--jasmine) 4px",i.style.backgroundColor="var(--light-jasmine)"):"High"==e[n][4]&&(i.style.border="solid var(--tomato) 4px",i.style.backgroundColor="var(--light-tomato)");const f=document.createElement("button");f.classList.add("edit-btn"),f.addEventListener("click",(()=>{u.innerHTML="Edit Todo",p.placeholder="";const t=h.innerText,c=k.innerHTML,l=e[n][4];function i(){h.innerHTML=p.value,e[n][1]=h.innerHTML,d(),v.removeEventListener("click",i)}p.value=t,m.value=c,y.value=l,a.style.display="block",p.focus(),v.removeEventListener("click",o),v.addEventListener("click",i),a.style.padding="30px 40px 90px 40px",E.style.display="flex",document.querySelector("#todo-project-field").style.display="flex";const r=document.createElement("option");r.value="New Project",r.innerHTML="New Project";let s=!0;document.querySelector("#delete-todo-btn").addEventListener("click",(()=>{-1!==n&&1==s&&(e.splice(n,1),s=!1),d(),v.removeEventListener("click",i)}))}));const x=document.createElement("img");x.src="./images/pencil-outline.png",f.appendChild(x),b.appendChild(f),c.append(l,b),s.appendChild(c)}}function n(){a.style.display="none",p.placeholder="Todo Title",p.value=""}function o(){const[t,n,o]=L.value.split("-"),c=[n,o,t].join("-");e.push(["not done",p.value,m.value,c,y.value]),d()}function d(){s.innerHTML="",t(),a.reset(),n()}const c=document.querySelector("#content");c.classList.add("todo-content");const l=document.createElement("div");l.classList.add("todo-header");const i=document.createElement("h2");i.classList.add("todo-title"),i.innerHTML="Inbox",l.appendChild(i);const r=document.createElement("button");r.type="button",r.classList.add("add-todo-btn"),r.innerHTML="+",r.addEventListener("click",(function(){u.innerHTML="Add Todo",p.placeholder="Todo Title",a.style.padding="30px 40px 30px 40px",a.style.display="block",p.focus(),v.addEventListener("click",o),E.style.display="none",document.querySelector("#todo-project-field").style.display="none"})),l.appendChild(r),c.appendChild(l);const s=document.createElement("div");s.classList.add("todo-items-container"),c.appendChild(s);const a=document.querySelector(".new-todo-form"),u=document.querySelector("#add-todo-header"),p=document.querySelector("#new-todo-title"),m=document.querySelector("#new-todo-description"),L=document.querySelector("#new-todo-date"),y=document.querySelector("#new-todo-priority");document.querySelector("#cancel-todo-btn").addEventListener("click",n);const v=document.querySelector("#save-todo-btn"),E=document.querySelector("#delete-todo-btn-group");e.push(["not done","run","run description","12-31-2029","Low"],["not done","walk","walk description","11-08-2022","Medium"],["not done","hike","hiking","03-14-2023","High"]),n(),t()})(),(()=>{let e=[];function t(){e.forEach((t=>{const d=document.createElement("div");d.classList.add("project-title-container");const u=document.createElement("li");u.classList.add("project-title"),u.innerHTML=t;const p=document.createElement("button");p.classList.add("edit-btn"),p.addEventListener("click",(()=>{i.innerHTML="Edit Project",a.placeholder="";const t=u.innerText;function d(){u.innerHTML=a.value;const n=e.indexOf(t);-1!==n&&(e[n]=u.innerHTML),o(),r.removeEventListener("click",d)}a.value=t,c.style.display="block",a.focus(),r.removeEventListener("click",n),r.addEventListener("click",d),c.style.padding="30px 40px 70px 40px",s.style.display="flex",document.querySelector("#delete-project-btn").addEventListener("click",(()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1),o(),r.removeEventListener("click",d)}))}));const m=document.createElement("img");m.src="./images/pencil-outline.png",p.appendChild(m),u.appendChild(p),d.appendChild(u),l.appendChild(d)})),function(){const t=document.querySelector("#new-todo-project");t.innerHTML="";const n=document.createElement("option");n.value="Inbox",n.innerHTML="Inbox",t.appendChild(n),console.log(t),e.forEach((e=>{const n=document.createElement("option");n.value=e,n.innerHTML=e,t.appendChild(n)}))}()}function n(){e.push(a.value),o()}function o(){l.innerHTML="",t(),c.reset(),d()}function d(){c.style.display="none",a.placeholder="Project Title",a.value=""}document.querySelector("#add-project").addEventListener("click",(function(){i.innerHTML="Add Project",a.placeholder="Project Title",c.style.padding="30px 40px 30px 40px",c.style.display="block",a.focus(),r.addEventListener("click",n),s.style.display="none"}));const c=document.querySelector(".new-project-form"),l=document.querySelector("#project-links"),i=document.querySelector("#add-project-header");document.querySelector("#cancel-project-btn").addEventListener("click",d);const r=document.querySelector("#save-project-btn"),s=document.querySelector("#delete-project-btn-group"),a=document.querySelector("#new-project-title");a.addEventListener("keydown",(e=>{"Enter"==e.key&&(e.preventDefault(),r.click())})),d(),e.push("Personal","Work"),t()})()})();