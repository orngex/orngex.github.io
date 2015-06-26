<?php
$dbhost = "127.0.0.1";
$dbuser = "root";
$dbpass = "prakhar730";
//

$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  // die('Could not connect: ' . mysql_error());
}
// Create connection

if ($_POST['dwx']=='sauravskumar'){
	$allowed = 1;
}

$headers = apache_request_headers();

$ip = null;
foreach ($headers as $header => $value) {
    echo "$header: $value <br />\n"; 

    if($header == 'CF-Connecting-IP'){
        $ip = $value;
        // echo $value;
    }

    if($header == 'acceptance' && $value == 'asdf'){
        $allowed =1;
    }
    if($header == 'postman-token'){
        $allowed =0;
        // die('check-error-log');
    }
}
echo "the ip is : > " . $ip . "<br>";
// echo "ip: >" + $ip;

$dbselect = mysql_select_db('foyc');


// echo "dbselect >>>>>>>".$dbselect."<br>";
$query_string = "
     INSERT INTO ips (id, ip_add, total)
    VALUES ('', '".$ip."', 0)
        ON DUPLICATE KEY UPDATE total = total+1
 ";
 // echo $query_string;
mysql_query($query_string);


if($allowed != 1){
    die('no rights');
}

$retval = "SELECT total from ips WHERE ip_add='".$ip."'";
// echo "<br>retval > ".$retval."<br>";
$sql_result = mysql_query($retval);
$row = mysql_fetch_array($sql_result); 
// echo $row['total'];
$total_from_ip = $row['total'];

if($total_from_ip > 10){
	die();
}

// echo ">>>>>>>>>>>>>>";
// while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
// {
//   $i++;
//   echo "FETCHING";
//    echo json_encode($row);
//   echo "<br>";
// } 


// mysql_select_db('foyc');
// 
// Check connection
//if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
//}

echo "Connected successfully";

$branch = $_POST['branch'];

// if($branch=='C.S.E'){
//     $randx = rand ( 1 , 2 );
//     if($randx == 1){
//      // die();
//         mysql_query("
//         UPDATE votes
//         SET value = value + 1
//         WHERE branch = '".$branch."'
//     ");
//     }
// }
// elseif($branch=='Production'){
//     $randx = rand ( 1 , 2 );
//     if($randx == 1){
//     // die();
//         mysql_query("
//         UPDATE votes
//         SET value = value + 1
//         WHERE branch = '".$branch."'
//     ");
//     }
// }
// elseif($branch=='C.S.E' || $branch=='Electrical'){
//     $randx = rand ( 1 , 2 );
//     if($randx == 1){
//     // die();
//         mysql_query("
//         UPDATE votes
//         SET value = value + 1
//         WHERE branch = '".$branch."'
//     ");
//     }
// }
//     elseif ($branch=='Civil' ) {
//          mysql_query("
//     UPDATE votes
//     SET value = value + 1
//     WHERE branch = '".$branch."'
// ");
// }
// else{
// //$branch = "Civil";
//  mysql_query("
//     UPDATE votes
//     SET value = value + 3
//     WHERE branch = '".$branch."'
// ");
//  }


mysql_query("
     UPDATE votes
     SET value = value + 1
     WHERE branch = '".$branch."'
 ");

header(200,"Location: https://www.bitsleo.com");

//
//echo "Hello<br>";
//echo $branch;
?>