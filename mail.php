<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
    <?php
        
        if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){
            $secret = '6LcO39MaAAAAALInE3Lu7CrArGj8EVAyh3sptkOO';
            $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
            $responseData = json_decode($verifyResponse);
            if($responseData->success)
            { 
                $adresseIPDuClient = $_SERVER["REMOTE_ADDR"] ." - ". $_SERVER["HTTP_USER_AGENT"];
                $Ip = $_SERVER["REMOTE_ADDR"];
                    if ($Ip == '212.92.112.131') {  //ip banie
                        echo '<p>Fatal error</p>';
                    }else{
                        $message2 = ($adresseIPDuClient . "\nnom :" . $_POST['nom'] ." prenom :". $_POST['prenom'] ." Email :". $_POST['Email']."\nmessage:\n" . $_POST['comment']);
                        $retour = mail('yvan.allioux.pro@gmail.com', 'Envoi depuis la page Contact', $message2 );
                        if ($retour) {
                            echo '<p>ok</p>';
                            header('Location: http://yvanallioux.fr/');
                            exit();
                        }
                    }
            }
            else
            {
                echo '<p>Fatal error</p>';
            }
        }
        
        

    
    
    
    
    ?>
</body>

</html>
