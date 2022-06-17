<h3> La siguiente evaluación consta de 3 partes. Dicho lo anterior, es importante dar a entender al candidato que la evaluación; a pesar de ser posible; no está diseñada para ser resuelta en su totalidad, dado que entendemos que cada desarrollador puede tener sus fortalezas y debilidades, lo cual detectar dichas características es el objetivo de esta evaluación. Por lo anterior, instamos al candidato a leer toda la evaluación antes de iniciar el desarrollo y así decidir por cual sección iniciar.

Todo código desarrollado debe ser enviado a lo sumo a 7 días de haber recibido esta evaluación mediante repositorio Git o en su defecto mediante archivo comprimido. Debe considerar que para los casos de uso de bases de dato implementadas deberá presentar código de estructura de tablas o colección y export de la información almacenada para permitir al equipo GES entender su lógica de acceso a los datos.

En caso de cualquier duda y bloqueo para realizar la evaluación, el equipo técnico de GES está dispuesto para apoyar a los candidatos en sus consultas, para lo que es importante mencionar que, consultar información o dudas puede apoyar en su evaluación

Preguntas:

1.-Prueba de algoritmo: Dada la información suministrada en los archivos json anexos (Usuarios, libros, Regalos), desarrolle los siguientes métodos a partir de un listado de (user_id, book_id, receiver_id) . Basarse en la estructura de datos presentada en los archivos anexos:

Estadísticas de libros regalados: Libro más regalado, libro menos regalado, promedio de cantidad de veces que se ha regalado un libro.
  
Listado del top 5 de libros más regalados.
  
Listado de libros no regalados.
  
Estadísticas de grupos de conocidos: método que a partir de un listado de grupo de conocidos entregue estadísticas de: cantidad mínima de miembros, cantidad máxima de miembros, promedio de cantidad de miembros, cantidad de grupos, moda de cantidad de miembros, desviación estándar de cantidad de miembros  
   
2.- Prueba Front: Con base al wireframe anexado, levantar web; entendiendo que el sitio consta de dos páginas, Home y formulario, donde el formulario debe contar con la posibilidad de mostrar mensaje de agradecimiento.

<img src="https://i.ibb.co/1GtYv1n/pruebafront1.jpg" alt="pruebafront1" border="0"> 
<img src="https://i.ibb.co/PFhKmwX/pruebafront2.jpg" alt="pruebafront2" border="0">
<img src="https://i.ibb.co/FBD5fhJ/pruebafront3.jpg" alt="pruebafront3" border="0">
  
3.-Prueba de Back: Levantar DB con la información anexa y generar un backend que sirva los siguientes endpoints. (Basarse en la estructura de datos presentada en los archivos anexos):

Top 5 de libros más regalados junto con su cantidad de veces regalados. El endpoint debe entregar un objeto JSON donde su propiedad books es el arreglo de libros correspondiente, y donde cada libro es un objeto que al menos debe contener las propiedades id, title  e iesn.
  
Top 10 de libros no regalados con base a 1 parámetro “order” que permite 1 de dos opciones “publishDate” o “alphabetical” para ordenar de forma descendente cuando sea “publishDate” y ascendente cuando no. El endpoint debe entregar un objeto JSON donde su propiedad books es el arreglo de libros correspondiente, y donde cada libro es un objeto que al menos debe contener las propiedades id, title  e iesn.
  
Detalles de libro según parámetro “Id”. El endpoint debe entregar un objeto JSON  que al menos debe contener las propiedades id, title  e iesn
Detalles de usuario según parámetro “search” que contenga “Id” o “email” . El endpoint debe entregar un objeto JSON  que al menos debe contener las propiedades id, name , email y RUT.
  
Grupo del usuario: donde dado un parámetro “search” que contenga  “Id” o “email”, si el usuario pertenece a un grupo que no sea un grupo par (Tomar como base el método desarrollado en Prueba 1), listar los nombres de los primeros 5 usuarios del grupo en orden alfabético, y si existen más de 5, notificar que hay más usuarios en el grupo. Ejemplo si se solicita el usuario 5 del primer ejemplo de “Grupo de conocidos” se obtendrían los detalles del usuario 5, un listado con (1,3,7,8,9) indicando que hay más usuarios. El endpoint debe entregar un objeto JSON  que al menos debe contener las propiedades id, name , email, RUT, la propiedad “more” que indica si existen mas de 5 usuarios en el grupo y la propiedad group con un arreglo de “id” de los usuarios pertenecientes al grupo </h3>
