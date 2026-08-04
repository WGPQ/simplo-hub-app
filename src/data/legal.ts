export type LegalSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

export type LegalDocument = {
  eyebrow: string
  title: string
  updatedAt: string
  introduction: string
  sections: LegalSection[]
}

export const privacyPolicy: LegalDocument = {
  eyebrow: 'Política legal',
  title: 'Política de Privacidad de SimplioHub',
  updatedAt: '04 de agosto de 2026',
  introduction:
    'Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos la información cuando utilizas productos, aplicaciones, sitios web o servicios desarrollados y operados por SimplioHub.',
  sections: [
    {
      title: '1. Introducción',
      paragraphs: [
        'Bienvenido a SimplioHub.',
        'SimplioHub es una marca dedicada al desarrollo y operación de soluciones digitales orientadas a la gestión y automatización de procesos empresariales mediante plataformas Software como Servicio (SaaS).',
        'Esta política aplica a los siguientes servicios, salvo que alguno indique expresamente una política específica:',
      ],
      items: [
        'Schedule App.',
        'Los servicios disponibles en simpliohub.com.',
        'Los servicios disponibles en los subdominios de SimplioHub.',
        'Futuras aplicaciones y plataformas desarrolladas por SimplioHub.',
      ],
    },
    {
      title: 'Aceptación de esta política',
      paragraphs: ['Al utilizar cualquiera de nuestros servicios, aceptas las prácticas descritas en esta Política de Privacidad.'],
    },
    {
      title: '2. Quiénes somos',
      paragraphs: [
        'SimplioHub desarrolla herramientas tecnológicas que ayudan a empresas y profesionales a administrar sus operaciones mediante soluciones digitales.',
        'Nuestros productos pueden incluir funcionalidades relacionadas con:',
      ],
      items: ['Gestión de clientes.', 'Agendamiento de citas.', 'Automatización de comunicaciones.', 'Administración de empresas.', 'Gestión de sucursales.', 'Gestión de personal.', 'Reportes.', 'Automatización de procesos.', 'Integraciones con servicios externos.', 'Funcionalidades adicionales propias de cada producto.'],
    },
    {
      title: '3. Información que recopilamos',
      paragraphs: [
        'Dependiendo del servicio utilizado, podemos recopilar distintos tipos de información.',
        'Información de la cuenta: nombre, apellidos, correo electrónico, número telefónico, contraseña cifrada y, opcionalmente, fotografía de perfil.',
        'Información de la empresa: nombre comercial, dirección, ciudad, país, zona horaria, logotipo, información de contacto y configuraciones operativas.',
        'Información operativa: nuestros productos permiten almacenar información necesaria para la operación de cada negocio. Cada empresa es responsable de la información que registra dentro de la plataforma.',
      ],
      items: ['Clientes.', 'Empleados.', 'Horarios.', 'Citas y reservas.', 'Servicios.', 'Historial de actividades.', 'Documentos.', 'Observaciones.', 'Configuraciones.'],
    },
    {
      title: 'Información técnica',
      paragraphs: ['Podremos recopilar automáticamente información relacionada con el funcionamiento del servicio. Esta información nos ayuda a mejorar la estabilidad, seguridad y rendimiento de nuestros servicios.'],
      items: ['Dirección IP.', 'Tipo de navegador.', 'Sistema operativo.', 'Dispositivo utilizado.', 'Fecha y hora de acceso.', 'Registros de actividad.', 'Eventos de seguridad.', 'Errores técnicos.'],
    },
    {
      title: '4. Finalidad del tratamiento de los datos',
      paragraphs: ['La información recopilada podrá utilizarse para las siguientes finalidades:', 'No comercializamos ni vendemos la información personal de nuestros usuarios.'],
      items: ['Crear y administrar cuentas de usuario.', 'Prestar los servicios contratados.', 'Gestionar empresas y organizaciones.', 'Organizar agendas y procesos internos.', 'Administrar clientes.', 'Enviar comunicaciones relacionadas con el servicio.', 'Mejorar nuestros productos.', 'Detectar actividades fraudulentas.', 'Garantizar la seguridad de la plataforma.', 'Cumplir obligaciones legales.', 'Desarrollar nuevas funcionalidades.'],
    },
    {
      title: '5. Comunicaciones',
      paragraphs: ['Dependiendo del producto utilizado, SimplioHub podrá enviar confirmaciones, recordatorios, cambios de agenda, recuperación de contraseña, alertas de seguridad y notificaciones operativas.', 'Los canales utilizados podrán incluir correo electrónico, WhatsApp Business, SMS, notificaciones dentro de la plataforma u otros medios autorizados por el usuario.'],
    },
    {
      title: '6. Integraciones con terceros',
      paragraphs: ['Para ofrecer determinadas funcionalidades, nuestros productos pueden integrarse con servicios proporcionados por terceros. Cada proveedor trata la información conforme a sus propias políticas de privacidad.'],
      items: ['Meta (Facebook y WhatsApp Business Platform).', 'Servicios de correo electrónico.', 'Plataformas de almacenamiento.', 'Servicios de autenticación.', 'Servicios de procesamiento de pagos.', 'Herramientas analíticas.', 'Otros proveedores tecnológicos.'],
    },
    {
      title: '7. Uso de WhatsApp Business',
      paragraphs: ['Algunos productos de SimplioHub, como Schedule App, permiten integrar cuentas de WhatsApp Business mediante la API oficial de Meta. Cuando una empresa conecta su cuenta:'],
      items: ['La integración se realiza únicamente con autorización del administrador de la empresa.', 'SimplioHub utiliza la información estrictamente necesaria para prestar las funcionalidades solicitadas.', 'Los mensajes enviados corresponden a procesos configurados por la empresa, como confirmaciones, recordatorios o comunicaciones con sus clientes.', 'SimplioHub no envía mensajes promocionales en nombre de una empresa sin la configuración correspondiente.'],
    },
    {
      title: '8. Seguridad de la información',
      paragraphs: ['La protección de la información constituye una prioridad para SimplioHub. Aplicamos medidas técnicas y organizativas razonables.', 'Aunque implementamos medidas razonables de protección, ningún sistema conectado a Internet puede garantizar seguridad absoluta.'],
      items: ['Cifrado de las comunicaciones mediante HTTPS.', 'Control de acceso basado en roles.', 'Autenticación de usuarios.', 'Protección frente a accesos no autorizados.', 'Monitoreo de eventos de seguridad.', 'Copias de respaldo cuando corresponda.', 'Actualizaciones periódicas de seguridad.'],
    },
    {
      title: '9. Conservación de la información',
      paragraphs: ['La información será conservada durante el tiempo necesario para prestar nuestros servicios, cumplir obligaciones legales, resolver disputas, proteger nuestros derechos y mantener la continuidad operativa. Posteriormente podrá eliminarse o anonimizarse conforme a nuestros procedimientos internos.'],
    },
    {
      title: '10. Derechos de los usuarios',
      paragraphs: ['Los usuarios podrán solicitar, cuando la legislación aplicable lo permita, los siguientes derechos mediante los canales oficiales de contacto de SimplioHub:'],
      items: ['Acceso a sus datos.', 'Rectificación.', 'Actualización.', 'Eliminación.', 'Exportación de información.', 'Limitación del tratamiento.'],
    },
    {
      title: '11. Responsabilidad de las empresas',
      paragraphs: ['Los clientes empresariales que utilizan nuestros productos son responsables del tratamiento de la información que registran respecto de sus propios clientes, empleados o usuarios finales.', 'SimplioHub actúa como proveedor tecnológico que facilita la infraestructura necesaria para el funcionamiento del servicio.'],
    },
    {
      title: '12. Cambios en esta política',
      paragraphs: ['Podremos actualizar esta Política de Privacidad para reflejar cambios legales, tecnológicos o funcionales. La versión vigente estará siempre disponible en https://simpliohub.com/privacy.'],
    },
    {
      title: '13. Contacto',
      paragraphs: ['Si tienes preguntas relacionadas con esta Política de Privacidad, puedes escribirnos a support@simpliohub.com.'],
    },
  ],
}

