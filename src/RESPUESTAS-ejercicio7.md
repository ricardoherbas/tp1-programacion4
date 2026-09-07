# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

_(tu respuesta)_
Interface lo que permite hacer es una fusion de declaraciones (declarar dos veces y que ts las combine en una sola con sus atributos juntos), si queres hacer eso con type, ts tira error

## ¿Qué permite hacer `type` que `interface` no?

_(tu respuesta — pensá en uniones, tuplas, tipos primitivos con alias, mapped types)_
Interface solo puede describir la forma de un objeto (qué propiedades tiene y de qué tipo son) en cambio type permite hacer uniones o tuplas
## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?
Para interface usa palabra clave extends(herencias) y para type se usa el operador & (interseccion) que combinan dos tipos en uno que tiene las propiedades de ambos.        
_(tu respuesta)_

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

_(tu respuesta)_ Elegiría Interface para reprensetar una entidad del dominio como Alumno ya que este tiene una forma fija de objeto (legajo,nombre, apellido etc) y "extends" permite extenderla en caso que se tenga que agregar una nueva propiedad
