#pragma strict
var texte;
texte = GetComponentInChildren(MeshRenderer);
function Start () {
}

function Update () {

}
function OnMouseEnter(){
	// hover sur le bouton
	//texte.material.color = Color.red;
}
function OnMouseExit(){
	// hover sur le bouton
	//text.material.color = Color.white;
}
function OnMouseUp(){
	// hover sur le bouton
	Application.LoadLevel("niv1");
}