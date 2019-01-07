export class Evento {

	id: Number;
	name: String;
	date: Date;
	calle: String;
	localidad: String;
	image: String;

	constructor(name: String, date: Date, calle: String, localidad: String, image?:String, id?: Number){
		this.id = id;
		this.name = name;
		this.date = date;
		this.calle = calle;
		this.localidad = localidad;
		//image?this.image=image:'people-at-party.png';
		this.image='people-at-party.png';
	}
}