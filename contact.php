 <?php


    $to  = "hey@nokoarts.com";
    $from    = $_POST['email'];
    $subject  = $_POST['subject'];
    $name = Trim(stripslashes($_POST['name'])); 
    $email = Trim(stripslashes($_POST['email'])); 
    $message = Trim(stripslashes($_POST['message'])); 
    $telephone = $_POST['telephone'];    
    $body = "From: $name\n 
            E-Mail: $email\n 
            Message: $message\n
            Telephone: $telephone\n";

    // validation
    $validationOK=true;
    if (!$validationOK) {
      print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
      exit;
    }

    

    // send email 
    $success = mail($to, $subject, $body, $from);

    // redirect to success page 
    if ($success){
      print "<meta http-equiv=\"refresh\" content=\"0;URL=ok.htm\">";
    }
    else{
      print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
    }
?>




