
<?php

    class Product
     {
      //declare private var
      private $productId, $productName;
      function __construct()
      {
       $this->productId = "";
       $this->productName = "";
       
      }
      function setId($id)
      {
        $this->productId = $id;
        
      }
      function setName($name)
      {
       $this->productName = $name;

      }
    
      function getId()
      {
       return $this->productId;
      } 

      function getName()
      {
       return $this->productName;
      }
      function display()
     {
      echo $this->getId() . "-" . $this->getName();

     }

 }





?>
