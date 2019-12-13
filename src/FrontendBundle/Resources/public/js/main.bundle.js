/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/game/Initializer.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game/Actions/AttackActions.ts":
/*!*******************************************!*\
  !*** ./src/game/Actions/AttackActions.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GoToMeshAndRunAction_1 = __webpack_require__(/*! ./GoToMeshAndRunAction */ "./src/game/Actions/GoToMeshAndRunAction.ts");
var AttackActions = /** @class */ (function () {
    function AttackActions(game) {
        this.game = game;
    }
    AttackActions.prototype.attackMonster = function (monster) {
        var game = this.game;
        var self = this;
        if (!game.player.isAnySkillIsInUse()) {
            this.cancelCheckAttack();
            game.controller.attackPoint = monster.meshForMove;
            game.controller.targetPoint = null;
            this.attackOnce = false;
            this.attackedMonster = monster;
            GoToMeshAndRunAction_1.GoToMeshAndRunAction.execute(game, monster.meshForMove, function () {
                game.player.runAnimationDeathOrStand();
                game.player.unregisterMoveWithCollision(true);
                self.checkAttackObserver = game.getBabylonScene().onBeforeRenderObservable.add(function () {
                    self.checkAttack(function () {
                        self.intervalAttackRegisteredFunction = setInterval(function () {
                            self.intervalAttackFunction();
                        }, 100);
                    });
                });
            });
        }
    };
    AttackActions.prototype.abbadonMonsterAttack = function () {
        clearInterval(this.intervalAttackRegisteredFunction);
        this.cancelCheckAttack();
        this.game.controller.attackPoint = null;
    };
    AttackActions.prototype.attackOnlyOnce = function () {
        this.attackOnce = true;
        clearInterval(this.intervalAttackRegisteredFunction);
    };
    AttackActions.prototype.cancelCheckAttack = function () {
        this.game.getBabylonScene().onBeforeRenderObservable.remove(this.checkAttackObserver);
    };
    AttackActions.prototype.intervalAttackFunction = function () {
        var game = this.game;
        if (!game.player.isAnySkillIsInUse()) {
            game.socketClient.socket.emit('attack', {
                attack: this.attackedMonster.id,
                targetPoint: this.attackedMonster.meshForMove.position,
                rotation: this.attackedMonster.meshForMove.rotation,
            });
        }
    };
    AttackActions.prototype.checkAttack = function (actionAfterCheck) {
        var game = this.game;
        if (game.player.monstersToAttack[this.attackedMonster.id] == !undefined) {
            this.intervalAttackFunction();
            game.getBabylonScene().onBeforeRenderObservable.remove(this.checkAttackObserver);
            if (!this.attackOnce) {
                actionAfterCheck();
            }
        }
    };
    return AttackActions;
}());
exports.AttackActions = AttackActions;


/***/ }),

/***/ "./src/game/Actions/GoToMeshAndRunAction.ts":
/*!**************************************************!*\
  !*** ./src/game/Actions/GoToMeshAndRunAction.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GoToMeshAndRunAction = /** @class */ (function () {
    function GoToMeshAndRunAction() {
    }
    GoToMeshAndRunAction.execute = function (game, mesh, action) {
        var player = game.player;
        var targetPosition = mesh.position;
        var observer;
        var scene = game.getBabylonScene();
        scene.onBeforeRenderObservable.remove(game.getSceneManger().goToAction);
        var checkIntersectionFunction = function () {
            if (player.meshForMove.intersectsMesh(mesh)) {
                game.getBabylonScene().onBeforeRenderObservable.remove(observer);
                action();
            }
        };
        if (!player.meshForMove.intersectsMesh(mesh)) {
            player.runPlayerToPosition(targetPosition);
            game.socketClient.socket.emit('setTargetPoint', {
                position: targetPosition
            });
            observer = scene.onBeforeRenderObservable.add(checkIntersectionFunction);
        }
        else {
            action();
        }
        game.getSceneManger().goToAction = observer;
        return observer;
    };
    return GoToMeshAndRunAction;
}());
exports.GoToMeshAndRunAction = GoToMeshAndRunAction;


/***/ }),

/***/ "./src/game/Animations/AbstractAnimation.ts":
/*!**************************************************!*\
  !*** ./src/game/Animations/AbstractAnimation.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbstractAnimation = /** @class */ (function () {
    function AbstractAnimation() {
    }
    return AbstractAnimation;
}());
exports.AbstractAnimation = AbstractAnimation;


/***/ }),

/***/ "./src/game/Animations/BounceAnimation.ts":
/*!************************************************!*\
  !*** ./src/game/Animations/BounceAnimation.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractAnimation_1 = __webpack_require__(/*! ./AbstractAnimation */ "./src/game/Animations/AbstractAnimation.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var BounceAnimation = /** @class */ (function (_super) {
    __extends(BounceAnimation, _super);
    function BounceAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BounceAnimation.getAnimation = function () {
        var animation = new BABYLON.Animation("bounceAnimation", "position.y", 5, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        var keys = [
            {
                frame: 0,
                value: 1
            },
            {
                frame: 15,
                value: 1.5
            },
            {
                frame: 30,
                value: 1
            }
        ];
        animation.setKeys(keys);
        var easingFunction = new BABYLON.BackEase();
        easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        animation.setEasingFunction(easingFunction);
        return animation;
    };
    return BounceAnimation;
}(AbstractAnimation_1.AbstractAnimation));
exports.BounceAnimation = BounceAnimation;


/***/ }),

/***/ "./src/game/AssetsFactories/AbstractFactory.ts":
/*!*****************************************************!*\
  !*** ./src/game/AssetsFactories/AbstractFactory.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var AbstractFactory = /** @class */ (function () {
    function AbstractFactory(scene) {
        this.scene = scene;
    }
    AbstractFactory.prototype.initFactory = function () {
        var self = this;
        BABYLON.SceneLoader.LoadAssetContainer(this.dir, this.fileName, this.scene, function (container) {
            self.loadedMeshes = container.meshes;
        });
        return this;
    };
    AbstractFactory.prototype.createClone = function (name, cloneSkeleton) {
        if (cloneSkeleton === void 0) { cloneSkeleton = false; }
        for (var i = 0; i < this.loadedMeshes.length; i++) {
            var mesh = this.loadedMeshes[i];
            mesh.layerMask = 2;
            if (mesh.name == name) {
                var clonedMesh = mesh.clone('clone_' + name);
                if (cloneSkeleton) {
                    clonedMesh.skeleton = mesh.skeleton.clone('clone_skeleton_' + name, 'clone_skeleton_' + name);
                }
                clonedMesh.isVisible = true;
                clonedMesh.setEnabled(true);
                return clonedMesh;
            }
        }
    };
    AbstractFactory.prototype.createInstance = function (name) {
        for (var i = 0; i < this.loadedMeshes.length; i++) {
            var mesh = this.loadedMeshes[i];
            mesh.layerMask = 2;
            if (mesh.name == name) {
                var instancedMesh = mesh.createInstance('instance_' + name);
                instancedMesh.isVisible = true;
                instancedMesh.setEnabled(true);
                return instancedMesh;
            }
        }
    };
    return AbstractFactory;
}());
exports.AbstractFactory = AbstractFactory;


/***/ }),

/***/ "./src/game/AssetsFactories/Assets.ts":
/*!********************************************!*\
  !*** ./src/game/AssetsFactories/Assets.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CharacterAsset_1 = __webpack_require__(/*! ./CharacterAsset */ "./src/game/AssetsFactories/CharacterAsset.ts");
var SkeletonAsset_1 = __webpack_require__(/*! ./SkeletonAsset */ "./src/game/AssetsFactories/SkeletonAsset.ts");
var SkeletonWarriorAsset_1 = __webpack_require__(/*! ./SkeletonWarriorAsset */ "./src/game/AssetsFactories/SkeletonWarriorAsset.ts");
var SkeletonBossAsset_1 = __webpack_require__(/*! ./SkeletonBossAsset */ "./src/game/AssetsFactories/SkeletonBossAsset.ts");
var ChestAsset_1 = __webpack_require__(/*! ./ChestAsset */ "./src/game/AssetsFactories/ChestAsset.ts");
var NatureAsset_1 = __webpack_require__(/*! ./NatureAsset */ "./src/game/AssetsFactories/NatureAsset.ts");
var Assets = /** @class */ (function () {
    function Assets(scene) {
        this.character = new CharacterAsset_1.CharacterAsset(scene).initFactory();
        this.skeleton = new SkeletonAsset_1.SkeletonAsset(scene).initFactory();
        this.skeletonWarrior = new SkeletonWarriorAsset_1.SkeletonWarriorAsset(scene).initFactory();
        this.skeletonBoss = new SkeletonBossAsset_1.SkeletonBossAsset(scene).initFactory();
        this.chest = new ChestAsset_1.ChestAsset(scene).initFactory();
        this.natureGrain = new NatureAsset_1.NatureAsset(scene).initFactory();
    }
    Assets.prototype.getAssetFactoryByName = function (name) {
        var assetFactory = null;
        switch (name) {
            case 'skeleton':
                assetFactory = this.skeleton;
                break;
            case 'skeletonWarrior':
                assetFactory = this.skeletonWarrior;
                break;
            case 'skeletonBoss':
                assetFactory = this.skeletonBoss;
                break;
        }
        return assetFactory;
    };
    return Assets;
}());
exports.Assets = Assets;


/***/ }),

/***/ "./src/game/AssetsFactories/CharacterAsset.ts":
/*!****************************************************!*\
  !*** ./src/game/AssetsFactories/CharacterAsset.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory_1 = __webpack_require__(/*! ./AbstractFactory */ "./src/game/AssetsFactories/AbstractFactory.ts");
var CharacterAsset = /** @class */ (function (_super) {
    __extends(CharacterAsset, _super);
    function CharacterAsset(scene) {
        var _this = _super.call(this, scene) || this;
        _this.dir = 'assets/Characters/Warrior/';
        _this.fileName = 'Warrior.babylon';
        return _this;
    }
    return CharacterAsset;
}(AbstractFactory_1.AbstractFactory));
exports.CharacterAsset = CharacterAsset;


/***/ }),

/***/ "./src/game/AssetsFactories/ChestAsset.ts":
/*!************************************************!*\
  !*** ./src/game/AssetsFactories/ChestAsset.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory_1 = __webpack_require__(/*! ./AbstractFactory */ "./src/game/AssetsFactories/AbstractFactory.ts");
var ChestAsset = /** @class */ (function (_super) {
    __extends(ChestAsset, _super);
    function ChestAsset(scene) {
        var _this = _super.call(this, scene) || this;
        _this.dir = 'assets/Environment/chest/';
        _this.fileName = 'chest.babylon';
        return _this;
    }
    return ChestAsset;
}(AbstractFactory_1.AbstractFactory));
exports.ChestAsset = ChestAsset;


/***/ }),

/***/ "./src/game/AssetsFactories/NatureAsset.ts":
/*!*************************************************!*\
  !*** ./src/game/AssetsFactories/NatureAsset.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory_1 = __webpack_require__(/*! ./AbstractFactory */ "./src/game/AssetsFactories/AbstractFactory.ts");
var NatureAsset = /** @class */ (function (_super) {
    __extends(NatureAsset, _super);
    function NatureAsset(scene) {
        var _this = _super.call(this, scene) || this;
        _this.dir = 'assets/Environment/Plants/';
        _this.fileName = 'Plants.babylon';
        return _this;
    }
    return NatureAsset;
}(AbstractFactory_1.AbstractFactory));
exports.NatureAsset = NatureAsset;


/***/ }),

/***/ "./src/game/AssetsFactories/SkeletonAsset.ts":
/*!***************************************************!*\
  !*** ./src/game/AssetsFactories/SkeletonAsset.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory_1 = __webpack_require__(/*! ./AbstractFactory */ "./src/game/AssetsFactories/AbstractFactory.ts");
var SkeletonAsset = /** @class */ (function (_super) {
    __extends(SkeletonAsset, _super);
    function SkeletonAsset(scene) {
        var _this = _super.call(this, scene) || this;
        _this.dir = 'assets/Characters/Skeleton/skeleton/';
        _this.fileName = 'skeleton.babylon';
        return _this;
    }
    return SkeletonAsset;
}(AbstractFactory_1.AbstractFactory));
exports.SkeletonAsset = SkeletonAsset;


/***/ }),

/***/ "./src/game/AssetsFactories/SkeletonBossAsset.ts":
/*!*******************************************************!*\
  !*** ./src/game/AssetsFactories/SkeletonBossAsset.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory_1 = __webpack_require__(/*! ./AbstractFactory */ "./src/game/AssetsFactories/AbstractFactory.ts");
var SkeletonBossAsset = /** @class */ (function (_super) {
    __extends(SkeletonBossAsset, _super);
    function SkeletonBossAsset(scene) {
        var _this = _super.call(this, scene) || this;
        _this.dir = 'assets/Characters/Skeleton/skeletonBoss/';
        _this.fileName = 'skeletonBoss.babylon';
        return _this;
    }
    return SkeletonBossAsset;
}(AbstractFactory_1.AbstractFactory));
exports.SkeletonBossAsset = SkeletonBossAsset;


/***/ }),

/***/ "./src/game/AssetsFactories/SkeletonWarriorAsset.ts":
/*!**********************************************************!*\
  !*** ./src/game/AssetsFactories/SkeletonWarriorAsset.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFactory_1 = __webpack_require__(/*! ./AbstractFactory */ "./src/game/AssetsFactories/AbstractFactory.ts");
var SkeletonWarriorAsset = /** @class */ (function (_super) {
    __extends(SkeletonWarriorAsset, _super);
    function SkeletonWarriorAsset(scene) {
        var _this = _super.call(this, scene) || this;
        _this.dir = 'assets/Characters/Skeleton/skeletonWarrior/';
        _this.fileName = 'skeletonWarrior.babylon';
        return _this;
    }
    return SkeletonWarriorAsset;
}(AbstractFactory_1.AbstractFactory));
exports.SkeletonWarriorAsset = SkeletonWarriorAsset;


/***/ }),

/***/ "./src/game/Cameras/GameCamera.ts":
/*!****************************************!*\
  !*** ./src/game/Cameras/GameCamera.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Game_1 = __webpack_require__(/*! ../Game */ "./src/game/Game.ts");
var GameCamera = /** @class */ (function () {
    function GameCamera() {
    }
    GameCamera.initCameraInScene = function (scene) {
        var cameraByName = scene.getCameraByName('Camera');
        if (cameraByName) {
            cameraByName.dispose();
        }
        var gameCamera = new BABYLON.FreeCamera("gameCamera", new BABYLON.Vector3(0, 0, 0), scene);
        gameCamera.rotation = new BABYLON.Vector3(0.75, 0.75, 0);
        gameCamera.minZ = 10;
        gameCamera.fovMode = 0;
        gameCamera.layerMask = 2;
        ///MOBILE
        if (Game_1.Game.MOBILE_CLIENT) {
            gameCamera.maxZ = 50;
            gameCamera.fov = 0.8;
        }
        else {
            gameCamera.maxZ = 100;
            gameCamera.fov = 1.2;
        }
        var guiCamera = new BABYLON.FreeCamera("GUICamera", new BABYLON.Vector3(0, 0, 0), scene);
        guiCamera.layerMask = 1;
        guiCamera.rotation = new BABYLON.Vector3(0.75, 0.75, 0);
        guiCamera.position = new BABYLON.Vector3(-9, 10, 3);
        scene.activeCameras = [gameCamera, guiCamera];
        scene.cameraToUseForPointers = gameCamera;
    };
    return GameCamera;
}());
exports.GameCamera = GameCamera;


/***/ }),

/***/ "./src/game/Cameras/SelectCharacterCamera.ts":
/*!***************************************************!*\
  !*** ./src/game/Cameras/SelectCharacterCamera.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var SelectCharacterCamera = /** @class */ (function () {
    function SelectCharacterCamera() {
    }
    SelectCharacterCamera.initCameraInScene = function (scene) {
        var gameCamera = new BABYLON.FreeCamera("gameCamera", new BABYLON.Vector3(0, 0, 0), scene);
        gameCamera.position = new BABYLON.Vector3(0, 14, -20);
        gameCamera.rotation = new BABYLON.Vector3(0.5, 0, 0);
        gameCamera.maxZ = 200;
        gameCamera.minZ = -200;
        // camera.fov = 13.25;
        gameCamera.fovMode = 0;
        gameCamera.layerMask = 2;
        scene.activeCameras = [gameCamera];
    };
    return SelectCharacterCamera;
}());
exports.SelectCharacterCamera = SelectCharacterCamera;


/***/ }),

/***/ "./src/game/Characters/AbstractCharacter.ts":
/*!**************************************************!*\
  !*** ./src/game/Characters/AbstractCharacter.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var AbstractCharacter = /** @class */ (function () {
    function AbstractCharacter(name, game) {
        this.name = name;
        this.game = game;
    }
    AbstractCharacter.prototype.initPatricleSystemDamage = function () {
        var emitterDamage = BABYLON.Mesh.CreateBox("emitter0", 0.1, this.game.getBabylonScene());
        emitterDamage.parent = this.mesh;
        emitterDamage.position.y = 4;
        emitterDamage.visibility = 0;
        this.particleSystemEmitter = emitterDamage;
        return this;
    };
    AbstractCharacter.prototype.showDamage = function (damage) {
        var dynamicTexture = new BABYLON.DynamicTexture(null, 128, this.game.getBabylonScene(), true);
        var font = "44px RuslanDisplay";
        dynamicTexture.drawText(damage, 64, 80, font, "white", null, true, true);
        var particleSystemDamage = new BABYLON.ParticleSystem(null, 1 /*Capacity, i.e. max of 1 at a time*/, this.game.getBabylonScene());
        particleSystemDamage.emitter = this.particleSystemEmitter;
        particleSystemDamage.emitRate = 100;
        particleSystemDamage.minSize = 2.0;
        particleSystemDamage.maxSize = 4.0;
        particleSystemDamage.gravity = new BABYLON.Vector3(0, -9.81 * 2, 0);
        particleSystemDamage.direction1 = new BABYLON.Vector3(0, 10, 0);
        particleSystemDamage.direction2 = new BABYLON.Vector3(0, 10, 0);
        particleSystemDamage.minAngularSpeed = -Math.PI;
        particleSystemDamage.maxAngularSpeed = Math.PI;
        particleSystemDamage.minLifeTime = 1;
        particleSystemDamage.maxLifeTime = 1;
        particleSystemDamage.targetStopDuration = 0.8;
        particleSystemDamage.particleTexture = dynamicTexture;
        particleSystemDamage.layerMask = 2;
        particleSystemDamage.start();
        setTimeout(function () {
            dynamicTexture.dispose();
            particleSystemDamage.dispose();
        }, 1500);
    };
    AbstractCharacter.prototype.createBoxForMove = function (position) {
        var scene = this.game.getBabylonScene();
        this.meshForMove = BABYLON.Mesh.CreateBox(this.name + '_moveBox', 4, scene, false);
        this.meshForMove.checkCollisions = true;
        this.meshForMove.visibility = 0;
        this.meshForMove.position = position;
        this.meshForMove.layerMask = 2;
        return this;
    };
    AbstractCharacter.prototype.runAnimationHit = function (animation, callbackStart, callbackEnd, loop) {
        if (callbackStart === void 0) { callbackStart = null; }
        if (callbackEnd === void 0) { callbackEnd = null; }
        if (loop === void 0) { loop = false; }
        if (this.animation) {
            this.animation.stop();
        }
        var self = this;
        var mesh = this.mesh;
        var skeleton = mesh.skeleton;
        this.isAttack = true;
        if (callbackEnd) {
            callbackStart();
        }
        if (self.sfxHit) {
            self.sfxHit.play();
        }
        self.animation = skeleton.beginAnimation(animation, loop, 1, function () {
            if (callbackEnd) {
                callbackEnd();
            }
            self.runAnimationDeathOrStand();
            self.isAttack = false;
        });
    };
    AbstractCharacter.prototype.runAnimationSkill = function (animation, callbackStart, callbackEnd, loop, speed, standAnimationOnFinish) {
        if (callbackStart === void 0) { callbackStart = null; }
        if (callbackEnd === void 0) { callbackEnd = null; }
        if (loop === void 0) { loop = false; }
        if (speed === void 0) { speed = 1; }
        if (standAnimationOnFinish === void 0) { standAnimationOnFinish = true; }
        var self = this;
        var mesh = this.mesh;
        var skeleton = mesh.skeleton;
        if (callbackStart) {
            callbackStart();
        }
        self.animation = skeleton.beginAnimation(animation, loop, speed, function () {
            if (callbackEnd) {
                callbackEnd();
            }
            if (standAnimationOnFinish) {
                self.runAnimationDeathOrStand();
            }
        });
    };
    AbstractCharacter.prototype.runAnimationWalk = function () {
        var skeleton = this.mesh.skeleton;
        if (!this.isWalk && !this.isAttack && skeleton) {
            var self_1 = this;
            this.isWalk = true;
            self_1.sfxWalk.play();
            self_1.onWalkStart();
            self_1.animation = skeleton.beginAnimation(AbstractCharacter.ANIMATION_WALK, true, 1.2, function () {
                self_1.runAnimationDeathOrStand();
                self_1.animation = null;
                self_1.isWalk = false;
                self_1.sfxWalk.stop();
                self_1.onWalkEnd();
            });
        }
    };
    AbstractCharacter.prototype.runAnimationStand = function () {
        var skeleton = this.mesh.skeleton;
        if (!this.isStand && skeleton) {
            var self_2 = this;
            this.isStand = true;
            self_2.animation = skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true, 1, function () {
                self_2.animation = null;
                self_2.isStand = false;
                if (self_2.isDeath) {
                    self_2.runAnimationDeath();
                }
            });
        }
    };
    AbstractCharacter.prototype.runAnimationDeath = function () {
        this.animation = this.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_DEATH);
    };
    AbstractCharacter.prototype.runAnimationDeathOrStand = function () {
        if (this.isDeath) {
            this.runAnimationDeath();
        }
        else {
            this.runAnimationStand();
        }
    };
    AbstractCharacter.prototype.getWalkSpeed = function () {
        var animationRatio = this.game.getBabylonScene().getAnimationRatio();
        return this.statistics.walkSpeed / animationRatio;
    };
    ;
    /** Events */
    AbstractCharacter.prototype.onWalkStart = function () { };
    ;
    AbstractCharacter.prototype.onWalkEnd = function () { };
    ;
    AbstractCharacter.ANIMATION_WALK = 'Run';
    AbstractCharacter.ANIMATION_DEATH = 'death';
    AbstractCharacter.ANIMATION_STAND_WEAPON = 'Stand_with_weapon';
    AbstractCharacter.ANIMATION_ATTACK_01 = 'Attack';
    AbstractCharacter.ANIMATION_ATTACK_02 = 'Attack02';
    AbstractCharacter.ANIMATION_SKILL_01 = 'Skill01';
    AbstractCharacter.ANIMATION_SKILL_02 = 'Skill02';
    return AbstractCharacter;
}());
exports.AbstractCharacter = AbstractCharacter;


/***/ }),

/***/ "./src/game/Characters/Monster.ts":
/*!****************************************!*\
  !*** ./src/game/Characters/Monster.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCharacter_1 = __webpack_require__(/*! ./AbstractCharacter */ "./src/game/Characters/AbstractCharacter.ts");
var Blood_1 = __webpack_require__(/*! ../Particles/Blood */ "./src/game/Particles/Blood.ts");
var WalkSmoke_1 = __webpack_require__(/*! ../Particles/WalkSmoke */ "./src/game/Particles/WalkSmoke.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster(game, serverKey, serverData) {
        var _this = _super.call(this, serverData.name, game) || this;
        _this.statistics = serverData.statistics;
        _this.id = serverKey;
        _this.createBoxForMove(new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z));
        _this.createMesh(serverData.type, serverData.meshName, new BABYLON.Vector3(serverData.scale, serverData.scale, serverData.scale));
        _this.initSfx();
        _this.registerActions();
        _this.bloodParticles = new Blood_1.Blood(game, _this.mesh).particleSystem;
        _this.walkSmoke = WalkSmoke_1.WalkSmoke.getParticles(game.getBabylonScene(), 2, _this.mesh);
        _this.initPatricleSystemDamage();
        return _this;
    }
    Monster.prototype.createMesh = function (factoryName, meshName, scale) {
        var game = this.game;
        var mesh = game.getSceneManger().assets.getAssetFactoryByName(factoryName).createClone(meshName, true);
        mesh.rotation = new BABYLON.Vector3(0, Math.PI, 0);
        mesh.visibility = 1;
        mesh.isPickable = false;
        mesh.scaling = scale;
        mesh.skeleton.enableBlending(0.2);
        mesh.outlineColor = new BABYLON.Color3(0.3, 0, 0);
        mesh.outlineWidth = 0.1;
        mesh.parent = this.meshForMove;
        game.getSceneManger().options.addMeshToDynamicShadowGenerator(mesh);
        this.mesh = mesh;
    };
    Monster.prototype.registerActions = function () {
        var game = this.game;
        var self = this;
        this.meshForMove.actionManager = new BABYLON.ActionManager(this.game.getBabylonScene());
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
            self.mesh.renderOutline = false;
            self.game.gui.characterTopHp.hideHpBar();
        }));
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
            self.mesh.renderOutline = true;
            self.game.gui.characterTopHp.showHpCharacter(self);
        }));
        // this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
        //     BABYLON.ActionManager.OnPickDownTrigger, () => {
        //         game.player.attackActions.attackMonster(self);
        //     }));
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
            game.player.attackActions.attackMonster(self);
        }));
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickOutTrigger, function () {
            game.player.attackActions.abbadonMonsterAttack();
        }));
    };
    Monster.prototype.initSfx = function () {
        var game = this.game;
        this.sfxHit = new BABYLON.Sound("CharacterHit", "assets/sounds/character/hit.mp3", game.getBabylonScene(), null, {
            loop: false,
            autoplay: false
        });
        this.sfxWalk = new BABYLON.Sound("CharacterHit", null, game.getBabylonScene(), null, {
            loop: false,
            autoplay: false
        });
    };
    Monster.prototype.removeFromWorld = function () {
        if (this.intervalAttackRegisteredFunction) {
            clearInterval(this.intervalAttackRegisteredFunction);
        }
        var self = this;
        if (this.animation) {
            this.animation.stop();
        }
        var scene = this.game.getBabylonScene();
        delete this.game.player.monstersToAttack[this.id];
        if (this.game.controller.attackPoint == this.meshForMove) {
            this.game.player.attackActions.abbadonMonsterAttack();
        }
        self.meshForMove.dispose();
        self.walkSmoke.dispose();
        self.bloodParticles.dispose();
        var fireSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 1000 }, scene);
        fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", scene);
        fireSystem.emitter = self.meshForMove.position.clone(); // the starting object, the emitter
        fireSystem.minEmitBox = new BABYLON.Vector3(-1, 2, -1); // Starting all from
        fireSystem.maxEmitBox = new BABYLON.Vector3(1, 1, 1); // To...
        fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
        fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
        fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0);
        fireSystem.minSize = 0.3;
        fireSystem.maxSize = 0.6;
        fireSystem.minLifeTime = 0.2;
        fireSystem.maxLifeTime = 0.6;
        fireSystem.emitRate = 1000;
        fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        fireSystem.gravity = new BABYLON.Vector3(0, 20, 0);
        fireSystem.direction1 = new BABYLON.Vector3(0, 4, 0);
        fireSystem.direction2 = new BABYLON.Vector3(0, 8, 0);
        fireSystem.minAngularSpeed = 0;
        fireSystem.maxAngularSpeed = Math.PI;
        fireSystem.minEmitPower = 1;
        fireSystem.maxEmitPower = 2;
        fireSystem.layerMask = 2;
        fireSystem.start();
        var smokeSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 500 }, scene);
        smokeSystem.particleTexture = new BABYLON.Texture("assets/flare.png", scene);
        smokeSystem.emitter = self.meshForMove.position.clone();
        smokeSystem.minEmitBox = new BABYLON.Vector3(-0.8, 3, -0.8);
        smokeSystem.maxEmitBox = new BABYLON.Vector3(0.8, 1, 0.8);
        smokeSystem.color1 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
        smokeSystem.color2 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
        smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0);
        smokeSystem.minSize = 0.3;
        smokeSystem.maxSize = 1;
        smokeSystem.minLifeTime = 0.5;
        smokeSystem.maxLifeTime = 0.7;
        smokeSystem.emitRate = 5000;
        smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        smokeSystem.gravity = new BABYLON.Vector3(0, 20, 0);
        smokeSystem.direction1 = new BABYLON.Vector3(-1, 6, -1);
        smokeSystem.direction2 = new BABYLON.Vector3(0.5, 6, 0.5);
        smokeSystem.minAngularSpeed = 0;
        smokeSystem.maxAngularSpeed = Math.PI;
        smokeSystem.minEmitPower = 1;
        smokeSystem.maxEmitPower = 2;
        smokeSystem.layerMask = 2;
        smokeSystem.start();
        setTimeout(function () {
            smokeSystem.stop();
            fireSystem.stop();
        }, 500);
        setTimeout(function () {
            smokeSystem.dispose();
            fireSystem.dispose();
        }, 3000);
    };
    Monster.prototype.retrieveHit = function (updatedEnemy) {
        var self = this;
        if (this.statistics.hp != updatedEnemy.statistics.hp) {
            var damage_1 = (this.statistics.hp - updatedEnemy.statistics.hp);
            this.statistics.hp = updatedEnemy.statistics.hp;
            setTimeout(function () {
                self.bloodParticles.start();
                self.showDamage(damage_1);
                setTimeout(function () {
                    self.bloodParticles.stop();
                }, 100);
                if (self.statistics.hp <= 0) {
                    self.isDeath = true;
                    self.removeFromWorld();
                }
                self.game.gui.characterTopHp.refreshPanel();
            }, 400);
        }
    };
    Monster.prototype.onWalkStart = function () {
        this.walkSmoke.start();
    };
    Monster.prototype.onWalkEnd = function () {
        this.walkSmoke.stop();
    };
    return Monster;
}(AbstractCharacter_1.AbstractCharacter));
exports.Monster = Monster;


/***/ }),

/***/ "./src/game/Characters/Player.ts":
/*!***************************************!*\
  !*** ./src/game/Characters/Player.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCharacter_1 = __webpack_require__(/*! ./AbstractCharacter */ "./src/game/Characters/AbstractCharacter.ts");
var AttackActions_1 = __webpack_require__(/*! ../Actions/AttackActions */ "./src/game/Actions/AttackActions.ts");
var Inventory_1 = __webpack_require__(/*! ../Player/Inventory */ "./src/game/Player/Inventory.ts");
var GodRay_1 = __webpack_require__(/*! ../Effects/GodRay */ "./src/game/Effects/GodRay.ts");
var WalkSmoke_1 = __webpack_require__(/*! ../Particles/WalkSmoke */ "./src/game/Particles/WalkSmoke.ts");
var PlayerInformation_1 = __webpack_require__(/*! ../GUI/PlayerInformation */ "./src/game/GUI/PlayerInformation.ts");
var Blood_1 = __webpack_require__(/*! ../Particles/Blood */ "./src/game/Particles/Blood.ts");
var Main_1 = __webpack_require__(/*! ../GUI/Main */ "./src/game/GUI/Main.ts");
var SkillsManager_1 = __webpack_require__(/*! ../Player/Skills/SkillsManager */ "./src/game/Player/Skills/SkillsManager.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(game, registerMoving, serverData) {
        var _this = _super.call(this, serverData.activePlayer.name, game) || this;
        _this.isAlive = true;
        _this.monstersToAttack = [];
        _this.id = serverData.activePlayer.id;
        _this.setCharacterStatistics(serverData.activePlayer);
        _this.connectionId = serverData.connectionId;
        _this.isControllable = registerMoving;
        _this.initSfx();
        _this.createBoxForMove(new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z));
        _this.createMesh();
        _this.bloodParticles = new Blood_1.Blood(game, _this.mesh).particleSystem;
        _this.walkSmoke = WalkSmoke_1.WalkSmoke.getParticles(game.getBabylonScene(), 25, _this.mesh);
        _this.inventory = new Inventory_1.Inventory(game, _this);
        _this.inventory.setItems(serverData.activePlayer.items);
        if (_this.isControllable) {
            _this.mesh.isPickable = false;
            new Main_1.Main(game);
            _this.initServerData(serverData);
            _this.refreshCameraPosition();
            _this.refreshExperienceInGui();
            _this.createPlayerLight();
            _this.attackActions = new AttackActions_1.AttackActions(game);
        }
        _this.setCharacterSkills(serverData.skills);
        _this.initPatricleSystemDamage();
        _this.runAnimationStand();
        _this.guiPlayerInformation = new PlayerInformation_1.PlayerInformation(_this, game);
        _this.refreshHpInGui();
        _this.refreshEnergyInGui();
        return _this;
    }
    Player.prototype.initServerData = function (serverData) {
        this.experience = serverData.activePlayer.experience;
        this.gold = serverData.activePlayer.gold;
        this.keys = serverData.activePlayer.specialItems.length;
        this.experiencePercentages = serverData.activePlayer.experiencePercentages;
        this.lvl = serverData.activePlayer.lvl;
        this.freeAttributesPoints = serverData.activePlayer.freeAttributesPoints;
        this.freeSkillPoints = serverData.activePlayer.freeSkillPoints;
        this.name = serverData.activePlayer.name;
    };
    Player.prototype.createPlayerLight = function () {
        var game = this.game;
        var playerLight = new BABYLON.SpotLight("playerLightSpot", new BABYLON.Vector3(0, 45, 0), new BABYLON.Vector3(0, -1, 0), null, null, game.getBabylonScene());
        playerLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
        playerLight.angle = 0.7;
        playerLight.exponent = 70;
        playerLight.intensity = 0.8;
        playerLight.parent = this.mesh;
        //TODO: verify
        // playerLight.autoExtends = false;
        this.playerLight = playerLight;
    };
    Player.prototype.createMesh = function () {
        var game = this.game;
        var mesh = game.getSceneManger().assets.character.createClone('Warrior', true);
        mesh.skeleton.enableBlending(0.2);
        mesh.alwaysSelectAsActiveMesh = true;
        mesh.parent = this.meshForMove;
        mesh.actionManager = new BABYLON.ActionManager(game.getBabylonScene());
        this.mesh = mesh;
        mesh.skeleton.createAnimationRange('loopStrongAttack', 340, 350);
        mesh.skeleton.createAnimationRange('loopBlock', 70, 80);
        return mesh;
    };
    Player.prototype.initSfx = function () {
        var game = this.game;
        this.sfxWalk = new BABYLON.Sound("CharacterWalk", "assets/sounds/character/walk/1.mp3", game.getBabylonScene(), null, {
            loop: true,
            autoplay: false
        });
        this.sfxHit = new BABYLON.Sound("CharacterHit", "assets/sounds/character/hit.mp3", game.getBabylonScene(), null, {
            loop: false,
            autoplay: false
        });
    };
    Player.prototype.initGodRay = function () {
        GodRay_1.GodRay.createGodRay(this.game, this.meshForMove);
        return this;
    };
    Player.prototype.setCharacterStatistics = function (playerServerData) {
        this.statistics = playerServerData.statistics;
        this.statisticsAll = playerServerData.allStatistics;
        this.attributes = playerServerData.attributes;
    };
    Player.prototype.setCharacterSkills = function (skills) {
        skills = [
            {
                type: 1,
            },
            {
                type: 2,
            },
            {
                type: 3,
            },
            {
                type: 4,
            }
        ];
        var self = this;
        this.skills = [];
        if (skills) {
            skills.forEach(function (skill) {
                var playerSkill = SkillsManager_1.SkillsManager.getSkill(skill.type, self);
                self.skills[playerSkill.getType()] = playerSkill;
            });
        }
        return this;
    };
    Player.prototype.isAnySkillIsInUse = function () {
        var isInUse = false;
        this.skills.forEach(function (skill) {
            if (skill.isInUse === true) {
                isInUse = true;
                return true;
            }
        });
        if (isInUse === false && this.isAttack) {
            isInUse = true;
        }
        if (this.isDeath) {
            isInUse = true;
        }
        return isInUse;
    };
    Player.prototype.removeFromWorld = function () {
        this.guiPlayerInformation.container.dispose();
        this.mesh.dispose();
    };
    Player.prototype.refreshCameraPosition = function () {
        var camera = this.game.getBabylonScene().getCameraByName('gameCamera');
        camera.position = this.meshForMove.position.clone();
        camera.position.y = 18;
        camera.position.z -= 12;
        camera.position.x -= 12;
    };
    Player.prototype.refreshExperienceInGui = function () {
        this.game.gui.playerBottomPanel.expBar.width = this.experiencePercentages / 100;
        this.game.gui.playerBottomPanel.expBarText.text = this.experiencePercentages + '%';
    };
    Player.prototype.refreshEnergyInGui = function () {
        var percentage = Math.round(this.statistics.energy * 100 / this.statistics.energyMax);
        this.guiPlayerInformation.energyBar.width = percentage / 100;
        this.guiPlayerInformation.energyBarText.text = this.statistics.energy + ' / ' + this.statistics.energyMax;
    };
    Player.prototype.refreshHpInGui = function () {
        var percentage = Math.round(this.statistics.hp * 100 / this.statistics.hpMax);
        this.guiPlayerInformation.hpBar.width = percentage / 100;
        this.guiPlayerInformation.hpBarText.text = this.statistics.hp + ' / ' + this.statistics.hpMax;
    };
    Player.prototype.addExperience = function (experince, experiencePercentages) {
        this.experience += experince;
        this.experiencePercentages = experiencePercentages;
        this.refreshExperienceInGui();
    };
    Player.prototype.setNewLvl = function () {
        this.game.gui.playerLogsQuests.addText('New lvl ' + this.lvl + '', 'red');
        this.game.gui.playerLogsQuests.addText('You got 5 attribute points', 'red');
        this.game.gui.playerLogsQuests.addText('You got 1 skill point ' + this.lvl + '', 'red');
        this.refreshExperienceInGui();
        this.initGodRay();
    };
    Player.prototype.runPlayerToPosition = function (targetPointVector3) {
        if (this.isAnySkillIsInUse()) {
            return;
        }
        var self = this;
        var mesh = this.meshForMove;
        mesh.lookAt(targetPointVector3, Math.PI);
        this.unregisterMoveWithCollision(false);
        this.dynamicFunction = function () {
            if (mesh.intersectsPoint(targetPointVector3)) {
                self.game.getBabylonScene().unregisterBeforeRender(self.dynamicFunction);
                if (self.animation && self.animation.fromFrame == 130) {
                    self.animation.stop();
                }
            }
            else {
                var rotation = mesh.rotation;
                var forwards = new BABYLON.Vector3(-(Math.sin(rotation.y)) / self.getWalkSpeed(), 0, -(Math.cos(rotation.y)) / self.getWalkSpeed());
                mesh.moveWithCollisions(forwards);
                self.game.player.refreshCameraPosition();
                self.runAnimationWalk();
            }
        };
        var scene = this.game.getBabylonScene();
        if (scene) {
            scene.registerBeforeRender(this.dynamicFunction);
        }
    };
    Player.prototype.unregisterMoveWithCollision = function (emitPosition) {
        var scene = this.game.getBabylonScene();
        if (this.dynamicFunction !== undefined && scene) {
            scene.unregisterBeforeRender(this.dynamicFunction);
        }
        if (emitPosition) {
            this.game.socketClient.socket.emit('setTargetPoint', {
                position: this.meshForMove.position
            });
        }
    };
    Player.prototype.onWalkStart = function () {
        this.walkSmoke.start();
    };
    Player.prototype.onWalkEnd = function () {
        this.walkSmoke.stop();
    };
    return Player;
}(AbstractCharacter_1.AbstractCharacter));
exports.Player = Player;


/***/ }),

/***/ "./src/game/Characters/npc/AbstractNpc.ts":
/*!************************************************!*\
  !*** ./src/game/Characters/npc/AbstractNpc.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCharacter_1 = __webpack_require__(/*! ../AbstractCharacter */ "./src/game/Characters/AbstractCharacter.ts");
var Inventory_1 = __webpack_require__(/*! ../../Player/Inventory */ "./src/game/Player/Inventory.ts");
var ItemManager_1 = __webpack_require__(/*! ../../Player/Items/ItemManager */ "./src/game/Player/Items/ItemManager.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var AbstractNpc = /** @class */ (function (_super) {
    __extends(AbstractNpc, _super);
    function AbstractNpc(game, name, position, rotation) {
        var _this = _super.call(this, name, game) || this;
        game.getSceneManger().npcs.push(_this);
        var self = _this;
        _this.mesh.position = position;
        _this.mesh.rotation = rotation;
        _this.mesh.actionManager = new BABYLON.ActionManager(_this.game.getBabylonScene());
        _this.mesh.isPickable = true;
        _this.statistics = {
            hpMax: 1000,
            hp: 1000
        };
        _this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
            self.game.gui.characterTopHp.hideHpBar();
        }));
        _this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
            self.game.gui.characterTopHp.showHpCharacter(self);
        }));
        _this.runAnimationStand();
        return _this;
    }
    AbstractNpc.prototype.removeFromWorld = function () {
        this.mesh.dispose();
        this.tooltip.dispose();
    };
    /**
     *
     * @param inventoryItems
     */
    AbstractNpc.prototype.setItems = function (inventoryItems) {
        this.inventory = new Inventory_1.Inventory(this.game, this);
        if (inventoryItems) {
            var itemManager = new ItemManager_1.ItemManager(this.game);
            itemManager.initItemsFromDatabaseOnCharacter(inventoryItems, this.inventory, true);
        }
    };
    return AbstractNpc;
}(AbstractCharacter_1.AbstractCharacter));
exports.AbstractNpc = AbstractNpc;


/***/ }),

/***/ "./src/game/Characters/npc/Guard.ts":
/*!******************************************!*\
  !*** ./src/game/Characters/npc/Guard.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractNpc_1 = __webpack_require__(/*! ./AbstractNpc */ "./src/game/Characters/npc/AbstractNpc.ts");
var Guard = /** @class */ (function (_super) {
    __extends(Guard, _super);
    function Guard(game, position, rotation) {
        var _this = this;
        // @ts-ignore
        _this.mesh = game.getSceneManger().assets.character.createClone('Warrior', true);
        _this = _super.call(this, game, 'Guard', position, rotation) || this;
        var items = [
            {
                meshName: 'Axe.001',
                entity: {
                    equip: 1
                }
            },
            {
                meshName: 'Shield',
                entity: {
                    equip: 1
                }
            },
            {
                meshName: 'Helm',
                entity: {
                    equip: 1
                }
            }
        ];
        _this.setItems(items);
        return _this;
    }
    return Guard;
}(AbstractNpc_1.AbstractNpc));
exports.Guard = Guard;


/***/ }),

/***/ "./src/game/Characters/selectCharacter/Warrior.ts":
/*!********************************************************!*\
  !*** ./src/game/Characters/selectCharacter/Warrior.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCharacter_1 = __webpack_require__(/*! ../AbstractCharacter */ "./src/game/Characters/AbstractCharacter.ts");
var Inventory_1 = __webpack_require__(/*! ../../Player/Inventory */ "./src/game/Player/Inventory.ts");
var ItemManager_1 = __webpack_require__(/*! ../../Player/Items/ItemManager */ "./src/game/Player/Items/ItemManager.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(game, place, playerDatabase) {
        var _this = _super.call(this, 'Warrior', game) || this;
        _this.playerId = playerDatabase.id;
        var mesh = game.getSceneManger().assets.character.createClone('Warrior', true);
        mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
        mesh.skeleton.enableBlending(0.3);
        switch (place) {
            case 0:
                mesh.position = new BABYLON.Vector3(-0.3, 0, 10.5);
                mesh.rotation = new BABYLON.Vector3(0, 0, 0);
                break;
            case 1:
                mesh.position = new BABYLON.Vector3(2.7, 0, 10);
                mesh.rotation = new BABYLON.Vector3(0, 0.1, 0);
                break;
        }
        _this.mesh = mesh;
        _this.setItems(playerDatabase.items);
        _this.mesh.skeleton.beginAnimation('Sit');
        _this.registerActions();
        return _this;
    }
    Warrior.prototype.setItems = function (inventoryItems) {
        this.inventory = new Inventory_1.Inventory(this.game, this);
        if (inventoryItems) {
            var itemManager = new ItemManager_1.ItemManager(this.game);
            itemManager.initItemsFromDatabaseOnCharacter(inventoryItems, this.inventory, true);
        }
    };
    Warrior.prototype.removeFromWorld = function () {
    };
    Warrior.prototype.registerActions = function () {
        var self = this;
        var pointerOut = false;
        var clicked = false;
        this.meshForMove = BABYLON.MeshBuilder.CreateBox(this.name + '_selectBox', {
            width: 2,
            height: 5,
            size: 2
        }, this.game.getBabylonScene());
        this.meshForMove.checkCollisions = false;
        this.meshForMove.visibility = 0;
        this.meshForMove.isPickable = true;
        this.meshForMove.parent = this.mesh;
        this.meshForMove.position.y = 2;
        var sitDown = function () {
            if (!self.skeletonAnimation) {
                var animationSelectRange = self.mesh.skeleton.getAnimationRange('Select');
                self.skeletonAnimation = self.game.getBabylonScene().beginAnimation(self.mesh, animationSelectRange.to, animationSelectRange.from + 1, false, -1, function () {
                    self.mesh.skeleton.beginAnimation('Sit');
                    self.skeletonAnimation = null;
                });
            }
        };
        this.meshForMove.actionManager = new BABYLON.ActionManager(this.game.getBabylonScene());
        this.meshForMove.isPickable = true;
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
            pointerOut = false;
            if (!self.skeletonAnimation) {
                self.skeletonAnimation = self.mesh.skeleton.beginAnimation('Select', false, 1, function () {
                    self.skeletonAnimation = null;
                    if (pointerOut) {
                        sitDown();
                    }
                    else {
                        self.mesh.skeleton.beginAnimation(AbstractCharacter_1.AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                    }
                });
            }
        }));
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
            sitDown();
            pointerOut = true;
        }));
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function () {
            if (!clicked) {
                clicked = true;
                self.game.socketClient.socket.emit('selectCharacter', self.playerId);
            }
        }));
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickOutTrigger, function () {
            if (!clicked) {
                clicked = true;
                self.game.socketClient.socket.emit('selectCharacter', self.playerId);
            }
        }));
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            if (!clicked) {
                clicked = true;
                self.game.socketClient.socket.emit('selectCharacter', self.playerId);
            }
        }));
    };
    return Warrior;
}(AbstractCharacter_1.AbstractCharacter));
exports.Warrior = Warrior;


/***/ }),

/***/ "./src/game/Controllers/Mouse.ts":
/*!***************************************!*\
  !*** ./src/game/Controllers/Mouse.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClickParticles_1 = __webpack_require__(/*! ../Particles/Pointer/ClickParticles */ "./src/game/Particles/Pointer/ClickParticles.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Mouse = /** @class */ (function () {
    function Mouse(game) {
        this.game = game;
    }
    Mouse.prototype.registerControls = function (scene) {
        var self = this;
        var clickTrigger = false;
        var lastUpdate = new Date().getTime() / 1000;
        var game = this.game;
        var clickParticleSystem = ClickParticles_1.ClickParticles.getParticles(scene);
        scene.onPointerUp = function (evt, pickResult) {
            if (clickTrigger) {
                clickTrigger = false;
                var pickedMesh = pickResult.pickedMesh;
                if (pickedMesh && (pickedMesh.name.search("Ground") >= 0)) {
                    clickParticleSystem.start();
                }
            }
        };
        scene.onPointerDown = function (evt, pickResult) {
            var pickedMesh = pickResult.pickedMesh;
            game.player.attackActions.abbadonMonsterAttack();
            if (!self.game.player.isAlive || game.player.isAnySkillIsInUse()) {
                return;
            }
            clickTrigger = true;
            if (pickedMesh && (pickedMesh.name.search("Ground") >= 0)) {
                scene.onBeforeRenderObservable.remove(game.getSceneManger().goToAction);
                self.attackPoint = null;
                self.targetPoint = pickResult.pickedPoint;
                self.targetPoint.y = 0;
                clickParticleSystem.emitter = new BABYLON.Vector3(self.targetPoint.x, 0, self.targetPoint.z); // the starting location
                self.game.player.runPlayerToPosition(self.targetPoint);
                self.game.socketClient.socket.emit('setTargetPoint', {
                    position: self.targetPoint
                });
            }
        };
        scene.onPointerMove = function (evt, pickResult) {
            if (clickTrigger) {
                if (!self.game.player.isAlive) {
                    return;
                }
                var pickedMesh = pickResult.pickedMesh;
                if (pickedMesh && self.targetPoint) {
                    if (self.game.player) {
                        self.targetPoint = pickResult.pickedPoint;
                        self.targetPoint.y = 0;
                        clickParticleSystem.emitter = new BABYLON.Vector3(self.targetPoint.x, 0, self.targetPoint.z);
                        self.game.player.runPlayerToPosition(self.targetPoint);
                        if (lastUpdate < (new Date().getTime() / 500) - 0.3) {
                            lastUpdate = (new Date().getTime() / 500);
                            self.game.socketClient.socket.emit('setTargetPoint', {
                                position: self.targetPoint
                            });
                        }
                    }
                }
            }
        };
    };
    return Mouse;
}());
exports.Mouse = Mouse;


/***/ }),

/***/ "./src/game/Effects/GodRay.ts":
/*!************************************!*\
  !*** ./src/game/Effects/GodRay.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var GodRay = /** @class */ (function () {
    function GodRay() {
    }
    GodRay.createGodRay = function (game, mesh) {
        var engine = game.engine;
        var scene = game.getBabylonScene();
        var camera = game.getBabylonScene().getCameraByName('gameCamera');
        var fireMaterial = new BABYLON.StandardMaterial("godrayMaterial", scene);
        var fireTexture = new BABYLON.Texture("assets/Smoke3.png", scene);
        fireTexture.hasAlpha = true;
        fireMaterial.alpha = 0.1;
        fireMaterial.emissiveTexture = fireTexture;
        fireMaterial.diffuseTexture = fireTexture;
        fireMaterial.opacityTexture = fireTexture;
        fireMaterial.specularPower = 1;
        fireMaterial.backFaceCulling = false;
        var box = BABYLON.Mesh.CreatePlane("godRayPlane", 16, scene, true);
        box.visibility = 1;
        box.rotation = new BABYLON.Vector3(-Math.PI / 2, 0, 0);
        box.material = fireMaterial;
        box.layerMask = 2;
        var godrays = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1, camera, box, 128, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);
        godrays.useCustomMeshPosition = true;
        godrays.setCustomMeshPosition(new BABYLON.Vector3(0, 15.0, 0));
        godrays.invert = false;
        godrays.exposure = 0.8;
        godrays.decay = 1;
        godrays.weight = 0;
        godrays.density = 0.5;
        var startHiding = false;
        var timeoutFunction;
        var showGodRay = function () {
            box.position = mesh.position.clone();
            box.position.y += 0.1;
            godrays.setCustomMeshPosition(mesh.position.clone());
            godrays.customMeshPosition.y = 15;
            box.rotate(new BABYLON.Vector3(0, 5, 0), 0.02, BABYLON.Space.WORLD);
            if (godrays.weight >= 0.3 && !timeoutFunction) {
                timeoutFunction = setTimeout(function () {
                    startHiding = true;
                }, 4000);
            }
            if (startHiding) {
                godrays.weight -= 0.01;
                if (godrays.weight <= 0) {
                    godrays.dispose(camera);
                    box.dispose();
                    scene.unregisterBeforeRender(showGodRay);
                }
            }
            else if (godrays.weight <= 0.3) {
                godrays.weight += 0.02;
            }
        };
        scene.registerBeforeRender(showGodRay);
    };
    return GodRay;
}());
exports.GodRay = GodRay;


/***/ }),

/***/ "./src/game/Environment/AbstractEnvironment.ts":
/*!*****************************************************!*\
  !*** ./src/game/Environment/AbstractEnvironment.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Collisions_1 = __webpack_require__(/*! ../Initializers/Collisions */ "./src/game/Initializers/Collisions.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var AbstractEnvironment = /** @class */ (function () {
    function AbstractEnvironment() {
        this.staticShadowObjects = [];
        this.colliders = [];
    }
    AbstractEnvironment.prototype.createDefaultLight = function (scene) {
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.6;
        light.position = new BABYLON.Vector3(0, 50, 0);
        light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
        light.shadowMaxZ = 500;
        this.light = light;
    };
    AbstractEnvironment.prototype.registerColliders = function (scene) {
        for (var i = 0; i < this.colliders.length; i++) {
            var sceneMeshCollider = this.colliders[i];
            Collisions_1.Collisions.setCollider(scene, sceneMeshCollider);
        }
    };
    AbstractEnvironment.prototype.freezeAllMeshes = function (scene) {
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            sceneMesh.freezeWorldMatrix();
            sceneMesh.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY;
        }
    };
    return AbstractEnvironment;
}());
exports.AbstractEnvironment = AbstractEnvironment;


/***/ }),

/***/ "./src/game/Environment/Fog/Fog.ts":
/*!*****************************************!*\
  !*** ./src/game/Environment/Fog/Fog.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Fog = /** @class */ (function () {
    function Fog() {
    }
    Fog.addFog = function (scene) {
        scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        scene.fogColor = new BABYLON.Color3(0, 0, 0);
        scene.fogDensity = 1;
        scene.fogStart = 30;
        scene.fogEnd = 50;
        return this;
    };
    Fog.disableFog = function (scene) {
        scene.fogMode = BABYLON.Scene.FOGMODE_NONE;
    };
    return Fog;
}());
exports.Fog = Fog;


/***/ }),

/***/ "./src/game/Environment/environmentForestHouse.ts":
/*!********************************************************!*\
  !*** ./src/game/Environment/environmentForestHouse.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractEnvironment_1 = __webpack_require__(/*! ./AbstractEnvironment */ "./src/game/Environment/AbstractEnvironment.ts");
var Nature_1 = __webpack_require__(/*! ../Particles/SolidParticleSystem/Nature */ "./src/game/Particles/SolidParticleSystem/Nature.ts");
var NatureBlock_1 = __webpack_require__(/*! ../Particles/SolidParticleSystem/NatureBlock */ "./src/game/Particles/SolidParticleSystem/NatureBlock.ts");
var babylonjs_materials_1 = __webpack_require__(/*! babylonjs-materials */ "./node_modules/babylonjs-materials/babylonjs.materials.min.js");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var EnvironmentForestHouse = /** @class */ (function (_super) {
    __extends(EnvironmentForestHouse, _super);
    function EnvironmentForestHouse(game) {
        var _this = _super.call(this) || this;
        var scene = game.getBabylonScene();
        var self = _this;
        var spsTrees = [];
        var spsPlants = [];
        var spsStones = [];
        var spsFern = [];
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                _this.ground = sceneMesh;
                var terrainMaterial = new babylonjs_materials_1.TerrainMaterial("terrainMaterial", scene);
                terrainMaterial.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
                terrainMaterial.specularPower = 64;
                terrainMaterial.mixTexture = new BABYLON.Texture("assets/scenes/Forest_house/stencil.png", scene);
                terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/scenes/Forest_house/dirt.jpg", scene);
                terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/scenes/Forest_house/groundSeamless.jpg", scene);
                terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 10;
                terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 10;
                terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 15;
                sceneMesh.material = terrainMaterial;
            }
            else if (meshName.search("Box_Cube") >= 0) {
                _this.colliders.push(sceneMesh);
            }
            else if (meshName.search("sps_trees") >= 0) {
                spsTrees.push(sceneMesh);
            }
            else if (meshName.search("sps_groundPlants") >= 0) {
                spsPlants.push(sceneMesh);
            }
            else if (meshName.search("sps_stones") >= 0) {
                spsStones.push(sceneMesh);
            }
            else if (meshName.search("sps_fern") >= 0) {
                spsFern.push(sceneMesh);
            }
            else {
                sceneMesh.isPickable = false;
                self.staticShadowObjects.push(sceneMesh);
            }
        }
        //SPS Nature
        var spruce = game.getSceneManger().assets.natureGrain.createClone('spruce', false);
        spruce.visibility = 0;
        spruce.material.freeze();
        var groundPlants = game.getSceneManger().assets.natureGrain.createClone('ground_plants', false);
        groundPlants.visibility = 0;
        groundPlants.material.freeze();
        var fern = game.getSceneManger().assets.natureGrain.createClone('fern', false);
        fern.visibility = 0;
        fern.material.freeze();
        var stone = game.getSceneManger().assets.natureGrain.createClone('stone', false);
        stone.visibility = 0;
        stone.material.freeze();
        spsTrees.forEach(function (parentSPS) {
            var spsSpruce = new Nature_1.Nature(game, parentSPS, spruce, false);
            spsSpruce.buildSPS(67);
            self.staticShadowObjects.push(spsSpruce.spsMesh);
        });
        spsPlants.forEach(function (parentSPS) {
            var spsSpruce = new Nature_1.Nature(game, parentSPS, groundPlants, false);
            spsSpruce.buildSPS(40);
            self.staticShadowObjects.push(spsSpruce.spsMesh);
        });
        spsStones.forEach(function (parentSPS) {
            var spsSpruce = new Nature_1.Nature(game, parentSPS, stone, false);
            spsSpruce.buildSPS(67);
            self.staticShadowObjects.push(spsSpruce.spsMesh);
        });
        spsFern.forEach(function (parentSPS) {
            var spsSpruce = new Nature_1.Nature(game, parentSPS, fern, false);
            spsSpruce.buildSPS(67);
            self.staticShadowObjects.push(spsSpruce.spsMesh);
        });
        var spsToBlock = scene.getMeshByName("sps_border");
        var spsSpruceBlock = new NatureBlock_1.NatureBlock(game, spsToBlock, spruce);
        spsSpruceBlock.buildSPS(500);
        self.staticShadowObjects.push(spsSpruceBlock.spsMesh);
        stone.dispose();
        spruce.dispose();
        groundPlants.dispose();
        fern.dispose();
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 50, 0);
        light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
        light.shadowMaxZ = 500;
        _this.light = light;
        ///register colliders
        _this.registerColliders(scene);
        _this.freezeAllMeshes(scene);
        new BABYLON.Sound("Forest night", "assets/sounds/fx/wind.mp3", scene, null, {
            loop: true,
            autoplay: true,
            volume: 0.1
        });
        new BABYLON.Sound("Forest night", "assets/sounds/forest_night.mp3", scene, null, {
            loop: true,
            autoplay: true,
            volume: 0.3
        });
        scene.getMeshByName('exit').dispose();
        var exitPlane = scene.getMeshByName('Entrace_Tomb').clone("exit", null);
        exitPlane.position = new BABYLON.Vector3(-196.78, 0, -95.6);
        exitPlane.rotation = new BABYLON.Vector3(0, -1.5, 0);
        return _this;
    }
    EnvironmentForestHouse.prototype.createStecnil = function (scene) {
    };
    return EnvironmentForestHouse;
}(AbstractEnvironment_1.AbstractEnvironment));
exports.EnvironmentForestHouse = EnvironmentForestHouse;


/***/ }),

/***/ "./src/game/Environment/environmentForestHouseStart.ts":
/*!*************************************************************!*\
  !*** ./src/game/Environment/environmentForestHouseStart.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractEnvironment_1 = __webpack_require__(/*! ./AbstractEnvironment */ "./src/game/Environment/AbstractEnvironment.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var EnvironmentForestHouseStart = /** @class */ (function (_super) {
    __extends(EnvironmentForestHouseStart, _super);
    function EnvironmentForestHouseStart(game) {
        var _this = _super.call(this) || this;
        var scene = game.getBabylonScene();
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
            }
            else if (meshName.search("Box_Cube") >= 0) {
                _this.colliders.push(sceneMesh);
            }
            else {
                sceneMesh.isPickable = false;
                _this.staticShadowObjects.push(sceneMesh);
            }
        }
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.position = new BABYLON.Vector3(0, 80, -210);
        light.direction = new BABYLON.Vector3(0.45, -0.45, 0.45);
        light.shadowMaxZ = 500;
        light.autoUpdateExtends = false;
        _this.light = light;
        _this.freezeAllMeshes(scene);
        _this.registerColliders(scene);
        new BABYLON.Sound("Forest night", "assets/sounds/fx/wind.mp3", scene, null, {
            loop: true,
            autoplay: true,
            volume: 0.3
        });
        return _this;
    }
    EnvironmentForestHouseStart.prototype.createStecnil = function (scene) {
    };
    return EnvironmentForestHouseStart;
}(AbstractEnvironment_1.AbstractEnvironment));
exports.EnvironmentForestHouseStart = EnvironmentForestHouseStart;


/***/ }),

/***/ "./src/game/Environment/environmentForestHouseTomb.ts":
/*!************************************************************!*\
  !*** ./src/game/Environment/environmentForestHouseTomb.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractEnvironment_1 = __webpack_require__(/*! ./AbstractEnvironment */ "./src/game/Environment/AbstractEnvironment.ts");
var Collisions_1 = __webpack_require__(/*! ../Initializers/Collisions */ "./src/game/Initializers/Collisions.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var EnvironmentForestHouseTomb = /** @class */ (function (_super) {
    __extends(EnvironmentForestHouseTomb, _super);
    function EnvironmentForestHouseTomb(game, scene) {
        var _this = _super.call(this) || this;
        var self = _this;
        _this.colliders = [];
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                //TODO: fix material
                // sceneMesh.material.diffuseTexture.uScale = 1.2;
                // sceneMesh.material.diffuseTexture.vScale = 1.2;
                _this.ground = sceneMesh;
            }
            else if (meshName.search("Box_Cube") >= 0) {
                _this.colliders.push(sceneMesh);
            }
            else {
                sceneMesh.isPickable = false;
            }
        }
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 80, -210);
        light.direction = new BABYLON.Vector3(0.45, -0.45, 0.45);
        ///register colliders
        for (var i = 0; i < _this.colliders.length; i++) {
            var sceneMeshCollider = _this.colliders[i];
            Collisions_1.Collisions.setCollider(scene, sceneMeshCollider);
        }
        //Freeze world matrix all static meshes
        for (var i = 0; i < scene.meshes.length; i++) {
            scene.meshes[i].freezeWorldMatrix();
        }
        return _this;
    }
    EnvironmentForestHouseTomb.prototype.createStecnil = function (scene) {
    };
    return EnvironmentForestHouseTomb;
}(AbstractEnvironment_1.AbstractEnvironment));
exports.EnvironmentForestHouseTomb = EnvironmentForestHouseTomb;


/***/ }),

/***/ "./src/game/Environment/environmentMountainsPass.ts":
/*!**********************************************************!*\
  !*** ./src/game/Environment/environmentMountainsPass.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractEnvironment_1 = __webpack_require__(/*! ./AbstractEnvironment */ "./src/game/Environment/AbstractEnvironment.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var babylonjs_materials_1 = __webpack_require__(/*! babylonjs-materials */ "./node_modules/babylonjs-materials/babylonjs.materials.min.js");
var EnvironmentMountainsPass = /** @class */ (function (_super) {
    __extends(EnvironmentMountainsPass, _super);
    function EnvironmentMountainsPass(game) {
        var _this = _super.call(this) || this;
        var scene = game.getBabylonScene();
        _this.colliders = [];
        scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                sceneMesh.alwaysSelectAsActiveMesh = true;
                var terrainMaterial = new babylonjs_materials_1.TerrainMaterial("terrainMaterial", scene);
                terrainMaterial.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
                terrainMaterial.specularPower = 64;
                terrainMaterial.mixTexture = new BABYLON.Texture("assets/scenes/MountainsPass/stencil.jpg", scene);
                terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/scenes/Forest_house/dirt.jpg", scene);
                terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 20;
                terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 20;
                terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 20;
                sceneMesh.material = terrainMaterial;
            }
            else if (meshName.search("Box_Cube") >= 0) {
                _this.colliders.push(sceneMesh);
            }
            else {
                sceneMesh.isPickable = false;
                if (meshName.search("Rock") >= 0) {
                    continue;
                }
                _this.staticShadowObjects.push(sceneMesh);
            }
        }
        // let cone = scene.getMeshByName("fireplace.002");
        // if (cone) {
        //     let smokeSystem = new Particles.FireplaceSmoke(game, cone).particleSystem;
        //     smokeSystem.start();
        //
        //     let fireSystem = new Particles.FireplaceFire(game, cone).particleSystem;
        //     fireSystem.start();
        //
        //     let sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
        //     sfxFireplace.attachToMesh(cone);
        // }
        //TODO: delete in bledner
        // scene.getLightByName('Lamp').dispose();
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.6;
        light.position = new BABYLON.Vector3(0, 50, 0);
        light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
        light.shadowMaxZ = 500;
        _this.light = light;
        _this.registerColliders(scene);
        _this.freezeAllMeshes(scene);
        return _this;
    }
    EnvironmentMountainsPass.prototype.createStecnil = function (scene) {
    };
    return EnvironmentMountainsPass;
}(AbstractEnvironment_1.AbstractEnvironment));
exports.EnvironmentMountainsPass = EnvironmentMountainsPass;


/***/ }),

/***/ "./src/game/Environment/environmentSelectCharacter.ts":
/*!************************************************************!*\
  !*** ./src/game/Environment/environmentSelectCharacter.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FireplaceSmoke_1 = __webpack_require__(/*! ../Particles/FireplaceSmoke */ "./src/game/Particles/FireplaceSmoke.ts");
var FireplaceFire_1 = __webpack_require__(/*! ../Particles/FireplaceFire */ "./src/game/Particles/FireplaceFire.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var EnvironmentSelectCharacter = /** @class */ (function () {
    function EnvironmentSelectCharacter(game, scene) {
        ////LIGHT
        var light = game.getBabylonScene().lights[0];
        light.dispose();
        var fireplaceLight = new BABYLON.PointLight("fireplaceLight", new BABYLON.Vector3(0, 2.5, 0), scene);
        fireplaceLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
        fireplaceLight.range = 50;
        var intensityAnimation = new BABYLON.Animation("mainLightIntensity", "intensity", 50, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        intensityAnimation.setKeys([
            {
                frame: 0,
                value: 0.85
            },
            {
                frame: 5,
                value: 0.9
            },
            {
                frame: 10,
                value: 0.82
            }
        ]);
        var colorAnimation = new BABYLON.Animation("mainLightColor", "specular", 50, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        colorAnimation.setKeys([
            {
                frame: 20,
                value: new BABYLON.Color3(1, 1, 1),
            },
            {
                frame: 25,
                value: new BABYLON.Color3(1, 0, 1),
            },
            {
                frame: 30,
                value: new BABYLON.Color3(1, 1, 1),
            }
        ]);
        fireplaceLight.animations = [];
        fireplaceLight.animations.push(intensityAnimation);
        game.getBabylonScene().beginAnimation(fireplaceLight, 0, 10, true);
        var shadowGenerator = new BABYLON.ShadowGenerator(1024, fireplaceLight);
        shadowGenerator.getShadowMap().refreshRate = 0;
        this.shadowGenerator = shadowGenerator;
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Forest_ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                //TODO: fix color
                // sceneMesh.material.emissiveColor = new BABYLON.Vector3(0.05,0.05,0.05);
                continue;
            }
            shadowGenerator.getShadowMap().renderList.push(sceneMesh);
        }
        var cone = scene.getMeshByName("Fireplace");
        if (cone) {
            fireplaceLight.parent = cone;
            var smokeSystem = new FireplaceSmoke_1.FireplaceSmoke(game, cone).particleSystem;
            smokeSystem.start();
            var fireSystem = new FireplaceFire_1.FireplaceFire(game, cone).particleSystem;
            fireSystem.start();
            var sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
            sfxFireplace.attachToMesh(cone);
        }
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            sceneMesh.freezeWorldMatrix();
            sceneMesh.isPickable = false;
        }
        new BABYLON.Sound("Forest night", "assets/sounds/music/theme.mp3", scene, null, { loop: true, autoplay: true, volume: 1 });
    }
    return EnvironmentSelectCharacter;
}());
exports.EnvironmentSelectCharacter = EnvironmentSelectCharacter;


/***/ }),

/***/ "./src/game/Events/Events.ts":
/*!***********************************!*\
  !*** ./src/game/Events/Events.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Events = /** @class */ (function () {
    function Events() {
        this.playerConnected = new Event(Events.PLAYER_CONNECTED);
    }
    Events.PLAYER_CONNECTED = 'playerConnected';
    return Events;
}());
exports.Events = Events;


/***/ }),

/***/ "./src/game/GUI/Main.ts":
/*!******************************!*\
  !*** ./src/game/GUI/Main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlayerBottomPanel_1 = __webpack_require__(/*! ./PlayerBottomPanel */ "./src/game/GUI/PlayerBottomPanel.ts");
var PlayerQuestsPanel_1 = __webpack_require__(/*! ./PlayerQuestsPanel */ "./src/game/GUI/PlayerQuestsPanel.ts");
var PlayerQuestInformation_1 = __webpack_require__(/*! ./PlayerQuestInformation */ "./src/game/GUI/PlayerQuestInformation.ts");
var RoomInformation_1 = __webpack_require__(/*! ./RoomInformation */ "./src/game/GUI/RoomInformation.ts");
var ShowHp_1 = __webpack_require__(/*! ./ShowHp */ "./src/game/GUI/ShowHp.ts");
var Options_1 = __webpack_require__(/*! ./popup/Options */ "./src/game/GUI/popup/Options.ts");
var Inventory_1 = __webpack_require__(/*! ./popup/Inventory */ "./src/game/GUI/popup/Inventory.ts");
var Attributes_1 = __webpack_require__(/*! ./popup/Attributes */ "./src/game/GUI/popup/Attributes.ts");
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var Main = /** @class */ (function () {
    function Main(game) {
        this.game = game;
        game.gui = this;
        this.texture = babylonjs_gui_1.AdvancedDynamicTexture.CreateFullscreenUI('gui.main');
        this.texture.layer.layerMask = 1;
        this.playerBottomPanel = new PlayerBottomPanel_1.PlayerBottomPanel(game);
        this.playerLogsQuests = new PlayerQuestsPanel_1.PlayerQuestsPanel(game);
        this.playerQuestInformation = new PlayerQuestInformation_1.PlayerQuestInformation(game);
        this.roomInformaton = new RoomInformation_1.RoomInformation(game);
        this.characterTopHp = new ShowHp_1.ShowHp(game);
        this.attributes = new Attributes_1.Attributes(this);
        this.inventory = new Inventory_1.Inventory(this);
        this.options = new Options_1.Options(this);
    }
    return Main;
}());
exports.Main = Main;


/***/ }),

/***/ "./src/game/GUI/PlayerBottomPanel.ts":
/*!*******************************************!*\
  !*** ./src/game/GUI/PlayerBottomPanel.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var PlayerBottomPanel = /** @class */ (function () {
    function PlayerBottomPanel(game) {
        var self = this;
        var texture = game.gui.texture;
        var container = new babylonjs_gui_1.Rectangle('gui.panel.bottom');
        container.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        container.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        container.width = '685px';
        container.height = '80px';
        container.isPointerBlocker = true;
        container.thickness = 0;
        this.container = container;
        texture.addControl(container);
        var toolbar = new babylonjs_gui_1.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar.png');
        toolbar.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        toolbar.height = '65px';
        container.addControl(toolbar);
        var containerSliders = new babylonjs_gui_1.Rectangle('gui.panel.bottom');
        containerSliders.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        containerSliders.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        containerSliders.width = '605px';
        containerSliders.height = '48px';
        containerSliders.isPointerBlocker = true;
        containerSliders.thickness = 0;
        container.addControl(containerSliders);
        var toolbarExp = new babylonjs_gui_1.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_exp.png');
        toolbarExp.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        toolbarExp.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
        toolbarExp.width = 1;
        toolbarExp.height = '14px';
        toolbarExp.top = '0px';
        this.expBar = toolbarExp;
        containerSliders.addControl(toolbarExp);
        var textBlockExp = new babylonjs_gui_1.TextBlock();
        textBlockExp.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        textBlockExp.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
        textBlockExp.top = '-1px';
        textBlockExp.width = 1;
        textBlockExp.height = '14px';
        textBlockExp.color = "white";
        textBlockExp.fontSize = 12;
        textBlockExp.fontFamily = "RuslanDisplay";
        this.expBarText = textBlockExp;
        containerSliders.addControl(textBlockExp);
        var gridSpecials = new babylonjs_gui_1.Grid();
        gridSpecials.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        gridSpecials.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        gridSpecials.width = '225px';
        gridSpecials.height = '52px';
        gridSpecials.top = '-6px';
        gridSpecials.left = '0px';
        gridSpecials.addColumnDefinition(1);
        gridSpecials.addColumnDefinition(1);
        gridSpecials.addColumnDefinition(1);
        gridSpecials.addColumnDefinition(1);
        container.addControl(gridSpecials);
        self.guiGridSkills = gridSpecials;
        var buttonAttributes = babylonjs_gui_1.Button.CreateImageOnlyButton("button.attributes", "assets/gui/buttons/attributes.png");
        buttonAttributes.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
        buttonAttributes.width = '112px';
        buttonAttributes.height = '21px';
        buttonAttributes.thickness = 0;
        buttonAttributes.top = '-7px';
        buttonAttributes.left = '93px';
        container.addControl(buttonAttributes);
        buttonAttributes.onPointerUpObservable.add(function () {
            if (!game.gui.attributes.opened) {
                game.gui.attributes.open();
            }
        });
        var buttonSkills = babylonjs_gui_1.Button.CreateImageOnlyButton("button.skills", "assets/gui/buttons/skills.png");
        buttonSkills.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
        buttonSkills.width = '112px';
        buttonSkills.height = '21px';
        buttonSkills.thickness = 0;
        buttonSkills.top = '20px';
        buttonSkills.left = '93px';
        container.addControl(buttonSkills);
        buttonSkills.onPointerUpObservable.add(function () {
            game.player.initGodRay();
        });
        var buttonInventory = babylonjs_gui_1.Button.CreateImageOnlyButton("button.skills", "assets/gui/buttons/inventory.png");
        buttonInventory.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
        buttonInventory.width = '112px';
        buttonInventory.height = '21px';
        buttonInventory.thickness = 0;
        buttonInventory.top = '-7px';
        buttonInventory.left = '479px';
        container.addControl(buttonInventory);
        buttonInventory.onPointerUpObservable.add(function () {
            if (!game.gui.inventory.opened) {
                game.gui.inventory.open();
            }
        });
        var buttonOptions = babylonjs_gui_1.Button.CreateImageOnlyButton("button.skills", "assets/gui/buttons/options.png");
        buttonOptions.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
        buttonOptions.width = '112px';
        buttonOptions.height = '21px';
        buttonOptions.thickness = 0;
        buttonOptions.top = '20px';
        buttonOptions.left = '479px';
        buttonOptions.onPointerUpObservable.add(function () {
            if (!game.gui.options.opened) {
                game.gui.options.open();
            }
        });
        container.addControl(buttonOptions);
    }
    return PlayerBottomPanel;
}());
exports.PlayerBottomPanel = PlayerBottomPanel;


/***/ }),

/***/ "./src/game/GUI/PlayerInformation.ts":
/*!*******************************************!*\
  !*** ./src/game/GUI/PlayerInformation.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var PlayerInformation = /** @class */ (function () {
    function PlayerInformation(player, game) {
        var guiPanel = game.gui.roomInformaton.guiPanel;
        var grid = new babylonjs_gui_1.Grid();
        grid.addColumnDefinition(70, true);
        grid.addColumnDefinition(1);
        grid.width = 1;
        grid.height = '64px';
        grid.paddingTop = '10px';
        guiPanel.addControl(grid);
        this.container = grid;
        var image = new babylonjs_gui_1.Image("but", "assets/gui/warrior.png");
        image.width = "64px";
        image.height = "64px";
        image.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        image.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
        grid.addControl(image, 0, 0);
        var title = new babylonjs_gui_1.TextBlock();
        title.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        title.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
        title.text = player.name;
        title.top = "0";
        title.color = "orange";
        title.fontFamily = "RuslanDisplay";
        title.fontSize = 16;
        title.resizeToFit = true;
        grid.addControl(title, 0, 1);
        var toolbarHp = new babylonjs_gui_1.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_hp.png');
        toolbarHp.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        toolbarHp.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
        toolbarHp.width = 0;
        toolbarHp.height = '14px';
        toolbarHp.top = '24px';
        this.hpBar = toolbarHp;
        grid.addControl(toolbarHp, 0, 1);
        var textBlockHp = new babylonjs_gui_1.TextBlock();
        textBlockHp.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        textBlockHp.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        textBlockHp.top = '24px';
        textBlockHp.width = 1;
        textBlockHp.height = '14px';
        textBlockHp.color = "white";
        textBlockHp.fontSize = 16;
        textBlockHp.fontFamily = "RuslanDisplay";
        this.hpBarText = textBlockHp;
        grid.addControl(textBlockHp, 0, 1);
        var toolbarEnergy = new babylonjs_gui_1.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_energy.png');
        toolbarEnergy.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        toolbarEnergy.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
        toolbarEnergy.width = 1;
        toolbarEnergy.height = '14px';
        toolbarEnergy.top = '40px';
        this.energyBar = toolbarEnergy;
        grid.addControl(toolbarEnergy, 0, 1);
        var textToolbarEnergy = new babylonjs_gui_1.TextBlock();
        textToolbarEnergy.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        textToolbarEnergy.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        textToolbarEnergy.top = '40px';
        textToolbarEnergy.width = 1;
        textToolbarEnergy.height = '14px';
        textToolbarEnergy.color = "white";
        textToolbarEnergy.fontSize = 12;
        textToolbarEnergy.fontFamily = "RuslanDisplay";
        this.energyBarText = textToolbarEnergy;
        grid.addControl(textToolbarEnergy, 0, 1);
    }
    return PlayerInformation;
}());
exports.PlayerInformation = PlayerInformation;


/***/ }),

/***/ "./src/game/GUI/PlayerQuestInformation.ts":
/*!************************************************!*\
  !*** ./src/game/GUI/PlayerQuestInformation.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var PlayerQuestInformation = /** @class */ (function () {
    function PlayerQuestInformation(game) {
        this.texture = game.gui.texture;
    }
    PlayerQuestInformation.prototype.addQuest = function (questData) {
        var self = this;
        if (self.guiPanel) {
            self.guiPanel.dispose();
        }
        var playerQuestsInformationPanel = new babylonjs_gui_1.StackPanel();
        playerQuestsInformationPanel.width = "50%";
        playerQuestsInformationPanel.top = 40;
        playerQuestsInformationPanel.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        playerQuestsInformationPanel.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        self.texture.addControl(playerQuestsInformationPanel);
        self.guiPanel = playerQuestsInformationPanel;
        var title = new babylonjs_gui_1.TextBlock();
        title.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        title.text = questData.title;
        title.top = "0%";
        title.color = "orange";
        title.fontFamily = "RuslanDisplay";
        title.fontSize = 22;
        title.resizeToFit = true;
        this.guiPanel.addControl(title);
        questData.chapters[questData.actualChapter].requirements.forEach(function (requirement) {
            var requirementDescription = new babylonjs_gui_1.TextBlock();
            requirementDescription.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
            requirementDescription.text = requirement.name;
            requirementDescription.resizeToFit = true;
            requirementDescription.color = "white";
            requirementDescription.fontFamily = "RuslanDisplay";
            requirementDescription.top = "5%";
            requirementDescription.fontSize = 18;
            self.guiPanel.addControl(requirementDescription);
        });
    };
    return PlayerQuestInformation;
}());
exports.PlayerQuestInformation = PlayerQuestInformation;


/***/ }),

/***/ "./src/game/GUI/PlayerQuestsPanel.ts":
/*!*******************************************!*\
  !*** ./src/game/GUI/PlayerQuestsPanel.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var PlayerQuestsPanel = /** @class */ (function () {
    function PlayerQuestsPanel(game) {
        this.texts = [];
        this.texture = game.gui.texture;
        var self = this;
        var playerQuestsLogsPanel = new babylonjs_gui_1.StackPanel();
        playerQuestsLogsPanel.width = "50%";
        playerQuestsLogsPanel.top = 40;
        playerQuestsLogsPanel.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        self.texture.addControl(playerQuestsLogsPanel);
        self.guiPanel = playerQuestsLogsPanel;
    }
    /**
     * @param message
     * @param color
     */
    PlayerQuestsPanel.prototype.addText = function (message, color) {
        if (color === void 0) { color = 'white'; }
        var text = new babylonjs_gui_1.TextBlock();
        text.text = message;
        text.color = color;
        text.textWrapping = true;
        text.height = "25px";
        text.width = "100%";
        text.fontFamily = "RuslanDisplay";
        text.textHorizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        text.fontSize = 16;
        this.guiPanel.addControl(text);
        this.texts.push(text);
        var self = this;
        setTimeout(function () {
            var textToDispose = self.texts.shift();
            self.guiPanel.removeControl(textToDispose);
        }, 4000);
    };
    return PlayerQuestsPanel;
}());
exports.PlayerQuestsPanel = PlayerQuestsPanel;


/***/ }),

/***/ "./src/game/GUI/RoomInformation.ts":
/*!*****************************************!*\
  !*** ./src/game/GUI/RoomInformation.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var RoomInformation = /** @class */ (function () {
    function RoomInformation(game) {
        this.texture = game.gui.texture;
        var roomInformationPanel = new babylonjs_gui_1.StackPanel("Room Information");
        roomInformationPanel.width = "20%";
        roomInformationPanel.top = 40;
        roomInformationPanel.left = 10;
        roomInformationPanel.zIndex = 1;
        roomInformationPanel.isPointerBlocker = true;
        roomInformationPanel.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        roomInformationPanel.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
        this.texture.addControl(roomInformationPanel);
        this.guiPanel = roomInformationPanel;
    }
    return RoomInformation;
}());
exports.RoomInformation = RoomInformation;


/***/ }),

/***/ "./src/game/GUI/SelectCharacter.ts":
/*!*****************************************!*\
  !*** ./src/game/GUI/SelectCharacter.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var SelectCharacter = /** @class */ (function () {
    function SelectCharacter(game) {
        //TODO: Fix GUI
        // game.gui = this;
        var texture = babylonjs_gui_1.AdvancedDynamicTexture.CreateFullscreenUI('gui.main');
        var container = new babylonjs_gui_1.Rectangle('gui.panel.bottom');
        container.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        container.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        container.width = '685px';
        container.height = '80px';
        container.isPointerBlocker = true;
        container.thickness = 0;
        texture.addControl(container);
        var buttonCreateCharacter = babylonjs_gui_1.Button.CreateImageWithCenterTextButton("button.create_character", 'Create character', "assets/gui/buttons/blank.png");
        buttonCreateCharacter.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        buttonCreateCharacter.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        buttonCreateCharacter.width = 0.5;
        buttonCreateCharacter.height = '40px';
        buttonCreateCharacter.thickness = 0;
        buttonCreateCharacter.color = 'white';
        buttonCreateCharacter.fontSize = 16;
        container.addControl(buttonCreateCharacter);
        buttonCreateCharacter.onPointerUpObservable.add(function () {
            var characterName = input.text;
            if (characterName.length > 2) {
                game.socketClient.socket.emit('createCharacter', characterName);
            }
        });
        var input = new babylonjs_gui_1.InputText();
        input.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        input.width = 0.5;
        input.maxWidth = 0.5;
        input.height = "30px";
        input.color = "white";
        input.background = "black";
        input.placeholderText = "Set name of your new character";
        input.placeholderColor = "white";
        container.addControl(input);
        this.texture = texture;
    }
    return SelectCharacter;
}());
exports.SelectCharacter = SelectCharacter;


/***/ }),

/***/ "./src/game/GUI/ShowHp.ts":
/*!********************************!*\
  !*** ./src/game/GUI/ShowHp.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var ShowHp = /** @class */ (function () {
    function ShowHp(game) {
        this.texture = game.gui.texture;
    }
    ShowHp.prototype.showHpCharacter = function (character) {
        if (this.guiPanel) {
            this.texture.removeControl(this.guiPanel);
        }
        this.character = character;
        var characterPanel = new babylonjs_gui_1.StackPanel();
        characterPanel.width = "25%";
        characterPanel.top = 10;
        characterPanel.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        this.guiPanel = characterPanel;
        this.texture.addControl(characterPanel);
        var textBlock = new babylonjs_gui_1.TextBlock("gui.panelhp.name", character.name);
        textBlock.color = 'white';
        textBlock.height = "20px";
        textBlock.fontFamily = "RuslanDisplay";
        textBlock.textVerticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        var hpSlider = new babylonjs_gui_1.Slider();
        hpSlider.minimum = 0;
        hpSlider.maximum = character.statistics.hpMax;
        hpSlider.value = character.statistics.hp;
        hpSlider.width = "100%";
        hpSlider.height = "10px";
        hpSlider.thumbWidth = 0;
        hpSlider.barOffset = 0;
        hpSlider.background = 'black';
        hpSlider.color = "red";
        hpSlider.borderColor = 'black';
        this.hpBar = hpSlider;
        characterPanel.addControl(textBlock);
        characterPanel.addControl(hpSlider);
    };
    ShowHp.prototype.showGateway = function (entranceName) {
        if (this.guiPanel) {
            this.texture.removeControl(this.guiPanel);
        }
        if (this.character) {
            this.character = null;
        }
        var characterPanel = new babylonjs_gui_1.StackPanel();
        characterPanel.width = "25%";
        characterPanel.top = 10;
        characterPanel.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        this.guiPanel = characterPanel;
        this.texture.addControl(characterPanel);
        var textBlock = new babylonjs_gui_1.TextBlock("gui.panelhp.name", entranceName);
        textBlock.color = 'white';
        textBlock.height = "20px";
        textBlock.fontFamily = "RuslanDisplay";
        textBlock.textVerticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        characterPanel.addControl(textBlock);
    };
    ShowHp.prototype.refreshPanel = function () {
        if (this.character) {
            this.hpBar.value = this.character.statistics.hp;
        }
    };
    ShowHp.prototype.hideHpBar = function () {
        if (this.guiPanel) {
            this.texture.removeControl(this.guiPanel);
        }
    };
    return ShowHp;
}());
exports.ShowHp = ShowHp;


/***/ }),

/***/ "./src/game/GUI/Tooltips/TooltipButton.ts":
/*!************************************************!*\
  !*** ./src/game/GUI/Tooltips/TooltipButton.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var TooltipButton = /** @class */ (function () {
    function TooltipButton(baseControl, text, parentPosition) {
        var panel = new babylonjs_gui_1.Rectangle('tooltip');
        panel.top = parentPosition.y;
        panel.left = parentPosition.x;
        panel.width = 0;
        panel.height = 0;
        panel.cornerRadius = 20;
        panel.thickness = 1;
        panel.background = "black";
        panel.color = "white";
        panel.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
        panel.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        panel.adaptHeightToChildren = true;
        panel.adaptWidthToChildren = true;
        panel.paddingRight = '-80px';
        panel.paddingBottom = '-40px';
        panel.alpha = 0.8;
        panel.isHitTestVisible = false;
        baseControl.addControl(panel);
        this.container = panel;
        var label = new babylonjs_gui_1.TextBlock();
        label.resizeToFit = true;
        label.text = text;
        label.fontFamily = "RuslanDisplay";
        panel.addControl(label);
    }
    return TooltipButton;
}());
exports.TooltipButton = TooltipButton;


/***/ }),

/***/ "./src/game/GUI/Tooltips/TooltipHelper.ts":
/*!************************************************!*\
  !*** ./src/game/GUI/Tooltips/TooltipHelper.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TooltipButton_1 = __webpack_require__(/*! ./TooltipButton */ "./src/game/GUI/Tooltips/TooltipButton.ts");
var TooltipHelper = /** @class */ (function () {
    function TooltipHelper() {
    }
    TooltipHelper.createTooltipOnInventoryItemButton = function (texture, item, button, pickCallback) {
        var tooltipButton = null;
        button.onPointerEnterObservable.add(function () {
            var text = item.name;
            if (item.statistics.damageMin > 0) {
                text += "\nDamage: " + item.statistics.damageMin + " - " + item.statistics.damageMax + "";
            }
            if (item.statistics.armor > 0) {
                text += "\nArmor: " + item.statistics.armor + "";
            }
            tooltipButton = new TooltipButton_1.TooltipButton(texture, text, new BABYLON.Vector2(button.centerX, button.centerY));
        });
        button.onPointerOutObservable.add(function () {
            tooltipButton.container.dispose();
        });
        button.onPointerUpObservable.add(pickCallback);
    };
    return TooltipHelper;
}());
exports.TooltipHelper = TooltipHelper;


/***/ }),

/***/ "./src/game/GUI/Tooltips/TooltipMesh.ts":
/*!**********************************************!*\
  !*** ./src/game/GUI/Tooltips/TooltipMesh.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var TooltipMesh = /** @class */ (function () {
    function TooltipMesh(mesh, text, linkOffsetY) {
        if (linkOffsetY === void 0) { linkOffsetY = -80; }
        var advancedTexture = babylonjs_gui_1.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        advancedTexture.layer.layerMask = 2;
        this.container = advancedTexture;
        var panel = new babylonjs_gui_1.Rectangle('tooltip');
        panel.cornerRadius = 20;
        panel.thickness = 1;
        panel.background = "black";
        panel.color = "white";
        panel.adaptHeightToChildren = true;
        panel.adaptWidthToChildren = true;
        panel.paddingRight = '-40px';
        panel.paddingBottom = '-20px';
        panel.alpha = 0.8;
        advancedTexture.addControl(panel);
        var label = new babylonjs_gui_1.TextBlock();
        label.resizeToFit = true;
        label.text = text;
        label.fontFamily = "RuslanDisplay";
        panel.addControl(label);
        panel.linkWithMesh(mesh);
        panel.linkOffsetY = linkOffsetY;
    }
    return TooltipMesh;
}());
exports.TooltipMesh = TooltipMesh;


/***/ }),

/***/ "./src/game/GUI/popup/Attributes.ts":
/*!******************************************!*\
  !*** ./src/game/GUI/popup/Attributes.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Popup_1 = __webpack_require__(/*! ./Popup */ "./src/game/GUI/popup/Popup.ts");
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var Attributes = /** @class */ (function (_super) {
    __extends(Attributes, _super);
    function Attributes(guiMain) {
        var _this = _super.call(this, guiMain) || this;
        _this.name = 'Attributes';
        _this.imageUrl = "assets/gui/content.png";
        _this.position = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        return _this;
    }
    Attributes.prototype.open = function () {
        this.opened = true;
        this.initTexture();
        this.guiTexture.addControl(this.container);
        this.showText();
        this.createButtonClose();
    };
    Attributes.prototype.close = function () {
        this.opened = false;
        this.guiTexture.dispose();
        this.buttonClose = null;
    };
    Attributes.prototype.showText = function () {
        var panel = new babylonjs_gui_1.StackPanel('attributes.panel');
        panel.isPointerBlocker = true;
        panel.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        panel.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        panel.width = 1;
        panel.height = 0.9;
        panel.top = '10%';
        this.container.addControl(panel);
        var textPlayerName = this.createText(this.guiMain.game.player.name);
        textPlayerName.color = 'brown';
        textPlayerName.fontSize = 40;
        textPlayerName.top = 10;
        panel.addControl(textPlayerName);
        var textPlayerLVL = this.createText(this.guiMain.game.player.lvl + ' LVL');
        textPlayerLVL.color = 'brown';
        textPlayerLVL.fontSize = 32;
        textPlayerLVL.top = 100;
        textPlayerLVL.paddingBottom = 40;
        panel.addControl(textPlayerLVL);
        this.createAttribute(1, 'Strength:' + this.guiMain.game.player.attributes.strength, panel);
        this.createAttribute(2, 'Durability:' + this.guiMain.game.player.attributes.durability, panel);
        this.createAttribute(3, 'Vitality:' + this.guiMain.game.player.attributes.vitality, panel);
        this.createAttribute(4, 'Stamina:' + this.guiMain.game.player.attributes.stamina, panel);
        if (this.guiMain.game.player.freeAttributesPoints) {
            var textAttributes = this.createText('You have ' + this.guiMain.game.player.freeAttributesPoints + ' free attribute points.');
            textAttributes.color = 'red';
            textAttributes.fontSize = 16;
            panel.addControl(textAttributes);
        }
        var textStatistics = this.createText('Statistics');
        textStatistics.color = 'brown';
        textStatistics.height = '8%';
        textStatistics.fontSize = 32;
        textStatistics.paddingTop = 40;
        panel.addControl(textStatistics);
        var damage = this.createText('Damage: ' + this.guiMain.game.player.statisticsAll.damageMin + ' - ' + this.guiMain.game.player.statisticsAll.damageMax);
        panel.addControl(damage);
        var armor = this.createText('Armor: ' + this.guiMain.game.player.statisticsAll.armor);
        panel.addControl(armor);
        var attackSpeed = this.createText('Attack chance: ' + this.guiMain.game.player.statistics.hitChance);
        panel.addControl(attackSpeed);
        var blockChance = this.createText('Block chance: ' + this.guiMain.game.player.statistics.blockChance);
        panel.addControl(blockChance);
    };
    Attributes.prototype.createText = function (text) {
        var textBlock = new babylonjs_gui_1.TextBlock();
        textBlock.text = text;
        textBlock.color = "black";
        textBlock.width = "100%";
        textBlock.height = "5%";
        textBlock.fontFamily = "RuslanDisplay";
        textBlock.fontSize = 20;
        textBlock.resizeToFit = true;
        textBlock.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        return textBlock;
    };
    Attributes.prototype.createAttribute = function (type, text, control) {
        var self = this;
        if (this.guiMain.game.player.freeAttributesPoints) {
            var button = babylonjs_gui_1.Button.CreateImageButton("plus", text, "assets/gui/plus.png");
            button.height = "40px";
            button.thickness = 0;
            button.width = 0.4;
            button.color = 'black';
            button.fontFamily = "RuslanDisplay";
            button.fontSize = 16;
            control.addControl(button);
            button.onPointerUpObservable.add(function () {
                self.guiMain.game.socketClient.socket.emit('addAttribute', {
                    type: type
                });
            });
        }
        else {
            var textBlock = this.createText(text);
            control.addControl(textBlock);
        }
    };
    return Attributes;
}(Popup_1.Popup));
exports.Attributes = Attributes;


/***/ }),

/***/ "./src/game/GUI/popup/Inventory.ts":
/*!*****************************************!*\
  !*** ./src/game/GUI/popup/Inventory.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Popup_1 = __webpack_require__(/*! ./Popup */ "./src/game/GUI/popup/Popup.ts");
var Weapon_1 = __webpack_require__(/*! ./inventory/Weapon */ "./src/game/GUI/popup/inventory/Weapon.ts");
var Shield_1 = __webpack_require__(/*! ./inventory/Shield */ "./src/game/GUI/popup/inventory/Shield.ts");
var Gloves_1 = __webpack_require__(/*! ./inventory/Gloves */ "./src/game/GUI/popup/inventory/Gloves.ts");
var Boots_1 = __webpack_require__(/*! ./inventory/Boots */ "./src/game/GUI/popup/inventory/Boots.ts");
var Armor_1 = __webpack_require__(/*! ./inventory/Armor */ "./src/game/GUI/popup/inventory/Armor.ts");
var Helm_1 = __webpack_require__(/*! ./inventory/Helm */ "./src/game/GUI/popup/inventory/Helm.ts");
var TooltipHelper_1 = __webpack_require__(/*! ../Tooltips/TooltipHelper */ "./src/game/GUI/Tooltips/TooltipHelper.ts");
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var Inventory = /** @class */ (function (_super) {
    __extends(Inventory, _super);
    function Inventory(guiMain) {
        var _this = _super.call(this, guiMain) || this;
        _this.items = [];
        _this.name = 'Inventory';
        _this.imageUrl = "assets/gui/inventory.png";
        return _this;
    }
    Inventory.prototype.initTexture = function () {
        this.guiTexture = babylonjs_gui_1.AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
        this.guiTexture.layer.layerMask = 1;
        var container = new babylonjs_gui_1.Rectangle('gui.panel.' + this.name);
        container.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        container.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        container.thickness = 0;
        container.isPointerBlocker = true;
        var image = new babylonjs_gui_1.Image('gui.popup.image.', this.imageUrl);
        image.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        image.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        container.addControl(image);
        var widthContainer = '607px';
        var heightContainer = '960px';
        var checklSizeListener = function (width) {
            if (width > 1819) {
                container.width = parseInt(widthContainer) + 'px';
                container.height = parseInt(heightContainer) + 'px';
            }
            else {
                container.width = parseInt(widthContainer) / 2 + 'px';
                container.height = parseInt(heightContainer) / 2 + 'px';
            }
        };
        checklSizeListener(window.innerWidth);
        window.addEventListener("resize", function () {
            var width = window.innerWidth;
            checklSizeListener(width);
        });
        this.container = container;
        this.guiTexture.addControl(container);
        return this;
    };
    Inventory.prototype.open = function () {
        var game = this.guiMain.game;
        this.initTexture();
        this.opened = true;
        this.isRefresh = false;
        this.showItems();
        this.showEquipedItems();
        this.showSpecialItemsAndGold();
        this.createButtonClose();
        return this;
    };
    Inventory.prototype.showSpecialItemsAndGold = function () {
        var image = babylonjs_gui_1.Button.CreateImageButton("gui.popup.image.gold", '' + this.guiMain.game.player.gold + '', "assets/gui/gold.png");
        image.thickness = 0;
        image.color = 'white';
        image.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        image.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        this.container.addControl(image);
        var image2 = babylonjs_gui_1.Button.CreateImageButton("gui.popup.image.key", '' + this.guiMain.game.player.keys + '', "assets/gui/key.png");
        image2.thickness = 0;
        image2.color = 'white';
        image2.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        image2.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        this.container.addControl(image2);
        var image3 = babylonjs_gui_1.Button.CreateImageButton("gui.popup.image.wine", '0', "assets/skills/heal.png");
        image3.thickness = 0;
        image3.color = 'white';
        image3.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        image3.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        this.container.addControl(image3);
        image.height = '36px';
        image.width = '150px';
        image.left = "-150px";
        image.fontSize = 18;
        image2.height = '36px';
        image2.width = '150px';
        image2.left = "20px";
        image2.fontSize = 18;
        image3.height = '36px';
        image3.width = '150px';
        image3.left = "-300px";
        image3.fontSize = 18;
    };
    Inventory.prototype.close = function () {
        this.opened = false;
        this.guiTexture.dispose();
        this.buttonClose = null;
        this.items.forEach(function (mesh) {
            mesh.dispose();
        });
        this.guiMain.game.player.refreshCameraPosition();
    };
    Inventory.prototype.showEquipedItems = function () {
        this.weaponImage = new Weapon_1.Weapon(this);
        this.shieldImage = new Shield_1.Shield(this);
        this.glovesImage = new Gloves_1.Gloves(this);
        this.bootsImage = new Boots_1.Boots(this);
        this.armorImage = new Armor_1.Armor(this);
        this.helmImage = new Helm_1.Helm(this);
    };
    Inventory.prototype.showItems = function () {
        var self = this;
        var inventory = this.guiMain.game.player.inventory;
        if (this.panelItems) {
            this.guiTexture.removeControl(this.panelItems);
        }
        var eqiupedItems = inventory.getEquipedItems();
        var grid = new babylonjs_gui_1.Grid();
        grid.width = '568px';
        grid.height = '288px';
        grid.top = '247px';
        grid.addColumnDefinition(1);
        grid.addColumnDefinition(1);
        grid.addColumnDefinition(1);
        grid.addColumnDefinition(1);
        grid.addColumnDefinition(1);
        grid.addColumnDefinition(1);
        grid.addColumnDefinition(1);
        grid.addColumnDefinition(1);
        grid.addRowDefinition(1);
        grid.addRowDefinition(1);
        grid.addRowDefinition(1);
        grid.addRowDefinition(1);
        this.container.addControl(grid);
        var itemCount = 0;
        var row = -1;
        var collumn = -1;
        var _loop_1 = function (i) {
            var breakDisplayItem = void 0;
            var item = inventory.items[i];
            for (var _i = 0, eqiupedItems_1 = eqiupedItems; _i < eqiupedItems_1.length; _i++) {
                var equipedItem = eqiupedItems_1[_i];
                if (equipedItem == item) {
                    breakDisplayItem = true;
                    break;
                }
            }
            if (breakDisplayItem) {
                return "continue";
            }
            if (itemCount % 8 == 0) {
                row++;
                collumn = -1;
            }
            itemCount++;
            collumn++;
            var image = babylonjs_gui_1.Button.CreateImageOnlyButton('gui.popup.image.' + item.name, 'assets/Miniatures/' + item.image + '.png');
            image.height = 1;
            image.width = 1;
            image.thickness = 0;
            image.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            grid.addControl(image, row, collumn);
            TooltipHelper_1.TooltipHelper.createTooltipOnInventoryItemButton(self.guiTexture, item, image, function () {
                self.guiMain.game.player.inventory.emitEquip(item);
                self.onPointerUpItemImage(item);
                self.showItems();
                self.guiMain.attributes.refreshPopup();
            });
        };
        for (var i = 0; i < inventory.items.length; i++) {
            _loop_1(i);
        }
        var checkSizeListener = function (width) {
            if (width > 1819) {
                grid.width = '568px';
                grid.height = '288px';
                grid.top = '247px';
            }
            else {
                grid.width = '284px';
                grid.height = '144px';
                grid.top = '123px';
            }
        };
        checkSizeListener(window.innerWidth);
        window.addEventListener("resize", function () {
            var width = window.innerWidth;
            checkSizeListener(width);
        });
        return this;
    };
    Inventory.prototype.onPointerUpItemImage = function (item) {
        switch (item.type) {
            case 1:
                if (this.weaponImage.block) {
                    this.guiTexture.removeControl(this.weaponImage.block);
                }
                this.weaponImage = new Weapon_1.Weapon(this);
                break;
            case 2:
                if (this.shieldImage.block) {
                    this.guiTexture.removeControl(this.shieldImage.block);
                }
                this.shieldImage = new Shield_1.Shield(this);
                break;
            case 3:
                if (this.helmImage.block) {
                    this.guiTexture.removeControl(this.helmImage.block);
                }
                this.helmImage = new Helm_1.Helm(this);
                break;
            case 4:
                if (this.glovesImage.block) {
                    this.guiTexture.removeControl(this.glovesImage.block);
                }
                this.glovesImage = new Gloves_1.Gloves(this);
                break;
            case 5:
                if (this.bootsImage.block) {
                    this.guiTexture.removeControl(this.bootsImage.block);
                }
                this.bootsImage = new Boots_1.Boots(this);
                break;
            case 6:
                if (this.armorImage.block) {
                    this.guiTexture.removeControl(this.armorImage.block);
                }
                this.armorImage = new Armor_1.Armor(this);
                break;
        }
        return this;
    };
    Inventory.prototype.createItemImage = function (item) {
        var image = new babylonjs_gui_1.Image('gui.popup.image.' + item.name, 'assets/Miniatures/' + item.image + '.png');
        image.stretch = babylonjs_gui_1.Image.STRETCH_UNIFORM;
        image.isPointerBlocker = true;
        return image;
    };
    return Inventory;
}(Popup_1.Popup));
exports.Inventory = Inventory;


/***/ }),

/***/ "./src/game/GUI/popup/Options.ts":
/*!***************************************!*\
  !*** ./src/game/GUI/popup/Options.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Options_1 = __webpack_require__(/*! ../../Options/Options */ "./src/game/Options/Options.ts");
var Popup_1 = __webpack_require__(/*! ./Popup */ "./src/game/GUI/popup/Popup.ts");
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var Options = /** @class */ (function (_super) {
    __extends(Options, _super);
    function Options(guiMain) {
        var _this = _super.call(this, guiMain) || this;
        _this.name = 'Options';
        _this.imageUrl = "assets/gui/content.png";
        _this.position = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        return _this;
    }
    Options.prototype.open = function () {
        this.opened = true;
        this.initTexture();
        this.guiTexture.addControl(this.container);
        this.showText();
        this.createButtonClose();
    };
    Options.prototype.close = function () {
        this.opened = false;
        this.guiTexture.dispose();
        this.buttonClose = null;
    };
    Options.prototype.showText = function () {
        var panel = new babylonjs_gui_1.StackPanel('options.panel');
        panel.isPointerBlocker = true;
        panel.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        panel.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        panel.width = 0.8;
        panel.height = 1;
        panel.top = '10%';
        this.container.addControl(panel);
        var game = this.guiMain.game;
        var shadowsGroup = new babylonjs_gui_1.CheckboxGroup("Shadows");
        shadowsGroup.addCheckbox("Static shadows", function (isChecked) {
            Options_1.GameOptions.saveInLocalStorage('staticShadows', isChecked, game);
        }, game.getSceneManger().options.staticShadows);
        shadowsGroup.addCheckbox("Dynamic Shadows", function (isChecked) {
            Options_1.GameOptions.saveInLocalStorage('dynamicShadows', isChecked, game);
        }, game.getSceneManger().options.dynamicShadows);
        var postProccessGroup = new babylonjs_gui_1.CheckboxGroup("Post proccessing");
        postProccessGroup.addCheckbox("Enabled", function (isChecked) {
            Options_1.GameOptions.saveInLocalStorage('postProccessing', isChecked, game);
        }, game.getSceneManger().options.postProccessing);
        postProccessGroup.addCheckbox("FXAA", function (isChecked) {
            Options_1.GameOptions.saveInLocalStorage('fxaa', isChecked, game);
        }, game.getSceneManger().options.fxaa);
        postProccessGroup.addCheckbox("Depth Of Field", function (isChecked) {
            Options_1.GameOptions.saveInLocalStorage('dof', isChecked, game);
        }, game.getSceneManger().options.dof);
        // let dofGroup = new SliderGroup("DOF");
        // dofGroup.addSlider("fStop", (value) => {
        //     GameOptions.saveInLocalStorage('fStop', value, game);
        // }, "", 0.01, 10, game.getSceneManger().options.fStop, (value) => {
        //     return value;
        // });
        //
        // dofGroup.addSlider("focusDistance", (value) => {
        //     GameOptions.saveInLocalStorage('focusDistance', value, game);
        // }, "", 0, 45000, game.getSceneManger().options.focusDistance, (value) => {
        //     return value;
        // });
        //
        // dofGroup.addSlider("focalLength", (value) => {
        //     GameOptions.saveInLocalStorage('focalLength', value, game);
        // }, "", 0.01, 500.00, game.getSceneManger().options.focalLength, (value) => {
        //     return value;
        // });
        //
        // dofGroup.addSlider("lensSize", (value) => {
        //     GameOptions.saveInLocalStorage('lensSize', value, game);
        // }, "", 0.01, 500.00, game.getSceneManger().options.lensSize, (value) => {
        //     return value;
        // });
        postProccessGroup.addCheckbox("Bloom", function (isChecked) {
            Options_1.GameOptions.saveInLocalStorage('bloom', isChecked, game);
        }, game.getSceneManger().options.bloom);
        postProccessGroup.addCheckbox("Fog", function (isChecked) {
            Options_1.GameOptions.saveInLocalStorage('fog', isChecked, game);
        }, game.getSceneManger().options.fog);
        var selectBox = new babylonjs_gui_1.SelectionPanel("sp", [shadowsGroup, postProccessGroup]);
        selectBox.width = 0.8;
        selectBox.height = 0.8;
        selectBox.thickness = 0;
        selectBox.color = "black";
        selectBox.headerColor = "brown";
        selectBox.fontFamily = "RuslanDisplay";
        panel.addControl(selectBox);
    };
    return Options;
}(Popup_1.Popup));
exports.Options = Options;


/***/ }),

/***/ "./src/game/GUI/popup/Popup.ts":
/*!*************************************!*\
  !*** ./src/game/GUI/popup/Popup.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var Popup = /** @class */ (function () {
    function Popup(guiMain) {
        this.guiMain = guiMain;
    }
    Popup.prototype.initTexture = function () {
        this.guiTexture = babylonjs_gui_1.AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
        this.guiTexture.layer.layerMask = 1;
        var container = new babylonjs_gui_1.Rectangle('gui.panel.' + this.name);
        container.horizontalAlignment = this.position;
        container.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        container.thickness = 0;
        container.isPointerBlocker = true;
        this.container = container;
        this.guiTexture.addControl(container);
        var image = new babylonjs_gui_1.Image('gui.popup.image.', this.imageUrl);
        image.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        image.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        image.width = 1;
        image.height = 1;
        image.isPointerBlocker = true;
        container.addControl(image);
        this.container.addControl(image);
        this.containerBackground = image;
        container.width = '685px';
        container.height = '88%';
        return this;
    };
    Popup.prototype.createButtonClose = function () {
        var self = this;
        var buttonClose = babylonjs_gui_1.Button.CreateImageOnlyButton("buttonClose", "assets/gui/buttons/close.png");
        buttonClose.width = "30px;";
        buttonClose.height = "30px";
        buttonClose.thickness = 0;
        buttonClose.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        buttonClose.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        buttonClose.onPointerUpObservable.add(function () {
            self.close();
        });
        this.container.addControl(buttonClose);
        this.buttonClose = buttonClose;
        return this;
    };
    Popup.prototype.manageMainGUI = function (show) {
        if (show === void 0) { show = true; }
        this.guiMain.roomInformaton.guiPanel.isVisible = show;
        this.guiMain.playerBottomPanel.container.isVisible = show;
        this.guiMain.playerLogsQuests.guiPanel.isVisible = show;
        if (this.guiMain.playerQuestInformation.guiPanel) {
            this.guiMain.playerQuestInformation.guiPanel.isVisible = show;
        }
        if (this.guiMain.characterTopHp.guiPanel) {
            this.guiMain.characterTopHp.guiPanel.isVisible = show;
        }
    };
    Popup.prototype.refreshPopup = function () {
        this.isRefresh = true;
        if (this.opened) {
            this.close();
            this.open();
        }
    };
    return Popup;
}());
exports.Popup = Popup;


/***/ }),

/***/ "./src/game/GUI/popup/inventory/Armor.ts":
/*!***********************************************!*\
  !*** ./src/game/GUI/popup/inventory/Armor.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EquipBlock_1 = __webpack_require__(/*! ./EquipBlock */ "./src/game/GUI/popup/inventory/EquipBlock.ts");
var Armor = /** @class */ (function (_super) {
    __extends(Armor, _super);
    function Armor(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "153px";
        _this.blockHeight = "250px";
        _this.blockTop = "270px";
        _this.blockLeft = "228px";
        _this.item = inventory.guiMain.game.player.inventory.armor;
        _this.createBlockWithImage();
        return _this;
    }
    return Armor;
}(EquipBlock_1.EquipBlock));
exports.Armor = Armor;


/***/ }),

/***/ "./src/game/GUI/popup/inventory/Boots.ts":
/*!***********************************************!*\
  !*** ./src/game/GUI/popup/inventory/Boots.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EquipBlock_1 = __webpack_require__(/*! ./EquipBlock */ "./src/game/GUI/popup/inventory/EquipBlock.ts");
var Boots = /** @class */ (function (_super) {
    __extends(Boots, _super);
    function Boots(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "96px";
        _this.blockHeight = "92px";
        _this.blockTop = "442px";
        _this.blockLeft = "82px";
        _this.item = inventory.guiMain.game.player.inventory.boots;
        _this.createBlockWithImage();
        return _this;
    }
    return Boots;
}(EquipBlock_1.EquipBlock));
exports.Boots = Boots;


/***/ }),

/***/ "./src/game/GUI/popup/inventory/EquipBlock.ts":
/*!****************************************************!*\
  !*** ./src/game/GUI/popup/inventory/EquipBlock.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TooltipHelper_1 = __webpack_require__(/*! ../../Tooltips/TooltipHelper */ "./src/game/GUI/Tooltips/TooltipHelper.ts");
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var EquipBlock = /** @class */ (function () {
    function EquipBlock(inventory) {
        this.inventory = inventory;
    }
    EquipBlock.prototype.createBlockWithImage = function () {
        if (this.item) {
            var panelItem_1 = new babylonjs_gui_1.Rectangle();
            panelItem_1.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_LEFT;
            panelItem_1.verticalAlignment = this.verticalAlignment;
            panelItem_1.thickness = 0;
            panelItem_1.width = this.blockWidth;
            panelItem_1.height = this.blockHeight;
            panelItem_1.top = this.blockTop;
            panelItem_1.left = this.blockLeft;
            panelItem_1.isPointerBlocker = true;
            this.inventory.container.addControl(panelItem_1);
            this.block = panelItem_1;
            this.createImage();
            var blockWidth_1 = this.blockWidth;
            var blockHeight_1 = this.blockHeight;
            var blockTop_1 = this.blockTop;
            var blockLeft_1 = this.blockLeft;
            var checkSizeListener_1 = function (width) {
                if (width > 1819) {
                    panelItem_1.width = blockWidth_1;
                    panelItem_1.height = blockHeight_1;
                    panelItem_1.top = blockTop_1;
                    panelItem_1.left = blockLeft_1;
                }
                else {
                    panelItem_1.width = parseInt(blockWidth_1) / 2 + 'px';
                    panelItem_1.height = parseInt(blockHeight_1) / 2 + 'px';
                    panelItem_1.top = parseInt(blockTop_1) / 2 + 'px';
                    panelItem_1.left = parseInt(blockLeft_1) / 2 + 'px';
                }
            };
            checkSizeListener_1(window.innerWidth);
            window.addEventListener("resize", function () {
                var width = window.innerWidth;
                checkSizeListener_1(width);
            });
        }
        return this;
    };
    EquipBlock.prototype.createImage = function () {
        var self = this;
        var item = this.item;
        if (item.statistics) {
            var image = this.inventory.createItemImage(item);
            TooltipHelper_1.TooltipHelper.createTooltipOnInventoryItemButton(self.inventory.guiTexture, item, image, function () {
                self.inventory.guiMain.game.player.inventory.emitEquip(self.item);
                self.inventory.guiTexture.removeControl(self.block);
                self.inventory.showItems();
                self.inventory.guiMain.attributes.refreshPopup();
            });
            this.block.addControl(image);
        }
        return this;
    };
    return EquipBlock;
}());
exports.EquipBlock = EquipBlock;


/***/ }),

/***/ "./src/game/GUI/popup/inventory/Gloves.ts":
/*!************************************************!*\
  !*** ./src/game/GUI/popup/inventory/Gloves.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EquipBlock_1 = __webpack_require__(/*! ./EquipBlock */ "./src/game/GUI/popup/inventory/EquipBlock.ts");
var Gloves = /** @class */ (function (_super) {
    __extends(Gloves, _super);
    function Gloves(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "96px";
        _this.blockHeight = "92px";
        _this.blockTop = "442px";
        _this.blockLeft = "428px";
        _this.item = inventory.guiMain.game.player.inventory.gloves;
        _this.createBlockWithImage();
        return _this;
    }
    return Gloves;
}(EquipBlock_1.EquipBlock));
exports.Gloves = Gloves;


/***/ }),

/***/ "./src/game/GUI/popup/inventory/Helm.ts":
/*!**********************************************!*\
  !*** ./src/game/GUI/popup/inventory/Helm.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EquipBlock_1 = __webpack_require__(/*! ./EquipBlock */ "./src/game/GUI/popup/inventory/EquipBlock.ts");
var Helm = /** @class */ (function (_super) {
    __extends(Helm, _super);
    function Helm(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "96px";
        _this.blockHeight = "92px";
        _this.blockTop = "121px";
        _this.blockLeft = "257px";
        _this.item = inventory.guiMain.game.player.inventory.helm;
        _this.createBlockWithImage();
        return _this;
    }
    return Helm;
}(EquipBlock_1.EquipBlock));
exports.Helm = Helm;


/***/ }),

/***/ "./src/game/GUI/popup/inventory/Shield.ts":
/*!************************************************!*\
  !*** ./src/game/GUI/popup/inventory/Shield.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EquipBlock_1 = __webpack_require__(/*! ./EquipBlock */ "./src/game/GUI/popup/inventory/EquipBlock.ts");
var Shield = /** @class */ (function (_super) {
    __extends(Shield, _super);
    function Shield(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "90px";
        _this.blockHeight = "146px";
        _this.blockTop = "248px";
        _this.blockLeft = "435px";
        _this.item = inventory.guiMain.game.player.inventory.shield;
        _this.createBlockWithImage();
        return _this;
    }
    return Shield;
}(EquipBlock_1.EquipBlock));
exports.Shield = Shield;


/***/ }),

/***/ "./src/game/GUI/popup/inventory/Weapon.ts":
/*!************************************************!*\
  !*** ./src/game/GUI/popup/inventory/Weapon.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EquipBlock_1 = __webpack_require__(/*! ./EquipBlock */ "./src/game/GUI/popup/inventory/EquipBlock.ts");
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "90px";
        _this.blockHeight = "146px";
        _this.blockTop = "248px";
        _this.blockLeft = "85px";
        _this.item = inventory.guiMain.game.player.inventory.weapon;
        _this.createBlockWithImage();
        return _this;
    }
    return Weapon;
}(EquipBlock_1.EquipBlock));
exports.Weapon = Weapon;


/***/ }),

/***/ "./src/game/GUI/popup/newQuest.ts":
/*!****************************************!*\
  !*** ./src/game/GUI/popup/newQuest.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Popup_1 = __webpack_require__(/*! ./Popup */ "./src/game/GUI/popup/Popup.ts");
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var NewQuest = /** @class */ (function (_super) {
    __extends(NewQuest, _super);
    function NewQuest(guiMain, questServerData) {
        var _this = _super.call(this, guiMain) || this;
        _this.questData = questServerData;
        _this.name = 'Quest';
        _this.imageUrl = "assets/gui/content.png";
        _this.position = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        return _this;
    }
    NewQuest.prototype.open = function () {
        var self = this;
        this.opened = true;
        this.initTexture();
        this.guiTexture.addControl(this.container);
        this.showText();
        this.createButtonClose();
        var buttonAccept = babylonjs_gui_1.Button.CreateSimpleButton("questsButtonAccept", "Accept quest");
        buttonAccept.color = "red";
        buttonAccept.background = "black";
        buttonAccept.width = "180px;";
        buttonAccept.height = "48px";
        buttonAccept.thickness = 0;
        buttonAccept.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        buttonAccept.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        buttonAccept.onPointerUpObservable.add(function () {
            self.guiMain.game.socketClient.socket.emit('acceptQuest', self.questData.questId);
            self.close();
        });
        this.container.addControl(buttonAccept);
    };
    NewQuest.prototype.close = function () {
        this.opened = false;
        this.guiTexture.dispose();
        this.buttonClose = null;
    };
    NewQuest.prototype.showText = function () {
        var self = this;
        var title = new babylonjs_gui_1.TextBlock('title');
        title.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        title.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        title.text = this.questData.title;
        title.top = "2%";
        title.color = "brown";
        title.width = "70%";
        title.height = "10%";
        title.fontSize = 38;
        title.fontFamily = "RuslanDisplay";
        title.textWrapping = true;
        this.container.addControl(title);
        var description = new babylonjs_gui_1.TextBlock('descrption');
        description.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
        description.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
        description.text = this.questData.description;
        description.color = "black";
        description.top = "10%";
        description.width = "70%";
        description.height = "10%";
        description.fontSize = 16;
        description.fontFamily = "RuslanDisplay";
        description.textWrapping = true;
        this.container.addControl(description);
        Object.values(this.questData.chapters).forEach(function (chapterData, chapter) {
            var topPadding = (chapter * 15);
            var chapterHeader = new babylonjs_gui_1.TextBlock();
            chapterHeader.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
            chapterHeader.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
            chapterHeader.text = 'Chapter ' + (chapter + 1);
            chapterHeader.top = topPadding + 15 + "%";
            chapterHeader.width = "70%";
            chapterHeader.height = "25%";
            chapterHeader.color = "green";
            chapterHeader.fontSize = 30;
            chapterHeader.fontFamily = "RuslanDisplay";
            chapterHeader.textWrapping = true;
            self.container.addControl(chapterHeader);
            var chapterDescription = new babylonjs_gui_1.TextBlock();
            chapterDescription.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_TOP;
            chapterDescription.horizontalAlignment = babylonjs_gui_1.Control.HORIZONTAL_ALIGNMENT_CENTER;
            chapterDescription.text = chapterData.description;
            chapterDescription.top = topPadding + 22 + "%";
            chapterDescription.width = "70%";
            chapterDescription.height = "25%";
            chapterDescription.color = "black";
            chapterDescription.fontSize = 16;
            chapterDescription.fontFamily = "RuslanDisplay";
            chapterDescription.textWrapping = true;
            self.container.addControl(chapterDescription);
        });
    };
    return NewQuest;
}(Popup_1.Popup));
exports.NewQuest = NewQuest;


/***/ }),

/***/ "./src/game/Game.ts":
/*!**************************!*\
  !*** ./src/game/Game.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Mouse_1 = __webpack_require__(/*! ./Controllers/Mouse */ "./src/game/Controllers/Mouse.ts");
var socketClient_1 = __webpack_require__(/*! ./SocketClient/socketClient */ "./src/game/SocketClient/socketClient.ts");
var Events_1 = __webpack_require__(/*! ./Events/Events */ "./src/game/Events/Events.ts");
var SlavsLoader_1 = __webpack_require__(/*! ./Loader/SlavsLoader */ "./src/game/Loader/SlavsLoader.ts");
var Game = /** @class */ (function () {
    function Game(canvasElement, serverUrl, accessToken, isMobile, isDebug) {
        if (isMobile === void 0) { isMobile = false; }
        if (isDebug === void 0) { isDebug = false; }
        if (isDebug) {
            Game.SHOW_DEBUG = 1;
        }
        Game.MOBILE_CLIENT = isMobile;
        this.engine = new BABYLON.Engine(canvasElement, false, null, false);
        this.engine.loadingScreen = new SlavsLoader_1.SlavsLoader('Initialize engine');
        this.controller = new Mouse_1.Mouse(this);
        this.socketClient = new socketClient_1.SocketClient(this);
        this.events = new Events_1.Events();
        this.socketClient.connect(serverUrl, accessToken);
        this.resizeListener();
    }
    Game.prototype.getBabylonScene = function () {
        return (this.activeScene) ? this.activeScene.babylonScene : null;
    };
    Game.prototype.getSceneManger = function () {
        return (this.activeScene) ? this.activeScene : null;
    };
    Game.prototype.setScene = function (scene) {
        this.activeScene = scene;
        return this;
    };
    Game.prototype.resizeListener = function () {
        var self = this;
        window.addEventListener('resize', function () {
            self.engine.resize();
        });
        return this;
    };
    Game.prototype.changeScene = function (newScene) {
        this.engine.stopRenderLoop();
        this.socketClient.clearEvents();
        var sceneToDispose = this.getBabylonScene();
        if (sceneToDispose) {
            setTimeout(function () {
                sceneToDispose.dispose();
            });
        }
        this.activeScene = null;
        newScene.initScene(this);
    };
    Game.randomNumber = function (minimum, maximum) {
        return Math.round(Math.random() * (maximum - minimum) + minimum);
    };
    Game.distanceVector = function (vectorFrom, vectorTo) {
        var dx = vectorFrom.x - vectorTo.x;
        var dy = vectorFrom.y - vectorTo.y;
        var dz = vectorFrom.z - vectorTo.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };
    Game.SHOW_COLLIDERS = 0;
    Game.SHOW_DEBUG = 0;
    Game.MOBILE_CLIENT = false;
    return Game;
}());
exports.Game = Game;


/***/ }),

/***/ "./src/game/Initializer.ts":
/*!*********************************!*\
  !*** ./src/game/Initializer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(/*! ./Game */ "./src/game/Game.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
window.addEventListener('DOMContentLoaded', function () {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            if (BABYLON.Engine.isSupported()) {
                var htmlElement = document.getElementById('renderCanvas');
                document.getElementsByTagName("body")[0].setAttribute("oncontextmenu", "return false");
                new Game_1.Game(htmlElement, window.location.hostname + ':5000', SESSION_TOKEN, false);
            }
        }
    };
});


/***/ }),

/***/ "./src/game/Initializers/Chest.ts":
/*!****************************************!*\
  !*** ./src/game/Initializers/Chest.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TooltipMesh_1 = __webpack_require__(/*! ../GUI/Tooltips/TooltipMesh */ "./src/game/GUI/Tooltips/TooltipMesh.ts");
var GoToMeshAndRunAction_1 = __webpack_require__(/*! ../Actions/GoToMeshAndRunAction */ "./src/game/Actions/GoToMeshAndRunAction.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Chest = /** @class */ (function () {
    /**
     *
     * @param {Game} game
     * @param chestData
     * @param chestKey
     */
    function Chest(game, chestData, chestKey) {
        var self = this;
        var scene = game.getBabylonScene();
        var tooltip;
        var opened = chestData.opened;
        var position = chestData.position;
        var rotation = chestData.rotation;
        var chestMesh = game.getSceneManger().assets.chest.createClone('chest', true);
        var gameCamera = scene.getCameraByName('gameCamera');
        if (!chestMesh) {
            throw new TypeError('Wrong chest mesh name.');
        }
        chestMesh.position = new BABYLON.Vector3(position.x, position.y, position.z);
        chestMesh.rotation = new BABYLON.Vector3(rotation.x, rotation.y, rotation.z);
        chestMesh.isPickable = true;
        chestMesh.checkCollisions = true;
        chestMesh.material.backFaceCulling = false;
        if (!opened) {
            var hl = new BABYLON.HighlightLayer("highlightLayer", scene, { camera: gameCamera });
            hl.addMesh(chestMesh, BABYLON.Color3.Magenta());
            self.hightlightLayer = hl;
        }
        this.mesh = chestMesh;
        this.mesh.actionManager = new BABYLON.ActionManager(game.getBabylonScene());
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
            tooltip = new TooltipMesh_1.TooltipMesh(chestMesh, chestData.name);
        }));
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
            tooltip.container.dispose();
        }));
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            GoToMeshAndRunAction_1.GoToMeshAndRunAction.execute(game, chestMesh, function () {
                game.socketClient.socket.emit('openChest', chestKey);
            });
        }));
    }
    return Chest;
}());
exports.Chest = Chest;


/***/ }),

/***/ "./src/game/Initializers/Collisions.ts":
/*!*********************************************!*\
  !*** ./src/game/Initializers/Collisions.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(/*! ../Game */ "./src/game/Game.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Collisions = /** @class */ (function () {
    function Collisions() {
    }
    Collisions.setCollider = function (scene, parent, scalingSize, freezeInWorld) {
        if (scalingSize === void 0) { scalingSize = new BABYLON.Vector3(2, 3, 2); }
        if (freezeInWorld === void 0) { freezeInWorld = true; }
        // let collider = BABYLON.Mesh.CreateBox('collider_box_of_' + parent.name, 0, scene, false);
        // let parentBoundBox = parent.getBoundingInfo();
        // collider.scaling = new BABYLON.Vector3(parentBoundBox.boundingBox.maximum.x * 2, parentBoundBox.boundingBox.maximum.y * 2, parentBoundBox.boundingBox.maximum.z * 2);
        // collider.parent = parent;
        parent.isPickable = false;
        if (Game_1.Game.SHOW_COLLIDERS) {
            // collider.material = new BABYLON.StandardMaterial("collidermat", scene);
            // collider.material.alpha = 0.3;
            parent.isVisible = true;
        }
        else {
            parent.isVisible = false;
        }
        parent.checkCollisions = true;
        if (freezeInWorld) {
            parent.freezeWorldMatrix();
        }
        return parent;
    };
    return Collisions;
}());
exports.Collisions = Collisions;


/***/ }),

/***/ "./src/game/Initializers/DroppedItem.ts":
/*!**********************************************!*\
  !*** ./src/game/Initializers/DroppedItem.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BounceAnimation_1 = __webpack_require__(/*! ../Animations/BounceAnimation */ "./src/game/Animations/BounceAnimation.ts");
var TooltipMesh_1 = __webpack_require__(/*! ../GUI/Tooltips/TooltipMesh */ "./src/game/GUI/Tooltips/TooltipMesh.ts");
var DroppedItem_1 = __webpack_require__(/*! ../Particles/DroppedItem */ "./src/game/Particles/DroppedItem.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var GoToMeshAndRunAction_1 = __webpack_require__(/*! ../Actions/GoToMeshAndRunAction */ "./src/game/Actions/GoToMeshAndRunAction.ts");
var DroppedItem = /** @class */ (function () {
    function DroppedItem(game, item, position, itemDropKey) {
        var scene = game.getBabylonScene();
        var droppedItemBox = BABYLON.Mesh.CreateBox(item.name + '_Box', 3, scene, false);
        droppedItemBox.checkCollisions = false;
        droppedItemBox.visibility = 0;
        droppedItemBox.position.x = position.x;
        droppedItemBox.position.z = position.z;
        droppedItemBox.position.y = 1;
        var itemSpriteManager = new BABYLON.SpriteManager("playerManager", 'assets/Miniatures/' + item.image + '.png', 1, { width: 512, height: 512 }, scene);
        var itemSprite = new BABYLON.Sprite("player", itemSpriteManager);
        itemSprite.width = 1.8;
        itemSprite.height = 1.8;
        itemSprite.position.x = position.x;
        itemSprite.position.z = position.z;
        itemSprite.position.y = 4;
        itemSpriteManager.layerMask = 2;
        var animationBounce = BounceAnimation_1.BounceAnimation.getAnimation();
        //@ts-ignore
        itemSprite.animations.push(animationBounce);
        scene.beginAnimation(itemSprite, 0, 30, true);
        droppedItemBox.actionManager = new BABYLON.ActionManager(scene);
        droppedItemBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            GoToMeshAndRunAction_1.GoToMeshAndRunAction.execute(game, droppedItemBox, function () {
                game.socketClient.socket.emit('addDroppedItem', itemDropKey);
            });
        }));
        var particleSystem = new DroppedItem_1.DroppedItem(game, droppedItemBox);
        particleSystem.particleSystem.start();
        droppedItemBox.freezeWorldMatrix();
        this.tooltipMesh = new TooltipMesh_1.TooltipMesh(droppedItemBox, item.name);
        this.itemSprite = itemSprite;
        this.itemSpriteManager = itemSpriteManager;
        this.mesh = droppedItemBox;
        this.game = game;
        this.itemName = item.name;
    }
    DroppedItem.prototype.pickItem = function () {
        this.game.gui.playerLogsQuests.addText(this.itemName + '  has been picked up.', 'green');
        this.mesh.dispose();
        this.tooltipMesh.container.dispose();
        this.itemSprite.dispose();
        this.itemSpriteManager.dispose();
    };
    return DroppedItem;
}());
exports.DroppedItem = DroppedItem;


/***/ }),

/***/ "./src/game/Initializers/Gateways.ts":
/*!*******************************************!*\
  !*** ./src/game/Initializers/Gateways.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TooltipMesh_1 = __webpack_require__(/*! ../GUI/Tooltips/TooltipMesh */ "./src/game/GUI/Tooltips/TooltipMesh.ts");
var GoToMeshAndRunAction_1 = __webpack_require__(/*! ../Actions/GoToMeshAndRunAction */ "./src/game/Actions/GoToMeshAndRunAction.ts");
var GatewayParticles_1 = __webpack_require__(/*! ../Particles/GatewayParticles */ "./src/game/Particles/GatewayParticles.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Gateway = /** @class */ (function () {
    function Gateway(game, meshName, isActive, openSceneType, entranceName) {
        var gateway = game.getBabylonScene().getMeshByName(meshName);
        if (!gateway) {
            throw new TypeError('Wrong gateway mesh name.');
        }
        this.mesh = gateway;
        gateway.visibility = 0;
        gateway.isPickable = true;
        this.tooltip = new TooltipMesh_1.TooltipMesh(gateway, entranceName);
        var gatewayParticleSystem = GatewayParticles_1.GatewayParticles.initParticleSystem(game, gateway, isActive);
        gatewayParticleSystem.start();
        this.particleSystem = gatewayParticleSystem;
        gateway.actionManager = new BABYLON.ActionManager(game.getBabylonScene());
        gateway.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
            game.gui.characterTopHp.showGateway(entranceName);
        }));
        gateway.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
            game.gui.characterTopHp.hideHpBar();
        }));
        var enterTheGateway = function () {
            if (!isActive) {
                game.gui.playerLogsQuests.addText('This gateway is locked!', 'yellow');
                return;
            }
            GoToMeshAndRunAction_1.GoToMeshAndRunAction.execute(game, gateway, function () {
                game.socketClient.socket.emit('changeSceneTrigger', openSceneType);
            });
        };
        gateway.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, enterTheGateway));
        gateway.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: game.player.mesh
        }, enterTheGateway));
    }
    return Gateway;
}());
exports.Gateway = Gateway;


/***/ }),

/***/ "./src/game/Initializers/Quests.ts":
/*!*****************************************!*\
  !*** ./src/game/Initializers/Quests.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TooltipMesh_1 = __webpack_require__(/*! ../GUI/Tooltips/TooltipMesh */ "./src/game/GUI/Tooltips/TooltipMesh.ts");
var newQuest_1 = __webpack_require__(/*! ../GUI/popup/newQuest */ "./src/game/GUI/popup/newQuest.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Quests = /** @class */ (function () {
    /**
     *
     * @param {Game} game
     * @param serverData
     * @param activeQuest
     */
    function Quests(game, serverData, activeQuest) {
        var self = this;
        var questPicker = game.getBabylonScene().getMeshByName(serverData.objectName);
        if (!questPicker) {
            throw new TypeError('Wrong quest mesh name.');
        }
        questPicker.isPickable = true;
        this.game = game;
        this.mesh = questPicker;
        this.mesh.actionManager = new BABYLON.ActionManager(game.getBabylonScene());
        self.createTooltip(serverData, activeQuest, questPicker);
        self.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            var quest = new newQuest_1.NewQuest(game.gui, serverData);
            quest.open();
        }));
    }
    Quests.prototype.refreshTooltipColor = function (serverData, activeQuest, questPicker) {
        var material = this.tooltipMesh.material;
        if (activeQuest && activeQuest.questId != serverData.questId) {
            material.diffuseColor = new BABYLON.Color3(1, 0, 0);
        }
        else if (activeQuest && activeQuest.questId == serverData.questId) {
            material.diffuseColor = new BABYLON.Color3(1, 1, 0);
        }
        else {
            material.diffuseColor = new BABYLON.Color3(0, 1, 0);
            this.tooltipGui = new TooltipMesh_1.TooltipMesh(questPicker, 'New quest', -45);
        }
        return this;
    };
    Quests.prototype.createTooltip = function (serverData, activeQuest, questPicker) {
        var box = BABYLON.Mesh.CreateBox("quest_box", 0.4, this.game.getBabylonScene());
        box.material = new BABYLON.StandardMaterial("quest_box_material", this.game.getBabylonScene());
        box.parent = this.mesh;
        box.position.y += 3;
        var keys = [];
        keys.push({
            frame: 0,
            value: 0
        });
        keys.push({
            frame: 30,
            value: -2
        });
        var animationBox = new BABYLON.Animation("rotation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE);
        animationBox.setKeys(keys);
        box.animations = [];
        box.animations.push(animationBox);
        this.tooltipMesh = box;
        this.game.getBabylonScene().beginAnimation(box, 0, 30, true);
        this.refreshTooltipColor(serverData, activeQuest, questPicker);
    };
    Quests.prototype.dispose = function () {
        if (this.tooltipGui) {
            this.tooltipGui.container.dispose();
        }
        this.tooltipMesh.dispose();
    };
    return Quests;
}());
exports.Quests = Quests;


/***/ }),

/***/ "./src/game/Initializers/RandomSpecialItem.ts":
/*!****************************************************!*\
  !*** ./src/game/Initializers/RandomSpecialItem.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TooltipMesh_1 = __webpack_require__(/*! ../GUI/Tooltips/TooltipMesh */ "./src/game/GUI/Tooltips/TooltipMesh.ts");
var GoToMeshAndRunAction_1 = __webpack_require__(/*! ../Actions/GoToMeshAndRunAction */ "./src/game/Actions/GoToMeshAndRunAction.ts");
var DroppedItem_1 = __webpack_require__(/*! ../Particles/DroppedItem */ "./src/game/Particles/DroppedItem.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var RandomSpecialItem = /** @class */ (function () {
    /**
     *
     * @param {Game} game
     * @param randomSpecialItemData
     * @param randomSpecialItemKey
     */
    function RandomSpecialItem(game, randomSpecialItemData, randomSpecialItemKey) {
        var scene = game.getBabylonScene();
        var tooltip;
        var position = randomSpecialItemData.position;
        var randomItemMesh = game.getSceneManger().assets.natureGrain.createClone(randomSpecialItemData.specialItem.meshName);
        randomItemMesh.position = new BABYLON.Vector3(position.x, position.y, position.z);
        randomItemMesh.isPickable = true;
        var particleSystem = new DroppedItem_1.DroppedItem(game, randomItemMesh);
        particleSystem.particleSystem.start();
        this.mesh = randomItemMesh;
        this.mesh.actionManager = new BABYLON.ActionManager(scene);
        this.tooltip = new TooltipMesh_1.TooltipMesh(randomItemMesh, randomSpecialItemData.specialItem.name);
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            GoToMeshAndRunAction_1.GoToMeshAndRunAction.execute(game, randomItemMesh, function () {
                game.socketClient.socket.emit('pickRandomItem', randomSpecialItemKey);
            });
        }));
    }
    return RandomSpecialItem;
}());
exports.RandomSpecialItem = RandomSpecialItem;


/***/ }),

/***/ "./src/game/Loader/SlavsLoader.ts":
/*!****************************************!*\
  !*** ./src/game/Loader/SlavsLoader.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SlavsLoader = /** @class */ (function () {
    function SlavsLoader(loadingUIText) {
        this.loadingUIText = loadingUIText;
    }
    SlavsLoader.prototype.displayLoadingUI = function () {
        var loader = document.getElementById("game-loader");
        loader.style.display = "inline";
        loader.style.opacity = "1";
        SlavsLoader.changeLoadingText('Loading scene...');
    };
    SlavsLoader.prototype.hideLoadingUI = function () {
        var loader = document.getElementById("game-loader");
        var canvas = document.getElementById("renderCanvas");
        loader.style.opacity = "0";
        loader.style.display = "none";
    };
    SlavsLoader.changeLoadingText = function (text) {
        var loaderText = document.getElementById("game-loader-text");
        loaderText.innerHTML = text;
    };
    SlavsLoader.showLoaderWithText = function (text) {
        var loader = document.getElementById("game-loader");
        loader.style.opacity = "1";
        loader.style.display = "inline";
        SlavsLoader.changeLoadingText(text);
    };
    return SlavsLoader;
}());
exports.SlavsLoader = SlavsLoader;


/***/ }),

/***/ "./src/game/Options/Options.ts":
/*!*************************************!*\
  !*** ./src/game/Options/Options.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Fog_1 = __webpack_require__(/*! ../Environment/Fog/Fog */ "./src/game/Environment/Fog/Fog.ts");
var GameOptions = /** @class */ (function () {
    function GameOptions(game) {
        this.dynamicShadowsArray = [];
        this.refreshAllData();
        this.initInScene(game);
    }
    GameOptions.prototype.refreshAllData = function () {
        this.staticShadows = this.getFromLocalStorage('staticShadows');
        this.dynamicShadows = this.getFromLocalStorage('dynamicShadows');
        this.postProccessing = this.getFromLocalStorage('postProccessing');
        this.fxaa = this.getFromLocalStorage('fxaa');
        this.fog = this.getFromLocalStorage('fog');
        this.dof = this.getFromLocalStorage('dof');
        this.fStop = this.getFromLocalStorage('fStop');
        this.focusDistance = this.getFromLocalStorage('focusDistance');
        this.focalLength = this.getFromLocalStorage('focalLength');
        this.lensSize = this.getFromLocalStorage('lensSize');
        this.bloom = this.getFromLocalStorage('bloom');
    };
    GameOptions.prototype.getFromLocalStorage = function (key) {
        return JSON.parse(localStorage.getItem('options.' + key));
    };
    GameOptions.saveInLocalStorage = function (key, value, game) {
        localStorage.setItem('options.' + key, JSON.stringify(value));
        game.getSceneManger().options.initInScene(game);
    };
    GameOptions.prototype.addMeshToDynamicShadowGenerator = function (mesh) {
        this.dynamicShadowsArray.push(mesh);
        if (this.dynamicShadowGenerator) {
            this.dynamicShadowGenerator.getShadowMap().renderList.push(mesh);
        }
    };
    GameOptions.prototype.initInScene = function (game) {
        this.refreshAllData();
        var scene = game.getBabylonScene();
        var self = this;
        var camera = scene.getCameraByName('gameCamera');
        if (this.staticShadows && !this.staticShadowGenerator && game.getSceneManger().environment && game.getSceneManger().environment.light) {
            var shadowGenerator = new BABYLON.ShadowGenerator(2048, game.getSceneManger().environment.light);
            shadowGenerator.usePercentageCloserFiltering = true;
            shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
            shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
            game.getSceneManger().environment.light.autoUpdateExtends = false;
            this.staticShadowGenerator = shadowGenerator;
            var staticShadowMeshes = game.getSceneManger().environment.staticShadowObjects;
            for (var i = 0; i < staticShadowMeshes.length; i++) {
                var shadowedMesh = staticShadowMeshes[i];
                shadowGenerator.getShadowMap().renderList.push(shadowedMesh);
            }
        }
        else if (!this.staticShadows && this.staticShadowGenerator) {
            this.staticShadowGenerator.dispose();
            this.staticShadowGenerator = null;
        }
        if (this.dynamicShadows && !this.dynamicShadowGenerator) {
            self.dynamicShadowGenerator = new BABYLON.ShadowGenerator(512, game.player.playerLight);
            self.dynamicShadowsArray.forEach(function (mesh) {
                self.dynamicShadowGenerator.getShadowMap().renderList.push(mesh);
            });
        }
        else if (!this.dynamicShadows && this.dynamicShadowGenerator) {
            this.dynamicShadowGenerator.dispose();
            this.dynamicShadowGenerator = null;
        }
        if (!this.postProccessing && this.renderingPipeline) {
            this.renderingPipeline.dispose();
            this.renderingPipeline = null;
        }
        else if (this.postProccessing && !this.renderingPipeline) {
            this.renderingPipeline = new BABYLON.DefaultRenderingPipeline("postProccesing", false, scene, [camera]);
        }
        if (this.renderingPipeline) {
            this.renderingPipeline.fxaaEnabled = this.fxaa;
            this.renderingPipeline.depthOfFieldEnabled = this.dof;
            this.renderingPipeline.bloomEnabled = this.bloom;
            this.renderingPipeline.bloomThreshold = 0.1;
            this.renderingPipeline.bloomWeight = 0.5;
            this.renderingPipeline.bloomScale = 1;
            //TODO: DOFF
            // this.renderingPipeline.depthOfField.depthOfFieldBlurLevel = BABYLON.DepthOfFieldEffectBlurLevel.Medium;
            // this.renderingPipeline.depthOfField.fStop = this.fStop;
            // this.renderingPipeline.depthOfField.focusDistance = this.focusDistance;
            // this.renderingPipeline.depthOfField.focalLength = this.focalLength;
            // this.renderingPipeline.depthOfField.lensSize = this.lensSize;
            this.renderingPipeline.depthOfField.fStop = 0.1;
            this.renderingPipeline.depthOfField.focusDistance = 22000;
            this.renderingPipeline.depthOfField.focalLength = 400;
            this.renderingPipeline.depthOfField.lensSize = 10;
        }
        if (this.fog) {
            Fog_1.Fog.addFog(scene);
        }
        else {
            Fog_1.Fog.disableFog(scene);
        }
    };
    return GameOptions;
}());
exports.GameOptions = GameOptions;


/***/ }),

/***/ "./src/game/Particles/AbstractParticle.ts":
/*!************************************************!*\
  !*** ./src/game/Particles/AbstractParticle.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParticle = /** @class */ (function () {
    function AbstractParticle(game, emitter) {
        this.game = game;
        this.emitter = emitter;
        this.initParticleSystem();
    }
    return AbstractParticle;
}());
exports.AbstractParticle = AbstractParticle;


/***/ }),

/***/ "./src/game/Particles/Blood.ts":
/*!*************************************!*\
  !*** ./src/game/Particles/Blood.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParticle_1 = __webpack_require__(/*! ./AbstractParticle */ "./src/game/Particles/AbstractParticle.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Blood = /** @class */ (function (_super) {
    __extends(Blood, _super);
    function Blood() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blood.prototype.initParticleSystem = function () {
        var particleSystem = new BABYLON.GPUParticleSystem("particle1s", { capacity: 50 }, this.game.getBabylonScene());
        particleSystem.particleTexture = new BABYLON.Texture("assets/Smoke3.png", this.game.getBabylonScene());
        particleSystem.emitter = this.emitter;
        particleSystem.minEmitBox = new BABYLON.Vector3(0, this.emitter.geometry.extend.maximum.y * 0.7, 0); // Starting all from
        particleSystem.maxEmitBox = new BABYLON.Vector3(0, this.emitter.geometry.extend.maximum.y * 0.7, 0); // To...
        particleSystem.color1 = new BABYLON.Color4(1, 0, 0, 1);
        particleSystem.color2 = new BABYLON.Color4(1, 0, 0, 0.1);
        particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 1);
        particleSystem.minSize = 0.3;
        particleSystem.maxSize = 0.5;
        particleSystem.minLifeTime = 1;
        particleSystem.maxLifeTime = 1;
        particleSystem.emitRate = 50;
        particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
        particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
        particleSystem.direction1 = new BABYLON.Vector3(-1, 4, -1);
        particleSystem.direction2 = new BABYLON.Vector3(4, 4, 4);
        particleSystem.minAngularSpeed = -10.0;
        particleSystem.maxAngularSpeed = 10.0;
        particleSystem.minEmitPower = 0.5;
        particleSystem.maxEmitPower = 1;
        particleSystem.updateSpeed = 0.02;
        particleSystem.layerMask = 2;
        this.particleSystem = particleSystem;
    };
    return Blood;
}(AbstractParticle_1.AbstractParticle));
exports.Blood = Blood;


/***/ }),

/***/ "./src/game/Particles/DroppedItem.ts":
/*!*******************************************!*\
  !*** ./src/game/Particles/DroppedItem.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParticle_1 = __webpack_require__(/*! ./AbstractParticle */ "./src/game/Particles/AbstractParticle.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var DroppedItem = /** @class */ (function (_super) {
    __extends(DroppedItem, _super);
    function DroppedItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DroppedItem.prototype.initParticleSystem = function () {
        var fireSystem = new BABYLON.GPUParticleSystem("DroppedItemParticles", { capacity: 20 }, this.game.getBabylonScene());
        fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getBabylonScene());
        fireSystem.emitter = this.emitter;
        fireSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1);
        fireSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 1);
        fireSystem.color1 = new BABYLON.Color4(0, 0.5, 0, 1.0);
        fireSystem.color2 = new BABYLON.Color4(0, 0.5, 0, 1.0);
        fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
        fireSystem.minSize = 0.2;
        fireSystem.maxSize = 0.5;
        fireSystem.minLifeTime = 0.5;
        fireSystem.maxLifeTime = 2.5;
        fireSystem.emitRate = 10;
        fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
        fireSystem.direction1 = new BABYLON.Vector3(0, 0.2, 0);
        fireSystem.direction2 = new BABYLON.Vector3(0, 0.5, 0);
        fireSystem.minEmitPower = 1;
        fireSystem.maxEmitPower = 1;
        fireSystem.layerMask = 2;
        this.particleSystem = fireSystem;
    };
    return DroppedItem;
}(AbstractParticle_1.AbstractParticle));
exports.DroppedItem = DroppedItem;


/***/ }),

/***/ "./src/game/Particles/FireplaceFire.ts":
/*!*********************************************!*\
  !*** ./src/game/Particles/FireplaceFire.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParticle_1 = __webpack_require__(/*! ./AbstractParticle */ "./src/game/Particles/AbstractParticle.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var FireplaceFire = /** @class */ (function (_super) {
    __extends(FireplaceFire, _super);
    function FireplaceFire() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FireplaceFire.prototype.initParticleSystem = function () {
        var fireSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 50 }, this.game.getBabylonScene());
        fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getBabylonScene());
        fireSystem.emitter = this.emitter;
        fireSystem.minEmitBox = new BABYLON.Vector3(0.5, 0, 0.5);
        fireSystem.maxEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5);
        fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
        fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
        fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
        fireSystem.minSize = 0.2;
        fireSystem.maxSize = 0.7;
        fireSystem.minLifeTime = 0.2;
        fireSystem.maxLifeTime = 0.4;
        fireSystem.emitRate = 150;
        fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
        fireSystem.direction1 = new BABYLON.Vector3(0, 2, 0);
        fireSystem.direction2 = new BABYLON.Vector3(0, 2, 0);
        fireSystem.minAngularSpeed = -10;
        fireSystem.maxAngularSpeed = Math.PI;
        fireSystem.minEmitPower = 1;
        fireSystem.maxEmitPower = 3;
        fireSystem.updateSpeed = 0.007;
        fireSystem.layerMask = 2;
        this.particleSystem = fireSystem;
    };
    return FireplaceFire;
}(AbstractParticle_1.AbstractParticle));
exports.FireplaceFire = FireplaceFire;


/***/ }),

/***/ "./src/game/Particles/FireplaceSmoke.ts":
/*!**********************************************!*\
  !*** ./src/game/Particles/FireplaceSmoke.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParticle_1 = __webpack_require__(/*! ./AbstractParticle */ "./src/game/Particles/AbstractParticle.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var FireplaceSmoke = /** @class */ (function (_super) {
    __extends(FireplaceSmoke, _super);
    function FireplaceSmoke() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FireplaceSmoke.prototype.initParticleSystem = function () {
        var smokeSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 100 }, this.game.getBabylonScene());
        smokeSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getBabylonScene());
        smokeSystem.emitter = this.emitter;
        smokeSystem.minEmitBox = new BABYLON.Vector3(0.5, 1.5, 0.5);
        smokeSystem.maxEmitBox = new BABYLON.Vector3(-0.5, 1.5, -0.5);
        smokeSystem.color1 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
        smokeSystem.color2 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
        smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
        smokeSystem.minSize = 0.3;
        smokeSystem.maxSize = 1;
        smokeSystem.minLifeTime = 0.3;
        smokeSystem.maxLifeTime = 0.6;
        smokeSystem.emitRate = 100;
        smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);
        smokeSystem.direction1 = new BABYLON.Vector3(-1.5, 8, -1.5);
        smokeSystem.direction2 = new BABYLON.Vector3(1.5, 8, 1.5);
        smokeSystem.minAngularSpeed = 50;
        smokeSystem.maxAngularSpeed = Math.PI;
        smokeSystem.minEmitPower = 0.5;
        smokeSystem.maxEmitPower = 1.5;
        smokeSystem.updateSpeed = 0.005;
        smokeSystem.layerMask = 2;
        this.particleSystem = smokeSystem;
    };
    return FireplaceSmoke;
}(AbstractParticle_1.AbstractParticle));
exports.FireplaceSmoke = FireplaceSmoke;


/***/ }),

/***/ "./src/game/Particles/GatewayParticles.ts":
/*!************************************************!*\
  !*** ./src/game/Particles/GatewayParticles.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var GatewayParticles = /** @class */ (function () {
    function GatewayParticles() {
    }
    GatewayParticles.initParticleSystem = function (game, emitter, isActive) {
        var particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 150 }, game.getBabylonScene());
        particleSystem.particleTexture = new BABYLON.Texture("assets/flare.png", game.getBabylonScene());
        particleSystem.emitter = emitter;
        particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1);
        particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 1);
        if (isActive) {
            particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1);
            particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1);
        }
        else {
            particleSystem.color1 = new BABYLON.Color4(1, 0, 0.0, 1);
            particleSystem.color2 = new BABYLON.Color4(0.5, 0, 0.0, 1);
        }
        particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
        particleSystem.minSize = 0.1;
        particleSystem.maxSize = 0.5;
        particleSystem.minLifeTime = 0.3;
        particleSystem.maxLifeTime = 1;
        particleSystem.emitRate = 150;
        particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        particleSystem.gravity = new BABYLON.Vector3(0, 9.81, 0);
        particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
        particleSystem.direction2 = new BABYLON.Vector3(0, 0.25, 0);
        particleSystem.minAngularSpeed = 0;
        particleSystem.maxAngularSpeed = Math.PI;
        particleSystem.minEmitPower = 0.5;
        particleSystem.maxEmitPower = 1.5;
        particleSystem.updateSpeed = 0.004;
        particleSystem.layerMask = 2;
        return particleSystem;
    };
    return GatewayParticles;
}());
exports.GatewayParticles = GatewayParticles;


/***/ }),

/***/ "./src/game/Particles/Pointer/ClickParticles.ts":
/*!******************************************************!*\
  !*** ./src/game/Particles/Pointer/ClickParticles.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var ClickParticles = /** @class */ (function () {
    function ClickParticles() {
    }
    ClickParticles.getParticles = function (scene) {
        var particleSystem = new BABYLON.ParticleSystem("clickParticles", 50, scene);
        particleSystem.particleTexture = new BABYLON.Texture("assets/flare.png", scene);
        particleSystem.layerMask = 2;
        particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
        particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
        particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
        particleSystem.emitter = new BABYLON.Vector3(0, 2, 0); // the starting location
        particleSystem.minSize = 0.5;
        particleSystem.maxSize = 0.5;
        particleSystem.minLifeTime = 0.5;
        particleSystem.maxLifeTime = 1.5;
        particleSystem.emitRate = 20;
        particleSystem.targetStopDuration = 0.2;
        particleSystem.createPointEmitter(new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 1, 0));
        // Speed
        particleSystem.minEmitPower = 1;
        particleSystem.maxEmitPower = 3;
        return particleSystem;
    };
    return ClickParticles;
}());
exports.ClickParticles = ClickParticles;


/***/ }),

/***/ "./src/game/Particles/Skills/Heal.ts":
/*!*******************************************!*\
  !*** ./src/game/Particles/Skills/Heal.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParticle_1 = __webpack_require__(/*! ../AbstractParticle */ "./src/game/Particles/AbstractParticle.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Heal = /** @class */ (function (_super) {
    __extends(Heal, _super);
    function Heal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heal.prototype.initParticleSystem = function () {
        var scene = this.game.getBabylonScene();
        var emitter = BABYLON.Mesh.CreateBox("emitter0", 0.1, scene);
        emitter.isVisible = false;
        emitter.parent = this.emitter;
        var fireSystem = new BABYLON.ParticleSystem("particles", 1000, scene);
        fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", scene);
        fireSystem.minSize = 0.3;
        fireSystem.maxSize = 0.3;
        fireSystem.minEmitPower = 1.0;
        fireSystem.maxEmitPower = 1;
        fireSystem.minLifeTime = 1;
        fireSystem.maxLifeTime = 1;
        fireSystem.emitRate = 200;
        fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        fireSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0);
        fireSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
        fireSystem.gravity = new BABYLON.Vector3(0, 9, 0);
        fireSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
        fireSystem.direction2 = new BABYLON.Vector3(0, 0, 0);
        fireSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
        fireSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
        fireSystem.targetStopDuration = 0.8;
        fireSystem.emitter = emitter;
        this.particleSystem = fireSystem;
    };
    return Heal;
}(AbstractParticle_1.AbstractParticle));
exports.Heal = Heal;


/***/ }),

/***/ "./src/game/Particles/Skills/ShieldAttack.ts":
/*!***************************************************!*\
  !*** ./src/game/Particles/Skills/ShieldAttack.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParticle_1 = __webpack_require__(/*! ../AbstractParticle */ "./src/game/Particles/AbstractParticle.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var ShieldAttack = /** @class */ (function (_super) {
    __extends(ShieldAttack, _super);
    function ShieldAttack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShieldAttack.prototype.initParticleSystem = function () {
        var box = BABYLON.MeshBuilder.CreateBox("bx0", { size: 1 }, this.game.getBabylonScene());
        box.visibility = 0;
        box.scaling = new BABYLON.Vector3(1, 1, 0.1);
        box.position = new BABYLON.Vector3(0, 0, 0.1);
        box.parent = this.emitter;
        box.attachToBone(this.emitter.skeleton.bones[13], this.emitter);
        var fireSystem = new BABYLON.ParticleSystem("particles", 1000, this.game.getBabylonScene());
        fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getBabylonScene());
        fireSystem.emitter = box;
        fireSystem.minSize = 1;
        fireSystem.maxSize = 1;
        fireSystem.minEmitPower = 0;
        fireSystem.maxEmitPower = 1;
        fireSystem.minLifeTime = 0.2;
        fireSystem.maxLifeTime = 0.2;
        fireSystem.emitRate = 150;
        fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        fireSystem.minEmitBox = new BABYLON.Vector3(-1, -1, -1);
        fireSystem.maxEmitBox = new BABYLON.Vector3(1, 1, 1);
        fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
        fireSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
        fireSystem.direction2 = new BABYLON.Vector3(0, 0, 0);
        fireSystem.color1 = new BABYLON.Color4(1, 1, 1, 1);
        fireSystem.color2 = new BABYLON.Color4(1, 1, 1, 1);
        fireSystem.updateSpeed = 0.01;
        this.particleSystem = fireSystem;
    };
    return ShieldAttack;
}(AbstractParticle_1.AbstractParticle));
exports.ShieldAttack = ShieldAttack;


/***/ }),

/***/ "./src/game/Particles/SolidParticleSystem/AbstractSolidParticleSystem.ts":
/*!*******************************************************************************!*\
  !*** ./src/game/Particles/SolidParticleSystem/AbstractSolidParticleSystem.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var AbstractSolidParticle = /** @class */ (function () {
    function AbstractSolidParticle(game, parent, shape, isCollider) {
        if (isCollider === void 0) { isCollider = false; }
        this.game = game;
        this.parent = parent;
        this.shape = shape;
        if (isCollider) {
            this.collider = BABYLON.MeshBuilder.CreateBox("box", { height: 10 }, game.getBabylonScene());
            this.collider.visibility = 0;
        }
        parent.visibility = 0;
        parent.isPickable = false;
    }
    return AbstractSolidParticle;
}());
exports.AbstractSolidParticle = AbstractSolidParticle;


/***/ }),

/***/ "./src/game/Particles/SolidParticleSystem/Nature.ts":
/*!**********************************************************!*\
  !*** ./src/game/Particles/SolidParticleSystem/Nature.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractSolidParticleSystem_1 = __webpack_require__(/*! ./AbstractSolidParticleSystem */ "./src/game/Particles/SolidParticleSystem/AbstractSolidParticleSystem.ts");
var Collisions_1 = __webpack_require__(/*! ../../Initializers/Collisions */ "./src/game/Initializers/Collisions.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Nature = /** @class */ (function (_super) {
    __extends(Nature, _super);
    function Nature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nature.prototype.buildSPS = function (count) {
        var self = this;
        var game = this.game;
        var parentPositions = this.parent.getVerticesData(BABYLON.VertexBuffer.PositionKind);
        var positionLength = parentPositions.length;
        var myBuilder = function (particle, i, s) {
            var randomPosition = 2;
            var position = new BABYLON.Vector3(parentPositions[(s * randomPosition + s)], parentPositions[s * randomPosition + s + 1], parentPositions[s * randomPosition + s + 2]);
            if (self.collider) {
                var newCollider = self.collider.createInstance('sps_nature_collision');
                newCollider.position.x = position.x;
                newCollider.position.y = position.y;
                newCollider.position.z = position.z;
                newCollider.isVisible = true;
                Collisions_1.Collisions.setCollider(game.getBabylonScene(), newCollider);
            }
            particle.position = position;
            var random = Math.random() + 0.5;
            particle.scaling.y = random;
            particle.scaling.x = random;
            particle.scaling.z = random;
        };
        var sps = new BABYLON.SolidParticleSystem('spsNature', this.game.getBabylonScene(), { updatable: false });
        sps.addShape(this.shape, count, { positionFunction: myBuilder });
        var spsMesh = sps.buildMesh();
        spsMesh.material = this.shape.material;
        this.spsMesh = spsMesh;
        return this;
    };
    return Nature;
}(AbstractSolidParticleSystem_1.AbstractSolidParticle));
exports.Nature = Nature;


/***/ }),

/***/ "./src/game/Particles/SolidParticleSystem/NatureBlock.ts":
/*!***************************************************************!*\
  !*** ./src/game/Particles/SolidParticleSystem/NatureBlock.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractSolidParticleSystem_1 = __webpack_require__(/*! ./AbstractSolidParticleSystem */ "./src/game/Particles/SolidParticleSystem/AbstractSolidParticleSystem.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var NatureBlock = /** @class */ (function (_super) {
    __extends(NatureBlock, _super);
    function NatureBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NatureBlock.prototype.buildSPS = function (count) {
        var positions = this.parent.getVerticesData(BABYLON.VertexBuffer.PositionKind);
        var myBuilder = function (particle, i, s) {
            var randomPosition = Math.round(Math.random() * 5);
            var position = new BABYLON.Vector3(positions[s * randomPosition * 3], positions[s * randomPosition * 3 + 1], positions[s * randomPosition * 3 + 2]);
            particle.position = position;
            var random = Math.random() + 1;
            particle.scaling.y = random;
            particle.scaling.x = random;
            particle.scaling.z = random;
        };
        var sps = new BABYLON.SolidParticleSystem('spsNatureBlock', this.game.getBabylonScene(), { updatable: false });
        sps.addShape(this.shape, count, { positionFunction: myBuilder });
        var spsMesh = sps.buildMesh();
        spsMesh.material = this.shape.material;
        return this;
    };
    return NatureBlock;
}(AbstractSolidParticleSystem_1.AbstractSolidParticle));
exports.NatureBlock = NatureBlock;


/***/ }),

/***/ "./src/game/Particles/WalkSmoke.ts":
/*!*****************************************!*\
  !*** ./src/game/Particles/WalkSmoke.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var WalkSmoke = /** @class */ (function () {
    function WalkSmoke() {
    }
    WalkSmoke.getParticles = function (scene, emitRate, emitter) {
        var smokeSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 10 }, scene);
        smokeSystem.particleTexture = new BABYLON.Texture("assets/flare.png", scene);
        smokeSystem.emitter = emitter;
        smokeSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0.8);
        smokeSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0.8);
        smokeSystem.color1 = new BABYLON.Color4(0.2, 0.2, 0.1, 1.0);
        smokeSystem.color2 = new BABYLON.Color4(0.2, 0.2, 0.1, 1.0);
        smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
        smokeSystem.minSize = 0.3;
        smokeSystem.maxSize = 1.5;
        smokeSystem.minLifeTime = 0.15;
        smokeSystem.maxLifeTime = 0.15;
        smokeSystem.emitRate = emitRate;
        smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);
        smokeSystem.direction1 = new BABYLON.Vector3(0, 4, 0);
        smokeSystem.direction2 = new BABYLON.Vector3(0, 4, 0);
        smokeSystem.minAngularSpeed = 0;
        smokeSystem.maxAngularSpeed = Math.PI;
        smokeSystem.minEmitPower = 1;
        smokeSystem.maxEmitPower = 1;
        smokeSystem.updateSpeed = 0.004;
        smokeSystem.layerMask = 2;
        return smokeSystem;
    };
    return WalkSmoke;
}());
exports.WalkSmoke = WalkSmoke;


/***/ }),

/***/ "./src/game/Player/Inventory.ts":
/*!**************************************!*\
  !*** ./src/game/Player/Inventory.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(/*! ./Items/Item */ "./src/game/Player/Items/Item.ts");
var ItemManager_1 = __webpack_require__(/*! ./Items/ItemManager */ "./src/game/Player/Items/ItemManager.ts");
var Inventory = /** @class */ (function () {
    function Inventory(game, player) {
        this.game = game;
        this.player = player;
        this.items = [];
    }
    Inventory.prototype.clearItems = function () {
        this.weapon = null;
        this.shield = null;
        this.helm = null;
        this.gloves = null;
        this.boots = null;
        this.armor = null;
        this.items = [];
        return this;
    };
    /**
     * @param item
     * @param setItem
     */
    Inventory.prototype.equipItem = function (item, setItem) {
        var _this = this;
        if (setItem) {
            var bonesNumbers = [];
            switch (item.type) {
                case 1:
                    this.weapon = item;
                    bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('weapon.bone'));
                    break;
                case 2:
                    this.shield = item;
                    bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('shield.bone'));
                    break;
                case 3:
                    this.helm = item;
                    bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('head'));
                    break;
                case 4:
                    this.gloves = item;
                    bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('hand.L'));
                    bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('hand.R'));
                    break;
                case 5:
                    this.boots = item;
                    bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('foot.L'));
                    bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('foot.R'));
                    break;
                case 6:
                    this.armor = item;
                    bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('chest'));
                    break;
            }
            item.mesh = this.game.getSceneManger().assets.character.createClone(item.meshName);
            item.mesh.parent = this.player.mesh;
            item.mesh.skeleton = this.player.mesh.skeleton;
            // bonesNumbers.forEach((boneNumber) => {
            //     const mesh = BABYLON.Mesh.CreateBox('test', 1, this.game.getScene(), false);
            //     mesh.attachToBone(this.player.mesh.skeleton.bones[boneNumber], this.player.mesh);
            // });
            if (item.type == 1) {
                var game_1 = this.game;
                bonesNumbers.forEach(function (boneNumber) {
                    item.createTrailMesh(game_1);
                    item.trailBox.attachToBone(_this.player.mesh.skeleton.bones[boneNumber], _this.player.mesh);
                });
            }
        }
    };
    Inventory.prototype.emitEquip = function (item) {
        this.game.socketClient.socket.emit('itemEquip', {
            id: item.databaseId
        });
        return this;
    };
    /**
     * @returns {Array}
     */
    Inventory.prototype.getEquipedItems = function () {
        var equipedItems = [];
        equipedItems.push(this.helm);
        equipedItems.push(this.armor);
        equipedItems.push(this.weapon);
        equipedItems.push(this.shield);
        equipedItems.push(this.gloves);
        equipedItems.push(this.boots);
        return equipedItems;
    };
    Inventory.prototype.showSashOrHair = function (showHair, showSash) {
        //TODO: Bugged hair in character
        // if (showHair) {
        //     let helm = new Item(this.game, {
        //         name: "Hair",
        //         image: 'hair',
        //         meshName: 'hair',
        //         type: 3,
        //         entity: {id: 0},
        //         statistics: null
        //     });
        //
        //     this.equipItem(helm, true);
        // }
        if (showSash) {
            var armor = new Item_1.Item(this.game, {
                name: "Sash",
                image: 'sash',
                meshName: 'sash',
                type: 6,
                entity: { id: 0 },
                statistics: null
            });
            this.equipItem(armor, true);
        }
    };
    Inventory.prototype.deleteSashAndHair = function () {
        if (this.helm && this.helm.name == "Hair") {
            this.helm.mesh.dispose();
        }
        if (this.armor && this.armor.name == "Sash") {
            this.armor.mesh.dispose();
        }
        return this;
    };
    /**
     * @returns {Player}
     */
    Inventory.prototype.removeItems = function () {
        this.items.forEach(function (item) {
            item.dispose();
        });
        this.items = [];
        return this;
    };
    /**
     *
     * @param inventoryItems
     */
    Inventory.prototype.setItems = function (inventoryItems) {
        if (inventoryItems) {
            var self_1 = this;
            var game_2 = this.game;
            var itemManager_1 = new ItemManager_1.ItemManager(game_2);
            new Promise(function (resolve) {
                self_1.deleteSashAndHair();
                self_1.items.forEach(function (item) {
                    item.dispose();
                });
                setTimeout(function () {
                    resolve();
                });
            }).then(function () {
                self_1.clearItems();
                new Promise(function (resolve) {
                    itemManager_1.initItemsFromDatabaseOnCharacter(inventoryItems, self_1);
                    setTimeout(function () {
                        resolve();
                    });
                }).then(function () {
                    if (game_2.gui.inventory.opened) {
                        game_2.gui.inventory.refreshPopup();
                    }
                });
            });
        }
    };
    return Inventory;
}());
exports.Inventory = Inventory;


/***/ }),

/***/ "./src/game/Player/Items/Item.ts":
/*!***************************************!*\
  !*** ./src/game/Player/Items/Item.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Item = /** @class */ (function () {
    function Item(game, itemData) {
        this.name = itemData.name;
        this.meshName = itemData.meshName;
        this.image = itemData.image;
        this.type = itemData.type;
        this.statistics = itemData.statistics;
        if (itemData.entity) {
            this.databaseId = itemData.entity.id;
        }
    }
    Item.prototype.dispose = function () {
        if (this.mesh) {
            this.mesh.dispose();
        }
        if (this.trailBox) {
            this.trailBox.dispose();
        }
        if (this.trailMesh) {
            this.trailMesh.dispose();
        }
    };
    Item.prototype.createTrailMesh = function (game) {
        this.trailBox = BABYLON.Mesh.CreateBox('test', 1, game.getBabylonScene(), false);
        this.trailBox.layerMask = 2;
        this.trailBox.visibility = 0;
        this.trailMesh = new BABYLON.TrailMesh("Test", this.trailBox, game.getBabylonScene(), 0.2, 40, false);
        this.trailMesh.layerMask = 2;
        this.trailMesh.visibility = 0;
        var material = new BABYLON.StandardMaterial('trail_material', game.getBabylonScene());
        material.emissiveColor = BABYLON.Color3.White();
        this.trailMesh.material = material;
    };
    return Item;
}());
exports.Item = Item;


/***/ }),

/***/ "./src/game/Player/Items/ItemManager.ts":
/*!**********************************************!*\
  !*** ./src/game/Player/Items/ItemManager.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(/*! ./Item */ "./src/game/Player/Items/Item.ts");
var ItemManager = /** @class */ (function () {
    function ItemManager(game) {
        this.game = game;
    }
    /**
     * @param inventoryItems
     * @param inventory
     * @param hideShieldAndWeapon
     */
    ItemManager.prototype.initItemsFromDatabaseOnCharacter = function (inventoryItems, inventory, hideShieldAndWeapon) {
        if (hideShieldAndWeapon === void 0) { hideShieldAndWeapon = false; }
        var self = this;
        var showSash = true;
        var showHair = true;
        new Promise(function (resolve) {
            inventoryItems.forEach(function (itemDatabase) {
                if (hideShieldAndWeapon && (itemDatabase.type == 2 || itemDatabase.type == 1)) {
                    return;
                }
                var item = new Item_1.Item(self.game, itemDatabase);
                inventory.items.push(item);
                var equip = itemDatabase.entity.equip;
                inventory.equipItem(item, equip);
                if (item.type == 3 && equip) {
                    showHair = false;
                }
                if (item.type == 6 && equip) {
                    showSash = false;
                }
            });
            setTimeout(function () {
                resolve();
            });
        }).then(function () {
            inventory.showSashOrHair(showHair, showSash);
        });
    };
    return ItemManager;
}());
exports.ItemManager = ItemManager;


/***/ }),

/***/ "./src/game/Player/Skills/AbstractSkill.ts":
/*!*************************************************!*\
  !*** ./src/game/Player/Skills/AbstractSkill.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Events_1 = __webpack_require__(/*! ../../Events/Events */ "./src/game/Events/Events.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var babylonjs_gui_1 = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
var AbstractSkill = /** @class */ (function () {
    function AbstractSkill(player) {
        this.animationTime = 0;
        this.animationLoop = false;
        this.player = player;
        this.game = player.game;
        this.isReady = true;
        this.registerDefaults(this.game);
        if (player.isControllable) {
            this.createSkillImageInGUI();
            this.registerHotKey();
            this.registerAnimations();
        }
    }
    AbstractSkill.prototype.getImageUrl = function () {
        return this.image;
    };
    AbstractSkill.prototype.registerHotKey = function () {
        var self = this;
        var game = this.game;
        var listener = function () {
            var player = game.player;
            self.guiImage.onPointerUpObservable.add(function () {
                if (self.isReady && !player.isAnySkillIsInUse()) {
                    if (Object.keys(player.monstersToAttack).length) {
                        var monsterToAttack = Object.keys(player.monstersToAttack)[0];
                        var targetPoint = game.getSceneManger().enemies[monsterToAttack].meshForMove.position.clone();
                        player.meshForMove.lookAt(targetPoint, Math.PI);
                    }
                    var position = player.meshForMove.position;
                    var rotation = player.meshForMove.rotation;
                    var forwards = new BABYLON.Vector3(-(Math.sin(rotation.y)), 0, -(Math.cos(rotation.y)));
                    var newPosition = position.add(forwards);
                    player.runPlayerToPosition(newPosition);
                    game.socketClient.socket.emit('setTargetPoint', {
                        position: newPosition
                    });
                    game.socketClient.socket.emit('useSkill', self.getType());
                }
            });
            document.removeEventListener(Events_1.Events.PLAYER_CONNECTED, listener);
        };
        document.addEventListener(Events_1.Events.PLAYER_CONNECTED, listener);
    };
    AbstractSkill.prototype.showReloadInGUI = function (cooldownTime) {
        if (this.player.isControllable) {
            var game_1 = this.game;
            var self_1 = this;
            var speedRatio = 1 / cooldownTime;
            this.isReady = false;
            game_1.getBabylonScene().beginDirectAnimation(self_1.guiOverlay, [self_1.animationOverlay], 0, 30, false, speedRatio, function () {
                game_1.getBabylonScene().beginDirectAnimation(self_1.guiImage, [self_1.animationAlpha], 0, 30, false);
                self_1.isReady = true;
            });
        }
    };
    AbstractSkill.prototype.createSkillImageInGUI = function () {
        var game = this.game;
        var image = this.getImageUrl();
        var number = this.getType();
        var grid = game.gui.playerBottomPanel.guiGridSkills;
        var imageSkill = babylonjs_gui_1.Button.CreateImageOnlyButton('image_' + number, image);
        imageSkill.width = 1;
        imageSkill.height = 1;
        imageSkill.thickness = 0;
        imageSkill.image.stretch = babylonjs_gui_1.Image.STRETCH_UNIFORM;
        var overlay = new babylonjs_gui_1.Rectangle();
        overlay.width = 1;
        overlay.height = 0;
        overlay.alpha = 0.7;
        overlay.color = "black";
        overlay.background = "black";
        overlay.verticalAlignment = babylonjs_gui_1.Control.VERTICAL_ALIGNMENT_BOTTOM;
        grid.addControl(imageSkill, 0, number - 1);
        grid.addControl(overlay, 0, number - 1);
        this.guiImage = imageSkill;
        this.guiOverlay = overlay;
    };
    AbstractSkill.prototype.registerAnimations = function () {
        var animationAlpha = new BABYLON.Animation("animationAlpha", "alpha", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        animationAlpha.setKeys([
            {
                frame: 0,
                value: 1
            },
            {
                frame: 15,
                value: 0
            },
            {
                frame: 30,
                value: 1
            }
        ]);
        var animationOverlay = new BABYLON.Animation("animationOverlay", "height", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        animationOverlay.setKeys([
            {
                frame: 0,
                value: 1
            },
            {
                frame: 30,
                value: 0
            },
        ]);
        this.animationOverlay = animationOverlay;
        this.animationAlpha = animationAlpha;
    };
    AbstractSkill.TYPE = 0;
    return AbstractSkill;
}());
exports.AbstractSkill = AbstractSkill;


/***/ }),

/***/ "./src/game/Player/Skills/Block.ts":
/*!*****************************************!*\
  !*** ./src/game/Player/Skills/Block.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractSkill_1 = __webpack_require__(/*! ./AbstractSkill */ "./src/game/Player/Skills/AbstractSkill.ts");
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Block.prototype.getType = function () {
        return Block.TYPE;
    };
    Block.prototype.registerDefaults = function (game) {
        this.image = 'assets/skills/block.png';
        this.name = 'Block';
        this.animationName = 'blockA';
        this.animationSpeed = 1;
        this.animationTime = 0;
        this.animationLoop = false;
    };
    Block.prototype.showAnimation = function (skillTime, cooldownTime) {
        var game = this.game;
        var self = this;
        this.showReloadInGUI(cooldownTime);
        self.player.runAnimationSkill(this.animationName, function () {
            self.isInUse = true;
        }, function () {
            self.player.mesh.skeleton.beginAnimation('loopBlock', true);
        }, this.animationLoop, this.animationSpeed, false);
        setTimeout(function () {
            self.player.runAnimationSkill('blockB', null, function () {
                self.isInUse = false;
            });
        }, skillTime);
    };
    Block.TYPE = 2;
    return Block;
}(AbstractSkill_1.AbstractSkill));
exports.Block = Block;


/***/ }),

/***/ "./src/game/Player/Skills/FastAttack.ts":
/*!**********************************************!*\
  !*** ./src/game/Player/Skills/FastAttack.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractSkill_1 = __webpack_require__(/*! ./AbstractSkill */ "./src/game/Player/Skills/AbstractSkill.ts");
var AbstractCharacter_1 = __webpack_require__(/*! ../../Characters/AbstractCharacter */ "./src/game/Characters/AbstractCharacter.ts");
var FastAttack = /** @class */ (function (_super) {
    __extends(FastAttack, _super);
    function FastAttack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FastAttack.prototype.getType = function () {
        return FastAttack.TYPE;
    };
    FastAttack.prototype.registerDefaults = function (game) {
        this.image = 'assets/skills/fastAttack.png';
        this.name = 'Fast attack';
        this.animationName = AbstractCharacter_1.AbstractCharacter.ANIMATION_ATTACK_01;
        this.animationSpeed = 1.6;
        this.animationLoop = true;
        this.animationTime = 1000;
    };
    FastAttack.prototype.showAnimation = function (skillTime, cooldownTime) {
        var game = this.game;
        var self = this;
        var observer;
        this.showReloadInGUI(cooldownTime);
        if (self.player.inventory.weapon) {
            self.player.inventory.weapon.trailMesh.start();
        }
        self.player.runAnimationSkill(this.animationName, function () {
            if (self.player.inventory.weapon) {
                self.player.inventory.weapon.trailMesh.visibility = 1;
            }
            self.isInUse = true;
            if (self.player.isControllable) {
                game.socketClient.socket.emit('attack', {
                    targetPoint: null
                });
            }
        }, function () {
            self.isInUse = false;
            setTimeout(function () {
                if (self.player.inventory.weapon) {
                    self.player.inventory.weapon.trailMesh.visibility = 0;
                    self.player.inventory.weapon.trailMesh.stop();
                }
            }, 1000);
        }, this.animationLoop, this.animationSpeed);
        setTimeout(function () {
            self.player.animation.stop();
        }, skillTime);
    };
    FastAttack.TYPE = 3;
    return FastAttack;
}(AbstractSkill_1.AbstractSkill));
exports.FastAttack = FastAttack;


/***/ }),

/***/ "./src/game/Player/Skills/Heal.ts":
/*!****************************************!*\
  !*** ./src/game/Player/Skills/Heal.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Heal_1 = __webpack_require__(/*! ../../Particles/Skills/Heal */ "./src/game/Particles/Skills/Heal.ts");
var AbstractCharacter_1 = __webpack_require__(/*! ../../Characters/AbstractCharacter */ "./src/game/Characters/AbstractCharacter.ts");
var AbstractSkill_1 = __webpack_require__(/*! ./AbstractSkill */ "./src/game/Player/Skills/AbstractSkill.ts");
var Heal = /** @class */ (function (_super) {
    __extends(Heal, _super);
    function Heal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heal.prototype.getType = function () {
        return Heal.TYPE;
    };
    Heal.prototype.registerDefaults = function (game) {
        this.image = 'assets/skills/heal.png';
        this.name = 'Heal';
        this.animationName = AbstractCharacter_1.AbstractCharacter.ANIMATION_STAND_WEAPON;
        this.animationSpeed = 2;
        this.animationTime = 0;
        this.animationLoop = true;
        this.effectEmitter = new Heal_1.Heal(game, this.player.mesh);
    };
    Heal.prototype.showAnimation = function (skillTime, cooldownTime) {
        var game = this.game;
        var self = this;
        this.showReloadInGUI(cooldownTime);
        var alpha = 0;
        var animateFunction = function () {
            self.effectEmitter.particleSystem.emitter.position.x = 2 * Math.cos(alpha);
            self.effectEmitter.particleSystem.emitter.position.y = 1;
            self.effectEmitter.particleSystem.emitter.position.z = 2 * Math.sin(alpha);
            alpha += 0.24 * game.getBabylonScene().getAnimationRatio();
        };
        self.player.runAnimationSkill(self.animationName, function () {
            self.effectEmitter.particleSystem.start();
            game.getBabylonScene().registerBeforeRender(animateFunction);
            self.isInUse = true;
        }, null, self.animationLoop, self.animationSpeed);
        setTimeout(function () {
            self.player.animation.stop();
            self.effectEmitter.particleSystem.stop();
            game.getBabylonScene().unregisterBeforeRender(animateFunction);
            self.isInUse = false;
        }, skillTime);
    };
    Heal.TYPE = 5;
    return Heal;
}(AbstractSkill_1.AbstractSkill));
exports.Heal = Heal;


/***/ }),

/***/ "./src/game/Player/Skills/ShieldAttack.ts":
/*!************************************************!*\
  !*** ./src/game/Player/Skills/ShieldAttack.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractSkill_1 = __webpack_require__(/*! ./AbstractSkill */ "./src/game/Player/Skills/AbstractSkill.ts");
var AbstractCharacter_1 = __webpack_require__(/*! ../../Characters/AbstractCharacter */ "./src/game/Characters/AbstractCharacter.ts");
var ShieldAttack_1 = __webpack_require__(/*! ../../Particles/Skills/ShieldAttack */ "./src/game/Particles/Skills/ShieldAttack.ts");
var ShieldAttack = /** @class */ (function (_super) {
    __extends(ShieldAttack, _super);
    function ShieldAttack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShieldAttack.prototype.getType = function () {
        return ShieldAttack.TYPE;
    };
    ShieldAttack.prototype.registerDefaults = function (game) {
        this.image = 'assets/skills/shieldAttack.png';
        this.name = 'Shield attack';
        this.animationName = AbstractCharacter_1.AbstractCharacter.ANIMATION_SKILL_01;
        this.animationSpeed = 1;
        this.effectEmitter = new ShieldAttack_1.ShieldAttack(game, this.player.mesh);
    };
    ShieldAttack.prototype.showAnimation = function (skillTime, cooldownTime) {
        var game = this.game;
        var self = this;
        this.showReloadInGUI(cooldownTime);
        self.player.runAnimationSkill(this.animationName, function () {
            self.isInUse = true;
            self.effectEmitter.particleSystem.start();
            if (self.player.isControllable) {
                game.socketClient.socket.emit('attack', {
                    targetPoint: null
                });
            }
        }, function () {
            self.isInUse = false;
            self.effectEmitter.particleSystem.stop();
        }, this.animationLoop, this.animationSpeed);
        setTimeout(function () {
            self.player.animation.stop();
        }, skillTime);
    };
    ShieldAttack.TYPE = 4;
    return ShieldAttack;
}(AbstractSkill_1.AbstractSkill));
exports.ShieldAttack = ShieldAttack;


/***/ }),

/***/ "./src/game/Player/Skills/SkillsManager.ts":
/*!*************************************************!*\
  !*** ./src/game/Player/Skills/SkillsManager.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Heal_1 = __webpack_require__(/*! ./Heal */ "./src/game/Player/Skills/Heal.ts");
var StrongAttack_1 = __webpack_require__(/*! ./StrongAttack */ "./src/game/Player/Skills/StrongAttack.ts");
var Block_1 = __webpack_require__(/*! ./Block */ "./src/game/Player/Skills/Block.ts");
var FastAttack_1 = __webpack_require__(/*! ./FastAttack */ "./src/game/Player/Skills/FastAttack.ts");
var ShieldAttack_1 = __webpack_require__(/*! ./ShieldAttack */ "./src/game/Player/Skills/ShieldAttack.ts");
var SkillsManager = /** @class */ (function () {
    function SkillsManager() {
    }
    SkillsManager.getSkill = function (type, player) {
        var skill = null;
        switch (type) {
            case Heal_1.Heal.TYPE:
                skill = new Heal_1.Heal(player);
                break;
            case StrongAttack_1.StrongAttack.TYPE:
                skill = new StrongAttack_1.StrongAttack(player);
                break;
            case Block_1.Block.TYPE:
                skill = new Block_1.Block(player);
                break;
            case FastAttack_1.FastAttack.TYPE:
                skill = new FastAttack_1.FastAttack(player);
                break;
            case ShieldAttack_1.ShieldAttack.TYPE:
                skill = new ShieldAttack_1.ShieldAttack(player);
                break;
        }
        return skill;
    };
    return SkillsManager;
}());
exports.SkillsManager = SkillsManager;


/***/ }),

/***/ "./src/game/Player/Skills/StrongAttack.ts":
/*!************************************************!*\
  !*** ./src/game/Player/Skills/StrongAttack.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractSkill_1 = __webpack_require__(/*! ./AbstractSkill */ "./src/game/Player/Skills/AbstractSkill.ts");
var StrongAttack = /** @class */ (function (_super) {
    __extends(StrongAttack, _super);
    function StrongAttack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StrongAttack.prototype.getType = function () {
        return StrongAttack.TYPE;
    };
    StrongAttack.prototype.registerDefaults = function (game) {
        this.image = 'assets/skills/strongAttack.png';
        this.name = 'Block';
        this.animationName = 'strongAttackA';
        this.animationSpeed = 1;
        this.animationTime = 2000;
        this.animationLoop = false;
    };
    StrongAttack.prototype.showAnimation = function (skillTime, cooldownTime) {
        var game = this.game;
        var self = this;
        var observer;
        this.showReloadInGUI(cooldownTime);
        self.player.runAnimationSkill(this.animationName, function () {
            self.isInUse = true;
        }, function () {
            self.player.mesh.skeleton.beginAnimation('loopStrongAttack', true);
        }, this.animationLoop, this.animationSpeed, false);
        if (self.player.inventory.weapon) {
            self.player.inventory.weapon.trailMesh.start();
        }
        setTimeout(function () {
            if (self.player.inventory.weapon) {
                self.player.inventory.weapon.trailMesh.visibility = 1;
            }
            self.player.runAnimationSkill('strongAttackB', null, function () {
                self.isInUse = false;
                setTimeout(function () {
                    if (self.player.inventory.weapon) {
                        self.player.inventory.weapon.trailMesh.visibility = 0;
                        self.player.inventory.weapon.trailMesh.stop();
                    }
                }, 1000);
            });
            if (self.player.isControllable) {
                game.socketClient.socket.emit('attack', {
                    targetPoint: null
                });
            }
        }, skillTime);
    };
    StrongAttack.TYPE = 1;
    return StrongAttack;
}(AbstractSkill_1.AbstractSkill));
exports.StrongAttack = StrongAttack;


/***/ }),

/***/ "./src/game/Scenes/Battleground.ts":
/*!*****************************************!*\
  !*** ./src/game/Scenes/Battleground.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __webpack_require__(/*! ./Scene */ "./src/game/Scenes/Scene.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var babylonjs_materials_1 = __webpack_require__(/*! babylonjs-materials */ "./node_modules/babylonjs-materials/babylonjs.materials.min.js");
var EnvironmentCaveExit_1 = __webpack_require__(/*! ./Mountains/CaveExit/EnvironmentCaveExit */ "./src/game/Scenes/Mountains/CaveExit/EnvironmentCaveExit.ts");
var Guard_1 = __webpack_require__(/*! ../Characters/npc/Guard */ "./src/game/Characters/npc/Guard.ts");
var Battleground = /** @class */ (function (_super) {
    __extends(Battleground, _super);
    function Battleground() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Battleground.prototype.initScene = function (game) {
        var self = this;
        var scene = new BABYLON.Scene(game.engine);
        var ground, guard;
        self
            .setDefaults(game, scene)
            .executeWhenReady(function () {
            ground = BABYLON.MeshBuilder.CreateGround("Ground", { width: 256, height: 256 }, scene);
            new Guard_1.Guard(game, new BABYLON.Vector3(-12, 0, 8), new BABYLON.Vector3(0, 3, 0));
            guard = new Guard_1.Guard(game, new BABYLON.Vector3(-15, 0, 10), new BABYLON.Vector3(0, 4, 0));
            guard.mesh.name = 'questLog';
            var plane = BABYLON.Mesh.CreatePlane("entrace", 16, scene);
            plane.position = new BABYLON.Vector3(-25, 2, 25);
            plane.layerMask = 2;
            self.environment = new EnvironmentCaveExit_1.EnvironmentCaveExit(game);
        }, function () {
            var waterMaterial = new babylonjs_materials_1.WaterMaterial("waterMaterial", scene, new BABYLON.Vector2(512, 512));
            waterMaterial.bumpTexture = new BABYLON.Texture("//www.babylonjs.com/assets/waterbump.png", scene);
            waterMaterial.windForce = -5;
            waterMaterial.waveHeight = 0.05;
            waterMaterial.bumpHeight = 0.05;
            waterMaterial.waveLength = 0.1;
            waterMaterial.waveSpeed = 1.0;
            waterMaterial.colorBlendFactor = 0.1;
            waterMaterial.waterColor = new BABYLON.Color3(0.1, 1, 1);
            var waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 256, 256, 32, scene, false);
            waterMesh.position.y = 0.5;
            waterMesh.material = waterMaterial;
            waterMesh.layerMask = 2;
            waterMesh.isPickable = false;
            waterMaterial.addToRenderList(ground);
            waterMaterial.addToRenderList(self.game.player.mesh);
            waterMaterial.addToRenderList(guard.mesh);
        });
    };
    Battleground.TYPE = 99;
    return Battleground;
}(Scene_1.Scene));
exports.Battleground = Battleground;


/***/ }),

/***/ "./src/game/Scenes/ForestHouse.ts":
/*!****************************************!*\
  !*** ./src/game/Scenes/ForestHouse.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __webpack_require__(/*! ./Scene */ "./src/game/Scenes/Scene.ts");
var environmentForestHouse_1 = __webpack_require__(/*! ../Environment/environmentForestHouse */ "./src/game/Environment/environmentForestHouse.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var ForestHouse = /** @class */ (function (_super) {
    __extends(ForestHouse, _super);
    function ForestHouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForestHouse.prototype.initScene = function (game) {
        var self = this;
        BABYLON.SceneLoader.Load("assets/scenes/Forest_house/", "Forest_house.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .executeWhenReady(function () {
                self.environment = new environmentForestHouse_1.EnvironmentForestHouse(game);
            }, null);
        });
    };
    ForestHouse.TYPE = 2;
    return ForestHouse;
}(Scene_1.Scene));
exports.ForestHouse = ForestHouse;


/***/ }),

/***/ "./src/game/Scenes/ForestHouseStart.ts":
/*!*********************************************!*\
  !*** ./src/game/Scenes/ForestHouseStart.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __webpack_require__(/*! ./Scene */ "./src/game/Scenes/Scene.ts");
var environmentForestHouseStart_1 = __webpack_require__(/*! ../Environment/environmentForestHouseStart */ "./src/game/Environment/environmentForestHouseStart.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var ForestHouseStart = /** @class */ (function (_super) {
    __extends(ForestHouseStart, _super);
    function ForestHouseStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForestHouseStart.prototype.initScene = function (game) {
        var self = this;
        BABYLON.SceneLoader.Load("assets/scenes/forestStartHouse/", "forestHouseStart.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .executeWhenReady(function () {
                self.environment = new environmentForestHouseStart_1.EnvironmentForestHouseStart(game);
            }, null);
        });
    };
    ForestHouseStart.TYPE = 1;
    return ForestHouseStart;
}(Scene_1.Scene));
exports.ForestHouseStart = ForestHouseStart;


/***/ }),

/***/ "./src/game/Scenes/ForestHouseTomb.ts":
/*!********************************************!*\
  !*** ./src/game/Scenes/ForestHouseTomb.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var environmentForestHouseTomb_1 = __webpack_require__(/*! ../Environment/environmentForestHouseTomb */ "./src/game/Environment/environmentForestHouseTomb.ts");
var Scene_1 = __webpack_require__(/*! ./Scene */ "./src/game/Scenes/Scene.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var ForestHouseTomb = /** @class */ (function (_super) {
    __extends(ForestHouseTomb, _super);
    function ForestHouseTomb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForestHouseTomb.prototype.initScene = function (game) {
        var self = this;
        BABYLON.SceneLoader.Load("assets/scenes/Forest_House_Tomb/", "Forest_House_Tomb.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .executeWhenReady(function () {
                self.environment = new environmentForestHouseTomb_1.EnvironmentForestHouseTomb(game, scene);
                //
                // let item = new Items.Item(game, {
                //     name: 'LongSword',
                //     image: 'sword',
                //     type: 1,
                //     statistics: {},
                //     meshName: 'swordLong',
                // });
                // Items.DroppedItem.showItem(game, item, {x: 2, z:-3}, 0);
                //
                // let item = new Items.Item(game, {
                //     name: 'shieldWoodenSmall',
                //     image: 'shieldWoodenSmall',
                //     type: 1,
                //     statistics: {},
                //     meshName: 'shieldWoodenSmall',
                // });
                // Items.DroppedItem.showItem(game, item, {x: 4, z:-7}, 0);
            }, null);
        });
    };
    ForestHouseTomb.TYPE = 3;
    return ForestHouseTomb;
}(Scene_1.Scene));
exports.ForestHouseTomb = ForestHouseTomb;


/***/ }),

/***/ "./src/game/Scenes/Manager.ts":
/*!************************************!*\
  !*** ./src/game/Scenes/Manager.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ForestHouse_1 = __webpack_require__(/*! ./ForestHouse */ "./src/game/Scenes/ForestHouse.ts");
var ForestHouseStart_1 = __webpack_require__(/*! ./ForestHouseStart */ "./src/game/Scenes/ForestHouseStart.ts");
var ForestHouseTomb_1 = __webpack_require__(/*! ./ForestHouseTomb */ "./src/game/Scenes/ForestHouseTomb.ts");
var SelectCharacter_1 = __webpack_require__(/*! ./SelectCharacter */ "./src/game/Scenes/SelectCharacter.ts");
var Battleground_1 = __webpack_require__(/*! ./Battleground */ "./src/game/Scenes/Battleground.ts");
var MountainsPass_1 = __webpack_require__(/*! ./MountainsPass */ "./src/game/Scenes/MountainsPass.ts");
var CaveExit_1 = __webpack_require__(/*! ./Mountains/CaveExit/CaveExit */ "./src/game/Scenes/Mountains/CaveExit/CaveExit.ts");
var Arena_1 = __webpack_require__(/*! ./Mountains/Town/Arena */ "./src/game/Scenes/Mountains/Town/Arena.ts");
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.factory = function (sceneType) {
        var scene = null;
        switch (sceneType) {
            case ForestHouse_1.ForestHouse.TYPE:
                scene = new ForestHouse_1.ForestHouse();
                break;
            case ForestHouseStart_1.ForestHouseStart.TYPE:
                scene = new ForestHouseStart_1.ForestHouseStart();
                break;
            case ForestHouseTomb_1.ForestHouseTomb.TYPE:
                scene = new ForestHouseTomb_1.ForestHouseTomb();
                break;
            case SelectCharacter_1.SelectCharacter.TYPE:
                scene = new SelectCharacter_1.SelectCharacter();
                break;
            case Battleground_1.Battleground.TYPE:
                scene = new Battleground_1.Battleground();
                break;
            case MountainsPass_1.MountainsPass.TYPE:
                scene = new MountainsPass_1.MountainsPass();
                break;
            case CaveExit_1.CaveExit.TYPE:
                scene = new CaveExit_1.CaveExit();
                break;
            case Arena_1.Arena.TYPE:
                scene = new Arena_1.Arena();
                break;
        }
        if (!scene) {
            throw new TypeError('Wrong scene type.');
        }
        return scene;
    };
    return Manager;
}());
exports.Manager = Manager;


/***/ }),

/***/ "./src/game/Scenes/Mountains/CaveExit/CaveExit.ts":
/*!********************************************************!*\
  !*** ./src/game/Scenes/Mountains/CaveExit/CaveExit.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __webpack_require__(/*! ../../Scene */ "./src/game/Scenes/Scene.ts");
var EnvironmentCaveExit_1 = __webpack_require__(/*! ./EnvironmentCaveExit */ "./src/game/Scenes/Mountains/CaveExit/EnvironmentCaveExit.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var CaveExit = /** @class */ (function (_super) {
    __extends(CaveExit, _super);
    function CaveExit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveExit.prototype.initScene = function (game) {
        var self = this;
        BABYLON.SceneLoader.Load("assets/scenes/caveExit/", "caveExit.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .executeWhenReady(function () {
                self.environment = new EnvironmentCaveExit_1.EnvironmentCaveExit(game);
            }, function () {
                // new NPC.Guard(game, new BABYLON.Vector3(-117, 0, 128), new BABYLON.Vector3(0, -4.3, 0));
                // new NPC.Trader(game, new BABYLON.Vector3(-122, 0, -16), new BABYLON.Vector3(0, 0.7, 0));
                // new NPC.BigWarrior(game, new BABYLON.Vector3(-10, 0, -53), new BABYLON.Vector3(0, 1.54, 0));
            });
        });
    };
    CaveExit.TYPE = 6;
    return CaveExit;
}(Scene_1.Scene));
exports.CaveExit = CaveExit;


/***/ }),

/***/ "./src/game/Scenes/Mountains/CaveExit/EnvironmentCaveExit.ts":
/*!*******************************************************************!*\
  !*** ./src/game/Scenes/Mountains/CaveExit/EnvironmentCaveExit.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MountainsEnvironment_1 = __webpack_require__(/*! ../MountainsEnvironment */ "./src/game/Scenes/Mountains/MountainsEnvironment.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var EnvironmentCaveExit = /** @class */ (function (_super) {
    __extends(EnvironmentCaveExit, _super);
    function EnvironmentCaveExit(game) {
        var _this = _super.call(this) || this;
        var scene = game.getBabylonScene();
        _this.colliders = [];
        scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                sceneMesh.alwaysSelectAsActiveMesh = true;
                sceneMesh.material = _this.createStencilMaterial('/assets/scenes/caveExit/stencil1.png', scene);
                _this.ground = sceneMesh;
            }
            else if (meshName.search("Box_Cube") >= 0) {
                _this.colliders.push(sceneMesh);
            }
            else {
                sceneMesh.isPickable = false;
                if (meshName.search("Rock") >= 0) {
                    continue;
                }
                _this.staticShadowObjects.push(sceneMesh);
            }
        }
        _this.createDefaultLight(scene);
        _this.registerColliders(scene);
        _this.freezeAllMeshes(scene);
        return _this;
    }
    EnvironmentCaveExit.prototype.createStecnil = function (scene) {
    };
    return EnvironmentCaveExit;
}(MountainsEnvironment_1.MountainsEnvironment));
exports.EnvironmentCaveExit = EnvironmentCaveExit;


/***/ }),

/***/ "./src/game/Scenes/Mountains/MountainsEnvironment.ts":
/*!***********************************************************!*\
  !*** ./src/game/Scenes/Mountains/MountainsEnvironment.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractEnvironment_1 = __webpack_require__(/*! ../../Environment/AbstractEnvironment */ "./src/game/Environment/AbstractEnvironment.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var babylonjs_materials_1 = __webpack_require__(/*! babylonjs-materials */ "./node_modules/babylonjs-materials/babylonjs.materials.min.js");
var MountainsEnvironment = /** @class */ (function (_super) {
    __extends(MountainsEnvironment, _super);
    function MountainsEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MountainsEnvironment.prototype.createStencilMaterial = function (stencilUrl, scene) {
        var terrainMaterial = new babylonjs_materials_1.TerrainMaterial("terrainMaterial", scene);
        terrainMaterial.mixTexture = new BABYLON.Texture(stencilUrl, scene);
        terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/dirt.jpg", scene);
        terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/grass.jpg", scene);
        terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/rock.jpg", scene);
        terrainMaterial.bumpTexture1 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/dirt_normal.jpg", scene);
        terrainMaterial.bumpTexture2 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/grass_normal.jpg", scene);
        terrainMaterial.bumpTexture3 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/rock_normal.jpg", scene);
        terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 20;
        terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 20;
        terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 20;
        return terrainMaterial;
    };
    return MountainsEnvironment;
}(AbstractEnvironment_1.AbstractEnvironment));
exports.MountainsEnvironment = MountainsEnvironment;


/***/ }),

/***/ "./src/game/Scenes/Mountains/Town/Arena.ts":
/*!*************************************************!*\
  !*** ./src/game/Scenes/Mountains/Town/Arena.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __webpack_require__(/*! ../../Scene */ "./src/game/Scenes/Scene.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Arena = /** @class */ (function (_super) {
    __extends(Arena, _super);
    function Arena() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arena.prototype.initScene = function (game) {
        var self = this;
        var scene = new BABYLON.Scene(game.engine);
        self
            .setDefaults(game, scene)
            .executeWhenReady(function () {
            var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
            light.intensity = 1;
            light.position = new BABYLON.Vector3(0, 50, 0);
            light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
            var ground = BABYLON.MeshBuilder.CreateGround("Ground", { width: 48, height: 48 }, scene);
            ground.actionManager = new BABYLON.ActionManager(scene);
            var terrainMaterial = new BABYLON.StandardMaterial("GroundMaterial", scene);
            terrainMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
            terrainMaterial.specularPower = 10;
            terrainMaterial.diffuseTexture = new BABYLON.Texture("assets/scenes/Forest_house/dirt.jpg", scene);
            terrainMaterial.diffuseTexture.scale(20);
            ground.receiveShadows = true;
            ground.material = terrainMaterial;
        }, function () {
            // game.player.playerLight.dispose();
        });
    };
    Arena.TYPE = 98;
    return Arena;
}(Scene_1.Scene));
exports.Arena = Arena;


/***/ }),

/***/ "./src/game/Scenes/MountainsPass.ts":
/*!******************************************!*\
  !*** ./src/game/Scenes/MountainsPass.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __webpack_require__(/*! ./Scene */ "./src/game/Scenes/Scene.ts");
var environmentMountainsPass_1 = __webpack_require__(/*! ../Environment/environmentMountainsPass */ "./src/game/Environment/environmentMountainsPass.ts");
var Guard_1 = __webpack_require__(/*! ../Characters/npc/Guard */ "./src/game/Characters/npc/Guard.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var MountainsPass = /** @class */ (function (_super) {
    __extends(MountainsPass, _super);
    function MountainsPass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MountainsPass.prototype.initScene = function (game) {
        var self = this;
        BABYLON.SceneLoader.Load("assets/scenes/MountainsPass/", "MountainsPass.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .executeWhenReady(function () {
                self.environment = new environmentMountainsPass_1.EnvironmentMountainsPass(game);
            }, function () {
                new Guard_1.Guard(game, new BABYLON.Vector3(-117, 0, 128), new BABYLON.Vector3(0, -4.3, 0));
                // new NPC.Trader(game, new BABYLON.Vector3(-122, 0, -16), new BABYLON.Vector3(0, 0.7, 0));
                // new NPC.BigWarrior(game, new BABYLON.Vector3(-10, 0, -53), new BABYLON.Vector3(0, 1.54, 0));
            });
        });
    };
    MountainsPass.TYPE = 5;
    return MountainsPass;
}(Scene_1.Scene));
exports.MountainsPass = MountainsPass;


/***/ }),

/***/ "./src/game/Scenes/Scene.ts":
/*!**********************************!*\
  !*** ./src/game/Scenes/Scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var Game_1 = __webpack_require__(/*! ../Game */ "./src/game/Game.ts");
var SlavsLoader_1 = __webpack_require__(/*! ../Loader/SlavsLoader */ "./src/game/Loader/SlavsLoader.ts");
var Events_1 = __webpack_require__(/*! ../Events/Events */ "./src/game/Events/Events.ts");
var Options_1 = __webpack_require__(/*! ../Options/Options */ "./src/game/Options/Options.ts");
var Assets_1 = __webpack_require__(/*! ../AssetsFactories/Assets */ "./src/game/AssetsFactories/Assets.ts");
var GameCamera_1 = __webpack_require__(/*! ../Cameras/GameCamera */ "./src/game/Cameras/GameCamera.ts");
var SelectCharacterCamera_1 = __webpack_require__(/*! ../Cameras/SelectCharacterCamera */ "./src/game/Cameras/SelectCharacterCamera.ts");
var Scene = /** @class */ (function () {
    function Scene() {
        this.enemiesActiveTargets = [];
        /**
         * Dynamic Collections
         */
        this.remotePlayers = [];
        this.npcs = [];
        this.enemies = [];
        this.quests = [];
        this.chests = [];
        this.randomSpecialItems = [];
        this.droppedItems = [];
    }
    Scene.prototype.setDefaults = function (game, scene, selectCharacterCamera) {
        if (selectCharacterCamera === void 0) { selectCharacterCamera = false; }
        BABYLON.SceneLoader.CleanBoneMatrixWeights = true;
        SlavsLoader_1.SlavsLoader.showLoaderWithText('Loading game...');
        scene.actionManager = new BABYLON.ActionManager(scene);
        this.assetManager = new BABYLON.AssetsManager(scene);
        this.assets = new Assets_1.Assets(scene);
        this.babylonScene = scene;
        this.game = game;
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
        scene.collisionsEnabled = true;
        scene.fogEnabled = true;
        scene.lensFlaresEnabled = false;
        scene.probesEnabled = false;
        scene.postProcessesEnabled = true;
        scene.spritesEnabled = true;
        scene.audioEnabled = false;
        game.setScene(this);
        if (selectCharacterCamera) {
            SelectCharacterCamera_1.SelectCharacterCamera.initCameraInScene(scene);
        }
        else {
            GameCamera_1.GameCamera.initCameraInScene(scene);
        }
        this.battleMusic = new BABYLON.Sound("BattleMusic", "assets/sounds/music/battle.mp3", scene, null, {
            loop: true,
            autoplay: false,
            volume: 1
        });
        return this;
    };
    Scene.prototype.playBattleMusic = function () {
        this.battleMusic.play();
    };
    Scene.prototype.stopBattleMusic = function () {
        var self = this;
        self.battleMusic.setVolume(0, 2);
        setTimeout(function () {
            self.battleMusic.stop();
        }, 2000);
    };
    Scene.prototype.playEnemiesAnimationsInFrumStrum = function () {
        var self = this;
        var scene = this.babylonScene;
        var gameCamera = scene.getCameraByName('gameCamera');
        clearInterval(this.frumstrumEnemiesInterval);
        this.frumstrumEnemiesInterval = setInterval(function () {
            self.enemies.forEach(function (enemy) {
                if (enemy.isDeath) {
                    return;
                }
                var isActiveMesh = gameCamera.isInFrustum(enemy.mesh);
                if (!enemy.animation && isActiveMesh) {
                    enemy.runAnimationStand();
                }
                else if (enemy.animation && !isActiveMesh) {
                    enemy.animation.stop();
                    enemy.animation = null;
                }
            });
        }, 1000);
        return this;
    };
    Scene.prototype.executeWhenReady = function (onReady, onPlayerConnected, registerListener) {
        if (registerListener === void 0) { registerListener = true; }
        var scene = this.babylonScene;
        var assetsManager = this.assetManager;
        var self = this;
        var game = this.game;
        scene.executeWhenReady(function () {
            assetsManager.onFinish = function (tasks) {
                game.socketClient.socket.emit('changeScenePre');
                if (onReady) {
                    onReady();
                }
                for (var i = 0; i < scene.meshes.length; i++) {
                    var sceneMesh = scene.meshes[i];
                    sceneMesh.layerMask = 2;
                }
                game.engine.runRenderLoop(function () {
                    scene.render();
                });
                self.playEnemiesAnimationsInFrumStrum();
            };
            assetsManager.onProgress = function (remainingCount, totalCount, lastFinishedTask) {
                SlavsLoader_1.SlavsLoader.showLoaderWithText('Loading assets... ' + remainingCount + ' of ' + totalCount + '.');
            };
            assetsManager.load();
            if (registerListener) {
                var listener = function listener() {
                    if (onPlayerConnected) {
                        onPlayerConnected();
                    }
                    self.options = new Options_1.GameOptions(game);
                    self.options.addMeshToDynamicShadowGenerator(game.player.mesh);
                    game.controller.registerControls(scene);
                    game.socketClient.socket.emit('changeScenePost');
                    game.socketClient.socket.emit('refreshGateways');
                    game.socketClient.socket.emit('refreshQuests');
                    game.socketClient.socket.emit('refreshChests');
                    game.socketClient.socket.emit('refreshRandomSpecialItems');
                    if (Game_1.Game.SHOW_DEBUG) {
                        scene.debugLayer.show({
                            embedMode: true
                        });
                    }
                    document.removeEventListener(Events_1.Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events_1.Events.PLAYER_CONNECTED, listener);
            }
        });
        return this;
    };
    Scene.TYPE = 0;
    return Scene;
}());
exports.Scene = Scene;


/***/ }),

/***/ "./src/game/Scenes/SelectCharacter.ts":
/*!********************************************!*\
  !*** ./src/game/Scenes/SelectCharacter.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var environmentSelectCharacter_1 = __webpack_require__(/*! ../Environment/environmentSelectCharacter */ "./src/game/Environment/environmentSelectCharacter.ts");
var Scene_1 = __webpack_require__(/*! ./Scene */ "./src/game/Scenes/Scene.ts");
var Warrior_1 = __webpack_require__(/*! ../Characters/selectCharacter/Warrior */ "./src/game/Characters/selectCharacter/Warrior.ts");
var SelectCharacter_1 = __webpack_require__(/*! ../GUI/SelectCharacter */ "./src/game/GUI/SelectCharacter.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var SelectCharacter = /** @class */ (function (_super) {
    __extends(SelectCharacter, _super);
    function SelectCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectCharacter.prototype.initScene = function (game) {
        var self = this;
        var playersToSelect = [];
        var gui = null;
        BABYLON.SceneLoader.Load("assets/scenes/Select_Map/", "Select_Map.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene, true)
                .executeWhenReady(function () {
                new environmentSelectCharacter_1.EnvironmentSelectCharacter(game, scene);
                game.socketClient.socket.on('showPlayersToSelect', function (players) {
                    playersToSelect.forEach(function (playerSelect) {
                        playerSelect.mesh.dispose();
                    });
                    playersToSelect = [];
                    for (var i = 0; i < players.length; i++) {
                        var player = players[i];
                        playersToSelect.push(new Warrior_1.Warrior(game, i, player));
                    }
                    if (gui) {
                        gui.texture.dispose();
                    }
                    if (playersToSelect.length < 2) {
                        gui = new SelectCharacter_1.SelectCharacter(game);
                    }
                });
            }, null, false);
        });
    };
    SelectCharacter.TYPE = 4;
    return SelectCharacter;
}(Scene_1.Scene));
exports.SelectCharacter = SelectCharacter;


/***/ }),

/***/ "./src/game/SocketClient/Enemies/ShowEnemiesSocketEvent.ts":
/*!*****************************************************************!*\
  !*** ./src/game/SocketClient/Enemies/ShowEnemiesSocketEvent.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var Monster_1 = __webpack_require__(/*! ../../Characters/Monster */ "./src/game/Characters/Monster.ts");
var ShowEnemiesSocketEvent = /** @class */ (function (_super) {
    __extends(ShowEnemiesSocketEvent, _super);
    function ShowEnemiesSocketEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    ShowEnemiesSocketEvent.prototype.listen = function () {
        var game = this.game;
        this.socket.on('showEnemies', function (data) {
            game.getSceneManger().enemies = [];
            data.forEach(function (enemyData, key) {
                if (enemyData.statistics.hp > 0) {
                    var newMonster = new Monster_1.Monster(game, key, enemyData);
                    game.getSceneManger().enemies[newMonster.id] = newMonster;
                }
            });
        });
        return this;
    };
    return ShowEnemiesSocketEvent;
}(SocketEvent_1.SocketEvent));
exports.ShowEnemiesSocketEvent = ShowEnemiesSocketEvent;


/***/ }),

/***/ "./src/game/SocketClient/Enemies/UpdateEnemiesSocketEvent.ts":
/*!*******************************************************************!*\
  !*** ./src/game/SocketClient/Enemies/UpdateEnemiesSocketEvent.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var AbstractCharacter_1 = __webpack_require__(/*! ../../Characters/AbstractCharacter */ "./src/game/Characters/AbstractCharacter.ts");
var Game_1 = __webpack_require__(/*! ../../Game */ "./src/game/Game.ts");
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var UpdateEnemiesSocketEvent = /** @class */ (function (_super) {
    __extends(UpdateEnemiesSocketEvent, _super);
    function UpdateEnemiesSocketEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateEnemiesSocketEvent.prototype.listen = function () {
        var game = this.game;
        var self = this;
        this.socket.on('updateEnemy', function (data) {
            var updatedEnemy = data.enemy;
            var enemyKey = data.enemyKey;
            var sceneManager = game.getSceneManger();
            var enemy = sceneManager.enemies[enemyKey];
            if (!enemy) {
                return;
            }
            var mesh = enemy.meshForMove;
            enemy.retrieveHit(updatedEnemy);
            ///antylag rule
            var distanceBetweenObjects = Game_1.Game.distanceVector(mesh.position, updatedEnemy.position);
            if (distanceBetweenObjects > 16) {
                mesh.position = new BABYLON.Vector3(updatedEnemy.position.x, updatedEnemy.position.y, updatedEnemy.position.z);
            }
            if (sceneManager.enemiesActiveTargets[enemyKey] !== undefined) {
                self.game.getBabylonScene().unregisterBeforeRender(sceneManager.enemiesActiveTargets[enemyKey]);
            }
            var targetMesh = null;
            game.getSceneManger().remotePlayers.forEach(function (socketRemotePlayer) {
                if (updatedEnemy.target == socketRemotePlayer.id) {
                    targetMesh = socketRemotePlayer.meshForMove;
                }
            });
            if (data.collisionEvent == 'OnIntersectionEnterTriggerAttack') {
                game.player.monstersToAttack[enemyKey] = true;
                if (updatedEnemy.attack == true && data.attackIsDone == true) {
                    mesh.lookAt(targetMesh.position.clone());
                    enemy.runAnimationHit(AbstractCharacter_1.AbstractCharacter.ANIMATION_ATTACK_01, null, null, false);
                }
                else {
                    enemy.runAnimationStand();
                }
            }
            else if (data.collisionEvent == 'OnIntersectionEnterTriggerVisibility' || data.collisionEvent == 'OnIntersectionExitTriggerAttack') {
                if (game.player.monstersToAttack[enemyKey] !== undefined) {
                    delete game.player.monstersToAttack[enemyKey];
                }
                sceneManager.enemiesActiveTargets[enemyKey] = function () {
                    mesh.lookAt(targetMesh.position);
                    var rotation = mesh.rotation;
                    var forwards = new BABYLON.Vector3((Math.sin(rotation.y)) / enemy.getWalkSpeed(), 0, (Math.cos(rotation.y)) / enemy.getWalkSpeed());
                    mesh.moveWithCollisions(forwards);
                    enemy.runAnimationWalk();
                };
                self.game.getBabylonScene().registerBeforeRender(sceneManager.enemiesActiveTargets[enemyKey]);
            }
            else if (data.collisionEvent == 'OnIntersectionExitTriggerVisibility') {
                enemy.runAnimationStand();
            }
            if (sceneManager.enemiesActiveTargets.length) {
                // sceneManager.playBattleMusic();
            }
            else {
                // sceneManager.stopBattleMusic();
            }
        });
        return this;
    };
    return UpdateEnemiesSocketEvent;
}(SocketEvent_1.SocketEvent));
exports.UpdateEnemiesSocketEvent = UpdateEnemiesSocketEvent;


/***/ }),

/***/ "./src/game/SocketClient/Player/OnAddAttribute.ts":
/*!********************************************************!*\
  !*** ./src/game/SocketClient/Player/OnAddAttribute.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var OnAddAttribute = /** @class */ (function (_super) {
    __extends(OnAddAttribute, _super);
    function OnAddAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnAddAttribute.prototype.listen = function () {
        var game = this.game;
        this.socket.on('attributeAdded', function (data) {
            game.player.freeAttributesPoints = data.activePlayer.freeAttributesPoints;
            game.player.setCharacterStatistics(data.activePlayer);
            game.gui.attributes.refreshPopup();
            game.player.refreshEnergyInGui();
            game.player.refreshHpInGui();
        });
        return this;
    };
    return OnAddAttribute;
}(SocketEvent_1.SocketEvent));
exports.OnAddAttribute = OnAddAttribute;


/***/ }),

/***/ "./src/game/SocketClient/Player/OnAddExperience.ts":
/*!*********************************************************!*\
  !*** ./src/game/SocketClient/Player/OnAddExperience.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var OnAddExperience = /** @class */ (function (_super) {
    __extends(OnAddExperience, _super);
    function OnAddExperience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnAddExperience.prototype.listen = function () {
        var game = this.game;
        this.socket.on('addExperience', function (data) {
            game.player.addExperience(data.experience, data.experiencePercentages);
            game.gui.playerLogsQuests.addText('You earned ' + data.experience + ' experience.', 'gold');
        });
        return this;
    };
    return OnAddExperience;
}(SocketEvent_1.SocketEvent));
exports.OnAddExperience = OnAddExperience;


/***/ }),

/***/ "./src/game/SocketClient/Player/OnNewLvl.ts":
/*!**************************************************!*\
  !*** ./src/game/SocketClient/Player/OnNewLvl.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var OnNewLvl = /** @class */ (function (_super) {
    __extends(OnNewLvl, _super);
    function OnNewLvl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnNewLvl.prototype.listen = function () {
        var game = this.game;
        this.socket.on('newLvl', function (playerData) {
            game.player.freeAttributesPoints = playerData.freeAttributesPoints;
            game.player.freeSkillPoints = playerData.freeSkillPoints;
            game.player.lvl = playerData.lvl;
            game.player.experiencePercentages = 0;
            game.gui.attributes.refreshPopup();
            game.player.setNewLvl();
        });
        return this;
    };
    return OnNewLvl;
}(SocketEvent_1.SocketEvent));
exports.OnNewLvl = OnNewLvl;


/***/ }),

/***/ "./src/game/SocketClient/Player/OnRefreshPlayerEquip.ts":
/*!**************************************************************!*\
  !*** ./src/game/SocketClient/Player/OnRefreshPlayerEquip.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var OnRefreshPlayerEquip = /** @class */ (function (_super) {
    __extends(OnRefreshPlayerEquip, _super);
    function OnRefreshPlayerEquip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnRefreshPlayerEquip.prototype.listen = function () {
        var game = this.game;
        this.socket.on('updatePlayerEquip', function (updatedPlayer) {
            var player = null;
            if (updatedPlayer.activePlayer.id == game.player.id) {
                player = game.player;
                game.player.setCharacterStatistics(updatedPlayer.activePlayer);
                game.gui.attributes.refreshPopup();
            }
            else {
                game.getSceneManger().remotePlayers.forEach(function (remotePlayer, key) {
                    if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                        player = game.getSceneManger().remotePlayers[key];
                        return;
                    }
                });
            }
            player.inventory.removeItems();
            player.inventory.setItems(updatedPlayer.activePlayer.items);
        });
        return this;
    };
    return OnRefreshPlayerEquip;
}(SocketEvent_1.SocketEvent));
exports.OnRefreshPlayerEquip = OnRefreshPlayerEquip;


/***/ }),

/***/ "./src/game/SocketClient/Player/OnRemovePlayer.ts":
/*!********************************************************!*\
  !*** ./src/game/SocketClient/Player/OnRemovePlayer.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var OnRemovePlayer = /** @class */ (function (_super) {
    __extends(OnRemovePlayer, _super);
    function OnRemovePlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnRemovePlayer.prototype.listen = function () {
        var game = this.game;
        this.socket.on('removePlayer', function (id) {
            game.getSceneManger().remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == id) {
                    var player = game.getSceneManger().remotePlayers[key];
                    player.removeFromWorld();
                    game.getSceneManger().remotePlayers.splice(key, 1);
                }
            });
        });
        return this;
    };
    return OnRemovePlayer;
}(SocketEvent_1.SocketEvent));
exports.OnRemovePlayer = OnRemovePlayer;


/***/ }),

/***/ "./src/game/SocketClient/Player/OnShowPlayer.ts":
/*!******************************************************!*\
  !*** ./src/game/SocketClient/Player/OnShowPlayer.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var Player_1 = __webpack_require__(/*! ../../Characters/Player */ "./src/game/Characters/Player.ts");
var OnShowPlayer = /** @class */ (function (_super) {
    __extends(OnShowPlayer, _super);
    function OnShowPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnShowPlayer.prototype.listen = function () {
        var game = this.game;
        this.socket.on('showPlayer', function (playerData) {
            game.socketClient.registerEvents();
            game.player = new Player_1.Player(game, true, playerData);
            game.getSceneManger().remotePlayers.push(game.player);
            document.dispatchEvent(game.events.playerConnected);
        });
        return this;
    };
    return OnShowPlayer;
}(SocketEvent_1.SocketEvent));
exports.OnShowPlayer = OnShowPlayer;


/***/ }),

/***/ "./src/game/SocketClient/Player/OnShowRoomPlayer.ts":
/*!**********************************************************!*\
  !*** ./src/game/SocketClient/Player/OnShowRoomPlayer.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var Player_1 = __webpack_require__(/*! ../../Characters/Player */ "./src/game/Characters/Player.ts");
var OnShowRoomPlayer = /** @class */ (function (_super) {
    __extends(OnShowRoomPlayer, _super);
    function OnShowRoomPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnShowRoomPlayer.prototype.listen = function () {
        var game = this.game;
        this.socket.on('showRoomPlayer', function (playerData) {
            var playerExists = false;
            game.getSceneManger().remotePlayers.forEach(function (player) {
                if (player.id == playerData.activePlayer.id) {
                    playerExists = true;
                }
            });
            if (!playerExists) {
                game.getSceneManger().remotePlayers.push(new Player_1.Player(game, false, playerData));
            }
        });
        return this;
    };
    return OnShowRoomPlayer;
}(SocketEvent_1.SocketEvent));
exports.OnShowRoomPlayer = OnShowRoomPlayer;


/***/ }),

/***/ "./src/game/SocketClient/Player/OnUpdatePlayers.ts":
/*!*********************************************************!*\
  !*** ./src/game/SocketClient/Player/OnUpdatePlayers.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var AbstractCharacter_1 = __webpack_require__(/*! ../../Characters/AbstractCharacter */ "./src/game/Characters/AbstractCharacter.ts");
var Game_1 = __webpack_require__(/*! ../../Game */ "./src/game/Game.ts");
var OnUpdatePlayers = /** @class */ (function (_super) {
    __extends(OnUpdatePlayers, _super);
    function OnUpdatePlayers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnUpdatePlayers.prototype.listen = function () {
        var game = this.game;
        this.socket.on('updatePlayer', function (updatedPlayer) {
            var player = null;
            if (!updatedPlayer.activePlayer.id) {
                return;
            }
            game.getSceneManger().remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                    player = game.getSceneManger().remotePlayers[key];
                    return;
                }
            });
            ///action when hp of character is changed
            if (player.statistics.hp != updatedPlayer.activePlayer.statistics.hp) {
                var damage_1 = (player.statistics.hp - updatedPlayer.activePlayer.statistics.hp);
                player.statistics.hp = updatedPlayer.activePlayer.statistics.hp;
                setTimeout(function () {
                    player.bloodParticles.start();
                    player.refreshHpInGui();
                    setTimeout(function () {
                        player.bloodParticles.stop();
                    }, 100);
                    player.showDamage(damage_1);
                    if (player.isControllable) {
                        player.refreshHpInGui();
                    }
                    if (player.isAlive && player.statistics.hp <= 0) {
                        player.isAlive = false;
                        player.isDeath = true;
                        player.mesh.skeleton.beginAnimation('death', false);
                    }
                }, 400);
            }
            if (Number.isInteger(updatedPlayer.attack) && !player.isAttack) {
                var targetPoint = updatedPlayer.targetPoint;
                if (targetPoint) {
                    var targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                    player.meshForMove.lookAt(targetPointVector3, Math.PI);
                }
                var attackAnimation = (Game_1.Game.randomNumber(1, 2) == 1) ? AbstractCharacter_1.AbstractCharacter.ANIMATION_ATTACK_02 : AbstractCharacter_1.AbstractCharacter.ANIMATION_ATTACK_01;
                player.runAnimationHit(attackAnimation, function () {
                    if (player.dynamicFunction !== undefined) {
                        game.getBabylonScene().unregisterBeforeRender(player.dynamicFunction);
                    }
                });
                player.statistics.energy = updatedPlayer.activePlayer.statistics.energy;
                player.refreshEnergyInGui();
                return;
            }
            if (updatedPlayer.targetPoint && !player.isControllable) {
                var targetPointVector3 = new BABYLON.Vector3(updatedPlayer.targetPoint.x, 0, updatedPlayer.targetPoint.z);
                player.runPlayerToPosition(targetPointVector3);
            }
        });
        return this;
    };
    return OnUpdatePlayers;
}(SocketEvent_1.SocketEvent));
exports.OnUpdatePlayers = OnUpdatePlayers;


/***/ }),

/***/ "./src/game/SocketClient/Player/OnUpdatePlayersSkills.ts":
/*!***************************************************************!*\
  !*** ./src/game/SocketClient/Player/OnUpdatePlayersSkills.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var OnUpdatePlayersSkills = /** @class */ (function (_super) {
    __extends(OnUpdatePlayersSkills, _super);
    function OnUpdatePlayersSkills() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnUpdatePlayersSkills.prototype.listen = function () {
        var game = this.game;
        this.socket.on('updatePlayerSkill', function (updatedPlayer) {
            var player = null;
            console.log('skill');
            game.getSceneManger().remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                    player = game.getSceneManger().remotePlayers[key];
                    return;
                }
            });
            if (updatedPlayer.activeSkill) {
                player.statistics.energy = updatedPlayer.activePlayer.statistics.energy;
                player.refreshEnergyInGui();
                var skill = player.skills[updatedPlayer.activeSkill.type];
                skill.showAnimation(updatedPlayer.activeSkill.duration * 1000, updatedPlayer.activeSkill.cooldownTime);
            }
        });
        return this;
    };
    return OnUpdatePlayersSkills;
}(SocketEvent_1.SocketEvent));
exports.OnUpdatePlayersSkills = OnUpdatePlayersSkills;


/***/ }),

/***/ "./src/game/SocketClient/Scene/Chests/OnOpenChest.ts":
/*!***********************************************************!*\
  !*** ./src/game/SocketClient/Scene/Chests/OnOpenChest.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var OnOpenChest = /** @class */ (function (_super) {
    __extends(OnOpenChest, _super);
    function OnOpenChest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnOpenChest.prototype.listen = function () {
        var game = this.game;
        this.socket.on('openChest', function (data) {
            var opened = data.chest.opened;
            if (!opened) {
                game.gui.playerLogsQuests.addText('You do not have key to open chest', 'red');
            }
            else {
                var chest_1 = game.getSceneManger().chests[data.chestKey];
                chest_1.hightlightLayer.dispose();
                chest_1.mesh.skeleton.beginAnimation('action', false);
                chest_1.mesh.actionManager.actions.forEach(function (action) {
                    chest_1.mesh.actionManager.unregisterAction(action);
                });
            }
        });
        return this;
    };
    return OnOpenChest;
}(SocketEvent_1.SocketEvent));
exports.OnOpenChest = OnOpenChest;


/***/ }),

/***/ "./src/game/SocketClient/Scene/Chests/OnRefreshChest.ts":
/*!**************************************************************!*\
  !*** ./src/game/SocketClient/Scene/Chests/OnRefreshChest.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var Chest_1 = __webpack_require__(/*! ../../../Initializers/Chest */ "./src/game/Initializers/Chest.ts");
var OnRefreshChest = /** @class */ (function (_super) {
    __extends(OnRefreshChest, _super);
    function OnRefreshChest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnRefreshChest.prototype.listen = function () {
        var game = this.game;
        this.socket.on('refreshChests', function (chests) {
            game.getSceneManger().chests.forEach(function (chest) {
                chest.hightlightLayer.dispose();
            });
            game.getSceneManger().chests = [];
            chests.forEach(function (chest, chestKey) {
                game.getSceneManger().chests.push(new Chest_1.Chest(game, chest, chestKey));
            });
        });
        return this;
    };
    return OnRefreshChest;
}(SocketEvent_1.SocketEvent));
exports.OnRefreshChest = OnRefreshChest;


/***/ }),

/***/ "./src/game/SocketClient/Scene/Items/OnAddDroppedItem.ts":
/*!***************************************************************!*\
  !*** ./src/game/SocketClient/Scene/Items/OnAddDroppedItem.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var OnAddDroppedItem = /** @class */ (function (_super) {
    __extends(OnAddDroppedItem, _super);
    function OnAddDroppedItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnAddDroppedItem.prototype.listen = function () {
        var game = this.game;
        this.socket.on('addDroppedItem', function (data) {
            if (data.itemKey == null) {
                return game.gui.playerLogsQuests.addText('Your inventory is full', 'orange');
            }
            var droppedItem = game.getSceneManger().droppedItems[data.itemKey];
            if (droppedItem) {
                droppedItem.pickItem();
            }
        });
        return this;
    };
    return OnAddDroppedItem;
}(SocketEvent_1.SocketEvent));
exports.OnAddDroppedItem = OnAddDroppedItem;


/***/ }),

/***/ "./src/game/SocketClient/Scene/Items/OnAddSpecialItem.ts":
/*!***************************************************************!*\
  !*** ./src/game/SocketClient/Scene/Items/OnAddSpecialItem.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var OnAddSpecialItem = /** @class */ (function (_super) {
    __extends(OnAddSpecialItem, _super);
    function OnAddSpecialItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnAddSpecialItem.prototype.listen = function () {
        var game = this.game;
        this.socket.on('addSpecialItem', function (data) {
            game.gui.playerLogsQuests.addText('You earned ' + data.value + ' ' + data.name + '', 'gold');
        });
        return this;
    };
    return OnAddSpecialItem;
}(SocketEvent_1.SocketEvent));
exports.OnAddSpecialItem = OnAddSpecialItem;


/***/ }),

/***/ "./src/game/SocketClient/Scene/Items/OnRefreshRandomSpecialItems.ts":
/*!**************************************************************************!*\
  !*** ./src/game/SocketClient/Scene/Items/OnRefreshRandomSpecialItems.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var RandomSpecialItem_1 = __webpack_require__(/*! ../../../Initializers/RandomSpecialItem */ "./src/game/Initializers/RandomSpecialItem.ts");
var OnRefreshRandomSpecialItems = /** @class */ (function (_super) {
    __extends(OnRefreshRandomSpecialItems, _super);
    function OnRefreshRandomSpecialItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnRefreshRandomSpecialItems.prototype.listen = function () {
        var game = this.game;
        this.socket.on('refreshRandomSpecialItems', function (randomSpecialItems) {
            game.getSceneManger().randomSpecialItems.forEach(function (randomSpecialItem) {
                randomSpecialItem.mesh.dispose();
                randomSpecialItem.tooltip.container.dispose();
            });
            game.getSceneManger().randomSpecialItems = [];
            randomSpecialItems.forEach(function (randomSpecialItem, randomSpecialItemKey) {
                if (!randomSpecialItem.isPicked) {
                    game.getSceneManger().randomSpecialItems.push(new RandomSpecialItem_1.RandomSpecialItem(game, randomSpecialItem, randomSpecialItemKey));
                }
            });
        });
        return this;
    };
    return OnRefreshRandomSpecialItems;
}(SocketEvent_1.SocketEvent));
exports.OnRefreshRandomSpecialItems = OnRefreshRandomSpecialItems;


/***/ }),

/***/ "./src/game/SocketClient/Scene/Items/OnShowDroppedItem.ts":
/*!****************************************************************!*\
  !*** ./src/game/SocketClient/Scene/Items/OnShowDroppedItem.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var Item_1 = __webpack_require__(/*! ../../../Player/Items/Item */ "./src/game/Player/Items/Item.ts");
var DroppedItem_1 = __webpack_require__(/*! ../../../Initializers/DroppedItem */ "./src/game/Initializers/DroppedItem.ts");
var OnShowDroppedItem = /** @class */ (function (_super) {
    __extends(OnShowDroppedItem, _super);
    function OnShowDroppedItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnShowDroppedItem.prototype.listen = function () {
        var game = this.game;
        this.socket.on('showDroppedItem', function (data) {
            var item = new Item_1.Item(game, data.item);
            game.getSceneManger().droppedItems[data.itemKey] = (new DroppedItem_1.DroppedItem(game, item, data.position, data.itemKey));
        });
        return this;
    };
    return OnShowDroppedItem;
}(SocketEvent_1.SocketEvent));
exports.OnShowDroppedItem = OnShowDroppedItem;


/***/ }),

/***/ "./src/game/SocketClient/Scene/OnChangeScene.ts":
/*!******************************************************!*\
  !*** ./src/game/SocketClient/Scene/OnChangeScene.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var Manager_1 = __webpack_require__(/*! ../../Scenes/Manager */ "./src/game/Scenes/Manager.ts");
var OnChangeScene = /** @class */ (function (_super) {
    __extends(OnChangeScene, _super);
    function OnChangeScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnChangeScene.prototype.listen = function () {
        var game = this.game;
        this.socket.on('changeScene', function (sceneType) {
            var scene = Manager_1.Manager.factory(sceneType);
            game.changeScene(scene);
        });
        return this;
    };
    return OnChangeScene;
}(SocketEvent_1.SocketEvent));
exports.OnChangeScene = OnChangeScene;


/***/ }),

/***/ "./src/game/SocketClient/Scene/OnRefreshGateways.ts":
/*!**********************************************************!*\
  !*** ./src/game/SocketClient/Scene/OnRefreshGateways.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var Gateways_1 = __webpack_require__(/*! ../../Initializers/Gateways */ "./src/game/Initializers/Gateways.ts");
var OnRefreshGateways = /** @class */ (function (_super) {
    __extends(OnRefreshGateways, _super);
    function OnRefreshGateways() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnRefreshGateways.prototype.listen = function () {
        var game = this.game;
        var gateways = [];
        this.socket.on('refreshGateways', function (sceneServerData) {
            gateways.forEach(function (gateway) {
                gateway.particleSystem.dispose();
            });
            var gatewaysFromServer = sceneServerData.gateways;
            gatewaysFromServer.forEach(function (gateway) {
                var gatewayInGame = new Gateways_1.Gateway(game, gateway.objectName, gateway.isActive, gateway.openSceneType, gateway.entranceName);
                gateways.push(gatewayInGame);
            });
        });
        return this;
    };
    return OnRefreshGateways;
}(SocketEvent_1.SocketEvent));
exports.OnRefreshGateways = OnRefreshGateways;


/***/ }),

/***/ "./src/game/SocketClient/Scene/Quests/OnQuestRequirementDoneInformation.ts":
/*!*********************************************************************************!*\
  !*** ./src/game/SocketClient/Scene/Quests/OnQuestRequirementDoneInformation.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var OnQuestRequirementDoneInformation = /** @class */ (function (_super) {
    __extends(OnQuestRequirementDoneInformation, _super);
    function OnQuestRequirementDoneInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnQuestRequirementDoneInformation.prototype.listen = function () {
        var self = this;
        this.socket.on('questRequirementDoneInformation', function (data) {
            self.game.gui.playerLogsQuests.addText(data, 'orange');
            self.socket.emit('refreshQuests');
            self.socket.emit('refreshGateways');
        });
        return this;
    };
    return OnQuestRequirementDoneInformation;
}(SocketEvent_1.SocketEvent));
exports.OnQuestRequirementDoneInformation = OnQuestRequirementDoneInformation;


/***/ }),

/***/ "./src/game/SocketClient/Scene/Quests/OnQuestRequirementInformation.ts":
/*!*****************************************************************************!*\
  !*** ./src/game/SocketClient/Scene/Quests/OnQuestRequirementInformation.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var OnQuestRequirementInformation = /** @class */ (function (_super) {
    __extends(OnQuestRequirementInformation, _super);
    function OnQuestRequirementInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnQuestRequirementInformation.prototype.listen = function () {
        var self = this;
        this.socket.on('questRequirementInformation', function (data) {
            self.game.gui.playerLogsQuests.addText(data);
        });
        return this;
    };
    return OnQuestRequirementInformation;
}(SocketEvent_1.SocketEvent));
exports.OnQuestRequirementInformation = OnQuestRequirementInformation;


/***/ }),

/***/ "./src/game/SocketClient/Scene/Quests/OnRefreshQuests.ts":
/*!***************************************************************!*\
  !*** ./src/game/SocketClient/Scene/Quests/OnRefreshQuests.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent_1 = __webpack_require__(/*! ../../SocketEvent */ "./src/game/SocketClient/SocketEvent.ts");
var Quests_1 = __webpack_require__(/*! ../../../Initializers/Quests */ "./src/game/Initializers/Quests.ts");
var OnRefreshQuests = /** @class */ (function (_super) {
    __extends(OnRefreshQuests, _super);
    function OnRefreshQuests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnRefreshQuests.prototype.listen = function () {
        var game = this.game;
        var self = this;
        this.socket.on('refreshQuests', function (data) {
            game.getSceneManger().quests.forEach(function (quest) {
                quest.dispose();
            });
            game.getSceneManger().quests = [];
            var activeQuest = data.activeQuest;
            data.quests.forEach(function (quest) {
                game.getSceneManger().quests.push(new Quests_1.Quests(game, quest, activeQuest));
            });
            self.socket.emit('refreshGateways');
            if (activeQuest) {
                self.game.gui.playerQuestInformation.addQuest(activeQuest);
            }
        });
        return this;
    };
    return OnRefreshQuests;
}(SocketEvent_1.SocketEvent));
exports.OnRefreshQuests = OnRefreshQuests;


/***/ }),

/***/ "./src/game/SocketClient/SocketEvent.ts":
/*!**********************************************!*\
  !*** ./src/game/SocketClient/SocketEvent.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SocketEvent = /** @class */ (function () {
    function SocketEvent(game, socket) {
        this.game = game;
        this.socket = socket;
    }
    return SocketEvent;
}());
exports.SocketEvent = SocketEvent;


/***/ }),

/***/ "./src/game/SocketClient/socketClient.ts":
/*!***********************************************!*\
  !*** ./src/game/SocketClient/socketClient.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SlavsLoader_1 = __webpack_require__(/*! ../Loader/SlavsLoader */ "./src/game/Loader/SlavsLoader.ts");
var ShowEnemiesSocketEvent_1 = __webpack_require__(/*! ./Enemies/ShowEnemiesSocketEvent */ "./src/game/SocketClient/Enemies/ShowEnemiesSocketEvent.ts");
var UpdateEnemiesSocketEvent_1 = __webpack_require__(/*! ./Enemies/UpdateEnemiesSocketEvent */ "./src/game/SocketClient/Enemies/UpdateEnemiesSocketEvent.ts");
var OnOpenChest_1 = __webpack_require__(/*! ./Scene/Chests/OnOpenChest */ "./src/game/SocketClient/Scene/Chests/OnOpenChest.ts");
var OnRefreshChest_1 = __webpack_require__(/*! ./Scene/Chests/OnRefreshChest */ "./src/game/SocketClient/Scene/Chests/OnRefreshChest.ts");
var OnAddSpecialItem_1 = __webpack_require__(/*! ./Scene/Items/OnAddSpecialItem */ "./src/game/SocketClient/Scene/Items/OnAddSpecialItem.ts");
var OnRefreshRandomSpecialItems_1 = __webpack_require__(/*! ./Scene/Items/OnRefreshRandomSpecialItems */ "./src/game/SocketClient/Scene/Items/OnRefreshRandomSpecialItems.ts");
var OnShowDroppedItem_1 = __webpack_require__(/*! ./Scene/Items/OnShowDroppedItem */ "./src/game/SocketClient/Scene/Items/OnShowDroppedItem.ts");
var OnQuestRequirementDoneInformation_1 = __webpack_require__(/*! ./Scene/Quests/OnQuestRequirementDoneInformation */ "./src/game/SocketClient/Scene/Quests/OnQuestRequirementDoneInformation.ts");
var OnQuestRequirementInformation_1 = __webpack_require__(/*! ./Scene/Quests/OnQuestRequirementInformation */ "./src/game/SocketClient/Scene/Quests/OnQuestRequirementInformation.ts");
var OnRefreshQuests_1 = __webpack_require__(/*! ./Scene/Quests/OnRefreshQuests */ "./src/game/SocketClient/Scene/Quests/OnRefreshQuests.ts");
var OnChangeScene_1 = __webpack_require__(/*! ./Scene/OnChangeScene */ "./src/game/SocketClient/Scene/OnChangeScene.ts");
var OnRefreshGateways_1 = __webpack_require__(/*! ./Scene/OnRefreshGateways */ "./src/game/SocketClient/Scene/OnRefreshGateways.ts");
var OnAddAttribute_1 = __webpack_require__(/*! ./Player/OnAddAttribute */ "./src/game/SocketClient/Player/OnAddAttribute.ts");
var OnAddExperience_1 = __webpack_require__(/*! ./Player/OnAddExperience */ "./src/game/SocketClient/Player/OnAddExperience.ts");
var OnNewLvl_1 = __webpack_require__(/*! ./Player/OnNewLvl */ "./src/game/SocketClient/Player/OnNewLvl.ts");
var OnRefreshPlayerEquip_1 = __webpack_require__(/*! ./Player/OnRefreshPlayerEquip */ "./src/game/SocketClient/Player/OnRefreshPlayerEquip.ts");
var OnShowPlayer_1 = __webpack_require__(/*! ./Player/OnShowPlayer */ "./src/game/SocketClient/Player/OnShowPlayer.ts");
var OnUpdatePlayers_1 = __webpack_require__(/*! ./Player/OnUpdatePlayers */ "./src/game/SocketClient/Player/OnUpdatePlayers.ts");
var OnUpdatePlayersSkills_1 = __webpack_require__(/*! ./Player/OnUpdatePlayersSkills */ "./src/game/SocketClient/Player/OnUpdatePlayersSkills.ts");
var OnRemovePlayer_1 = __webpack_require__(/*! ./Player/OnRemovePlayer */ "./src/game/SocketClient/Player/OnRemovePlayer.ts");
var SelectCharacter_1 = __webpack_require__(/*! ../Scenes/SelectCharacter */ "./src/game/Scenes/SelectCharacter.ts");
var OnAddDroppedItem_1 = __webpack_require__(/*! ./Scene/Items/OnAddDroppedItem */ "./src/game/SocketClient/Scene/Items/OnAddDroppedItem.ts");
var OnShowRoomPlayer_1 = __webpack_require__(/*! ./Player/OnShowRoomPlayer */ "./src/game/SocketClient/Player/OnShowRoomPlayer.ts");
var io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
var SocketClient = /** @class */ (function () {
    function SocketClient(game) {
        this.game = game;
    }
    SocketClient.prototype.connect = function (socketUrl, accessToken) {
        SlavsLoader_1.SlavsLoader.showLoaderWithText('Establishing connection with server...');
        this.socket = io.connect(socketUrl, { query: 'gameToken=' + accessToken });
        this.socket.on('connect_error', function () {
            SlavsLoader_1.SlavsLoader.showLoaderWithText('Problem with connection to server');
        });
        this.playerConnected();
    };
    SocketClient.prototype.registerEvents = function () {
        var game = this.game;
        var events = [
            new ShowEnemiesSocketEvent_1.ShowEnemiesSocketEvent(game, this.socket),
            new UpdateEnemiesSocketEvent_1.UpdateEnemiesSocketEvent(game, this.socket),
            new OnOpenChest_1.OnOpenChest(game, this.socket),
            new OnRefreshChest_1.OnRefreshChest(game, this.socket),
            new OnAddSpecialItem_1.OnAddSpecialItem(game, this.socket),
            new OnRefreshRandomSpecialItems_1.OnRefreshRandomSpecialItems(game, this.socket),
            new OnShowDroppedItem_1.OnShowDroppedItem(game, this.socket),
            new OnAddDroppedItem_1.OnAddDroppedItem(game, this.socket),
            new OnQuestRequirementDoneInformation_1.OnQuestRequirementDoneInformation(game, this.socket),
            new OnQuestRequirementInformation_1.OnQuestRequirementInformation(game, this.socket),
            new OnRefreshQuests_1.OnRefreshQuests(game, this.socket),
            new OnRefreshGateways_1.OnRefreshGateways(game, this.socket),
            new OnAddAttribute_1.OnAddAttribute(game, this.socket),
            new OnAddExperience_1.OnAddExperience(game, this.socket),
            new OnNewLvl_1.OnNewLvl(game, this.socket),
            new OnRefreshPlayerEquip_1.OnRefreshPlayerEquip(game, this.socket),
            new OnRemovePlayer_1.OnRemovePlayer(game, this.socket),
            new OnUpdatePlayers_1.OnUpdatePlayers(game, this.socket),
            new OnShowRoomPlayer_1.OnShowRoomPlayer(game, this.socket),
            new OnUpdatePlayersSkills_1.OnUpdatePlayersSkills(game, this.socket),
        ];
        events.forEach(function (event) {
            event.listen();
        });
        return this;
    };
    SocketClient.prototype.clearEvents = function () {
        var game = this.game;
        this.socket.removeAllListeners();
        new OnShowPlayer_1.OnShowPlayer(game, this.socket).listen();
        new OnChangeScene_1.OnChangeScene(game, this.socket).listen();
        return this;
    };
    SocketClient.prototype.playerConnected = function () {
        var self = this;
        var game = this.game;
        this.socket.on('clientConnected', function (data) {
            self.connectionId = data.connectionId;
            self.socket.emit('changeScene', SelectCharacter_1.SelectCharacter.TYPE);
            new OnShowPlayer_1.OnShowPlayer(game, self.socket).listen();
            new OnChangeScene_1.OnChangeScene(game, self.socket).listen();
            // self.socket.emit('selectCharacter', 1);
        });
        return this;
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;


/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvQWN0aW9ucy9BdHRhY2tBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0FjdGlvbnMvR29Ub01lc2hBbmRSdW5BY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvQW5pbWF0aW9ucy9BYnN0cmFjdEFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9BbmltYXRpb25zL0JvdW5jZUFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Bc3NldHNGYWN0b3JpZXMvQWJzdHJhY3RGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0Fzc2V0c0ZhY3Rvcmllcy9Bc3NldHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvQXNzZXRzRmFjdG9yaWVzL0NoYXJhY3RlckFzc2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0Fzc2V0c0ZhY3Rvcmllcy9DaGVzdEFzc2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0Fzc2V0c0ZhY3Rvcmllcy9OYXR1cmVBc3NldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Bc3NldHNGYWN0b3JpZXMvU2tlbGV0b25Bc3NldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Bc3NldHNGYWN0b3JpZXMvU2tlbGV0b25Cb3NzQXNzZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvQXNzZXRzRmFjdG9yaWVzL1NrZWxldG9uV2FycmlvckFzc2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0NhbWVyYXMvR2FtZUNhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DYW1lcmFzL1NlbGVjdENoYXJhY3RlckNhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DaGFyYWN0ZXJzL0Fic3RyYWN0Q2hhcmFjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0NoYXJhY3RlcnMvTW9uc3Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DaGFyYWN0ZXJzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DaGFyYWN0ZXJzL25wYy9BYnN0cmFjdE5wYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DaGFyYWN0ZXJzL25wYy9HdWFyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DaGFyYWN0ZXJzL3NlbGVjdENoYXJhY3Rlci9XYXJyaW9yLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0NvbnRyb2xsZXJzL01vdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0VmZmVjdHMvR29kUmF5LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0Vudmlyb25tZW50L0Fic3RyYWN0RW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvRW52aXJvbm1lbnQvRm9nL0ZvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9FbnZpcm9ubWVudC9lbnZpcm9ubWVudEZvcmVzdEhvdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0Vudmlyb25tZW50L2Vudmlyb25tZW50Rm9yZXN0SG91c2VTdGFydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9FbnZpcm9ubWVudC9lbnZpcm9ubWVudEZvcmVzdEhvdXNlVG9tYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9FbnZpcm9ubWVudC9lbnZpcm9ubWVudE1vdW50YWluc1Bhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvRW52aXJvbm1lbnQvZW52aXJvbm1lbnRTZWxlY3RDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvRXZlbnRzL0V2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvUGxheWVyQm90dG9tUGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL1BsYXllckluZm9ybWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0dVSS9QbGF5ZXJRdWVzdEluZm9ybWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0dVSS9QbGF5ZXJRdWVzdHNQYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvUm9vbUluZm9ybWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0dVSS9TZWxlY3RDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL1Nob3dIcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvVG9vbHRpcHMvVG9vbHRpcEJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvVG9vbHRpcHMvVG9vbHRpcEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvVG9vbHRpcHMvVG9vbHRpcE1lc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL3BvcHVwL0F0dHJpYnV0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL3BvcHVwL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvcG9wdXAvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvcG9wdXAvUG9wdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL3BvcHVwL2ludmVudG9yeS9Bcm1vci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvcG9wdXAvaW52ZW50b3J5L0Jvb3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0dVSS9wb3B1cC9pbnZlbnRvcnkvRXF1aXBCbG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvcG9wdXAvaW52ZW50b3J5L0dsb3Zlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvcG9wdXAvaW52ZW50b3J5L0hlbG0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL3BvcHVwL2ludmVudG9yeS9TaGllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL3BvcHVwL2ludmVudG9yeS9XZWFwb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL3BvcHVwL25ld1F1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvSW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvSW5pdGlhbGl6ZXJzL0NoZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0luaXRpYWxpemVycy9Db2xsaXNpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0luaXRpYWxpemVycy9Ecm9wcGVkSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Jbml0aWFsaXplcnMvR2F0ZXdheXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvSW5pdGlhbGl6ZXJzL1F1ZXN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Jbml0aWFsaXplcnMvUmFuZG9tU3BlY2lhbEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvTG9hZGVyL1NsYXZzTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL09wdGlvbnMvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvQWJzdHJhY3RQYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvQmxvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGFydGljbGVzL0Ryb3BwZWRJdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BhcnRpY2xlcy9GaXJlcGxhY2VGaXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BhcnRpY2xlcy9GaXJlcGxhY2VTbW9rZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvR2F0ZXdheVBhcnRpY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvUG9pbnRlci9DbGlja1BhcnRpY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvU2tpbGxzL0hlYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGFydGljbGVzL1NraWxscy9TaGllbGRBdHRhY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGFydGljbGVzL1NvbGlkUGFydGljbGVTeXN0ZW0vQWJzdHJhY3RTb2xpZFBhcnRpY2xlU3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BhcnRpY2xlcy9Tb2xpZFBhcnRpY2xlU3lzdGVtL05hdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvU29saWRQYXJ0aWNsZVN5c3RlbS9OYXR1cmVCbG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvV2Fsa1Ntb2tlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BsYXllci9JbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGxheWVyL0l0ZW1zL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGxheWVyL0l0ZW1zL0l0ZW1NYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BsYXllci9Ta2lsbHMvQWJzdHJhY3RTa2lsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QbGF5ZXIvU2tpbGxzL0Jsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BsYXllci9Ta2lsbHMvRmFzdEF0dGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QbGF5ZXIvU2tpbGxzL0hlYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGxheWVyL1NraWxscy9TaGllbGRBdHRhY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGxheWVyL1NraWxscy9Ta2lsbHNNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BsYXllci9Ta2lsbHMvU3Ryb25nQXR0YWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NjZW5lcy9CYXR0bGVncm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU2NlbmVzL0ZvcmVzdEhvdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NjZW5lcy9Gb3Jlc3RIb3VzZVN0YXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NjZW5lcy9Gb3Jlc3RIb3VzZVRvbWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU2NlbmVzL01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU2NlbmVzL01vdW50YWlucy9DYXZlRXhpdC9DYXZlRXhpdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9TY2VuZXMvTW91bnRhaW5zL0NhdmVFeGl0L0Vudmlyb25tZW50Q2F2ZUV4aXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU2NlbmVzL01vdW50YWlucy9Nb3VudGFpbnNFbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9TY2VuZXMvTW91bnRhaW5zL1Rvd24vQXJlbmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU2NlbmVzL01vdW50YWluc1Bhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU2NlbmVzL1NjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NjZW5lcy9TZWxlY3RDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L0VuZW1pZXMvU2hvd0VuZW1pZXNTb2NrZXRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvRW5lbWllcy9VcGRhdGVFbmVtaWVzU29ja2V0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L1BsYXllci9PbkFkZEF0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvUGxheWVyL09uQWRkRXhwZXJpZW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvUGxheWVyL09uTmV3THZsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9QbGF5ZXIvT25SZWZyZXNoUGxheWVyRXF1aXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L1BsYXllci9PblJlbW92ZVBsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvUGxheWVyL09uU2hvd1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvUGxheWVyL09uU2hvd1Jvb21QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L1BsYXllci9PblVwZGF0ZVBsYXllcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L1BsYXllci9PblVwZGF0ZVBsYXllcnNTa2lsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L1NjZW5lL0NoZXN0cy9Pbk9wZW5DaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvU2NlbmUvQ2hlc3RzL09uUmVmcmVzaENoZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9TY2VuZS9JdGVtcy9PbkFkZERyb3BwZWRJdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9TY2VuZS9JdGVtcy9PbkFkZFNwZWNpYWxJdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9TY2VuZS9JdGVtcy9PblJlZnJlc2hSYW5kb21TcGVjaWFsSXRlbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L1NjZW5lL0l0ZW1zL09uU2hvd0Ryb3BwZWRJdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9TY2VuZS9PbkNoYW5nZVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9TY2VuZS9PblJlZnJlc2hHYXRld2F5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvU2NlbmUvUXVlc3RzL09uUXVlc3RSZXF1aXJlbWVudERvbmVJbmZvcm1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvU2NlbmUvUXVlc3RzL09uUXVlc3RSZXF1aXJlbWVudEluZm9ybWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9TY2VuZS9RdWVzdHMvT25SZWZyZXNoUXVlc3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9Tb2NrZXRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvc29ja2V0Q2xpZW50LnRzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JKQSw2SEFBNEQ7QUFFNUQ7SUFRSSx1QkFBWSxJQUFVO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxxQ0FBYSxHQUFwQixVQUFxQixPQUFnQjtRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBRS9CLDJDQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQztvQkFDM0UsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsV0FBVyxDQUFDOzRCQUNoRCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzt3QkFDbEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNaLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFTSw0Q0FBb0IsR0FBM0I7UUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBRU0sc0NBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixhQUFhLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLHlDQUFpQixHQUF4QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTyw4Q0FBc0IsR0FBOUI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDcEMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFFBQVE7Z0JBQ3RELFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxRQUFRO2FBQ3RELENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLGdCQUEwQjtRQUMxQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFFakYsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLGdCQUFnQixFQUFFLENBQUM7YUFDdEI7U0FDSjtJQUVMLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUM7QUE3RVksc0NBQWE7Ozs7Ozs7Ozs7Ozs7OztBQ0QxQjtJQUFBO0lBZ0NBLENBQUM7SUE5QlUsNEJBQU8sR0FBZCxVQUFlLElBQVUsRUFBRSxJQUEwQixFQUFFLE1BQWdCO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQyxJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVuQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RSxJQUFNLHlCQUF5QixHQUFHO1lBQzlCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sRUFBRSxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDNUMsUUFBUSxFQUFFLGNBQWM7YUFDM0IsQ0FBQyxDQUFDO1lBRUgsUUFBUSxHQUFHLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM1RTthQUFNO1lBQ0gsTUFBTSxFQUFFLENBQUM7U0FDWjtRQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBRTVDLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFTCwyQkFBQztBQUFELENBQUM7QUFoQ1ksb0RBQW9COzs7Ozs7Ozs7Ozs7Ozs7QUNIakM7SUFBQTtJQUVBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUM7QUFGcUIsOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXZDLHVIQUFzRDtBQUN0RCwwRkFBcUM7QUFFckM7SUFBcUMsbUNBQWlCO0lBQXREOztJQTZCQSxDQUFDO0lBM0JVLDRCQUFZLEdBQW5CO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLFlBQVksRUFBRSxDQUFDLEVBQ3BFLE9BQU8sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQ3JDLE9BQU8sQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUUvQyxJQUFNLElBQUksR0FBRztZQUNUO2dCQUNJLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7WUFDRDtnQkFDSSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsR0FBRzthQUNiO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLENBQUM7YUFDWDtTQUNKLENBQUM7UUFDRixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhCLElBQU0sY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlDLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzFFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU1QyxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLENBN0JvQyxxQ0FBaUIsR0E2QnJEO0FBN0JZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNINUIsMEZBQXFDO0FBRXJDO0lBUUkseUJBQXNCLEtBQW9CO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxxQ0FBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixPQUFPLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsU0FBUztZQUMzRixJQUFJLENBQUMsWUFBWSxHQUF5QixTQUFTLENBQUMsTUFBTSxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHFDQUFXLEdBQWxCLFVBQW1CLElBQVksRUFBRSxhQUE4QjtRQUE5QixxREFBOEI7UUFDM0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFFbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDbkIsSUFBSSxVQUFVLEdBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLGFBQWEsRUFBRTtvQkFDZixVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksRUFBRSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQztpQkFDakc7Z0JBQ0QsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTVCLE9BQU8sVUFBVSxDQUFDO2FBQ3JCO1NBQ0o7SUFDTCxDQUFDO0lBRU0sd0NBQWMsR0FBckIsVUFBc0IsSUFBWTtRQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUVuQixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNuQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDNUQsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRS9CLE9BQU8sYUFBYSxDQUFDO2FBQ3hCO1NBQ0o7SUFDTCxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDO0FBdkRxQiwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7O0FDRnJDLG1IQUFnRDtBQUNoRCxnSEFBOEM7QUFDOUMscUlBQTREO0FBQzVELDRIQUFzRDtBQUN0RCx1R0FBd0M7QUFDeEMsMEdBQTBDO0FBSTFDO0lBU0ksZ0JBQVksS0FBb0I7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDZCQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDJDQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRU0sc0NBQXFCLEdBQTVCLFVBQTZCLElBQVk7UUFDckMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXhCLFFBQU8sSUFBSSxFQUFFO1lBQ1QsS0FBSyxVQUFVO2dCQUNYLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxpQkFBaUI7Z0JBQ2xCLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNwQyxNQUFNO1lBQ1YsS0FBSyxjQUFjO2dCQUNmLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNqQyxNQUFNO1NBQ2I7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUwsYUFBQztBQUFELENBQUM7QUFwQ1ksd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbkIsc0hBQWtEO0FBR2xEO0lBQW9DLGtDQUFlO0lBQy9DLHdCQUFZLEtBQW9CO1FBQWhDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBR2Y7UUFGRyxLQUFJLENBQUMsR0FBRyxHQUFHLDRCQUE0QixDQUFDO1FBQ3hDLEtBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUM7O0lBQ3RDLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQ0FObUMsaUNBQWUsR0FNbEQ7QUFOWSx3Q0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0gzQixzSEFBa0Q7QUFHbEQ7SUFBZ0MsOEJBQWU7SUFDM0Msb0JBQVksS0FBb0I7UUFBaEMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FHZjtRQUZHLEtBQUksQ0FBQyxHQUFHLEdBQUcsMkJBQTJCLENBQUM7UUFDdkMsS0FBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7O0lBQ3BDLENBQUM7SUFFTCxpQkFBQztBQUFELENBQUMsQ0FQK0IsaUNBQWUsR0FPOUM7QUFQWSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h2QixzSEFBa0Q7QUFHbEQ7SUFBaUMsK0JBQWU7SUFDNUMscUJBQVksS0FBb0I7UUFBaEMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FHZjtRQUZHLEtBQUksQ0FBQyxHQUFHLEdBQUcsNEJBQTRCLENBQUM7UUFDeEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQzs7SUFDckMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxDQU5nQyxpQ0FBZSxHQU0vQztBQU5ZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHhCLHNIQUFrRDtBQUdsRDtJQUFtQyxpQ0FBZTtJQUM5Qyx1QkFBWSxLQUFvQjtRQUFoQyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUdmO1FBRkcsS0FBSSxDQUFDLEdBQUcsR0FBRyxzQ0FBc0MsQ0FBQztRQUNsRCxLQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDOztJQUN2QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLENBTmtDLGlDQUFlLEdBTWpEO0FBTlksc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIMUIsc0hBQWtEO0FBR2xEO0lBQXVDLHFDQUFlO0lBQ2xELDJCQUFZLEtBQW9CO1FBQWhDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBR2Y7UUFGRyxLQUFJLENBQUMsR0FBRyxHQUFHLDBDQUEwQyxDQUFDO1FBQ3RELEtBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUM7O0lBQzNDLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQ0FOc0MsaUNBQWUsR0FNckQ7QUFOWSw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIOUIsc0hBQWtEO0FBR2xEO0lBQTBDLHdDQUFlO0lBQ3JELDhCQUFZLEtBQW9CO1FBQWhDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBR2Y7UUFGRyxLQUFJLENBQUMsR0FBRyxHQUFHLDZDQUE2QyxDQUFDO1FBQ3pELEtBQUksQ0FBQyxRQUFRLEdBQUcseUJBQXlCLENBQUM7O0lBQzlDLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQ0FOeUMsaUNBQWUsR0FNeEQ7QUFOWSxvREFBb0I7Ozs7Ozs7Ozs7Ozs7OztBQ0hqQywwRkFBcUM7QUFDckMsc0VBQTZCO0FBRTdCO0lBQUE7SUErQkEsQ0FBQztJQTdCaUIsNEJBQWlCLEdBQS9CLFVBQWdDLEtBQW9CO1FBQ2hELElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBRyxZQUFZLEVBQUU7WUFDYixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7UUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNGLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsVUFBVSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDckIsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdkIsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFekIsU0FBUztRQUNULElBQUcsV0FBSSxDQUFDLGFBQWEsRUFBRTtZQUNuQixVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNyQixVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUN4QjthQUFNO1lBQ0gsVUFBVSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDdEIsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDeEI7UUFFRCxJQUFJLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pGLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxELEtBQUssQ0FBQyxhQUFhLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUMsS0FBSyxDQUFDLHNCQUFzQixHQUFHLFVBQVUsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDO0FBL0JZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNIdkIsMEZBQXFDO0FBR3JDO0lBQUE7SUFjQSxDQUFDO0lBWmlCLHVDQUFpQixHQUEvQixVQUFnQyxLQUFvQjtRQUNoRCxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNGLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RCxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDdkIsc0JBQXNCO1FBQ3RCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLEtBQUssQ0FBQyxhQUFhLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDO0FBZFksc0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7QUNGbEMsMEZBQXFDO0FBRXJDO0lBbUNJLDJCQUFZLElBQVcsRUFBRSxJQUFTO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFUyxvREFBd0IsR0FBbEM7UUFDSSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN6RixhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLGFBQWEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxhQUFhLENBQUM7UUFFM0MsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHNDQUFVLEdBQWpCLFVBQWtCLE1BQU07UUFDcEIsSUFBSSxjQUFjLEdBQUcsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RixJQUFJLElBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUNoQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV6RSxJQUFJLG9CQUFvQixHQUFHLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHFDQUFxQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUNsSSxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQzFELG9CQUFvQixDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEMsb0JBQW9CLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQyxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25DLG9CQUFvQixDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRSxvQkFBb0IsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsb0JBQW9CLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9ELG9CQUFvQixDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDaEQsb0JBQW9CLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDL0Msb0JBQW9CLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQyxvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLG9CQUFvQixDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUM5QyxvQkFBb0IsQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3RELG9CQUFvQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFN0IsVUFBVSxDQUFDO1lBQ1AsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFUyw0Q0FBZ0IsR0FBMUIsVUFBMkIsUUFBeUI7UUFDaEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QixVQUF1QixTQUFpQixFQUFFLGFBQW9CLEVBQUUsV0FBa0IsRUFBRSxJQUFxQjtRQUEvRCxvREFBb0I7UUFBRSxnREFBa0I7UUFBRSxtQ0FBcUI7UUFDckcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksV0FBVyxFQUFFO1lBQ2IsYUFBYSxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ3pELElBQUksV0FBVyxFQUFFO2dCQUNiLFdBQVcsRUFBRSxDQUFDO2FBQ2pCO1lBRUQsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sNkNBQWlCLEdBQXhCLFVBQXlCLFNBQWlCLEVBQUUsYUFBb0IsRUFBRSxXQUFrQixFQUFFLElBQXFCLEVBQUUsS0FBaUIsRUFBRSxzQkFBc0M7UUFBMUgsb0RBQW9CO1FBQUUsZ0RBQWtCO1FBQUUsbUNBQXFCO1FBQUUsaUNBQWlCO1FBQUUsc0VBQXNDO1FBQ2xLLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFN0IsSUFBSSxhQUFhLEVBQUU7WUFDZixhQUFhLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtZQUM3RCxJQUFJLFdBQVcsRUFBRTtnQkFDYixXQUFXLEVBQUUsQ0FBQzthQUNqQjtZQUVELElBQUcsc0JBQXNCLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2FBQ25DO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR00sNENBQWdCLEdBQXZCO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFbEMsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsRUFBRTtZQUMzQyxJQUFJLE1BQUksR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkIsTUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQixNQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsTUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUNsRixNQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDaEMsTUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLE1BQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixNQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwQixNQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFTSw2Q0FBaUIsR0FBeEI7UUFDSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVsQyxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDMUIsSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXBCLE1BQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO2dCQUN4RixNQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsTUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUcsTUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDYixNQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDNUI7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVNLDZDQUFpQixHQUF4QjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSxvREFBd0IsR0FBL0I7UUFDSSxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUM1QjthQUFNO1lBQ0gsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRU0sd0NBQVksR0FBbkI7UUFDSSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFckUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7SUFDdEQsQ0FBQztJQUFBLENBQUM7SUFJRixhQUFhO0lBQ0gsdUNBQVcsR0FBckIsY0FBeUIsQ0FBQztJQUFBLENBQUM7SUFDakIscUNBQVMsR0FBbkIsY0FBdUIsQ0FBQztJQUFBLENBQUM7SUFsTVgsZ0NBQWMsR0FBVSxLQUFLLENBQUM7SUFDOUIsaUNBQWUsR0FBVSxPQUFPLENBQUM7SUFDakMsd0NBQXNCLEdBQVUsbUJBQW1CLENBQUM7SUFDcEQscUNBQW1CLEdBQVUsUUFBUSxDQUFDO0lBQ3RDLHFDQUFtQixHQUFVLFVBQVUsQ0FBQztJQUN4QyxvQ0FBa0IsR0FBVSxTQUFTLENBQUM7SUFDdEMsb0NBQWtCLEdBQVUsU0FBUyxDQUFDO0lBNkx4RCx3QkFBQztDQUFBO0FBck1xQiw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIdkMsdUhBQXNEO0FBRXRELDZGQUF5QztBQUN6Qyx5R0FBaUQ7QUFDakQsMEZBQXFDO0FBRXJDO0lBQTZCLDJCQUFpQjtJQU0xQyxpQkFBWSxJQUFVLEVBQUUsU0FBaUIsRUFBRSxVQUFlO1FBQTFELFlBQ0ksa0JBQU0sVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FjL0I7UUFaRyxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDeEMsS0FBSSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFFcEIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEgsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqSSxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUNoRSxLQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlFLEtBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDOztJQUNwQyxDQUFDO0lBRU8sNEJBQVUsR0FBbEIsVUFBbUIsV0FBa0IsRUFBRSxRQUFlLEVBQUUsS0FBc0I7UUFDMUUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFL0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU8saUNBQWUsR0FBdkI7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRTtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQ3ZFLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUU7WUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVSLCtFQUErRTtRQUMvRSx1REFBdUQ7UUFDdkQseURBQXlEO1FBQ3pELFdBQVc7UUFFWCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQ3ZFLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUN2RSxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVaLENBQUM7SUFFTyx5QkFBTyxHQUFmO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRTtZQUM3RyxJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRTtZQUNqRixJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxpQ0FBZSxHQUF0QjtRQUNJLElBQUksSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1lBQ3ZDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQ3pEO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFOUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZGLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVFLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxtQ0FBbUM7UUFDM0YsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7UUFDNUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7UUFDOUQsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkQsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkQsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDekIsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDekIsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDN0IsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDN0IsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDM0IsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1FBQy9ELFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNyQyxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM1QixVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM1QixVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QixVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbkIsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZGLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdFLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEQsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUQsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RCxXQUFXLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMxQixXQUFXLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN4QixXQUFXLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM5QixXQUFXLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM5QixXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM1QixXQUFXLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7UUFDaEUsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRCxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFELFdBQVcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN0QyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM3QixXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM3QixXQUFXLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMxQixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFcEIsVUFBVSxDQUFDO1lBQ1AsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixVQUFVLENBQUM7WUFDUCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUViLENBQUM7SUFFRCw2QkFBVyxHQUFYLFVBQVksWUFBWTtRQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxJQUFJLFFBQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFFaEQsVUFBVSxDQUFDO2dCQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBTSxDQUFDLENBQUM7Z0JBQ3hCLFVBQVUsQ0FBQztvQkFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMvQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRVIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7aUJBQzFCO2dCQUVELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNoRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FFWDtJQUNMLENBQUM7SUFFUyw2QkFBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVTLDJCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQ0F4TTRCLHFDQUFpQixHQXdNN0M7QUF4TVksMEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMcEIsdUhBQXNEO0FBQ3RELGlIQUF1RDtBQUN2RCxtR0FBOEM7QUFFOUMsNEZBQXlDO0FBQ3pDLHlHQUFpRDtBQUNqRCxxSEFBMkQ7QUFDM0QsNkZBQXlDO0FBQ3pDLDhFQUFpQztBQUNqQyw2SEFBNkQ7QUFDN0QsMEZBQXFDO0FBRXJDO0lBQTRCLDBCQUFpQjtJQXdCekMsZ0JBQW1CLElBQVUsRUFBRSxjQUF1QixFQUFFLFVBQWU7UUFBdkUsWUFDSSxrQkFBTSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FtQzVDO1FBdERNLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFheEIsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQVF6QyxLQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsS0FBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzVDLEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBRXJDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEtBQUksQ0FBQyxnQkFBZ0IsQ0FDakIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQzNGLENBQUM7UUFDRixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUNoRSxLQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9FLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsQ0FBQztRQUMzQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZELElBQUksS0FBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxLQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNoQyxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOztJQUM5QixDQUFDO0lBRU8sK0JBQWMsR0FBdEIsVUFBdUIsVUFBVTtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDeEQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUM7UUFDM0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RSxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUVPLGtDQUFpQixHQUF6QjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBTSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUN2RCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDN0IsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDN0IsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUM1QixXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQzVCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUvQixjQUFjO1FBQ2QsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFTywyQkFBVSxHQUFsQjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFeEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLHdCQUFPLEdBQWY7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFO1lBQ2xILElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUU7WUFDN0csSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkJBQVUsR0FBakI7UUFDSSxlQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx1Q0FBc0IsR0FBN0IsVUFBOEIsZ0JBQWdCO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFFTSxtQ0FBa0IsR0FBekIsVUFBMEIsTUFBTTtRQUM1QixNQUFNLEdBQUc7WUFDTDtnQkFDSSxJQUFJLEVBQUUsQ0FBQzthQUNWO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7YUFDVjtZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2FBQ1Y7WUFDRDtnQkFDSSxJQUFJLEVBQUUsQ0FBQzthQUNWO1NBQUMsQ0FBQztRQUNQLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBSztnQkFDaEIsSUFBSSxXQUFXLEdBQUcsNkJBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUM7WUFDckQsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxrQ0FBaUIsR0FBeEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3RCLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2YsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNsQjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU0sZ0NBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUdNLHNDQUFxQixHQUE1QjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLHVDQUFzQixHQUE3QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztRQUNoRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxHQUFHLENBQUM7SUFDdkYsQ0FBQztJQUVNLG1DQUFrQixHQUF6QjtRQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDOUcsQ0FBQztJQUVNLCtCQUFjLEdBQXJCO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNsRyxDQUFDO0lBRU0sOEJBQWEsR0FBcEIsVUFBcUIsU0FBaUIsRUFBRSxxQkFBNkI7UUFDakUsSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1FBRW5ELElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSwwQkFBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4RixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLG9DQUFtQixHQUExQixVQUEyQixrQkFBa0I7UUFDekMsSUFBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUN6QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNuQixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBRXpFLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxHQUFHLEVBQUU7b0JBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3pCO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDN0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQ3BJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDM0I7UUFDTCxDQUFDLENBQUM7UUFFRixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hDLElBQUcsS0FBSyxFQUFFO1lBQ04sS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNwRDtJQUNMLENBQUM7SUFFTSw0Q0FBMkIsR0FBbEMsVUFBbUMsWUFBcUI7UUFDcEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxJQUFJLEtBQUssRUFBRTtZQUM3QyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsSUFBSSxZQUFZLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUNqRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRO2FBQ3RDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVTLDRCQUFXLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRVMsMEJBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0FBQyxDQTFSMkIscUNBQWlCLEdBMFI1QztBQTFSWSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JuQix3SEFBdUQ7QUFFdkQsc0dBQWlEO0FBQ2pELHdIQUEyRDtBQUMzRCwwRkFBcUM7QUFFckM7SUFBMEMsK0JBQWlCO0lBT25ELHFCQUFtQixJQUFTLEVBQUUsSUFBSSxFQUFFLFFBQXlCLEVBQUUsUUFBeUI7UUFBeEYsWUFDSSxrQkFBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBeUJwQjtRQXhCRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUV0QyxJQUFJLElBQUksR0FBRyxLQUFJLENBQUM7UUFDaEIsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzlCLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUU5QixLQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUU1QixLQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2QsS0FBSyxFQUFFLElBQUk7WUFDWCxFQUFFLEVBQUUsSUFBSTtTQUNYLENBQUM7UUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFDMUc7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVSLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUMzRztZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVSLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDOztJQUM3QixDQUFDO0lBRU0scUNBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDhCQUFRLEdBQWYsVUFBZ0IsY0FBd0I7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVoRCxJQUFHLGNBQWMsRUFBRTtZQUNmLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBRXRGO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxDQXJEcUMscUNBQWlCLEdBcUR0RDtBQXJEaUIsa0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOakMseUdBQTBDO0FBSTFDO0lBQTJCLHlCQUFXO0lBRWxDLGVBQW1CLElBQVUsRUFBRSxRQUF5QixFQUFFLFFBQXlCO1FBQW5GLGlCQTRCQztRQTNCRyxhQUFhO1FBQ2IsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWhGLDBCQUFNLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxTQUFDO1FBQ3pDLElBQUksS0FBSyxHQUFHO1lBQ1I7Z0JBQ0ksUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLE1BQU0sRUFBRTtvQkFDSixLQUFLLEVBQUUsQ0FBQztpQkFDWDthQUNKO1lBQ0Q7Z0JBQ0ksUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE1BQU0sRUFBRTtvQkFDSixLQUFLLEVBQUUsQ0FBQztpQkFDWDthQUNKO1lBQ0Q7Z0JBQ0ksUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDSixLQUFLLEVBQUUsQ0FBQztpQkFDWDthQUNKO1NBQ0osQ0FBQztRQUVGLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBRXpCLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FBQyxDQWhDMEIseUJBQVcsR0FnQ3JDO0FBaENZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmxCLHdIQUF1RDtBQUN2RCxzR0FBaUQ7QUFFakQsd0hBQTJEO0FBQzNELDBGQUFxQztBQUVyQztJQUE2QiwyQkFBaUI7SUFNMUMsaUJBQW1CLElBQVUsRUFBRSxLQUFhLEVBQUUsY0FBYztRQUE1RCxZQUNJLGtCQUFNLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FzQnpCO1FBckJHLEtBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLEVBQUUsQ0FBQztRQUVsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEMsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLE1BQU07U0FDYjtRQUNELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7O0lBQzNCLENBQUM7SUFFTSwwQkFBUSxHQUFmLFVBQWdCLGNBQWtCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFaEQsSUFBSSxjQUFjLEVBQUU7WUFDaEIsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxXQUFXLENBQUMsZ0NBQWdDLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FFdEY7SUFDTCxDQUFDO0lBRUQsaUNBQWUsR0FBZjtJQUNBLENBQUM7SUFFUyxpQ0FBZSxHQUF6QjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXBCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLEVBQUU7WUFDdkUsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDO1NBQ1YsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLElBQUksT0FBTyxHQUFHO1lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDekIsSUFBSSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsRUFBRSxFQUFFLG9CQUFvQixDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUM5SSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUVuQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQ3ZFLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQzFDO1lBQ0ksVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO29CQUMzRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO29CQUU5QixJQUFJLFVBQVUsRUFBRTt3QkFDWixPQUFPLEVBQUUsQ0FBQztxQkFDYjt5QkFBTTt3QkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMscUNBQWlCLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ3JGO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLENBQUMsQ0FDTCxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUN2RSxPQUFPLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUN6QztZQUNJLE9BQU8sRUFBRSxDQUFDO1lBQ1YsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FDTCxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUN2RSxPQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUN2QztZQUNJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1YsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4RTtRQUNMLENBQUMsQ0FBQyxDQUNMLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQ3ZFLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQ3RDO1lBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQ25DO1lBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxDQWpJNEIscUNBQWlCLEdBaUk3QztBQWpJWSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7O0FDTHBCLHdJQUFtRTtBQUNuRSwwRkFBcUM7QUFFckM7SUFNSSxlQUFZLElBQVU7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLGdDQUFnQixHQUF2QixVQUF3QixLQUFvQjtRQUN4QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBTSxtQkFBbUIsR0FBRywrQkFBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvRCxLQUFLLENBQUMsV0FBVyxHQUFHLFVBQVUsR0FBRyxFQUFFLFVBQVU7WUFDekMsSUFBSSxZQUFZLEVBQUU7Z0JBQ2QsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztnQkFDdkMsSUFBSSxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDdkQsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQy9CO2FBQ0o7UUFDTCxDQUFDO1FBRUQsS0FBSyxDQUFDLGFBQWEsR0FBRyxVQUFVLEdBQUcsRUFBRSxVQUFVO1lBQzNDLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUVqRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtnQkFDOUQsT0FBTzthQUNWO1lBQ0QsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUN2RCxLQUFLLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFeEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO2dCQUV0SCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ2pELFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVztpQkFDN0IsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLENBQUM7UUFFRixLQUFLLENBQUMsYUFBYSxHQUFHLFVBQVUsR0FBRyxFQUFFLFVBQVU7WUFDM0MsSUFBSSxZQUFZLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDM0IsT0FBTztpQkFDVjtnQkFDRCxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDO2dCQUN2QyxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7d0JBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdkIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFN0YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUV2RCxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFOzRCQUNqRCxVQUFVLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDOzRCQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dDQUNqRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVc7NkJBQzdCLENBQUMsQ0FBQzt5QkFDTjtxQkFDSjtpQkFDSjthQUNKO1FBQ0wsQ0FBQyxDQUFDO0lBRU4sQ0FBQztJQUdMLFlBQUM7QUFBRCxDQUFDO0FBOUVZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUNIbEIsMEZBQXFDO0FBRXJDO0lBQUE7SUE2REEsQ0FBQztJQTVEaUIsbUJBQVksR0FBMUIsVUFBMkIsSUFBVSxFQUFFLElBQTBCO1FBQzdELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ25DLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbEUsSUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekUsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xFLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzVCLFlBQVksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLFlBQVksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDO1FBQzNDLFlBQVksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO1FBQzFDLFlBQVksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO1FBRTFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXJDLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELEdBQUcsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLG9DQUFvQyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckosT0FBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNyQyxPQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvRCxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN2QixPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUN2QixPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNuQixPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUV0QixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxlQUFlLENBQUM7UUFDcEIsSUFBTSxVQUFVLEdBQUc7WUFDZixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDckQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVwRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUMzQyxlQUFlLEdBQUcsVUFBVSxDQUFDO29CQUN6QixXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDWjtZQUVELElBQUksV0FBVyxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO2dCQUN2QixJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUNyQixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QixHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2QsS0FBSyxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUM1QzthQUNKO2lCQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO2FBQzFCO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsS0FBSyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQztBQTdEWSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDSG5CLGtIQUFzRDtBQUN0RCwwRkFBcUM7QUFFckM7SUFPSTtRQUNJLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVTLGdEQUFrQixHQUE1QixVQUE2QixLQUFvQjtRQUM3QyxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25HLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBRXZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFUywrQ0FBaUIsR0FBM0IsVUFBNEIsS0FBb0I7UUFDNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1Qyx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUNwRDtJQUNMLENBQUM7SUFFUyw2Q0FBZSxHQUF6QixVQUEwQixLQUFvQjtRQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUM5QixTQUFTLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsc0RBQXNELENBQUM7U0FHM0c7SUFDTCxDQUFDO0lBR0wsMEJBQUM7QUFBRCxDQUFDO0FBeENxQixrREFBbUI7Ozs7Ozs7Ozs7Ozs7OztBQ0h6QywwRkFBcUM7QUFFckM7SUFBQTtJQWVBLENBQUM7SUFkVSxVQUFNLEdBQWIsVUFBYyxLQUFLO1FBQ2YsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUM3QyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWxCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxjQUFVLEdBQWpCLFVBQWtCLEtBQW1CO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDL0MsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDO0FBZlksa0JBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGaEIsOEhBQTBEO0FBRTFELHdJQUErRDtBQUMvRCx1SkFBeUU7QUFDekUsNElBQW9EO0FBQ3BELDBGQUFxQztBQUVyQztJQUE0QywwQ0FBbUI7SUFFM0QsZ0NBQVksSUFBVTtRQUF0QixZQUNJLGlCQUFPLFNBNEhWO1FBM0hHLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNyQyxJQUFJLElBQUksR0FBRyxLQUFJLENBQUM7UUFDaEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLFNBQVMsR0FBa0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXZDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzRCxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFFaEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7Z0JBRXhCLElBQUksZUFBZSxHQUFHLElBQUkscUNBQWUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDcEUsZUFBZSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbEUsZUFBZSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7Z0JBQ25DLGVBQWUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLHdDQUF3QyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNsRyxlQUFlLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQywwREFBMEQsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekgsZUFBZSxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3BHLGVBQWUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLCtDQUErQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM5RyxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ3JGLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDckYsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNyRixTQUFTLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQzthQUN4QztpQkFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsQztpQkFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzVCO2lCQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDakQsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM3QjtpQkFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMzQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzdCO2lCQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0gsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUM7U0FDSjtRQUVELFlBQVk7UUFDWixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25GLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFekIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRyxZQUFZLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM1QixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRS9CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUV2QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pGLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFeEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVM7WUFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0QsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO1lBQ2pDLElBQUksU0FBUyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2pFLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUztZQUNqQyxJQUFJLFNBQVMsR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxRCxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVM7WUFDL0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDekQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsSUFBSSxjQUFjLEdBQUcsSUFBSSx5QkFBVyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0QsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0RCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFZixJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25HLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBR25CLHFCQUFxQjtRQUNyQixLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1QixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLDJCQUEyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDeEUsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxHQUFHO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxnQ0FBZ0MsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQzdFLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFdEMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQzs7SUFDdkQsQ0FBQztJQUVELDhDQUFhLEdBQWIsVUFBYyxLQUFvQjtJQUNsQyxDQUFDO0lBSUwsNkJBQUM7QUFBRCxDQUFDLENBdEkyQyx5Q0FBbUIsR0FzSTlEO0FBdElZLHdEQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BuQyw4SEFBMEQ7QUFFMUQsMEZBQXFDO0FBRXJDO0lBQWlELCtDQUFtQjtJQUVoRSxxQ0FBWSxJQUFVO1FBQXRCLFlBQ0ksaUJBQU8sU0FpQ1Y7UUFoQ0csSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXJDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNELFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQ25DO2lCQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNILFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7UUFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25HLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdkIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUNoQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLDJCQUEyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDeEUsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxHQUFHO1NBQ2QsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFFRCxtREFBYSxHQUFiLFVBQWMsS0FBb0I7SUFDbEMsQ0FBQztJQUlMLGtDQUFDO0FBQUQsQ0FBQyxDQTNDZ0QseUNBQW1CLEdBMkNuRTtBQTNDWSxrRUFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEMsOEhBQTBEO0FBQzFELGtIQUFzRDtBQUN0RCwwRkFBcUM7QUFFckM7SUFBZ0QsOENBQW1CO0lBSS9ELG9DQUFZLElBQVUsRUFBRSxLQUFvQjtRQUE1QyxZQUNJLGlCQUFPLFNBMENWO1FBekNHLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQztRQUNoQixLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxTQUFTLEdBQWtCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV2QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0QsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLG9CQUFvQjtnQkFDcEIsa0RBQWtEO2dCQUNsRCxrREFBa0Q7Z0JBRWxELEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2FBRTNCO2lCQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBRXpDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBRWxDO2lCQUFNO2dCQUNILFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ2hDO1NBQ0o7UUFHRCxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25HLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekQscUJBQXFCO1FBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsdUJBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUM7U0FDcEQ7UUFFRCx1Q0FBdUM7UUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUN2Qzs7SUFDTCxDQUFDO0lBRUQsa0RBQWEsR0FBYixVQUFjLEtBQW9CO0lBQ2xDLENBQUM7SUFJTCxpQ0FBQztBQUFELENBQUMsQ0F0RCtDLHlDQUFtQixHQXNEbEU7QUF0RFksZ0VBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHZDLDhIQUEwRDtBQUUxRCwwRkFBcUM7QUFDckMsNElBQW9EO0FBRXBEO0lBQThDLDRDQUFtQjtJQUk3RCxrQ0FBWSxJQUFVO1FBQXRCLFlBQ0ksaUJBQU8sU0EyRFY7UUExREcsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzRCxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDaEMsU0FBUyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQztnQkFDMUMsSUFBSSxlQUFlLEdBQUcsSUFBSSxxQ0FBZSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNwRSxlQUFlLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsRSxlQUFlLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDbkMsZUFBZSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMseUNBQXlDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ25HLGVBQWUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLDBEQUEwRCxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN6SCxlQUFlLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDcEcsZUFBZSxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsMERBQTBELEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3pILGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDckYsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNyRixlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ3JGLFNBQVMsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO2FBQ3hDO2lCQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNILFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUU3QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM5QixTQUFTO2lCQUNaO2dCQUVELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUM7U0FDSjtRQUVELG1EQUFtRDtRQUNuRCxjQUFjO1FBQ2QsaUZBQWlGO1FBQ2pGLDJCQUEyQjtRQUMzQixFQUFFO1FBQ0YsK0VBQStFO1FBQy9FLDBCQUEwQjtRQUMxQixFQUFFO1FBQ0YsZ0lBQWdJO1FBQ2hJLHVDQUF1QztRQUN2QyxJQUFJO1FBRUoseUJBQXlCO1FBQ3pCLDBDQUEwQztRQUUxQyxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25HLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUNoQyxDQUFDO0lBRUQsZ0RBQWEsR0FBYixVQUFjLEtBQW9CO0lBQ2xDLENBQUM7SUFHTCwrQkFBQztBQUFELENBQUMsQ0F0RTZDLHlDQUFtQixHQXNFaEU7QUF0RVksNERBQXdCOzs7Ozs7Ozs7Ozs7Ozs7QUNKckMsd0hBQTJEO0FBQzNELHFIQUF5RDtBQUN6RCwwRkFBcUM7QUFFckM7SUFJSSxvQ0FBWSxJQUFTLEVBQUUsS0FBb0I7UUFDdkMsU0FBUztRQUNULElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hCLElBQUksY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRyxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELGNBQWMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRTFCLElBQUksa0JBQWtCLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUMxQyxvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLEVBQUUsRUFDRixPQUFPLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUNyQyxPQUFPLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDL0Msa0JBQWtCLENBQUMsT0FBTyxDQUFDO1lBQ3ZCO2dCQUNJLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxJQUFJO2FBQ2Q7WUFDRDtnQkFDSSxLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsR0FBRzthQUNiO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLElBQUk7YUFDZDtTQUNKLENBQUMsQ0FBQztRQUVILElBQUksY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FDdEMsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixFQUFFLEVBQ0YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9DLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDbkI7Z0JBQ0ksS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNyQztZQUNEO2dCQUNJLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckM7WUFDRDtnQkFDSSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsY0FBYyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDL0IsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDeEUsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFFdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV2QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0QsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLGlCQUFpQjtnQkFDakIsMEVBQTBFO2dCQUMxRSxTQUFTO2FBQ1o7WUFDRCxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUU3RDtRQUVELElBQUksSUFBSSxHQUFrQixLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNELElBQUksSUFBSSxFQUFFO1lBQ04sY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxXQUFXLEdBQUcsSUFBSSwrQkFBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDaEUsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXBCLElBQUksVUFBVSxHQUFHLElBQUksNkJBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQzlELFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVuQixJQUFJLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLDZCQUE2QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3pILFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUM5QixTQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUNoQztRQUVELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsK0JBQStCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUUvSCxDQUFDO0lBQ0wsaUNBQUM7QUFBRCxDQUFDO0FBbEdZLGdFQUEwQjs7Ozs7Ozs7Ozs7Ozs7O0FDTHZDO0lBS0k7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFOTSx1QkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQztJQU9oRCxhQUFDO0NBQUE7QUFSWSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDQ25CLGdIQUFzRDtBQUN0RCxnSEFBc0Q7QUFDdEQsK0hBQWdFO0FBQ2hFLDBHQUFrRDtBQUNsRCwrRUFBZ0M7QUFDaEMsOEZBQXdDO0FBQ3hDLG9HQUE0QztBQUM1Qyx1R0FBOEM7QUFDOUMsa0hBQXFEO0FBR3JEO0lBYVEsY0FBWSxJQUFVO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsc0NBQXNCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSwrQ0FBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksaUNBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTCxXQUFDO0FBQUQsQ0FBQztBQTlCUSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDWGpCLGtIQUFpRjtBQUVqRjtJQU9JLDJCQUFZLElBQVU7UUFDbEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBRS9CLElBQUksU0FBUyxHQUFHLElBQUkseUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xELFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDO1FBQ3BFLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ2hFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDbEMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QixJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFLLENBQUMsMEJBQTBCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUM5RSxPQUFPLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUM5RCxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN4QixTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlCLElBQUksZ0JBQWdCLEdBQUcsSUFBSSx5QkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekQsZ0JBQWdCLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUMzRSxnQkFBZ0IsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ3BFLGdCQUFnQixDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDakMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNqQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDekMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMvQixTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFdkMsSUFBSSxVQUFVLEdBQUcsSUFBSSxxQkFBSyxDQUFDLDBCQUEwQixFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDckYsVUFBVSxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDOUQsVUFBVSxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDbkUsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDckIsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsVUFBVSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhDLElBQUksWUFBWSxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO1FBQ25DLFlBQVksQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2hFLFlBQVksQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ3JFLFlBQVksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdCLFlBQVksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzdCLFlBQVksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzNCLFlBQVksQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1FBRTFDLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1FBQy9CLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxQyxJQUFJLFlBQVksR0FBRyxJQUFJLG9CQUFJLEVBQUUsQ0FBQztRQUM5QixZQUFZLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUNuRSxZQUFZLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUN2RSxZQUFZLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM3QixZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM3QixZQUFZLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUMxQixZQUFZLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUMxQixZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUVsQyxJQUFJLGdCQUFnQixHQUFHLHNCQUFNLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUM5RyxnQkFBZ0IsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ3pFLGdCQUFnQixDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDakMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNqQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDOUIsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUMvQixTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFlBQVksR0FBRyxzQkFBTSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBQ2xHLFlBQVksQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ3JFLFlBQVksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzdCLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdCLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLFlBQVksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFlBQVksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQztZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxlQUFlLEdBQUcsc0JBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztRQUN4RyxlQUFlLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUN4RSxlQUFlLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQyxlQUFlLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQyxlQUFlLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM5QixlQUFlLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUM3QixlQUFlLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUMvQixTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDN0I7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksYUFBYSxHQUFHLHNCQUFNLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLGdDQUFnQyxDQUFDLENBQUM7UUFDcEcsYUFBYSxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDdEUsYUFBYSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDOUIsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDOUIsYUFBYSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDNUIsYUFBYSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDM0IsYUFBYSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDN0IsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMzQjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV4QyxDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDO0FBL0hZLDhDQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FDRDlCLGtIQUF3RTtBQUV4RTtJQVFRLDJCQUFZLE1BQWMsRUFBRSxJQUFVO1FBQ2xDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUVsRCxJQUFJLElBQUksR0FBRyxJQUFJLG9CQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUUsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBSyxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3ZELEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ3pELEtBQUssQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3QixJQUFJLEtBQUssR0FBRyxJQUFJLHlCQUFTLEVBQUUsQ0FBQztRQUM1QixLQUFLLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUN6RCxLQUFLLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUM5RCxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEIsS0FBSyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdkIsS0FBSyxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFDbkMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdCLElBQUksU0FBUyxHQUFHLElBQUkscUJBQUssQ0FBQywwQkFBMEIsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBQ25GLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQzdELFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ2xFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVqQyxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFTLEVBQUUsQ0FBQztRQUNsQyxXQUFXLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUMvRCxXQUFXLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUN0RSxXQUFXLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUN6QixXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN0QixXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM1QixXQUFXLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM1QixXQUFXLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUMxQixXQUFXLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztRQUV6QyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbkMsSUFBSSxhQUFhLEdBQUcsSUFBSSxxQkFBSyxDQUFDLDBCQUEwQixFQUFFLCtCQUErQixDQUFDLENBQUM7UUFDM0YsYUFBYSxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDakUsYUFBYSxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDdEUsYUFBYSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDeEIsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDOUIsYUFBYSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXJDLElBQUksaUJBQWlCLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7UUFDeEMsaUJBQWlCLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUNyRSxpQkFBaUIsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDO1FBQzVFLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDL0IsaUJBQWlCLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM1QixpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDbEMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1FBRS9DLElBQUksQ0FBQyxhQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQztBQW5GUSw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7OztBQ0g5QixrSEFBcUY7QUFFckY7SUFLSSxnQ0FBWSxJQUFVO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDcEMsQ0FBQztJQUVNLHlDQUFRLEdBQWYsVUFBZ0IsU0FBUztRQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMzQjtRQUVELElBQUksNEJBQTRCLEdBQUcsSUFBSSwwQkFBVSxFQUFFLENBQUM7UUFDcEQsNEJBQTRCLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMzQyw0QkFBNEIsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLDRCQUE0QixDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDaEYsNEJBQTRCLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywwQkFBMEIsQ0FBQztRQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsNEJBQTRCLENBQUM7UUFFN0MsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7UUFDNUIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDekQsS0FBSyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQzdCLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1FBQ25DLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxXQUFXO1lBQ2xGLElBQUksc0JBQXNCLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7WUFDN0Msc0JBQXNCLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUMxRSxzQkFBc0IsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztZQUMvQyxzQkFBc0IsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQzFDLHNCQUFzQixDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDdkMsc0JBQXNCLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztZQUNwRCxzQkFBc0IsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLHNCQUFzQixDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCw2QkFBQztBQUFELENBQUM7QUEvQ1ksd0RBQXNCOzs7Ozs7Ozs7Ozs7Ozs7QUNGbkMsa0hBQXFGO0FBRXJGO0lBTUksMkJBQVksSUFBVTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBRWhDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLHFCQUFxQixHQUFHLElBQUksMEJBQVUsRUFBRSxDQUFDO1FBQzdDLHFCQUFxQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDcEMscUJBQXFCLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUMvQixxQkFBcUIsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ3pFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztJQUUxQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksbUNBQU8sR0FBZCxVQUFlLE9BQWUsRUFBRSxLQUF1QjtRQUF2Qix1Q0FBdUI7UUFDbkQsSUFBSSxJQUFJLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFDbEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQVUsQ0FBQztZQUNQLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQztBQTlDWSw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7OztBQ0Y5QixrSEFBMEU7QUFFMUU7SUFLUSx5QkFBWSxJQUFVO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFFaEMsSUFBSSxvQkFBb0IsR0FBRyxJQUFJLDBCQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM5RCxvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25DLG9CQUFvQixDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDOUIsb0JBQW9CLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMvQixvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLG9CQUFvQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QyxvQkFBb0IsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ3hFLG9CQUFvQixDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDN0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDO0lBQ3pDLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUM7QUFwQlEsMENBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ0Y1QixrSEFBNEY7QUFFNUY7SUFHSSx5QkFBWSxJQUFVO1FBQ2xCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsSUFBSSxPQUFPLEdBQUcsc0NBQXNCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsSUFBSSx5QkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEQsU0FBUyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDcEUsU0FBUyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDaEUsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDMUIsU0FBUyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNsQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTlCLElBQUkscUJBQXFCLEdBQUcsc0JBQU0sQ0FBQywrQkFBK0IsQ0FBQyx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBQ2xKLHFCQUFxQixDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDaEYscUJBQXFCLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUM1RSxxQkFBcUIsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEMscUJBQXFCLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNwQyxxQkFBcUIsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3RDLHFCQUFxQixDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzVDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQztZQUM1QyxJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2pDLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNuRTtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7UUFDNUIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDekQsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDbEIsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDckIsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdEIsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDM0IsS0FBSyxDQUFDLGVBQWUsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RCxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQztBQTlDWSwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7O0FDRDVCLGtIQUE2RjtBQUU3RjtJQU9JLGdCQUFZLElBQVU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNwQyxDQUFDO0lBRU0sZ0NBQWUsR0FBdEIsVUFBdUIsU0FBNEI7UUFDL0MsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxjQUFjLEdBQUcsSUFBSSwwQkFBVSxFQUFFLENBQUM7UUFDdEMsY0FBYyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsY0FBYyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDeEIsY0FBYyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSx5QkFBUyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMxQixTQUFTLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztRQUV2QyxTQUFTLENBQUMscUJBQXFCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUVqRSxJQUFJLFFBQVEsR0FBRyxJQUFJLHNCQUFNLEVBQUUsQ0FBQztRQUM1QixRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNyQixRQUFRLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQzlDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDekMsUUFBUSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDeEIsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekIsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDeEIsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDdkIsUUFBUSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDOUIsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsUUFBUSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFFdEIsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxjQUFjLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSw0QkFBVyxHQUFsQixVQUFtQixZQUFvQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekI7UUFDRCxJQUFJLGNBQWMsR0FBRyxJQUFJLDBCQUFVLEVBQUUsQ0FBQztRQUN0QyxjQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM3QixjQUFjLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUN4QixjQUFjLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUNsRSxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV4QyxJQUFJLFNBQVMsR0FBRyxJQUFJLHlCQUFTLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDaEUsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDMUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFDdkMsU0FBUyxDQUFDLHFCQUFxQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFFakUsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sNkJBQVksR0FBbkI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1NBQ25EO0lBQ0wsQ0FBQztJQUVNLDBCQUFTLEdBQWhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDO0FBbEZZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUNKbkIsa0hBQW9GO0FBRXBGO0lBSUksdUJBQVksV0FBbUMsRUFBRSxJQUFZLEVBQUUsY0FBK0I7UUFDMUYsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUM3QixLQUFLLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDaEIsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakIsS0FBSyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDM0IsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdEIsS0FBSyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDOUQsS0FBSyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDekQsS0FBSyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNuQyxLQUFLLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQzdCLEtBQUssQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzlCLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDL0IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV2QixJQUFJLEtBQUssR0FBRyxJQUFJLHlCQUFTLEVBQUUsQ0FBQztRQUM1QixLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN6QixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFLLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztRQUNuQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUM7QUEvQlksc0NBQWE7Ozs7Ozs7Ozs7Ozs7OztBQ0YxQiw2R0FBOEM7QUFJOUM7SUFBQTtJQXNCQSxDQUFDO0lBcEJVLGdEQUFrQyxHQUF6QyxVQUEwQyxPQUErQixFQUFFLElBQVUsRUFBRSxNQUFlLEVBQUUsWUFBWTtRQUNoSCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDekIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQztZQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixJQUFJLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDN0Y7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDcEQ7WUFFRCxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUcsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDO1lBQzlCLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTCxvQkFBQztBQUFELENBQUM7QUF0Qlksc0NBQWE7Ozs7Ozs7Ozs7Ozs7OztBQ0oxQixrSEFBMkU7QUFHM0U7SUFJSSxxQkFBWSxJQUEwQixFQUFFLElBQVksRUFBRSxXQUF5QjtRQUF6Qiw2Q0FBdUIsRUFBRTtRQUMzRSxJQUFJLGVBQWUsR0FBRyxzQ0FBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFFakMsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzNCLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDbkMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNsQyxLQUFLLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM3QixLQUFLLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM5QixLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNsQixlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWxDLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO1FBQzVCLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1FBQ25DLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDO0FBL0JZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHhCLGtGQUE4QjtBQUU5QixrSEFBcUU7QUFFckU7SUFBZ0MsOEJBQUs7SUFFakMsb0JBQVksT0FBYTtRQUF6QixZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUlqQjtRQUhHLEtBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsd0JBQXdCLENBQUM7UUFDekMsS0FBSSxDQUFDLFFBQVEsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDOztJQUN4RCxDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSwwQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRVMsNkJBQVEsR0FBbEI7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLDBCQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ3pELEtBQUssQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDO1FBQ2hFLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ25CLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBRWxCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLGNBQWMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQy9CLGNBQWMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzdCLGNBQWMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFakMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLGFBQWEsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzlCLGFBQWEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzVCLGFBQWEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLGFBQWEsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXpGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFO1lBQy9DLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzlILGNBQWMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQzdCLGNBQWMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBRTdCLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDcEM7UUFFRCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELGNBQWMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQy9CLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLGNBQWMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzdCLGNBQWMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFakMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkosS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RGLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JHLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RHLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFbEMsQ0FBQztJQUVTLCtCQUFVLEdBQXBCLFVBQXFCLElBQVk7UUFDN0IsSUFBSSxTQUFTLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7UUFDaEMsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDdEIsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDMUIsU0FBUyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDekIsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsU0FBUyxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFDdkMsU0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDeEIsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDN0IsU0FBUyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMkJBQTJCLENBQUM7UUFFcEUsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVTLG9DQUFlLEdBQXpCLFVBQTBCLElBQVksRUFBRSxJQUFZLEVBQUUsT0FBbUI7UUFDckUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFO1lBQy9DLElBQUksTUFBTSxHQUFHLHNCQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1lBQzNFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFM0IsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUN2RCxJQUFJLEVBQUUsSUFBSTtpQkFDYixDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUVOO2FBQU07WUFDSCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBdkgrQixhQUFLLEdBdUhwQztBQXZIWSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p2QixrRkFBOEI7QUFJOUIseUdBQTBDO0FBQzFDLHlHQUEwQztBQUMxQyx5R0FBMEM7QUFDMUMsc0dBQXdDO0FBQ3hDLHNHQUF3QztBQUN4QyxtR0FBc0M7QUFDdEMsdUhBQXdEO0FBQ3hELGtIQUFzSDtBQUl0SDtJQUErQiw2QkFBSztJQVloQyxtQkFBWSxPQUFhO1FBQXpCLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBR2pCO1FBTk8sV0FBSyxHQUFnQyxFQUFFLENBQUM7UUFJNUMsS0FBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7UUFDeEIsS0FBSSxDQUFDLFFBQVEsR0FBRywwQkFBMEIsQ0FBQzs7SUFDL0MsQ0FBQztJQUVTLCtCQUFXLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxzQ0FBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFcEMsSUFBSSxTQUFTLEdBQUcsSUFBSSx5QkFBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsU0FBUyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDaEUsU0FBUyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMEJBQTBCLENBQUM7UUFDbkUsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEIsU0FBUyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUVsQyxJQUFJLEtBQUssR0FBRyxJQUFJLHFCQUFLLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELEtBQUssQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDBCQUEwQixDQUFDO1FBQy9ELEtBQUssQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQzVELFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUIsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQztRQUM5QixJQUFJLGtCQUFrQixHQUFHLFVBQVUsS0FBSztZQUNwQyxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUU7Z0JBQ2QsU0FBUyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUMsSUFBSSxDQUFDO2dCQUNoRCxTQUFTLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBQyxJQUFJLENBQUM7YUFDckQ7aUJBQU07Z0JBQ0gsU0FBUyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQztnQkFDbEQsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQzthQUN2RDtRQUNMLENBQUMsQ0FBQztRQUNGLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBQzlCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDOUIsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV0QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRTdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDJDQUF1QixHQUE5QjtRQUNJLElBQUksS0FBSyxHQUFHLHNCQUFNLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUMsRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDekgsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdEIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDNUQsS0FBSyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMEJBQTBCLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakMsSUFBSSxNQUFNLEdBQUcsc0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBQyxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUN4SCxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN2QixNQUFNLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUM3RCxNQUFNLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywwQkFBMEIsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsQyxJQUFJLE1BQU0sR0FBRyxzQkFBTSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQzdGLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQzdELE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDBCQUEwQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRXJCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSx5QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDcEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVTLG9DQUFnQixHQUExQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSw2QkFBUyxHQUFoQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBRW5ELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLFlBQVksR0FBRyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxvQkFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRSxPQUFPLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBRVIsQ0FBQztZQUNOLElBQUksZ0JBQWdCLFVBQUM7WUFDckIsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixLQUF3QixVQUFZLEVBQVosNkJBQVksRUFBWiwwQkFBWSxFQUFaLElBQVksRUFBRTtnQkFBakMsSUFBSSxXQUFXO2dCQUNoQixJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUU7b0JBQ3JCLGdCQUFnQixHQUFHLElBQUksQ0FBQztvQkFDeEIsTUFBTTtpQkFDVDthQUNKO1lBRUQsSUFBSSxnQkFBZ0IsRUFBRTs7YUFFckI7WUFFRCxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNwQixHQUFHLEVBQUUsQ0FBQztnQkFDTixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEI7WUFFRCxTQUFTLEVBQUUsQ0FBQztZQUNaLE9BQU8sRUFBRSxDQUFDO1lBRVYsSUFBSSxLQUFLLEdBQUcsc0JBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFDckgsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDaEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDcEIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7WUFDNUQsS0FBSyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMEJBQTBCLENBQUM7WUFFL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRXJDLDZCQUFhLENBQUMsa0NBQWtDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO2dCQUMzRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDOztRQXBDUCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUF0QyxDQUFDO1NBcUNUO1FBRUQsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLEtBQUs7WUFDbkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztnQkFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO2dCQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQzthQUN0QjtRQUNMLENBQUM7UUFDRCxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzlCLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVTLHdDQUFvQixHQUE5QixVQUErQixJQUFVO1FBQ3JDLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNmLEtBQUssQ0FBQztnQkFDRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO29CQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN6RDtnQkFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3pEO2dCQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtvQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkQ7Z0JBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO29CQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN6RDtnQkFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3hEO2dCQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtvQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEQ7Z0JBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLG1DQUFlLEdBQXRCLFVBQXVCLElBQVU7UUFDN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBSyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNsRyxLQUFLLENBQUMsT0FBTyxHQUFHLHFCQUFLLENBQUMsZUFBZSxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUdMLGdCQUFDO0FBQUQsQ0FBQyxDQXBSOEIsYUFBSyxHQW9SbkM7QUFwUlksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmdEIsa0dBQWtEO0FBQ2xELGtGQUE4QjtBQUU5QixrSEFBOEY7QUFFOUY7SUFBNkIsMkJBQUs7SUFFMUIsaUJBQVksT0FBYTtRQUF6QixZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUlqQjtRQUhHLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxRQUFRLEdBQUcsd0JBQXdCLENBQUM7UUFDekMsS0FBSSxDQUFDLFFBQVEsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDOztJQUN4RCxDQUFDO0lBRU0sc0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSx1QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRVMsMEJBQVEsR0FBbEI7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLDBCQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM5QixLQUFLLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUN6RCxLQUFLLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUNoRSxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNsQixLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNqQixLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUUvQixJQUFNLFlBQVksR0FBRyxJQUFJLDZCQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsWUFBWSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLFNBQVM7WUFDakQscUJBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hELFlBQVksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxTQUFTO1lBQ2xELHFCQUFXLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBR2pELElBQU0saUJBQWlCLEdBQUcsSUFBSSw2QkFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxVQUFDLFNBQVM7WUFDL0MscUJBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFbEQsaUJBQWlCLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxVQUFDLFNBQVM7WUFDNUMscUJBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLFNBQVM7WUFDdEQscUJBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRDLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0MsNERBQTREO1FBQzVELHFFQUFxRTtRQUNyRSxvQkFBb0I7UUFDcEIsTUFBTTtRQUNOLEVBQUU7UUFDRixtREFBbUQ7UUFDbkQsb0VBQW9FO1FBQ3BFLDZFQUE2RTtRQUM3RSxvQkFBb0I7UUFDcEIsTUFBTTtRQUNOLEVBQUU7UUFDRixpREFBaUQ7UUFDakQsa0VBQWtFO1FBQ2xFLCtFQUErRTtRQUMvRSxvQkFBb0I7UUFDcEIsTUFBTTtRQUNOLEVBQUU7UUFDRiw4Q0FBOEM7UUFDOUMsK0RBQStEO1FBQy9ELDRFQUE0RTtRQUM1RSxvQkFBb0I7UUFDcEIsTUFBTTtRQUVOLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsVUFBQyxTQUFTO1lBQzdDLHFCQUFXLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4QyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFVBQUMsU0FBUztZQUMzQyxxQkFBVyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdEMsSUFBSSxTQUFTLEdBQUcsSUFBSSw4QkFBYyxDQUFDLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDNUUsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDdEIsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDdkIsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEIsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDMUIsU0FBUyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDaEMsU0FBUyxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFDdkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUwsY0FBQztBQUFELENBQUMsQ0FwR3dCLGFBQUssR0FvRzdCO0FBcEdRLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNKcEIsa0hBQXdGO0FBRXhGO0lBY0ksZUFBWSxPQUFhO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFUywyQkFBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsc0NBQXNCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksU0FBUyxHQUFHLElBQUkseUJBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQzdELFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBSyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxLQUFLLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywwQkFBMEIsQ0FBQztRQUMvRCxLQUFLLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUM1RCxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNoQixLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNqQixLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztRQUVqQyxTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUV6QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMsaUNBQWlCLEdBQTNCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksV0FBVyxHQUFHLHNCQUFNLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFDOUYsV0FBVyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDNUIsV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDNUIsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDMUIsV0FBVyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDL0QsV0FBVyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMEJBQTBCLENBQUM7UUFFckUsV0FBVyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQztZQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMsNkJBQWEsR0FBdkIsVUFBd0IsSUFBb0I7UUFBcEIsa0NBQW9CO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDakU7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6RDtJQUNMLENBQUM7SUFHTSw0QkFBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQU1MLFlBQUM7QUFBRCxDQUFDO0FBMUZxQixzQkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0gzQiwyR0FBd0M7QUFJeEM7SUFBMkIseUJBQVU7SUFFakMsZUFBWSxTQUFvQjtRQUFoQyxZQUNJLGtCQUFNLFNBQVMsQ0FBQyxTQVVuQjtRQVJHLEtBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzFCLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBRXpCLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFMUQsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O0lBQ2hDLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FBQyxDQWYwQix1QkFBVSxHQWVwQztBQWZZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmxCLDJHQUF3QztBQUl4QztJQUEyQix5QkFBVTtJQUVqQyxlQUFZLFNBQW9CO1FBQWhDLFlBQ0ksa0JBQU0sU0FBUyxDQUFDLFNBVW5CO1FBUkcsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDekIsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFFeEIsS0FBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUUxRCxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzs7SUFDaEMsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQUFDLENBZjBCLHVCQUFVLEdBZXBDO0FBZlksc0JBQUs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZsQiwwSEFBMkQ7QUFDM0Qsa0hBQXdEO0FBRXhEO0lBYUksb0JBQVksU0FBb0I7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVTLHlDQUFvQixHQUE5QjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLElBQUksV0FBUyxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO1lBQ2hDLFdBQVMsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1lBQ2xFLFdBQVMsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDckQsV0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDeEIsV0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xDLFdBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQyxXQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsV0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hDLFdBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFFbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFdBQVMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBUyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVuQixJQUFJLFlBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2pDLElBQUksYUFBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDbkMsSUFBSSxVQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM3QixJQUFJLFdBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQy9CLElBQUksbUJBQWlCLEdBQUcsVUFBVSxLQUFLO2dCQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUU7b0JBQ2QsV0FBUyxDQUFDLEtBQUssR0FBRyxZQUFVLENBQUM7b0JBQzdCLFdBQVMsQ0FBQyxNQUFNLEdBQUcsYUFBVyxDQUFDO29CQUMvQixXQUFTLENBQUMsR0FBRyxHQUFHLFVBQVEsQ0FBQztvQkFDekIsV0FBUyxDQUFDLElBQUksR0FBRyxXQUFTLENBQUM7aUJBQzlCO3FCQUFNO29CQUNILFdBQVMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFlBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ2xELFdBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ3BELFdBQVMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzlDLFdBQVMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFdBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ25EO1lBQ0wsQ0FBQyxDQUFDO1lBQ0YsbUJBQWlCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQzlCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQzlCLG1CQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMsZ0NBQVcsR0FBckI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsNkJBQWEsQ0FBQyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO2dCQUNyRixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDckQsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCxpQkFBQztBQUFELENBQUM7QUE5RXFCLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGhDLDJHQUF3QztBQUl4QztJQUE0QiwwQkFBVTtJQUVsQyxnQkFBWSxTQUFvQjtRQUFoQyxZQUNJLGtCQUFNLFNBQVMsQ0FBQyxTQVVuQjtRQVJHLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzFCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBRXpCLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFFM0QsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O0lBQ2hDLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0FBQyxDQWYyQix1QkFBVSxHQWVyQztBQWZZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5CLDJHQUF3QztBQUl4QztJQUEwQix3QkFBVTtJQUVoQyxjQUFZLFNBQW9CO1FBQWhDLFlBQ0ksa0JBQU0sU0FBUyxDQUFDLFNBVW5CO1FBUkcsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDekIsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFFekIsS0FBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUV6RCxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzs7SUFDaEMsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQUFDLENBZnlCLHVCQUFVLEdBZW5DO0FBZlksb0JBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIakIsMkdBQXdDO0FBR3hDO0lBQTRCLDBCQUFVO0lBRWxDLGdCQUFZLFNBQW9CO1FBQWhDLFlBQ0ksa0JBQU0sU0FBUyxDQUFDLFNBVW5CO1FBUkcsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDekIsS0FBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDM0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFFekIsS0FBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUUzRCxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzs7SUFDaEMsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQUFDLENBZjJCLHVCQUFVLEdBZXJDO0FBZlksd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIbkIsMkdBQXdDO0FBR3hDO0lBQTRCLDBCQUFVO0lBRWxDLGdCQUFZLFNBQW9CO1FBQWhDLFlBQ0ksa0JBQU0sU0FBUyxDQUFDLFNBV25CO1FBVEcsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDekIsS0FBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDM0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFHeEIsS0FBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUUzRCxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzs7SUFDaEMsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQUFDLENBaEIyQix1QkFBVSxHQWdCckM7QUFoQlksd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkIsa0ZBQThCO0FBRTlCLGtIQUF5RDtBQUV6RDtJQUE4Qiw0QkFBSztJQUkvQixrQkFBWSxPQUFhLEVBQUUsZUFBZTtRQUExQyxZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUtqQjtRQUpHLEtBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLEtBQUksQ0FBQyxRQUFRLEdBQUcsd0JBQXdCLENBQUM7UUFDekMsS0FBSSxDQUFDLFFBQVEsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDOztJQUN4RCxDQUFDO0lBRU0sdUJBQUksR0FBWDtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLFlBQVksR0FBRyxzQkFBTSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ25GLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzNCLFlBQVksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQzlCLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdCLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLFlBQVksQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ25FLFlBQVksQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDO1FBRXZFLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLHdCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFUywyQkFBUSxHQUFsQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxJQUFJLHlCQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDekQsS0FBSyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDaEUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUNsQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNqQixLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNwQixLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNyQixLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFLLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztRQUNuQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqQyxJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUMsV0FBVyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDL0QsV0FBVyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDdEUsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUM5QyxXQUFXLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM1QixXQUFXLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUN4QixXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMxQixXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMzQixXQUFXLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUMxQixXQUFXLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztRQUN6QyxXQUFXLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsV0FBZ0IsRUFBRSxPQUFPO1lBQzlFLElBQUksVUFBVSxHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRWhDLElBQUksYUFBYSxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO1lBQ3BDLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQ2pFLGFBQWEsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDO1lBQ3hFLGFBQWEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUMvQyxhQUFhLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQzFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQzVCLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzdCLGFBQWEsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQzlCLGFBQWEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQzVCLGFBQWEsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1lBQzNDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXpDLElBQUksa0JBQWtCLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7WUFDekMsa0JBQWtCLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUN0RSxrQkFBa0IsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDO1lBQzdFLGtCQUFrQixDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQ2xELGtCQUFrQixDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUMvQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbEMsa0JBQWtCLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUNuQyxrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2pDLGtCQUFrQixDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7WUFDaEQsa0JBQWtCLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUV2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRWxELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQUFDLENBMUc2QixhQUFLLEdBMEdsQztBQTFHWSw0QkFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCLDBGQUFxQztBQUVyQyxnR0FBMEM7QUFFMUMsdUhBQXlEO0FBQ3pELHlGQUF1QztBQUV2Qyx3R0FBaUQ7QUFFakQ7SUFjSSxjQUFZLGFBQWdDLEVBQUUsU0FBaUIsRUFBRSxXQUFtQixFQUFFLFFBQXlCLEVBQUUsT0FBd0I7UUFBbkQsMkNBQXlCO1FBQUUseUNBQXdCO1FBQ3JJLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUU5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLHlCQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBZSxHQUFmO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRSxDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RCxDQUFDO0lBRUQsdUJBQVEsR0FBUixVQUFTLEtBQVk7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFFekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDZCQUFjLEdBQWQ7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDBCQUFXLEdBQWxCLFVBQW1CLFFBQWU7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWhDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QyxJQUFJLGNBQWMsRUFBRTtZQUNoQixVQUFVLENBQUM7Z0JBQ1AsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFYSxpQkFBWSxHQUExQixVQUEyQixPQUFlLEVBQUUsT0FBZTtRQUN2RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFYSxtQkFBYyxHQUE1QixVQUE2QixVQUEyQixFQUFFLFFBQXlCO1FBQy9FLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRW5DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUE1RU0sbUJBQWMsR0FBRyxDQUFDLENBQUM7SUFDbkIsZUFBVSxHQUFHLENBQUMsQ0FBQztJQUNmLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBNEVqQyxXQUFDO0NBQUE7QUFoRlksb0JBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ1RqQixxRUFBNEI7QUFDNUIsMEZBQXFDO0FBRXJDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUN4QyxRQUFRLENBQUMsa0JBQWtCLEdBQUc7UUFDMUIsSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUNwQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQzlCLElBQU0sV0FBVyxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNoRixRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDdkYsSUFBSSxXQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbkY7U0FDSjtJQUNMLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWkgscUhBQXdEO0FBQ3hELHNJQUFxRTtBQUNyRSwwRkFBcUM7QUFFckM7SUFLSTs7Ozs7T0FLRztJQUNILGVBQVksSUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRO1FBQ3ZDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbkMsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDbEMsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlFLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLE1BQU0sSUFBSSxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUNqRDtRQUNELFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUM1QixTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFFM0MsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULElBQUksRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztZQUNuRixFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFFaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7U0FDN0I7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQzNHO1lBQ0ksT0FBTyxHQUFHLElBQUkseUJBQVcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFDMUc7WUFDSSxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQ2hFLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUNuQztZQUNJLDJDQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUVOLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FBQztBQTVEWSxzQkFBSzs7Ozs7Ozs7Ozs7Ozs7O0FDTGxCLHNFQUE2QjtBQUM3QiwwRkFBcUM7QUFFckM7SUFBQTtJQXVCQSxDQUFDO0lBckJVLHNCQUFXLEdBQWxCLFVBQW1CLEtBQW9CLEVBQUUsTUFBNEIsRUFBRSxXQUF5RCxFQUFFLGFBQTZCO1FBQXhGLGdEQUFtQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQUUsb0RBQTZCO1FBQzNKLDRGQUE0RjtRQUM1RixpREFBaUQ7UUFDakQsd0tBQXdLO1FBQ3hLLDRCQUE0QjtRQUM1QixNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLFdBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsMEVBQTBFO1lBQzFFLGlDQUFpQztZQUNqQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUMzQjthQUFNO1lBQ0gsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDNUI7UUFDRCxNQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUU5QixJQUFHLGFBQWEsRUFBRTtZQUNkLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzlCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQXZCWSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7O0FDRHZCLDZIQUE4RDtBQUM5RCxxSEFBd0Q7QUFDeEQsK0dBQTZFO0FBQzdFLDBGQUFxQztBQUNyQyxzSUFBcUU7QUFFckU7SUFTSSxxQkFBWSxJQUFVLEVBQUUsSUFBVSxFQUFFLFFBQXlCLEVBQUUsV0FBbUI7UUFDMUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRW5DLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakYsY0FBYyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDdkMsY0FBYyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN2QyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU5QixJQUFJLGlCQUFpQixHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkosSUFBSSxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsaUJBQWlCLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUVoQyxJQUFNLGVBQWUsR0FBRyxpQ0FBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZELFlBQVk7UUFDWixVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTlDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLGNBQWMsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUN6RztZQUNJLDJDQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRVIsSUFBSSxjQUFjLEdBQUcsSUFBSSx5QkFBb0IsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDcEUsY0FBYyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUVuQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVNLDhCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUE1RFEsa0NBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ1J4QixxSEFBd0Q7QUFFeEQsc0lBQXFFO0FBQ3JFLDhIQUFtRjtBQUNuRiwwRkFBcUM7QUFFckM7SUFNSSxpQkFBWSxJQUFVLEVBQUUsUUFBZ0IsRUFBRSxRQUFpQixFQUFFLGFBQXFCLEVBQUUsWUFBb0I7UUFDcEcsSUFBSSxPQUFPLEdBQWtCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLE1BQU0sSUFBSSxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUNuRDtRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx5QkFBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUV0RCxJQUFJLHFCQUFxQixHQUFHLG1DQUFnQixDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekYscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQztRQUU1QyxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUMxRSxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FDaEMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFDcEU7WUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVaLE9BQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUNoQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUNuRTtZQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFWixJQUFJLGVBQWUsR0FBRztZQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUV2RSxPQUFPO2FBQ1Y7WUFFRCwyQ0FBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQ2hDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQ2pFLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFFMUIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQ2hDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ3RCLE9BQU8sRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLDBCQUEwQjtZQUN6RCxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1NBQzlCLEVBQ0QsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUExRFksMEJBQU87Ozs7Ozs7Ozs7Ozs7OztBQ0xwQixxSEFBd0Q7QUFDeEQsc0dBQStDO0FBQy9DLDBGQUFxQztBQUVyQztJQU9JOzs7OztPQUtHO0lBQ0gsZ0JBQVksSUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXO1FBQzNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsTUFBTSxJQUFJLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQ2hFLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUNuQztZQUNJLElBQUksS0FBSyxHQUFHLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBRU4sQ0FBQztJQUVTLG9DQUFtQixHQUE3QixVQUE4QixVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQWlDO1FBQ3BGLElBQUksUUFBUSxHQUE4QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUNwRSxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDMUQsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2RDthQUFNLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUNqRSxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU07WUFDSCxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx5QkFBVyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNwRTtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFUyw4QkFBYSxHQUF2QixVQUF3QixVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQWlDO1FBQzlFLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQy9GLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNOLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ04sS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ1osQ0FBQyxDQUFDO1FBRUgsSUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUNqRSxPQUFPLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUNyQyxPQUFPLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0sd0JBQU8sR0FBZDtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDO0FBckZZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUNKbkIscUhBQXdEO0FBQ3hELHNJQUFxRTtBQUNyRSwrR0FBcUQ7QUFDckQsMEZBQXFDO0FBRXJDO0lBS0k7Ozs7O09BS0c7SUFDSCwyQkFBWSxJQUFVLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CO1FBQy9ELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuQyxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksUUFBUSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztRQUM5QyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRILGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEYsY0FBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBSSxjQUFjLEdBQUcsSUFBSSx5QkFBVyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMzRCxjQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkseUJBQVcsQ0FBQyxjQUFjLEVBQUUscUJBQXFCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDaEUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQ25DO1lBQ0ksMkNBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1lBQzFFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUVOLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUM7QUFyQ1ksOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUNOOUI7SUFJSSxxQkFBbUIsYUFBcUI7UUFBckIsa0JBQWEsR0FBYixhQUFhLENBQVE7SUFDeEMsQ0FBQztJQUVNLHNDQUFnQixHQUF2QjtRQUNJLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUUzQixXQUFXLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sbUNBQWEsR0FBcEI7UUFDSSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBRWEsNkJBQWlCLEdBQS9CLFVBQWdDLElBQVk7UUFDeEMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzdELFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFYSw4QkFBa0IsR0FBaEMsVUFBaUMsSUFBWTtRQUN6QyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFFaEMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUFsQ1ksa0NBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ0N4QiwwRkFBcUM7QUFDckMsbUdBQTJDO0FBRTNDO0lBbUJJLHFCQUFZLElBQVU7UUFDbEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRVMsb0NBQWMsR0FBeEI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVTLHlDQUFtQixHQUE3QixVQUE4QixHQUFHO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFYSw4QkFBa0IsR0FBaEMsVUFBaUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFVO1FBQ25ELFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLHFEQUErQixHQUF0QyxVQUF1QyxJQUEwQjtRQUM3RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBDLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzdCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BFO0lBQ0wsQ0FBQztJQUVNLGlDQUFXLEdBQWxCLFVBQW1CLElBQVU7UUFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNyQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVuRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNuSSxJQUFJLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakcsZUFBZSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztZQUNwRCxlQUFlLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7WUFDdkUsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLENBQUM7WUFDakcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxlQUFlLENBQUM7WUFDN0MsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO1lBQ2pGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hELElBQU0sWUFBWSxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNoRTtTQUNKO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzFELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ3JELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ2xDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JFLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDNUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7U0FDdEM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7U0FDakM7YUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDeEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksT0FBTyxDQUFDLHdCQUF3QixDQUFDLGdCQUFnQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzNHO1FBRUQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQy9DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztZQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUN0QyxZQUFZO1lBQ1osMEdBQTBHO1lBQzFHLDBEQUEwRDtZQUMxRCwwRUFBMEU7WUFDMUUsc0VBQXNFO1lBQ3RFLGdFQUFnRTtZQUNoRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDaEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDckQ7UUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixTQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO2FBQU07WUFDSCxTQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQTFIWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDRHhCO0lBTUksMEJBQVksSUFBVSxFQUFFLE9BQXFCO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFHTCx1QkFBQztBQUFELENBQUM7QUFkcUIsNENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHRDLG1IQUFvRDtBQUNwRCwwRkFBcUM7QUFFckM7SUFBMkIseUJBQWdCO0lBQTNDOztJQXFDSSxDQUFDO0lBbkNHLGtDQUFrQixHQUFsQjtRQUNJLElBQUksY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDakgsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZHLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUV0QyxjQUFjLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3ZILGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO1FBRTNHLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFELGNBQWMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzdCLGNBQWMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBRTdCLGNBQWMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLGNBQWMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLGNBQWMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRTdCLGNBQWMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztRQUVyRSxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUQsY0FBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsY0FBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RCxjQUFjLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRXRDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxDQXJDc0IsbUNBQWdCLEdBcUN0QztBQXJDUSxzQkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hsQixtSEFBb0Q7QUFDcEQsMEZBQXFDO0FBRXJDO0lBQWlDLCtCQUFnQjtJQUFqRDs7SUFtQ0ksQ0FBQztJQWpDRyx3Q0FBa0IsR0FBbEI7UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDdEgsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBRWxHLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXJELFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXhELFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBRXpCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzdCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBRTdCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRXpCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUUvRCxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV2RCxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM1QixVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM1QixVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLENBbkM0QixtQ0FBZ0IsR0FtQzVDO0FBbkNRLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHhCLG1IQUFvRDtBQUNwRCwwRkFBcUM7QUFFckM7SUFBbUMsaUNBQWdCO0lBQW5EOztJQXdDSSxDQUFDO0lBdENHLDBDQUFrQixHQUFsQjtRQUNJLElBQUksVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFM0csVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBRWxHLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNELFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXhELFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBRXpCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzdCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBRTdCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBRTFCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUUvRCxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyRCxVQUFVLENBQUMsZUFBZSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ2pDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUVyQyxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM1QixVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM1QixVQUFVLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMvQixVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLENBeEM4QixtQ0FBZ0IsR0F3QzlDO0FBeENRLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDFCLG1IQUFvRDtBQUNwRCwwRkFBcUM7QUFFckM7SUFBb0Msa0NBQWdCO0lBQXBEOztJQXNDQSxDQUFDO0lBcENHLDJDQUFrQixHQUFsQjtRQUNJLElBQUksV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDM0csV0FBVyxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ25HLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVELFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlELFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVELFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVELFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXpELFdBQVcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzFCLFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLFdBQVcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzlCLFdBQVcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBRTlCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBRTNCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUVoRSxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5ELFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVELFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFMUQsV0FBVyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDakMsV0FBVyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXRDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQ0F0Q21DLG1DQUFnQixHQXNDbkQ7QUF0Q1ksd0NBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ0gzQiwwRkFBcUM7QUFHckM7SUFBQTtJQTJDQSxDQUFDO0lBekNVLG1DQUFrQixHQUF6QixVQUEwQixJQUFVLEVBQUUsT0FBcUIsRUFBRSxRQUFpQjtRQUMxRSxJQUFJLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDekcsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDakcsY0FBYyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDakMsY0FBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsY0FBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV6RCxJQUFJLFFBQVEsRUFBRTtZQUNWLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdELGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO2FBQU07WUFDSCxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RCxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5RDtRQUNELGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTlELGNBQWMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzdCLGNBQWMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBRTdCLGNBQWMsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ2pDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLGNBQWMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBRTlCLGNBQWMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUVuRSxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXpELGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekQsY0FBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1RCxjQUFjLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUNuQyxjQUFjLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFFekMsY0FBYyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDbEMsY0FBYyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDbEMsY0FBYyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDbkMsY0FBYyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFN0IsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQztBQTNDWSw0Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ0g3QiwwRkFBcUM7QUFFckM7SUFBQTtJQTJCQSxDQUFDO0lBekJVLDJCQUFZLEdBQW5CLFVBQW9CLEtBQW9CO1FBQ3BDLElBQUksY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0UsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEYsY0FBYyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFN0IsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0QsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0QsY0FBYyxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUQsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtRQUUvRSxjQUFjLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM3QixjQUFjLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM3QixjQUFjLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUNqQyxjQUFjLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUNqQyxjQUFjLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM3QixjQUFjLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBQ3hDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlGLFFBQVE7UUFDUixjQUFjLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNoQyxjQUFjLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUdoQyxPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDO0FBM0JZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjNCLG9IQUFxRDtBQUNyRCwwRkFBcUM7QUFFckM7SUFBMEIsd0JBQWdCO0lBQTFDOztJQThCSSxDQUFDO0lBNUJHLGlDQUFrQixHQUFsQjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMxQixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFOUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEUsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUUsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDekIsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDekIsVUFBVSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDOUIsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDNUIsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDM0IsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDM0IsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDMUIsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1FBQy9ELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzRCxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzRCxVQUFVLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBQ3BDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRTdCLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxDQTlCcUIsbUNBQWdCLEdBOEJyQztBQTlCUSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hqQixvSEFBcUQ7QUFDckQsMEZBQXFDO0FBRXJDO0lBQWtDLGdDQUFnQjtJQUFsRDs7SUFpQ0EsQ0FBQztJQS9CRyx5Q0FBa0IsR0FBbEI7UUFDSSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0MsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFMUIsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhFLElBQUksVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUM1RixVQUFVLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDbEcsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDekIsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdkIsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdkIsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDNUIsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDNUIsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDN0IsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDN0IsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDMUIsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1FBQy9ELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUU5QixJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLENBakNpQyxtQ0FBZ0IsR0FpQ2pEO0FBakNZLG9DQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUNGekIsMEZBQXFDO0FBRXJDO0lBU0ksK0JBQVksSUFBVSxFQUFFLE1BQTRCLEVBQUUsS0FBbUIsRUFBRSxVQUEyQjtRQUEzQiwrQ0FBMkI7UUFDbEcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztZQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFFRCxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBR0wsNEJBQUM7QUFBRCxDQUFDO0FBdkJxQixzREFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIM0Msd0tBQW9FO0FBQ3BFLHFIQUF5RDtBQUN6RCwwRkFBcUM7QUFFckM7SUFBNEIsMEJBQXFCO0lBQWpEOztJQXFDSSxDQUFDO0lBbkNVLHlCQUFRLEdBQWYsVUFBZ0IsS0FBYTtRQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JGLElBQUksY0FBYyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFFNUMsSUFBSSxTQUFTLEdBQUcsVUFBVSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDcEMsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBRXZCLElBQUksUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDLEdBQUcsY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXhLLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUN2RSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDN0IsdUJBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQy9EO1lBRUQsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDN0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUNqQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDNUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQzVCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNoQyxDQUFDLENBQUM7UUFFRixJQUFJLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3hHLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxDQXJDdUIsbURBQXFCLEdBcUM1QztBQXJDUSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puQix3S0FBb0U7QUFDcEUsMEZBQXFDO0FBRXJDO0lBQWlDLCtCQUFxQjtJQUF0RDs7SUFxQkEsQ0FBQztJQW5CVSw4QkFBUSxHQUFmLFVBQWdCLEtBQWE7UUFDekIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvRSxJQUFJLFNBQVMsR0FBRyxVQUFTLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNuQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBQyxjQUFjLEdBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBQyxjQUFjLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUMsY0FBYyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BJLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQzVCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUM1QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDaEMsQ0FBQyxDQUFDO1FBRUYsSUFBSSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQzdHLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBRXZDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQ0FyQmdDLG1EQUFxQixHQXFCckQ7QUFyQlksa0NBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ0h4QiwwRkFBcUM7QUFFckM7SUFBQTtJQXFDQSxDQUFDO0lBcENVLHNCQUFZLEdBQW5CLFVBQW9CLEtBQW9CLEVBQUUsUUFBZ0IsRUFBRSxPQUE2QjtRQUNyRixJQUFJLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEYsV0FBVyxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0UsV0FBVyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDOUIsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4RCxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXhELFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVELFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVELFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXpELFdBQVcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzFCLFdBQVcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBRTFCLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRS9CLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRWhDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUVoRSxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5ELFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0RCxXQUFXLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUNoQyxXQUFXLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFFdEMsV0FBVyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDN0IsV0FBVyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDN0IsV0FBVyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDaEMsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFMUIsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQztBQXJDWSw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7O0FDQXRCLHdGQUFrQztBQUNsQyw2R0FBZ0Q7QUFFaEQ7SUFlUSxtQkFBWSxJQUFVLEVBQUUsTUFBeUI7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLDhCQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDZCQUFTLEdBQWhCLFVBQWlCLElBQVUsRUFBRSxPQUFnQjtRQUE3QyxpQkFvREM7UUFuREcsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDeEIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNmLEtBQUssQ0FBQztvQkFDRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDL0UsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQy9FLE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDMUUsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDMUUsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xCLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzFFLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzFFLE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNsQixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN6RSxNQUFNO2FBQ2I7WUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUUvQyx5Q0FBeUM7WUFDekMsbUZBQW1GO1lBQ25GLHdGQUF3RjtZQUN4RixNQUFNO1lBRU4sSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDZixJQUFNLE1BQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN2QixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTtvQkFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFJLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5RixDQUFDLENBQUMsQ0FBQzthQUVOO1NBRUo7SUFFTCxDQUFDO0lBRU0sNkJBQVMsR0FBaEIsVUFBaUIsSUFBVTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUM1QyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDdEIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUNBQWUsR0FBdEI7UUFDSSxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUIsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtDQUFjLEdBQXJCLFVBQXNCLFFBQWlCLEVBQUUsUUFBaUI7UUFFdEQsZ0NBQWdDO1FBQ2hDLGtCQUFrQjtRQUNsQix1Q0FBdUM7UUFDdkMsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6Qiw0QkFBNEI7UUFDNUIsbUJBQW1CO1FBQ25CLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsVUFBVTtRQUNWLEVBQUU7UUFDRixrQ0FBa0M7UUFDbEMsSUFBSTtRQUVKLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxLQUFLLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDNUIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUM7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDL0I7SUFFTCxDQUFDO0lBRU0scUNBQWlCLEdBQXhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM1QjtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0I7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSSwrQkFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVMsSUFBSTtZQUM1QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixjQUEwQjtRQUN0QyxJQUFJLGNBQWMsRUFBRTtZQUNoQixJQUFJLE1BQUksR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLGFBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsTUFBSSxDQUFDLENBQUM7WUFFeEMsSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPO2dCQUN6QixNQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDekIsTUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO29CQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQztvQkFDUCxPQUFPLEVBQUUsQ0FBQztnQkFDZCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDSixNQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBRWxCLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTztvQkFDekIsYUFBVyxDQUFDLGdDQUFnQyxDQUFDLGNBQWMsRUFBRSxNQUFJLENBQUMsQ0FBQztvQkFDbkUsVUFBVSxDQUFDO3dCQUNQLE9BQU8sRUFBRSxDQUFDO29CQUNkLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDSixJQUFHLE1BQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTt3QkFDMUIsTUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7cUJBQ3JDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUE5TVEsOEJBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ0p0QiwwRkFBcUM7QUFFckM7SUFhUSxjQUFZLElBQVUsRUFBRSxRQUFhO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFFdEMsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBRU0sc0JBQU8sR0FBZDtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRU0sOEJBQWUsR0FBdEIsVUFBdUIsSUFBVTtRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUU5QixJQUFJLFFBQVEsR0FBSSxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN2RixRQUFRLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQztBQXJEUSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDRmpCLGtGQUE0QjtBQUc1QjtJQUtJLHFCQUFZLElBQVU7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxzREFBZ0MsR0FBdkMsVUFBd0MsY0FBMEIsRUFBRSxTQUFvQixFQUFFLG1CQUFvQztRQUFwQyxpRUFBb0M7UUFDMUgsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFcEIsSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPO1lBQ3pCLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxZQUFZO2dCQUN6QyxJQUFJLG1CQUFtQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDM0UsT0FBTztpQkFDVjtnQkFFRCxJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUM3QyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ3hDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUVqQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtvQkFDekIsUUFBUSxHQUFHLEtBQUssQ0FBQztpQkFDcEI7Z0JBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7b0JBQ3pCLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3BCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxVQUFVLENBQUM7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdMLGtCQUFDO0FBQUQsQ0FBQztBQWhEWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDRnhCLDZGQUEyQztBQUMzQywwRkFBcUM7QUFDckMsa0hBQTRFO0FBRTVFO0lBdUJJLHVCQUFZLE1BQWM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFHTSxtQ0FBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBUVMsc0NBQWMsR0FBeEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixJQUFJLFFBQVEsR0FBRztZQUNYLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7Z0JBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO29CQUM3QyxJQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxFQUFFO3dCQUM1QyxJQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzlGLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ25EO29CQUVELElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO29CQUM3QyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztvQkFDM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4RixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUV6QyxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDNUMsUUFBUSxFQUFFLFdBQVc7cUJBQ3hCLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2lCQUM3RDtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsUUFBUSxDQUFDLG1CQUFtQixDQUFDLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUM7UUFDRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBTSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFUyx1Q0FBZSxHQUF6QixVQUEwQixZQUFvQjtRQUMxQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO1lBQzVCLElBQU0sTUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBTSxNQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFFckIsTUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDLE1BQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7Z0JBQzVHLE1BQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hHLE1BQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRVMsNkNBQXFCLEdBQS9CO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1FBRXBELElBQUksVUFBVSxHQUFHLHNCQUFNLENBQUMscUJBQXFCLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RSxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNyQixVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN0QixVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QixVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxxQkFBSyxDQUFDLGVBQWUsQ0FBQztRQUVqRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHlCQUFTLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNuQixPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNwQixPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN4QixPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUM3QixPQUFPLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUU5RCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUVPLDBDQUFrQixHQUExQjtRQUNJLElBQUksY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzVKLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDbkI7Z0JBQ0ksS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLENBQUM7YUFDWDtZQUNEO2dCQUNJLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxDQUFDO2FBQ1g7WUFDRDtnQkFDSSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsQ0FBQzthQUNYO1NBQ0osQ0FBQyxDQUFDO1FBRUgsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNqSyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7WUFDckI7Z0JBQ0ksS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLENBQUM7YUFDWDtZQUNEO2dCQUNJLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxDQUFDO2FBQ1g7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztJQXhKTSxrQkFBSSxHQUFHLENBQUMsQ0FBQztJQTBKcEIsb0JBQUM7Q0FBQTtBQTNKcUIsc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMbkMsOEdBQThDO0FBRTlDO0lBQTJCLHlCQUFhO0lBQXhDOztJQWlDQSxDQUFDO0lBOUJVLHVCQUFPLEdBQWQ7UUFDSSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVTLGdDQUFnQixHQUExQixVQUEyQixJQUFVO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcseUJBQXlCLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVNLDZCQUFhLEdBQXBCLFVBQXFCLFNBQWlCLEVBQUUsWUFBb0I7UUFDeEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxFQUFFO1lBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVuRCxVQUFVLENBQUM7WUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUE5Qk0sVUFBSSxHQUFHLENBQUMsQ0FBQztJQWdDcEIsWUFBQztDQUFBLENBakMwQiw2QkFBYSxHQWlDdkM7QUFqQ1ksc0JBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEIsOEdBQThDO0FBQzlDLHNJQUFxRTtBQUdyRTtJQUFnQyw4QkFBYTtJQUE3Qzs7SUFtREksQ0FBQztJQWhEVSw0QkFBTyxHQUFkO1FBQ0ksT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFUyxxQ0FBZ0IsR0FBMUIsVUFBMkIsSUFBVTtRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLDhCQUE4QixDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcscUNBQWlCLENBQUMsbUJBQW1CLENBQUM7UUFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELGtDQUFhLEdBQWIsVUFBYyxTQUFpQixFQUFFLFlBQW9CO1FBQ2pELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksUUFBUSxDQUFDO1FBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVuQyxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzlDLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7YUFDekQ7WUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO2dCQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNwQyxXQUFXLEVBQUUsSUFBSTtpQkFDcEIsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLEVBQUU7WUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixVQUFVLENBQUM7Z0JBQ1AsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDakQ7WUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUMsVUFBVSxDQUFDO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRWxCLENBQUM7SUFoRE0sZUFBSSxHQUFHLENBQUMsQ0FBQztJQWtEcEIsaUJBQUM7Q0FBQSxDQW5EMkIsNkJBQWEsR0FtRHhDO0FBbkRRLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHZCLDJHQUFpRTtBQUNqRSxzSUFBcUU7QUFDckUsOEdBQThDO0FBRzlDO0lBQTBCLHdCQUFhO0lBQXZDOztJQThDQSxDQUFDO0lBM0NVLHNCQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVTLCtCQUFnQixHQUExQixVQUEyQixJQUFVO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxxQ0FBaUIsQ0FBQyxzQkFBc0IsQ0FBQztRQUM5RCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksV0FBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCw0QkFBYSxHQUFiLFVBQWMsU0FBaUIsRUFBRSxZQUFvQjtRQUNqRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5DLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksZUFBZSxHQUFHO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUzRSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQy9ELENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVsRCxVQUFVLENBQUM7WUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRWxCLENBQUM7SUEzQ00sU0FBSSxHQUFHLENBQUMsQ0FBQztJQTZDcEIsV0FBQztDQUFBLENBOUN5Qiw2QkFBYSxHQThDdEM7QUE5Q1ksb0JBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMakIsOEdBQThDO0FBRTlDLHNJQUFxRTtBQUNyRSxtSUFBeUY7QUFFekY7SUFBa0MsZ0NBQWE7SUFBL0M7O0lBc0NBLENBQUM7SUFuQ1UsOEJBQU8sR0FBZDtRQUNJLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRVMsdUNBQWdCLEdBQTFCLFVBQTJCLElBQVU7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQ0FBZ0MsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLHFDQUFpQixDQUFDLGtCQUFrQixDQUFDO1FBQzFELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSwyQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLFNBQWlCLEVBQUUsWUFBb0I7UUFDakQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDcEMsV0FBVyxFQUFFLElBQUk7aUJBQ3BCLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQyxFQUFFO1lBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTVDLFVBQVUsQ0FBQztZQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUVsQixDQUFDO0lBcENNLGlCQUFJLEdBQUcsQ0FBQyxDQUFDO0lBcUNwQixtQkFBQztDQUFBLENBdENpQyw2QkFBYSxHQXNDOUM7QUF0Q1ksb0NBQVk7Ozs7Ozs7Ozs7Ozs7OztBQ0x6QixtRkFBNEI7QUFDNUIsMkdBQTRDO0FBQzVDLHNGQUE4QjtBQUM5QixxR0FBd0M7QUFDeEMsMkdBQTRDO0FBRzVDO0lBQUE7SUEwQkEsQ0FBQztJQXhCaUIsc0JBQVEsR0FBdEIsVUFBdUIsSUFBWSxFQUFFLE1BQWM7UUFDL0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWpCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxXQUFJLENBQUMsSUFBSTtnQkFDVixLQUFLLEdBQUcsSUFBSSxXQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLE1BQU07WUFDVixLQUFLLDJCQUFZLENBQUMsSUFBSTtnQkFDbEIsS0FBSyxHQUFHLElBQUksMkJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakMsTUFBTTtZQUNWLEtBQUssYUFBSyxDQUFDLElBQUk7Z0JBQ1gsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQixNQUFNO1lBQ1YsS0FBSyx1QkFBVSxDQUFDLElBQUk7Z0JBQ2hCLEtBQUssR0FBRyxJQUFJLHVCQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLE1BQU07WUFDVixLQUFLLDJCQUFZLENBQUMsSUFBSTtnQkFDbEIsS0FBSyxHQUFHLElBQUksMkJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakMsTUFBTTtTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQztBQTFCWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04xQiw4R0FBOEM7QUFFOUM7SUFBa0MsZ0NBQWE7SUFBL0M7O0lBcURBLENBQUM7SUFsRFUsOEJBQU8sR0FBZDtRQUNJLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRVMsdUNBQWdCLEdBQTFCLFVBQTJCLElBQVU7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxnQ0FBZ0MsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRU0sb0NBQWEsR0FBcEIsVUFBcUIsU0FBaUIsRUFBRSxZQUFvQjtRQUN4RCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUMsRUFBRTtZQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVuRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xEO1FBQ0QsVUFBVSxDQUFDO1lBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQzthQUN6RDtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRTtnQkFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLFVBQVUsQ0FBQztvQkFDUCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTt3QkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO3dCQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNqRDtnQkFFTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ3BDLFdBQVcsRUFBRSxJQUFJO2lCQUNwQixDQUFDLENBQUM7YUFDTjtRQUNMLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBbERNLGlCQUFJLEdBQUcsQ0FBQyxDQUFDO0lBb0RwQixtQkFBQztDQUFBLENBckRpQyw2QkFBYSxHQXFEOUM7QUFyRFksb0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIekIsK0VBQThCO0FBRTlCLDBGQUFxQztBQUNyQyw0SUFBb0Q7QUFDcEQsK0pBQTZFO0FBRTdFLHVHQUE4QztBQUU5QztJQUFrQyxnQ0FBSztJQUF2Qzs7SUE0Q0EsQ0FBQztJQXhDRyxnQ0FBUyxHQUFULFVBQVUsSUFBVTtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLE1BQU0sRUFBRSxLQUFLLENBQUM7UUFDbEIsSUFBSTthQUNDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO2FBQ3hCLGdCQUFnQixDQUFDO1lBQ2QsTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXRGLElBQUksYUFBSyxDQUFDLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkYsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBRTdCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0QsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBRXBCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUU7WUFDQyxJQUFJLGFBQWEsR0FBRyxJQUFJLG1DQUFhLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0YsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsMENBQTBDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkcsYUFBYSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNoQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNoQyxhQUFhLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUMvQixhQUFhLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUM5QixhQUFhLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRixTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDM0IsU0FBUyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7WUFDbkMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDeEIsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDN0IsYUFBYSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQXhDTSxpQkFBSSxHQUFHLEVBQUUsQ0FBQztJQTBDckIsbUJBQUM7Q0FBQSxDQTVDaUMsYUFBSyxHQTRDdEM7QUE1Q1ksb0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSekIsK0VBQThCO0FBQzlCLG9KQUE2RTtBQUU3RSwwRkFBcUM7QUFFckM7SUFBaUMsK0JBQUs7SUFBdEM7O0lBZUEsQ0FBQztJQVhHLCtCQUFTLEdBQVQsVUFBVSxJQUFVO1FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsS0FBSztZQUN4RyxJQUFJO2lCQUNDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO2lCQUN4QixnQkFBZ0IsQ0FBQztnQkFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksK0NBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVhNLGdCQUFJLEdBQUcsQ0FBQyxDQUFDO0lBYXBCLGtCQUFDO0NBQUEsQ0FmZ0MsYUFBSyxHQWVyQztBQWZZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHhCLCtFQUE4QjtBQUU5QixtS0FBdUY7QUFDdkYsMEZBQXFDO0FBRXJDO0lBQXNDLG9DQUFLO0lBQTNDOztJQWVBLENBQUM7SUFYRyxvQ0FBUyxHQUFULFVBQVUsSUFBVTtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUs7WUFDaEgsSUFBSTtpQkFDQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztpQkFDeEIsZ0JBQWdCLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlEQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFYTSxxQkFBSSxHQUFHLENBQUMsQ0FBQztJQWFwQix1QkFBQztDQUFBLENBZnFDLGFBQUssR0FlMUM7QUFmWSw0Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMN0IsZ0tBQXFGO0FBRXJGLCtFQUE4QjtBQUM5QiwwRkFBcUM7QUFFckM7SUFBcUMsbUNBQUs7SUFBMUM7O0lBbUNBLENBQUM7SUEvQkcsbUNBQVMsR0FBVCxVQUFVLElBQVU7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLDJCQUEyQixFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxLQUFLO1lBQ2xILElBQUk7aUJBQ0MsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7aUJBQ3hCLGdCQUFnQixDQUFDO2dCQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx1REFBMEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRS9ELEVBQUU7Z0JBQ0Ysb0NBQW9DO2dCQUNwQyx5QkFBeUI7Z0JBQ3pCLHNCQUFzQjtnQkFDdEIsZUFBZTtnQkFDZixzQkFBc0I7Z0JBQ3RCLDZCQUE2QjtnQkFDN0IsTUFBTTtnQkFDTiwyREFBMkQ7Z0JBQzNELEVBQUU7Z0JBQ0Ysb0NBQW9DO2dCQUNwQyxpQ0FBaUM7Z0JBQ2pDLGtDQUFrQztnQkFDbEMsZUFBZTtnQkFDZixzQkFBc0I7Z0JBQ3RCLHFDQUFxQztnQkFDckMsTUFBTTtnQkFDTiwyREFBMkQ7WUFDL0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9CTSxvQkFBSSxHQUFHLENBQUMsQ0FBQztJQWlDcEIsc0JBQUM7Q0FBQSxDQW5Db0MsYUFBSyxHQW1DekM7QUFuQ1ksMENBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ0w1QixpR0FBMEM7QUFDMUMsZ0hBQW9EO0FBQ3BELDZHQUFrRDtBQUNsRCw2R0FBa0Q7QUFDbEQsb0dBQTRDO0FBQzVDLHVHQUE4QztBQUU5Qyw4SEFBdUQ7QUFDdkQsNkdBQTZDO0FBRTdDO0lBQUE7SUF3Q0ksQ0FBQztJQXRDaUIsZUFBTyxHQUFyQixVQUFzQixTQUFpQjtRQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFakIsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLHlCQUFXLENBQUMsSUFBSTtnQkFDakIsS0FBSyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO2dCQUMxQixNQUFNO1lBQ1YsS0FBSyxtQ0FBZ0IsQ0FBQyxJQUFJO2dCQUN0QixLQUFLLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxpQ0FBZSxDQUFDLElBQUk7Z0JBQ3JCLEtBQUssR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssaUNBQWUsQ0FBQyxJQUFJO2dCQUNyQixLQUFLLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7Z0JBQzlCLE1BQU07WUFDVixLQUFLLDJCQUFZLENBQUMsSUFBSTtnQkFDbEIsS0FBSyxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO2dCQUMzQixNQUFNO1lBQ1YsS0FBSyw2QkFBYSxDQUFDLElBQUk7Z0JBQ25CLEtBQUssR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztnQkFDNUIsTUFBTTtZQUNWLEtBQUssbUJBQVEsQ0FBQyxJQUFJO2dCQUNkLEtBQUssR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztnQkFDdkIsTUFBTTtZQUNWLEtBQUssYUFBSyxDQUFDLElBQUk7Z0JBQ1gsS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7Z0JBQ3BCLE1BQU07U0FDYjtRQUVELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixNQUFNLElBQUksU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBR0wsY0FBQztBQUFELENBQUM7QUF4Q1EsMEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWcEIsbUZBQWtDO0FBRWxDLDRJQUEwRDtBQUMxRCwwRkFBcUM7QUFFckM7SUFBOEIsNEJBQUs7SUFBbkM7O0lBb0JBLENBQUM7SUFoQkcsNEJBQVMsR0FBVCxVQUFVLElBQVU7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxLQUFLO1lBQ2hHLElBQUk7aUJBQ0MsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7aUJBQ3hCLGdCQUFnQixDQUFDO2dCQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRCxDQUFDLEVBQUU7Z0JBQ0MsMkZBQTJGO2dCQUMzRiwyRkFBMkY7Z0JBQzNGLCtGQUErRjtZQUVuRyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWhCTSxhQUFJLEdBQUcsQ0FBQyxDQUFDO0lBa0JwQixlQUFDO0NBQUEsQ0FwQjZCLGFBQUssR0FvQmxDO0FBcEJZLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCLHVJQUE2RDtBQUU3RCwwRkFBcUM7QUFFckM7SUFBeUMsdUNBQW9CO0lBSXpELDZCQUFZLElBQVU7UUFBdEIsWUFDSSxpQkFBTyxTQThCVjtRQTdCRyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckMsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLFNBQVMsR0FBa0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzRCxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDaEMsU0FBUyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQztnQkFDMUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9GLEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2FBRTNCO2lCQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNILFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUU3QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM5QixTQUFTO2lCQUNaO2dCQUVELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUM7U0FDSjtRQUVELEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFDaEMsQ0FBQztJQUVELDJDQUFhLEdBQWIsVUFBYyxLQUFvQjtJQUNsQyxDQUFDO0lBR0wsMEJBQUM7QUFBRCxDQUFDLENBekN3QywyQ0FBb0IsR0F5QzVEO0FBekNZLGtEQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0poQyw4SUFBMEU7QUFDMUUsMEZBQXFDO0FBQ3JDLDRJQUFxRDtBQUVyRDtJQUFtRCx3Q0FBbUI7SUFBdEU7O0lBa0JBLENBQUM7SUFoQmEsb0RBQXFCLEdBQS9CLFVBQWdDLFVBQWtCLEVBQUUsS0FBb0I7UUFDcEUsSUFBSSxlQUFlLEdBQUcsSUFBSSxxQ0FBZSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLGVBQWUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRSxlQUFlLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RyxlQUFlLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxnREFBZ0QsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvRyxlQUFlLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RyxlQUFlLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxzREFBc0QsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsSCxlQUFlLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyx1REFBdUQsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuSCxlQUFlLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxzREFBc0QsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsSCxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDckYsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3JGLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUdyRixPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLENBbEJrRCx5Q0FBbUIsR0FrQnJFO0FBbEJxQixvREFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMUMsbUZBQWtDO0FBRWxDLDBGQUFxQztBQUVyQztJQUEyQix5QkFBSztJQUFoQzs7SUErQkEsQ0FBQztJQTNCRyx5QkFBUyxHQUFULFVBQVUsSUFBVTtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJO2FBQ0MsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7YUFDeEIsZ0JBQWdCLENBQUM7WUFDZCxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25HLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXJELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hGLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELElBQUksZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVFLGVBQWUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUQsZUFBZSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDbkMsZUFBZSxDQUFDLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDN0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFFdEMsQ0FBQyxFQUFFO1lBQ0MscUNBQXFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQTNCTSxVQUFJLEdBQUcsRUFBRSxDQUFDO0lBNkJyQixZQUFDO0NBQUEsQ0EvQjBCLGFBQUssR0ErQi9CO0FBL0JZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmxCLCtFQUE4QjtBQUU5QiwwSkFBaUY7QUFDakYsdUdBQThDO0FBQzlDLDBGQUFxQztBQUVyQztJQUFtQyxpQ0FBSztJQUF4Qzs7SUFvQkEsQ0FBQztJQWhCRyxpQ0FBUyxHQUFULFVBQVUsSUFBVTtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUs7WUFDMUcsSUFBSTtpQkFDQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztpQkFDeEIsZ0JBQWdCLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLG1EQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFELENBQUMsRUFBRTtnQkFDQyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BGLDJGQUEyRjtnQkFDM0YsK0ZBQStGO1lBRW5HLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBaEJNLGtCQUFJLEdBQUcsQ0FBQyxDQUFDO0lBa0JwQixvQkFBQztDQUFBLENBcEJrQyxhQUFLLEdBb0J2QztBQXBCWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7O0FDTjFCLDBGQUFxQztBQUNyQyxzRUFBNkI7QUFHN0IseUdBQWtEO0FBQ2xELDBGQUF3QztBQUN4QywrRkFBK0M7QUFNL0MsNEdBQWlEO0FBQ2pELHdHQUFpRDtBQUdqRCx5SUFBdUU7QUFFdkU7SUFBQTtRQVNXLHlCQUFvQixHQUFlLEVBQUUsQ0FBQztRQUU3Qzs7V0FFRztRQUNJLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxTQUFJLEdBQXVCLEVBQUUsQ0FBQztRQUM5QixZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQXlCLEVBQUUsQ0FBQztRQUNsQyx1QkFBa0IsR0FBNkIsRUFBRSxDQUFDO1FBQ2xELGlCQUFZLEdBQXVCLEVBQUUsQ0FBQztJQXNKakQsQ0FBQztJQXJJYSwyQkFBVyxHQUFyQixVQUFzQixJQUFVLEVBQUUsS0FBb0IsRUFBRSxxQkFBc0M7UUFBdEMscUVBQXNDO1FBQzFGLE9BQU8sQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQ2xELHlCQUFXLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsRCxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDL0IsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDeEIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUNoQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM1QixLQUFLLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzVCLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsSUFBRyxxQkFBcUIsRUFBRTtZQUN0Qiw2Q0FBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0gsdUJBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxnQ0FBZ0MsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQy9GLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwrQkFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLCtCQUFlLEdBQXRCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxVQUFVLENBQUM7WUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDWixDQUFDO0lBRVMsZ0RBQWdDLEdBQTFDO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDOUIsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV2RCxhQUFhLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFdBQVcsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFLO2dCQUN0QixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBQ2YsT0FBTztpQkFDVjtnQkFFRCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksWUFBWSxFQUFFO29CQUNsQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDN0I7cUJBQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUN6QyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztpQkFDMUI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFUyxnQ0FBZ0IsR0FBMUIsVUFBMkIsT0FBaUIsRUFBRSxpQkFBMkIsRUFBRSxnQkFBZ0M7UUFBaEMsMERBQWdDO1FBQ3ZHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDOUIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDbkIsYUFBYSxDQUFDLFFBQVEsR0FBRyxVQUFVLEtBQUs7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUVoRCxJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLEVBQUUsQ0FBQztpQkFDYjtnQkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzFDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQjtnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztvQkFDdEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztZQUM1QyxDQUFDLENBQUM7WUFDRixhQUFhLENBQUMsVUFBVSxHQUFHLFVBQVUsY0FBYyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0I7Z0JBQzdFLHlCQUFXLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLEdBQUcsY0FBYyxHQUFHLE1BQU0sR0FBRyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdEcsQ0FBQyxDQUFDO1lBQ0YsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXJCLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ2xCLElBQUksUUFBUSxHQUFHLFNBQVMsUUFBUTtvQkFDNUIsSUFBSSxpQkFBaUIsRUFBRTt3QkFDbkIsaUJBQWlCLEVBQUUsQ0FBQztxQkFDdkI7b0JBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7b0JBRTNELElBQUksV0FBSSxDQUFDLFVBQVUsRUFBRTt3QkFDakIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7NEJBQ2xCLFNBQVMsRUFBRSxJQUFJO3lCQUNsQixDQUFDLENBQUM7cUJBQ047b0JBRUQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFNLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDaEU7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUF0S00sVUFBSSxHQUFHLENBQUMsQ0FBQztJQXlLcEIsWUFBQztDQUFBO0FBMUtxQixzQkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCM0IsZ0tBQXFGO0FBQ3JGLCtFQUE4QjtBQUM5QixxSUFBOEQ7QUFDOUQsK0dBQStFO0FBQy9FLDBGQUFxQztBQUVyQztJQUFxQyxtQ0FBSztJQUExQzs7SUF1Q0EsQ0FBQztJQW5DRyxtQ0FBUyxHQUFULFVBQVUsSUFBUztRQUVmLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2YsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUs7WUFDcEcsSUFBSTtpQkFDQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7aUJBQzlCLGdCQUFnQixDQUFDO2dCQUNkLElBQUksdURBQTBCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUU1QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsVUFBUyxPQUFPO29CQUMvRCxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBWTt3QkFDakMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsZUFBZSxHQUFHLEVBQUUsQ0FBQztvQkFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ3JDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO3FCQUN0RDtvQkFFQyxJQUFHLEdBQUcsRUFBRTt3QkFDSixHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUN6QjtvQkFDRCxJQUFHLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUMzQixHQUFHLEdBQUcsSUFBSSxpQ0FBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDeEM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQW5DTSxvQkFBSSxHQUFHLENBQUMsQ0FBQztJQXFDcEIsc0JBQUM7Q0FBQSxDQXZDb0MsYUFBSyxHQXVDekM7QUF2Q1ksMENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQNUIsd0dBQTJDO0FBQzNDLHdHQUFpRDtBQUVqRDtJQUE0QywwQ0FBVztJQUF2RDs7SUFxQkEsQ0FBQztJQW5CRzs7T0FFRztJQUNJLHVDQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLElBQUk7WUFDeEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVMsRUFBRSxHQUFHO2dCQUNqQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDN0IsSUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztpQkFDN0Q7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLDZCQUFDO0FBQUQsQ0FBQyxDQXJCMkMseUJBQVcsR0FxQnREO0FBckJZLHdEQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0huQyx3R0FBMkM7QUFDM0Msc0lBQXFFO0FBQ3JFLHlFQUFnQztBQUNoQywwRkFBcUM7QUFFckM7SUFBOEMsNENBQVc7SUFBekQ7O0lBdUVBLENBQUM7SUFyRVUseUNBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLElBQUk7WUFDeEMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzdCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN6QyxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLElBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ1AsT0FBTzthQUNWO1lBQ0QsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUU3QixLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRWhDLGVBQWU7WUFDZixJQUFJLHNCQUFzQixHQUFHLFdBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkYsSUFBSSxzQkFBc0IsR0FBRyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEg7WUFFRCxJQUFJLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDbkc7WUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxrQkFBa0I7Z0JBQ3BFLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQyxFQUFFLEVBQUU7b0JBQzlDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7aUJBQy9DO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksa0NBQWtDLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUM5QyxJQUFHLFlBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO29CQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDekMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxxQ0FBaUIsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNuRjtxQkFBTTtvQkFDSCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDN0I7YUFDSjtpQkFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksc0NBQXNDLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxpQ0FBaUMsRUFBRTtnQkFDbEksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDdEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNqRDtnQkFFRCxZQUFZLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEdBQUc7b0JBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUM3QixJQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO29CQUNwSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2xDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM3QixDQUFDLENBQUM7Z0JBRUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNqRztpQkFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUkscUNBQXFDLEVBQUU7Z0JBQ3JFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzdCO1lBRUQsSUFBRyxZQUFZLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFO2dCQUN6QyxrQ0FBa0M7YUFDckM7aUJBQU07Z0JBQ0gsa0NBQWtDO2FBQ3JDO1FBRUwsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsK0JBQUM7QUFBRCxDQUFDLENBdkU2Qyx5QkFBVyxHQXVFeEQ7QUF2RVksNERBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJDLHdHQUEyQztBQUUzQztJQUFvQyxrQ0FBVztJQUEvQzs7SUFtQkEsQ0FBQztJQWpCRzs7T0FFRztJQUNJLCtCQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsSUFBSTtZQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7WUFDMUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLENBbkJtQyx5QkFBVyxHQW1COUM7QUFuQlksd0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGM0Isd0dBQTJDO0FBRTNDO0lBQXFDLG1DQUFXO0lBQWhEOztJQWdCQSxDQUFDO0lBZEc7O09BRUc7SUFDSSxnQ0FBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBVSxJQUFJO1lBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWhHLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxDQWhCb0MseUJBQVcsR0FnQi9DO0FBaEJZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjVCLHdHQUEyQztBQUUzQztJQUE4Qiw0QkFBVztJQUF6Qzs7SUFvQkEsQ0FBQztJQWxCRzs7T0FFRztJQUNJLHlCQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLFVBQVU7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUMsb0JBQW9CLENBQUM7WUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztZQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRW5DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsZUFBQztBQUFELENBQUMsQ0FwQjZCLHlCQUFXLEdBb0J4QztBQXBCWSw0QkFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQix3R0FBMkM7QUFFM0M7SUFBMEMsd0NBQVc7SUFBckQ7O0lBNEJBLENBQUM7SUExQlUscUNBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxhQUFhO1lBQ3ZELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztZQUVsQixJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3RDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsWUFBWSxFQUFFLEdBQUc7b0JBQ25FLElBQUksWUFBWSxDQUFDLEVBQUUsSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRTt3QkFDbEQsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2xELE9BQU87cUJBQ1Y7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCwyQkFBQztBQUFELENBQUMsQ0E1QnlDLHlCQUFXLEdBNEJwRDtBQTVCWSxvREFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGakMsd0dBQTJDO0FBRTNDO0lBQW9DLGtDQUFXO0lBQS9DOztJQXFCQSxDQUFDO0lBbkJHOztPQUVHO0lBQ0ksK0JBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRTtZQUN2QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFlBQVksRUFBRSxHQUFHO2dCQUNuRSxJQUFJLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFO29CQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0RCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdEQ7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxDQXJCbUMseUJBQVcsR0FxQjlDO0FBckJZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjNCLHdHQUEyQztBQUMzQyxxR0FBK0M7QUFFL0M7SUFBa0MsZ0NBQVc7SUFBN0M7O0lBb0JBLENBQUM7SUFsQkc7O09BRUc7SUFDSSw2QkFBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxVQUFVO1lBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV0RCxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDLENBcEJpQyx5QkFBVyxHQW9CNUM7QUFwQlksb0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIekIsd0dBQTJDO0FBQzNDLHFHQUErQztBQUUvQztJQUFzQyxvQ0FBVztJQUFqRDs7SUFvQkEsQ0FBQztJQWxCVSxpQ0FBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLFVBQVU7WUFDakQsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtnQkFDL0MsSUFBRyxNQUFNLENBQUMsRUFBRSxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFO29CQUN4QyxZQUFZLEdBQUcsSUFBSSxDQUFDO2lCQUN2QjtZQUNMLENBQUMsQ0FBQztZQUNGLElBQUcsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ2pGO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQUFDLENBcEJxQyx5QkFBVyxHQW9CaEQ7QUFwQlksNENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDdCLHdHQUEyQztBQUMzQyxzSUFBcUU7QUFDckUseUVBQWdDO0FBRWhDO0lBQXFDLG1DQUFXO0lBQWhEOztJQTJFQSxDQUFDO0lBeEVVLGdDQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFVLGFBQWE7WUFDbEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxZQUFZLEVBQUUsR0FBRztnQkFDbkUsSUFBSSxZQUFZLENBQUMsRUFBRSxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFO29CQUNsRCxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEQsT0FBTztpQkFDVjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgseUNBQXlDO1lBQ3pDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFO2dCQUNsRSxJQUFJLFFBQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hFLFVBQVUsQ0FBQztvQkFDUCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM5QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3hCLFVBQVUsQ0FBQzt3QkFDUCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNqQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFNLENBQUMsQ0FBQztvQkFFMUIsSUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO3dCQUN2QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7cUJBQzNCO29CQUVELElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7d0JBQzdDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDdkQ7Z0JBRUwsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBRVg7WUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDNUQsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQztnQkFDNUMsSUFBSSxXQUFXLEVBQUU7b0JBQ2IsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5RSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzFEO2dCQUVELElBQUksZUFBZSxHQUFHLENBQUMsV0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFDQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxxQ0FBaUIsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDckksTUFBTSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUU7b0JBQ3BDLElBQUksTUFBTSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7d0JBQ3RDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQ3pFO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUVILE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDeEUsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzVCLE9BQU87YUFDVjtZQUVELElBQUksYUFBYSxDQUFDLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JELElBQUksa0JBQWtCLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUxRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNsRDtRQUVMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxDQTNFb0MseUJBQVcsR0EyRS9DO0FBM0VZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjVCLHdHQUEyQztBQUUzQztJQUEyQyx5Q0FBVztJQUF0RDs7SUE2QkEsQ0FBQztJQTNCRzs7T0FFRztJQUNJLHNDQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFVBQVUsYUFBYTtZQUN2RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFlBQVksRUFBRSxHQUFHO2dCQUNuRSxJQUFJLFlBQVksQ0FBQyxFQUFFLElBQUksYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUU7b0JBQ2xELE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsRCxPQUFPO2lCQUNWO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFCLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDeEUsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzVCLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN4RztRQUVMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLDRCQUFDO0FBQUQsQ0FBQyxDQTdCMEMseUJBQVcsR0E2QnJEO0FBN0JZLHNEQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZsQywyR0FBOEM7QUFFOUM7SUFBaUMsK0JBQVc7SUFBNUM7O0lBdUJBLENBQUM7SUFyQlUsNEJBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLGNBQUk7WUFDNUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBRyxDQUFDLE1BQU0sRUFBRTtnQkFDUixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNqRjtpQkFBTTtnQkFDSCxJQUFJLE9BQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEQsT0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEMsT0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDcEQsT0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBTTtvQkFDM0MsT0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RELENBQUMsQ0FBQyxDQUFDO2FBQ047UUFHTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMsQ0F2QmdDLHlCQUFXLEdBdUIzQztBQXZCWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z4QiwyR0FBOEM7QUFDOUMseUdBQWtEO0FBRWxEO0lBQW9DLGtDQUFXO0lBQS9DOztJQWtCQSxDQUFDO0lBaEJVLCtCQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBTTtZQUNsQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFLO2dCQUN0QyxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFFbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxRQUFRO2dCQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQ0FsQm1DLHlCQUFXLEdBa0I5QztBQWxCWSx3Q0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0gzQiwyR0FBOEM7QUFFOUM7SUFBc0Msb0NBQVc7SUFBakQ7O0lBa0JBLENBQUM7SUFoQlUsaUNBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsY0FBSTtZQUNqQyxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNyQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2hGO1lBRUQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkUsSUFBRyxXQUFXLEVBQUU7Z0JBQ1osV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzFCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQUFDLENBbEJxQyx5QkFBVyxHQWtCaEQ7QUFsQlksNENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjdCLDJHQUE4QztBQUU5QztJQUFzQyxvQ0FBVztJQUFqRDs7SUFZQSxDQUFDO0lBVlUsaUNBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsY0FBSTtZQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFN0YsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQUFDLENBWnFDLHlCQUFXLEdBWWhEO0FBWlksNENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjdCLDJHQUE4QztBQUM5Qyw2SUFBMEU7QUFFMUU7SUFBaUQsK0NBQVc7SUFBNUQ7O0lBcUJBLENBQUM7SUFuQlUsNENBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsNEJBQWtCO1lBRTFELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsMkJBQWlCO2dCQUM5RCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1lBRTlDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFDLGlCQUFpQixFQUFFLG9CQUFvQjtnQkFDL0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLHFDQUFpQixDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZIO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxrQ0FBQztBQUFELENBQUMsQ0FyQmdELHlCQUFXLEdBcUIzRDtBQXJCWSxrRUFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEMsMkdBQThDO0FBQzlDLHNHQUFnRDtBQUNoRCwySEFBOEQ7QUFFOUQ7SUFBdUMscUNBQVc7SUFBbEQ7O0lBWUEsQ0FBQztJQVZVLGtDQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGNBQUk7WUFDbEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUkseUJBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEgsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLENBWnNDLHlCQUFXLEdBWWpEO0FBWlksOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjlCLHdHQUEyQztBQUMzQyxnR0FBNkM7QUFFN0M7SUFBbUMsaUNBQVc7SUFBOUM7O0lBZ0JBLENBQUM7SUFkRzs7T0FFRztJQUNJLDhCQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxtQkFBUztZQUNuQyxJQUFJLEtBQUssR0FBRyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV2QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxDQWhCa0MseUJBQVcsR0FnQjdDO0FBaEJZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDFCLHdHQUEyQztBQUMzQywrR0FBb0Q7QUFFcEQ7SUFBdUMscUNBQVc7SUFBbEQ7O0lBd0JBLENBQUM7SUF0Qkc7O09BRUc7SUFDSSxrQ0FBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUseUJBQWU7WUFDN0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBTztnQkFDcEIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksa0JBQWtCLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQztZQUNsRCxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsaUJBQU87Z0JBQzlCLElBQUksYUFBYSxHQUFHLElBQUksa0JBQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN6SCxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQztRQUVOLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxDQXhCc0MseUJBQVcsR0F3QmpEO0FBeEJZLDhDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0g5QiwyR0FBOEM7QUFFOUM7SUFBdUQscURBQVc7SUFBbEU7O0lBYUEsQ0FBQztJQVhVLGtEQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsaUNBQWlDLEVBQUUsY0FBSTtZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsd0NBQUM7QUFBRCxDQUFDLENBYnNELHlCQUFXLEdBYWpFO0FBYlksOEVBQWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjlDLDJHQUE4QztBQUU5QztJQUFtRCxpREFBVztJQUE5RDs7SUFXQSxDQUFDO0lBVFUsOENBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxjQUFJO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCxvQ0FBQztBQUFELENBQUMsQ0FYa0QseUJBQVcsR0FXN0Q7QUFYWSxzRUFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGMUMsMkdBQThDO0FBQzlDLDRHQUFvRDtBQUVwRDtJQUFxQyxtQ0FBVztJQUFoRDs7SUF5QkEsQ0FBQztJQXZCVSxnQ0FBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLGNBQUk7WUFDaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBSztnQkFDdEMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFFbEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFLO2dCQUNyQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUUsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3BDLElBQUksV0FBVyxFQUFFO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM5RDtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxDQXpCb0MseUJBQVcsR0F5Qi9DO0FBekJZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNENUI7SUFLSSxxQkFBWSxJQUFVLEVBQUUsTUFBTTtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBR0wsa0JBQUM7QUFBRCxDQUFDO0FBWHFCLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUNEakMseUdBQWtEO0FBQ2xELHdKQUF3RTtBQUN4RSw4SkFBNEU7QUFDNUUsaUlBQXVEO0FBQ3ZELDBJQUE2RDtBQUM3RCw4SUFBZ0U7QUFDaEUsK0tBQXNGO0FBQ3RGLGlKQUFrRTtBQUNsRSxtTUFBbUc7QUFDbkcsdUxBQTJGO0FBQzNGLDZJQUErRDtBQUMvRCx5SEFBb0Q7QUFDcEQscUlBQTREO0FBQzVELDhIQUF1RDtBQUN2RCxpSUFBeUQ7QUFDekQsNEdBQTJDO0FBQzNDLGdKQUFtRTtBQUNuRSx3SEFBbUQ7QUFDbkQsaUlBQXlEO0FBQ3pELG1KQUFxRTtBQUVyRSw4SEFBdUQ7QUFDdkQscUhBQTBEO0FBQzFELDhJQUFnRTtBQUNoRSxvSUFBMkQ7QUFFM0QsSUFBSSxFQUFFLEdBQUcsbUJBQU8sQ0FBQyxzRUFBa0IsQ0FBQyxDQUFDO0FBRXJDO0lBS0ksc0JBQVksSUFBVTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sOEJBQU8sR0FBZCxVQUFlLFNBQWlCLEVBQUUsV0FBbUI7UUFDakQseUJBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBQyxLQUFLLEVBQUUsWUFBWSxHQUFHLFdBQVcsRUFBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFO1lBQzVCLHlCQUFXLENBQUMsa0JBQWtCLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsSUFBTSxNQUFNLEdBQUc7WUFDWCxJQUFJLCtDQUFzQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzdDLElBQUksbURBQXdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFL0MsSUFBSSx5QkFBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xDLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUVyQyxJQUFJLG1DQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLElBQUkseURBQTJCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbEQsSUFBSSxxQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN4QyxJQUFJLG1DQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRXZDLElBQUkscUVBQWlDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDeEQsSUFBSSw2REFBNkIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNwRCxJQUFJLGlDQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEMsSUFBSSxxQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUV4QyxJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDckMsSUFBSSxpQ0FBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3RDLElBQUksbUJBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLDJDQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNDLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNyQyxJQUFJLGlDQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEMsSUFBSSxtQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN2QyxJQUFJLDZDQUFxQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQy9DLENBQUM7UUFFRixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBa0I7WUFDOUIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLDJCQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QyxJQUFJLDZCQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUU5QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sc0NBQWUsR0FBdEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLElBQUk7WUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBRXRDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RELElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzdDLElBQUksNkJBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTlDLDBDQUEwQztRQUU5QyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCxtQkFBQztBQUFELENBQUM7QUFyRlksb0NBQVk7Ozs7Ozs7Ozs7OztBQzdCekIsZSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvZ2FtZS9Jbml0aWFsaXplci50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4uL0NoYXJhY3RlcnMvTW9uc3RlclwiO1xuaW1wb3J0IHtHb1RvTWVzaEFuZFJ1bkFjdGlvbn0gZnJvbSBcIi4vR29Ub01lc2hBbmRSdW5BY3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIEF0dGFja0FjdGlvbnMge1xuXG4gICAgcHJpdmF0ZSBnYW1lOiBHYW1lO1xuICAgIHByaXZhdGUgYXR0YWNrT25jZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGF0dGFja2VkTW9uc3RlcjogTW9uc3RlcjtcbiAgICBwcml2YXRlIGNoZWNrQXR0YWNrT2JzZXJ2ZXI7XG4gICAgcHJpdmF0ZSBpbnRlcnZhbEF0dGFja1JlZ2lzdGVyZWRGdW5jdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXR0YWNrTW9uc3Rlcihtb25zdGVyOiBNb25zdGVyKTogdm9pZCB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFnYW1lLnBsYXllci5pc0FueVNraWxsSXNJblVzZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbENoZWNrQXR0YWNrKCk7XG4gICAgICAgICAgICBnYW1lLmNvbnRyb2xsZXIuYXR0YWNrUG9pbnQgPSBtb25zdGVyLm1lc2hGb3JNb3ZlO1xuICAgICAgICAgICAgZ2FtZS5jb250cm9sbGVyLnRhcmdldFBvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrT25jZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2tlZE1vbnN0ZXIgPSBtb25zdGVyO1xuXG4gICAgICAgICAgICBHb1RvTWVzaEFuZFJ1bkFjdGlvbi5leGVjdXRlKGdhbWUsIG1vbnN0ZXIubWVzaEZvck1vdmUsICgpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXllci5ydW5BbmltYXRpb25EZWF0aE9yU3RhbmQoKTtcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXllci51bnJlZ2lzdGVyTW92ZVdpdGhDb2xsaXNpb24odHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2VsZi5jaGVja0F0dGFja09ic2VydmVyID0gZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5vbkJlZm9yZVJlbmRlck9ic2VydmFibGUuYWRkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jaGVja0F0dGFjaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmludGVydmFsQXR0YWNrUmVnaXN0ZXJlZEZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW50ZXJ2YWxBdHRhY2tGdW5jdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhYmJhZG9uTW9uc3RlckF0dGFjaygpOiB2b2lkIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsQXR0YWNrUmVnaXN0ZXJlZEZ1bmN0aW9uKTtcbiAgICAgICAgdGhpcy5jYW5jZWxDaGVja0F0dGFjaygpO1xuICAgICAgICB0aGlzLmdhbWUuY29udHJvbGxlci5hdHRhY2tQb2ludCA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGF0dGFja09ubHlPbmNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF0dGFja09uY2UgPSB0cnVlO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxBdHRhY2tSZWdpc3RlcmVkRnVuY3Rpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYW5jZWxDaGVja0F0dGFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpLm9uQmVmb3JlUmVuZGVyT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5jaGVja0F0dGFja09ic2VydmVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGludGVydmFsQXR0YWNrRnVuY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICBpZiAoIWdhbWUucGxheWVyLmlzQW55U2tpbGxJc0luVXNlKCkpIHtcbiAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdhdHRhY2snLCB7XG4gICAgICAgICAgICAgICAgYXR0YWNrOiB0aGlzLmF0dGFja2VkTW9uc3Rlci5pZCxcbiAgICAgICAgICAgICAgICB0YXJnZXRQb2ludDogdGhpcy5hdHRhY2tlZE1vbnN0ZXIubWVzaEZvck1vdmUucG9zaXRpb24sXG4gICAgICAgICAgICAgICAgcm90YXRpb246IHRoaXMuYXR0YWNrZWRNb25zdGVyLm1lc2hGb3JNb3ZlLnJvdGF0aW9uLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQXR0YWNrKGFjdGlvbkFmdGVyQ2hlY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuXG4gICAgICAgIGlmIChnYW1lLnBsYXllci5tb25zdGVyc1RvQXR0YWNrW3RoaXMuYXR0YWNrZWRNb25zdGVyLmlkXSA9PSAhdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsQXR0YWNrRnVuY3Rpb24oKTtcbiAgICAgICAgICAgIGdhbWUuZ2V0QmFieWxvblNjZW5lKCkub25CZWZvcmVSZW5kZXJPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLmNoZWNrQXR0YWNrT2JzZXJ2ZXIpO1xuXG4gICAgICAgICAgICBpZighdGhpcy5hdHRhY2tPbmNlKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uQWZ0ZXJDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIEdvVG9NZXNoQW5kUnVuQWN0aW9uIHtcblxuICAgIHN0YXRpYyBleGVjdXRlKGdhbWU6IEdhbWUsIG1lc2g6IEJBQllMT04uQWJzdHJhY3RNZXNoLCBhY3Rpb246IEZ1bmN0aW9uKTogQkFCWUxPTi5PYnNlcnZlcjxhbnk+IHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gZ2FtZS5wbGF5ZXI7XG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gbWVzaC5wb3NpdGlvbjtcbiAgICAgICAgbGV0IG9ic2VydmVyO1xuICAgICAgICBsZXQgc2NlbmUgPSBnYW1lLmdldEJhYnlsb25TY2VuZSgpO1xuXG4gICAgICAgIHNjZW5lLm9uQmVmb3JlUmVuZGVyT2JzZXJ2YWJsZS5yZW1vdmUoZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmdvVG9BY3Rpb24pO1xuICAgICAgICBjb25zdCBjaGVja0ludGVyc2VjdGlvbkZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBsYXllci5tZXNoRm9yTW92ZS5pbnRlcnNlY3RzTWVzaChtZXNoKSkge1xuICAgICAgICAgICAgICAgIGdhbWUuZ2V0QmFieWxvblNjZW5lKCkub25CZWZvcmVSZW5kZXJPYnNlcnZhYmxlLnJlbW92ZShvYnNlcnZlcik7XG4gICAgICAgICAgICAgICAgYWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwbGF5ZXIubWVzaEZvck1vdmUuaW50ZXJzZWN0c01lc2gobWVzaCkpIHtcbiAgICAgICAgICAgIHBsYXllci5ydW5QbGF5ZXJUb1Bvc2l0aW9uKHRhcmdldFBvc2l0aW9uKTtcbiAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdzZXRUYXJnZXRQb2ludCcsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb25cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBvYnNlcnZlciA9IHNjZW5lLm9uQmVmb3JlUmVuZGVyT2JzZXJ2YWJsZS5hZGQoY2hlY2tJbnRlcnNlY3Rpb25GdW5jdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5nb1RvQWN0aW9uID0gb2JzZXJ2ZXI7XG5cbiAgICAgICAgcmV0dXJuIG9ic2VydmVyO1xuICAgIH1cblxufVxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QW5pbWF0aW9uIHtcblxufVxuXG4iLCJpbXBvcnQge0Fic3RyYWN0QW5pbWF0aW9ufSBmcm9tIFwiLi9BYnN0cmFjdEFuaW1hdGlvblwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgQm91bmNlQW5pbWF0aW9uIGV4dGVuZHMgQWJzdHJhY3RBbmltYXRpb24ge1xuXG4gICAgc3RhdGljIGdldEFuaW1hdGlvbigpOiBCQUJZTE9OLkFuaW1hdGlvbiB7XG4gICAgICAgIGxldCBhbmltYXRpb24gPSBuZXcgQkFCWUxPTi5BbmltYXRpb24oXCJib3VuY2VBbmltYXRpb25cIiwgXCJwb3NpdGlvbi55XCIsIDUsXG4gICAgICAgICAgICBCQUJZTE9OLkFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULFxuICAgICAgICAgICAgQkFCWUxPTi5BbmltYXRpb24uQU5JTUFUSU9OTE9PUE1PREVfQ1lDTEUpO1xuXG4gICAgICAgIGNvbnN0IGtleXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJhbWU6IDAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJhbWU6IDE1LFxuICAgICAgICAgICAgICAgIHZhbHVlOiAxLjVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJhbWU6IDMwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIGFuaW1hdGlvbi5zZXRLZXlzKGtleXMpO1xuXG4gICAgICAgIGNvbnN0IGVhc2luZ0Z1bmN0aW9uID0gbmV3IEJBQllMT04uQmFja0Vhc2UoKTtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uc2V0RWFzaW5nTW9kZShCQUJZTE9OLkVhc2luZ0Z1bmN0aW9uLkVBU0lOR01PREVfRUFTRUlOT1VUKTtcbiAgICAgICAgYW5pbWF0aW9uLnNldEVhc2luZ0Z1bmN0aW9uKGVhc2luZ0Z1bmN0aW9uKTtcblxuICAgICAgICByZXR1cm4gYW5pbWF0aW9uO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RmFjdG9yeSB7XG5cbiAgICBwcm90ZWN0ZWQgc2NlbmU6IEJBQllMT04uU2NlbmU7XG4gICAgcHJvdGVjdGVkIGxvYWRlZE1lc2hlczogQXJyYXk8QkFCWUxPTi5NZXNoPjtcblxuICAgIHByb3RlY3RlZCBkaXI6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgZmlsZU5hbWU6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRGYWN0b3J5KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgQkFCWUxPTi5TY2VuZUxvYWRlci5Mb2FkQXNzZXRDb250YWluZXIodGhpcy5kaXIsIHRoaXMuZmlsZU5hbWUsIHRoaXMuc2NlbmUsIGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIHNlbGYubG9hZGVkTWVzaGVzID0gPEFycmF5PEJBQllMT04uTWVzaD4+IGNvbnRhaW5lci5tZXNoZXM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVDbG9uZShuYW1lOiBzdHJpbmcsIGNsb25lU2tlbGV0b246IGJvb2xlYW4gPSBmYWxzZSk6IEJBQllMT04uTWVzaCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb2FkZWRNZXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBtZXNoID0gdGhpcy5sb2FkZWRNZXNoZXNbaV07XG4gICAgICAgICAgICBtZXNoLmxheWVyTWFzayA9IDI7XG5cbiAgICAgICAgICAgIGlmIChtZXNoLm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGxldCBjbG9uZWRNZXNoID0gPEJBQllMT04uTWVzaD4gbWVzaC5jbG9uZSgnY2xvbmVfJyArIG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChjbG9uZVNrZWxldG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb25lZE1lc2guc2tlbGV0b24gPSBtZXNoLnNrZWxldG9uLmNsb25lKCdjbG9uZV9za2VsZXRvbl8nICsgbmFtZSwgJ2Nsb25lX3NrZWxldG9uXycgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xvbmVkTWVzaC5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNsb25lZE1lc2guc2V0RW5hYmxlZCh0cnVlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZWRNZXNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZUluc3RhbmNlKG5hbWU6IHN0cmluZyk6IEJBQllMT04uQWJzdHJhY3RNZXNoIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxvYWRlZE1lc2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG1lc2ggPSB0aGlzLmxvYWRlZE1lc2hlc1tpXTtcbiAgICAgICAgICAgIG1lc2gubGF5ZXJNYXNrID0gMjtcblxuICAgICAgICAgICAgaWYgKG1lc2gubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlZE1lc2ggPSBtZXNoLmNyZWF0ZUluc3RhbmNlKCdpbnN0YW5jZV8nICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VkTWVzaC5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlZE1lc2guc2V0RW5hYmxlZCh0cnVlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZWRNZXNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0NoYXJhY3RlckFzc2V0fSBmcm9tIFwiLi9DaGFyYWN0ZXJBc3NldFwiO1xuaW1wb3J0IHtTa2VsZXRvbkFzc2V0fSBmcm9tIFwiLi9Ta2VsZXRvbkFzc2V0XCI7XG5pbXBvcnQge1NrZWxldG9uV2FycmlvckFzc2V0fSBmcm9tIFwiLi9Ta2VsZXRvbldhcnJpb3JBc3NldFwiO1xuaW1wb3J0IHtTa2VsZXRvbkJvc3NBc3NldH0gZnJvbSBcIi4vU2tlbGV0b25Cb3NzQXNzZXRcIjtcbmltcG9ydCB7Q2hlc3RBc3NldH0gZnJvbSBcIi4vQ2hlc3RBc3NldFwiO1xuaW1wb3J0IHtOYXR1cmVBc3NldH0gZnJvbSBcIi4vTmF0dXJlQXNzZXRcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSBcImJhYnlsb25qc1wiO1xuaW1wb3J0IHtBYnN0cmFjdEZhY3Rvcnl9IGZyb20gXCIuL0Fic3RyYWN0RmFjdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgQXNzZXRzIHtcblxuICAgIGNoYXJhY3RlcjogQ2hhcmFjdGVyQXNzZXQ7XG4gICAgc2tlbGV0b246IENoYXJhY3RlckFzc2V0O1xuICAgIHNrZWxldG9uV2FycmlvcjogQ2hhcmFjdGVyQXNzZXQ7XG4gICAgc2tlbGV0b25Cb3NzOiBDaGVzdEFzc2V0O1xuICAgIGNoZXN0OiBDaGVzdEFzc2V0O1xuICAgIG5hdHVyZUdyYWluOiBOYXR1cmVBc3NldDtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IENoYXJhY3RlckFzc2V0KHNjZW5lKS5pbml0RmFjdG9yeSgpO1xuICAgICAgICB0aGlzLnNrZWxldG9uID0gbmV3IFNrZWxldG9uQXNzZXQoc2NlbmUpLmluaXRGYWN0b3J5KCk7XG4gICAgICAgIHRoaXMuc2tlbGV0b25XYXJyaW9yID0gbmV3IFNrZWxldG9uV2FycmlvckFzc2V0KHNjZW5lKS5pbml0RmFjdG9yeSgpO1xuICAgICAgICB0aGlzLnNrZWxldG9uQm9zcyA9IG5ldyBTa2VsZXRvbkJvc3NBc3NldChzY2VuZSkuaW5pdEZhY3RvcnkoKTtcbiAgICAgICAgdGhpcy5jaGVzdCA9IG5ldyBDaGVzdEFzc2V0KHNjZW5lKS5pbml0RmFjdG9yeSgpO1xuICAgICAgICB0aGlzLm5hdHVyZUdyYWluID0gbmV3IE5hdHVyZUFzc2V0KHNjZW5lKS5pbml0RmFjdG9yeSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBc3NldEZhY3RvcnlCeU5hbWUobmFtZTogc3RyaW5nKTogQWJzdHJhY3RGYWN0b3J5IHtcbiAgICAgICAgbGV0IGFzc2V0RmFjdG9yeSA9IG51bGw7XG5cbiAgICAgICAgc3dpdGNoKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NrZWxldG9uJzpcbiAgICAgICAgICAgICAgICBhc3NldEZhY3RvcnkgPSB0aGlzLnNrZWxldG9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2tlbGV0b25XYXJyaW9yJzpcbiAgICAgICAgICAgICAgICBhc3NldEZhY3RvcnkgPSB0aGlzLnNrZWxldG9uV2FycmlvcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NrZWxldG9uQm9zcyc6XG4gICAgICAgICAgICAgICAgYXNzZXRGYWN0b3J5ID0gdGhpcy5za2VsZXRvbkJvc3M7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNzZXRGYWN0b3J5O1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtBYnN0cmFjdEZhY3Rvcnl9IGZyb20gXCIuL0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyQXNzZXQgZXh0ZW5kcyBBYnN0cmFjdEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lKTtcbiAgICAgICAgdGhpcy5kaXIgPSAnYXNzZXRzL0NoYXJhY3RlcnMvV2Fycmlvci8nO1xuICAgICAgICB0aGlzLmZpbGVOYW1lID0gJ1dhcnJpb3IuYmFieWxvbic7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtBYnN0cmFjdEZhY3Rvcnl9IGZyb20gXCIuL0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgQ2hlc3RBc3NldCBleHRlbmRzIEFic3RyYWN0RmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xuICAgICAgICB0aGlzLmRpciA9ICdhc3NldHMvRW52aXJvbm1lbnQvY2hlc3QvJztcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9ICdjaGVzdC5iYWJ5bG9uJztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RGYWN0b3J5fSBmcm9tIFwiLi9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIE5hdHVyZUFzc2V0IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSk7XG4gICAgICAgIHRoaXMuZGlyID0gJ2Fzc2V0cy9FbnZpcm9ubWVudC9QbGFudHMvJztcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9ICdQbGFudHMuYmFieWxvbic7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtBYnN0cmFjdEZhY3Rvcnl9IGZyb20gXCIuL0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgU2tlbGV0b25Bc3NldCBleHRlbmRzIEFic3RyYWN0RmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xuICAgICAgICB0aGlzLmRpciA9ICdhc3NldHMvQ2hhcmFjdGVycy9Ta2VsZXRvbi9za2VsZXRvbi8nO1xuICAgICAgICB0aGlzLmZpbGVOYW1lID0gJ3NrZWxldG9uLmJhYnlsb24nO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RGYWN0b3J5fSBmcm9tIFwiLi9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIFNrZWxldG9uQm9zc0Fzc2V0IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSk7XG4gICAgICAgIHRoaXMuZGlyID0gJ2Fzc2V0cy9DaGFyYWN0ZXJzL1NrZWxldG9uL3NrZWxldG9uQm9zcy8nO1xuICAgICAgICB0aGlzLmZpbGVOYW1lID0gJ3NrZWxldG9uQm9zcy5iYWJ5bG9uJztcbiAgICB9XG59XG4iLCJpbXBvcnQge0Fic3RyYWN0RmFjdG9yeX0gZnJvbSBcIi4vQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBTa2VsZXRvbldhcnJpb3JBc3NldCBleHRlbmRzIEFic3RyYWN0RmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xuICAgICAgICB0aGlzLmRpciA9ICdhc3NldHMvQ2hhcmFjdGVycy9Ta2VsZXRvbi9za2VsZXRvbldhcnJpb3IvJztcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9ICdza2VsZXRvbldhcnJpb3IuYmFieWxvbic7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tIFwiYmFieWxvbmpzXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ2FtZXJhIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdENhbWVyYUluU2NlbmUoc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgY29uc3QgY2FtZXJhQnlOYW1lID0gc2NlbmUuZ2V0Q2FtZXJhQnlOYW1lKCdDYW1lcmEnKTtcbiAgICAgICAgaWYoY2FtZXJhQnlOYW1lKSB7XG4gICAgICAgICAgICBjYW1lcmFCeU5hbWUuZGlzcG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGdhbWVDYW1lcmEgPSBuZXcgQkFCWUxPTi5GcmVlQ2FtZXJhKFwiZ2FtZUNhbWVyYVwiLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApLCBzY2VuZSk7XG4gICAgICAgIGdhbWVDYW1lcmEucm90YXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAuNzUsMC43NSwwKTtcbiAgICAgICAgZ2FtZUNhbWVyYS5taW5aID0gMTA7XG4gICAgICAgIGdhbWVDYW1lcmEuZm92TW9kZSA9IDA7XG4gICAgICAgIGdhbWVDYW1lcmEubGF5ZXJNYXNrID0gMjtcblxuICAgICAgICAvLy9NT0JJTEVcbiAgICAgICAgaWYoR2FtZS5NT0JJTEVfQ0xJRU5UKSB7XG4gICAgICAgICAgICBnYW1lQ2FtZXJhLm1heFogPSA1MDtcbiAgICAgICAgICAgIGdhbWVDYW1lcmEuZm92ID0gMC44O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2FtZUNhbWVyYS5tYXhaID0gMTAwO1xuICAgICAgICAgICAgZ2FtZUNhbWVyYS5mb3YgPSAxLjI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZ3VpQ2FtZXJhID0gbmV3IEJBQllMT04uRnJlZUNhbWVyYShcIkdVSUNhbWVyYVwiLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApLCBzY2VuZSk7XG4gICAgICAgIGd1aUNhbWVyYS5sYXllck1hc2sgPSAxO1xuICAgICAgICBndWlDYW1lcmEucm90YXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAuNzUsMC43NSwwKTtcbiAgICAgICAgZ3VpQ2FtZXJhLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygtOSwxMCwzKTtcblxuICAgICAgICBzY2VuZS5hY3RpdmVDYW1lcmFzID0gW2dhbWVDYW1lcmEsIGd1aUNhbWVyYV07XG4gICAgICAgIHNjZW5lLmNhbWVyYVRvVXNlRm9yUG9pbnRlcnMgPSBnYW1lQ2FtZXJhO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEJBQllMT04gZnJvbSBcImJhYnlsb25qc1wiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0Q2hhcmFjdGVyQ2FtZXJhIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdENhbWVyYUluU2NlbmUoc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgbGV0IGdhbWVDYW1lcmEgPSBuZXcgQkFCWUxPTi5GcmVlQ2FtZXJhKFwiZ2FtZUNhbWVyYVwiLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApLCBzY2VuZSk7XG4gICAgICAgIGdhbWVDYW1lcmEucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDE0LCAtMjApO1xuICAgICAgICBnYW1lQ2FtZXJhLnJvdGF0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLjUsIDAsIDApO1xuICAgICAgICBnYW1lQ2FtZXJhLm1heFogPSAyMDA7XG4gICAgICAgIGdhbWVDYW1lcmEubWluWiA9IC0yMDA7XG4gICAgICAgIC8vIGNhbWVyYS5mb3YgPSAxMy4yNTtcbiAgICAgICAgZ2FtZUNhbWVyYS5mb3ZNb2RlID0gMDtcbiAgICAgICAgZ2FtZUNhbWVyYS5sYXllck1hc2sgPSAyO1xuXG4gICAgICAgIHNjZW5lLmFjdGl2ZUNhbWVyYXMgPSBbZ2FtZUNhbWVyYV07XG4gICAgfVxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RDaGFyYWN0ZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBBTklNQVRJT05fV0FMSzpzdHJpbmcgPSAnUnVuJztcbiAgICBwdWJsaWMgc3RhdGljIEFOSU1BVElPTl9ERUFUSDpzdHJpbmcgPSAnZGVhdGgnO1xuICAgIHB1YmxpYyBzdGF0aWMgQU5JTUFUSU9OX1NUQU5EX1dFQVBPTjpzdHJpbmcgPSAnU3RhbmRfd2l0aF93ZWFwb24nO1xuICAgIHB1YmxpYyBzdGF0aWMgQU5JTUFUSU9OX0FUVEFDS18wMTpzdHJpbmcgPSAnQXR0YWNrJztcbiAgICBwdWJsaWMgc3RhdGljIEFOSU1BVElPTl9BVFRBQ0tfMDI6c3RyaW5nID0gJ0F0dGFjazAyJztcbiAgICBwdWJsaWMgc3RhdGljIEFOSU1BVElPTl9TS0lMTF8wMTpzdHJpbmcgPSAnU2tpbGwwMSc7XG4gICAgcHVibGljIHN0YXRpYyBBTklNQVRJT05fU0tJTExfMDI6c3RyaW5nID0gJ1NraWxsMDInO1xuXG4gICAgcHVibGljIG1lc2g6QkFCWUxPTi5NZXNoO1xuICAgIHB1YmxpYyBtZXNoRm9yTW92ZTpCQUJZTE9OLk1lc2g7XG4gICAgcHVibGljIGlkOmFueTtcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG5cbiAgICAvKiogQ2hhcmFjdGVyIGF0dXRzICovXG4gICAgcHVibGljIHN0YXRpc3RpY3M7XG5cbiAgICBwdWJsaWMgZ2FtZTpHYW1lO1xuICAgIHB1YmxpYyBhbmltYXRpb246QkFCWUxPTi5BbmltYXRhYmxlO1xuICAgIHB1YmxpYyBpc0NvbnRyb2xsYWJsZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc0F0dGFjazogYm9vbGVhbjtcbiAgICBwdWJsaWMgaXNXYWxrOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc1N0YW5kOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc0RlYXRoOiBib29sZWFuO1xuXG4gICAgcHVibGljIHNmeFdhbGs6IEJBQllMT04uU291bmQ7XG4gICAgcHJvdGVjdGVkIHNmeEhpdDogQkFCWUxPTi5Tb3VuZDtcblxuICAgIHB1YmxpYyBibG9vZFBhcnRpY2xlczogQkFCWUxPTi5JUGFydGljbGVTeXN0ZW07XG4gICAgcHVibGljIHdhbGtTbW9rZTogQkFCWUxPTi5JUGFydGljbGVTeXN0ZW07XG4gICAgcHVibGljIGR5bmFtaWNGdW5jdGlvbjtcbiAgICBwdWJsaWMgcGFydGljbGVTeXN0ZW1FbWl0dGVyO1xuICAgIHB1YmxpYyBuYXZBZ2VudEluZGV4OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOnN0cmluZywgZ2FtZTpHYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRQYXRyaWNsZVN5c3RlbURhbWFnZSgpIHtcbiAgICAgICAgbGV0IGVtaXR0ZXJEYW1hZ2UgPSBCQUJZTE9OLk1lc2guQ3JlYXRlQm94KFwiZW1pdHRlcjBcIiwgMC4xLCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICBlbWl0dGVyRGFtYWdlLnBhcmVudCA9IHRoaXMubWVzaDtcbiAgICAgICAgZW1pdHRlckRhbWFnZS5wb3NpdGlvbi55ID0gNDtcbiAgICAgICAgZW1pdHRlckRhbWFnZS52aXNpYmlsaXR5ID0gMDtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZVN5c3RlbUVtaXR0ZXIgPSBlbWl0dGVyRGFtYWdlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93RGFtYWdlKGRhbWFnZSkge1xuICAgICAgICBsZXQgZHluYW1pY1RleHR1cmUgPSBuZXcgQkFCWUxPTi5EeW5hbWljVGV4dHVyZShudWxsLCAxMjgsIHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSwgdHJ1ZSk7XG4gICAgICAgIGxldCBmb250ID0gXCI0NHB4IFJ1c2xhbkRpc3BsYXlcIjtcbiAgICAgICAgZHluYW1pY1RleHR1cmUuZHJhd1RleHQoZGFtYWdlLCA2NCwgODAsIGZvbnQsIFwid2hpdGVcIiwgbnVsbCwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgbGV0IHBhcnRpY2xlU3lzdGVtRGFtYWdlID0gbmV3IEJBQllMT04uUGFydGljbGVTeXN0ZW0obnVsbCwgMSAvKkNhcGFjaXR5LCBpLmUuIG1heCBvZiAxIGF0IGEgdGltZSovLCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS5lbWl0dGVyID0gdGhpcy5wYXJ0aWNsZVN5c3RlbUVtaXR0ZXI7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtRGFtYWdlLmVtaXRSYXRlID0gMTAwO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS5taW5TaXplID0gMi4wO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS5tYXhTaXplID0gNC4wO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAtOS44MSoyLCAwKTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW1EYW1hZ2UuZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMTAsIDApO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS5kaXJlY3Rpb24yID0gbmV3IEJBQllMT04uVmVjdG9yMygwLDEwLCAwKTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW1EYW1hZ2UubWluQW5ndWxhclNwZWVkID0gLU1hdGguUEk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtRGFtYWdlLm1heEFuZ3VsYXJTcGVlZCA9IE1hdGguUEk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtRGFtYWdlLm1pbkxpZmVUaW1lID0gMTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW1EYW1hZ2UubWF4TGlmZVRpbWUgPSAxO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS50YXJnZXRTdG9wRHVyYXRpb24gPSAwLjg7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtRGFtYWdlLnBhcnRpY2xlVGV4dHVyZSA9IGR5bmFtaWNUZXh0dXJlO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS5sYXllck1hc2sgPSAyO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS5zdGFydCgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkeW5hbWljVGV4dHVyZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS5kaXNwb3NlKCk7XG4gICAgICAgIH0sMTUwMCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUJveEZvck1vdmUocG9zaXRpb246IEJBQllMT04uVmVjdG9yMykge1xuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKTtcblxuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveCh0aGlzLm5hbWUrJ19tb3ZlQm94JywgNCwgc2NlbmUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS5jaGVja0NvbGxpc2lvbnMgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLnZpc2liaWxpdHkgPSAwO1xuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMubWVzaEZvck1vdmUubGF5ZXJNYXNrID0gMjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgcnVuQW5pbWF0aW9uSGl0KGFuaW1hdGlvbjogc3RyaW5nLCBjYWxsYmFja1N0YXJ0ID0gbnVsbCwgY2FsbGJhY2tFbmQgPSBudWxsLCBsb29wOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgbWVzaCA9IHRoaXMubWVzaDtcbiAgICAgICAgbGV0IHNrZWxldG9uID0gbWVzaC5za2VsZXRvbjtcbiAgICAgICAgdGhpcy5pc0F0dGFjayA9IHRydWU7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrRW5kKSB7XG4gICAgICAgICAgICBjYWxsYmFja1N0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi5zZnhIaXQpIHtcbiAgICAgICAgICAgIHNlbGYuc2Z4SGl0LnBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuYW5pbWF0aW9uID0gc2tlbGV0b24uYmVnaW5BbmltYXRpb24oYW5pbWF0aW9uLCBsb29wLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tFbmQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0VuZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnJ1bkFuaW1hdGlvbkRlYXRoT3JTdGFuZCgpO1xuICAgICAgICAgICAgc2VsZi5pc0F0dGFjayA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcnVuQW5pbWF0aW9uU2tpbGwoYW5pbWF0aW9uOiBzdHJpbmcsIGNhbGxiYWNrU3RhcnQgPSBudWxsLCBjYWxsYmFja0VuZCA9IG51bGwsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgc3BlZWQ6IG51bWJlciA9IDEsIHN0YW5kQW5pbWF0aW9uT25GaW5pc2g6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IG1lc2ggPSB0aGlzLm1lc2g7XG4gICAgICAgIGxldCBza2VsZXRvbiA9IG1lc2guc2tlbGV0b247XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrU3RhcnQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrU3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuYW5pbWF0aW9uID0gc2tlbGV0b24uYmVnaW5BbmltYXRpb24oYW5pbWF0aW9uLCBsb29wLCBzcGVlZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrRW5kKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tFbmQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoc3RhbmRBbmltYXRpb25PbkZpbmlzaCkge1xuICAgICAgICAgICAgICAgIHNlbGYucnVuQW5pbWF0aW9uRGVhdGhPclN0YW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHVibGljIHJ1bkFuaW1hdGlvbldhbGsoKTp2b2lkIHtcbiAgICAgICAgbGV0IHNrZWxldG9uID0gdGhpcy5tZXNoLnNrZWxldG9uO1xuXG4gICAgICAgIGlmKCF0aGlzLmlzV2FsayAmJiAhdGhpcy5pc0F0dGFjayAmJiBza2VsZXRvbikge1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5pc1dhbGsgPSB0cnVlO1xuXG4gICAgICAgICAgICBzZWxmLnNmeFdhbGsucGxheSgpO1xuICAgICAgICAgICAgc2VsZi5vbldhbGtTdGFydCgpO1xuICAgICAgICAgICAgc2VsZi5hbmltYXRpb24gPSBza2VsZXRvbi5iZWdpbkFuaW1hdGlvbihBYnN0cmFjdENoYXJhY3Rlci5BTklNQVRJT05fV0FMSywgdHJ1ZSwgMS4yLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ydW5BbmltYXRpb25EZWF0aE9yU3RhbmQoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmFuaW1hdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZi5pc1dhbGsgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZWxmLnNmeFdhbGsuc3RvcCgpO1xuICAgICAgICAgICAgICAgIHNlbGYub25XYWxrRW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBydW5BbmltYXRpb25TdGFuZCgpOnZvaWQge1xuICAgICAgICBsZXQgc2tlbGV0b24gPSB0aGlzLm1lc2guc2tlbGV0b247XG5cbiAgICAgICAgaWYoIXRoaXMuaXNTdGFuZCAmJiBza2VsZXRvbikge1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5pc1N0YW5kID0gdHJ1ZTtcblxuICAgICAgICAgICAgc2VsZi5hbmltYXRpb24gPSBza2VsZXRvbi5iZWdpbkFuaW1hdGlvbihBYnN0cmFjdENoYXJhY3Rlci5BTklNQVRJT05fU1RBTkRfV0VBUE9OLCB0cnVlLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hbmltYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYuaXNTdGFuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmKHNlbGYuaXNEZWF0aCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJ1bkFuaW1hdGlvbkRlYXRoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcnVuQW5pbWF0aW9uRGVhdGgoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLm1lc2guc2tlbGV0b24uYmVnaW5BbmltYXRpb24oQWJzdHJhY3RDaGFyYWN0ZXIuQU5JTUFUSU9OX0RFQVRIKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcnVuQW5pbWF0aW9uRGVhdGhPclN0YW5kKCk6dm9pZCB7XG4gICAgICAgIGlmKHRoaXMuaXNEZWF0aCkge1xuICAgICAgICAgICAgdGhpcy5ydW5BbmltYXRpb25EZWF0aCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ydW5BbmltYXRpb25TdGFuZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFdhbGtTcGVlZCgpIHtcbiAgICAgICAgbGV0IGFuaW1hdGlvblJhdGlvID0gdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpLmdldEFuaW1hdGlvblJhdGlvKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGlzdGljcy53YWxrU3BlZWQgLyBhbmltYXRpb25SYXRpbztcbiAgICB9O1xuXG4gICAgYWJzdHJhY3QgcmVtb3ZlRnJvbVdvcmxkKCk7XG5cbiAgICAvKiogRXZlbnRzICovXG4gICAgcHJvdGVjdGVkIG9uV2Fsa1N0YXJ0KCkge307XG4gICAgcHJvdGVjdGVkIG9uV2Fsa0VuZCgpIHt9O1xufVxuIiwiaW1wb3J0IHtBYnN0cmFjdENoYXJhY3Rlcn0gZnJvbSBcIi4vQWJzdHJhY3RDaGFyYWN0ZXJcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7Qmxvb2R9IGZyb20gXCIuLi9QYXJ0aWNsZXMvQmxvb2RcIjtcbmltcG9ydCB7V2Fsa1Ntb2tlfSBmcm9tIFwiLi4vUGFydGljbGVzL1dhbGtTbW9rZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgTW9uc3RlciBleHRlbmRzIEFic3RyYWN0Q2hhcmFjdGVyIHtcblxuICAgIHByb3RlY3RlZCB0YXJnZXQ6IHN0cmluZztcbiAgICBwdWJsaWMgaW50ZXJ2YWxBdHRhY2tSZWdpc3RlcmVkRnVuY3Rpb247XG4gICAgcHVibGljIGNoZWNrQXR0YWNrT2JzZXJ2ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCBzZXJ2ZXJLZXk6IG51bWJlciwgc2VydmVyRGF0YTogYW55KSB7XG4gICAgICAgIHN1cGVyKHNlcnZlckRhdGEubmFtZSwgZ2FtZSk7XG5cbiAgICAgICAgdGhpcy5zdGF0aXN0aWNzID0gc2VydmVyRGF0YS5zdGF0aXN0aWNzO1xuICAgICAgICB0aGlzLmlkID0gc2VydmVyS2V5O1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQm94Rm9yTW92ZShuZXcgQkFCWUxPTi5WZWN0b3IzKHNlcnZlckRhdGEucG9zaXRpb24ueCwgc2VydmVyRGF0YS5wb3NpdGlvbi55LCBzZXJ2ZXJEYXRhLnBvc2l0aW9uLnopKTtcbiAgICAgICAgdGhpcy5jcmVhdGVNZXNoKHNlcnZlckRhdGEudHlwZSwgc2VydmVyRGF0YS5tZXNoTmFtZSwgbmV3IEJBQllMT04uVmVjdG9yMyhzZXJ2ZXJEYXRhLnNjYWxlLCBzZXJ2ZXJEYXRhLnNjYWxlLCBzZXJ2ZXJEYXRhLnNjYWxlKSk7XG4gICAgICAgIHRoaXMuaW5pdFNmeCgpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQWN0aW9ucygpO1xuXG4gICAgICAgIHRoaXMuYmxvb2RQYXJ0aWNsZXMgPSBuZXcgQmxvb2QoZ2FtZSwgdGhpcy5tZXNoKS5wYXJ0aWNsZVN5c3RlbTtcbiAgICAgICAgdGhpcy53YWxrU21va2UgPSBXYWxrU21va2UuZ2V0UGFydGljbGVzKGdhbWUuZ2V0QmFieWxvblNjZW5lKCksIDIsIHRoaXMubWVzaCk7XG5cbiAgICAgICAgdGhpcy5pbml0UGF0cmljbGVTeXN0ZW1EYW1hZ2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU1lc2goZmFjdG9yeU5hbWU6c3RyaW5nLCBtZXNoTmFtZTpzdHJpbmcsIHNjYWxlOiBCQUJZTE9OLlZlY3RvcjMpIHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICBsZXQgbWVzaCA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5hc3NldHMuZ2V0QXNzZXRGYWN0b3J5QnlOYW1lKGZhY3RvcnlOYW1lKS5jcmVhdGVDbG9uZShtZXNoTmFtZSwgdHJ1ZSk7XG4gICAgICAgIG1lc2gucm90YXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIE1hdGguUEksIDApO1xuICAgICAgICBtZXNoLnZpc2liaWxpdHkgPSAxO1xuICAgICAgICBtZXNoLmlzUGlja2FibGUgPSBmYWxzZTtcbiAgICAgICAgbWVzaC5zY2FsaW5nID0gc2NhbGU7XG4gICAgICAgIG1lc2guc2tlbGV0b24uZW5hYmxlQmxlbmRpbmcoMC4yKTtcbiAgICAgICAgbWVzaC5vdXRsaW5lQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMC4zLCAwLCAwKTtcbiAgICAgICAgbWVzaC5vdXRsaW5lV2lkdGggPSAwLjE7XG4gICAgICAgIG1lc2gucGFyZW50ID0gdGhpcy5tZXNoRm9yTW92ZTtcblxuICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkub3B0aW9ucy5hZGRNZXNoVG9EeW5hbWljU2hhZG93R2VuZXJhdG9yKG1lc2gpO1xuXG4gICAgICAgIHRoaXMubWVzaCA9IG1lc2g7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWdpc3RlckFjdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmFjdGlvbk1hbmFnZXIgPSBuZXcgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyKHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgIHRoaXMubWVzaEZvck1vdmUuYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihcbiAgICAgICAgICAgIEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBvaW50ZXJPdXRUcmlnZ2VyLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5tZXNoLnJlbmRlck91dGxpbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWUuZ3VpLmNoYXJhY3RlclRvcEhwLmhpZGVIcEJhcigpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMubWVzaEZvck1vdmUuYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihcbiAgICAgICAgICAgIEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBvaW50ZXJPdmVyVHJpZ2dlciwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYubWVzaC5yZW5kZXJPdXRsaW5lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWUuZ3VpLmNoYXJhY3RlclRvcEhwLnNob3dIcENoYXJhY3RlcihzZWxmKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAvLyB0aGlzLm1lc2hGb3JNb3ZlLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgIC8vICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25QaWNrRG93blRyaWdnZXIsICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBnYW1lLnBsYXllci5hdHRhY2tBY3Rpb25zLmF0dGFja01vbnN0ZXIoc2VsZik7XG4gICAgICAgIC8vICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKFxuICAgICAgICAgICAgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUGlja1VwVHJpZ2dlciwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyLmF0dGFja0FjdGlvbnMuYXR0YWNrTW9uc3RlcihzZWxmKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25QaWNrT3V0VHJpZ2dlciwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyLmF0dGFja0FjdGlvbnMuYWJiYWRvbk1vbnN0ZXJBdHRhY2soKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFNmeCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICB0aGlzLnNmeEhpdCA9IG5ldyBCQUJZTE9OLlNvdW5kKFwiQ2hhcmFjdGVySGl0XCIsIFwiYXNzZXRzL3NvdW5kcy9jaGFyYWN0ZXIvaGl0Lm1wM1wiLCBnYW1lLmdldEJhYnlsb25TY2VuZSgpLCBudWxsLCB7XG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNmeFdhbGsgPSBuZXcgQkFCWUxPTi5Tb3VuZChcIkNoYXJhY3RlckhpdFwiLCBudWxsLCBnYW1lLmdldEJhYnlsb25TY2VuZSgpLCBudWxsLCB7XG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlRnJvbVdvcmxkKCkge1xuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbEF0dGFja1JlZ2lzdGVyZWRGdW5jdGlvbikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsQXR0YWNrUmVnaXN0ZXJlZEZ1bmN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYodGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuZ2FtZS5wbGF5ZXIubW9uc3RlcnNUb0F0dGFja1t0aGlzLmlkXTtcbiAgICAgICAgaWYodGhpcy5nYW1lLmNvbnRyb2xsZXIuYXR0YWNrUG9pbnQgPT0gdGhpcy5tZXNoRm9yTW92ZSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnBsYXllci5hdHRhY2tBY3Rpb25zLmFiYmFkb25Nb25zdGVyQXR0YWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLm1lc2hGb3JNb3ZlLmRpc3Bvc2UoKTtcbiAgICAgICAgc2VsZi53YWxrU21va2UuZGlzcG9zZSgpO1xuICAgICAgICBzZWxmLmJsb29kUGFydGljbGVzLmRpc3Bvc2UoKTtcblxuICAgICAgICBsZXQgZmlyZVN5c3RlbSA9IG5ldyBCQUJZTE9OLkdQVVBhcnRpY2xlU3lzdGVtKFwicGFydGljbGVzXCIsIHsgY2FwYWNpdHk6IDEwMDAgfSwgc2NlbmUpO1xuICAgICAgICBmaXJlU3lzdGVtLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvZmxhcmUucG5nXCIsIHNjZW5lKTtcbiAgICAgICAgZmlyZVN5c3RlbS5lbWl0dGVyID0gc2VsZi5tZXNoRm9yTW92ZS5wb3NpdGlvbi5jbG9uZSgpOyAvLyB0aGUgc3RhcnRpbmcgb2JqZWN0LCB0aGUgZW1pdHRlclxuICAgICAgICBmaXJlU3lzdGVtLm1pbkVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0xLCAyLCAtMSk7IC8vIFN0YXJ0aW5nIGFsbCBmcm9tXG4gICAgICAgIGZpcmVTeXN0ZW0ubWF4RW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMSwgMSwgMSk7IC8vIFRvLi4uXG4gICAgICAgIGZpcmVTeXN0ZW0uY29sb3IxID0gbmV3IEJBQllMT04uQ29sb3I0KDEsIDAuNSwgMCwgMS4wKTtcbiAgICAgICAgZmlyZVN5c3RlbS5jb2xvcjIgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMSwgMC41LCAwLCAxLjApO1xuICAgICAgICBmaXJlU3lzdGVtLmNvbG9yRGVhZCA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLCAwKTtcbiAgICAgICAgZmlyZVN5c3RlbS5taW5TaXplID0gMC4zO1xuICAgICAgICBmaXJlU3lzdGVtLm1heFNpemUgPSAwLjY7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWluTGlmZVRpbWUgPSAwLjI7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWF4TGlmZVRpbWUgPSAwLjY7XG4gICAgICAgIGZpcmVTeXN0ZW0uZW1pdFJhdGUgPSAxMDAwO1xuICAgICAgICBmaXJlU3lzdGVtLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX09ORU9ORTtcbiAgICAgICAgZmlyZVN5c3RlbS5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAyMCwgMCk7XG4gICAgICAgIGZpcmVTeXN0ZW0uZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgNCwgMCk7XG4gICAgICAgIGZpcmVTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgOCwgMCk7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWluQW5ndWxhclNwZWVkID0gMDtcbiAgICAgICAgZmlyZVN5c3RlbS5tYXhBbmd1bGFyU3BlZWQgPSBNYXRoLlBJO1xuICAgICAgICBmaXJlU3lzdGVtLm1pbkVtaXRQb3dlciA9IDE7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWF4RW1pdFBvd2VyID0gMjtcbiAgICAgICAgZmlyZVN5c3RlbS5sYXllck1hc2sgPSAyO1xuICAgICAgICBmaXJlU3lzdGVtLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IHNtb2tlU3lzdGVtID0gbmV3IEJBQllMT04uR1BVUGFydGljbGVTeXN0ZW0oXCJwYXJ0aWNsZXNcIiwgeyBjYXBhY2l0eTogNTAwIH0sIHNjZW5lKTtcbiAgICAgICAgc21va2VTeXN0ZW0ucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9mbGFyZS5wbmdcIiwgc2NlbmUpO1xuICAgICAgICBzbW9rZVN5c3RlbS5lbWl0dGVyID0gc2VsZi5tZXNoRm9yTW92ZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICBzbW9rZVN5c3RlbS5taW5FbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygtMC44LCAzLCAtMC44KTtcbiAgICAgICAgc21va2VTeXN0ZW0ubWF4RW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMC44LCAxLCAwLjgpO1xuICAgICAgICBzbW9rZVN5c3RlbS5jb2xvcjEgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMC4xLCAwLjEsIDAuMSwgMS4wKTtcbiAgICAgICAgc21va2VTeXN0ZW0uY29sb3IyID0gbmV3IEJBQllMT04uQ29sb3I0KDAuMSwgMC4xLCAwLjEsIDEuMCk7XG4gICAgICAgIHNtb2tlU3lzdGVtLmNvbG9yRGVhZCA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLCAwKTtcbiAgICAgICAgc21va2VTeXN0ZW0ubWluU2l6ZSA9IDAuMztcbiAgICAgICAgc21va2VTeXN0ZW0ubWF4U2l6ZSA9IDE7XG4gICAgICAgIHNtb2tlU3lzdGVtLm1pbkxpZmVUaW1lID0gMC41O1xuICAgICAgICBzbW9rZVN5c3RlbS5tYXhMaWZlVGltZSA9IDAuNztcbiAgICAgICAgc21va2VTeXN0ZW0uZW1pdFJhdGUgPSA1MDAwO1xuICAgICAgICBzbW9rZVN5c3RlbS5ibGVuZE1vZGUgPSBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9PTkVPTkU7XG4gICAgICAgIHNtb2tlU3lzdGVtLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDIwLCAwKTtcbiAgICAgICAgc21va2VTeXN0ZW0uZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoLTEsIDYsIC0xKTtcbiAgICAgICAgc21va2VTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMC41LCA2LCAwLjUpO1xuICAgICAgICBzbW9rZVN5c3RlbS5taW5Bbmd1bGFyU3BlZWQgPSAwO1xuICAgICAgICBzbW9rZVN5c3RlbS5tYXhBbmd1bGFyU3BlZWQgPSBNYXRoLlBJO1xuICAgICAgICBzbW9rZVN5c3RlbS5taW5FbWl0UG93ZXIgPSAxO1xuICAgICAgICBzbW9rZVN5c3RlbS5tYXhFbWl0UG93ZXIgPSAyO1xuICAgICAgICBzbW9rZVN5c3RlbS5sYXllck1hc2sgPSAyO1xuICAgICAgICBzbW9rZVN5c3RlbS5zdGFydCgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc21va2VTeXN0ZW0uc3RvcCgpO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5zdG9wKCk7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzbW9rZVN5c3RlbS5kaXNwb3NlKCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmRpc3Bvc2UoKTtcbiAgICAgICAgfSwgMzAwMCk7XG5cbiAgICB9XG5cbiAgICByZXRyaWV2ZUhpdCh1cGRhdGVkRW5lbXkpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRpc3RpY3MuaHAgIT0gdXBkYXRlZEVuZW15LnN0YXRpc3RpY3MuaHApIHtcbiAgICAgICAgICAgIGxldCBkYW1hZ2UgPSAodGhpcy5zdGF0aXN0aWNzLmhwIC0gdXBkYXRlZEVuZW15LnN0YXRpc3RpY3MuaHApO1xuICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzLmhwID0gdXBkYXRlZEVuZW15LnN0YXRpc3RpY3MuaHA7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuYmxvb2RQYXJ0aWNsZXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dEYW1hZ2UoZGFtYWdlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ibG9vZFBhcnRpY2xlcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0YXRpc3RpY3MuaHAgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmlzRGVhdGggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZUZyb21Xb3JsZCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZS5ndWkuY2hhcmFjdGVyVG9wSHAucmVmcmVzaFBhbmVsKCk7XG4gICAgICAgICAgICB9LCA0MDApO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25XYWxrU3RhcnQoKSB7XG4gICAgICAgIHRoaXMud2Fsa1Ntb2tlLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uV2Fsa0VuZCgpIHtcbiAgICAgICAgdGhpcy53YWxrU21va2Uuc3RvcCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7QWJzdHJhY3RDaGFyYWN0ZXJ9IGZyb20gXCIuL0Fic3RyYWN0Q2hhcmFjdGVyXCI7XG5pbXBvcnQge0F0dGFja0FjdGlvbnN9IGZyb20gXCIuLi9BY3Rpb25zL0F0dGFja0FjdGlvbnNcIjtcbmltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi4vUGxheWVyL0ludmVudG9yeVwiO1xuaW1wb3J0IHtBYnN0cmFjdFNraWxsfSBmcm9tIFwiLi4vUGxheWVyL1NraWxscy9BYnN0cmFjdFNraWxsXCI7XG5pbXBvcnQge0dvZFJheX0gZnJvbSBcIi4uL0VmZmVjdHMvR29kUmF5XCI7XG5pbXBvcnQge1dhbGtTbW9rZX0gZnJvbSBcIi4uL1BhcnRpY2xlcy9XYWxrU21va2VcIjtcbmltcG9ydCB7UGxheWVySW5mb3JtYXRpb259IGZyb20gXCIuLi9HVUkvUGxheWVySW5mb3JtYXRpb25cIjtcbmltcG9ydCB7Qmxvb2R9IGZyb20gXCIuLi9QYXJ0aWNsZXMvQmxvb2RcIjtcbmltcG9ydCB7TWFpbn0gZnJvbSBcIi4uL0dVSS9NYWluXCI7XG5pbXBvcnQge1NraWxsc01hbmFnZXJ9IGZyb20gXCIuLi9QbGF5ZXIvU2tpbGxzL1NraWxsc01hbmFnZXJcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEFic3RyYWN0Q2hhcmFjdGVyIHtcblxuICAgIHB1YmxpYyBjb25uZWN0aW9uSWQ6IHN0cmluZztcblxuICAgIHB1YmxpYyBpbnZlbnRvcnk6IEludmVudG9yeTtcbiAgICBwdWJsaWMgcGxheWVyTGlnaHQ6IEJBQllMT04uU3BvdExpZ2h0O1xuICAgIHB1YmxpYyBpc0FsaXZlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBza2lsbHM6IEFycmF5PEFic3RyYWN0U2tpbGw+O1xuICAgIHB1YmxpYyBzdGF0aXN0aWNzQWxsOiBhbnk7XG4gICAgcHVibGljIGF0dHJpYnV0ZXM6IGFueTtcbiAgICBwdWJsaWMgZXhwZXJpZW5jZTogbnVtYmVyO1xuICAgIHB1YmxpYyBleHBlcmllbmNlUGVyY2VudGFnZXM6IG51bWJlcjtcbiAgICBwdWJsaWMgZ29sZDogbnVtYmVyO1xuICAgIHB1YmxpYyBrZXlzOiBudW1iZXI7XG4gICAgcHVibGljIHBvdGlvbnM6IG51bWJlcjtcbiAgICBwdWJsaWMgbHZsOiBudW1iZXI7XG4gICAgcHVibGljIGZyZWVBdHRyaWJ1dGVzUG9pbnRzOiBudW1iZXI7XG4gICAgcHVibGljIGZyZWVTa2lsbFBvaW50czogbnVtYmVyO1xuICAgIHB1YmxpYyBtb25zdGVyc1RvQXR0YWNrOiBBcnJheTxCb29sZWFuPiA9IFtdO1xuICAgIHB1YmxpYyBhdHRhY2tBY3Rpb25zOiBBdHRhY2tBY3Rpb25zO1xuXG4gICAgcHVibGljIGd1aVBsYXllckluZm9ybWF0aW9uOiBQbGF5ZXJJbmZvcm1hdGlvbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCByZWdpc3Rlck1vdmluZzogYm9vbGVhbiwgc2VydmVyRGF0YTogYW55KSB7XG4gICAgICAgIHN1cGVyKHNlcnZlckRhdGEuYWN0aXZlUGxheWVyLm5hbWUsIGdhbWUpO1xuXG4gICAgICAgIHRoaXMuaWQgPSBzZXJ2ZXJEYXRhLmFjdGl2ZVBsYXllci5pZDtcbiAgICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJTdGF0aXN0aWNzKHNlcnZlckRhdGEuYWN0aXZlUGxheWVyKTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uSWQgPSBzZXJ2ZXJEYXRhLmNvbm5lY3Rpb25JZDtcbiAgICAgICAgdGhpcy5pc0NvbnRyb2xsYWJsZSA9IHJlZ2lzdGVyTW92aW5nO1xuXG4gICAgICAgIHRoaXMuaW5pdFNmeCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJveEZvck1vdmUoXG4gICAgICAgICAgICBuZXcgQkFCWUxPTi5WZWN0b3IzKHNlcnZlckRhdGEucG9zaXRpb24ueCwgc2VydmVyRGF0YS5wb3NpdGlvbi55LCBzZXJ2ZXJEYXRhLnBvc2l0aW9uLnopXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVzaCgpO1xuXG4gICAgICAgIHRoaXMuYmxvb2RQYXJ0aWNsZXMgPSBuZXcgQmxvb2QoZ2FtZSwgdGhpcy5tZXNoKS5wYXJ0aWNsZVN5c3RlbTtcbiAgICAgICAgdGhpcy53YWxrU21va2UgPSBXYWxrU21va2UuZ2V0UGFydGljbGVzKGdhbWUuZ2V0QmFieWxvblNjZW5lKCksIDI1LCB0aGlzLm1lc2gpO1xuXG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeShnYW1lLCB0aGlzKTtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnkuc2V0SXRlbXMoc2VydmVyRGF0YS5hY3RpdmVQbGF5ZXIuaXRlbXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ29udHJvbGxhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm1lc2guaXNQaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgbmV3IE1haW4oZ2FtZSk7XG4gICAgICAgICAgICB0aGlzLmluaXRTZXJ2ZXJEYXRhKHNlcnZlckRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ2FtZXJhUG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEV4cGVyaWVuY2VJbkd1aSgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQbGF5ZXJMaWdodCgpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2tBY3Rpb25zID0gbmV3IEF0dGFja0FjdGlvbnMoZ2FtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldENoYXJhY3RlclNraWxscyhzZXJ2ZXJEYXRhLnNraWxscyk7XG4gICAgICAgIHRoaXMuaW5pdFBhdHJpY2xlU3lzdGVtRGFtYWdlKCk7XG4gICAgICAgIHRoaXMucnVuQW5pbWF0aW9uU3RhbmQoKTtcbiAgICAgICAgdGhpcy5ndWlQbGF5ZXJJbmZvcm1hdGlvbiA9IG5ldyBQbGF5ZXJJbmZvcm1hdGlvbih0aGlzLCBnYW1lKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoSHBJbkd1aSgpO1xuICAgICAgICB0aGlzLnJlZnJlc2hFbmVyZ3lJbkd1aSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFNlcnZlckRhdGEoc2VydmVyRGF0YSkge1xuICAgICAgICB0aGlzLmV4cGVyaWVuY2UgPSBzZXJ2ZXJEYXRhLmFjdGl2ZVBsYXllci5leHBlcmllbmNlO1xuICAgICAgICB0aGlzLmdvbGQgPSBzZXJ2ZXJEYXRhLmFjdGl2ZVBsYXllci5nb2xkO1xuICAgICAgICB0aGlzLmtleXMgPSBzZXJ2ZXJEYXRhLmFjdGl2ZVBsYXllci5zcGVjaWFsSXRlbXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmV4cGVyaWVuY2VQZXJjZW50YWdlcyA9IHNlcnZlckRhdGEuYWN0aXZlUGxheWVyLmV4cGVyaWVuY2VQZXJjZW50YWdlcztcbiAgICAgICAgdGhpcy5sdmwgPSBzZXJ2ZXJEYXRhLmFjdGl2ZVBsYXllci5sdmw7XG4gICAgICAgIHRoaXMuZnJlZUF0dHJpYnV0ZXNQb2ludHMgPSBzZXJ2ZXJEYXRhLmFjdGl2ZVBsYXllci5mcmVlQXR0cmlidXRlc1BvaW50cztcbiAgICAgICAgdGhpcy5mcmVlU2tpbGxQb2ludHMgPSBzZXJ2ZXJEYXRhLmFjdGl2ZVBsYXllci5mcmVlU2tpbGxQb2ludHM7XG4gICAgICAgIHRoaXMubmFtZSA9IHNlcnZlckRhdGEuYWN0aXZlUGxheWVyLm5hbWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVQbGF5ZXJMaWdodCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgY29uc3QgcGxheWVyTGlnaHQgPSBuZXcgQkFCWUxPTi5TcG90TGlnaHQoXCJwbGF5ZXJMaWdodFNwb3RcIixcbiAgICAgICAgICAgIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgNDUsIDApLFxuICAgICAgICAgICAgbmV3IEJBQllMT04uVmVjdG9yMygwLCAtMSwgMCksXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICBwbGF5ZXJMaWdodC5kaWZmdXNlID0gbmV3IEJBQllMT04uQ29sb3IzKDEsIDAuNywgMC4zKTtcbiAgICAgICAgcGxheWVyTGlnaHQuYW5nbGUgPSAwLjc7XG4gICAgICAgIHBsYXllckxpZ2h0LmV4cG9uZW50ID0gNzA7XG4gICAgICAgIHBsYXllckxpZ2h0LmludGVuc2l0eSA9IDAuODtcbiAgICAgICAgcGxheWVyTGlnaHQucGFyZW50ID0gdGhpcy5tZXNoO1xuXG4gICAgICAgIC8vVE9ETzogdmVyaWZ5XG4gICAgICAgIC8vIHBsYXllckxpZ2h0LmF1dG9FeHRlbmRzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxheWVyTGlnaHQgPSBwbGF5ZXJMaWdodDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU1lc2goKSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgbGV0IG1lc2ggPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuYXNzZXRzLmNoYXJhY3Rlci5jcmVhdGVDbG9uZSgnV2FycmlvcicsIHRydWUpO1xuICAgICAgICBtZXNoLnNrZWxldG9uLmVuYWJsZUJsZW5kaW5nKDAuMik7XG4gICAgICAgIG1lc2guYWx3YXlzU2VsZWN0QXNBY3RpdmVNZXNoID0gdHJ1ZTtcbiAgICAgICAgbWVzaC5wYXJlbnQgPSB0aGlzLm1lc2hGb3JNb3ZlO1xuICAgICAgICBtZXNoLmFjdGlvbk1hbmFnZXIgPSBuZXcgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyKGdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuXG4gICAgICAgIHRoaXMubWVzaCA9IG1lc2g7XG5cbiAgICAgICAgbWVzaC5za2VsZXRvbi5jcmVhdGVBbmltYXRpb25SYW5nZSgnbG9vcFN0cm9uZ0F0dGFjaycsIDM0MCwgMzUwKTtcbiAgICAgICAgbWVzaC5za2VsZXRvbi5jcmVhdGVBbmltYXRpb25SYW5nZSgnbG9vcEJsb2NrJywgNzAsIDgwKTtcblxuICAgICAgICByZXR1cm4gbWVzaDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRTZngoKSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgdGhpcy5zZnhXYWxrID0gbmV3IEJBQllMT04uU291bmQoXCJDaGFyYWN0ZXJXYWxrXCIsIFwiYXNzZXRzL3NvdW5kcy9jaGFyYWN0ZXIvd2Fsay8xLm1wM1wiLCBnYW1lLmdldEJhYnlsb25TY2VuZSgpLCBudWxsLCB7XG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNmeEhpdCA9IG5ldyBCQUJZTE9OLlNvdW5kKFwiQ2hhcmFjdGVySGl0XCIsIFwiYXNzZXRzL3NvdW5kcy9jaGFyYWN0ZXIvaGl0Lm1wM1wiLCBnYW1lLmdldEJhYnlsb25TY2VuZSgpLCBudWxsLCB7XG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdEdvZFJheSgpIHtcbiAgICAgICAgR29kUmF5LmNyZWF0ZUdvZFJheSh0aGlzLmdhbWUsIHRoaXMubWVzaEZvck1vdmUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDaGFyYWN0ZXJTdGF0aXN0aWNzKHBsYXllclNlcnZlckRhdGEpIHtcbiAgICAgICAgdGhpcy5zdGF0aXN0aWNzID0gcGxheWVyU2VydmVyRGF0YS5zdGF0aXN0aWNzO1xuICAgICAgICB0aGlzLnN0YXRpc3RpY3NBbGwgPSBwbGF5ZXJTZXJ2ZXJEYXRhLmFsbFN0YXRpc3RpY3M7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IHBsYXllclNlcnZlckRhdGEuYXR0cmlidXRlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q2hhcmFjdGVyU2tpbGxzKHNraWxscykge1xuICAgICAgICBza2lsbHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogNCxcbiAgICAgICAgICAgIH1dO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2tpbGxzID0gW107XG5cbiAgICAgICAgaWYgKHNraWxscykge1xuICAgICAgICAgICAgc2tpbGxzLmZvckVhY2goc2tpbGwgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJTa2lsbCA9IFNraWxsc01hbmFnZXIuZ2V0U2tpbGwoc2tpbGwudHlwZSwgc2VsZik7XG4gICAgICAgICAgICAgICAgc2VsZi5za2lsbHNbcGxheWVyU2tpbGwuZ2V0VHlwZSgpXSA9IHBsYXllclNraWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNBbnlTa2lsbElzSW5Vc2UoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpc0luVXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2tpbGxzLmZvckVhY2goKHNraWxsKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2tpbGwuaXNJblVzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlzSW5Vc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNJblVzZSA9PT0gZmFsc2UgJiYgdGhpcy5pc0F0dGFjaykge1xuICAgICAgICAgICAgaXNJblVzZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0RlYXRoKSB7XG4gICAgICAgICAgICBpc0luVXNlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0luVXNlO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVGcm9tV29ybGQoKSB7XG4gICAgICAgIHRoaXMuZ3VpUGxheWVySW5mb3JtYXRpb24uY29udGFpbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5tZXNoLmRpc3Bvc2UoKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyByZWZyZXNoQ2FtZXJhUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5nZXRDYW1lcmFCeU5hbWUoJ2dhbWVDYW1lcmEnKTtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uID0gdGhpcy5tZXNoRm9yTW92ZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDE4O1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiAtPSAxMjtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggLT0gMTI7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2hFeHBlcmllbmNlSW5HdWkoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5ndWkucGxheWVyQm90dG9tUGFuZWwuZXhwQmFyLndpZHRoID0gdGhpcy5leHBlcmllbmNlUGVyY2VudGFnZXMgLyAxMDA7XG4gICAgICAgIHRoaXMuZ2FtZS5ndWkucGxheWVyQm90dG9tUGFuZWwuZXhwQmFyVGV4dC50ZXh0ID0gdGhpcy5leHBlcmllbmNlUGVyY2VudGFnZXMgKyAnJSc7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2hFbmVyZ3lJbkd1aSgpIHtcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKHRoaXMuc3RhdGlzdGljcy5lbmVyZ3kgKiAxMDAgLyB0aGlzLnN0YXRpc3RpY3MuZW5lcmd5TWF4KTtcbiAgICAgICAgdGhpcy5ndWlQbGF5ZXJJbmZvcm1hdGlvbi5lbmVyZ3lCYXIud2lkdGggPSBwZXJjZW50YWdlIC8gMTAwO1xuICAgICAgICB0aGlzLmd1aVBsYXllckluZm9ybWF0aW9uLmVuZXJneUJhclRleHQudGV4dCA9IHRoaXMuc3RhdGlzdGljcy5lbmVyZ3kgKyAnIC8gJyArIHRoaXMuc3RhdGlzdGljcy5lbmVyZ3lNYXg7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2hIcEluR3VpKCkge1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IE1hdGgucm91bmQodGhpcy5zdGF0aXN0aWNzLmhwICogMTAwIC8gdGhpcy5zdGF0aXN0aWNzLmhwTWF4KTtcbiAgICAgICAgdGhpcy5ndWlQbGF5ZXJJbmZvcm1hdGlvbi5ocEJhci53aWR0aCA9IHBlcmNlbnRhZ2UgLyAxMDA7XG4gICAgICAgIHRoaXMuZ3VpUGxheWVySW5mb3JtYXRpb24uaHBCYXJUZXh0LnRleHQgPSB0aGlzLnN0YXRpc3RpY3MuaHAgKyAnIC8gJyArIHRoaXMuc3RhdGlzdGljcy5ocE1heDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRXhwZXJpZW5jZShleHBlcmluY2U6IG51bWJlciwgZXhwZXJpZW5jZVBlcmNlbnRhZ2VzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5leHBlcmllbmNlICs9IGV4cGVyaW5jZTtcbiAgICAgICAgdGhpcy5leHBlcmllbmNlUGVyY2VudGFnZXMgPSBleHBlcmllbmNlUGVyY2VudGFnZXM7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoRXhwZXJpZW5jZUluR3VpKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE5ld0x2bCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmd1aS5wbGF5ZXJMb2dzUXVlc3RzLmFkZFRleHQoJ05ldyBsdmwgJyArIHRoaXMubHZsICsgJycsICdyZWQnKTtcbiAgICAgICAgdGhpcy5nYW1lLmd1aS5wbGF5ZXJMb2dzUXVlc3RzLmFkZFRleHQoJ1lvdSBnb3QgNSBhdHRyaWJ1dGUgcG9pbnRzJywgJ3JlZCcpO1xuICAgICAgICB0aGlzLmdhbWUuZ3VpLnBsYXllckxvZ3NRdWVzdHMuYWRkVGV4dCgnWW91IGdvdCAxIHNraWxsIHBvaW50ICcgKyB0aGlzLmx2bCArICcnLCAncmVkJyk7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoRXhwZXJpZW5jZUluR3VpKCk7XG4gICAgICAgIHRoaXMuaW5pdEdvZFJheSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBydW5QbGF5ZXJUb1Bvc2l0aW9uKHRhcmdldFBvaW50VmVjdG9yMykge1xuICAgICAgICBpZih0aGlzLmlzQW55U2tpbGxJc0luVXNlKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IG1lc2ggPSB0aGlzLm1lc2hGb3JNb3ZlO1xuICAgICAgICBtZXNoLmxvb2tBdCh0YXJnZXRQb2ludFZlY3RvcjMsIE1hdGguUEkpO1xuICAgICAgICB0aGlzLnVucmVnaXN0ZXJNb3ZlV2l0aENvbGxpc2lvbihmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5keW5hbWljRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobWVzaC5pbnRlcnNlY3RzUG9pbnQodGFyZ2V0UG9pbnRWZWN0b3IzKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS51bnJlZ2lzdGVyQmVmb3JlUmVuZGVyKHNlbGYuZHluYW1pY0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmFuaW1hdGlvbiAmJiBzZWxmLmFuaW1hdGlvbi5mcm9tRnJhbWUgPT0gMTMwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCByb3RhdGlvbiA9IG1lc2gucm90YXRpb247XG4gICAgICAgICAgICAgICAgbGV0IGZvcndhcmRzID0gbmV3IEJBQllMT04uVmVjdG9yMygtKE1hdGguc2luKHJvdGF0aW9uLnkpKSAvIHNlbGYuZ2V0V2Fsa1NwZWVkKCksIDAsIC0oTWF0aC5jb3Mocm90YXRpb24ueSkpIC8gc2VsZi5nZXRXYWxrU3BlZWQoKSk7XG4gICAgICAgICAgICAgICAgbWVzaC5tb3ZlV2l0aENvbGxpc2lvbnMoZm9yd2FyZHMpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5nYW1lLnBsYXllci5yZWZyZXNoQ2FtZXJhUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICBzZWxmLnJ1bkFuaW1hdGlvbldhbGsoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCk7XG4gICAgICAgIGlmKHNjZW5lKSB7XG4gICAgICAgICAgICBzY2VuZS5yZWdpc3RlckJlZm9yZVJlbmRlcih0aGlzLmR5bmFtaWNGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdW5yZWdpc3Rlck1vdmVXaXRoQ29sbGlzaW9uKGVtaXRQb3NpdGlvbjogYm9vbGVhbikge1xuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCk7XG4gICAgICAgIGlmICh0aGlzLmR5bmFtaWNGdW5jdGlvbiAhPT0gdW5kZWZpbmVkICYmIHNjZW5lKSB7XG4gICAgICAgICAgICBzY2VuZS51bnJlZ2lzdGVyQmVmb3JlUmVuZGVyKHRoaXMuZHluYW1pY0Z1bmN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbWl0UG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ3NldFRhcmdldFBvaW50Jywge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm1lc2hGb3JNb3ZlLnBvc2l0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbldhbGtTdGFydCgpIHtcbiAgICAgICAgdGhpcy53YWxrU21va2Uuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25XYWxrRW5kKCkge1xuICAgICAgICB0aGlzLndhbGtTbW9rZS5zdG9wKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0Fic3RyYWN0Q2hhcmFjdGVyfSBmcm9tIFwiLi4vQWJzdHJhY3RDaGFyYWN0ZXJcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcbmltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi4vLi4vUGxheWVyL0ludmVudG9yeVwiO1xuaW1wb3J0IHtJdGVtTWFuYWdlcn0gZnJvbSBcIi4uLy4uL1BsYXllci9JdGVtcy9JdGVtTWFuYWdlclwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3ROcGMgZXh0ZW5kcyBBYnN0cmFjdENoYXJhY3RlciB7XG5cbiAgICAgICAgcHJvdGVjdGVkIGJveDogQkFCWUxPTi5BYnN0cmFjdE1lc2g7XG4gICAgICAgIHByb3RlY3RlZCBxdWVzdElkOiBudW1iZXI7XG4gICAgICAgIHByb3RlY3RlZCB0b29sdGlwOiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcbiAgICAgICAgcHJvdGVjdGVkIGludmVudG9yeTogSW52ZW50b3J5O1xuXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihnYW1lOkdhbWUsIG5hbWUsIHBvc2l0aW9uOiBCQUJZTE9OLlZlY3RvcjMsIHJvdGF0aW9uOiBCQUJZTE9OLlZlY3RvcjMpIHtcbiAgICAgICAgICAgIHN1cGVyKG5hbWUsIGdhbWUpO1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm5wY3MucHVzaCh0aGlzKTtcblxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLm1lc2gucm90YXRpb24gPSByb3RhdGlvbjtcblxuICAgICAgICAgICAgdGhpcy5tZXNoLmFjdGlvbk1hbmFnZXIgPSBuZXcgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyKHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgICAgICB0aGlzLm1lc2guaXNQaWNrYWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljcyA9IHtcbiAgICAgICAgICAgICAgICBocE1heDogMTAwMCxcbiAgICAgICAgICAgICAgICBocDogMTAwMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubWVzaC5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBvaW50ZXJPdXRUcmlnZ2VyLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nYW1lLmd1aS5jaGFyYWN0ZXJUb3BIcC5oaWRlSHBCYXIoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHRoaXMubWVzaC5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBvaW50ZXJPdmVyVHJpZ2dlcixcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ2FtZS5ndWkuY2hhcmFjdGVyVG9wSHAuc2hvd0hwQ2hhcmFjdGVyKHNlbGYpO1xuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgdGhpcy5ydW5BbmltYXRpb25TdGFuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHJlbW92ZUZyb21Xb3JsZCgpIHtcbiAgICAgICAgICAgIHRoaXMubWVzaC5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuZGlzcG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpbnZlbnRvcnlJdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldEl0ZW1zKGludmVudG9yeUl0ZW1zOiBPYmplY3RbXSkge1xuICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KHRoaXMuZ2FtZSwgdGhpcyk7XG5cbiAgICAgICAgICAgIGlmKGludmVudG9yeUl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1NYW5hZ2VyID0gbmV3IEl0ZW1NYW5hZ2VyKHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICAgICAgaXRlbU1hbmFnZXIuaW5pdEl0ZW1zRnJvbURhdGFiYXNlT25DaGFyYWN0ZXIoaW52ZW50b3J5SXRlbXMsIHRoaXMuaW52ZW50b3J5LCB0cnVlKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIiwiaW1wb3J0IHtBYnN0cmFjdE5wY30gZnJvbSBcIi4vQWJzdHJhY3ROcGNcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIEd1YXJkIGV4dGVuZHMgQWJzdHJhY3ROcGMge1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHBvc2l0aW9uOiBCQUJZTE9OLlZlY3RvcjMsIHJvdGF0aW9uOiBCQUJZTE9OLlZlY3RvcjMpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLm1lc2ggPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuYXNzZXRzLmNoYXJhY3Rlci5jcmVhdGVDbG9uZSgnV2FycmlvcicsIHRydWUpO1xuXG4gICAgICAgIHN1cGVyKGdhbWUsICdHdWFyZCcsIHBvc2l0aW9uLCByb3RhdGlvbik7XG4gICAgICAgIGxldCBpdGVtcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNoTmFtZTogJ0F4ZS4wMDEnLFxuICAgICAgICAgICAgICAgIGVudGl0eToge1xuICAgICAgICAgICAgICAgICAgICBlcXVpcDogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzaE5hbWU6ICdTaGllbGQnLFxuICAgICAgICAgICAgICAgIGVudGl0eToge1xuICAgICAgICAgICAgICAgICAgICBlcXVpcDogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzaE5hbWU6ICdIZWxtJyxcbiAgICAgICAgICAgICAgICBlbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXA6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XG5cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RDaGFyYWN0ZXJ9IGZyb20gXCIuLi9BYnN0cmFjdENoYXJhY3RlclwiO1xuaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuLi8uLi9QbGF5ZXIvSW52ZW50b3J5XCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi9HYW1lXCI7XG5pbXBvcnQge0l0ZW1NYW5hZ2VyfSBmcm9tIFwiLi4vLi4vUGxheWVyL0l0ZW1zL0l0ZW1NYW5hZ2VyXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBXYXJyaW9yIGV4dGVuZHMgQWJzdHJhY3RDaGFyYWN0ZXIge1xuXG4gICAgcHJvdGVjdGVkIGludmVudG9yeTogSW52ZW50b3J5O1xuICAgIHByb3RlY3RlZCBza2VsZXRvbkFuaW1hdGlvbjtcbiAgICBwcm90ZWN0ZWQgcGxheWVySWQ6IE51bWJlcjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCBwbGFjZTogTnVtYmVyLCBwbGF5ZXJEYXRhYmFzZSkge1xuICAgICAgICBzdXBlcignV2FycmlvcicsIGdhbWUpO1xuICAgICAgICB0aGlzLnBsYXllcklkID0gcGxheWVyRGF0YWJhc2UuaWQ7XG5cbiAgICAgICAgbGV0IG1lc2ggPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuYXNzZXRzLmNoYXJhY3Rlci5jcmVhdGVDbG9uZSgnV2FycmlvcicsIHRydWUpO1xuICAgICAgICBtZXNoLnNjYWxpbmcgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEuNCwgMS40LCAxLjQpO1xuICAgICAgICBtZXNoLnNrZWxldG9uLmVuYWJsZUJsZW5kaW5nKDAuMyk7XG5cbiAgICAgICAgc3dpdGNoIChwbGFjZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIG1lc2gucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0wLjMsIDAsIDEwLjUpO1xuICAgICAgICAgICAgICAgIG1lc2gucm90YXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIG1lc2gucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDIuNywgMCwgMTApO1xuICAgICAgICAgICAgICAgIG1lc2gucm90YXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAuMSwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXNoID0gbWVzaDtcblxuICAgICAgICB0aGlzLnNldEl0ZW1zKHBsYXllckRhdGFiYXNlLml0ZW1zKTtcbiAgICAgICAgdGhpcy5tZXNoLnNrZWxldG9uLmJlZ2luQW5pbWF0aW9uKCdTaXQnKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckFjdGlvbnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SXRlbXMoaW52ZW50b3J5SXRlbXM6IFtdKSB7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSh0aGlzLmdhbWUsIHRoaXMpO1xuXG4gICAgICAgIGlmIChpbnZlbnRvcnlJdGVtcykge1xuICAgICAgICAgICAgbGV0IGl0ZW1NYW5hZ2VyID0gbmV3IEl0ZW1NYW5hZ2VyKHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICBpdGVtTWFuYWdlci5pbml0SXRlbXNGcm9tRGF0YWJhc2VPbkNoYXJhY3RlcihpbnZlbnRvcnlJdGVtcywgdGhpcy5pbnZlbnRvcnksIHRydWUpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVGcm9tV29ybGQoKSB7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyQWN0aW9ucygpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgcG9pbnRlck91dCA9IGZhbHNlO1xuICAgICAgICBsZXQgY2xpY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubWVzaEZvck1vdmUgPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUJveCh0aGlzLm5hbWUgKyAnX3NlbGVjdEJveCcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICB9LCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmNoZWNrQ29sbGlzaW9ucyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLnZpc2liaWxpdHkgPSAwO1xuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmlzUGlja2FibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLnBhcmVudCA9IHRoaXMubWVzaDtcbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS5wb3NpdGlvbi55ID0gMjtcblxuICAgICAgICBsZXQgc2l0RG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5za2VsZXRvbkFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBhbmltYXRpb25TZWxlY3RSYW5nZSA9IHNlbGYubWVzaC5za2VsZXRvbi5nZXRBbmltYXRpb25SYW5nZSgnU2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgc2VsZi5za2VsZXRvbkFuaW1hdGlvbiA9IHNlbGYuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5iZWdpbkFuaW1hdGlvbihzZWxmLm1lc2gsIGFuaW1hdGlvblNlbGVjdFJhbmdlLnRvLCBhbmltYXRpb25TZWxlY3RSYW5nZS5mcm9tICsgMSwgZmFsc2UsIC0xLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWVzaC5za2VsZXRvbi5iZWdpbkFuaW1hdGlvbignU2l0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2tlbGV0b25BbmltYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubWVzaEZvck1vdmUuYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIodGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS5pc1BpY2thYmxlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25Qb2ludGVyT3ZlclRyaWdnZXIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRlck91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5za2VsZXRvbkFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNrZWxldG9uQW5pbWF0aW9uID0gc2VsZi5tZXNoLnNrZWxldG9uLmJlZ2luQW5pbWF0aW9uKCdTZWxlY3QnLCBmYWxzZSwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5za2VsZXRvbkFuaW1hdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2ludGVyT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0RG93bigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1lc2guc2tlbGV0b24uYmVnaW5BbmltYXRpb24oQWJzdHJhY3RDaGFyYWN0ZXIuQU5JTUFUSU9OX1NUQU5EX1dFQVBPTiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKFxuICAgICAgICAgICAgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUG9pbnRlck91dFRyaWdnZXIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2l0RG93bigpO1xuICAgICAgICAgICAgICAgIHBvaW50ZXJPdXQgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25QaWNrRG93blRyaWdnZXIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFjbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdzZWxlY3RDaGFyYWN0ZXInLCBzZWxmLnBsYXllcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubWVzaEZvck1vdmUuYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihcbiAgICAgICAgICAgIEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBpY2tPdXRUcmlnZ2VyLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnc2VsZWN0Q2hhcmFjdGVyJywgc2VsZi5wbGF5ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25QaWNrVHJpZ2dlcixcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ3NlbGVjdENoYXJhY3RlcicsIHNlbGYucGxheWVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtDbGlja1BhcnRpY2xlc30gZnJvbSBcIi4uL1BhcnRpY2xlcy9Qb2ludGVyL0NsaWNrUGFydGljbGVzXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBNb3VzZSB7XG5cbiAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZTtcbiAgICBwdWJsaWMgdGFyZ2V0UG9pbnQ7XG4gICAgcHVibGljIGF0dGFja1BvaW50OiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJDb250cm9scyhzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBjbGlja1RyaWdnZXIgPSBmYWxzZTtcbiAgICAgICAgbGV0IGxhc3RVcGRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDA7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICBjb25zdCBjbGlja1BhcnRpY2xlU3lzdGVtID0gQ2xpY2tQYXJ0aWNsZXMuZ2V0UGFydGljbGVzKHNjZW5lKTtcblxuICAgICAgICBzY2VuZS5vblBvaW50ZXJVcCA9IGZ1bmN0aW9uIChldnQsIHBpY2tSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChjbGlja1RyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICBjbGlja1RyaWdnZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgcGlja2VkTWVzaCA9IHBpY2tSZXN1bHQucGlja2VkTWVzaDtcbiAgICAgICAgICAgICAgICBpZiAocGlja2VkTWVzaCAmJiAocGlja2VkTWVzaC5uYW1lLnNlYXJjaChcIkdyb3VuZFwiKSA+PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGlja1BhcnRpY2xlU3lzdGVtLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2NlbmUub25Qb2ludGVyRG93biA9IGZ1bmN0aW9uIChldnQsIHBpY2tSZXN1bHQpIHtcbiAgICAgICAgICAgIGxldCBwaWNrZWRNZXNoID0gcGlja1Jlc3VsdC5waWNrZWRNZXNoO1xuICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuYXR0YWNrQWN0aW9ucy5hYmJhZG9uTW9uc3RlckF0dGFjaygpO1xuXG4gICAgICAgICAgICBpZiAoIXNlbGYuZ2FtZS5wbGF5ZXIuaXNBbGl2ZSB8fCBnYW1lLnBsYXllci5pc0FueVNraWxsSXNJblVzZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xpY2tUcmlnZ2VyID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwaWNrZWRNZXNoICYmIChwaWNrZWRNZXNoLm5hbWUuc2VhcmNoKFwiR3JvdW5kXCIpID49IDApKSB7XG4gICAgICAgICAgICAgICAgc2NlbmUub25CZWZvcmVSZW5kZXJPYnNlcnZhYmxlLnJlbW92ZShnYW1lLmdldFNjZW5lTWFuZ2VyKCkuZ29Ub0FjdGlvbik7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmF0dGFja1BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxmLnRhcmdldFBvaW50ID0gcGlja1Jlc3VsdC5waWNrZWRQb2ludDtcbiAgICAgICAgICAgICAgICBzZWxmLnRhcmdldFBvaW50LnkgPSAwO1xuICAgICAgICAgICAgICAgIGNsaWNrUGFydGljbGVTeXN0ZW0uZW1pdHRlciA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoc2VsZi50YXJnZXRQb2ludC54LCAwLCBzZWxmLnRhcmdldFBvaW50LnopOyAvLyB0aGUgc3RhcnRpbmcgbG9jYXRpb25cblxuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZS5wbGF5ZXIucnVuUGxheWVyVG9Qb3NpdGlvbihzZWxmLnRhcmdldFBvaW50KTtcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdzZXRUYXJnZXRQb2ludCcsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHNlbGYudGFyZ2V0UG9pbnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzY2VuZS5vblBvaW50ZXJNb3ZlID0gZnVuY3Rpb24gKGV2dCwgcGlja1Jlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGNsaWNrVHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5nYW1lLnBsYXllci5pc0FsaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHBpY2tlZE1lc2ggPSBwaWNrUmVzdWx0LnBpY2tlZE1lc2g7XG4gICAgICAgICAgICAgICAgaWYgKHBpY2tlZE1lc2ggJiYgc2VsZi50YXJnZXRQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5nYW1lLnBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50YXJnZXRQb2ludCA9IHBpY2tSZXN1bHQucGlja2VkUG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRhcmdldFBvaW50LnkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tQYXJ0aWNsZVN5c3RlbS5lbWl0dGVyID0gbmV3IEJBQllMT04uVmVjdG9yMyhzZWxmLnRhcmdldFBvaW50LngsIDAsIHNlbGYudGFyZ2V0UG9pbnQueik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2FtZS5wbGF5ZXIucnVuUGxheWVyVG9Qb3NpdGlvbihzZWxmLnRhcmdldFBvaW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RVcGRhdGUgPCAobmV3IERhdGUoKS5nZXRUaW1lKCkgLyA1MDApIC0gMC4zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZSA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnc2V0VGFyZ2V0UG9pbnQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzZWxmLnRhcmdldFBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgR29kUmF5IHtcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUdvZFJheShnYW1lOiBHYW1lLCBtZXNoOiBCQUJZTE9OLkFic3RyYWN0TWVzaCkge1xuICAgICAgICBsZXQgZW5naW5lID0gZ2FtZS5lbmdpbmU7XG4gICAgICAgIGxldCBzY2VuZSA9IGdhbWUuZ2V0QmFieWxvblNjZW5lKCk7XG4gICAgICAgIGxldCBjYW1lcmEgPSBnYW1lLmdldEJhYnlsb25TY2VuZSgpLmdldENhbWVyYUJ5TmFtZSgnZ2FtZUNhbWVyYScpO1xuXG4gICAgICAgIGxldCBmaXJlTWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKFwiZ29kcmF5TWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgICAgICBsZXQgZmlyZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL1Ntb2tlMy5wbmdcIiwgc2NlbmUpO1xuICAgICAgICBmaXJlVGV4dHVyZS5oYXNBbHBoYSA9IHRydWU7XG4gICAgICAgIGZpcmVNYXRlcmlhbC5hbHBoYSA9IDAuMTtcbiAgICAgICAgZmlyZU1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSA9IGZpcmVUZXh0dXJlO1xuICAgICAgICBmaXJlTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUgPSBmaXJlVGV4dHVyZTtcbiAgICAgICAgZmlyZU1hdGVyaWFsLm9wYWNpdHlUZXh0dXJlID0gZmlyZVRleHR1cmU7XG5cbiAgICAgICAgZmlyZU1hdGVyaWFsLnNwZWN1bGFyUG93ZXIgPSAxO1xuICAgICAgICBmaXJlTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGJveCA9IEJBQllMT04uTWVzaC5DcmVhdGVQbGFuZShcImdvZFJheVBsYW5lXCIsIDE2LCBzY2VuZSwgdHJ1ZSk7XG4gICAgICAgIGJveC52aXNpYmlsaXR5ID0gMTtcbiAgICAgICAgYm94LnJvdGF0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygtTWF0aC5QSSAvIDIsIDAsIDApO1xuICAgICAgICBib3gubWF0ZXJpYWwgPSBmaXJlTWF0ZXJpYWw7XG4gICAgICAgIGJveC5sYXllck1hc2sgPSAyO1xuXG4gICAgICAgIGxldCBnb2RyYXlzID0gbmV3IEJBQllMT04uVm9sdW1ldHJpY0xpZ2h0U2NhdHRlcmluZ1Bvc3RQcm9jZXNzKCdnb2RyYXlzJywgMSwgY2FtZXJhLCBib3gsIDEyOCwgQkFCWUxPTi5UZXh0dXJlLkJJTElORUFSX1NBTVBMSU5HTU9ERSwgZW5naW5lLCBmYWxzZSk7XG4gICAgICAgIGdvZHJheXMudXNlQ3VzdG9tTWVzaFBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgZ29kcmF5cy5zZXRDdXN0b21NZXNoUG9zaXRpb24obmV3IEJBQllMT04uVmVjdG9yMygwLCAxNS4wLCAwKSk7XG5cbiAgICAgICAgZ29kcmF5cy5pbnZlcnQgPSBmYWxzZTtcbiAgICAgICAgZ29kcmF5cy5leHBvc3VyZSA9IDAuODtcbiAgICAgICAgZ29kcmF5cy5kZWNheSA9IDE7XG4gICAgICAgIGdvZHJheXMud2VpZ2h0ID0gMDtcbiAgICAgICAgZ29kcmF5cy5kZW5zaXR5ID0gMC41O1xuXG4gICAgICAgIGxldCBzdGFydEhpZGluZyA9IGZhbHNlO1xuICAgICAgICBsZXQgdGltZW91dEZ1bmN0aW9uO1xuICAgICAgICBjb25zdCBzaG93R29kUmF5ID0gKCkgPT4ge1xuICAgICAgICAgICAgYm94LnBvc2l0aW9uID0gbWVzaC5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICAgICAgYm94LnBvc2l0aW9uLnkgKz0gMC4xO1xuICAgICAgICAgICAgZ29kcmF5cy5zZXRDdXN0b21NZXNoUG9zaXRpb24obWVzaC5wb3NpdGlvbi5jbG9uZSgpKTtcbiAgICAgICAgICAgIGdvZHJheXMuY3VzdG9tTWVzaFBvc2l0aW9uLnkgPSAxNTtcbiAgICAgICAgICAgIGJveC5yb3RhdGUobmV3IEJBQllMT04uVmVjdG9yMygwLCA1LCAwKSwgMC4wMiwgQkFCWUxPTi5TcGFjZS5XT1JMRCk7XG5cbiAgICAgICAgICAgIGlmIChnb2RyYXlzLndlaWdodCA+PSAwLjMgJiYgIXRpbWVvdXRGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHRpbWVvdXRGdW5jdGlvbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEhpZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFydEhpZGluZykge1xuICAgICAgICAgICAgICAgIGdvZHJheXMud2VpZ2h0IC09IDAuMDE7XG4gICAgICAgICAgICAgICAgaWYgKGdvZHJheXMud2VpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZ29kcmF5cy5kaXNwb3NlKGNhbWVyYSk7XG4gICAgICAgICAgICAgICAgICAgIGJveC5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLnVucmVnaXN0ZXJCZWZvcmVSZW5kZXIoc2hvd0dvZFJheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChnb2RyYXlzLndlaWdodCA8PSAwLjMpIHtcbiAgICAgICAgICAgICAgICBnb2RyYXlzLndlaWdodCArPSAwLjAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzY2VuZS5yZWdpc3RlckJlZm9yZVJlbmRlcihzaG93R29kUmF5KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0NvbGxpc2lvbnN9IGZyb20gXCIuLi9Jbml0aWFsaXplcnMvQ29sbGlzaW9uc1wiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RFbnZpcm9ubWVudCB7XG5cbiAgICBwdWJsaWMgbGlnaHQ6IEJBQllMT04uRGlyZWN0aW9uYWxMaWdodDtcbiAgICBwdWJsaWMgc3RhdGljU2hhZG93T2JqZWN0cztcbiAgICBwdWJsaWMgZ3JvdW5kOiBCQUJZTE9OLk1lc2g7XG4gICAgcHJvdGVjdGVkIGNvbGxpZGVycztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXRpY1NoYWRvd09iamVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsaWRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRGVmYXVsdExpZ2h0KHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIGxldCBsaWdodCA9IG5ldyBCQUJZTE9OLkRpcmVjdGlvbmFsTGlnaHQoXCJEaXJlY3Rpb25hbExpZ2h0XCIsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgLTEsIDApLCBzY2VuZSk7XG4gICAgICAgIGxpZ2h0LmludGVuc2l0eSA9IDAuNjtcbiAgICAgICAgbGlnaHQucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUwLCAwKTtcbiAgICAgICAgbGlnaHQuZGlyZWN0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLjQ1LCAtMi41LCAwKTtcbiAgICAgICAgbGlnaHQuc2hhZG93TWF4WiA9IDUwMDtcblxuICAgICAgICB0aGlzLmxpZ2h0ID0gbGlnaHQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyQ29sbGlkZXJzKHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xsaWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNjZW5lTWVzaENvbGxpZGVyID0gdGhpcy5jb2xsaWRlcnNbaV07XG4gICAgICAgICAgICBDb2xsaXNpb25zLnNldENvbGxpZGVyKHNjZW5lLCBzY2VuZU1lc2hDb2xsaWRlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZnJlZXplQWxsTWVzaGVzKHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmUubWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2NlbmVNZXNoID0gc2NlbmUubWVzaGVzW2ldO1xuICAgICAgICAgICAgc2NlbmVNZXNoLmZyZWV6ZVdvcmxkTWF0cml4KCk7XG4gICAgICAgICAgICBzY2VuZU1lc2guY3VsbGluZ1N0cmF0ZWd5ID0gQkFCWUxPTi5BYnN0cmFjdE1lc2guQ1VMTElOR1NUUkFURUdZX09QVElNSVNUSUNfSU5DTFVTSU9OX1RIRU5fQlNQSEVSRV9PTkxZO1xuXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFic3RyYWN0IGNyZWF0ZVN0ZWNuaWwoc2NlbmU6IEJBQllMT04uU2NlbmUpO1xufVxuIiwiaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tIFwiYmFieWxvbmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBGb2cge1xuICAgIHN0YXRpYyBhZGRGb2coc2NlbmUpIHtcbiAgICAgICAgc2NlbmUuZm9nTW9kZSA9IEJBQllMT04uU2NlbmUuRk9HTU9ERV9MSU5FQVI7XG4gICAgICAgIHNjZW5lLmZvZ0NvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKDAsIDAsIDApO1xuICAgICAgICBzY2VuZS5mb2dEZW5zaXR5ID0gMTtcblxuICAgICAgICBzY2VuZS5mb2dTdGFydCA9IDMwO1xuICAgICAgICBzY2VuZS5mb2dFbmQgPSA1MDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzYWJsZUZvZyhzY2VuZTpCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIHNjZW5lLmZvZ01vZGUgPSBCQUJZTE9OLlNjZW5lLkZPR01PREVfTk9ORTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Fic3RyYWN0RW52aXJvbm1lbnR9IGZyb20gXCIuL0Fic3RyYWN0RW52aXJvbm1lbnRcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7TmF0dXJlfSBmcm9tIFwiLi4vUGFydGljbGVzL1NvbGlkUGFydGljbGVTeXN0ZW0vTmF0dXJlXCI7XG5pbXBvcnQge05hdHVyZUJsb2NrfSBmcm9tIFwiLi4vUGFydGljbGVzL1NvbGlkUGFydGljbGVTeXN0ZW0vTmF0dXJlQmxvY2tcIjtcbmltcG9ydCB7VGVycmFpbk1hdGVyaWFsfSBmcm9tICdiYWJ5bG9uanMtbWF0ZXJpYWxzJztcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50Rm9yZXN0SG91c2UgZXh0ZW5kcyBBYnN0cmFjdEVudmlyb25tZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBnYW1lLmdldEJhYnlsb25TY2VuZSgpO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzcHNUcmVlcyA9IFtdO1xuICAgICAgICBsZXQgc3BzUGxhbnRzID0gW107XG4gICAgICAgIGxldCBzcHNTdG9uZXMgPSBbXTtcbiAgICAgICAgbGV0IHNwc0Zlcm4gPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjZW5lLm1lc2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNjZW5lTWVzaCA9IDxCQUJZTE9OLk1lc2g+IHNjZW5lLm1lc2hlc1tpXTtcbiAgICAgICAgICAgIGxldCBtZXNoTmFtZSA9IHNjZW5lLm1lc2hlc1tpXVsnbmFtZSddO1xuXG4gICAgICAgICAgICBpZiAobWVzaE5hbWUuc2VhcmNoKFwiR3JvdW5kXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2guYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIoc2NlbmUpO1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5yZWNlaXZlU2hhZG93cyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZCA9IHNjZW5lTWVzaDtcblxuICAgICAgICAgICAgICAgIGxldCB0ZXJyYWluTWF0ZXJpYWwgPSBuZXcgVGVycmFpbk1hdGVyaWFsKFwidGVycmFpbk1hdGVyaWFsXCIsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygwLjUsIDAuNSwgMC41KTtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuc3BlY3VsYXJQb3dlciA9IDY0O1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5taXhUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9zY2VuZXMvRm9yZXN0X2hvdXNlL3N0ZW5jaWwucG5nXCIsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUxID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9zY2VuZXMvRm9yZXN0X2hvdXNlL0dyYXNzX3NlYW1sZXNzX3NhdHVyYXRpb24uanBnXCIsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUyID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9zY2VuZXMvRm9yZXN0X2hvdXNlL2RpcnQuanBnXCIsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUzID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9zY2VuZXMvRm9yZXN0X2hvdXNlL2dyb3VuZFNlYW1sZXNzLmpwZ1wiLCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMS51U2NhbGUgPSB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUxLnZTY2FsZSA9IDEwO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTIudVNjYWxlID0gdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMi52U2NhbGUgPSAxMDtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUzLnVTY2FsZSA9IHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTMudlNjYWxlID0gMTU7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLm1hdGVyaWFsID0gdGVycmFpbk1hdGVyaWFsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNoTmFtZS5zZWFyY2goXCJCb3hfQ3ViZVwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlcnMucHVzaChzY2VuZU1lc2gpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNoTmFtZS5zZWFyY2goXCJzcHNfdHJlZXNcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgIHNwc1RyZWVzLnB1c2goc2NlbmVNZXNoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzaE5hbWUuc2VhcmNoKFwic3BzX2dyb3VuZFBsYW50c1wiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgc3BzUGxhbnRzLnB1c2goc2NlbmVNZXNoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzaE5hbWUuc2VhcmNoKFwic3BzX3N0b25lc1wiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgc3BzU3RvbmVzLnB1c2goc2NlbmVNZXNoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzaE5hbWUuc2VhcmNoKFwic3BzX2Zlcm5cIikgPj0gMCkge1xuICAgICAgICAgICAgICAgIHNwc0Zlcm4ucHVzaChzY2VuZU1lc2gpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2guaXNQaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhdGljU2hhZG93T2JqZWN0cy5wdXNoKHNjZW5lTWVzaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL1NQUyBOYXR1cmVcbiAgICAgICAgbGV0IHNwcnVjZSA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5hc3NldHMubmF0dXJlR3JhaW4uY3JlYXRlQ2xvbmUoJ3NwcnVjZScsIGZhbHNlKTtcbiAgICAgICAgc3BydWNlLnZpc2liaWxpdHkgPSAwO1xuICAgICAgICBzcHJ1Y2UubWF0ZXJpYWwuZnJlZXplKCk7XG5cbiAgICAgICAgbGV0IGdyb3VuZFBsYW50cyA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5hc3NldHMubmF0dXJlR3JhaW4uY3JlYXRlQ2xvbmUoJ2dyb3VuZF9wbGFudHMnLCBmYWxzZSk7XG4gICAgICAgIGdyb3VuZFBsYW50cy52aXNpYmlsaXR5ID0gMDtcbiAgICAgICAgZ3JvdW5kUGxhbnRzLm1hdGVyaWFsLmZyZWV6ZSgpO1xuXG4gICAgICAgIGxldCBmZXJuID0gZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmFzc2V0cy5uYXR1cmVHcmFpbi5jcmVhdGVDbG9uZSgnZmVybicsIGZhbHNlKTtcbiAgICAgICAgZmVybi52aXNpYmlsaXR5ID0gMDtcbiAgICAgICAgZmVybi5tYXRlcmlhbC5mcmVlemUoKTtcblxuICAgICAgICBsZXQgc3RvbmUgPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuYXNzZXRzLm5hdHVyZUdyYWluLmNyZWF0ZUNsb25lKCdzdG9uZScsIGZhbHNlKTtcbiAgICAgICAgc3RvbmUudmlzaWJpbGl0eSA9IDA7XG4gICAgICAgIHN0b25lLm1hdGVyaWFsLmZyZWV6ZSgpO1xuXG4gICAgICAgIHNwc1RyZWVzLmZvckVhY2goZnVuY3Rpb24gKHBhcmVudFNQUykge1xuICAgICAgICAgICAgbGV0IHNwc1NwcnVjZSA9IG5ldyBOYXR1cmUoZ2FtZSwgcGFyZW50U1BTLCBzcHJ1Y2UsIGZhbHNlKTtcbiAgICAgICAgICAgIHNwc1NwcnVjZS5idWlsZFNQUyg2Nyk7XG4gICAgICAgICAgICBzZWxmLnN0YXRpY1NoYWRvd09iamVjdHMucHVzaChzcHNTcHJ1Y2Uuc3BzTWVzaCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNwc1BsYW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJlbnRTUFMpIHtcbiAgICAgICAgICAgIGxldCBzcHNTcHJ1Y2UgPSBuZXcgTmF0dXJlKGdhbWUsIHBhcmVudFNQUywgZ3JvdW5kUGxhbnRzLCBmYWxzZSk7XG4gICAgICAgICAgICBzcHNTcHJ1Y2UuYnVpbGRTUFMoNDApO1xuICAgICAgICAgICAgc2VsZi5zdGF0aWNTaGFkb3dPYmplY3RzLnB1c2goc3BzU3BydWNlLnNwc01lc2gpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzcHNTdG9uZXMuZm9yRWFjaChmdW5jdGlvbiAocGFyZW50U1BTKSB7XG4gICAgICAgICAgICBsZXQgc3BzU3BydWNlID0gbmV3IE5hdHVyZShnYW1lLCBwYXJlbnRTUFMsIHN0b25lLCBmYWxzZSk7XG4gICAgICAgICAgICBzcHNTcHJ1Y2UuYnVpbGRTUFMoNjcpO1xuICAgICAgICAgICAgc2VsZi5zdGF0aWNTaGFkb3dPYmplY3RzLnB1c2goc3BzU3BydWNlLnNwc01lc2gpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzcHNGZXJuLmZvckVhY2goZnVuY3Rpb24gKHBhcmVudFNQUykge1xuICAgICAgICAgICAgbGV0IHNwc1NwcnVjZSA9IG5ldyBOYXR1cmUoZ2FtZSwgcGFyZW50U1BTLCBmZXJuLCBmYWxzZSk7XG4gICAgICAgICAgICBzcHNTcHJ1Y2UuYnVpbGRTUFMoNjcpO1xuICAgICAgICAgICAgc2VsZi5zdGF0aWNTaGFkb3dPYmplY3RzLnB1c2goc3BzU3BydWNlLnNwc01lc2gpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgc3BzVG9CbG9jayA9IHNjZW5lLmdldE1lc2hCeU5hbWUoXCJzcHNfYm9yZGVyXCIpO1xuICAgICAgICBsZXQgc3BzU3BydWNlQmxvY2sgPSBuZXcgTmF0dXJlQmxvY2soZ2FtZSwgc3BzVG9CbG9jaywgc3BydWNlKTtcbiAgICAgICAgc3BzU3BydWNlQmxvY2suYnVpbGRTUFMoNTAwKTtcbiAgICAgICAgc2VsZi5zdGF0aWNTaGFkb3dPYmplY3RzLnB1c2goc3BzU3BydWNlQmxvY2suc3BzTWVzaCk7XG5cbiAgICAgICAgc3RvbmUuZGlzcG9zZSgpO1xuICAgICAgICBzcHJ1Y2UuZGlzcG9zZSgpO1xuICAgICAgICBncm91bmRQbGFudHMuZGlzcG9zZSgpO1xuICAgICAgICBmZXJuLmRpc3Bvc2UoKTtcblxuICAgICAgICBsZXQgbGlnaHQgPSBuZXcgQkFCWUxPTi5EaXJlY3Rpb25hbExpZ2h0KFwiRGlyZWN0aW9uYWxMaWdodFwiLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC0xLCAwKSwgc2NlbmUpO1xuICAgICAgICBsaWdodC5pbnRlbnNpdHkgPSAwLjQ7XG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCA1MCwgMCk7XG4gICAgICAgIGxpZ2h0LmRpcmVjdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMC40NSwgLTIuNSwgMCk7XG4gICAgICAgIGxpZ2h0LnNoYWRvd01heFogPSA1MDA7XG4gICAgICAgIHRoaXMubGlnaHQgPSBsaWdodDtcblxuXG4gICAgICAgIC8vL3JlZ2lzdGVyIGNvbGxpZGVyc1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29sbGlkZXJzKHNjZW5lKTtcbiAgICAgICAgdGhpcy5mcmVlemVBbGxNZXNoZXMoc2NlbmUpO1xuXG4gICAgICAgIG5ldyBCQUJZTE9OLlNvdW5kKFwiRm9yZXN0IG5pZ2h0XCIsIFwiYXNzZXRzL3NvdW5kcy9meC93aW5kLm1wM1wiLCBzY2VuZSwgbnVsbCwge1xuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgdm9sdW1lOiAwLjFcbiAgICAgICAgfSk7XG4gICAgICAgIG5ldyBCQUJZTE9OLlNvdW5kKFwiRm9yZXN0IG5pZ2h0XCIsIFwiYXNzZXRzL3NvdW5kcy9mb3Jlc3RfbmlnaHQubXAzXCIsIHNjZW5lLCBudWxsLCB7XG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICB2b2x1bWU6IDAuM1xuICAgICAgICB9KTtcblxuICAgICAgICBzY2VuZS5nZXRNZXNoQnlOYW1lKCdleGl0JykuZGlzcG9zZSgpO1xuXG4gICAgICAgIHZhciBleGl0UGxhbmUgPSBzY2VuZS5nZXRNZXNoQnlOYW1lKCdFbnRyYWNlX1RvbWInKS5jbG9uZShcImV4aXRcIiwgbnVsbCk7XG4gICAgICAgIGV4aXRQbGFuZS5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoLTE5Ni43OCwwLC05NS42KTtcbiAgICAgICAgZXhpdFBsYW5lLnJvdGF0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLC0xLjUsMCk7XG4gICAgfVxuXG4gICAgY3JlYXRlU3RlY25pbChzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgIH1cblxuXG5cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RFbnZpcm9ubWVudH0gZnJvbSBcIi4vQWJzdHJhY3RFbnZpcm9ubWVudFwiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnRGb3Jlc3RIb3VzZVN0YXJ0IGV4dGVuZHMgQWJzdHJhY3RFbnZpcm9ubWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjZW5lLm1lc2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNjZW5lTWVzaCA9IHNjZW5lLm1lc2hlc1tpXTtcbiAgICAgICAgICAgIGxldCBtZXNoTmFtZSA9IHNjZW5lLm1lc2hlc1tpXVsnbmFtZSddO1xuXG4gICAgICAgICAgICBpZiAobWVzaE5hbWUuc2VhcmNoKFwiR3JvdW5kXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2guYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIoc2NlbmUpO1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5yZWNlaXZlU2hhZG93cyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc2hOYW1lLnNlYXJjaChcIkJveF9DdWJlXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVycy5wdXNoKHNjZW5lTWVzaCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5pc1BpY2thYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFkb3dPYmplY3RzLnB1c2goc2NlbmVNZXNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsaWdodCA9IG5ldyBCQUJZTE9OLkRpcmVjdGlvbmFsTGlnaHQoXCJEaXJlY3Rpb25hbExpZ2h0XCIsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgLTEsIDApLCBzY2VuZSk7XG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCA4MCwgLTIxMCk7XG4gICAgICAgIGxpZ2h0LmRpcmVjdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMC40NSwgLTAuNDUsIDAuNDUpO1xuICAgICAgICBsaWdodC5zaGFkb3dNYXhaID0gNTAwO1xuICAgICAgICBsaWdodC5hdXRvVXBkYXRlRXh0ZW5kcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpZ2h0ID0gbGlnaHQ7XG5cbiAgICAgICAgdGhpcy5mcmVlemVBbGxNZXNoZXMoc2NlbmUpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29sbGlkZXJzKHNjZW5lKTtcblxuICAgICAgICBuZXcgQkFCWUxPTi5Tb3VuZChcIkZvcmVzdCBuaWdodFwiLCBcImFzc2V0cy9zb3VuZHMvZngvd2luZC5tcDNcIiwgc2NlbmUsIG51bGwsIHtcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIHZvbHVtZTogMC4zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZVN0ZWNuaWwoc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICB9XG5cblxuXG59XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge0Fic3RyYWN0RW52aXJvbm1lbnR9IGZyb20gXCIuL0Fic3RyYWN0RW52aXJvbm1lbnRcIjtcbmltcG9ydCB7Q29sbGlzaW9uc30gZnJvbSBcIi4uL0luaXRpYWxpemVycy9Db2xsaXNpb25zXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudEZvcmVzdEhvdXNlVG9tYiBleHRlbmRzIEFic3RyYWN0RW52aXJvbm1lbnR7XG5cbiAgICBjb2xsaWRlcnM6IEFycmF5PEJBQllMT04uQWJzdHJhY3RNZXNoPjtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jb2xsaWRlcnMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjZW5lLm1lc2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNjZW5lTWVzaCA9IDxCQUJZTE9OLk1lc2g+IHNjZW5lLm1lc2hlc1tpXTtcbiAgICAgICAgICAgIGxldCBtZXNoTmFtZSA9IHNjZW5lLm1lc2hlc1tpXVsnbmFtZSddO1xuXG4gICAgICAgICAgICBpZiAobWVzaE5hbWUuc2VhcmNoKFwiR3JvdW5kXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2guYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIoc2NlbmUpO1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5yZWNlaXZlU2hhZG93cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy9UT0RPOiBmaXggbWF0ZXJpYWxcbiAgICAgICAgICAgICAgICAvLyBzY2VuZU1lc2gubWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUudVNjYWxlID0gMS4yO1xuICAgICAgICAgICAgICAgIC8vIHNjZW5lTWVzaC5tYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS52U2NhbGUgPSAxLjI7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZCA9IHNjZW5lTWVzaDtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNoTmFtZS5zZWFyY2goXCJCb3hfQ3ViZVwiKSA+PSAwKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVycy5wdXNoKHNjZW5lTWVzaCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLmlzUGlja2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgdmFyIGxpZ2h0ID0gbmV3IEJBQllMT04uRGlyZWN0aW9uYWxMaWdodChcIkRpcmVjdGlvbmFsTGlnaHRcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAtMSwgMCksIHNjZW5lKTtcbiAgICAgICAgbGlnaHQuaW50ZW5zaXR5ID0gMC40O1xuICAgICAgICBsaWdodC5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgODAsIC0yMTApO1xuICAgICAgICBsaWdodC5kaXJlY3Rpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAuNDUsIC0wLjQ1LCAwLjQ1KTtcblxuICAgICAgICAvLy9yZWdpc3RlciBjb2xsaWRlcnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbGxpZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNjZW5lTWVzaENvbGxpZGVyID0gdGhpcy5jb2xsaWRlcnNbaV07XG4gICAgICAgICAgICBDb2xsaXNpb25zLnNldENvbGxpZGVyKHNjZW5lLCBzY2VuZU1lc2hDb2xsaWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvL0ZyZWV6ZSB3b3JsZCBtYXRyaXggYWxsIHN0YXRpYyBtZXNoZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuZS5tZXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNjZW5lLm1lc2hlc1tpXS5mcmVlemVXb3JsZE1hdHJpeCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlU3RlY25pbChzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgIH1cblxuXG5cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RFbnZpcm9ubWVudH0gZnJvbSBcIi4vQWJzdHJhY3RFbnZpcm9ubWVudFwiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuaW1wb3J0IHtUZXJyYWluTWF0ZXJpYWx9IGZyb20gJ2JhYnlsb25qcy1tYXRlcmlhbHMnO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnRNb3VudGFpbnNQYXNzIGV4dGVuZHMgQWJzdHJhY3RFbnZpcm9ubWVudCB7XG5cbiAgICBjb2xsaWRlcnM6IEFycmF5PEJBQllMT04uQWJzdHJhY3RNZXNoPjtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBnYW1lLmdldEJhYnlsb25TY2VuZSgpO1xuICAgICAgICB0aGlzLmNvbGxpZGVycyA9IFtdO1xuICAgICAgICBzY2VuZS5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAtOS44MSwgMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmUubWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2NlbmVNZXNoID0gc2NlbmUubWVzaGVzW2ldO1xuICAgICAgICAgICAgbGV0IG1lc2hOYW1lID0gc2NlbmUubWVzaGVzW2ldWyduYW1lJ107XG4gICAgICAgICAgICBpZiAobWVzaE5hbWUuc2VhcmNoKFwiR3JvdW5kXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2guYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIoc2NlbmUpO1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5yZWNlaXZlU2hhZG93cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLmFsd2F5c1NlbGVjdEFzQWN0aXZlTWVzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IHRlcnJhaW5NYXRlcmlhbCA9IG5ldyBUZXJyYWluTWF0ZXJpYWwoXCJ0ZXJyYWluTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKDAuNSwgMC41LCAwLjUpO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5zcGVjdWxhclBvd2VyID0gNjQ7XG4gICAgICAgICAgICAgICAgdGVycmFpbk1hdGVyaWFsLm1peFRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL3NjZW5lcy9Nb3VudGFpbnNQYXNzL3N0ZW5jaWwuanBnXCIsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUxID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9zY2VuZXMvRm9yZXN0X2hvdXNlL0dyYXNzX3NlYW1sZXNzX3NhdHVyYXRpb24uanBnXCIsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUyID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9zY2VuZXMvRm9yZXN0X2hvdXNlL2RpcnQuanBnXCIsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUzID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9zY2VuZXMvRm9yZXN0X2hvdXNlL0dyYXNzX3NlYW1sZXNzX3NhdHVyYXRpb24uanBnXCIsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUxLnVTY2FsZSA9IHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTEudlNjYWxlID0gMjA7XG4gICAgICAgICAgICAgICAgdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMi51U2NhbGUgPSB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUyLnZTY2FsZSA9IDIwO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTMudVNjYWxlID0gdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMy52U2NhbGUgPSAyMDtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2gubWF0ZXJpYWwgPSB0ZXJyYWluTWF0ZXJpYWw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc2hOYW1lLnNlYXJjaChcIkJveF9DdWJlXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVycy5wdXNoKHNjZW5lTWVzaCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5pc1BpY2thYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAobWVzaE5hbWUuc2VhcmNoKFwiUm9ja1wiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhZG93T2JqZWN0cy5wdXNoKHNjZW5lTWVzaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgY29uZSA9IHNjZW5lLmdldE1lc2hCeU5hbWUoXCJmaXJlcGxhY2UuMDAyXCIpO1xuICAgICAgICAvLyBpZiAoY29uZSkge1xuICAgICAgICAvLyAgICAgbGV0IHNtb2tlU3lzdGVtID0gbmV3IFBhcnRpY2xlcy5GaXJlcGxhY2VTbW9rZShnYW1lLCBjb25lKS5wYXJ0aWNsZVN5c3RlbTtcbiAgICAgICAgLy8gICAgIHNtb2tlU3lzdGVtLnN0YXJ0KCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBsZXQgZmlyZVN5c3RlbSA9IG5ldyBQYXJ0aWNsZXMuRmlyZXBsYWNlRmlyZShnYW1lLCBjb25lKS5wYXJ0aWNsZVN5c3RlbTtcbiAgICAgICAgLy8gICAgIGZpcmVTeXN0ZW0uc3RhcnQoKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGxldCBzZnhGaXJlcGxhY2UgPSBuZXcgQkFCWUxPTi5Tb3VuZChcIkZpcmVcIiwgXCJhc3NldHMvc291bmRzL2ZpcmVwbGFjZS5tcDNcIiwgc2NlbmUsIG51bGwsIHsgbG9vcDogdHJ1ZSwgYXV0b3BsYXk6IHRydWUgfSk7XG4gICAgICAgIC8vICAgICBzZnhGaXJlcGxhY2UuYXR0YWNoVG9NZXNoKGNvbmUpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy9UT0RPOiBkZWxldGUgaW4gYmxlZG5lclxuICAgICAgICAvLyBzY2VuZS5nZXRMaWdodEJ5TmFtZSgnTGFtcCcpLmRpc3Bvc2UoKTtcblxuICAgICAgICBsZXQgbGlnaHQgPSBuZXcgQkFCWUxPTi5EaXJlY3Rpb25hbExpZ2h0KFwiRGlyZWN0aW9uYWxMaWdodFwiLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC0xLCAwKSwgc2NlbmUpO1xuICAgICAgICBsaWdodC5pbnRlbnNpdHkgPSAwLjY7XG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCA1MCwgMCk7XG4gICAgICAgIGxpZ2h0LmRpcmVjdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMC40NSwgLTIuNSwgMCk7XG4gICAgICAgIGxpZ2h0LnNoYWRvd01heFogPSA1MDA7XG4gICAgICAgIHRoaXMubGlnaHQgPSBsaWdodDtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29sbGlkZXJzKHNjZW5lKTtcbiAgICAgICAgdGhpcy5mcmVlemVBbGxNZXNoZXMoc2NlbmUpO1xuICAgIH1cblxuICAgIGNyZWF0ZVN0ZWNuaWwoc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtGaXJlcGxhY2VTbW9rZX0gZnJvbSBcIi4uL1BhcnRpY2xlcy9GaXJlcGxhY2VTbW9rZVwiO1xuaW1wb3J0IHtGaXJlcGxhY2VGaXJlfSBmcm9tIFwiLi4vUGFydGljbGVzL0ZpcmVwbGFjZUZpcmVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50U2VsZWN0Q2hhcmFjdGVyIHtcblxuICAgIHNoYWRvd0dlbmVyYXRvcjogQkFCWUxPTi5TaGFkb3dHZW5lcmF0b3I7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOkdhbWUsIHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIC8vLy9MSUdIVFxuICAgICAgICBsZXQgbGlnaHQgPSBnYW1lLmdldEJhYnlsb25TY2VuZSgpLmxpZ2h0c1swXTtcbiAgICAgICAgbGlnaHQuZGlzcG9zZSgpO1xuICAgICAgICBsZXQgZmlyZXBsYWNlTGlnaHQgPSBuZXcgQkFCWUxPTi5Qb2ludExpZ2h0KFwiZmlyZXBsYWNlTGlnaHRcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAyLjUsIDApLCBzY2VuZSk7XG4gICAgICAgIGZpcmVwbGFjZUxpZ2h0LmRpZmZ1c2UgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMSwgMC43LCAwLjMpO1xuICAgICAgICBmaXJlcGxhY2VMaWdodC5yYW5nZSA9IDUwO1xuXG4gICAgICAgIGxldCBpbnRlbnNpdHlBbmltYXRpb24gPSBuZXcgQkFCWUxPTi5BbmltYXRpb24oXG4gICAgICAgICAgICBcIm1haW5MaWdodEludGVuc2l0eVwiLFxuICAgICAgICAgICAgXCJpbnRlbnNpdHlcIixcbiAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgQkFCWUxPTi5BbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCxcbiAgICAgICAgICAgIEJBQllMT04uQW5pbWF0aW9uLkFOSU1BVElPTkxPT1BNT0RFX0NZQ0xFKTtcbiAgICAgICAgaW50ZW5zaXR5QW5pbWF0aW9uLnNldEtleXMoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyYW1lOiAwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAwLjg1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyYW1lOiA1LFxuICAgICAgICAgICAgICAgIHZhbHVlOiAwLjlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJhbWU6IDEwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAwLjgyXG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuXG4gICAgICAgIGxldCBjb2xvckFuaW1hdGlvbiA9IG5ldyBCQUJZTE9OLkFuaW1hdGlvbihcbiAgICAgICAgICAgIFwibWFpbkxpZ2h0Q29sb3JcIixcbiAgICAgICAgICAgIFwic3BlY3VsYXJcIixcbiAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgQkFCWUxPTi5BbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCxcbiAgICAgICAgICAgIEJBQllMT04uQW5pbWF0aW9uLkFOSU1BVElPTkxPT1BNT0RFX0NZQ0xFKTtcbiAgICAgICAgY29sb3JBbmltYXRpb24uc2V0S2V5cyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJhbWU6IDIwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgQkFCWUxPTi5Db2xvcjMoMSwgMSwgMSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyYW1lOiAyNSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IEJBQllMT04uQ29sb3IzKDEsIDAsIDEpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcmFtZTogMzAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBCQUJZTE9OLkNvbG9yMygxLCAxLCAxKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgZmlyZXBsYWNlTGlnaHQuYW5pbWF0aW9ucyA9IFtdO1xuICAgICAgICBmaXJlcGxhY2VMaWdodC5hbmltYXRpb25zLnB1c2goaW50ZW5zaXR5QW5pbWF0aW9uKTtcbiAgICAgICAgZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5iZWdpbkFuaW1hdGlvbihmaXJlcGxhY2VMaWdodCwgMCwgMTAsIHRydWUpO1xuICAgICAgICBsZXQgc2hhZG93R2VuZXJhdG9yID0gbmV3IEJBQllMT04uU2hhZG93R2VuZXJhdG9yKDEwMjQsIGZpcmVwbGFjZUxpZ2h0KTtcbiAgICAgICAgc2hhZG93R2VuZXJhdG9yLmdldFNoYWRvd01hcCgpLnJlZnJlc2hSYXRlID0gMDtcbiAgICAgICAgdGhpcy5zaGFkb3dHZW5lcmF0b3IgPSBzaGFkb3dHZW5lcmF0b3I7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuZS5tZXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzY2VuZU1lc2ggPSBzY2VuZS5tZXNoZXNbaV07XG4gICAgICAgICAgICBsZXQgbWVzaE5hbWUgPSBzY2VuZS5tZXNoZXNbaV1bJ25hbWUnXTtcblxuICAgICAgICAgICAgaWYgKG1lc2hOYW1lLnNlYXJjaChcIkZvcmVzdF9ncm91bmRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihzY2VuZSk7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLnJlY2VpdmVTaGFkb3dzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvL1RPRE86IGZpeCBjb2xvclxuICAgICAgICAgICAgICAgIC8vIHNjZW5lTWVzaC5tYXRlcmlhbC5lbWlzc2l2ZUNvbG9yID0gbmV3IEJBQllMT04uVmVjdG9yMygwLjA1LDAuMDUsMC4wNSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGFkb3dHZW5lcmF0b3IuZ2V0U2hhZG93TWFwKCkucmVuZGVyTGlzdC5wdXNoKHNjZW5lTWVzaCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb25lID0gPEJBQllMT04uTWVzaD4gc2NlbmUuZ2V0TWVzaEJ5TmFtZShcIkZpcmVwbGFjZVwiKTtcbiAgICAgICAgaWYgKGNvbmUpIHtcbiAgICAgICAgICAgIGZpcmVwbGFjZUxpZ2h0LnBhcmVudCA9IGNvbmU7XG4gICAgICAgICAgICBsZXQgc21va2VTeXN0ZW0gPSBuZXcgRmlyZXBsYWNlU21va2UoZ2FtZSwgY29uZSkucGFydGljbGVTeXN0ZW07XG4gICAgICAgICAgICBzbW9rZVN5c3RlbS5zdGFydCgpO1xuXG4gICAgICAgICAgICBsZXQgZmlyZVN5c3RlbSA9IG5ldyBGaXJlcGxhY2VGaXJlKGdhbWUsIGNvbmUpLnBhcnRpY2xlU3lzdGVtO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5zdGFydCgpO1xuXG4gICAgICAgICAgICBsZXQgc2Z4RmlyZXBsYWNlID0gbmV3IEJBQllMT04uU291bmQoXCJGaXJlXCIsIFwiYXNzZXRzL3NvdW5kcy9maXJlcGxhY2UubXAzXCIsIHNjZW5lLCBudWxsLCB7IGxvb3A6IHRydWUsIGF1dG9wbGF5OiB0cnVlIH0pO1xuICAgICAgICAgICAgc2Z4RmlyZXBsYWNlLmF0dGFjaFRvTWVzaChjb25lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmUubWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2NlbmVNZXNoID0gc2NlbmUubWVzaGVzW2ldO1xuICAgICAgICAgICAgc2NlbmVNZXNoLmZyZWV6ZVdvcmxkTWF0cml4KCk7XG4gICAgICAgICAgICBzY2VuZU1lc2guaXNQaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3IEJBQllMT04uU291bmQoXCJGb3Jlc3QgbmlnaHRcIiwgXCJhc3NldHMvc291bmRzL211c2ljL3RoZW1lLm1wM1wiLCBzY2VuZSwgbnVsbCwgeyBsb29wOiB0cnVlLCBhdXRvcGxheTogdHJ1ZSwgdm9sdW1lOiAxIH0pO1xuXG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEV2ZW50cyB7XG4gICAgc3RhdGljIFBMQVlFUl9DT05ORUNURUQgPSAncGxheWVyQ29ubmVjdGVkJztcbiAgICBwdWJsaWMgcGxheWVyQ29ubmVjdGVkOkV2ZW50O1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJDb25uZWN0ZWQgPSBuZXcgRXZlbnQoRXZlbnRzLlBMQVlFUl9DT05ORUNURUQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7UGxheWVyQm90dG9tUGFuZWx9IGZyb20gXCIuL1BsYXllckJvdHRvbVBhbmVsXCI7XG5pbXBvcnQge1BsYXllclF1ZXN0c1BhbmVsfSBmcm9tIFwiLi9QbGF5ZXJRdWVzdHNQYW5lbFwiO1xuaW1wb3J0IHtQbGF5ZXJRdWVzdEluZm9ybWF0aW9ufSBmcm9tIFwiLi9QbGF5ZXJRdWVzdEluZm9ybWF0aW9uXCI7XG5pbXBvcnQge1Jvb21JbmZvcm1hdGlvbn0gZnJvbSBcIi4vUm9vbUluZm9ybWF0aW9uXCI7XG5pbXBvcnQge1Nob3dIcH0gZnJvbSBcIi4vU2hvd0hwXCI7XG5pbXBvcnQge09wdGlvbnN9IGZyb20gXCIuL3BvcHVwL09wdGlvbnNcIjtcbmltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi9wb3B1cC9JbnZlbnRvcnlcIjtcbmltcG9ydCB7QXR0cmlidXRlc30gZnJvbSBcIi4vcG9wdXAvQXR0cmlidXRlc1wiO1xuaW1wb3J0IHtBZHZhbmNlZER5bmFtaWNUZXh0dXJlfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuXG5leHBvcnQgY2xhc3MgTWFpbiB7XG5cbiAgICAgICAgcHVibGljIGdhbWU6IEdhbWU7XG4gICAgICAgIHB1YmxpYyB0ZXh0dXJlOiBBZHZhbmNlZER5bmFtaWNUZXh0dXJlO1xuICAgICAgICBwdWJsaWMgaW52ZW50b3J5OiBJbnZlbnRvcnk7XG4gICAgICAgIHB1YmxpYyBhdHRyaWJ1dGVzOiBBdHRyaWJ1dGVzO1xuICAgICAgICBwdWJsaWMgb3B0aW9uczogT3B0aW9ucztcbiAgICAgICAgcHVibGljIHBsYXllckJvdHRvbVBhbmVsOiBQbGF5ZXJCb3R0b21QYW5lbDtcbiAgICAgICAgcHVibGljIHBsYXllclF1ZXN0SW5mb3JtYXRpb246IFBsYXllclF1ZXN0SW5mb3JtYXRpb247XG4gICAgICAgIHB1YmxpYyByb29tSW5mb3JtYXRvbjogUm9vbUluZm9ybWF0aW9uO1xuICAgICAgICBwdWJsaWMgcGxheWVyTG9nc1F1ZXN0czogUGxheWVyUXVlc3RzUGFuZWw7XG4gICAgICAgIHB1YmxpYyBjaGFyYWN0ZXJUb3BIcDogU2hvd0hwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgICAgICBnYW1lLmd1aSA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBBZHZhbmNlZER5bmFtaWNUZXh0dXJlLkNyZWF0ZUZ1bGxzY3JlZW5VSSgnZ3VpLm1haW4nKTtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZS5sYXllci5sYXllck1hc2sgPSAxO1xuXG4gICAgICAgICAgICB0aGlzLnBsYXllckJvdHRvbVBhbmVsID0gbmV3IFBsYXllckJvdHRvbVBhbmVsKGdhbWUpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJMb2dzUXVlc3RzID0gbmV3IFBsYXllclF1ZXN0c1BhbmVsKGdhbWUpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJRdWVzdEluZm9ybWF0aW9uID0gbmV3IFBsYXllclF1ZXN0SW5mb3JtYXRpb24oZ2FtZSk7XG4gICAgICAgICAgICB0aGlzLnJvb21JbmZvcm1hdG9uID0gbmV3IFJvb21JbmZvcm1hdGlvbihnYW1lKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyVG9wSHAgPSBuZXcgU2hvd0hwKGdhbWUpO1xuXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBuZXcgQXR0cmlidXRlcyh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICB9XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge1RleHRCbG9jaywgSW1hZ2UsIEdyaWQsIFJlY3RhbmdsZSwgQ29udHJvbCwgQnV0dG9ufSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGNsYXNzIFBsYXllckJvdHRvbVBhbmVsIHtcblxuICAgIHB1YmxpYyBleHBCYXI6IEltYWdlO1xuICAgIHB1YmxpYyBleHBCYXJUZXh0OiBUZXh0QmxvY2s7XG4gICAgcHVibGljIGd1aUdyaWRTa2lsbHM6IEdyaWQ7XG4gICAgcHVibGljIGNvbnRhaW5lcjogUmVjdGFuZ2xlO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB0ZXh0dXJlID0gZ2FtZS5ndWkudGV4dHVyZTtcblxuICAgICAgICBsZXQgY29udGFpbmVyID0gbmV3IFJlY3RhbmdsZSgnZ3VpLnBhbmVsLmJvdHRvbScpO1xuICAgICAgICBjb250YWluZXIuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfQ0VOVEVSO1xuICAgICAgICBjb250YWluZXIudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9CT1RUT007XG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9ICc2ODVweCc7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSAnODBweCc7XG4gICAgICAgIGNvbnRhaW5lci5pc1BvaW50ZXJCbG9ja2VyID0gdHJ1ZTtcbiAgICAgICAgY29udGFpbmVyLnRoaWNrbmVzcyA9IDA7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0ZXh0dXJlLmFkZENvbnRyb2woY29udGFpbmVyKTtcblxuICAgICAgICBsZXQgdG9vbGJhciA9IG5ldyBJbWFnZSgnZ3VpLnBhbmVsLmJvdHRvbS50b29sYmFyJywgJ2Fzc2V0cy9ndWkvdG9vbGJhci5wbmcnKTtcbiAgICAgICAgdG9vbGJhci52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX0JPVFRPTTtcbiAgICAgICAgdG9vbGJhci5oZWlnaHQgPSAnNjVweCc7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDb250cm9sKHRvb2xiYXIpO1xuXG4gICAgICAgIGxldCBjb250YWluZXJTbGlkZXJzID0gbmV3IFJlY3RhbmdsZSgnZ3VpLnBhbmVsLmJvdHRvbScpO1xuICAgICAgICBjb250YWluZXJTbGlkZXJzLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcbiAgICAgICAgY29udGFpbmVyU2xpZGVycy52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgY29udGFpbmVyU2xpZGVycy53aWR0aCA9ICc2MDVweCc7XG4gICAgICAgIGNvbnRhaW5lclNsaWRlcnMuaGVpZ2h0ID0gJzQ4cHgnO1xuICAgICAgICBjb250YWluZXJTbGlkZXJzLmlzUG9pbnRlckJsb2NrZXIgPSB0cnVlO1xuICAgICAgICBjb250YWluZXJTbGlkZXJzLnRoaWNrbmVzcyA9IDA7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDb250cm9sKGNvbnRhaW5lclNsaWRlcnMpO1xuXG4gICAgICAgIGxldCB0b29sYmFyRXhwID0gbmV3IEltYWdlKCdndWkucGFuZWwuYm90dG9tLnRvb2xiYXInLCAnYXNzZXRzL2d1aS90b29sYmFyX2V4cC5wbmcnKTtcbiAgICAgICAgdG9vbGJhckV4cC52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgdG9vbGJhckV4cC5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9MRUZUO1xuICAgICAgICB0b29sYmFyRXhwLndpZHRoID0gMTtcbiAgICAgICAgdG9vbGJhckV4cC5oZWlnaHQgPSAnMTRweCc7XG4gICAgICAgIHRvb2xiYXJFeHAudG9wID0gJzBweCc7XG4gICAgICAgIHRoaXMuZXhwQmFyID0gdG9vbGJhckV4cDtcbiAgICAgICAgY29udGFpbmVyU2xpZGVycy5hZGRDb250cm9sKHRvb2xiYXJFeHApO1xuXG4gICAgICAgIGxldCB0ZXh0QmxvY2tFeHAgPSBuZXcgVGV4dEJsb2NrKCk7XG4gICAgICAgIHRleHRCbG9ja0V4cC52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgdGV4dEJsb2NrRXhwLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0xFRlQ7XG4gICAgICAgIHRleHRCbG9ja0V4cC50b3AgPSAnLTFweCc7XG4gICAgICAgIHRleHRCbG9ja0V4cC53aWR0aCA9IDE7XG4gICAgICAgIHRleHRCbG9ja0V4cC5oZWlnaHQgPSAnMTRweCc7XG4gICAgICAgIHRleHRCbG9ja0V4cC5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgdGV4dEJsb2NrRXhwLmZvbnRTaXplID0gMTI7XG4gICAgICAgIHRleHRCbG9ja0V4cC5mb250RmFtaWx5ID0gXCJSdXNsYW5EaXNwbGF5XCI7XG5cbiAgICAgICAgdGhpcy5leHBCYXJUZXh0ID0gdGV4dEJsb2NrRXhwO1xuICAgICAgICBjb250YWluZXJTbGlkZXJzLmFkZENvbnRyb2wodGV4dEJsb2NrRXhwKTtcblxuICAgICAgICBsZXQgZ3JpZFNwZWNpYWxzID0gbmV3IEdyaWQoKTtcbiAgICAgICAgZ3JpZFNwZWNpYWxzLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfQk9UVE9NO1xuICAgICAgICBncmlkU3BlY2lhbHMuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfQ0VOVEVSO1xuICAgICAgICBncmlkU3BlY2lhbHMud2lkdGggPSAnMjI1cHgnO1xuICAgICAgICBncmlkU3BlY2lhbHMuaGVpZ2h0ID0gJzUycHgnO1xuICAgICAgICBncmlkU3BlY2lhbHMudG9wID0gJy02cHgnO1xuICAgICAgICBncmlkU3BlY2lhbHMubGVmdCA9ICcwcHgnO1xuICAgICAgICBncmlkU3BlY2lhbHMuYWRkQ29sdW1uRGVmaW5pdGlvbigxKTtcbiAgICAgICAgZ3JpZFNwZWNpYWxzLmFkZENvbHVtbkRlZmluaXRpb24oMSk7XG4gICAgICAgIGdyaWRTcGVjaWFscy5hZGRDb2x1bW5EZWZpbml0aW9uKDEpO1xuICAgICAgICBncmlkU3BlY2lhbHMuYWRkQ29sdW1uRGVmaW5pdGlvbigxKTtcbiAgICAgICAgY29udGFpbmVyLmFkZENvbnRyb2woZ3JpZFNwZWNpYWxzKTtcbiAgICAgICAgc2VsZi5ndWlHcmlkU2tpbGxzID0gZ3JpZFNwZWNpYWxzO1xuXG4gICAgICAgIGxldCBidXR0b25BdHRyaWJ1dGVzID0gQnV0dG9uLkNyZWF0ZUltYWdlT25seUJ1dHRvbihcImJ1dHRvbi5hdHRyaWJ1dGVzXCIsIFwiYXNzZXRzL2d1aS9idXR0b25zL2F0dHJpYnV0ZXMucG5nXCIpO1xuICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0xFRlQ7XG4gICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMud2lkdGggPSAnMTEycHgnO1xuICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmhlaWdodCA9ICcyMXB4JztcbiAgICAgICAgYnV0dG9uQXR0cmlidXRlcy50aGlja25lc3MgPSAwO1xuICAgICAgICBidXR0b25BdHRyaWJ1dGVzLnRvcCA9ICctN3B4JztcbiAgICAgICAgYnV0dG9uQXR0cmlidXRlcy5sZWZ0ID0gJzkzcHgnO1xuICAgICAgICBjb250YWluZXIuYWRkQ29udHJvbChidXR0b25BdHRyaWJ1dGVzKTtcbiAgICAgICAgYnV0dG9uQXR0cmlidXRlcy5vblBvaW50ZXJVcE9ic2VydmFibGUuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghZ2FtZS5ndWkuYXR0cmlidXRlcy5vcGVuZWQpIHtcbiAgICAgICAgICAgICAgICBnYW1lLmd1aS5hdHRyaWJ1dGVzLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGJ1dHRvblNraWxscyA9IEJ1dHRvbi5DcmVhdGVJbWFnZU9ubHlCdXR0b24oXCJidXR0b24uc2tpbGxzXCIsIFwiYXNzZXRzL2d1aS9idXR0b25zL3NraWxscy5wbmdcIik7XG4gICAgICAgIGJ1dHRvblNraWxscy5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9MRUZUO1xuICAgICAgICBidXR0b25Ta2lsbHMud2lkdGggPSAnMTEycHgnO1xuICAgICAgICBidXR0b25Ta2lsbHMuaGVpZ2h0ID0gJzIxcHgnO1xuICAgICAgICBidXR0b25Ta2lsbHMudGhpY2tuZXNzID0gMDtcbiAgICAgICAgYnV0dG9uU2tpbGxzLnRvcCA9ICcyMHB4JztcbiAgICAgICAgYnV0dG9uU2tpbGxzLmxlZnQgPSAnOTNweCc7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDb250cm9sKGJ1dHRvblNraWxscyk7XG4gICAgICAgIGJ1dHRvblNraWxscy5vblBvaW50ZXJVcE9ic2VydmFibGUuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGdhbWUucGxheWVyLmluaXRHb2RSYXkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGJ1dHRvbkludmVudG9yeSA9IEJ1dHRvbi5DcmVhdGVJbWFnZU9ubHlCdXR0b24oXCJidXR0b24uc2tpbGxzXCIsIFwiYXNzZXRzL2d1aS9idXR0b25zL2ludmVudG9yeS5wbmdcIik7XG4gICAgICAgIGJ1dHRvbkludmVudG9yeS5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9MRUZUO1xuICAgICAgICBidXR0b25JbnZlbnRvcnkud2lkdGggPSAnMTEycHgnO1xuICAgICAgICBidXR0b25JbnZlbnRvcnkuaGVpZ2h0ID0gJzIxcHgnO1xuICAgICAgICBidXR0b25JbnZlbnRvcnkudGhpY2tuZXNzID0gMDtcbiAgICAgICAgYnV0dG9uSW52ZW50b3J5LnRvcCA9ICctN3B4JztcbiAgICAgICAgYnV0dG9uSW52ZW50b3J5LmxlZnQgPSAnNDc5cHgnO1xuICAgICAgICBjb250YWluZXIuYWRkQ29udHJvbChidXR0b25JbnZlbnRvcnkpO1xuICAgICAgICBidXR0b25JbnZlbnRvcnkub25Qb2ludGVyVXBPYnNlcnZhYmxlLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWdhbWUuZ3VpLmludmVudG9yeS5vcGVuZWQpIHtcbiAgICAgICAgICAgICAgICBnYW1lLmd1aS5pbnZlbnRvcnkub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYnV0dG9uT3B0aW9ucyA9IEJ1dHRvbi5DcmVhdGVJbWFnZU9ubHlCdXR0b24oXCJidXR0b24uc2tpbGxzXCIsIFwiYXNzZXRzL2d1aS9idXR0b25zL29wdGlvbnMucG5nXCIpO1xuICAgICAgICBidXR0b25PcHRpb25zLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0xFRlQ7XG4gICAgICAgIGJ1dHRvbk9wdGlvbnMud2lkdGggPSAnMTEycHgnO1xuICAgICAgICBidXR0b25PcHRpb25zLmhlaWdodCA9ICcyMXB4JztcbiAgICAgICAgYnV0dG9uT3B0aW9ucy50aGlja25lc3MgPSAwO1xuICAgICAgICBidXR0b25PcHRpb25zLnRvcCA9ICcyMHB4JztcbiAgICAgICAgYnV0dG9uT3B0aW9ucy5sZWZ0ID0gJzQ3OXB4JztcbiAgICAgICAgYnV0dG9uT3B0aW9ucy5vblBvaW50ZXJVcE9ic2VydmFibGUuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghZ2FtZS5ndWkub3B0aW9ucy5vcGVuZWQpIHtcbiAgICAgICAgICAgICAgICBnYW1lLmd1aS5vcHRpb25zLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDb250cm9sKGJ1dHRvbk9wdGlvbnMpO1xuXG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL0NoYXJhY3RlcnMvUGxheWVyXCI7XG5pbXBvcnQge0NvbnRhaW5lciwgSW1hZ2UsIFRleHRCbG9jaywgQ29udHJvbCxHcmlkfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGNsYXNzIFBsYXllckluZm9ybWF0aW9uIHtcblxuICAgICAgICBwdWJsaWMgY29udGFpbmVyOiBDb250YWluZXI7XG4gICAgICAgIHB1YmxpYyBocEJhcjogSW1hZ2U7XG4gICAgICAgIHB1YmxpYyBocEJhclRleHQ6IFRleHRCbG9jaztcbiAgICAgICAgcHVibGljIGVuZXJneUJhcjogSW1hZ2U7XG4gICAgICAgIHB1YmxpYyBlbmVyZ3lCYXJUZXh0OiBUZXh0QmxvY2s7XG5cbiAgICAgICAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIsIGdhbWU6IEdhbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGd1aVBhbmVsID0gZ2FtZS5ndWkucm9vbUluZm9ybWF0b24uZ3VpUGFuZWw7XG5cbiAgICAgICAgICAgIGxldCBncmlkID0gbmV3IEdyaWQoKTtcbiAgICAgICAgICAgIGdyaWQuYWRkQ29sdW1uRGVmaW5pdGlvbig3MCwgdHJ1ZSk7XG4gICAgICAgICAgICBncmlkLmFkZENvbHVtbkRlZmluaXRpb24oMSk7XG4gICAgICAgICAgICBncmlkLndpZHRoID0gMTtcbiAgICAgICAgICAgIGdyaWQuaGVpZ2h0ID0nNjRweCc7XG4gICAgICAgICAgICBncmlkLnBhZGRpbmdUb3AgPSAnMTBweCc7XG4gICAgICAgICAgICBndWlQYW5lbC5hZGRDb250cm9sKGdyaWQpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBncmlkO1xuXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoXCJidXRcIiwgXCJhc3NldHMvZ3VpL3dhcnJpb3IucG5nXCIpO1xuICAgICAgICAgICAgaW1hZ2Uud2lkdGggPSBcIjY0cHhcIjtcbiAgICAgICAgICAgIGltYWdlLmhlaWdodCA9IFwiNjRweFwiO1xuICAgICAgICAgICAgaW1hZ2UudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgICAgICBpbWFnZS5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9MRUZUO1xuICAgICAgICAgICAgZ3JpZC5hZGRDb250cm9sKGltYWdlLCAwLCAwKTtcblxuICAgICAgICAgICAgbGV0IHRpdGxlID0gbmV3IFRleHRCbG9jaygpO1xuICAgICAgICAgICAgdGl0bGUudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgICAgICB0aXRsZS5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9MRUZUO1xuICAgICAgICAgICAgdGl0bGUudGV4dCA9IHBsYXllci5uYW1lO1xuICAgICAgICAgICAgdGl0bGUudG9wID0gXCIwXCI7XG4gICAgICAgICAgICB0aXRsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgICAgICB0aXRsZS5mb250RmFtaWx5ID0gXCJSdXNsYW5EaXNwbGF5XCI7XG4gICAgICAgICAgICB0aXRsZS5mb250U2l6ZSA9IDE2O1xuICAgICAgICAgICAgdGl0bGUucmVzaXplVG9GaXQgPSB0cnVlO1xuICAgICAgICAgICAgZ3JpZC5hZGRDb250cm9sKHRpdGxlLCAwLCAxKTtcblxuICAgICAgICAgICAgbGV0IHRvb2xiYXJIcCA9IG5ldyBJbWFnZSgnZ3VpLnBhbmVsLmJvdHRvbS50b29sYmFyJywgJ2Fzc2V0cy9ndWkvdG9vbGJhcl9ocC5wbmcnKTtcbiAgICAgICAgICAgIHRvb2xiYXJIcC52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgICAgIHRvb2xiYXJIcC5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9MRUZUO1xuICAgICAgICAgICAgdG9vbGJhckhwLndpZHRoID0gMDtcbiAgICAgICAgICAgIHRvb2xiYXJIcC5oZWlnaHQgPSAnMTRweCc7XG4gICAgICAgICAgICB0b29sYmFySHAudG9wID0gJzI0cHgnO1xuICAgICAgICAgICAgdGhpcy5ocEJhciA9IHRvb2xiYXJIcDtcbiAgICAgICAgICAgIGdyaWQuYWRkQ29udHJvbCh0b29sYmFySHAsIDAsIDEpO1xuXG4gICAgICAgICAgICBsZXQgdGV4dEJsb2NrSHAgPSBuZXcgVGV4dEJsb2NrKCk7XG4gICAgICAgICAgICB0ZXh0QmxvY2tIcC52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgICAgIHRleHRCbG9ja0hwLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcbiAgICAgICAgICAgIHRleHRCbG9ja0hwLnRvcCA9ICcyNHB4JztcbiAgICAgICAgICAgIHRleHRCbG9ja0hwLndpZHRoID0gMTtcbiAgICAgICAgICAgIHRleHRCbG9ja0hwLmhlaWdodCA9ICcxNHB4JztcbiAgICAgICAgICAgIHRleHRCbG9ja0hwLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGV4dEJsb2NrSHAuZm9udFNpemUgPSAxNjtcbiAgICAgICAgICAgIHRleHRCbG9ja0hwLmZvbnRGYW1pbHkgPSBcIlJ1c2xhbkRpc3BsYXlcIjtcblxuICAgICAgICAgICAgdGhpcy5ocEJhclRleHQgPSB0ZXh0QmxvY2tIcDtcbiAgICAgICAgICAgIGdyaWQuYWRkQ29udHJvbCh0ZXh0QmxvY2tIcCwgMCwgMSk7XG5cbiAgICAgICAgICAgIGxldCB0b29sYmFyRW5lcmd5ID0gbmV3IEltYWdlKCdndWkucGFuZWwuYm90dG9tLnRvb2xiYXInLCAnYXNzZXRzL2d1aS90b29sYmFyX2VuZXJneS5wbmcnKTtcbiAgICAgICAgICAgIHRvb2xiYXJFbmVyZ3kudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgICAgICB0b29sYmFyRW5lcmd5Lmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0xFRlQ7XG4gICAgICAgICAgICB0b29sYmFyRW5lcmd5LndpZHRoID0gMTtcbiAgICAgICAgICAgIHRvb2xiYXJFbmVyZ3kuaGVpZ2h0ID0gJzE0cHgnO1xuICAgICAgICAgICAgdG9vbGJhckVuZXJneS50b3AgPSAnNDBweCc7XG4gICAgICAgICAgICB0aGlzLmVuZXJneUJhciA9IHRvb2xiYXJFbmVyZ3k7XG4gICAgICAgICAgICBncmlkLmFkZENvbnRyb2wodG9vbGJhckVuZXJneSwgMCwgMSk7XG5cbiAgICAgICAgICAgIGxldCB0ZXh0VG9vbGJhckVuZXJneSA9IG5ldyBUZXh0QmxvY2soKTtcbiAgICAgICAgICAgIHRleHRUb29sYmFyRW5lcmd5LnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICAgICAgdGV4dFRvb2xiYXJFbmVyZ3kuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfQ0VOVEVSO1xuICAgICAgICAgICAgdGV4dFRvb2xiYXJFbmVyZ3kudG9wID0gJzQwcHgnO1xuICAgICAgICAgICAgdGV4dFRvb2xiYXJFbmVyZ3kud2lkdGggPSAxO1xuICAgICAgICAgICAgdGV4dFRvb2xiYXJFbmVyZ3kuaGVpZ2h0ID0gJzE0cHgnO1xuICAgICAgICAgICAgdGV4dFRvb2xiYXJFbmVyZ3kuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0ZXh0VG9vbGJhckVuZXJneS5mb250U2l6ZSA9IDEyO1xuICAgICAgICAgICAgdGV4dFRvb2xiYXJFbmVyZ3kuZm9udEZhbWlseSA9IFwiUnVzbGFuRGlzcGxheVwiO1xuXG4gICAgICAgICAgICB0aGlzLmVuZXJneUJhclRleHQgPSB0ZXh0VG9vbGJhckVuZXJneTtcbiAgICAgICAgICAgIGdyaWQuYWRkQ29udHJvbCh0ZXh0VG9vbGJhckVuZXJneSwgMCwgMSk7XG4gICAgICAgIH1cblxuICAgIH1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7QWR2YW5jZWREeW5hbWljVGV4dHVyZSwgU3RhY2tQYW5lbCwgVGV4dEJsb2NrLCBDb250cm9sfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGNsYXNzIFBsYXllclF1ZXN0SW5mb3JtYXRpb24ge1xuXG4gICAgcHVibGljIGd1aVBhbmVsOiBTdGFja1BhbmVsO1xuICAgIHByb3RlY3RlZCB0ZXh0dXJlOiBBZHZhbmNlZER5bmFtaWNUZXh0dXJlO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xuICAgICAgICB0aGlzLnRleHR1cmUgPSBnYW1lLmd1aS50ZXh0dXJlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRRdWVzdChxdWVzdERhdGEpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChzZWxmLmd1aVBhbmVsKSB7XG4gICAgICAgICAgICBzZWxmLmd1aVBhbmVsLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwbGF5ZXJRdWVzdHNJbmZvcm1hdGlvblBhbmVsID0gbmV3IFN0YWNrUGFuZWwoKTtcbiAgICAgICAgcGxheWVyUXVlc3RzSW5mb3JtYXRpb25QYW5lbC53aWR0aCA9IFwiNTAlXCI7XG4gICAgICAgIHBsYXllclF1ZXN0c0luZm9ybWF0aW9uUGFuZWwudG9wID0gNDA7XG4gICAgICAgIHBsYXllclF1ZXN0c0luZm9ybWF0aW9uUGFuZWwudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgIHBsYXllclF1ZXN0c0luZm9ybWF0aW9uUGFuZWwuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfUklHSFQ7XG4gICAgICAgIHNlbGYudGV4dHVyZS5hZGRDb250cm9sKHBsYXllclF1ZXN0c0luZm9ybWF0aW9uUGFuZWwpO1xuICAgICAgICBzZWxmLmd1aVBhbmVsID0gcGxheWVyUXVlc3RzSW5mb3JtYXRpb25QYW5lbDtcblxuICAgICAgICBsZXQgdGl0bGUgPSBuZXcgVGV4dEJsb2NrKCk7XG4gICAgICAgIHRpdGxlLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICB0aXRsZS50ZXh0ID0gcXVlc3REYXRhLnRpdGxlO1xuICAgICAgICB0aXRsZS50b3AgPSBcIjAlXCI7XG4gICAgICAgIHRpdGxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgdGl0bGUuZm9udEZhbWlseSA9IFwiUnVzbGFuRGlzcGxheVwiO1xuICAgICAgICB0aXRsZS5mb250U2l6ZSA9IDIyO1xuICAgICAgICB0aXRsZS5yZXNpemVUb0ZpdCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ3VpUGFuZWwuYWRkQ29udHJvbCh0aXRsZSk7XG5cbiAgICAgICAgcXVlc3REYXRhLmNoYXB0ZXJzW3F1ZXN0RGF0YS5hY3R1YWxDaGFwdGVyXS5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCByZXF1aXJlbWVudERlc2NyaXB0aW9uID0gbmV3IFRleHRCbG9jaygpO1xuICAgICAgICAgICAgcmVxdWlyZW1lbnREZXNjcmlwdGlvbi52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgICAgIHJlcXVpcmVtZW50RGVzY3JpcHRpb24udGV4dCA9IHJlcXVpcmVtZW50Lm5hbWU7XG4gICAgICAgICAgICByZXF1aXJlbWVudERlc2NyaXB0aW9uLnJlc2l6ZVRvRml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVpcmVtZW50RGVzY3JpcHRpb24uY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICByZXF1aXJlbWVudERlc2NyaXB0aW9uLmZvbnRGYW1pbHkgPSBcIlJ1c2xhbkRpc3BsYXlcIjtcbiAgICAgICAgICAgIHJlcXVpcmVtZW50RGVzY3JpcHRpb24udG9wID0gXCI1JVwiO1xuICAgICAgICAgICAgcmVxdWlyZW1lbnREZXNjcmlwdGlvbi5mb250U2l6ZSA9IDE4O1xuICAgICAgICAgICAgc2VsZi5ndWlQYW5lbC5hZGRDb250cm9sKHJlcXVpcmVtZW50RGVzY3JpcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7VGV4dEJsb2NrLCBTdGFja1BhbmVsLCBBZHZhbmNlZER5bmFtaWNUZXh0dXJlLCBDb250cm9sfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGNsYXNzIFBsYXllclF1ZXN0c1BhbmVsIHtcblxuICAgIHB1YmxpYyBndWlQYW5lbDogU3RhY2tQYW5lbDtcbiAgICBwcm90ZWN0ZWQgdGV4dHM6IFRleHRCbG9ja1tdO1xuICAgIHByb3RlY3RlZCB0ZXh0dXJlOiBBZHZhbmNlZER5bmFtaWNUZXh0dXJlO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xuICAgICAgICB0aGlzLnRleHRzID0gW107XG4gICAgICAgIHRoaXMudGV4dHVyZSA9IGdhbWUuZ3VpLnRleHR1cmU7XG5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGxldCBwbGF5ZXJRdWVzdHNMb2dzUGFuZWwgPSBuZXcgU3RhY2tQYW5lbCgpO1xuICAgICAgICBwbGF5ZXJRdWVzdHNMb2dzUGFuZWwud2lkdGggPSBcIjUwJVwiO1xuICAgICAgICBwbGF5ZXJRdWVzdHNMb2dzUGFuZWwudG9wID0gNDA7XG4gICAgICAgIHBsYXllclF1ZXN0c0xvZ3NQYW5lbC52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgc2VsZi50ZXh0dXJlLmFkZENvbnRyb2wocGxheWVyUXVlc3RzTG9nc1BhbmVsKTtcbiAgICAgICAgc2VsZi5ndWlQYW5lbCA9IHBsYXllclF1ZXN0c0xvZ3NQYW5lbDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBtZXNzYWdlXG4gICAgICogQHBhcmFtIGNvbG9yXG4gICAgICovXG4gICAgcHVibGljIGFkZFRleHQobWVzc2FnZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nID0gJ3doaXRlJykge1xuICAgICAgICBsZXQgdGV4dCA9IG5ldyBUZXh0QmxvY2soKTtcbiAgICAgICAgdGV4dC50ZXh0ID0gbWVzc2FnZTtcbiAgICAgICAgdGV4dC5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0ZXh0LnRleHRXcmFwcGluZyA9IHRydWU7XG4gICAgICAgIHRleHQuaGVpZ2h0ID0gXCIyNXB4XCI7XG4gICAgICAgIHRleHQud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgdGV4dC5mb250RmFtaWx5ID0gXCJSdXNsYW5EaXNwbGF5XCI7XG4gICAgICAgIHRleHQudGV4dEhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcbiAgICAgICAgdGV4dC5mb250U2l6ZSA9IDE2O1xuXG4gICAgICAgIHRoaXMuZ3VpUGFuZWwuYWRkQ29udHJvbCh0ZXh0KTtcblxuICAgICAgICB0aGlzLnRleHRzLnB1c2godGV4dCk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdGV4dFRvRGlzcG9zZSA9IHNlbGYudGV4dHMuc2hpZnQoKTtcbiAgICAgICAgICAgIHNlbGYuZ3VpUGFuZWwucmVtb3ZlQ29udHJvbCh0ZXh0VG9EaXNwb3NlKTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge1N0YWNrUGFuZWwsIEFkdmFuY2VkRHluYW1pY1RleHR1cmUsIENvbnRyb2x9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgUm9vbUluZm9ybWF0aW9uIHtcblxuICAgICAgICBwdWJsaWMgZ3VpUGFuZWw6U3RhY2tQYW5lbDtcbiAgICAgICAgcHJvdGVjdGVkIHRleHR1cmU6QWR2YW5jZWREeW5hbWljVGV4dHVyZTtcblxuICAgICAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBnYW1lLmd1aS50ZXh0dXJlO1xuXG4gICAgICAgICAgICBsZXQgcm9vbUluZm9ybWF0aW9uUGFuZWwgPSBuZXcgU3RhY2tQYW5lbChcIlJvb20gSW5mb3JtYXRpb25cIik7XG4gICAgICAgICAgICByb29tSW5mb3JtYXRpb25QYW5lbC53aWR0aCA9IFwiMjAlXCI7XG4gICAgICAgICAgICByb29tSW5mb3JtYXRpb25QYW5lbC50b3AgPSA0MDtcbiAgICAgICAgICAgIHJvb21JbmZvcm1hdGlvblBhbmVsLmxlZnQgPSAxMDtcbiAgICAgICAgICAgIHJvb21JbmZvcm1hdGlvblBhbmVsLnpJbmRleCA9IDE7XG4gICAgICAgICAgICByb29tSW5mb3JtYXRpb25QYW5lbC5pc1BvaW50ZXJCbG9ja2VyID0gdHJ1ZTtcbiAgICAgICAgICAgIHJvb21JbmZvcm1hdGlvblBhbmVsLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICAgICAgcm9vbUluZm9ybWF0aW9uUGFuZWwuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfTEVGVDtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZS5hZGRDb250cm9sKHJvb21JbmZvcm1hdGlvblBhbmVsKTtcbiAgICAgICAgICAgIHRoaXMuZ3VpUGFuZWwgPSByb29tSW5mb3JtYXRpb25QYW5lbDtcbiAgICAgICAgfVxuXG4gICAgfVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtBZHZhbmNlZER5bmFtaWNUZXh0dXJlLCBSZWN0YW5nbGUsIEJ1dHRvbiwgQ29udHJvbCwgSW5wdXRUZXh0fSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdENoYXJhY3RlciB7XG4gICAgcHVibGljIHRleHR1cmU6IEFkdmFuY2VkRHluYW1pY1RleHR1cmU7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgICAgIC8vVE9ETzogRml4IEdVSVxuICAgICAgICAvLyBnYW1lLmd1aSA9IHRoaXM7XG4gICAgICAgIGxldCB0ZXh0dXJlID0gQWR2YW5jZWREeW5hbWljVGV4dHVyZS5DcmVhdGVGdWxsc2NyZWVuVUkoJ2d1aS5tYWluJyk7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBuZXcgUmVjdGFuZ2xlKCdndWkucGFuZWwuYm90dG9tJyk7XG4gICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9DRU5URVI7XG4gICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX0JPVFRPTTtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gJzY4NXB4JztcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9ICc4MHB4JztcbiAgICAgICAgY29udGFpbmVyLmlzUG9pbnRlckJsb2NrZXIgPSB0cnVlO1xuICAgICAgICBjb250YWluZXIudGhpY2tuZXNzID0gMDtcbiAgICAgICAgdGV4dHVyZS5hZGRDb250cm9sKGNvbnRhaW5lcik7XG5cbiAgICAgICAgbGV0IGJ1dHRvbkNyZWF0ZUNoYXJhY3RlciA9IEJ1dHRvbi5DcmVhdGVJbWFnZVdpdGhDZW50ZXJUZXh0QnV0dG9uKFwiYnV0dG9uLmNyZWF0ZV9jaGFyYWN0ZXJcIiwgJ0NyZWF0ZSBjaGFyYWN0ZXInLCBcImFzc2V0cy9ndWkvYnV0dG9ucy9ibGFuay5wbmdcIik7XG4gICAgICAgIGJ1dHRvbkNyZWF0ZUNoYXJhY3Rlci5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9DRU5URVI7XG4gICAgICAgIGJ1dHRvbkNyZWF0ZUNoYXJhY3Rlci52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX0JPVFRPTTtcbiAgICAgICAgYnV0dG9uQ3JlYXRlQ2hhcmFjdGVyLndpZHRoID0gMC41O1xuICAgICAgICBidXR0b25DcmVhdGVDaGFyYWN0ZXIuaGVpZ2h0ID0gJzQwcHgnO1xuICAgICAgICBidXR0b25DcmVhdGVDaGFyYWN0ZXIudGhpY2tuZXNzID0gMDtcbiAgICAgICAgYnV0dG9uQ3JlYXRlQ2hhcmFjdGVyLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgYnV0dG9uQ3JlYXRlQ2hhcmFjdGVyLmZvbnRTaXplID0gMTY7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDb250cm9sKGJ1dHRvbkNyZWF0ZUNoYXJhY3Rlcik7XG4gICAgICAgIGJ1dHRvbkNyZWF0ZUNoYXJhY3Rlci5vblBvaW50ZXJVcE9ic2VydmFibGUuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXJhY3Rlck5hbWUgPSBpbnB1dC50ZXh0O1xuICAgICAgICAgICAgaWYgKGNoYXJhY3Rlck5hbWUubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdjcmVhdGVDaGFyYWN0ZXInLCBjaGFyYWN0ZXJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGlucHV0ID0gbmV3IElucHV0VGV4dCgpO1xuICAgICAgICBpbnB1dC52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgaW5wdXQud2lkdGggPSAwLjU7XG4gICAgICAgIGlucHV0Lm1heFdpZHRoID0gMC41O1xuICAgICAgICBpbnB1dC5oZWlnaHQgPSBcIjMwcHhcIjtcbiAgICAgICAgaW5wdXQuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIGlucHV0LmJhY2tncm91bmQgPSBcImJsYWNrXCI7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyVGV4dCA9IFwiU2V0IG5hbWUgb2YgeW91ciBuZXcgY2hhcmFjdGVyXCI7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDb250cm9sKGlucHV0KTtcblxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtBYnN0cmFjdENoYXJhY3Rlcn0gZnJvbSBcIi4uL0NoYXJhY3RlcnMvQWJzdHJhY3RDaGFyYWN0ZXJcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7QWR2YW5jZWREeW5hbWljVGV4dHVyZSwgU3RhY2tQYW5lbCwgQ29udHJvbCwgU2xpZGVyLCBUZXh0QmxvY2t9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgU2hvd0hwIHtcblxuICAgIHB1YmxpYyBocEJhcjtcbiAgICBwdWJsaWMgZ3VpUGFuZWw7XG4gICAgcHJvdGVjdGVkIHRleHR1cmU6IEFkdmFuY2VkRHluYW1pY1RleHR1cmU7XG4gICAgcHJvdGVjdGVkIGNoYXJhY3RlcjogQWJzdHJhY3RDaGFyYWN0ZXJcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gZ2FtZS5ndWkudGV4dHVyZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0hwQ2hhcmFjdGVyKGNoYXJhY3RlcjogQWJzdHJhY3RDaGFyYWN0ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3VpUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZS5yZW1vdmVDb250cm9sKHRoaXMuZ3VpUGFuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXI7XG4gICAgICAgIGxldCBjaGFyYWN0ZXJQYW5lbCA9IG5ldyBTdGFja1BhbmVsKCk7XG4gICAgICAgIGNoYXJhY3RlclBhbmVsLndpZHRoID0gXCIyNSVcIjtcbiAgICAgICAgY2hhcmFjdGVyUGFuZWwudG9wID0gMTA7XG4gICAgICAgIGNoYXJhY3RlclBhbmVsLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICB0aGlzLmd1aVBhbmVsID0gY2hhcmFjdGVyUGFuZWw7XG4gICAgICAgIHRoaXMudGV4dHVyZS5hZGRDb250cm9sKGNoYXJhY3RlclBhbmVsKTtcblxuICAgICAgICBsZXQgdGV4dEJsb2NrID0gbmV3IFRleHRCbG9jayhcImd1aS5wYW5lbGhwLm5hbWVcIiwgY2hhcmFjdGVyLm5hbWUpO1xuICAgICAgICB0ZXh0QmxvY2suY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB0ZXh0QmxvY2suaGVpZ2h0ID0gXCIyMHB4XCI7XG4gICAgICAgIHRleHRCbG9jay5mb250RmFtaWx5ID0gXCJSdXNsYW5EaXNwbGF5XCI7XG5cbiAgICAgICAgdGV4dEJsb2NrLnRleHRWZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcblxuICAgICAgICBsZXQgaHBTbGlkZXIgPSBuZXcgU2xpZGVyKCk7XG4gICAgICAgIGhwU2xpZGVyLm1pbmltdW0gPSAwO1xuICAgICAgICBocFNsaWRlci5tYXhpbXVtID0gY2hhcmFjdGVyLnN0YXRpc3RpY3MuaHBNYXg7XG4gICAgICAgIGhwU2xpZGVyLnZhbHVlID0gY2hhcmFjdGVyLnN0YXRpc3RpY3MuaHA7XG4gICAgICAgIGhwU2xpZGVyLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGhwU2xpZGVyLmhlaWdodCA9IFwiMTBweFwiO1xuICAgICAgICBocFNsaWRlci50aHVtYldpZHRoID0gMDtcbiAgICAgICAgaHBTbGlkZXIuYmFyT2Zmc2V0ID0gMDtcbiAgICAgICAgaHBTbGlkZXIuYmFja2dyb3VuZCA9ICdibGFjayc7XG4gICAgICAgIGhwU2xpZGVyLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgaHBTbGlkZXIuYm9yZGVyQ29sb3IgPSAnYmxhY2snO1xuICAgICAgICB0aGlzLmhwQmFyID0gaHBTbGlkZXI7XG5cbiAgICAgICAgY2hhcmFjdGVyUGFuZWwuYWRkQ29udHJvbCh0ZXh0QmxvY2spO1xuICAgICAgICBjaGFyYWN0ZXJQYW5lbC5hZGRDb250cm9sKGhwU2xpZGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0dhdGV3YXkoZW50cmFuY2VOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3VpUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZS5yZW1vdmVDb250cm9sKHRoaXMuZ3VpUGFuZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGFyYWN0ZXJQYW5lbCA9IG5ldyBTdGFja1BhbmVsKCk7XG4gICAgICAgIGNoYXJhY3RlclBhbmVsLndpZHRoID0gXCIyNSVcIjtcbiAgICAgICAgY2hhcmFjdGVyUGFuZWwudG9wID0gMTA7XG4gICAgICAgIGNoYXJhY3RlclBhbmVsLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICB0aGlzLmd1aVBhbmVsID0gY2hhcmFjdGVyUGFuZWw7XG4gICAgICAgIHRoaXMudGV4dHVyZS5hZGRDb250cm9sKGNoYXJhY3RlclBhbmVsKTtcblxuICAgICAgICBsZXQgdGV4dEJsb2NrID0gbmV3IFRleHRCbG9jayhcImd1aS5wYW5lbGhwLm5hbWVcIiwgZW50cmFuY2VOYW1lKTtcbiAgICAgICAgdGV4dEJsb2NrLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgdGV4dEJsb2NrLmhlaWdodCA9IFwiMjBweFwiO1xuICAgICAgICB0ZXh0QmxvY2suZm9udEZhbWlseSA9IFwiUnVzbGFuRGlzcGxheVwiO1xuICAgICAgICB0ZXh0QmxvY2sudGV4dFZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuXG4gICAgICAgIGNoYXJhY3RlclBhbmVsLmFkZENvbnRyb2wodGV4dEJsb2NrKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVmcmVzaFBhbmVsKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaHBCYXIudmFsdWUgPSB0aGlzLmNoYXJhY3Rlci5zdGF0aXN0aWNzLmhwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVIcEJhcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3VpUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZS5yZW1vdmVDb250cm9sKHRoaXMuZ3VpUGFuZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtBZHZhbmNlZER5bmFtaWNUZXh0dXJlLCBUZXh0QmxvY2ssIFJlY3RhbmdsZSwgQ29udHJvbH0gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5cbmV4cG9ydCBjbGFzcyBUb29sdGlwQnV0dG9uIHtcblxuICAgIHB1YmxpYyBjb250YWluZXI6IFJlY3RhbmdsZTtcblxuICAgIGNvbnN0cnVjdG9yKGJhc2VDb250cm9sOiBBZHZhbmNlZER5bmFtaWNUZXh0dXJlLCB0ZXh0OiBzdHJpbmcsIHBhcmVudFBvc2l0aW9uOiBCQUJZTE9OLlZlY3RvcjIpIHtcbiAgICAgICAgbGV0IHBhbmVsID0gbmV3IFJlY3RhbmdsZSgndG9vbHRpcCcpO1xuICAgICAgICBwYW5lbC50b3AgPSBwYXJlbnRQb3NpdGlvbi55O1xuICAgICAgICBwYW5lbC5sZWZ0ID0gcGFyZW50UG9zaXRpb24ueDtcbiAgICAgICAgcGFuZWwud2lkdGggPSAwO1xuICAgICAgICBwYW5lbC5oZWlnaHQgPSAwO1xuICAgICAgICBwYW5lbC5jb3JuZXJSYWRpdXMgPSAyMDtcbiAgICAgICAgcGFuZWwudGhpY2tuZXNzID0gMTtcbiAgICAgICAgcGFuZWwuYmFja2dyb3VuZCA9IFwiYmxhY2tcIjtcbiAgICAgICAgcGFuZWwuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIHBhbmVsLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0xFRlQ7XG4gICAgICAgIHBhbmVsLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICBwYW5lbC5hZGFwdEhlaWdodFRvQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICBwYW5lbC5hZGFwdFdpZHRoVG9DaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIHBhbmVsLnBhZGRpbmdSaWdodCA9ICctODBweCc7XG4gICAgICAgIHBhbmVsLnBhZGRpbmdCb3R0b20gPSAnLTQwcHgnO1xuICAgICAgICBwYW5lbC5hbHBoYSA9IDAuODtcbiAgICAgICAgcGFuZWwuaXNIaXRUZXN0VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBiYXNlQ29udHJvbC5hZGRDb250cm9sKHBhbmVsKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBwYW5lbDtcblxuICAgICAgICBsZXQgbGFiZWwgPSBuZXcgVGV4dEJsb2NrKCk7XG4gICAgICAgIGxhYmVsLnJlc2l6ZVRvRml0ID0gdHJ1ZTtcbiAgICAgICAgbGFiZWwudGV4dCA9IHRleHQ7XG4gICAgICAgIGxhYmVsLmZvbnRGYW1pbHkgPSBcIlJ1c2xhbkRpc3BsYXlcIjtcbiAgICAgICAgcGFuZWwuYWRkQ29udHJvbChsYWJlbCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtUb29sdGlwQnV0dG9ufSBmcm9tIFwiLi9Ub29sdGlwQnV0dG9uXCI7XG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi8uLi9QbGF5ZXIvSXRlbXMvSXRlbVwiO1xuaW1wb3J0IHtBZHZhbmNlZER5bmFtaWNUZXh0dXJlLCBDb250cm9sfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGNsYXNzIFRvb2x0aXBIZWxwZXIge1xuXG4gICAgc3RhdGljIGNyZWF0ZVRvb2x0aXBPbkludmVudG9yeUl0ZW1CdXR0b24odGV4dHVyZTogQWR2YW5jZWREeW5hbWljVGV4dHVyZSwgaXRlbTogSXRlbSwgYnV0dG9uOiBDb250cm9sLCBwaWNrQ2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHRvb2x0aXBCdXR0b24gPSBudWxsO1xuICAgICAgICBidXR0b24ub25Qb2ludGVyRW50ZXJPYnNlcnZhYmxlLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgIGlmIChpdGVtLnN0YXRpc3RpY3MuZGFtYWdlTWluID4gMCkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gXCJcXG5EYW1hZ2U6IFwiICsgaXRlbS5zdGF0aXN0aWNzLmRhbWFnZU1pbiArIFwiIC0gXCIgKyBpdGVtLnN0YXRpc3RpY3MuZGFtYWdlTWF4ICsgXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLnN0YXRpc3RpY3MuYXJtb3IgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBcIlxcbkFybW9yOiBcIiArIGl0ZW0uc3RhdGlzdGljcy5hcm1vciArIFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvb2x0aXBCdXR0b24gPSBuZXcgVG9vbHRpcEJ1dHRvbih0ZXh0dXJlLCB0ZXh0LCBuZXcgQkFCWUxPTi5WZWN0b3IyKGJ1dHRvbi5jZW50ZXJYLCBidXR0b24uY2VudGVyWSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBidXR0b24ub25Qb2ludGVyT3V0T2JzZXJ2YWJsZS5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdG9vbHRpcEJ1dHRvbi5jb250YWluZXIuZGlzcG9zZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBidXR0b24ub25Qb2ludGVyVXBPYnNlcnZhYmxlLmFkZChwaWNrQ2FsbGJhY2spO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QWR2YW5jZWREeW5hbWljVGV4dHVyZSwgUmVjdGFuZ2xlLCBUZXh0QmxvY2t9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgVG9vbHRpcE1lc2gge1xuXG4gICAgcHVibGljIGNvbnRhaW5lcjogQWR2YW5jZWREeW5hbWljVGV4dHVyZTtcblxuICAgIGNvbnN0cnVjdG9yKG1lc2g6IEJBQllMT04uQWJzdHJhY3RNZXNoLCB0ZXh0OiBzdHJpbmcsIGxpbmtPZmZzZXRZOiBudW1iZXIgPSAtODApIHtcbiAgICAgICAgbGV0IGFkdmFuY2VkVGV4dHVyZSA9IEFkdmFuY2VkRHluYW1pY1RleHR1cmUuQ3JlYXRlRnVsbHNjcmVlblVJKFwiVUlcIik7XG4gICAgICAgIGFkdmFuY2VkVGV4dHVyZS5sYXllci5sYXllck1hc2sgPSAyO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGFkdmFuY2VkVGV4dHVyZTtcblxuICAgICAgICBsZXQgcGFuZWwgPSBuZXcgUmVjdGFuZ2xlKCd0b29sdGlwJyk7XG4gICAgICAgIHBhbmVsLmNvcm5lclJhZGl1cyA9IDIwO1xuICAgICAgICBwYW5lbC50aGlja25lc3MgPSAxO1xuICAgICAgICBwYW5lbC5iYWNrZ3JvdW5kID0gXCJibGFja1wiO1xuICAgICAgICBwYW5lbC5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgcGFuZWwuYWRhcHRIZWlnaHRUb0NoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgcGFuZWwuYWRhcHRXaWR0aFRvQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICBwYW5lbC5wYWRkaW5nUmlnaHQgPSAnLTQwcHgnO1xuICAgICAgICBwYW5lbC5wYWRkaW5nQm90dG9tID0gJy0yMHB4JztcbiAgICAgICAgcGFuZWwuYWxwaGEgPSAwLjg7XG4gICAgICAgIGFkdmFuY2VkVGV4dHVyZS5hZGRDb250cm9sKHBhbmVsKTtcblxuICAgICAgICBsZXQgbGFiZWwgPSBuZXcgVGV4dEJsb2NrKCk7XG4gICAgICAgIGxhYmVsLnJlc2l6ZVRvRml0ID0gdHJ1ZTtcbiAgICAgICAgbGFiZWwudGV4dCA9IHRleHQ7XG4gICAgICAgIGxhYmVsLmZvbnRGYW1pbHkgPSBcIlJ1c2xhbkRpc3BsYXlcIjtcbiAgICAgICAgcGFuZWwuYWRkQ29udHJvbChsYWJlbCk7XG5cbiAgICAgICAgcGFuZWwubGlua1dpdGhNZXNoKG1lc2gpO1xuICAgICAgICBwYW5lbC5saW5rT2Zmc2V0WSA9IGxpbmtPZmZzZXRZO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtQb3B1cH0gZnJvbSBcIi4vUG9wdXBcIjtcbmltcG9ydCB7TWFpbn0gZnJvbSBcIi4uL01haW5cIjtcbmltcG9ydCB7U3RhY2tQYW5lbCwgQ29udHJvbCwgVGV4dEJsb2NrLCBCdXR0b259IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlcyBleHRlbmRzIFBvcHVwIHtcblxuICAgIGNvbnN0cnVjdG9yKGd1aU1haW46IE1haW4pIHtcbiAgICAgICAgc3VwZXIoZ3VpTWFpbik7XG4gICAgICAgIHRoaXMubmFtZSA9ICdBdHRyaWJ1dGVzJztcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IFwiYXNzZXRzL2d1aS9jb250ZW50LnBuZ1wiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9DRU5URVI7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKSB7XG4gICAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbml0VGV4dHVyZSgpO1xuXG4gICAgICAgIHRoaXMuZ3VpVGV4dHVyZS5hZGRDb250cm9sKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5zaG93VGV4dCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbkNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCkge1xuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmd1aVRleHR1cmUuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNsb3NlID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd1RleHQoKSB7XG4gICAgICAgIGxldCBwYW5lbCA9IG5ldyBTdGFja1BhbmVsKCdhdHRyaWJ1dGVzLnBhbmVsJyk7XG4gICAgICAgIHBhbmVsLmlzUG9pbnRlckJsb2NrZXIgPSB0cnVlO1xuICAgICAgICBwYW5lbC52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgcGFuZWwuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfQ0VOVEVSO1xuICAgICAgICBwYW5lbC53aWR0aCA9IDE7XG4gICAgICAgIHBhbmVsLmhlaWdodCA9IDAuOTtcbiAgICAgICAgcGFuZWwudG9wID0gJzEwJSc7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ29udHJvbChwYW5lbCk7XG5cbiAgICAgICAgbGV0IHRleHRQbGF5ZXJOYW1lID0gdGhpcy5jcmVhdGVUZXh0KHRoaXMuZ3VpTWFpbi5nYW1lLnBsYXllci5uYW1lKTtcbiAgICAgICAgdGV4dFBsYXllck5hbWUuY29sb3IgPSAnYnJvd24nO1xuICAgICAgICB0ZXh0UGxheWVyTmFtZS5mb250U2l6ZSA9IDQwO1xuICAgICAgICB0ZXh0UGxheWVyTmFtZS50b3AgPSAxMDtcbiAgICAgICAgcGFuZWwuYWRkQ29udHJvbCh0ZXh0UGxheWVyTmFtZSk7XG5cbiAgICAgICAgbGV0IHRleHRQbGF5ZXJMVkwgPSB0aGlzLmNyZWF0ZVRleHQodGhpcy5ndWlNYWluLmdhbWUucGxheWVyLmx2bCArICcgTFZMJyk7XG4gICAgICAgIHRleHRQbGF5ZXJMVkwuY29sb3IgPSAnYnJvd24nO1xuICAgICAgICB0ZXh0UGxheWVyTFZMLmZvbnRTaXplID0gMzI7XG4gICAgICAgIHRleHRQbGF5ZXJMVkwudG9wID0gMTAwO1xuICAgICAgICB0ZXh0UGxheWVyTFZMLnBhZGRpbmdCb3R0b20gPSA0MDtcbiAgICAgICAgcGFuZWwuYWRkQ29udHJvbCh0ZXh0UGxheWVyTFZMKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUF0dHJpYnV0ZSgxLCAnU3RyZW5ndGg6JyArIHRoaXMuZ3VpTWFpbi5nYW1lLnBsYXllci5hdHRyaWJ1dGVzLnN0cmVuZ3RoLCBwYW5lbCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQXR0cmlidXRlKDIsICdEdXJhYmlsaXR5OicgKyB0aGlzLmd1aU1haW4uZ2FtZS5wbGF5ZXIuYXR0cmlidXRlcy5kdXJhYmlsaXR5LCBwYW5lbCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQXR0cmlidXRlKDMsICdWaXRhbGl0eTonICsgdGhpcy5ndWlNYWluLmdhbWUucGxheWVyLmF0dHJpYnV0ZXMudml0YWxpdHksIHBhbmVsKTtcbiAgICAgICAgdGhpcy5jcmVhdGVBdHRyaWJ1dGUoNCwgJ1N0YW1pbmE6JyArIHRoaXMuZ3VpTWFpbi5nYW1lLnBsYXllci5hdHRyaWJ1dGVzLnN0YW1pbmEsIHBhbmVsKTtcblxuICAgICAgICBpZiAodGhpcy5ndWlNYWluLmdhbWUucGxheWVyLmZyZWVBdHRyaWJ1dGVzUG9pbnRzKSB7XG4gICAgICAgICAgICBsZXQgdGV4dEF0dHJpYnV0ZXMgPSB0aGlzLmNyZWF0ZVRleHQoJ1lvdSBoYXZlICcgKyB0aGlzLmd1aU1haW4uZ2FtZS5wbGF5ZXIuZnJlZUF0dHJpYnV0ZXNQb2ludHMgKyAnIGZyZWUgYXR0cmlidXRlIHBvaW50cy4nKTtcbiAgICAgICAgICAgIHRleHRBdHRyaWJ1dGVzLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICB0ZXh0QXR0cmlidXRlcy5mb250U2l6ZSA9IDE2O1xuXG4gICAgICAgICAgICBwYW5lbC5hZGRDb250cm9sKHRleHRBdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0ZXh0U3RhdGlzdGljcyA9IHRoaXMuY3JlYXRlVGV4dCgnU3RhdGlzdGljcycpO1xuICAgICAgICB0ZXh0U3RhdGlzdGljcy5jb2xvciA9ICdicm93bic7XG4gICAgICAgIHRleHRTdGF0aXN0aWNzLmhlaWdodCA9ICc4JSc7XG4gICAgICAgIHRleHRTdGF0aXN0aWNzLmZvbnRTaXplID0gMzI7XG4gICAgICAgIHRleHRTdGF0aXN0aWNzLnBhZGRpbmdUb3AgPSA0MDtcbiAgICAgICAgcGFuZWwuYWRkQ29udHJvbCh0ZXh0U3RhdGlzdGljcyk7XG5cbiAgICAgICAgbGV0IGRhbWFnZSA9IHRoaXMuY3JlYXRlVGV4dCgnRGFtYWdlOiAnICsgdGhpcy5ndWlNYWluLmdhbWUucGxheWVyLnN0YXRpc3RpY3NBbGwuZGFtYWdlTWluICsgJyAtICcgKyB0aGlzLmd1aU1haW4uZ2FtZS5wbGF5ZXIuc3RhdGlzdGljc0FsbC5kYW1hZ2VNYXgpO1xuICAgICAgICBwYW5lbC5hZGRDb250cm9sKGRhbWFnZSk7XG5cbiAgICAgICAgbGV0IGFybW9yID0gdGhpcy5jcmVhdGVUZXh0KCdBcm1vcjogJyArIHRoaXMuZ3VpTWFpbi5nYW1lLnBsYXllci5zdGF0aXN0aWNzQWxsLmFybW9yKTtcbiAgICAgICAgcGFuZWwuYWRkQ29udHJvbChhcm1vcik7XG5cbiAgICAgICAgbGV0IGF0dGFja1NwZWVkID0gdGhpcy5jcmVhdGVUZXh0KCdBdHRhY2sgY2hhbmNlOiAnICsgdGhpcy5ndWlNYWluLmdhbWUucGxheWVyLnN0YXRpc3RpY3MuaGl0Q2hhbmNlKTtcbiAgICAgICAgcGFuZWwuYWRkQ29udHJvbChhdHRhY2tTcGVlZCk7XG5cbiAgICAgICAgbGV0IGJsb2NrQ2hhbmNlID0gdGhpcy5jcmVhdGVUZXh0KCdCbG9jayBjaGFuY2U6ICcgKyB0aGlzLmd1aU1haW4uZ2FtZS5wbGF5ZXIuc3RhdGlzdGljcy5ibG9ja0NoYW5jZSk7XG4gICAgICAgIHBhbmVsLmFkZENvbnRyb2woYmxvY2tDaGFuY2UpO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRleHQodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGxldCB0ZXh0QmxvY2sgPSBuZXcgVGV4dEJsb2NrKCk7XG4gICAgICAgIHRleHRCbG9jay50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGV4dEJsb2NrLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICB0ZXh0QmxvY2sud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgdGV4dEJsb2NrLmhlaWdodCA9IFwiNSVcIjtcbiAgICAgICAgdGV4dEJsb2NrLmZvbnRGYW1pbHkgPSBcIlJ1c2xhbkRpc3BsYXlcIjtcbiAgICAgICAgdGV4dEJsb2NrLmZvbnRTaXplID0gMjA7XG4gICAgICAgIHRleHRCbG9jay5yZXNpemVUb0ZpdCA9IHRydWU7XG4gICAgICAgIHRleHRCbG9jay5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9DRU5URVI7XG5cbiAgICAgICAgcmV0dXJuIHRleHRCbG9jaztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQXR0cmlidXRlKHR5cGU6IG51bWJlciwgdGV4dDogc3RyaW5nLCBjb250cm9sOiBTdGFja1BhbmVsKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZ3VpTWFpbi5nYW1lLnBsYXllci5mcmVlQXR0cmlidXRlc1BvaW50cykge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IEJ1dHRvbi5DcmVhdGVJbWFnZUJ1dHRvbihcInBsdXNcIiwgdGV4dCwgXCJhc3NldHMvZ3VpL3BsdXMucG5nXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmhlaWdodCA9IFwiNDBweFwiO1xuICAgICAgICAgICAgYnV0dG9uLnRoaWNrbmVzcyA9IDA7XG4gICAgICAgICAgICBidXR0b24ud2lkdGggPSAwLjQ7XG4gICAgICAgICAgICBidXR0b24uY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgYnV0dG9uLmZvbnRGYW1pbHkgPSBcIlJ1c2xhbkRpc3BsYXlcIjtcbiAgICAgICAgICAgIGJ1dHRvbi5mb250U2l6ZSA9IDE2O1xuICAgICAgICAgICAgY29udHJvbC5hZGRDb250cm9sKGJ1dHRvbik7XG5cbiAgICAgICAgICAgIGJ1dHRvbi5vblBvaW50ZXJVcE9ic2VydmFibGUuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmd1aU1haW4uZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ2FkZEF0dHJpYnV0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0ZXh0QmxvY2sgPSB0aGlzLmNyZWF0ZVRleHQodGV4dCk7XG4gICAgICAgICAgICBjb250cm9sLmFkZENvbnRyb2wodGV4dEJsb2NrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7UG9wdXB9IGZyb20gXCIuL1BvcHVwXCI7XG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi8uLi9QbGF5ZXIvSXRlbXMvSXRlbVwiO1xuaW1wb3J0IHtNYWlufSBmcm9tIFwiLi4vTWFpblwiO1xuaW1wb3J0IHtFcXVpcEJsb2NrfSBmcm9tIFwiLi9pbnZlbnRvcnkvRXF1aXBCbG9ja1wiO1xuaW1wb3J0IHtXZWFwb259IGZyb20gXCIuL2ludmVudG9yeS9XZWFwb25cIjtcbmltcG9ydCB7U2hpZWxkfSBmcm9tIFwiLi9pbnZlbnRvcnkvU2hpZWxkXCI7XG5pbXBvcnQge0dsb3Zlc30gZnJvbSBcIi4vaW52ZW50b3J5L0dsb3Zlc1wiO1xuaW1wb3J0IHtCb290c30gZnJvbSBcIi4vaW52ZW50b3J5L0Jvb3RzXCI7XG5pbXBvcnQge0FybW9yfSBmcm9tIFwiLi9pbnZlbnRvcnkvQXJtb3JcIjtcbmltcG9ydCB7SGVsbX0gZnJvbSBcIi4vaW52ZW50b3J5L0hlbG1cIjtcbmltcG9ydCB7VG9vbHRpcEhlbHBlcn0gZnJvbSBcIi4uL1Rvb2x0aXBzL1Rvb2x0aXBIZWxwZXJcIjtcbmltcG9ydCB7UmVjdGFuZ2xlLCBBZHZhbmNlZER5bmFtaWNUZXh0dXJlLCBDb250cm9sLCBJbWFnZSwgVGV4dEJsb2NrLCBCdXR0b24sIEdyaWQsIERpc3BsYXlHcmlkfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcbmltcG9ydCB7SW52ZW50b3J5RW52aXJvbm1lbnR9IGZyb20gXCIuLi8uLi9FbnZpcm9ubWVudC9JbnZlbnRvcnkvSW52ZW50b3J5RW52aXJvbm1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEludmVudG9yeSBleHRlbmRzIFBvcHVwIHtcblxuICAgIHByb3RlY3RlZCB3ZWFwb25JbWFnZTogRXF1aXBCbG9jaztcbiAgICBwcm90ZWN0ZWQgc2hpZWxkSW1hZ2U6IEVxdWlwQmxvY2s7XG4gICAgcHJvdGVjdGVkIGFybW9ySW1hZ2U6IEVxdWlwQmxvY2s7XG4gICAgcHJvdGVjdGVkIGdsb3Zlc0ltYWdlOiBFcXVpcEJsb2NrO1xuICAgIHByb3RlY3RlZCBib290c0ltYWdlOiBFcXVpcEJsb2NrO1xuICAgIHByb3RlY3RlZCBoZWxtSW1hZ2U6IEVxdWlwQmxvY2s7XG5cbiAgICBwcm90ZWN0ZWQgcGFuZWxJdGVtczogUmVjdGFuZ2xlO1xuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PEJBQllMT04uQWJzdHJhY3RNZXNoPiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoZ3VpTWFpbjogTWFpbikge1xuICAgICAgICBzdXBlcihndWlNYWluKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0ludmVudG9yeSc7XG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBcImFzc2V0cy9ndWkvaW52ZW50b3J5LnBuZ1wiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0VGV4dHVyZSgpIHtcbiAgICAgICAgdGhpcy5ndWlUZXh0dXJlID0gQWR2YW5jZWREeW5hbWljVGV4dHVyZS5DcmVhdGVGdWxsc2NyZWVuVUkoJ2d1aS4nICsgdGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy5ndWlUZXh0dXJlLmxheWVyLmxheWVyTWFzayA9IDE7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IG5ldyBSZWN0YW5nbGUoJ2d1aS5wYW5lbC4nICsgdGhpcy5uYW1lKTtcbiAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfQk9UVE9NO1xuICAgICAgICBjb250YWluZXIuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfUklHSFQ7XG4gICAgICAgIGNvbnRhaW5lci50aGlja25lc3MgPSAwO1xuICAgICAgICBjb250YWluZXIuaXNQb2ludGVyQmxvY2tlciA9IHRydWU7XG5cbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCdndWkucG9wdXAuaW1hZ2UuJywgdGhpcy5pbWFnZVVybCk7XG4gICAgICAgIGltYWdlLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX1JJR0hUO1xuICAgICAgICBpbWFnZS52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX0JPVFRPTTtcbiAgICAgICAgY29udGFpbmVyLmFkZENvbnRyb2woaW1hZ2UpO1xuXG4gICAgICAgIGxldCB3aWR0aENvbnRhaW5lciA9ICc2MDdweCc7XG4gICAgICAgIGxldCBoZWlnaHRDb250YWluZXIgPSAnOTYwcHgnO1xuICAgICAgICBsZXQgY2hlY2tsU2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24gKHdpZHRoKSB7XG4gICAgICAgICAgICBpZiAod2lkdGggPiAxODE5KSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLndpZHRoID0gcGFyc2VJbnQod2lkdGhDb250YWluZXIpKydweCc7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IHBhcnNlSW50KGhlaWdodENvbnRhaW5lcikrJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLndpZHRoID0gcGFyc2VJbnQod2lkdGhDb250YWluZXIpLzIrJ3B4JztcbiAgICAgICAgICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0Q29udGFpbmVyKS8yKydweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNoZWNrbFNpemVMaXN0ZW5lcih3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgY2hlY2tsU2l6ZUxpc3RlbmVyKHdpZHRoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMuZ3VpVGV4dHVyZS5hZGRDb250cm9sKGNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKSB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5ndWlNYWluLmdhbWU7XG5cbiAgICAgICAgdGhpcy5pbml0VGV4dHVyZSgpO1xuICAgICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNSZWZyZXNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0l0ZW1zKCk7XG4gICAgICAgIHRoaXMuc2hvd0VxdWlwZWRJdGVtcygpO1xuICAgICAgICB0aGlzLnNob3dTcGVjaWFsSXRlbXNBbmRHb2xkKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uQ2xvc2UoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1NwZWNpYWxJdGVtc0FuZEdvbGQoKSB7XG4gICAgICAgIGxldCBpbWFnZSA9IEJ1dHRvbi5DcmVhdGVJbWFnZUJ1dHRvbihcImd1aS5wb3B1cC5pbWFnZS5nb2xkXCIsICcnK3RoaXMuZ3VpTWFpbi5nYW1lLnBsYXllci5nb2xkKycnLCBcImFzc2V0cy9ndWkvZ29sZC5wbmdcIik7XG4gICAgICAgIGltYWdlLnRoaWNrbmVzcyA9IDA7XG4gICAgICAgIGltYWdlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgaW1hZ2UudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9CT1RUT007XG4gICAgICAgIGltYWdlLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX1JJR0hUO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDb250cm9sKGltYWdlKTtcblxuICAgICAgICBsZXQgaW1hZ2UyID0gQnV0dG9uLkNyZWF0ZUltYWdlQnV0dG9uKFwiZ3VpLnBvcHVwLmltYWdlLmtleVwiLCAnJyt0aGlzLmd1aU1haW4uZ2FtZS5wbGF5ZXIua2V5cysnJywgXCJhc3NldHMvZ3VpL2tleS5wbmdcIik7XG4gICAgICAgIGltYWdlMi50aGlja25lc3MgPSAwO1xuICAgICAgICBpbWFnZTIuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICBpbWFnZTIudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9CT1RUT007XG4gICAgICAgIGltYWdlMi5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9SSUdIVDtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ29udHJvbChpbWFnZTIpO1xuXG4gICAgICAgIGxldCBpbWFnZTMgPSBCdXR0b24uQ3JlYXRlSW1hZ2VCdXR0b24oXCJndWkucG9wdXAuaW1hZ2Uud2luZVwiLCAnMCcsIFwiYXNzZXRzL3NraWxscy9oZWFsLnBuZ1wiKTtcbiAgICAgICAgaW1hZ2UzLnRoaWNrbmVzcyA9IDA7XG4gICAgICAgIGltYWdlMy5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIGltYWdlMy52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX0JPVFRPTTtcbiAgICAgICAgaW1hZ2UzLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX1JJR0hUO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDb250cm9sKGltYWdlMyk7XG5cbiAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gJzM2cHgnO1xuICAgICAgICBpbWFnZS53aWR0aCA9ICcxNTBweCc7XG4gICAgICAgIGltYWdlLmxlZnQgPSBcIi0xNTBweFwiO1xuICAgICAgICBpbWFnZS5mb250U2l6ZSA9IDE4O1xuXG4gICAgICAgIGltYWdlMi5oZWlnaHQgPSAnMzZweCc7XG4gICAgICAgIGltYWdlMi53aWR0aCA9ICcxNTBweCc7XG4gICAgICAgIGltYWdlMi5sZWZ0ID0gXCIyMHB4XCI7XG4gICAgICAgIGltYWdlMi5mb250U2l6ZSA9IDE4O1xuXG4gICAgICAgIGltYWdlMy5oZWlnaHQgPSAnMzZweCc7XG4gICAgICAgIGltYWdlMy53aWR0aCA9ICcxNTBweCc7XG4gICAgICAgIGltYWdlMy5sZWZ0ID0gXCItMzAwcHhcIjtcbiAgICAgICAgaW1hZ2UzLmZvbnRTaXplID0gMTg7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCkge1xuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmd1aVRleHR1cmUuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNsb3NlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChtZXNoKSA9PiB7XG4gICAgICAgICAgICBtZXNoLmRpc3Bvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ3VpTWFpbi5nYW1lLnBsYXllci5yZWZyZXNoQ2FtZXJhUG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd0VxdWlwZWRJdGVtcygpIHtcbiAgICAgICAgdGhpcy53ZWFwb25JbWFnZSA9IG5ldyBXZWFwb24odGhpcyk7XG4gICAgICAgIHRoaXMuc2hpZWxkSW1hZ2UgPSBuZXcgU2hpZWxkKHRoaXMpO1xuICAgICAgICB0aGlzLmdsb3Zlc0ltYWdlID0gbmV3IEdsb3Zlcyh0aGlzKTtcbiAgICAgICAgdGhpcy5ib290c0ltYWdlID0gbmV3IEJvb3RzKHRoaXMpO1xuICAgICAgICB0aGlzLmFybW9ySW1hZ2UgPSBuZXcgQXJtb3IodGhpcyk7XG4gICAgICAgIHRoaXMuaGVsbUltYWdlID0gbmV3IEhlbG0odGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dJdGVtcygpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgaW52ZW50b3J5ID0gdGhpcy5ndWlNYWluLmdhbWUucGxheWVyLmludmVudG9yeTtcblxuICAgICAgICBpZiAodGhpcy5wYW5lbEl0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLmd1aVRleHR1cmUucmVtb3ZlQ29udHJvbCh0aGlzLnBhbmVsSXRlbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGVxaXVwZWRJdGVtcyA9IGludmVudG9yeS5nZXRFcXVpcGVkSXRlbXMoKTtcbiAgICAgICAgbGV0IGdyaWQgPSBuZXcgR3JpZCgpO1xuICAgICAgICBncmlkLndpZHRoID0gJzU2OHB4JztcbiAgICAgICAgZ3JpZC5oZWlnaHQgPScyODhweCc7XG4gICAgICAgIGdyaWQudG9wID0gJzI0N3B4JztcbiAgICAgICAgZ3JpZC5hZGRDb2x1bW5EZWZpbml0aW9uKDEpO1xuICAgICAgICBncmlkLmFkZENvbHVtbkRlZmluaXRpb24oMSk7XG4gICAgICAgIGdyaWQuYWRkQ29sdW1uRGVmaW5pdGlvbigxKTtcbiAgICAgICAgZ3JpZC5hZGRDb2x1bW5EZWZpbml0aW9uKDEpO1xuICAgICAgICBncmlkLmFkZENvbHVtbkRlZmluaXRpb24oMSk7XG4gICAgICAgIGdyaWQuYWRkQ29sdW1uRGVmaW5pdGlvbigxKTtcbiAgICAgICAgZ3JpZC5hZGRDb2x1bW5EZWZpbml0aW9uKDEpO1xuICAgICAgICBncmlkLmFkZENvbHVtbkRlZmluaXRpb24oMSk7XG5cbiAgICAgICAgZ3JpZC5hZGRSb3dEZWZpbml0aW9uKDEpO1xuICAgICAgICBncmlkLmFkZFJvd0RlZmluaXRpb24oMSk7XG4gICAgICAgIGdyaWQuYWRkUm93RGVmaW5pdGlvbigxKTtcbiAgICAgICAgZ3JpZC5hZGRSb3dEZWZpbml0aW9uKDEpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENvbnRyb2woZ3JpZCk7XG5cbiAgICAgICAgbGV0IGl0ZW1Db3VudCA9IDA7XG4gICAgICAgIGxldCByb3cgPSAtMTtcbiAgICAgICAgbGV0IGNvbGx1bW4gPSAtMTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludmVudG9yeS5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJyZWFrRGlzcGxheUl0ZW07XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGludmVudG9yeS5pdGVtc1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGVxdWlwZWRJdGVtIG9mIGVxaXVwZWRJdGVtcykge1xuICAgICAgICAgICAgICAgIGlmIChlcXVpcGVkSXRlbSA9PSBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrRGlzcGxheUl0ZW0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChicmVha0Rpc3BsYXlJdGVtKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtQ291bnQgJSA4ID09IDApIHtcbiAgICAgICAgICAgICAgICByb3crKztcbiAgICAgICAgICAgICAgICBjb2xsdW1uID0gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW1Db3VudCsrO1xuICAgICAgICAgICAgY29sbHVtbisrO1xuXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBCdXR0b24uQ3JlYXRlSW1hZ2VPbmx5QnV0dG9uKCdndWkucG9wdXAuaW1hZ2UuJyArIGl0ZW0ubmFtZSwgJ2Fzc2V0cy9NaW5pYXR1cmVzLycgKyBpdGVtLmltYWdlICsgJy5wbmcnKTtcbiAgICAgICAgICAgIGltYWdlLmhlaWdodCA9IDE7XG4gICAgICAgICAgICBpbWFnZS53aWR0aCA9IDE7XG4gICAgICAgICAgICBpbWFnZS50aGlja25lc3MgPSAwO1xuICAgICAgICAgICAgaW1hZ2UudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9CT1RUT007XG4gICAgICAgICAgICBpbWFnZS5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9SSUdIVDtcblxuICAgICAgICAgICAgZ3JpZC5hZGRDb250cm9sKGltYWdlLCByb3csIGNvbGx1bW4pO1xuXG4gICAgICAgICAgICBUb29sdGlwSGVscGVyLmNyZWF0ZVRvb2x0aXBPbkludmVudG9yeUl0ZW1CdXR0b24oc2VsZi5ndWlUZXh0dXJlLCBpdGVtLCBpbWFnZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ndWlNYWluLmdhbWUucGxheWVyLmludmVudG9yeS5lbWl0RXF1aXAoaXRlbSk7XG4gICAgICAgICAgICAgICAgc2VsZi5vblBvaW50ZXJVcEl0ZW1JbWFnZShpdGVtKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dJdGVtcygpO1xuICAgICAgICAgICAgICAgIHNlbGYuZ3VpTWFpbi5hdHRyaWJ1dGVzLnJlZnJlc2hQb3B1cCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2hlY2tTaXplTGlzdGVuZXIgPSBmdW5jdGlvbiAod2lkdGgpIHtcbiAgICAgICAgICAgIGlmICh3aWR0aCA+IDE4MTkpIHtcbiAgICAgICAgICAgICAgICBncmlkLndpZHRoID0gJzU2OHB4JztcbiAgICAgICAgICAgICAgICBncmlkLmhlaWdodCA9ICcyODhweCc7XG4gICAgICAgICAgICAgICAgZ3JpZC50b3AgPSAnMjQ3cHgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmlkLndpZHRoID0gJzI4NHB4JztcbiAgICAgICAgICAgICAgICBncmlkLmhlaWdodCA9ICcxNDRweCc7XG4gICAgICAgICAgICAgICAgZ3JpZC50b3AgPSAnMTIzcHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoZWNrU2l6ZUxpc3RlbmVyKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICBjaGVja1NpemVMaXN0ZW5lcih3aWR0aCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblBvaW50ZXJVcEl0ZW1JbWFnZShpdGVtOiBJdGVtKSB7XG4gICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2VhcG9uSW1hZ2UuYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlUZXh0dXJlLnJlbW92ZUNvbnRyb2wodGhpcy53ZWFwb25JbWFnZS5ibG9jayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy53ZWFwb25JbWFnZSA9IG5ldyBXZWFwb24odGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpZWxkSW1hZ2UuYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlUZXh0dXJlLnJlbW92ZUNvbnRyb2wodGhpcy5zaGllbGRJbWFnZS5ibG9jayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zaGllbGRJbWFnZSA9IG5ldyBTaGllbGQodGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVsbUltYWdlLmJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VpVGV4dHVyZS5yZW1vdmVDb250cm9sKHRoaXMuaGVsbUltYWdlLmJsb2NrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhlbG1JbWFnZSA9IG5ldyBIZWxtKHRoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdsb3Zlc0ltYWdlLmJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VpVGV4dHVyZS5yZW1vdmVDb250cm9sKHRoaXMuZ2xvdmVzSW1hZ2UuYmxvY2spO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZ2xvdmVzSW1hZ2UgPSBuZXcgR2xvdmVzKHRoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvb3RzSW1hZ2UuYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlUZXh0dXJlLnJlbW92ZUNvbnRyb2wodGhpcy5ib290c0ltYWdlLmJsb2NrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJvb3RzSW1hZ2UgPSBuZXcgQm9vdHModGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJtb3JJbWFnZS5ibG9jaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aVRleHR1cmUucmVtb3ZlQ29udHJvbCh0aGlzLmFybW9ySW1hZ2UuYmxvY2spO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYXJtb3JJbWFnZSA9IG5ldyBBcm1vcih0aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVJdGVtSW1hZ2UoaXRlbTogSXRlbSkge1xuICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoJ2d1aS5wb3B1cC5pbWFnZS4nICsgaXRlbS5uYW1lLCAnYXNzZXRzL01pbmlhdHVyZXMvJyArIGl0ZW0uaW1hZ2UgKyAnLnBuZycpO1xuICAgICAgICBpbWFnZS5zdHJldGNoID0gSW1hZ2UuU1RSRVRDSF9VTklGT1JNO1xuICAgICAgICBpbWFnZS5pc1BvaW50ZXJCbG9ja2VyID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQge0dhbWVPcHRpb25zfSBmcm9tIFwiLi4vLi4vT3B0aW9ucy9PcHRpb25zXCI7XG5pbXBvcnQge1BvcHVwfSBmcm9tIFwiLi9Qb3B1cFwiO1xuaW1wb3J0IHtNYWlufSBmcm9tIFwiLi4vTWFpblwiO1xuaW1wb3J0IHtTZWxlY3Rpb25QYW5lbCwgQ29udHJvbCwgU3RhY2tQYW5lbCwgQ2hlY2tib3hHcm91cCwgU2xpZGVyR3JvdXB9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgT3B0aW9ucyBleHRlbmRzIFBvcHVwIHtcblxuICAgICAgICBjb25zdHJ1Y3RvcihndWlNYWluOiBNYWluKSB7XG4gICAgICAgICAgICBzdXBlcihndWlNYWluKTtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9ICdPcHRpb25zJztcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBcImFzc2V0cy9ndWkvY29udGVudC5wbmdcIjtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBvcGVuKCkge1xuICAgICAgICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbml0VGV4dHVyZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmd1aVRleHR1cmUuYWRkQ29udHJvbCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLnNob3dUZXh0KCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbkNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ndWlUZXh0dXJlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2xvc2UgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIHNob3dUZXh0KCkge1xuICAgICAgICAgICAgbGV0IHBhbmVsID0gbmV3IFN0YWNrUGFuZWwoJ29wdGlvbnMucGFuZWwnKTtcbiAgICAgICAgICAgIHBhbmVsLmlzUG9pbnRlckJsb2NrZXIgPSB0cnVlO1xuICAgICAgICAgICAgcGFuZWwudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgICAgICBwYW5lbC5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9DRU5URVI7XG4gICAgICAgICAgICBwYW5lbC53aWR0aCA9IDAuODtcbiAgICAgICAgICAgIHBhbmVsLmhlaWdodCA9IDE7XG4gICAgICAgICAgICBwYW5lbC50b3AgPSAnMTAlJztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENvbnRyb2wocGFuZWwpO1xuICAgICAgICAgICAgY29uc3QgZ2FtZSA9IHRoaXMuZ3VpTWFpbi5nYW1lO1xuXG4gICAgICAgICAgICBjb25zdCBzaGFkb3dzR3JvdXAgPSBuZXcgQ2hlY2tib3hHcm91cChcIlNoYWRvd3NcIik7XG4gICAgICAgICAgICBzaGFkb3dzR3JvdXAuYWRkQ2hlY2tib3goXCJTdGF0aWMgc2hhZG93c1wiLCAoaXNDaGVja2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgR2FtZU9wdGlvbnMuc2F2ZUluTG9jYWxTdG9yYWdlKCdzdGF0aWNTaGFkb3dzJywgaXNDaGVja2VkLCBnYW1lKTtcbiAgICAgICAgICAgIH0sIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5vcHRpb25zLnN0YXRpY1NoYWRvd3MpO1xuICAgICAgICAgICAgc2hhZG93c0dyb3VwLmFkZENoZWNrYm94KFwiRHluYW1pYyBTaGFkb3dzXCIsIChpc0NoZWNrZWQpID0+IHtcbiAgICAgICAgICAgICAgICBHYW1lT3B0aW9ucy5zYXZlSW5Mb2NhbFN0b3JhZ2UoJ2R5bmFtaWNTaGFkb3dzJywgaXNDaGVja2VkLCBnYW1lKTtcbiAgICAgICAgICAgIH0sIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5vcHRpb25zLmR5bmFtaWNTaGFkb3dzKTtcblxuXG4gICAgICAgICAgICBjb25zdCBwb3N0UHJvY2Nlc3NHcm91cCA9IG5ldyBDaGVja2JveEdyb3VwKFwiUG9zdCBwcm9jY2Vzc2luZ1wiKTtcbiAgICAgICAgICAgIHBvc3RQcm9jY2Vzc0dyb3VwLmFkZENoZWNrYm94KFwiRW5hYmxlZFwiLCAoaXNDaGVja2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgR2FtZU9wdGlvbnMuc2F2ZUluTG9jYWxTdG9yYWdlKCdwb3N0UHJvY2Nlc3NpbmcnLCBpc0NoZWNrZWQsIGdhbWUpO1xuICAgICAgICAgICAgfSwgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm9wdGlvbnMucG9zdFByb2NjZXNzaW5nKTtcblxuICAgICAgICAgICAgcG9zdFByb2NjZXNzR3JvdXAuYWRkQ2hlY2tib3goXCJGWEFBXCIsIChpc0NoZWNrZWQpID0+IHtcbiAgICAgICAgICAgICAgICBHYW1lT3B0aW9ucy5zYXZlSW5Mb2NhbFN0b3JhZ2UoJ2Z4YWEnLCBpc0NoZWNrZWQsIGdhbWUpO1xuICAgICAgICAgICAgfSwgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm9wdGlvbnMuZnhhYSk7XG5cbiAgICAgICAgICAgIHBvc3RQcm9jY2Vzc0dyb3VwLmFkZENoZWNrYm94KFwiRGVwdGggT2YgRmllbGRcIiwgKGlzQ2hlY2tlZCkgPT4ge1xuICAgICAgICAgICAgICAgIEdhbWVPcHRpb25zLnNhdmVJbkxvY2FsU3RvcmFnZSgnZG9mJywgaXNDaGVja2VkLCBnYW1lKTtcbiAgICAgICAgICAgIH0sIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5vcHRpb25zLmRvZik7XG5cbiAgICAgICAgICAgIC8vIGxldCBkb2ZHcm91cCA9IG5ldyBTbGlkZXJHcm91cChcIkRPRlwiKTtcbiAgICAgICAgICAgIC8vIGRvZkdyb3VwLmFkZFNsaWRlcihcImZTdG9wXCIsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIEdhbWVPcHRpb25zLnNhdmVJbkxvY2FsU3RvcmFnZSgnZlN0b3AnLCB2YWx1ZSwgZ2FtZSk7XG4gICAgICAgICAgICAvLyB9LCBcIlwiLCAwLjAxLCAxMCwgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm9wdGlvbnMuZlN0b3AsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGRvZkdyb3VwLmFkZFNsaWRlcihcImZvY3VzRGlzdGFuY2VcIiwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgR2FtZU9wdGlvbnMuc2F2ZUluTG9jYWxTdG9yYWdlKCdmb2N1c0Rpc3RhbmNlJywgdmFsdWUsIGdhbWUpO1xuICAgICAgICAgICAgLy8gfSwgXCJcIiwgMCwgNDUwMDAsIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5vcHRpb25zLmZvY3VzRGlzdGFuY2UsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGRvZkdyb3VwLmFkZFNsaWRlcihcImZvY2FsTGVuZ3RoXCIsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIEdhbWVPcHRpb25zLnNhdmVJbkxvY2FsU3RvcmFnZSgnZm9jYWxMZW5ndGgnLCB2YWx1ZSwgZ2FtZSk7XG4gICAgICAgICAgICAvLyB9LCBcIlwiLCAwLjAxLCA1MDAuMDAsIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5vcHRpb25zLmZvY2FsTGVuZ3RoLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBkb2ZHcm91cC5hZGRTbGlkZXIoXCJsZW5zU2l6ZVwiLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBHYW1lT3B0aW9ucy5zYXZlSW5Mb2NhbFN0b3JhZ2UoJ2xlbnNTaXplJywgdmFsdWUsIGdhbWUpO1xuICAgICAgICAgICAgLy8gfSwgXCJcIiwgMC4wMSwgNTAwLjAwLCBnYW1lLmdldFNjZW5lTWFuZ2VyKCkub3B0aW9ucy5sZW5zU2l6ZSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIHBvc3RQcm9jY2Vzc0dyb3VwLmFkZENoZWNrYm94KFwiQmxvb21cIiwgKGlzQ2hlY2tlZCkgPT4ge1xuICAgICAgICAgICAgICAgIEdhbWVPcHRpb25zLnNhdmVJbkxvY2FsU3RvcmFnZSgnYmxvb20nLCBpc0NoZWNrZWQsIGdhbWUpO1xuICAgICAgICAgICAgfSwgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm9wdGlvbnMuYmxvb20pO1xuXG4gICAgICAgICAgICBwb3N0UHJvY2Nlc3NHcm91cC5hZGRDaGVja2JveChcIkZvZ1wiLCAoaXNDaGVja2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgR2FtZU9wdGlvbnMuc2F2ZUluTG9jYWxTdG9yYWdlKCdmb2cnLCBpc0NoZWNrZWQsIGdhbWUpO1xuICAgICAgICAgICAgfSwgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm9wdGlvbnMuZm9nKTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdEJveCA9IG5ldyBTZWxlY3Rpb25QYW5lbChcInNwXCIsIFtzaGFkb3dzR3JvdXAsIHBvc3RQcm9jY2Vzc0dyb3VwXSk7XG4gICAgICAgICAgICBzZWxlY3RCb3gud2lkdGggPSAwLjg7XG4gICAgICAgICAgICBzZWxlY3RCb3guaGVpZ2h0ID0gMC44O1xuICAgICAgICAgICAgc2VsZWN0Qm94LnRoaWNrbmVzcyA9IDA7XG4gICAgICAgICAgICBzZWxlY3RCb3guY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBzZWxlY3RCb3guaGVhZGVyQ29sb3IgPSBcImJyb3duXCI7XG4gICAgICAgICAgICBzZWxlY3RCb3guZm9udEZhbWlseSA9IFwiUnVzbGFuRGlzcGxheVwiO1xuICAgICAgICAgICAgcGFuZWwuYWRkQ29udHJvbChzZWxlY3RCb3gpO1xuICAgICAgICB9XG5cbiAgICB9XG4iLCJpbXBvcnQge01haW59IGZyb20gXCIuLi9NYWluXCI7XG5pbXBvcnQge0FkdmFuY2VkRHluYW1pY1RleHR1cmUsIFJlY3RhbmdsZSwgQ29udHJvbCwgSW1hZ2UsIEJ1dHRvbn0gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb3B1cCB7XG5cbiAgICBwdWJsaWMgZ3VpTWFpbjogTWFpbjtcbiAgICBwdWJsaWMgZ3VpVGV4dHVyZTogQWR2YW5jZWREeW5hbWljVGV4dHVyZTtcbiAgICBwdWJsaWMgY29udGFpbmVyOiBSZWN0YW5nbGU7XG4gICAgcHVibGljIG9wZW5lZDogYm9vbGVhbjtcblxuICAgIHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGltYWdlVXJsOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGNvbnRhaW5lckJhY2tncm91bmQ6IEltYWdlO1xuICAgIHByb3RlY3RlZCBidXR0b25DbG9zZTogQ29udHJvbDtcbiAgICBwcm90ZWN0ZWQgaXNSZWZyZXNoOiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZ3VpTWFpbjogTWFpbikge1xuICAgICAgICB0aGlzLmd1aU1haW4gPSBndWlNYWluO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0VGV4dHVyZSgpIHtcbiAgICAgICAgdGhpcy5ndWlUZXh0dXJlID0gQWR2YW5jZWREeW5hbWljVGV4dHVyZS5DcmVhdGVGdWxsc2NyZWVuVUkoJ2d1aS4nICsgdGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy5ndWlUZXh0dXJlLmxheWVyLmxheWVyTWFzayA9IDE7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBuZXcgUmVjdGFuZ2xlKCdndWkucGFuZWwuJyArIHRoaXMubmFtZSk7XG4gICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsQWxpZ25tZW50ID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICBjb250YWluZXIudGhpY2tuZXNzID0gMDtcbiAgICAgICAgY29udGFpbmVyLmlzUG9pbnRlckJsb2NrZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5ndWlUZXh0dXJlLmFkZENvbnRyb2woY29udGFpbmVyKTtcblxuICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoJ2d1aS5wb3B1cC5pbWFnZS4nLCB0aGlzLmltYWdlVXJsKTtcbiAgICAgICAgaW1hZ2UuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfUklHSFQ7XG4gICAgICAgIGltYWdlLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfQk9UVE9NO1xuICAgICAgICBpbWFnZS53aWR0aCA9IDE7XG4gICAgICAgIGltYWdlLmhlaWdodCA9IDE7XG4gICAgICAgIGltYWdlLmlzUG9pbnRlckJsb2NrZXIgPSB0cnVlO1xuICAgICAgICBjb250YWluZXIuYWRkQ29udHJvbChpbWFnZSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ29udHJvbChpbWFnZSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQmFja2dyb3VuZCA9IGltYWdlO1xuXG4gICAgICAgIGNvbnRhaW5lci53aWR0aCA9ICc2ODVweCc7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSAnODglJztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQnV0dG9uQ2xvc2UoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGJ1dHRvbkNsb3NlID0gQnV0dG9uLkNyZWF0ZUltYWdlT25seUJ1dHRvbihcImJ1dHRvbkNsb3NlXCIsIFwiYXNzZXRzL2d1aS9idXR0b25zL2Nsb3NlLnBuZ1wiKTtcbiAgICAgICAgYnV0dG9uQ2xvc2Uud2lkdGggPSBcIjMwcHg7XCI7XG4gICAgICAgIGJ1dHRvbkNsb3NlLmhlaWdodCA9IFwiMzBweFwiO1xuICAgICAgICBidXR0b25DbG9zZS50aGlja25lc3MgPSAwO1xuICAgICAgICBidXR0b25DbG9zZS52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgYnV0dG9uQ2xvc2UuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfUklHSFQ7XG5cbiAgICAgICAgYnV0dG9uQ2xvc2Uub25Qb2ludGVyVXBPYnNlcnZhYmxlLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENvbnRyb2woYnV0dG9uQ2xvc2UpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNsb3NlID0gYnV0dG9uQ2xvc2U7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hbmFnZU1haW5HVUkoc2hvdzogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5ndWlNYWluLnJvb21JbmZvcm1hdG9uLmd1aVBhbmVsLmlzVmlzaWJsZSA9IHNob3c7XG4gICAgICAgIHRoaXMuZ3VpTWFpbi5wbGF5ZXJCb3R0b21QYW5lbC5jb250YWluZXIuaXNWaXNpYmxlID0gc2hvdztcbiAgICAgICAgdGhpcy5ndWlNYWluLnBsYXllckxvZ3NRdWVzdHMuZ3VpUGFuZWwuaXNWaXNpYmxlID0gc2hvdztcbiAgICAgICAgaWYgKHRoaXMuZ3VpTWFpbi5wbGF5ZXJRdWVzdEluZm9ybWF0aW9uLmd1aVBhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLmd1aU1haW4ucGxheWVyUXVlc3RJbmZvcm1hdGlvbi5ndWlQYW5lbC5pc1Zpc2libGUgPSBzaG93O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmd1aU1haW4uY2hhcmFjdGVyVG9wSHAuZ3VpUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZ3VpTWFpbi5jaGFyYWN0ZXJUb3BIcC5ndWlQYW5lbC5pc1Zpc2libGUgPSBzaG93O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgcmVmcmVzaFBvcHVwKCkge1xuICAgICAgICB0aGlzLmlzUmVmcmVzaCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgb3BlbigpO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGNsb3NlKClcblxufVxuIiwiaW1wb3J0IHtFcXVpcEJsb2NrfSBmcm9tIFwiLi9FcXVpcEJsb2NrXCI7XG5pbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4uL0ludmVudG9yeVwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGNsYXNzIEFybW9yIGV4dGVuZHMgRXF1aXBCbG9jayB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnZlbnRvcnk6IEludmVudG9yeSkge1xuICAgICAgICBzdXBlcihpbnZlbnRvcnkpO1xuXG4gICAgICAgIHRoaXMuYmxvY2tXaWR0aCA9IFwiMTUzcHhcIjtcbiAgICAgICAgdGhpcy5ibG9ja0hlaWdodCA9IFwiMjUwcHhcIjtcbiAgICAgICAgdGhpcy5ibG9ja1RvcCA9IFwiMjcwcHhcIjtcbiAgICAgICAgdGhpcy5ibG9ja0xlZnQgPSBcIjIyOHB4XCI7XG5cbiAgICAgICAgdGhpcy5pdGVtID0gaW52ZW50b3J5Lmd1aU1haW4uZ2FtZS5wbGF5ZXIuaW52ZW50b3J5LmFybW9yO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQmxvY2tXaXRoSW1hZ2UoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7RXF1aXBCbG9ja30gZnJvbSBcIi4vRXF1aXBCbG9ja1wiO1xuaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuLi9JbnZlbnRvcnlcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5cbmV4cG9ydCBjbGFzcyBCb290cyBleHRlbmRzIEVxdWlwQmxvY2sge1xuXG4gICAgY29uc3RydWN0b3IoaW52ZW50b3J5OiBJbnZlbnRvcnkpIHtcbiAgICAgICAgc3VwZXIoaW52ZW50b3J5KTtcblxuICAgICAgICB0aGlzLmJsb2NrV2lkdGggPSBcIjk2cHhcIjtcbiAgICAgICAgdGhpcy5ibG9ja0hlaWdodCA9IFwiOTJweFwiO1xuICAgICAgICB0aGlzLmJsb2NrVG9wID0gXCI0NDJweFwiO1xuICAgICAgICB0aGlzLmJsb2NrTGVmdCA9IFwiODJweFwiO1xuXG4gICAgICAgIHRoaXMuaXRlbSA9IGludmVudG9yeS5ndWlNYWluLmdhbWUucGxheWVyLmludmVudG9yeS5ib290cztcblxuICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrV2l0aEltYWdlKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4uL0ludmVudG9yeVwiO1xuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vLi4vLi4vUGxheWVyL0l0ZW1zL0l0ZW1cIjtcbmltcG9ydCB7VG9vbHRpcEhlbHBlcn0gZnJvbSBcIi4uLy4uL1Rvb2x0aXBzL1Rvb2x0aXBIZWxwZXJcIjtcbmltcG9ydCB7Q29udHJvbCwgUmVjdGFuZ2xlLCBJbWFnZX0gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFcXVpcEJsb2NrIHtcbiAgICBwcm90ZWN0ZWQgaW52ZW50b3J5OiBJbnZlbnRvcnk7XG5cbiAgICBwcm90ZWN0ZWQgaXRlbTogSXRlbTtcbiAgICBwcm90ZWN0ZWQgYmxvY2tXaWR0aDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBibG9ja0hlaWdodDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBibG9ja1RvcDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBibG9ja0xlZnQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgdmVydGljYWxBbGlnbm1lbnQ6IG51bWJlcjtcblxuICAgIHB1YmxpYyBibG9jazogUmVjdGFuZ2xlO1xuICAgIHB1YmxpYyBpbWFnZTogSW1hZ2U7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnZlbnRvcnk6IEludmVudG9yeSkge1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IGludmVudG9yeTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQmxvY2tXaXRoSW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW0pIHtcbiAgICAgICAgICAgIGxldCBwYW5lbEl0ZW0gPSBuZXcgUmVjdGFuZ2xlKCk7XG4gICAgICAgICAgICBwYW5lbEl0ZW0uaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfTEVGVDtcbiAgICAgICAgICAgIHBhbmVsSXRlbS52ZXJ0aWNhbEFsaWdubWVudCA9IHRoaXMudmVydGljYWxBbGlnbm1lbnQ7XG4gICAgICAgICAgICBwYW5lbEl0ZW0udGhpY2tuZXNzID0gMDtcbiAgICAgICAgICAgIHBhbmVsSXRlbS53aWR0aCA9IHRoaXMuYmxvY2tXaWR0aDtcbiAgICAgICAgICAgIHBhbmVsSXRlbS5oZWlnaHQgPSB0aGlzLmJsb2NrSGVpZ2h0O1xuICAgICAgICAgICAgcGFuZWxJdGVtLnRvcCA9IHRoaXMuYmxvY2tUb3A7XG4gICAgICAgICAgICBwYW5lbEl0ZW0ubGVmdCA9IHRoaXMuYmxvY2tMZWZ0O1xuICAgICAgICAgICAgcGFuZWxJdGVtLmlzUG9pbnRlckJsb2NrZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmludmVudG9yeS5jb250YWluZXIuYWRkQ29udHJvbChwYW5lbEl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5ibG9jayA9IHBhbmVsSXRlbTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW1hZ2UoKTtcblxuICAgICAgICAgICAgbGV0IGJsb2NrV2lkdGggPSB0aGlzLmJsb2NrV2lkdGg7XG4gICAgICAgICAgICBsZXQgYmxvY2tIZWlnaHQgPSB0aGlzLmJsb2NrSGVpZ2h0O1xuICAgICAgICAgICAgbGV0IGJsb2NrVG9wID0gdGhpcy5ibG9ja1RvcDtcbiAgICAgICAgICAgIGxldCBibG9ja0xlZnQgPSB0aGlzLmJsb2NrTGVmdDtcbiAgICAgICAgICAgIGxldCBjaGVja1NpemVMaXN0ZW5lciA9IGZ1bmN0aW9uICh3aWR0aCkge1xuICAgICAgICAgICAgICAgIGlmICh3aWR0aCA+IDE4MTkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFuZWxJdGVtLndpZHRoID0gYmxvY2tXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgcGFuZWxJdGVtLmhlaWdodCA9IGJsb2NrSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwYW5lbEl0ZW0udG9wID0gYmxvY2tUb3A7XG4gICAgICAgICAgICAgICAgICAgIHBhbmVsSXRlbS5sZWZ0ID0gYmxvY2tMZWZ0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhbmVsSXRlbS53aWR0aCA9IHBhcnNlSW50KGJsb2NrV2lkdGgpIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHBhbmVsSXRlbS5oZWlnaHQgPSBwYXJzZUludChibG9ja0hlaWdodCkgLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgcGFuZWxJdGVtLnRvcCA9IHBhcnNlSW50KGJsb2NrVG9wKSAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBwYW5lbEl0ZW0ubGVmdCA9IHBhcnNlSW50KGJsb2NrTGVmdCkgLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2hlY2tTaXplTGlzdGVuZXIod2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIGNoZWNrU2l6ZUxpc3RlbmVyKHdpZHRoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVJbWFnZSgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbTtcblxuICAgICAgICBpZiAoaXRlbS5zdGF0aXN0aWNzKSB7XG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSB0aGlzLmludmVudG9yeS5jcmVhdGVJdGVtSW1hZ2UoaXRlbSk7XG4gICAgICAgICAgICBUb29sdGlwSGVscGVyLmNyZWF0ZVRvb2x0aXBPbkludmVudG9yeUl0ZW1CdXR0b24oc2VsZi5pbnZlbnRvcnkuZ3VpVGV4dHVyZSwgaXRlbSwgaW1hZ2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmludmVudG9yeS5ndWlNYWluLmdhbWUucGxheWVyLmludmVudG9yeS5lbWl0RXF1aXAoc2VsZi5pdGVtKTtcbiAgICAgICAgICAgICAgICBzZWxmLmludmVudG9yeS5ndWlUZXh0dXJlLnJlbW92ZUNvbnRyb2woc2VsZi5ibG9jayk7XG4gICAgICAgICAgICAgICAgc2VsZi5pbnZlbnRvcnkuc2hvd0l0ZW1zKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5pbnZlbnRvcnkuZ3VpTWFpbi5hdHRyaWJ1dGVzLnJlZnJlc2hQb3B1cCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuYmxvY2suYWRkQ29udHJvbChpbWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7RXF1aXBCbG9ja30gZnJvbSBcIi4vRXF1aXBCbG9ja1wiO1xuaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuLi9JbnZlbnRvcnlcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5cbmV4cG9ydCBjbGFzcyBHbG92ZXMgZXh0ZW5kcyBFcXVpcEJsb2NrIHtcblxuICAgIGNvbnN0cnVjdG9yKGludmVudG9yeTogSW52ZW50b3J5KSB7XG4gICAgICAgIHN1cGVyKGludmVudG9yeSk7XG5cbiAgICAgICAgdGhpcy5ibG9ja1dpZHRoID0gXCI5NnB4XCI7XG4gICAgICAgIHRoaXMuYmxvY2tIZWlnaHQgPSBcIjkycHhcIjtcbiAgICAgICAgdGhpcy5ibG9ja1RvcCA9IFwiNDQycHhcIjtcbiAgICAgICAgdGhpcy5ibG9ja0xlZnQgPSBcIjQyOHB4XCI7XG5cbiAgICAgICAgdGhpcy5pdGVtID0gaW52ZW50b3J5Lmd1aU1haW4uZ2FtZS5wbGF5ZXIuaW52ZW50b3J5Lmdsb3ZlcztcblxuICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrV2l0aEltYWdlKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0VxdWlwQmxvY2t9IGZyb20gXCIuL0VxdWlwQmxvY2tcIjtcbmltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi4vSW52ZW50b3J5XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgSGVsbSBleHRlbmRzIEVxdWlwQmxvY2sge1xuXG4gICAgY29uc3RydWN0b3IoaW52ZW50b3J5OiBJbnZlbnRvcnkpIHtcbiAgICAgICAgc3VwZXIoaW52ZW50b3J5KTtcblxuICAgICAgICB0aGlzLmJsb2NrV2lkdGggPSBcIjk2cHhcIjtcbiAgICAgICAgdGhpcy5ibG9ja0hlaWdodCA9IFwiOTJweFwiO1xuICAgICAgICB0aGlzLmJsb2NrVG9wID0gXCIxMjFweFwiO1xuICAgICAgICB0aGlzLmJsb2NrTGVmdCA9IFwiMjU3cHhcIjtcblxuICAgICAgICB0aGlzLml0ZW0gPSBpbnZlbnRvcnkuZ3VpTWFpbi5nYW1lLnBsYXllci5pbnZlbnRvcnkuaGVsbTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrV2l0aEltYWdlKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4uL0ludmVudG9yeVwiO1xuaW1wb3J0IHtFcXVpcEJsb2NrfSBmcm9tIFwiLi9FcXVpcEJsb2NrXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgU2hpZWxkIGV4dGVuZHMgRXF1aXBCbG9jayB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnZlbnRvcnk6IEludmVudG9yeSkge1xuICAgICAgICBzdXBlcihpbnZlbnRvcnkpO1xuXG4gICAgICAgIHRoaXMuYmxvY2tXaWR0aCA9IFwiOTBweFwiO1xuICAgICAgICB0aGlzLmJsb2NrSGVpZ2h0ID0gXCIxNDZweFwiO1xuICAgICAgICB0aGlzLmJsb2NrVG9wID0gXCIyNDhweFwiO1xuICAgICAgICB0aGlzLmJsb2NrTGVmdCA9IFwiNDM1cHhcIjtcblxuICAgICAgICB0aGlzLml0ZW0gPSBpbnZlbnRvcnkuZ3VpTWFpbi5nYW1lLnBsYXllci5pbnZlbnRvcnkuc2hpZWxkO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQmxvY2tXaXRoSW1hZ2UoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi4vSW52ZW50b3J5XCI7XG5pbXBvcnQge0VxdWlwQmxvY2t9IGZyb20gXCIuL0VxdWlwQmxvY2tcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5cbmV4cG9ydCBjbGFzcyBXZWFwb24gZXh0ZW5kcyBFcXVpcEJsb2NrIHtcblxuICAgIGNvbnN0cnVjdG9yKGludmVudG9yeTogSW52ZW50b3J5KSB7XG4gICAgICAgIHN1cGVyKGludmVudG9yeSk7XG5cbiAgICAgICAgdGhpcy5ibG9ja1dpZHRoID0gXCI5MHB4XCI7XG4gICAgICAgIHRoaXMuYmxvY2tIZWlnaHQgPSBcIjE0NnB4XCI7XG4gICAgICAgIHRoaXMuYmxvY2tUb3AgPSBcIjI0OHB4XCI7XG4gICAgICAgIHRoaXMuYmxvY2tMZWZ0ID0gXCI4NXB4XCI7XG5cblxuICAgICAgICB0aGlzLml0ZW0gPSBpbnZlbnRvcnkuZ3VpTWFpbi5nYW1lLnBsYXllci5pbnZlbnRvcnkud2VhcG9uO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQmxvY2tXaXRoSW1hZ2UoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7UG9wdXB9IGZyb20gXCIuL1BvcHVwXCI7XG5pbXBvcnQge01haW59IGZyb20gXCIuLi9NYWluXCI7XG5pbXBvcnQge0J1dHRvbiwgQ29udHJvbCwgVGV4dEJsb2NrfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGNsYXNzIE5ld1F1ZXN0IGV4dGVuZHMgUG9wdXAge1xuXG4gICAgcHJvdGVjdGVkIHF1ZXN0RGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IoZ3VpTWFpbjogTWFpbiwgcXVlc3RTZXJ2ZXJEYXRhKSB7XG4gICAgICAgIHN1cGVyKGd1aU1haW4pO1xuICAgICAgICB0aGlzLnF1ZXN0RGF0YSA9IHF1ZXN0U2VydmVyRGF0YTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1F1ZXN0JztcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IFwiYXNzZXRzL2d1aS9jb250ZW50LnBuZ1wiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9DRU5URVI7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmluaXRUZXh0dXJlKCk7XG5cbiAgICAgICAgdGhpcy5ndWlUZXh0dXJlLmFkZENvbnRyb2wodGhpcy5jb250YWluZXIpO1xuICAgICAgICB0aGlzLnNob3dUZXh0KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uQ2xvc2UoKTtcblxuICAgICAgICBsZXQgYnV0dG9uQWNjZXB0ID0gQnV0dG9uLkNyZWF0ZVNpbXBsZUJ1dHRvbihcInF1ZXN0c0J1dHRvbkFjY2VwdFwiLCBcIkFjY2VwdCBxdWVzdFwiKTtcbiAgICAgICAgYnV0dG9uQWNjZXB0LmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgYnV0dG9uQWNjZXB0LmJhY2tncm91bmQgPSBcImJsYWNrXCI7XG4gICAgICAgIGJ1dHRvbkFjY2VwdC53aWR0aCA9IFwiMTgwcHg7XCI7XG4gICAgICAgIGJ1dHRvbkFjY2VwdC5oZWlnaHQgPSBcIjQ4cHhcIjtcbiAgICAgICAgYnV0dG9uQWNjZXB0LnRoaWNrbmVzcyA9IDA7XG4gICAgICAgIGJ1dHRvbkFjY2VwdC52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX0JPVFRPTTtcbiAgICAgICAgYnV0dG9uQWNjZXB0Lmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcblxuICAgICAgICBidXR0b25BY2NlcHQub25Qb2ludGVyVXBPYnNlcnZhYmxlLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmd1aU1haW4uZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ2FjY2VwdFF1ZXN0Jywgc2VsZi5xdWVzdERhdGEucXVlc3RJZCk7XG4gICAgICAgICAgICBzZWxmLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENvbnRyb2woYnV0dG9uQWNjZXB0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ3VpVGV4dHVyZS5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2UgPSBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzaG93VGV4dCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgdGl0bGUgPSBuZXcgVGV4dEJsb2NrKCd0aXRsZScpO1xuICAgICAgICB0aXRsZS52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgdGl0bGUuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfQ0VOVEVSO1xuICAgICAgICB0aXRsZS50ZXh0ID0gdGhpcy5xdWVzdERhdGEudGl0bGU7XG4gICAgICAgIHRpdGxlLnRvcCA9IFwiMiVcIjtcbiAgICAgICAgdGl0bGUuY29sb3IgPSBcImJyb3duXCI7XG4gICAgICAgIHRpdGxlLndpZHRoID0gXCI3MCVcIjtcbiAgICAgICAgdGl0bGUuaGVpZ2h0ID0gXCIxMCVcIjtcbiAgICAgICAgdGl0bGUuZm9udFNpemUgPSAzODtcbiAgICAgICAgdGl0bGUuZm9udEZhbWlseSA9IFwiUnVzbGFuRGlzcGxheVwiO1xuICAgICAgICB0aXRsZS50ZXh0V3JhcHBpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDb250cm9sKHRpdGxlKTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBuZXcgVGV4dEJsb2NrKCdkZXNjcnB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICBkZXNjcmlwdGlvbi5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9DRU5URVI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHQgPSB0aGlzLnF1ZXN0RGF0YS5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGVzY3JpcHRpb24uY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRvcCA9IFwiMTAlXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLndpZHRoID0gXCI3MCVcIjtcbiAgICAgICAgZGVzY3JpcHRpb24uaGVpZ2h0ID0gXCIxMCVcIjtcbiAgICAgICAgZGVzY3JpcHRpb24uZm9udFNpemUgPSAxNjtcbiAgICAgICAgZGVzY3JpcHRpb24uZm9udEZhbWlseSA9IFwiUnVzbGFuRGlzcGxheVwiO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0V3JhcHBpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDb250cm9sKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucXVlc3REYXRhLmNoYXB0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGFwdGVyRGF0YTogYW55LCBjaGFwdGVyKSB7XG4gICAgICAgICAgICBsZXQgdG9wUGFkZGluZyA9IChjaGFwdGVyICogMTUpO1xuXG4gICAgICAgICAgICBsZXQgY2hhcHRlckhlYWRlciA9IG5ldyBUZXh0QmxvY2soKTtcbiAgICAgICAgICAgIGNoYXB0ZXJIZWFkZXIudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgICAgICBjaGFwdGVySGVhZGVyLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcbiAgICAgICAgICAgIGNoYXB0ZXJIZWFkZXIudGV4dCA9ICdDaGFwdGVyICcgKyAoY2hhcHRlciArIDEpXG4gICAgICAgICAgICBjaGFwdGVySGVhZGVyLnRvcCA9IHRvcFBhZGRpbmcgKyAxNSArIFwiJVwiO1xuICAgICAgICAgICAgY2hhcHRlckhlYWRlci53aWR0aCA9IFwiNzAlXCI7XG4gICAgICAgICAgICBjaGFwdGVySGVhZGVyLmhlaWdodCA9IFwiMjUlXCI7XG4gICAgICAgICAgICBjaGFwdGVySGVhZGVyLmNvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgY2hhcHRlckhlYWRlci5mb250U2l6ZSA9IDMwO1xuICAgICAgICAgICAgY2hhcHRlckhlYWRlci5mb250RmFtaWx5ID0gXCJSdXNsYW5EaXNwbGF5XCI7XG4gICAgICAgICAgICBjaGFwdGVySGVhZGVyLnRleHRXcmFwcGluZyA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmNvbnRhaW5lci5hZGRDb250cm9sKGNoYXB0ZXJIZWFkZXIpO1xuXG4gICAgICAgICAgICBsZXQgY2hhcHRlckRlc2NyaXB0aW9uID0gbmV3IFRleHRCbG9jaygpO1xuICAgICAgICAgICAgY2hhcHRlckRlc2NyaXB0aW9uLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICAgICAgY2hhcHRlckRlc2NyaXB0aW9uLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcbiAgICAgICAgICAgIGNoYXB0ZXJEZXNjcmlwdGlvbi50ZXh0ID0gY2hhcHRlckRhdGEuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBjaGFwdGVyRGVzY3JpcHRpb24udG9wID0gdG9wUGFkZGluZyArIDIyICsgXCIlXCI7XG4gICAgICAgICAgICBjaGFwdGVyRGVzY3JpcHRpb24ud2lkdGggPSBcIjcwJVwiO1xuICAgICAgICAgICAgY2hhcHRlckRlc2NyaXB0aW9uLmhlaWdodCA9IFwiMjUlXCI7XG4gICAgICAgICAgICBjaGFwdGVyRGVzY3JpcHRpb24uY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjaGFwdGVyRGVzY3JpcHRpb24uZm9udFNpemUgPSAxNjtcbiAgICAgICAgICAgIGNoYXB0ZXJEZXNjcmlwdGlvbi5mb250RmFtaWx5ID0gXCJSdXNsYW5EaXNwbGF5XCI7XG4gICAgICAgICAgICBjaGFwdGVyRGVzY3JpcHRpb24udGV4dFdyYXBwaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgc2VsZi5jb250YWluZXIuYWRkQ29udHJvbChjaGFwdGVyRGVzY3JpcHRpb24pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5pbXBvcnQge1NjZW5lfSBmcm9tIFwiLi9TY2VuZXMvU2NlbmVcIjtcbmltcG9ydCB7TW91c2V9IGZyb20gXCIuL0NvbnRyb2xsZXJzL01vdXNlXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vQ2hhcmFjdGVycy9QbGF5ZXJcIjtcbmltcG9ydCB7U29ja2V0Q2xpZW50fSBmcm9tIFwiLi9Tb2NrZXRDbGllbnQvc29ja2V0Q2xpZW50XCI7XG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzL0V2ZW50c1wiO1xuaW1wb3J0IHtNYWlufSBmcm9tIFwiLi9HVUkvTWFpblwiO1xuaW1wb3J0IHtTbGF2c0xvYWRlcn0gZnJvbSBcIi4vTG9hZGVyL1NsYXZzTG9hZGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcblxuICAgIHN0YXRpYyBTSE9XX0NPTExJREVSUyA9IDA7XG4gICAgc3RhdGljIFNIT1dfREVCVUcgPSAwO1xuICAgIHN0YXRpYyBNT0JJTEVfQ0xJRU5UID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgY29udHJvbGxlcjogTW91c2U7XG4gICAgcHVibGljIGVuZ2luZTogQkFCWUxPTi5FbmdpbmU7XG4gICAgcHVibGljIHNvY2tldENsaWVudDogU29ja2V0Q2xpZW50O1xuICAgIHB1YmxpYyBwbGF5ZXI6IFBsYXllcjtcbiAgICBwdWJsaWMgZ3VpOiBNYWluO1xuICAgIHB1YmxpYyBhY3RpdmVTY2VuZTogU2NlbmU7XG4gICAgcHVibGljIGV2ZW50czogRXZlbnRzO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIHNlcnZlclVybDogc3RyaW5nLCBhY2Nlc3NUb2tlbjogc3RyaW5nLCBpc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlLCBpc0RlYnVnOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGlzRGVidWcpIHtcbiAgICAgICAgICAgIEdhbWUuU0hPV19ERUJVRyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZS5NT0JJTEVfQ0xJRU5UID0gaXNNb2JpbGU7XG5cbiAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUoY2FudmFzRWxlbWVudCwgZmFsc2UsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5lbmdpbmUubG9hZGluZ1NjcmVlbiA9IG5ldyBTbGF2c0xvYWRlcignSW5pdGlhbGl6ZSBlbmdpbmUnKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IE1vdXNlKHRoaXMpO1xuICAgICAgICB0aGlzLnNvY2tldENsaWVudCA9IG5ldyBTb2NrZXRDbGllbnQodGhpcyk7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMuc29ja2V0Q2xpZW50LmNvbm5lY3Qoc2VydmVyVXJsLCBhY2Nlc3NUb2tlbik7XG4gICAgICAgIHRoaXMucmVzaXplTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBnZXRCYWJ5bG9uU2NlbmUoKTogQkFCWUxPTi5TY2VuZSB7XG4gICAgICAgIHJldHVybiAodGhpcy5hY3RpdmVTY2VuZSkgPyB0aGlzLmFjdGl2ZVNjZW5lLmJhYnlsb25TY2VuZSA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0U2NlbmVNYW5nZXIoKTogU2NlbmUge1xuICAgICAgICByZXR1cm4gKHRoaXMuYWN0aXZlU2NlbmUpID8gdGhpcy5hY3RpdmVTY2VuZSA6IG51bGw7XG4gICAgfVxuXG4gICAgc2V0U2NlbmUoc2NlbmU6IFNjZW5lKTogR2FtZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU2NlbmUgPSBzY2VuZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXNpemVMaXN0ZW5lcigpOiBHYW1lIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5lbmdpbmUucmVzaXplKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VTY2VuZShuZXdTY2VuZTogU2NlbmUpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUuc3RvcFJlbmRlckxvb3AoKTtcbiAgICAgICAgdGhpcy5zb2NrZXRDbGllbnQuY2xlYXJFdmVudHMoKTtcblxuICAgICAgICBsZXQgc2NlbmVUb0Rpc3Bvc2UgPSB0aGlzLmdldEJhYnlsb25TY2VuZSgpO1xuICAgICAgICBpZiAoc2NlbmVUb0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNjZW5lVG9EaXNwb3NlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlU2NlbmUgPSBudWxsO1xuXG4gICAgICAgIG5ld1NjZW5lLmluaXRTY2VuZSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbU51bWJlcihtaW5pbXVtOiBudW1iZXIsIG1heGltdW06IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4aW11bSAtIG1pbmltdW0pICsgbWluaW11bSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkaXN0YW5jZVZlY3Rvcih2ZWN0b3JGcm9tOiBCQUJZTE9OLlZlY3RvcjMsIHZlY3RvclRvOiBCQUJZTE9OLlZlY3RvcjMpIHtcbiAgICAgICAgbGV0IGR4ID0gdmVjdG9yRnJvbS54IC0gdmVjdG9yVG8ueDtcbiAgICAgICAgbGV0IGR5ID0gdmVjdG9yRnJvbS55IC0gdmVjdG9yVG8ueTtcbiAgICAgICAgbGV0IGR6ID0gdmVjdG9yRnJvbS56IC0gdmVjdG9yVG8uejtcblxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5ICsgZHogKiBkeik7XG4gICAgfVxuXG59XG5cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4vR2FtZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICBpZiAoQkFCWUxPTi5FbmdpbmUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gPEhUTUxDYW52YXNFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuZGVyQ2FudmFzJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLnNldEF0dHJpYnV0ZShcIm9uY29udGV4dG1lbnVcIiwgXCJyZXR1cm4gZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgbmV3IEdhbWUoaHRtbEVsZW1lbnQsIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICc6NTAwMCcsICdhY2Nlc3NUb2tlbicsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtUb29sdGlwTWVzaH0gZnJvbSBcIi4uL0dVSS9Ub29sdGlwcy9Ub29sdGlwTWVzaFwiO1xuaW1wb3J0IHtHb1RvTWVzaEFuZFJ1bkFjdGlvbn0gZnJvbSBcIi4uL0FjdGlvbnMvR29Ub01lc2hBbmRSdW5BY3Rpb25cIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIENoZXN0IHtcblxuICAgIHB1YmxpYyBtZXNoOiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcbiAgICBwdWJsaWMgaGlnaHRsaWdodExheWVyOiBCQUJZTE9OLkhpZ2hsaWdodExheWVyO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0dhbWV9IGdhbWVcbiAgICAgKiBAcGFyYW0gY2hlc3REYXRhXG4gICAgICogQHBhcmFtIGNoZXN0S2V5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgY2hlc3REYXRhLCBjaGVzdEtleSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzY2VuZSA9IGdhbWUuZ2V0QmFieWxvblNjZW5lKCk7XG4gICAgICAgIGxldCB0b29sdGlwO1xuICAgICAgICBsZXQgb3BlbmVkID0gY2hlc3REYXRhLm9wZW5lZDtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gY2hlc3REYXRhLnBvc2l0aW9uO1xuICAgICAgICBsZXQgcm90YXRpb24gPSBjaGVzdERhdGEucm90YXRpb247XG4gICAgICAgIGxldCBjaGVzdE1lc2ggPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuYXNzZXRzLmNoZXN0LmNyZWF0ZUNsb25lKCdjaGVzdCcsIHRydWUpO1xuICAgICAgICBjb25zdCBnYW1lQ2FtZXJhID0gc2NlbmUuZ2V0Q2FtZXJhQnlOYW1lKCdnYW1lQ2FtZXJhJyk7XG5cbiAgICAgICAgaWYgKCFjaGVzdE1lc2gpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1dyb25nIGNoZXN0IG1lc2ggbmFtZS4nKTtcbiAgICAgICAgfVxuICAgICAgICBjaGVzdE1lc2gucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xuICAgICAgICBjaGVzdE1lc2gucm90YXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xuICAgICAgICBjaGVzdE1lc2guaXNQaWNrYWJsZSA9IHRydWU7XG4gICAgICAgIGNoZXN0TWVzaC5jaGVja0NvbGxpc2lvbnMgPSB0cnVlO1xuICAgICAgICBjaGVzdE1lc2gubWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFvcGVuZWQpIHtcbiAgICAgICAgICAgIGxldCBobCA9IG5ldyBCQUJZTE9OLkhpZ2hsaWdodExheWVyKFwiaGlnaGxpZ2h0TGF5ZXJcIiwgc2NlbmUsIHtjYW1lcmE6IGdhbWVDYW1lcmF9KTtcbiAgICAgICAgICAgIGhsLmFkZE1lc2goY2hlc3RNZXNoLCBCQUJZTE9OLkNvbG9yMy5NYWdlbnRhKCkpO1xuXG4gICAgICAgICAgICBzZWxmLmhpZ2h0bGlnaHRMYXllciA9IGhsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tZXNoID0gY2hlc3RNZXNoO1xuICAgICAgICB0aGlzLm1lc2guYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIoZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgIHRoaXMubWVzaC5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBvaW50ZXJPdmVyVHJpZ2dlcixcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwID0gbmV3IFRvb2x0aXBNZXNoKGNoZXN0TWVzaCwgY2hlc3REYXRhLm5hbWUpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMubWVzaC5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBvaW50ZXJPdXRUcmlnZ2VyLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRvb2x0aXAuY29udGFpbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLm1lc2guYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihcbiAgICAgICAgICAgIEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBpY2tUcmlnZ2VyLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIEdvVG9NZXNoQW5kUnVuQWN0aW9uLmV4ZWN1dGUoZ2FtZSwgY2hlc3RNZXNoLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdvcGVuQ2hlc3QnLCBjaGVzdEtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBDb2xsaXNpb25zIHtcblxuICAgIHN0YXRpYyBzZXRDb2xsaWRlcihzY2VuZTogQkFCWUxPTi5TY2VuZSwgcGFyZW50OiBCQUJZTE9OLkFic3RyYWN0TWVzaCwgc2NhbGluZ1NpemU6IEJBQllMT04uVmVjdG9yMyA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMiwzLDIpLCBmcmVlemVJbldvcmxkOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICAvLyBsZXQgY29sbGlkZXIgPSBCQUJZTE9OLk1lc2guQ3JlYXRlQm94KCdjb2xsaWRlcl9ib3hfb2ZfJyArIHBhcmVudC5uYW1lLCAwLCBzY2VuZSwgZmFsc2UpO1xuICAgICAgICAvLyBsZXQgcGFyZW50Qm91bmRCb3ggPSBwYXJlbnQuZ2V0Qm91bmRpbmdJbmZvKCk7XG4gICAgICAgIC8vIGNvbGxpZGVyLnNjYWxpbmcgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKHBhcmVudEJvdW5kQm94LmJvdW5kaW5nQm94Lm1heGltdW0ueCAqIDIsIHBhcmVudEJvdW5kQm94LmJvdW5kaW5nQm94Lm1heGltdW0ueSAqIDIsIHBhcmVudEJvdW5kQm94LmJvdW5kaW5nQm94Lm1heGltdW0ueiAqIDIpO1xuICAgICAgICAvLyBjb2xsaWRlci5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHBhcmVudC5pc1BpY2thYmxlID0gZmFsc2U7XG4gICAgICAgIGlmIChHYW1lLlNIT1dfQ09MTElERVJTKSB7XG4gICAgICAgICAgICAvLyBjb2xsaWRlci5tYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJjb2xsaWRlcm1hdFwiLCBzY2VuZSk7XG4gICAgICAgICAgICAvLyBjb2xsaWRlci5tYXRlcmlhbC5hbHBoYSA9IDAuMztcbiAgICAgICAgICAgIHBhcmVudC5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5jaGVja0NvbGxpc2lvbnMgPSB0cnVlO1xuXG4gICAgICAgIGlmKGZyZWV6ZUluV29ybGQpIHtcbiAgICAgICAgICAgIHBhcmVudC5mcmVlemVXb3JsZE1hdHJpeCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9QbGF5ZXIvSXRlbXMvSXRlbVwiO1xuaW1wb3J0IHtCb3VuY2VBbmltYXRpb259IGZyb20gXCIuLi9BbmltYXRpb25zL0JvdW5jZUFuaW1hdGlvblwiO1xuaW1wb3J0IHtUb29sdGlwTWVzaH0gZnJvbSBcIi4uL0dVSS9Ub29sdGlwcy9Ub29sdGlwTWVzaFwiO1xuaW1wb3J0IHtEcm9wcGVkSXRlbSBhcyBEcm9wcGVkSXRlbVBhcnRpY2xlc30gZnJvbSBcIi4uL1BhcnRpY2xlcy9Ecm9wcGVkSXRlbVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuaW1wb3J0IHtHb1RvTWVzaEFuZFJ1bkFjdGlvbn0gZnJvbSBcIi4uL0FjdGlvbnMvR29Ub01lc2hBbmRSdW5BY3Rpb25cIjtcblxuZXhwb3J0IGNsYXNzIERyb3BwZWRJdGVtIHtcblxuICAgIHByaXZhdGUgaXRlbVNwcml0ZU1hbmFnZXI6IEJBQllMT04uU3ByaXRlTWFuYWdlcjtcbiAgICBwcml2YXRlIGl0ZW1TcHJpdGU6IEJBQllMT04uU3ByaXRlO1xuICAgIHByaXZhdGUgbWVzaDogQkFCWUxPTi5BYnN0cmFjdE1lc2g7XG4gICAgcHJpdmF0ZSB0b29sdGlwTWVzaDogVG9vbHRpcE1lc2g7XG4gICAgcHJpdmF0ZSBnYW1lOiBHYW1lO1xuICAgIHByaXZhdGUgaXRlbU5hbWU6IFN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIGl0ZW06IEl0ZW0sIHBvc2l0aW9uOiBCQUJZTE9OLlZlY3RvcjMsIGl0ZW1Ecm9wS2V5OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGxldCBzY2VuZSA9IGdhbWUuZ2V0QmFieWxvblNjZW5lKCk7XG5cbiAgICAgICAgICAgIGxldCBkcm9wcGVkSXRlbUJveCA9IEJBQllMT04uTWVzaC5DcmVhdGVCb3goaXRlbS5uYW1lICsgJ19Cb3gnLCAzLCBzY2VuZSwgZmFsc2UpO1xuICAgICAgICAgICAgZHJvcHBlZEl0ZW1Cb3guY2hlY2tDb2xsaXNpb25zID0gZmFsc2U7XG4gICAgICAgICAgICBkcm9wcGVkSXRlbUJveC52aXNpYmlsaXR5ID0gMDtcbiAgICAgICAgICAgIGRyb3BwZWRJdGVtQm94LnBvc2l0aW9uLnggPSBwb3NpdGlvbi54O1xuICAgICAgICAgICAgZHJvcHBlZEl0ZW1Cb3gucG9zaXRpb24ueiA9IHBvc2l0aW9uLno7XG4gICAgICAgICAgICBkcm9wcGVkSXRlbUJveC5wb3NpdGlvbi55ID0gMTtcblxuICAgICAgICAgICAgbGV0IGl0ZW1TcHJpdGVNYW5hZ2VyID0gbmV3IEJBQllMT04uU3ByaXRlTWFuYWdlcihcInBsYXllck1hbmFnZXJcIiwnYXNzZXRzL01pbmlhdHVyZXMvJyArIGl0ZW0uaW1hZ2UgKyAnLnBuZycsIDEsIHt3aWR0aDogNTEyLCBoZWlnaHQ6IDUxMn0sIHNjZW5lKTtcbiAgICAgICAgICAgIGxldCBpdGVtU3ByaXRlID0gbmV3IEJBQllMT04uU3ByaXRlKFwicGxheWVyXCIsIGl0ZW1TcHJpdGVNYW5hZ2VyKTtcbiAgICAgICAgICAgIGl0ZW1TcHJpdGUud2lkdGggPSAxLjg7XG4gICAgICAgICAgICBpdGVtU3ByaXRlLmhlaWdodCA9IDEuODtcbiAgICAgICAgICAgIGl0ZW1TcHJpdGUucG9zaXRpb24ueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICBpdGVtU3ByaXRlLnBvc2l0aW9uLnogPSBwb3NpdGlvbi56O1xuICAgICAgICAgICAgaXRlbVNwcml0ZS5wb3NpdGlvbi55ID0gNDtcbiAgICAgICAgICAgIGl0ZW1TcHJpdGVNYW5hZ2VyLmxheWVyTWFzayA9IDI7XG5cbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkJvdW5jZSA9IEJvdW5jZUFuaW1hdGlvbi5nZXRBbmltYXRpb24oKTtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgaXRlbVNwcml0ZS5hbmltYXRpb25zLnB1c2goYW5pbWF0aW9uQm91bmNlKTtcbiAgICAgICAgICAgIHNjZW5lLmJlZ2luQW5pbWF0aW9uKGl0ZW1TcHJpdGUsIDAsIDMwLCB0cnVlKTtcblxuICAgICAgICAgICAgZHJvcHBlZEl0ZW1Cb3guYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIoc2NlbmUpO1xuICAgICAgICAgICAgZHJvcHBlZEl0ZW1Cb3guYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25QaWNrVHJpZ2dlcixcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEdvVG9NZXNoQW5kUnVuQWN0aW9uLmV4ZWN1dGUoZ2FtZSwgZHJvcHBlZEl0ZW1Cb3gsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdhZGREcm9wcGVkSXRlbScsIGl0ZW1Ecm9wS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBsZXQgcGFydGljbGVTeXN0ZW0gPSBuZXcgRHJvcHBlZEl0ZW1QYXJ0aWNsZXMoZ2FtZSwgZHJvcHBlZEl0ZW1Cb3gpO1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0ucGFydGljbGVTeXN0ZW0uc3RhcnQoKTtcbiAgICAgICAgICAgIGRyb3BwZWRJdGVtQm94LmZyZWV6ZVdvcmxkTWF0cml4KCk7XG5cbiAgICAgICAgICAgIHRoaXMudG9vbHRpcE1lc2ggPSBuZXcgVG9vbHRpcE1lc2goZHJvcHBlZEl0ZW1Cb3gsIGl0ZW0ubmFtZSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1TcHJpdGUgPSBpdGVtU3ByaXRlO1xuICAgICAgICAgICAgdGhpcy5pdGVtU3ByaXRlTWFuYWdlciA9IGl0ZW1TcHJpdGVNYW5hZ2VyO1xuICAgICAgICAgICAgdGhpcy5tZXNoID0gZHJvcHBlZEl0ZW1Cb3g7XG4gICAgICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICAgICAgdGhpcy5pdGVtTmFtZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBwaWNrSXRlbSgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5ndWkucGxheWVyTG9nc1F1ZXN0cy5hZGRUZXh0KHRoaXMuaXRlbU5hbWUgKyAnICBoYXMgYmVlbiBwaWNrZWQgdXAuJywgJ2dyZWVuJyk7XG4gICAgICAgICAgICB0aGlzLm1lc2guZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy50b29sdGlwTWVzaC5jb250YWluZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtU3ByaXRlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbVNwcml0ZU1hbmFnZXIuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuIiwiaW1wb3J0IHtUb29sdGlwTWVzaH0gZnJvbSBcIi4uL0dVSS9Ub29sdGlwcy9Ub29sdGlwTWVzaFwiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtHb1RvTWVzaEFuZFJ1bkFjdGlvbn0gZnJvbSBcIi4uL0FjdGlvbnMvR29Ub01lc2hBbmRSdW5BY3Rpb25cIjtcbmltcG9ydCB7R2F0ZXdheVBhcnRpY2xlcyBhcyBHYXRld2F5UGFydGljbGVzfSBmcm9tIFwiLi4vUGFydGljbGVzL0dhdGV3YXlQYXJ0aWNsZXNcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIEdhdGV3YXkge1xuXG4gICAgcHVibGljIG1lc2g6IEJBQllMT04uQWJzdHJhY3RNZXNoO1xuICAgIHB1YmxpYyB0b29sdGlwOiBUb29sdGlwTWVzaDtcbiAgICBwdWJsaWMgcGFydGljbGVTeXN0ZW06IEJBQllMT04uSVBhcnRpY2xlU3lzdGVtO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgbWVzaE5hbWU6IHN0cmluZywgaXNBY3RpdmU6IGJvb2xlYW4sIG9wZW5TY2VuZVR5cGU6IG51bWJlciwgZW50cmFuY2VOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGdhdGV3YXkgPSA8QkFCWUxPTi5NZXNoPiBnYW1lLmdldEJhYnlsb25TY2VuZSgpLmdldE1lc2hCeU5hbWUobWVzaE5hbWUpO1xuICAgICAgICBpZiAoIWdhdGV3YXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1dyb25nIGdhdGV3YXkgbWVzaCBuYW1lLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tZXNoID0gZ2F0ZXdheTtcbiAgICAgICAgZ2F0ZXdheS52aXNpYmlsaXR5ID0gMDtcbiAgICAgICAgZ2F0ZXdheS5pc1BpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b29sdGlwID0gbmV3IFRvb2x0aXBNZXNoKGdhdGV3YXksIGVudHJhbmNlTmFtZSk7XG5cbiAgICAgICAgbGV0IGdhdGV3YXlQYXJ0aWNsZVN5c3RlbSA9IEdhdGV3YXlQYXJ0aWNsZXMuaW5pdFBhcnRpY2xlU3lzdGVtKGdhbWUsIGdhdGV3YXksIGlzQWN0aXZlKTtcbiAgICAgICAgZ2F0ZXdheVBhcnRpY2xlU3lzdGVtLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMucGFydGljbGVTeXN0ZW0gPSBnYXRld2F5UGFydGljbGVTeXN0ZW07XG5cbiAgICAgICAgZ2F0ZXdheS5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihnYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgZ2F0ZXdheS5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKFxuICAgICAgICAgICAgbmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUG9pbnRlck92ZXJUcmlnZ2VyLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5ndWkuY2hhcmFjdGVyVG9wSHAuc2hvd0dhdGV3YXkoZW50cmFuY2VOYW1lKTtcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgZ2F0ZXdheS5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKFxuICAgICAgICAgICAgbmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUG9pbnRlck91dFRyaWdnZXIsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnYW1lLmd1aS5jaGFyYWN0ZXJUb3BIcC5oaWRlSHBCYXIoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgbGV0IGVudGVyVGhlR2F0ZXdheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBnYW1lLmd1aS5wbGF5ZXJMb2dzUXVlc3RzLmFkZFRleHQoJ1RoaXMgZ2F0ZXdheSBpcyBsb2NrZWQhJywgJ3llbGxvdycpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBHb1RvTWVzaEFuZFJ1bkFjdGlvbi5leGVjdXRlKGdhbWUsIGdhdGV3YXksICgpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnY2hhbmdlU2NlbmVUcmlnZ2VyJywgb3BlblNjZW5lVHlwZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBnYXRld2F5LmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24oXG4gICAgICAgICAgICBuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25QaWNrRG93blRyaWdnZXIsXG4gICAgICAgICAgICAgICAgZW50ZXJUaGVHYXRld2F5KSk7XG5cbiAgICAgICAgZ2F0ZXdheS5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKFxuICAgICAgICAgICAgbmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25JbnRlcnNlY3Rpb25FbnRlclRyaWdnZXIsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcjogZ2FtZS5wbGF5ZXIubWVzaFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW50ZXJUaGVHYXRld2F5KSk7XG5cbiAgICB9XG59XG5cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7VG9vbHRpcE1lc2h9IGZyb20gXCIuLi9HVUkvVG9vbHRpcHMvVG9vbHRpcE1lc2hcIjtcbmltcG9ydCB7TmV3UXVlc3R9IGZyb20gXCIuLi9HVUkvcG9wdXAvbmV3UXVlc3RcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIFF1ZXN0cyB7XG5cbiAgICBwcml2YXRlIG1lc2g6IEJBQllMT04uQWJzdHJhY3RNZXNoO1xuICAgIHByaXZhdGUgdG9vbHRpcE1lc2g6IEJBQllMT04uQWJzdHJhY3RNZXNoO1xuICAgIHByaXZhdGUgdG9vbHRpcEd1aTogVG9vbHRpcE1lc2g7XG4gICAgcHJpdmF0ZSBnYW1lOiBHYW1lO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0dhbWV9IGdhbWVcbiAgICAgKiBAcGFyYW0gc2VydmVyRGF0YVxuICAgICAqIEBwYXJhbSBhY3RpdmVRdWVzdFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHNlcnZlckRhdGEsIGFjdGl2ZVF1ZXN0KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHF1ZXN0UGlja2VyID0gZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5nZXRNZXNoQnlOYW1lKHNlcnZlckRhdGEub2JqZWN0TmFtZSk7XG4gICAgICAgIGlmICghcXVlc3RQaWNrZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1dyb25nIHF1ZXN0IG1lc2ggbmFtZS4nKTtcbiAgICAgICAgfVxuICAgICAgICBxdWVzdFBpY2tlci5pc1BpY2thYmxlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLm1lc2ggPSBxdWVzdFBpY2tlcjtcbiAgICAgICAgdGhpcy5tZXNoLmFjdGlvbk1hbmFnZXIgPSBuZXcgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyKGdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuXG4gICAgICAgIHNlbGYuY3JlYXRlVG9vbHRpcChzZXJ2ZXJEYXRhLCBhY3RpdmVRdWVzdCwgcXVlc3RQaWNrZXIpO1xuICAgICAgICBzZWxmLm1lc2guYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihcbiAgICAgICAgICAgIEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBpY2tUcmlnZ2VyLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBxdWVzdCA9IG5ldyBOZXdRdWVzdChnYW1lLmd1aSwgc2VydmVyRGF0YSk7XG4gICAgICAgICAgICAgICAgcXVlc3Qub3BlbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWZyZXNoVG9vbHRpcENvbG9yKHNlcnZlckRhdGEsIGFjdGl2ZVF1ZXN0LCBxdWVzdFBpY2tlcjogQkFCWUxPTi5BYnN0cmFjdE1lc2gpIHtcbiAgICAgICAgbGV0IG1hdGVyaWFsID0gPEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbD4gdGhpcy50b29sdGlwTWVzaC5tYXRlcmlhbDtcbiAgICAgICAgaWYgKGFjdGl2ZVF1ZXN0ICYmIGFjdGl2ZVF1ZXN0LnF1ZXN0SWQgIT0gc2VydmVyRGF0YS5xdWVzdElkKSB7XG4gICAgICAgICAgICBtYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMSwgMCwgMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlUXVlc3QgJiYgYWN0aXZlUXVlc3QucXVlc3RJZCA9PSBzZXJ2ZXJEYXRhLnF1ZXN0SWQpIHtcbiAgICAgICAgICAgIG1hdGVyaWFsLmRpZmZ1c2VDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygxLCAxLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdGVyaWFsLmRpZmZ1c2VDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygwLCAxLCAwKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcEd1aSA9IG5ldyBUb29sdGlwTWVzaChxdWVzdFBpY2tlciwgJ05ldyBxdWVzdCcsIC00NSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbHRpcChzZXJ2ZXJEYXRhLCBhY3RpdmVRdWVzdCwgcXVlc3RQaWNrZXI6IEJBQllMT04uQWJzdHJhY3RNZXNoKSB7XG4gICAgICAgIGxldCBib3ggPSBCQUJZTE9OLk1lc2guQ3JlYXRlQm94KFwicXVlc3RfYm94XCIsIDAuNCwgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgYm94Lm1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcInF1ZXN0X2JveF9tYXRlcmlhbFwiLCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICBib3gucGFyZW50ID0gdGhpcy5tZXNoO1xuICAgICAgICBib3gucG9zaXRpb24ueSArPSAzO1xuXG4gICAgICAgIGxldCBrZXlzID0gW107XG4gICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICBmcmFtZTogMCxcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICBmcmFtZTogMzAsXG4gICAgICAgICAgICB2YWx1ZTogLTJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGFuaW1hdGlvbkJveCA9IG5ldyBCQUJZTE9OLkFuaW1hdGlvbihcInJvdGF0aW9uXCIsIFwicm90YXRpb24ueVwiLCAzMCxcbiAgICAgICAgICAgIEJBQllMT04uQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsXG4gICAgICAgICAgICBCQUJZTE9OLkFuaW1hdGlvbi5BTklNQVRJT05MT09QTU9ERV9SRUxBVElWRSk7XG4gICAgICAgIGFuaW1hdGlvbkJveC5zZXRLZXlzKGtleXMpO1xuICAgICAgICBib3guYW5pbWF0aW9ucyA9IFtdO1xuICAgICAgICBib3guYW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbkJveCk7XG5cbiAgICAgICAgdGhpcy50b29sdGlwTWVzaCA9IGJveDtcbiAgICAgICAgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpLmJlZ2luQW5pbWF0aW9uKGJveCwgMCwgMzAsIHRydWUpO1xuICAgICAgICB0aGlzLnJlZnJlc2hUb29sdGlwQ29sb3Ioc2VydmVyRGF0YSwgYWN0aXZlUXVlc3QsIHF1ZXN0UGlja2VyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcEd1aSkge1xuICAgICAgICAgICAgdGhpcy50b29sdGlwR3VpLmNvbnRhaW5lci5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b29sdGlwTWVzaC5kaXNwb3NlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtUb29sdGlwTWVzaH0gZnJvbSBcIi4uL0dVSS9Ub29sdGlwcy9Ub29sdGlwTWVzaFwiO1xuaW1wb3J0IHtHb1RvTWVzaEFuZFJ1bkFjdGlvbn0gZnJvbSBcIi4uL0FjdGlvbnMvR29Ub01lc2hBbmRSdW5BY3Rpb25cIjtcbmltcG9ydCB7RHJvcHBlZEl0ZW19IGZyb20gXCIuLi9QYXJ0aWNsZXMvRHJvcHBlZEl0ZW1cIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIFJhbmRvbVNwZWNpYWxJdGVtIHtcblxuICAgIHB1YmxpYyBtZXNoOiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcbiAgICBwdWJsaWMgdG9vbHRpcDogVG9vbHRpcE1lc2g7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7R2FtZX0gZ2FtZVxuICAgICAqIEBwYXJhbSByYW5kb21TcGVjaWFsSXRlbURhdGFcbiAgICAgKiBAcGFyYW0gcmFuZG9tU3BlY2lhbEl0ZW1LZXlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCByYW5kb21TcGVjaWFsSXRlbURhdGEsIHJhbmRvbVNwZWNpYWxJdGVtS2V5KSB7XG4gICAgICAgIGxldCBzY2VuZSA9IGdhbWUuZ2V0QmFieWxvblNjZW5lKCk7XG4gICAgICAgIGxldCB0b29sdGlwO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSByYW5kb21TcGVjaWFsSXRlbURhdGEucG9zaXRpb247XG4gICAgICAgIGxldCByYW5kb21JdGVtTWVzaCA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5hc3NldHMubmF0dXJlR3JhaW4uY3JlYXRlQ2xvbmUocmFuZG9tU3BlY2lhbEl0ZW1EYXRhLnNwZWNpYWxJdGVtLm1lc2hOYW1lKTtcblxuICAgICAgICByYW5kb21JdGVtTWVzaC5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XG4gICAgICAgIHJhbmRvbUl0ZW1NZXNoLmlzUGlja2FibGUgPSB0cnVlO1xuXG4gICAgICAgIGxldCBwYXJ0aWNsZVN5c3RlbSA9IG5ldyBEcm9wcGVkSXRlbShnYW1lLCByYW5kb21JdGVtTWVzaCk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLnBhcnRpY2xlU3lzdGVtLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5tZXNoID0gcmFuZG9tSXRlbU1lc2g7XG4gICAgICAgIHRoaXMubWVzaC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihzY2VuZSk7XG4gICAgICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwTWVzaChyYW5kb21JdGVtTWVzaCwgcmFuZG9tU3BlY2lhbEl0ZW1EYXRhLnNwZWNpYWxJdGVtLm5hbWUpO1xuICAgICAgICB0aGlzLm1lc2guYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihcbiAgICAgICAgICAgIEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBpY2tUcmlnZ2VyLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIEdvVG9NZXNoQW5kUnVuQWN0aW9uLmV4ZWN1dGUoZ2FtZSwgcmFuZG9tSXRlbU1lc2gsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ3BpY2tSYW5kb21JdGVtJywgcmFuZG9tU3BlY2lhbEl0ZW1LZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuIiwiZXhwb3J0IGNsYXNzIFNsYXZzTG9hZGVyIGltcGxlbWVudHMgQkFCWUxPTi5JTG9hZGluZ1NjcmVlbiB7XG5cbiAgICBwdWJsaWMgbG9hZGluZ1VJQmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9hZGluZ1VJVGV4dDogc3RyaW5nKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3BsYXlMb2FkaW5nVUkoKSB7XG4gICAgICAgIGxldCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtbG9hZGVyXCIpO1xuICAgICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICAgIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG5cbiAgICAgICAgU2xhdnNMb2FkZXIuY2hhbmdlTG9hZGluZ1RleHQoJ0xvYWRpbmcgc2NlbmUuLi4nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZUxvYWRpbmdVSSgpIHtcbiAgICAgICAgbGV0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1sb2FkZXJcIik7XG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlckNhbnZhc1wiKTtcbiAgICAgICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNoYW5nZUxvYWRpbmdUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICBsZXQgbG9hZGVyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1sb2FkZXItdGV4dFwiKTtcbiAgICAgICAgbG9hZGVyVGV4dC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2hvd0xvYWRlcldpdGhUZXh0KHRleHQ6IHN0cmluZykge1xuICAgICAgICBsZXQgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWxvYWRlclwiKTtcbiAgICAgICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuXG4gICAgICAgIFNsYXZzTG9hZGVyLmNoYW5nZUxvYWRpbmdUZXh0KHRleHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcbmltcG9ydCB7Rm9nfSBmcm9tIFwiLi4vRW52aXJvbm1lbnQvRm9nL0ZvZ1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZU9wdGlvbnMge1xuXG4gICAgcHJvdGVjdGVkIHJlbmRlcmluZ1BpcGVsaW5lOiBCQUJZTE9OLkRlZmF1bHRSZW5kZXJpbmdQaXBlbGluZTtcbiAgICBwcm90ZWN0ZWQgc3RhdGljU2hhZG93R2VuZXJhdG9yOiBCQUJZTE9OLlNoYWRvd0dlbmVyYXRvcjtcblxuICAgIHB1YmxpYyBkeW5hbWljU2hhZG93R2VuZXJhdG9yOiBCQUJZTE9OLlNoYWRvd0dlbmVyYXRvcjtcbiAgICBwdWJsaWMgZHluYW1pY1NoYWRvd3NBcnJheTogQXJyYXk8QkFCWUxPTi5BYnN0cmFjdE1lc2g+O1xuICAgIHB1YmxpYyBzdGF0aWNTaGFkb3dzOiBib29sZWFuO1xuICAgIHB1YmxpYyBkeW5hbWljU2hhZG93czogYm9vbGVhbjtcbiAgICBwdWJsaWMgcG9zdFByb2NjZXNzaW5nOiBib29sZWFuO1xuICAgIHB1YmxpYyBmeGFhOiBib29sZWFuO1xuICAgIHB1YmxpYyBmb2c6IGJvb2xlYW47XG4gICAgcHVibGljIGRvZjogYm9vbGVhbjtcbiAgICBwdWJsaWMgZlN0b3A6IG51bWJlcjtcbiAgICBwdWJsaWMgZm9jdXNEaXN0YW5jZTogbnVtYmVyO1xuICAgIHB1YmxpYyBmb2NhbExlbmd0aDogbnVtYmVyO1xuICAgIHB1YmxpYyBsZW5zU2l6ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBibG9vbTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgdGhpcy5keW5hbWljU2hhZG93c0FycmF5ID0gW107XG4gICAgICAgIHRoaXMucmVmcmVzaEFsbERhdGEoKTtcbiAgICAgICAgdGhpcy5pbml0SW5TY2VuZShnYW1lKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVmcmVzaEFsbERhdGEoKSB7XG4gICAgICAgIHRoaXMuc3RhdGljU2hhZG93cyA9IHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZSgnc3RhdGljU2hhZG93cycpO1xuICAgICAgICB0aGlzLmR5bmFtaWNTaGFkb3dzID0gdGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKCdkeW5hbWljU2hhZG93cycpO1xuICAgICAgICB0aGlzLnBvc3RQcm9jY2Vzc2luZyA9IHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZSgncG9zdFByb2NjZXNzaW5nJyk7XG4gICAgICAgIHRoaXMuZnhhYSA9IHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZSgnZnhhYScpO1xuICAgICAgICB0aGlzLmZvZyA9IHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZSgnZm9nJyk7XG4gICAgICAgIHRoaXMuZG9mID0gdGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKCdkb2YnKTtcbiAgICAgICAgdGhpcy5mU3RvcCA9IHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZSgnZlN0b3AnKTtcbiAgICAgICAgdGhpcy5mb2N1c0Rpc3RhbmNlID0gdGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKCdmb2N1c0Rpc3RhbmNlJyk7XG4gICAgICAgIHRoaXMuZm9jYWxMZW5ndGggPSB0aGlzLmdldEZyb21Mb2NhbFN0b3JhZ2UoJ2ZvY2FsTGVuZ3RoJyk7XG4gICAgICAgIHRoaXMubGVuc1NpemUgPSB0aGlzLmdldEZyb21Mb2NhbFN0b3JhZ2UoJ2xlbnNTaXplJyk7XG4gICAgICAgIHRoaXMuYmxvb20gPSB0aGlzLmdldEZyb21Mb2NhbFN0b3JhZ2UoJ2Jsb29tJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcHRpb25zLicgKyBrZXkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNhdmVJbkxvY2FsU3RvcmFnZShrZXksIHZhbHVlLCBnYW1lOiBHYW1lKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcHRpb25zLicgKyBrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG5cbiAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm9wdGlvbnMuaW5pdEluU2NlbmUoZ2FtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZE1lc2hUb0R5bmFtaWNTaGFkb3dHZW5lcmF0b3IobWVzaDogQkFCWUxPTi5BYnN0cmFjdE1lc2gpIHtcbiAgICAgICAgdGhpcy5keW5hbWljU2hhZG93c0FycmF5LnB1c2gobWVzaCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHluYW1pY1NoYWRvd0dlbmVyYXRvcikge1xuICAgICAgICAgICAgdGhpcy5keW5hbWljU2hhZG93R2VuZXJhdG9yLmdldFNoYWRvd01hcCgpLnJlbmRlckxpc3QucHVzaChtZXNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0SW5TY2VuZShnYW1lOiBHYW1lKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaEFsbERhdGEoKTtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBnYW1lLmdldEJhYnlsb25TY2VuZSgpO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgY2FtZXJhID0gc2NlbmUuZ2V0Q2FtZXJhQnlOYW1lKCdnYW1lQ2FtZXJhJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGljU2hhZG93cyAmJiAhdGhpcy5zdGF0aWNTaGFkb3dHZW5lcmF0b3IgJiYgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmVudmlyb25tZW50ICYmIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5lbnZpcm9ubWVudC5saWdodCkge1xuICAgICAgICAgICAgbGV0IHNoYWRvd0dlbmVyYXRvciA9IG5ldyBCQUJZTE9OLlNoYWRvd0dlbmVyYXRvcigyMDQ4LCBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuZW52aXJvbm1lbnQubGlnaHQpO1xuICAgICAgICAgICAgc2hhZG93R2VuZXJhdG9yLnVzZVBlcmNlbnRhZ2VDbG9zZXJGaWx0ZXJpbmcgPSB0cnVlO1xuICAgICAgICAgICAgc2hhZG93R2VuZXJhdG9yLmZpbHRlcmluZ1F1YWxpdHkgPSBCQUJZTE9OLlNoYWRvd0dlbmVyYXRvci5RVUFMSVRZX0xPVztcbiAgICAgICAgICAgIHNoYWRvd0dlbmVyYXRvci5nZXRTaGFkb3dNYXAoKS5yZWZyZXNoUmF0ZSA9IEJBQllMT04uUmVuZGVyVGFyZ2V0VGV4dHVyZS5SRUZSRVNIUkFURV9SRU5ERVJfT05DRTtcbiAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5lbnZpcm9ubWVudC5saWdodC5hdXRvVXBkYXRlRXh0ZW5kcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFkb3dHZW5lcmF0b3IgPSBzaGFkb3dHZW5lcmF0b3I7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNTaGFkb3dNZXNoZXMgPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuZW52aXJvbm1lbnQuc3RhdGljU2hhZG93T2JqZWN0cztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGljU2hhZG93TWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93ZWRNZXNoID0gc3RhdGljU2hhZG93TWVzaGVzW2ldO1xuICAgICAgICAgICAgICAgIHNoYWRvd0dlbmVyYXRvci5nZXRTaGFkb3dNYXAoKS5yZW5kZXJMaXN0LnB1c2goc2hhZG93ZWRNZXNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0aWNTaGFkb3dzICYmIHRoaXMuc3RhdGljU2hhZG93R2VuZXJhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRpY1NoYWRvd0dlbmVyYXRvci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRpY1NoYWRvd0dlbmVyYXRvciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5keW5hbWljU2hhZG93cyAmJiAhdGhpcy5keW5hbWljU2hhZG93R2VuZXJhdG9yKSB7XG4gICAgICAgICAgICBzZWxmLmR5bmFtaWNTaGFkb3dHZW5lcmF0b3IgPSBuZXcgQkFCWUxPTi5TaGFkb3dHZW5lcmF0b3IoNTEyLCBnYW1lLnBsYXllci5wbGF5ZXJMaWdodCk7XG4gICAgICAgICAgICBzZWxmLmR5bmFtaWNTaGFkb3dzQXJyYXkuZm9yRWFjaCgobWVzaCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZHluYW1pY1NoYWRvd0dlbmVyYXRvci5nZXRTaGFkb3dNYXAoKS5yZW5kZXJMaXN0LnB1c2gobWVzaCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5keW5hbWljU2hhZG93cyAmJiB0aGlzLmR5bmFtaWNTaGFkb3dHZW5lcmF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1NoYWRvd0dlbmVyYXRvci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLmR5bmFtaWNTaGFkb3dHZW5lcmF0b3IgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnBvc3RQcm9jY2Vzc2luZyAmJiB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nUGlwZWxpbmUgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zdFByb2NjZXNzaW5nICYmICF0aGlzLnJlbmRlcmluZ1BpcGVsaW5lKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lID0gbmV3IEJBQllMT04uRGVmYXVsdFJlbmRlcmluZ1BpcGVsaW5lKFwicG9zdFByb2NjZXNpbmdcIiwgZmFsc2UsIHNjZW5lLCBbY2FtZXJhXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5yZW5kZXJpbmdQaXBlbGluZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5meGFhRW5hYmxlZCA9IHRoaXMuZnhhYTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nUGlwZWxpbmUuZGVwdGhPZkZpZWxkRW5hYmxlZCA9IHRoaXMuZG9mO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5ibG9vbUVuYWJsZWQgPSB0aGlzLmJsb29tO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5ibG9vbVRocmVzaG9sZCA9IDAuMTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nUGlwZWxpbmUuYmxvb21XZWlnaHQgPSAwLjU7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lLmJsb29tU2NhbGUgPSAxO1xuICAgICAgICAgICAgLy9UT0RPOiBET0ZGXG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lLmRlcHRoT2ZGaWVsZC5kZXB0aE9mRmllbGRCbHVyTGV2ZWwgPSBCQUJZTE9OLkRlcHRoT2ZGaWVsZEVmZmVjdEJsdXJMZXZlbC5NZWRpdW07XG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lLmRlcHRoT2ZGaWVsZC5mU3RvcCA9IHRoaXMuZlN0b3A7XG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lLmRlcHRoT2ZGaWVsZC5mb2N1c0Rpc3RhbmNlID0gdGhpcy5mb2N1c0Rpc3RhbmNlO1xuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5kZXB0aE9mRmllbGQuZm9jYWxMZW5ndGggPSB0aGlzLmZvY2FsTGVuZ3RoO1xuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5kZXB0aE9mRmllbGQubGVuc1NpemUgPSB0aGlzLmxlbnNTaXplO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5kZXB0aE9mRmllbGQuZlN0b3AgPSAwLjE7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lLmRlcHRoT2ZGaWVsZC5mb2N1c0Rpc3RhbmNlID0gMjIwMDA7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lLmRlcHRoT2ZGaWVsZC5mb2NhbExlbmd0aCA9IDQwMDtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nUGlwZWxpbmUuZGVwdGhPZkZpZWxkLmxlbnNTaXplID0gMTA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb2cpIHtcbiAgICAgICAgICAgIEZvZy5hZGRGb2coc2NlbmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRm9nLmRpc2FibGVGb2coc2NlbmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQYXJ0aWNsZSB7XG5cbiAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZTtcbiAgICBwcm90ZWN0ZWQgZW1pdHRlcjogQkFCWUxPTi5NZXNoO1xuICAgIHB1YmxpYyBwYXJ0aWNsZVN5c3RlbTogQkFCWUxPTi5JUGFydGljbGVTeXN0ZW07XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCBlbWl0dGVyOiBCQUJZTE9OLk1lc2gpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5lbWl0dGVyID0gZW1pdHRlcjtcblxuICAgICAgICB0aGlzLmluaXRQYXJ0aWNsZVN5c3RlbSgpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGluaXRQYXJ0aWNsZVN5c3RlbSgpO1xufVxuIiwiaW1wb3J0IHtBYnN0cmFjdFBhcnRpY2xlfSBmcm9tIFwiLi9BYnN0cmFjdFBhcnRpY2xlXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBCbG9vZCBleHRlbmRzIEFic3RyYWN0UGFydGljbGUge1xuXG4gICAgICAgIGluaXRQYXJ0aWNsZVN5c3RlbSgpIHtcbiAgICAgICAgICAgIGxldCBwYXJ0aWNsZVN5c3RlbSA9IG5ldyBCQUJZTE9OLkdQVVBhcnRpY2xlU3lzdGVtKFwicGFydGljbGUxc1wiLCB7IGNhcGFjaXR5OiA1MCB9ICwgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvU21va2UzLnBuZ1wiLCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uZW1pdHRlciA9IHRoaXMuZW1pdHRlcjtcblxuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0ubWluRW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgdGhpcy5lbWl0dGVyLmdlb21ldHJ5LmV4dGVuZC5tYXhpbXVtLnkqMC43LCAwKTsgLy8gU3RhcnRpbmcgYWxsIGZyb21cbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLm1heEVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIHRoaXMuZW1pdHRlci5nZW9tZXRyeS5leHRlbmQubWF4aW11bS55KjAuNywgMCk7IC8vIFRvLi4uXG5cbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLmNvbG9yMSA9IG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAwLCAwLCAxKTtcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLmNvbG9yMiA9IG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uY29sb3JEZWFkID0gbmV3IEJBQllMT04uQ29sb3I0KDAsIDAsIDAsIDEpO1xuXG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5taW5TaXplID0gMC4zO1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0ubWF4U2l6ZSA9IDAuNTtcblxuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0ubWluTGlmZVRpbWUgPSAxO1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0ubWF4TGlmZVRpbWUgPSAxO1xuXG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5lbWl0UmF0ZSA9IDUwO1xuXG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5ibGVuZE1vZGUgPSBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9TVEFOREFSRDtcblxuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uZ3Jhdml0eSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgLTkuODEsIDApO1xuXG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5kaXJlY3Rpb24xID0gbmV3IEJBQllMT04uVmVjdG9yMygtMSwgNCwgLTEpO1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoNCwgNCwgNCk7XG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5taW5Bbmd1bGFyU3BlZWQgPSAtMTAuMDtcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLm1heEFuZ3VsYXJTcGVlZCA9IDEwLjA7XG5cbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLm1pbkVtaXRQb3dlciA9IDAuNTtcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLm1heEVtaXRQb3dlciA9IDE7XG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS51cGRhdGVTcGVlZCA9IDAuMDI7XG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5sYXllck1hc2sgPSAyO1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZVN5c3RlbSA9IHBhcnRpY2xlU3lzdGVtO1xuICAgICAgICB9XG4gICAgfVxuIiwiaW1wb3J0IHtBYnN0cmFjdFBhcnRpY2xlfSBmcm9tIFwiLi9BYnN0cmFjdFBhcnRpY2xlXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBEcm9wcGVkSXRlbSBleHRlbmRzIEFic3RyYWN0UGFydGljbGUge1xuXG4gICAgICAgIGluaXRQYXJ0aWNsZVN5c3RlbSgpIHtcbiAgICAgICAgICAgIGxldCBmaXJlU3lzdGVtID0gbmV3IEJBQllMT04uR1BVUGFydGljbGVTeXN0ZW0oXCJEcm9wcGVkSXRlbVBhcnRpY2xlc1wiLCB7IGNhcGFjaXR5OiAyMCB9LCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL2ZsYXJlLnBuZ1wiLCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLmVtaXR0ZXIgPSB0aGlzLmVtaXR0ZXI7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1pbkVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0xLCAwLCAtMSk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1heEVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEsIDAsIDEpO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLmNvbG9yMSA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLjUsIDAsIDEuMCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmNvbG9yMiA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLjUsIDAsIDEuMCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmNvbG9yRGVhZCA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLCAwLjApO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1pblNpemUgPSAwLjI7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1heFNpemUgPSAwLjU7XG5cbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWluTGlmZVRpbWUgPSAwLjU7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1heExpZmVUaW1lID0gMi41O1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLmVtaXRSYXRlID0gMTA7XG5cbiAgICAgICAgICAgIGZpcmVTeXN0ZW0uYmxlbmRNb2RlID0gQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfT05FT05FO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLmRpcmVjdGlvbjEgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAuMiwgMCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmRpcmVjdGlvbjIgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAuNSwgMCk7XG5cbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWluRW1pdFBvd2VyID0gMTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWF4RW1pdFBvd2VyID0gMTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubGF5ZXJNYXNrID0gMjtcblxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZVN5c3RlbSA9IGZpcmVTeXN0ZW07XG4gICAgICAgIH1cbiAgICB9XG4iLCJpbXBvcnQge0Fic3RyYWN0UGFydGljbGV9IGZyb20gXCIuL0Fic3RyYWN0UGFydGljbGVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIEZpcmVwbGFjZUZpcmUgZXh0ZW5kcyBBYnN0cmFjdFBhcnRpY2xlIHtcblxuICAgICAgICBpbml0UGFydGljbGVTeXN0ZW0oKSB7XG4gICAgICAgICAgICB2YXIgZmlyZVN5c3RlbSA9IG5ldyBCQUJZTE9OLkdQVVBhcnRpY2xlU3lzdGVtKFwicGFydGljbGVzXCIsIHsgY2FwYWNpdHk6IDUwIH0sIHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG5cbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9mbGFyZS5wbmdcIiwgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5lbWl0dGVyID0gdGhpcy5lbWl0dGVyO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5taW5FbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLjUsIDAsIDAuNSk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1heEVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0wLjUsIDAsIC0wLjUpO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLmNvbG9yMSA9IG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAwLjUsIDAsIDEuMCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmNvbG9yMiA9IG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAwLjUsIDAsIDEuMCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmNvbG9yRGVhZCA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLCAwLjApO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1pblNpemUgPSAwLjI7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1heFNpemUgPSAwLjc7XG5cbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWluTGlmZVRpbWUgPSAwLjI7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1heExpZmVUaW1lID0gMC40O1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLmVtaXRSYXRlID0gMTUwO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX09ORU9ORTtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5kaXJlY3Rpb24xID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAyLCAwKTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMiwgMCk7XG5cbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWluQW5ndWxhclNwZWVkID0gLTEwO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5tYXhBbmd1bGFyU3BlZWQgPSBNYXRoLlBJO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1pbkVtaXRQb3dlciA9IDE7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1heEVtaXRQb3dlciA9IDM7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLnVwZGF0ZVNwZWVkID0gMC4wMDc7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmxheWVyTWFzayA9IDI7XG5cbiAgICAgICAgICAgIHRoaXMucGFydGljbGVTeXN0ZW0gPSBmaXJlU3lzdGVtO1xuICAgICAgICB9XG4gICAgfVxuIiwiaW1wb3J0IHtBYnN0cmFjdFBhcnRpY2xlfSBmcm9tIFwiLi9BYnN0cmFjdFBhcnRpY2xlXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBGaXJlcGxhY2VTbW9rZSBleHRlbmRzIEFic3RyYWN0UGFydGljbGUge1xuXG4gICAgaW5pdFBhcnRpY2xlU3lzdGVtKCkge1xuICAgICAgICB2YXIgc21va2VTeXN0ZW0gPSBuZXcgQkFCWUxPTi5HUFVQYXJ0aWNsZVN5c3RlbShcInBhcnRpY2xlc1wiLCB7Y2FwYWNpdHk6IDEwMH0sIHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgIHNtb2tlU3lzdGVtLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvZmxhcmUucG5nXCIsIHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgIHNtb2tlU3lzdGVtLmVtaXR0ZXIgPSB0aGlzLmVtaXR0ZXI7XG4gICAgICAgIHNtb2tlU3lzdGVtLm1pbkVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAuNSwgMS41LCAwLjUpO1xuICAgICAgICBzbW9rZVN5c3RlbS5tYXhFbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygtMC41LCAxLjUsIC0wLjUpO1xuXG4gICAgICAgIHNtb2tlU3lzdGVtLmNvbG9yMSA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLjEsIDAuMSwgMC4xLCAxLjApO1xuICAgICAgICBzbW9rZVN5c3RlbS5jb2xvcjIgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMC4xLCAwLjEsIDAuMSwgMS4wKTtcbiAgICAgICAgc21va2VTeXN0ZW0uY29sb3JEZWFkID0gbmV3IEJBQllMT04uQ29sb3I0KDAsIDAsIDAsIDAuMCk7XG5cbiAgICAgICAgc21va2VTeXN0ZW0ubWluU2l6ZSA9IDAuMztcbiAgICAgICAgc21va2VTeXN0ZW0ubWF4U2l6ZSA9IDE7XG5cbiAgICAgICAgc21va2VTeXN0ZW0ubWluTGlmZVRpbWUgPSAwLjM7XG4gICAgICAgIHNtb2tlU3lzdGVtLm1heExpZmVUaW1lID0gMC42O1xuXG4gICAgICAgIHNtb2tlU3lzdGVtLmVtaXRSYXRlID0gMTAwO1xuXG4gICAgICAgIHNtb2tlU3lzdGVtLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX09ORU9ORTtcblxuICAgICAgICBzbW9rZVN5c3RlbS5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcblxuICAgICAgICBzbW9rZVN5c3RlbS5kaXJlY3Rpb24xID0gbmV3IEJBQllMT04uVmVjdG9yMygtMS41LCA4LCAtMS41KTtcbiAgICAgICAgc21va2VTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMS41LCA4LCAxLjUpO1xuXG4gICAgICAgIHNtb2tlU3lzdGVtLm1pbkFuZ3VsYXJTcGVlZCA9IDUwO1xuICAgICAgICBzbW9rZVN5c3RlbS5tYXhBbmd1bGFyU3BlZWQgPSBNYXRoLlBJO1xuXG4gICAgICAgIHNtb2tlU3lzdGVtLm1pbkVtaXRQb3dlciA9IDAuNTtcbiAgICAgICAgc21va2VTeXN0ZW0ubWF4RW1pdFBvd2VyID0gMS41O1xuICAgICAgICBzbW9rZVN5c3RlbS51cGRhdGVTcGVlZCA9IDAuMDA1O1xuICAgICAgICBzbW9rZVN5c3RlbS5sYXllck1hc2sgPSAyO1xuXG4gICAgICAgIHRoaXMucGFydGljbGVTeXN0ZW0gPSBzbW9rZVN5c3RlbTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBHYXRld2F5UGFydGljbGVzIHtcblxuICAgIHN0YXRpYyBpbml0UGFydGljbGVTeXN0ZW0oZ2FtZTogR2FtZSwgZW1pdHRlcjogQkFCWUxPTi5NZXNoLCBpc0FjdGl2ZTogYm9vbGVhbik6IEJBQllMT04uR1BVUGFydGljbGVTeXN0ZW0ge1xuICAgICAgICBsZXQgcGFydGljbGVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5HUFVQYXJ0aWNsZVN5c3RlbShcInBhcnRpY2xlc1wiLCB7Y2FwYWNpdHk6IDE1MH0sIGdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL2ZsYXJlLnBuZ1wiLCBnYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0uZW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLm1pbkVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0xLCAwLCAtMSk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLm1heEVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEsIDAsIDEpO1xuXG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uY29sb3IxID0gbmV3IEJBQllMT04uQ29sb3I0KDAuNywgMC44LCAxLjAsIDEpO1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uY29sb3IyID0gbmV3IEJBQllMT04uQ29sb3I0KDAuMiwgMC41LCAxLjAsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uY29sb3IxID0gbmV3IEJBQllMT04uQ29sb3I0KDEsIDAsIDAuMCwgMSk7XG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5jb2xvcjIgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMC41LCAwLCAwLjAsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmNvbG9yRGVhZCA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLjIsIDAuMCk7XG5cbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubWluU2l6ZSA9IDAuMTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubWF4U2l6ZSA9IDAuNTtcblxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5taW5MaWZlVGltZSA9IDAuMztcbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubWF4TGlmZVRpbWUgPSAxO1xuXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmVtaXRSYXRlID0gMTUwO1xuXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX09ORU9ORTtcblxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCA5LjgxLCAwKTtcblxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5kaXJlY3Rpb24xID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMC4yNSwgMCk7XG5cbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubWluQW5ndWxhclNwZWVkID0gMDtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubWF4QW5ndWxhclNwZWVkID0gTWF0aC5QSTtcblxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5taW5FbWl0UG93ZXIgPSAwLjU7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLm1heEVtaXRQb3dlciA9IDEuNTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0udXBkYXRlU3BlZWQgPSAwLjAwNDtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubGF5ZXJNYXNrID0gMjtcblxuICAgICAgICByZXR1cm4gcGFydGljbGVTeXN0ZW07XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgQ2xpY2tQYXJ0aWNsZXMge1xuXG4gICAgc3RhdGljIGdldFBhcnRpY2xlcyhzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgICAgICBsZXQgcGFydGljbGVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbShcImNsaWNrUGFydGljbGVzXCIsIDUwLCBzY2VuZSk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvZmxhcmUucG5nXCIsIHNjZW5lKTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubGF5ZXJNYXNrID0gMjtcblxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5jb2xvcjEgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMC43LCAwLjgsIDEuMCwgMS4wKTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0uY29sb3IyID0gbmV3IEJBQllMT04uQ29sb3I0KDAuMiwgMC41LCAxLjAsIDEuMCk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmNvbG9yRGVhZCA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLjIsIDAuMCk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmVtaXR0ZXIgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDIsIDApOyAvLyB0aGUgc3RhcnRpbmcgbG9jYXRpb25cblxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5taW5TaXplID0gMC41O1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5tYXhTaXplID0gMC41O1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5taW5MaWZlVGltZSA9IDAuNTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubWF4TGlmZVRpbWUgPSAxLjU7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmVtaXRSYXRlID0gMjA7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLnRhcmdldFN0b3BEdXJhdGlvbiA9IDAuMjtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0uY3JlYXRlUG9pbnRFbWl0dGVyKG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCksIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMSwgMCkpO1xuXG4gICAgICAgIC8vIFNwZWVkXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLm1pbkVtaXRQb3dlciA9IDE7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLm1heEVtaXRQb3dlciA9IDM7XG5cblxuICAgICAgICByZXR1cm4gcGFydGljbGVTeXN0ZW07XG4gICAgfVxufVxuIiwiaW1wb3J0IHtBYnN0cmFjdFBhcnRpY2xlfSBmcm9tIFwiLi4vQWJzdHJhY3RQYXJ0aWNsZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgSGVhbCBleHRlbmRzIEFic3RyYWN0UGFydGljbGUge1xuXG4gICAgICAgIGluaXRQYXJ0aWNsZVN5c3RlbSgpIHtcbiAgICAgICAgICAgIGxldCBzY2VuZSA9IHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKTtcbiAgICAgICAgICAgIGxldCBlbWl0dGVyID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveChcImVtaXR0ZXIwXCIsIDAuMSwgc2NlbmUpO1xuICAgICAgICAgICAgZW1pdHRlci5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGVtaXR0ZXIucGFyZW50ID0gdGhpcy5lbWl0dGVyO1xuXG4gICAgICAgICAgICBsZXQgZmlyZVN5c3RlbSA9IG5ldyBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtKFwicGFydGljbGVzXCIsIDEwMDAsIHNjZW5lKTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9mbGFyZS5wbmdcIiwgc2NlbmUpO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5taW5TaXplID0gMC4zO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5tYXhTaXplID0gMC4zO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5taW5FbWl0UG93ZXIgPSAxLjA7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1heEVtaXRQb3dlciA9IDE7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1pbkxpZmVUaW1lID0gMTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWF4TGlmZVRpbWUgPSAxO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5lbWl0UmF0ZSA9IDIwMDtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0uYmxlbmRNb2RlID0gQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfT05FT05FO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5taW5FbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWF4RW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDksIDApO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5kaXJlY3Rpb24xID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmNvbG9yMSA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLjcsIDAuOCwgMS4wLCAxLjApO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5jb2xvcjIgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMC4yLCAwLjUsIDEuMCwgMS4wKTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0udGFyZ2V0U3RvcER1cmF0aW9uID0gMC44O1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5lbWl0dGVyID0gZW1pdHRlcjtcblxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZVN5c3RlbSA9IGZpcmVTeXN0ZW07XG4gICAgICAgIH1cbiAgICB9XG4iLCJpbXBvcnQge0Fic3RyYWN0UGFydGljbGV9IGZyb20gXCIuLi9BYnN0cmFjdFBhcnRpY2xlXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBTaGllbGRBdHRhY2sgZXh0ZW5kcyBBYnN0cmFjdFBhcnRpY2xlIHtcblxuICAgIGluaXRQYXJ0aWNsZVN5c3RlbSgpIHtcbiAgICAgICAgbGV0IGJveCA9IEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlQm94KFwiYngwXCIsIHtzaXplOiAxfSwgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgYm94LnZpc2liaWxpdHkgPSAwO1xuICAgICAgICBib3guc2NhbGluZyA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMSwgMSwgMC4xKTtcbiAgICAgICAgYm94LnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwLjEpO1xuICAgICAgICBib3gucGFyZW50ID0gdGhpcy5lbWl0dGVyO1xuXG4gICAgICAgIGJveC5hdHRhY2hUb0JvbmUodGhpcy5lbWl0dGVyLnNrZWxldG9uLmJvbmVzWzEzXSwgdGhpcy5lbWl0dGVyKTtcblxuICAgICAgICBsZXQgZmlyZVN5c3RlbSA9IG5ldyBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtKFwicGFydGljbGVzXCIsIDEwMDAsIHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgIGZpcmVTeXN0ZW0ucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9mbGFyZS5wbmdcIiwgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgZmlyZVN5c3RlbS5lbWl0dGVyID0gYm94O1xuICAgICAgICBmaXJlU3lzdGVtLm1pblNpemUgPSAxO1xuICAgICAgICBmaXJlU3lzdGVtLm1heFNpemUgPSAxO1xuICAgICAgICBmaXJlU3lzdGVtLm1pbkVtaXRQb3dlciA9IDA7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWF4RW1pdFBvd2VyID0gMTtcbiAgICAgICAgZmlyZVN5c3RlbS5taW5MaWZlVGltZSA9IDAuMjtcbiAgICAgICAgZmlyZVN5c3RlbS5tYXhMaWZlVGltZSA9IDAuMjtcbiAgICAgICAgZmlyZVN5c3RlbS5lbWl0UmF0ZSA9IDE1MDtcbiAgICAgICAgZmlyZVN5c3RlbS5ibGVuZE1vZGUgPSBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9PTkVPTkU7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWluRW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoLTEsIC0xLCAtMSk7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWF4RW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMSwgMSwgMSk7XG4gICAgICAgIGZpcmVTeXN0ZW0uZ3Jhdml0eSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG4gICAgICAgIGZpcmVTeXN0ZW0uZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG4gICAgICAgIGZpcmVTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG4gICAgICAgIGZpcmVTeXN0ZW0uY29sb3IxID0gbmV3IEJBQllMT04uQ29sb3I0KDEsIDEsIDEsIDEpO1xuICAgICAgICBmaXJlU3lzdGVtLmNvbG9yMiA9IG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAxLCAxLCAxKTtcbiAgICAgICAgZmlyZVN5c3RlbS51cGRhdGVTcGVlZCA9IDAuMDE7XG5cbiAgICAgICAgdGhpcy5wYXJ0aWNsZVN5c3RlbSA9IGZpcmVTeXN0ZW07XG4gICAgfVxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vLi4vR2FtZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTb2xpZFBhcnRpY2xlIHtcblxuICAgIHByb3RlY3RlZCBnYW1lOiBHYW1lO1xuICAgIHByb3RlY3RlZCBzaGFwZTogQkFCWUxPTi5NZXNoO1xuICAgIHByb3RlY3RlZCBwYXJlbnQ6IEJBQllMT04uQWJzdHJhY3RNZXNoO1xuICAgIHByb3RlY3RlZCBjb2xsaWRlcjogQkFCWUxPTi5NZXNoO1xuICAgIHB1YmxpYyBwYXJ0aWNsZVN5c3RlbTogQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbTtcbiAgICBwdWJsaWMgc3BzTWVzaDogQkFCWUxPTi5NZXNoO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgcGFyZW50OiBCQUJZTE9OLkFic3RyYWN0TWVzaCwgc2hhcGU6IEJBQllMT04uTWVzaCwgaXNDb2xsaWRlcjogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgICAgIGlmIChpc0NvbGxpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyID0gQkFCWUxPTi5NZXNoQnVpbGRlci5DcmVhdGVCb3goXCJib3hcIiwge2hlaWdodDogMTB9LCBnYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIudmlzaWJpbGl0eSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQudmlzaWJpbGl0eSA9IDA7XG4gICAgICAgIHBhcmVudC5pc1BpY2thYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgYnVpbGRTUFMoY291bnQ6IG51bWJlcik6IEFic3RyYWN0U29saWRQYXJ0aWNsZTtcbn1cbiIsImltcG9ydCB7QWJzdHJhY3RTb2xpZFBhcnRpY2xlfSBmcm9tIFwiLi9BYnN0cmFjdFNvbGlkUGFydGljbGVTeXN0ZW1cIjtcbmltcG9ydCB7Q29sbGlzaW9uc30gZnJvbSBcIi4uLy4uL0luaXRpYWxpemVycy9Db2xsaXNpb25zXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBOYXR1cmUgZXh0ZW5kcyBBYnN0cmFjdFNvbGlkUGFydGljbGUge1xuXG4gICAgICAgIHB1YmxpYyBidWlsZFNQUyhjb3VudDogbnVtYmVyKTogQWJzdHJhY3RTb2xpZFBhcnRpY2xlIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICAgICAgbGV0IHBhcmVudFBvc2l0aW9ucyA9IHRoaXMucGFyZW50LmdldFZlcnRpY2VzRGF0YShCQUJZTE9OLlZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uTGVuZ3RoID0gcGFyZW50UG9zaXRpb25zLmxlbmd0aDtcblxuICAgICAgICAgICAgbGV0IG15QnVpbGRlciA9IGZ1bmN0aW9uIChwYXJ0aWNsZSwgaSwgcykge1xuICAgICAgICAgICAgICAgIGxldCByYW5kb21Qb3NpdGlvbiA9IDI7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKHBhcmVudFBvc2l0aW9uc1socyAqIHJhbmRvbVBvc2l0aW9uICsgcyldLCBwYXJlbnRQb3NpdGlvbnNbcyAqIHJhbmRvbVBvc2l0aW9uICsgcyArIDFdLCBwYXJlbnRQb3NpdGlvbnNbcyAqIHJhbmRvbVBvc2l0aW9uICsgcyArIDJdKTtcblxuICAgICAgICAgICAgICAgIGlmKHNlbGYuY29sbGlkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0NvbGxpZGVyID0gc2VsZi5jb2xsaWRlci5jcmVhdGVJbnN0YW5jZSgnc3BzX25hdHVyZV9jb2xsaXNpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29sbGlkZXIucG9zaXRpb24ueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbGxpZGVyLnBvc2l0aW9uLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgICAgICAgICBuZXdDb2xsaWRlci5wb3NpdGlvbi56ID0gcG9zaXRpb24uejtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29sbGlkZXIuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgQ29sbGlzaW9ucy5zZXRDb2xsaWRlcihnYW1lLmdldEJhYnlsb25TY2VuZSgpLCBuZXdDb2xsaWRlcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFydGljbGUucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKSArIDAuNTtcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5zY2FsaW5nLnkgPSByYW5kb207XG4gICAgICAgICAgICAgICAgcGFydGljbGUuc2NhbGluZy54ID0gcmFuZG9tO1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnNjYWxpbmcueiA9IHJhbmRvbTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBzcHMgPSBuZXcgQkFCWUxPTi5Tb2xpZFBhcnRpY2xlU3lzdGVtKCdzcHNOYXR1cmUnLCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCksIHt1cGRhdGFibGU6IGZhbHNlfSk7XG4gICAgICAgICAgICBzcHMuYWRkU2hhcGUodGhpcy5zaGFwZSwgY291bnQsIHtwb3NpdGlvbkZ1bmN0aW9uOiBteUJ1aWxkZXJ9KTtcbiAgICAgICAgICAgIGxldCBzcHNNZXNoID0gc3BzLmJ1aWxkTWVzaCgpO1xuICAgICAgICAgICAgc3BzTWVzaC5tYXRlcmlhbCA9IHRoaXMuc2hhcGUubWF0ZXJpYWw7XG4gICAgICAgICAgICB0aGlzLnNwc01lc2ggPSBzcHNNZXNoO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cbiIsImltcG9ydCB7QWJzdHJhY3RTb2xpZFBhcnRpY2xlfSBmcm9tIFwiLi9BYnN0cmFjdFNvbGlkUGFydGljbGVTeXN0ZW1cIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIE5hdHVyZUJsb2NrIGV4dGVuZHMgQWJzdHJhY3RTb2xpZFBhcnRpY2xlIHtcblxuICAgIHB1YmxpYyBidWlsZFNQUyhjb3VudDogbnVtYmVyKTogQWJzdHJhY3RTb2xpZFBhcnRpY2xlIHtcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMucGFyZW50LmdldFZlcnRpY2VzRGF0YShCQUJZTE9OLlZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xuICAgICAgICBsZXQgbXlCdWlsZGVyID0gZnVuY3Rpb24ocGFydGljbGUsIGksIHMpIHtcbiAgICAgICAgICAgIGxldCByYW5kb21Qb3NpdGlvbiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo1KTtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMocG9zaXRpb25zW3MqcmFuZG9tUG9zaXRpb24qM10sIHBvc2l0aW9uc1tzKnJhbmRvbVBvc2l0aW9uKjMrMV0sIHBvc2l0aW9uc1tzKnJhbmRvbVBvc2l0aW9uKjMrMl0pO1xuICAgICAgICAgICAgcGFydGljbGUucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpICsgMTtcbiAgICAgICAgICAgIHBhcnRpY2xlLnNjYWxpbmcueSA9IHJhbmRvbTtcbiAgICAgICAgICAgIHBhcnRpY2xlLnNjYWxpbmcueCA9IHJhbmRvbTtcbiAgICAgICAgICAgIHBhcnRpY2xlLnNjYWxpbmcueiA9IHJhbmRvbTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc3BzID0gbmV3IEJBQllMT04uU29saWRQYXJ0aWNsZVN5c3RlbSgnc3BzTmF0dXJlQmxvY2snLCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCksIHt1cGRhdGFibGU6IGZhbHNlfSk7XG4gICAgICAgIHNwcy5hZGRTaGFwZSh0aGlzLnNoYXBlLCBjb3VudCwge3Bvc2l0aW9uRnVuY3Rpb246IG15QnVpbGRlcn0pO1xuICAgICAgICBsZXQgc3BzTWVzaCA9IHNwcy5idWlsZE1lc2goKTtcbiAgICAgICAgc3BzTWVzaC5tYXRlcmlhbCA9IHRoaXMuc2hhcGUubWF0ZXJpYWw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgV2Fsa1Ntb2tlIHtcbiAgICBzdGF0aWMgZ2V0UGFydGljbGVzKHNjZW5lOiBCQUJZTE9OLlNjZW5lLCBlbWl0UmF0ZTogbnVtYmVyLCBlbWl0dGVyOiBCQUJZTE9OLkFic3RyYWN0TWVzaCk6IEJBQllMT04uR1BVUGFydGljbGVTeXN0ZW0ge1xuICAgICAgICBsZXQgc21va2VTeXN0ZW0gPSBuZXcgQkFCWUxPTi5HUFVQYXJ0aWNsZVN5c3RlbShcInBhcnRpY2xlc1wiLCB7Y2FwYWNpdHk6IDEwfSwgc2NlbmUpO1xuICAgICAgICBzbW9rZVN5c3RlbS5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL2ZsYXJlLnBuZ1wiLCBzY2VuZSk7XG4gICAgICAgIHNtb2tlU3lzdGVtLmVtaXR0ZXIgPSBlbWl0dGVyO1xuICAgICAgICBzbW9rZVN5c3RlbS5taW5FbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwLjgpO1xuICAgICAgICBzbW9rZVN5c3RlbS5tYXhFbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwLjgpO1xuXG4gICAgICAgIHNtb2tlU3lzdGVtLmNvbG9yMSA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLjIsIDAuMiwgMC4xLCAxLjApO1xuICAgICAgICBzbW9rZVN5c3RlbS5jb2xvcjIgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMC4yLCAwLjIsIDAuMSwgMS4wKTtcbiAgICAgICAgc21va2VTeXN0ZW0uY29sb3JEZWFkID0gbmV3IEJBQllMT04uQ29sb3I0KDAsIDAsIDAsIDAuMCk7XG5cbiAgICAgICAgc21va2VTeXN0ZW0ubWluU2l6ZSA9IDAuMztcbiAgICAgICAgc21va2VTeXN0ZW0ubWF4U2l6ZSA9IDEuNTtcblxuICAgICAgICBzbW9rZVN5c3RlbS5taW5MaWZlVGltZSA9IDAuMTU7XG4gICAgICAgIHNtb2tlU3lzdGVtLm1heExpZmVUaW1lID0gMC4xNTtcblxuICAgICAgICBzbW9rZVN5c3RlbS5lbWl0UmF0ZSA9IGVtaXRSYXRlO1xuXG4gICAgICAgIHNtb2tlU3lzdGVtLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX09ORU9ORTtcblxuICAgICAgICBzbW9rZVN5c3RlbS5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcblxuICAgICAgICBzbW9rZVN5c3RlbS5kaXJlY3Rpb24xID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCA0LCAwKTtcbiAgICAgICAgc21va2VTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgNCwgMCk7XG5cbiAgICAgICAgc21va2VTeXN0ZW0ubWluQW5ndWxhclNwZWVkID0gMDtcbiAgICAgICAgc21va2VTeXN0ZW0ubWF4QW5ndWxhclNwZWVkID0gTWF0aC5QSTtcblxuICAgICAgICBzbW9rZVN5c3RlbS5taW5FbWl0UG93ZXIgPSAxO1xuICAgICAgICBzbW9rZVN5c3RlbS5tYXhFbWl0UG93ZXIgPSAxO1xuICAgICAgICBzbW9rZVN5c3RlbS51cGRhdGVTcGVlZCA9IDAuMDA0O1xuICAgICAgICBzbW9rZVN5c3RlbS5sYXllck1hc2sgPSAyO1xuXG4gICAgICAgIHJldHVybiBzbW9rZVN5c3RlbTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0Fic3RyYWN0Q2hhcmFjdGVyfSBmcm9tIFwiLi4vQ2hhcmFjdGVycy9BYnN0cmFjdENoYXJhY3RlclwiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi9JdGVtcy9JdGVtXCI7XG5pbXBvcnQge0l0ZW1NYW5hZ2VyfSBmcm9tIFwiLi9JdGVtcy9JdGVtTWFuYWdlclwiO1xuXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5IHtcblxuICAgICAgICBwcm90ZWN0ZWQgcGxheWVyOiBBYnN0cmFjdENoYXJhY3RlcjtcbiAgICAgICAgcHJvdGVjdGVkIGdhbWU6IEdhbWU7XG5cbiAgICAgICAgLyoqIEVxdWlwZWQgaXRlbXMgKi9cbiAgICAgICAgcHVibGljIGhlbG06IEl0ZW07XG4gICAgICAgIHB1YmxpYyBnbG92ZXM6IEl0ZW07XG4gICAgICAgIHB1YmxpYyBib290czogSXRlbTtcbiAgICAgICAgcHVibGljIGFybW9yOiBJdGVtO1xuICAgICAgICBwdWJsaWMgd2VhcG9uOiBJdGVtO1xuICAgICAgICBwdWJsaWMgc2hpZWxkOiBJdGVtO1xuXG4gICAgICAgIHB1YmxpYyBpdGVtczogQXJyYXk8SXRlbT47XG5cbiAgICAgICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgcGxheWVyOiBBYnN0cmFjdENoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGNsZWFySXRlbXMoKSB7XG4gICAgICAgICAgICB0aGlzLndlYXBvbiA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNoaWVsZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmhlbG0gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5nbG92ZXMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5ib290cyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmFybW9yID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAgICAgKiBAcGFyYW0gc2V0SXRlbVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWlwSXRlbShpdGVtOiBJdGVtLCBzZXRJdGVtOiBib29sZWFuKSB7XG4gICAgICAgICAgICBpZiAoc2V0SXRlbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvbmVzTnVtYmVycyA9IFtdO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2VhcG9uID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVzTnVtYmVycy5wdXNoKHRoaXMucGxheWVyLm1lc2guc2tlbGV0b24uZ2V0Qm9uZUluZGV4QnlOYW1lKCd3ZWFwb24uYm9uZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaWVsZCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib25lc051bWJlcnMucHVzaCh0aGlzLnBsYXllci5tZXNoLnNrZWxldG9uLmdldEJvbmVJbmRleEJ5TmFtZSgnc2hpZWxkLmJvbmUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWxtID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVzTnVtYmVycy5wdXNoKHRoaXMucGxheWVyLm1lc2guc2tlbGV0b24uZ2V0Qm9uZUluZGV4QnlOYW1lKCdoZWFkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2xvdmVzID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVzTnVtYmVycy5wdXNoKHRoaXMucGxheWVyLm1lc2guc2tlbGV0b24uZ2V0Qm9uZUluZGV4QnlOYW1lKCdoYW5kLkwnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib25lc051bWJlcnMucHVzaCh0aGlzLnBsYXllci5tZXNoLnNrZWxldG9uLmdldEJvbmVJbmRleEJ5TmFtZSgnaGFuZC5SJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vdHMgPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9uZXNOdW1iZXJzLnB1c2godGhpcy5wbGF5ZXIubWVzaC5za2VsZXRvbi5nZXRCb25lSW5kZXhCeU5hbWUoJ2Zvb3QuTCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVzTnVtYmVycy5wdXNoKHRoaXMucGxheWVyLm1lc2guc2tlbGV0b24uZ2V0Qm9uZUluZGV4QnlOYW1lKCdmb290LlInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcm1vciA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib25lc051bWJlcnMucHVzaCh0aGlzLnBsYXllci5tZXNoLnNrZWxldG9uLmdldEJvbmVJbmRleEJ5TmFtZSgnY2hlc3QnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpdGVtLm1lc2ggPSB0aGlzLmdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5hc3NldHMuY2hhcmFjdGVyLmNyZWF0ZUNsb25lKGl0ZW0ubWVzaE5hbWUpO1xuICAgICAgICAgICAgICAgIGl0ZW0ubWVzaC5wYXJlbnQgPSB0aGlzLnBsYXllci5tZXNoO1xuICAgICAgICAgICAgICAgIGl0ZW0ubWVzaC5za2VsZXRvbiA9IHRoaXMucGxheWVyLm1lc2guc2tlbGV0b247XG5cbiAgICAgICAgICAgICAgICAvLyBib25lc051bWJlcnMuZm9yRWFjaCgoYm9uZU51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBtZXNoID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveCgndGVzdCcsIDEsIHRoaXMuZ2FtZS5nZXRTY2VuZSgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIG1lc2guYXR0YWNoVG9Cb25lKHRoaXMucGxheWVyLm1lc2guc2tlbGV0b24uYm9uZXNbYm9uZU51bWJlcl0sIHRoaXMucGxheWVyLm1lc2gpO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoaXRlbS50eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgICAgICAgICAgICAgYm9uZXNOdW1iZXJzLmZvckVhY2goKGJvbmVOdW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY3JlYXRlVHJhaWxNZXNoKGdhbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50cmFpbEJveC5hdHRhY2hUb0JvbmUodGhpcy5wbGF5ZXIubWVzaC5za2VsZXRvbi5ib25lc1tib25lTnVtYmVyXSwgdGhpcy5wbGF5ZXIubWVzaCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBlbWl0RXF1aXAoaXRlbTogSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnaXRlbUVxdWlwJywge1xuICAgICAgICAgICAgICAgIGlkOiBpdGVtLmRhdGFiYXNlSWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0RXF1aXBlZEl0ZW1zKCk6IEFycmF5PEl0ZW0+IHtcbiAgICAgICAgICAgIGxldCBlcXVpcGVkSXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgZXF1aXBlZEl0ZW1zLnB1c2godGhpcy5oZWxtKTtcbiAgICAgICAgICAgIGVxdWlwZWRJdGVtcy5wdXNoKHRoaXMuYXJtb3IpO1xuICAgICAgICAgICAgZXF1aXBlZEl0ZW1zLnB1c2godGhpcy53ZWFwb24pO1xuICAgICAgICAgICAgZXF1aXBlZEl0ZW1zLnB1c2godGhpcy5zaGllbGQpO1xuICAgICAgICAgICAgZXF1aXBlZEl0ZW1zLnB1c2godGhpcy5nbG92ZXMpO1xuICAgICAgICAgICAgZXF1aXBlZEl0ZW1zLnB1c2godGhpcy5ib290cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBlcXVpcGVkSXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2hvd1Nhc2hPckhhaXIoc2hvd0hhaXI6IGJvb2xlYW4sIHNob3dTYXNoOiBib29sZWFuKSB7XG5cbiAgICAgICAgICAgIC8vVE9ETzogQnVnZ2VkIGhhaXIgaW4gY2hhcmFjdGVyXG4gICAgICAgICAgICAvLyBpZiAoc2hvd0hhaXIpIHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgaGVsbSA9IG5ldyBJdGVtKHRoaXMuZ2FtZSwge1xuICAgICAgICAgICAgLy8gICAgICAgICBuYW1lOiBcIkhhaXJcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgaW1hZ2U6ICdoYWlyJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgbWVzaE5hbWU6ICdoYWlyJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgdHlwZTogMyxcbiAgICAgICAgICAgIC8vICAgICAgICAgZW50aXR5OiB7aWQ6IDB9LFxuICAgICAgICAgICAgLy8gICAgICAgICBzdGF0aXN0aWNzOiBudWxsXG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuZXF1aXBJdGVtKGhlbG0sIHRydWUpO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBpZiAoc2hvd1Nhc2gpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJtb3IgPSBuZXcgSXRlbSh0aGlzLmdhbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTYXNoXCIsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiAnc2FzaCcsXG4gICAgICAgICAgICAgICAgICAgIG1lc2hOYW1lOiAnc2FzaCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IDYsXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eToge2lkOiAwfSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljczogbnVsbFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5lcXVpcEl0ZW0oYXJtb3IsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZGVsZXRlU2FzaEFuZEhhaXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWxtICYmIHRoaXMuaGVsbS5uYW1lID09IFwiSGFpclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWxtLm1lc2guZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5hcm1vciAmJiB0aGlzLmFybW9yLm5hbWUgPT0gXCJTYXNoXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFybW9yLm1lc2guZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJucyB7UGxheWVyfVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbW92ZUl0ZW1zKCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gW107XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpbnZlbnRvcnlJdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldEl0ZW1zKGludmVudG9yeUl0ZW1zOiBBcnJheTxhbnk+KSB7XG4gICAgICAgICAgICBpZiAoaW52ZW50b3J5SXRlbXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1NYW5hZ2VyID0gbmV3IEl0ZW1NYW5hZ2VyKGdhbWUpO1xuXG4gICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kZWxldGVTYXNoQW5kSGFpcigpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFySXRlbXMoKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU1hbmFnZXIuaW5pdEl0ZW1zRnJvbURhdGFiYXNlT25DaGFyYWN0ZXIoaW52ZW50b3J5SXRlbXMsIHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2FtZS5ndWkuaW52ZW50b3J5Lm9wZW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZ3VpLmludmVudG9yeS5yZWZyZXNoUG9wdXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi9HYW1lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBJdGVtIHtcbiAgICAgICAgcHVibGljIHR5cGU6IE51bWJlcjtcbiAgICAgICAgcHVibGljIGRhdGFiYXNlSWQ6IE51bWJlcjtcbiAgICAgICAgcHVibGljIG1lc2g6IEJBQllMT04uTWVzaDtcbiAgICAgICAgcHVibGljIG1lc2hOYW1lOiBzdHJpbmc7XG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgICAgIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xuICAgICAgICBwdWJsaWMgc3RhdGlzdGljczogYW55O1xuXG4gICAgICAgIC8vL1RyYWlsIEVmZmVjdFxuICAgICAgICBwdWJsaWMgdHJhaWxCb3g6IEJBQllMT04uQWJzdHJhY3RNZXNoO1xuICAgICAgICBwdWJsaWMgdHJhaWxNZXNoOiBCQUJZTE9OLlRyYWlsTWVzaDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCBpdGVtRGF0YTogYW55KSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBpdGVtRGF0YS5uYW1lO1xuICAgICAgICAgICAgdGhpcy5tZXNoTmFtZSA9IGl0ZW1EYXRhLm1lc2hOYW1lO1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IGl0ZW1EYXRhLmltYWdlO1xuICAgICAgICAgICAgdGhpcy50eXBlID0gaXRlbURhdGEudHlwZTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljcyA9IGl0ZW1EYXRhLnN0YXRpc3RpY3M7XG5cbiAgICAgICAgICAgIGlmIChpdGVtRGF0YS5lbnRpdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFiYXNlSWQgPSBpdGVtRGF0YS5lbnRpdHkuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZGlzcG9zZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lc2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc2guZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy50cmFpbEJveCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhaWxCb3guZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy50cmFpbE1lc2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWlsTWVzaC5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgY3JlYXRlVHJhaWxNZXNoKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMudHJhaWxCb3ggPSBCQUJZTE9OLk1lc2guQ3JlYXRlQm94KCd0ZXN0JywgMSwgZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy50cmFpbEJveC5sYXllck1hc2sgPSAyO1xuICAgICAgICAgICAgdGhpcy50cmFpbEJveC52aXNpYmlsaXR5ID0gMDtcblxuICAgICAgICAgICAgdGhpcy50cmFpbE1lc2ggPSBuZXcgQkFCWUxPTi5UcmFpbE1lc2goXCJUZXN0XCIsIHRoaXMudHJhaWxCb3gsIGdhbWUuZ2V0QmFieWxvblNjZW5lKCksIDAuMiwgNDAsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMudHJhaWxNZXNoLmxheWVyTWFzayA9IDI7XG4gICAgICAgICAgICB0aGlzLnRyYWlsTWVzaC52aXNpYmlsaXR5ID0gMDtcblxuICAgICAgICAgICAgbGV0IG1hdGVyaWFsID0gIG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoJ3RyYWlsX21hdGVyaWFsJywgZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgICAgICBtYXRlcmlhbC5lbWlzc2l2ZUNvbG9yID0gQkFCWUxPTi5Db2xvcjMuV2hpdGUoKTtcblxuICAgICAgICAgICAgdGhpcy50cmFpbE1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbDtcbiAgICAgICAgfVxuICAgIH1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4vSXRlbVwiO1xuaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuLi9JbnZlbnRvcnlcIjtcblxuZXhwb3J0IGNsYXNzIEl0ZW1NYW5hZ2VyIHtcblxuICAgIHByb3RlY3RlZCBnYW1lOiBHYW1lO1xuICAgIHByb3RlY3RlZCBpdGVtczogQXJyYXk8SXRlbT47XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGludmVudG9yeUl0ZW1zXG4gICAgICogQHBhcmFtIGludmVudG9yeVxuICAgICAqIEBwYXJhbSBoaWRlU2hpZWxkQW5kV2VhcG9uXG4gICAgICovXG4gICAgcHVibGljIGluaXRJdGVtc0Zyb21EYXRhYmFzZU9uQ2hhcmFjdGVyKGludmVudG9yeUl0ZW1zOiBBcnJheTxhbnk+LCBpbnZlbnRvcnk6IEludmVudG9yeSwgaGlkZVNoaWVsZEFuZFdlYXBvbjogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNob3dTYXNoID0gdHJ1ZTtcbiAgICAgICAgbGV0IHNob3dIYWlyID0gdHJ1ZTtcblxuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgaW52ZW50b3J5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbURhdGFiYXNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhpZGVTaGllbGRBbmRXZWFwb24gJiYgKGl0ZW1EYXRhYmFzZS50eXBlID09IDIgfHwgaXRlbURhdGFiYXNlLnR5cGUgPT0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gbmV3IEl0ZW0oc2VsZi5nYW1lLCBpdGVtRGF0YWJhc2UpO1xuICAgICAgICAgICAgICAgIGludmVudG9yeS5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVxdWlwID0gaXRlbURhdGFiYXNlLmVudGl0eS5lcXVpcDtcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkuZXF1aXBJdGVtKGl0ZW0sIGVxdWlwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gMyAmJiBlcXVpcCkge1xuICAgICAgICAgICAgICAgICAgICBzaG93SGFpciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gNiAmJiBlcXVpcCkge1xuICAgICAgICAgICAgICAgICAgICBzaG93U2FzaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbnZlbnRvcnkuc2hvd1Nhc2hPckhhaXIoc2hvd0hhaXIsIHNob3dTYXNoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vQ2hhcmFjdGVycy9QbGF5ZXJcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi4vLi4vRXZlbnRzL0V2ZW50c1wiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuaW1wb3J0IHtCdXR0b24sIFJlY3RhbmdsZSwgVGV4dEJsb2NrLCBDb250cm9sLCBJbWFnZSB9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTa2lsbCB7XG4gICAgc3RhdGljIFRZUEUgPSAwO1xuXG4gICAgcHJvdGVjdGVkIHBsYXllcjogUGxheWVyO1xuICAgIHByb3RlY3RlZCBnYW1lOiBHYW1lO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGFuaW1hdGlvbk5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgYW5pbWF0aW9uU3BlZWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgYW5pbWF0aW9uVGltZTogbnVtYmVyO1xuICAgIHB1YmxpYyBhbmltYXRpb25Mb29wOiBib29sZWFuO1xuXG4gICAgcHJvdGVjdGVkIGVmZmVjdEVtaXR0ZXI7XG4gICAgcHJvdGVjdGVkIGltYWdlOiBzdHJpbmc7XG4gICAgcHVibGljIGlzUmVhZHk6IGJvb2xlYW47XG4gICAgcHVibGljIGlzSW5Vc2U6IGJvb2xlYW47XG5cbiAgICAvKiogR1VJICovXG4gICAgcHJvdGVjdGVkIGFuaW1hdGlvbk92ZXJsYXk6IEJBQllMT04uQW5pbWF0aW9uO1xuICAgIHByb3RlY3RlZCBhbmltYXRpb25BbHBoYTogQkFCWUxPTi5BbmltYXRpb247XG4gICAgcHJvdGVjdGVkIGd1aUltYWdlOiBCdXR0b247XG4gICAgcHJvdGVjdGVkIGd1aU92ZXJsYXk6IFJlY3RhbmdsZTtcbiAgICBwcm90ZWN0ZWQgZ3VpVGV4dDogVGV4dEJsb2NrO1xuXG4gICAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gMDtcbiAgICAgICAgdGhpcy5hbmltYXRpb25Mb29wID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLmdhbWUgPSBwbGF5ZXIuZ2FtZTtcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckRlZmF1bHRzKHRoaXMuZ2FtZSk7XG5cbiAgICAgICAgaWYgKHBsYXllci5pc0NvbnRyb2xsYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTa2lsbEltYWdlSW5HVUkoKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJIb3RLZXkoKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBbmltYXRpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXRJbWFnZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGdldFR5cGUoKTtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCBzaG93QW5pbWF0aW9uKHNraWxsVGltZTogbnVtYmVyLCBjb29sZG93blRpbWU6IG51bWJlcik7XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVnaXN0ZXJEZWZhdWx0cyhnYW1lOiBHYW1lKTtcblxuICAgIHByb3RlY3RlZCByZWdpc3RlckhvdEtleSgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICBsZXQgbGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBnYW1lLnBsYXllcjtcbiAgICAgICAgICAgIHNlbGYuZ3VpSW1hZ2Uub25Qb2ludGVyVXBPYnNlcnZhYmxlLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNSZWFkeSAmJiAhcGxheWVyLmlzQW55U2tpbGxJc0luVXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoT2JqZWN0LmtleXMocGxheWVyLm1vbnN0ZXJzVG9BdHRhY2spLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9uc3RlclRvQXR0YWNrID0gT2JqZWN0LmtleXMocGxheWVyLm1vbnN0ZXJzVG9BdHRhY2spWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvaW50ID0gZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmVuZW1pZXNbbW9uc3RlclRvQXR0YWNrXS5tZXNoRm9yTW92ZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLm1lc2hGb3JNb3ZlLmxvb2tBdCh0YXJnZXRQb2ludCwgTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHBsYXllci5tZXNoRm9yTW92ZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdGF0aW9uID0gcGxheWVyLm1lc2hGb3JNb3ZlLnJvdGF0aW9uO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZm9yd2FyZHMgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0oTWF0aC5zaW4ocm90YXRpb24ueSkpLCAwLCAtKE1hdGguY29zKHJvdGF0aW9uLnkpKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uLmFkZChmb3J3YXJkcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnJ1blBsYXllclRvUG9zaXRpb24obmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnc2V0VGFyZ2V0UG9pbnQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3UG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ3VzZVNraWxsJywgc2VsZi5nZXRUeXBlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihFdmVudHMuUExBWUVSX0NPTk5FQ1RFRCwgbGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKEV2ZW50cy5QTEFZRVJfQ09OTkVDVEVELCBsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNob3dSZWxvYWRJbkdVSShjb29sZG93blRpbWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuaXNDb250cm9sbGFibGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkUmF0aW8gPSAxIC8gY29vbGRvd25UaW1lO1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGdhbWUuZ2V0QmFieWxvblNjZW5lKCkuYmVnaW5EaXJlY3RBbmltYXRpb24oc2VsZi5ndWlPdmVybGF5LCBbc2VsZi5hbmltYXRpb25PdmVybGF5XSwgMCwgMzAsIGZhbHNlLCBzcGVlZFJhdGlvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5iZWdpbkRpcmVjdEFuaW1hdGlvbihzZWxmLmd1aUltYWdlLCBbc2VsZi5hbmltYXRpb25BbHBoYV0sIDAsIDMwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2VsZi5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVNraWxsSW1hZ2VJbkdVSSgpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIGxldCBpbWFnZSA9IHRoaXMuZ2V0SW1hZ2VVcmwoKTtcbiAgICAgICAgbGV0IG51bWJlciA9IHRoaXMuZ2V0VHlwZSgpO1xuICAgICAgICBsZXQgZ3JpZCA9IGdhbWUuZ3VpLnBsYXllckJvdHRvbVBhbmVsLmd1aUdyaWRTa2lsbHM7XG5cbiAgICAgICAgbGV0IGltYWdlU2tpbGwgPSBCdXR0b24uQ3JlYXRlSW1hZ2VPbmx5QnV0dG9uKCdpbWFnZV8nICsgbnVtYmVyLCBpbWFnZSk7XG4gICAgICAgIGltYWdlU2tpbGwud2lkdGggPSAxO1xuICAgICAgICBpbWFnZVNraWxsLmhlaWdodCA9IDE7XG4gICAgICAgIGltYWdlU2tpbGwudGhpY2tuZXNzID0gMDtcbiAgICAgICAgaW1hZ2VTa2lsbC5pbWFnZS5zdHJldGNoID0gSW1hZ2UuU1RSRVRDSF9VTklGT1JNO1xuXG4gICAgICAgIGxldCBvdmVybGF5ID0gbmV3IFJlY3RhbmdsZSgpO1xuICAgICAgICBvdmVybGF5LndpZHRoID0gMTtcbiAgICAgICAgb3ZlcmxheS5oZWlnaHQgPSAwO1xuICAgICAgICBvdmVybGF5LmFscGhhID0gMC43O1xuICAgICAgICBvdmVybGF5LmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICBvdmVybGF5LmJhY2tncm91bmQgPSBcImJsYWNrXCI7XG4gICAgICAgIG92ZXJsYXkudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9CT1RUT007XG5cbiAgICAgICAgZ3JpZC5hZGRDb250cm9sKGltYWdlU2tpbGwsIDAsIG51bWJlciAtIDEpO1xuICAgICAgICBncmlkLmFkZENvbnRyb2wob3ZlcmxheSwgMCwgbnVtYmVyIC0gMSk7XG5cbiAgICAgICAgdGhpcy5ndWlJbWFnZSA9IGltYWdlU2tpbGw7XG4gICAgICAgIHRoaXMuZ3VpT3ZlcmxheSA9IG92ZXJsYXk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWdpc3RlckFuaW1hdGlvbnMoKSB7XG4gICAgICAgIGxldCBhbmltYXRpb25BbHBoYSA9IG5ldyBCQUJZTE9OLkFuaW1hdGlvbihcImFuaW1hdGlvbkFscGhhXCIsIFwiYWxwaGFcIiwgMzAsIEJBQllMT04uQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIEJBQllMT04uQW5pbWF0aW9uLkFOSU1BVElPTkxPT1BNT0RFX0NZQ0xFKTtcbiAgICAgICAgYW5pbWF0aW9uQWxwaGEuc2V0S2V5cyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJhbWU6IDAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJhbWU6IDE1LFxuICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyYW1lOiAzMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcblxuICAgICAgICBsZXQgYW5pbWF0aW9uT3ZlcmxheSA9IG5ldyBCQUJZTE9OLkFuaW1hdGlvbihcImFuaW1hdGlvbk92ZXJsYXlcIiwgXCJoZWlnaHRcIiwgMzAsIEJBQllMT04uQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIEJBQllMT04uQW5pbWF0aW9uLkFOSU1BVElPTkxPT1BNT0RFX0NZQ0xFKTtcbiAgICAgICAgYW5pbWF0aW9uT3ZlcmxheS5zZXRLZXlzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcmFtZTogMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcmFtZTogMzAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uT3ZlcmxheSA9IGFuaW1hdGlvbk92ZXJsYXk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQWxwaGEgPSBhbmltYXRpb25BbHBoYTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcbmltcG9ydCB7QWJzdHJhY3RTa2lsbH0gZnJvbSBcIi4vQWJzdHJhY3RTa2lsbFwiO1xuXG5leHBvcnQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBBYnN0cmFjdFNraWxsIHtcbiAgICBzdGF0aWMgVFlQRSA9IDI7XG5cbiAgICBwdWJsaWMgZ2V0VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIEJsb2NrLlRZUEU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyRGVmYXVsdHMoZ2FtZTogR2FtZSkge1xuICAgICAgICB0aGlzLmltYWdlID0gJ2Fzc2V0cy9za2lsbHMvYmxvY2sucG5nJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ0Jsb2NrJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25OYW1lID0gJ2Jsb2NrQSc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3BlZWQgPSAxO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAwO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0FuaW1hdGlvbihza2lsbFRpbWU6IG51bWJlciwgY29vbGRvd25UaW1lOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNob3dSZWxvYWRJbkdVSShjb29sZG93blRpbWUpO1xuICAgICAgICBzZWxmLnBsYXllci5ydW5BbmltYXRpb25Ta2lsbCh0aGlzLmFuaW1hdGlvbk5hbWUsICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuaXNJblVzZSA9IHRydWU7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYucGxheWVyLm1lc2guc2tlbGV0b24uYmVnaW5BbmltYXRpb24oJ2xvb3BCbG9jaycsIHRydWUpO1xuICAgICAgICB9LCB0aGlzLmFuaW1hdGlvbkxvb3AsIHRoaXMuYW5pbWF0aW9uU3BlZWQsIGZhbHNlKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYucGxheWVyLnJ1bkFuaW1hdGlvblNraWxsKCdibG9ja0InLCBudWxsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5pc0luVXNlID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgc2tpbGxUaW1lKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcbmltcG9ydCB7QWJzdHJhY3RTa2lsbH0gZnJvbSBcIi4vQWJzdHJhY3RTa2lsbFwiO1xuaW1wb3J0IHtBYnN0cmFjdENoYXJhY3Rlcn0gZnJvbSBcIi4uLy4uL0NoYXJhY3RlcnMvQWJzdHJhY3RDaGFyYWN0ZXJcIjtcbmltcG9ydCB7RmFzdEF0dGFjayBhcyBGYXN0QXR0YWNrUGFydGljbGV9IGZyb20gXCIuLi8uLi9QYXJ0aWNsZXMvU2tpbGxzL0Zhc3RBdHRhY2tcIjtcblxuZXhwb3J0IGNsYXNzIEZhc3RBdHRhY2sgZXh0ZW5kcyBBYnN0cmFjdFNraWxsIHtcbiAgICAgICAgc3RhdGljIFRZUEUgPSAzO1xuXG4gICAgICAgIHB1YmxpYyBnZXRUeXBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIEZhc3RBdHRhY2suVFlQRTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCByZWdpc3RlckRlZmF1bHRzKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSAnYXNzZXRzL3NraWxscy9mYXN0QXR0YWNrLnBuZyc7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSAnRmFzdCBhdHRhY2snO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25OYW1lID0gQWJzdHJhY3RDaGFyYWN0ZXIuQU5JTUFUSU9OX0FUVEFDS18wMTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3BlZWQgPSAxLjY7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gMTAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNob3dBbmltYXRpb24oc2tpbGxUaW1lOiBudW1iZXIsIGNvb2xkb3duVGltZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IG9ic2VydmVyO1xuICAgICAgICAgICAgdGhpcy5zaG93UmVsb2FkSW5HVUkoY29vbGRvd25UaW1lKTtcblxuICAgICAgICAgICAgaWYoc2VsZi5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbikge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLmludmVudG9yeS53ZWFwb24udHJhaWxNZXNoLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnBsYXllci5ydW5BbmltYXRpb25Ta2lsbCh0aGlzLmFuaW1hdGlvbk5hbWUsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZihzZWxmLnBsYXllci5pbnZlbnRvcnkud2VhcG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLmludmVudG9yeS53ZWFwb24udHJhaWxNZXNoLnZpc2liaWxpdHkgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmlzSW5Vc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmKHNlbGYucGxheWVyLmlzQ29udHJvbGxhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdhdHRhY2snLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRQb2ludDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5pc0luVXNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYucGxheWVyLmludmVudG9yeS53ZWFwb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLmludmVudG9yeS53ZWFwb24udHJhaWxNZXNoLnZpc2liaWxpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbi50cmFpbE1lc2guc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9LCB0aGlzLmFuaW1hdGlvbkxvb3AsIHRoaXMuYW5pbWF0aW9uU3BlZWQpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5hbmltYXRpb24uc3RvcCgpO1xuICAgICAgICAgICAgfSwgc2tpbGxUaW1lKTtcblxuICAgICAgICB9XG5cbiAgICB9XG4iLCJpbXBvcnQge0hlYWwgYXMgSGVhbFBhcnRpY2xlfSBmcm9tIFwiLi4vLi4vUGFydGljbGVzL1NraWxscy9IZWFsXCI7XG5pbXBvcnQge0Fic3RyYWN0Q2hhcmFjdGVyfSBmcm9tIFwiLi4vLi4vQ2hhcmFjdGVycy9BYnN0cmFjdENoYXJhY3RlclwiO1xuaW1wb3J0IHtBYnN0cmFjdFNraWxsfSBmcm9tIFwiLi9BYnN0cmFjdFNraWxsXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi9HYW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBIZWFsIGV4dGVuZHMgQWJzdHJhY3RTa2lsbCB7XG4gICAgc3RhdGljIFRZUEUgPSA1O1xuXG4gICAgcHVibGljIGdldFR5cGUoKSB7XG4gICAgICAgIHJldHVybiBIZWFsLlRZUEU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyRGVmYXVsdHMoZ2FtZTogR2FtZSkge1xuICAgICAgICB0aGlzLmltYWdlID0gJ2Fzc2V0cy9za2lsbHMvaGVhbC5wbmcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnSGVhbCc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTmFtZSA9IEFic3RyYWN0Q2hhcmFjdGVyLkFOSU1BVElPTl9TVEFORF9XRUFQT047XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3BlZWQgPSAyO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAwO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSB0cnVlO1xuICAgICAgICB0aGlzLmVmZmVjdEVtaXR0ZXIgPSBuZXcgSGVhbFBhcnRpY2xlKGdhbWUsIHRoaXMucGxheWVyLm1lc2gpO1xuICAgIH1cblxuICAgIHNob3dBbmltYXRpb24oc2tpbGxUaW1lOiBudW1iZXIsIGNvb2xkb3duVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zaG93UmVsb2FkSW5HVUkoY29vbGRvd25UaW1lKTtcblxuICAgICAgICBsZXQgYWxwaGEgPSAwO1xuICAgICAgICBsZXQgYW5pbWF0ZUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5lZmZlY3RFbWl0dGVyLnBhcnRpY2xlU3lzdGVtLmVtaXR0ZXIucG9zaXRpb24ueCA9IDIgKiBNYXRoLmNvcyhhbHBoYSk7XG4gICAgICAgICAgICBzZWxmLmVmZmVjdEVtaXR0ZXIucGFydGljbGVTeXN0ZW0uZW1pdHRlci5wb3NpdGlvbi55ID0gMTtcbiAgICAgICAgICAgIHNlbGYuZWZmZWN0RW1pdHRlci5wYXJ0aWNsZVN5c3RlbS5lbWl0dGVyLnBvc2l0aW9uLnogPSAyICogTWF0aC5zaW4oYWxwaGEpO1xuXG4gICAgICAgICAgICBhbHBoYSArPSAwLjI0ICogZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5nZXRBbmltYXRpb25SYXRpbygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGYucGxheWVyLnJ1bkFuaW1hdGlvblNraWxsKHNlbGYuYW5pbWF0aW9uTmFtZSwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5lZmZlY3RFbWl0dGVyLnBhcnRpY2xlU3lzdGVtLnN0YXJ0KCk7XG4gICAgICAgICAgICBnYW1lLmdldEJhYnlsb25TY2VuZSgpLnJlZ2lzdGVyQmVmb3JlUmVuZGVyKGFuaW1hdGVGdW5jdGlvbik7XG4gICAgICAgICAgICBzZWxmLmlzSW5Vc2UgPSB0cnVlO1xuICAgICAgICB9LCBudWxsLCBzZWxmLmFuaW1hdGlvbkxvb3AsIHNlbGYuYW5pbWF0aW9uU3BlZWQpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5wbGF5ZXIuYW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgICAgIHNlbGYuZWZmZWN0RW1pdHRlci5wYXJ0aWNsZVN5c3RlbS5zdG9wKCk7XG4gICAgICAgICAgICBnYW1lLmdldEJhYnlsb25TY2VuZSgpLnVucmVnaXN0ZXJCZWZvcmVSZW5kZXIoYW5pbWF0ZUZ1bmN0aW9uKTtcbiAgICAgICAgICAgIHNlbGYuaXNJblVzZSA9IGZhbHNlO1xuICAgICAgICB9LCBza2lsbFRpbWUpO1xuXG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0Fic3RyYWN0U2tpbGx9IGZyb20gXCIuL0Fic3RyYWN0U2tpbGxcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcbmltcG9ydCB7QWJzdHJhY3RDaGFyYWN0ZXJ9IGZyb20gXCIuLi8uLi9DaGFyYWN0ZXJzL0Fic3RyYWN0Q2hhcmFjdGVyXCI7XG5pbXBvcnQge1NoaWVsZEF0dGFjayBhcyBTaGllbGRBdHRhY2tQYXJ0aWNsZX0gZnJvbSBcIi4uLy4uL1BhcnRpY2xlcy9Ta2lsbHMvU2hpZWxkQXR0YWNrXCI7XG5cbmV4cG9ydCBjbGFzcyBTaGllbGRBdHRhY2sgZXh0ZW5kcyBBYnN0cmFjdFNraWxsIHtcbiAgICBzdGF0aWMgVFlQRSA9IDQ7XG5cbiAgICBwdWJsaWMgZ2V0VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIFNoaWVsZEF0dGFjay5UWVBFO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWdpc3RlckRlZmF1bHRzKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9ICdhc3NldHMvc2tpbGxzL3NoaWVsZEF0dGFjay5wbmcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnU2hpZWxkIGF0dGFjayc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTmFtZSA9IEFic3RyYWN0Q2hhcmFjdGVyLkFOSU1BVElPTl9TS0lMTF8wMTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25TcGVlZCA9IDE7XG4gICAgICAgIHRoaXMuZWZmZWN0RW1pdHRlciA9IG5ldyBTaGllbGRBdHRhY2tQYXJ0aWNsZShnYW1lLCB0aGlzLnBsYXllci5tZXNoKTtcbiAgICB9XG5cbiAgICBzaG93QW5pbWF0aW9uKHNraWxsVGltZTogbnVtYmVyLCBjb29sZG93blRpbWU6IG51bWJlcikge1xuICAgICAgICBjb25zdCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2hvd1JlbG9hZEluR1VJKGNvb2xkb3duVGltZSk7XG5cbiAgICAgICAgc2VsZi5wbGF5ZXIucnVuQW5pbWF0aW9uU2tpbGwodGhpcy5hbmltYXRpb25OYW1lLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmlzSW5Vc2UgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5lZmZlY3RFbWl0dGVyLnBhcnRpY2xlU3lzdGVtLnN0YXJ0KCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5wbGF5ZXIuaXNDb250cm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnYXR0YWNrJywge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRQb2ludDogbnVsbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmlzSW5Vc2UgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGYuZWZmZWN0RW1pdHRlci5wYXJ0aWNsZVN5c3RlbS5zdG9wKCk7XG4gICAgICAgIH0sIHRoaXMuYW5pbWF0aW9uTG9vcCwgdGhpcy5hbmltYXRpb25TcGVlZCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnBsYXllci5hbmltYXRpb24uc3RvcCgpO1xuICAgICAgICB9LCBza2lsbFRpbWUpO1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHtIZWFsfSBmcm9tIFwiLi9IZWFsXCI7XG5pbXBvcnQge1N0cm9uZ0F0dGFja30gZnJvbSBcIi4vU3Ryb25nQXR0YWNrXCI7XG5pbXBvcnQge0Jsb2NrfSBmcm9tIFwiLi9CbG9ja1wiO1xuaW1wb3J0IHtGYXN0QXR0YWNrfSBmcm9tIFwiLi9GYXN0QXR0YWNrXCI7XG5pbXBvcnQge1NoaWVsZEF0dGFja30gZnJvbSBcIi4vU2hpZWxkQXR0YWNrXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL0NoYXJhY3RlcnMvUGxheWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTa2lsbHNNYW5hZ2VyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2tpbGwodHlwZTogbnVtYmVyLCBwbGF5ZXI6IFBsYXllcikge1xuICAgICAgICBsZXQgc2tpbGwgPSBudWxsO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBIZWFsLlRZUEU6XG4gICAgICAgICAgICAgICAgc2tpbGwgPSBuZXcgSGVhbChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTdHJvbmdBdHRhY2suVFlQRTpcbiAgICAgICAgICAgICAgICBza2lsbCA9IG5ldyBTdHJvbmdBdHRhY2socGxheWVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQmxvY2suVFlQRTpcbiAgICAgICAgICAgICAgICBza2lsbCA9IG5ldyBCbG9jayhwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGYXN0QXR0YWNrLlRZUEU6XG4gICAgICAgICAgICAgICAgc2tpbGwgPSBuZXcgRmFzdEF0dGFjayhwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTaGllbGRBdHRhY2suVFlQRTpcbiAgICAgICAgICAgICAgICBza2lsbCA9IG5ldyBTaGllbGRBdHRhY2socGxheWVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBza2lsbDtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcbmltcG9ydCB7QWJzdHJhY3RTa2lsbH0gZnJvbSBcIi4vQWJzdHJhY3RTa2lsbFwiO1xuXG5leHBvcnQgY2xhc3MgU3Ryb25nQXR0YWNrIGV4dGVuZHMgQWJzdHJhY3RTa2lsbCB7XG4gICAgc3RhdGljIFRZUEUgPSAxO1xuXG4gICAgcHVibGljIGdldFR5cGUoKSB7XG4gICAgICAgIHJldHVybiBTdHJvbmdBdHRhY2suVFlQRTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJEZWZhdWx0cyhnYW1lOiBHYW1lKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSAnYXNzZXRzL3NraWxscy9zdHJvbmdBdHRhY2sucG5nJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ0Jsb2NrJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25OYW1lID0gJ3N0cm9uZ0F0dGFja0EnO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblNwZWVkID0gMTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gMjAwMDtcbiAgICAgICAgdGhpcy5hbmltYXRpb25Mb29wID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dBbmltYXRpb24oc2tpbGxUaW1lOiBudW1iZXIsIGNvb2xkb3duVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IG9ic2VydmVyO1xuICAgICAgICB0aGlzLnNob3dSZWxvYWRJbkdVSShjb29sZG93blRpbWUpO1xuXG4gICAgICAgIHNlbGYucGxheWVyLnJ1bkFuaW1hdGlvblNraWxsKHRoaXMuYW5pbWF0aW9uTmFtZSwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5pc0luVXNlID0gdHJ1ZTtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5wbGF5ZXIubWVzaC5za2VsZXRvbi5iZWdpbkFuaW1hdGlvbignbG9vcFN0cm9uZ0F0dGFjaycsIHRydWUpO1xuICAgICAgICB9LCB0aGlzLmFuaW1hdGlvbkxvb3AsIHRoaXMuYW5pbWF0aW9uU3BlZWQsIGZhbHNlKTtcblxuICAgICAgICBpZiAoc2VsZi5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbikge1xuICAgICAgICAgICAgc2VsZi5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbi50cmFpbE1lc2guc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWxmLnBsYXllci5pbnZlbnRvcnkud2VhcG9uKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbi50cmFpbE1lc2gudmlzaWJpbGl0eSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnBsYXllci5ydW5BbmltYXRpb25Ta2lsbCgnc3Ryb25nQXR0YWNrQicsIG51bGwsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmlzSW5Vc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucGxheWVyLmludmVudG9yeS53ZWFwb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLmludmVudG9yeS53ZWFwb24udHJhaWxNZXNoLnZpc2liaWxpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbi50cmFpbE1lc2guc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHNlbGYucGxheWVyLmlzQ29udHJvbGxhYmxlKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ2F0dGFjaycsIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UG9pbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc2tpbGxUaW1lKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U2NlbmV9IGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5pbXBvcnQgeyBXYXRlck1hdGVyaWFsIH0gZnJvbSAnYmFieWxvbmpzLW1hdGVyaWFscyc7XG5pbXBvcnQge0Vudmlyb25tZW50Q2F2ZUV4aXR9IGZyb20gXCIuL01vdW50YWlucy9DYXZlRXhpdC9FbnZpcm9ubWVudENhdmVFeGl0XCI7XG5pbXBvcnQge0ZvZ30gZnJvbSBcIi4uL1BhcnRpY2xlcy9Gb2dcIjtcbmltcG9ydCB7R3VhcmR9IGZyb20gXCIuLi9DaGFyYWN0ZXJzL25wYy9HdWFyZFwiO1xuXG5leHBvcnQgY2xhc3MgQmF0dGxlZ3JvdW5kIGV4dGVuZHMgU2NlbmUge1xuXG4gICAgc3RhdGljIFRZUEUgPSA5OTtcblxuICAgIGluaXRTY2VuZShnYW1lOiBHYW1lKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNjZW5lID0gbmV3IEJBQllMT04uU2NlbmUoZ2FtZS5lbmdpbmUpO1xuICAgICAgICBsZXQgZ3JvdW5kLCBndWFyZDtcbiAgICAgICAgc2VsZlxuICAgICAgICAgICAgLnNldERlZmF1bHRzKGdhbWUsIHNjZW5lKVxuICAgICAgICAgICAgLmV4ZWN1dGVXaGVuUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGdyb3VuZCA9IEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlR3JvdW5kKFwiR3JvdW5kXCIsIHt3aWR0aDogMjU2LCBoZWlnaHQ6IDI1Nn0sIHNjZW5lKTtcblxuICAgICAgICAgICAgICAgIG5ldyBHdWFyZChnYW1lLCBuZXcgQkFCWUxPTi5WZWN0b3IzKC0xMiwgMCwgOCksIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMywgMCkpO1xuICAgICAgICAgICAgICAgIGd1YXJkID0gbmV3IEd1YXJkKGdhbWUsIG5ldyBCQUJZTE9OLlZlY3RvcjMoLTE1LCAwLCAxMCksIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgNCwgMCkpO1xuICAgICAgICAgICAgICAgIGd1YXJkLm1lc2gubmFtZSA9ICdxdWVzdExvZyc7XG5cbiAgICAgICAgICAgICAgICBsZXQgcGxhbmUgPSBCQUJZTE9OLk1lc2guQ3JlYXRlUGxhbmUoXCJlbnRyYWNlXCIsIDE2LCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgcGxhbmUucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0yNSwgMiwgMjUpO1xuICAgICAgICAgICAgICAgIHBsYW5lLmxheWVyTWFzayA9IDI7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50Q2F2ZUV4aXQoZ2FtZSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgd2F0ZXJNYXRlcmlhbCA9IG5ldyBXYXRlck1hdGVyaWFsKFwid2F0ZXJNYXRlcmlhbFwiLCBzY2VuZSwgbmV3IEJBQllMT04uVmVjdG9yMig1MTIsIDUxMikpO1xuICAgICAgICAgICAgICAgIHdhdGVyTWF0ZXJpYWwuYnVtcFRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiLy93d3cuYmFieWxvbmpzLmNvbS9hc3NldHMvd2F0ZXJidW1wLnBuZ1wiLCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgd2F0ZXJNYXRlcmlhbC53aW5kRm9yY2UgPSAtNTtcbiAgICAgICAgICAgICAgICB3YXRlck1hdGVyaWFsLndhdmVIZWlnaHQgPSAwLjA1O1xuICAgICAgICAgICAgICAgIHdhdGVyTWF0ZXJpYWwuYnVtcEhlaWdodCA9IDAuMDU7XG4gICAgICAgICAgICAgICAgd2F0ZXJNYXRlcmlhbC53YXZlTGVuZ3RoID0gMC4xO1xuICAgICAgICAgICAgICAgIHdhdGVyTWF0ZXJpYWwud2F2ZVNwZWVkID0gMS4wO1xuICAgICAgICAgICAgICAgIHdhdGVyTWF0ZXJpYWwuY29sb3JCbGVuZEZhY3RvciA9IDAuMTtcbiAgICAgICAgICAgICAgICB3YXRlck1hdGVyaWFsLndhdGVyQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMC4xLCAxLCAxKTtcbiAgICAgICAgICAgICAgICBsZXQgd2F0ZXJNZXNoID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUdyb3VuZChcIndhdGVyTWVzaFwiLCAyNTYsIDI1NiwgMzIsIHNjZW5lLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgd2F0ZXJNZXNoLnBvc2l0aW9uLnkgPSAwLjU7XG4gICAgICAgICAgICAgICAgd2F0ZXJNZXNoLm1hdGVyaWFsID0gd2F0ZXJNYXRlcmlhbDtcbiAgICAgICAgICAgICAgICB3YXRlck1lc2gubGF5ZXJNYXNrID0gMjtcbiAgICAgICAgICAgICAgICB3YXRlck1lc2guaXNQaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdhdGVyTWF0ZXJpYWwuYWRkVG9SZW5kZXJMaXN0KGdyb3VuZCk7XG4gICAgICAgICAgICAgICAgd2F0ZXJNYXRlcmlhbC5hZGRUb1JlbmRlckxpc3Qoc2VsZi5nYW1lLnBsYXllci5tZXNoKTtcbiAgICAgICAgICAgICAgICB3YXRlck1hdGVyaWFsLmFkZFRvUmVuZGVyTGlzdChndWFyZC5tZXNoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NjZW5lfSBmcm9tIFwiLi9TY2VuZVwiO1xuaW1wb3J0IHtFbnZpcm9ubWVudEZvcmVzdEhvdXNlfSBmcm9tIFwiLi4vRW52aXJvbm1lbnQvZW52aXJvbm1lbnRGb3Jlc3RIb3VzZVwiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgRm9yZXN0SG91c2UgZXh0ZW5kcyBTY2VuZSB7XG5cbiAgICBzdGF0aWMgVFlQRSA9IDI7XG5cbiAgICBpbml0U2NlbmUoZ2FtZTogR2FtZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIEJBQllMT04uU2NlbmVMb2FkZXIuTG9hZChcImFzc2V0cy9zY2VuZXMvRm9yZXN0X2hvdXNlL1wiLCBcIkZvcmVzdF9ob3VzZS5iYWJ5bG9uXCIsIGdhbWUuZW5naW5lLCBmdW5jdGlvbiAoc2NlbmUpIHtcbiAgICAgICAgICAgIHNlbGZcbiAgICAgICAgICAgICAgICAuc2V0RGVmYXVsdHMoZ2FtZSwgc2NlbmUpXG4gICAgICAgICAgICAgICAgLmV4ZWN1dGVXaGVuUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50Rm9yZXN0SG91c2UoZ2FtZSk7XG4gICAgICAgICAgICAgICAgfSwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTY2VuZX0gZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7RW52aXJvbm1lbnRGb3Jlc3RIb3VzZVN0YXJ0fSBmcm9tIFwiLi4vRW52aXJvbm1lbnQvZW52aXJvbm1lbnRGb3Jlc3RIb3VzZVN0YXJ0XCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBGb3Jlc3RIb3VzZVN0YXJ0IGV4dGVuZHMgU2NlbmUge1xuXG4gICAgc3RhdGljIFRZUEUgPSAxO1xuXG4gICAgaW5pdFNjZW5lKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBCQUJZTE9OLlNjZW5lTG9hZGVyLkxvYWQoXCJhc3NldHMvc2NlbmVzL2ZvcmVzdFN0YXJ0SG91c2UvXCIsIFwiZm9yZXN0SG91c2VTdGFydC5iYWJ5bG9uXCIsIGdhbWUuZW5naW5lLCBmdW5jdGlvbiAoc2NlbmUpIHtcbiAgICAgICAgICAgIHNlbGZcbiAgICAgICAgICAgICAgICAuc2V0RGVmYXVsdHMoZ2FtZSwgc2NlbmUpXG4gICAgICAgICAgICAgICAgLmV4ZWN1dGVXaGVuUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50Rm9yZXN0SG91c2VTdGFydChnYW1lKTtcbiAgICAgICAgICAgICAgICB9LCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0Vudmlyb25tZW50Rm9yZXN0SG91c2VUb21ifSBmcm9tIFwiLi4vRW52aXJvbm1lbnQvZW52aXJvbm1lbnRGb3Jlc3RIb3VzZVRvbWJcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7U2NlbmV9IGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBGb3Jlc3RIb3VzZVRvbWIgZXh0ZW5kcyBTY2VuZSB7XG5cbiAgICBzdGF0aWMgVFlQRSA9IDM7XG5cbiAgICBpbml0U2NlbmUoZ2FtZTogR2FtZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgQkFCWUxPTi5TY2VuZUxvYWRlci5Mb2FkKFwiYXNzZXRzL3NjZW5lcy9Gb3Jlc3RfSG91c2VfVG9tYi9cIiwgXCJGb3Jlc3RfSG91c2VfVG9tYi5iYWJ5bG9uXCIsIGdhbWUuZW5naW5lLCBmdW5jdGlvbiAoc2NlbmUpIHtcbiAgICAgICAgICAgIHNlbGZcbiAgICAgICAgICAgICAgICAuc2V0RGVmYXVsdHMoZ2FtZSwgc2NlbmUpXG4gICAgICAgICAgICAgICAgLmV4ZWN1dGVXaGVuUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50Rm9yZXN0SG91c2VUb21iKGdhbWUsIHNjZW5lKTtcblxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgaXRlbSA9IG5ldyBJdGVtcy5JdGVtKGdhbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdMb25nU3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW1hZ2U6ICdzd29yZCcsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3RhdGlzdGljczoge30sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBtZXNoTmFtZTogJ3N3b3JkTG9uZycsXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBJdGVtcy5Ecm9wcGVkSXRlbS5zaG93SXRlbShnYW1lLCBpdGVtLCB7eDogMiwgejotM30sIDApO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgaXRlbSA9IG5ldyBJdGVtcy5JdGVtKGdhbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdzaGllbGRXb29kZW5TbWFsbCcsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpbWFnZTogJ3NoaWVsZFdvb2RlblNtYWxsJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzdGF0aXN0aWNzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1lc2hOYW1lOiAnc2hpZWxkV29vZGVuU21hbGwnLFxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSXRlbXMuRHJvcHBlZEl0ZW0uc2hvd0l0ZW0oZ2FtZSwgaXRlbSwge3g6IDQsIHo6LTd9LCAwKTtcbiAgICAgICAgICAgICAgICB9LCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0ZvcmVzdEhvdXNlfSBmcm9tIFwiLi9Gb3Jlc3RIb3VzZVwiO1xuaW1wb3J0IHtGb3Jlc3RIb3VzZVN0YXJ0fSBmcm9tIFwiLi9Gb3Jlc3RIb3VzZVN0YXJ0XCI7XG5pbXBvcnQge0ZvcmVzdEhvdXNlVG9tYn0gZnJvbSBcIi4vRm9yZXN0SG91c2VUb21iXCI7XG5pbXBvcnQge1NlbGVjdENoYXJhY3Rlcn0gZnJvbSBcIi4vU2VsZWN0Q2hhcmFjdGVyXCI7XG5pbXBvcnQge0JhdHRsZWdyb3VuZH0gZnJvbSBcIi4vQmF0dGxlZ3JvdW5kXCI7XG5pbXBvcnQge01vdW50YWluc1Bhc3N9IGZyb20gXCIuL01vdW50YWluc1Bhc3NcIjtcbmltcG9ydCB7U2NlbmV9IGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQge0NhdmVFeGl0fSBmcm9tIFwiLi9Nb3VudGFpbnMvQ2F2ZUV4aXQvQ2F2ZUV4aXRcIjtcbmltcG9ydCB7QXJlbmF9IGZyb20gXCIuL01vdW50YWlucy9Ub3duL0FyZW5hXCI7XG5cbmV4cG9ydCBjbGFzcyBNYW5hZ2VyIHtcblxuICAgICAgICBwdWJsaWMgc3RhdGljIGZhY3Rvcnkoc2NlbmVUeXBlOiBudW1iZXIpOiBTY2VuZSB7XG4gICAgICAgICAgICBsZXQgc2NlbmUgPSBudWxsO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHNjZW5lVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgRm9yZXN0SG91c2UuVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUgPSBuZXcgRm9yZXN0SG91c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGb3Jlc3RIb3VzZVN0YXJ0LlRZUEU6XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IEZvcmVzdEhvdXNlU3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGb3Jlc3RIb3VzZVRvbWIuVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUgPSBuZXcgRm9yZXN0SG91c2VUb21iKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU2VsZWN0Q2hhcmFjdGVyLlRZUEU6XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IFNlbGVjdENoYXJhY3RlcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEJhdHRsZWdyb3VuZC5UWVBFOlxuICAgICAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBCYXR0bGVncm91bmQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBNb3VudGFpbnNQYXNzLlRZUEU6XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IE1vdW50YWluc1Bhc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDYXZlRXhpdC5UWVBFOlxuICAgICAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBDYXZlRXhpdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEFyZW5hLlRZUEU6XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IEFyZW5hKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXNjZW5lKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignV3Jvbmcgc2NlbmUgdHlwZS4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgICAgICB9XG5cblxuICAgIH1cbiIsImltcG9ydCB7U2NlbmV9IGZyb20gXCIuLi8uLi9TY2VuZVwiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vLi4vLi4vR2FtZVwiO1xuaW1wb3J0IHtFbnZpcm9ubWVudENhdmVFeGl0fSBmcm9tIFwiLi9FbnZpcm9ubWVudENhdmVFeGl0XCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBDYXZlRXhpdCBleHRlbmRzIFNjZW5lIHtcblxuICAgIHN0YXRpYyBUWVBFID0gNjtcblxuICAgIGluaXRTY2VuZShnYW1lOiBHYW1lKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgQkFCWUxPTi5TY2VuZUxvYWRlci5Mb2FkKFwiYXNzZXRzL3NjZW5lcy9jYXZlRXhpdC9cIiwgXCJjYXZlRXhpdC5iYWJ5bG9uXCIsIGdhbWUuZW5naW5lLCBmdW5jdGlvbiAoc2NlbmUpIHtcbiAgICAgICAgICAgIHNlbGZcbiAgICAgICAgICAgICAgICAuc2V0RGVmYXVsdHMoZ2FtZSwgc2NlbmUpXG4gICAgICAgICAgICAgICAgLmV4ZWN1dGVXaGVuUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50Q2F2ZUV4aXQoZ2FtZSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldyBOUEMuR3VhcmQoZ2FtZSwgbmV3IEJBQllMT04uVmVjdG9yMygtMTE3LCAwLCAxMjgpLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC00LjMsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmV3IE5QQy5UcmFkZXIoZ2FtZSwgbmV3IEJBQllMT04uVmVjdG9yMygtMTIyLCAwLCAtMTYpLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAuNywgMCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXcgTlBDLkJpZ1dhcnJpb3IoZ2FtZSwgbmV3IEJBQllMT04uVmVjdG9yMygtMTAsIDAsIC01MyksIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMS41NCwgMCkpO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtNb3VudGFpbnNFbnZpcm9ubWVudH0gZnJvbSBcIi4uL01vdW50YWluc0Vudmlyb25tZW50XCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi8uLi9HYW1lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudENhdmVFeGl0IGV4dGVuZHMgTW91bnRhaW5zRW52aXJvbm1lbnQge1xuXG4gICAgY29sbGlkZXJzOiBBcnJheTxCQUJZTE9OLkFic3RyYWN0TWVzaD47XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKTtcbiAgICAgICAgdGhpcy5jb2xsaWRlcnMgPSBbXTtcbiAgICAgICAgc2NlbmUuZ3Jhdml0eSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgLTkuODEsIDApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjZW5lLm1lc2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNjZW5lTWVzaCA9IDxCQUJZTE9OLk1lc2g+IHNjZW5lLm1lc2hlc1tpXTtcbiAgICAgICAgICAgIGxldCBtZXNoTmFtZSA9IHNjZW5lLm1lc2hlc1tpXVsnbmFtZSddO1xuICAgICAgICAgICAgaWYgKG1lc2hOYW1lLnNlYXJjaChcIkdyb3VuZFwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLmFjdGlvbk1hbmFnZXIgPSBuZXcgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyKHNjZW5lKTtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2gucmVjZWl2ZVNoYWRvd3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5hbHdheXNTZWxlY3RBc0FjdGl2ZU1lc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5tYXRlcmlhbCA9IHRoaXMuY3JlYXRlU3RlbmNpbE1hdGVyaWFsKCcvYXNzZXRzL3NjZW5lcy9jYXZlRXhpdC9zdGVuY2lsMS5wbmcnLCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmQgPSBzY2VuZU1lc2g7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzaE5hbWUuc2VhcmNoKFwiQm94X0N1YmVcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZXJzLnB1c2goc2NlbmVNZXNoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLmlzUGlja2FibGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChtZXNoTmFtZS5zZWFyY2goXCJSb2NrXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFkb3dPYmplY3RzLnB1c2goc2NlbmVNZXNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlRGVmYXVsdExpZ2h0KHNjZW5lKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbGxpZGVycyhzY2VuZSk7XG4gICAgICAgIHRoaXMuZnJlZXplQWxsTWVzaGVzKHNjZW5lKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTdGVjbmlsKHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RFbnZpcm9ubWVudH0gZnJvbSBcIi4uLy4uL0Vudmlyb25tZW50L0Fic3RyYWN0RW52aXJvbm1lbnRcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcbmltcG9ydCB7VGVycmFpbk1hdGVyaWFsfSAgZnJvbSAnYmFieWxvbmpzLW1hdGVyaWFscyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNb3VudGFpbnNFbnZpcm9ubWVudCBleHRlbmRzIEFic3RyYWN0RW52aXJvbm1lbnQge1xuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN0ZW5jaWxNYXRlcmlhbChzdGVuY2lsVXJsOiBzdHJpbmcsIHNjZW5lOiBCQUJZTE9OLlNjZW5lKTogVGVycmFpbk1hdGVyaWFsIHtcbiAgICAgICAgbGV0IHRlcnJhaW5NYXRlcmlhbCA9IG5ldyBUZXJyYWluTWF0ZXJpYWwoXCJ0ZXJyYWluTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgICAgICB0ZXJyYWluTWF0ZXJpYWwubWl4VGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoc3RlbmNpbFVybCwgc2NlbmUpO1xuICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUxID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9FbnZpcm9ubWVudC9TdGVuY2lsL01vdW50YWlucy9kaXJ0LmpwZ1wiLCBzY2VuZSk7XG4gICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTIgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL0Vudmlyb25tZW50L1N0ZW5jaWwvTW91bnRhaW5zL2dyYXNzLmpwZ1wiLCBzY2VuZSk7XG4gICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTMgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL0Vudmlyb25tZW50L1N0ZW5jaWwvTW91bnRhaW5zL3JvY2suanBnXCIsIHNjZW5lKTtcbiAgICAgICAgdGVycmFpbk1hdGVyaWFsLmJ1bXBUZXh0dXJlMSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvRW52aXJvbm1lbnQvU3RlbmNpbC9Nb3VudGFpbnMvZGlydF9ub3JtYWwuanBnXCIsIHNjZW5lKTtcbiAgICAgICAgdGVycmFpbk1hdGVyaWFsLmJ1bXBUZXh0dXJlMiA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvRW52aXJvbm1lbnQvU3RlbmNpbC9Nb3VudGFpbnMvZ3Jhc3Nfbm9ybWFsLmpwZ1wiLCBzY2VuZSk7XG4gICAgICAgIHRlcnJhaW5NYXRlcmlhbC5idW1wVGV4dHVyZTMgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL0Vudmlyb25tZW50L1N0ZW5jaWwvTW91bnRhaW5zL3JvY2tfbm9ybWFsLmpwZ1wiLCBzY2VuZSk7XG4gICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTEudVNjYWxlID0gdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMS52U2NhbGUgPSAyMDtcbiAgICAgICAgdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMi51U2NhbGUgPSB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUyLnZTY2FsZSA9IDIwO1xuICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUzLnVTY2FsZSA9IHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTMudlNjYWxlID0gMjA7XG5cblxuICAgICAgICByZXR1cm4gdGVycmFpbk1hdGVyaWFsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7U2NlbmV9IGZyb20gXCIuLi8uLi9TY2VuZVwiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vLi4vLi4vR2FtZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgQXJlbmEgZXh0ZW5kcyBTY2VuZSB7XG5cbiAgICBzdGF0aWMgVFlQRSA9IDk4O1xuXG4gICAgaW5pdFNjZW5lKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgc2NlbmUgPSBuZXcgQkFCWUxPTi5TY2VuZShnYW1lLmVuZ2luZSk7XG4gICAgICAgIHNlbGZcbiAgICAgICAgICAgIC5zZXREZWZhdWx0cyhnYW1lLCBzY2VuZSlcbiAgICAgICAgICAgIC5leGVjdXRlV2hlblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGlnaHQgPSBuZXcgQkFCWUxPTi5EaXJlY3Rpb25hbExpZ2h0KFwiRGlyZWN0aW9uYWxMaWdodFwiLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC0xLCAwKSwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIGxpZ2h0LmludGVuc2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgbGlnaHQucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUwLCAwKTtcbiAgICAgICAgICAgICAgICBsaWdodC5kaXJlY3Rpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAuNDUsIC0yLjUsIDApO1xuXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VuZCA9IEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlR3JvdW5kKFwiR3JvdW5kXCIsIHt3aWR0aDogNDgsIGhlaWdodDogNDh9LCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgZ3JvdW5kLmFjdGlvbk1hbmFnZXIgPSBuZXcgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyKHNjZW5lKTtcbiAgICAgICAgICAgICAgICBsZXQgdGVycmFpbk1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcIkdyb3VuZE1hdGVyaWFsXCIsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuc3BlY3VsYXJQb3dlciA9IDEwO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvc2NlbmVzL0ZvcmVzdF9ob3VzZS9kaXJ0LmpwZ1wiLCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlLnNjYWxlKDIwKTtcbiAgICAgICAgICAgICAgICBncm91bmQucmVjZWl2ZVNoYWRvd3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGdyb3VuZC5tYXRlcmlhbCA9IHRlcnJhaW5NYXRlcmlhbDtcblxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2FtZS5wbGF5ZXIucGxheWVyTGlnaHQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U2NlbmV9IGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge0Vudmlyb25tZW50TW91bnRhaW5zUGFzc30gZnJvbSBcIi4uL0Vudmlyb25tZW50L2Vudmlyb25tZW50TW91bnRhaW5zUGFzc1wiO1xuaW1wb3J0IHtHdWFyZH0gZnJvbSBcIi4uL0NoYXJhY3RlcnMvbnBjL0d1YXJkXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBNb3VudGFpbnNQYXNzIGV4dGVuZHMgU2NlbmUge1xuXG4gICAgc3RhdGljIFRZUEUgPSA1O1xuXG4gICAgaW5pdFNjZW5lKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBCQUJZTE9OLlNjZW5lTG9hZGVyLkxvYWQoXCJhc3NldHMvc2NlbmVzL01vdW50YWluc1Bhc3MvXCIsIFwiTW91bnRhaW5zUGFzcy5iYWJ5bG9uXCIsIGdhbWUuZW5naW5lLCBmdW5jdGlvbiAoc2NlbmUpIHtcbiAgICAgICAgICAgIHNlbGZcbiAgICAgICAgICAgICAgICAuc2V0RGVmYXVsdHMoZ2FtZSwgc2NlbmUpXG4gICAgICAgICAgICAgICAgLmV4ZWN1dGVXaGVuUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50TW91bnRhaW5zUGFzcyhnYW1lKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IEd1YXJkKGdhbWUsIG5ldyBCQUJZTE9OLlZlY3RvcjMoLTExNywgMCwgMTI4KSwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAtNC4zLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldyBOUEMuVHJhZGVyKGdhbWUsIG5ldyBCQUJZTE9OLlZlY3RvcjMoLTEyMiwgMCwgLTE2KSwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLjcsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmV3IE5QQy5CaWdXYXJyaW9yKGdhbWUsIG5ldyBCQUJZTE9OLlZlY3RvcjMoLTEwLCAwLCAtNTMpLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEuNTQsIDApKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7Q2hlc3QgYXMgQ2hlc3RzT2JqZWN0c30gZnJvbSBcIi4uL0luaXRpYWxpemVycy9DaGVzdFwiO1xuaW1wb3J0IHtSYW5kb21TcGVjaWFsSXRlbX0gZnJvbSBcIi4uL0luaXRpYWxpemVycy9SYW5kb21TcGVjaWFsSXRlbVwiO1xuaW1wb3J0IHtTbGF2c0xvYWRlcn0gZnJvbSBcIi4uL0xvYWRlci9TbGF2c0xvYWRlclwiO1xuaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuLi9FdmVudHMvRXZlbnRzXCI7XG5pbXBvcnQge0dhbWVPcHRpb25zfSBmcm9tIFwiLi4vT3B0aW9ucy9PcHRpb25zXCI7XG5pbXBvcnQge0Fic3RyYWN0RW52aXJvbm1lbnR9IGZyb20gXCIuLi9FbnZpcm9ubWVudC9BYnN0cmFjdEVudmlyb25tZW50XCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL0NoYXJhY3RlcnMvUGxheWVyXCI7XG5pbXBvcnQge01vbnN0ZXJ9IGZyb20gXCIuLi9DaGFyYWN0ZXJzL01vbnN0ZXJcIjtcbmltcG9ydCB7UXVlc3RzfSBmcm9tIFwiLi4vSW5pdGlhbGl6ZXJzL1F1ZXN0c1wiO1xuaW1wb3J0IHtBYnN0cmFjdE5wY30gZnJvbSBcIi4uL0NoYXJhY3RlcnMvbnBjL0Fic3RyYWN0TnBjXCI7XG5pbXBvcnQge0Fzc2V0c30gZnJvbSBcIi4uL0Fzc2V0c0ZhY3Rvcmllcy9Bc3NldHNcIjtcbmltcG9ydCB7R2FtZUNhbWVyYX0gZnJvbSBcIi4uL0NhbWVyYXMvR2FtZUNhbWVyYVwiO1xuaW1wb3J0IHtQYXRoRmluZGVyfSBmcm9tIFwiLi4vUGF0aEZpbmRlci9QYXRoRmluZGVyXCI7XG5pbXBvcnQge0Ryb3BwZWRJdGVtfSBmcm9tIFwiLi4vSW5pdGlhbGl6ZXJzL0Ryb3BwZWRJdGVtXCI7XG5pbXBvcnQge1NlbGVjdENoYXJhY3RlckNhbWVyYX0gZnJvbSBcIi4uL0NhbWVyYXMvU2VsZWN0Q2hhcmFjdGVyQ2FtZXJhXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2VuZSB7XG4gICAgc3RhdGljIFRZUEUgPSAwO1xuXG4gICAgcHJvdGVjdGVkIGdhbWU6IEdhbWU7XG4gICAgcHVibGljIGJhYnlsb25TY2VuZTogQkFCWUxPTi5TY2VuZTtcbiAgICBwcm90ZWN0ZWQgYXNzZXRNYW5hZ2VyOiBCQUJZTE9OLkFzc2V0c01hbmFnZXI7XG4gICAgcHVibGljIG9wdGlvbnM6IEdhbWVPcHRpb25zO1xuICAgIC8vIHB1YmxpYyBlbnZpcm9ubWVudDogQWJzdHJhY3RFbnZpcm9ubWVudDtcbiAgICBwdWJsaWMgZW52aXJvbm1lbnQ6IGFueTtcbiAgICBwdWJsaWMgZW5lbWllc0FjdGl2ZVRhcmdldHM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBwdWJsaWMgYmF0dGxlTXVzaWM6IEJBQllMT04uU291bmQ7XG4gICAgLyoqXG4gICAgICogRHluYW1pYyBDb2xsZWN0aW9uc1xuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdGVQbGF5ZXJzOiBBcnJheTxQbGF5ZXI+ID0gW107XG4gICAgcHVibGljIG5wY3M6IEFycmF5PEFic3RyYWN0TnBjPiA9IFtdO1xuICAgIHB1YmxpYyBlbmVtaWVzOiBBcnJheTxNb25zdGVyPiA9IFtdO1xuICAgIHB1YmxpYyBxdWVzdHM6IEFycmF5PFF1ZXN0cz4gPSBbXTtcbiAgICBwdWJsaWMgY2hlc3RzOiBBcnJheTxDaGVzdHNPYmplY3RzPiA9IFtdO1xuICAgIHB1YmxpYyByYW5kb21TcGVjaWFsSXRlbXM6IEFycmF5PFJhbmRvbVNwZWNpYWxJdGVtPiA9IFtdO1xuICAgIHB1YmxpYyBkcm9wcGVkSXRlbXM6IEFycmF5PERyb3BwZWRJdGVtPiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQXNzZXRzXG4gICAgICovXG4gICAgcHVibGljIGFzc2V0czogQXNzZXRzO1xuXG4gICAgLyoqXG4gICAgICogIEludGVydmFsIHdpdGggY2hlY2tpbmcgZW5lbWllcyBpbiBmcnVtc3RydW1cbiAgICAgKi9cbiAgICBwdWJsaWMgZnJ1bXN0cnVtRW5lbWllc0ludGVydmFsO1xuXG4gICAgLyoqXG4gICAgICogIFBsYXllciBnbyB0byBhY3Rpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ29Ub0FjdGlvbjogQkFCWUxPTi5PYnNlcnZlcjxhbnk+O1xuXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRzKGdhbWU6IEdhbWUsIHNjZW5lOiBCQUJZTE9OLlNjZW5lLCBzZWxlY3RDaGFyYWN0ZXJDYW1lcmE6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBCQUJZTE9OLlNjZW5lTG9hZGVyLkNsZWFuQm9uZU1hdHJpeFdlaWdodHMgPSB0cnVlO1xuICAgICAgICBTbGF2c0xvYWRlci5zaG93TG9hZGVyV2l0aFRleHQoJ0xvYWRpbmcgZ2FtZS4uLicpO1xuICAgICAgICBzY2VuZS5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihzY2VuZSk7XG4gICAgICAgIHRoaXMuYXNzZXRNYW5hZ2VyID0gbmV3IEJBQllMT04uQXNzZXRzTWFuYWdlcihzY2VuZSk7XG4gICAgICAgIHRoaXMuYXNzZXRzID0gbmV3IEFzc2V0cyhzY2VuZSk7XG4gICAgICAgIHRoaXMuYmFieWxvblNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgc2NlbmUuY2xlYXJDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLCAxKTtcbiAgICAgICAgc2NlbmUuY29sbGlzaW9uc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICBzY2VuZS5mb2dFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgc2NlbmUubGVuc0ZsYXJlc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgc2NlbmUucHJvYmVzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBzY2VuZS5wb3N0UHJvY2Vzc2VzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHNjZW5lLnNwcml0ZXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgc2NlbmUuYXVkaW9FbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgZ2FtZS5zZXRTY2VuZSh0aGlzKTtcblxuICAgICAgICBpZihzZWxlY3RDaGFyYWN0ZXJDYW1lcmEpIHtcbiAgICAgICAgICAgIFNlbGVjdENoYXJhY3RlckNhbWVyYS5pbml0Q2FtZXJhSW5TY2VuZShzY2VuZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHYW1lQ2FtZXJhLmluaXRDYW1lcmFJblNjZW5lKHNjZW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmF0dGxlTXVzaWMgPSBuZXcgQkFCWUxPTi5Tb3VuZChcIkJhdHRsZU11c2ljXCIsIFwiYXNzZXRzL3NvdW5kcy9tdXNpYy9iYXR0bGUubXAzXCIsIHNjZW5lLCBudWxsLCB7XG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgdm9sdW1lOiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5QmF0dGxlTXVzaWMoKSB7XG4gICAgICAgIHRoaXMuYmF0dGxlTXVzaWMucGxheSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wQmF0dGxlTXVzaWMoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5iYXR0bGVNdXNpYy5zZXRWb2x1bWUoMCwgMik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5iYXR0bGVNdXNpYy5zdG9wKCk7XG4gICAgICAgIH0sIDIwMDApXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBsYXlFbmVtaWVzQW5pbWF0aW9uc0luRnJ1bVN0cnVtKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuYmFieWxvblNjZW5lO1xuICAgICAgICBjb25zdCBnYW1lQ2FtZXJhID0gc2NlbmUuZ2V0Q2FtZXJhQnlOYW1lKCdnYW1lQ2FtZXJhJyk7XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmZydW1zdHJ1bUVuZW1pZXNJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuZnJ1bXN0cnVtRW5lbWllc0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5lbmVtaWVzLmZvckVhY2goZW5lbXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5pc0RlYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgaXNBY3RpdmVNZXNoID0gZ2FtZUNhbWVyYS5pc0luRnJ1c3R1bShlbmVteS5tZXNoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWVuZW15LmFuaW1hdGlvbiAmJiBpc0FjdGl2ZU1lc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkucnVuQW5pbWF0aW9uU3RhbmQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVuZW15LmFuaW1hdGlvbiAmJiAhaXNBY3RpdmVNZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15LmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15LmFuaW1hdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBleGVjdXRlV2hlblJlYWR5KG9uUmVhZHk6IEZ1bmN0aW9uLCBvblBsYXllckNvbm5lY3RlZDogRnVuY3Rpb24sIHJlZ2lzdGVyTGlzdGVuZXI6IEJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuYmFieWxvblNjZW5lO1xuICAgICAgICBsZXQgYXNzZXRzTWFuYWdlciA9IHRoaXMuYXNzZXRNYW5hZ2VyO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuXG4gICAgICAgIHNjZW5lLmV4ZWN1dGVXaGVuUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXRzTWFuYWdlci5vbkZpbmlzaCA9IGZ1bmN0aW9uICh0YXNrcykge1xuICAgICAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdjaGFuZ2VTY2VuZVByZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9uUmVhZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgb25SZWFkeSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmUubWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2VuZU1lc2ggPSBzY2VuZS5tZXNoZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5sYXllck1hc2sgPSAyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLnJ1blJlbmRlckxvb3AoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNlbGYucGxheUVuZW1pZXNBbmltYXRpb25zSW5GcnVtU3RydW0oKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhc3NldHNNYW5hZ2VyLm9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocmVtYWluaW5nQ291bnQsIHRvdGFsQ291bnQsIGxhc3RGaW5pc2hlZFRhc2spIHtcbiAgICAgICAgICAgICAgICBTbGF2c0xvYWRlci5zaG93TG9hZGVyV2l0aFRleHQoJ0xvYWRpbmcgYXNzZXRzLi4uICcgKyByZW1haW5pbmdDb3VudCArICcgb2YgJyArIHRvdGFsQ291bnQgKyAnLicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFzc2V0c01hbmFnZXIubG9hZCgpO1xuXG4gICAgICAgICAgICBpZiAocmVnaXN0ZXJMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob25QbGF5ZXJDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUGxheWVyQ29ubmVjdGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMgPSBuZXcgR2FtZU9wdGlvbnMoZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5hZGRNZXNoVG9EeW5hbWljU2hhZG93R2VuZXJhdG9yKGdhbWUucGxheWVyLm1lc2gpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lLmNvbnRyb2xsZXIucmVnaXN0ZXJDb250cm9scyhzY2VuZSk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdjaGFuZ2VTY2VuZVBvc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ3JlZnJlc2hHYXRld2F5cycpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgncmVmcmVzaFF1ZXN0cycpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgncmVmcmVzaENoZXN0cycpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgncmVmcmVzaFJhbmRvbVNwZWNpYWxJdGVtcycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lLlNIT1dfREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmRlYnVnTGF5ZXIuc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWRNb2RlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRXZlbnRzLlBMQVlFUl9DT05ORUNURUQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRzLlBMQVlFUl9DT05ORUNURUQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGluaXRTY2VuZShnYW1lOiBHYW1lKTtcbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7RW52aXJvbm1lbnRTZWxlY3RDaGFyYWN0ZXJ9IGZyb20gXCIuLi9FbnZpcm9ubWVudC9lbnZpcm9ubWVudFNlbGVjdENoYXJhY3RlclwiO1xuaW1wb3J0IHtTY2VuZX0gZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCB7V2Fycmlvcn0gZnJvbSBcIi4uL0NoYXJhY3RlcnMvc2VsZWN0Q2hhcmFjdGVyL1dhcnJpb3JcIjtcbmltcG9ydCB7U2VsZWN0Q2hhcmFjdGVyIGFzIFNlbGVjdENoYXJhY3RlclBhbmVsfSBmcm9tIFwiLi4vR1VJL1NlbGVjdENoYXJhY3RlclwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0Q2hhcmFjdGVyIGV4dGVuZHMgU2NlbmUge1xuXG4gICAgc3RhdGljIFRZUEUgPSA0O1xuXG4gICAgaW5pdFNjZW5lKGdhbWU6R2FtZSkge1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHBsYXllcnNUb1NlbGVjdCA9IFtdO1xuICAgICAgICBsZXQgZ3VpID0gbnVsbDtcbiAgICAgICAgQkFCWUxPTi5TY2VuZUxvYWRlci5Mb2FkKFwiYXNzZXRzL3NjZW5lcy9TZWxlY3RfTWFwL1wiLCBcIlNlbGVjdF9NYXAuYmFieWxvblwiLCBnYW1lLmVuZ2luZSwgZnVuY3Rpb24gKHNjZW5lKSB7XG4gICAgICAgICAgICBzZWxmXG4gICAgICAgICAgICAgICAgLnNldERlZmF1bHRzKGdhbWUsIHNjZW5lLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5leGVjdXRlV2hlblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVudmlyb25tZW50U2VsZWN0Q2hhcmFjdGVyKGdhbWUsIHNjZW5lKTtcblxuICAgICAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQub24oJ3Nob3dQbGF5ZXJzVG9TZWxlY3QnLCBmdW5jdGlvbihwbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzVG9TZWxlY3QuZm9yRWFjaCgocGxheWVyU2VsZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyU2VsZWN0Lm1lc2guZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzVG9TZWxlY3QgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyID0gcGxheWVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyc1RvU2VsZWN0LnB1c2gobmV3IFdhcnJpb3IoZ2FtZSwgaSwgcGxheWVyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihndWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWkudGV4dHVyZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXJzVG9TZWxlY3QubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1aSA9IG5ldyBTZWxlY3RDaGFyYWN0ZXJQYW5lbChnYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9LCBudWxsLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4uLy4uL0NoYXJhY3RlcnMvTW9uc3RlclwiO1xuXG5leHBvcnQgY2xhc3MgU2hvd0VuZW1pZXNTb2NrZXRFdmVudCBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtTb2NrZXRJT0NsaWVudH1cbiAgICAgKi9cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbignc2hvd0VuZW1pZXMnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmVuZW1pZXMgPSBbXTtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZW5lbXlEYXRhLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXlEYXRhLnN0YXRpc3RpY3MuaHAgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld01vbnN0ZXIgPSBuZXcgTW9uc3RlcihnYW1lLCBrZXksIGVuZW15RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5lbmVtaWVzW25ld01vbnN0ZXIuaWRdID0gbmV3TW9uc3RlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7QWJzdHJhY3RDaGFyYWN0ZXJ9IGZyb20gXCIuLi8uLi9DaGFyYWN0ZXJzL0Fic3RyYWN0Q2hhcmFjdGVyXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi9HYW1lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVFbmVtaWVzU29ja2V0RXZlbnQgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNvY2tldC5vbigndXBkYXRlRW5lbXknLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZWRFbmVteSA9IGRhdGEuZW5lbXk7XG4gICAgICAgICAgICBsZXQgZW5lbXlLZXkgPSBkYXRhLmVuZW15S2V5O1xuICAgICAgICAgICAgbGV0IHNjZW5lTWFuYWdlciA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKTtcbiAgICAgICAgICAgIGxldCBlbmVteSA9IHNjZW5lTWFuYWdlci5lbmVtaWVzW2VuZW15S2V5XTtcbiAgICAgICAgICAgIGlmKCFlbmVteSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBtZXNoID0gZW5lbXkubWVzaEZvck1vdmU7XG5cbiAgICAgICAgICAgIGVuZW15LnJldHJpZXZlSGl0KHVwZGF0ZWRFbmVteSk7XG5cbiAgICAgICAgICAgIC8vL2FudHlsYWcgcnVsZVxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlQmV0d2Vlbk9iamVjdHMgPSBHYW1lLmRpc3RhbmNlVmVjdG9yKG1lc2gucG9zaXRpb24sIHVwZGF0ZWRFbmVteS5wb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2VCZXR3ZWVuT2JqZWN0cyA+IDE2KSB7XG4gICAgICAgICAgICAgICAgbWVzaC5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjModXBkYXRlZEVuZW15LnBvc2l0aW9uLngsIHVwZGF0ZWRFbmVteS5wb3NpdGlvbi55LCB1cGRhdGVkRW5lbXkucG9zaXRpb24ueik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY2VuZU1hbmFnZXIuZW5lbWllc0FjdGl2ZVRhcmdldHNbZW5lbXlLZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkudW5yZWdpc3RlckJlZm9yZVJlbmRlcihzY2VuZU1hbmFnZXIuZW5lbWllc0FjdGl2ZVRhcmdldHNbZW5lbXlLZXldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRhcmdldE1lc2ggPSBudWxsO1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLnJlbW90ZVBsYXllcnMuZm9yRWFjaChmdW5jdGlvbiAoc29ja2V0UmVtb3RlUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRFbmVteS50YXJnZXQgPT0gc29ja2V0UmVtb3RlUGxheWVyLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE1lc2ggPSBzb2NrZXRSZW1vdGVQbGF5ZXIubWVzaEZvck1vdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmNvbGxpc2lvbkV2ZW50ID09ICdPbkludGVyc2VjdGlvbkVudGVyVHJpZ2dlckF0dGFjaycpIHtcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXllci5tb25zdGVyc1RvQXR0YWNrW2VuZW15S2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYodXBkYXRlZEVuZW15LmF0dGFjayA9PSB0cnVlICYmIGRhdGEuYXR0YWNrSXNEb25lID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzaC5sb29rQXQodGFyZ2V0TWVzaC5wb3NpdGlvbi5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkucnVuQW5pbWF0aW9uSGl0KEFic3RyYWN0Q2hhcmFjdGVyLkFOSU1BVElPTl9BVFRBQ0tfMDEsIG51bGwsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmVteS5ydW5BbmltYXRpb25TdGFuZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5jb2xsaXNpb25FdmVudCA9PSAnT25JbnRlcnNlY3Rpb25FbnRlclRyaWdnZXJWaXNpYmlsaXR5JyB8fCBkYXRhLmNvbGxpc2lvbkV2ZW50ID09ICdPbkludGVyc2VjdGlvbkV4aXRUcmlnZ2VyQXR0YWNrJykge1xuICAgICAgICAgICAgICAgIGlmIChnYW1lLnBsYXllci5tb25zdGVyc1RvQXR0YWNrW2VuZW15S2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnYW1lLnBsYXllci5tb25zdGVyc1RvQXR0YWNrW2VuZW15S2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzY2VuZU1hbmFnZXIuZW5lbWllc0FjdGl2ZVRhcmdldHNbZW5lbXlLZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1lc2gubG9va0F0KHRhcmdldE1lc2gucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGxldCByb3RhdGlvbiA9IG1lc2gucm90YXRpb247XG4gICAgICAgICAgICAgICAgbGV0IGZvcndhcmRzID0gbmV3IEJBQllMT04uVmVjdG9yMygoTWF0aC5zaW4ocm90YXRpb24ueSkpIC8gZW5lbXkuZ2V0V2Fsa1NwZWVkKCksIDAsIChNYXRoLmNvcyhyb3RhdGlvbi55KSkgLyBlbmVteS5nZXRXYWxrU3BlZWQoKSk7XG4gICAgICAgICAgICAgICAgbWVzaC5tb3ZlV2l0aENvbGxpc2lvbnMoZm9yd2FyZHMpO1xuICAgICAgICAgICAgICAgIGVuZW15LnJ1bkFuaW1hdGlvbldhbGsoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzZWxmLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkucmVnaXN0ZXJCZWZvcmVSZW5kZXIoc2NlbmVNYW5hZ2VyLmVuZW1pZXNBY3RpdmVUYXJnZXRzW2VuZW15S2V5XSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY29sbGlzaW9uRXZlbnQgPT0gJ09uSW50ZXJzZWN0aW9uRXhpdFRyaWdnZXJWaXNpYmlsaXR5Jykge1xuICAgICAgICAgICAgICAgIGVuZW15LnJ1bkFuaW1hdGlvblN0YW5kKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHNjZW5lTWFuYWdlci5lbmVtaWVzQWN0aXZlVGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBzY2VuZU1hbmFnZXIucGxheUJhdHRsZU11c2ljKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHNjZW5lTWFuYWdlci5zdG9wQmF0dGxlTXVzaWMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuLi9Tb2NrZXRFdmVudFwiO1xuXG5leHBvcnQgY2xhc3MgT25BZGRBdHRyaWJ1dGUgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U29ja2V0SU9DbGllbnR9XG4gICAgICovXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdhdHRyaWJ1dGVBZGRlZCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBnYW1lLnBsYXllci5mcmVlQXR0cmlidXRlc1BvaW50cyA9IGRhdGEuYWN0aXZlUGxheWVyLmZyZWVBdHRyaWJ1dGVzUG9pbnRzO1xuICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuc2V0Q2hhcmFjdGVyU3RhdGlzdGljcyhkYXRhLmFjdGl2ZVBsYXllcik7XG5cbiAgICAgICAgICAgIGdhbWUuZ3VpLmF0dHJpYnV0ZXMucmVmcmVzaFBvcHVwKCk7XG4gICAgICAgICAgICBnYW1lLnBsYXllci5yZWZyZXNoRW5lcmd5SW5HdWkoKTtcbiAgICAgICAgICAgIGdhbWUucGxheWVyLnJlZnJlc2hIcEluR3VpKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uL1NvY2tldEV2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBPbkFkZEV4cGVyaWVuY2UgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U29ja2V0SU9DbGllbnR9XG4gICAgICovXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdhZGRFeHBlcmllbmNlJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGdhbWUucGxheWVyLmFkZEV4cGVyaWVuY2UoZGF0YS5leHBlcmllbmNlLCBkYXRhLmV4cGVyaWVuY2VQZXJjZW50YWdlcyk7XG4gICAgICAgICAgICBnYW1lLmd1aS5wbGF5ZXJMb2dzUXVlc3RzLmFkZFRleHQoJ1lvdSBlYXJuZWQgJyArIGRhdGEuZXhwZXJpZW5jZSArICcgZXhwZXJpZW5jZS4nLCAnZ29sZCcpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uL1NvY2tldEV2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBPbk5ld0x2bCBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtTb2NrZXRJT0NsaWVudH1cbiAgICAgKi9cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ25ld0x2bCcsIGZ1bmN0aW9uIChwbGF5ZXJEYXRhKSB7XG4gICAgICAgICAgICBnYW1lLnBsYXllci5mcmVlQXR0cmlidXRlc1BvaW50cyA9IHBsYXllckRhdGEuZnJlZUF0dHJpYnV0ZXNQb2ludHM7XG4gICAgICAgICAgICBnYW1lLnBsYXllci5mcmVlU2tpbGxQb2ludHMgPSBwbGF5ZXJEYXRhLmZyZWVTa2lsbFBvaW50cztcbiAgICAgICAgICAgIGdhbWUucGxheWVyLmx2bCA9IHBsYXllckRhdGEubHZsO1xuICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuZXhwZXJpZW5jZVBlcmNlbnRhZ2VzID0gMDtcbiAgICAgICAgICAgIGdhbWUuZ3VpLmF0dHJpYnV0ZXMucmVmcmVzaFBvcHVwKCk7XG5cbiAgICAgICAgICAgIGdhbWUucGxheWVyLnNldE5ld0x2bCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuLi9Tb2NrZXRFdmVudFwiO1xuXG5leHBvcnQgY2xhc3MgT25SZWZyZXNoUGxheWVyRXF1aXAgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbigndXBkYXRlUGxheWVyRXF1aXAnLCBmdW5jdGlvbiAodXBkYXRlZFBsYXllcikge1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICh1cGRhdGVkUGxheWVyLmFjdGl2ZVBsYXllci5pZCA9PSBnYW1lLnBsYXllci5pZCkge1xuICAgICAgICAgICAgICAgIHBsYXllciA9IGdhbWUucGxheWVyO1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyLnNldENoYXJhY3RlclN0YXRpc3RpY3ModXBkYXRlZFBsYXllci5hY3RpdmVQbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGdhbWUuZ3VpLmF0dHJpYnV0ZXMucmVmcmVzaFBvcHVwKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5yZW1vdGVQbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlbW90ZVBsYXllciwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdGVQbGF5ZXIuaWQgPT0gdXBkYXRlZFBsYXllci5hY3RpdmVQbGF5ZXIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllciA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5yZW1vdGVQbGF5ZXJzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGxheWVyLmludmVudG9yeS5yZW1vdmVJdGVtcygpO1xuICAgICAgICAgICAgcGxheWVyLmludmVudG9yeS5zZXRJdGVtcyh1cGRhdGVkUGxheWVyLmFjdGl2ZVBsYXllci5pdGVtcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uL1NvY2tldEV2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBPblJlbW92ZVBsYXllciBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtTb2NrZXRJT0NsaWVudH1cbiAgICAgKi9cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbigncmVtb3ZlUGxheWVyJywgZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkucmVtb3RlUGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChyZW1vdGVQbGF5ZXIsIGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdGVQbGF5ZXIuaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5yZW1vdGVQbGF5ZXJzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVGcm9tV29ybGQoKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLnJlbW90ZVBsYXllcnMuc3BsaWNlKGtleSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uL1NvY2tldEV2ZW50XCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL0NoYXJhY3RlcnMvUGxheWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBPblNob3dQbGF5ZXIgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U29ja2V0SU9DbGllbnR9XG4gICAgICovXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3Nob3dQbGF5ZXInLCBmdW5jdGlvbiAocGxheWVyRGF0YSkge1xuICAgICAgICAgICAgZ2FtZS5zb2NrZXRDbGllbnQucmVnaXN0ZXJFdmVudHMoKTtcblxuICAgICAgICAgICAgZ2FtZS5wbGF5ZXIgPSBuZXcgUGxheWVyKGdhbWUsIHRydWUsIHBsYXllckRhdGEpO1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLnJlbW90ZVBsYXllcnMucHVzaChnYW1lLnBsYXllcik7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZ2FtZS5ldmVudHMucGxheWVyQ29ubmVjdGVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vQ2hhcmFjdGVycy9QbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIE9uU2hvd1Jvb21QbGF5ZXIgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbignc2hvd1Jvb21QbGF5ZXInLCBmdW5jdGlvbiAocGxheWVyRGF0YSkge1xuICAgICAgICAgICAgbGV0IHBsYXllckV4aXN0cyA9IGZhbHNlO1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLnJlbW90ZVBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmlkID09IHBsYXllckRhdGEuYWN0aXZlUGxheWVyLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmKCFwbGF5ZXJFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkucmVtb3RlUGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoZ2FtZSwgZmFsc2UsIHBsYXllckRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7QWJzdHJhY3RDaGFyYWN0ZXJ9IGZyb20gXCIuLi8uLi9DaGFyYWN0ZXJzL0Fic3RyYWN0Q2hhcmFjdGVyXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi9HYW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBPblVwZGF0ZVBsYXllcnMgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cblxuICAgIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGVQbGF5ZXInLCBmdW5jdGlvbiAodXBkYXRlZFBsYXllcikge1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IG51bGw7XG4gICAgICAgICAgICBpZighdXBkYXRlZFBsYXllci5hY3RpdmVQbGF5ZXIuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5yZW1vdGVQbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlbW90ZVBsYXllciwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW90ZVBsYXllci5pZCA9PSB1cGRhdGVkUGxheWVyLmFjdGl2ZVBsYXllci5pZCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIgPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkucmVtb3RlUGxheWVyc1trZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vL2FjdGlvbiB3aGVuIGhwIG9mIGNoYXJhY3RlciBpcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAocGxheWVyLnN0YXRpc3RpY3MuaHAgIT0gdXBkYXRlZFBsYXllci5hY3RpdmVQbGF5ZXIuc3RhdGlzdGljcy5ocCkge1xuICAgICAgICAgICAgICAgIGxldCBkYW1hZ2UgPSAocGxheWVyLnN0YXRpc3RpY3MuaHAgLSB1cGRhdGVkUGxheWVyLmFjdGl2ZVBsYXllci5zdGF0aXN0aWNzLmhwKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc3RhdGlzdGljcy5ocCA9IHVwZGF0ZWRQbGF5ZXIuYWN0aXZlUGxheWVyLnN0YXRpc3RpY3MuaHA7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5ibG9vZFBhcnRpY2xlcy5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucmVmcmVzaEhwSW5HdWkoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYmxvb2RQYXJ0aWNsZXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2hvd0RhbWFnZShkYW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNDb250cm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5yZWZyZXNoSHBJbkd1aSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5pc0FsaXZlICYmIHBsYXllci5zdGF0aXN0aWNzLmhwIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5pc0FsaXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuaXNEZWF0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubWVzaC5za2VsZXRvbi5iZWdpbkFuaW1hdGlvbignZGVhdGgnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0sIDQwMCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodXBkYXRlZFBsYXllci5hdHRhY2spICYmICFwbGF5ZXIuaXNBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9pbnQgPSB1cGRhdGVkUGxheWVyLnRhcmdldFBvaW50O1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9pbnRWZWN0b3IzID0gbmV3IEJBQllMT04uVmVjdG9yMyh0YXJnZXRQb2ludC54LCAwLCB0YXJnZXRQb2ludC56KTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLm1lc2hGb3JNb3ZlLmxvb2tBdCh0YXJnZXRQb2ludFZlY3RvcjMsIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tBbmltYXRpb24gPSAoR2FtZS5yYW5kb21OdW1iZXIoMSwgMikgPT0gMSkgPyBBYnN0cmFjdENoYXJhY3Rlci5BTklNQVRJT05fQVRUQUNLXzAyIDogQWJzdHJhY3RDaGFyYWN0ZXIuQU5JTUFUSU9OX0FUVEFDS18wMTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucnVuQW5pbWF0aW9uSGl0KGF0dGFja0FuaW1hdGlvbiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmR5bmFtaWNGdW5jdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmdldEJhYnlsb25TY2VuZSgpLnVucmVnaXN0ZXJCZWZvcmVSZW5kZXIocGxheWVyLmR5bmFtaWNGdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHBsYXllci5zdGF0aXN0aWNzLmVuZXJneSA9IHVwZGF0ZWRQbGF5ZXIuYWN0aXZlUGxheWVyLnN0YXRpc3RpY3MuZW5lcmd5O1xuICAgICAgICAgICAgICAgIHBsYXllci5yZWZyZXNoRW5lcmd5SW5HdWkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1cGRhdGVkUGxheWVyLnRhcmdldFBvaW50ICYmICFwbGF5ZXIuaXNDb250cm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9pbnRWZWN0b3IzID0gbmV3IEJBQllMT04uVmVjdG9yMyh1cGRhdGVkUGxheWVyLnRhcmdldFBvaW50LngsIDAsIHVwZGF0ZWRQbGF5ZXIudGFyZ2V0UG9pbnQueik7XG5cbiAgICAgICAgICAgICAgICBwbGF5ZXIucnVuUGxheWVyVG9Qb3NpdGlvbih0YXJnZXRQb2ludFZlY3RvcjMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uL1NvY2tldEV2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBPblVwZGF0ZVBsYXllcnNTa2lsbHMgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U29ja2V0SU9DbGllbnR9XG4gICAgICovXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGVQbGF5ZXJTa2lsbCcsIGZ1bmN0aW9uICh1cGRhdGVkUGxheWVyKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gbnVsbDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdza2lsbCcpO1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLnJlbW90ZVBsYXllcnMuZm9yRWFjaChmdW5jdGlvbiAocmVtb3RlUGxheWVyLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3RlUGxheWVyLmlkID09IHVwZGF0ZWRQbGF5ZXIuYWN0aXZlUGxheWVyLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllciA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5yZW1vdGVQbGF5ZXJzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYodXBkYXRlZFBsYXllci5hY3RpdmVTa2lsbCkge1xuICAgICAgICAgICAgICAgIHBsYXllci5zdGF0aXN0aWNzLmVuZXJneSA9IHVwZGF0ZWRQbGF5ZXIuYWN0aXZlUGxheWVyLnN0YXRpc3RpY3MuZW5lcmd5O1xuICAgICAgICAgICAgICAgIHBsYXllci5yZWZyZXNoRW5lcmd5SW5HdWkoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbCA9IHBsYXllci5za2lsbHNbdXBkYXRlZFBsYXllci5hY3RpdmVTa2lsbC50eXBlXTtcbiAgICAgICAgICAgICAgICBza2lsbC5zaG93QW5pbWF0aW9uKHVwZGF0ZWRQbGF5ZXIuYWN0aXZlU2tpbGwuZHVyYXRpb24qMTAwMCwgdXBkYXRlZFBsYXllci5hY3RpdmVTa2lsbC5jb29sZG93blRpbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uLy4uL1NvY2tldEV2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBPbk9wZW5DaGVzdCBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICB0aGlzLnNvY2tldC5vbignb3BlbkNoZXN0JywgZGF0YSA9PiB7XG4gICAgICAgICAgICBsZXQgb3BlbmVkID0gZGF0YS5jaGVzdC5vcGVuZWQ7XG4gICAgICAgICAgICBpZighb3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5ndWkucGxheWVyTG9nc1F1ZXN0cy5hZGRUZXh0KCdZb3UgZG8gbm90IGhhdmUga2V5IHRvIG9wZW4gY2hlc3QnLCAncmVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBjaGVzdCA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5jaGVzdHNbZGF0YS5jaGVzdEtleV07XG4gICAgICAgICAgICAgICAgY2hlc3QuaGlnaHRsaWdodExheWVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICBjaGVzdC5tZXNoLnNrZWxldG9uLmJlZ2luQW5pbWF0aW9uKCdhY3Rpb24nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY2hlc3QubWVzaC5hY3Rpb25NYW5hZ2VyLmFjdGlvbnMuZm9yRWFjaChhY3Rpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGVzdC5tZXNoLmFjdGlvbk1hbmFnZXIudW5yZWdpc3RlckFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vLi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7Q2hlc3R9IGZyb20gXCIuLi8uLi8uLi9Jbml0aWFsaXplcnMvQ2hlc3RcIjtcblxuZXhwb3J0IGNsYXNzIE9uUmVmcmVzaENoZXN0IGV4dGVuZHMgU29ja2V0RXZlbnQge1xuXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZWZyZXNoQ2hlc3RzJywgY2hlc3RzID0+IHtcbiAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5jaGVzdHMuZm9yRWFjaChjaGVzdCA9PiB7XG4gICAgICAgICAgICAgICAgY2hlc3QuaGlnaHRsaWdodExheWVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmNoZXN0cyA9IFtdO1xuXG4gICAgICAgICAgICBjaGVzdHMuZm9yRWFjaCgoY2hlc3QsIGNoZXN0S2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmNoZXN0cy5wdXNoKG5ldyBDaGVzdChnYW1lLCBjaGVzdCwgY2hlc3RLZXkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuLi8uLi9Tb2NrZXRFdmVudFwiO1xuXG5leHBvcnQgY2xhc3MgT25BZGREcm9wcGVkSXRlbSBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICB0aGlzLnNvY2tldC5vbignYWRkRHJvcHBlZEl0ZW0nLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGlmKGRhdGEuaXRlbUtleSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUuZ3VpLnBsYXllckxvZ3NRdWVzdHMuYWRkVGV4dCgnWW91ciBpbnZlbnRvcnkgaXMgZnVsbCcsICdvcmFuZ2UnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRyb3BwZWRJdGVtID0gZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmRyb3BwZWRJdGVtc1tkYXRhLml0ZW1LZXldO1xuICAgICAgICAgICAgaWYoZHJvcHBlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBkcm9wcGVkSXRlbS5waWNrSXRlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuLi8uLi9Tb2NrZXRFdmVudFwiO1xuXG5leHBvcnQgY2xhc3MgT25BZGRTcGVjaWFsSXRlbSBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICB0aGlzLnNvY2tldC5vbignYWRkU3BlY2lhbEl0ZW0nLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGdhbWUuZ3VpLnBsYXllckxvZ3NRdWVzdHMuYWRkVGV4dCgnWW91IGVhcm5lZCAnK2RhdGEudmFsdWUrJyAnICsgZGF0YS5uYW1lICsgJycsICdnb2xkJyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vLi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7UmFuZG9tU3BlY2lhbEl0ZW19IGZyb20gXCIuLi8uLi8uLi9Jbml0aWFsaXplcnMvUmFuZG9tU3BlY2lhbEl0ZW1cIjtcblxuZXhwb3J0IGNsYXNzIE9uUmVmcmVzaFJhbmRvbVNwZWNpYWxJdGVtcyBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICB0aGlzLnNvY2tldC5vbigncmVmcmVzaFJhbmRvbVNwZWNpYWxJdGVtcycsIHJhbmRvbVNwZWNpYWxJdGVtcyA9PiB7XG5cbiAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5yYW5kb21TcGVjaWFsSXRlbXMuZm9yRWFjaChyYW5kb21TcGVjaWFsSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmFuZG9tU3BlY2lhbEl0ZW0ubWVzaC5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgcmFuZG9tU3BlY2lhbEl0ZW0udG9vbHRpcC5jb250YWluZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkucmFuZG9tU3BlY2lhbEl0ZW1zID0gW107XG5cbiAgICAgICAgICAgIHJhbmRvbVNwZWNpYWxJdGVtcy5mb3JFYWNoKChyYW5kb21TcGVjaWFsSXRlbSwgcmFuZG9tU3BlY2lhbEl0ZW1LZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJhbmRvbVNwZWNpYWxJdGVtLmlzUGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5yYW5kb21TcGVjaWFsSXRlbXMucHVzaChuZXcgUmFuZG9tU3BlY2lhbEl0ZW0oZ2FtZSwgcmFuZG9tU3BlY2lhbEl0ZW0sIHJhbmRvbVNwZWNpYWxJdGVtS2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuLi8uLi9Tb2NrZXRFdmVudFwiO1xuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vLi4vLi4vUGxheWVyL0l0ZW1zL0l0ZW1cIjtcbmltcG9ydCB7RHJvcHBlZEl0ZW19IGZyb20gXCIuLi8uLi8uLi9Jbml0aWFsaXplcnMvRHJvcHBlZEl0ZW1cIjtcblxuZXhwb3J0IGNsYXNzIE9uU2hvd0Ryb3BwZWRJdGVtIGV4dGVuZHMgU29ja2V0RXZlbnQge1xuXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdzaG93RHJvcHBlZEl0ZW0nLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbShnYW1lLCBkYXRhLml0ZW0pO1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmRyb3BwZWRJdGVtc1tkYXRhLml0ZW1LZXldID0gKG5ldyBEcm9wcGVkSXRlbShnYW1lLCBpdGVtLCBkYXRhLnBvc2l0aW9uLCBkYXRhLml0ZW1LZXkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7TWFuYWdlcn0gZnJvbSBcIi4uLy4uL1NjZW5lcy9NYW5hZ2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBPbkNoYW5nZVNjZW5lIGV4dGVuZHMgU29ja2V0RXZlbnQge1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1NvY2tldElPQ2xpZW50fVxuICAgICAqL1xuICAgIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICB0aGlzLnNvY2tldC5vbignY2hhbmdlU2NlbmUnLCBzY2VuZVR5cGUgPT4ge1xuICAgICAgICAgICAgbGV0IHNjZW5lID0gTWFuYWdlci5mYWN0b3J5KHNjZW5lVHlwZSk7XG5cbiAgICAgICAgICAgIGdhbWUuY2hhbmdlU2NlbmUoc2NlbmUpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuLi9Tb2NrZXRFdmVudFwiO1xuaW1wb3J0IHtHYXRld2F5fSBmcm9tIFwiLi4vLi4vSW5pdGlhbGl6ZXJzL0dhdGV3YXlzXCI7XG5cbmV4cG9ydCBjbGFzcyBPblJlZnJlc2hHYXRld2F5cyBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtTb2NrZXRJT0NsaWVudH1cbiAgICAgKi9cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgbGV0IGdhdGV3YXlzID0gW107XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZWZyZXNoR2F0ZXdheXMnLCBzY2VuZVNlcnZlckRhdGEgPT4ge1xuICAgICAgICAgICAgZ2F0ZXdheXMuZm9yRWFjaChnYXRld2F5ID0+IHtcbiAgICAgICAgICAgICAgICBnYXRld2F5LnBhcnRpY2xlU3lzdGVtLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgZ2F0ZXdheXNGcm9tU2VydmVyID0gc2NlbmVTZXJ2ZXJEYXRhLmdhdGV3YXlzO1xuICAgICAgICAgICAgZ2F0ZXdheXNGcm9tU2VydmVyLmZvckVhY2goZ2F0ZXdheSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGdhdGV3YXlJbkdhbWUgPSBuZXcgR2F0ZXdheShnYW1lLCBnYXRld2F5Lm9iamVjdE5hbWUsIGdhdGV3YXkuaXNBY3RpdmUsIGdhdGV3YXkub3BlblNjZW5lVHlwZSwgZ2F0ZXdheS5lbnRyYW5jZU5hbWUpO1xuICAgICAgICAgICAgICAgIGdhdGV3YXlzLnB1c2goZ2F0ZXdheUluR2FtZSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uLy4uL1NvY2tldEV2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBPblF1ZXN0UmVxdWlyZW1lbnREb25lSW5mb3JtYXRpb24gZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdxdWVzdFJlcXVpcmVtZW50RG9uZUluZm9ybWF0aW9uJywgZGF0YSA9PiB7XG4gICAgICAgICAgICBzZWxmLmdhbWUuZ3VpLnBsYXllckxvZ3NRdWVzdHMuYWRkVGV4dChkYXRhLCAnb3JhbmdlJyk7XG4gICAgICAgICAgICBzZWxmLnNvY2tldC5lbWl0KCdyZWZyZXNoUXVlc3RzJyk7XG4gICAgICAgICAgICBzZWxmLnNvY2tldC5lbWl0KCdyZWZyZXNoR2F0ZXdheXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vLi4vU29ja2V0RXZlbnRcIjtcblxuZXhwb3J0IGNsYXNzIE9uUXVlc3RSZXF1aXJlbWVudEluZm9ybWF0aW9uIGV4dGVuZHMgU29ja2V0RXZlbnQge1xuXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNvY2tldC5vbigncXVlc3RSZXF1aXJlbWVudEluZm9ybWF0aW9uJywgZGF0YSA9PiB7XG4gICAgICAgICAgICBzZWxmLmdhbWUuZ3VpLnBsYXllckxvZ3NRdWVzdHMuYWRkVGV4dChkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vLi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7UXVlc3RzfSBmcm9tIFwiLi4vLi4vLi4vSW5pdGlhbGl6ZXJzL1F1ZXN0c1wiO1xuXG5leHBvcnQgY2xhc3MgT25SZWZyZXNoUXVlc3RzIGV4dGVuZHMgU29ja2V0RXZlbnQge1xuXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3JlZnJlc2hRdWVzdHMnLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5xdWVzdHMuZm9yRWFjaChxdWVzdCA9PiB7XG4gICAgICAgICAgICAgICAgcXVlc3QuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkucXVlc3RzID0gW107XG5cbiAgICAgICAgICAgIGxldCBhY3RpdmVRdWVzdCA9IGRhdGEuYWN0aXZlUXVlc3Q7XG4gICAgICAgICAgICBkYXRhLnF1ZXN0cy5mb3JFYWNoKHF1ZXN0ID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkucXVlc3RzLnB1c2gobmV3IFF1ZXN0cyhnYW1lLCBxdWVzdCwgYWN0aXZlUXVlc3QpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZWxmLnNvY2tldC5lbWl0KCdyZWZyZXNoR2F0ZXdheXMnKTtcbiAgICAgICAgICAgIGlmIChhY3RpdmVRdWVzdCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZS5ndWkucGxheWVyUXVlc3RJbmZvcm1hdGlvbi5hZGRRdWVzdChhY3RpdmVRdWVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU29ja2V0RXZlbnQge1xuXG4gICAgcHJvdGVjdGVkIGdhbWU6IEdhbWU7XG4gICAgcHJvdGVjdGVkIHNvY2tldDtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHNvY2tldCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnNvY2tldCA9IHNvY2tldDtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBsaXN0ZW4oKTtcbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7U2xhdnNMb2FkZXJ9IGZyb20gXCIuLi9Mb2FkZXIvU2xhdnNMb2FkZXJcIjtcbmltcG9ydCB7U2hvd0VuZW1pZXNTb2NrZXRFdmVudH0gZnJvbSBcIi4vRW5lbWllcy9TaG93RW5lbWllc1NvY2tldEV2ZW50XCI7XG5pbXBvcnQge1VwZGF0ZUVuZW1pZXNTb2NrZXRFdmVudH0gZnJvbSBcIi4vRW5lbWllcy9VcGRhdGVFbmVtaWVzU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7T25PcGVuQ2hlc3R9IGZyb20gXCIuL1NjZW5lL0NoZXN0cy9Pbk9wZW5DaGVzdFwiO1xuaW1wb3J0IHtPblJlZnJlc2hDaGVzdH0gZnJvbSBcIi4vU2NlbmUvQ2hlc3RzL09uUmVmcmVzaENoZXN0XCI7XG5pbXBvcnQge09uQWRkU3BlY2lhbEl0ZW19IGZyb20gXCIuL1NjZW5lL0l0ZW1zL09uQWRkU3BlY2lhbEl0ZW1cIjtcbmltcG9ydCB7T25SZWZyZXNoUmFuZG9tU3BlY2lhbEl0ZW1zfSBmcm9tIFwiLi9TY2VuZS9JdGVtcy9PblJlZnJlc2hSYW5kb21TcGVjaWFsSXRlbXNcIjtcbmltcG9ydCB7T25TaG93RHJvcHBlZEl0ZW19IGZyb20gXCIuL1NjZW5lL0l0ZW1zL09uU2hvd0Ryb3BwZWRJdGVtXCI7XG5pbXBvcnQge09uUXVlc3RSZXF1aXJlbWVudERvbmVJbmZvcm1hdGlvbn0gZnJvbSBcIi4vU2NlbmUvUXVlc3RzL09uUXVlc3RSZXF1aXJlbWVudERvbmVJbmZvcm1hdGlvblwiO1xuaW1wb3J0IHtPblF1ZXN0UmVxdWlyZW1lbnRJbmZvcm1hdGlvbn0gZnJvbSBcIi4vU2NlbmUvUXVlc3RzL09uUXVlc3RSZXF1aXJlbWVudEluZm9ybWF0aW9uXCI7XG5pbXBvcnQge09uUmVmcmVzaFF1ZXN0c30gZnJvbSBcIi4vU2NlbmUvUXVlc3RzL09uUmVmcmVzaFF1ZXN0c1wiO1xuaW1wb3J0IHtPbkNoYW5nZVNjZW5lfSBmcm9tIFwiLi9TY2VuZS9PbkNoYW5nZVNjZW5lXCI7XG5pbXBvcnQge09uUmVmcmVzaEdhdGV3YXlzfSBmcm9tIFwiLi9TY2VuZS9PblJlZnJlc2hHYXRld2F5c1wiO1xuaW1wb3J0IHtPbkFkZEF0dHJpYnV0ZX0gZnJvbSBcIi4vUGxheWVyL09uQWRkQXR0cmlidXRlXCI7XG5pbXBvcnQge09uQWRkRXhwZXJpZW5jZX0gZnJvbSBcIi4vUGxheWVyL09uQWRkRXhwZXJpZW5jZVwiO1xuaW1wb3J0IHtPbk5ld0x2bH0gZnJvbSBcIi4vUGxheWVyL09uTmV3THZsXCI7XG5pbXBvcnQge09uUmVmcmVzaFBsYXllckVxdWlwfSBmcm9tIFwiLi9QbGF5ZXIvT25SZWZyZXNoUGxheWVyRXF1aXBcIjtcbmltcG9ydCB7T25TaG93UGxheWVyfSBmcm9tIFwiLi9QbGF5ZXIvT25TaG93UGxheWVyXCI7XG5pbXBvcnQge09uVXBkYXRlUGxheWVyc30gZnJvbSBcIi4vUGxheWVyL09uVXBkYXRlUGxheWVyc1wiO1xuaW1wb3J0IHtPblVwZGF0ZVBsYXllcnNTa2lsbHN9IGZyb20gXCIuL1BsYXllci9PblVwZGF0ZVBsYXllcnNTa2lsbHNcIjtcbmltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuL1NvY2tldEV2ZW50XCI7XG5pbXBvcnQge09uUmVtb3ZlUGxheWVyfSBmcm9tIFwiLi9QbGF5ZXIvT25SZW1vdmVQbGF5ZXJcIjtcbmltcG9ydCB7U2VsZWN0Q2hhcmFjdGVyfSBmcm9tIFwiLi4vU2NlbmVzL1NlbGVjdENoYXJhY3RlclwiO1xuaW1wb3J0IHtPbkFkZERyb3BwZWRJdGVtfSBmcm9tIFwiLi9TY2VuZS9JdGVtcy9PbkFkZERyb3BwZWRJdGVtXCI7XG5pbXBvcnQge09uU2hvd1Jvb21QbGF5ZXJ9IGZyb20gXCIuL1BsYXllci9PblNob3dSb29tUGxheWVyXCI7XG5cbmxldCBpbyA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKTtcblxuZXhwb3J0IGNsYXNzIFNvY2tldENsaWVudCB7XG4gICAgcHJvdGVjdGVkIGdhbWU6IEdhbWU7XG4gICAgcHVibGljIHNvY2tldDtcbiAgICBwdWJsaWMgY29ubmVjdGlvbklkO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25uZWN0KHNvY2tldFVybDogc3RyaW5nLCBhY2Nlc3NUb2tlbjogc3RyaW5nKSB7XG4gICAgICAgIFNsYXZzTG9hZGVyLnNob3dMb2FkZXJXaXRoVGV4dCgnRXN0YWJsaXNoaW5nIGNvbm5lY3Rpb24gd2l0aCBzZXJ2ZXIuLi4nKTtcblxuICAgICAgICB0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3Qoc29ja2V0VXJsLCB7cXVlcnk6ICdnYW1lVG9rZW49JyArIGFjY2Vzc1Rva2VufSk7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdjb25uZWN0X2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgU2xhdnNMb2FkZXIuc2hvd0xvYWRlcldpdGhUZXh0KCdQcm9ibGVtIHdpdGggY29ubmVjdGlvbiB0byBzZXJ2ZXInKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJDb25uZWN0ZWQoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgY29uc3QgZXZlbnRzID0gW1xuICAgICAgICAgICAgbmV3IFNob3dFbmVtaWVzU29ja2V0RXZlbnQoZ2FtZSwgdGhpcy5zb2NrZXQpLFxuICAgICAgICAgICAgbmV3IFVwZGF0ZUVuZW1pZXNTb2NrZXRFdmVudChnYW1lLCB0aGlzLnNvY2tldCksXG5cbiAgICAgICAgICAgIG5ldyBPbk9wZW5DaGVzdChnYW1lLCB0aGlzLnNvY2tldCksXG4gICAgICAgICAgICBuZXcgT25SZWZyZXNoQ2hlc3QoZ2FtZSwgdGhpcy5zb2NrZXQpLFxuXG4gICAgICAgICAgICBuZXcgT25BZGRTcGVjaWFsSXRlbShnYW1lLCB0aGlzLnNvY2tldCksXG4gICAgICAgICAgICBuZXcgT25SZWZyZXNoUmFuZG9tU3BlY2lhbEl0ZW1zKGdhbWUsIHRoaXMuc29ja2V0KSxcbiAgICAgICAgICAgIG5ldyBPblNob3dEcm9wcGVkSXRlbShnYW1lLCB0aGlzLnNvY2tldCksXG4gICAgICAgICAgICBuZXcgT25BZGREcm9wcGVkSXRlbShnYW1lLCB0aGlzLnNvY2tldCksXG5cbiAgICAgICAgICAgIG5ldyBPblF1ZXN0UmVxdWlyZW1lbnREb25lSW5mb3JtYXRpb24oZ2FtZSwgdGhpcy5zb2NrZXQpLFxuICAgICAgICAgICAgbmV3IE9uUXVlc3RSZXF1aXJlbWVudEluZm9ybWF0aW9uKGdhbWUsIHRoaXMuc29ja2V0KSxcbiAgICAgICAgICAgIG5ldyBPblJlZnJlc2hRdWVzdHMoZ2FtZSwgdGhpcy5zb2NrZXQpLFxuICAgICAgICAgICAgbmV3IE9uUmVmcmVzaEdhdGV3YXlzKGdhbWUsIHRoaXMuc29ja2V0KSxcblxuICAgICAgICAgICAgbmV3IE9uQWRkQXR0cmlidXRlKGdhbWUsIHRoaXMuc29ja2V0KSxcbiAgICAgICAgICAgIG5ldyBPbkFkZEV4cGVyaWVuY2UoZ2FtZSwgdGhpcy5zb2NrZXQpLFxuICAgICAgICAgICAgbmV3IE9uTmV3THZsKGdhbWUsIHRoaXMuc29ja2V0KSxcbiAgICAgICAgICAgIG5ldyBPblJlZnJlc2hQbGF5ZXJFcXVpcChnYW1lLCB0aGlzLnNvY2tldCksXG4gICAgICAgICAgICBuZXcgT25SZW1vdmVQbGF5ZXIoZ2FtZSwgdGhpcy5zb2NrZXQpLFxuICAgICAgICAgICAgbmV3IE9uVXBkYXRlUGxheWVycyhnYW1lLCB0aGlzLnNvY2tldCksXG4gICAgICAgICAgICBuZXcgT25TaG93Um9vbVBsYXllcihnYW1lLCB0aGlzLnNvY2tldCksXG4gICAgICAgICAgICBuZXcgT25VcGRhdGVQbGF5ZXJzU2tpbGxzKGdhbWUsIHRoaXMuc29ja2V0KSxcbiAgICAgICAgXTtcblxuICAgICAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQ6IFNvY2tldEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5saXN0ZW4oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2xlYXJFdmVudHMoKSB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuXG4gICAgICAgIHRoaXMuc29ja2V0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICBuZXcgT25TaG93UGxheWVyKGdhbWUsIHRoaXMuc29ja2V0KS5saXN0ZW4oKTtcbiAgICAgICAgbmV3IE9uQ2hhbmdlU2NlbmUoZ2FtZSwgdGhpcy5zb2NrZXQpLmxpc3RlbigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5ZXJDb25uZWN0ZWQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2NsaWVudENvbm5lY3RlZCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBzZWxmLmNvbm5lY3Rpb25JZCA9IGRhdGEuY29ubmVjdGlvbklkO1xuXG4gICAgICAgICAgICBzZWxmLnNvY2tldC5lbWl0KCdjaGFuZ2VTY2VuZScsIFNlbGVjdENoYXJhY3Rlci5UWVBFKTtcbiAgICAgICAgICAgIG5ldyBPblNob3dQbGF5ZXIoZ2FtZSwgc2VsZi5zb2NrZXQpLmxpc3RlbigpO1xuICAgICAgICAgICAgbmV3IE9uQ2hhbmdlU2NlbmUoZ2FtZSwgc2VsZi5zb2NrZXQpLmxpc3RlbigpO1xuXG4gICAgICAgICAgICAvLyBzZWxmLnNvY2tldC5lbWl0KCdzZWxlY3RDaGFyYWN0ZXInLCAxKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=