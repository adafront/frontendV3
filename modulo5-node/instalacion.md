### Cómo instalar Node.js y npm ###

Node.js es un ambiente de ejecución para *Javascript* construido sobre el motor *JavaScript V8* de *Chrome*. Lo anterior significa que **el uso de JavaScript ya no queda restringido solamente al navegador web**, sino que también servirá para desarrollar aplicaciones de todo tipo, desde servidores web hasta aplicaciones de escritorio.

Por otra parte, npm es el **administrado de paquetes de Node.js**. Con él podemos instalar cualquier paquete Node.js que lleguemos a necesitar para nuestros proyectos.


### Métodos de instalación de *Node.js* ###

Para instalar *Node.js* podemos seguir dos caminos:

* ** Para instalar Node.js usando el instalador o los binarios oficiales.** Este método es el más universal y funciona para usuarios de diferentes sistemas operativos y arquitecturas, entre ellos *Windows, Mac y Linux*.

* ** Instalar Node.js por medio de un gestor de paquetes.** Este método es más limitado y solamente funciona para usuarios de sistemas operativos tipo *UNIX*.

### Instalación de Node.js usando el instalador oficial ###

Para realizar este tipo de instalación, descargamos el instalador apropiado para el sistema operativo de nuestra máquina [desde la página de descargas de Node.js][https://nodejs.org/].
A continuación ejecutamos el instalador y seguimos las instrucciones.

### Instalación de Node.js usando un gestor de paquetes ###

Si nuestro sistema operativo es de tipo *UNIX (Linux, Mac)*, es posible instalar utilizando el gestor de paquetes correspondiente a nuestro sistema operativo:


    # Debian, Ubuntu
	$ sudo apt-get install build-essential
	$ sudo apt-get install nodejs

	# Mac (con Homebrew)
	$ brew install nodejs
	
Al finalizar cualquiera de los procedimientos descritos arriba, **habremos instalado Node.js y npm en nuestra máquina** y estaremos listos para desarrollar aplicaciones con JavasCript.
