/*

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede


Dati:

NAME     SURNAME    ROLE                      IMAGE
Wayne    Barnett	Founder & CEO	          wayne-barnett-founder-ceo.jpg
Angela   Caroll	    Chief Editor	          angela-caroll-chief-editor.jpg
Walter   Gordon	    Office Manager	          walter-gordon-office-manager.jpg
Angela   Lopez	    Social Media Manager	  angela-lopez-social-media-manager.jpg
Scott    Estrada	Developer	              scott-estrada-developer.jpg
Barbara  Ramos	    Graphic Designer	      barbara-ramos-graphic-designer.jpg

*/

// Define the Member class
class Member {
	constructor(name, surname, ruolo, img) {
		this.name = name + " " + surname;
		this.ruolo = ruolo;
		this.img = img;
	}
};

// Array of Member objects
let members = [
	new Member(
		"Wayne",
		"Barnett",
		"Founder & CEO",
		"wayne-barnett-founder-ceo.jpg"
	),
	new Member(
		"Angela",
		"Caroll",
		"Chief Editor",
		"angela-caroll-chief-editor.jpg"
	),
	new Member(
		"Walter",
		"Gordon",
		"Office Manager",
		"walter-gordon-office-manager.jpg"
	),
	new Member(
		"Angela",
		"Lopez",
		"Social Media Manager",
		"angela-lopez-social-media-manager.jpg"
	),
	new Member(
		"Scott",
		"Estrada",
		"Developer",
		"scott-estrada-developer.jpg"
	),
	new Member(
		"Barbara",
		"Ramos",
		"Graphic Designer",
		"barbara-ramos-graphic-designer.jpg"
	)
];

function printMembers() {
	let container = document.getElementById("myBadgeContainer");

	// Print the array in console as requested
	console.log(members);

	members.forEach(member => {
		// Create the card
		container.innerHTML += `
			<section class="card my-card ">
				<div>
					<img class="my-card-img" src="./img/${member.img}" alt="">
				</div>
				<div class="text-center">
					<h5 class="text-secondary mt-4">
						${member.name}
					</h5>
					<p class="text-secondary my-1">
						${member.ruolo}
					</p>
				</div>
			</section>
		`;
	});
}

// Print the dream team cards
printMembers();
