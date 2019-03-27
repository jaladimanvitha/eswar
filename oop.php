<html>
<body>
 /* <?php
  include("product.php");
  //$GET[];
  $product1= new Product;
  if (isset($_POST['submit']))
  {
  $product1->setId($_POST['productId']);
  $product1->setName($_POST['productName']);
  $product1->display();
  }
?>*/
<?php
if (isset($_POST['submit']))
{
$x=$_POST['productId'];
$y=$_POST['productName'];
echo $x. "-" . $y;
}
?>


</body>



</html>
