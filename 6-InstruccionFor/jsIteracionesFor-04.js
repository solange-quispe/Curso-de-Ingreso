function mostrar()
{	
	// al presionar el botón repetir hasta que utilizamos 'BREAK'.

	for ( var i = 0; i < 5; i++ ) {

		document.write(i);
		
		if (i == 3) {
			// EL BREAK ME CORTA LA OPERACION SEGUN EL CONDICIONAL QUE PONGA
			break;

		}
	}



} //FIN DE LA FUNCIÓN