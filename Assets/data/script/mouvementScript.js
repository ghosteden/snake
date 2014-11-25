#pragma strict
var speedMoove = 4.0;
var speedRotate = 3.0;

function Start () {

}

function Update () {
var controller:CharacterController = GetComponent(CharacterController);
transform.Rotate(0,Input.GetAxis("Horizontal")*speedRotate, 0);
var enAvant = transform.TransformDirection(Vector3.forward);
var speed = speedMoove*Input.GetAxis("Vertical");

controller.SimpleMove(enAvant*speed);

}

@script RequireComponent (CharacterController)