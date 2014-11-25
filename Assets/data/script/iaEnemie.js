#pragma strict

var pathPoint:Transform[];
private var speed = 5;
private var currentPathPoint:int;

function Awake(){
	pathPoint[0] = transform;
}

function Start () {

}

function Update () {
	if(currentPathPoint < pathPoint.length){
		var zone:Vector3 = pathPoint[currentPathPoint].position;
		var movingTo:Vector3 = zone - transform.position;
		var velocity = rigidbody.velocity;
		if(movingTo.magnitude < 1){
			currentPathPoint++;
		}else{
			velocity = movingTo.normalized * speed;
		}
	}else{
		currentPathPoint = 0;
	}
	rigidbody.velocity = velocity;
	transform.LookAt(zone);
}