export const termsAndConditions: LegalDocument = {
  eyebrow: 'Condiciones legales',
  title: 'Términos y Condiciones de Uso de SimplioHub',
  updatedAt: '04 de agosto de 2026',
  introduction: 'Estos Términos y Condiciones regulan el acceso y uso de los productos, aplicaciones, sitios web y servicios ofrecidos por SimplioHub.',
  sections: [
    { title: '1. Introducción', paragraphs: ['Estos términos aplican a Schedule App, los sitios web bajo el dominio simpliohub.com, sus subdominios y futuros productos desarrollados por SimplioHub.', 'Al utilizar cualquiera de nuestros servicios aceptas cumplir estos Términos.'] },
    { title: '2. Nuestros servicios', paragraphs: ['SimplioHub desarrolla plataformas SaaS orientadas a facilitar la administración de empresas mediante soluciones tecnológicas.', 'Nuestros productos pueden incorporar nuevas funcionalidades sin modificar la naturaleza esencial del servicio.'], items: ['Gestión empresarial.', 'Agendamiento.', 'Administración de clientes.', 'Automatización de procesos.', 'Comunicaciones.', 'Reportes.', 'Integraciones con terceros.'] },
    { title: '3. Registro de cuentas', paragraphs: ['Para utilizar determinadas funcionalidades será necesario crear una cuenta. El usuario se compromete a:'], items: ['Proporcionar información veraz.', 'Mantener actualizada su información.', 'Proteger sus credenciales.', 'No compartir su acceso con terceros no autorizados.', 'Notificar cualquier uso indebido de su cuenta.'] },
    { title: '4. Uso permitido', paragraphs: ['Los servicios de SimplioHub deberán utilizarse únicamente para fines legítimos. Queda prohibido utilizar la plataforma para:'], items: ['Actividades ilícitas.', 'Envío masivo de mensajes no autorizados.', 'Fraude.', 'Distribución de software malicioso.', 'Acceso no autorizado a sistemas.', 'Vulneración de derechos de terceros.', 'Tratamiento ilegal de datos personales.'] },
    { title: '5. Responsabilidad sobre la información', paragraphs: ['Cada empresa es propietaria de la información que registra en los productos de SimplioHub.', 'SimplioHub no modifica ni verifica la exactitud del contenido registrado por sus clientes.', 'Cada organización es responsable del cumplimiento de las leyes aplicables respecto al tratamiento de la información de sus propios usuarios y clientes.'] },
    { title: '6. Integraciones con terceros', paragraphs: ['Nuestros productos pueden integrarse con plataformas de terceros, incluyendo servicios de mensajería, autenticación, almacenamiento y procesamiento de pagos.', 'El uso de dichas integraciones también estará sujeto a las políticas y condiciones establecidas por cada proveedor.'] },
    { title: '7. Disponibilidad del servicio', paragraphs: ['Trabajamos para ofrecer una plataforma estable y confiable. Sin embargo, podrán producirse interrupciones y siempre procuraremos restablecer el servicio en el menor tiempo posible.'], items: ['Mantenimiento programado.', 'Actualizaciones.', 'Fallos técnicos.', 'Incidentes de proveedores externos.', 'Causas de fuerza mayor.'] },
    { title: '8. Propiedad intelectual', paragraphs: ['Todo el software, código fuente, interfaces, diseño, logotipos, marcas, documentación y demás elementos desarrollados por SimplioHub constituyen propiedad intelectual de SimplioHub o de sus respectivos titulares.', 'Queda prohibida su reproducción, distribución, modificación o explotación sin autorización expresa.'] },
    { title: '9. Planes y suscripciones', paragraphs: ['SimplioHub podrá ofrecer distintos planes de servicio, incluyendo modalidades gratuitas y de pago. Las características de cada plan serán publicadas en nuestros sitios oficiales.'], items: ['Usuarios.', 'Empresas.', 'Almacenamiento.', 'Mensajes.', 'Integraciones.', 'Funcionalidades.'] },
    { title: '10. Suspensión del servicio', paragraphs: ['SimplioHub podrá suspender temporal o definitivamente una cuenta cuando exista evidencia razonable de:'], items: ['Incumplimiento de estos Términos.', 'Actividades fraudulentas.', 'Uso abusivo de la plataforma.', 'Riesgos para otros usuarios.', 'Requerimientos de autoridades competentes.'] },
    { title: '11. Limitación de responsabilidad', paragraphs: ['SimplioHub presta sus servicios bajo un modelo de Software como Servicio (SaaS) y realiza esfuerzos razonables para mantener la disponibilidad y seguridad de la plataforma.', 'En la máxima medida permitida por la legislación aplicable, SimplioHub no será responsable por pérdidas indirectas, interrupciones ocasionadas por servicios de terceros, pérdida de beneficios, pérdida de datos derivada de causas externas o decisiones comerciales adoptadas exclusivamente con base en la información generada por la plataforma.'] },
    { title: '12. Modificaciones', paragraphs: ['SimplioHub podrá actualizar estos Términos y Condiciones cuando resulte necesario para adaptarse a cambios legales, tecnológicos o funcionales. La versión vigente estará disponible en https://simpliohub.com/terms.'] },
    { title: '13. Legislación aplicable', paragraphs: ['Estos Términos se regirán por la legislación aplicable al prestador del servicio, sin perjuicio de los derechos que la normativa imperativa reconozca a los usuarios en sus respectivas jurisdicciones.'] },
    { title: '14. Contacto', paragraphs: ['Para cualquier consulta relacionada con estos Términos y Condiciones, puedes escribirnos a support@simpliohub.com.'] },
  ],
}

