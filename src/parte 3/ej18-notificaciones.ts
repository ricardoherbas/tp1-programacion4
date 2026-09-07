/**
 * EJERCICIO 18 - Sistema de notificaciones
 * ---------------------------------------------------------------------------
 * `enviarNotificaciones` debe funcionar con cualquier tipo de notificación,
 * sin importarle cuál es el tipo concreto.
 */
export abstract class Notificacion {
    abstract enviar(mensaje: string): void;
}

export class NotificacionEmail extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`${mensaje} es enviado por email`);
    }
}

export class NotificacionSMS extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`${mensaje} es enviado por sms`);
    }
}

export class NotificacionPush extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`${mensaje} es enviado por push `);
    }
}

export function enviarNotificaciones(
    notificaciones: Notificacion[],
    mensaje: string
): void {
    notificaciones.forEach((notificacion) => {notificacion.enviar(mensaje)});
}