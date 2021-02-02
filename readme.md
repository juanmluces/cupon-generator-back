# Generador de cupones/codigos


- Uso desde server:

  Se pueden ejecutar simplemente modificando el archivo build/config.json y ejecutando el servidor con node app.js en http://localhost:3000 y éste devolvera un json con los cupones basados en el config.json

    los valores del config.json pueden ser: 

    "cantidad": num entre 0 y 200,

    "algoritmo": string de valor:

      - 'num secuencial'
      - 'num random'
      - 'alfa secuencial'
      - 'alfa random'
            
    "longitud": num entre 0 y 9

      

- Uso desde web:

  - Se debe ejecutar el servidor con node "app.js" y arrancará un servidor en el puerto 3000

  - Se ejecuta el font de angular con ng serve en el puerto 4200 y ya se podrá cambiar la configuracion desde la aplicación web.