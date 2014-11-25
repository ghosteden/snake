#pragma strict
private var timer:int = 0;
private var attente:float= 1.0;
private var actualiser:boolean = false;

function Start () {

}

function Update () {
	if(!actualiser){
		StartCoroutine("pause");
	}
}

function OnGUI(){
	GUI.Label(new Rect(15,15,100,20),timer.ToString());
}

function pause(){
	actualiser = true;
	yield new WaitForSeconds(attente);
	timer ++;
	actualiser = false;
}