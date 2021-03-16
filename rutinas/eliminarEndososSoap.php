<?php
    //phpinfo();    
    //ini_set('display_errors', 1);
    //ini_set('display_startup_errors', 1);
    //error_reporting(E_ALL);
    $servicio   =   'http://10.130.9.188:21000/ultucastellanos/SrvPolizas.svc?wsdl';    
    $usuario    =   'admin';
    $clave      =   'qwer1234';

    //Recuerda que para eliminar los endosos debes antes por BD cambiarle el estado de Activo a En progreso
    //amuchastegui
    /*
    $idEndosos[]=91449659;
    $idEndosos[]=91449667;
    $idEndosos[]=91449669;
    */

    //ultumaster
    /*
    $idEndosos[]=29915266   ;
    $idEndosos[]=200325566  ;
    $idEndosos[]=200325569  ;
    $idEndosos[]=200325571  ;
    $idEndosos[]=200325579	;
    */

    //ultuubsa
    /*
    $idEndosos[]=7128763    ;
    $idEndosos[]=7130846    ;
    $idEndosos[]=7983408    ;
    $idEndosos[]=9455842    ;
    $idEndosos[]=137997682  ;
    $idEndosos[]=138041460  ;
    $idEndosos[]=138041463  ;
    $idEndosos[]=130470311  ;
    $idEndosos[]=143438589  ;
    $idEndosos[]=143438591  ;
    $idEndosos[]=143438593  ;
    $idEndosos[]=143438595  ;
    $idEndosos[]=143438597  ;
    $idEndosos[]=143431632  ;
    $idEndosos[]=143431634  ;
    $idEndosos[]=143431637  ;
    $idEndosos[]=143431641  ;
    $idEndosos[]=143431639  ;
    $idEndosos[]=143431643  ;
    $idEndosos[]=143431645  ;
    $idEndosos[]=143431651  ;
    $idEndosos[]=143431653  ;
    $idEndosos[]=143431657  ;
    $idEndosos[]=143431659  ;
    $idEndosos[]=143431661  ;
    $idEndosos[]=143431663  ;
    $idEndosos[]=143431665  ;
    $idEndosos[]=143431667  ;
    $idEndosos[]=143431669  ;
    $idEndosos[]=143431671  ;
    $idEndosos[]=143431673  ;
    $idEndosos[]=143431675  ;
    $idEndosos[]=143431677  ;
    $idEndosos[]=143431679  ;
    $idEndosos[]=143431681  ;
    $idEndosos[]=143431683  ;
    $idEndosos[]=143431689  ;
    $idEndosos[]=143431685  ;
    $idEndosos[]=143431691  ;
    $idEndosos[]=143431693  ;
    $idEndosos[]=143431695  ;
    $idEndosos[]=143431697  ;
    $idEndosos[]=143431700  ;
    $idEndosos[]=143431702  ;
    $idEndosos[]=143431704  ;
    $idEndosos[]=143431711	;
    */

    //ultucastellanos
    //$idEndosos[]=1713925	;
    //$idEndosos[]=3509859	;


    


    $objcliente     =   new SoapClient($servicio);
    $arreglologin   =   array('login' => $usuario,
						  'password' => $clave,
						  'endosoId' => null);

    foreach($idEndosos as $index =>$idEndoso)
    {
        $arreglologin["endosoId"]   =   $idEndoso;		
	    $respuesta                  =   $objcliente->EliminarPolizaEndoso($arreglologin) ; 
        $estructura                 =   $respuesta->EliminarPolizaEndosoResult;	    
        //echo "<pre>";print_r($estructura);echo "</pre>";

        if ($estructura->CodigoRespuesta !="OK")
        {		
            //echo 'err/#/'.$estructura->Mensaje;	
            echo "<div style='color:red;font-weight: bold;'>".($index + 1).". El Endoso ID $idEndoso NO fue Eliminado: '".$estructura->Mensaje."'</div>";
        }		
        else
        {
            echo "<div>".($index + 1).". El Endoso ID $idEndoso fue Eliminado</div>";
        }
    }
?>