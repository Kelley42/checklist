(()=>{"use strict";const e=(e,t,n,o,c,i,d)=>({status:e,title:t,description:n,date:o,priority:c,location:i,originalDate:d});let t=[];function n(){t.forEach((e=>{if("Inbox"==f.whichProject?"not done"==e.status&&"Inbox"==e.location&&o(e):"not done"==e.status&&e.location==f.whichProject&&o(e),"Today"==f.whichDate){const t=function(){let e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return e=n+"/"+t+"/"+o,e}();"not done"==e.status&&e.date==t&&o(e)}else if("Week"==f.whichDate){const t=function(){let e=[];for(let t=0;t<7;t++){let n=new Date;n.setDate(n.getDate()+t);let o=String(n.getDate()).padStart(2,"0"),c=String(n.getMonth()+1).padStart(2,"0"),i=n.getFullYear();n=c+"/"+o+"/"+i,e.push(n)}return e}();"not done"==e.status&&t.includes(e[3])&&o(e)}}))}function o(e){const o=document.createElement("div");o.classList.add("item");const c=document.createElement("div");c.classList.add("todo-done-title-descrip-container");const a=document.createElement("button");a.type="button",a.classList.add("done"),a.addEventListener("click",(()=>{"not done"==e.status?(e.status="done",a.innerHTML="✓"):(e.status="not done",a.innerHTML=""),o.classList.toggle("hidden-item"),setTimeout((()=>{m.innerHTML="",n()}),"2000")})),c.appendChild(a);const s=document.createElement("div");s.classList.add("todo-title-description-container");const u=document.createElement("h2");u.classList.add("title"),u.innerHTML=e.title,s.appendChild(u);const p=document.createElement("p");p.classList.add("description"),p.innerHTML=e.description,s.appendChild(p),c.appendChild(s);const f=document.createElement("div");f.classList.add("todo-date-edit-container");const x=document.createElement("p");x.classList.add("date"),x.innerHTML=e.date,f.appendChild(x),"Low"==e.priority?(a.style.border="solid var(--pewter-blue) 4px",a.style.backgroundColor="var(--light-pewter-blue)"):"Medium"==e.priority?(a.style.border="solid var(--jasmine) 4px",a.style.backgroundColor="var(--light-jasmine)"):"High"==e.priority&&(a.style.border="solid var(--tomato) 4px",a.style.backgroundColor="var(--light-tomato)");const w=document.createElement("button");w.classList.add("edit-btn"),w.addEventListener("click",(()=>{function n(){e.title=L.value,e.description=v.value;let t=r();e.date=t,e.priority=b.value,e.location=document.getElementById("new-todo-project").value,e.originalDate=E.value,l(),d(),k.removeEventListener("click",n)}h.innerHTML="Edit Todo",L.placeholder="",L.value=u.innerText,v.value=p.innerHTML,E.value=e.originalDate,b.value=e.priority,T.value=e.location,y.style.display="block",L.focus(),k.removeEventListener("click",i),k.addEventListener("click",n),y.style.padding="30px 40px 90px 40px",g.style.display="flex",T.style.display="flex";const o=document.createElement("option");o.value="New Project",o.innerHTML="New Project";let c=!0;document.querySelector("#delete-todo-btn").addEventListener("click",(()=>{-1!==e&&1==c&&(t.splice(e,1),c=!1),l(),k.removeEventListener("click",n)}))}));const S=document.createElement("img");S.src="./images/pencil-outline.png",w.appendChild(S),f.appendChild(w),o.append(c,f),m.appendChild(o)}function c(){y.style.display="none",L.placeholder="Todo Title",L.value=""}function i(){d(),l()}function d(){let n=L.value,o=v.value,c=r(),i=b.value,d=f.whichProject,l=E.value;const a=e("not done",n,o,c,i,d,l);t.push(a)}function r(){let e="";if(""!=E.value){const[t,n,o]=E.value.split("-");e=[n,o,t].join("/")}else e="";return e}function l(){m.innerHTML="",n(),y.reset(),c()}const a=document.querySelector("#content");a.classList.add("todo-content");const s=document.createElement("div");s.classList.add("todo-header");const u=document.createElement("h2");u.classList.add("todo-title"),u.innerHTML="Inbox",s.appendChild(u);const p=document.createElement("button");p.type="button",p.classList.add("add-todo-btn"),p.innerHTML="+",p.addEventListener("click",(function(){h.innerHTML="Add Todo",L.placeholder="Todo Title",y.style.padding="30px 40px 30px 40px",y.style.display="block",L.focus(),k.addEventListener("click",i),g.style.display="none",T.style.display="none"})),s.appendChild(p),a.appendChild(s);const m=document.createElement("div");m.classList.add("todo-items-container"),a.appendChild(m);const y=document.querySelector(".new-todo-form"),h=document.querySelector("#add-todo-header"),L=document.querySelector("#new-todo-title"),v=document.querySelector("#new-todo-description"),E=document.querySelector("#new-todo-date"),b=document.querySelector("#new-todo-priority"),T=document.querySelector("#todo-project-field");document.querySelector("#cancel-todo-btn").addEventListener("click",c);const k=document.querySelector("#save-todo-btn"),g=document.querySelector("#delete-todo-btn-group");let f={whichDate:"",whichProject:"Inbox"};function x(){m.innerHTML="",document.querySelector("#navbar-container").classList.toggle("visible")}function w(){document.querySelectorAll(".project-title").forEach((e=>{e.classList.add(e.innerText),e.addEventListener("click",(()=>{f.whichDate="",f.whichProject=e.innerText,u.innerHTML=e.innerText,x(),n()}))}))}document.querySelector("#inbox-tab").addEventListener("click",(()=>{f.whichDate="",f.whichProject="Inbox",u.innerHTML="Inbox",x(),n()})),document.querySelector("#today-tab").addEventListener("click",(()=>{f.whichProject="",f.whichDate="Today",u.innerHTML="Today",x(),n()})),document.querySelector("#week-tab").addEventListener("click",(()=>{f.whichProject="",f.whichDate="Week",u.innerHTML="This Week",x(),n()}));let S=[];function M(){S.forEach((e=>{const t=document.createElement("div");t.classList.add("project-title-container");const n=document.createElement("li");n.classList.add("project-title"),n.innerHTML=e;const o=document.createElement("button");o.classList.add("edit-btn"),o.addEventListener("click",(e=>{I.innerHTML="Edit Project",F.placeholder="";const t=n.innerText;F.value=t,D.style.display="block",F.focus(),W.removeEventListener("click",H),W.addEventListener("click",j),j(n,t),D.style.padding="30px 40px 70px 40px",A.style.display="flex",document.querySelector("#delete-project-btn").addEventListener("click",(()=>{const e=S.indexOf(t);-1!==e&&S.splice(e,1),q(),W.removeEventListener("click",j)})),e.stopPropagation()}));const c=document.createElement("img");c.src="./images/pencil-outline.png",o.appendChild(c),n.appendChild(o),t.appendChild(n),P.appendChild(t)})),function(){const e=document.querySelector("#new-todo-project");e.innerHTML="";const t=document.createElement("option");t.value="Inbox",t.innerHTML="Inbox",e.appendChild(t),S.forEach((t=>{const n=document.createElement("option");n.value=t,n.innerHTML=t,e.appendChild(n)}))}()}function H(){S.push(F.value),q(),w()}function j(e,t){e.innerHTML=F.value;const n=S.indexOf(t);-1!==n&&(S[n]=e.innerHTML);const o=document.querySelector(".todo-title");t==o.innerHTML&&(o.innerHTML=e.innerHTML),q(),W.removeEventListener("click",j)}function q(){P.innerHTML="",M(),D.reset(),C()}function C(){D.style.display="none",F.placeholder="Project Title",F.value=""}document.querySelector("#add-project").addEventListener("click",(function(){I.innerHTML="Add Project",F.placeholder="Project Title",D.style.padding="30px 40px 30px 40px",D.style.display="block",F.focus(),W.addEventListener("click",H),A.style.display="none"}));const D=document.querySelector(".new-project-form"),P=document.querySelector("#project-links"),I=document.querySelector("#add-project-header");document.querySelector("#cancel-project-btn").addEventListener("click",C);const W=document.querySelector("#save-project-btn"),A=document.querySelector("#delete-project-btn-group"),F=document.querySelector("#new-project-title");F.addEventListener("keydown",(e=>{"Enter"==e.key&&(e.preventDefault(),W.click())}));const N=document.querySelector("#navbar-container");document.querySelector("#nav-button-expand").addEventListener("click",(()=>{N.classList.toggle("visible")})),C(),S.push("Personal","Work"),M(),function(){const n=e("not done","run","run description","11/12/2022","Low","Inbox","2022-11-12"),o=e("not done","walk","walk description","11/14/2022","Medium","Inbox","2022-11-14"),c=e("not done","hike","hiking","11/15/2022","High","Inbox","2022-11-15"),i=e("not done","play","playing","11/16/2022","Low","Personal","2022-11-16"),d=e("not done","work","working","11/23/2022","High","Work","2022-11-23");t.push(n,o,c,i,d)}(),c(),w(),n()})();