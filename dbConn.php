$servername = 'localhost';
$username = 'weedMan';
$password = 'weedPass';

$conn = new mysqli ($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error;
}
echo "Connected Successfully";

$conn->close();