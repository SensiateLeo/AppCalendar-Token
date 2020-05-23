Instruções para compilar executar a aplicação Calendário de Eventos:

Primeiro deve se instalar alguns softwares em seu computador:
- Deve-se instalar o Node.js. (https://nodejs.org/en/).
- Deve-se instalar o Angular CLI (https://cli.angular.io/).

Tendo esses softwares instalados, faça o download da pasta "app-calendar"

Após baixar a pasta, abra o pronpt de comando ("cmd.exe" no Windows) e navegue até 
o diretório "app-calendar" 

Após isso, digite o seguinte comando no prompt:

                            ng serve

Com isso, o código irá compilar. Espere até que a compilação esteja completa.

Uma vez que esteja compilado, abra seu navegador Web (de preferência o Google Chrome ou Mozilla Firefox)
e acesse: http://http://localhost:4200

A aplicação será iniciada e você entrará na tela de login

Caso ainda não possua um conta, preencha os campos email e senha e clique em Registrar
Senão, basta preencher os campos com o email e senha cadastrados e clica em Login

Se quiser utilizar uma conta já existente, acesse com:
login: teste@teste.com
senha: teste123

Com isso, você terá acesso á página, que irá exibir os eventos já cadastrados.
Nela você podera visualizar, inserir, editar ou excluir eventos conforme desejar.

Obs: O banco de dados utilizados foi o Google Firebase.
Como o Firebase não é uma base de dados relacional, o frontend deve tratar os dados em situações
de escrita ou leitura. Mais informações no código do programa.