<?php
  mysql_connect("localhost","adminbase","teambr0");
  mysql_select_db("basecamp_");
  $sql=mysql_query("SELECT * FROM wp_posts WHERE ID = ID IN ('river-right', 'brew', 'trails')");
  $stmt->bindParam("id", $_GET[id]);
  while($row=mysql_fetch_assoc($sql)) $output[]=$row;
  print(json_encode(array("markers1"=>$output)));
mysql_close();
?>