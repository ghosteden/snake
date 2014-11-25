#pragma strict
var capsuleSound:AudioClip;
var couleurs:Transform;
var looseSound:AudioClip;
var looseGame:String;
var theEnd:String;
var score = 0;
private var porte1:GameObject;
porte1 = GameObject.Find("porte");

function Start () {

}

function OnTriggerEnter(objectInfo:Collider){
	if(objectInfo.gameObject.tag == "caps"){
		audio.PlayOneShot(capsuleSound);
		Instantiate(couleurs,transform.position,transform.rotation);
		Destroy(objectInfo.gameObject);
		score++;
	}else if(objectInfo.gameObject.tag == "water") {
		audio.PlayOneShot(looseSound);
		yield WaitForSeconds(3.0);
		Application.LoadLevel(looseGame);
	}else if (objectInfo.gameObject.tag == "fin" && score >= 10){
		yield WaitForSeconds(1.0);
		Application.LoadLevel(theEnd);
	}else if (objectInfo.gameObject.tag == "balle"){
		audio.PlayOneShot(looseSound);
		yield WaitForSeconds(3.0);
		Application.LoadLevel(looseGame);
	}
	if ( score >= 10){
		porte1.transform.position.z = 6.9;
		porte1.transform.localScale.x = 0;
	}
}