export const securityPolicy: LegalDocument = {
  eyebrow: 'Seguridad',
  title: 'Seguridad',
  updatedAt: '04 de agosto de 2026',
  introduction: 'En SimplioHub entendemos que la confianza de nuestros clientes depende de la protección de su información. Diseñamos y operamos nuestros productos siguiendo principios orientados a proteger la confidencialidad, integridad y disponibilidad de los datos.',
  sections: [
    { title: 'Nuestro compromiso con la seguridad', paragraphs: ['La seguridad forma parte del diseño de nuestros servicios y es considerada durante el desarrollo, despliegue y mantenimiento de cada uno de nuestros productos.'] },
    { title: 'Protección de la información', paragraphs: ['Implementamos medidas técnicas y organizativas razonables para proteger la información almacenada en nuestros servicios. Nuestro objetivo es garantizar que cada empresa únicamente pueda acceder a la información que le pertenece.'], items: ['Comunicaciones cifradas mediante HTTPS/TLS.', 'Autenticación segura de usuarios.', 'Control de acceso basado en roles y permisos.', 'Protección frente a accesos no autorizados.', 'Registro de eventos relevantes para auditoría y monitoreo.', 'Actualizaciones periódicas de software y dependencias.', 'Segmentación lógica de la información entre organizaciones (arquitectura multiempresa).'] },
    { title: 'Arquitectura multiempresa', paragraphs: ['Los productos de SimplioHub están diseñados bajo una arquitectura multiempresa (multitenant).', 'Esto significa que la información de cada organización se mantiene lógicamente aislada para evitar accesos entre empresas diferentes.', 'Cada organización administra exclusivamente sus propios usuarios, clientes, configuraciones y procesos.'] },
    { title: 'Gestión de accesos', paragraphs: ['SimplioHub permite que cada organización gestione los permisos de sus usuarios mediante roles y niveles de acceso.', 'Esto permite limitar las acciones que cada usuario puede realizar dentro de la plataforma de acuerdo con las políticas internas de cada empresa.'] },
    { title: 'Protección de credenciales', paragraphs: ['Las credenciales de acceso nunca se almacenan en texto plano.', 'Las contraseñas son protegidas mediante algoritmos de cifrado unidireccional apropiados para la industria antes de ser almacenadas.'] },
    { title: 'Comunicaciones seguras', paragraphs: ['Toda la comunicación entre los usuarios y nuestros servicios se realiza mediante conexiones cifradas utilizando protocolos HTTPS/TLS.', 'Esto ayuda a proteger la información transmitida frente a accesos no autorizados durante su tránsito por Internet.'] },
    { title: 'Integraciones con terceros', paragraphs: ['Algunas funcionalidades requieren la integración con servicios externos. Las credenciales utilizadas para estas integraciones son administradas de forma segura y únicamente para prestar las funcionalidades autorizadas por cada cliente.'], items: ['Meta WhatsApp Business Platform.', 'Servicios de correo electrónico.', 'Plataformas de almacenamiento.', 'Servicios de autenticación.', 'Proveedores de infraestructura.'] },
    { title: 'Monitoreo y mantenimiento', paragraphs: ['Realizamos actividades orientadas a mantener la estabilidad y seguridad de nuestros servicios.'], items: ['Corrección de vulnerabilidades.', 'Actualización de componentes tecnológicos.', 'Monitoreo del funcionamiento de la plataforma.', 'Gestión de incidentes cuando corresponda.'] },
    { title: 'Respaldo y continuidad', paragraphs: ['Cuando la naturaleza del servicio lo requiere, implementamos mecanismos de respaldo que contribuyen a reducir el riesgo de pérdida de información.', 'Asimismo, trabajamos continuamente para mejorar la disponibilidad y continuidad operativa de nuestros servicios.'] },
    { title: 'Responsabilidad compartida', paragraphs: ['La seguridad es una responsabilidad compartida. Mientras SimplioHub protege la infraestructura tecnológica, cada organización es responsable de:'], items: ['Administrar adecuadamente sus usuarios.', 'Proteger sus credenciales.', 'Definir permisos internos.', 'Cumplir la legislación aplicable respecto al tratamiento de datos.'] },
    { title: 'Reporte de vulnerabilidades', paragraphs: ['Si identificas una posible vulnerabilidad relacionada con alguno de nuestros productos, agradecemos que nos la comuniques de forma responsable.', 'Puedes contactarnos mediante support@simpliohub.com.', 'Trabajaremos para investigar y atender los reportes de seguridad en el menor tiempo razonablemente posible.'] },
    { title: 'Mejora continua', paragraphs: ['La seguridad es un proceso continuo.', 'SimplioHub revisa y mejora periódicamente sus prácticas de seguridad con el objetivo de ofrecer servicios confiables para nuestros clientes.'] },
  ],
}

