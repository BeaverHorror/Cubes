<!DOCTYPE HTML>
<html>
  <head>
    <title>Заголовок</title>
  </head>
  
  <body> 
    
    <?php 
      // ../other/img/
	  
	  $txt = "";
      if(isset($_GET['txt'])) $txt = $_GET['txt'];
	  //echo $txt;

      $dir_path = "../".$txt;
      $scan = scandir($dir_path);
      //print_r($scan);
    
      for($i = 2; $i < count($scan); $i++){
        $filename = $scan[$i];
        $format = substr($filename,strpos($filename,"."));
        if($format == ".jpg" || $format == ".png"){
          //echo "<br />".$scan[$i]; 
          echo "<img width='100' src=".$dir_path."/".$scan[$i]." />";
          echo $scan[$i]; 
          //echo $format;
        }
      }
 
      //echo $txt;

    ?>
    
  </body>

</html>


////ewfwef

/////цуацацуац
