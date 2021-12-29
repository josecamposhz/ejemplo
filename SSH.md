// Esta opción nos listará en la terminal el contenido de la carpeta .ssh
ls -al ~/.ssh

// Generar llave
ssh-keygen -t rsa -b 4096 -C "josecamposh95@gmail.com"

// Ingresando las llaves ssh al ssh-agent
eval "$(ssh-agent -s)"

// Ahora debemos añadir el archivo de la llave privada con el siguiente comando
ssh-add ~/.ssh/id_rsa

// Para copiar la llave utilizando Windows
clip < ~/.ssh/id_rsa.pub

// Ahora debemos ingresar la clave pública SSH en GitHub
https://github.com/settings/keys

// ssh -T git@github.com
ssh -T git@github.com