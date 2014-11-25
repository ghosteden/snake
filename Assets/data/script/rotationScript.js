#pragma strict

var rotationSpeed : float = 2.0;
var angleModif = 'y';
function Start () {

}

function Update () {
	switch(angleModif){
		case 'x':
			transform.Rotate(Vector3(rotationSpeed,0,0));
		break;
		case 'y':
			transform.Rotate(Vector3(0,rotationSpeed,0));
		break;
		case 'z':
			transform.Rotate(Vector3(0,0,rotationSpeed));
		break;
	}
}