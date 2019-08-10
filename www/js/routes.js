angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.inicio', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.indice'
      2) Using $state.go programatically:
        $state.go('tabsController.indice');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.indice', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/indice.html',
        controller: 'indiceCtrl'
      },
      'tab2': {
        templateUrl: 'templates/indice.html',
        controller: 'indiceCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.presentaciN'
      2) Using $state.go programatically:
        $state.go('tabsController.presentaciN');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab2/page5
  */
  .state('tabsController.presentaciN', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/presentaciN.html',
        controller: 'presentaciNCtrl'
      },
      'tab2': {
        templateUrl: 'templates/presentaciN.html',
        controller: 'presentaciNCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.QuiNesSomos'
      2) Using $state.go programatically:
        $state.go('tabsController.QuiNesSomos');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page9
      /page1/tab2/page9
  */
  .state('tabsController.QuiNesSomos', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/QuiNesSomos.html',
        controller: 'QuiNesSomosCtrl'
      },
      'tab2': {
        templateUrl: 'templates/QuiNesSomos.html',
        controller: 'QuiNesSomosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.miTelFonoInteligente'
      2) Using $state.go programatically:
        $state.go('tabsController.miTelFonoInteligente');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab2/page6
  */
  .state('tabsController.miTelFonoInteligente', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/miTelFonoInteligente.html',
        controller: 'miTelFonoInteligenteCtrl'
      },
      'tab2': {
        templateUrl: 'templates/miTelFonoInteligente.html',
        controller: 'miTelFonoInteligenteCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.QuSonLasAplicaciones'
      2) Using $state.go programatically:
        $state.go('tabsController.QuSonLasAplicaciones');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page7
      /page1/tab2/page7
  */
  .state('tabsController.QuSonLasAplicaciones', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/QuSonLasAplicaciones.html',
        controller: 'QuSonLasAplicacionesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/QuSonLasAplicaciones.html',
        controller: 'QuSonLasAplicacionesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.menDeConfiguraciN'
      2) Using $state.go programatically:
        $state.go('tabsController.menDeConfiguraciN');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
  */
  .state('tabsController.menDeConfiguraciN', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/menDeConfiguraciN.html',
        controller: 'menDeConfiguraciNCtrl'
      },
      'tab2': {
        templateUrl: 'templates/menDeConfiguraciN.html',
        controller: 'menDeConfiguraciNCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.QuPuedoModificar'
      2) Using $state.go programatically:
        $state.go('tabsController.QuPuedoModificar');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page15
      /page1/tab2/page15
  */
  .state('tabsController.QuPuedoModificar', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/QuPuedoModificar.html',
        controller: 'QuPuedoModificarCtrl'
      },
      'tab2': {
        templateUrl: 'templates/QuPuedoModificar.html',
        controller: 'QuPuedoModificarCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.internetWiFi'
      2) Using $state.go programatically:
        $state.go('tabsController.internetWiFi');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page12
      /page1/tab2/page12
  */
  .state('tabsController.internetWiFi', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/internetWiFi.html',
        controller: 'internetWiFiCtrl'
      },
      'tab2': {
        templateUrl: 'templates/internetWiFi.html',
        controller: 'internetWiFiCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.internetDatosMViles'
      2) Using $state.go programatically:
        $state.go('tabsController.internetDatosMViles');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page11
      /page1/tab2/page11
  */
  .state('tabsController.internetDatosMViles', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/internetDatosMViles.html',
        controller: 'internetDatosMVilesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/internetDatosMViles.html',
        controller: 'internetDatosMVilesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.aplicaciones'
      2) Using $state.go programatically:
        $state.go('tabsController.aplicaciones');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab2/page10
  */
  .state('tabsController.aplicaciones', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/aplicaciones.html',
        controller: 'aplicacionesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/aplicaciones.html',
        controller: 'aplicacionesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.nuevasAplicaciones'
      2) Using $state.go programatically:
        $state.go('tabsController.nuevasAplicaciones');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page13
      /page1/tab2/page13
  */
  .state('tabsController.nuevasAplicaciones', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/nuevasAplicaciones.html',
        controller: 'nuevasAplicacionesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/nuevasAplicaciones.html',
        controller: 'nuevasAplicacionesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.playStore'
      2) Using $state.go programatically:
        $state.go('tabsController.playStore');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page14
      /page1/tab2/page14
  */
  .state('tabsController.playStore', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/playStore.html',
        controller: 'playStoreCtrl'
      },
      'tab2': {
        templateUrl: 'templates/playStore.html',
        controller: 'playStoreCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.conectarseAlMundoDeInternet'
      2) Using $state.go programatically:
        $state.go('tabsController.conectarseAlMundoDeInternet');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page22
      /page1/tab2/page22
  */
  .state('tabsController.conectarseAlMundoDeInternet', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/conectarseAlMundoDeInternet.html',
        controller: 'conectarseAlMundoDeInternetCtrl'
      },
      'tab2': {
        templateUrl: 'templates/conectarseAlMundoDeInternet.html',
        controller: 'conectarseAlMundoDeInternetCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.navegadores'
      2) Using $state.go programatically:
        $state.go('tabsController.navegadores');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page16
      /page1/tab2/page16
  */
  .state('tabsController.navegadores', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/navegadores.html',
        controller: 'navegadoresCtrl'
      },
      'tab2': {
        templateUrl: 'templates/navegadores.html',
        controller: 'navegadoresCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.google'
      2) Using $state.go programatically:
        $state.go('tabsController.google');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page17
      /page1/tab2/page17
  */
  .state('tabsController.google', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/google.html',
        controller: 'googleCtrl'
      },
      'tab2': {
        templateUrl: 'templates/google.html',
        controller: 'googleCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.buscarEnGoogle'
      2) Using $state.go programatically:
        $state.go('tabsController.buscarEnGoogle');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page20
      /page1/tab2/page20
  */
  .state('tabsController.buscarEnGoogle', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/buscarEnGoogle.html',
        controller: 'buscarEnGoogleCtrl'
      },
      'tab2': {
        templateUrl: 'templates/buscarEnGoogle.html',
        controller: 'buscarEnGoogleCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.whatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.whatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page21
      /page1/tab2/page21
  */
  .state('tabsController.whatsApp', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/whatsApp.html',
        controller: 'whatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/whatsApp.html',
        controller: 'whatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.ParaQuSirveWhatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.ParaQuSirveWhatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page19
      /page1/tab2/page19
  */
  .state('tabsController.ParaQuSirveWhatsApp', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/ParaQuSirveWhatsApp.html',
        controller: 'ParaQuSirveWhatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/ParaQuSirveWhatsApp.html',
        controller: 'ParaQuSirveWhatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.CMoFuncionaWhatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.CMoFuncionaWhatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page23
      /page1/tab2/page23
  */
  .state('tabsController.CMoFuncionaWhatsApp', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/CMoFuncionaWhatsApp.html',
        controller: 'CMoFuncionaWhatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/CMoFuncionaWhatsApp.html',
        controller: 'CMoFuncionaWhatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.enviarMensajesDeWhatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.enviarMensajesDeWhatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page25
      /page1/tab2/page25
  */
  .state('tabsController.enviarMensajesDeWhatsApp', {
    url: '/page25',
    views: {
      'tab1': {
        templateUrl: 'templates/enviarMensajesDeWhatsApp.html',
        controller: 'enviarMensajesDeWhatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/enviarMensajesDeWhatsApp.html',
        controller: 'enviarMensajesDeWhatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.paraTenerEnCuentaEnWhatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.paraTenerEnCuentaEnWhatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page24
      /page1/tab2/page24
  */
  .state('tabsController.paraTenerEnCuentaEnWhatsApp', {
    url: '/page24',
    views: {
      'tab1': {
        templateUrl: 'templates/paraTenerEnCuentaEnWhatsApp.html',
        controller: 'paraTenerEnCuentaEnWhatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/paraTenerEnCuentaEnWhatsApp.html',
        controller: 'paraTenerEnCuentaEnWhatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.llamadasYVideollamadas'
      2) Using $state.go programatically:
        $state.go('tabsController.llamadasYVideollamadas');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page32
      /page1/tab2/page32
  */
  .state('tabsController.llamadasYVideollamadas', {
    url: '/page32',
    views: {
      'tab1': {
        templateUrl: 'templates/llamadasYVideollamadas.html',
        controller: 'llamadasYVideollamadasCtrl'
      },
      'tab2': {
        templateUrl: 'templates/llamadasYVideollamadas.html',
        controller: 'llamadasYVideollamadasCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.agregarContactos'
      2) Using $state.go programatically:
        $state.go('tabsController.agregarContactos');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page18
      /page1/tab2/page18
  */
  .state('tabsController.agregarContactos', {
    url: '/page18',
    views: {
      'tab1': {
        templateUrl: 'templates/agregarContactos.html',
        controller: 'agregarContactosCtrl'
      },
      'tab2': {
        templateUrl: 'templates/agregarContactos.html',
        controller: 'agregarContactosCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.enviarContenidosEnWhatsApp'
      2) Using $state.go programatically:
        $state.go('tabsController.enviarContenidosEnWhatsApp');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page31
      /page1/tab2/page31
  */
  .state('tabsController.enviarContenidosEnWhatsApp', {
    url: '/page31',
    views: {
      'tab1': {
        templateUrl: 'templates/enviarContenidosEnWhatsApp.html',
        controller: 'enviarContenidosEnWhatsAppCtrl'
      },
      'tab2': {
        templateUrl: 'templates/enviarContenidosEnWhatsApp.html',
        controller: 'enviarContenidosEnWhatsAppCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.alertasEngaOsYEstafas'
      2) Using $state.go programatically:
        $state.go('tabsController.alertasEngaOsYEstafas');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page30
      /page1/tab2/page30
  */
  .state('tabsController.alertasEngaOsYEstafas', {
    url: '/page30',
    views: {
      'tab1': {
        templateUrl: 'templates/alertasEngaOsYEstafas.html',
        controller: 'alertasEngaOsYEstafasCtrl'
      },
      'tab2': {
        templateUrl: 'templates/alertasEngaOsYEstafas.html',
        controller: 'alertasEngaOsYEstafasCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.redesSociales'
      2) Using $state.go programatically:
        $state.go('tabsController.redesSociales');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page29
      /page1/tab2/page29
  */
  .state('tabsController.redesSociales', {
    url: '/page29',
    views: {
      'tab1': {
        templateUrl: 'templates/redesSociales.html',
        controller: 'redesSocialesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/redesSociales.html',
        controller: 'redesSocialesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.twitter'
      2) Using $state.go programatically:
        $state.go('tabsController.twitter');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page28
      /page1/tab2/page28
  */
  .state('tabsController.twitter', {
    url: '/page28',
    views: {
      'tab1': {
        templateUrl: 'templates/twitter.html',
        controller: 'twitterCtrl'
      },
      'tab2': {
        templateUrl: 'templates/twitter.html',
        controller: 'twitterCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.facebook'
      2) Using $state.go programatically:
        $state.go('tabsController.facebook');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page37
      /page1/tab2/page37
  */
  .state('tabsController.facebook', {
    url: '/page37',
    views: {
      'tab1': {
        templateUrl: 'templates/facebook.html',
        controller: 'facebookCtrl'
      },
      'tab2': {
        templateUrl: 'templates/facebook.html',
        controller: 'facebookCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.youtube'
      2) Using $state.go programatically:
        $state.go('tabsController.youtube');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page61
      /page1/tab2/page61
  */
  .state('tabsController.youtube', {
    url: '/page61',
    views: {
      'tab1': {
        templateUrl: 'templates/youtube.html',
        controller: 'youtubeCtrl'
      },
      'tab2': {
        templateUrl: 'templates/youtube.html',
        controller: 'youtubeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.crearUnaCuentaEnFacebook'
      2) Using $state.go programatically:
        $state.go('tabsController.crearUnaCuentaEnFacebook');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page60
      /page1/tab2/page60
  */
  .state('tabsController.crearUnaCuentaEnFacebook', {
    url: '/page60',
    views: {
      'tab1': {
        templateUrl: 'templates/crearUnaCuentaEnFacebook.html',
        controller: 'crearUnaCuentaEnFacebookCtrl'
      },
      'tab2': {
        templateUrl: 'templates/crearUnaCuentaEnFacebook.html',
        controller: 'crearUnaCuentaEnFacebookCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.subirYEtiquetarUnaFoto'
      2) Using $state.go programatically:
        $state.go('tabsController.subirYEtiquetarUnaFoto');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page59
      /page1/tab2/page59
  */
  .state('tabsController.subirYEtiquetarUnaFoto', {
    url: '/page59',
    views: {
      'tab1': {
        templateUrl: 'templates/subirYEtiquetarUnaFoto.html',
        controller: 'subirYEtiquetarUnaFotoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/subirYEtiquetarUnaFoto.html',
        controller: 'subirYEtiquetarUnaFotoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.publicacionesEnFacebook'
      2) Using $state.go programatically:
        $state.go('tabsController.publicacionesEnFacebook');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page58
      /page1/tab2/page58
  */
  .state('tabsController.publicacionesEnFacebook', {
    url: '/page58',
    views: {
      'tab1': {
        templateUrl: 'templates/publicacionesEnFacebook.html',
        controller: 'publicacionesEnFacebookCtrl'
      },
      'tab2': {
        templateUrl: 'templates/publicacionesEnFacebook.html',
        controller: 'publicacionesEnFacebookCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.informaciNQueNoDebesCompartir'
      2) Using $state.go programatically:
        $state.go('tabsController.informaciNQueNoDebesCompartir');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page57
      /page1/tab2/page57
  */
  .state('tabsController.informaciNQueNoDebesCompartir', {
    url: '/page57',
    views: {
      'tab1': {
        templateUrl: 'templates/informaciNQueNoDebesCompartir.html',
        controller: 'informaciNQueNoDebesCompartirCtrl'
      },
      'tab2': {
        templateUrl: 'templates/informaciNQueNoDebesCompartir.html',
        controller: 'informaciNQueNoDebesCompartirCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.seguridadEnFacebook'
      2) Using $state.go programatically:
        $state.go('tabsController.seguridadEnFacebook');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page56
      /page1/tab2/page56
  */
  .state('tabsController.seguridadEnFacebook', {
    url: '/page56',
    views: {
      'tab1': {
        templateUrl: 'templates/seguridadEnFacebook.html',
        controller: 'seguridadEnFacebookCtrl'
      },
      'tab2': {
        templateUrl: 'templates/seguridadEnFacebook.html',
        controller: 'seguridadEnFacebookCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.correoElectrNico'
      2) Using $state.go programatically:
        $state.go('tabsController.correoElectrNico');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page55
      /page1/tab2/page55
  */
  .state('tabsController.correoElectrNico', {
    url: '/page55',
    views: {
      'tab1': {
        templateUrl: 'templates/correoElectrNico.html',
        controller: 'correoElectrNicoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/correoElectrNico.html',
        controller: 'correoElectrNicoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.redactarYEnviarUnCorreo'
      2) Using $state.go programatically:
        $state.go('tabsController.redactarYEnviarUnCorreo');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page40
      /page1/tab2/page40
  */
  .state('tabsController.redactarYEnviarUnCorreo', {
    url: '/page40',
    views: {
      'tab1': {
        templateUrl: 'templates/redactarYEnviarUnCorreo.html',
        controller: 'redactarYEnviarUnCorreoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/redactarYEnviarUnCorreo.html',
        controller: 'redactarYEnviarUnCorreoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.contraseAs'
      2) Using $state.go programatically:
        $state.go('tabsController.contraseAs');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page52
      /page1/tab2/page52
  */
  .state('tabsController.contraseAs', {
    url: '/page52',
    views: {
      'tab1': {
        templateUrl: 'templates/contraseAs.html',
        controller: 'contraseAsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/contraseAs.html',
        controller: 'contraseAsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.aplicaciNDeGmail'
      2) Using $state.go programatically:
        $state.go('tabsController.aplicaciNDeGmail');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page51
      /page1/tab2/page51
  */
  .state('tabsController.aplicaciNDeGmail', {
    url: '/page51',
    views: {
      'tab1': {
        templateUrl: 'templates/aplicaciNDeGmail.html',
        controller: 'aplicaciNDeGmailCtrl'
      },
      'tab2': {
        templateUrl: 'templates/aplicaciNDeGmail.html',
        controller: 'aplicaciNDeGmailCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protecciNParaNuestroCorreo'
      2) Using $state.go programatically:
        $state.go('tabsController.protecciNParaNuestroCorreo');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page50
      /page1/tab2/page50
  */
  .state('tabsController.protecciNParaNuestroCorreo', {
    url: '/page50',
    views: {
      'tab1': {
        templateUrl: 'templates/protecciNParaNuestroCorreo.html',
        controller: 'protecciNParaNuestroCorreoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/protecciNParaNuestroCorreo.html',
        controller: 'protecciNParaNuestroCorreoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});