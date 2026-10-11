/* esercizio di oggi: Our Team


- Dato un array di oggetti rappresentante un team di un’azienda,
creare una pagina dedicata in cui mostrare una card per ciascun membro del team.


- Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)

**Bonus**
- Salvare i dati in `localStorage` per preservarli al refresh di pagina
- Rendere l’esercizio responsive, fruibile sia da mobile che da desktop.
 */

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

//DOM reference
const teamListEl = document.querySelector(".team-list");
const teamFormEl = document.querySelector(".team-form");
const inputImageEl = document.getElementById("image");
const inputNameEl = document.getElementById("name");
const inputRoleEl = document.getElementById("role");
const inputEmailEl = document.getElementById("email");

//Cards rendering
teamMembers.forEach((member) => {
  const { img, name, role, email } = member;

  addNewMember(img, name, role, email);
});

//Add new team member
teamFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const image = inputImageEl.value.trim();
  const name = inputNameEl.value.trim();
  const role = inputRoleEl.value.trim();
  const email = inputEmailEl.value.trim();

  addNewMember(image, name, role, email);

  teamFormEl.reset();
  inputImageEl.focus();
});

//Helper Function for add new member
function addNewMember(img, name, role, email) {
  const card = `<li class="col container mx-2 p-4">
      <div class="d-flex flex-column text-center bg-success rounded">
        <img
          class="img-fluid w-10 rounded-pill float-start m-3"
          src="../${img}"
          alt="A Picture of ${name} ${role}"
        />
        <h2 class="text-light">${name}</h2>
        <p class="text-light">${role}</p>
        <p class="text-light text-decoration-underline">
          ${email}
        </p>
      </div>
    </li>`;

  teamListEl.innerHTML += card;
}