export const compliancePolicy: LegalDocument = {
  eyebrow: 'Compliance & Data Processing',
  title: 'Cumplimiento y Tratamiento de Datos',
  updatedAt: '04 de agosto de 2026',
  introduction: 'SimplioHub desarrolla plataformas tecnológicas destinadas a facilitar la administración y automatización de procesos empresariales.',
  sections: [
    { title: 'Nuestro compromiso', paragraphs: ['Reconocemos la importancia de proteger la información de nuestros clientes y nos comprometemos a tratar los datos personales de manera responsable, transparente y conforme a la legislación aplicable.'] },
    { title: 'Rol de SimplioHub', paragraphs: ['En la mayoría de los casos, SimplioHub actúa como proveedor tecnológico que pone a disposición de sus clientes una plataforma para administrar la información de sus propias organizaciones.', 'Los datos registrados dentro de nuestros productos pertenecen a las organizaciones que utilizan nuestros servicios.', 'Cada organización determina:'], items: ['Qué información registrar.', 'Quién puede acceder a ella.', 'Durante cuánto tiempo conservarla.', 'Cómo utilizarla dentro de su operación.'] },
    { title: 'Responsabilidad de nuestros clientes', paragraphs: ['Cada empresa que utiliza SimplioHub es responsable de:'], items: ['Obtener el consentimiento cuando sea necesario.', 'Cumplir la legislación aplicable.', 'Mantener actualizada la información registrada.', 'Definir sus políticas internas de privacidad.', 'Responder ante solicitudes de sus propios clientes relacionadas con sus datos personales.'] },
    { title: 'Tratamiento de la información', paragraphs: ['SimplioHub trata la información únicamente para prestar las funcionalidades contratadas por nuestros clientes.', 'No utilizamos la información de nuestros clientes para fines distintos a la prestación del servicio, salvo obligación legal o autorización expresa.'], items: ['Almacenamiento.', 'Organización.', 'Procesamiento.', 'Envío de notificaciones.', 'Automatización de procesos.', 'Generación de reportes.', 'Respaldo técnico.', 'Soporte.'] },
    { title: 'Uso de servicios externos', paragraphs: ['Para ofrecer determinadas funcionalidades podemos utilizar proveedores especializados. Estos proveedores únicamente participan en la medida necesaria para la prestación del servicio y se encuentran sujetos a sus propias obligaciones de privacidad y seguridad.'], items: ['Infraestructura tecnológica.', 'Almacenamiento.', 'Mensajería.', 'Correo electrónico.', 'Autenticación.', 'Procesamiento de pagos.'] },
    { title: 'Uso de WhatsApp Business', paragraphs: ['Cuando una organización conecta su cuenta de WhatsApp Business mediante la API oficial de Meta:'], items: ['La integración se realiza bajo autorización del administrador correspondiente.', 'La organización mantiene el control sobre su cuenta de WhatsApp Business.', 'SimplioHub procesa la información necesaria para ejecutar las funcionalidades configuradas por la empresa.', 'Los mensajes enviados son definidos por la configuración realizada por la propia organización.'] },
    { title: 'Conservación de la información', paragraphs: ['La información será conservada únicamente durante el tiempo necesario para las siguientes finalidades. Posteriormente podrá eliminarse o anonimizarse conforme a nuestros procedimientos internos.'], items: ['Prestar los servicios contratados.', 'Cumplir obligaciones legales.', 'Proteger los intereses legítimos de SimplioHub.', 'Resolver incidencias relacionadas con la plataforma.'] },
    { title: 'Derechos de los usuarios finales', paragraphs: ['Cuando un usuario final solicite el acceso, modificación o eliminación de información registrada por una empresa dentro de nuestros productos, dicha solicitud deberá dirigirse inicialmente a la organización responsable de esos datos.', 'SimplioHub colaborará con nuestros clientes cuando resulte necesario para atender dichas solicitudes conforme a la legislación aplicable.'] },
    { title: 'Transferencias internacionales', paragraphs: ['Dependiendo de la infraestructura utilizada para prestar nuestros servicios, la información podrá ser procesada o almacenada en centros de datos ubicados en diferentes países.', 'Cuando esto ocurra, procuraremos que dichos proveedores mantengan estándares adecuados de seguridad y protección de la información.'] },
    { title: 'Cumplimiento normativo', paragraphs: ['SimplioHub busca operar siguiendo buenas prácticas ampliamente reconocidas en materia de privacidad, seguridad de la información y protección de datos.', 'A medida que nuestra plataforma evolucione, continuaremos fortaleciendo nuestros procesos internos para alinearnos con los requisitos legales y regulatorios aplicables en los mercados donde operemos.'] },
    { title: 'Contacto', paragraphs: ['Si tienes preguntas relacionadas con el tratamiento de datos, privacidad o cumplimiento, puedes comunicarte con nosotros mediante support@simpliohub.com.'] },
  ],
}
