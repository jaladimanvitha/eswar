<?php
if(isset($_POST["submit"])) {
$studentId= $_POST["studentId"];
$assignment = $_POST["a1"]+$_POST["a2"]+$_POST["a3"]+$_POST["a4"]+$_POST["a5"]+$_POST["a6"]+$_POST["a7"]+$_POST["a8"]+$_POST["a9"]+$_POST["a10"];
$quiz = $_POST["q1"]+$_POST["q2"]+$_POST["q3"]+$_POST["q4"]+$_POST["q5"]+$_POST["q6"]+$_POST["q7"]+$_POST["q8"]+$_POST["q9"]+$_POST["q10"];
$part = $_POST["p1"]+$_POST["p2"]+$_POST["p3"]+$_POST["p4"]+$_POST["p5"]+$_POST["p6"]+$_POST["p7"]+$_POST["p8"]+$_POST["p9"]+$_POST["p10"];
$exam = $_POST["e1"]+$_POST["e2"];
$project = $_POST["pr1"];
$credit = $_POST["ec1"];

$servername="127.0.0.1:3306";
$username="root";
$password="toor";
$db="exampl1";
$conn = new mysqli($servername, $username, $password, $db);
if ($conn->connect_error) {
  die("connection failed:" . $conn->connect_error);
}
$a= "INSERT INTO gradecal VALUES($studentId,$assignment,$quiz,$part,$exam,$project,$credit)";
if ($conn->query($a) === TRUE) {
 echo "success";
}
else {
echo "error" . $conn->error;
}
}
echo "hello";
$selectq= "SELECT * FROM gradecal WHERE student_id=$studentId";
$res= $conn->query($selectq);
echo "$res";
if ($res = $conn->query($selectq)) {
 if (mysqli_num_rows($res) > 0) {
 echo "<table>";
  echo "<tr>";
   echo "<th> assignment </th>";
   echo "<th> quiz </th>";
   echo "<th> participation </th>";
   echo "<th> exam </th>";
   echo "<th> project </th>";
   echo "<th> extracredit </th>";
echo "</tr>;
while($row = mysqli_fetch_array($res) )  {
echo "<tr>";
echo "<td>" . $row["assignments"] . "</td>";
echo "<td>" . $row["quiz"] . "</td>";
echo "<td>" . $row["participation"] . "</td>";
echo "<td>" . $row["exam"] . "</td>";
echo "<td>" . $row["project"] . "</td>";
echo "<td>" . $row["extracredit"] . "</td>";
echo"/tr>";
}
echo "</table>";
mysqli_free_result($res);
}
else { echo "no matching"; }
}
else { echo "....." $conn->error; }
}

?>
