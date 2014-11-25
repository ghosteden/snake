#pragma strict
var cible:Transform;
var balle:Transform;
var faireFeu;
var amortissementMitraillette:float = 1;
var forwardBalle:float = 3000;

function Start () {

}

function Update () {
	var rotate = Quaternion.LookRotation(cible.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * amortissementMitraillette);
	var temps:int = Time.time;
	var cadence = (temps % 5);
	if(cadence){
		tir(temps);
	}
}

function tir(temps){
	if(temps!=faireFeu){
		var tirer = Instantiate(balle, transform.Find("depart").transform.position, Quaternion.identity);
		tirer.rigidbody.AddForce(transform.forward*forwardBalle);
		faireFeu = temps; 
	}
}