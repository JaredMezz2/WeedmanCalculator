$servername = 'localhost';
$username = 'weedMan';
$password = 'weedPass';

$conn = new mysqli ($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error;
}
echo "Connected Successfully";

$sql = "INSERT INTO dayEntries (jobs, size, profit) VALUES (2, 5.5, 20.51)";

if ($conn->query($sql) === TRUE) {
    echo "New record success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();