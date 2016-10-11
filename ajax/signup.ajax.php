<?php
/**
 * AJAX :
 * author @andrew
 * action: 'register',
 *    name: $('#name').val(),
 *    email: $('#email').val(),
 *    phone: $('#phone').val(),
 *    company: $('$company').val(),
 *    preference: services
 */

if(isset($_POST) && isset($_POST['register'])) {

    $register = json_decode($_POST['register'], true);

    if (!isset($register['action'])) {
        echo json_encode(array('success' => 0, 'code' => '4'));
        exit;
    }
    
    $prefs = "";

    if(count($register['preferance']) == 0) {
        echo json_encode(array('success' => 0, 'code' => 3));
        exit;
    }

    if($register['action'] == "register") {
        $newMessage = '<table cellpadding="0" cellspacing="0" border="0" align="center" width="600" height="35">'.
            '<tbody><tr>'.
            '<td style="font-size: 18px; font-weight: strong;">Request from Vestadvertising.com</td>'.
            '</tr></tbody>'.
            '</table>'.
            '<table cellpadding="0" cellspacing="0" border="0" align="center" width="600">'.
            '<tbody><tr>'.
            '<td width="175"> Name </td>'.
            '<td width="525">: '.$register['name'].'</td>'.
            '</tr>'.
            '<tr>'.
            '<td width="175"> Email </td>'.
            '<td width="525">: '.$register['email'].'</td>'.
            '</tr>'.
            '<tr>'.
            '<td width="175"> Phone </td>'.
            '<td width="525">: '.$register['phone'].'</td>'.
            '</tr>'.
            '<tr>'.
            '<td width="175"> Company </td>'.
            '<td width="525">: '.$register['company'].'</td>'.
            '</tr>'.
            '<tr>'.
            '<td width="175"> Interested in </td>'.
            '<td width="525">: '. implode(", ", $register['preferance'])  .'</td>'.
            '</tr>'.
            '<tr>'.
            '<td width="175"> Created On </td>'.
            '<td width="525">: '.date("F j, Y, g:i a").'</td>'.
            '</tr></tbody>'.
            '</table>';
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: no-reply@vestadvertising.com' . "\r\n";
        $result = mail('hello@vestadvertising.com', '[vestadvertising.com] Contact Request', $newMessage, $headers);

        if($result) {
            echo json_encode(array( "success" => 1, "code" => 1));
        } else {
            echo json_encode(array( "success" => 1, "code" => 2));
        }
    }
}

