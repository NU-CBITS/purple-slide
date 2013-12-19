// controllers.js

// var app = angular.module('PURPLE_SLIDE_APPApp', []);
// app.controller('SplashCtl', function($scope) {
//   $scope.splash = {
//     image: {
//       alt: "Cartoon Cow",
//       class: "splash",
//       url: "assets/free-cartoon-cow-clip-art.jpg"
//     }
//   };
// });


var PURPLE_SLIDE_APPControllers = angular.module('PURPLE_SLIDE_Controllers', []);

// Splash controller
PURPLE_SLIDE_APPControllers.controller('page1Ctl', ['$scope', '$http',
  function($scope, $http) {
    $scope.slide = {
      image: {
        alt: "Cartoon Cow",
        class: "splash",
        url: "assets/free-cartoon-cow-clip-art.jpg"
      },

      header: {
        title: {
          cssClass: "slide-title",
          html: "1",
          render: function() { console.log ("rendering: header.title");  return this.html; }
        },
        subtitle: {
          cssClass: "slide-subtitle",
          html: "2",
          render: function() { console.log ("rendering: header.subtitle");  return this.html; }
        }
      },

      main: {
        graphic: {
          caption: {
            cssClass: "slide-graphic-caption",
            html: "4",
            render: function() { console.log ("rendering: main.graphic.caption");  return this.html; }
          },
          cssClass: "slide-graphic",
          html: "3",
          render: function() { console.log ("rendering: main.graphic");  return this.html; }
        },
        cssClass: "slide-home",
        html: "5",
        render: function() { console.log ("rendering: main");  return this.html; }
      },

      footer: {
        prenav: {
          cssClass: "slide-prenav",
          render: function() { console.log ("rendering: footer.prenav");  return this.html; }
        },
        postnav: {
          cssClass: "slide-postnav",
          render: function() { console.log ("rendering: footer.postnav");  return this.html; }
        },
        nav: {
          cssClass: "slide-nav",
          home: {
            cssClass: "home",
            html: "6",
            render: function() { console.log("rendering: nav.home");  return this.html; },
            title: "Home",
            url: "#"
          },
          back: {
            cssClass: "slide-back",
            html: "7",
            render: function() { console.log("rendering: nav.back");  return this.html; },
            title: "Back",
            url: "#"
          },
          next: {
            cssClass: "slide-next",
            html: "8",
            render: function() { console.log("rendering: nav.next");  return this.html; },
            title: "Next",
            url: "#/slide2"
          },
          end: {
            cssClass: "slide-end",
            html: "9",
            render: function() { console.log("rendering: nav.end");  return this.html; },
            title: "End",
            url: "#/slideEnd"
          }
        }
      }
    };
  }
]);

// Intro controller
PURPLE_SLIDE_APPControllers.controller('page2Ctl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.splash = {
      image: {
        alt: "Cartoon Cow",
        class: "splash",
        url: "assets/free-cartoon-cow-clip-art.jpg"
      },
      nav: {
        back: {
          url: "#",
          title: "Back"
        },
        next: {
          url: "#/intro",
          title: "Next"
        }
      }
    };
  }
]);