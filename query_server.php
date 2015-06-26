<?php
header("Content-type: application/json");
$dbhost = "127.0.0.1";
$dbuser = "root";
//$dbpass = "";
$dbpass = "prakhar730";
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
$allowed = 0;

if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}

$headers = apache_request_headers();

foreach ($headers as $header => $value) {
//    echo "$header: $value <br />\n";
    if($header == 'acceptance' && $value == 'asdf'){
        $allowed =1;
    }
}

if($allowed != 1){
    die('no rights');
}

mysql_select_db('foyc');

//table name
$sql = 'SELECT * FROM votes';

$retval = mysql_query( $sql, $conn );
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}

$json = "";
 
//$row = mysql_fetch_array($retval);
$i=1;
echo "{\"student_data\":[";
while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
{
  $i++;
  //$json =  json_encode($row);
  echo json_encode($row);
  if($i<=10)
  echo ",";
} 

  echo "]}";
//echo "{\"student_data\":$json}";
 
//mysql_close($conn);

?>				