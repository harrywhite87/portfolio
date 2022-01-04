function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["eye1"];
    var _c1 = ["eye2"];
    var _c2 = ["titletext"];
    var _c3 = ["headCut"];

    var _c4 = function _c4(a0) {
      return {
        "transform": a0
      };
    };

    var _c5 = function _c5(a0) {
      return {
        "open-head": a0
      };
    };

    var _c6 = function _c6(a0, a1) {
      return {
        "top": a0,
        "left": a1
      };
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.threeMove = 0.006;
        this.title = 'hPortfolio';
        this.move = {
          x: {
            active: false,
            direction: -1,
            rotation: 'y',
            bounce: 0
          },
          y: {
            active: false,
            direction: -1,
            rotation: 'x',
            bounce: 0
          },
          z: {
            active: false,
            direction: -1
          }
        };
        this.eyes = [{
          x: 0,
          y: 0,
          width: 0,
          transform: ''
        }, {
          x: 0,
          y: 0,
          width: 0,
          transform: ''
        }];
        this.openHead = false;
        this.increment = 1;
        this.position = 0;
        this.letterIndex = 0;
        this.currentLetterTotal = 0;
        this.flare = {
          top: 0,
          left: 0
        };
        this.laserPaths = [];
        this.moveDirection = {
          left: 0,
          right: 0,
          forward: 0,
          back: 0
        };
        this.intro = 120;
        this.clock = new THREE.Clock();
        this.gravityConstant = 40;
        this.rigidBodies = [];
        this.margin = 0.05;
        this.time = 0;
        this.basketMovement = 0;
      }

      _createClass(AppComponent, [{
        key: "onMouseMove",
        value: function onMouseMove(e) {
          var o = this.eyes[0].x - e.x;
          var a = this.eyes[0].y - e.y;
          var p = this.get_point_between_points(this.eyes[0], e, 6);
          this.eyes[0].transform = "translateX(".concat(p[0] - this.eyes[0].x, "%) translateY(").concat(p[1] - this.eyes[0].y, "%)");
          o = this.eyes[1].x - e.x;
          a = this.eyes[1].y - e.y;
          p = this.get_point_between_points(this.eyes[1], e, 6);
          this.eyes[1].transform = "translateX(".concat(p[0] - this.eyes[1].x, "%) translateY(").concat(p[1] - this.eyes[1].y, "%)");
          var p2 = this.get_point_between_points(this.eyes[1], e, 120);
        }
      }, {
        key: "get_point_between_points",
        value: function get_point_between_points(p1, p2, distance) {
          var dist_btw_points = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
          var distance_ratio = distance / dist_btw_points;
          var x = p1.x + distance_ratio * (p2.x - p1.x);
          var y = p1.y + distance_ratio * (p2.y - p1.y);
          return [x, y];
        }
      }, {
        key: "getHypotinuse",
        value: function getHypotinuse(a, b) {
          return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.fireLasers();
        }
      }, {
        key: "fireLasers",
        value: function fireLasers() {
          var svg = d3.select('.laser');
          svg.selectAll('line').remove();
          var el = this.eye1.nativeElement.getBoundingClientRect();
          this.eyes[0].y = el.y + el.height / 2;
          this.eyes[0].x = el.x + el.width / 2;
          this.eyes[0].width = el.width;
          var el2 = this.eye2.nativeElement.getBoundingClientRect();
          this.eyes[1].y = el2.y + el2.height / 2;
          this.eyes[1].x = el2.x + el2.width / 2;
          this.eyes[1].width = el.width;
          var title = d3.select('.title'); // letters._groups[0].forEach(letter => {

          this.svg = d3.select('.laser');
          this.titleSVG = d3.select('#title-over');
          this.headCutSVG = d3.select('#head-cut').select('path')._groups[0]; // this.svgBox = this.svg.getBBox()

          this.svgPosition = this.titletext.nativeElement.getBoundingClientRect();
          this.headCutPosiion = this.headCut.nativeElement.getBoundingClientRect();
          this.letters = title.selectAll('path')._groups[0]; // this.letters.push(this.headCutSVG)

          var index = 0;
          var currentLetterTotal = 0;
          var position = 0;
          var point;

          while (index < this.letters.length) {
            if (position === 0) {
              currentLetterTotal = this.letters[index].getTotalLength();
            }

            if (position < currentLetterTotal) {
              point = this.letters[index].getPointAtLength(position);
              var factor = 722 / 713.6533;
              var p = this.get_point_between_points(this.eyes[0], {
                x: point.x * factor + this.svgPosition.left,
                y: point.y * factor + this.svgPosition.top
              }, 6);
              var eye0 = {
                transform: "translateX(".concat(p[0] - this.eyes[0].x, "%) translateY(").concat(p[1] - this.eyes[0].y, "%)"),
                x: point.x * factor + this.svgPosition.left,
                y: point.y * factor + this.svgPosition.top
              };
              p = this.get_point_between_points(this.eyes[1], {
                x: point.x * factor + this.svgPosition.left,
                y: point.y * factor + this.svgPosition.top
              }, 6);
              var eye1 = {
                transform: "translateX(".concat(p[0] - this.eyes[1].x, "%) translateY(").concat(p[1] - this.eyes[1].y, "%)"),
                x: point.x * factor + this.svgPosition.left,
                y: point.y * factor + this.svgPosition.top
              };
              this.laserPaths.push([eye0, eye1, {
                x: point.x,
                y: point.y
              }]);
              position += 8;
            } else {
              position = 0;
              index++;
            } // .style('transform', `translateX(${((p[0] - this.eyes[0].x) / 100 * this.eyes[0].width) + 1}px) translateY(${((p[1] - this.eyes[0].y) / 100 * this.eyes[0].width) + 2}px)`);

          }

          index = 0;
          currentLetterTotal = 0;
          position = 0;
          point;

          while (index < this.headCutSVG.length) {
            if (position === 0) {
              currentLetterTotal = this.headCutSVG[index].getTotalLength();
            }

            if (position < currentLetterTotal) {
              point = this.headCutSVG[index].getPointAtLength(position);

              var _factor = 283 / 357.89;

              var _p = this.get_point_between_points(this.eyes[0], {
                x: point.x * _factor + this.headCutPosiion.left,
                y: point.y * _factor + this.headCutPosiion.top
              }, 6);

              var _eye = {
                transform: "translateX(".concat(_p[0] - this.eyes[0].x, "%) translateY(").concat(_p[1] - this.eyes[0].y, "%)"),
                x: point.x * _factor + this.headCutPosiion.left,
                y: point.y * _factor + this.headCutPosiion.top
              };
              _p = this.get_point_between_points(this.eyes[1], {
                x: point.x * _factor + this.headCutPosiion.left,
                y: point.y * _factor + this.headCutPosiion.top
              }, 6);
              var _eye2 = {
                transform: "translateX(".concat(_p[0] - this.eyes[1].x, "%) translateY(").concat(_p[1] - this.eyes[1].y, "%)"),
                x: point.x * _factor + this.headCutPosiion.left,
                y: point.y * _factor + this.headCutPosiion.top
              };
              this.laserPaths.push([_eye, _eye2, {
                x: point.x,
                y: point.y
              }]);
              position += 3;
            } else {
              position = 0;
              index++;
            } // .style('transform', `translateX(${((p[0] - this.eyes[0].x) / 100 * this.eyes[0].width) + 1}px) translateY(${((p[1] - this.eyes[0].y) / 100 * this.eyes[0].width) + 2}px)`);

          } // .getAttribute("d")
          // .split(/(?=[a-zA-Z])/)
          // .map(s => { return { type: s[0], path: s.substring(1).split(',') } })
          // });

        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            return _this.initRope();
          }, 2000); // this.initiate3D();
          // d;
        }
      }, {
        key: "headClick",
        value: function headClick() {}
      }, {
        key: "initRope",
        value: function initRope() {
          var _this2 = this;

          Ammo().then(function (Ammo) {
            document.getElementById('container').innerHTML = '';

            _this2.init();

            _this2.animate();
          });
        }
      }, {
        key: "init",
        value: function init() {
          this.initGraphics();
          this.initPhysics();
          this.createObjects();
          this.initInput();
        }
      }, {
        key: "initGraphics",
        value: function initGraphics() {
          var _this3 = this;

          this.container = document.getElementById('container');
          this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.2, 2000);
          this.scene = new THREE.Scene();
          this.camera.position.x = 0;
          this.camera.position.y = 0;
          this.camera.position.z = 1; // this.controls = new THREE.OrbitControls(this.camera);
          // this.controls.target.y = -1;

          this.renderer = new THREE.WebGLRenderer({
            alpha: true
          });
          this.renderer.setClearColor(0x000000, 0);
          this.renderer.setPixelRatio(window.devicePixelRatio);
          this.renderer.setSize(window.innerWidth, window.innerHeight);
          this.renderer.shadowMap.enabled = true; // loading manager

          var loadingManager = new THREE.LoadingManager(function () {
            _this3.balloon.rotation.x = -Math.PI / 2;
            _this3.balloon.position.z = 0;
            _this3.balloon.position.y = -0.16;

            _this3.scene.add(_this3.balloon);
          });
          var geometry = new THREE.PlaneGeometry(0.912, 0.852, 1);
          var texture = new THREE.TextureLoader().load('https://assets.codepen.io/227435/body.png');
          var material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide
          });
          var mesh = new THREE.Mesh(geometry, material);
          mesh.rotation.x = 90 * (Math.PI / 180); // collada

          var loader = new THREE.ColladaLoader(loadingManager);
          loader.load('https://assets.codepen.io/227435/Balloon.dae', function (collada) {
            collada.scene.scale.set(0.005, 0.005, 0.005);
            _this3.balloon = collada.scene;
          });
          var ambientLight = new THREE.AmbientLight('0xcccccc', 0.4);
          this.scene.add(ambientLight);
          var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
          directionalLight.position.set(1, 1, 0).normalize();
          this.scene.add(directionalLight);
          window.addEventListener('resize', this.onWindowResize, false);
          var axesHelper = new THREE.AxesHelper(5); // this.scene.add(axesHelper);

          this.textureLoader = new THREE.TextureLoader();
          var ambientLight = new THREE.AmbientLight(0x404040);
          this.scene.add(ambientLight);
          var light = new THREE.DirectionalLight(0xffffff, 1);
          light.position.set(-10, 10, 5);
          light.castShadow = true;
          var d = 10;
          light.shadow.camera.left = -d;
          light.shadow.camera.right = d;
          light.shadow.camera.top = d;
          light.shadow.camera.bottom = -d;
          light.shadow.camera.near = 2;
          light.shadow.camera.far = 50;
          light.shadow.mapSize.x = 1024;
          light.shadow.mapSize.y = 1024;
          this.scene.add(light);
          this.container.innerHTML = '';
          this.container.appendChild(this.renderer.domElement);
          window.addEventListener('resize', this.onWindowResize, false);
        }
      }, {
        key: "initPhysics",
        value: function initPhysics() {
          // Physics configuration
          this.transformAux1 = new Ammo.btTransform();
          this.collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration();
          this.dispatcher = new Ammo.btCollisionDispatcher(this.collisionConfiguration);
          this.broadphase = new Ammo.btDbvtBroadphase();
          this.solver = new Ammo.btSequentialImpulseConstraintSolver();
          this.softBodySolver = new Ammo.btDefaultSoftBodySolver();
          this.physicsWorld = new Ammo.btSoftRigidDynamicsWorld(this.dispatcher, this.broadphase, this.solver, this.collisionConfiguration, this.softBodySolver);
          this.physicsWorld.setGravity(new Ammo.btVector3(0, -this.gravityConstant, 0));
          this.physicsWorld.getWorldInfo().set_m_gravity(new Ammo.btVector3(0, -this.gravityConstant, 0));
        }
      }, {
        key: "createObjects",
        value: function createObjects() {
          var pos = new THREE.Vector3();
          var quat = new THREE.Quaternion(); // sheet

          var sheetMass = 0.1;
          var basketMass = 0;
          var sheetLength = 0.297;
          var img = new THREE.MeshBasicMaterial({
            //CHANGED to MeshBasicMaterial
            map: THREE.ImageUtils.loadTexture('assets/images/Harry White CV-01.png')
          });
          this.sheet = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.297, 0.00001), img);
          this.sheet.castShadow = true;
          this.sheet.receiveShadow = true;
          var sheetShape = new Ammo.btBoxShape(new Ammo.btVector3(0.21, sheetLength, 0.00001));
          sheetShape.setMargin(this.margin);
          pos.set(0, -0.2, 0);
          quat.set(0, 0, 0, 1); //----------

          this.sheet.position.copy(pos);
          this.sheet.quaternion.copy(quat);
          var transform = new Ammo.btTransform();
          transform.setIdentity();
          transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
          transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w));
          var motionState = new Ammo.btDefaultMotionState(transform);
          var localInertia = new Ammo.btVector3(0, 0, 0);
          sheetShape.calculateLocalInertia(sheetMass, localInertia);
          var rbInfo = new Ammo.btRigidBodyConstructionInfo(sheetMass, motionState, sheetShape, localInertia);
          var body = new Ammo.btRigidBody(rbInfo);
          this.sheet.userData.physicsBody = body;
          this.scene.add(this.sheet);

          if (sheetMass > 0) {
            this.rigidBodies.push(this.sheet); // Disable deactivation

            body.setActivationState(4);
          }

          this.physicsWorld.addRigidBody(body); //----------

          this.sheet.userData.physicsBody.setFriction(0.5); // The rope
          // Rope graphic object

          var ropeNumSegments = 10;
          var ropeLength = 0.069;
          var ropeMass = 3;
          var ropePos = this.sheet.position.clone();
          ropePos.y += sheetLength / 2;
          var segmentLength = ropeLength / ropeNumSegments;
          var ropeGeometry = new THREE.BufferGeometry();
          var ropeMaterial = new THREE.LineBasicMaterial({
            color: 0x000000
          });
          var ropePositions = [];
          var ropeIndices = [];

          for (var i = 0; i < ropeNumSegments + 1; i++) {
            ropePositions.push(ropePos.x, ropePos.y + i * segmentLength, ropePos.z);
          }

          for (var i = 0; i < ropeNumSegments; i++) {
            ropeIndices.push(i, i + 1);
          }

          ropeGeometry.setIndex(new THREE.BufferAttribute(new Uint16Array(ropeIndices), 1));
          ropeGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ropePositions), 3));
          ropeGeometry.computeBoundingSphere();
          this.rope = new THREE.LineSegments(ropeGeometry, ropeMaterial);
          this.rope.castShadow = true;
          this.rope.receiveShadow = true;
          this.scene.add(this.rope); // Rope physic object

          var softBodyHelpers = new Ammo.btSoftBodyHelpers();
          var ropeStart = new Ammo.btVector3(ropePos.x, ropePos.y, ropePos.z);
          var ropeEnd = new Ammo.btVector3(ropePos.x, ropePos.y + ropeLength, ropePos.z);
          var ropeSoftBody = softBodyHelpers.CreateRope(this.physicsWorld.getWorldInfo(), ropeStart, ropeEnd, ropeNumSegments - 1, 0);
          var sbConfig = ropeSoftBody.get_m_cfg();
          sbConfig.set_viterations(10);
          sbConfig.set_piterations(10);
          ropeSoftBody.setTotalMass(ropeMass, false);
          Ammo.castObject(ropeSoftBody, Ammo.btCollisionObject).getCollisionShape().setMargin(this.margin * 3);
          this.physicsWorld.addSoftBody(ropeSoftBody, 1, -1);
          this.rope.userData.physicsBody = ropeSoftBody; // Disable deactivation

          ropeSoftBody.setActivationState(4); // The basket

          var baseMaterial = new THREE.MeshBasicMaterial({
            color: 'cyan',
            transparent: true,
            opacity: 0
          });
          quat.set(0, 0, 0, 1);
          pos.set(0, 0.016, 0);
          this.basket = new THREE.Mesh(new THREE.BoxGeometry(0.001, 0.001, 0.001), baseMaterial);
          var shape = new Ammo.btBoxShape(new Ammo.btVector3(0.01, 0.001, 0.01));
          shape.setMargin(this.margin);
          this.createRigidBody(this.basket, shape, basketMass, pos, quat);
          this.basket.castShadow = true;
          this.basket.receiveShadow = true; // Glue the rope extremes to the sheet and the basket

          var influence = 1;
          ropeSoftBody.appendAnchor(0, this.sheet.userData.physicsBody, true, influence);
          ropeSoftBody.appendAnchor(ropeNumSegments, this.basket.userData.physicsBody, true, influence);
        }
      }, {
        key: "createRigidBody",
        value: function createRigidBody(threeObject, physicsShape, mass, pos, quat) {
          threeObject.position.copy(pos);
          threeObject.quaternion.copy(quat);
          var transform = new Ammo.btTransform();
          transform.setIdentity();
          transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
          transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w));
          var motionState = new Ammo.btDefaultMotionState(transform);
          var localInertia = new Ammo.btVector3(0, 0, 0);
          physicsShape.calculateLocalInertia(mass, localInertia);
          var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, physicsShape, localInertia);
          var body = new Ammo.btRigidBody(rbInfo);
          threeObject.userData.physicsBody = body;
          this.scene.add(threeObject);

          if (mass > 0) {
            this.rigidBodies.push(threeObject); // Disable deactivation

            body.setActivationState(4);
          }

          this.physicsWorld.addRigidBody(body);
        }
      }, {
        key: "createRandomColor",
        value: function createRandomColor() {
          return Math.floor(Math.random() * (1 << 24));
        }
      }, {
        key: "createMaterial",
        value: function createMaterial() {
          return new THREE.MeshPhongMaterial({
            color: this.createRandomColor()
          });
        }
      }, {
        key: "initInput",
        value: function initInput() {
          var _this4 = this;

          window.addEventListener('keydown', function (event) {
            var keyCode = event.keyCode;

            switch (keyCode) {
              case 87:
                //W: FORWARD
                _this4.moveDirection.forward = 1;
                _this4.move.z.active = true;
                _this4.move.z.direction = -1;
                break;

              case 83:
                //S: BACK
                _this4.moveDirection.back = 1;
                _this4.move.z.active = true;
                _this4.move.z.direction = 1;
                break;

              case 65:
                //A: LEFT
                _this4.moveDirection.left = 1;
                _this4.move.x.active = true;
                _this4.move.x.direction = -1;
                break;

              case 68:
                //D: RIGHT
                _this4.moveDirection.right = 1;
                _this4.move.x.active = true;
                _this4.move.x.direction = 1;
                break;
            }
          }, false);
          window.addEventListener('keyup', function (event) {
            var keyCode = event.keyCode;

            switch (keyCode) {
              case 87:
                //FORWARD
                _this4.moveDirection.forward = 0;
                _this4.move.z.active = false;
                break;

              case 83:
                //BACK
                _this4.moveDirection.back = 0;
                _this4.move.z.active = false;
                break;

              case 65:
                //LEFT
                _this4.moveDirection.left = 0;
                _this4.move.x.active = false;
                break;

              case 68:
                //RIGHT
                _this4.moveDirection.right = 0;
                _this4.move.x.active = false;
                break;
            }
          }, false);
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          if (this.camera) {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
          }
        }
      }, {
        key: "animate",
        value: function animate() {
          var _this5 = this;

          // setTimeout(() => this.animate(), 17);
          requestAnimationFrame(function () {
            return _this5.animate();
          });

          if (this.intro > 0 && this.letterIndex > this.laserPaths.length) {
            this.balloon.position.y += 0.002;
            var resultantImpulse = new Ammo.btVector3(this.balloon.position.x, this.balloon.position.y, this.balloon.position.z);
            var scalingFactor = 42;
            resultantImpulse.op_mul(scalingFactor);
            var physicsBody = this.basket.userData.physicsBody;
            physicsBody.setLinearVelocity(resultantImpulse);
            this.intro -= 1;
          }

          if (this.letterIndex < this.laserPaths.length) {
            this.eyes[0].transform = this.laserPaths[this.letterIndex][0].transform;
            this.eyes[1].transform = this.laserPaths[this.letterIndex][1].transform;
            this.svg.selectAll('line').remove();
            this.svg.append('line').attr('filter', 'url(#f1)').style('stroke-width', 4).attr('x1', this.eyes[0].x).attr('y1', this.eyes[0].y).attr('x2', this.laserPaths[this.letterIndex][0].x).attr('y2', this.laserPaths[this.letterIndex][0].y);
            this.svg.append('line').attr('filter', 'url(#f1)').style('stroke-width', 3).attr('x1', this.eyes[1].x).attr('y1', this.eyes[1].y).attr('x2', this.laserPaths[this.letterIndex][1].x).attr('y2', this.laserPaths[this.letterIndex][1].y);
            this.titleSVG.select('defs').select('mask').append('circle').attr('cx', this.laserPaths[this.letterIndex][2].x).attr('cy', this.laserPaths[this.letterIndex][2].y).attr('r', 8);
            this.flare.top = this.laserPaths[this.letterIndex][1].y;
            this.flare.left = this.laserPaths[this.letterIndex][1].x;
            this.letterIndex++;
          } else if (this.letterIndex === this.laserPaths.length) {
            if (this.svg) {
              this.svg.selectAll('line').remove();
              this.openHead = true;
              this.letterIndex++;
              this.flare.top = -999;
              this.flare.left = -999;
            }
          }

          this.render(); // this.stats.update();
        }
      }, {
        key: "render",
        value: function render() {
          function rads(degrees) {
            var pi = Math.PI;
            return degrees * (pi / 180);
          }

          var deltaTime = this.clock.getDelta(); // left and right think this is working

          if (this.move.x.active) {
            this.balloon.position.x += this.move.x.direction * this.threeMove;

            if (this.balloon.rotation.y * this.move.x.direction < 0.2) {
              this.balloon.rotation.y += this.move.x.direction * 0.01;
              this.balloon.position.x += -this.move.x.direction * this.threeMove;
            }
          } else {
            if (this.balloon) {
              if (this.balloon.rotation.y < -0.04 || this.balloon.rotation.y > 0.04) {
                this.balloon.rotation.y += this.move.x.direction * 0.04 * -1;
                this.balloon.position.x += this.move.x.direction * this.threeMove;
              }
            }
          }

          if (this.move.z.active) {
            this.balloon.position.z += this.move.z.direction * this.threeMove;

            if ((this.balloon.rotation.x + rads(90)) * this.move.z.direction < 0.2) {
              this.balloon.rotation.x += this.move.z.direction * 0.01;
              this.balloon.position.z += -this.move.z.direction * this.threeMove;
            }
          } else {
            if (this.balloon) {
              if (this.balloon.rotation.x + rads(90) < -0.04 || this.balloon.rotation.x + rads(90) > 0.04) {
                this.balloon.rotation.x += this.move.z.direction * 0.04 * -1;
                this.balloon.position.z += this.move.z.direction * this.threeMove;
              }
            }
          }

          this.updatePhysics(deltaTime); // this.controls.update(deltaTime);

          this.moveBall();
          this.renderer.render(this.scene, this.camera);
          this.time += deltaTime;
        }
      }, {
        key: "moveBall",
        value: function moveBall() {
          function rads(degrees) {
            var pi = Math.PI;
            return degrees * (pi / 180);
          }

          var scalingFactor = 42;
          var moveX = this.moveDirection.right - this.moveDirection.left;
          var moveZ = this.moveDirection.back - this.moveDirection.forward;
          var moveY = 0;
          if (moveX == 0 && moveY == 0 && moveZ == 0) return;

          if (this.balloon.rotation.y * this.move.x.direction >= 0.2) {
            this.basket.position.x += moveX / 1000;
          }

          if ((this.balloon.rotation.x + rads(90)) * this.move.z.direction >= 0.2) {
            this.basket.position.z += moveZ / 1000;
          }

          var resultantImpulse = new Ammo.btVector3(this.balloon.position.x, this.balloon.position.y, this.balloon.position.z);
          resultantImpulse.op_mul(scalingFactor);
          var physicsBody = this.basket.userData.physicsBody;
          physicsBody.setLinearVelocity(resultantImpulse);
        }
      }, {
        key: "updatePhysics",
        value: function updatePhysics(deltaTime) {
          // Hinge control
          // this.hinge.enableAngularMotor(true, 1.5 * this.basketMovement, 50);
          // Step world
          this.physicsWorld.stepSimulation(deltaTime, 10); // Update rope

          var softBody = this.rope.userData.physicsBody;
          var ropePositions = this.rope.geometry.attributes.position.array;
          var numVerts = ropePositions.length / 3;
          var nodes = softBody.get_m_nodes();
          var indexFloat = 0;

          for (var i = 0; i < numVerts; i++) {
            var node = nodes.at(i);
            var nodePos = node.get_m_x();
            ropePositions[indexFloat++] = nodePos.x();
            ropePositions[indexFloat++] = nodePos.y();
            ropePositions[indexFloat++] = nodePos.z();
          }

          this.rope.geometry.attributes.position.needsUpdate = true; // Update rigid bodies

          for (var i = 0, il = this.rigidBodies.length; i < il; i++) {
            var objThree = this.rigidBodies[i];
            var objPhys = objThree.userData.physicsBody;
            var ms = objPhys.getMotionState();

            if (ms) {
              ms.getWorldTransform(this.transformAux1);
              var p = this.transformAux1.getOrigin();
              var q = this.transformAux1.getRotation();
              objThree.position.set(p.x(), p.y(), p.z());
              objThree.quaternion.set(q.x(), q.y(), q.z(), q.w());
            }
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.eye1 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.eye2 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titletext = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headCut = _t.first);
        }
      },
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function AppComponent_mousemove_HostBindingHandler($event) {
            return ctx.onMouseMove($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      decls: 58,
      vars: 35,
      consts: [["id", "container"], [1, "white-sheet", 3, "ngStyle"], [1, "harry-container", "head-back", 3, "ngStyle"], ["src", "https://assets.codepen.io/227435/skull-hole.png", 1, "skull-hole"], ["id", "page-container"], [1, "harry-container", 3, "ngStyle"], ["src", "https://assets.codepen.io/227435/eye.png", 1, "eye1", 3, "ngStyle"], ["eye1", ""], ["src", "https://assets.codepen.io/227435/eye.png", 1, "eye2", 3, "ngStyle"], ["eye2", ""], ["src", "https://assets.codepen.io/227435/body.png", 1, "body"], ["src", "https://assets.codepen.io/227435/head-top.png", 1, "hair", 3, "ngClass", "click"], ["id", "head-cut", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 283.87 33.89"], ["headCut", ""], ["d", "M.18,14.91c2.72,1,4.6,1.86,6.55,2.46,4.33,1.32,9,2,13,3.91,10.52,5,21.91,6.21,33.11,7.6,14.31,1.77,28.78,2.2,43.18,3.27,1.92.15,3.81,1,5.72,1,7.35.14,14.73.46,22.06,0s14.52-1.76,21.79-2.61c4.35-.52,8.72-1,13.1-1.27,3.42-.21,6.87-.05,10.31-.06a8.9,8.9,0,0,0,1.46,0c9.63-1.56,19.26-3.19,28.9-4.69,6.88-1.07,13.86-1.66,20.67-3,8.84-1.78,17.76-3.53,26.3-6.36C257.9,11.29,269.14,6.47,280.52,2a30.36,30.36,0,0,0,3.12-1.6", 1, "cls-1"], ["id", "laser", 1, "laser"], ["id", "f1", "x", "0", "y", "0", "width", "100%", "height", "100%"], ["result", "offOut", "in", "SourceGraphic", "dx", "0", "dy", "0"], ["result", "blurOut", "in", "matrixOut", "stdDeviation", "3"], ["in", "SourceGraphic", "in2", "blurOut", "mode", "normal"], ["version", "1.1", "id", "title", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 722.6 77", 1, "title", 3, "ngStyle"], ["titletext", ""], ["type", "text/css"], ["d", "M8,8.3c-0.7,0-1.3,0.3-1.8,0.8c-0.5,0.5-0.7,1.1-0.7,1.8v41.6c0,0.7,0.2,1.3,0.7,1.8C6.7,54.8,7.3,55,8,55\n\tc0.7,0,1.3-0.3,1.8-0.8c0.5-0.5,0.7-1.1,0.7-1.8v-20c0-0.4,0.2-0.6,0.5-0.6h21.1c0.3,0,0.5,0.2,0.5,0.6v20c0,0.7,0.2,1.3,0.7,1.8\n\tc0.5,0.5,1.1,0.8,1.8,0.8c0.7,0,1.3-0.3,1.8-0.8c0.5-0.5,0.7-1.1,0.7-1.8V10.9c0-0.7-0.2-1.3-0.7-1.8c-0.5-0.5-1.1-0.8-1.8-0.8", 1, "st0"], ["d", "M48.3,25.3c0-1.5,0.7-2.5,2.1-2.9c3.2-0.9,6.3-1.3,9.5-1.3c4.9,0,8.3,0.9,10.2,2.7c1.9,1.8,2.8,5,2.8,9.7v19.3\n\tc0,0.6-0.2,1.2-0.7,1.6c-0.4,0.4-1,0.7-1.6,0.7s-1.2-0.2-1.7-0.7c-0.5-0.4-0.7-1-0.7-1.6l-0.1-3.3c0,0,0-0.1-0.1-0.1\n\tc-0.1,0-0.1,0-0.1,0.1c-2.5,4.1-6.4,6.2-11.7,6.2c-2.9,0-5.3-0.9-7.1-2.8c-1.8-1.8-2.8-4.3-2.8-7.3c0-3.5,1.4-6.4,4.2-8.5\n\tc2.8-2.1,7.3-3.2,13.5-3.2h3.3c0.4,0,0.6-0.2,0.6-0.5", 1, "st0"], ["d", "M84.7,21.8c-0.7,0-1.3,0.2-1.7,0.7c-0.5,0.5-0.7,1-0.7,1.7v28.3c0,0.7,0.2,1.3,0.7,1.8c0.5,0.5,1.1,0.8,1.8,0.8\n\tc0.7,0,1.3-0.3,1.8-0.8c0.5-0.5,0.7-1.1,0.7-1.8V39.3c0-4.1,1.2-7.3,3.5-9.6c2.3-2.3,5.6-3.5,9.8-3.7c0.6,0,1.1-0.3,1.5-0.7\n\tc0.4-0.4,0.6-0.9,0.6-1.5", 1, "st0"], ["d", "M113.5,21.8c-0.7,0-1.3,0.2-1.7,0.7c-0.5,0.5-0.7,1-0.7,1.7v28.3c0,0.7,0.2,1.3,0.7,1.8\n\tc0.5,0.5,1.1,0.8,1.8,0.8c0.7,0,1.3-0.3,1.8-0.8c0.5-0.5,0.7-1.1,0.7-1.8V39.3c0-4.1,1.2-7.3,3.5-9.6c2.3-2.3,5.6-3.5,9.8-3.7\n\tc0.6,0,1.1-0.3,1.5-0.7c0.4-0.4,0.6-0.9,0.6-1.5", 1, "st0"], ["d", "M139.4,21.8c0.8,0,1.5,0.2,2.1,0.7c0.6,0.4,1.1,1,1.3,1.8l8.8,24.9c0,0,0,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1\n\tl9.7-25c0.3-0.7,0.7-1.2,1.3-1.7c0.6-0.4,1.3-0.6,2.1-0.6c0.6,0,1.1,0.2,1.4,0.7c0.3,0.5,0.4,1,0.2,1.6l-17.6,42.8\n\tc-0.3,0.7-0.8,1.2-1.4,1.7c-0.6,0.4-1.3,0.6-2.1,0.6", 1, "st0"], ["d", "M190.8,8.3c0.8,0,1.4,0.2,2,0.7c0.6,0.5,0.9,1.1,1.1,1.8l7.6,38.6c0,0,0,0.1,0.1,0.1c0,0,0.1,0,0.1-0.1\n\tl7.9-37.9c0.2-0.9,0.6-1.7,1.4-2.3c0.7-0.6,1.6-0.9,2.6-0.9s1.8,0.3,2.6,0.9c0.8,0.6,1.3,1.4,1.5,2.3l7.9,37.9c0,0,0,0.1,0.1,0.1\n\tc0,0,0.1,0,0.1-0.1l7.6-38.7c0.1-0.7,0.5-1.3,1-1.8c0.6-0.5,1.2-0.7,2-0.7", 1, "st0"], ["d", "M248.6,7c-0.7,0-1.3,0.2-1.8,0.7c-0.5,0.5-0.7,1-0.7,1.7v43.1c0,0.7,0.2,1.3,0.7,1.7c0.5,0.5,1.1,0.7,1.8,0.7\n\tc0.7,0,1.3-0.2,1.7-0.7c0.5-0.5,0.7-1,0.7-1.7V34.8c0-2.2,1-4.4,3.1-6.5c2.1-2.1,4.2-3.2,6.5-3.2c2.8,0,4.7,0.7,5.9,2.2\n\tc1.1,1.5,1.7,4.4,1.7,8.7v16.6c0,0.7,0.2,1.3,0.7,1.7c0.5,0.5,1,0.7,1.7,0.7", 1, "st0"], ["d", "M287.4,7c-0.7,0-1.3,0.3-1.8,0.8c-0.5,0.5-0.7,1.1-0.7,1.8v1.7c0,0.7,0.2,1.3,0.7,1.8c0.5,0.5,1.1,0.7,1.8,0.7\n\t M287.4,21.8c-0.7,0-1.3,0.3-1.8,0.8c-0.5,0.5-0.7,1.1-0.7,1.8v28.2c0,0.7,0.2,1.3,0.7,1.8c0.5,0.5,1.1,0.8,1.8,0.8", 1, "st0"], ["d", "M323.8,52.9c0,0.6-0.2,1.1-0.5,1.6c-0.4,0.5-0.8,0.7-1.4,0.8c-1.1,0.2-2.5,0.3-4.2,0.3c-3.8,0-6.3-0.8-7.8-2.3\n\tc-1.4-1.6-2.1-4.4-2.1-8.5V27.5c0-0.4-0.2-0.6-0.6-0.6h-4.7c-0.6,0-1-0.2-1.4-0.5c-0.4-0.4-0.5-0.8-0.5-1.4c0-0.6,0.2-1,0.5-1.4\n\tc0.4-0.4,0.8-0.5,1.4-0.5h4.7c0.4,0,0.6-0.2,0.6-0.6v-9.2c0-0.7,0.2-1.3,0.7-1.7c0.5-0.5,1-0.7,1.7-0.7c0.7,0,1.3,0.2,1.7,0.7\n\tc0.5,0.5,0.7,1,0.7,1.7v9.2c0,0.4,0.2,0.6,0.6,0.6h9.6c0.6,0,1,0.2,1.4,0.5c0.4,0.4,0.5,0.8,0.5,1.4", 1, "st0"], ["d", "M336.8,39.7h18.9c1,0,1.9-0.4,2.7-1.1c0.7-0.7,1.1-1.6,1.1-2.6c-0.5-9.9-5-14.9-13.4-14.9\n\tc-4.6,0-8.2,1.4-10.8,4.2c-2.6,2.8-3.9,7.2-3.9,13.1c0,5.8,1.4,10.1,4.1,13c2.7,2.9,6.7,4.3,12,4.3c2.6,0,5.2-0.3,7.9-1\n\tc1.3-0.3,2-1.2,2-2.7", 1, "st0"], ["d", "M384.8,36.7c0-0.6,0.2-1,0.6-1.4c0.4-0.4,0.9-0.6,1.4-0.6h15.6c0.6,0,1,0.2,1.4,0.6c0.4,0.4,0.6,0.9,0.6,1.4", 1, "st0"], ["d", "M435.8,55.2c-1-0.1-1.9-0.6-2.6-1.4c-0.7-0.8-1-1.7-1-2.8V12.3c0-1.1,0.3-2,1-2.8c0.7-0.8,1.5-1.2,2.6-1.4\n\tc2.3-0.3,4.9-0.4,7.7-0.4c15.2,0,22.8,7.8,22.8,23.4c0,16.4-7.6,24.6-22.8,24.6C440.7,55.7,438.1,55.5,435.8,55.2z", 1, "st0"], ["d", "M476.9,39.7h18.9c1,0,1.9-0.4,2.7-1.1c0.7-0.7,1.1-1.6,1.1-2.6c-0.5-9.9-5-14.9-13.4-14.9\n\tc-4.6,0-8.2,1.4-10.8,4.2c-2.6,2.8-3.9,7.2-3.9,13.1c0,5.8,1.4,10.1,4.1,13c2.7,2.9,6.7,4.3,12,4.3c2.6,0,5.2-0.3,7.9-1\n\tc1.3-0.3,2-1.2,2-2.7", 1, "st0"], ["d", "M532.6,22.5c0.4,0.5,0.4,1.1,0.2,1.7l-10,27.7c-0.3,0.9-0.9,1.7-1.7,2.3c-0.8,0.6-1.7,0.9-2.7,0.9\n\tc-1,0-1.9-0.3-2.7-0.9c-0.8-0.6-1.4-1.3-1.7-2.3l-9.9-27.6c-0.2-0.6-0.1-1.2,0.2-1.7c0.4-0.5,0.9-0.8,1.5-0.8", 1, "st0"], ["d", "M541.9,39.7h18.9c1,0,1.9-0.4,2.7-1.1c0.7-0.7,1.1-1.6,1.1-2.6c-0.5-9.9-5-14.9-13.4-14.9\n\tc-4.6,0-8.2,1.4-10.8,4.2c-2.6,2.8-3.9,7.2-3.9,13.1c0,5.8,1.4,10.1,4.1,13c2.7,2.9,6.7,4.3,12,4.3c2.6,0,5.2-0.3,7.9-1\n\tc1.3-0.3,2-1.2,2-2.7", 1, "st0"], ["d", "M577.4,55c-0.7,0-1.3-0.3-1.8-0.8c-0.5-0.5-0.7-1.1-0.7-1.8V9.6c0-0.7,0.2-1.3,0.7-1.8c0.5-0.5,1.1-0.8,1.8-0.8\n\t", 1, "st0"], ["d", "M616.3,51.1c-2.7,3-6.4,4.5-11.2,4.5c-4.8,0-8.5-1.5-11.2-4.5s-4-7.3-4-12.7c0-5.5,1.3-9.7,4-12.7\n\tc2.7-3,6.4-4.5,11.2-4.5c4.8,0,8.5,1.5,11.2,4.5c2.7,3,4,7.3,4,12.7C620.3,43.9,619,48.1,616.3,51.1z", 1, "st0"], ["d", "M631.9,68.4c-0.5,0.5-1,0.7-1.7,0.7c-0.7,0-1.3-0.2-1.8-0.7c-0.5-0.5-0.7-1-0.7-1.7V24.1c0-0.6,0.2-1.2,0.7-1.6\n\tc0.4-0.4,1-0.7,1.6-0.7s1.2,0.2,1.7,0.7c0.5,0.4,0.7,1,0.7,1.6l0.1,2.4c0,0,0,0.1,0.1,0.1l0.1-0.1c2.8-3.5,6.4-5.3,10.7-5.3\n\tc4.1,0,7.4,1.5,9.8,4.5c2.4,3,3.6,7.3,3.6,12.8c0,5.3-1.2,9.5-3.7,12.6c-2.5,3.1-5.7,4.6-9.7,4.6c-4.4,0-7.9-1.6-10.5-4.9\n\tc0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0.1v15.9C632.6,67.4,632.4,67.9,631.9,68.4z", 1, "st0"], ["d", "M668.3,39.7h18.9c1,0,1.9-0.4,2.7-1.1c0.7-0.7,1.1-1.6,1.1-2.6c-0.5-9.9-5-14.9-13.4-14.9\n\tc-4.6,0-8.2,1.4-10.8,4.2c-2.6,2.8-3.9,7.2-3.9,13.1c0,5.8,1.4,10.1,4.1,13c2.7,2.9,6.7,4.3,12,4.3c2.6,0,5.2-0.3,7.9-1\n\tc1.3-0.3,2-1.2,2-2.7", 1, "st0"], ["d", "M701,21.8c-0.7,0-1.3,0.2-1.7,0.7c-0.5,0.5-0.7,1-0.7,1.7v28.3c0,0.7,0.2,1.3,0.7,1.8c0.5,0.5,1.1,0.8,1.8,0.8\n\tc0.7,0,1.3-0.3,1.8-0.8c0.5-0.5,0.7-1.1,0.7-1.8V39.3c0-4.1,1.2-7.3,3.5-9.6c2.3-2.3,5.6-3.5,9.8-3.7c0.6,0,1.1-0.3,1.5-0.7\n\tc0.4-0.4,0.6-0.9,0.6-1.5", 1, "st0"], ["d", "M41.3,33.2"], ["version", "1.1", "id", "title-over", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 722.6 76.92", 1, "title", 3, "ngStyle"], ["id", "stripe"], ["x", "0", "y", "0", "width", "722.6", "height", "76.92", "fill", "white"], ["x", "0", "y", "0", "width", "722.6", "height", "76.92", "mask", "url(#stripe)", "fill", "#fff"], ["id", "text", "contenteditable", "", "spellcheck", "false", 3, "ngStyle"], ["src", "https://assets.codepen.io/227435/lens-flares-transparent-png-images-227909.png", 1, "flare", 3, "ngStyle"], ["src", "https://assets.codepen.io/227435/lens-flares-transparent-png-images-227909.png", 1, "anti-flare", 3, "ngStyle"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_11_listener() {
            return ctx.openHead = !ctx.openHead;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " .cls-1 { fill: none; stroke-miterlimit: 10; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "filter", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "feOffset", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "feGaussianBlur", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "feBlend", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "style", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " .st0 { fill: rgba(0, 0, 0, 0); } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mask", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "rect", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "rect", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Harry White - Developer\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 50);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c4, "translate(-50%," + (0 - ctx.intro + 120) * 3 + "px)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c4, "translate(-50%," + (0 - ctx.intro + 120) * 3 + "px)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c4, "translate(-50%," + (0 - ctx.intro + 120) * 3 + "px)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c4, ctx.eyes[0].transform));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c4, ctx.eyes[1].transform));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c5, ctx.openHead));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c4, "translate(-50%," + (0 - ctx.intro + 120) * 3 + "px)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c4, "translate(-50%," + (0 - ctx.intro + 120) * 3 + "px)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c4, "translate(-50%," + (0 - ctx.intro + 120) * 6 + "px)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](29, _c6, ctx.flare.top + "px", ctx.flare.left + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c6, ctx.flare.top + "px", ctx.flare.left + "px"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400&display=swap\");\nh1[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  margin-top: 14rem;\n  font-size: 32px;\n}\n.head-back[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n}\n.white-sheet[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: white;\n  position: absolute;\n  width: 629px;\n  height: 291px;\n  left: 50%;\n  top: 560px;\n  transform: translateX(-50%);\n}\n[_ngcontent-%COMP%]:ng-deep   body[_ngcontent-%COMP%] {\n  margin: 0;\n  min-height: 100vh;\n}\n.page-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden !important;\n}\n.harry-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 627px;\n  height: 461px;\n  bottom: 0;\n  left: calc(50% + 16px);\n  transform: translateX(-50%);\n}\n.harry-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.harry-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.harry-container[_ngcontent-%COMP%]   .eye1[_ngcontent-%COMP%] {\n  top: 7%;\n  left: 33.4%;\n  width: 10.78947368%;\n  height: 13.82598331%;\n}\n.harry-container[_ngcontent-%COMP%]   .eye2[_ngcontent-%COMP%] {\n  top: 7%;\n  left: 46.1%;\n  width: 10.78947368%;\n  height: 13.82598331%;\n}\n.harry-container[_ngcontent-%COMP%]   .hair[_ngcontent-%COMP%] {\n  top: -27%;\n  left: 25.3%;\n  width: 39.64912281%;\n  height: 33.01549464%;\n  transform-origin: 100% 81%;\n  transition: 0.2s;\n  \n  \n}\n.harry-container[_ngcontent-%COMP%]   .open-head[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.harry-container[_ngcontent-%COMP%]   .skull-hole[_ngcontent-%COMP%] {\n  width: 34.29824561%;\n  height: 9.296781883%;\n  left: 30.5%;\n  top: -16px;\n  position: absolute;\n  z-index: -1;\n}\n.harry-container[_ngcontent-%COMP%]   #head-cut[_ngcontent-%COMP%] {\n  width: 34.29824561%;\n  height: 9.296781883%;\n  left: 30.5%;\n  top: -9px;\n  transform: none;\n}\n.harry-container[_ngcontent-%COMP%]   #head-cut[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: none;\n}\n.cursor[_ngcontent-%COMP%] {\n  height: 28px;\n  position: absolute;\n  left: -28px;\n  top: -28px;\n}\n.red[_ngcontent-%COMP%] {\n  filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8);\n  transition: filter 1s linear;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 24px 0 0 24px;\n}\n.draw[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\ncanvas[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) !important;\n}\n.laser-beam[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  width: 3px;\n  height: 500%;\n  background: rgba(99, 195, 231, 0.6);\n  box-shadow: 0px 0px 15px 0px #63c3e7;\n  transform-origin: 0 100%;\n  -webkit-animation: laser 7s infinite;\n}\n  line {\n  stroke: rgba(236, 19, 65, 0.6);\n  box-shadow: 0px 0px 15px 0px #ec1341;\n  filter: drop-shadow(0px 0px 15px 0px #ec1341);\n}\n.laser-beam.purple[_ngcontent-%COMP%] {\n  -webkit-animation: laser 7.3s infinite;\n  background: rgba(204, 102, 255, 0.6);\n  box-shadow: 0px 0px 15px 0px #cc66ff;\n}\n@-webkit-keyframes laser {\n  0% {\n    transform: rotate(-75deg);\n  }\n  50% {\n    transform: rotate(75deg);\n  }\n  100% {\n    transform: rotate(-75deg);\n  }\n}\nsvg.laser[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 99;\n  pointer-events: none;\n}\nsvg[_ngcontent-%COMP%]:not(.laser) {\n  width: 722px;\n  position: absolute;\n  top: 217px;\n  left: 49.7%;\n  transform: translateX(-50%);\n}\n#page-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n@-webkit-keyframes rotating {\n  from {\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(0deg);\n  }\n  to {\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(360deg);\n  }\n}\n@-webkit-keyframes antiRotating {\n  from {\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(360deg);\n  }\n  to {\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(0deg);\n  }\n}\n.flare[_ngcontent-%COMP%] {\n  height: 80px;\n  position: absolute;\n  -webkit-animation: rotating 2s linear infinite;\n  transform: translateX(-50%) translateY(-50%);\n  z-index: 10;\n}\n.anti-flare[_ngcontent-%COMP%] {\n  height: 80px;\n  position: absolute;\n  -webkit-animation: antiRotating 2s linear infinite;\n  transform: translateX(-50%) translateY(-50%);\n}\n\nhtml[_ngcontent-%COMP%] {\n  height: 100%;\n  font-family: \"M PLUS Rounded 1c\", sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.txt[contenteditable][_ngcontent-%COMP%] {\n  outline: none;\n}\n\n#text[_ngcontent-%COMP%] {\n  font-family: \"M PLUS Rounded 1c\", sans-serif;\n  font-size: 64px;\n  color: transparent;\n  text-stroke: 2px rgba(0, 0, 0, 0.2);\n  \n  width: 730px;\n  position: absolute;\n  top: 200px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n#text[_ngcontent-%COMP%] {\n  text-stroke: 0;\n  color: transparent;\n  background-color: rgba(82, 96, 117, 0.5);\n  -webkit-background-clip: text;\n  text-shadow: rgba(255, 255, 255, 0.5) 0 5px 6px, rgba(255, 255, 255, 0.2) 1px 3px 3px;\n  transition: text-shadow 0.1s ease-out, background-color 0.2s ease-out;\n}\n#text[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nsvg#title-over[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n#text[_ngcontent-%COMP%] {\n  z-index: -2;\n}\nbody[_ngcontent-%COMP%] {\n  color: #61443e;\n  font-family: Monospace;\n  font-size: 13px;\n  text-align: center;\n  margin: 0px;\n  overflow: hidden;\n}\n#info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  padding: 5px;\n}\na[_ngcontent-%COMP%] {\n  color: #a06851;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9od2hpdGUxL1JlcG9zL2hQb3J0Zm9saW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwrRUFBQTtBQTRSQSwrRkFBQTtBQTFSUjtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRUY7QURBQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQ0dGO0FEQUU7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUNHSjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FDRUY7QURDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0VGO0FEQUU7RUFDRSxrQkFBQTtBQ0VKO0FEQ0U7RUFDRSxXQUFBO0FDQ0o7QURFRTtFQUNFLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0FKO0FER0U7RUFDRSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNESjtBRElFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMENBQUE7QUNGSjtBREtFO0VBQ0UseUJBQUE7QUNISjtBRE1FO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSko7QURPRTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNMSjtBRE9JO0VBQ0UsVUFBQTtBQ0xOO0FEVUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ1BGO0FEVUE7RUFDRSxtR0FBQTtFQUVBLDRCQUFBO0FDUkY7QURXQTtFQUNFLHFCQUFBO0FDUkY7QURXQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ1JGO0FEV0E7RUFDRSx1Q0FBQTtBQ1JGO0FEV0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUdBLG9DQUFBO0VBSUEsd0JBQUE7RUFDQSxvQ0FBQTtBQ1JGO0FEV0E7RUFFRSw4QkFBQTtFQUdBLG9DQUFBO0VBQ0EsNkNBQUE7QUNURjtBRFlBO0VBQ0Usc0NBQUE7RUFDQSxvQ0FBQTtFQUdBLG9DQUFBO0FDVEY7QURZQTtFQUNFO0lBSUUseUJBQUE7RUNURjtFRFlBO0lBSUUsd0JBQUE7RUNWRjtFRGFBO0lBSUUseUJBQUE7RUNYRjtBQUNGO0FEaURBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUMvQ0Y7QURrREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDL0NGO0FEa0RBO0VBQ0Usa0JBQUE7QUMvQ0Y7QURrREE7RUFDRTtJQUNFLGlFQUFBO0VDL0NGO0VEa0RBO0lBQ0UsbUVBQUE7RUNoREY7QUFDRjtBRG1EQTtFQUNFO0lBQ0UsbUVBQUE7RUNqREY7RURvREE7SUFDRSxpRUFBQTtFQ2xERjtBQUNGO0FEcURBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7QUNuREY7QURzREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNBLDRDQUFBO0FDbkRGO0FEdURBLGtFQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsNENBQUE7QUNyREY7QUR3REE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckRGO0FEd0RBO0VBQ0UsYUFBQTtBQ3JERjtBRHdEQSxnRUFBQTtBQUVBO0VBQ0UsNENBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ3RERjtBRHlEQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxxRkFBQTtFQUVBLHFFQUFBO0FDdkRGO0FEMERBO0VBQ0UsYUFBQTtBQ3ZERjtBRDBEQTtFQUNFLFdBQUE7QUN2REY7QUQwREE7RUFDRSxXQUFBO0FDdkRGO0FEeURBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDdERGO0FEeURBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN0REY7QUR5REE7RUFDRSxjQUFBO0FDdERGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwXCIpO1xuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNHJlbTtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuLmhlYWQtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG4ud2hpdGUtc2hlZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MjlweDtcbiAgaGVpZ2h0OiAyOTFweDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDU2MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG46bmctZGVlcCB7XG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAvLyBjdXJzb3I6IHVybChodHRwczovL2Fzc2V0cy5jb2RlcGVuLmlvLzIyNzQzNS9ibGFuay0wMS5wbmcpLCBhdXRvO1xuICB9XG59XG4ucGFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uaGFycnktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjI3cHg7XG4gIGhlaWdodDogNDYxcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogY2FsYyg1MCUgKyAxNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLmJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmV5ZTEge1xuICAgIHRvcDogNyU7XG4gICAgbGVmdDogMzMuNCU7XG4gICAgd2lkdGg6IDEwLjc4OTQ3MzY4JTtcbiAgICBoZWlnaHQ6IDEzLjgyNTk4MzMxJTtcbiAgfVxuXG4gIC5leWUyIHtcbiAgICB0b3A6IDclO1xuICAgIGxlZnQ6IDQ2LjElO1xuICAgIHdpZHRoOiAxMC43ODk0NzM2OCU7XG4gICAgaGVpZ2h0OiAxMy44MjU5ODMzMSU7XG4gIH1cblxuICAuaGFpciB7XG4gICAgdG9wOiAtMjclO1xuICAgIGxlZnQ6IDI1LjMlO1xuICAgIHdpZHRoOiAzOS42NDkxMjI4MSU7XG4gICAgaGVpZ2h0OiAzMy4wMTU0OTQ2NCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA4MSU7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAvKiAgIHRyYW5zZm9ybS1vcmlnaW46IDIyNXB4IDEzN3B4OyAqL1xuICAgIC8qICAgdHJhbnNmb3JtOnNjYWxlKDAuNSkgcm90YXRlKDQ1ZGVnKTsgKi9cbiAgfVxuXG4gIC5vcGVuLWhlYWQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cblxuICAuc2t1bGwtaG9sZSB7XG4gICAgd2lkdGg6IDM0LjI5ODI0NTYxJTtcbiAgICBoZWlnaHQ6IDkuMjk2NzgxODgzJTtcbiAgICBsZWZ0OiAzMC41JTtcbiAgICB0b3A6IC0xNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuXG4gICNoZWFkLWN1dCB7XG4gICAgd2lkdGg6IDM0LjI5ODI0NTYxJTtcbiAgICBoZWlnaHQ6IDkuMjk2NzgxODgzJTtcbiAgICBsZWZ0OiAzMC41JTtcbiAgICB0b3A6IC05cHg7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuXG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4uY3Vyc29yIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yOHB4O1xuICB0b3A6IC0yOHB4O1xufVxuXG4ucmVkIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcyg0MCUpIHNlcGlhKDEwMCUpIGh1ZS1yb3RhdGUoLTUwZGVnKVxuICAgIHNhdHVyYXRlKDYwMCUpIGNvbnRyYXN0KDAuOCk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAxcyBsaW5lYXI7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMjRweCAwIDAgMjRweDtcbn1cblxuLmRyYXcge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5jYW52YXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG59XG5cbi5sYXNlci1iZWFtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiA1MDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAxOTUsIDIzMSwgMC42KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICM2M2MzZTc7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjNjNjM2U3O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICM2M2MzZTc7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbGFzZXIgN3MgaW5maW5pdGU7XG59XG5cbjo6bmctZGVlcCBsaW5lIHtcbiAgLy8gLXdlYmtpdC1hbmltYXRpb246IGxhc2VyIDcuNXMgaW5maW5pdGU7XG4gIHN0cm9rZTogcmdiYSgyMzYsIDE5LCA2NSwgMC42KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICNlYzEzNDE7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjZWMxMzQxO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICNlYzEzNDE7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxNXB4IDBweCAjZWMxMzQxKTtcbn1cblxuLmxhc2VyLWJlYW0ucHVycGxlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxhc2VyIDcuM3MgaW5maW5pdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjA0LCAxMDIsIDI1NSwgMC42KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICNjYzY2ZmY7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjY2M2NmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICNjYzY2ZmY7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsYXNlciB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC03NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC03NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNzVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC03NWRlZyk7XG4gIH1cblxuICA1MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNzVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzVkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNzVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNzVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTc1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNzVkZWcpO1xuICB9XG59XG5cbi8vIC5oYXJyeS1jb250YWluZXIge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHRvcDogMDtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgd2lkdGg6IDIyMHB4O1xuLy8gICAgIGhlaWdodDogMzIwcHg7XG4vLyAgICAgLy8gYmFja2dyb3VuZDogY29yYWw7XG5cbi8vICAgICBpbWcge1xuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbi8vICAgICB9XG5cbi8vICAgICAuYm9keSB7XG4vLyAgICAgICAgIGxlZnQ6IDA7XG4vLyAgICAgfVxuXG4vLyAgICAgLmV5ZTEge1xuLy8gICAgICAgICB0b3A6IDM4MXB4O1xuLy8gICAgICAgICBsZWZ0OiA0NDNweDtcbi8vICAgICB9XG5cbi8vICAgICAuZXllMiB7XG4vLyAgICAgICAgIHRvcDogMzgwcHg7XG4vLyAgICAgICAgIGxlZnQ6IDUxNnB4O1xuLy8gICAgIH1cblxuLy8gICAgIC5oYWlyIHtcbi8vICAgICAgICAgdG9wOiAxOThweDtcbi8vICAgICAgICAgbGVmdDogMzE2cHg7XG4vLyAgICAgICAgIC8qICAgdHJhbnNmb3JtLW9yaWdpbjogMjI1cHggMTM3cHg7ICovXG4vLyAgICAgICAgIC8qICAgdHJhbnNmb3JtOnNjYWxlKDAuNSkgcm90YXRlKDQ1ZGVnKTsgKi9cbi8vICAgICB9XG4vLyB9XG5zdmcubGFzZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDk5O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuc3ZnOm5vdCgubGFzZXIpIHtcbiAgd2lkdGg6IDcyMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjE3cHg7XG4gIGxlZnQ6IDQ5LjclO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbiNwYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0aW5nIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMGRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW50aVJvdGF0aW5nIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMzYwZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuXG4uZmxhcmUge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0aW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uYW50aS1mbGFyZSB7XG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW50aVJvdGF0aW5nIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NK1BMVVMrUm91bmRlZCsxYzp3Z2h0QDQwMCZkaXNwbGF5PXN3YXBcIik7XG4vKiBHbG9iYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk0gUExVUyBSb3VuZGVkIDFjXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50eHRbY29udGVudGVkaXRhYmxlXSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIHRleHQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiN0ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTSBQTFVTIFJvdW5kZWQgMWNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc3Ryb2tlOiAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAvKiBUZXh0IHN0cm9rZSAqL1xuICB3aWR0aDogNzMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMDBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbiN0ZXh0IHtcbiAgdGV4dC1zdHJva2U6IDA7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwgOTYsIDExNywgMC41KTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIHRleHQtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgMCA1cHggNnB4LFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxcHggM3B4IDNweDtcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4xcyBlYXNlLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xufVxuXG4jdGV4dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnN2ZyN0aXRsZS1vdmVyIHtcbiAgei1pbmRleDogLTE7XG59XG5cbiN0ZXh0IHtcbiAgei1pbmRleDogLTI7XG59XG5ib2R5IHtcbiAgY29sb3I6ICM2MTQ0M2U7XG4gIGZvbnQtZmFtaWx5OiBNb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2luZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5hIHtcbiAgY29sb3I6ICNhMDY4NTE7XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TStQTFVTK1JvdW5kZWQrMWM6d2dodEA0MDAmZGlzcGxheT1zd2FwXCIpO1xuaDEge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTRyZW07XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmhlYWQtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi53aGl0ZS1zaGVldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYyOXB4O1xuICBoZWlnaHQ6IDI5MXB4O1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTYwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuOm5nLWRlZXAgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5oYXJyeS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MjdweDtcbiAgaGVpZ2h0OiA0NjFweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiBjYWxjKDUwJSArIDE2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uaGFycnktY29udGFpbmVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5oYXJyeS1jb250YWluZXIgLmJvZHkge1xuICB3aWR0aDogMTAwJTtcbn1cbi5oYXJyeS1jb250YWluZXIgLmV5ZTEge1xuICB0b3A6IDclO1xuICBsZWZ0OiAzMy40JTtcbiAgd2lkdGg6IDEwLjc4OTQ3MzY4JTtcbiAgaGVpZ2h0OiAxMy44MjU5ODMzMSU7XG59XG4uaGFycnktY29udGFpbmVyIC5leWUyIHtcbiAgdG9wOiA3JTtcbiAgbGVmdDogNDYuMSU7XG4gIHdpZHRoOiAxMC43ODk0NzM2OCU7XG4gIGhlaWdodDogMTMuODI1OTgzMzElO1xufVxuLmhhcnJ5LWNvbnRhaW5lciAuaGFpciB7XG4gIHRvcDogLTI3JTtcbiAgbGVmdDogMjUuMyU7XG4gIHdpZHRoOiAzOS42NDkxMjI4MSU7XG4gIGhlaWdodDogMzMuMDE1NDk0NjQlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDgxJTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgLyogICB0cmFuc2Zvcm0tb3JpZ2luOiAyMjVweCAxMzdweDsgKi9cbiAgLyogICB0cmFuc2Zvcm06c2NhbGUoMC41KSByb3RhdGUoNDVkZWcpOyAqL1xufVxuLmhhcnJ5LWNvbnRhaW5lciAub3Blbi1oZWFkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5oYXJyeS1jb250YWluZXIgLnNrdWxsLWhvbGUge1xuICB3aWR0aDogMzQuMjk4MjQ1NjElO1xuICBoZWlnaHQ6IDkuMjk2NzgxODgzJTtcbiAgbGVmdDogMzAuNSU7XG4gIHRvcDogLTE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG4uaGFycnktY29udGFpbmVyICNoZWFkLWN1dCB7XG4gIHdpZHRoOiAzNC4yOTgyNDU2MSU7XG4gIGhlaWdodDogOS4yOTY3ODE4ODMlO1xuICBsZWZ0OiAzMC41JTtcbiAgdG9wOiAtOXB4O1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG4uaGFycnktY29udGFpbmVyICNoZWFkLWN1dCBwYXRoIHtcbiAgZmlsbDogbm9uZTtcbn1cblxuLmN1cnNvciB7XG4gIGhlaWdodDogMjhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMjhweDtcbiAgdG9wOiAtMjhweDtcbn1cblxuLnJlZCB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoNDAlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKC01MGRlZykgc2F0dXJhdGUoNjAwJSkgY29udHJhc3QoMC44KTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDFzIGxpbmVhcjtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAyNHB4IDAgMCAyNHB4O1xufVxuXG4uZHJhdyB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbmNhbnZhcyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuLmxhc2VyLWJlYW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDUwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTksIDE5NSwgMjMxLCAwLjYpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzYzYzNlNztcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4ICM2M2MzZTc7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzYzYzNlNztcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsYXNlciA3cyBpbmZpbml0ZTtcbn1cblxuOjpuZy1kZWVwIGxpbmUge1xuICBzdHJva2U6IHJnYmEoMjM2LCAxOSwgNjUsIDAuNik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjZWMxMzQxO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggI2VjMTM0MTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjZWMxMzQxO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTVweCAwcHggI2VjMTM0MSk7XG59XG5cbi5sYXNlci1iZWFtLnB1cnBsZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsYXNlciA3LjNzIGluZmluaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwNCwgMTAyLCAyNTUsIDAuNik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjY2M2NmZmO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggI2NjNjZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCAjY2M2NmZmO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGFzZXIge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNzVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNzVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTc1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNzVkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg3NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDc1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDc1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNzVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNzVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTc1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNzVkZWcpO1xuICB9XG59XG5zdmcubGFzZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDk5O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuc3ZnOm5vdCgubGFzZXIpIHtcbiAgd2lkdGg6IDcyMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjE3cHg7XG4gIGxlZnQ6IDQ5LjclO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbiNwYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0aW5nIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBhbnRpUm90YXRpbmcge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuLmZsYXJlIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmFudGktZmxhcmUge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGFudGlSb3RhdGluZyAycyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4vKiBHbG9iYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogXCJNIFBMVVMgUm91bmRlZCAxY1wiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udHh0W2NvbnRlbnRlZGl0YWJsZV0ge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiB0ZXh0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuI3RleHQge1xuICBmb250LWZhbWlseTogXCJNIFBMVVMgUm91bmRlZCAxY1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zdHJva2U6IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC8qIFRleHQgc3Ryb2tlICovXG4gIHdpZHRoOiA3MzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuI3RleHQge1xuICB0ZXh0LXN0cm9rZTogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgyLCA5NiwgMTE3LCAwLjUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwIDVweCA2cHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAxcHggM3B4IDNweDtcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4xcyBlYXNlLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xufVxuXG4jdGV4dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnN2ZyN0aXRsZS1vdmVyIHtcbiAgei1pbmRleDogLTE7XG59XG5cbiN0ZXh0IHtcbiAgei1pbmRleDogLTI7XG59XG5cbmJvZHkge1xuICBjb2xvcjogIzYxNDQzZTtcbiAgZm9udC1mYW1pbHk6IE1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbmEge1xuICBjb2xvcjogI2EwNjg1MTtcbn0iXX0= */", "body[_ngcontent-%COMP%] {\n    color: #61443e;\n    font-family: Monospace;\n    font-size: 13px;\n    text-align: center;\n    margin: 0px;\n    overflow: hidden;\n  }\n\n  #info[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0px;\n    width: 100%;\n    padding: 5px;\n  }\n\n  a[_ngcontent-%COMP%] {\n\n    color: #a06851;\n  }\n\n  .count[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n  }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, {
        eye1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['eye1', {
            "static": false
          }]
        }],
        eye2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['eye2', {
            "static": false
          }]
        }],
        titletext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['titletext', {
            "static": false
          }]
        }],
        headCut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['headCut', {
            "static": false
          }]
        }],
        onMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mousemove', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/hwhite1/Repos/hPortfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map