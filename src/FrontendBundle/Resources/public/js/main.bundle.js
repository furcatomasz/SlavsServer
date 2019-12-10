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
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function () {
            game.player.attackActions.attackMonster(self);
        }));
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
            game.player.attackActions.attackOnlyOnce();
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
                    self.animation.stop();
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
                return;
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
                if (self.animation) {
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
                meshName: 'leatherArmor',
                equip: 1,
            },
            {
                meshName: 'leatherHelm',
                equip: 1,
            },
            {
                meshName: 'leatherBoots',
                equip: 1,
            },
            {
                meshName: 'leatherGloves',
                equip: 1,
            },
            {
                meshName: 'shieldWoodenMedium',
                equip: 1,
            },
            {
                meshName: 'swordLong',
                equip: 1,
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
            if (!self.game.player.isAlive || game.player.isAnySkillIsInUse()) {
                return;
            }
            clickTrigger = true;
            if (pickedMesh && (pickedMesh.name.search("Ground") >= 0)) {
                scene.onBeforeRenderObservable.remove(game.getSceneManger().goToAction);
                game.player.attackActions.cancelCheckAttack();
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
        droppedItemBox.position.y = 0;
        var itemSpriteManager = new BABYLON.SpriteManager("playerManager", 'assets/Miniatures/' + item.image + '.png', 1, { width: 512, height: 512 }, scene);
        var itemSprite = new BABYLON.Sprite("player", itemSpriteManager);
        itemSprite.width = 1.8;
        itemSprite.height = 1.8;
        itemSprite.position.x = position.x;
        itemSprite.position.z = position.z;
        itemSprite.position.y = 1.5;
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
                    game.socketClient.socket.emit('useSkill', self.getType());
                    game.socketClient.socket.emit('setTargetPoint', {
                        position: newPosition
                    });
                    player.runPlayerToPosition(newPosition);
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
var Battleground = /** @class */ (function (_super) {
    __extends(Battleground, _super);
    function Battleground() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Battleground.prototype.initScene = function (game) {
        var self = this;
        var scene = new BABYLON.Scene(game.engine);
        var ground;
        self
            .setDefaults(game, scene)
            .executeWhenReady(function () {
            var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
            light.intensity = 0.4;
            light.position = new BABYLON.Vector3(0, 50, 0);
            light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
            ground = BABYLON.MeshBuilder.CreateGround("Ground", { width: 256, height: 256 }, scene);
            ground.actionManager = new BABYLON.ActionManager(scene);
            self.environment = new EnvironmentCaveExit_1.EnvironmentCaveExit(game);
        }, function () {
            //
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
            // Configure water material
            waterMaterial.addToRenderList(ground);
            waterMaterial.addToRenderList(self.game.player.mesh);
            // // waterMaterial.addToRenderList(skybox);
            var plane = BABYLON.Mesh.CreatePlane("entrace", 16, scene);
            plane.position = new BABYLON.Vector3(-20, 2, 16);
            plane.layerMask = 2;
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
        scene.audioEnabled = true;
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
                if (!randomSpecialItem.picked) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvQWN0aW9ucy9BdHRhY2tBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0FjdGlvbnMvR29Ub01lc2hBbmRSdW5BY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvQW5pbWF0aW9ucy9BYnN0cmFjdEFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9BbmltYXRpb25zL0JvdW5jZUFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Bc3NldHNGYWN0b3JpZXMvQWJzdHJhY3RGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0Fzc2V0c0ZhY3Rvcmllcy9Bc3NldHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvQXNzZXRzRmFjdG9yaWVzL0NoYXJhY3RlckFzc2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0Fzc2V0c0ZhY3Rvcmllcy9DaGVzdEFzc2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0Fzc2V0c0ZhY3Rvcmllcy9OYXR1cmVBc3NldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Bc3NldHNGYWN0b3JpZXMvU2tlbGV0b25Bc3NldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Bc3NldHNGYWN0b3JpZXMvU2tlbGV0b25Cb3NzQXNzZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvQXNzZXRzRmFjdG9yaWVzL1NrZWxldG9uV2FycmlvckFzc2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0NhbWVyYXMvR2FtZUNhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DYW1lcmFzL1NlbGVjdENoYXJhY3RlckNhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DaGFyYWN0ZXJzL0Fic3RyYWN0Q2hhcmFjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0NoYXJhY3RlcnMvTW9uc3Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DaGFyYWN0ZXJzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DaGFyYWN0ZXJzL25wYy9BYnN0cmFjdE5wYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DaGFyYWN0ZXJzL25wYy9HdWFyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9DaGFyYWN0ZXJzL3NlbGVjdENoYXJhY3Rlci9XYXJyaW9yLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0NvbnRyb2xsZXJzL01vdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0VmZmVjdHMvR29kUmF5LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0Vudmlyb25tZW50L0Fic3RyYWN0RW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvRW52aXJvbm1lbnQvRm9nL0ZvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9FbnZpcm9ubWVudC9lbnZpcm9ubWVudEZvcmVzdEhvdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0Vudmlyb25tZW50L2Vudmlyb25tZW50Rm9yZXN0SG91c2VTdGFydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9FbnZpcm9ubWVudC9lbnZpcm9ubWVudEZvcmVzdEhvdXNlVG9tYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9FbnZpcm9ubWVudC9lbnZpcm9ubWVudE1vdW50YWluc1Bhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvRW52aXJvbm1lbnQvZW52aXJvbm1lbnRTZWxlY3RDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvRXZlbnRzL0V2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvUGxheWVyQm90dG9tUGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL1BsYXllckluZm9ybWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0dVSS9QbGF5ZXJRdWVzdEluZm9ybWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0dVSS9QbGF5ZXJRdWVzdHNQYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvUm9vbUluZm9ybWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0dVSS9TZWxlY3RDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL1Nob3dIcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvVG9vbHRpcHMvVG9vbHRpcEJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvVG9vbHRpcHMvVG9vbHRpcEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvVG9vbHRpcHMvVG9vbHRpcE1lc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL3BvcHVwL0F0dHJpYnV0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL3BvcHVwL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvcG9wdXAvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvcG9wdXAvUG9wdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL3BvcHVwL2ludmVudG9yeS9Bcm1vci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvcG9wdXAvaW52ZW50b3J5L0Jvb3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0dVSS9wb3B1cC9pbnZlbnRvcnkvRXF1aXBCbG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvcG9wdXAvaW52ZW50b3J5L0dsb3Zlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9HVUkvcG9wdXAvaW52ZW50b3J5L0hlbG0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL3BvcHVwL2ludmVudG9yeS9TaGllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL3BvcHVwL2ludmVudG9yeS9XZWFwb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvR1VJL3BvcHVwL25ld1F1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvSW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvSW5pdGlhbGl6ZXJzL0NoZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0luaXRpYWxpemVycy9Db2xsaXNpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0luaXRpYWxpemVycy9Ecm9wcGVkSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Jbml0aWFsaXplcnMvR2F0ZXdheXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvSW5pdGlhbGl6ZXJzL1F1ZXN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Jbml0aWFsaXplcnMvUmFuZG9tU3BlY2lhbEl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvTG9hZGVyL1NsYXZzTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL09wdGlvbnMvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvQWJzdHJhY3RQYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvQmxvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGFydGljbGVzL0Ryb3BwZWRJdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BhcnRpY2xlcy9GaXJlcGxhY2VGaXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BhcnRpY2xlcy9GaXJlcGxhY2VTbW9rZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvR2F0ZXdheVBhcnRpY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvUG9pbnRlci9DbGlja1BhcnRpY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvU2tpbGxzL0hlYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGFydGljbGVzL1NraWxscy9TaGllbGRBdHRhY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGFydGljbGVzL1NvbGlkUGFydGljbGVTeXN0ZW0vQWJzdHJhY3RTb2xpZFBhcnRpY2xlU3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BhcnRpY2xlcy9Tb2xpZFBhcnRpY2xlU3lzdGVtL05hdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvU29saWRQYXJ0aWNsZVN5c3RlbS9OYXR1cmVCbG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QYXJ0aWNsZXMvV2Fsa1Ntb2tlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BsYXllci9JbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGxheWVyL0l0ZW1zL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGxheWVyL0l0ZW1zL0l0ZW1NYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BsYXllci9Ta2lsbHMvQWJzdHJhY3RTa2lsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QbGF5ZXIvU2tpbGxzL0Jsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BsYXllci9Ta2lsbHMvRmFzdEF0dGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9QbGF5ZXIvU2tpbGxzL0hlYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGxheWVyL1NraWxscy9TaGllbGRBdHRhY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvUGxheWVyL1NraWxscy9Ta2lsbHNNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1BsYXllci9Ta2lsbHMvU3Ryb25nQXR0YWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NjZW5lcy9CYXR0bGVncm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU2NlbmVzL0ZvcmVzdEhvdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NjZW5lcy9Gb3Jlc3RIb3VzZVN0YXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NjZW5lcy9Gb3Jlc3RIb3VzZVRvbWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU2NlbmVzL01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU2NlbmVzL01vdW50YWlucy9DYXZlRXhpdC9DYXZlRXhpdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9TY2VuZXMvTW91bnRhaW5zL0NhdmVFeGl0L0Vudmlyb25tZW50Q2F2ZUV4aXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU2NlbmVzL01vdW50YWlucy9Nb3VudGFpbnNFbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9TY2VuZXMvTW91bnRhaW5zL1Rvd24vQXJlbmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU2NlbmVzL01vdW50YWluc1Bhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU2NlbmVzL1NjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NjZW5lcy9TZWxlY3RDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L0VuZW1pZXMvU2hvd0VuZW1pZXNTb2NrZXRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvRW5lbWllcy9VcGRhdGVFbmVtaWVzU29ja2V0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L1BsYXllci9PbkFkZEF0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvUGxheWVyL09uQWRkRXhwZXJpZW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvUGxheWVyL09uTmV3THZsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9QbGF5ZXIvT25SZWZyZXNoUGxheWVyRXF1aXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L1BsYXllci9PblJlbW92ZVBsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvUGxheWVyL09uU2hvd1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvUGxheWVyL09uU2hvd1Jvb21QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L1BsYXllci9PblVwZGF0ZVBsYXllcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L1BsYXllci9PblVwZGF0ZVBsYXllcnNTa2lsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L1NjZW5lL0NoZXN0cy9Pbk9wZW5DaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvU2NlbmUvQ2hlc3RzL09uUmVmcmVzaENoZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9TY2VuZS9JdGVtcy9PbkFkZERyb3BwZWRJdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9TY2VuZS9JdGVtcy9PbkFkZFNwZWNpYWxJdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9TY2VuZS9JdGVtcy9PblJlZnJlc2hSYW5kb21TcGVjaWFsSXRlbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvU29ja2V0Q2xpZW50L1NjZW5lL0l0ZW1zL09uU2hvd0Ryb3BwZWRJdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9TY2VuZS9PbkNoYW5nZVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9TY2VuZS9PblJlZnJlc2hHYXRld2F5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvU2NlbmUvUXVlc3RzL09uUXVlc3RSZXF1aXJlbWVudERvbmVJbmZvcm1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvU2NlbmUvUXVlc3RzL09uUXVlc3RSZXF1aXJlbWVudEluZm9ybWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9TY2VuZS9RdWVzdHMvT25SZWZyZXNoUXVlc3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1NvY2tldENsaWVudC9Tb2NrZXRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9Tb2NrZXRDbGllbnQvc29ja2V0Q2xpZW50LnRzIiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JKQSw2SEFBNEQ7QUFFNUQ7SUFRSSx1QkFBWSxJQUFVO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxxQ0FBYSxHQUFwQixVQUFxQixPQUFnQjtRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBRS9CLDJDQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQztvQkFDM0UsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsV0FBVyxDQUFDOzRCQUNoRCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzt3QkFDbEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNaLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFTSw0Q0FBb0IsR0FBM0I7UUFDSSxhQUFhLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBRU0sc0NBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixhQUFhLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLHlDQUFpQixHQUF4QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTyw4Q0FBc0IsR0FBOUI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDcEMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFFBQVE7Z0JBQ3RELFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxRQUFRO2FBQ3RELENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLGdCQUEwQjtRQUMxQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFFakYsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLGdCQUFnQixFQUFFLENBQUM7YUFDdEI7U0FDSjtJQUVMLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUM7QUE3RVksc0NBQWE7Ozs7Ozs7Ozs7Ozs7OztBQ0QxQjtJQUFBO0lBZ0NBLENBQUM7SUE5QlUsNEJBQU8sR0FBZCxVQUFlLElBQVUsRUFBRSxJQUEwQixFQUFFLE1BQWdCO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQyxJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVuQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RSxJQUFNLHlCQUF5QixHQUFHO1lBQzlCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sRUFBRSxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDNUMsUUFBUSxFQUFFLGNBQWM7YUFDM0IsQ0FBQyxDQUFDO1lBRUgsUUFBUSxHQUFHLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM1RTthQUFNO1lBQ0gsTUFBTSxFQUFFLENBQUM7U0FDWjtRQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBRTVDLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFTCwyQkFBQztBQUFELENBQUM7QUFoQ1ksb0RBQW9COzs7Ozs7Ozs7Ozs7Ozs7QUNIakM7SUFBQTtJQUVBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUM7QUFGcUIsOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXZDLHVIQUFzRDtBQUN0RCwwRkFBcUM7QUFFckM7SUFBcUMsbUNBQWlCO0lBQXREOztJQTZCQSxDQUFDO0lBM0JVLDRCQUFZLEdBQW5CO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLFlBQVksRUFBRSxDQUFDLEVBQ3BFLE9BQU8sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQ3JDLE9BQU8sQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUUvQyxJQUFNLElBQUksR0FBRztZQUNUO2dCQUNJLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7WUFDRDtnQkFDSSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsR0FBRzthQUNiO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLENBQUM7YUFDWDtTQUNKLENBQUM7UUFDRixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhCLElBQU0sY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlDLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzFFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU1QyxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLENBN0JvQyxxQ0FBaUIsR0E2QnJEO0FBN0JZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNINUIsMEZBQXFDO0FBRXJDO0lBUUkseUJBQXNCLEtBQW9CO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxxQ0FBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixPQUFPLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsU0FBUztZQUMzRixJQUFJLENBQUMsWUFBWSxHQUF5QixTQUFTLENBQUMsTUFBTSxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHFDQUFXLEdBQWxCLFVBQW1CLElBQVksRUFBRSxhQUE4QjtRQUE5QixxREFBOEI7UUFDM0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFFbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDbkIsSUFBSSxVQUFVLEdBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLGFBQWEsRUFBRTtvQkFDZixVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksRUFBRSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQztpQkFDakc7Z0JBQ0QsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTVCLE9BQU8sVUFBVSxDQUFDO2FBQ3JCO1NBQ0o7SUFDTCxDQUFDO0lBRU0sd0NBQWMsR0FBckIsVUFBc0IsSUFBWTtRQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUVuQixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNuQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDNUQsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRS9CLE9BQU8sYUFBYSxDQUFDO2FBQ3hCO1NBQ0o7SUFDTCxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDO0FBdkRxQiwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7O0FDRnJDLG1IQUFnRDtBQUNoRCxnSEFBOEM7QUFDOUMscUlBQTREO0FBQzVELDRIQUFzRDtBQUN0RCx1R0FBd0M7QUFDeEMsMEdBQTBDO0FBSTFDO0lBU0ksZ0JBQVksS0FBb0I7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLCtCQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDZCQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDJDQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRU0sc0NBQXFCLEdBQTVCLFVBQTZCLElBQVk7UUFDckMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXhCLFFBQU8sSUFBSSxFQUFFO1lBQ1QsS0FBSyxVQUFVO2dCQUNYLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxpQkFBaUI7Z0JBQ2xCLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNwQyxNQUFNO1lBQ1YsS0FBSyxjQUFjO2dCQUNmLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNqQyxNQUFNO1NBQ2I7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUwsYUFBQztBQUFELENBQUM7QUFwQ1ksd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbkIsc0hBQWtEO0FBR2xEO0lBQW9DLGtDQUFlO0lBQy9DLHdCQUFZLEtBQW9CO1FBQWhDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBR2Y7UUFGRyxLQUFJLENBQUMsR0FBRyxHQUFHLDRCQUE0QixDQUFDO1FBQ3hDLEtBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUM7O0lBQ3RDLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQ0FObUMsaUNBQWUsR0FNbEQ7QUFOWSx3Q0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0gzQixzSEFBa0Q7QUFHbEQ7SUFBZ0MsOEJBQWU7SUFDM0Msb0JBQVksS0FBb0I7UUFBaEMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FHZjtRQUZHLEtBQUksQ0FBQyxHQUFHLEdBQUcsMkJBQTJCLENBQUM7UUFDdkMsS0FBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7O0lBQ3BDLENBQUM7SUFFTCxpQkFBQztBQUFELENBQUMsQ0FQK0IsaUNBQWUsR0FPOUM7QUFQWSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h2QixzSEFBa0Q7QUFHbEQ7SUFBaUMsK0JBQWU7SUFDNUMscUJBQVksS0FBb0I7UUFBaEMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FHZjtRQUZHLEtBQUksQ0FBQyxHQUFHLEdBQUcsNEJBQTRCLENBQUM7UUFDeEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQzs7SUFDckMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxDQU5nQyxpQ0FBZSxHQU0vQztBQU5ZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHhCLHNIQUFrRDtBQUdsRDtJQUFtQyxpQ0FBZTtJQUM5Qyx1QkFBWSxLQUFvQjtRQUFoQyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUdmO1FBRkcsS0FBSSxDQUFDLEdBQUcsR0FBRyxzQ0FBc0MsQ0FBQztRQUNsRCxLQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDOztJQUN2QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLENBTmtDLGlDQUFlLEdBTWpEO0FBTlksc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIMUIsc0hBQWtEO0FBR2xEO0lBQXVDLHFDQUFlO0lBQ2xELDJCQUFZLEtBQW9CO1FBQWhDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBR2Y7UUFGRyxLQUFJLENBQUMsR0FBRyxHQUFHLDBDQUEwQyxDQUFDO1FBQ3RELEtBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUM7O0lBQzNDLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQ0FOc0MsaUNBQWUsR0FNckQ7QUFOWSw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIOUIsc0hBQWtEO0FBR2xEO0lBQTBDLHdDQUFlO0lBQ3JELDhCQUFZLEtBQW9CO1FBQWhDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBR2Y7UUFGRyxLQUFJLENBQUMsR0FBRyxHQUFHLDZDQUE2QyxDQUFDO1FBQ3pELEtBQUksQ0FBQyxRQUFRLEdBQUcseUJBQXlCLENBQUM7O0lBQzlDLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQ0FOeUMsaUNBQWUsR0FNeEQ7QUFOWSxvREFBb0I7Ozs7Ozs7Ozs7Ozs7OztBQ0hqQywwRkFBcUM7QUFDckMsc0VBQTZCO0FBRTdCO0lBQUE7SUErQkEsQ0FBQztJQTdCaUIsNEJBQWlCLEdBQS9CLFVBQWdDLEtBQW9CO1FBQ2hELElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBRyxZQUFZLEVBQUU7WUFDYixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7UUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNGLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsVUFBVSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDckIsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdkIsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFekIsU0FBUztRQUNULElBQUcsV0FBSSxDQUFDLGFBQWEsRUFBRTtZQUNuQixVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNyQixVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUN4QjthQUFNO1lBQ0gsVUFBVSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDdEIsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDeEI7UUFFRCxJQUFJLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pGLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxELEtBQUssQ0FBQyxhQUFhLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUMsS0FBSyxDQUFDLHNCQUFzQixHQUFHLFVBQVUsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDO0FBL0JZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNIdkIsMEZBQXFDO0FBR3JDO0lBQUE7SUFjQSxDQUFDO0lBWmlCLHVDQUFpQixHQUEvQixVQUFnQyxLQUFvQjtRQUNoRCxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNGLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RCxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDdkIsc0JBQXNCO1FBQ3RCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLEtBQUssQ0FBQyxhQUFhLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDO0FBZFksc0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7QUNGbEMsMEZBQXFDO0FBRXJDO0lBbUNJLDJCQUFZLElBQVcsRUFBRSxJQUFTO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFUyxvREFBd0IsR0FBbEM7UUFDSSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN6RixhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLGFBQWEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxhQUFhLENBQUM7UUFFM0MsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHNDQUFVLEdBQWpCLFVBQWtCLE1BQU07UUFDcEIsSUFBSSxjQUFjLEdBQUcsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RixJQUFJLElBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUNoQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV6RSxJQUFJLG9CQUFvQixHQUFHLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHFDQUFxQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUNsSSxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQzFELG9CQUFvQixDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEMsb0JBQW9CLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQyxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25DLG9CQUFvQixDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRSxvQkFBb0IsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsb0JBQW9CLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9ELG9CQUFvQixDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDaEQsb0JBQW9CLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDL0Msb0JBQW9CLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQyxvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLG9CQUFvQixDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUM5QyxvQkFBb0IsQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3RELG9CQUFvQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFN0IsVUFBVSxDQUFDO1lBQ1AsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFUyw0Q0FBZ0IsR0FBMUIsVUFBMkIsUUFBeUI7UUFDaEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QixVQUF1QixTQUFpQixFQUFFLGFBQW9CLEVBQUUsV0FBa0IsRUFBRSxJQUFxQjtRQUEvRCxvREFBb0I7UUFBRSxnREFBa0I7UUFBRSxtQ0FBcUI7UUFDckcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksV0FBVyxFQUFFO1lBQ2IsYUFBYSxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ3pELElBQUksV0FBVyxFQUFFO2dCQUNiLFdBQVcsRUFBRSxDQUFDO2FBQ2pCO1lBRUQsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sNkNBQWlCLEdBQXhCLFVBQXlCLFNBQWlCLEVBQUUsYUFBb0IsRUFBRSxXQUFrQixFQUFFLElBQXFCLEVBQUUsS0FBaUIsRUFBRSxzQkFBc0M7UUFBMUgsb0RBQW9CO1FBQUUsZ0RBQWtCO1FBQUUsbUNBQXFCO1FBQUUsaUNBQWlCO1FBQUUsc0VBQXNDO1FBQ2xLLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFN0IsSUFBSSxhQUFhLEVBQUU7WUFDZixhQUFhLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtZQUM3RCxJQUFJLFdBQVcsRUFBRTtnQkFDYixXQUFXLEVBQUUsQ0FBQzthQUNqQjtZQUVELElBQUcsc0JBQXNCLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2FBQ25DO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR00sNENBQWdCLEdBQXZCO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFbEMsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsRUFBRTtZQUMzQyxJQUFJLE1BQUksR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkIsTUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQixNQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsTUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUNsRixNQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDaEMsTUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLE1BQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixNQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwQixNQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFTSw2Q0FBaUIsR0FBeEI7UUFDSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVsQyxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDMUIsSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXBCLE1BQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO2dCQUN4RixNQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsTUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUcsTUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDYixNQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDNUI7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVNLDZDQUFpQixHQUF4QjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSxvREFBd0IsR0FBL0I7UUFDSSxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUM1QjthQUFNO1lBQ0gsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRU0sd0NBQVksR0FBbkI7UUFDSSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFckUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7SUFDdEQsQ0FBQztJQUFBLENBQUM7SUFJRixhQUFhO0lBQ0gsdUNBQVcsR0FBckIsY0FBeUIsQ0FBQztJQUFBLENBQUM7SUFDakIscUNBQVMsR0FBbkIsY0FBdUIsQ0FBQztJQUFBLENBQUM7SUFsTVgsZ0NBQWMsR0FBVSxLQUFLLENBQUM7SUFDOUIsaUNBQWUsR0FBVSxPQUFPLENBQUM7SUFDakMsd0NBQXNCLEdBQVUsbUJBQW1CLENBQUM7SUFDcEQscUNBQW1CLEdBQVUsUUFBUSxDQUFDO0lBQ3RDLHFDQUFtQixHQUFVLFVBQVUsQ0FBQztJQUN4QyxvQ0FBa0IsR0FBVSxTQUFTLENBQUM7SUFDdEMsb0NBQWtCLEdBQVUsU0FBUyxDQUFDO0lBNkx4RCx3QkFBQztDQUFBO0FBck1xQiw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIdkMsdUhBQXNEO0FBRXRELDZGQUF5QztBQUN6Qyx5R0FBaUQ7QUFDakQsMEZBQXFDO0FBRXJDO0lBQTZCLDJCQUFpQjtJQU0xQyxpQkFBWSxJQUFVLEVBQUUsU0FBaUIsRUFBRSxVQUFlO1FBQTFELFlBQ0ksa0JBQU0sVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FjL0I7UUFaRyxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDeEMsS0FBSSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFFcEIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEgsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqSSxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUNoRSxLQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlFLEtBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDOztJQUNwQyxDQUFDO0lBRU8sNEJBQVUsR0FBbEIsVUFBbUIsV0FBa0IsRUFBRSxRQUFlLEVBQUUsS0FBc0I7UUFDMUUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFL0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU8saUNBQWUsR0FBdkI7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRTtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQ3ZFLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUU7WUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFWixDQUFDO0lBRU8seUJBQU8sR0FBZjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUU7WUFDN0csSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUU7WUFDakYsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0saUNBQWUsR0FBdEI7UUFDSSxJQUFJLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRTtZQUN2QyxhQUFhLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQ3pEO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFOUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZGLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVFLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxtQ0FBbUM7UUFDM0YsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7UUFDNUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7UUFDOUQsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkQsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkQsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDekIsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDekIsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDN0IsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDN0IsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDM0IsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO1FBQy9ELFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNyQyxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM1QixVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM1QixVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN6QixVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbkIsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZGLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdFLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEQsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUQsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RCxXQUFXLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMxQixXQUFXLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN4QixXQUFXLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM5QixXQUFXLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM5QixXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM1QixXQUFXLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7UUFDaEUsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRCxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFELFdBQVcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN0QyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM3QixXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUM3QixXQUFXLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMxQixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFcEIsVUFBVSxDQUFDO1lBQ1AsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixVQUFVLENBQUM7WUFDUCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUViLENBQUM7SUFFRCw2QkFBVyxHQUFYLFVBQVksWUFBWTtRQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxJQUFJLFFBQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFFaEQsVUFBVSxDQUFDO2dCQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBTSxDQUFDLENBQUM7Z0JBQ3hCLFVBQVUsQ0FBQztvQkFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMvQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRVIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN0QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7aUJBQzFCO2dCQUVELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNoRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FFWDtJQUNMLENBQUM7SUFFUyw2QkFBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVTLDJCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQ0FyTTRCLHFDQUFpQixHQXFNN0M7QUFyTVksMEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMcEIsdUhBQXNEO0FBQ3RELGlIQUF1RDtBQUN2RCxtR0FBOEM7QUFFOUMsNEZBQXlDO0FBQ3pDLHlHQUFpRDtBQUNqRCxxSEFBMkQ7QUFDM0QsNkZBQXlDO0FBQ3pDLDhFQUFpQztBQUNqQyw2SEFBNkQ7QUFDN0QsMEZBQXFDO0FBRXJDO0lBQTRCLDBCQUFpQjtJQXdCekMsZ0JBQW1CLElBQVUsRUFBRSxjQUF1QixFQUFFLFVBQWU7UUFBdkUsWUFDSSxrQkFBTSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FtQzVDO1FBdERNLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFheEIsc0JBQWdCLEdBQW1CLEVBQUUsQ0FBQztRQVF6QyxLQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsS0FBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzVDLEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBRXJDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLEtBQUksQ0FBQyxnQkFBZ0IsQ0FDakIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQzNGLENBQUM7UUFDRixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUNoRSxLQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9FLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsQ0FBQztRQUMzQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZELElBQUksS0FBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxLQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNoQyxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOztJQUM5QixDQUFDO0lBRU8sK0JBQWMsR0FBdEIsVUFBdUIsVUFBVTtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDeEQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUM7UUFDM0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RSxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUVPLGtDQUFpQixHQUF6QjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBTSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUN2RCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDN0IsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDN0IsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUM1QixXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQzVCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUvQixjQUFjO1FBQ2QsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFTywyQkFBVSxHQUFsQjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFeEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVPLHdCQUFPLEdBQWY7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFO1lBQ2xILElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUU7WUFDN0csSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkJBQVUsR0FBakI7UUFDSSxlQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx1Q0FBc0IsR0FBN0IsVUFBOEIsZ0JBQWdCO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFFTSxtQ0FBa0IsR0FBekIsVUFBMEIsTUFBTTtRQUM1QixNQUFNLEdBQUc7WUFDTDtnQkFDSSxJQUFJLEVBQUUsQ0FBQzthQUNWO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7YUFDVjtZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2FBQ1Y7WUFDRDtnQkFDSSxJQUFJLEVBQUUsQ0FBQzthQUNWO1NBQUMsQ0FBQztRQUNQLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBSztnQkFDaEIsSUFBSSxXQUFXLEdBQUcsNkJBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUM7WUFDckQsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxrQ0FBaUIsR0FBeEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3RCLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2YsT0FBTzthQUNWO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNsQjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTSxnQ0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR00sc0NBQXFCLEdBQTVCO1FBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sdUNBQXNCLEdBQTdCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsR0FBRyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztJQUN2RixDQUFDO0lBRU0sbUNBQWtCLEdBQXpCO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUM5RyxDQUFDO0lBRU0sK0JBQWMsR0FBckI7UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDekQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ2xHLENBQUM7SUFFTSw4QkFBYSxHQUFwQixVQUFxQixTQUFpQixFQUFFLHFCQUE2QjtRQUNqRSxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcscUJBQXFCLENBQUM7UUFFbkQsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLDBCQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhGLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sb0NBQW1CLEdBQTFCLFVBQTJCLGtCQUFrQjtRQUN6QyxJQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO1lBQ3pCLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsZUFBZSxHQUFHO1lBQ25CLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFFekUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUN6QjthQUNKO2lCQUFNO2dCQUNILElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzdCLElBQUksUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUNwSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQzNCO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QyxJQUFHLEtBQUssRUFBRTtZQUNOLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDcEQ7SUFDTCxDQUFDO0lBRU0sNENBQTJCLEdBQWxDLFVBQW1DLFlBQXFCO1FBQ3BELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFNBQVMsSUFBSSxLQUFLLEVBQUU7WUFDN0MsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUN0RDtRQUVELElBQUksWUFBWSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDakQsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUTthQUN0QyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFUyw0QkFBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVTLDBCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUwsYUFBQztBQUFELENBQUMsQ0ExUjJCLHFDQUFpQixHQTBSNUM7QUExUlksd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibkIsd0hBQXVEO0FBRXZELHNHQUFpRDtBQUNqRCx3SEFBMkQ7QUFDM0QsMEZBQXFDO0FBRXJDO0lBQTBDLCtCQUFpQjtJQU9uRCxxQkFBbUIsSUFBUyxFQUFFLElBQUksRUFBRSxRQUF5QixFQUFFLFFBQXlCO1FBQXhGLFlBQ0ksa0JBQU0sSUFBSSxFQUFFLElBQUksQ0FBQyxTQXVCcEI7UUF0QkcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFFdEMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDO1FBQ2hCLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM5QixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFOUIsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUNqRixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFNUIsS0FBSSxDQUFDLFVBQVUsR0FBRztZQUNkLEtBQUssRUFBRSxJQUFJO1lBQ1gsRUFBRSxFQUFFLElBQUk7U0FDWCxDQUFDO1FBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQzFHO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFUixLQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFDM0c7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBQ1osQ0FBQztJQUVNLHFDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSSw4QkFBUSxHQUFmLFVBQWdCLGNBQXdCO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFaEQsSUFBRyxjQUFjLEVBQUU7WUFDZixJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLFdBQVcsQ0FBQyxnQ0FBZ0MsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUV0RjtJQUNMLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQ0FuRHFDLHFDQUFpQixHQW1EdEQ7QUFuRGlCLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmpDLHlHQUEwQztBQUkxQztJQUEyQix5QkFBVztJQUVsQyxlQUFtQixJQUFVLEVBQUUsUUFBeUIsRUFBRSxRQUF5QjtRQUFuRixpQkFrQ0M7UUFqQ0csYUFBYTtRQUNiLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVoRiwwQkFBTSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsU0FBQztRQUV6QyxJQUFJLEtBQUssR0FBRztZQUNSO2dCQUNJLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixLQUFLLEVBQUUsQ0FBQzthQUNYO1lBQ0Q7Z0JBQ0ksUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLEtBQUssRUFBRSxDQUFDO2FBQ1g7WUFDRDtnQkFDSSxRQUFRLEVBQUUsY0FBYztnQkFDeEIsS0FBSyxFQUFFLENBQUM7YUFDWDtZQUNEO2dCQUNJLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixLQUFLLEVBQUUsQ0FBQzthQUNYO1lBQ0Q7Z0JBQ0ksUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsS0FBSyxFQUFFLENBQUM7YUFDWDtZQUNEO2dCQUNJLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixLQUFLLEVBQUUsQ0FBQzthQUNYO1NBQ0osQ0FBQztRQUNGLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBRXpCLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FBQyxDQXRDMEIseUJBQVcsR0FzQ3JDO0FBdENZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmxCLHdIQUF1RDtBQUN2RCxzR0FBaUQ7QUFFakQsd0hBQTJEO0FBQzNELDBGQUFxQztBQUVyQztJQUE2QiwyQkFBaUI7SUFNMUMsaUJBQW1CLElBQVUsRUFBRSxLQUFhLEVBQUUsY0FBYztRQUE1RCxZQUNJLGtCQUFNLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FzQnpCO1FBckJHLEtBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLEVBQUUsQ0FBQztRQUVsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEMsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLE1BQU07U0FDYjtRQUNELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7O0lBQzNCLENBQUM7SUFFTSwwQkFBUSxHQUFmLFVBQWdCLGNBQWtCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFaEQsSUFBSSxjQUFjLEVBQUU7WUFDaEIsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxXQUFXLENBQUMsZ0NBQWdDLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FFdEY7SUFDTCxDQUFDO0lBRUQsaUNBQWUsR0FBZjtJQUNBLENBQUM7SUFFUyxpQ0FBZSxHQUF6QjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXBCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLEVBQUU7WUFDdkUsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDO1NBQ1YsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLElBQUksT0FBTyxHQUFHO1lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDekIsSUFBSSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsRUFBRSxFQUFFLG9CQUFvQixDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUM5SSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUVuQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQ3ZFLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQzFDO1lBQ0ksVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO29CQUMzRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO29CQUU5QixJQUFJLFVBQVUsRUFBRTt3QkFDWixPQUFPLEVBQUUsQ0FBQztxQkFDYjt5QkFBTTt3QkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMscUNBQWlCLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ3JGO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLENBQUMsQ0FDTCxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUN2RSxPQUFPLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUN6QztZQUNJLE9BQU8sRUFBRSxDQUFDO1lBQ1YsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FDTCxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUN2RSxPQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUN2QztZQUNJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1YsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4RTtRQUNMLENBQUMsQ0FBQyxDQUNMLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQ3ZFLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQ3RDO1lBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDdkUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQ25DO1lBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxDQWpJNEIscUNBQWlCLEdBaUk3QztBQWpJWSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7O0FDTHBCLHdJQUFtRTtBQUNuRSwwRkFBcUM7QUFFckM7SUFNSSxlQUFZLElBQVU7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLGdDQUFnQixHQUF2QixVQUF3QixLQUFvQjtRQUN4QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBTSxtQkFBbUIsR0FBRywrQkFBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvRCxLQUFLLENBQUMsV0FBVyxHQUFHLFVBQVUsR0FBRyxFQUFFLFVBQVU7WUFDekMsSUFBSSxZQUFZLEVBQUU7Z0JBQ2QsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztnQkFDdkMsSUFBSSxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDdkQsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQy9CO2FBQ0o7UUFDTCxDQUFDO1FBRUQsS0FBSyxDQUFDLGFBQWEsR0FBRyxVQUFVLEdBQUcsRUFBRSxVQUFVO1lBQzNDLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7Z0JBQzlELE9BQU87YUFDVjtZQUNELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDdkQsS0FBSyxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRXhFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtnQkFFdEgsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUNqRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVc7aUJBQzdCLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsS0FBSyxDQUFDLGFBQWEsR0FBRyxVQUFVLEdBQUcsRUFBRSxVQUFVO1lBQzNDLElBQUksWUFBWSxFQUFFO2dCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQzNCLE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztnQkFDdkMsSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDaEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3ZCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRTdGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFFdkQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTs0QkFDakQsVUFBVSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQzs0QkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQ0FDakQsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXOzZCQUM3QixDQUFDLENBQUM7eUJBQ047cUJBQ0o7aUJBQ0o7YUFDSjtRQUNMLENBQUMsQ0FBQztJQUVOLENBQUM7SUFHTCxZQUFDO0FBQUQsQ0FBQztBQTdFWSxzQkFBSzs7Ozs7Ozs7Ozs7Ozs7O0FDSGxCLDBGQUFxQztBQUVyQztJQUFBO0lBNkRBLENBQUM7SUE1RGlCLG1CQUFZLEdBQTFCLFVBQTJCLElBQVUsRUFBRSxJQUEwQjtRQUM3RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWxFLElBQUksWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLElBQUksV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRSxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM1QixZQUFZLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN6QixZQUFZLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQztRQUMzQyxZQUFZLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztRQUMxQyxZQUFZLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztRQUUxQyxZQUFZLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUMvQixZQUFZLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUVyQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RCxHQUFHLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM1QixHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUVsQixJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JKLE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDckMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0QsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdkIsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDdkIsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbkIsT0FBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFFdEIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksZUFBZSxDQUFDO1FBQ3BCLElBQU0sVUFBVSxHQUFHO1lBQ2YsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztZQUN0QixPQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFcEUsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDM0MsZUFBZSxHQUFHLFVBQVUsQ0FBQztvQkFDekIsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1o7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDYixPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztnQkFDdkIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEIsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNkLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDNUM7YUFDSjtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO2dCQUM5QixPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQzthQUMxQjtRQUNMLENBQUMsQ0FBQztRQUNGLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7QUE3RFksd0JBQU07Ozs7Ozs7Ozs7Ozs7OztBQ0huQixrSEFBc0Q7QUFDdEQsMEZBQXFDO0FBRXJDO0lBT0k7UUFDSSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFUyxnREFBa0IsR0FBNUIsVUFBNkIsS0FBb0I7UUFDN0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRyxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0QixLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUV2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRVMsK0NBQWlCLEdBQTNCLFVBQTRCLEtBQW9CO1FBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsdUJBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUM7U0FDcEQ7SUFDTCxDQUFDO0lBRVMsNkNBQWUsR0FBekIsVUFBMEIsS0FBb0I7UUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDOUIsU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLHNEQUFzRCxDQUFDO1NBRzNHO0lBQ0wsQ0FBQztJQUdMLDBCQUFDO0FBQUQsQ0FBQztBQXhDcUIsa0RBQW1COzs7Ozs7Ozs7Ozs7Ozs7QUNIekMsMEZBQXFDO0FBRXJDO0lBQUE7SUFlQSxDQUFDO0lBZFUsVUFBTSxHQUFiLFVBQWMsS0FBSztRQUNmLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDN0MsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUVyQixLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVsQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sY0FBVSxHQUFqQixVQUFrQixLQUFtQjtRQUNqQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQy9DLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQztBQWZZLGtCQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmhCLDhIQUEwRDtBQUUxRCx3SUFBK0Q7QUFDL0QsdUpBQXlFO0FBQ3pFLDRJQUFvRDtBQUNwRCwwRkFBcUM7QUFFckM7SUFBNEMsMENBQW1CO0lBRTNELGdDQUFZLElBQVU7UUFBdEIsWUFDSSxpQkFBTyxTQTRIVjtRQTNIRyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDO1FBQ2hCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxTQUFTLEdBQWtCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV2QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0QsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBRWhDLEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUV4QixJQUFJLGVBQWUsR0FBRyxJQUFJLHFDQUFlLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3BFLGVBQWUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2xFLGVBQWUsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2dCQUNuQyxlQUFlLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyx3Q0FBd0MsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbEcsZUFBZSxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsMERBQTBELEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3pILGVBQWUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNwRyxlQUFlLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNyRixlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ3JGLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDckYsU0FBUyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7YUFDeEM7aUJBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDekMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEM7aUJBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1QjtpQkFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pELFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDN0I7aUJBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDM0MsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM3QjtpQkFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNILFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7UUFFRCxZQUFZO1FBQ1osSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRixNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXpCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEcsWUFBWSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDNUIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUUvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRixLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNyQixLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXhCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO1lBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNELFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUztZQUNqQyxJQUFJLFNBQVMsR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqRSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVM7WUFDakMsSUFBSSxTQUFTLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO1lBQy9CLElBQUksU0FBUyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3pELFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELElBQUksY0FBYyxHQUFHLElBQUkseUJBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWYsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRyxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0QixLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN2QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUduQixxQkFBcUI7UUFDckIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUIsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3hFLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQztRQUNILElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsZ0NBQWdDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUM3RSxJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTSxFQUFFLEdBQUc7U0FDZCxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXRDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7O0lBQ3ZELENBQUM7SUFFRCw4Q0FBYSxHQUFiLFVBQWMsS0FBb0I7SUFDbEMsQ0FBQztJQUlMLDZCQUFDO0FBQUQsQ0FBQyxDQXRJMkMseUNBQW1CLEdBc0k5RDtBQXRJWSx3REFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQbkMsOEhBQTBEO0FBRTFELDBGQUFxQztBQUVyQztJQUFpRCwrQ0FBbUI7SUFFaEUscUNBQVksSUFBVTtRQUF0QixZQUNJLGlCQUFPLFNBaUNWO1FBaENHLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXZDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzRCxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzthQUNuQztpQkFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDSCxTQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDN0IsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1QztTQUNKO1FBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUIsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3hFLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBRUQsbURBQWEsR0FBYixVQUFjLEtBQW9CO0lBQ2xDLENBQUM7SUFJTCxrQ0FBQztBQUFELENBQUMsQ0EzQ2dELHlDQUFtQixHQTJDbkU7QUEzQ1ksa0VBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHhDLDhIQUEwRDtBQUMxRCxrSEFBc0Q7QUFDdEQsMEZBQXFDO0FBRXJDO0lBQWdELDhDQUFtQjtJQUkvRCxvQ0FBWSxJQUFVLEVBQUUsS0FBb0I7UUFBNUMsWUFDSSxpQkFBTyxTQTBDVjtRQXpDRyxJQUFJLElBQUksR0FBRyxLQUFJLENBQUM7UUFDaEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksU0FBUyxHQUFrQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNELFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxvQkFBb0I7Z0JBQ3BCLGtEQUFrRDtnQkFDbEQsa0RBQWtEO2dCQUVsRCxLQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQzthQUUzQjtpQkFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUV6QyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUVsQztpQkFBTTtnQkFDSCxTQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUNoQztTQUNKO1FBR0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRyxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0QixLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpELHFCQUFxQjtRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxpQkFBaUIsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLHVCQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsdUNBQXVDO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDdkM7O0lBQ0wsQ0FBQztJQUVELGtEQUFhLEdBQWIsVUFBYyxLQUFvQjtJQUNsQyxDQUFDO0lBSUwsaUNBQUM7QUFBRCxDQUFDLENBdEQrQyx5Q0FBbUIsR0FzRGxFO0FBdERZLGdFQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x2Qyw4SEFBMEQ7QUFFMUQsMEZBQXFDO0FBQ3JDLDRJQUFvRDtBQUVwRDtJQUE4Qyw0Q0FBbUI7SUFJN0Qsa0NBQVksSUFBVTtRQUF0QixZQUNJLGlCQUFPLFNBMkRWO1FBMURHLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNyQyxLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0QsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLFNBQVMsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM7Z0JBQzFDLElBQUksZUFBZSxHQUFHLElBQUkscUNBQWUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDcEUsZUFBZSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbEUsZUFBZSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7Z0JBQ25DLGVBQWUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLHlDQUF5QyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuRyxlQUFlLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQywwREFBMEQsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekgsZUFBZSxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3BHLGVBQWUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLDBEQUEwRCxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN6SCxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ3JGLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDckYsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNyRixTQUFTLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQzthQUN4QztpQkFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDSCxTQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFFN0IsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDOUIsU0FBUztpQkFDWjtnQkFFRCxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7UUFFRCxtREFBbUQ7UUFDbkQsY0FBYztRQUNkLGlGQUFpRjtRQUNqRiwyQkFBMkI7UUFDM0IsRUFBRTtRQUNGLCtFQUErRTtRQUMvRSwwQkFBMEI7UUFDMUIsRUFBRTtRQUNGLGdJQUFnSTtRQUNoSSx1Q0FBdUM7UUFDdkMsSUFBSTtRQUVKLHlCQUF5QjtRQUN6QiwwQ0FBMEM7UUFFMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRyxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0QixLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN2QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFDaEMsQ0FBQztJQUVELGdEQUFhLEdBQWIsVUFBYyxLQUFvQjtJQUNsQyxDQUFDO0lBR0wsK0JBQUM7QUFBRCxDQUFDLENBdEU2Qyx5Q0FBbUIsR0FzRWhFO0FBdEVZLDREQUF3Qjs7Ozs7Ozs7Ozs7Ozs7O0FDSnJDLHdIQUEyRDtBQUMzRCxxSEFBeUQ7QUFDekQsMEZBQXFDO0FBRXJDO0lBSUksb0NBQVksSUFBUyxFQUFFLEtBQW9CO1FBQ3ZDLFNBQVM7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQixJQUFJLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckcsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxjQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUUxQixJQUFJLGtCQUFrQixHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FDMUMsb0JBQW9CLEVBQ3BCLFdBQVcsRUFDWCxFQUFFLEVBQ0YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9DLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUN2QjtnQkFDSSxLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsSUFBSTthQUNkO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLEdBQUc7YUFDYjtZQUNEO2dCQUNJLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxJQUFJO2FBQ2Q7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFJLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQ3RDLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsRUFBRSxFQUNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQ3JDLE9BQU8sQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMvQyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQ25CO2dCQUNJLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckM7WUFDRDtnQkFDSSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3JDO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNyQztTQUNKLENBQUMsQ0FBQztRQUVILGNBQWMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQy9CLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3hFLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBRXZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNELFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxpQkFBaUI7Z0JBQ2pCLDBFQUEwRTtnQkFDMUUsU0FBUzthQUNaO1lBQ0QsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FFN0Q7UUFFRCxJQUFJLElBQUksR0FBa0IsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLElBQUksRUFBRTtZQUNOLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksV0FBVyxHQUFHLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ2hFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVwQixJQUFJLFVBQVUsR0FBRyxJQUFJLDZCQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUM5RCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFbkIsSUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSw2QkFBNkIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN6SCxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDOUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDaEM7UUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLCtCQUErQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFL0gsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0FBQztBQWxHWSxnRUFBMEI7Ozs7Ozs7Ozs7Ozs7OztBQ0x2QztJQUtJO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBTk0sdUJBQWdCLEdBQUcsaUJBQWlCLENBQUM7SUFPaEQsYUFBQztDQUFBO0FBUlksd0JBQU07Ozs7Ozs7Ozs7Ozs7OztBQ0NuQixnSEFBc0Q7QUFDdEQsZ0hBQXNEO0FBQ3RELCtIQUFnRTtBQUNoRSwwR0FBa0Q7QUFDbEQsK0VBQWdDO0FBQ2hDLDhGQUF3QztBQUN4QyxvR0FBNEM7QUFDNUMsdUdBQThDO0FBQzlDLGtIQUFxRDtBQUdyRDtJQWFRLGNBQVksSUFBVTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLHNDQUFzQixDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkscUNBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksK0NBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGlDQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUwsV0FBQztBQUFELENBQUM7QUE5QlEsb0JBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ1hqQixrSEFBaUY7QUFFakY7SUFPSSwyQkFBWSxJQUFVO1FBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUUvQixJQUFJLFNBQVMsR0FBRyxJQUFJLHlCQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsRCxTQUFTLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUNwRSxTQUFTLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUNoRSxTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMxQixTQUFTLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBSyxDQUFDLDBCQUEwQixFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDOUUsT0FBTyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDOUQsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDeEIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5QixJQUFJLGdCQUFnQixHQUFHLElBQUkseUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELGdCQUFnQixDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDM0UsZ0JBQWdCLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUNwRSxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDakMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3pDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDL0IsU0FBUyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXZDLElBQUksVUFBVSxHQUFHLElBQUkscUJBQUssQ0FBQywwQkFBMEIsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3JGLFVBQVUsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQzlELFVBQVUsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ25FLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzNCLFVBQVUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV4QyxJQUFJLFlBQVksR0FBRyxJQUFJLHlCQUFTLEVBQUUsQ0FBQztRQUNuQyxZQUFZLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUNoRSxZQUFZLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUNyRSxZQUFZLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUMxQixZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN2QixZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM3QixZQUFZLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM3QixZQUFZLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUMzQixZQUFZLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztRQUUxQyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztRQUMvQixnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUMsSUFBSSxZQUFZLEdBQUcsSUFBSSxvQkFBSSxFQUFFLENBQUM7UUFDOUIsWUFBWSxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDbkUsWUFBWSxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDdkUsWUFBWSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDN0IsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDN0IsWUFBWSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDMUIsWUFBWSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDMUIsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFNBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFFbEMsSUFBSSxnQkFBZ0IsR0FBRyxzQkFBTSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFDOUcsZ0JBQWdCLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUN6RSxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDakMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMvQixnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQzlCLGdCQUFnQixDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDL0IsU0FBUyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM5QjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxZQUFZLEdBQUcsc0JBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQUNsRyxZQUFZLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUNyRSxZQUFZLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM3QixZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM3QixZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQixZQUFZLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUMxQixZQUFZLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUMzQixTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksZUFBZSxHQUFHLHNCQUFNLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLGtDQUFrQyxDQUFDLENBQUM7UUFDeEcsZUFBZSxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDeEUsZUFBZSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDaEMsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDaEMsZUFBZSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDOUIsZUFBZSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDN0IsZUFBZSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDL0IsU0FBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0QyxlQUFlLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzdCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLGFBQWEsR0FBRyxzQkFBTSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BHLGFBQWEsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ3RFLGFBQWEsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzlCLGFBQWEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzlCLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLGFBQWEsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQzNCLGFBQWEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQzdCLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDM0I7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFeEMsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQztBQS9IWSw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7OztBQ0Q5QixrSEFBd0U7QUFFeEU7SUFRUSwyQkFBWSxNQUFjLEVBQUUsSUFBVTtRQUNsQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFFbEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxvQkFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFFLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN6QixRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksS0FBSyxHQUFHLElBQUkscUJBQUssQ0FBQyxLQUFLLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUN2RCxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNyQixLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixLQUFLLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUN6RCxLQUFLLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7UUFDNUIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDekQsS0FBSyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDOUQsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1FBQ25DLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3QixJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFLLENBQUMsMEJBQTBCLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUNuRixTQUFTLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUM3RCxTQUFTLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUNsRSxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNwQixTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMxQixTQUFTLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFakMsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7UUFDbEMsV0FBVyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDL0QsV0FBVyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDdEUsV0FBVyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDekIsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDdEIsV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDNUIsV0FBVyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDNUIsV0FBVyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDMUIsV0FBVyxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFFekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5DLElBQUksYUFBYSxHQUFHLElBQUkscUJBQUssQ0FBQywwQkFBMEIsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBQzNGLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2pFLGFBQWEsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ3RFLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLGFBQWEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzlCLGFBQWEsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyQyxJQUFJLGlCQUFpQixHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO1FBQ3hDLGlCQUFpQixDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDckUsaUJBQWlCLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUM1RSxpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQy9CLGlCQUFpQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDNUIsaUJBQWlCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNsQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDaEMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztRQUUvQyxJQUFJLENBQUMsYUFBYSxHQUFHLGlCQUFpQixDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUM7QUFuRlEsOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUNIOUIsa0hBQXFGO0FBRXJGO0lBS0ksZ0NBQVksSUFBVTtRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3BDLENBQUM7SUFFTSx5Q0FBUSxHQUFmLFVBQWdCLFNBQVM7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLDRCQUE0QixHQUFHLElBQUksMEJBQVUsRUFBRSxDQUFDO1FBQ3BELDRCQUE0QixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDM0MsNEJBQTRCLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUN0Qyw0QkFBNEIsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2hGLDRCQUE0QixDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMEJBQTBCLENBQUM7UUFDdEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLDRCQUE0QixDQUFDO1FBRTdDLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO1FBQzVCLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ3pELEtBQUssQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUM3QixLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNqQixLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN2QixLQUFLLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztRQUNuQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsV0FBVztZQUNsRixJQUFJLHNCQUFzQixHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO1lBQzdDLHNCQUFzQixDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDMUUsc0JBQXNCLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDL0Msc0JBQXNCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUMxQyxzQkFBc0IsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3ZDLHNCQUFzQixDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7WUFDcEQsc0JBQXNCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztZQUNsQyxzQkFBc0IsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsNkJBQUM7QUFBRCxDQUFDO0FBL0NZLHdEQUFzQjs7Ozs7Ozs7Ozs7Ozs7O0FDRm5DLGtIQUFxRjtBQUVyRjtJQU1JLDJCQUFZLElBQVU7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUVoQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxxQkFBcUIsR0FBRyxJQUFJLDBCQUFVLEVBQUUsQ0FBQztRQUM3QyxxQkFBcUIsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLHFCQUFxQixDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDL0IscUJBQXFCLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUM7SUFFMUMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG1DQUFPLEdBQWQsVUFBZSxPQUFlLEVBQUUsS0FBdUI7UUFBdkIsdUNBQXVCO1FBQ25ELElBQUksSUFBSSxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1FBQ2xDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixVQUFVLENBQUM7WUFDUCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9DLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUM7QUE5Q1ksOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUNGOUIsa0hBQTBFO0FBRTFFO0lBS1EseUJBQVksSUFBVTtRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBRWhDLElBQUksb0JBQW9CLEdBQUcsSUFBSSwwQkFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUQsb0JBQW9CLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQyxvQkFBb0IsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQzlCLG9CQUFvQixDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDL0Isb0JBQW9CLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0Msb0JBQW9CLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUN4RSxvQkFBb0IsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQzdFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQUN6QyxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDO0FBcEJRLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNGNUIsa0hBQTRGO0FBRTVGO0lBR0kseUJBQVksSUFBVTtRQUNsQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLElBQUksT0FBTyxHQUFHLHNDQUFzQixDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksU0FBUyxHQUFHLElBQUkseUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xELFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDO1FBQ3BFLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ2hFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDbEMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QixJQUFJLHFCQUFxQixHQUFHLHNCQUFNLENBQUMsK0JBQStCLENBQUMseUJBQXlCLEVBQUUsa0JBQWtCLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUNsSixxQkFBcUIsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDO1FBQ2hGLHFCQUFxQixDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDNUUscUJBQXFCLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNsQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDcEMscUJBQXFCLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QyxxQkFBcUIsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLFNBQVMsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM1QyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7WUFDNUMsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNqQyxJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDbkU7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksS0FBSyxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO1FBQzVCLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ3pELEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzNCLEtBQUssQ0FBQyxlQUFlLEdBQUcsZ0NBQWdDLENBQUM7UUFDekQsS0FBSyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztRQUNqQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUM7QUE5Q1ksMENBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ0Q1QixrSEFBNkY7QUFFN0Y7SUFPSSxnQkFBWSxJQUFVO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDcEMsQ0FBQztJQUVNLGdDQUFlLEdBQXRCLFVBQXVCLFNBQTRCO1FBQy9DLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksY0FBYyxHQUFHLElBQUksMEJBQVUsRUFBRSxDQUFDO1FBQ3RDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGNBQWMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLGNBQWMsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXhDLElBQUksU0FBUyxHQUFHLElBQUkseUJBQVMsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDMUIsU0FBUyxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFFdkMsU0FBUyxDQUFDLHFCQUFxQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFFakUsSUFBSSxRQUFRLEdBQUcsSUFBSSxzQkFBTSxFQUFFLENBQUM7UUFDNUIsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDckIsUUFBUSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUM5QyxRQUFRLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBRXRCLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sNEJBQVcsR0FBbEIsVUFBbUIsWUFBb0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxjQUFjLEdBQUcsSUFBSSwwQkFBVSxFQUFFLENBQUM7UUFDdEMsY0FBYyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDN0IsY0FBYyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDeEIsY0FBYyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSx5QkFBUyxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxxQkFBcUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBRWpFLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLDZCQUFZLEdBQW5CO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUFFTSwwQkFBUyxHQUFoQjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQztBQWxGWSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDSm5CLGtIQUFvRjtBQUVwRjtJQUlJLHVCQUFZLFdBQW1DLEVBQUUsSUFBWSxFQUFFLGNBQStCO1FBQzFGLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxLQUFLLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsS0FBSyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzlCLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzNCLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQzlELEtBQUssQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ3pELEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDbkMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNsQyxLQUFLLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM3QixLQUFLLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM5QixLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNsQixLQUFLLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7UUFDNUIsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDekIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsS0FBSyxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFDbkMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDO0FBL0JZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7QUNGMUIsNkdBQThDO0FBSTlDO0lBQUE7SUFzQkEsQ0FBQztJQXBCVSxnREFBa0MsR0FBekMsVUFBMEMsT0FBK0IsRUFBRSxJQUFVLEVBQUUsTUFBZSxFQUFFLFlBQVk7UUFDaEgsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUM7WUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQzdGO1lBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ3BEO1lBRUQsYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFHLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQztZQUM5QixhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDO0FBdEJZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7QUNKMUIsa0hBQTJFO0FBRzNFO0lBSUkscUJBQVksSUFBMEIsRUFBRSxJQUFZLEVBQUUsV0FBeUI7UUFBekIsNkNBQXVCLEVBQUU7UUFDM0UsSUFBSSxlQUFlLEdBQUcsc0NBQXNCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEUsZUFBZSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBRWpDLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMzQixLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QixLQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ25DLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDbEMsS0FBSyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDN0IsS0FBSyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDOUIsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDbEIsZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQyxJQUFJLEtBQUssR0FBRyxJQUFJLHlCQUFTLEVBQUUsQ0FBQztRQUM1QixLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN6QixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFLLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztRQUNuQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsS0FBSyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDcEMsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQztBQS9CWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h4QixrRkFBOEI7QUFFOUIsa0hBQXFFO0FBRXJFO0lBQWdDLDhCQUFLO0lBRWpDLG9CQUFZLE9BQWE7UUFBekIsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FJakI7UUFIRyxLQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztRQUN6QixLQUFJLENBQUMsUUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBQ3pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQzs7SUFDeEQsQ0FBQztJQUVNLHlCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sMEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVTLDZCQUFRLEdBQWxCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSwwQkFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDL0MsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM5QixLQUFLLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUN6RCxLQUFLLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUNoRSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNoQixLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNuQixLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUVsQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRSxjQUFjLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMvQixjQUFjLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM3QixjQUFjLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMzRSxhQUFhLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM5QixhQUFhLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM1QixhQUFhLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN4QixhQUFhLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV6RixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtZQUMvQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEdBQUcseUJBQXlCLENBQUMsQ0FBQztZQUM5SCxjQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUM3QixjQUFjLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUU3QixLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxjQUFjLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMvQixjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QixjQUFjLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM3QixjQUFjLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUMvQixLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZKLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RixLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTlCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0RyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRWxDLENBQUM7SUFFUywrQkFBVSxHQUFwQixVQUFxQixJQUFZO1FBQzdCLElBQUksU0FBUyxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO1FBQ2hDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzdCLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDO1FBRXBFLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFUyxvQ0FBZSxHQUF6QixVQUEwQixJQUFZLEVBQUUsSUFBWSxFQUFFLE9BQW1CO1FBQ3JFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtZQUMvQyxJQUFJLE1BQU0sR0FBRyxzQkFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUMzRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN2QixNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNuQixNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUN2QixNQUFNLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztZQUNwQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTNCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDdkQsSUFBSSxFQUFFLElBQUk7aUJBQ2IsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FFTjthQUFNO1lBQ0gsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxDQXZIK0IsYUFBSyxHQXVIcEM7QUF2SFksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKdkIsa0ZBQThCO0FBSTlCLHlHQUEwQztBQUMxQyx5R0FBMEM7QUFDMUMseUdBQTBDO0FBQzFDLHNHQUF3QztBQUN4QyxzR0FBd0M7QUFDeEMsbUdBQXNDO0FBQ3RDLHVIQUF3RDtBQUN4RCxrSEFBc0g7QUFJdEg7SUFBK0IsNkJBQUs7SUFZaEMsbUJBQVksT0FBYTtRQUF6QixZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUdqQjtRQU5PLFdBQUssR0FBZ0MsRUFBRSxDQUFDO1FBSTVDLEtBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxRQUFRLEdBQUcsMEJBQTBCLENBQUM7O0lBQy9DLENBQUM7SUFFUywrQkFBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsc0NBQXNCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRXBDLElBQUksU0FBUyxHQUFHLElBQUkseUJBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ2hFLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDBCQUEwQixDQUFDO1FBQ25FLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBSyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxLQUFLLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywwQkFBMEIsQ0FBQztRQUMvRCxLQUFLLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUM1RCxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVCLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUM7UUFDOUIsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLEtBQUs7WUFDcEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFO2dCQUNkLFNBQVMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFDLElBQUksQ0FBQztnQkFDaEQsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLEdBQUMsSUFBSSxDQUFDO2FBQ3JEO2lCQUFNO2dCQUNILFNBQVMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUM7Z0JBQ2xELFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUM7YUFDdkQ7UUFDTCxDQUFDLENBQUM7UUFDRixrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzlCLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHdCQUFJLEdBQVg7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwyQ0FBdUIsR0FBOUI7UUFDSSxJQUFJLEtBQUssR0FBRyxzQkFBTSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLEVBQUUsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3pILEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQzVELEtBQUssQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDBCQUEwQixDQUFDO1FBQy9ELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpDLElBQUksTUFBTSxHQUFHLHNCQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsRUFBRSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUMsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDeEgsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdkIsTUFBTSxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDN0QsTUFBTSxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMEJBQTBCLENBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbEMsSUFBSSxNQUFNLEdBQUcsc0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUM3RixNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN2QixNQUFNLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUM3RCxNQUFNLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywwQkFBMEIsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QixLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QixLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN0QixLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVwQixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN2QixNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNyQixNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVyQixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN2QixNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN2QixNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0seUJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFUyxvQ0FBZ0IsR0FBMUI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sNkJBQVMsR0FBaEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUVuRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQy9DLElBQUksSUFBSSxHQUFHLElBQUksb0JBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUUsT0FBTyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ25CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNiLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUVSLENBQUM7WUFDTixJQUFJLGdCQUFnQixVQUFDO1lBQ3JCLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsS0FBd0IsVUFBWSxFQUFaLDZCQUFZLEVBQVosMEJBQVksRUFBWixJQUFZLEVBQUU7Z0JBQWpDLElBQUksV0FBVztnQkFDaEIsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO29CQUNyQixnQkFBZ0IsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLE1BQU07aUJBQ1Q7YUFDSjtZQUVELElBQUksZ0JBQWdCLEVBQUU7O2FBRXJCO1lBRUQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDcEIsR0FBRyxFQUFFLENBQUM7Z0JBQ04sT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1lBRUQsU0FBUyxFQUFFLENBQUM7WUFDWixPQUFPLEVBQUUsQ0FBQztZQUVWLElBQUksS0FBSyxHQUFHLHNCQUFNLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ3JILEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHlCQUF5QixDQUFDO1lBQzVELEtBQUssQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDBCQUEwQixDQUFDO1lBRS9ELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVyQyw2QkFBYSxDQUFDLGtDQUFrQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtnQkFDM0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQzs7UUFwQ1AsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBdEMsQ0FBQztTQXFDVDtRQUVELElBQUksaUJBQWlCLEdBQUcsVUFBVSxLQUFLO1lBQ25DLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztnQkFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7YUFDdEI7UUFDTCxDQUFDO1FBQ0QsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUM5QixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFUyx3Q0FBb0IsR0FBOUIsVUFBK0IsSUFBVTtRQUNyQyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekQ7Z0JBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO29CQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN6RDtnQkFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3ZEO2dCQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekQ7Z0JBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO29CQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4RDtnQkFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQyxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3hEO2dCQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxtQ0FBZSxHQUF0QixVQUF1QixJQUFVO1FBQzdCLElBQUksS0FBSyxHQUFHLElBQUkscUJBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDbEcsS0FBSyxDQUFDLE9BQU8sR0FBRyxxQkFBSyxDQUFDLGVBQWUsQ0FBQztRQUN0QyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFHTCxnQkFBQztBQUFELENBQUMsQ0FwUjhCLGFBQUssR0FvUm5DO0FBcFJZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnRCLGtHQUFrRDtBQUNsRCxrRkFBOEI7QUFFOUIsa0hBQThGO0FBRTlGO0lBQTZCLDJCQUFLO0lBRTFCLGlCQUFZLE9BQWE7UUFBekIsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FJakI7UUFIRyxLQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixLQUFJLENBQUMsUUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBQ3pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQzs7SUFDeEQsQ0FBQztJQUVNLHNCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sdUJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVTLDBCQUFRLEdBQWxCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSwwQkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDekQsS0FBSyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDaEUsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDbEIsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakIsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFL0IsSUFBTSxZQUFZLEdBQUcsSUFBSSw2QkFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELFlBQVksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxTQUFTO1lBQ2pELHFCQUFXLENBQUMsa0JBQWtCLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRCxZQUFZLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLFVBQUMsU0FBUztZQUNsRCxxQkFBVyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUdqRCxJQUFNLGlCQUFpQixHQUFHLElBQUksNkJBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBQyxTQUFTO1lBQy9DLHFCQUFXLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWxELGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsVUFBQyxTQUFTO1lBQzVDLHFCQUFXLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RCxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxTQUFTO1lBQ3RELHFCQUFXLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0Qyx5Q0FBeUM7UUFDekMsMkNBQTJDO1FBQzNDLDREQUE0RDtRQUM1RCxxRUFBcUU7UUFDckUsb0JBQW9CO1FBQ3BCLE1BQU07UUFDTixFQUFFO1FBQ0YsbURBQW1EO1FBQ25ELG9FQUFvRTtRQUNwRSw2RUFBNkU7UUFDN0Usb0JBQW9CO1FBQ3BCLE1BQU07UUFDTixFQUFFO1FBQ0YsaURBQWlEO1FBQ2pELGtFQUFrRTtRQUNsRSwrRUFBK0U7UUFDL0Usb0JBQW9CO1FBQ3BCLE1BQU07UUFDTixFQUFFO1FBQ0YsOENBQThDO1FBQzlDLCtEQUErRDtRQUMvRCw0RUFBNEU7UUFDNUUsb0JBQW9CO1FBQ3BCLE1BQU07UUFFTixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQUMsU0FBUztZQUM3QyxxQkFBVyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxVQUFDLFNBQVM7WUFDM0MscUJBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRDLElBQUksU0FBUyxHQUFHLElBQUksOEJBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzVFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVMLGNBQUM7QUFBRCxDQUFDLENBcEd3QixhQUFLLEdBb0c3QjtBQXBHUSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7O0FDSnBCLGtIQUF3RjtBQUV4RjtJQWNJLGVBQVksT0FBYTtRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRVMsMkJBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLHNDQUFzQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLFNBQVMsR0FBRyxJQUFJLHlCQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxTQUFTLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUM3RCxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QixTQUFTLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXRDLElBQUksS0FBSyxHQUFHLElBQUkscUJBQUssQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsS0FBSyxDQUFDLG1CQUFtQixHQUFHLHVCQUFPLENBQUMsMEJBQTBCLENBQUM7UUFDL0QsS0FBSyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFDNUQsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDaEIsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakIsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM5QixTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFFakMsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFekIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVTLGlDQUFpQixHQUEzQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLFdBQVcsR0FBRyxzQkFBTSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBQzlGLFdBQVcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQzVCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzVCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLFdBQVcsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQy9ELFdBQVcsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDBCQUEwQixDQUFDO1FBRXJFLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFL0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVTLDZCQUFhLEdBQXZCLFVBQXdCLElBQW9CO1FBQXBCLGtDQUFvQjtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRTtZQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekQ7SUFDTCxDQUFDO0lBR00sNEJBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7SUFNTCxZQUFDO0FBQUQsQ0FBQztBQTFGcUIsc0JBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIM0IsMkdBQXdDO0FBSXhDO0lBQTJCLHlCQUFVO0lBRWpDLGVBQVksU0FBb0I7UUFBaEMsWUFDSSxrQkFBTSxTQUFTLENBQUMsU0FVbkI7UUFSRyxLQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMzQixLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUV6QixLQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBRTFELEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDOztJQUNoQyxDQUFDO0lBRUwsWUFBQztBQUFELENBQUMsQ0FmMEIsdUJBQVUsR0FlcEM7QUFmWSxzQkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0psQiwyR0FBd0M7QUFJeEM7SUFBMkIseUJBQVU7SUFFakMsZUFBWSxTQUFvQjtRQUFoQyxZQUNJLGtCQUFNLFNBQVMsQ0FBQyxTQVVuQjtRQVJHLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzFCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBRXhCLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFMUQsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O0lBQ2hDLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FBQyxDQWYwQix1QkFBVSxHQWVwQztBQWZZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUNGbEIsMEhBQTJEO0FBQzNELGtIQUF3RDtBQUV4RDtJQWFJLG9CQUFZLFNBQW9CO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFUyx5Q0FBb0IsR0FBOUI7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLFdBQVMsR0FBRyxJQUFJLHlCQUFTLEVBQUUsQ0FBQztZQUNoQyxXQUFTLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztZQUNsRSxXQUFTLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ3JELFdBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLFdBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsQyxXQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEMsV0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLFdBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxXQUFTLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBRWxDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFTLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFbkIsSUFBSSxZQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNqQyxJQUFJLGFBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ25DLElBQUksVUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDN0IsSUFBSSxXQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMvQixJQUFJLG1CQUFpQixHQUFHLFVBQVUsS0FBSztnQkFDbkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFO29CQUNkLFdBQVMsQ0FBQyxLQUFLLEdBQUcsWUFBVSxDQUFDO29CQUM3QixXQUFTLENBQUMsTUFBTSxHQUFHLGFBQVcsQ0FBQztvQkFDL0IsV0FBUyxDQUFDLEdBQUcsR0FBRyxVQUFRLENBQUM7b0JBQ3pCLFdBQVMsQ0FBQyxJQUFJLEdBQUcsV0FBUyxDQUFDO2lCQUM5QjtxQkFBTTtvQkFDSCxXQUFTLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxZQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUNsRCxXQUFTLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUNwRCxXQUFTLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxVQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUM5QyxXQUFTLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxXQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUNuRDtZQUNMLENBQUMsQ0FBQztZQUNGLG1CQUFpQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO2dCQUM5QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUM5QixtQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVTLGdDQUFXLEdBQXJCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELDZCQUFhLENBQUMsa0NBQWtDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtnQkFDckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsaUJBQUM7QUFBRCxDQUFDO0FBOUVxQixnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xoQywyR0FBd0M7QUFJeEM7SUFBNEIsMEJBQVU7SUFFbEMsZ0JBQVksU0FBb0I7UUFBaEMsWUFDSSxrQkFBTSxTQUFTLENBQUMsU0FVbkI7UUFSRyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN6QixLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUMxQixLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUV6QixLQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBRTNELEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDOztJQUNoQyxDQUFDO0lBRUwsYUFBQztBQUFELENBQUMsQ0FmMkIsdUJBQVUsR0FlckM7QUFmWSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puQiwyR0FBd0M7QUFJeEM7SUFBMEIsd0JBQVU7SUFFaEMsY0FBWSxTQUFvQjtRQUFoQyxZQUNJLGtCQUFNLFNBQVMsQ0FBQyxTQVVuQjtRQVJHLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzFCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBRXpCLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFFekQsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O0lBQ2hDLENBQUM7SUFFTCxXQUFDO0FBQUQsQ0FBQyxDQWZ5Qix1QkFBVSxHQWVuQztBQWZZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGpCLDJHQUF3QztBQUd4QztJQUE0QiwwQkFBVTtJQUVsQyxnQkFBWSxTQUFvQjtRQUFoQyxZQUNJLGtCQUFNLFNBQVMsQ0FBQyxTQVVuQjtRQVJHLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBRXpCLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFFM0QsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O0lBQ2hDLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0FBQyxDQWYyQix1QkFBVSxHQWVyQztBQWZZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSG5CLDJHQUF3QztBQUd4QztJQUE0QiwwQkFBVTtJQUVsQyxnQkFBWSxTQUFvQjtRQUFoQyxZQUNJLGtCQUFNLFNBQVMsQ0FBQyxTQVduQjtRQVRHLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBR3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFFM0QsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O0lBQ2hDLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0FBQyxDQWhCMkIsdUJBQVUsR0FnQnJDO0FBaEJZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5CLGtGQUE4QjtBQUU5QixrSEFBeUQ7QUFFekQ7SUFBOEIsNEJBQUs7SUFJL0Isa0JBQVksT0FBYSxFQUFFLGVBQWU7UUFBMUMsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FLakI7UUFKRyxLQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUNqQyxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNwQixLQUFJLENBQUMsUUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBQ3pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQzs7SUFDeEQsQ0FBQztJQUVNLHVCQUFJLEdBQVg7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxZQUFZLEdBQUcsc0JBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNuRixZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMzQixZQUFZLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUNsQyxZQUFZLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUM5QixZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM3QixZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQixZQUFZLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyx5QkFBeUIsQ0FBQztRQUNuRSxZQUFZLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUV2RSxZQUFZLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSx3QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRVMsMkJBQVEsR0FBbEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ3pELEtBQUssQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDO1FBQ2hFLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDbEMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDakIsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdEIsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDcEIsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDckIsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsS0FBSyxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFDbkMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakMsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLFdBQVcsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQy9ELFdBQVcsQ0FBQyxtQkFBbUIsR0FBRyx1QkFBTyxDQUFDLDJCQUEyQixDQUFDO1FBQ3RFLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDOUMsV0FBVyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDNUIsV0FBVyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDeEIsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDMUIsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDM0IsV0FBVyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDMUIsV0FBVyxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFDekMsV0FBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFdBQWdCLEVBQUUsT0FBTztZQUM5RSxJQUFJLFVBQVUsR0FBRyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUVoQyxJQUFJLGFBQWEsR0FBRyxJQUFJLHlCQUFTLEVBQUUsQ0FBQztZQUNwQyxhQUFhLENBQUMsaUJBQWlCLEdBQUcsdUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUNqRSxhQUFhLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQztZQUN4RSxhQUFhLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDL0MsYUFBYSxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUMxQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUM1QixhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixhQUFhLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUM5QixhQUFhLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUM1QixhQUFhLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztZQUMzQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUV6QyxJQUFJLGtCQUFrQixHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO1lBQ3pDLGtCQUFrQixDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDdEUsa0JBQWtCLENBQUMsbUJBQW1CLEdBQUcsdUJBQU8sQ0FBQywyQkFBMkIsQ0FBQztZQUM3RSxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUNsRCxrQkFBa0IsQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDL0Msa0JBQWtCLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNqQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDbkMsa0JBQWtCLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNqQyxrQkFBa0IsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO1lBQ2hELGtCQUFrQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFFdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUVsRCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FBQyxDQTFHNkIsYUFBSyxHQTBHbEM7QUExR1ksNEJBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQiwwRkFBcUM7QUFFckMsZ0dBQTBDO0FBRTFDLHVIQUF5RDtBQUN6RCx5RkFBdUM7QUFFdkMsd0dBQWlEO0FBRWpEO0lBY0ksY0FBWSxhQUFnQyxFQUFFLFNBQWlCLEVBQUUsV0FBbUIsRUFBRSxRQUF5QixFQUFFLE9BQXdCO1FBQW5ELDJDQUF5QjtRQUFFLHlDQUF3QjtRQUNySSxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFFOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSx5QkFBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckUsQ0FBQztJQUVELDZCQUFjLEdBQWQ7UUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDeEQsQ0FBQztJQUVELHVCQUFRLEdBQVIsVUFBUyxLQUFZO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBRXpCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw2QkFBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwwQkFBVyxHQUFsQixVQUFtQixRQUFlO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVoQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsSUFBSSxjQUFjLEVBQUU7WUFDaEIsVUFBVSxDQUFDO2dCQUNQLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRWEsaUJBQVksR0FBMUIsVUFBMkIsT0FBZSxFQUFFLE9BQWU7UUFDdkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRWEsbUJBQWMsR0FBNUIsVUFBNkIsVUFBMkIsRUFBRSxRQUF5QjtRQUMvRSxJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBNUVNLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLGVBQVUsR0FBRyxDQUFDLENBQUM7SUFDZixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQTRFakMsV0FBQztDQUFBO0FBaEZZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNUakIscUVBQTRCO0FBQzVCLDBGQUFxQztBQUVyQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFDeEMsUUFBUSxDQUFDLGtCQUFrQixHQUFHO1FBQzFCLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDcEMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUM5QixJQUFNLFdBQVcsR0FBdUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDaEYsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQ3ZGLElBQUksV0FBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ25GO1NBQ0o7SUFDTCxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1pILHFIQUF3RDtBQUN4RCxzSUFBcUU7QUFDckUsMEZBQXFDO0FBRXJDO0lBS0k7Ozs7O09BS0c7SUFDSCxlQUFZLElBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUTtRQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ25DLElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RSxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixNQUFNLElBQUksU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDakQ7UUFDRCxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDNUIsU0FBUyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRTNDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxJQUFJLEVBQUUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7WUFDbkYsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBRWhELElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUMzRztZQUNJLE9BQU8sR0FBRyxJQUFJLHlCQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQzFHO1lBQ0ksT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUNoRSxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFDbkM7WUFDSSwyQ0FBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFFTixDQUFDO0lBRUwsWUFBQztBQUFELENBQUM7QUE1RFksc0JBQUs7Ozs7Ozs7Ozs7Ozs7OztBQ0xsQixzRUFBNkI7QUFDN0IsMEZBQXFDO0FBRXJDO0lBQUE7SUF1QkEsQ0FBQztJQXJCVSxzQkFBVyxHQUFsQixVQUFtQixLQUFvQixFQUFFLE1BQTRCLEVBQUUsV0FBeUQsRUFBRSxhQUE2QjtRQUF4RixnREFBbUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUFFLG9EQUE2QjtRQUMzSiw0RkFBNEY7UUFDNUYsaURBQWlEO1FBQ2pELHdLQUF3SztRQUN4Syw0QkFBNEI7UUFDNUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxXQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLDBFQUEwRTtZQUMxRSxpQ0FBaUM7WUFDakMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDM0I7YUFBTTtZQUNILE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQzVCO1FBQ0QsTUFBTSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFOUIsSUFBRyxhQUFhLEVBQUU7WUFDZCxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUM5QjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7QUF2QlksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ0R2Qiw2SEFBOEQ7QUFDOUQscUhBQXdEO0FBQ3hELCtHQUE2RTtBQUM3RSwwRkFBcUM7QUFDckMsc0lBQXFFO0FBRXJFO0lBU0kscUJBQVksSUFBVSxFQUFFLElBQVUsRUFBRSxRQUF5QixFQUFFLFdBQW1CO1FBQzFFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVuQyxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pGLGNBQWMsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdkMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN2QyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFOUIsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25KLElBQUksVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNqRSxVQUFVLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN2QixVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN4QixVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzVCLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFaEMsSUFBTSxlQUFlLEdBQUcsaUNBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2RCxZQUFZO1FBQ1osVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5QyxjQUFjLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxjQUFjLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFDekc7WUFDSSwyQ0FBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVSLElBQUksY0FBYyxHQUFHLElBQUkseUJBQW9CLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3BFLGNBQWMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFTSw4QkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBNURRLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUNSeEIscUhBQXdEO0FBRXhELHNJQUFxRTtBQUNyRSw4SEFBbUY7QUFDbkYsMEZBQXFDO0FBRXJDO0lBTUksaUJBQVksSUFBVSxFQUFFLFFBQWdCLEVBQUUsUUFBaUIsRUFBRSxhQUFxQixFQUFFLFlBQW9CO1FBQ3BHLElBQUksT0FBTyxHQUFrQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDVixNQUFNLElBQUksU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDbkQ7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNwQixPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkseUJBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFdEQsSUFBSSxxQkFBcUIsR0FBRyxtQ0FBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pGLHFCQUFxQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUM7UUFFNUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDMUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQ2hDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQ3BFO1lBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFWixPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FDaEMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFDbkU7WUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRVosSUFBSSxlQUFlLEdBQUc7WUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFdkUsT0FBTzthQUNWO1lBRUQsMkNBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUN2RSxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUNoQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUNqRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBRTFCLE9BQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUNoQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUN0QixPQUFPLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQywwQkFBMEI7WUFDekQsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtTQUM5QixFQUNELGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBMURZLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNMcEIscUhBQXdEO0FBQ3hELHNHQUErQztBQUMvQywwRkFBcUM7QUFFckM7SUFPSTs7Ozs7T0FLRztJQUNILGdCQUFZLElBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVztRQUMzQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNkLE1BQU0sSUFBSSxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUNqRDtRQUNELFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUNoRSxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFDbkM7WUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUVOLENBQUM7SUFFUyxvQ0FBbUIsR0FBN0IsVUFBOEIsVUFBVSxFQUFFLFdBQVcsRUFBRSxXQUFpQztRQUNwRixJQUFJLFFBQVEsR0FBOEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDcEUsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQzFELFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7YUFBTSxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDakUsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2RDthQUFNO1lBQ0gsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUkseUJBQVcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDcEU7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVMsOEJBQWEsR0FBdkIsVUFBd0IsVUFBVSxFQUFFLFdBQVcsRUFBRSxXQUFpQztRQUM5RSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUNoRixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUMvRixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDTixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNOLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNaLENBQUMsQ0FBQztRQUVILElBQUksWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFDakUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ2xELFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLHdCQUFPLEdBQWQ7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQztBQXJGWSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDSm5CLHFIQUF3RDtBQUN4RCxzSUFBcUU7QUFDckUsK0dBQXFEO0FBQ3JELDBGQUFxQztBQUVyQztJQUtJOzs7OztPQUtHO0lBQ0gsMkJBQVksSUFBVSxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQjtRQUMvRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbkMsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0SCxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWpDLElBQUksY0FBYyxHQUFHLElBQUkseUJBQVcsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDM0QsY0FBYyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV0QyxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHlCQUFXLENBQUMsY0FBYyxFQUFFLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQ2hFLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUNuQztZQUNJLDJDQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFFTixDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDO0FBckNZLDhDQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FDTjlCO0lBSUkscUJBQW1CLGFBQXFCO1FBQXJCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO0lBQ3hDLENBQUM7SUFFTSxzQ0FBZ0IsR0FBdkI7UUFDSSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFFM0IsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLG1DQUFhLEdBQXBCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDbEMsQ0FBQztJQUVhLDZCQUFpQixHQUEvQixVQUFnQyxJQUFZO1FBQ3hDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM3RCxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRWEsOEJBQWtCLEdBQWhDLFVBQWlDLElBQVk7UUFDekMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBRWhDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBbENZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUNDeEIsMEZBQXFDO0FBQ3JDLG1HQUEyQztBQUUzQztJQW1CSSxxQkFBWSxJQUFVO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVTLG9DQUFjLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFUyx5Q0FBbUIsR0FBN0IsVUFBOEIsR0FBRztRQUM3QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRWEsOEJBQWtCLEdBQWhDLFVBQWlDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBVTtRQUNuRCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSxxREFBK0IsR0FBdEMsVUFBdUMsSUFBMEI7UUFDN0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUM3QixJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwRTtJQUNMLENBQUM7SUFFTSxpQ0FBVyxHQUFsQixVQUFtQixJQUFVO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbkQsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDbkksSUFBSSxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pHLGVBQWUsQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7WUFDcEQsZUFBZSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1lBQ3ZFLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixDQUFDO1lBQ2pHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUNsRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsZUFBZSxDQUFDO1lBQzdDLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztZQUNqRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNoRCxJQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDaEU7U0FDSjthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMxRCxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztTQUNyQztRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUNyRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUNsQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRSxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzVELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO2FBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMzRztRQUVELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMvQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDdEMsWUFBWTtZQUNaLDBHQUEwRztZQUMxRywwREFBMEQ7WUFDMUQsMEVBQTBFO1lBQzFFLHNFQUFzRTtZQUN0RSxnRUFBZ0U7WUFDaEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1YsU0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQjthQUFNO1lBQ0gsU0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUExSFksa0NBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ0R4QjtJQU1JLDBCQUFZLElBQVUsRUFBRSxPQUFxQjtRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBR0wsdUJBQUM7QUFBRCxDQUFDO0FBZHFCLDRDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h0QyxtSEFBb0Q7QUFDcEQsMEZBQXFDO0FBRXJDO0lBQTJCLHlCQUFnQjtJQUEzQzs7SUFxQ0ksQ0FBQztJQW5DRyxrQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2pILGNBQWMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN2RyxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFdEMsY0FBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtRQUN2SCxjQUFjLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUUzRyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RCxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxjQUFjLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxRCxjQUFjLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM3QixjQUFjLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUU3QixjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUMvQixjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUUvQixjQUFjLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUU3QixjQUFjLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7UUFFckUsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFELGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekQsY0FBYyxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN2QyxjQUFjLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUV0QyxjQUFjLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUNsQyxjQUFjLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNoQyxjQUFjLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNsQyxjQUFjLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN6QyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQ0FyQ3NCLG1DQUFnQixHQXFDdEM7QUFyQ1Esc0JBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIbEIsbUhBQW9EO0FBQ3BELDBGQUFxQztBQUVyQztJQUFpQywrQkFBZ0I7SUFBakQ7O0lBbUNJLENBQUM7SUFqQ0csd0NBQWtCLEdBQWxCO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3RILFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUVsRyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbEMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyRCxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2RCxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2RCxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV4RCxVQUFVLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN6QixVQUFVLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUV6QixVQUFVLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM3QixVQUFVLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUU3QixVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUV6QixVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7UUFFL0QsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVsRCxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkQsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDNUIsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDNUIsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7SUFDckMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxDQW5DNEIsbUNBQWdCLEdBbUM1QztBQW5DUSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h4QixtSEFBb0Q7QUFDcEQsMEZBQXFDO0FBRXJDO0lBQW1DLGlDQUFnQjtJQUFuRDs7SUF3Q0ksQ0FBQztJQXRDRywwQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBRTNHLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUVsRyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbEMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzRCxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2RCxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2RCxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV4RCxVQUFVLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN6QixVQUFVLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUV6QixVQUFVLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM3QixVQUFVLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUU3QixVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUUxQixVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7UUFFL0QsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVsRCxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFckQsVUFBVSxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNqQyxVQUFVLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFFckMsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDNUIsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDNUIsVUFBVSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDL0IsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7SUFDckMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxDQXhDOEIsbUNBQWdCLEdBd0M5QztBQXhDUSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0gxQixtSEFBb0Q7QUFDcEQsMEZBQXFDO0FBRXJDO0lBQW9DLGtDQUFnQjtJQUFwRDs7SUFzQ0EsQ0FBQztJQXBDRywyQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQzNHLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUNuRyxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbkMsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU5RCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV6RCxXQUFXLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMxQixXQUFXLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUV4QixXQUFXLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM5QixXQUFXLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUU5QixXQUFXLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUUzQixXQUFXLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7UUFFaEUsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuRCxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTFELFdBQVcsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUV0QyxXQUFXLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUMvQixXQUFXLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUMvQixXQUFXLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNoQyxXQUFXLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLENBdENtQyxtQ0FBZ0IsR0FzQ25EO0FBdENZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNIM0IsMEZBQXFDO0FBR3JDO0lBQUE7SUEyQ0EsQ0FBQztJQXpDVSxtQ0FBa0IsR0FBekIsVUFBMEIsSUFBVSxFQUFFLE9BQXFCLEVBQUUsUUFBaUI7UUFDMUUsSUFBSSxjQUFjLEdBQUcsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBQyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3pHLGNBQWMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2pHLGNBQWMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekQsSUFBSSxRQUFRLEVBQUU7WUFDVixjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3RCxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoRTthQUFNO1lBQ0gsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekQsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUQ7UUFDRCxjQUFjLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU5RCxjQUFjLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM3QixjQUFjLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUU3QixjQUFjLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUNqQyxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUUvQixjQUFjLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUU5QixjQUFjLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7UUFFbkUsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV6RCxjQUFjLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pELGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUQsY0FBYyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDbkMsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXpDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ25DLGNBQWMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUM7QUEzQ1ksNENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7QUNIN0IsMEZBQXFDO0FBRXJDO0lBQUE7SUEyQkEsQ0FBQztJQXpCVSwyQkFBWSxHQUFuQixVQUFvQixLQUFvQjtRQUNwQyxJQUFJLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdFLGNBQWMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hGLGNBQWMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlELGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFFL0UsY0FBYyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDN0IsY0FBYyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDN0IsY0FBYyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDakMsY0FBYyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDakMsY0FBYyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDN0IsY0FBYyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUN4QyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5RixRQUFRO1FBQ1IsY0FBYyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDaEMsY0FBYyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFHaEMsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQztBQTNCWSx3Q0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YzQixvSEFBcUQ7QUFDckQsMEZBQXFDO0FBRXJDO0lBQTBCLHdCQUFnQjtJQUExQzs7SUE4QkksQ0FBQztJQTVCRyxpQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDMUIsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTlCLElBQUksVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RFLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVFLFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQzlCLFVBQVUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvRCxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRCxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0QsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0QsVUFBVSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUNwQyxVQUFVLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUU3QixJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQ0E5QnFCLG1DQUFnQixHQThCckM7QUE5QlEsb0JBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIakIsb0hBQXFEO0FBQ3JELDBGQUFxQztBQUVyQztJQUFrQyxnQ0FBZ0I7SUFBbEQ7O0lBaUNBLENBQUM7SUEvQkcseUNBQWtCLEdBQWxCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN2RixHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTFCLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRSxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDNUYsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2xHLFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLFVBQVUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzdCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzdCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvRCxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRCxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7SUFDckMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxDQWpDaUMsbUNBQWdCLEdBaUNqRDtBQWpDWSxvQ0FBWTs7Ozs7Ozs7Ozs7Ozs7O0FDRnpCLDBGQUFxQztBQUVyQztJQVNJLCtCQUFZLElBQVUsRUFBRSxNQUE0QixFQUFFLEtBQW1CLEVBQUUsVUFBMkI7UUFBM0IsK0NBQTJCO1FBQ2xHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksVUFBVSxFQUFFO1lBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFDM0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUdMLDRCQUFDO0FBQUQsQ0FBQztBQXZCcUIsc0RBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDNDLHdLQUFvRTtBQUNwRSxxSEFBeUQ7QUFDekQsMEZBQXFDO0FBRXJDO0lBQTRCLDBCQUFxQjtJQUFqRDs7SUFxQ0ksQ0FBQztJQW5DVSx5QkFBUSxHQUFmLFVBQWdCLEtBQWE7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRixJQUFJLGNBQWMsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBRTVDLElBQUksU0FBUyxHQUFHLFVBQVUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3BDLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztZQUV2QixJQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDLEdBQUcsY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQyxHQUFHLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4SyxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDdkUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDcEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDcEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDcEMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLHVCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUMvRDtZQUVELFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDakMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQzVCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUM1QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDaEMsQ0FBQyxDQUFDO1FBRUYsSUFBSSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUN4RyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQ0FyQ3VCLG1EQUFxQixHQXFDNUM7QUFyQ1Esd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkIsd0tBQW9FO0FBQ3BFLDBGQUFxQztBQUVyQztJQUFpQywrQkFBcUI7SUFBdEQ7O0lBcUJBLENBQUM7SUFuQlUsOEJBQVEsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0UsSUFBSSxTQUFTLEdBQUcsVUFBUyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDbkMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUMsY0FBYyxHQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUMsY0FBYyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFDLGNBQWMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwSSxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUM3QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUM1QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDNUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLENBQUMsQ0FBQztRQUVGLElBQUksR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUM3RyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUV2QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLENBckJnQyxtREFBcUIsR0FxQnJEO0FBckJZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUNIeEIsMEZBQXFDO0FBRXJDO0lBQUE7SUFxQ0EsQ0FBQztJQXBDVSxzQkFBWSxHQUFuQixVQUFvQixLQUFvQixFQUFFLFFBQWdCLEVBQUUsT0FBNkI7UUFDckYsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BGLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdFLFdBQVcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzlCLFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEQsV0FBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV4RCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV6RCxXQUFXLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMxQixXQUFXLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUUxQixXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMvQixXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUUvQixXQUFXLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUVoQyxXQUFXLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7UUFFaEUsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuRCxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RELFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEQsV0FBVyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDaEMsV0FBVyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXRDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLFdBQVcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUFyQ1ksOEJBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ0F0Qix3RkFBa0M7QUFDbEMsNkdBQWdEO0FBRWhEO0lBZVEsbUJBQVksSUFBVSxFQUFFLE1BQXlCO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSw4QkFBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWhCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSw2QkFBUyxHQUFoQixVQUFpQixJQUFVLEVBQUUsT0FBZ0I7UUFBN0MsaUJBb0RDO1FBbkRHLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQy9FLE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUMvRSxNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDeEUsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzFFLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzFFLE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNsQixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMxRSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMxRSxNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDbEIsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDekUsTUFBTTthQUNiO1lBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFL0MseUNBQXlDO1lBQ3pDLG1GQUFtRjtZQUNuRix3RkFBd0Y7WUFDeEYsTUFBTTtZQUVOLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ2YsSUFBTSxNQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7b0JBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBSSxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUYsQ0FBQyxDQUFDLENBQUM7YUFFTjtTQUVKO0lBRUwsQ0FBQztJQUVNLDZCQUFTLEdBQWhCLFVBQWlCLElBQVU7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDNUMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQ3RCLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNJLG1DQUFlLEdBQXRCO1FBQ0ksSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXRCLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlCLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxrQ0FBYyxHQUFyQixVQUFzQixRQUFpQixFQUFFLFFBQWlCO1FBRXRELGdDQUFnQztRQUNoQyxrQkFBa0I7UUFDbEIsdUNBQXVDO1FBQ3ZDLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLFVBQVU7UUFDVixFQUFFO1FBQ0Ysa0NBQWtDO1FBQ2xDLElBQUk7UUFFSixJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksS0FBSyxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQzVCLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBRUwsQ0FBQztJQUVNLHFDQUFpQixHQUF4QjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDNUI7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksK0JBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFTLElBQUk7WUFDNUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDRCQUFRLEdBQWYsVUFBZ0IsY0FBMEI7UUFDdEMsSUFBSSxjQUFjLEVBQUU7WUFDaEIsSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksTUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxhQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLE1BQUksQ0FBQyxDQUFDO1lBRXhDLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTztnQkFDekIsTUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3pCLE1BQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSTtvQkFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDSCxVQUFVLENBQUM7b0JBQ1AsT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0osTUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUVsQixJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU87b0JBQ3pCLGFBQVcsQ0FBQyxnQ0FBZ0MsQ0FBQyxjQUFjLEVBQUUsTUFBSSxDQUFDLENBQUM7b0JBQ25FLFVBQVUsQ0FBQzt3QkFDUCxPQUFPLEVBQUUsQ0FBQztvQkFDZCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ0osSUFBRyxNQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7d0JBQzFCLE1BQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO3FCQUNyQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDO0FBOU1RLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUNKdEIsMEZBQXFDO0FBRXJDO0lBYVEsY0FBWSxJQUFVLEVBQUUsUUFBYTtRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBRXRDLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVNLHNCQUFPLEdBQWQ7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVNLDhCQUFlLEdBQXRCLFVBQXVCLElBQVU7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFOUIsSUFBSSxRQUFRLEdBQUksSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDdkYsUUFBUSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWhELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUM7QUFyRFEsb0JBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ0ZqQixrRkFBNEI7QUFHNUI7SUFLSSxxQkFBWSxJQUFVO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksc0RBQWdDLEdBQXZDLFVBQXdDLGNBQTBCLEVBQUUsU0FBb0IsRUFBRSxtQkFBb0M7UUFBcEMsaUVBQW9DO1FBQzFILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXBCLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTztZQUN6QixjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsWUFBWTtnQkFDekMsSUFBSSxtQkFBbUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQzNFLE9BQU87aUJBQ1Y7Z0JBRUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDN0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNCLElBQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUN4QyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFFakMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7b0JBQ3pCLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3BCO2dCQUVELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFO29CQUN6QixRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUNwQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsVUFBVSxDQUFDO2dCQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHTCxrQkFBQztBQUFELENBQUM7QUFoRFksa0NBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ0Z4Qiw2RkFBMkM7QUFDM0MsMEZBQXFDO0FBQ3JDLGtIQUE0RTtBQUU1RTtJQXVCSSx1QkFBWSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBR00sbUNBQVcsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQVFTLHNDQUFjLEdBQXhCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsSUFBSSxRQUFRLEdBQUc7WUFDWCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDO2dCQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtvQkFDN0MsSUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sRUFBRTt3QkFDNUMsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEUsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUM5RixNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNuRDtvQkFFRCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztvQkFDN0MsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7b0JBQzNDLElBQUksUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEYsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO3dCQUM1QyxRQUFRLEVBQUUsV0FBVztxQkFDeEIsQ0FBQyxDQUFDO29CQUNILE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDM0M7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFNLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDO1FBQ0YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRVMsdUNBQWUsR0FBekIsVUFBMEIsWUFBb0I7UUFDMUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtZQUM1QixJQUFNLE1BQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQU0sTUFBSSxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFNLFVBQVUsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBRXJCLE1BQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO2dCQUM1RyxNQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsb0JBQW9CLENBQUMsTUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoRyxNQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVTLDZDQUFxQixHQUEvQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztRQUVwRCxJQUFJLFVBQVUsR0FBRyxzQkFBTSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsR0FBRyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDckIsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDdEIsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDekIsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcscUJBQUssQ0FBQyxlQUFlLENBQUM7UUFFakQsSUFBSSxPQUFPLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbkIsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDcEIsT0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDeEIsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDN0IsT0FBTyxDQUFDLGlCQUFpQixHQUFHLHVCQUFPLENBQUMseUJBQXlCLENBQUM7UUFFOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFTywwQ0FBa0IsR0FBMUI7UUFDSSxJQUFJLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUM1SixjQUFjLENBQUMsT0FBTyxDQUFDO1lBQ25CO2dCQUNJLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7WUFDRDtnQkFDSSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsQ0FBQzthQUNYO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLENBQUM7YUFDWDtTQUNKLENBQUMsQ0FBQztRQUVILElBQUksZ0JBQWdCLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDakssZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1lBQ3JCO2dCQUNJLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1g7WUFDRDtnQkFDSSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsQ0FBQzthQUNYO1NBQ0osQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUF2Sk0sa0JBQUksR0FBRyxDQUFDLENBQUM7SUF5SnBCLG9CQUFDO0NBQUE7QUExSnFCLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTG5DLDhHQUE4QztBQUU5QztJQUEyQix5QkFBYTtJQUF4Qzs7SUFpQ0EsQ0FBQztJQTlCVSx1QkFBTyxHQUFkO1FBQ0ksT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFUyxnQ0FBZ0IsR0FBMUIsVUFBMkIsSUFBVTtRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLHlCQUF5QixDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFTSw2QkFBYSxHQUFwQixVQUFxQixTQUFpQixFQUFFLFlBQW9CO1FBQ3hELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUMsRUFBRTtZQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbkQsVUFBVSxDQUFDO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBOUJNLFVBQUksR0FBRyxDQUFDLENBQUM7SUFnQ3BCLFlBQUM7Q0FBQSxDQWpDMEIsNkJBQWEsR0FpQ3ZDO0FBakNZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmxCLDhHQUE4QztBQUM5QyxzSUFBcUU7QUFHckU7SUFBZ0MsOEJBQWE7SUFBN0M7O0lBbURJLENBQUM7SUFoRFUsNEJBQU8sR0FBZDtRQUNJLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRVMscUNBQWdCLEdBQTFCLFVBQTJCLElBQVU7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyw4QkFBOEIsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLHFDQUFpQixDQUFDLG1CQUFtQixDQUFDO1FBQzNELElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxrQ0FBYSxHQUFiLFVBQWMsU0FBaUIsRUFBRSxZQUFvQjtRQUNqRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbkMsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsRDtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5QyxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDcEMsV0FBVyxFQUFFLElBQUk7aUJBQ3BCLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQyxFQUFFO1lBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsVUFBVSxDQUFDO2dCQUNQLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO29CQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2pEO1lBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTVDLFVBQVUsQ0FBQztZQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUVsQixDQUFDO0lBaERNLGVBQUksR0FBRyxDQUFDLENBQUM7SUFrRHBCLGlCQUFDO0NBQUEsQ0FuRDJCLDZCQUFhLEdBbUR4QztBQW5EUSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x2QiwyR0FBaUU7QUFDakUsc0lBQXFFO0FBQ3JFLDhHQUE4QztBQUc5QztJQUEwQix3QkFBYTtJQUF2Qzs7SUE4Q0EsQ0FBQztJQTNDVSxzQkFBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFUywrQkFBZ0IsR0FBMUIsVUFBMkIsSUFBVTtRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcscUNBQWlCLENBQUMsc0JBQXNCLENBQUM7UUFDOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFdBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsNEJBQWEsR0FBYixVQUFjLFNBQWlCLEVBQUUsWUFBb0I7UUFDakQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVuQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLGVBQWUsR0FBRztZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0UsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMvRCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFbEQsVUFBVSxDQUFDO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUVsQixDQUFDO0lBM0NNLFNBQUksR0FBRyxDQUFDLENBQUM7SUE2Q3BCLFdBQUM7Q0FBQSxDQTlDeUIsNkJBQWEsR0E4Q3RDO0FBOUNZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGpCLDhHQUE4QztBQUU5QyxzSUFBcUU7QUFDckUsbUlBQXlGO0FBRXpGO0lBQWtDLGdDQUFhO0lBQS9DOztJQXNDQSxDQUFDO0lBbkNVLDhCQUFPLEdBQWQ7UUFDSSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVTLHVDQUFnQixHQUExQixVQUEyQixJQUFVO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0NBQWdDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxxQ0FBaUIsQ0FBQyxrQkFBa0IsQ0FBQztRQUMxRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksMkJBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxTQUFpQixFQUFFLFlBQW9CO1FBQ2pELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ3BDLFdBQVcsRUFBRSxJQUFJO2lCQUNwQixDQUFDLENBQUM7YUFDTjtRQUNMLENBQUMsRUFBRTtZQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU1QyxVQUFVLENBQUM7WUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFbEIsQ0FBQztJQXBDTSxpQkFBSSxHQUFHLENBQUMsQ0FBQztJQXFDcEIsbUJBQUM7Q0FBQSxDQXRDaUMsNkJBQWEsR0FzQzlDO0FBdENZLG9DQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUNMekIsbUZBQTRCO0FBQzVCLDJHQUE0QztBQUM1QyxzRkFBOEI7QUFDOUIscUdBQXdDO0FBQ3hDLDJHQUE0QztBQUc1QztJQUFBO0lBMEJBLENBQUM7SUF4QmlCLHNCQUFRLEdBQXRCLFVBQXVCLElBQVksRUFBRSxNQUFjO1FBQy9DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUVqQixRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssV0FBSSxDQUFDLElBQUk7Z0JBQ1YsS0FBSyxHQUFHLElBQUksV0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBQ1YsS0FBSywyQkFBWSxDQUFDLElBQUk7Z0JBQ2xCLEtBQUssR0FBRyxJQUFJLDJCQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pDLE1BQU07WUFDVixLQUFLLGFBQUssQ0FBQyxJQUFJO2dCQUNYLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUIsTUFBTTtZQUNWLEtBQUssdUJBQVUsQ0FBQyxJQUFJO2dCQUNoQixLQUFLLEdBQUcsSUFBSSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSywyQkFBWSxDQUFDLElBQUk7Z0JBQ2xCLEtBQUssR0FBRyxJQUFJLDJCQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pDLE1BQU07U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUM7QUExQlksc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMUIsOEdBQThDO0FBRTlDO0lBQWtDLGdDQUFhO0lBQS9DOztJQXFEQSxDQUFDO0lBbERVLDhCQUFPLEdBQWQ7UUFDSSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVTLHVDQUFnQixHQUExQixVQUEyQixJQUFVO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0NBQWdDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVNLG9DQUFhLEdBQXBCLFVBQXFCLFNBQWlCLEVBQUUsWUFBb0I7UUFDeEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxRQUFRLENBQUM7UUFDYixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLEVBQUU7WUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbkQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsRDtRQUNELFVBQVUsQ0FBQztZQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7YUFDekQ7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixVQUFVLENBQUM7b0JBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7d0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQzt3QkFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDakQ7Z0JBRUwsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO2dCQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNwQyxXQUFXLEVBQUUsSUFBSTtpQkFDcEIsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQWxETSxpQkFBSSxHQUFHLENBQUMsQ0FBQztJQW9EcEIsbUJBQUM7Q0FBQSxDQXJEaUMsNkJBQWEsR0FxRDlDO0FBckRZLG9DQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHpCLCtFQUE4QjtBQUU5QiwwRkFBcUM7QUFDckMsNElBQW9EO0FBQ3BELCtKQUE2RTtBQUc3RTtJQUFrQyxnQ0FBSztJQUF2Qzs7SUFnREEsQ0FBQztJQTVDRyxnQ0FBUyxHQUFULFVBQVUsSUFBVTtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUk7YUFDQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzthQUN4QixnQkFBZ0IsQ0FBQztZQUNkLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkcsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDdEIsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFckQsTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RGLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXhELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUU7WUFDQyxFQUFFO1lBQ0YsSUFBSSxhQUFhLEdBQUcsSUFBSSxtQ0FBYSxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdGLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLDBDQUEwQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25HLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDaEMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDaEMsYUFBYSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDL0IsYUFBYSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDOUIsYUFBYSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztZQUNyQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkYsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzNCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1lBQ25DLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzdCLDJCQUEyQjtZQUMzQixhQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckQsNENBQTRDO1lBRTVDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0QsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQTVDTSxpQkFBSSxHQUFHLEVBQUUsQ0FBQztJQThDckIsbUJBQUM7Q0FBQSxDQWhEaUMsYUFBSyxHQWdEdEM7QUFoRFksb0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQekIsK0VBQThCO0FBQzlCLG9KQUE2RTtBQUU3RSwwRkFBcUM7QUFFckM7SUFBaUMsK0JBQUs7SUFBdEM7O0lBZUEsQ0FBQztJQVhHLCtCQUFTLEdBQVQsVUFBVSxJQUFVO1FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsS0FBSztZQUN4RyxJQUFJO2lCQUNDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO2lCQUN4QixnQkFBZ0IsQ0FBQztnQkFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksK0NBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVhNLGdCQUFJLEdBQUcsQ0FBQyxDQUFDO0lBYXBCLGtCQUFDO0NBQUEsQ0FmZ0MsYUFBSyxHQWVyQztBQWZZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHhCLCtFQUE4QjtBQUU5QixtS0FBdUY7QUFDdkYsMEZBQXFDO0FBRXJDO0lBQXNDLG9DQUFLO0lBQTNDOztJQWVBLENBQUM7SUFYRyxvQ0FBUyxHQUFULFVBQVUsSUFBVTtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUs7WUFDaEgsSUFBSTtpQkFDQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztpQkFDeEIsZ0JBQWdCLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlEQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFYTSxxQkFBSSxHQUFHLENBQUMsQ0FBQztJQWFwQix1QkFBQztDQUFBLENBZnFDLGFBQUssR0FlMUM7QUFmWSw0Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMN0IsZ0tBQXFGO0FBRXJGLCtFQUE4QjtBQUM5QiwwRkFBcUM7QUFFckM7SUFBcUMsbUNBQUs7SUFBMUM7O0lBbUNBLENBQUM7SUEvQkcsbUNBQVMsR0FBVCxVQUFVLElBQVU7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLDJCQUEyQixFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxLQUFLO1lBQ2xILElBQUk7aUJBQ0MsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7aUJBQ3hCLGdCQUFnQixDQUFDO2dCQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx1REFBMEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRS9ELEVBQUU7Z0JBQ0Ysb0NBQW9DO2dCQUNwQyx5QkFBeUI7Z0JBQ3pCLHNCQUFzQjtnQkFDdEIsZUFBZTtnQkFDZixzQkFBc0I7Z0JBQ3RCLDZCQUE2QjtnQkFDN0IsTUFBTTtnQkFDTiwyREFBMkQ7Z0JBQzNELEVBQUU7Z0JBQ0Ysb0NBQW9DO2dCQUNwQyxpQ0FBaUM7Z0JBQ2pDLGtDQUFrQztnQkFDbEMsZUFBZTtnQkFDZixzQkFBc0I7Z0JBQ3RCLHFDQUFxQztnQkFDckMsTUFBTTtnQkFDTiwyREFBMkQ7WUFDL0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9CTSxvQkFBSSxHQUFHLENBQUMsQ0FBQztJQWlDcEIsc0JBQUM7Q0FBQSxDQW5Db0MsYUFBSyxHQW1DekM7QUFuQ1ksMENBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ0w1QixpR0FBMEM7QUFDMUMsZ0hBQW9EO0FBQ3BELDZHQUFrRDtBQUNsRCw2R0FBa0Q7QUFDbEQsb0dBQTRDO0FBQzVDLHVHQUE4QztBQUU5Qyw4SEFBdUQ7QUFDdkQsNkdBQTZDO0FBRTdDO0lBQUE7SUF3Q0ksQ0FBQztJQXRDaUIsZUFBTyxHQUFyQixVQUFzQixTQUFpQjtRQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFakIsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLHlCQUFXLENBQUMsSUFBSTtnQkFDakIsS0FBSyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO2dCQUMxQixNQUFNO1lBQ1YsS0FBSyxtQ0FBZ0IsQ0FBQyxJQUFJO2dCQUN0QixLQUFLLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxpQ0FBZSxDQUFDLElBQUk7Z0JBQ3JCLEtBQUssR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssaUNBQWUsQ0FBQyxJQUFJO2dCQUNyQixLQUFLLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7Z0JBQzlCLE1BQU07WUFDVixLQUFLLDJCQUFZLENBQUMsSUFBSTtnQkFDbEIsS0FBSyxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO2dCQUMzQixNQUFNO1lBQ1YsS0FBSyw2QkFBYSxDQUFDLElBQUk7Z0JBQ25CLEtBQUssR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztnQkFDNUIsTUFBTTtZQUNWLEtBQUssbUJBQVEsQ0FBQyxJQUFJO2dCQUNkLEtBQUssR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztnQkFDdkIsTUFBTTtZQUNWLEtBQUssYUFBSyxDQUFDLElBQUk7Z0JBQ1gsS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7Z0JBQ3BCLE1BQU07U0FDYjtRQUVELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixNQUFNLElBQUksU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBR0wsY0FBQztBQUFELENBQUM7QUF4Q1EsMEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWcEIsbUZBQWtDO0FBRWxDLDRJQUEwRDtBQUMxRCwwRkFBcUM7QUFFckM7SUFBOEIsNEJBQUs7SUFBbkM7O0lBb0JBLENBQUM7SUFoQkcsNEJBQVMsR0FBVCxVQUFVLElBQVU7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxLQUFLO1lBQ2hHLElBQUk7aUJBQ0MsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7aUJBQ3hCLGdCQUFnQixDQUFDO2dCQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRCxDQUFDLEVBQUU7Z0JBQ0MsMkZBQTJGO2dCQUMzRiwyRkFBMkY7Z0JBQzNGLCtGQUErRjtZQUVuRyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWhCTSxhQUFJLEdBQUcsQ0FBQyxDQUFDO0lBa0JwQixlQUFDO0NBQUEsQ0FwQjZCLGFBQUssR0FvQmxDO0FBcEJZLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCLHVJQUE2RDtBQUU3RCwwRkFBcUM7QUFFckM7SUFBeUMsdUNBQW9CO0lBSXpELDZCQUFZLElBQVU7UUFBdEIsWUFDSSxpQkFBTyxTQThCVjtRQTdCRyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckMsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLFNBQVMsR0FBa0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzRCxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDaEMsU0FBUyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQztnQkFDMUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9GLEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2FBRTNCO2lCQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNILFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUU3QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM5QixTQUFTO2lCQUNaO2dCQUVELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUM7U0FDSjtRQUVELEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFDaEMsQ0FBQztJQUVELDJDQUFhLEdBQWIsVUFBYyxLQUFvQjtJQUNsQyxDQUFDO0lBR0wsMEJBQUM7QUFBRCxDQUFDLENBekN3QywyQ0FBb0IsR0F5QzVEO0FBekNZLGtEQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0poQyw4SUFBMEU7QUFDMUUsMEZBQXFDO0FBQ3JDLDRJQUFxRDtBQUVyRDtJQUFtRCx3Q0FBbUI7SUFBdEU7O0lBa0JBLENBQUM7SUFoQmEsb0RBQXFCLEdBQS9CLFVBQWdDLFVBQWtCLEVBQUUsS0FBb0I7UUFDcEUsSUFBSSxlQUFlLEdBQUcsSUFBSSxxQ0FBZSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLGVBQWUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRSxlQUFlLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RyxlQUFlLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxnREFBZ0QsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvRyxlQUFlLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RyxlQUFlLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxzREFBc0QsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsSCxlQUFlLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyx1REFBdUQsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuSCxlQUFlLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxzREFBc0QsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsSCxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDckYsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3JGLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUdyRixPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLENBbEJrRCx5Q0FBbUIsR0FrQnJFO0FBbEJxQixvREFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMUMsbUZBQWtDO0FBRWxDLDBGQUFxQztBQUVyQztJQUEyQix5QkFBSztJQUFoQzs7SUErQkEsQ0FBQztJQTNCRyx5QkFBUyxHQUFULFVBQVUsSUFBVTtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJO2FBQ0MsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7YUFDeEIsZ0JBQWdCLENBQUM7WUFDZCxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25HLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXJELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hGLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELElBQUksZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVFLGVBQWUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUQsZUFBZSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDbkMsZUFBZSxDQUFDLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDN0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFFdEMsQ0FBQyxFQUFFO1lBQ0MscUNBQXFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQTNCTSxVQUFJLEdBQUcsRUFBRSxDQUFDO0lBNkJyQixZQUFDO0NBQUEsQ0EvQjBCLGFBQUssR0ErQi9CO0FBL0JZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmxCLCtFQUE4QjtBQUU5QiwwSkFBaUY7QUFDakYsdUdBQThDO0FBQzlDLDBGQUFxQztBQUVyQztJQUFtQyxpQ0FBSztJQUF4Qzs7SUFvQkEsQ0FBQztJQWhCRyxpQ0FBUyxHQUFULFVBQVUsSUFBVTtRQUNoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUs7WUFDMUcsSUFBSTtpQkFDQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztpQkFDeEIsZ0JBQWdCLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLG1EQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFELENBQUMsRUFBRTtnQkFDQyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BGLDJGQUEyRjtnQkFDM0YsK0ZBQStGO1lBRW5HLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBaEJNLGtCQUFJLEdBQUcsQ0FBQyxDQUFDO0lBa0JwQixvQkFBQztDQUFBLENBcEJrQyxhQUFLLEdBb0J2QztBQXBCWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7O0FDTjFCLDBGQUFxQztBQUNyQyxzRUFBNkI7QUFHN0IseUdBQWtEO0FBQ2xELDBGQUF3QztBQUN4QywrRkFBK0M7QUFNL0MsNEdBQWlEO0FBQ2pELHdHQUFpRDtBQUdqRCx5SUFBdUU7QUFFdkU7SUFBQTtRQVNXLHlCQUFvQixHQUFlLEVBQUUsQ0FBQztRQUU3Qzs7V0FFRztRQUNJLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxTQUFJLEdBQXVCLEVBQUUsQ0FBQztRQUM5QixZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQXlCLEVBQUUsQ0FBQztRQUNsQyx1QkFBa0IsR0FBNkIsRUFBRSxDQUFDO1FBQ2xELGlCQUFZLEdBQXVCLEVBQUUsQ0FBQztJQXNKakQsQ0FBQztJQXJJYSwyQkFBVyxHQUFyQixVQUFzQixJQUFVLEVBQUUsS0FBb0IsRUFBRSxxQkFBc0M7UUFBdEMscUVBQXNDO1FBQzFGLE9BQU8sQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQ2xELHlCQUFXLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsRCxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDL0IsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDeEIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUNoQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM1QixLQUFLLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzVCLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsSUFBRyxxQkFBcUIsRUFBRTtZQUN0Qiw2Q0FBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0gsdUJBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxnQ0FBZ0MsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQy9GLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwrQkFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLCtCQUFlLEdBQXRCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxVQUFVLENBQUM7WUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDWixDQUFDO0lBRVMsZ0RBQWdDLEdBQTFDO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDOUIsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV2RCxhQUFhLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFdBQVcsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFLO2dCQUN0QixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBQ2YsT0FBTztpQkFDVjtnQkFFRCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksWUFBWSxFQUFFO29CQUNsQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDN0I7cUJBQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUN6QyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztpQkFDMUI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFUyxnQ0FBZ0IsR0FBMUIsVUFBMkIsT0FBaUIsRUFBRSxpQkFBMkIsRUFBRSxnQkFBZ0M7UUFBaEMsMERBQWdDO1FBQ3ZHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDOUIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDbkIsYUFBYSxDQUFDLFFBQVEsR0FBRyxVQUFVLEtBQUs7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUVoRCxJQUFJLE9BQU8sRUFBRTtvQkFDVCxPQUFPLEVBQUUsQ0FBQztpQkFDYjtnQkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzFDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQjtnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztvQkFDdEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztZQUM1QyxDQUFDLENBQUM7WUFDRixhQUFhLENBQUMsVUFBVSxHQUFHLFVBQVUsY0FBYyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0I7Z0JBQzdFLHlCQUFXLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLEdBQUcsY0FBYyxHQUFHLE1BQU0sR0FBRyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdEcsQ0FBQyxDQUFDO1lBQ0YsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXJCLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ2xCLElBQUksUUFBUSxHQUFHLFNBQVMsUUFBUTtvQkFDNUIsSUFBSSxpQkFBaUIsRUFBRTt3QkFDbkIsaUJBQWlCLEVBQUUsQ0FBQztxQkFDdkI7b0JBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7b0JBRTNELElBQUksV0FBSSxDQUFDLFVBQVUsRUFBRTt3QkFDakIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7NEJBQ2xCLFNBQVMsRUFBRSxJQUFJO3lCQUNsQixDQUFDLENBQUM7cUJBQ047b0JBRUQsUUFBUSxDQUFDLG1CQUFtQixDQUFDLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFNLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDaEU7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUF0S00sVUFBSSxHQUFHLENBQUMsQ0FBQztJQXlLcEIsWUFBQztDQUFBO0FBMUtxQixzQkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCM0IsZ0tBQXFGO0FBQ3JGLCtFQUE4QjtBQUM5QixxSUFBOEQ7QUFDOUQsK0dBQStFO0FBQy9FLDBGQUFxQztBQUVyQztJQUFxQyxtQ0FBSztJQUExQzs7SUF1Q0EsQ0FBQztJQW5DRyxtQ0FBUyxHQUFULFVBQVUsSUFBUztRQUVmLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2YsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUs7WUFDcEcsSUFBSTtpQkFDQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7aUJBQzlCLGdCQUFnQixDQUFDO2dCQUNkLElBQUksdURBQTBCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUU1QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsVUFBUyxPQUFPO29CQUMvRCxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBWTt3QkFDakMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsZUFBZSxHQUFHLEVBQUUsQ0FBQztvQkFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ3JDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO3FCQUN0RDtvQkFFQyxJQUFHLEdBQUcsRUFBRTt3QkFDSixHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUN6QjtvQkFDRCxJQUFHLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUMzQixHQUFHLEdBQUcsSUFBSSxpQ0FBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDeEM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQW5DTSxvQkFBSSxHQUFHLENBQUMsQ0FBQztJQXFDcEIsc0JBQUM7Q0FBQSxDQXZDb0MsYUFBSyxHQXVDekM7QUF2Q1ksMENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQNUIsd0dBQTJDO0FBQzNDLHdHQUFpRDtBQUVqRDtJQUE0QywwQ0FBVztJQUF2RDs7SUFxQkEsQ0FBQztJQW5CRzs7T0FFRztJQUNJLHVDQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLElBQUk7WUFDeEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVMsRUFBRSxHQUFHO2dCQUNqQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDN0IsSUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztpQkFDN0Q7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLDZCQUFDO0FBQUQsQ0FBQyxDQXJCMkMseUJBQVcsR0FxQnREO0FBckJZLHdEQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0huQyx3R0FBMkM7QUFDM0Msc0lBQXFFO0FBQ3JFLHlFQUFnQztBQUNoQywwRkFBcUM7QUFFckM7SUFBOEMsNENBQVc7SUFBekQ7O0lBdUVBLENBQUM7SUFyRVUseUNBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLElBQUk7WUFDeEMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzdCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN6QyxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLElBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ1AsT0FBTzthQUNWO1lBQ0QsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUU3QixLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRWhDLGVBQWU7WUFDZixJQUFJLHNCQUFzQixHQUFHLFdBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkYsSUFBSSxzQkFBc0IsR0FBRyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEg7WUFFRCxJQUFJLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDbkc7WUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxrQkFBa0I7Z0JBQ3BFLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQyxFQUFFLEVBQUU7b0JBQzlDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7aUJBQy9DO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksa0NBQWtDLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUM5QyxJQUFHLFlBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO29CQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDekMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxxQ0FBaUIsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNuRjtxQkFBTTtvQkFDSCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDN0I7YUFDSjtpQkFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksc0NBQXNDLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxpQ0FBaUMsRUFBRTtnQkFDbEksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDdEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNqRDtnQkFFRCxZQUFZLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEdBQUc7b0JBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUM3QixJQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO29CQUNwSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2xDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM3QixDQUFDLENBQUM7Z0JBRUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNqRztpQkFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUkscUNBQXFDLEVBQUU7Z0JBQ3JFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzdCO1lBRUQsSUFBRyxZQUFZLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFO2dCQUN6QyxrQ0FBa0M7YUFDckM7aUJBQU07Z0JBQ0gsa0NBQWtDO2FBQ3JDO1FBRUwsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsK0JBQUM7QUFBRCxDQUFDLENBdkU2Qyx5QkFBVyxHQXVFeEQ7QUF2RVksNERBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJDLHdHQUEyQztBQUUzQztJQUFvQyxrQ0FBVztJQUEvQzs7SUFtQkEsQ0FBQztJQWpCRzs7T0FFRztJQUNJLCtCQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsSUFBSTtZQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7WUFDMUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLENBbkJtQyx5QkFBVyxHQW1COUM7QUFuQlksd0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGM0Isd0dBQTJDO0FBRTNDO0lBQXFDLG1DQUFXO0lBQWhEOztJQWdCQSxDQUFDO0lBZEc7O09BRUc7SUFDSSxnQ0FBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBVSxJQUFJO1lBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWhHLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxDQWhCb0MseUJBQVcsR0FnQi9DO0FBaEJZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjVCLHdHQUEyQztBQUUzQztJQUE4Qiw0QkFBVztJQUF6Qzs7SUFvQkEsQ0FBQztJQWxCRzs7T0FFRztJQUNJLHlCQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLFVBQVU7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUMsb0JBQW9CLENBQUM7WUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztZQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRW5DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsZUFBQztBQUFELENBQUMsQ0FwQjZCLHlCQUFXLEdBb0J4QztBQXBCWSw0QkFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQix3R0FBMkM7QUFFM0M7SUFBMEMsd0NBQVc7SUFBckQ7O0lBNEJBLENBQUM7SUExQlUscUNBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxhQUFhO1lBQ3ZELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztZQUVsQixJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3RDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsWUFBWSxFQUFFLEdBQUc7b0JBQ25FLElBQUksWUFBWSxDQUFDLEVBQUUsSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRTt3QkFDbEQsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2xELE9BQU87cUJBQ1Y7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCwyQkFBQztBQUFELENBQUMsQ0E1QnlDLHlCQUFXLEdBNEJwRDtBQTVCWSxvREFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGakMsd0dBQTJDO0FBRTNDO0lBQW9DLGtDQUFXO0lBQS9DOztJQXFCQSxDQUFDO0lBbkJHOztPQUVHO0lBQ0ksK0JBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRTtZQUN2QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFlBQVksRUFBRSxHQUFHO2dCQUNuRSxJQUFJLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFO29CQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0RCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdEQ7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxDQXJCbUMseUJBQVcsR0FxQjlDO0FBckJZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjNCLHdHQUEyQztBQUMzQyxxR0FBK0M7QUFFL0M7SUFBa0MsZ0NBQVc7SUFBN0M7O0lBb0JBLENBQUM7SUFsQkc7O09BRUc7SUFDSSw2QkFBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxVQUFVO1lBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV0RCxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDLENBcEJpQyx5QkFBVyxHQW9CNUM7QUFwQlksb0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIekIsd0dBQTJDO0FBQzNDLHFHQUErQztBQUUvQztJQUFzQyxvQ0FBVztJQUFqRDs7SUFvQkEsQ0FBQztJQWxCVSxpQ0FBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLFVBQVU7WUFDakQsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtnQkFDL0MsSUFBRyxNQUFNLENBQUMsRUFBRSxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFO29CQUN4QyxZQUFZLEdBQUcsSUFBSSxDQUFDO2lCQUN2QjtZQUNMLENBQUMsQ0FBQztZQUNGLElBQUcsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ2pGO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQUFDLENBcEJxQyx5QkFBVyxHQW9CaEQ7QUFwQlksNENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDdCLHdHQUEyQztBQUMzQyxzSUFBcUU7QUFDckUseUVBQWdDO0FBRWhDO0lBQXFDLG1DQUFXO0lBQWhEOztJQTJFQSxDQUFDO0lBeEVVLGdDQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFVLGFBQWE7WUFDbEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxZQUFZLEVBQUUsR0FBRztnQkFDbkUsSUFBSSxZQUFZLENBQUMsRUFBRSxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFO29CQUNsRCxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEQsT0FBTztpQkFDVjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgseUNBQXlDO1lBQ3pDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFO2dCQUNsRSxJQUFJLFFBQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hFLFVBQVUsQ0FBQztvQkFDUCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM5QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3hCLFVBQVUsQ0FBQzt3QkFDUCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNqQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFNLENBQUMsQ0FBQztvQkFFMUIsSUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO3dCQUN2QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7cUJBQzNCO29CQUVELElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7d0JBQzdDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDdkQ7Z0JBRUwsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBRVg7WUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDNUQsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQztnQkFDNUMsSUFBSSxXQUFXLEVBQUU7b0JBQ2IsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5RSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzFEO2dCQUVELElBQUksZUFBZSxHQUFHLENBQUMsV0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFDQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxxQ0FBaUIsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDckksTUFBTSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUU7b0JBQ3BDLElBQUksTUFBTSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7d0JBQ3RDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQ3pFO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUVILE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDeEUsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzVCLE9BQU87YUFDVjtZQUVELElBQUksYUFBYSxDQUFDLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JELElBQUksa0JBQWtCLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUxRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNsRDtRQUVMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxDQTNFb0MseUJBQVcsR0EyRS9DO0FBM0VZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjVCLHdHQUEyQztBQUUzQztJQUEyQyx5Q0FBVztJQUF0RDs7SUE0QkEsQ0FBQztJQTFCRzs7T0FFRztJQUNJLHNDQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFVBQVUsYUFBYTtZQUN2RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxZQUFZLEVBQUUsR0FBRztnQkFDbkUsSUFBSSxZQUFZLENBQUMsRUFBRSxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFO29CQUNsRCxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEQsT0FBTztpQkFDVjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBRyxhQUFhLENBQUMsV0FBVyxFQUFFO2dCQUMxQixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3hFLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUM1QixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVELEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDeEc7UUFFTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCw0QkFBQztBQUFELENBQUMsQ0E1QjBDLHlCQUFXLEdBNEJyRDtBQTVCWSxzREFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEMsMkdBQThDO0FBRTlDO0lBQWlDLCtCQUFXO0lBQTVDOztJQXVCQSxDQUFDO0lBckJVLDRCQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxjQUFJO1lBQzVCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsbUNBQW1DLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDakY7aUJBQU07Z0JBQ0gsSUFBSSxPQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hELE9BQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2hDLE9BQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELE9BQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQU07b0JBQzNDLE9BQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0RCxDQUFDLENBQUMsQ0FBQzthQUNOO1FBR0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLENBdkJnQyx5QkFBVyxHQXVCM0M7QUF2Qlksa0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeEIsMkdBQThDO0FBQzlDLHlHQUFrRDtBQUVsRDtJQUFvQyxrQ0FBVztJQUEvQzs7SUFrQkEsQ0FBQztJQWhCVSwrQkFBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQU07WUFDbEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBSztnQkFDdEMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWxDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsUUFBUTtnQkFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLENBbEJtQyx5QkFBVyxHQWtCOUM7QUFsQlksd0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIM0IsMkdBQThDO0FBRTlDO0lBQXNDLG9DQUFXO0lBQWpEOztJQWtCQSxDQUFDO0lBaEJVLGlDQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGNBQUk7WUFDakMsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNoRjtZQUVELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25FLElBQUcsV0FBVyxFQUFFO2dCQUNaLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMxQjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxDQWxCcUMseUJBQVcsR0FrQmhEO0FBbEJZLDRDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y3QiwyR0FBOEM7QUFFOUM7SUFBc0Msb0NBQVc7SUFBakQ7O0lBWUEsQ0FBQztJQVZVLGlDQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGNBQUk7WUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTdGLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxDQVpxQyx5QkFBVyxHQVloRDtBQVpZLDRDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y3QiwyR0FBOEM7QUFDOUMsNklBQTBFO0FBRTFFO0lBQWlELCtDQUFXO0lBQTVEOztJQXFCQSxDQUFDO0lBbkJVLDRDQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLDJCQUEyQixFQUFFLDRCQUFrQjtZQUUxRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLDJCQUFpQjtnQkFDOUQsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNqQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xELENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztZQUU5QyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxpQkFBaUIsRUFBRSxvQkFBb0I7Z0JBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO2lCQUN2SDtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsa0NBQUM7QUFBRCxDQUFDLENBckJnRCx5QkFBVyxHQXFCM0Q7QUFyQlksa0VBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHhDLDJHQUE4QztBQUM5QyxzR0FBZ0Q7QUFDaEQsMkhBQThEO0FBRTlEO0lBQXVDLHFDQUFXO0lBQWxEOztJQVlBLENBQUM7SUFWVSxrQ0FBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxjQUFJO1lBQ2xDLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLHlCQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2xILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxDQVpzQyx5QkFBVyxHQVlqRDtBQVpZLDhDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0o5Qix3R0FBMkM7QUFDM0MsZ0dBQTZDO0FBRTdDO0lBQW1DLGlDQUFXO0lBQTlDOztJQWdCQSxDQUFDO0lBZEc7O09BRUc7SUFDSSw4QkFBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsbUJBQVM7WUFDbkMsSUFBSSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQ0FoQmtDLHlCQUFXLEdBZ0I3QztBQWhCWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0gxQix3R0FBMkM7QUFDM0MsK0dBQW9EO0FBRXBEO0lBQXVDLHFDQUFXO0lBQWxEOztJQXdCQSxDQUFDO0lBdEJHOztPQUVHO0lBQ0ksa0NBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLHlCQUFlO1lBQzdDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQU87Z0JBQ3BCLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLGtCQUFrQixHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7WUFDbEQsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGlCQUFPO2dCQUM5QixJQUFJLGFBQWEsR0FBRyxJQUFJLGtCQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDekgsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUM7UUFFTixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQ0F4QnNDLHlCQUFXLEdBd0JqRDtBQXhCWSw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIOUIsMkdBQThDO0FBRTlDO0lBQXVELHFEQUFXO0lBQWxFOztJQWFBLENBQUM7SUFYVSxrREFBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLGNBQUk7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHdDQUFDO0FBQUQsQ0FBQyxDQWJzRCx5QkFBVyxHQWFqRTtBQWJZLDhFQUFpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y5QywyR0FBOEM7QUFFOUM7SUFBbUQsaURBQVc7SUFBOUQ7O0lBV0EsQ0FBQztJQVRVLDhDQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsY0FBSTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsb0NBQUM7QUFBRCxDQUFDLENBWGtELHlCQUFXLEdBVzdEO0FBWFksc0VBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjFDLDJHQUE4QztBQUM5Qyw0R0FBb0Q7QUFFcEQ7SUFBcUMsbUNBQVc7SUFBaEQ7O0lBeUJBLENBQUM7SUF2QlUsZ0NBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxjQUFJO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQUs7Z0JBQ3RDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWxDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBSztnQkFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVFLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNwQyxJQUFJLFdBQVcsRUFBRTtnQkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDOUQ7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQ0F6Qm9DLHlCQUFXLEdBeUIvQztBQXpCWSwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7O0FDRDVCO0lBS0kscUJBQVksSUFBVSxFQUFFLE1BQU07UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUdMLGtCQUFDO0FBQUQsQ0FBQztBQVhxQixrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDRGpDLHlHQUFrRDtBQUNsRCx3SkFBd0U7QUFDeEUsOEpBQTRFO0FBQzVFLGlJQUF1RDtBQUN2RCwwSUFBNkQ7QUFDN0QsOElBQWdFO0FBQ2hFLCtLQUFzRjtBQUN0RixpSkFBa0U7QUFDbEUsbU1BQW1HO0FBQ25HLHVMQUEyRjtBQUMzRiw2SUFBK0Q7QUFDL0QseUhBQW9EO0FBQ3BELHFJQUE0RDtBQUM1RCw4SEFBdUQ7QUFDdkQsaUlBQXlEO0FBQ3pELDRHQUEyQztBQUMzQyxnSkFBbUU7QUFDbkUsd0hBQW1EO0FBQ25ELGlJQUF5RDtBQUN6RCxtSkFBcUU7QUFFckUsOEhBQXVEO0FBQ3ZELHFIQUEwRDtBQUMxRCw4SUFBZ0U7QUFDaEUsb0lBQTJEO0FBRTNELElBQUksRUFBRSxHQUFHLG1CQUFPLENBQUMsc0VBQWtCLENBQUMsQ0FBQztBQUVyQztJQUtJLHNCQUFZLElBQVU7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLDhCQUFPLEdBQWQsVUFBZSxTQUFpQixFQUFFLFdBQW1CO1FBQ2pELHlCQUFXLENBQUMsa0JBQWtCLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFFLFlBQVksR0FBRyxXQUFXLEVBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRTtZQUM1Qix5QkFBVyxDQUFDLGtCQUFrQixDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXJCLElBQU0sTUFBTSxHQUFHO1lBQ1gsSUFBSSwrQ0FBc0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM3QyxJQUFJLG1EQUF3QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRS9DLElBQUkseUJBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFckMsSUFBSSxtQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN2QyxJQUFJLHlEQUEyQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xELElBQUkscUNBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDeEMsSUFBSSxtQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUV2QyxJQUFJLHFFQUFpQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3hELElBQUksNkRBQTZCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDcEQsSUFBSSxpQ0FBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3RDLElBQUkscUNBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFeEMsSUFBSSwrQkFBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3JDLElBQUksaUNBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxJQUFJLG1CQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBSSwyQ0FBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzQyxJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDckMsSUFBSSxpQ0FBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3RDLElBQUksbUNBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdkMsSUFBSSw2Q0FBcUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUMvQyxDQUFDO1FBRUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWtCO1lBQzlCLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDakMsSUFBSSwyQkFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0MsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFOUMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHNDQUFlLEdBQXRCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxJQUFJO1lBQzVDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUV0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsaUNBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxJQUFJLDJCQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM3QyxJQUFJLDZCQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUU5QywwQ0FBMEM7UUFFOUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDO0FBckZZLG9DQUFZOzs7Ozs7Ozs7Ozs7QUM3QnpCLGUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2dhbWUvSW5pdGlhbGl6ZXIudHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge01vbnN0ZXJ9IGZyb20gXCIuLi9DaGFyYWN0ZXJzL01vbnN0ZXJcIjtcbmltcG9ydCB7R29Ub01lc2hBbmRSdW5BY3Rpb259IGZyb20gXCIuL0dvVG9NZXNoQW5kUnVuQWN0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBBdHRhY2tBY3Rpb25zIHtcblxuICAgIHByaXZhdGUgZ2FtZTogR2FtZTtcbiAgICBwcml2YXRlIGF0dGFja09uY2U6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBhdHRhY2tlZE1vbnN0ZXI6IE1vbnN0ZXI7XG4gICAgcHJpdmF0ZSBjaGVja0F0dGFja09ic2VydmVyO1xuICAgIHByaXZhdGUgaW50ZXJ2YWxBdHRhY2tSZWdpc3RlcmVkRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGF0dGFja01vbnN0ZXIobW9uc3RlcjogTW9uc3Rlcik6IHZvaWQge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghZ2FtZS5wbGF5ZXIuaXNBbnlTa2lsbElzSW5Vc2UoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxDaGVja0F0dGFjaygpO1xuICAgICAgICAgICAgZ2FtZS5jb250cm9sbGVyLmF0dGFja1BvaW50ID0gbW9uc3Rlci5tZXNoRm9yTW92ZTtcbiAgICAgICAgICAgIGdhbWUuY29udHJvbGxlci50YXJnZXRQb2ludCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmF0dGFja09uY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrZWRNb25zdGVyID0gbW9uc3RlcjtcblxuICAgICAgICAgICAgR29Ub01lc2hBbmRSdW5BY3Rpb24uZXhlY3V0ZShnYW1lLCBtb25zdGVyLm1lc2hGb3JNb3ZlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZS5wbGF5ZXIucnVuQW5pbWF0aW9uRGVhdGhPclN0YW5kKCk7XG4gICAgICAgICAgICAgICAgZ2FtZS5wbGF5ZXIudW5yZWdpc3Rlck1vdmVXaXRoQ29sbGlzaW9uKHRydWUpO1xuICAgICAgICAgICAgICAgIHNlbGYuY2hlY2tBdHRhY2tPYnNlcnZlciA9IGdhbWUuZ2V0QmFieWxvblNjZW5lKCkub25CZWZvcmVSZW5kZXJPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2hlY2tBdHRhY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnRlcnZhbEF0dGFja1JlZ2lzdGVyZWRGdW5jdGlvbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmludGVydmFsQXR0YWNrRnVuY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWJiYWRvbk1vbnN0ZXJBdHRhY2soKTogdm9pZCB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbEF0dGFja1JlZ2lzdGVyZWRGdW5jdGlvbik7XG4gICAgICAgIHRoaXMuY2FuY2VsQ2hlY2tBdHRhY2soKTtcbiAgICAgICAgdGhpcy5nYW1lLmNvbnRyb2xsZXIuYXR0YWNrUG9pbnQgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBhdHRhY2tPbmx5T25jZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hdHRhY2tPbmNlID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsQXR0YWNrUmVnaXN0ZXJlZEZ1bmN0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FuY2VsQ2hlY2tBdHRhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5vbkJlZm9yZVJlbmRlck9ic2VydmFibGUucmVtb3ZlKHRoaXMuY2hlY2tBdHRhY2tPYnNlcnZlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnRlcnZhbEF0dGFja0Z1bmN0aW9uKCk6IHZvaWQge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgaWYgKCFnYW1lLnBsYXllci5pc0FueVNraWxsSXNJblVzZSgpKSB7XG4gICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnYXR0YWNrJywge1xuICAgICAgICAgICAgICAgIGF0dGFjazogdGhpcy5hdHRhY2tlZE1vbnN0ZXIuaWQsXG4gICAgICAgICAgICAgICAgdGFyZ2V0UG9pbnQ6IHRoaXMuYXR0YWNrZWRNb25zdGVyLm1lc2hGb3JNb3ZlLnBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiB0aGlzLmF0dGFja2VkTW9uc3Rlci5tZXNoRm9yTW92ZS5yb3RhdGlvbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0F0dGFjayhhY3Rpb25BZnRlckNoZWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXIubW9uc3RlcnNUb0F0dGFja1t0aGlzLmF0dGFja2VkTW9uc3Rlci5pZF0gPT0gIXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbEF0dGFja0Z1bmN0aW9uKCk7XG4gICAgICAgICAgICBnYW1lLmdldEJhYnlsb25TY2VuZSgpLm9uQmVmb3JlUmVuZGVyT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5jaGVja0F0dGFja09ic2VydmVyKTtcblxuICAgICAgICAgICAgaWYoIXRoaXMuYXR0YWNrT25jZSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbkFmdGVyQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBHb1RvTWVzaEFuZFJ1bkFjdGlvbiB7XG5cbiAgICBzdGF0aWMgZXhlY3V0ZShnYW1lOiBHYW1lLCBtZXNoOiBCQUJZTE9OLkFic3RyYWN0TWVzaCwgYWN0aW9uOiBGdW5jdGlvbik6IEJBQllMT04uT2JzZXJ2ZXI8YW55PiB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IGdhbWUucGxheWVyO1xuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IG1lc2gucG9zaXRpb247XG4gICAgICAgIGxldCBvYnNlcnZlcjtcbiAgICAgICAgbGV0IHNjZW5lID0gZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKTtcblxuICAgICAgICBzY2VuZS5vbkJlZm9yZVJlbmRlck9ic2VydmFibGUucmVtb3ZlKGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5nb1RvQWN0aW9uKTtcbiAgICAgICAgY29uc3QgY2hlY2tJbnRlcnNlY3Rpb25GdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIubWVzaEZvck1vdmUuaW50ZXJzZWN0c01lc2gobWVzaCkpIHtcbiAgICAgICAgICAgICAgICBnYW1lLmdldEJhYnlsb25TY2VuZSgpLm9uQmVmb3JlUmVuZGVyT2JzZXJ2YWJsZS5yZW1vdmUob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgIGFjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghcGxheWVyLm1lc2hGb3JNb3ZlLmludGVyc2VjdHNNZXNoKG1lc2gpKSB7XG4gICAgICAgICAgICBwbGF5ZXIucnVuUGxheWVyVG9Qb3NpdGlvbih0YXJnZXRQb3NpdGlvbik7XG4gICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnc2V0VGFyZ2V0UG9pbnQnLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRhcmdldFBvc2l0aW9uXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBzY2VuZS5vbkJlZm9yZVJlbmRlck9ic2VydmFibGUuYWRkKGNoZWNrSW50ZXJzZWN0aW9uRnVuY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuZ29Ub0FjdGlvbiA9IG9ic2VydmVyO1xuXG4gICAgICAgIHJldHVybiBvYnNlcnZlcjtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEFuaW1hdGlvbiB7XG5cbn1cblxuIiwiaW1wb3J0IHtBYnN0cmFjdEFuaW1hdGlvbn0gZnJvbSBcIi4vQWJzdHJhY3RBbmltYXRpb25cIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIEJvdW5jZUFuaW1hdGlvbiBleHRlbmRzIEFic3RyYWN0QW5pbWF0aW9uIHtcblxuICAgIHN0YXRpYyBnZXRBbmltYXRpb24oKTogQkFCWUxPTi5BbmltYXRpb24ge1xuICAgICAgICBsZXQgYW5pbWF0aW9uID0gbmV3IEJBQllMT04uQW5pbWF0aW9uKFwiYm91bmNlQW5pbWF0aW9uXCIsIFwicG9zaXRpb24ueVwiLCA1LFxuICAgICAgICAgICAgQkFCWUxPTi5BbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCxcbiAgICAgICAgICAgIEJBQllMT04uQW5pbWF0aW9uLkFOSU1BVElPTkxPT1BNT0RFX0NZQ0xFKTtcblxuICAgICAgICBjb25zdCBrZXlzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyYW1lOiAwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyYW1lOiAxNSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogMS41XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyYW1lOiAzMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICBhbmltYXRpb24uc2V0S2V5cyhrZXlzKTtcblxuICAgICAgICBjb25zdCBlYXNpbmdGdW5jdGlvbiA9IG5ldyBCQUJZTE9OLkJhY2tFYXNlKCk7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLnNldEVhc2luZ01vZGUoQkFCWUxPTi5FYXNpbmdGdW5jdGlvbi5FQVNJTkdNT0RFX0VBU0VJTk9VVCk7XG4gICAgICAgIGFuaW1hdGlvbi5zZXRFYXNpbmdGdW5jdGlvbihlYXNpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZhY3Rvcnkge1xuXG4gICAgcHJvdGVjdGVkIHNjZW5lOiBCQUJZTE9OLlNjZW5lO1xuICAgIHByb3RlY3RlZCBsb2FkZWRNZXNoZXM6IEFycmF5PEJBQllMT04uTWVzaD47XG5cbiAgICBwcm90ZWN0ZWQgZGlyOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0RmFjdG9yeSgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIEJBQllMT04uU2NlbmVMb2FkZXIuTG9hZEFzc2V0Q29udGFpbmVyKHRoaXMuZGlyLCB0aGlzLmZpbGVOYW1lLCB0aGlzLnNjZW5lLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBzZWxmLmxvYWRlZE1lc2hlcyA9IDxBcnJheTxCQUJZTE9OLk1lc2g+PiBjb250YWluZXIubWVzaGVzO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlQ2xvbmUobmFtZTogc3RyaW5nLCBjbG9uZVNrZWxldG9uOiBib29sZWFuID0gZmFsc2UpOiBCQUJZTE9OLk1lc2gge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG9hZGVkTWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbWVzaCA9IHRoaXMubG9hZGVkTWVzaGVzW2ldO1xuICAgICAgICAgICAgbWVzaC5sYXllck1hc2sgPSAyO1xuXG4gICAgICAgICAgICBpZiAobWVzaC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2xvbmVkTWVzaCA9IDxCQUJZTE9OLk1lc2g+IG1lc2guY2xvbmUoJ2Nsb25lXycgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoY2xvbmVTa2VsZXRvbikge1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWRNZXNoLnNrZWxldG9uID0gbWVzaC5za2VsZXRvbi5jbG9uZSgnY2xvbmVfc2tlbGV0b25fJyArIG5hbWUsICdjbG9uZV9za2VsZXRvbl8nICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsb25lZE1lc2guaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjbG9uZWRNZXNoLnNldEVuYWJsZWQodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVkTWVzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVJbnN0YW5jZShuYW1lOiBzdHJpbmcpOiBCQUJZTE9OLkFic3RyYWN0TWVzaCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb2FkZWRNZXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBtZXNoID0gdGhpcy5sb2FkZWRNZXNoZXNbaV07XG4gICAgICAgICAgICBtZXNoLmxheWVyTWFzayA9IDI7XG5cbiAgICAgICAgICAgIGlmIChtZXNoLm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZWRNZXNoID0gbWVzaC5jcmVhdGVJbnN0YW5jZSgnaW5zdGFuY2VfJyArIG5hbWUpO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlZE1lc2guaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZWRNZXNoLnNldEVuYWJsZWQodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VkTWVzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHtDaGFyYWN0ZXJBc3NldH0gZnJvbSBcIi4vQ2hhcmFjdGVyQXNzZXRcIjtcbmltcG9ydCB7U2tlbGV0b25Bc3NldH0gZnJvbSBcIi4vU2tlbGV0b25Bc3NldFwiO1xuaW1wb3J0IHtTa2VsZXRvbldhcnJpb3JBc3NldH0gZnJvbSBcIi4vU2tlbGV0b25XYXJyaW9yQXNzZXRcIjtcbmltcG9ydCB7U2tlbGV0b25Cb3NzQXNzZXR9IGZyb20gXCIuL1NrZWxldG9uQm9zc0Fzc2V0XCI7XG5pbXBvcnQge0NoZXN0QXNzZXR9IGZyb20gXCIuL0NoZXN0QXNzZXRcIjtcbmltcG9ydCB7TmF0dXJlQXNzZXR9IGZyb20gXCIuL05hdHVyZUFzc2V0XCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gXCJiYWJ5bG9uanNcIjtcbmltcG9ydCB7QWJzdHJhY3RGYWN0b3J5fSBmcm9tIFwiLi9BYnN0cmFjdEZhY3RvcnlcIjtcblxuZXhwb3J0IGNsYXNzIEFzc2V0cyB7XG5cbiAgICBjaGFyYWN0ZXI6IENoYXJhY3RlckFzc2V0O1xuICAgIHNrZWxldG9uOiBDaGFyYWN0ZXJBc3NldDtcbiAgICBza2VsZXRvbldhcnJpb3I6IENoYXJhY3RlckFzc2V0O1xuICAgIHNrZWxldG9uQm9zczogQ2hlc3RBc3NldDtcbiAgICBjaGVzdDogQ2hlc3RBc3NldDtcbiAgICBuYXR1cmVHcmFpbjogTmF0dXJlQXNzZXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXJBc3NldChzY2VuZSkuaW5pdEZhY3RvcnkoKTtcbiAgICAgICAgdGhpcy5za2VsZXRvbiA9IG5ldyBTa2VsZXRvbkFzc2V0KHNjZW5lKS5pbml0RmFjdG9yeSgpO1xuICAgICAgICB0aGlzLnNrZWxldG9uV2FycmlvciA9IG5ldyBTa2VsZXRvbldhcnJpb3JBc3NldChzY2VuZSkuaW5pdEZhY3RvcnkoKTtcbiAgICAgICAgdGhpcy5za2VsZXRvbkJvc3MgPSBuZXcgU2tlbGV0b25Cb3NzQXNzZXQoc2NlbmUpLmluaXRGYWN0b3J5KCk7XG4gICAgICAgIHRoaXMuY2hlc3QgPSBuZXcgQ2hlc3RBc3NldChzY2VuZSkuaW5pdEZhY3RvcnkoKTtcbiAgICAgICAgdGhpcy5uYXR1cmVHcmFpbiA9IG5ldyBOYXR1cmVBc3NldChzY2VuZSkuaW5pdEZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXNzZXRGYWN0b3J5QnlOYW1lKG5hbWU6IHN0cmluZyk6IEFic3RyYWN0RmFjdG9yeSB7XG4gICAgICAgIGxldCBhc3NldEZhY3RvcnkgPSBudWxsO1xuXG4gICAgICAgIHN3aXRjaChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdza2VsZXRvbic6XG4gICAgICAgICAgICAgICAgYXNzZXRGYWN0b3J5ID0gdGhpcy5za2VsZXRvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NrZWxldG9uV2Fycmlvcic6XG4gICAgICAgICAgICAgICAgYXNzZXRGYWN0b3J5ID0gdGhpcy5za2VsZXRvbldhcnJpb3I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdza2VsZXRvbkJvc3MnOlxuICAgICAgICAgICAgICAgIGFzc2V0RmFjdG9yeSA9IHRoaXMuc2tlbGV0b25Cb3NzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzc2V0RmFjdG9yeTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RGYWN0b3J5fSBmcm9tIFwiLi9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIENoYXJhY3RlckFzc2V0IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSk7XG4gICAgICAgIHRoaXMuZGlyID0gJ2Fzc2V0cy9DaGFyYWN0ZXJzL1dhcnJpb3IvJztcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9ICdXYXJyaW9yLmJhYnlsb24nO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RGYWN0b3J5fSBmcm9tIFwiLi9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIENoZXN0QXNzZXQgZXh0ZW5kcyBBYnN0cmFjdEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lKTtcbiAgICAgICAgdGhpcy5kaXIgPSAnYXNzZXRzL0Vudmlyb25tZW50L2NoZXN0Lyc7XG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSAnY2hlc3QuYmFieWxvbic7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0Fic3RyYWN0RmFjdG9yeX0gZnJvbSBcIi4vQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBOYXR1cmVBc3NldCBleHRlbmRzIEFic3RyYWN0RmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xuICAgICAgICB0aGlzLmRpciA9ICdhc3NldHMvRW52aXJvbm1lbnQvUGxhbnRzLyc7XG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSAnUGxhbnRzLmJhYnlsb24nO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RGYWN0b3J5fSBmcm9tIFwiLi9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIFNrZWxldG9uQXNzZXQgZXh0ZW5kcyBBYnN0cmFjdEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lKTtcbiAgICAgICAgdGhpcy5kaXIgPSAnYXNzZXRzL0NoYXJhY3RlcnMvU2tlbGV0b24vc2tlbGV0b24vJztcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9ICdza2VsZXRvbi5iYWJ5bG9uJztcbiAgICB9XG59XG4iLCJpbXBvcnQge0Fic3RyYWN0RmFjdG9yeX0gZnJvbSBcIi4vQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBTa2VsZXRvbkJvc3NBc3NldCBleHRlbmRzIEFic3RyYWN0RmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xuICAgICAgICB0aGlzLmRpciA9ICdhc3NldHMvQ2hhcmFjdGVycy9Ta2VsZXRvbi9za2VsZXRvbkJvc3MvJztcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9ICdza2VsZXRvbkJvc3MuYmFieWxvbic7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtBYnN0cmFjdEZhY3Rvcnl9IGZyb20gXCIuL0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgU2tlbGV0b25XYXJyaW9yQXNzZXQgZXh0ZW5kcyBBYnN0cmFjdEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lKTtcbiAgICAgICAgdGhpcy5kaXIgPSAnYXNzZXRzL0NoYXJhY3RlcnMvU2tlbGV0b24vc2tlbGV0b25XYXJyaW9yLyc7XG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSAnc2tlbGV0b25XYXJyaW9yLmJhYnlsb24nO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEJBQllMT04gZnJvbSBcImJhYnlsb25qc1wiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUNhbWVyYSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluaXRDYW1lcmFJblNjZW5lKHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIGNvbnN0IGNhbWVyYUJ5TmFtZSA9IHNjZW5lLmdldENhbWVyYUJ5TmFtZSgnQ2FtZXJhJyk7XG4gICAgICAgIGlmKGNhbWVyYUJ5TmFtZSkge1xuICAgICAgICAgICAgY2FtZXJhQnlOYW1lLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBnYW1lQ2FtZXJhID0gbmV3IEJBQllMT04uRnJlZUNhbWVyYShcImdhbWVDYW1lcmFcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKSwgc2NlbmUpO1xuICAgICAgICBnYW1lQ2FtZXJhLnJvdGF0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLjc1LDAuNzUsMCk7XG4gICAgICAgIGdhbWVDYW1lcmEubWluWiA9IDEwO1xuICAgICAgICBnYW1lQ2FtZXJhLmZvdk1vZGUgPSAwO1xuICAgICAgICBnYW1lQ2FtZXJhLmxheWVyTWFzayA9IDI7XG5cbiAgICAgICAgLy8vTU9CSUxFXG4gICAgICAgIGlmKEdhbWUuTU9CSUxFX0NMSUVOVCkge1xuICAgICAgICAgICAgZ2FtZUNhbWVyYS5tYXhaID0gNTA7XG4gICAgICAgICAgICBnYW1lQ2FtZXJhLmZvdiA9IDAuODtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdhbWVDYW1lcmEubWF4WiA9IDEwMDtcbiAgICAgICAgICAgIGdhbWVDYW1lcmEuZm92ID0gMS4yO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGd1aUNhbWVyYSA9IG5ldyBCQUJZTE9OLkZyZWVDYW1lcmEoXCJHVUlDYW1lcmFcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKSwgc2NlbmUpO1xuICAgICAgICBndWlDYW1lcmEubGF5ZXJNYXNrID0gMTtcbiAgICAgICAgZ3VpQ2FtZXJhLnJvdGF0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLjc1LDAuNzUsMCk7XG4gICAgICAgIGd1aUNhbWVyYS5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoLTksMTAsMyk7XG5cbiAgICAgICAgc2NlbmUuYWN0aXZlQ2FtZXJhcyA9IFtnYW1lQ2FtZXJhLCBndWlDYW1lcmFdO1xuICAgICAgICBzY2VuZS5jYW1lcmFUb1VzZUZvclBvaW50ZXJzID0gZ2FtZUNhbWVyYTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gXCJiYWJ5bG9uanNcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcblxuZXhwb3J0IGNsYXNzIFNlbGVjdENoYXJhY3RlckNhbWVyYSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluaXRDYW1lcmFJblNjZW5lKHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgICAgIGxldCBnYW1lQ2FtZXJhID0gbmV3IEJBQllMT04uRnJlZUNhbWVyYShcImdhbWVDYW1lcmFcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKSwgc2NlbmUpO1xuICAgICAgICBnYW1lQ2FtZXJhLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAxNCwgLTIwKTtcbiAgICAgICAgZ2FtZUNhbWVyYS5yb3RhdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMC41LCAwLCAwKTtcbiAgICAgICAgZ2FtZUNhbWVyYS5tYXhaID0gMjAwO1xuICAgICAgICBnYW1lQ2FtZXJhLm1pblogPSAtMjAwO1xuICAgICAgICAvLyBjYW1lcmEuZm92ID0gMTMuMjU7XG4gICAgICAgIGdhbWVDYW1lcmEuZm92TW9kZSA9IDA7XG4gICAgICAgIGdhbWVDYW1lcmEubGF5ZXJNYXNrID0gMjtcblxuICAgICAgICBzY2VuZS5hY3RpdmVDYW1lcmFzID0gW2dhbWVDYW1lcmFdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q2hhcmFjdGVyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgQU5JTUFUSU9OX1dBTEs6c3RyaW5nID0gJ1J1bic7XG4gICAgcHVibGljIHN0YXRpYyBBTklNQVRJT05fREVBVEg6c3RyaW5nID0gJ2RlYXRoJztcbiAgICBwdWJsaWMgc3RhdGljIEFOSU1BVElPTl9TVEFORF9XRUFQT046c3RyaW5nID0gJ1N0YW5kX3dpdGhfd2VhcG9uJztcbiAgICBwdWJsaWMgc3RhdGljIEFOSU1BVElPTl9BVFRBQ0tfMDE6c3RyaW5nID0gJ0F0dGFjayc7XG4gICAgcHVibGljIHN0YXRpYyBBTklNQVRJT05fQVRUQUNLXzAyOnN0cmluZyA9ICdBdHRhY2swMic7XG4gICAgcHVibGljIHN0YXRpYyBBTklNQVRJT05fU0tJTExfMDE6c3RyaW5nID0gJ1NraWxsMDEnO1xuICAgIHB1YmxpYyBzdGF0aWMgQU5JTUFUSU9OX1NLSUxMXzAyOnN0cmluZyA9ICdTa2lsbDAyJztcblxuICAgIHB1YmxpYyBtZXNoOkJBQllMT04uTWVzaDtcbiAgICBwdWJsaWMgbWVzaEZvck1vdmU6QkFCWUxPTi5NZXNoO1xuICAgIHB1YmxpYyBpZDphbnk7XG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xuXG4gICAgLyoqIENoYXJhY3RlciBhdHV0cyAqL1xuICAgIHB1YmxpYyBzdGF0aXN0aWNzO1xuXG4gICAgcHVibGljIGdhbWU6R2FtZTtcbiAgICBwdWJsaWMgYW5pbWF0aW9uOkJBQllMT04uQW5pbWF0YWJsZTtcbiAgICBwdWJsaWMgaXNDb250cm9sbGFibGU6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNBdHRhY2s6IGJvb2xlYW47XG4gICAgcHVibGljIGlzV2FsazogYm9vbGVhbjtcbiAgICBwdWJsaWMgaXNTdGFuZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgaXNEZWF0aDogYm9vbGVhbjtcblxuICAgIHB1YmxpYyBzZnhXYWxrOiBCQUJZTE9OLlNvdW5kO1xuICAgIHByb3RlY3RlZCBzZnhIaXQ6IEJBQllMT04uU291bmQ7XG5cbiAgICBwdWJsaWMgYmxvb2RQYXJ0aWNsZXM6IEJBQllMT04uSVBhcnRpY2xlU3lzdGVtO1xuICAgIHB1YmxpYyB3YWxrU21va2U6IEJBQllMT04uSVBhcnRpY2xlU3lzdGVtO1xuICAgIHB1YmxpYyBkeW5hbWljRnVuY3Rpb247XG4gICAgcHVibGljIHBhcnRpY2xlU3lzdGVtRW1pdHRlcjtcbiAgICBwdWJsaWMgbmF2QWdlbnRJbmRleDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcsIGdhbWU6R2FtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0UGF0cmljbGVTeXN0ZW1EYW1hZ2UoKSB7XG4gICAgICAgIGxldCBlbWl0dGVyRGFtYWdlID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveChcImVtaXR0ZXIwXCIsIDAuMSwgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgZW1pdHRlckRhbWFnZS5wYXJlbnQgPSB0aGlzLm1lc2g7XG4gICAgICAgIGVtaXR0ZXJEYW1hZ2UucG9zaXRpb24ueSA9IDQ7XG4gICAgICAgIGVtaXR0ZXJEYW1hZ2UudmlzaWJpbGl0eSA9IDA7XG4gICAgICAgIHRoaXMucGFydGljbGVTeXN0ZW1FbWl0dGVyID0gZW1pdHRlckRhbWFnZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0RhbWFnZShkYW1hZ2UpIHtcbiAgICAgICAgbGV0IGR5bmFtaWNUZXh0dXJlID0gbmV3IEJBQllMT04uRHluYW1pY1RleHR1cmUobnVsbCwgMTI4LCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCksIHRydWUpO1xuICAgICAgICBsZXQgZm9udCA9IFwiNDRweCBSdXNsYW5EaXNwbGF5XCI7XG4gICAgICAgIGR5bmFtaWNUZXh0dXJlLmRyYXdUZXh0KGRhbWFnZSwgNjQsIDgwLCBmb250LCBcIndoaXRlXCIsIG51bGwsIHRydWUsIHRydWUpO1xuXG4gICAgICAgIGxldCBwYXJ0aWNsZVN5c3RlbURhbWFnZSA9IG5ldyBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtKG51bGwsIDEgLypDYXBhY2l0eSwgaS5lLiBtYXggb2YgMSBhdCBhIHRpbWUqLywgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW1EYW1hZ2UuZW1pdHRlciA9IHRoaXMucGFydGljbGVTeXN0ZW1FbWl0dGVyO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS5lbWl0UmF0ZSA9IDEwMDtcbiAgICAgICAgcGFydGljbGVTeXN0ZW1EYW1hZ2UubWluU2l6ZSA9IDIuMDtcbiAgICAgICAgcGFydGljbGVTeXN0ZW1EYW1hZ2UubWF4U2l6ZSA9IDQuMDtcbiAgICAgICAgcGFydGljbGVTeXN0ZW1EYW1hZ2UuZ3Jhdml0eSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgLTkuODEqMiwgMCk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtRGFtYWdlLmRpcmVjdGlvbjEgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEwLCAwKTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW1EYW1hZ2UuZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwxMCwgMCk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtRGFtYWdlLm1pbkFuZ3VsYXJTcGVlZCA9IC1NYXRoLlBJO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS5tYXhBbmd1bGFyU3BlZWQgPSBNYXRoLlBJO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS5taW5MaWZlVGltZSA9IDE7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtRGFtYWdlLm1heExpZmVUaW1lID0gMTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW1EYW1hZ2UudGFyZ2V0U3RvcER1cmF0aW9uID0gMC44O1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbURhbWFnZS5wYXJ0aWNsZVRleHR1cmUgPSBkeW5hbWljVGV4dHVyZTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW1EYW1hZ2UubGF5ZXJNYXNrID0gMjtcbiAgICAgICAgcGFydGljbGVTeXN0ZW1EYW1hZ2Uuc3RhcnQoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZHluYW1pY1RleHR1cmUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW1EYW1hZ2UuZGlzcG9zZSgpO1xuICAgICAgICB9LDE1MDApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVCb3hGb3JNb3ZlKHBvc2l0aW9uOiBCQUJZTE9OLlZlY3RvcjMpIHtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCk7XG5cbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZSA9IEJBQllMT04uTWVzaC5DcmVhdGVCb3godGhpcy5uYW1lKydfbW92ZUJveCcsIDQsIHNjZW5lLCBmYWxzZSk7XG4gICAgICAgIHRoaXMubWVzaEZvck1vdmUuY2hlY2tDb2xsaXNpb25zID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS52aXNpYmlsaXR5ID0gMDtcbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmxheWVyTWFzayA9IDI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHJ1bkFuaW1hdGlvbkhpdChhbmltYXRpb246IHN0cmluZywgY2FsbGJhY2tTdGFydCA9IG51bGwsIGNhbGxiYWNrRW5kID0gbnVsbCwgbG9vcDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IG1lc2ggPSB0aGlzLm1lc2g7XG4gICAgICAgIGxldCBza2VsZXRvbiA9IG1lc2guc2tlbGV0b247XG4gICAgICAgIHRoaXMuaXNBdHRhY2sgPSB0cnVlO1xuXG4gICAgICAgIGlmIChjYWxsYmFja0VuZCkge1xuICAgICAgICAgICAgY2FsbGJhY2tTdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYuc2Z4SGl0KSB7XG4gICAgICAgICAgICBzZWxmLnNmeEhpdC5wbGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmFuaW1hdGlvbiA9IHNrZWxldG9uLmJlZ2luQW5pbWF0aW9uKGFuaW1hdGlvbiwgbG9vcCwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrRW5kKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tFbmQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5ydW5BbmltYXRpb25EZWF0aE9yU3RhbmQoKTtcbiAgICAgICAgICAgIHNlbGYuaXNBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJ1bkFuaW1hdGlvblNraWxsKGFuaW1hdGlvbjogc3RyaW5nLCBjYWxsYmFja1N0YXJ0ID0gbnVsbCwgY2FsbGJhY2tFbmQgPSBudWxsLCBsb29wOiBib29sZWFuID0gZmFsc2UsIHNwZWVkOiBudW1iZXIgPSAxLCBzdGFuZEFuaW1hdGlvbk9uRmluaXNoOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBtZXNoID0gdGhpcy5tZXNoO1xuICAgICAgICBsZXQgc2tlbGV0b24gPSBtZXNoLnNrZWxldG9uO1xuXG4gICAgICAgIGlmIChjYWxsYmFja1N0YXJ0KSB7XG4gICAgICAgICAgICBjYWxsYmFja1N0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmFuaW1hdGlvbiA9IHNrZWxldG9uLmJlZ2luQW5pbWF0aW9uKGFuaW1hdGlvbiwgbG9vcCwgc3BlZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja0VuZCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRW5kKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHN0YW5kQW5pbWF0aW9uT25GaW5pc2gpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJ1bkFuaW1hdGlvbkRlYXRoT3JTdGFuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBydW5BbmltYXRpb25XYWxrKCk6dm9pZCB7XG4gICAgICAgIGxldCBza2VsZXRvbiA9IHRoaXMubWVzaC5za2VsZXRvbjtcblxuICAgICAgICBpZighdGhpcy5pc1dhbGsgJiYgIXRoaXMuaXNBdHRhY2sgJiYgc2tlbGV0b24pIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuaXNXYWxrID0gdHJ1ZTtcblxuICAgICAgICAgICAgc2VsZi5zZnhXYWxrLnBsYXkoKTtcbiAgICAgICAgICAgIHNlbGYub25XYWxrU3RhcnQoKTtcbiAgICAgICAgICAgIHNlbGYuYW5pbWF0aW9uID0gc2tlbGV0b24uYmVnaW5BbmltYXRpb24oQWJzdHJhY3RDaGFyYWN0ZXIuQU5JTUFUSU9OX1dBTEssIHRydWUsIDEuMiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYucnVuQW5pbWF0aW9uRGVhdGhPclN0YW5kKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5hbmltYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYuaXNXYWxrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5zZnhXYWxrLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBzZWxmLm9uV2Fsa0VuZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcnVuQW5pbWF0aW9uU3RhbmQoKTp2b2lkIHtcbiAgICAgICAgbGV0IHNrZWxldG9uID0gdGhpcy5tZXNoLnNrZWxldG9uO1xuXG4gICAgICAgIGlmKCF0aGlzLmlzU3RhbmQgJiYgc2tlbGV0b24pIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuaXNTdGFuZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHNlbGYuYW5pbWF0aW9uID0gc2tlbGV0b24uYmVnaW5BbmltYXRpb24oQWJzdHJhY3RDaGFyYWN0ZXIuQU5JTUFUSU9OX1NUQU5EX1dFQVBPTiwgdHJ1ZSwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuYW5pbWF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxmLmlzU3RhbmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZihzZWxmLmlzRGVhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ydW5BbmltYXRpb25EZWF0aCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJ1bkFuaW1hdGlvbkRlYXRoKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5tZXNoLnNrZWxldG9uLmJlZ2luQW5pbWF0aW9uKEFic3RyYWN0Q2hhcmFjdGVyLkFOSU1BVElPTl9ERUFUSCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJ1bkFuaW1hdGlvbkRlYXRoT3JTdGFuZCgpOnZvaWQge1xuICAgICAgICBpZih0aGlzLmlzRGVhdGgpIHtcbiAgICAgICAgICAgIHRoaXMucnVuQW5pbWF0aW9uRGVhdGgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucnVuQW5pbWF0aW9uU3RhbmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRXYWxrU3BlZWQoKSB7XG4gICAgICAgIGxldCBhbmltYXRpb25SYXRpbyA9IHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5nZXRBbmltYXRpb25SYXRpbygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRpc3RpY3Mud2Fsa1NwZWVkIC8gYW5pbWF0aW9uUmF0aW87XG4gICAgfTtcblxuICAgIGFic3RyYWN0IHJlbW92ZUZyb21Xb3JsZCgpO1xuXG4gICAgLyoqIEV2ZW50cyAqL1xuICAgIHByb3RlY3RlZCBvbldhbGtTdGFydCgpIHt9O1xuICAgIHByb3RlY3RlZCBvbldhbGtFbmQoKSB7fTtcbn1cbiIsImltcG9ydCB7QWJzdHJhY3RDaGFyYWN0ZXJ9IGZyb20gXCIuL0Fic3RyYWN0Q2hhcmFjdGVyXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge0Jsb29kfSBmcm9tIFwiLi4vUGFydGljbGVzL0Jsb29kXCI7XG5pbXBvcnQge1dhbGtTbW9rZX0gZnJvbSBcIi4uL1BhcnRpY2xlcy9XYWxrU21va2VcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIE1vbnN0ZXIgZXh0ZW5kcyBBYnN0cmFjdENoYXJhY3RlciB7XG5cbiAgICBwcm90ZWN0ZWQgdGFyZ2V0OiBzdHJpbmc7XG4gICAgcHVibGljIGludGVydmFsQXR0YWNrUmVnaXN0ZXJlZEZ1bmN0aW9uO1xuICAgIHB1YmxpYyBjaGVja0F0dGFja09ic2VydmVyO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgc2VydmVyS2V5OiBudW1iZXIsIHNlcnZlckRhdGE6IGFueSkge1xuICAgICAgICBzdXBlcihzZXJ2ZXJEYXRhLm5hbWUsIGdhbWUpO1xuXG4gICAgICAgIHRoaXMuc3RhdGlzdGljcyA9IHNlcnZlckRhdGEuc3RhdGlzdGljcztcbiAgICAgICAgdGhpcy5pZCA9IHNlcnZlcktleTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUJveEZvck1vdmUobmV3IEJBQllMT04uVmVjdG9yMyhzZXJ2ZXJEYXRhLnBvc2l0aW9uLngsIHNlcnZlckRhdGEucG9zaXRpb24ueSwgc2VydmVyRGF0YS5wb3NpdGlvbi56KSk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVzaChzZXJ2ZXJEYXRhLnR5cGUsIHNlcnZlckRhdGEubWVzaE5hbWUsIG5ldyBCQUJZTE9OLlZlY3RvcjMoc2VydmVyRGF0YS5zY2FsZSwgc2VydmVyRGF0YS5zY2FsZSwgc2VydmVyRGF0YS5zY2FsZSkpO1xuICAgICAgICB0aGlzLmluaXRTZngoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckFjdGlvbnMoKTtcblxuICAgICAgICB0aGlzLmJsb29kUGFydGljbGVzID0gbmV3IEJsb29kKGdhbWUsIHRoaXMubWVzaCkucGFydGljbGVTeXN0ZW07XG4gICAgICAgIHRoaXMud2Fsa1Ntb2tlID0gV2Fsa1Ntb2tlLmdldFBhcnRpY2xlcyhnYW1lLmdldEJhYnlsb25TY2VuZSgpLCAyLCB0aGlzLm1lc2gpO1xuXG4gICAgICAgIHRoaXMuaW5pdFBhdHJpY2xlU3lzdGVtRGFtYWdlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVNZXNoKGZhY3RvcnlOYW1lOnN0cmluZywgbWVzaE5hbWU6c3RyaW5nLCBzY2FsZTogQkFCWUxPTi5WZWN0b3IzKSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgbGV0IG1lc2ggPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuYXNzZXRzLmdldEFzc2V0RmFjdG9yeUJ5TmFtZShmYWN0b3J5TmFtZSkuY3JlYXRlQ2xvbmUobWVzaE5hbWUsIHRydWUpO1xuICAgICAgICBtZXNoLnJvdGF0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCBNYXRoLlBJLCAwKTtcbiAgICAgICAgbWVzaC52aXNpYmlsaXR5ID0gMTtcbiAgICAgICAgbWVzaC5pc1BpY2thYmxlID0gZmFsc2U7XG4gICAgICAgIG1lc2guc2NhbGluZyA9IHNjYWxlO1xuICAgICAgICBtZXNoLnNrZWxldG9uLmVuYWJsZUJsZW5kaW5nKDAuMik7XG4gICAgICAgIG1lc2gub3V0bGluZUNvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKDAuMywgMCwgMCk7XG4gICAgICAgIG1lc2gub3V0bGluZVdpZHRoID0gMC4xO1xuICAgICAgICBtZXNoLnBhcmVudCA9IHRoaXMubWVzaEZvck1vdmU7XG5cbiAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm9wdGlvbnMuYWRkTWVzaFRvRHluYW1pY1NoYWRvd0dlbmVyYXRvcihtZXNoKTtcblxuICAgICAgICB0aGlzLm1lc2ggPSBtZXNoO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJBY3Rpb25zKCkge1xuICAgICAgICBjb25zdCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcih0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25Qb2ludGVyT3V0VHJpZ2dlciwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYubWVzaC5yZW5kZXJPdXRsaW5lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5nYW1lLmd1aS5jaGFyYWN0ZXJUb3BIcC5oaWRlSHBCYXIoKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25Qb2ludGVyT3ZlclRyaWdnZXIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLm1lc2gucmVuZGVyT3V0bGluZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VsZi5nYW1lLmd1aS5jaGFyYWN0ZXJUb3BIcC5zaG93SHBDaGFyYWN0ZXIoc2VsZik7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKFxuICAgICAgICAgICAgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUGlja0Rvd25UcmlnZ2VyLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuYXR0YWNrQWN0aW9ucy5hdHRhY2tNb25zdGVyKHNlbGYpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMubWVzaEZvck1vdmUuYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihcbiAgICAgICAgICAgIEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBpY2tVcFRyaWdnZXIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXllci5hdHRhY2tBY3Rpb25zLmF0dGFja09ubHlPbmNlKCk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKFxuICAgICAgICAgICAgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUGlja091dFRyaWdnZXIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXllci5hdHRhY2tBY3Rpb25zLmFiYmFkb25Nb25zdGVyQXR0YWNrKCk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRTZngoKSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgdGhpcy5zZnhIaXQgPSBuZXcgQkFCWUxPTi5Tb3VuZChcIkNoYXJhY3RlckhpdFwiLCBcImFzc2V0cy9zb3VuZHMvY2hhcmFjdGVyL2hpdC5tcDNcIiwgZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSwgbnVsbCwge1xuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZnhXYWxrID0gbmV3IEJBQllMT04uU291bmQoXCJDaGFyYWN0ZXJIaXRcIiwgbnVsbCwgZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSwgbnVsbCwge1xuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUZyb21Xb3JsZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxBdHRhY2tSZWdpc3RlcmVkRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbEF0dGFja1JlZ2lzdGVyZWRGdW5jdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuZ2FtZS5wbGF5ZXIubW9uc3RlcnNUb0F0dGFja1t0aGlzLmlkXTtcbiAgICAgICAgaWYodGhpcy5nYW1lLmNvbnRyb2xsZXIuYXR0YWNrUG9pbnQgPT0gdGhpcy5tZXNoRm9yTW92ZSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnBsYXllci5hdHRhY2tBY3Rpb25zLmFiYmFkb25Nb25zdGVyQXR0YWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLm1lc2hGb3JNb3ZlLmRpc3Bvc2UoKTtcbiAgICAgICAgc2VsZi53YWxrU21va2UuZGlzcG9zZSgpO1xuICAgICAgICBzZWxmLmJsb29kUGFydGljbGVzLmRpc3Bvc2UoKTtcblxuICAgICAgICBsZXQgZmlyZVN5c3RlbSA9IG5ldyBCQUJZTE9OLkdQVVBhcnRpY2xlU3lzdGVtKFwicGFydGljbGVzXCIsIHsgY2FwYWNpdHk6IDEwMDAgfSwgc2NlbmUpO1xuICAgICAgICBmaXJlU3lzdGVtLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvZmxhcmUucG5nXCIsIHNjZW5lKTtcbiAgICAgICAgZmlyZVN5c3RlbS5lbWl0dGVyID0gc2VsZi5tZXNoRm9yTW92ZS5wb3NpdGlvbi5jbG9uZSgpOyAvLyB0aGUgc3RhcnRpbmcgb2JqZWN0LCB0aGUgZW1pdHRlclxuICAgICAgICBmaXJlU3lzdGVtLm1pbkVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0xLCAyLCAtMSk7IC8vIFN0YXJ0aW5nIGFsbCBmcm9tXG4gICAgICAgIGZpcmVTeXN0ZW0ubWF4RW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMSwgMSwgMSk7IC8vIFRvLi4uXG4gICAgICAgIGZpcmVTeXN0ZW0uY29sb3IxID0gbmV3IEJBQllMT04uQ29sb3I0KDEsIDAuNSwgMCwgMS4wKTtcbiAgICAgICAgZmlyZVN5c3RlbS5jb2xvcjIgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMSwgMC41LCAwLCAxLjApO1xuICAgICAgICBmaXJlU3lzdGVtLmNvbG9yRGVhZCA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLCAwKTtcbiAgICAgICAgZmlyZVN5c3RlbS5taW5TaXplID0gMC4zO1xuICAgICAgICBmaXJlU3lzdGVtLm1heFNpemUgPSAwLjY7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWluTGlmZVRpbWUgPSAwLjI7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWF4TGlmZVRpbWUgPSAwLjY7XG4gICAgICAgIGZpcmVTeXN0ZW0uZW1pdFJhdGUgPSAxMDAwO1xuICAgICAgICBmaXJlU3lzdGVtLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX09ORU9ORTtcbiAgICAgICAgZmlyZVN5c3RlbS5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAyMCwgMCk7XG4gICAgICAgIGZpcmVTeXN0ZW0uZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgNCwgMCk7XG4gICAgICAgIGZpcmVTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgOCwgMCk7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWluQW5ndWxhclNwZWVkID0gMDtcbiAgICAgICAgZmlyZVN5c3RlbS5tYXhBbmd1bGFyU3BlZWQgPSBNYXRoLlBJO1xuICAgICAgICBmaXJlU3lzdGVtLm1pbkVtaXRQb3dlciA9IDE7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWF4RW1pdFBvd2VyID0gMjtcbiAgICAgICAgZmlyZVN5c3RlbS5sYXllck1hc2sgPSAyO1xuICAgICAgICBmaXJlU3lzdGVtLnN0YXJ0KCk7XG5cbiAgICAgICAgbGV0IHNtb2tlU3lzdGVtID0gbmV3IEJBQllMT04uR1BVUGFydGljbGVTeXN0ZW0oXCJwYXJ0aWNsZXNcIiwgeyBjYXBhY2l0eTogNTAwIH0sIHNjZW5lKTtcbiAgICAgICAgc21va2VTeXN0ZW0ucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9mbGFyZS5wbmdcIiwgc2NlbmUpO1xuICAgICAgICBzbW9rZVN5c3RlbS5lbWl0dGVyID0gc2VsZi5tZXNoRm9yTW92ZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICBzbW9rZVN5c3RlbS5taW5FbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygtMC44LCAzLCAtMC44KTtcbiAgICAgICAgc21va2VTeXN0ZW0ubWF4RW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMC44LCAxLCAwLjgpO1xuICAgICAgICBzbW9rZVN5c3RlbS5jb2xvcjEgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMC4xLCAwLjEsIDAuMSwgMS4wKTtcbiAgICAgICAgc21va2VTeXN0ZW0uY29sb3IyID0gbmV3IEJBQllMT04uQ29sb3I0KDAuMSwgMC4xLCAwLjEsIDEuMCk7XG4gICAgICAgIHNtb2tlU3lzdGVtLmNvbG9yRGVhZCA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLCAwKTtcbiAgICAgICAgc21va2VTeXN0ZW0ubWluU2l6ZSA9IDAuMztcbiAgICAgICAgc21va2VTeXN0ZW0ubWF4U2l6ZSA9IDE7XG4gICAgICAgIHNtb2tlU3lzdGVtLm1pbkxpZmVUaW1lID0gMC41O1xuICAgICAgICBzbW9rZVN5c3RlbS5tYXhMaWZlVGltZSA9IDAuNztcbiAgICAgICAgc21va2VTeXN0ZW0uZW1pdFJhdGUgPSA1MDAwO1xuICAgICAgICBzbW9rZVN5c3RlbS5ibGVuZE1vZGUgPSBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9PTkVPTkU7XG4gICAgICAgIHNtb2tlU3lzdGVtLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDIwLCAwKTtcbiAgICAgICAgc21va2VTeXN0ZW0uZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoLTEsIDYsIC0xKTtcbiAgICAgICAgc21va2VTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMC41LCA2LCAwLjUpO1xuICAgICAgICBzbW9rZVN5c3RlbS5taW5Bbmd1bGFyU3BlZWQgPSAwO1xuICAgICAgICBzbW9rZVN5c3RlbS5tYXhBbmd1bGFyU3BlZWQgPSBNYXRoLlBJO1xuICAgICAgICBzbW9rZVN5c3RlbS5taW5FbWl0UG93ZXIgPSAxO1xuICAgICAgICBzbW9rZVN5c3RlbS5tYXhFbWl0UG93ZXIgPSAyO1xuICAgICAgICBzbW9rZVN5c3RlbS5sYXllck1hc2sgPSAyO1xuICAgICAgICBzbW9rZVN5c3RlbS5zdGFydCgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc21va2VTeXN0ZW0uc3RvcCgpO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5zdG9wKCk7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzbW9rZVN5c3RlbS5kaXNwb3NlKCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmRpc3Bvc2UoKTtcbiAgICAgICAgfSwgMzAwMCk7XG5cbiAgICB9XG5cbiAgICByZXRyaWV2ZUhpdCh1cGRhdGVkRW5lbXkpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRpc3RpY3MuaHAgIT0gdXBkYXRlZEVuZW15LnN0YXRpc3RpY3MuaHApIHtcbiAgICAgICAgICAgIGxldCBkYW1hZ2UgPSAodGhpcy5zdGF0aXN0aWNzLmhwIC0gdXBkYXRlZEVuZW15LnN0YXRpc3RpY3MuaHApO1xuICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzLmhwID0gdXBkYXRlZEVuZW15LnN0YXRpc3RpY3MuaHA7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuYmxvb2RQYXJ0aWNsZXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dEYW1hZ2UoZGFtYWdlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ibG9vZFBhcnRpY2xlcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0YXRpc3RpY3MuaHAgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmlzRGVhdGggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlRnJvbVdvcmxkKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5nYW1lLmd1aS5jaGFyYWN0ZXJUb3BIcC5yZWZyZXNoUGFuZWwoKTtcbiAgICAgICAgICAgIH0sIDQwMCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbldhbGtTdGFydCgpIHtcbiAgICAgICAgdGhpcy53YWxrU21va2Uuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25XYWxrRW5kKCkge1xuICAgICAgICB0aGlzLndhbGtTbW9rZS5zdG9wKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtBYnN0cmFjdENoYXJhY3Rlcn0gZnJvbSBcIi4vQWJzdHJhY3RDaGFyYWN0ZXJcIjtcbmltcG9ydCB7QXR0YWNrQWN0aW9uc30gZnJvbSBcIi4uL0FjdGlvbnMvQXR0YWNrQWN0aW9uc1wiO1xuaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuLi9QbGF5ZXIvSW52ZW50b3J5XCI7XG5pbXBvcnQge0Fic3RyYWN0U2tpbGx9IGZyb20gXCIuLi9QbGF5ZXIvU2tpbGxzL0Fic3RyYWN0U2tpbGxcIjtcbmltcG9ydCB7R29kUmF5fSBmcm9tIFwiLi4vRWZmZWN0cy9Hb2RSYXlcIjtcbmltcG9ydCB7V2Fsa1Ntb2tlfSBmcm9tIFwiLi4vUGFydGljbGVzL1dhbGtTbW9rZVwiO1xuaW1wb3J0IHtQbGF5ZXJJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL0dVSS9QbGF5ZXJJbmZvcm1hdGlvblwiO1xuaW1wb3J0IHtCbG9vZH0gZnJvbSBcIi4uL1BhcnRpY2xlcy9CbG9vZFwiO1xuaW1wb3J0IHtNYWlufSBmcm9tIFwiLi4vR1VJL01haW5cIjtcbmltcG9ydCB7U2tpbGxzTWFuYWdlcn0gZnJvbSBcIi4uL1BsYXllci9Ta2lsbHMvU2tpbGxzTWFuYWdlclwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQWJzdHJhY3RDaGFyYWN0ZXIge1xuXG4gICAgcHVibGljIGNvbm5lY3Rpb25JZDogc3RyaW5nO1xuXG4gICAgcHVibGljIGludmVudG9yeTogSW52ZW50b3J5O1xuICAgIHB1YmxpYyBwbGF5ZXJMaWdodDogQkFCWUxPTi5TcG90TGlnaHQ7XG4gICAgcHVibGljIGlzQWxpdmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHVibGljIHNraWxsczogQXJyYXk8QWJzdHJhY3RTa2lsbD47XG4gICAgcHVibGljIHN0YXRpc3RpY3NBbGw6IGFueTtcbiAgICBwdWJsaWMgYXR0cmlidXRlczogYW55O1xuICAgIHB1YmxpYyBleHBlcmllbmNlOiBudW1iZXI7XG4gICAgcHVibGljIGV4cGVyaWVuY2VQZXJjZW50YWdlczogbnVtYmVyO1xuICAgIHB1YmxpYyBnb2xkOiBudW1iZXI7XG4gICAgcHVibGljIGtleXM6IG51bWJlcjtcbiAgICBwdWJsaWMgcG90aW9uczogbnVtYmVyO1xuICAgIHB1YmxpYyBsdmw6IG51bWJlcjtcbiAgICBwdWJsaWMgZnJlZUF0dHJpYnV0ZXNQb2ludHM6IG51bWJlcjtcbiAgICBwdWJsaWMgZnJlZVNraWxsUG9pbnRzOiBudW1iZXI7XG4gICAgcHVibGljIG1vbnN0ZXJzVG9BdHRhY2s6IEFycmF5PEJvb2xlYW4+ID0gW107XG4gICAgcHVibGljIGF0dGFja0FjdGlvbnM6IEF0dGFja0FjdGlvbnM7XG5cbiAgICBwdWJsaWMgZ3VpUGxheWVySW5mb3JtYXRpb246IFBsYXllckluZm9ybWF0aW9uO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHJlZ2lzdGVyTW92aW5nOiBib29sZWFuLCBzZXJ2ZXJEYXRhOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoc2VydmVyRGF0YS5hY3RpdmVQbGF5ZXIubmFtZSwgZ2FtZSk7XG5cbiAgICAgICAgdGhpcy5pZCA9IHNlcnZlckRhdGEuYWN0aXZlUGxheWVyLmlkO1xuICAgICAgICB0aGlzLnNldENoYXJhY3RlclN0YXRpc3RpY3Moc2VydmVyRGF0YS5hY3RpdmVQbGF5ZXIpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25JZCA9IHNlcnZlckRhdGEuY29ubmVjdGlvbklkO1xuICAgICAgICB0aGlzLmlzQ29udHJvbGxhYmxlID0gcmVnaXN0ZXJNb3Zpbmc7XG5cbiAgICAgICAgdGhpcy5pbml0U2Z4KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQm94Rm9yTW92ZShcbiAgICAgICAgICAgIG5ldyBCQUJZTE9OLlZlY3RvcjMoc2VydmVyRGF0YS5wb3NpdGlvbi54LCBzZXJ2ZXJEYXRhLnBvc2l0aW9uLnksIHNlcnZlckRhdGEucG9zaXRpb24ueilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jcmVhdGVNZXNoKCk7XG5cbiAgICAgICAgdGhpcy5ibG9vZFBhcnRpY2xlcyA9IG5ldyBCbG9vZChnYW1lLCB0aGlzLm1lc2gpLnBhcnRpY2xlU3lzdGVtO1xuICAgICAgICB0aGlzLndhbGtTbW9rZSA9IFdhbGtTbW9rZS5nZXRQYXJ0aWNsZXMoZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSwgMjUsIHRoaXMubWVzaCk7XG5cbiAgICAgICAgdGhpcy5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KGdhbWUsIHRoaXMpO1xuICAgICAgICB0aGlzLmludmVudG9yeS5zZXRJdGVtcyhzZXJ2ZXJEYXRhLmFjdGl2ZVBsYXllci5pdGVtcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDb250cm9sbGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMubWVzaC5pc1BpY2thYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBuZXcgTWFpbihnYW1lKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFNlcnZlckRhdGEoc2VydmVyRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hDYW1lcmFQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoRXhwZXJpZW5jZUluR3VpKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBsYXllckxpZ2h0KCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFja0FjdGlvbnMgPSBuZXcgQXR0YWNrQWN0aW9ucyhnYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0Q2hhcmFjdGVyU2tpbGxzKHNlcnZlckRhdGEuc2tpbGxzKTtcbiAgICAgICAgdGhpcy5pbml0UGF0cmljbGVTeXN0ZW1EYW1hZ2UoKTtcbiAgICAgICAgdGhpcy5ydW5BbmltYXRpb25TdGFuZCgpO1xuICAgICAgICB0aGlzLmd1aVBsYXllckluZm9ybWF0aW9uID0gbmV3IFBsYXllckluZm9ybWF0aW9uKHRoaXMsIGdhbWUpO1xuICAgICAgICB0aGlzLnJlZnJlc2hIcEluR3VpKCk7XG4gICAgICAgIHRoaXMucmVmcmVzaEVuZXJneUluR3VpKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0U2VydmVyRGF0YShzZXJ2ZXJEYXRhKSB7XG4gICAgICAgIHRoaXMuZXhwZXJpZW5jZSA9IHNlcnZlckRhdGEuYWN0aXZlUGxheWVyLmV4cGVyaWVuY2U7XG4gICAgICAgIHRoaXMuZ29sZCA9IHNlcnZlckRhdGEuYWN0aXZlUGxheWVyLmdvbGQ7XG4gICAgICAgIHRoaXMua2V5cyA9IHNlcnZlckRhdGEuYWN0aXZlUGxheWVyLnNwZWNpYWxJdGVtcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuZXhwZXJpZW5jZVBlcmNlbnRhZ2VzID0gc2VydmVyRGF0YS5hY3RpdmVQbGF5ZXIuZXhwZXJpZW5jZVBlcmNlbnRhZ2VzO1xuICAgICAgICB0aGlzLmx2bCA9IHNlcnZlckRhdGEuYWN0aXZlUGxheWVyLmx2bDtcbiAgICAgICAgdGhpcy5mcmVlQXR0cmlidXRlc1BvaW50cyA9IHNlcnZlckRhdGEuYWN0aXZlUGxheWVyLmZyZWVBdHRyaWJ1dGVzUG9pbnRzO1xuICAgICAgICB0aGlzLmZyZWVTa2lsbFBvaW50cyA9IHNlcnZlckRhdGEuYWN0aXZlUGxheWVyLmZyZWVTa2lsbFBvaW50cztcbiAgICAgICAgdGhpcy5uYW1lID0gc2VydmVyRGF0YS5hY3RpdmVQbGF5ZXIubmFtZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVBsYXllckxpZ2h0KCkge1xuICAgICAgICBjb25zdCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICBjb25zdCBwbGF5ZXJMaWdodCA9IG5ldyBCQUJZTE9OLlNwb3RMaWdodChcInBsYXllckxpZ2h0U3BvdFwiLFxuICAgICAgICAgICAgbmV3IEJBQllMT04uVmVjdG9yMygwLCA0NSwgMCksXG4gICAgICAgICAgICBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC0xLCAwKSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgIHBsYXllckxpZ2h0LmRpZmZ1c2UgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMSwgMC43LCAwLjMpO1xuICAgICAgICBwbGF5ZXJMaWdodC5hbmdsZSA9IDAuNztcbiAgICAgICAgcGxheWVyTGlnaHQuZXhwb25lbnQgPSA3MDtcbiAgICAgICAgcGxheWVyTGlnaHQuaW50ZW5zaXR5ID0gMC44O1xuICAgICAgICBwbGF5ZXJMaWdodC5wYXJlbnQgPSB0aGlzLm1lc2g7XG5cbiAgICAgICAgLy9UT0RPOiB2ZXJpZnlcbiAgICAgICAgLy8gcGxheWVyTGlnaHQuYXV0b0V4dGVuZHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJMaWdodCA9IHBsYXllckxpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlTWVzaCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICBsZXQgbWVzaCA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5hc3NldHMuY2hhcmFjdGVyLmNyZWF0ZUNsb25lKCdXYXJyaW9yJywgdHJ1ZSk7XG4gICAgICAgIG1lc2guc2tlbGV0b24uZW5hYmxlQmxlbmRpbmcoMC4yKTtcbiAgICAgICAgbWVzaC5hbHdheXNTZWxlY3RBc0FjdGl2ZU1lc2ggPSB0cnVlO1xuICAgICAgICBtZXNoLnBhcmVudCA9IHRoaXMubWVzaEZvck1vdmU7XG4gICAgICAgIG1lc2guYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIoZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG5cbiAgICAgICAgdGhpcy5tZXNoID0gbWVzaDtcblxuICAgICAgICBtZXNoLnNrZWxldG9uLmNyZWF0ZUFuaW1hdGlvblJhbmdlKCdsb29wU3Ryb25nQXR0YWNrJywgMzQwLCAzNTApO1xuICAgICAgICBtZXNoLnNrZWxldG9uLmNyZWF0ZUFuaW1hdGlvblJhbmdlKCdsb29wQmxvY2snLCA3MCwgODApO1xuXG4gICAgICAgIHJldHVybiBtZXNoO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFNmeCgpIHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICB0aGlzLnNmeFdhbGsgPSBuZXcgQkFCWUxPTi5Tb3VuZChcIkNoYXJhY3RlcldhbGtcIiwgXCJhc3NldHMvc291bmRzL2NoYXJhY3Rlci93YWxrLzEubXAzXCIsIGdhbWUuZ2V0QmFieWxvblNjZW5lKCksIG51bGwsIHtcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2Z4SGl0ID0gbmV3IEJBQllMT04uU291bmQoXCJDaGFyYWN0ZXJIaXRcIiwgXCJhc3NldHMvc291bmRzL2NoYXJhY3Rlci9oaXQubXAzXCIsIGdhbWUuZ2V0QmFieWxvblNjZW5lKCksIG51bGwsIHtcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0R29kUmF5KCkge1xuICAgICAgICBHb2RSYXkuY3JlYXRlR29kUmF5KHRoaXMuZ2FtZSwgdGhpcy5tZXNoRm9yTW92ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENoYXJhY3RlclN0YXRpc3RpY3MocGxheWVyU2VydmVyRGF0YSkge1xuICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSBwbGF5ZXJTZXJ2ZXJEYXRhLnN0YXRpc3RpY3M7XG4gICAgICAgIHRoaXMuc3RhdGlzdGljc0FsbCA9IHBsYXllclNlcnZlckRhdGEuYWxsU3RhdGlzdGljcztcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gcGxheWVyU2VydmVyRGF0YS5hdHRyaWJ1dGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDaGFyYWN0ZXJTa2lsbHMoc2tpbGxzKSB7XG4gICAgICAgIHNraWxscyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiA0LFxuICAgICAgICAgICAgfV07XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5za2lsbHMgPSBbXTtcblxuICAgICAgICBpZiAoc2tpbGxzKSB7XG4gICAgICAgICAgICBza2lsbHMuZm9yRWFjaChza2lsbCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBsYXllclNraWxsID0gU2tpbGxzTWFuYWdlci5nZXRTa2lsbChza2lsbC50eXBlLCBzZWxmKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNraWxsc1twbGF5ZXJTa2lsbC5nZXRUeXBlKCldID0gcGxheWVyU2tpbGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0FueVNraWxsSXNJblVzZSgpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGlzSW5Vc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5za2lsbHMuZm9yRWFjaCgoc2tpbGwpID0+IHtcbiAgICAgICAgICAgIGlmIChza2lsbC5pc0luVXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaXNJblVzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNJblVzZSA9PT0gZmFsc2UgJiYgdGhpcy5pc0F0dGFjaykge1xuICAgICAgICAgICAgaXNJblVzZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0RlYXRoKSB7XG4gICAgICAgICAgICBpc0luVXNlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0luVXNlO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVGcm9tV29ybGQoKSB7XG4gICAgICAgIHRoaXMuZ3VpUGxheWVySW5mb3JtYXRpb24uY29udGFpbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5tZXNoLmRpc3Bvc2UoKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyByZWZyZXNoQ2FtZXJhUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5nZXRDYW1lcmFCeU5hbWUoJ2dhbWVDYW1lcmEnKTtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uID0gdGhpcy5tZXNoRm9yTW92ZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDE4O1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiAtPSAxMjtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggLT0gMTI7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2hFeHBlcmllbmNlSW5HdWkoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5ndWkucGxheWVyQm90dG9tUGFuZWwuZXhwQmFyLndpZHRoID0gdGhpcy5leHBlcmllbmNlUGVyY2VudGFnZXMgLyAxMDA7XG4gICAgICAgIHRoaXMuZ2FtZS5ndWkucGxheWVyQm90dG9tUGFuZWwuZXhwQmFyVGV4dC50ZXh0ID0gdGhpcy5leHBlcmllbmNlUGVyY2VudGFnZXMgKyAnJSc7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2hFbmVyZ3lJbkd1aSgpIHtcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKHRoaXMuc3RhdGlzdGljcy5lbmVyZ3kgKiAxMDAgLyB0aGlzLnN0YXRpc3RpY3MuZW5lcmd5TWF4KTtcbiAgICAgICAgdGhpcy5ndWlQbGF5ZXJJbmZvcm1hdGlvbi5lbmVyZ3lCYXIud2lkdGggPSBwZXJjZW50YWdlIC8gMTAwO1xuICAgICAgICB0aGlzLmd1aVBsYXllckluZm9ybWF0aW9uLmVuZXJneUJhclRleHQudGV4dCA9IHRoaXMuc3RhdGlzdGljcy5lbmVyZ3kgKyAnIC8gJyArIHRoaXMuc3RhdGlzdGljcy5lbmVyZ3lNYXg7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2hIcEluR3VpKCkge1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IE1hdGgucm91bmQodGhpcy5zdGF0aXN0aWNzLmhwICogMTAwIC8gdGhpcy5zdGF0aXN0aWNzLmhwTWF4KTtcbiAgICAgICAgdGhpcy5ndWlQbGF5ZXJJbmZvcm1hdGlvbi5ocEJhci53aWR0aCA9IHBlcmNlbnRhZ2UgLyAxMDA7XG4gICAgICAgIHRoaXMuZ3VpUGxheWVySW5mb3JtYXRpb24uaHBCYXJUZXh0LnRleHQgPSB0aGlzLnN0YXRpc3RpY3MuaHAgKyAnIC8gJyArIHRoaXMuc3RhdGlzdGljcy5ocE1heDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRXhwZXJpZW5jZShleHBlcmluY2U6IG51bWJlciwgZXhwZXJpZW5jZVBlcmNlbnRhZ2VzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5leHBlcmllbmNlICs9IGV4cGVyaW5jZTtcbiAgICAgICAgdGhpcy5leHBlcmllbmNlUGVyY2VudGFnZXMgPSBleHBlcmllbmNlUGVyY2VudGFnZXM7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoRXhwZXJpZW5jZUluR3VpKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE5ld0x2bCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmd1aS5wbGF5ZXJMb2dzUXVlc3RzLmFkZFRleHQoJ05ldyBsdmwgJyArIHRoaXMubHZsICsgJycsICdyZWQnKTtcbiAgICAgICAgdGhpcy5nYW1lLmd1aS5wbGF5ZXJMb2dzUXVlc3RzLmFkZFRleHQoJ1lvdSBnb3QgNSBhdHRyaWJ1dGUgcG9pbnRzJywgJ3JlZCcpO1xuICAgICAgICB0aGlzLmdhbWUuZ3VpLnBsYXllckxvZ3NRdWVzdHMuYWRkVGV4dCgnWW91IGdvdCAxIHNraWxsIHBvaW50ICcgKyB0aGlzLmx2bCArICcnLCAncmVkJyk7XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoRXhwZXJpZW5jZUluR3VpKCk7XG4gICAgICAgIHRoaXMuaW5pdEdvZFJheSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBydW5QbGF5ZXJUb1Bvc2l0aW9uKHRhcmdldFBvaW50VmVjdG9yMykge1xuICAgICAgICBpZih0aGlzLmlzQW55U2tpbGxJc0luVXNlKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IG1lc2ggPSB0aGlzLm1lc2hGb3JNb3ZlO1xuICAgICAgICBtZXNoLmxvb2tBdCh0YXJnZXRQb2ludFZlY3RvcjMsIE1hdGguUEkpO1xuICAgICAgICB0aGlzLnVucmVnaXN0ZXJNb3ZlV2l0aENvbGxpc2lvbihmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5keW5hbWljRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobWVzaC5pbnRlcnNlY3RzUG9pbnQodGFyZ2V0UG9pbnRWZWN0b3IzKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS51bnJlZ2lzdGVyQmVmb3JlUmVuZGVyKHNlbGYuZHluYW1pY0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcm90YXRpb24gPSBtZXNoLnJvdGF0aW9uO1xuICAgICAgICAgICAgICAgIGxldCBmb3J3YXJkcyA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoLShNYXRoLnNpbihyb3RhdGlvbi55KSkgLyBzZWxmLmdldFdhbGtTcGVlZCgpLCAwLCAtKE1hdGguY29zKHJvdGF0aW9uLnkpKSAvIHNlbGYuZ2V0V2Fsa1NwZWVkKCkpO1xuICAgICAgICAgICAgICAgIG1lc2gubW92ZVdpdGhDb2xsaXNpb25zKGZvcndhcmRzKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZS5wbGF5ZXIucmVmcmVzaENhbWVyYVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5ydW5BbmltYXRpb25XYWxrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpO1xuICAgICAgICBpZihzY2VuZSkge1xuICAgICAgICAgICAgc2NlbmUucmVnaXN0ZXJCZWZvcmVSZW5kZXIodGhpcy5keW5hbWljRnVuY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVucmVnaXN0ZXJNb3ZlV2l0aENvbGxpc2lvbihlbWl0UG9zaXRpb246IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpO1xuICAgICAgICBpZiAodGhpcy5keW5hbWljRnVuY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBzY2VuZSkge1xuICAgICAgICAgICAgc2NlbmUudW5yZWdpc3RlckJlZm9yZVJlbmRlcih0aGlzLmR5bmFtaWNGdW5jdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW1pdFBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdzZXRUYXJnZXRQb2ludCcsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5tZXNoRm9yTW92ZS5wb3NpdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25XYWxrU3RhcnQoKSB7XG4gICAgICAgIHRoaXMud2Fsa1Ntb2tlLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uV2Fsa0VuZCgpIHtcbiAgICAgICAgdGhpcy53YWxrU21va2Uuc3RvcCgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtBYnN0cmFjdENoYXJhY3Rlcn0gZnJvbSBcIi4uL0Fic3RyYWN0Q2hhcmFjdGVyXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi9HYW1lXCI7XG5pbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4uLy4uL1BsYXllci9JbnZlbnRvcnlcIjtcbmltcG9ydCB7SXRlbU1hbmFnZXJ9IGZyb20gXCIuLi8uLi9QbGF5ZXIvSXRlbXMvSXRlbU1hbmFnZXJcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TnBjIGV4dGVuZHMgQWJzdHJhY3RDaGFyYWN0ZXIge1xuXG4gICAgICAgIHByb3RlY3RlZCBib3g6IEJBQllMT04uQWJzdHJhY3RNZXNoO1xuICAgICAgICBwcm90ZWN0ZWQgcXVlc3RJZDogbnVtYmVyO1xuICAgICAgICBwcm90ZWN0ZWQgdG9vbHRpcDogQkFCWUxPTi5BYnN0cmFjdE1lc2g7XG4gICAgICAgIHByb3RlY3RlZCBpbnZlbnRvcnk6IEludmVudG9yeTtcblxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoZ2FtZTpHYW1lLCBuYW1lLCBwb3NpdGlvbjogQkFCWUxPTi5WZWN0b3IzLCByb3RhdGlvbjogQkFCWUxPTi5WZWN0b3IzKSB7XG4gICAgICAgICAgICBzdXBlcihuYW1lLCBnYW1lKTtcbiAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5ucGNzLnB1c2godGhpcyk7XG5cbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMubWVzaC5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgdGhpcy5tZXNoLnJvdGF0aW9uID0gcm90YXRpb247XG5cbiAgICAgICAgICAgIHRoaXMubWVzaC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcih0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICAgICAgdGhpcy5tZXNoLmlzUGlja2FibGUgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSB7XG4gICAgICAgICAgICAgICAgaHBNYXg6IDEwMDAsXG4gICAgICAgICAgICAgICAgaHA6IDEwMDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm1lc2guYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25Qb2ludGVyT3V0VHJpZ2dlcixcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ2FtZS5ndWkuY2hhcmFjdGVyVG9wSHAuaGlkZUhwQmFyKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICB0aGlzLm1lc2guYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25Qb2ludGVyT3ZlclRyaWdnZXIsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWUuZ3VpLmNoYXJhY3RlclRvcEhwLnNob3dIcENoYXJhY3RlcihzZWxmKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgcmVtb3ZlRnJvbVdvcmxkKCkge1xuICAgICAgICAgICAgdGhpcy5tZXNoLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5kaXNwb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGludmVudG9yeUl0ZW1zXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0SXRlbXMoaW52ZW50b3J5SXRlbXM6IE9iamVjdFtdKSB7XG4gICAgICAgICAgICB0aGlzLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkodGhpcy5nYW1lLCB0aGlzKTtcblxuICAgICAgICAgICAgaWYoaW52ZW50b3J5SXRlbXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbU1hbmFnZXIgPSBuZXcgSXRlbU1hbmFnZXIodGhpcy5nYW1lKTtcbiAgICAgICAgICAgICAgICBpdGVtTWFuYWdlci5pbml0SXRlbXNGcm9tRGF0YWJhc2VPbkNoYXJhY3RlcihpbnZlbnRvcnlJdGVtcywgdGhpcy5pbnZlbnRvcnksIHRydWUpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iLCJpbXBvcnQge0Fic3RyYWN0TnBjfSBmcm9tIFwiLi9BYnN0cmFjdE5wY1wiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vLi4vR2FtZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgR3VhcmQgZXh0ZW5kcyBBYnN0cmFjdE5wYyB7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgcG9zaXRpb246IEJBQllMT04uVmVjdG9yMywgcm90YXRpb246IEJBQllMT04uVmVjdG9yMykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMubWVzaCA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5hc3NldHMuY2hhcmFjdGVyLmNyZWF0ZUNsb25lKCdXYXJyaW9yJywgdHJ1ZSk7XG5cbiAgICAgICAgc3VwZXIoZ2FtZSwgJ0d1YXJkJywgcG9zaXRpb24sIHJvdGF0aW9uKTtcblxuICAgICAgICBsZXQgaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzaE5hbWU6ICdsZWF0aGVyQXJtb3InLFxuICAgICAgICAgICAgICAgIGVxdWlwOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNoTmFtZTogJ2xlYXRoZXJIZWxtJyxcbiAgICAgICAgICAgICAgICBlcXVpcDogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVzaE5hbWU6ICdsZWF0aGVyQm9vdHMnLFxuICAgICAgICAgICAgICAgIGVxdWlwOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNoTmFtZTogJ2xlYXRoZXJHbG92ZXMnLFxuICAgICAgICAgICAgICAgIGVxdWlwOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXNoTmFtZTogJ3NoaWVsZFdvb2Rlbk1lZGl1bScsXG4gICAgICAgICAgICAgICAgZXF1aXA6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lc2hOYW1lOiAnc3dvcmRMb25nJyxcbiAgICAgICAgICAgICAgICBlcXVpcDogMSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XG5cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RDaGFyYWN0ZXJ9IGZyb20gXCIuLi9BYnN0cmFjdENoYXJhY3RlclwiO1xuaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuLi8uLi9QbGF5ZXIvSW52ZW50b3J5XCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi9HYW1lXCI7XG5pbXBvcnQge0l0ZW1NYW5hZ2VyfSBmcm9tIFwiLi4vLi4vUGxheWVyL0l0ZW1zL0l0ZW1NYW5hZ2VyXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBXYXJyaW9yIGV4dGVuZHMgQWJzdHJhY3RDaGFyYWN0ZXIge1xuXG4gICAgcHJvdGVjdGVkIGludmVudG9yeTogSW52ZW50b3J5O1xuICAgIHByb3RlY3RlZCBza2VsZXRvbkFuaW1hdGlvbjtcbiAgICBwcm90ZWN0ZWQgcGxheWVySWQ6IE51bWJlcjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCBwbGFjZTogTnVtYmVyLCBwbGF5ZXJEYXRhYmFzZSkge1xuICAgICAgICBzdXBlcignV2FycmlvcicsIGdhbWUpO1xuICAgICAgICB0aGlzLnBsYXllcklkID0gcGxheWVyRGF0YWJhc2UuaWQ7XG5cbiAgICAgICAgbGV0IG1lc2ggPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuYXNzZXRzLmNoYXJhY3Rlci5jcmVhdGVDbG9uZSgnV2FycmlvcicsIHRydWUpO1xuICAgICAgICBtZXNoLnNjYWxpbmcgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEuNCwgMS40LCAxLjQpO1xuICAgICAgICBtZXNoLnNrZWxldG9uLmVuYWJsZUJsZW5kaW5nKDAuMyk7XG5cbiAgICAgICAgc3dpdGNoIChwbGFjZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIG1lc2gucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0wLjMsIDAsIDEwLjUpO1xuICAgICAgICAgICAgICAgIG1lc2gucm90YXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIG1lc2gucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDIuNywgMCwgMTApO1xuICAgICAgICAgICAgICAgIG1lc2gucm90YXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAuMSwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXNoID0gbWVzaDtcblxuICAgICAgICB0aGlzLnNldEl0ZW1zKHBsYXllckRhdGFiYXNlLml0ZW1zKTtcbiAgICAgICAgdGhpcy5tZXNoLnNrZWxldG9uLmJlZ2luQW5pbWF0aW9uKCdTaXQnKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckFjdGlvbnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SXRlbXMoaW52ZW50b3J5SXRlbXM6IFtdKSB7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSh0aGlzLmdhbWUsIHRoaXMpO1xuXG4gICAgICAgIGlmIChpbnZlbnRvcnlJdGVtcykge1xuICAgICAgICAgICAgbGV0IGl0ZW1NYW5hZ2VyID0gbmV3IEl0ZW1NYW5hZ2VyKHRoaXMuZ2FtZSk7XG4gICAgICAgICAgICBpdGVtTWFuYWdlci5pbml0SXRlbXNGcm9tRGF0YWJhc2VPbkNoYXJhY3RlcihpbnZlbnRvcnlJdGVtcywgdGhpcy5pbnZlbnRvcnksIHRydWUpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVGcm9tV29ybGQoKSB7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyQWN0aW9ucygpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgcG9pbnRlck91dCA9IGZhbHNlO1xuICAgICAgICBsZXQgY2xpY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubWVzaEZvck1vdmUgPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUJveCh0aGlzLm5hbWUgKyAnX3NlbGVjdEJveCcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgaGVpZ2h0OiA1LFxuICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICB9LCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmNoZWNrQ29sbGlzaW9ucyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLnZpc2liaWxpdHkgPSAwO1xuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmlzUGlja2FibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLnBhcmVudCA9IHRoaXMubWVzaDtcbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS5wb3NpdGlvbi55ID0gMjtcblxuICAgICAgICBsZXQgc2l0RG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5za2VsZXRvbkFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBhbmltYXRpb25TZWxlY3RSYW5nZSA9IHNlbGYubWVzaC5za2VsZXRvbi5nZXRBbmltYXRpb25SYW5nZSgnU2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgc2VsZi5za2VsZXRvbkFuaW1hdGlvbiA9IHNlbGYuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5iZWdpbkFuaW1hdGlvbihzZWxmLm1lc2gsIGFuaW1hdGlvblNlbGVjdFJhbmdlLnRvLCBhbmltYXRpb25TZWxlY3RSYW5nZS5mcm9tICsgMSwgZmFsc2UsIC0xLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWVzaC5za2VsZXRvbi5iZWdpbkFuaW1hdGlvbignU2l0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2tlbGV0b25BbmltYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubWVzaEZvck1vdmUuYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIodGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS5pc1BpY2thYmxlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25Qb2ludGVyT3ZlclRyaWdnZXIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRlck91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5za2VsZXRvbkFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNrZWxldG9uQW5pbWF0aW9uID0gc2VsZi5tZXNoLnNrZWxldG9uLmJlZ2luQW5pbWF0aW9uKCdTZWxlY3QnLCBmYWxzZSwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5za2VsZXRvbkFuaW1hdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2ludGVyT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0RG93bigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1lc2guc2tlbGV0b24uYmVnaW5BbmltYXRpb24oQWJzdHJhY3RDaGFyYWN0ZXIuQU5JTUFUSU9OX1NUQU5EX1dFQVBPTiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5tZXNoRm9yTW92ZS5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKFxuICAgICAgICAgICAgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUG9pbnRlck91dFRyaWdnZXIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2l0RG93bigpO1xuICAgICAgICAgICAgICAgIHBvaW50ZXJPdXQgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25QaWNrRG93blRyaWdnZXIsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFjbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdzZWxlY3RDaGFyYWN0ZXInLCBzZWxmLnBsYXllcklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubWVzaEZvck1vdmUuYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihcbiAgICAgICAgICAgIEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBpY2tPdXRUcmlnZ2VyLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnc2VsZWN0Q2hhcmFjdGVyJywgc2VsZi5wbGF5ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm1lc2hGb3JNb3ZlLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25QaWNrVHJpZ2dlcixcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ3NlbGVjdENoYXJhY3RlcicsIHNlbGYucGxheWVySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtDbGlja1BhcnRpY2xlc30gZnJvbSBcIi4uL1BhcnRpY2xlcy9Qb2ludGVyL0NsaWNrUGFydGljbGVzXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBNb3VzZSB7XG5cbiAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZTtcbiAgICBwdWJsaWMgdGFyZ2V0UG9pbnQ7XG4gICAgcHVibGljIGF0dGFja1BvaW50OiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJDb250cm9scyhzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBjbGlja1RyaWdnZXIgPSBmYWxzZTtcbiAgICAgICAgbGV0IGxhc3RVcGRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDA7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICBjb25zdCBjbGlja1BhcnRpY2xlU3lzdGVtID0gQ2xpY2tQYXJ0aWNsZXMuZ2V0UGFydGljbGVzKHNjZW5lKTtcblxuICAgICAgICBzY2VuZS5vblBvaW50ZXJVcCA9IGZ1bmN0aW9uIChldnQsIHBpY2tSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChjbGlja1RyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICBjbGlja1RyaWdnZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgcGlja2VkTWVzaCA9IHBpY2tSZXN1bHQucGlja2VkTWVzaDtcbiAgICAgICAgICAgICAgICBpZiAocGlja2VkTWVzaCAmJiAocGlja2VkTWVzaC5uYW1lLnNlYXJjaChcIkdyb3VuZFwiKSA+PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGlja1BhcnRpY2xlU3lzdGVtLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2NlbmUub25Qb2ludGVyRG93biA9IGZ1bmN0aW9uIChldnQsIHBpY2tSZXN1bHQpIHtcbiAgICAgICAgICAgIGxldCBwaWNrZWRNZXNoID0gcGlja1Jlc3VsdC5waWNrZWRNZXNoO1xuICAgICAgICAgICAgaWYgKCFzZWxmLmdhbWUucGxheWVyLmlzQWxpdmUgfHwgZ2FtZS5wbGF5ZXIuaXNBbnlTa2lsbElzSW5Vc2UoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsaWNrVHJpZ2dlciA9IHRydWU7XG4gICAgICAgICAgICBpZiAocGlja2VkTWVzaCAmJiAocGlja2VkTWVzaC5uYW1lLnNlYXJjaChcIkdyb3VuZFwiKSA+PSAwKSkge1xuICAgICAgICAgICAgICAgIHNjZW5lLm9uQmVmb3JlUmVuZGVyT2JzZXJ2YWJsZS5yZW1vdmUoZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmdvVG9BY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuYXR0YWNrQWN0aW9ucy5jYW5jZWxDaGVja0F0dGFjaygpO1xuICAgICAgICAgICAgICAgIHNlbGYuYXR0YWNrUG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0UG9pbnQgPSBwaWNrUmVzdWx0LnBpY2tlZFBvaW50O1xuICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0UG9pbnQueSA9IDA7XG4gICAgICAgICAgICAgICAgY2xpY2tQYXJ0aWNsZVN5c3RlbS5lbWl0dGVyID0gbmV3IEJBQllMT04uVmVjdG9yMyhzZWxmLnRhcmdldFBvaW50LngsIDAsIHNlbGYudGFyZ2V0UG9pbnQueik7IC8vIHRoZSBzdGFydGluZyBsb2NhdGlvblxuXG4gICAgICAgICAgICAgICAgc2VsZi5nYW1lLnBsYXllci5ydW5QbGF5ZXJUb1Bvc2l0aW9uKHNlbGYudGFyZ2V0UG9pbnQpO1xuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ3NldFRhcmdldFBvaW50Jywge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc2VsZi50YXJnZXRQb2ludFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNjZW5lLm9uUG9pbnRlck1vdmUgPSBmdW5jdGlvbiAoZXZ0LCBwaWNrUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoY2xpY2tUcmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLmdhbWUucGxheWVyLmlzQWxpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgcGlja2VkTWVzaCA9IHBpY2tSZXN1bHQucGlja2VkTWVzaDtcbiAgICAgICAgICAgICAgICBpZiAocGlja2VkTWVzaCAmJiBzZWxmLnRhcmdldFBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmdhbWUucGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRhcmdldFBvaW50ID0gcGlja1Jlc3VsdC5waWNrZWRQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudGFyZ2V0UG9pbnQueSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja1BhcnRpY2xlU3lzdGVtLmVtaXR0ZXIgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKHNlbGYudGFyZ2V0UG9pbnQueCwgMCwgc2VsZi50YXJnZXRQb2ludC56KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nYW1lLnBsYXllci5ydW5QbGF5ZXJUb1Bvc2l0aW9uKHNlbGYudGFyZ2V0UG9pbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdFVwZGF0ZSA8IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDUwMCkgLSAwLjMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdzZXRUYXJnZXRQb2ludCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHNlbGYudGFyZ2V0UG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxuXG59XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBHb2RSYXkge1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlR29kUmF5KGdhbWU6IEdhbWUsIG1lc2g6IEJBQllMT04uQWJzdHJhY3RNZXNoKSB7XG4gICAgICAgIGxldCBlbmdpbmUgPSBnYW1lLmVuZ2luZTtcbiAgICAgICAgbGV0IHNjZW5lID0gZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKTtcbiAgICAgICAgbGV0IGNhbWVyYSA9IGdhbWUuZ2V0QmFieWxvblNjZW5lKCkuZ2V0Q2FtZXJhQnlOYW1lKCdnYW1lQ2FtZXJhJyk7XG5cbiAgICAgICAgbGV0IGZpcmVNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJnb2RyYXlNYXRlcmlhbFwiLCBzY2VuZSk7XG4gICAgICAgIGxldCBmaXJlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvU21va2UzLnBuZ1wiLCBzY2VuZSk7XG4gICAgICAgIGZpcmVUZXh0dXJlLmhhc0FscGhhID0gdHJ1ZTtcbiAgICAgICAgZmlyZU1hdGVyaWFsLmFscGhhID0gMC4xO1xuICAgICAgICBmaXJlTWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlID0gZmlyZVRleHR1cmU7XG4gICAgICAgIGZpcmVNYXRlcmlhbC5kaWZmdXNlVGV4dHVyZSA9IGZpcmVUZXh0dXJlO1xuICAgICAgICBmaXJlTWF0ZXJpYWwub3BhY2l0eVRleHR1cmUgPSBmaXJlVGV4dHVyZTtcblxuICAgICAgICBmaXJlTWF0ZXJpYWwuc3BlY3VsYXJQb3dlciA9IDE7XG4gICAgICAgIGZpcmVNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgPSBmYWxzZTtcblxuICAgICAgICBsZXQgYm94ID0gQkFCWUxPTi5NZXNoLkNyZWF0ZVBsYW5lKFwiZ29kUmF5UGxhbmVcIiwgMTYsIHNjZW5lLCB0cnVlKTtcbiAgICAgICAgYm94LnZpc2liaWxpdHkgPSAxO1xuICAgICAgICBib3gucm90YXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC1NYXRoLlBJIC8gMiwgMCwgMCk7XG4gICAgICAgIGJveC5tYXRlcmlhbCA9IGZpcmVNYXRlcmlhbDtcbiAgICAgICAgYm94LmxheWVyTWFzayA9IDI7XG5cbiAgICAgICAgbGV0IGdvZHJheXMgPSBuZXcgQkFCWUxPTi5Wb2x1bWV0cmljTGlnaHRTY2F0dGVyaW5nUG9zdFByb2Nlc3MoJ2dvZHJheXMnLCAxLCBjYW1lcmEsIGJveCwgMTI4LCBCQUJZTE9OLlRleHR1cmUuQklMSU5FQVJfU0FNUExJTkdNT0RFLCBlbmdpbmUsIGZhbHNlKTtcbiAgICAgICAgZ29kcmF5cy51c2VDdXN0b21NZXNoUG9zaXRpb24gPSB0cnVlO1xuICAgICAgICBnb2RyYXlzLnNldEN1c3RvbU1lc2hQb3NpdGlvbihuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDE1LjAsIDApKTtcblxuICAgICAgICBnb2RyYXlzLmludmVydCA9IGZhbHNlO1xuICAgICAgICBnb2RyYXlzLmV4cG9zdXJlID0gMC44O1xuICAgICAgICBnb2RyYXlzLmRlY2F5ID0gMTtcbiAgICAgICAgZ29kcmF5cy53ZWlnaHQgPSAwO1xuICAgICAgICBnb2RyYXlzLmRlbnNpdHkgPSAwLjU7XG5cbiAgICAgICAgbGV0IHN0YXJ0SGlkaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCB0aW1lb3V0RnVuY3Rpb247XG4gICAgICAgIGNvbnN0IHNob3dHb2RSYXkgPSAoKSA9PiB7XG4gICAgICAgICAgICBib3gucG9zaXRpb24gPSBtZXNoLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgICAgICBib3gucG9zaXRpb24ueSArPSAwLjE7XG4gICAgICAgICAgICBnb2RyYXlzLnNldEN1c3RvbU1lc2hQb3NpdGlvbihtZXNoLnBvc2l0aW9uLmNsb25lKCkpO1xuICAgICAgICAgICAgZ29kcmF5cy5jdXN0b21NZXNoUG9zaXRpb24ueSA9IDE1O1xuICAgICAgICAgICAgYm94LnJvdGF0ZShuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUsIDApLCAwLjAyLCBCQUJZTE9OLlNwYWNlLldPUkxEKTtcblxuICAgICAgICAgICAgaWYgKGdvZHJheXMud2VpZ2h0ID49IDAuMyAmJiAhdGltZW91dEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dEZ1bmN0aW9uID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SGlkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXJ0SGlkaW5nKSB7XG4gICAgICAgICAgICAgICAgZ29kcmF5cy53ZWlnaHQgLT0gMC4wMTtcbiAgICAgICAgICAgICAgICBpZiAoZ29kcmF5cy53ZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBnb2RyYXlzLmRpc3Bvc2UoY2FtZXJhKTtcbiAgICAgICAgICAgICAgICAgICAgYm94LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUudW5yZWdpc3RlckJlZm9yZVJlbmRlcihzaG93R29kUmF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdvZHJheXMud2VpZ2h0IDw9IDAuMykge1xuICAgICAgICAgICAgICAgIGdvZHJheXMud2VpZ2h0ICs9IDAuMDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHNjZW5lLnJlZ2lzdGVyQmVmb3JlUmVuZGVyKHNob3dHb2RSYXkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7Q29sbGlzaW9uc30gZnJvbSBcIi4uL0luaXRpYWxpemVycy9Db2xsaXNpb25zXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEVudmlyb25tZW50IHtcblxuICAgIHB1YmxpYyBsaWdodDogQkFCWUxPTi5EaXJlY3Rpb25hbExpZ2h0O1xuICAgIHB1YmxpYyBzdGF0aWNTaGFkb3dPYmplY3RzO1xuICAgIHB1YmxpYyBncm91bmQ6IEJBQllMT04uTWVzaDtcbiAgICBwcm90ZWN0ZWQgY29sbGlkZXJzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhdGljU2hhZG93T2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxpZGVycyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVEZWZhdWx0TGlnaHQoc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgbGV0IGxpZ2h0ID0gbmV3IEJBQllMT04uRGlyZWN0aW9uYWxMaWdodChcIkRpcmVjdGlvbmFsTGlnaHRcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAtMSwgMCksIHNjZW5lKTtcbiAgICAgICAgbGlnaHQuaW50ZW5zaXR5ID0gMC42O1xuICAgICAgICBsaWdodC5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgNTAsIDApO1xuICAgICAgICBsaWdodC5kaXJlY3Rpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAuNDUsIC0yLjUsIDApO1xuICAgICAgICBsaWdodC5zaGFkb3dNYXhaID0gNTAwO1xuXG4gICAgICAgIHRoaXMubGlnaHQgPSBsaWdodDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJDb2xsaWRlcnMoc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbGxpZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2NlbmVNZXNoQ29sbGlkZXIgPSB0aGlzLmNvbGxpZGVyc1tpXTtcbiAgICAgICAgICAgIENvbGxpc2lvbnMuc2V0Q29sbGlkZXIoc2NlbmUsIHNjZW5lTWVzaENvbGxpZGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBmcmVlemVBbGxNZXNoZXMoc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuZS5tZXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzY2VuZU1lc2ggPSBzY2VuZS5tZXNoZXNbaV07XG4gICAgICAgICAgICBzY2VuZU1lc2guZnJlZXplV29ybGRNYXRyaXgoKTtcbiAgICAgICAgICAgIHNjZW5lTWVzaC5jdWxsaW5nU3RyYXRlZ3kgPSBCQUJZTE9OLkFic3RyYWN0TWVzaC5DVUxMSU5HU1RSQVRFR1lfT1BUSU1JU1RJQ19JTkNMVVNJT05fVEhFTl9CU1BIRVJFX09OTFk7XG5cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgY3JlYXRlU3RlY25pbChzY2VuZTogQkFCWUxPTi5TY2VuZSk7XG59XG4iLCJpbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gXCJiYWJ5bG9uanNcIjtcblxuZXhwb3J0IGNsYXNzIEZvZyB7XG4gICAgc3RhdGljIGFkZEZvZyhzY2VuZSkge1xuICAgICAgICBzY2VuZS5mb2dNb2RlID0gQkFCWUxPTi5TY2VuZS5GT0dNT0RFX0xJTkVBUjtcbiAgICAgICAgc2NlbmUuZm9nQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMCwgMCwgMCk7XG4gICAgICAgIHNjZW5lLmZvZ0RlbnNpdHkgPSAxO1xuXG4gICAgICAgIHNjZW5lLmZvZ1N0YXJ0ID0gMzA7XG4gICAgICAgIHNjZW5lLmZvZ0VuZCA9IDUwO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNhYmxlRm9nKHNjZW5lOkJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgc2NlbmUuZm9nTW9kZSA9IEJBQllMT04uU2NlbmUuRk9HTU9ERV9OT05FO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RFbnZpcm9ubWVudH0gZnJvbSBcIi4vQWJzdHJhY3RFbnZpcm9ubWVudFwiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtOYXR1cmV9IGZyb20gXCIuLi9QYXJ0aWNsZXMvU29saWRQYXJ0aWNsZVN5c3RlbS9OYXR1cmVcIjtcbmltcG9ydCB7TmF0dXJlQmxvY2t9IGZyb20gXCIuLi9QYXJ0aWNsZXMvU29saWRQYXJ0aWNsZVN5c3RlbS9OYXR1cmVCbG9ja1wiO1xuaW1wb3J0IHtUZXJyYWluTWF0ZXJpYWx9IGZyb20gJ2JhYnlsb25qcy1tYXRlcmlhbHMnO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnRGb3Jlc3RIb3VzZSBleHRlbmRzIEFic3RyYWN0RW52aXJvbm1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBzY2VuZSA9IGdhbWUuZ2V0QmFieWxvblNjZW5lKCk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNwc1RyZWVzID0gW107XG4gICAgICAgIGxldCBzcHNQbGFudHMgPSBbXTtcbiAgICAgICAgbGV0IHNwc1N0b25lcyA9IFtdO1xuICAgICAgICBsZXQgc3BzRmVybiA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmUubWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2NlbmVNZXNoID0gPEJBQllMT04uTWVzaD4gc2NlbmUubWVzaGVzW2ldO1xuICAgICAgICAgICAgbGV0IG1lc2hOYW1lID0gc2NlbmUubWVzaGVzW2ldWyduYW1lJ107XG5cbiAgICAgICAgICAgIGlmIChtZXNoTmFtZS5zZWFyY2goXCJHcm91bmRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihzY2VuZSk7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLnJlY2VpdmVTaGFkb3dzID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kID0gc2NlbmVNZXNoO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRlcnJhaW5NYXRlcmlhbCA9IG5ldyBUZXJyYWluTWF0ZXJpYWwoXCJ0ZXJyYWluTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKDAuNSwgMC41LCAwLjUpO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5zcGVjdWxhclBvd2VyID0gNjQ7XG4gICAgICAgICAgICAgICAgdGVycmFpbk1hdGVyaWFsLm1peFRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL3NjZW5lcy9Gb3Jlc3RfaG91c2Uvc3RlbmNpbC5wbmdcIiwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTEgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL3NjZW5lcy9Gb3Jlc3RfaG91c2UvR3Jhc3Nfc2VhbWxlc3Nfc2F0dXJhdGlvbi5qcGdcIiwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTIgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL3NjZW5lcy9Gb3Jlc3RfaG91c2UvZGlydC5qcGdcIiwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTMgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL3NjZW5lcy9Gb3Jlc3RfaG91c2UvZ3JvdW5kU2VhbWxlc3MuanBnXCIsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUxLnVTY2FsZSA9IHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTEudlNjYWxlID0gMTA7XG4gICAgICAgICAgICAgICAgdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMi51U2NhbGUgPSB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUyLnZTY2FsZSA9IDEwO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTMudVNjYWxlID0gdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMy52U2NhbGUgPSAxNTtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2gubWF0ZXJpYWwgPSB0ZXJyYWluTWF0ZXJpYWw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc2hOYW1lLnNlYXJjaChcIkJveF9DdWJlXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVycy5wdXNoKHNjZW5lTWVzaCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc2hOYW1lLnNlYXJjaChcInNwc190cmVlc1wiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgc3BzVHJlZXMucHVzaChzY2VuZU1lc2gpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNoTmFtZS5zZWFyY2goXCJzcHNfZ3JvdW5kUGxhbnRzXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICBzcHNQbGFudHMucHVzaChzY2VuZU1lc2gpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNoTmFtZS5zZWFyY2goXCJzcHNfc3RvbmVzXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICBzcHNTdG9uZXMucHVzaChzY2VuZU1lc2gpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNoTmFtZS5zZWFyY2goXCJzcHNfZmVyblwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgc3BzRmVybi5wdXNoKHNjZW5lTWVzaCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5pc1BpY2thYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5zdGF0aWNTaGFkb3dPYmplY3RzLnB1c2goc2NlbmVNZXNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vU1BTIE5hdHVyZVxuICAgICAgICBsZXQgc3BydWNlID0gZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmFzc2V0cy5uYXR1cmVHcmFpbi5jcmVhdGVDbG9uZSgnc3BydWNlJywgZmFsc2UpO1xuICAgICAgICBzcHJ1Y2UudmlzaWJpbGl0eSA9IDA7XG4gICAgICAgIHNwcnVjZS5tYXRlcmlhbC5mcmVlemUoKTtcblxuICAgICAgICBsZXQgZ3JvdW5kUGxhbnRzID0gZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmFzc2V0cy5uYXR1cmVHcmFpbi5jcmVhdGVDbG9uZSgnZ3JvdW5kX3BsYW50cycsIGZhbHNlKTtcbiAgICAgICAgZ3JvdW5kUGxhbnRzLnZpc2liaWxpdHkgPSAwO1xuICAgICAgICBncm91bmRQbGFudHMubWF0ZXJpYWwuZnJlZXplKCk7XG5cbiAgICAgICAgbGV0IGZlcm4gPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuYXNzZXRzLm5hdHVyZUdyYWluLmNyZWF0ZUNsb25lKCdmZXJuJywgZmFsc2UpO1xuICAgICAgICBmZXJuLnZpc2liaWxpdHkgPSAwO1xuICAgICAgICBmZXJuLm1hdGVyaWFsLmZyZWV6ZSgpO1xuXG4gICAgICAgIGxldCBzdG9uZSA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5hc3NldHMubmF0dXJlR3JhaW4uY3JlYXRlQ2xvbmUoJ3N0b25lJywgZmFsc2UpO1xuICAgICAgICBzdG9uZS52aXNpYmlsaXR5ID0gMDtcbiAgICAgICAgc3RvbmUubWF0ZXJpYWwuZnJlZXplKCk7XG5cbiAgICAgICAgc3BzVHJlZXMuZm9yRWFjaChmdW5jdGlvbiAocGFyZW50U1BTKSB7XG4gICAgICAgICAgICBsZXQgc3BzU3BydWNlID0gbmV3IE5hdHVyZShnYW1lLCBwYXJlbnRTUFMsIHNwcnVjZSwgZmFsc2UpO1xuICAgICAgICAgICAgc3BzU3BydWNlLmJ1aWxkU1BTKDY3KTtcbiAgICAgICAgICAgIHNlbGYuc3RhdGljU2hhZG93T2JqZWN0cy5wdXNoKHNwc1NwcnVjZS5zcHNNZXNoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3BzUGxhbnRzLmZvckVhY2goZnVuY3Rpb24gKHBhcmVudFNQUykge1xuICAgICAgICAgICAgbGV0IHNwc1NwcnVjZSA9IG5ldyBOYXR1cmUoZ2FtZSwgcGFyZW50U1BTLCBncm91bmRQbGFudHMsIGZhbHNlKTtcbiAgICAgICAgICAgIHNwc1NwcnVjZS5idWlsZFNQUyg0MCk7XG4gICAgICAgICAgICBzZWxmLnN0YXRpY1NoYWRvd09iamVjdHMucHVzaChzcHNTcHJ1Y2Uuc3BzTWVzaCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNwc1N0b25lcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJlbnRTUFMpIHtcbiAgICAgICAgICAgIGxldCBzcHNTcHJ1Y2UgPSBuZXcgTmF0dXJlKGdhbWUsIHBhcmVudFNQUywgc3RvbmUsIGZhbHNlKTtcbiAgICAgICAgICAgIHNwc1NwcnVjZS5idWlsZFNQUyg2Nyk7XG4gICAgICAgICAgICBzZWxmLnN0YXRpY1NoYWRvd09iamVjdHMucHVzaChzcHNTcHJ1Y2Uuc3BzTWVzaCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNwc0Zlcm4uZm9yRWFjaChmdW5jdGlvbiAocGFyZW50U1BTKSB7XG4gICAgICAgICAgICBsZXQgc3BzU3BydWNlID0gbmV3IE5hdHVyZShnYW1lLCBwYXJlbnRTUFMsIGZlcm4sIGZhbHNlKTtcbiAgICAgICAgICAgIHNwc1NwcnVjZS5idWlsZFNQUyg2Nyk7XG4gICAgICAgICAgICBzZWxmLnN0YXRpY1NoYWRvd09iamVjdHMucHVzaChzcHNTcHJ1Y2Uuc3BzTWVzaCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzcHNUb0Jsb2NrID0gc2NlbmUuZ2V0TWVzaEJ5TmFtZShcInNwc19ib3JkZXJcIik7XG4gICAgICAgIGxldCBzcHNTcHJ1Y2VCbG9jayA9IG5ldyBOYXR1cmVCbG9jayhnYW1lLCBzcHNUb0Jsb2NrLCBzcHJ1Y2UpO1xuICAgICAgICBzcHNTcHJ1Y2VCbG9jay5idWlsZFNQUyg1MDApO1xuICAgICAgICBzZWxmLnN0YXRpY1NoYWRvd09iamVjdHMucHVzaChzcHNTcHJ1Y2VCbG9jay5zcHNNZXNoKTtcblxuICAgICAgICBzdG9uZS5kaXNwb3NlKCk7XG4gICAgICAgIHNwcnVjZS5kaXNwb3NlKCk7XG4gICAgICAgIGdyb3VuZFBsYW50cy5kaXNwb3NlKCk7XG4gICAgICAgIGZlcm4uZGlzcG9zZSgpO1xuXG4gICAgICAgIGxldCBsaWdodCA9IG5ldyBCQUJZTE9OLkRpcmVjdGlvbmFsTGlnaHQoXCJEaXJlY3Rpb25hbExpZ2h0XCIsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgLTEsIDApLCBzY2VuZSk7XG4gICAgICAgIGxpZ2h0LmludGVuc2l0eSA9IDAuNDtcbiAgICAgICAgbGlnaHQucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUwLCAwKTtcbiAgICAgICAgbGlnaHQuZGlyZWN0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLjQ1LCAtMi41LCAwKTtcbiAgICAgICAgbGlnaHQuc2hhZG93TWF4WiA9IDUwMDtcbiAgICAgICAgdGhpcy5saWdodCA9IGxpZ2h0O1xuXG5cbiAgICAgICAgLy8vcmVnaXN0ZXIgY29sbGlkZXJzXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb2xsaWRlcnMoc2NlbmUpO1xuICAgICAgICB0aGlzLmZyZWV6ZUFsbE1lc2hlcyhzY2VuZSk7XG5cbiAgICAgICAgbmV3IEJBQllMT04uU291bmQoXCJGb3Jlc3QgbmlnaHRcIiwgXCJhc3NldHMvc291bmRzL2Z4L3dpbmQubXAzXCIsIHNjZW5lLCBudWxsLCB7XG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICB2b2x1bWU6IDAuMVxuICAgICAgICB9KTtcbiAgICAgICAgbmV3IEJBQllMT04uU291bmQoXCJGb3Jlc3QgbmlnaHRcIiwgXCJhc3NldHMvc291bmRzL2ZvcmVzdF9uaWdodC5tcDNcIiwgc2NlbmUsIG51bGwsIHtcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIHZvbHVtZTogMC4zXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNjZW5lLmdldE1lc2hCeU5hbWUoJ2V4aXQnKS5kaXNwb3NlKCk7XG5cbiAgICAgICAgdmFyIGV4aXRQbGFuZSA9IHNjZW5lLmdldE1lc2hCeU5hbWUoJ0VudHJhY2VfVG9tYicpLmNsb25lKFwiZXhpdFwiLCBudWxsKTtcbiAgICAgICAgZXhpdFBsYW5lLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygtMTk2Ljc4LDAsLTk1LjYpO1xuICAgICAgICBleGl0UGxhbmUucm90YXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsLTEuNSwwKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTdGVjbmlsKHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHtBYnN0cmFjdEVudmlyb25tZW50fSBmcm9tIFwiLi9BYnN0cmFjdEVudmlyb25tZW50XCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudEZvcmVzdEhvdXNlU3RhcnQgZXh0ZW5kcyBBYnN0cmFjdEVudmlyb25tZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBnYW1lLmdldEJhYnlsb25TY2VuZSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmUubWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2NlbmVNZXNoID0gc2NlbmUubWVzaGVzW2ldO1xuICAgICAgICAgICAgbGV0IG1lc2hOYW1lID0gc2NlbmUubWVzaGVzW2ldWyduYW1lJ107XG5cbiAgICAgICAgICAgIGlmIChtZXNoTmFtZS5zZWFyY2goXCJHcm91bmRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihzY2VuZSk7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLnJlY2VpdmVTaGFkb3dzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzaE5hbWUuc2VhcmNoKFwiQm94X0N1YmVcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZXJzLnB1c2goc2NlbmVNZXNoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLmlzUGlja2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY1NoYWRvd09iamVjdHMucHVzaChzY2VuZU1lc2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxpZ2h0ID0gbmV3IEJBQllMT04uRGlyZWN0aW9uYWxMaWdodChcIkRpcmVjdGlvbmFsTGlnaHRcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAtMSwgMCksIHNjZW5lKTtcbiAgICAgICAgbGlnaHQucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDgwLCAtMjEwKTtcbiAgICAgICAgbGlnaHQuZGlyZWN0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLjQ1LCAtMC40NSwgMC40NSk7XG4gICAgICAgIGxpZ2h0LnNoYWRvd01heFogPSA1MDA7XG4gICAgICAgIGxpZ2h0LmF1dG9VcGRhdGVFeHRlbmRzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGlnaHQgPSBsaWdodDtcblxuICAgICAgICB0aGlzLmZyZWV6ZUFsbE1lc2hlcyhzY2VuZSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb2xsaWRlcnMoc2NlbmUpO1xuXG4gICAgICAgIG5ldyBCQUJZTE9OLlNvdW5kKFwiRm9yZXN0IG5pZ2h0XCIsIFwiYXNzZXRzL3NvdW5kcy9meC93aW5kLm1wM1wiLCBzY2VuZSwgbnVsbCwge1xuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgdm9sdW1lOiAwLjNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU3RlY25pbChzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgIH1cblxuXG5cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7QWJzdHJhY3RFbnZpcm9ubWVudH0gZnJvbSBcIi4vQWJzdHJhY3RFbnZpcm9ubWVudFwiO1xuaW1wb3J0IHtDb2xsaXNpb25zfSBmcm9tIFwiLi4vSW5pdGlhbGl6ZXJzL0NvbGxpc2lvbnNcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50Rm9yZXN0SG91c2VUb21iIGV4dGVuZHMgQWJzdHJhY3RFbnZpcm9ubWVudHtcblxuICAgIGNvbGxpZGVyczogQXJyYXk8QkFCWUxPTi5BYnN0cmFjdE1lc2g+O1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbGxpZGVycyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmUubWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2NlbmVNZXNoID0gPEJBQllMT04uTWVzaD4gc2NlbmUubWVzaGVzW2ldO1xuICAgICAgICAgICAgbGV0IG1lc2hOYW1lID0gc2NlbmUubWVzaGVzW2ldWyduYW1lJ107XG5cbiAgICAgICAgICAgIGlmIChtZXNoTmFtZS5zZWFyY2goXCJHcm91bmRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihzY2VuZSk7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLnJlY2VpdmVTaGFkb3dzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvL1RPRE86IGZpeCBtYXRlcmlhbFxuICAgICAgICAgICAgICAgIC8vIHNjZW5lTWVzaC5tYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS51U2NhbGUgPSAxLjI7XG4gICAgICAgICAgICAgICAgLy8gc2NlbmVNZXNoLm1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlLnZTY2FsZSA9IDEuMjtcblxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kID0gc2NlbmVNZXNoO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc2hOYW1lLnNlYXJjaChcIkJveF9DdWJlXCIpID49IDApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZXJzLnB1c2goc2NlbmVNZXNoKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2guaXNQaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICB2YXIgbGlnaHQgPSBuZXcgQkFCWUxPTi5EaXJlY3Rpb25hbExpZ2h0KFwiRGlyZWN0aW9uYWxMaWdodFwiLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC0xLCAwKSwgc2NlbmUpO1xuICAgICAgICBsaWdodC5pbnRlbnNpdHkgPSAwLjQ7XG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCA4MCwgLTIxMCk7XG4gICAgICAgIGxpZ2h0LmRpcmVjdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMC40NSwgLTAuNDUsIDAuNDUpO1xuXG4gICAgICAgIC8vL3JlZ2lzdGVyIGNvbGxpZGVyc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sbGlkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2NlbmVNZXNoQ29sbGlkZXIgPSB0aGlzLmNvbGxpZGVyc1tpXTtcbiAgICAgICAgICAgIENvbGxpc2lvbnMuc2V0Q29sbGlkZXIoc2NlbmUsIHNjZW5lTWVzaENvbGxpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRnJlZXplIHdvcmxkIG1hdHJpeCBhbGwgc3RhdGljIG1lc2hlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjZW5lLm1lc2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2NlbmUubWVzaGVzW2ldLmZyZWV6ZVdvcmxkTWF0cml4KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVTdGVjbmlsKHNjZW5lOiBCQUJZTE9OLlNjZW5lKSB7XG4gICAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHtBYnN0cmFjdEVudmlyb25tZW50fSBmcm9tIFwiLi9BYnN0cmFjdEVudmlyb25tZW50XCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5pbXBvcnQge1RlcnJhaW5NYXRlcmlhbH0gZnJvbSAnYmFieWxvbmpzLW1hdGVyaWFscyc7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudE1vdW50YWluc1Bhc3MgZXh0ZW5kcyBBYnN0cmFjdEVudmlyb25tZW50IHtcblxuICAgIGNvbGxpZGVyczogQXJyYXk8QkFCWUxPTi5BYnN0cmFjdE1lc2g+O1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBzY2VuZSA9IGdhbWUuZ2V0QmFieWxvblNjZW5lKCk7XG4gICAgICAgIHRoaXMuY29sbGlkZXJzID0gW107XG4gICAgICAgIHNjZW5lLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC05LjgxLCAwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuZS5tZXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzY2VuZU1lc2ggPSBzY2VuZS5tZXNoZXNbaV07XG4gICAgICAgICAgICBsZXQgbWVzaE5hbWUgPSBzY2VuZS5tZXNoZXNbaV1bJ25hbWUnXTtcbiAgICAgICAgICAgIGlmIChtZXNoTmFtZS5zZWFyY2goXCJHcm91bmRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihzY2VuZSk7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLnJlY2VpdmVTaGFkb3dzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2guYWx3YXlzU2VsZWN0QXNBY3RpdmVNZXNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdGVycmFpbk1hdGVyaWFsID0gbmV3IFRlcnJhaW5NYXRlcmlhbChcInRlcnJhaW5NYXRlcmlhbFwiLCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgdGVycmFpbk1hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMC41LCAwLjUsIDAuNSk7XG4gICAgICAgICAgICAgICAgdGVycmFpbk1hdGVyaWFsLnNwZWN1bGFyUG93ZXIgPSA2NDtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwubWl4VGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvc2NlbmVzL01vdW50YWluc1Bhc3Mvc3RlbmNpbC5qcGdcIiwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTEgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL3NjZW5lcy9Gb3Jlc3RfaG91c2UvR3Jhc3Nfc2VhbWxlc3Nfc2F0dXJhdGlvbi5qcGdcIiwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTIgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL3NjZW5lcy9Gb3Jlc3RfaG91c2UvZGlydC5qcGdcIiwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTMgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL3NjZW5lcy9Gb3Jlc3RfaG91c2UvR3Jhc3Nfc2VhbWxlc3Nfc2F0dXJhdGlvbi5qcGdcIiwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTEudVNjYWxlID0gdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMS52U2NhbGUgPSAyMDtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUyLnVTY2FsZSA9IHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTIudlNjYWxlID0gMjA7XG4gICAgICAgICAgICAgICAgdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMy51U2NhbGUgPSB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUzLnZTY2FsZSA9IDIwO1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5tYXRlcmlhbCA9IHRlcnJhaW5NYXRlcmlhbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzaE5hbWUuc2VhcmNoKFwiQm94X0N1YmVcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZXJzLnB1c2goc2NlbmVNZXNoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLmlzUGlja2FibGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChtZXNoTmFtZS5zZWFyY2goXCJSb2NrXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFkb3dPYmplY3RzLnB1c2goc2NlbmVNZXNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBjb25lID0gc2NlbmUuZ2V0TWVzaEJ5TmFtZShcImZpcmVwbGFjZS4wMDJcIik7XG4gICAgICAgIC8vIGlmIChjb25lKSB7XG4gICAgICAgIC8vICAgICBsZXQgc21va2VTeXN0ZW0gPSBuZXcgUGFydGljbGVzLkZpcmVwbGFjZVNtb2tlKGdhbWUsIGNvbmUpLnBhcnRpY2xlU3lzdGVtO1xuICAgICAgICAvLyAgICAgc21va2VTeXN0ZW0uc3RhcnQoKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGxldCBmaXJlU3lzdGVtID0gbmV3IFBhcnRpY2xlcy5GaXJlcGxhY2VGaXJlKGdhbWUsIGNvbmUpLnBhcnRpY2xlU3lzdGVtO1xuICAgICAgICAvLyAgICAgZmlyZVN5c3RlbS5zdGFydCgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgbGV0IHNmeEZpcmVwbGFjZSA9IG5ldyBCQUJZTE9OLlNvdW5kKFwiRmlyZVwiLCBcImFzc2V0cy9zb3VuZHMvZmlyZXBsYWNlLm1wM1wiLCBzY2VuZSwgbnVsbCwgeyBsb29wOiB0cnVlLCBhdXRvcGxheTogdHJ1ZSB9KTtcbiAgICAgICAgLy8gICAgIHNmeEZpcmVwbGFjZS5hdHRhY2hUb01lc2goY29uZSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvL1RPRE86IGRlbGV0ZSBpbiBibGVkbmVyXG4gICAgICAgIC8vIHNjZW5lLmdldExpZ2h0QnlOYW1lKCdMYW1wJykuZGlzcG9zZSgpO1xuXG4gICAgICAgIGxldCBsaWdodCA9IG5ldyBCQUJZTE9OLkRpcmVjdGlvbmFsTGlnaHQoXCJEaXJlY3Rpb25hbExpZ2h0XCIsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgLTEsIDApLCBzY2VuZSk7XG4gICAgICAgIGxpZ2h0LmludGVuc2l0eSA9IDAuNjtcbiAgICAgICAgbGlnaHQucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUwLCAwKTtcbiAgICAgICAgbGlnaHQuZGlyZWN0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLjQ1LCAtMi41LCAwKTtcbiAgICAgICAgbGlnaHQuc2hhZG93TWF4WiA9IDUwMDtcbiAgICAgICAgdGhpcy5saWdodCA9IGxpZ2h0O1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb2xsaWRlcnMoc2NlbmUpO1xuICAgICAgICB0aGlzLmZyZWV6ZUFsbE1lc2hlcyhzY2VuZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU3RlY25pbChzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge0ZpcmVwbGFjZVNtb2tlfSBmcm9tIFwiLi4vUGFydGljbGVzL0ZpcmVwbGFjZVNtb2tlXCI7XG5pbXBvcnQge0ZpcmVwbGFjZUZpcmV9IGZyb20gXCIuLi9QYXJ0aWNsZXMvRmlyZXBsYWNlRmlyZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnRTZWxlY3RDaGFyYWN0ZXIge1xuXG4gICAgc2hhZG93R2VuZXJhdG9yOiBCQUJZTE9OLlNoYWRvd0dlbmVyYXRvcjtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6R2FtZSwgc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgLy8vL0xJR0hUXG4gICAgICAgIGxldCBsaWdodCA9IGdhbWUuZ2V0QmFieWxvblNjZW5lKCkubGlnaHRzWzBdO1xuICAgICAgICBsaWdodC5kaXNwb3NlKCk7XG4gICAgICAgIGxldCBmaXJlcGxhY2VMaWdodCA9IG5ldyBCQUJZTE9OLlBvaW50TGlnaHQoXCJmaXJlcGxhY2VMaWdodFwiLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDIuNSwgMCksIHNjZW5lKTtcbiAgICAgICAgZmlyZXBsYWNlTGlnaHQuZGlmZnVzZSA9IG5ldyBCQUJZTE9OLkNvbG9yMygxLCAwLjcsIDAuMyk7XG4gICAgICAgIGZpcmVwbGFjZUxpZ2h0LnJhbmdlID0gNTA7XG5cbiAgICAgICAgbGV0IGludGVuc2l0eUFuaW1hdGlvbiA9IG5ldyBCQUJZTE9OLkFuaW1hdGlvbihcbiAgICAgICAgICAgIFwibWFpbkxpZ2h0SW50ZW5zaXR5XCIsXG4gICAgICAgICAgICBcImludGVuc2l0eVwiLFxuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICBCQUJZTE9OLkFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULFxuICAgICAgICAgICAgQkFCWUxPTi5BbmltYXRpb24uQU5JTUFUSU9OTE9PUE1PREVfQ1lDTEUpO1xuICAgICAgICBpbnRlbnNpdHlBbmltYXRpb24uc2V0S2V5cyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJhbWU6IDAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IDAuODVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJhbWU6IDUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IDAuOVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcmFtZTogMTAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IDAuODJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgbGV0IGNvbG9yQW5pbWF0aW9uID0gbmV3IEJBQllMT04uQW5pbWF0aW9uKFxuICAgICAgICAgICAgXCJtYWluTGlnaHRDb2xvclwiLFxuICAgICAgICAgICAgXCJzcGVjdWxhclwiLFxuICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICBCQUJZTE9OLkFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULFxuICAgICAgICAgICAgQkFCWUxPTi5BbmltYXRpb24uQU5JTUFUSU9OTE9PUE1PREVfQ1lDTEUpO1xuICAgICAgICBjb2xvckFuaW1hdGlvbi5zZXRLZXlzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcmFtZTogMjAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBCQUJZTE9OLkNvbG9yMygxLCAxLCAxKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJhbWU6IDI1LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgQkFCWUxPTi5Db2xvcjMoMSwgMCwgMSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyYW1lOiAzMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IEJBQllMT04uQ29sb3IzKDEsIDEsIDEpLFxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcblxuICAgICAgICBmaXJlcGxhY2VMaWdodC5hbmltYXRpb25zID0gW107XG4gICAgICAgIGZpcmVwbGFjZUxpZ2h0LmFuaW1hdGlvbnMucHVzaChpbnRlbnNpdHlBbmltYXRpb24pO1xuICAgICAgICBnYW1lLmdldEJhYnlsb25TY2VuZSgpLmJlZ2luQW5pbWF0aW9uKGZpcmVwbGFjZUxpZ2h0LCAwLCAxMCwgdHJ1ZSk7XG4gICAgICAgIGxldCBzaGFkb3dHZW5lcmF0b3IgPSBuZXcgQkFCWUxPTi5TaGFkb3dHZW5lcmF0b3IoMTAyNCwgZmlyZXBsYWNlTGlnaHQpO1xuICAgICAgICBzaGFkb3dHZW5lcmF0b3IuZ2V0U2hhZG93TWFwKCkucmVmcmVzaFJhdGUgPSAwO1xuICAgICAgICB0aGlzLnNoYWRvd0dlbmVyYXRvciA9IHNoYWRvd0dlbmVyYXRvcjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjZW5lLm1lc2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNjZW5lTWVzaCA9IHNjZW5lLm1lc2hlc1tpXTtcbiAgICAgICAgICAgIGxldCBtZXNoTmFtZSA9IHNjZW5lLm1lc2hlc1tpXVsnbmFtZSddO1xuXG4gICAgICAgICAgICBpZiAobWVzaE5hbWUuc2VhcmNoKFwiRm9yZXN0X2dyb3VuZFwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLmFjdGlvbk1hbmFnZXIgPSBuZXcgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyKHNjZW5lKTtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2gucmVjZWl2ZVNoYWRvd3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vVE9ETzogZml4IGNvbG9yXG4gICAgICAgICAgICAgICAgLy8gc2NlbmVNZXNoLm1hdGVyaWFsLmVtaXNzaXZlQ29sb3IgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAuMDUsMC4wNSwwLjA1KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoYWRvd0dlbmVyYXRvci5nZXRTaGFkb3dNYXAoKS5yZW5kZXJMaXN0LnB1c2goc2NlbmVNZXNoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbmUgPSA8QkFCWUxPTi5NZXNoPiBzY2VuZS5nZXRNZXNoQnlOYW1lKFwiRmlyZXBsYWNlXCIpO1xuICAgICAgICBpZiAoY29uZSkge1xuICAgICAgICAgICAgZmlyZXBsYWNlTGlnaHQucGFyZW50ID0gY29uZTtcbiAgICAgICAgICAgIGxldCBzbW9rZVN5c3RlbSA9IG5ldyBGaXJlcGxhY2VTbW9rZShnYW1lLCBjb25lKS5wYXJ0aWNsZVN5c3RlbTtcbiAgICAgICAgICAgIHNtb2tlU3lzdGVtLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIGxldCBmaXJlU3lzdGVtID0gbmV3IEZpcmVwbGFjZUZpcmUoZ2FtZSwgY29uZSkucGFydGljbGVTeXN0ZW07XG4gICAgICAgICAgICBmaXJlU3lzdGVtLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIGxldCBzZnhGaXJlcGxhY2UgPSBuZXcgQkFCWUxPTi5Tb3VuZChcIkZpcmVcIiwgXCJhc3NldHMvc291bmRzL2ZpcmVwbGFjZS5tcDNcIiwgc2NlbmUsIG51bGwsIHsgbG9vcDogdHJ1ZSwgYXV0b3BsYXk6IHRydWUgfSk7XG4gICAgICAgICAgICBzZnhGaXJlcGxhY2UuYXR0YWNoVG9NZXNoKGNvbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuZS5tZXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzY2VuZU1lc2ggPSBzY2VuZS5tZXNoZXNbaV07XG4gICAgICAgICAgICBzY2VuZU1lc2guZnJlZXplV29ybGRNYXRyaXgoKTtcbiAgICAgICAgICAgIHNjZW5lTWVzaC5pc1BpY2thYmxlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBuZXcgQkFCWUxPTi5Tb3VuZChcIkZvcmVzdCBuaWdodFwiLCBcImFzc2V0cy9zb3VuZHMvbXVzaWMvdGhlbWUubXAzXCIsIHNjZW5lLCBudWxsLCB7IGxvb3A6IHRydWUsIGF1dG9wbGF5OiB0cnVlLCB2b2x1bWU6IDEgfSk7XG5cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRXZlbnRzIHtcbiAgICBzdGF0aWMgUExBWUVSX0NPTk5FQ1RFRCA9ICdwbGF5ZXJDb25uZWN0ZWQnO1xuICAgIHB1YmxpYyBwbGF5ZXJDb25uZWN0ZWQ6RXZlbnQ7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllckNvbm5lY3RlZCA9IG5ldyBFdmVudChFdmVudHMuUExBWUVSX0NPTk5FQ1RFRCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtQbGF5ZXJCb3R0b21QYW5lbH0gZnJvbSBcIi4vUGxheWVyQm90dG9tUGFuZWxcIjtcbmltcG9ydCB7UGxheWVyUXVlc3RzUGFuZWx9IGZyb20gXCIuL1BsYXllclF1ZXN0c1BhbmVsXCI7XG5pbXBvcnQge1BsYXllclF1ZXN0SW5mb3JtYXRpb259IGZyb20gXCIuL1BsYXllclF1ZXN0SW5mb3JtYXRpb25cIjtcbmltcG9ydCB7Um9vbUluZm9ybWF0aW9ufSBmcm9tIFwiLi9Sb29tSW5mb3JtYXRpb25cIjtcbmltcG9ydCB7U2hvd0hwfSBmcm9tIFwiLi9TaG93SHBcIjtcbmltcG9ydCB7T3B0aW9uc30gZnJvbSBcIi4vcG9wdXAvT3B0aW9uc1wiO1xuaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuL3BvcHVwL0ludmVudG9yeVwiO1xuaW1wb3J0IHtBdHRyaWJ1dGVzfSBmcm9tIFwiLi9wb3B1cC9BdHRyaWJ1dGVzXCI7XG5pbXBvcnQge0FkdmFuY2VkRHluYW1pY1RleHR1cmV9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5cbmV4cG9ydCBjbGFzcyBNYWluIHtcblxuICAgICAgICBwdWJsaWMgZ2FtZTogR2FtZTtcbiAgICAgICAgcHVibGljIHRleHR1cmU6IEFkdmFuY2VkRHluYW1pY1RleHR1cmU7XG4gICAgICAgIHB1YmxpYyBpbnZlbnRvcnk6IEludmVudG9yeTtcbiAgICAgICAgcHVibGljIGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXM7XG4gICAgICAgIHB1YmxpYyBvcHRpb25zOiBPcHRpb25zO1xuICAgICAgICBwdWJsaWMgcGxheWVyQm90dG9tUGFuZWw6IFBsYXllckJvdHRvbVBhbmVsO1xuICAgICAgICBwdWJsaWMgcGxheWVyUXVlc3RJbmZvcm1hdGlvbjogUGxheWVyUXVlc3RJbmZvcm1hdGlvbjtcbiAgICAgICAgcHVibGljIHJvb21JbmZvcm1hdG9uOiBSb29tSW5mb3JtYXRpb247XG4gICAgICAgIHB1YmxpYyBwbGF5ZXJMb2dzUXVlc3RzOiBQbGF5ZXJRdWVzdHNQYW5lbDtcbiAgICAgICAgcHVibGljIGNoYXJhY3RlclRvcEhwOiBTaG93SHA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgICAgIGdhbWUuZ3VpID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IEFkdmFuY2VkRHluYW1pY1RleHR1cmUuQ3JlYXRlRnVsbHNjcmVlblVJKCdndWkubWFpbicpO1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlLmxheWVyLmxheWVyTWFzayA9IDE7XG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyQm90dG9tUGFuZWwgPSBuZXcgUGxheWVyQm90dG9tUGFuZWwoZ2FtZSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckxvZ3NRdWVzdHMgPSBuZXcgUGxheWVyUXVlc3RzUGFuZWwoZ2FtZSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclF1ZXN0SW5mb3JtYXRpb24gPSBuZXcgUGxheWVyUXVlc3RJbmZvcm1hdGlvbihnYW1lKTtcbiAgICAgICAgICAgIHRoaXMucm9vbUluZm9ybWF0b24gPSBuZXcgUm9vbUluZm9ybWF0aW9uKGdhbWUpO1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJUb3BIcCA9IG5ldyBTaG93SHAoZ2FtZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IG5ldyBBdHRyaWJ1dGVzKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gbmV3IE9wdGlvbnModGhpcyk7XG4gICAgICAgIH1cblxuICAgIH1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7VGV4dEJsb2NrLCBJbWFnZSwgR3JpZCwgUmVjdGFuZ2xlLCBDb250cm9sLCBCdXR0b259IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyQm90dG9tUGFuZWwge1xuXG4gICAgcHVibGljIGV4cEJhcjogSW1hZ2U7XG4gICAgcHVibGljIGV4cEJhclRleHQ6IFRleHRCbG9jaztcbiAgICBwdWJsaWMgZ3VpR3JpZFNraWxsczogR3JpZDtcbiAgICBwdWJsaWMgY29udGFpbmVyOiBSZWN0YW5nbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHRleHR1cmUgPSBnYW1lLmd1aS50ZXh0dXJlO1xuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBuZXcgUmVjdGFuZ2xlKCdndWkucGFuZWwuYm90dG9tJyk7XG4gICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9DRU5URVI7XG4gICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX0JPVFRPTTtcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gJzY4NXB4JztcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9ICc4MHB4JztcbiAgICAgICAgY29udGFpbmVyLmlzUG9pbnRlckJsb2NrZXIgPSB0cnVlO1xuICAgICAgICBjb250YWluZXIudGhpY2tuZXNzID0gMDtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRleHR1cmUuYWRkQ29udHJvbChjb250YWluZXIpO1xuXG4gICAgICAgIGxldCB0b29sYmFyID0gbmV3IEltYWdlKCdndWkucGFuZWwuYm90dG9tLnRvb2xiYXInLCAnYXNzZXRzL2d1aS90b29sYmFyLnBuZycpO1xuICAgICAgICB0b29sYmFyLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfQk9UVE9NO1xuICAgICAgICB0b29sYmFyLmhlaWdodCA9ICc2NXB4JztcbiAgICAgICAgY29udGFpbmVyLmFkZENvbnRyb2wodG9vbGJhcik7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lclNsaWRlcnMgPSBuZXcgUmVjdGFuZ2xlKCdndWkucGFuZWwuYm90dG9tJyk7XG4gICAgICAgIGNvbnRhaW5lclNsaWRlcnMuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfQ0VOVEVSO1xuICAgICAgICBjb250YWluZXJTbGlkZXJzLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICBjb250YWluZXJTbGlkZXJzLndpZHRoID0gJzYwNXB4JztcbiAgICAgICAgY29udGFpbmVyU2xpZGVycy5oZWlnaHQgPSAnNDhweCc7XG4gICAgICAgIGNvbnRhaW5lclNsaWRlcnMuaXNQb2ludGVyQmxvY2tlciA9IHRydWU7XG4gICAgICAgIGNvbnRhaW5lclNsaWRlcnMudGhpY2tuZXNzID0gMDtcbiAgICAgICAgY29udGFpbmVyLmFkZENvbnRyb2woY29udGFpbmVyU2xpZGVycyk7XG5cbiAgICAgICAgbGV0IHRvb2xiYXJFeHAgPSBuZXcgSW1hZ2UoJ2d1aS5wYW5lbC5ib3R0b20udG9vbGJhcicsICdhc3NldHMvZ3VpL3Rvb2xiYXJfZXhwLnBuZycpO1xuICAgICAgICB0b29sYmFyRXhwLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICB0b29sYmFyRXhwLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0xFRlQ7XG4gICAgICAgIHRvb2xiYXJFeHAud2lkdGggPSAxO1xuICAgICAgICB0b29sYmFyRXhwLmhlaWdodCA9ICcxNHB4JztcbiAgICAgICAgdG9vbGJhckV4cC50b3AgPSAnMHB4JztcbiAgICAgICAgdGhpcy5leHBCYXIgPSB0b29sYmFyRXhwO1xuICAgICAgICBjb250YWluZXJTbGlkZXJzLmFkZENvbnRyb2wodG9vbGJhckV4cCk7XG5cbiAgICAgICAgbGV0IHRleHRCbG9ja0V4cCA9IG5ldyBUZXh0QmxvY2soKTtcbiAgICAgICAgdGV4dEJsb2NrRXhwLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICB0ZXh0QmxvY2tFeHAuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfTEVGVDtcbiAgICAgICAgdGV4dEJsb2NrRXhwLnRvcCA9ICctMXB4JztcbiAgICAgICAgdGV4dEJsb2NrRXhwLndpZHRoID0gMTtcbiAgICAgICAgdGV4dEJsb2NrRXhwLmhlaWdodCA9ICcxNHB4JztcbiAgICAgICAgdGV4dEJsb2NrRXhwLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0ZXh0QmxvY2tFeHAuZm9udFNpemUgPSAxMjtcbiAgICAgICAgdGV4dEJsb2NrRXhwLmZvbnRGYW1pbHkgPSBcIlJ1c2xhbkRpc3BsYXlcIjtcblxuICAgICAgICB0aGlzLmV4cEJhclRleHQgPSB0ZXh0QmxvY2tFeHA7XG4gICAgICAgIGNvbnRhaW5lclNsaWRlcnMuYWRkQ29udHJvbCh0ZXh0QmxvY2tFeHApO1xuXG4gICAgICAgIGxldCBncmlkU3BlY2lhbHMgPSBuZXcgR3JpZCgpO1xuICAgICAgICBncmlkU3BlY2lhbHMudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9CT1RUT007XG4gICAgICAgIGdyaWRTcGVjaWFscy5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9DRU5URVI7XG4gICAgICAgIGdyaWRTcGVjaWFscy53aWR0aCA9ICcyMjVweCc7XG4gICAgICAgIGdyaWRTcGVjaWFscy5oZWlnaHQgPSAnNTJweCc7XG4gICAgICAgIGdyaWRTcGVjaWFscy50b3AgPSAnLTZweCc7XG4gICAgICAgIGdyaWRTcGVjaWFscy5sZWZ0ID0gJzBweCc7XG4gICAgICAgIGdyaWRTcGVjaWFscy5hZGRDb2x1bW5EZWZpbml0aW9uKDEpO1xuICAgICAgICBncmlkU3BlY2lhbHMuYWRkQ29sdW1uRGVmaW5pdGlvbigxKTtcbiAgICAgICAgZ3JpZFNwZWNpYWxzLmFkZENvbHVtbkRlZmluaXRpb24oMSk7XG4gICAgICAgIGdyaWRTcGVjaWFscy5hZGRDb2x1bW5EZWZpbml0aW9uKDEpO1xuICAgICAgICBjb250YWluZXIuYWRkQ29udHJvbChncmlkU3BlY2lhbHMpO1xuICAgICAgICBzZWxmLmd1aUdyaWRTa2lsbHMgPSBncmlkU3BlY2lhbHM7XG5cbiAgICAgICAgbGV0IGJ1dHRvbkF0dHJpYnV0ZXMgPSBCdXR0b24uQ3JlYXRlSW1hZ2VPbmx5QnV0dG9uKFwiYnV0dG9uLmF0dHJpYnV0ZXNcIiwgXCJhc3NldHMvZ3VpL2J1dHRvbnMvYXR0cmlidXRlcy5wbmdcIik7XG4gICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfTEVGVDtcbiAgICAgICAgYnV0dG9uQXR0cmlidXRlcy53aWR0aCA9ICcxMTJweCc7XG4gICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMuaGVpZ2h0ID0gJzIxcHgnO1xuICAgICAgICBidXR0b25BdHRyaWJ1dGVzLnRoaWNrbmVzcyA9IDA7XG4gICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXMudG9wID0gJy03cHgnO1xuICAgICAgICBidXR0b25BdHRyaWJ1dGVzLmxlZnQgPSAnOTNweCc7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDb250cm9sKGJ1dHRvbkF0dHJpYnV0ZXMpO1xuICAgICAgICBidXR0b25BdHRyaWJ1dGVzLm9uUG9pbnRlclVwT2JzZXJ2YWJsZS5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFnYW1lLmd1aS5hdHRyaWJ1dGVzLm9wZW5lZCkge1xuICAgICAgICAgICAgICAgIGdhbWUuZ3VpLmF0dHJpYnV0ZXMub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYnV0dG9uU2tpbGxzID0gQnV0dG9uLkNyZWF0ZUltYWdlT25seUJ1dHRvbihcImJ1dHRvbi5za2lsbHNcIiwgXCJhc3NldHMvZ3VpL2J1dHRvbnMvc2tpbGxzLnBuZ1wiKTtcbiAgICAgICAgYnV0dG9uU2tpbGxzLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0xFRlQ7XG4gICAgICAgIGJ1dHRvblNraWxscy53aWR0aCA9ICcxMTJweCc7XG4gICAgICAgIGJ1dHRvblNraWxscy5oZWlnaHQgPSAnMjFweCc7XG4gICAgICAgIGJ1dHRvblNraWxscy50aGlja25lc3MgPSAwO1xuICAgICAgICBidXR0b25Ta2lsbHMudG9wID0gJzIwcHgnO1xuICAgICAgICBidXR0b25Ta2lsbHMubGVmdCA9ICc5M3B4JztcbiAgICAgICAgY29udGFpbmVyLmFkZENvbnRyb2woYnV0dG9uU2tpbGxzKTtcbiAgICAgICAgYnV0dG9uU2tpbGxzLm9uUG9pbnRlclVwT2JzZXJ2YWJsZS5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuaW5pdEdvZFJheSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYnV0dG9uSW52ZW50b3J5ID0gQnV0dG9uLkNyZWF0ZUltYWdlT25seUJ1dHRvbihcImJ1dHRvbi5za2lsbHNcIiwgXCJhc3NldHMvZ3VpL2J1dHRvbnMvaW52ZW50b3J5LnBuZ1wiKTtcbiAgICAgICAgYnV0dG9uSW52ZW50b3J5Lmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0xFRlQ7XG4gICAgICAgIGJ1dHRvbkludmVudG9yeS53aWR0aCA9ICcxMTJweCc7XG4gICAgICAgIGJ1dHRvbkludmVudG9yeS5oZWlnaHQgPSAnMjFweCc7XG4gICAgICAgIGJ1dHRvbkludmVudG9yeS50aGlja25lc3MgPSAwO1xuICAgICAgICBidXR0b25JbnZlbnRvcnkudG9wID0gJy03cHgnO1xuICAgICAgICBidXR0b25JbnZlbnRvcnkubGVmdCA9ICc0NzlweCc7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDb250cm9sKGJ1dHRvbkludmVudG9yeSk7XG4gICAgICAgIGJ1dHRvbkludmVudG9yeS5vblBvaW50ZXJVcE9ic2VydmFibGUuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghZ2FtZS5ndWkuaW52ZW50b3J5Lm9wZW5lZCkge1xuICAgICAgICAgICAgICAgIGdhbWUuZ3VpLmludmVudG9yeS5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBidXR0b25PcHRpb25zID0gQnV0dG9uLkNyZWF0ZUltYWdlT25seUJ1dHRvbihcImJ1dHRvbi5za2lsbHNcIiwgXCJhc3NldHMvZ3VpL2J1dHRvbnMvb3B0aW9ucy5wbmdcIik7XG4gICAgICAgIGJ1dHRvbk9wdGlvbnMuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfTEVGVDtcbiAgICAgICAgYnV0dG9uT3B0aW9ucy53aWR0aCA9ICcxMTJweCc7XG4gICAgICAgIGJ1dHRvbk9wdGlvbnMuaGVpZ2h0ID0gJzIxcHgnO1xuICAgICAgICBidXR0b25PcHRpb25zLnRoaWNrbmVzcyA9IDA7XG4gICAgICAgIGJ1dHRvbk9wdGlvbnMudG9wID0gJzIwcHgnO1xuICAgICAgICBidXR0b25PcHRpb25zLmxlZnQgPSAnNDc5cHgnO1xuICAgICAgICBidXR0b25PcHRpb25zLm9uUG9pbnRlclVwT2JzZXJ2YWJsZS5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFnYW1lLmd1aS5vcHRpb25zLm9wZW5lZCkge1xuICAgICAgICAgICAgICAgIGdhbWUuZ3VpLm9wdGlvbnMub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29udGFpbmVyLmFkZENvbnRyb2woYnV0dG9uT3B0aW9ucyk7XG5cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vQ2hhcmFjdGVycy9QbGF5ZXJcIjtcbmltcG9ydCB7Q29udGFpbmVyLCBJbWFnZSwgVGV4dEJsb2NrLCBDb250cm9sLEdyaWR9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgUGxheWVySW5mb3JtYXRpb24ge1xuXG4gICAgICAgIHB1YmxpYyBjb250YWluZXI6IENvbnRhaW5lcjtcbiAgICAgICAgcHVibGljIGhwQmFyOiBJbWFnZTtcbiAgICAgICAgcHVibGljIGhwQmFyVGV4dDogVGV4dEJsb2NrO1xuICAgICAgICBwdWJsaWMgZW5lcmd5QmFyOiBJbWFnZTtcbiAgICAgICAgcHVibGljIGVuZXJneUJhclRleHQ6IFRleHRCbG9jaztcblxuICAgICAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllciwgZ2FtZTogR2FtZSkge1xuICAgICAgICAgICAgY29uc3QgZ3VpUGFuZWwgPSBnYW1lLmd1aS5yb29tSW5mb3JtYXRvbi5ndWlQYW5lbDtcblxuICAgICAgICAgICAgbGV0IGdyaWQgPSBuZXcgR3JpZCgpO1xuICAgICAgICAgICAgZ3JpZC5hZGRDb2x1bW5EZWZpbml0aW9uKDcwLCB0cnVlKTtcbiAgICAgICAgICAgIGdyaWQuYWRkQ29sdW1uRGVmaW5pdGlvbigxKTtcbiAgICAgICAgICAgIGdyaWQud2lkdGggPSAxO1xuICAgICAgICAgICAgZ3JpZC5oZWlnaHQgPSc2NHB4JztcbiAgICAgICAgICAgIGdyaWQucGFkZGluZ1RvcCA9ICcxMHB4JztcbiAgICAgICAgICAgIGd1aVBhbmVsLmFkZENvbnRyb2woZ3JpZCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGdyaWQ7XG5cbiAgICAgICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZShcImJ1dFwiLCBcImFzc2V0cy9ndWkvd2Fycmlvci5wbmdcIik7XG4gICAgICAgICAgICBpbWFnZS53aWR0aCA9IFwiNjRweFwiO1xuICAgICAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gXCI2NHB4XCI7XG4gICAgICAgICAgICBpbWFnZS52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgICAgIGltYWdlLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0xFRlQ7XG4gICAgICAgICAgICBncmlkLmFkZENvbnRyb2woaW1hZ2UsIDAsIDApO1xuXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBuZXcgVGV4dEJsb2NrKCk7XG4gICAgICAgICAgICB0aXRsZS52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgICAgIHRpdGxlLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0xFRlQ7XG4gICAgICAgICAgICB0aXRsZS50ZXh0ID0gcGxheWVyLm5hbWU7XG4gICAgICAgICAgICB0aXRsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgICAgIHRpdGxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgICAgIHRpdGxlLmZvbnRGYW1pbHkgPSBcIlJ1c2xhbkRpc3BsYXlcIjtcbiAgICAgICAgICAgIHRpdGxlLmZvbnRTaXplID0gMTY7XG4gICAgICAgICAgICB0aXRsZS5yZXNpemVUb0ZpdCA9IHRydWU7XG4gICAgICAgICAgICBncmlkLmFkZENvbnRyb2wodGl0bGUsIDAsIDEpO1xuXG4gICAgICAgICAgICBsZXQgdG9vbGJhckhwID0gbmV3IEltYWdlKCdndWkucGFuZWwuYm90dG9tLnRvb2xiYXInLCAnYXNzZXRzL2d1aS90b29sYmFyX2hwLnBuZycpO1xuICAgICAgICAgICAgdG9vbGJhckhwLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICAgICAgdG9vbGJhckhwLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0xFRlQ7XG4gICAgICAgICAgICB0b29sYmFySHAud2lkdGggPSAwO1xuICAgICAgICAgICAgdG9vbGJhckhwLmhlaWdodCA9ICcxNHB4JztcbiAgICAgICAgICAgIHRvb2xiYXJIcC50b3AgPSAnMjRweCc7XG4gICAgICAgICAgICB0aGlzLmhwQmFyID0gdG9vbGJhckhwO1xuICAgICAgICAgICAgZ3JpZC5hZGRDb250cm9sKHRvb2xiYXJIcCwgMCwgMSk7XG5cbiAgICAgICAgICAgIGxldCB0ZXh0QmxvY2tIcCA9IG5ldyBUZXh0QmxvY2soKTtcbiAgICAgICAgICAgIHRleHRCbG9ja0hwLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICAgICAgdGV4dEJsb2NrSHAuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfQ0VOVEVSO1xuICAgICAgICAgICAgdGV4dEJsb2NrSHAudG9wID0gJzI0cHgnO1xuICAgICAgICAgICAgdGV4dEJsb2NrSHAud2lkdGggPSAxO1xuICAgICAgICAgICAgdGV4dEJsb2NrSHAuaGVpZ2h0ID0gJzE0cHgnO1xuICAgICAgICAgICAgdGV4dEJsb2NrSHAuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0ZXh0QmxvY2tIcC5mb250U2l6ZSA9IDE2O1xuICAgICAgICAgICAgdGV4dEJsb2NrSHAuZm9udEZhbWlseSA9IFwiUnVzbGFuRGlzcGxheVwiO1xuXG4gICAgICAgICAgICB0aGlzLmhwQmFyVGV4dCA9IHRleHRCbG9ja0hwO1xuICAgICAgICAgICAgZ3JpZC5hZGRDb250cm9sKHRleHRCbG9ja0hwLCAwLCAxKTtcblxuICAgICAgICAgICAgbGV0IHRvb2xiYXJFbmVyZ3kgPSBuZXcgSW1hZ2UoJ2d1aS5wYW5lbC5ib3R0b20udG9vbGJhcicsICdhc3NldHMvZ3VpL3Rvb2xiYXJfZW5lcmd5LnBuZycpO1xuICAgICAgICAgICAgdG9vbGJhckVuZXJneS52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgICAgIHRvb2xiYXJFbmVyZ3kuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfTEVGVDtcbiAgICAgICAgICAgIHRvb2xiYXJFbmVyZ3kud2lkdGggPSAxO1xuICAgICAgICAgICAgdG9vbGJhckVuZXJneS5oZWlnaHQgPSAnMTRweCc7XG4gICAgICAgICAgICB0b29sYmFyRW5lcmd5LnRvcCA9ICc0MHB4JztcbiAgICAgICAgICAgIHRoaXMuZW5lcmd5QmFyID0gdG9vbGJhckVuZXJneTtcbiAgICAgICAgICAgIGdyaWQuYWRkQ29udHJvbCh0b29sYmFyRW5lcmd5LCAwLCAxKTtcblxuICAgICAgICAgICAgbGV0IHRleHRUb29sYmFyRW5lcmd5ID0gbmV3IFRleHRCbG9jaygpO1xuICAgICAgICAgICAgdGV4dFRvb2xiYXJFbmVyZ3kudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgICAgICB0ZXh0VG9vbGJhckVuZXJneS5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9DRU5URVI7XG4gICAgICAgICAgICB0ZXh0VG9vbGJhckVuZXJneS50b3AgPSAnNDBweCc7XG4gICAgICAgICAgICB0ZXh0VG9vbGJhckVuZXJneS53aWR0aCA9IDE7XG4gICAgICAgICAgICB0ZXh0VG9vbGJhckVuZXJneS5oZWlnaHQgPSAnMTRweCc7XG4gICAgICAgICAgICB0ZXh0VG9vbGJhckVuZXJneS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRleHRUb29sYmFyRW5lcmd5LmZvbnRTaXplID0gMTI7XG4gICAgICAgICAgICB0ZXh0VG9vbGJhckVuZXJneS5mb250RmFtaWx5ID0gXCJSdXNsYW5EaXNwbGF5XCI7XG5cbiAgICAgICAgICAgIHRoaXMuZW5lcmd5QmFyVGV4dCA9IHRleHRUb29sYmFyRW5lcmd5O1xuICAgICAgICAgICAgZ3JpZC5hZGRDb250cm9sKHRleHRUb29sYmFyRW5lcmd5LCAwLCAxKTtcbiAgICAgICAgfVxuXG4gICAgfVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtBZHZhbmNlZER5bmFtaWNUZXh0dXJlLCBTdGFja1BhbmVsLCBUZXh0QmxvY2ssIENvbnRyb2x9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyUXVlc3RJbmZvcm1hdGlvbiB7XG5cbiAgICBwdWJsaWMgZ3VpUGFuZWw6IFN0YWNrUGFuZWw7XG4gICAgcHJvdGVjdGVkIHRleHR1cmU6IEFkdmFuY2VkRHluYW1pY1RleHR1cmU7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgICAgIHRoaXMudGV4dHVyZSA9IGdhbWUuZ3VpLnRleHR1cmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFF1ZXN0KHF1ZXN0RGF0YSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHNlbGYuZ3VpUGFuZWwpIHtcbiAgICAgICAgICAgIHNlbGYuZ3VpUGFuZWwuZGlzcG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBsYXllclF1ZXN0c0luZm9ybWF0aW9uUGFuZWwgPSBuZXcgU3RhY2tQYW5lbCgpO1xuICAgICAgICBwbGF5ZXJRdWVzdHNJbmZvcm1hdGlvblBhbmVsLndpZHRoID0gXCI1MCVcIjtcbiAgICAgICAgcGxheWVyUXVlc3RzSW5mb3JtYXRpb25QYW5lbC50b3AgPSA0MDtcbiAgICAgICAgcGxheWVyUXVlc3RzSW5mb3JtYXRpb25QYW5lbC52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgcGxheWVyUXVlc3RzSW5mb3JtYXRpb25QYW5lbC5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9SSUdIVDtcbiAgICAgICAgc2VsZi50ZXh0dXJlLmFkZENvbnRyb2wocGxheWVyUXVlc3RzSW5mb3JtYXRpb25QYW5lbCk7XG4gICAgICAgIHNlbGYuZ3VpUGFuZWwgPSBwbGF5ZXJRdWVzdHNJbmZvcm1hdGlvblBhbmVsO1xuXG4gICAgICAgIGxldCB0aXRsZSA9IG5ldyBUZXh0QmxvY2soKTtcbiAgICAgICAgdGl0bGUudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgIHRpdGxlLnRleHQgPSBxdWVzdERhdGEudGl0bGU7XG4gICAgICAgIHRpdGxlLnRvcCA9IFwiMCVcIjtcbiAgICAgICAgdGl0bGUuY29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICB0aXRsZS5mb250RmFtaWx5ID0gXCJSdXNsYW5EaXNwbGF5XCI7XG4gICAgICAgIHRpdGxlLmZvbnRTaXplID0gMjI7XG4gICAgICAgIHRpdGxlLnJlc2l6ZVRvRml0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ndWlQYW5lbC5hZGRDb250cm9sKHRpdGxlKTtcblxuICAgICAgICBxdWVzdERhdGEuY2hhcHRlcnNbcXVlc3REYXRhLmFjdHVhbENoYXB0ZXJdLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xuICAgICAgICAgICAgbGV0IHJlcXVpcmVtZW50RGVzY3JpcHRpb24gPSBuZXcgVGV4dEJsb2NrKCk7XG4gICAgICAgICAgICByZXF1aXJlbWVudERlc2NyaXB0aW9uLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICAgICAgcmVxdWlyZW1lbnREZXNjcmlwdGlvbi50ZXh0ID0gcmVxdWlyZW1lbnQubmFtZTtcbiAgICAgICAgICAgIHJlcXVpcmVtZW50RGVzY3JpcHRpb24ucmVzaXplVG9GaXQgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWlyZW1lbnREZXNjcmlwdGlvbi5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHJlcXVpcmVtZW50RGVzY3JpcHRpb24uZm9udEZhbWlseSA9IFwiUnVzbGFuRGlzcGxheVwiO1xuICAgICAgICAgICAgcmVxdWlyZW1lbnREZXNjcmlwdGlvbi50b3AgPSBcIjUlXCI7XG4gICAgICAgICAgICByZXF1aXJlbWVudERlc2NyaXB0aW9uLmZvbnRTaXplID0gMTg7XG4gICAgICAgICAgICBzZWxmLmd1aVBhbmVsLmFkZENvbnRyb2wocmVxdWlyZW1lbnREZXNjcmlwdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtUZXh0QmxvY2ssIFN0YWNrUGFuZWwsIEFkdmFuY2VkRHluYW1pY1RleHR1cmUsIENvbnRyb2x9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyUXVlc3RzUGFuZWwge1xuXG4gICAgcHVibGljIGd1aVBhbmVsOiBTdGFja1BhbmVsO1xuICAgIHByb3RlY3RlZCB0ZXh0czogVGV4dEJsb2NrW107XG4gICAgcHJvdGVjdGVkIHRleHR1cmU6IEFkdmFuY2VkRHluYW1pY1RleHR1cmU7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgICAgIHRoaXMudGV4dHMgPSBbXTtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gZ2FtZS5ndWkudGV4dHVyZTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgbGV0IHBsYXllclF1ZXN0c0xvZ3NQYW5lbCA9IG5ldyBTdGFja1BhbmVsKCk7XG4gICAgICAgIHBsYXllclF1ZXN0c0xvZ3NQYW5lbC53aWR0aCA9IFwiNTAlXCI7XG4gICAgICAgIHBsYXllclF1ZXN0c0xvZ3NQYW5lbC50b3AgPSA0MDtcbiAgICAgICAgcGxheWVyUXVlc3RzTG9nc1BhbmVsLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICBzZWxmLnRleHR1cmUuYWRkQ29udHJvbChwbGF5ZXJRdWVzdHNMb2dzUGFuZWwpO1xuICAgICAgICBzZWxmLmd1aVBhbmVsID0gcGxheWVyUXVlc3RzTG9nc1BhbmVsO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gY29sb3JcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkVGV4dChtZXNzYWdlOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcgPSAnd2hpdGUnKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gbmV3IFRleHRCbG9jaygpO1xuICAgICAgICB0ZXh0LnRleHQgPSBtZXNzYWdlO1xuICAgICAgICB0ZXh0LmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRleHQudGV4dFdyYXBwaW5nID0gdHJ1ZTtcbiAgICAgICAgdGV4dC5oZWlnaHQgPSBcIjI1cHhcIjtcbiAgICAgICAgdGV4dC53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICB0ZXh0LmZvbnRGYW1pbHkgPSBcIlJ1c2xhbkRpc3BsYXlcIjtcbiAgICAgICAgdGV4dC50ZXh0SG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfQ0VOVEVSO1xuICAgICAgICB0ZXh0LmZvbnRTaXplID0gMTY7XG5cbiAgICAgICAgdGhpcy5ndWlQYW5lbC5hZGRDb250cm9sKHRleHQpO1xuXG4gICAgICAgIHRoaXMudGV4dHMucHVzaCh0ZXh0KTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0VG9EaXNwb3NlID0gc2VsZi50ZXh0cy5zaGlmdCgpO1xuICAgICAgICAgICAgc2VsZi5ndWlQYW5lbC5yZW1vdmVDb250cm9sKHRleHRUb0Rpc3Bvc2UpO1xuICAgICAgICB9LCA0MDAwKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7U3RhY2tQYW5lbCwgQWR2YW5jZWREeW5hbWljVGV4dHVyZSwgQ29udHJvbH0gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5cbmV4cG9ydCBjbGFzcyBSb29tSW5mb3JtYXRpb24ge1xuXG4gICAgICAgIHB1YmxpYyBndWlQYW5lbDpTdGFja1BhbmVsO1xuICAgICAgICBwcm90ZWN0ZWQgdGV4dHVyZTpBZHZhbmNlZER5bmFtaWNUZXh0dXJlO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IGdhbWUuZ3VpLnRleHR1cmU7XG5cbiAgICAgICAgICAgIGxldCByb29tSW5mb3JtYXRpb25QYW5lbCA9IG5ldyBTdGFja1BhbmVsKFwiUm9vbSBJbmZvcm1hdGlvblwiKTtcbiAgICAgICAgICAgIHJvb21JbmZvcm1hdGlvblBhbmVsLndpZHRoID0gXCIyMCVcIjtcbiAgICAgICAgICAgIHJvb21JbmZvcm1hdGlvblBhbmVsLnRvcCA9IDQwO1xuICAgICAgICAgICAgcm9vbUluZm9ybWF0aW9uUGFuZWwubGVmdCA9IDEwO1xuICAgICAgICAgICAgcm9vbUluZm9ybWF0aW9uUGFuZWwuekluZGV4ID0gMTtcbiAgICAgICAgICAgIHJvb21JbmZvcm1hdGlvblBhbmVsLmlzUG9pbnRlckJsb2NrZXIgPSB0cnVlO1xuICAgICAgICAgICAgcm9vbUluZm9ybWF0aW9uUGFuZWwudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgICAgICByb29tSW5mb3JtYXRpb25QYW5lbC5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9MRUZUO1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlLmFkZENvbnRyb2wocm9vbUluZm9ybWF0aW9uUGFuZWwpO1xuICAgICAgICAgICAgdGhpcy5ndWlQYW5lbCA9IHJvb21JbmZvcm1hdGlvblBhbmVsO1xuICAgICAgICB9XG5cbiAgICB9XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge0FkdmFuY2VkRHluYW1pY1RleHR1cmUsIFJlY3RhbmdsZSwgQnV0dG9uLCBDb250cm9sLCBJbnB1dFRleHR9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0Q2hhcmFjdGVyIHtcbiAgICBwdWJsaWMgdGV4dHVyZTogQWR2YW5jZWREeW5hbWljVGV4dHVyZTtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgLy9UT0RPOiBGaXggR1VJXG4gICAgICAgIC8vIGdhbWUuZ3VpID0gdGhpcztcbiAgICAgICAgbGV0IHRleHR1cmUgPSBBZHZhbmNlZER5bmFtaWNUZXh0dXJlLkNyZWF0ZUZ1bGxzY3JlZW5VSSgnZ3VpLm1haW4nKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IG5ldyBSZWN0YW5nbGUoJ2d1aS5wYW5lbC5ib3R0b20nKTtcbiAgICAgICAgY29udGFpbmVyLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcbiAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfQk9UVE9NO1xuICAgICAgICBjb250YWluZXIud2lkdGggPSAnNjg1cHgnO1xuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gJzgwcHgnO1xuICAgICAgICBjb250YWluZXIuaXNQb2ludGVyQmxvY2tlciA9IHRydWU7XG4gICAgICAgIGNvbnRhaW5lci50aGlja25lc3MgPSAwO1xuICAgICAgICB0ZXh0dXJlLmFkZENvbnRyb2woY29udGFpbmVyKTtcblxuICAgICAgICBsZXQgYnV0dG9uQ3JlYXRlQ2hhcmFjdGVyID0gQnV0dG9uLkNyZWF0ZUltYWdlV2l0aENlbnRlclRleHRCdXR0b24oXCJidXR0b24uY3JlYXRlX2NoYXJhY3RlclwiLCAnQ3JlYXRlIGNoYXJhY3RlcicsIFwiYXNzZXRzL2d1aS9idXR0b25zL2JsYW5rLnBuZ1wiKTtcbiAgICAgICAgYnV0dG9uQ3JlYXRlQ2hhcmFjdGVyLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcbiAgICAgICAgYnV0dG9uQ3JlYXRlQ2hhcmFjdGVyLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfQk9UVE9NO1xuICAgICAgICBidXR0b25DcmVhdGVDaGFyYWN0ZXIud2lkdGggPSAwLjU7XG4gICAgICAgIGJ1dHRvbkNyZWF0ZUNoYXJhY3Rlci5oZWlnaHQgPSAnNDBweCc7XG4gICAgICAgIGJ1dHRvbkNyZWF0ZUNoYXJhY3Rlci50aGlja25lc3MgPSAwO1xuICAgICAgICBidXR0b25DcmVhdGVDaGFyYWN0ZXIuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICBidXR0b25DcmVhdGVDaGFyYWN0ZXIuZm9udFNpemUgPSAxNjtcbiAgICAgICAgY29udGFpbmVyLmFkZENvbnRyb2woYnV0dG9uQ3JlYXRlQ2hhcmFjdGVyKTtcbiAgICAgICAgYnV0dG9uQ3JlYXRlQ2hhcmFjdGVyLm9uUG9pbnRlclVwT2JzZXJ2YWJsZS5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVyTmFtZSA9IGlucHV0LnRleHQ7XG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyTmFtZS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ2NyZWF0ZUNoYXJhY3RlcicsIGNoYXJhY3Rlck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgaW5wdXQgPSBuZXcgSW5wdXRUZXh0KCk7XG4gICAgICAgIGlucHV0LnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICBpbnB1dC53aWR0aCA9IDAuNTtcbiAgICAgICAgaW5wdXQubWF4V2lkdGggPSAwLjU7XG4gICAgICAgIGlucHV0LmhlaWdodCA9IFwiMzBweFwiO1xuICAgICAgICBpbnB1dC5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgaW5wdXQuYmFja2dyb3VuZCA9IFwiYmxhY2tcIjtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXJUZXh0ID0gXCJTZXQgbmFtZSBvZiB5b3VyIG5ldyBjaGFyYWN0ZXJcIjtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXJDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgY29udGFpbmVyLmFkZENvbnRyb2woaW5wdXQpO1xuXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0Fic3RyYWN0Q2hhcmFjdGVyfSBmcm9tIFwiLi4vQ2hhcmFjdGVycy9BYnN0cmFjdENoYXJhY3RlclwiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtBZHZhbmNlZER5bmFtaWNUZXh0dXJlLCBTdGFja1BhbmVsLCBDb250cm9sLCBTbGlkZXIsIFRleHRCbG9ja30gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5cbmV4cG9ydCBjbGFzcyBTaG93SHAge1xuXG4gICAgcHVibGljIGhwQmFyO1xuICAgIHB1YmxpYyBndWlQYW5lbDtcbiAgICBwcm90ZWN0ZWQgdGV4dHVyZTogQWR2YW5jZWREeW5hbWljVGV4dHVyZTtcbiAgICBwcm90ZWN0ZWQgY2hhcmFjdGVyOiBBYnN0cmFjdENoYXJhY3RlclxuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xuICAgICAgICB0aGlzLnRleHR1cmUgPSBnYW1lLmd1aS50ZXh0dXJlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93SHBDaGFyYWN0ZXIoY2hhcmFjdGVyOiBBYnN0cmFjdENoYXJhY3Rlcikge1xuICAgICAgICBpZiAodGhpcy5ndWlQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlLnJlbW92ZUNvbnRyb2wodGhpcy5ndWlQYW5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlcjtcbiAgICAgICAgbGV0IGNoYXJhY3RlclBhbmVsID0gbmV3IFN0YWNrUGFuZWwoKTtcbiAgICAgICAgY2hhcmFjdGVyUGFuZWwud2lkdGggPSBcIjI1JVwiO1xuICAgICAgICBjaGFyYWN0ZXJQYW5lbC50b3AgPSAxMDtcbiAgICAgICAgY2hhcmFjdGVyUGFuZWwudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgIHRoaXMuZ3VpUGFuZWwgPSBjaGFyYWN0ZXJQYW5lbDtcbiAgICAgICAgdGhpcy50ZXh0dXJlLmFkZENvbnRyb2woY2hhcmFjdGVyUGFuZWwpO1xuXG4gICAgICAgIGxldCB0ZXh0QmxvY2sgPSBuZXcgVGV4dEJsb2NrKFwiZ3VpLnBhbmVsaHAubmFtZVwiLCBjaGFyYWN0ZXIubmFtZSk7XG4gICAgICAgIHRleHRCbG9jay5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIHRleHRCbG9jay5oZWlnaHQgPSBcIjIwcHhcIjtcbiAgICAgICAgdGV4dEJsb2NrLmZvbnRGYW1pbHkgPSBcIlJ1c2xhbkRpc3BsYXlcIjtcblxuICAgICAgICB0ZXh0QmxvY2sudGV4dFZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuXG4gICAgICAgIGxldCBocFNsaWRlciA9IG5ldyBTbGlkZXIoKTtcbiAgICAgICAgaHBTbGlkZXIubWluaW11bSA9IDA7XG4gICAgICAgIGhwU2xpZGVyLm1heGltdW0gPSBjaGFyYWN0ZXIuc3RhdGlzdGljcy5ocE1heDtcbiAgICAgICAgaHBTbGlkZXIudmFsdWUgPSBjaGFyYWN0ZXIuc3RhdGlzdGljcy5ocDtcbiAgICAgICAgaHBTbGlkZXIud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgaHBTbGlkZXIuaGVpZ2h0ID0gXCIxMHB4XCI7XG4gICAgICAgIGhwU2xpZGVyLnRodW1iV2lkdGggPSAwO1xuICAgICAgICBocFNsaWRlci5iYXJPZmZzZXQgPSAwO1xuICAgICAgICBocFNsaWRlci5iYWNrZ3JvdW5kID0gJ2JsYWNrJztcbiAgICAgICAgaHBTbGlkZXIuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBocFNsaWRlci5ib3JkZXJDb2xvciA9ICdibGFjayc7XG4gICAgICAgIHRoaXMuaHBCYXIgPSBocFNsaWRlcjtcblxuICAgICAgICBjaGFyYWN0ZXJQYW5lbC5hZGRDb250cm9sKHRleHRCbG9jayk7XG4gICAgICAgIGNoYXJhY3RlclBhbmVsLmFkZENvbnRyb2woaHBTbGlkZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93R2F0ZXdheShlbnRyYW5jZU5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5ndWlQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlLnJlbW92ZUNvbnRyb2wodGhpcy5ndWlQYW5lbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoYXJhY3RlclBhbmVsID0gbmV3IFN0YWNrUGFuZWwoKTtcbiAgICAgICAgY2hhcmFjdGVyUGFuZWwud2lkdGggPSBcIjI1JVwiO1xuICAgICAgICBjaGFyYWN0ZXJQYW5lbC50b3AgPSAxMDtcbiAgICAgICAgY2hhcmFjdGVyUGFuZWwudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgIHRoaXMuZ3VpUGFuZWwgPSBjaGFyYWN0ZXJQYW5lbDtcbiAgICAgICAgdGhpcy50ZXh0dXJlLmFkZENvbnRyb2woY2hhcmFjdGVyUGFuZWwpO1xuXG4gICAgICAgIGxldCB0ZXh0QmxvY2sgPSBuZXcgVGV4dEJsb2NrKFwiZ3VpLnBhbmVsaHAubmFtZVwiLCBlbnRyYW5jZU5hbWUpO1xuICAgICAgICB0ZXh0QmxvY2suY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB0ZXh0QmxvY2suaGVpZ2h0ID0gXCIyMHB4XCI7XG4gICAgICAgIHRleHRCbG9jay5mb250RmFtaWx5ID0gXCJSdXNsYW5EaXNwbGF5XCI7XG4gICAgICAgIHRleHRCbG9jay50ZXh0VmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG5cbiAgICAgICAgY2hhcmFjdGVyUGFuZWwuYWRkQ29udHJvbCh0ZXh0QmxvY2spO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWZyZXNoUGFuZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5ocEJhci52YWx1ZSA9IHRoaXMuY2hhcmFjdGVyLnN0YXRpc3RpY3MuaHA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZUhwQmFyKCkge1xuICAgICAgICBpZiAodGhpcy5ndWlQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlLnJlbW92ZUNvbnRyb2wodGhpcy5ndWlQYW5lbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0FkdmFuY2VkRHluYW1pY1RleHR1cmUsIFRleHRCbG9jaywgUmVjdGFuZ2xlLCBDb250cm9sfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGNsYXNzIFRvb2x0aXBCdXR0b24ge1xuXG4gICAgcHVibGljIGNvbnRhaW5lcjogUmVjdGFuZ2xlO1xuXG4gICAgY29uc3RydWN0b3IoYmFzZUNvbnRyb2w6IEFkdmFuY2VkRHluYW1pY1RleHR1cmUsIHRleHQ6IHN0cmluZywgcGFyZW50UG9zaXRpb246IEJBQllMT04uVmVjdG9yMikge1xuICAgICAgICBsZXQgcGFuZWwgPSBuZXcgUmVjdGFuZ2xlKCd0b29sdGlwJyk7XG4gICAgICAgIHBhbmVsLnRvcCA9IHBhcmVudFBvc2l0aW9uLnk7XG4gICAgICAgIHBhbmVsLmxlZnQgPSBwYXJlbnRQb3NpdGlvbi54O1xuICAgICAgICBwYW5lbC53aWR0aCA9IDA7XG4gICAgICAgIHBhbmVsLmhlaWdodCA9IDA7XG4gICAgICAgIHBhbmVsLmNvcm5lclJhZGl1cyA9IDIwO1xuICAgICAgICBwYW5lbC50aGlja25lc3MgPSAxO1xuICAgICAgICBwYW5lbC5iYWNrZ3JvdW5kID0gXCJibGFja1wiO1xuICAgICAgICBwYW5lbC5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgcGFuZWwuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfTEVGVDtcbiAgICAgICAgcGFuZWwudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgIHBhbmVsLmFkYXB0SGVpZ2h0VG9DaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIHBhbmVsLmFkYXB0V2lkdGhUb0NoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgcGFuZWwucGFkZGluZ1JpZ2h0ID0gJy04MHB4JztcbiAgICAgICAgcGFuZWwucGFkZGluZ0JvdHRvbSA9ICctNDBweCc7XG4gICAgICAgIHBhbmVsLmFscGhhID0gMC44O1xuICAgICAgICBwYW5lbC5pc0hpdFRlc3RWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGJhc2VDb250cm9sLmFkZENvbnRyb2wocGFuZWwpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHBhbmVsO1xuXG4gICAgICAgIGxldCBsYWJlbCA9IG5ldyBUZXh0QmxvY2soKTtcbiAgICAgICAgbGFiZWwucmVzaXplVG9GaXQgPSB0cnVlO1xuICAgICAgICBsYWJlbC50ZXh0ID0gdGV4dDtcbiAgICAgICAgbGFiZWwuZm9udEZhbWlseSA9IFwiUnVzbGFuRGlzcGxheVwiO1xuICAgICAgICBwYW5lbC5hZGRDb250cm9sKGxhYmVsKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1Rvb2x0aXBCdXR0b259IGZyb20gXCIuL1Rvb2x0aXBCdXR0b25cIjtcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uLy4uL1BsYXllci9JdGVtcy9JdGVtXCI7XG5pbXBvcnQge0FkdmFuY2VkRHluYW1pY1RleHR1cmUsIENvbnRyb2x9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgVG9vbHRpcEhlbHBlciB7XG5cbiAgICBzdGF0aWMgY3JlYXRlVG9vbHRpcE9uSW52ZW50b3J5SXRlbUJ1dHRvbih0ZXh0dXJlOiBBZHZhbmNlZER5bmFtaWNUZXh0dXJlLCBpdGVtOiBJdGVtLCBidXR0b246IENvbnRyb2wsIHBpY2tDYWxsYmFjaykge1xuICAgICAgICBsZXQgdG9vbHRpcEJ1dHRvbiA9IG51bGw7XG4gICAgICAgIGJ1dHRvbi5vblBvaW50ZXJFbnRlck9ic2VydmFibGUuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgaWYgKGl0ZW0uc3RhdGlzdGljcy5kYW1hZ2VNaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBcIlxcbkRhbWFnZTogXCIgKyBpdGVtLnN0YXRpc3RpY3MuZGFtYWdlTWluICsgXCIgLSBcIiArIGl0ZW0uc3RhdGlzdGljcy5kYW1hZ2VNYXggKyBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uc3RhdGlzdGljcy5hcm1vciA+IDApIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IFwiXFxuQXJtb3I6IFwiICsgaXRlbS5zdGF0aXN0aWNzLmFybW9yICsgXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9vbHRpcEJ1dHRvbiA9IG5ldyBUb29sdGlwQnV0dG9uKHRleHR1cmUsIHRleHQsIG5ldyBCQUJZTE9OLlZlY3RvcjIoYnV0dG9uLmNlbnRlclgsIGJ1dHRvbi5jZW50ZXJZKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJ1dHRvbi5vblBvaW50ZXJPdXRPYnNlcnZhYmxlLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0b29sdGlwQnV0dG9uLmNvbnRhaW5lci5kaXNwb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJ1dHRvbi5vblBvaW50ZXJVcE9ic2VydmFibGUuYWRkKHBpY2tDYWxsYmFjayk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtBZHZhbmNlZER5bmFtaWNUZXh0dXJlLCBSZWN0YW5nbGUsIFRleHRCbG9ja30gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBUb29sdGlwTWVzaCB7XG5cbiAgICBwdWJsaWMgY29udGFpbmVyOiBBZHZhbmNlZER5bmFtaWNUZXh0dXJlO1xuXG4gICAgY29uc3RydWN0b3IobWVzaDogQkFCWUxPTi5BYnN0cmFjdE1lc2gsIHRleHQ6IHN0cmluZywgbGlua09mZnNldFk6IG51bWJlciA9IC04MCkge1xuICAgICAgICBsZXQgYWR2YW5jZWRUZXh0dXJlID0gQWR2YW5jZWREeW5hbWljVGV4dHVyZS5DcmVhdGVGdWxsc2NyZWVuVUkoXCJVSVwiKTtcbiAgICAgICAgYWR2YW5jZWRUZXh0dXJlLmxheWVyLmxheWVyTWFzayA9IDI7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gYWR2YW5jZWRUZXh0dXJlO1xuXG4gICAgICAgIGxldCBwYW5lbCA9IG5ldyBSZWN0YW5nbGUoJ3Rvb2x0aXAnKTtcbiAgICAgICAgcGFuZWwuY29ybmVyUmFkaXVzID0gMjA7XG4gICAgICAgIHBhbmVsLnRoaWNrbmVzcyA9IDE7XG4gICAgICAgIHBhbmVsLmJhY2tncm91bmQgPSBcImJsYWNrXCI7XG4gICAgICAgIHBhbmVsLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBwYW5lbC5hZGFwdEhlaWdodFRvQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICBwYW5lbC5hZGFwdFdpZHRoVG9DaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIHBhbmVsLnBhZGRpbmdSaWdodCA9ICctNDBweCc7XG4gICAgICAgIHBhbmVsLnBhZGRpbmdCb3R0b20gPSAnLTIwcHgnO1xuICAgICAgICBwYW5lbC5hbHBoYSA9IDAuODtcbiAgICAgICAgYWR2YW5jZWRUZXh0dXJlLmFkZENvbnRyb2wocGFuZWwpO1xuXG4gICAgICAgIGxldCBsYWJlbCA9IG5ldyBUZXh0QmxvY2soKTtcbiAgICAgICAgbGFiZWwucmVzaXplVG9GaXQgPSB0cnVlO1xuICAgICAgICBsYWJlbC50ZXh0ID0gdGV4dDtcbiAgICAgICAgbGFiZWwuZm9udEZhbWlseSA9IFwiUnVzbGFuRGlzcGxheVwiO1xuICAgICAgICBwYW5lbC5hZGRDb250cm9sKGxhYmVsKTtcblxuICAgICAgICBwYW5lbC5saW5rV2l0aE1lc2gobWVzaCk7XG4gICAgICAgIHBhbmVsLmxpbmtPZmZzZXRZID0gbGlua09mZnNldFk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1BvcHVwfSBmcm9tIFwiLi9Qb3B1cFwiO1xuaW1wb3J0IHtNYWlufSBmcm9tIFwiLi4vTWFpblwiO1xuaW1wb3J0IHtTdGFja1BhbmVsLCBDb250cm9sLCBUZXh0QmxvY2ssIEJ1dHRvbn0gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVzIGV4dGVuZHMgUG9wdXAge1xuXG4gICAgY29uc3RydWN0b3IoZ3VpTWFpbjogTWFpbikge1xuICAgICAgICBzdXBlcihndWlNYWluKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0F0dHJpYnV0ZXMnO1xuICAgICAgICB0aGlzLmltYWdlVXJsID0gXCJhc3NldHMvZ3VpL2NvbnRlbnQucG5nXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpIHtcbiAgICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmluaXRUZXh0dXJlKCk7XG5cbiAgICAgICAgdGhpcy5ndWlUZXh0dXJlLmFkZENvbnRyb2wodGhpcy5jb250YWluZXIpO1xuICAgICAgICB0aGlzLnNob3dUZXh0KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ3VpVGV4dHVyZS5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2UgPSBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzaG93VGV4dCgpIHtcbiAgICAgICAgbGV0IHBhbmVsID0gbmV3IFN0YWNrUGFuZWwoJ2F0dHJpYnV0ZXMucGFuZWwnKTtcbiAgICAgICAgcGFuZWwuaXNQb2ludGVyQmxvY2tlciA9IHRydWU7XG4gICAgICAgIHBhbmVsLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICBwYW5lbC5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9DRU5URVI7XG4gICAgICAgIHBhbmVsLndpZHRoID0gMTtcbiAgICAgICAgcGFuZWwuaGVpZ2h0ID0gMC45O1xuICAgICAgICBwYW5lbC50b3AgPSAnMTAlJztcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDb250cm9sKHBhbmVsKTtcblxuICAgICAgICBsZXQgdGV4dFBsYXllck5hbWUgPSB0aGlzLmNyZWF0ZVRleHQodGhpcy5ndWlNYWluLmdhbWUucGxheWVyLm5hbWUpO1xuICAgICAgICB0ZXh0UGxheWVyTmFtZS5jb2xvciA9ICdicm93bic7XG4gICAgICAgIHRleHRQbGF5ZXJOYW1lLmZvbnRTaXplID0gNDA7XG4gICAgICAgIHRleHRQbGF5ZXJOYW1lLnRvcCA9IDEwO1xuICAgICAgICBwYW5lbC5hZGRDb250cm9sKHRleHRQbGF5ZXJOYW1lKTtcblxuICAgICAgICBsZXQgdGV4dFBsYXllckxWTCA9IHRoaXMuY3JlYXRlVGV4dCh0aGlzLmd1aU1haW4uZ2FtZS5wbGF5ZXIubHZsICsgJyBMVkwnKTtcbiAgICAgICAgdGV4dFBsYXllckxWTC5jb2xvciA9ICdicm93bic7XG4gICAgICAgIHRleHRQbGF5ZXJMVkwuZm9udFNpemUgPSAzMjtcbiAgICAgICAgdGV4dFBsYXllckxWTC50b3AgPSAxMDA7XG4gICAgICAgIHRleHRQbGF5ZXJMVkwucGFkZGluZ0JvdHRvbSA9IDQwO1xuICAgICAgICBwYW5lbC5hZGRDb250cm9sKHRleHRQbGF5ZXJMVkwpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQXR0cmlidXRlKDEsICdTdHJlbmd0aDonICsgdGhpcy5ndWlNYWluLmdhbWUucGxheWVyLmF0dHJpYnV0ZXMuc3RyZW5ndGgsIHBhbmVsKTtcbiAgICAgICAgdGhpcy5jcmVhdGVBdHRyaWJ1dGUoMiwgJ0R1cmFiaWxpdHk6JyArIHRoaXMuZ3VpTWFpbi5nYW1lLnBsYXllci5hdHRyaWJ1dGVzLmR1cmFiaWxpdHksIHBhbmVsKTtcbiAgICAgICAgdGhpcy5jcmVhdGVBdHRyaWJ1dGUoMywgJ1ZpdGFsaXR5OicgKyB0aGlzLmd1aU1haW4uZ2FtZS5wbGF5ZXIuYXR0cmlidXRlcy52aXRhbGl0eSwgcGFuZWwpO1xuICAgICAgICB0aGlzLmNyZWF0ZUF0dHJpYnV0ZSg0LCAnU3RhbWluYTonICsgdGhpcy5ndWlNYWluLmdhbWUucGxheWVyLmF0dHJpYnV0ZXMuc3RhbWluYSwgcGFuZWwpO1xuXG4gICAgICAgIGlmICh0aGlzLmd1aU1haW4uZ2FtZS5wbGF5ZXIuZnJlZUF0dHJpYnV0ZXNQb2ludHMpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0QXR0cmlidXRlcyA9IHRoaXMuY3JlYXRlVGV4dCgnWW91IGhhdmUgJyArIHRoaXMuZ3VpTWFpbi5nYW1lLnBsYXllci5mcmVlQXR0cmlidXRlc1BvaW50cyArICcgZnJlZSBhdHRyaWJ1dGUgcG9pbnRzLicpO1xuICAgICAgICAgICAgdGV4dEF0dHJpYnV0ZXMuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIHRleHRBdHRyaWJ1dGVzLmZvbnRTaXplID0gMTY7XG5cbiAgICAgICAgICAgIHBhbmVsLmFkZENvbnRyb2wodGV4dEF0dHJpYnV0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRleHRTdGF0aXN0aWNzID0gdGhpcy5jcmVhdGVUZXh0KCdTdGF0aXN0aWNzJyk7XG4gICAgICAgIHRleHRTdGF0aXN0aWNzLmNvbG9yID0gJ2Jyb3duJztcbiAgICAgICAgdGV4dFN0YXRpc3RpY3MuaGVpZ2h0ID0gJzglJztcbiAgICAgICAgdGV4dFN0YXRpc3RpY3MuZm9udFNpemUgPSAzMjtcbiAgICAgICAgdGV4dFN0YXRpc3RpY3MucGFkZGluZ1RvcCA9IDQwO1xuICAgICAgICBwYW5lbC5hZGRDb250cm9sKHRleHRTdGF0aXN0aWNzKTtcblxuICAgICAgICBsZXQgZGFtYWdlID0gdGhpcy5jcmVhdGVUZXh0KCdEYW1hZ2U6ICcgKyB0aGlzLmd1aU1haW4uZ2FtZS5wbGF5ZXIuc3RhdGlzdGljc0FsbC5kYW1hZ2VNaW4gKyAnIC0gJyArIHRoaXMuZ3VpTWFpbi5nYW1lLnBsYXllci5zdGF0aXN0aWNzQWxsLmRhbWFnZU1heCk7XG4gICAgICAgIHBhbmVsLmFkZENvbnRyb2woZGFtYWdlKTtcblxuICAgICAgICBsZXQgYXJtb3IgPSB0aGlzLmNyZWF0ZVRleHQoJ0FybW9yOiAnICsgdGhpcy5ndWlNYWluLmdhbWUucGxheWVyLnN0YXRpc3RpY3NBbGwuYXJtb3IpO1xuICAgICAgICBwYW5lbC5hZGRDb250cm9sKGFybW9yKTtcblxuICAgICAgICBsZXQgYXR0YWNrU3BlZWQgPSB0aGlzLmNyZWF0ZVRleHQoJ0F0dGFjayBjaGFuY2U6ICcgKyB0aGlzLmd1aU1haW4uZ2FtZS5wbGF5ZXIuc3RhdGlzdGljcy5oaXRDaGFuY2UpO1xuICAgICAgICBwYW5lbC5hZGRDb250cm9sKGF0dGFja1NwZWVkKTtcblxuICAgICAgICBsZXQgYmxvY2tDaGFuY2UgPSB0aGlzLmNyZWF0ZVRleHQoJ0Jsb2NrIGNoYW5jZTogJyArIHRoaXMuZ3VpTWFpbi5nYW1lLnBsYXllci5zdGF0aXN0aWNzLmJsb2NrQ2hhbmNlKTtcbiAgICAgICAgcGFuZWwuYWRkQ29udHJvbChibG9ja0NoYW5jZSk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHRleHRCbG9jayA9IG5ldyBUZXh0QmxvY2soKTtcbiAgICAgICAgdGV4dEJsb2NrLnRleHQgPSB0ZXh0O1xuICAgICAgICB0ZXh0QmxvY2suY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIHRleHRCbG9jay53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICB0ZXh0QmxvY2suaGVpZ2h0ID0gXCI1JVwiO1xuICAgICAgICB0ZXh0QmxvY2suZm9udEZhbWlseSA9IFwiUnVzbGFuRGlzcGxheVwiO1xuICAgICAgICB0ZXh0QmxvY2suZm9udFNpemUgPSAyMDtcbiAgICAgICAgdGV4dEJsb2NrLnJlc2l6ZVRvRml0ID0gdHJ1ZTtcbiAgICAgICAgdGV4dEJsb2NrLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcblxuICAgICAgICByZXR1cm4gdGV4dEJsb2NrO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVBdHRyaWJ1dGUodHlwZTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGNvbnRyb2w6IFN0YWNrUGFuZWwpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5ndWlNYWluLmdhbWUucGxheWVyLmZyZWVBdHRyaWJ1dGVzUG9pbnRzKSB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gQnV0dG9uLkNyZWF0ZUltYWdlQnV0dG9uKFwicGx1c1wiLCB0ZXh0LCBcImFzc2V0cy9ndWkvcGx1cy5wbmdcIik7XG4gICAgICAgICAgICBidXR0b24uaGVpZ2h0ID0gXCI0MHB4XCI7XG4gICAgICAgICAgICBidXR0b24udGhpY2tuZXNzID0gMDtcbiAgICAgICAgICAgIGJ1dHRvbi53aWR0aCA9IDAuNDtcbiAgICAgICAgICAgIGJ1dHRvbi5jb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICBidXR0b24uZm9udEZhbWlseSA9IFwiUnVzbGFuRGlzcGxheVwiO1xuICAgICAgICAgICAgYnV0dG9uLmZvbnRTaXplID0gMTY7XG4gICAgICAgICAgICBjb250cm9sLmFkZENvbnRyb2woYnV0dG9uKTtcblxuICAgICAgICAgICAgYnV0dG9uLm9uUG9pbnRlclVwT2JzZXJ2YWJsZS5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZ3VpTWFpbi5nYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnYWRkQXR0cmlidXRlJywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRleHRCbG9jayA9IHRoaXMuY3JlYXRlVGV4dCh0ZXh0KTtcbiAgICAgICAgICAgIGNvbnRyb2wuYWRkQ29udHJvbCh0ZXh0QmxvY2spO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtQb3B1cH0gZnJvbSBcIi4vUG9wdXBcIjtcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uLy4uL1BsYXllci9JdGVtcy9JdGVtXCI7XG5pbXBvcnQge01haW59IGZyb20gXCIuLi9NYWluXCI7XG5pbXBvcnQge0VxdWlwQmxvY2t9IGZyb20gXCIuL2ludmVudG9yeS9FcXVpcEJsb2NrXCI7XG5pbXBvcnQge1dlYXBvbn0gZnJvbSBcIi4vaW52ZW50b3J5L1dlYXBvblwiO1xuaW1wb3J0IHtTaGllbGR9IGZyb20gXCIuL2ludmVudG9yeS9TaGllbGRcIjtcbmltcG9ydCB7R2xvdmVzfSBmcm9tIFwiLi9pbnZlbnRvcnkvR2xvdmVzXCI7XG5pbXBvcnQge0Jvb3RzfSBmcm9tIFwiLi9pbnZlbnRvcnkvQm9vdHNcIjtcbmltcG9ydCB7QXJtb3J9IGZyb20gXCIuL2ludmVudG9yeS9Bcm1vclwiO1xuaW1wb3J0IHtIZWxtfSBmcm9tIFwiLi9pbnZlbnRvcnkvSGVsbVwiO1xuaW1wb3J0IHtUb29sdGlwSGVscGVyfSBmcm9tIFwiLi4vVG9vbHRpcHMvVG9vbHRpcEhlbHBlclwiO1xuaW1wb3J0IHtSZWN0YW5nbGUsIEFkdmFuY2VkRHluYW1pY1RleHR1cmUsIENvbnRyb2wsIEltYWdlLCBUZXh0QmxvY2ssIEJ1dHRvbiwgR3JpZCwgRGlzcGxheUdyaWR9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuaW1wb3J0IHtJbnZlbnRvcnlFbnZpcm9ubWVudH0gZnJvbSBcIi4uLy4uL0Vudmlyb25tZW50L0ludmVudG9yeS9JbnZlbnRvcnlFbnZpcm9ubWVudFwiO1xuXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5IGV4dGVuZHMgUG9wdXAge1xuXG4gICAgcHJvdGVjdGVkIHdlYXBvbkltYWdlOiBFcXVpcEJsb2NrO1xuICAgIHByb3RlY3RlZCBzaGllbGRJbWFnZTogRXF1aXBCbG9jaztcbiAgICBwcm90ZWN0ZWQgYXJtb3JJbWFnZTogRXF1aXBCbG9jaztcbiAgICBwcm90ZWN0ZWQgZ2xvdmVzSW1hZ2U6IEVxdWlwQmxvY2s7XG4gICAgcHJvdGVjdGVkIGJvb3RzSW1hZ2U6IEVxdWlwQmxvY2s7XG4gICAgcHJvdGVjdGVkIGhlbG1JbWFnZTogRXF1aXBCbG9jaztcblxuICAgIHByb3RlY3RlZCBwYW5lbEl0ZW1zOiBSZWN0YW5nbGU7XG4gICAgcHJpdmF0ZSBpdGVtczogQXJyYXk8QkFCWUxPTi5BYnN0cmFjdE1lc2g+ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihndWlNYWluOiBNYWluKSB7XG4gICAgICAgIHN1cGVyKGd1aU1haW4pO1xuICAgICAgICB0aGlzLm5hbWUgPSAnSW52ZW50b3J5JztcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IFwiYXNzZXRzL2d1aS9pbnZlbnRvcnkucG5nXCI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRUZXh0dXJlKCkge1xuICAgICAgICB0aGlzLmd1aVRleHR1cmUgPSBBZHZhbmNlZER5bmFtaWNUZXh0dXJlLkNyZWF0ZUZ1bGxzY3JlZW5VSSgnZ3VpLicgKyB0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLmd1aVRleHR1cmUubGF5ZXIubGF5ZXJNYXNrID0gMTtcblxuICAgICAgICBsZXQgY29udGFpbmVyID0gbmV3IFJlY3RhbmdsZSgnZ3VpLnBhbmVsLicgKyB0aGlzLm5hbWUpO1xuICAgICAgICBjb250YWluZXIudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9CT1RUT007XG4gICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9SSUdIVDtcbiAgICAgICAgY29udGFpbmVyLnRoaWNrbmVzcyA9IDA7XG4gICAgICAgIGNvbnRhaW5lci5pc1BvaW50ZXJCbG9ja2VyID0gdHJ1ZTtcblxuICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoJ2d1aS5wb3B1cC5pbWFnZS4nLCB0aGlzLmltYWdlVXJsKTtcbiAgICAgICAgaW1hZ2UuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfUklHSFQ7XG4gICAgICAgIGltYWdlLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfQk9UVE9NO1xuICAgICAgICBjb250YWluZXIuYWRkQ29udHJvbChpbWFnZSk7XG5cbiAgICAgICAgbGV0IHdpZHRoQ29udGFpbmVyID0gJzYwN3B4JztcbiAgICAgICAgbGV0IGhlaWdodENvbnRhaW5lciA9ICc5NjBweCc7XG4gICAgICAgIGxldCBjaGVja2xTaXplTGlzdGVuZXIgPSBmdW5jdGlvbiAod2lkdGgpIHtcbiAgICAgICAgICAgIGlmICh3aWR0aCA+IDE4MTkpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIud2lkdGggPSBwYXJzZUludCh3aWR0aENvbnRhaW5lcikrJ3B4JztcbiAgICAgICAgICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0Q29udGFpbmVyKSsncHgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIud2lkdGggPSBwYXJzZUludCh3aWR0aENvbnRhaW5lcikvMisncHgnO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSBwYXJzZUludChoZWlnaHRDb250YWluZXIpLzIrJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY2hlY2tsU2l6ZUxpc3RlbmVyKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICBjaGVja2xTaXplTGlzdGVuZXIod2lkdGgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5ndWlUZXh0dXJlLmFkZENvbnRyb2woY29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmd1aU1haW4uZ2FtZTtcblxuICAgICAgICB0aGlzLmluaXRUZXh0dXJlKCk7XG4gICAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1JlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93SXRlbXMoKTtcbiAgICAgICAgdGhpcy5zaG93RXF1aXBlZEl0ZW1zKCk7XG4gICAgICAgIHRoaXMuc2hvd1NwZWNpYWxJdGVtc0FuZEdvbGQoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0b25DbG9zZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93U3BlY2lhbEl0ZW1zQW5kR29sZCgpIHtcbiAgICAgICAgbGV0IGltYWdlID0gQnV0dG9uLkNyZWF0ZUltYWdlQnV0dG9uKFwiZ3VpLnBvcHVwLmltYWdlLmdvbGRcIiwgJycrdGhpcy5ndWlNYWluLmdhbWUucGxheWVyLmdvbGQrJycsIFwiYXNzZXRzL2d1aS9nb2xkLnBuZ1wiKTtcbiAgICAgICAgaW1hZ2UudGhpY2tuZXNzID0gMDtcbiAgICAgICAgaW1hZ2UuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICBpbWFnZS52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX0JPVFRPTTtcbiAgICAgICAgaW1hZ2UuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfUklHSFQ7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENvbnRyb2woaW1hZ2UpO1xuXG4gICAgICAgIGxldCBpbWFnZTIgPSBCdXR0b24uQ3JlYXRlSW1hZ2VCdXR0b24oXCJndWkucG9wdXAuaW1hZ2Uua2V5XCIsICcnK3RoaXMuZ3VpTWFpbi5nYW1lLnBsYXllci5rZXlzKycnLCBcImFzc2V0cy9ndWkva2V5LnBuZ1wiKTtcbiAgICAgICAgaW1hZ2UyLnRoaWNrbmVzcyA9IDA7XG4gICAgICAgIGltYWdlMi5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIGltYWdlMi52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX0JPVFRPTTtcbiAgICAgICAgaW1hZ2UyLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX1JJR0hUO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDb250cm9sKGltYWdlMik7XG5cbiAgICAgICAgbGV0IGltYWdlMyA9IEJ1dHRvbi5DcmVhdGVJbWFnZUJ1dHRvbihcImd1aS5wb3B1cC5pbWFnZS53aW5lXCIsICcwJywgXCJhc3NldHMvc2tpbGxzL2hlYWwucG5nXCIpO1xuICAgICAgICBpbWFnZTMudGhpY2tuZXNzID0gMDtcbiAgICAgICAgaW1hZ2UzLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgaW1hZ2UzLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfQk9UVE9NO1xuICAgICAgICBpbWFnZTMuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfUklHSFQ7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENvbnRyb2woaW1hZ2UzKTtcblxuICAgICAgICBpbWFnZS5oZWlnaHQgPSAnMzZweCc7XG4gICAgICAgIGltYWdlLndpZHRoID0gJzE1MHB4JztcbiAgICAgICAgaW1hZ2UubGVmdCA9IFwiLTE1MHB4XCI7XG4gICAgICAgIGltYWdlLmZvbnRTaXplID0gMTg7XG5cbiAgICAgICAgaW1hZ2UyLmhlaWdodCA9ICczNnB4JztcbiAgICAgICAgaW1hZ2UyLndpZHRoID0gJzE1MHB4JztcbiAgICAgICAgaW1hZ2UyLmxlZnQgPSBcIjIwcHhcIjtcbiAgICAgICAgaW1hZ2UyLmZvbnRTaXplID0gMTg7XG5cbiAgICAgICAgaW1hZ2UzLmhlaWdodCA9ICczNnB4JztcbiAgICAgICAgaW1hZ2UzLndpZHRoID0gJzE1MHB4JztcbiAgICAgICAgaW1hZ2UzLmxlZnQgPSBcIi0zMDBweFwiO1xuICAgICAgICBpbWFnZTMuZm9udFNpemUgPSAxODtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ3VpVGV4dHVyZS5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2UgPSBudWxsO1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKG1lc2gpID0+IHtcbiAgICAgICAgICAgIG1lc2guZGlzcG9zZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ndWlNYWluLmdhbWUucGxheWVyLnJlZnJlc2hDYW1lcmFQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzaG93RXF1aXBlZEl0ZW1zKCkge1xuICAgICAgICB0aGlzLndlYXBvbkltYWdlID0gbmV3IFdlYXBvbih0aGlzKTtcbiAgICAgICAgdGhpcy5zaGllbGRJbWFnZSA9IG5ldyBTaGllbGQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2xvdmVzSW1hZ2UgPSBuZXcgR2xvdmVzKHRoaXMpO1xuICAgICAgICB0aGlzLmJvb3RzSW1hZ2UgPSBuZXcgQm9vdHModGhpcyk7XG4gICAgICAgIHRoaXMuYXJtb3JJbWFnZSA9IG5ldyBBcm1vcih0aGlzKTtcbiAgICAgICAgdGhpcy5oZWxtSW1hZ2UgPSBuZXcgSGVsbSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0l0ZW1zKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBpbnZlbnRvcnkgPSB0aGlzLmd1aU1haW4uZ2FtZS5wbGF5ZXIuaW52ZW50b3J5O1xuXG4gICAgICAgIGlmICh0aGlzLnBhbmVsSXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ3VpVGV4dHVyZS5yZW1vdmVDb250cm9sKHRoaXMucGFuZWxJdGVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZXFpdXBlZEl0ZW1zID0gaW52ZW50b3J5LmdldEVxdWlwZWRJdGVtcygpO1xuICAgICAgICBsZXQgZ3JpZCA9IG5ldyBHcmlkKCk7XG4gICAgICAgIGdyaWQud2lkdGggPSAnNTY4cHgnO1xuICAgICAgICBncmlkLmhlaWdodCA9JzI4OHB4JztcbiAgICAgICAgZ3JpZC50b3AgPSAnMjQ3cHgnO1xuICAgICAgICBncmlkLmFkZENvbHVtbkRlZmluaXRpb24oMSk7XG4gICAgICAgIGdyaWQuYWRkQ29sdW1uRGVmaW5pdGlvbigxKTtcbiAgICAgICAgZ3JpZC5hZGRDb2x1bW5EZWZpbml0aW9uKDEpO1xuICAgICAgICBncmlkLmFkZENvbHVtbkRlZmluaXRpb24oMSk7XG4gICAgICAgIGdyaWQuYWRkQ29sdW1uRGVmaW5pdGlvbigxKTtcbiAgICAgICAgZ3JpZC5hZGRDb2x1bW5EZWZpbml0aW9uKDEpO1xuICAgICAgICBncmlkLmFkZENvbHVtbkRlZmluaXRpb24oMSk7XG4gICAgICAgIGdyaWQuYWRkQ29sdW1uRGVmaW5pdGlvbigxKTtcblxuICAgICAgICBncmlkLmFkZFJvd0RlZmluaXRpb24oMSk7XG4gICAgICAgIGdyaWQuYWRkUm93RGVmaW5pdGlvbigxKTtcbiAgICAgICAgZ3JpZC5hZGRSb3dEZWZpbml0aW9uKDEpO1xuICAgICAgICBncmlkLmFkZFJvd0RlZmluaXRpb24oMSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ29udHJvbChncmlkKTtcblxuICAgICAgICBsZXQgaXRlbUNvdW50ID0gMDtcbiAgICAgICAgbGV0IHJvdyA9IC0xO1xuICAgICAgICBsZXQgY29sbHVtbiA9IC0xO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW52ZW50b3J5Lml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnJlYWtEaXNwbGF5SXRlbTtcbiAgICAgICAgICAgIGxldCBpdGVtID0gaW52ZW50b3J5Lml0ZW1zW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgZXF1aXBlZEl0ZW0gb2YgZXFpdXBlZEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVxdWlwZWRJdGVtID09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtEaXNwbGF5SXRlbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJyZWFrRGlzcGxheUl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW1Db3VudCAlIDggPT0gMCkge1xuICAgICAgICAgICAgICAgIHJvdysrO1xuICAgICAgICAgICAgICAgIGNvbGx1bW4gPSAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbUNvdW50Kys7XG4gICAgICAgICAgICBjb2xsdW1uKys7XG5cbiAgICAgICAgICAgIGxldCBpbWFnZSA9IEJ1dHRvbi5DcmVhdGVJbWFnZU9ubHlCdXR0b24oJ2d1aS5wb3B1cC5pbWFnZS4nICsgaXRlbS5uYW1lLCAnYXNzZXRzL01pbmlhdHVyZXMvJyArIGl0ZW0uaW1hZ2UgKyAnLnBuZycpO1xuICAgICAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gMTtcbiAgICAgICAgICAgIGltYWdlLndpZHRoID0gMTtcbiAgICAgICAgICAgIGltYWdlLnRoaWNrbmVzcyA9IDA7XG4gICAgICAgICAgICBpbWFnZS52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX0JPVFRPTTtcbiAgICAgICAgICAgIGltYWdlLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX1JJR0hUO1xuXG4gICAgICAgICAgICBncmlkLmFkZENvbnRyb2woaW1hZ2UsIHJvdywgY29sbHVtbik7XG5cbiAgICAgICAgICAgIFRvb2x0aXBIZWxwZXIuY3JlYXRlVG9vbHRpcE9uSW52ZW50b3J5SXRlbUJ1dHRvbihzZWxmLmd1aVRleHR1cmUsIGl0ZW0sIGltYWdlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmd1aU1haW4uZ2FtZS5wbGF5ZXIuaW52ZW50b3J5LmVtaXRFcXVpcChpdGVtKTtcbiAgICAgICAgICAgICAgICBzZWxmLm9uUG9pbnRlclVwSXRlbUltYWdlKGl0ZW0pO1xuICAgICAgICAgICAgICAgIHNlbGYuc2hvd0l0ZW1zKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5ndWlNYWluLmF0dHJpYnV0ZXMucmVmcmVzaFBvcHVwKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGVja1NpemVMaXN0ZW5lciA9IGZ1bmN0aW9uICh3aWR0aCkge1xuICAgICAgICAgICAgaWYgKHdpZHRoID4gMTgxOSkge1xuICAgICAgICAgICAgICAgIGdyaWQud2lkdGggPSAnNTY4cHgnO1xuICAgICAgICAgICAgICAgIGdyaWQuaGVpZ2h0ID0gJzI4OHB4JztcbiAgICAgICAgICAgICAgICBncmlkLnRvcCA9ICcyNDdweCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdyaWQud2lkdGggPSAnMjg0cHgnO1xuICAgICAgICAgICAgICAgIGdyaWQuaGVpZ2h0ID0gJzE0NHB4JztcbiAgICAgICAgICAgICAgICBncmlkLnRvcCA9ICcxMjNweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tTaXplTGlzdGVuZXIod2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGNoZWNrU2l6ZUxpc3RlbmVyKHdpZHRoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUG9pbnRlclVwSXRlbUltYWdlKGl0ZW06IEl0ZW0pIHtcbiAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy53ZWFwb25JbWFnZS5ibG9jaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aVRleHR1cmUucmVtb3ZlQ29udHJvbCh0aGlzLndlYXBvbkltYWdlLmJsb2NrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLndlYXBvbkltYWdlID0gbmV3IFdlYXBvbih0aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGllbGRJbWFnZS5ibG9jaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aVRleHR1cmUucmVtb3ZlQ29udHJvbCh0aGlzLnNoaWVsZEltYWdlLmJsb2NrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNoaWVsZEltYWdlID0gbmV3IFNoaWVsZCh0aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWxtSW1hZ2UuYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlUZXh0dXJlLnJlbW92ZUNvbnRyb2wodGhpcy5oZWxtSW1hZ2UuYmxvY2spO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuaGVsbUltYWdlID0gbmV3IEhlbG0odGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2xvdmVzSW1hZ2UuYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlUZXh0dXJlLnJlbW92ZUNvbnRyb2wodGhpcy5nbG92ZXNJbWFnZS5ibG9jayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5nbG92ZXNJbWFnZSA9IG5ldyBHbG92ZXModGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9vdHNJbWFnZS5ibG9jaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aVRleHR1cmUucmVtb3ZlQ29udHJvbCh0aGlzLmJvb3RzSW1hZ2UuYmxvY2spO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYm9vdHNJbWFnZSA9IG5ldyBCb290cyh0aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcm1vckltYWdlLmJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VpVGV4dHVyZS5yZW1vdmVDb250cm9sKHRoaXMuYXJtb3JJbWFnZS5ibG9jayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hcm1vckltYWdlID0gbmV3IEFybW9yKHRoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZUl0ZW1JbWFnZShpdGVtOiBJdGVtKSB7XG4gICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgnZ3VpLnBvcHVwLmltYWdlLicgKyBpdGVtLm5hbWUsICdhc3NldHMvTWluaWF0dXJlcy8nICsgaXRlbS5pbWFnZSArICcucG5nJyk7XG4gICAgICAgIGltYWdlLnN0cmV0Y2ggPSBJbWFnZS5TVFJFVENIX1VOSUZPUk07XG4gICAgICAgIGltYWdlLmlzUG9pbnRlckJsb2NrZXIgPSB0cnVlO1xuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCB7R2FtZU9wdGlvbnN9IGZyb20gXCIuLi8uLi9PcHRpb25zL09wdGlvbnNcIjtcbmltcG9ydCB7UG9wdXB9IGZyb20gXCIuL1BvcHVwXCI7XG5pbXBvcnQge01haW59IGZyb20gXCIuLi9NYWluXCI7XG5pbXBvcnQge1NlbGVjdGlvblBhbmVsLCBDb250cm9sLCBTdGFja1BhbmVsLCBDaGVja2JveEdyb3VwLCBTbGlkZXJHcm91cH0gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5cbmV4cG9ydCBjbGFzcyBPcHRpb25zIGV4dGVuZHMgUG9wdXAge1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGd1aU1haW46IE1haW4pIHtcbiAgICAgICAgICAgIHN1cGVyKGd1aU1haW4pO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gJ09wdGlvbnMnO1xuICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IFwiYXNzZXRzL2d1aS9jb250ZW50LnBuZ1wiO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfQ0VOVEVSO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIG9wZW4oKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmluaXRUZXh0dXJlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ3VpVGV4dHVyZS5hZGRDb250cm9sKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RleHQoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uQ2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBjbG9zZSgpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmd1aVRleHR1cmUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5idXR0b25DbG9zZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBwcm90ZWN0ZWQgc2hvd1RleHQoKSB7XG4gICAgICAgICAgICBsZXQgcGFuZWwgPSBuZXcgU3RhY2tQYW5lbCgnb3B0aW9ucy5wYW5lbCcpO1xuICAgICAgICAgICAgcGFuZWwuaXNQb2ludGVyQmxvY2tlciA9IHRydWU7XG4gICAgICAgICAgICBwYW5lbC52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgICAgIHBhbmVsLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcbiAgICAgICAgICAgIHBhbmVsLndpZHRoID0gMC44O1xuICAgICAgICAgICAgcGFuZWwuaGVpZ2h0ID0gMTtcbiAgICAgICAgICAgIHBhbmVsLnRvcCA9ICcxMCUnO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ29udHJvbChwYW5lbCk7XG4gICAgICAgICAgICBjb25zdCBnYW1lID0gdGhpcy5ndWlNYWluLmdhbWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd3NHcm91cCA9IG5ldyBDaGVja2JveEdyb3VwKFwiU2hhZG93c1wiKTtcbiAgICAgICAgICAgIHNoYWRvd3NHcm91cC5hZGRDaGVja2JveChcIlN0YXRpYyBzaGFkb3dzXCIsIChpc0NoZWNrZWQpID0+IHtcbiAgICAgICAgICAgICAgICBHYW1lT3B0aW9ucy5zYXZlSW5Mb2NhbFN0b3JhZ2UoJ3N0YXRpY1NoYWRvd3MnLCBpc0NoZWNrZWQsIGdhbWUpO1xuICAgICAgICAgICAgfSwgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm9wdGlvbnMuc3RhdGljU2hhZG93cyk7XG4gICAgICAgICAgICBzaGFkb3dzR3JvdXAuYWRkQ2hlY2tib3goXCJEeW5hbWljIFNoYWRvd3NcIiwgKGlzQ2hlY2tlZCkgPT4ge1xuICAgICAgICAgICAgICAgIEdhbWVPcHRpb25zLnNhdmVJbkxvY2FsU3RvcmFnZSgnZHluYW1pY1NoYWRvd3MnLCBpc0NoZWNrZWQsIGdhbWUpO1xuICAgICAgICAgICAgfSwgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm9wdGlvbnMuZHluYW1pY1NoYWRvd3MpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHBvc3RQcm9jY2Vzc0dyb3VwID0gbmV3IENoZWNrYm94R3JvdXAoXCJQb3N0IHByb2NjZXNzaW5nXCIpO1xuICAgICAgICAgICAgcG9zdFByb2NjZXNzR3JvdXAuYWRkQ2hlY2tib3goXCJFbmFibGVkXCIsIChpc0NoZWNrZWQpID0+IHtcbiAgICAgICAgICAgICAgICBHYW1lT3B0aW9ucy5zYXZlSW5Mb2NhbFN0b3JhZ2UoJ3Bvc3RQcm9jY2Vzc2luZycsIGlzQ2hlY2tlZCwgZ2FtZSk7XG4gICAgICAgICAgICB9LCBnYW1lLmdldFNjZW5lTWFuZ2VyKCkub3B0aW9ucy5wb3N0UHJvY2Nlc3NpbmcpO1xuXG4gICAgICAgICAgICBwb3N0UHJvY2Nlc3NHcm91cC5hZGRDaGVja2JveChcIkZYQUFcIiwgKGlzQ2hlY2tlZCkgPT4ge1xuICAgICAgICAgICAgICAgIEdhbWVPcHRpb25zLnNhdmVJbkxvY2FsU3RvcmFnZSgnZnhhYScsIGlzQ2hlY2tlZCwgZ2FtZSk7XG4gICAgICAgICAgICB9LCBnYW1lLmdldFNjZW5lTWFuZ2VyKCkub3B0aW9ucy5meGFhKTtcblxuICAgICAgICAgICAgcG9zdFByb2NjZXNzR3JvdXAuYWRkQ2hlY2tib3goXCJEZXB0aCBPZiBGaWVsZFwiLCAoaXNDaGVja2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgR2FtZU9wdGlvbnMuc2F2ZUluTG9jYWxTdG9yYWdlKCdkb2YnLCBpc0NoZWNrZWQsIGdhbWUpO1xuICAgICAgICAgICAgfSwgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm9wdGlvbnMuZG9mKTtcblxuICAgICAgICAgICAgLy8gbGV0IGRvZkdyb3VwID0gbmV3IFNsaWRlckdyb3VwKFwiRE9GXCIpO1xuICAgICAgICAgICAgLy8gZG9mR3JvdXAuYWRkU2xpZGVyKFwiZlN0b3BcIiwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgR2FtZU9wdGlvbnMuc2F2ZUluTG9jYWxTdG9yYWdlKCdmU3RvcCcsIHZhbHVlLCBnYW1lKTtcbiAgICAgICAgICAgIC8vIH0sIFwiXCIsIDAuMDEsIDEwLCBnYW1lLmdldFNjZW5lTWFuZ2VyKCkub3B0aW9ucy5mU3RvcCwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gZG9mR3JvdXAuYWRkU2xpZGVyKFwiZm9jdXNEaXN0YW5jZVwiLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBHYW1lT3B0aW9ucy5zYXZlSW5Mb2NhbFN0b3JhZ2UoJ2ZvY3VzRGlzdGFuY2UnLCB2YWx1ZSwgZ2FtZSk7XG4gICAgICAgICAgICAvLyB9LCBcIlwiLCAwLCA0NTAwMCwgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm9wdGlvbnMuZm9jdXNEaXN0YW5jZSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gZG9mR3JvdXAuYWRkU2xpZGVyKFwiZm9jYWxMZW5ndGhcIiwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgR2FtZU9wdGlvbnMuc2F2ZUluTG9jYWxTdG9yYWdlKCdmb2NhbExlbmd0aCcsIHZhbHVlLCBnYW1lKTtcbiAgICAgICAgICAgIC8vIH0sIFwiXCIsIDAuMDEsIDUwMC4wMCwgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLm9wdGlvbnMuZm9jYWxMZW5ndGgsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGRvZkdyb3VwLmFkZFNsaWRlcihcImxlbnNTaXplXCIsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIEdhbWVPcHRpb25zLnNhdmVJbkxvY2FsU3RvcmFnZSgnbGVuc1NpemUnLCB2YWx1ZSwgZ2FtZSk7XG4gICAgICAgICAgICAvLyB9LCBcIlwiLCAwLjAxLCA1MDAuMDAsIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5vcHRpb25zLmxlbnNTaXplLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgcG9zdFByb2NjZXNzR3JvdXAuYWRkQ2hlY2tib3goXCJCbG9vbVwiLCAoaXNDaGVja2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgR2FtZU9wdGlvbnMuc2F2ZUluTG9jYWxTdG9yYWdlKCdibG9vbScsIGlzQ2hlY2tlZCwgZ2FtZSk7XG4gICAgICAgICAgICB9LCBnYW1lLmdldFNjZW5lTWFuZ2VyKCkub3B0aW9ucy5ibG9vbSk7XG5cbiAgICAgICAgICAgIHBvc3RQcm9jY2Vzc0dyb3VwLmFkZENoZWNrYm94KFwiRm9nXCIsIChpc0NoZWNrZWQpID0+IHtcbiAgICAgICAgICAgICAgICBHYW1lT3B0aW9ucy5zYXZlSW5Mb2NhbFN0b3JhZ2UoJ2ZvZycsIGlzQ2hlY2tlZCwgZ2FtZSk7XG4gICAgICAgICAgICB9LCBnYW1lLmdldFNjZW5lTWFuZ2VyKCkub3B0aW9ucy5mb2cpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0Qm94ID0gbmV3IFNlbGVjdGlvblBhbmVsKFwic3BcIiwgW3NoYWRvd3NHcm91cCwgcG9zdFByb2NjZXNzR3JvdXBdKTtcbiAgICAgICAgICAgIHNlbGVjdEJveC53aWR0aCA9IDAuODtcbiAgICAgICAgICAgIHNlbGVjdEJveC5oZWlnaHQgPSAwLjg7XG4gICAgICAgICAgICBzZWxlY3RCb3gudGhpY2tuZXNzID0gMDtcbiAgICAgICAgICAgIHNlbGVjdEJveC5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIHNlbGVjdEJveC5oZWFkZXJDb2xvciA9IFwiYnJvd25cIjtcbiAgICAgICAgICAgIHNlbGVjdEJveC5mb250RmFtaWx5ID0gXCJSdXNsYW5EaXNwbGF5XCI7XG4gICAgICAgICAgICBwYW5lbC5hZGRDb250cm9sKHNlbGVjdEJveCk7XG4gICAgICAgIH1cblxuICAgIH1cbiIsImltcG9ydCB7TWFpbn0gZnJvbSBcIi4uL01haW5cIjtcbmltcG9ydCB7QWR2YW5jZWREeW5hbWljVGV4dHVyZSwgUmVjdGFuZ2xlLCBDb250cm9sLCBJbWFnZSwgQnV0dG9ufSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvcHVwIHtcblxuICAgIHB1YmxpYyBndWlNYWluOiBNYWluO1xuICAgIHB1YmxpYyBndWlUZXh0dXJlOiBBZHZhbmNlZER5bmFtaWNUZXh0dXJlO1xuICAgIHB1YmxpYyBjb250YWluZXI6IFJlY3RhbmdsZTtcbiAgICBwdWJsaWMgb3BlbmVkOiBib29sZWFuO1xuXG4gICAgcHJvdGVjdGVkIG5hbWU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgaW1hZ2VVcmw6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgY29udGFpbmVyQmFja2dyb3VuZDogSW1hZ2U7XG4gICAgcHJvdGVjdGVkIGJ1dHRvbkNsb3NlOiBDb250cm9sO1xuICAgIHByb3RlY3RlZCBpc1JlZnJlc2g6IEJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihndWlNYWluOiBNYWluKSB7XG4gICAgICAgIHRoaXMuZ3VpTWFpbiA9IGd1aU1haW47XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRUZXh0dXJlKCkge1xuICAgICAgICB0aGlzLmd1aVRleHR1cmUgPSBBZHZhbmNlZER5bmFtaWNUZXh0dXJlLkNyZWF0ZUZ1bGxzY3JlZW5VSSgnZ3VpLicgKyB0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLmd1aVRleHR1cmUubGF5ZXIubGF5ZXJNYXNrID0gMTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IG5ldyBSZWN0YW5nbGUoJ2d1aS5wYW5lbC4nICsgdGhpcy5uYW1lKTtcbiAgICAgICAgY29udGFpbmVyLmhvcml6b250YWxBbGlnbm1lbnQgPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb250YWluZXIudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgIGNvbnRhaW5lci50aGlja25lc3MgPSAwO1xuICAgICAgICBjb250YWluZXIuaXNQb2ludGVyQmxvY2tlciA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmd1aVRleHR1cmUuYWRkQ29udHJvbChjb250YWluZXIpO1xuXG4gICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgnZ3VpLnBvcHVwLmltYWdlLicsIHRoaXMuaW1hZ2VVcmwpO1xuICAgICAgICBpbWFnZS5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9SSUdIVDtcbiAgICAgICAgaW1hZ2UudmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9CT1RUT007XG4gICAgICAgIGltYWdlLndpZHRoID0gMTtcbiAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gMTtcbiAgICAgICAgaW1hZ2UuaXNQb2ludGVyQmxvY2tlciA9IHRydWU7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDb250cm9sKGltYWdlKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDb250cm9sKGltYWdlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJCYWNrZ3JvdW5kID0gaW1hZ2U7XG5cbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gJzY4NXB4JztcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9ICc4OCUnO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVCdXR0b25DbG9zZSgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgYnV0dG9uQ2xvc2UgPSBCdXR0b24uQ3JlYXRlSW1hZ2VPbmx5QnV0dG9uKFwiYnV0dG9uQ2xvc2VcIiwgXCJhc3NldHMvZ3VpL2J1dHRvbnMvY2xvc2UucG5nXCIpO1xuICAgICAgICBidXR0b25DbG9zZS53aWR0aCA9IFwiMzBweDtcIjtcbiAgICAgICAgYnV0dG9uQ2xvc2UuaGVpZ2h0ID0gXCIzMHB4XCI7XG4gICAgICAgIGJ1dHRvbkNsb3NlLnRoaWNrbmVzcyA9IDA7XG4gICAgICAgIGJ1dHRvbkNsb3NlLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICBidXR0b25DbG9zZS5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9SSUdIVDtcblxuICAgICAgICBidXR0b25DbG9zZS5vblBvaW50ZXJVcE9ic2VydmFibGUuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ29udHJvbChidXR0b25DbG9zZSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xvc2UgPSBidXR0b25DbG9zZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFuYWdlTWFpbkdVSShzaG93OiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmd1aU1haW4ucm9vbUluZm9ybWF0b24uZ3VpUGFuZWwuaXNWaXNpYmxlID0gc2hvdztcbiAgICAgICAgdGhpcy5ndWlNYWluLnBsYXllckJvdHRvbVBhbmVsLmNvbnRhaW5lci5pc1Zpc2libGUgPSBzaG93O1xuICAgICAgICB0aGlzLmd1aU1haW4ucGxheWVyTG9nc1F1ZXN0cy5ndWlQYW5lbC5pc1Zpc2libGUgPSBzaG93O1xuICAgICAgICBpZiAodGhpcy5ndWlNYWluLnBsYXllclF1ZXN0SW5mb3JtYXRpb24uZ3VpUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZ3VpTWFpbi5wbGF5ZXJRdWVzdEluZm9ybWF0aW9uLmd1aVBhbmVsLmlzVmlzaWJsZSA9IHNob3c7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ3VpTWFpbi5jaGFyYWN0ZXJUb3BIcC5ndWlQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5ndWlNYWluLmNoYXJhY3RlclRvcEhwLmd1aVBhbmVsLmlzVmlzaWJsZSA9IHNob3c7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyByZWZyZXNoUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuaXNSZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBvcGVuKCk7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xvc2UoKVxuXG59XG4iLCJpbXBvcnQge0VxdWlwQmxvY2t9IGZyb20gXCIuL0VxdWlwQmxvY2tcIjtcbmltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi4vSW52ZW50b3J5XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgQXJtb3IgZXh0ZW5kcyBFcXVpcEJsb2NrIHtcblxuICAgIGNvbnN0cnVjdG9yKGludmVudG9yeTogSW52ZW50b3J5KSB7XG4gICAgICAgIHN1cGVyKGludmVudG9yeSk7XG5cbiAgICAgICAgdGhpcy5ibG9ja1dpZHRoID0gXCIxNTNweFwiO1xuICAgICAgICB0aGlzLmJsb2NrSGVpZ2h0ID0gXCIyNTBweFwiO1xuICAgICAgICB0aGlzLmJsb2NrVG9wID0gXCIyNzBweFwiO1xuICAgICAgICB0aGlzLmJsb2NrTGVmdCA9IFwiMjI4cHhcIjtcblxuICAgICAgICB0aGlzLml0ZW0gPSBpbnZlbnRvcnkuZ3VpTWFpbi5nYW1lLnBsYXllci5pbnZlbnRvcnkuYXJtb3I7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVCbG9ja1dpdGhJbWFnZSgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtFcXVpcEJsb2NrfSBmcm9tIFwiLi9FcXVpcEJsb2NrXCI7XG5pbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4uL0ludmVudG9yeVwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGNsYXNzIEJvb3RzIGV4dGVuZHMgRXF1aXBCbG9jayB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnZlbnRvcnk6IEludmVudG9yeSkge1xuICAgICAgICBzdXBlcihpbnZlbnRvcnkpO1xuXG4gICAgICAgIHRoaXMuYmxvY2tXaWR0aCA9IFwiOTZweFwiO1xuICAgICAgICB0aGlzLmJsb2NrSGVpZ2h0ID0gXCI5MnB4XCI7XG4gICAgICAgIHRoaXMuYmxvY2tUb3AgPSBcIjQ0MnB4XCI7XG4gICAgICAgIHRoaXMuYmxvY2tMZWZ0ID0gXCI4MnB4XCI7XG5cbiAgICAgICAgdGhpcy5pdGVtID0gaW52ZW50b3J5Lmd1aU1haW4uZ2FtZS5wbGF5ZXIuaW52ZW50b3J5LmJvb3RzO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQmxvY2tXaXRoSW1hZ2UoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi4vSW52ZW50b3J5XCI7XG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi8uLi8uLi9QbGF5ZXIvSXRlbXMvSXRlbVwiO1xuaW1wb3J0IHtUb29sdGlwSGVscGVyfSBmcm9tIFwiLi4vLi4vVG9vbHRpcHMvVG9vbHRpcEhlbHBlclwiO1xuaW1wb3J0IHtDb250cm9sLCBSZWN0YW5nbGUsIEltYWdlfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVxdWlwQmxvY2sge1xuICAgIHByb3RlY3RlZCBpbnZlbnRvcnk6IEludmVudG9yeTtcblxuICAgIHByb3RlY3RlZCBpdGVtOiBJdGVtO1xuICAgIHByb3RlY3RlZCBibG9ja1dpZHRoOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGJsb2NrSGVpZ2h0OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGJsb2NrVG9wOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGJsb2NrTGVmdDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCB2ZXJ0aWNhbEFsaWdubWVudDogbnVtYmVyO1xuXG4gICAgcHVibGljIGJsb2NrOiBSZWN0YW5nbGU7XG4gICAgcHVibGljIGltYWdlOiBJbWFnZTtcblxuICAgIGNvbnN0cnVjdG9yKGludmVudG9yeTogSW52ZW50b3J5KSB7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gaW52ZW50b3J5O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVCbG9ja1dpdGhJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbSkge1xuICAgICAgICAgICAgbGV0IHBhbmVsSXRlbSA9IG5ldyBSZWN0YW5nbGUoKTtcbiAgICAgICAgICAgIHBhbmVsSXRlbS5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9MRUZUO1xuICAgICAgICAgICAgcGFuZWxJdGVtLnZlcnRpY2FsQWxpZ25tZW50ID0gdGhpcy52ZXJ0aWNhbEFsaWdubWVudDtcbiAgICAgICAgICAgIHBhbmVsSXRlbS50aGlja25lc3MgPSAwO1xuICAgICAgICAgICAgcGFuZWxJdGVtLndpZHRoID0gdGhpcy5ibG9ja1dpZHRoO1xuICAgICAgICAgICAgcGFuZWxJdGVtLmhlaWdodCA9IHRoaXMuYmxvY2tIZWlnaHQ7XG4gICAgICAgICAgICBwYW5lbEl0ZW0udG9wID0gdGhpcy5ibG9ja1RvcDtcbiAgICAgICAgICAgIHBhbmVsSXRlbS5sZWZ0ID0gdGhpcy5ibG9ja0xlZnQ7XG4gICAgICAgICAgICBwYW5lbEl0ZW0uaXNQb2ludGVyQmxvY2tlciA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuaW52ZW50b3J5LmNvbnRhaW5lci5hZGRDb250cm9sKHBhbmVsSXRlbSk7XG4gICAgICAgICAgICB0aGlzLmJsb2NrID0gcGFuZWxJdGVtO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbWFnZSgpO1xuXG4gICAgICAgICAgICBsZXQgYmxvY2tXaWR0aCA9IHRoaXMuYmxvY2tXaWR0aDtcbiAgICAgICAgICAgIGxldCBibG9ja0hlaWdodCA9IHRoaXMuYmxvY2tIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgYmxvY2tUb3AgPSB0aGlzLmJsb2NrVG9wO1xuICAgICAgICAgICAgbGV0IGJsb2NrTGVmdCA9IHRoaXMuYmxvY2tMZWZ0O1xuICAgICAgICAgICAgbGV0IGNoZWNrU2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24gKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpZHRoID4gMTgxOSkge1xuICAgICAgICAgICAgICAgICAgICBwYW5lbEl0ZW0ud2lkdGggPSBibG9ja1dpZHRoO1xuICAgICAgICAgICAgICAgICAgICBwYW5lbEl0ZW0uaGVpZ2h0ID0gYmxvY2tIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHBhbmVsSXRlbS50b3AgPSBibG9ja1RvcDtcbiAgICAgICAgICAgICAgICAgICAgcGFuZWxJdGVtLmxlZnQgPSBibG9ja0xlZnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFuZWxJdGVtLndpZHRoID0gcGFyc2VJbnQoYmxvY2tXaWR0aCkgLyAyICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgcGFuZWxJdGVtLmhlaWdodCA9IHBhcnNlSW50KGJsb2NrSGVpZ2h0KSAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBwYW5lbEl0ZW0udG9wID0gcGFyc2VJbnQoYmxvY2tUb3ApIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHBhbmVsSXRlbS5sZWZ0ID0gcGFyc2VJbnQoYmxvY2tMZWZ0KSAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjaGVja1NpemVMaXN0ZW5lcih3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgY2hlY2tTaXplTGlzdGVuZXIod2lkdGgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUltYWdlKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtO1xuXG4gICAgICAgIGlmIChpdGVtLnN0YXRpc3RpY3MpIHtcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IHRoaXMuaW52ZW50b3J5LmNyZWF0ZUl0ZW1JbWFnZShpdGVtKTtcbiAgICAgICAgICAgIFRvb2x0aXBIZWxwZXIuY3JlYXRlVG9vbHRpcE9uSW52ZW50b3J5SXRlbUJ1dHRvbihzZWxmLmludmVudG9yeS5ndWlUZXh0dXJlLCBpdGVtLCBpbWFnZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuaW52ZW50b3J5Lmd1aU1haW4uZ2FtZS5wbGF5ZXIuaW52ZW50b3J5LmVtaXRFcXVpcChzZWxmLml0ZW0pO1xuICAgICAgICAgICAgICAgIHNlbGYuaW52ZW50b3J5Lmd1aVRleHR1cmUucmVtb3ZlQ29udHJvbChzZWxmLmJsb2NrKTtcbiAgICAgICAgICAgICAgICBzZWxmLmludmVudG9yeS5zaG93SXRlbXMoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmludmVudG9yeS5ndWlNYWluLmF0dHJpYnV0ZXMucmVmcmVzaFBvcHVwKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5ibG9jay5hZGRDb250cm9sKGltYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtFcXVpcEJsb2NrfSBmcm9tIFwiLi9FcXVpcEJsb2NrXCI7XG5pbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4uL0ludmVudG9yeVwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGNsYXNzIEdsb3ZlcyBleHRlbmRzIEVxdWlwQmxvY2sge1xuXG4gICAgY29uc3RydWN0b3IoaW52ZW50b3J5OiBJbnZlbnRvcnkpIHtcbiAgICAgICAgc3VwZXIoaW52ZW50b3J5KTtcblxuICAgICAgICB0aGlzLmJsb2NrV2lkdGggPSBcIjk2cHhcIjtcbiAgICAgICAgdGhpcy5ibG9ja0hlaWdodCA9IFwiOTJweFwiO1xuICAgICAgICB0aGlzLmJsb2NrVG9wID0gXCI0NDJweFwiO1xuICAgICAgICB0aGlzLmJsb2NrTGVmdCA9IFwiNDI4cHhcIjtcblxuICAgICAgICB0aGlzLml0ZW0gPSBpbnZlbnRvcnkuZ3VpTWFpbi5nYW1lLnBsYXllci5pbnZlbnRvcnkuZ2xvdmVzO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQmxvY2tXaXRoSW1hZ2UoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7RXF1aXBCbG9ja30gZnJvbSBcIi4vRXF1aXBCbG9ja1wiO1xuaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuLi9JbnZlbnRvcnlcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5cbmV4cG9ydCBjbGFzcyBIZWxtIGV4dGVuZHMgRXF1aXBCbG9jayB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnZlbnRvcnk6IEludmVudG9yeSkge1xuICAgICAgICBzdXBlcihpbnZlbnRvcnkpO1xuXG4gICAgICAgIHRoaXMuYmxvY2tXaWR0aCA9IFwiOTZweFwiO1xuICAgICAgICB0aGlzLmJsb2NrSGVpZ2h0ID0gXCI5MnB4XCI7XG4gICAgICAgIHRoaXMuYmxvY2tUb3AgPSBcIjEyMXB4XCI7XG4gICAgICAgIHRoaXMuYmxvY2tMZWZ0ID0gXCIyNTdweFwiO1xuXG4gICAgICAgIHRoaXMuaXRlbSA9IGludmVudG9yeS5ndWlNYWluLmdhbWUucGxheWVyLmludmVudG9yeS5oZWxtO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlQmxvY2tXaXRoSW1hZ2UoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi4vSW52ZW50b3J5XCI7XG5pbXBvcnQge0VxdWlwQmxvY2t9IGZyb20gXCIuL0VxdWlwQmxvY2tcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSAnYmFieWxvbmpzLWd1aSc7XG5cbmV4cG9ydCBjbGFzcyBTaGllbGQgZXh0ZW5kcyBFcXVpcEJsb2NrIHtcblxuICAgIGNvbnN0cnVjdG9yKGludmVudG9yeTogSW52ZW50b3J5KSB7XG4gICAgICAgIHN1cGVyKGludmVudG9yeSk7XG5cbiAgICAgICAgdGhpcy5ibG9ja1dpZHRoID0gXCI5MHB4XCI7XG4gICAgICAgIHRoaXMuYmxvY2tIZWlnaHQgPSBcIjE0NnB4XCI7XG4gICAgICAgIHRoaXMuYmxvY2tUb3AgPSBcIjI0OHB4XCI7XG4gICAgICAgIHRoaXMuYmxvY2tMZWZ0ID0gXCI0MzVweFwiO1xuXG4gICAgICAgIHRoaXMuaXRlbSA9IGludmVudG9yeS5ndWlNYWluLmdhbWUucGxheWVyLmludmVudG9yeS5zaGllbGQ7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVCbG9ja1dpdGhJbWFnZSgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuLi9JbnZlbnRvcnlcIjtcbmltcG9ydCB7RXF1aXBCbG9ja30gZnJvbSBcIi4vRXF1aXBCbG9ja1wiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGNsYXNzIFdlYXBvbiBleHRlbmRzIEVxdWlwQmxvY2sge1xuXG4gICAgY29uc3RydWN0b3IoaW52ZW50b3J5OiBJbnZlbnRvcnkpIHtcbiAgICAgICAgc3VwZXIoaW52ZW50b3J5KTtcblxuICAgICAgICB0aGlzLmJsb2NrV2lkdGggPSBcIjkwcHhcIjtcbiAgICAgICAgdGhpcy5ibG9ja0hlaWdodCA9IFwiMTQ2cHhcIjtcbiAgICAgICAgdGhpcy5ibG9ja1RvcCA9IFwiMjQ4cHhcIjtcbiAgICAgICAgdGhpcy5ibG9ja0xlZnQgPSBcIjg1cHhcIjtcblxuXG4gICAgICAgIHRoaXMuaXRlbSA9IGludmVudG9yeS5ndWlNYWluLmdhbWUucGxheWVyLmludmVudG9yeS53ZWFwb247XG5cbiAgICAgICAgdGhpcy5jcmVhdGVCbG9ja1dpdGhJbWFnZSgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtQb3B1cH0gZnJvbSBcIi4vUG9wdXBcIjtcbmltcG9ydCB7TWFpbn0gZnJvbSBcIi4uL01haW5cIjtcbmltcG9ydCB7QnV0dG9uLCBDb250cm9sLCBUZXh0QmxvY2t9IGZyb20gJ2JhYnlsb25qcy1ndWknO1xuXG5leHBvcnQgY2xhc3MgTmV3UXVlc3QgZXh0ZW5kcyBQb3B1cCB7XG5cbiAgICBwcm90ZWN0ZWQgcXVlc3REYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihndWlNYWluOiBNYWluLCBxdWVzdFNlcnZlckRhdGEpIHtcbiAgICAgICAgc3VwZXIoZ3VpTWFpbik7XG4gICAgICAgIHRoaXMucXVlc3REYXRhID0gcXVlc3RTZXJ2ZXJEYXRhO1xuICAgICAgICB0aGlzLm5hbWUgPSAnUXVlc3QnO1xuICAgICAgICB0aGlzLmltYWdlVXJsID0gXCJhc3NldHMvZ3VpL2NvbnRlbnQucG5nXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5pdFRleHR1cmUoKTtcblxuICAgICAgICB0aGlzLmd1aVRleHR1cmUuYWRkQ29udHJvbCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuc2hvd1RleHQoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0b25DbG9zZSgpO1xuXG4gICAgICAgIGxldCBidXR0b25BY2NlcHQgPSBCdXR0b24uQ3JlYXRlU2ltcGxlQnV0dG9uKFwicXVlc3RzQnV0dG9uQWNjZXB0XCIsIFwiQWNjZXB0IHF1ZXN0XCIpO1xuICAgICAgICBidXR0b25BY2NlcHQuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBidXR0b25BY2NlcHQuYmFja2dyb3VuZCA9IFwiYmxhY2tcIjtcbiAgICAgICAgYnV0dG9uQWNjZXB0LndpZHRoID0gXCIxODBweDtcIjtcbiAgICAgICAgYnV0dG9uQWNjZXB0LmhlaWdodCA9IFwiNDhweFwiO1xuICAgICAgICBidXR0b25BY2NlcHQudGhpY2tuZXNzID0gMDtcbiAgICAgICAgYnV0dG9uQWNjZXB0LnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfQk9UVE9NO1xuICAgICAgICBidXR0b25BY2NlcHQuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfQ0VOVEVSO1xuXG4gICAgICAgIGJ1dHRvbkFjY2VwdC5vblBvaW50ZXJVcE9ic2VydmFibGUuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuZ3VpTWFpbi5nYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnYWNjZXB0UXVlc3QnLCBzZWxmLnF1ZXN0RGF0YS5xdWVzdElkKTtcbiAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ29udHJvbChidXR0b25BY2NlcHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ndWlUZXh0dXJlLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5idXR0b25DbG9zZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNob3dUZXh0KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB0aXRsZSA9IG5ldyBUZXh0QmxvY2soJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlLnZlcnRpY2FsQWxpZ25tZW50ID0gQ29udHJvbC5WRVJUSUNBTF9BTElHTk1FTlRfVE9QO1xuICAgICAgICB0aXRsZS5ob3Jpem9udGFsQWxpZ25tZW50ID0gQ29udHJvbC5IT1JJWk9OVEFMX0FMSUdOTUVOVF9DRU5URVI7XG4gICAgICAgIHRpdGxlLnRleHQgPSB0aGlzLnF1ZXN0RGF0YS50aXRsZTtcbiAgICAgICAgdGl0bGUudG9wID0gXCIyJVwiO1xuICAgICAgICB0aXRsZS5jb2xvciA9IFwiYnJvd25cIjtcbiAgICAgICAgdGl0bGUud2lkdGggPSBcIjcwJVwiO1xuICAgICAgICB0aXRsZS5oZWlnaHQgPSBcIjEwJVwiO1xuICAgICAgICB0aXRsZS5mb250U2l6ZSA9IDM4O1xuICAgICAgICB0aXRsZS5mb250RmFtaWx5ID0gXCJSdXNsYW5EaXNwbGF5XCI7XG4gICAgICAgIHRpdGxlLnRleHRXcmFwcGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENvbnRyb2wodGl0bGUpO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IG5ldyBUZXh0QmxvY2soJ2Rlc2NycHRpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb24udmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgIGRlc2NyaXB0aW9uLmhvcml6b250YWxBbGlnbm1lbnQgPSBDb250cm9sLkhPUklaT05UQUxfQUxJR05NRU5UX0NFTlRFUjtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dCA9IHRoaXMucXVlc3REYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbi5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgZGVzY3JpcHRpb24udG9wID0gXCIxMCVcIjtcbiAgICAgICAgZGVzY3JpcHRpb24ud2lkdGggPSBcIjcwJVwiO1xuICAgICAgICBkZXNjcmlwdGlvbi5oZWlnaHQgPSBcIjEwJVwiO1xuICAgICAgICBkZXNjcmlwdGlvbi5mb250U2l6ZSA9IDE2O1xuICAgICAgICBkZXNjcmlwdGlvbi5mb250RmFtaWx5ID0gXCJSdXNsYW5EaXNwbGF5XCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRXcmFwcGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENvbnRyb2woZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5xdWVzdERhdGEuY2hhcHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGNoYXB0ZXJEYXRhOiBhbnksIGNoYXB0ZXIpIHtcbiAgICAgICAgICAgIGxldCB0b3BQYWRkaW5nID0gKGNoYXB0ZXIgKiAxNSk7XG5cbiAgICAgICAgICAgIGxldCBjaGFwdGVySGVhZGVyID0gbmV3IFRleHRCbG9jaygpO1xuICAgICAgICAgICAgY2hhcHRlckhlYWRlci52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX1RPUDtcbiAgICAgICAgICAgIGNoYXB0ZXJIZWFkZXIuaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfQ0VOVEVSO1xuICAgICAgICAgICAgY2hhcHRlckhlYWRlci50ZXh0ID0gJ0NoYXB0ZXIgJyArIChjaGFwdGVyICsgMSlcbiAgICAgICAgICAgIGNoYXB0ZXJIZWFkZXIudG9wID0gdG9wUGFkZGluZyArIDE1ICsgXCIlXCI7XG4gICAgICAgICAgICBjaGFwdGVySGVhZGVyLndpZHRoID0gXCI3MCVcIjtcbiAgICAgICAgICAgIGNoYXB0ZXJIZWFkZXIuaGVpZ2h0ID0gXCIyNSVcIjtcbiAgICAgICAgICAgIGNoYXB0ZXJIZWFkZXIuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICBjaGFwdGVySGVhZGVyLmZvbnRTaXplID0gMzA7XG4gICAgICAgICAgICBjaGFwdGVySGVhZGVyLmZvbnRGYW1pbHkgPSBcIlJ1c2xhbkRpc3BsYXlcIjtcbiAgICAgICAgICAgIGNoYXB0ZXJIZWFkZXIudGV4dFdyYXBwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuY29udGFpbmVyLmFkZENvbnRyb2woY2hhcHRlckhlYWRlcik7XG5cbiAgICAgICAgICAgIGxldCBjaGFwdGVyRGVzY3JpcHRpb24gPSBuZXcgVGV4dEJsb2NrKCk7XG4gICAgICAgICAgICBjaGFwdGVyRGVzY3JpcHRpb24udmVydGljYWxBbGlnbm1lbnQgPSBDb250cm9sLlZFUlRJQ0FMX0FMSUdOTUVOVF9UT1A7XG4gICAgICAgICAgICBjaGFwdGVyRGVzY3JpcHRpb24uaG9yaXpvbnRhbEFsaWdubWVudCA9IENvbnRyb2wuSE9SSVpPTlRBTF9BTElHTk1FTlRfQ0VOVEVSO1xuICAgICAgICAgICAgY2hhcHRlckRlc2NyaXB0aW9uLnRleHQgPSBjaGFwdGVyRGF0YS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNoYXB0ZXJEZXNjcmlwdGlvbi50b3AgPSB0b3BQYWRkaW5nICsgMjIgKyBcIiVcIjtcbiAgICAgICAgICAgIGNoYXB0ZXJEZXNjcmlwdGlvbi53aWR0aCA9IFwiNzAlXCI7XG4gICAgICAgICAgICBjaGFwdGVyRGVzY3JpcHRpb24uaGVpZ2h0ID0gXCIyNSVcIjtcbiAgICAgICAgICAgIGNoYXB0ZXJEZXNjcmlwdGlvbi5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGNoYXB0ZXJEZXNjcmlwdGlvbi5mb250U2l6ZSA9IDE2O1xuICAgICAgICAgICAgY2hhcHRlckRlc2NyaXB0aW9uLmZvbnRGYW1pbHkgPSBcIlJ1c2xhbkRpc3BsYXlcIjtcbiAgICAgICAgICAgIGNoYXB0ZXJEZXNjcmlwdGlvbi50ZXh0V3JhcHBpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBzZWxmLmNvbnRhaW5lci5hZGRDb250cm9sKGNoYXB0ZXJEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcbmltcG9ydCB7U2NlbmV9IGZyb20gXCIuL1NjZW5lcy9TY2VuZVwiO1xuaW1wb3J0IHtNb3VzZX0gZnJvbSBcIi4vQ29udHJvbGxlcnMvTW91c2VcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9DaGFyYWN0ZXJzL1BsYXllclwiO1xuaW1wb3J0IHtTb2NrZXRDbGllbnR9IGZyb20gXCIuL1NvY2tldENsaWVudC9zb2NrZXRDbGllbnRcIjtcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHMvRXZlbnRzXCI7XG5pbXBvcnQge01haW59IGZyb20gXCIuL0dVSS9NYWluXCI7XG5pbXBvcnQge1NsYXZzTG9hZGVyfSBmcm9tIFwiLi9Mb2FkZXIvU2xhdnNMb2FkZXJcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuXG4gICAgc3RhdGljIFNIT1dfQ09MTElERVJTID0gMDtcbiAgICBzdGF0aWMgU0hPV19ERUJVRyA9IDA7XG4gICAgc3RhdGljIE1PQklMRV9DTElFTlQgPSBmYWxzZTtcblxuICAgIHB1YmxpYyBjb250cm9sbGVyOiBNb3VzZTtcbiAgICBwdWJsaWMgZW5naW5lOiBCQUJZTE9OLkVuZ2luZTtcbiAgICBwdWJsaWMgc29ja2V0Q2xpZW50OiBTb2NrZXRDbGllbnQ7XG4gICAgcHVibGljIHBsYXllcjogUGxheWVyO1xuICAgIHB1YmxpYyBndWk6IE1haW47XG4gICAgcHVibGljIGFjdGl2ZVNjZW5lOiBTY2VuZTtcbiAgICBwdWJsaWMgZXZlbnRzOiBFdmVudHM7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCwgc2VydmVyVXJsOiBzdHJpbmcsIGFjY2Vzc1Rva2VuOiBzdHJpbmcsIGlzTW9iaWxlOiBib29sZWFuID0gZmFsc2UsIGlzRGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoaXNEZWJ1Zykge1xuICAgICAgICAgICAgR2FtZS5TSE9XX0RFQlVHID0gMTtcbiAgICAgICAgfVxuICAgICAgICBHYW1lLk1PQklMRV9DTElFTlQgPSBpc01vYmlsZTtcblxuICAgICAgICB0aGlzLmVuZ2luZSA9IG5ldyBCQUJZTE9OLkVuZ2luZShjYW52YXNFbGVtZW50LCBmYWxzZSwgbnVsbCwgZmFsc2UpO1xuICAgICAgICB0aGlzLmVuZ2luZS5sb2FkaW5nU2NyZWVuID0gbmV3IFNsYXZzTG9hZGVyKCdJbml0aWFsaXplIGVuZ2luZScpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgTW91c2UodGhpcyk7XG4gICAgICAgIHRoaXMuc29ja2V0Q2xpZW50ID0gbmV3IFNvY2tldENsaWVudCh0aGlzKTtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG5cbiAgICAgICAgdGhpcy5zb2NrZXRDbGllbnQuY29ubmVjdChzZXJ2ZXJVcmwsIGFjY2Vzc1Rva2VuKTtcbiAgICAgICAgdGhpcy5yZXNpemVMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIGdldEJhYnlsb25TY2VuZSgpOiBCQUJZTE9OLlNjZW5lIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmFjdGl2ZVNjZW5lKSA/IHRoaXMuYWN0aXZlU2NlbmUuYmFieWxvblNjZW5lIDogbnVsbDtcbiAgICB9XG5cbiAgICBnZXRTY2VuZU1hbmdlcigpOiBTY2VuZSB7XG4gICAgICAgIHJldHVybiAodGhpcy5hY3RpdmVTY2VuZSkgPyB0aGlzLmFjdGl2ZVNjZW5lIDogbnVsbDtcbiAgICB9XG5cbiAgICBzZXRTY2VuZShzY2VuZTogU2NlbmUpOiBHYW1lIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTY2VuZSA9IHNjZW5lO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc2l6ZUxpc3RlbmVyKCk6IEdhbWUge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmVuZ2luZS5yZXNpemUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVNjZW5lKG5ld1NjZW5lOiBTY2VuZSkge1xuICAgICAgICB0aGlzLmVuZ2luZS5zdG9wUmVuZGVyTG9vcCgpO1xuICAgICAgICB0aGlzLnNvY2tldENsaWVudC5jbGVhckV2ZW50cygpO1xuXG4gICAgICAgIGxldCBzY2VuZVRvRGlzcG9zZSA9IHRoaXMuZ2V0QmFieWxvblNjZW5lKCk7XG4gICAgICAgIGlmIChzY2VuZVRvRGlzcG9zZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2NlbmVUb0Rpc3Bvc2UuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVTY2VuZSA9IG51bGw7XG5cbiAgICAgICAgbmV3U2NlbmUuaW5pdFNjZW5lKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tTnVtYmVyKG1pbmltdW06IG51bWJlciwgbWF4aW11bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXhpbXVtIC0gbWluaW11bSkgKyBtaW5pbXVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRpc3RhbmNlVmVjdG9yKHZlY3RvckZyb206IEJBQllMT04uVmVjdG9yMywgdmVjdG9yVG86IEJBQllMT04uVmVjdG9yMykge1xuICAgICAgICBsZXQgZHggPSB2ZWN0b3JGcm9tLnggLSB2ZWN0b3JUby54O1xuICAgICAgICBsZXQgZHkgPSB2ZWN0b3JGcm9tLnkgLSB2ZWN0b3JUby55O1xuICAgICAgICBsZXQgZHogPSB2ZWN0b3JGcm9tLnogLSB2ZWN0b3JUby56O1xuXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6KTtcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi9HYW1lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgIGlmIChCQUJZTE9OLkVuZ2luZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbEVsZW1lbnQgPSA8SFRNTENhbnZhc0VsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW5kZXJDYW52YXMnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uc2V0QXR0cmlidXRlKFwib25jb250ZXh0bWVudVwiLCBcInJldHVybiBmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICBuZXcgR2FtZShodG1sRWxlbWVudCwgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJzo1MDAwJywgJ2FjY2Vzc1Rva2VuJywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge1Rvb2x0aXBNZXNofSBmcm9tIFwiLi4vR1VJL1Rvb2x0aXBzL1Rvb2x0aXBNZXNoXCI7XG5pbXBvcnQge0dvVG9NZXNoQW5kUnVuQWN0aW9ufSBmcm9tIFwiLi4vQWN0aW9ucy9Hb1RvTWVzaEFuZFJ1bkFjdGlvblwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgQ2hlc3Qge1xuXG4gICAgcHVibGljIG1lc2g6IEJBQllMT04uQWJzdHJhY3RNZXNoO1xuICAgIHB1YmxpYyBoaWdodGxpZ2h0TGF5ZXI6IEJBQllMT04uSGlnaGxpZ2h0TGF5ZXI7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7R2FtZX0gZ2FtZVxuICAgICAqIEBwYXJhbSBjaGVzdERhdGFcbiAgICAgKiBAcGFyYW0gY2hlc3RLZXlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCBjaGVzdERhdGEsIGNoZXN0S2V5KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNjZW5lID0gZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKTtcbiAgICAgICAgbGV0IHRvb2x0aXA7XG4gICAgICAgIGxldCBvcGVuZWQgPSBjaGVzdERhdGEub3BlbmVkO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBjaGVzdERhdGEucG9zaXRpb247XG4gICAgICAgIGxldCByb3RhdGlvbiA9IGNoZXN0RGF0YS5yb3RhdGlvbjtcbiAgICAgICAgbGV0IGNoZXN0TWVzaCA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5hc3NldHMuY2hlc3QuY3JlYXRlQ2xvbmUoJ2NoZXN0JywgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IGdhbWVDYW1lcmEgPSBzY2VuZS5nZXRDYW1lcmFCeU5hbWUoJ2dhbWVDYW1lcmEnKTtcblxuICAgICAgICBpZiAoIWNoZXN0TWVzaCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignV3JvbmcgY2hlc3QgbWVzaCBuYW1lLicpO1xuICAgICAgICB9XG4gICAgICAgIGNoZXN0TWVzaC5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XG4gICAgICAgIGNoZXN0TWVzaC5yb3RhdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMocm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueik7XG4gICAgICAgIGNoZXN0TWVzaC5pc1BpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgY2hlc3RNZXNoLmNoZWNrQ29sbGlzaW9ucyA9IHRydWU7XG4gICAgICAgIGNoZXN0TWVzaC5tYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgICAgICAgbGV0IGhsID0gbmV3IEJBQllMT04uSGlnaGxpZ2h0TGF5ZXIoXCJoaWdobGlnaHRMYXllclwiLCBzY2VuZSwge2NhbWVyYTogZ2FtZUNhbWVyYX0pO1xuICAgICAgICAgICAgaGwuYWRkTWVzaChjaGVzdE1lc2gsIEJBQllMT04uQ29sb3IzLk1hZ2VudGEoKSk7XG5cbiAgICAgICAgICAgIHNlbGYuaGlnaHRsaWdodExheWVyID0gaGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1lc2ggPSBjaGVzdE1lc2g7XG4gICAgICAgIHRoaXMubWVzaC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihnYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgdGhpcy5tZXNoLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUG9pbnRlck92ZXJUcmlnZ2VyLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRvb2x0aXAgPSBuZXcgVG9vbHRpcE1lc2goY2hlc3RNZXNoLCBjaGVzdERhdGEubmFtZSk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5tZXNoLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUG9pbnRlck91dFRyaWdnZXIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcC5jb250YWluZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMubWVzaC5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKFxuICAgICAgICAgICAgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUGlja1RyaWdnZXIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgR29Ub01lc2hBbmRSdW5BY3Rpb24uZXhlY3V0ZShnYW1lLCBjaGVzdE1lc2gsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ29wZW5DaGVzdCcsIGNoZXN0S2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIENvbGxpc2lvbnMge1xuXG4gICAgc3RhdGljIHNldENvbGxpZGVyKHNjZW5lOiBCQUJZTE9OLlNjZW5lLCBwYXJlbnQ6IEJBQllMT04uQWJzdHJhY3RNZXNoLCBzY2FsaW5nU2l6ZTogQkFCWUxPTi5WZWN0b3IzID0gbmV3IEJBQllMT04uVmVjdG9yMygyLDMsMiksIGZyZWV6ZUluV29ybGQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIC8vIGxldCBjb2xsaWRlciA9IEJBQllMT04uTWVzaC5DcmVhdGVCb3goJ2NvbGxpZGVyX2JveF9vZl8nICsgcGFyZW50Lm5hbWUsIDAsIHNjZW5lLCBmYWxzZSk7XG4gICAgICAgIC8vIGxldCBwYXJlbnRCb3VuZEJveCA9IHBhcmVudC5nZXRCb3VuZGluZ0luZm8oKTtcbiAgICAgICAgLy8gY29sbGlkZXIuc2NhbGluZyA9IG5ldyBCQUJZTE9OLlZlY3RvcjMocGFyZW50Qm91bmRCb3guYm91bmRpbmdCb3gubWF4aW11bS54ICogMiwgcGFyZW50Qm91bmRCb3guYm91bmRpbmdCb3gubWF4aW11bS55ICogMiwgcGFyZW50Qm91bmRCb3guYm91bmRpbmdCb3gubWF4aW11bS56ICogMik7XG4gICAgICAgIC8vIGNvbGxpZGVyLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgcGFyZW50LmlzUGlja2FibGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKEdhbWUuU0hPV19DT0xMSURFUlMpIHtcbiAgICAgICAgICAgIC8vIGNvbGxpZGVyLm1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChcImNvbGxpZGVybWF0XCIsIHNjZW5lKTtcbiAgICAgICAgICAgIC8vIGNvbGxpZGVyLm1hdGVyaWFsLmFscGhhID0gMC4zO1xuICAgICAgICAgICAgcGFyZW50LmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50LmNoZWNrQ29sbGlzaW9ucyA9IHRydWU7XG5cbiAgICAgICAgaWYoZnJlZXplSW5Xb3JsZCkge1xuICAgICAgICAgICAgcGFyZW50LmZyZWV6ZVdvcmxkTWF0cml4KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL1BsYXllci9JdGVtcy9JdGVtXCI7XG5pbXBvcnQge0JvdW5jZUFuaW1hdGlvbn0gZnJvbSBcIi4uL0FuaW1hdGlvbnMvQm91bmNlQW5pbWF0aW9uXCI7XG5pbXBvcnQge1Rvb2x0aXBNZXNofSBmcm9tIFwiLi4vR1VJL1Rvb2x0aXBzL1Rvb2x0aXBNZXNoXCI7XG5pbXBvcnQge0Ryb3BwZWRJdGVtIGFzIERyb3BwZWRJdGVtUGFydGljbGVzfSBmcm9tIFwiLi4vUGFydGljbGVzL0Ryb3BwZWRJdGVtXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5pbXBvcnQge0dvVG9NZXNoQW5kUnVuQWN0aW9ufSBmcm9tIFwiLi4vQWN0aW9ucy9Hb1RvTWVzaEFuZFJ1bkFjdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgRHJvcHBlZEl0ZW0ge1xuXG4gICAgcHJpdmF0ZSBpdGVtU3ByaXRlTWFuYWdlcjogQkFCWUxPTi5TcHJpdGVNYW5hZ2VyO1xuICAgIHByaXZhdGUgaXRlbVNwcml0ZTogQkFCWUxPTi5TcHJpdGU7XG4gICAgcHJpdmF0ZSBtZXNoOiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcbiAgICBwcml2YXRlIHRvb2x0aXBNZXNoOiBUb29sdGlwTWVzaDtcbiAgICBwcml2YXRlIGdhbWU6IEdhbWU7XG4gICAgcHJpdmF0ZSBpdGVtTmFtZTogU3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgaXRlbTogSXRlbSwgcG9zaXRpb246IEJBQllMT04uVmVjdG9yMywgaXRlbURyb3BLZXk6IG51bWJlcikge1xuICAgICAgICAgICAgbGV0IHNjZW5lID0gZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKTtcblxuICAgICAgICAgICAgbGV0IGRyb3BwZWRJdGVtQm94ID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveChpdGVtLm5hbWUgKyAnX0JveCcsIDMsIHNjZW5lLCBmYWxzZSk7XG4gICAgICAgICAgICBkcm9wcGVkSXRlbUJveC5jaGVja0NvbGxpc2lvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIGRyb3BwZWRJdGVtQm94LnZpc2liaWxpdHkgPSAwO1xuICAgICAgICAgICAgZHJvcHBlZEl0ZW1Cb3gucG9zaXRpb24ueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICBkcm9wcGVkSXRlbUJveC5wb3NpdGlvbi56ID0gcG9zaXRpb24uejtcbiAgICAgICAgICAgIGRyb3BwZWRJdGVtQm94LnBvc2l0aW9uLnkgPSAwO1xuXG4gICAgICAgICAgICBsZXQgaXRlbVNwcml0ZU1hbmFnZXIgPSBuZXcgQkFCWUxPTi5TcHJpdGVNYW5hZ2VyKFwicGxheWVyTWFuYWdlclwiLCdhc3NldHMvTWluaWF0dXJlcy8nICsgaXRlbS5pbWFnZSArICcucG5nJywgMSwge3dpZHRoOiA1MTIsIGhlaWdodDogNTEyfSwgc2NlbmUpO1xuICAgICAgICAgICAgbGV0IGl0ZW1TcHJpdGUgPSBuZXcgQkFCWUxPTi5TcHJpdGUoXCJwbGF5ZXJcIiwgaXRlbVNwcml0ZU1hbmFnZXIpO1xuICAgICAgICAgICAgaXRlbVNwcml0ZS53aWR0aCA9IDEuODtcbiAgICAgICAgICAgIGl0ZW1TcHJpdGUuaGVpZ2h0ID0gMS44O1xuICAgICAgICAgICAgaXRlbVNwcml0ZS5wb3NpdGlvbi54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgICAgIGl0ZW1TcHJpdGUucG9zaXRpb24ueiA9IHBvc2l0aW9uLno7XG4gICAgICAgICAgICBpdGVtU3ByaXRlLnBvc2l0aW9uLnkgPSAxLjU7XG4gICAgICAgICAgICBpdGVtU3ByaXRlTWFuYWdlci5sYXllck1hc2sgPSAyO1xuXG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25Cb3VuY2UgPSBCb3VuY2VBbmltYXRpb24uZ2V0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGl0ZW1TcHJpdGUuYW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbkJvdW5jZSk7XG4gICAgICAgICAgICBzY2VuZS5iZWdpbkFuaW1hdGlvbihpdGVtU3ByaXRlLCAwLCAzMCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGRyb3BwZWRJdGVtQm94LmFjdGlvbk1hbmFnZXIgPSBuZXcgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyKHNjZW5lKTtcbiAgICAgICAgICAgIGRyb3BwZWRJdGVtQm94LmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUGlja1RyaWdnZXIsXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBHb1RvTWVzaEFuZFJ1bkFjdGlvbi5leGVjdXRlKGdhbWUsIGRyb3BwZWRJdGVtQm94LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnYWRkRHJvcHBlZEl0ZW0nLCBpdGVtRHJvcEtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgbGV0IHBhcnRpY2xlU3lzdGVtID0gbmV3IERyb3BwZWRJdGVtUGFydGljbGVzKGdhbWUsIGRyb3BwZWRJdGVtQm94KTtcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLnBhcnRpY2xlU3lzdGVtLnN0YXJ0KCk7XG4gICAgICAgICAgICBkcm9wcGVkSXRlbUJveC5mcmVlemVXb3JsZE1hdHJpeCgpO1xuXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBNZXNoID0gbmV3IFRvb2x0aXBNZXNoKGRyb3BwZWRJdGVtQm94LCBpdGVtLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5pdGVtU3ByaXRlID0gaXRlbVNwcml0ZTtcbiAgICAgICAgICAgIHRoaXMuaXRlbVNwcml0ZU1hbmFnZXIgPSBpdGVtU3ByaXRlTWFuYWdlcjtcbiAgICAgICAgICAgIHRoaXMubWVzaCA9IGRyb3BwZWRJdGVtQm94O1xuICAgICAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgICAgIHRoaXMuaXRlbU5hbWUgPSBpdGVtLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgcGlja0l0ZW0oKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuZ3VpLnBsYXllckxvZ3NRdWVzdHMuYWRkVGV4dCh0aGlzLml0ZW1OYW1lICsgJyAgaGFzIGJlZW4gcGlja2VkIHVwLicsICdncmVlbicpO1xuICAgICAgICAgICAgdGhpcy5tZXNoLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcE1lc2guY29udGFpbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbVNwcml0ZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLml0ZW1TcHJpdGVNYW5hZ2VyLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiIsImltcG9ydCB7VG9vbHRpcE1lc2h9IGZyb20gXCIuLi9HVUkvVG9vbHRpcHMvVG9vbHRpcE1lc2hcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7R29Ub01lc2hBbmRSdW5BY3Rpb259IGZyb20gXCIuLi9BY3Rpb25zL0dvVG9NZXNoQW5kUnVuQWN0aW9uXCI7XG5pbXBvcnQge0dhdGV3YXlQYXJ0aWNsZXMgYXMgR2F0ZXdheVBhcnRpY2xlc30gZnJvbSBcIi4uL1BhcnRpY2xlcy9HYXRld2F5UGFydGljbGVzXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBHYXRld2F5IHtcblxuICAgIHB1YmxpYyBtZXNoOiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcbiAgICBwdWJsaWMgdG9vbHRpcDogVG9vbHRpcE1lc2g7XG4gICAgcHVibGljIHBhcnRpY2xlU3lzdGVtOiBCQUJZTE9OLklQYXJ0aWNsZVN5c3RlbTtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIG1lc2hOYW1lOiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuLCBvcGVuU2NlbmVUeXBlOiBudW1iZXIsIGVudHJhbmNlTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBnYXRld2F5ID0gPEJBQllMT04uTWVzaD4gZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5nZXRNZXNoQnlOYW1lKG1lc2hOYW1lKTtcbiAgICAgICAgaWYgKCFnYXRld2F5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdXcm9uZyBnYXRld2F5IG1lc2ggbmFtZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWVzaCA9IGdhdGV3YXk7XG4gICAgICAgIGdhdGV3YXkudmlzaWJpbGl0eSA9IDA7XG4gICAgICAgIGdhdGV3YXkuaXNQaWNrYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwTWVzaChnYXRld2F5LCBlbnRyYW5jZU5hbWUpO1xuXG4gICAgICAgIGxldCBnYXRld2F5UGFydGljbGVTeXN0ZW0gPSBHYXRld2F5UGFydGljbGVzLmluaXRQYXJ0aWNsZVN5c3RlbShnYW1lLCBnYXRld2F5LCBpc0FjdGl2ZSk7XG4gICAgICAgIGdhdGV3YXlQYXJ0aWNsZVN5c3RlbS5zdGFydCgpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlU3lzdGVtID0gZ2F0ZXdheVBhcnRpY2xlU3lzdGVtO1xuXG4gICAgICAgIGdhdGV3YXkuYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIoZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgIGdhdGV3YXkuYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihcbiAgICAgICAgICAgIG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBvaW50ZXJPdmVyVHJpZ2dlcixcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuZ3VpLmNoYXJhY3RlclRvcEhwLnNob3dHYXRld2F5KGVudHJhbmNlTmFtZSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIGdhdGV3YXkuYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihcbiAgICAgICAgICAgIG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBvaW50ZXJPdXRUcmlnZ2VyLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5ndWkuY2hhcmFjdGVyVG9wSHAuaGlkZUhwQmFyKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIGxldCBlbnRlclRoZUdhdGV3YXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5ndWkucGxheWVyTG9nc1F1ZXN0cy5hZGRUZXh0KCdUaGlzIGdhdGV3YXkgaXMgbG9ja2VkIScsICd5ZWxsb3cnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgR29Ub01lc2hBbmRSdW5BY3Rpb24uZXhlY3V0ZShnYW1lLCBnYXRld2F5LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ2NoYW5nZVNjZW5lVHJpZ2dlcicsIG9wZW5TY2VuZVR5cGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcbiAgICAgICAgZ2F0ZXdheS5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKFxuICAgICAgICAgICAgbmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUGlja0Rvd25UcmlnZ2VyLFxuICAgICAgICAgICAgICAgIGVudGVyVGhlR2F0ZXdheSkpO1xuXG4gICAgICAgIGdhdGV3YXkuYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihcbiAgICAgICAgICAgIG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uSW50ZXJzZWN0aW9uRW50ZXJUcmlnZ2VyLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6IGdhbWUucGxheWVyLm1lc2hcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudGVyVGhlR2F0ZXdheSkpO1xuXG4gICAgfVxufVxuXG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge1Rvb2x0aXBNZXNofSBmcm9tIFwiLi4vR1VJL1Rvb2x0aXBzL1Rvb2x0aXBNZXNoXCI7XG5pbXBvcnQge05ld1F1ZXN0fSBmcm9tIFwiLi4vR1VJL3BvcHVwL25ld1F1ZXN0XCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdHMge1xuXG4gICAgcHJpdmF0ZSBtZXNoOiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcbiAgICBwcml2YXRlIHRvb2x0aXBNZXNoOiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcbiAgICBwcml2YXRlIHRvb2x0aXBHdWk6IFRvb2x0aXBNZXNoO1xuICAgIHByaXZhdGUgZ2FtZTogR2FtZTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtHYW1lfSBnYW1lXG4gICAgICogQHBhcmFtIHNlcnZlckRhdGFcbiAgICAgKiBAcGFyYW0gYWN0aXZlUXVlc3RcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lLCBzZXJ2ZXJEYXRhLCBhY3RpdmVRdWVzdCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBxdWVzdFBpY2tlciA9IGdhbWUuZ2V0QmFieWxvblNjZW5lKCkuZ2V0TWVzaEJ5TmFtZShzZXJ2ZXJEYXRhLm9iamVjdE5hbWUpO1xuICAgICAgICBpZiAoIXF1ZXN0UGlja2VyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdXcm9uZyBxdWVzdCBtZXNoIG5hbWUuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcXVlc3RQaWNrZXIuaXNQaWNrYWJsZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5tZXNoID0gcXVlc3RQaWNrZXI7XG4gICAgICAgIHRoaXMubWVzaC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihnYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcblxuICAgICAgICBzZWxmLmNyZWF0ZVRvb2x0aXAoc2VydmVyRGF0YSwgYWN0aXZlUXVlc3QsIHF1ZXN0UGlja2VyKTtcbiAgICAgICAgc2VsZi5tZXNoLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25QaWNrVHJpZ2dlcixcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcXVlc3QgPSBuZXcgTmV3UXVlc3QoZ2FtZS5ndWksIHNlcnZlckRhdGEpO1xuICAgICAgICAgICAgICAgIHF1ZXN0Lm9wZW4oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVmcmVzaFRvb2x0aXBDb2xvcihzZXJ2ZXJEYXRhLCBhY3RpdmVRdWVzdCwgcXVlc3RQaWNrZXI6IEJBQllMT04uQWJzdHJhY3RNZXNoKSB7XG4gICAgICAgIGxldCBtYXRlcmlhbCA9IDxCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWw+IHRoaXMudG9vbHRpcE1lc2gubWF0ZXJpYWw7XG4gICAgICAgIGlmIChhY3RpdmVRdWVzdCAmJiBhY3RpdmVRdWVzdC5xdWVzdElkICE9IHNlcnZlckRhdGEucXVlc3RJZCkge1xuICAgICAgICAgICAgbWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKDEsIDAsIDApO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZVF1ZXN0ICYmIGFjdGl2ZVF1ZXN0LnF1ZXN0SWQgPT0gc2VydmVyRGF0YS5xdWVzdElkKSB7XG4gICAgICAgICAgICBtYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMSwgMSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMCwgMSwgMCk7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBHdWkgPSBuZXcgVG9vbHRpcE1lc2gocXVlc3RQaWNrZXIsICdOZXcgcXVlc3QnLCAtNDUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2x0aXAoc2VydmVyRGF0YSwgYWN0aXZlUXVlc3QsIHF1ZXN0UGlja2VyOiBCQUJZTE9OLkFic3RyYWN0TWVzaCkge1xuICAgICAgICBsZXQgYm94ID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveChcInF1ZXN0X2JveFwiLCAwLjQsIHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgIGJveC5tYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJxdWVzdF9ib3hfbWF0ZXJpYWxcIiwgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgYm94LnBhcmVudCA9IHRoaXMubWVzaDtcbiAgICAgICAgYm94LnBvc2l0aW9uLnkgKz0gMztcblxuICAgICAgICBsZXQga2V5cyA9IFtdO1xuICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgZnJhbWU6IDAsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9KTtcblxuICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgZnJhbWU6IDMwLFxuICAgICAgICAgICAgdmFsdWU6IC0yXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhbmltYXRpb25Cb3ggPSBuZXcgQkFCWUxPTi5BbmltYXRpb24oXCJyb3RhdGlvblwiLCBcInJvdGF0aW9uLnlcIiwgMzAsXG4gICAgICAgICAgICBCQUJZTE9OLkFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULFxuICAgICAgICAgICAgQkFCWUxPTi5BbmltYXRpb24uQU5JTUFUSU9OTE9PUE1PREVfUkVMQVRJVkUpO1xuICAgICAgICBhbmltYXRpb25Cb3guc2V0S2V5cyhrZXlzKTtcbiAgICAgICAgYm94LmFuaW1hdGlvbnMgPSBbXTtcbiAgICAgICAgYm94LmFuaW1hdGlvbnMucHVzaChhbmltYXRpb25Cb3gpO1xuXG4gICAgICAgIHRoaXMudG9vbHRpcE1lc2ggPSBib3g7XG4gICAgICAgIHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5iZWdpbkFuaW1hdGlvbihib3gsIDAsIDMwLCB0cnVlKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoVG9vbHRpcENvbG9yKHNlcnZlckRhdGEsIGFjdGl2ZVF1ZXN0LCBxdWVzdFBpY2tlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXBHdWkpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcEd1aS5jb250YWluZXIuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9vbHRpcE1lc2guZGlzcG9zZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7VG9vbHRpcE1lc2h9IGZyb20gXCIuLi9HVUkvVG9vbHRpcHMvVG9vbHRpcE1lc2hcIjtcbmltcG9ydCB7R29Ub01lc2hBbmRSdW5BY3Rpb259IGZyb20gXCIuLi9BY3Rpb25zL0dvVG9NZXNoQW5kUnVuQWN0aW9uXCI7XG5pbXBvcnQge0Ryb3BwZWRJdGVtfSBmcm9tIFwiLi4vUGFydGljbGVzL0Ryb3BwZWRJdGVtXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBSYW5kb21TcGVjaWFsSXRlbSB7XG5cbiAgICBwdWJsaWMgbWVzaDogQkFCWUxPTi5BYnN0cmFjdE1lc2g7XG4gICAgcHVibGljIHRvb2x0aXA6IFRvb2x0aXBNZXNoO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0dhbWV9IGdhbWVcbiAgICAgKiBAcGFyYW0gcmFuZG9tU3BlY2lhbEl0ZW1EYXRhXG4gICAgICogQHBhcmFtIHJhbmRvbVNwZWNpYWxJdGVtS2V5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgcmFuZG9tU3BlY2lhbEl0ZW1EYXRhLCByYW5kb21TcGVjaWFsSXRlbUtleSkge1xuICAgICAgICBsZXQgc2NlbmUgPSBnYW1lLmdldEJhYnlsb25TY2VuZSgpO1xuICAgICAgICBsZXQgdG9vbHRpcDtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gcmFuZG9tU3BlY2lhbEl0ZW1EYXRhLnBvc2l0aW9uO1xuICAgICAgICBsZXQgcmFuZG9tSXRlbU1lc2ggPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuYXNzZXRzLm5hdHVyZUdyYWluLmNyZWF0ZUNsb25lKHJhbmRvbVNwZWNpYWxJdGVtRGF0YS5zcGVjaWFsSXRlbS5tZXNoTmFtZSk7XG5cbiAgICAgICAgcmFuZG9tSXRlbU1lc2gucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xuICAgICAgICByYW5kb21JdGVtTWVzaC5pc1BpY2thYmxlID0gdHJ1ZTtcblxuICAgICAgICBsZXQgcGFydGljbGVTeXN0ZW0gPSBuZXcgRHJvcHBlZEl0ZW0oZ2FtZSwgcmFuZG9tSXRlbU1lc2gpO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5wYXJ0aWNsZVN5c3RlbS5zdGFydCgpO1xuXG4gICAgICAgIHRoaXMubWVzaCA9IHJhbmRvbUl0ZW1NZXNoO1xuICAgICAgICB0aGlzLm1lc2guYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIoc2NlbmUpO1xuICAgICAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcE1lc2gocmFuZG9tSXRlbU1lc2gsIHJhbmRvbVNwZWNpYWxJdGVtRGF0YS5zcGVjaWFsSXRlbS5uYW1lKTtcbiAgICAgICAgdGhpcy5tZXNoLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25QaWNrVHJpZ2dlcixcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBHb1RvTWVzaEFuZFJ1bkFjdGlvbi5leGVjdXRlKGdhbWUsIHJhbmRvbUl0ZW1NZXNoLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdwaWNrUmFuZG9tSXRlbScsIHJhbmRvbVNwZWNpYWxJdGVtS2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBTbGF2c0xvYWRlciBpbXBsZW1lbnRzIEJBQllMT04uSUxvYWRpbmdTY3JlZW4ge1xuXG4gICAgcHVibGljIGxvYWRpbmdVSUJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGxvYWRpbmdVSVRleHQ6IHN0cmluZykge1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwbGF5TG9hZGluZ1VJKCkge1xuICAgICAgICBsZXQgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWxvYWRlclwiKTtcbiAgICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuXG4gICAgICAgIFNsYXZzTG9hZGVyLmNoYW5nZUxvYWRpbmdUZXh0KCdMb2FkaW5nIHNjZW5lLi4uJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVMb2FkaW5nVUkoKSB7XG4gICAgICAgIGxldCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtbG9hZGVyXCIpO1xuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJDYW52YXNcIik7XG4gICAgICAgIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjaGFuZ2VMb2FkaW5nVGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGxvYWRlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtbG9hZGVyLXRleHRcIik7XG4gICAgICAgIGxvYWRlclRleHQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNob3dMb2FkZXJXaXRoVGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1sb2FkZXJcIik7XG4gICAgICAgIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcblxuICAgICAgICBTbGF2c0xvYWRlci5jaGFuZ2VMb2FkaW5nVGV4dCh0ZXh0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5pbXBvcnQge0ZvZ30gZnJvbSBcIi4uL0Vudmlyb25tZW50L0ZvZy9Gb2dcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVPcHRpb25zIHtcblxuICAgIHByb3RlY3RlZCByZW5kZXJpbmdQaXBlbGluZTogQkFCWUxPTi5EZWZhdWx0UmVuZGVyaW5nUGlwZWxpbmU7XG4gICAgcHJvdGVjdGVkIHN0YXRpY1NoYWRvd0dlbmVyYXRvcjogQkFCWUxPTi5TaGFkb3dHZW5lcmF0b3I7XG5cbiAgICBwdWJsaWMgZHluYW1pY1NoYWRvd0dlbmVyYXRvcjogQkFCWUxPTi5TaGFkb3dHZW5lcmF0b3I7XG4gICAgcHVibGljIGR5bmFtaWNTaGFkb3dzQXJyYXk6IEFycmF5PEJBQllMT04uQWJzdHJhY3RNZXNoPjtcbiAgICBwdWJsaWMgc3RhdGljU2hhZG93czogYm9vbGVhbjtcbiAgICBwdWJsaWMgZHluYW1pY1NoYWRvd3M6IGJvb2xlYW47XG4gICAgcHVibGljIHBvc3RQcm9jY2Vzc2luZzogYm9vbGVhbjtcbiAgICBwdWJsaWMgZnhhYTogYm9vbGVhbjtcbiAgICBwdWJsaWMgZm9nOiBib29sZWFuO1xuICAgIHB1YmxpYyBkb2Y6IGJvb2xlYW47XG4gICAgcHVibGljIGZTdG9wOiBudW1iZXI7XG4gICAgcHVibGljIGZvY3VzRGlzdGFuY2U6IG51bWJlcjtcbiAgICBwdWJsaWMgZm9jYWxMZW5ndGg6IG51bWJlcjtcbiAgICBwdWJsaWMgbGVuc1NpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgYmxvb206IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgICAgIHRoaXMuZHluYW1pY1NoYWRvd3NBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLnJlZnJlc2hBbGxEYXRhKCk7XG4gICAgICAgIHRoaXMuaW5pdEluU2NlbmUoZ2FtZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZnJlc2hBbGxEYXRhKCkge1xuICAgICAgICB0aGlzLnN0YXRpY1NoYWRvd3MgPSB0aGlzLmdldEZyb21Mb2NhbFN0b3JhZ2UoJ3N0YXRpY1NoYWRvd3MnKTtcbiAgICAgICAgdGhpcy5keW5hbWljU2hhZG93cyA9IHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZSgnZHluYW1pY1NoYWRvd3MnKTtcbiAgICAgICAgdGhpcy5wb3N0UHJvY2Nlc3NpbmcgPSB0aGlzLmdldEZyb21Mb2NhbFN0b3JhZ2UoJ3Bvc3RQcm9jY2Vzc2luZycpO1xuICAgICAgICB0aGlzLmZ4YWEgPSB0aGlzLmdldEZyb21Mb2NhbFN0b3JhZ2UoJ2Z4YWEnKTtcbiAgICAgICAgdGhpcy5mb2cgPSB0aGlzLmdldEZyb21Mb2NhbFN0b3JhZ2UoJ2ZvZycpO1xuICAgICAgICB0aGlzLmRvZiA9IHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZSgnZG9mJyk7XG4gICAgICAgIHRoaXMuZlN0b3AgPSB0aGlzLmdldEZyb21Mb2NhbFN0b3JhZ2UoJ2ZTdG9wJyk7XG4gICAgICAgIHRoaXMuZm9jdXNEaXN0YW5jZSA9IHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZSgnZm9jdXNEaXN0YW5jZScpO1xuICAgICAgICB0aGlzLmZvY2FsTGVuZ3RoID0gdGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKCdmb2NhbExlbmd0aCcpO1xuICAgICAgICB0aGlzLmxlbnNTaXplID0gdGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKCdsZW5zU2l6ZScpO1xuICAgICAgICB0aGlzLmJsb29tID0gdGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKCdibG9vbScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRGcm9tTG9jYWxTdG9yYWdlKGtleSkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3B0aW9ucy4nICsga2V5KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzYXZlSW5Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSwgZ2FtZTogR2FtZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3B0aW9ucy4nICsga2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuXG4gICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5vcHRpb25zLmluaXRJblNjZW5lKGdhbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRNZXNoVG9EeW5hbWljU2hhZG93R2VuZXJhdG9yKG1lc2g6IEJBQllMT04uQWJzdHJhY3RNZXNoKSB7XG4gICAgICAgIHRoaXMuZHluYW1pY1NoYWRvd3NBcnJheS5wdXNoKG1lc2gpO1xuXG4gICAgICAgIGlmICh0aGlzLmR5bmFtaWNTaGFkb3dHZW5lcmF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY1NoYWRvd0dlbmVyYXRvci5nZXRTaGFkb3dNYXAoKS5yZW5kZXJMaXN0LnB1c2gobWVzaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdEluU2NlbmUoZ2FtZTogR2FtZSkge1xuICAgICAgICB0aGlzLnJlZnJlc2hBbGxEYXRhKCk7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IHNjZW5lLmdldENhbWVyYUJ5TmFtZSgnZ2FtZUNhbWVyYScpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRpY1NoYWRvd3MgJiYgIXRoaXMuc3RhdGljU2hhZG93R2VuZXJhdG9yICYmIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5lbnZpcm9ubWVudCAmJiBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuZW52aXJvbm1lbnQubGlnaHQpIHtcbiAgICAgICAgICAgIGxldCBzaGFkb3dHZW5lcmF0b3IgPSBuZXcgQkFCWUxPTi5TaGFkb3dHZW5lcmF0b3IoMjA0OCwgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmVudmlyb25tZW50LmxpZ2h0KTtcbiAgICAgICAgICAgIHNoYWRvd0dlbmVyYXRvci51c2VQZXJjZW50YWdlQ2xvc2VyRmlsdGVyaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoYWRvd0dlbmVyYXRvci5maWx0ZXJpbmdRdWFsaXR5ID0gQkFCWUxPTi5TaGFkb3dHZW5lcmF0b3IuUVVBTElUWV9MT1c7XG4gICAgICAgICAgICBzaGFkb3dHZW5lcmF0b3IuZ2V0U2hhZG93TWFwKCkucmVmcmVzaFJhdGUgPSBCQUJZTE9OLlJlbmRlclRhcmdldFRleHR1cmUuUkVGUkVTSFJBVEVfUkVOREVSX09OQ0U7XG4gICAgICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuZW52aXJvbm1lbnQubGlnaHQuYXV0b1VwZGF0ZUV4dGVuZHMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhZG93R2VuZXJhdG9yID0gc2hhZG93R2VuZXJhdG9yO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljU2hhZG93TWVzaGVzID0gZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmVudmlyb25tZW50LnN0YXRpY1NoYWRvd09iamVjdHM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpY1NoYWRvd01lc2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd2VkTWVzaCA9IHN0YXRpY1NoYWRvd01lc2hlc1tpXTtcbiAgICAgICAgICAgICAgICBzaGFkb3dHZW5lcmF0b3IuZ2V0U2hhZG93TWFwKCkucmVuZGVyTGlzdC5wdXNoKHNoYWRvd2VkTWVzaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhdGljU2hhZG93cyAmJiB0aGlzLnN0YXRpY1NoYWRvd0dlbmVyYXRvcikge1xuICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFkb3dHZW5lcmF0b3IuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFkb3dHZW5lcmF0b3IgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZHluYW1pY1NoYWRvd3MgJiYgIXRoaXMuZHluYW1pY1NoYWRvd0dlbmVyYXRvcikge1xuICAgICAgICAgICAgc2VsZi5keW5hbWljU2hhZG93R2VuZXJhdG9yID0gbmV3IEJBQllMT04uU2hhZG93R2VuZXJhdG9yKDUxMiwgZ2FtZS5wbGF5ZXIucGxheWVyTGlnaHQpO1xuICAgICAgICAgICAgc2VsZi5keW5hbWljU2hhZG93c0FycmF5LmZvckVhY2goKG1lc2gpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmR5bmFtaWNTaGFkb3dHZW5lcmF0b3IuZ2V0U2hhZG93TWFwKCkucmVuZGVyTGlzdC5wdXNoKG1lc2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZHluYW1pY1NoYWRvd3MgJiYgdGhpcy5keW5hbWljU2hhZG93R2VuZXJhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmR5bmFtaWNTaGFkb3dHZW5lcmF0b3IuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5keW5hbWljU2hhZG93R2VuZXJhdG9yID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wb3N0UHJvY2Nlc3NpbmcgJiYgdGhpcy5yZW5kZXJpbmdQaXBlbGluZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc3RQcm9jY2Vzc2luZyAmJiAhdGhpcy5yZW5kZXJpbmdQaXBlbGluZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdQaXBlbGluZSA9IG5ldyBCQUJZTE9OLkRlZmF1bHRSZW5kZXJpbmdQaXBlbGluZShcInBvc3RQcm9jY2VzaW5nXCIsIGZhbHNlLCBzY2VuZSwgW2NhbWVyYV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyaW5nUGlwZWxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nUGlwZWxpbmUuZnhhYUVuYWJsZWQgPSB0aGlzLmZ4YWE7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lLmRlcHRoT2ZGaWVsZEVuYWJsZWQgPSB0aGlzLmRvZjtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nUGlwZWxpbmUuYmxvb21FbmFibGVkID0gdGhpcy5ibG9vbTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nUGlwZWxpbmUuYmxvb21UaHJlc2hvbGQgPSAwLjE7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lLmJsb29tV2VpZ2h0ID0gMC41O1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5ibG9vbVNjYWxlID0gMTtcbiAgICAgICAgICAgIC8vVE9ETzogRE9GRlxuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5kZXB0aE9mRmllbGQuZGVwdGhPZkZpZWxkQmx1ckxldmVsID0gQkFCWUxPTi5EZXB0aE9mRmllbGRFZmZlY3RCbHVyTGV2ZWwuTWVkaXVtO1xuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5kZXB0aE9mRmllbGQuZlN0b3AgPSB0aGlzLmZTdG9wO1xuICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5kZXB0aE9mRmllbGQuZm9jdXNEaXN0YW5jZSA9IHRoaXMuZm9jdXNEaXN0YW5jZTtcbiAgICAgICAgICAgIC8vIHRoaXMucmVuZGVyaW5nUGlwZWxpbmUuZGVwdGhPZkZpZWxkLmZvY2FsTGVuZ3RoID0gdGhpcy5mb2NhbExlbmd0aDtcbiAgICAgICAgICAgIC8vIHRoaXMucmVuZGVyaW5nUGlwZWxpbmUuZGVwdGhPZkZpZWxkLmxlbnNTaXplID0gdGhpcy5sZW5zU2l6ZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nUGlwZWxpbmUuZGVwdGhPZkZpZWxkLmZTdG9wID0gMC4xO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5kZXB0aE9mRmllbGQuZm9jdXNEaXN0YW5jZSA9IDIyMDAwO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmdQaXBlbGluZS5kZXB0aE9mRmllbGQuZm9jYWxMZW5ndGggPSA0MDA7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZ1BpcGVsaW5lLmRlcHRoT2ZGaWVsZC5sZW5zU2l6ZSA9IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZm9nKSB7XG4gICAgICAgICAgICBGb2cuYWRkRm9nKHNjZW5lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEZvZy5kaXNhYmxlRm9nKHNjZW5lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UGFydGljbGUge1xuXG4gICAgcHJvdGVjdGVkIGdhbWU6IEdhbWU7XG4gICAgcHJvdGVjdGVkIGVtaXR0ZXI6IEJBQllMT04uTWVzaDtcbiAgICBwdWJsaWMgcGFydGljbGVTeXN0ZW06IEJBQllMT04uSVBhcnRpY2xlU3lzdGVtO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgZW1pdHRlcjogQkFCWUxPTi5NZXNoKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuZW1pdHRlciA9IGVtaXR0ZXI7XG5cbiAgICAgICAgdGhpcy5pbml0UGFydGljbGVTeXN0ZW0oKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBpbml0UGFydGljbGVTeXN0ZW0oKTtcbn1cbiIsImltcG9ydCB7QWJzdHJhY3RQYXJ0aWNsZX0gZnJvbSBcIi4vQWJzdHJhY3RQYXJ0aWNsZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgQmxvb2QgZXh0ZW5kcyBBYnN0cmFjdFBhcnRpY2xlIHtcblxuICAgICAgICBpbml0UGFydGljbGVTeXN0ZW0oKSB7XG4gICAgICAgICAgICBsZXQgcGFydGljbGVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5HUFVQYXJ0aWNsZVN5c3RlbShcInBhcnRpY2xlMXNcIiwgeyBjYXBhY2l0eTogNTAgfSAsIHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL1Ntb2tlMy5wbmdcIiwgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLmVtaXR0ZXIgPSB0aGlzLmVtaXR0ZXI7XG5cbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLm1pbkVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIHRoaXMuZW1pdHRlci5nZW9tZXRyeS5leHRlbmQubWF4aW11bS55KjAuNywgMCk7IC8vIFN0YXJ0aW5nIGFsbCBmcm9tXG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5tYXhFbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCB0aGlzLmVtaXR0ZXIuZ2VvbWV0cnkuZXh0ZW5kLm1heGltdW0ueSowLjcsIDApOyAvLyBUby4uLlxuXG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5jb2xvcjEgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMSwgMCwgMCwgMSk7XG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5jb2xvcjIgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMSwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLmNvbG9yRGVhZCA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLCAxKTtcblxuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0ubWluU2l6ZSA9IDAuMztcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLm1heFNpemUgPSAwLjU7XG5cbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLm1pbkxpZmVUaW1lID0gMTtcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLm1heExpZmVUaW1lID0gMTtcblxuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uZW1pdFJhdGUgPSA1MDtcblxuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uYmxlbmRNb2RlID0gQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfU1RBTkRBUkQ7XG5cbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC05LjgxLCAwKTtcblxuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoLTEsIDQsIC0xKTtcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLmRpcmVjdGlvbjIgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDQsIDQsIDQpO1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0ubWluQW5ndWxhclNwZWVkID0gLTEwLjA7XG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5tYXhBbmd1bGFyU3BlZWQgPSAxMC4wO1xuXG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5taW5FbWl0UG93ZXIgPSAwLjU7XG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbS5tYXhFbWl0UG93ZXIgPSAxO1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0udXBkYXRlU3BlZWQgPSAwLjAyO1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0ubGF5ZXJNYXNrID0gMjtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVTeXN0ZW0gPSBwYXJ0aWNsZVN5c3RlbTtcbiAgICAgICAgfVxuICAgIH1cbiIsImltcG9ydCB7QWJzdHJhY3RQYXJ0aWNsZX0gZnJvbSBcIi4vQWJzdHJhY3RQYXJ0aWNsZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgRHJvcHBlZEl0ZW0gZXh0ZW5kcyBBYnN0cmFjdFBhcnRpY2xlIHtcblxuICAgICAgICBpbml0UGFydGljbGVTeXN0ZW0oKSB7XG4gICAgICAgICAgICBsZXQgZmlyZVN5c3RlbSA9IG5ldyBCQUJZTE9OLkdQVVBhcnRpY2xlU3lzdGVtKFwiRHJvcHBlZEl0ZW1QYXJ0aWNsZXNcIiwgeyBjYXBhY2l0eTogMjAgfSwgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9mbGFyZS5wbmdcIiwgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5lbWl0dGVyID0gdGhpcy5lbWl0dGVyO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5taW5FbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygtMSwgMCwgLTEpO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5tYXhFbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygxLCAwLCAxKTtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5jb2xvcjEgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMCwgMC41LCAwLCAxLjApO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5jb2xvcjIgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMCwgMC41LCAwLCAxLjApO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5jb2xvckRlYWQgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMCwgMCwgMCwgMC4wKTtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5taW5TaXplID0gMC4yO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5tYXhTaXplID0gMC41O1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1pbkxpZmVUaW1lID0gMC41O1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5tYXhMaWZlVGltZSA9IDIuNTtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5lbWl0UmF0ZSA9IDEwO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX09ORU9ORTtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5kaXJlY3Rpb24xID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLjIsIDApO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5kaXJlY3Rpb24yID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLjUsIDApO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1pbkVtaXRQb3dlciA9IDE7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1heEVtaXRQb3dlciA9IDE7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmxheWVyTWFzayA9IDI7XG5cbiAgICAgICAgICAgIHRoaXMucGFydGljbGVTeXN0ZW0gPSBmaXJlU3lzdGVtO1xuICAgICAgICB9XG4gICAgfVxuIiwiaW1wb3J0IHtBYnN0cmFjdFBhcnRpY2xlfSBmcm9tIFwiLi9BYnN0cmFjdFBhcnRpY2xlXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBGaXJlcGxhY2VGaXJlIGV4dGVuZHMgQWJzdHJhY3RQYXJ0aWNsZSB7XG5cbiAgICAgICAgaW5pdFBhcnRpY2xlU3lzdGVtKCkge1xuICAgICAgICAgICAgdmFyIGZpcmVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5HUFVQYXJ0aWNsZVN5c3RlbShcInBhcnRpY2xlc1wiLCB7IGNhcGFjaXR5OiA1MCB9LCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvZmxhcmUucG5nXCIsIHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG5cbiAgICAgICAgICAgIGZpcmVTeXN0ZW0uZW1pdHRlciA9IHRoaXMuZW1pdHRlcjtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWluRW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMC41LCAwLCAwLjUpO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5tYXhFbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygtMC41LCAwLCAtMC41KTtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5jb2xvcjEgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMSwgMC41LCAwLCAxLjApO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5jb2xvcjIgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMSwgMC41LCAwLCAxLjApO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5jb2xvckRlYWQgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMCwgMCwgMCwgMC4wKTtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5taW5TaXplID0gMC4yO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5tYXhTaXplID0gMC43O1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1pbkxpZmVUaW1lID0gMC4yO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5tYXhMaWZlVGltZSA9IDAuNDtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5lbWl0UmF0ZSA9IDE1MDtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5ibGVuZE1vZGUgPSBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9PTkVPTkU7XG5cbiAgICAgICAgICAgIGZpcmVTeXN0ZW0uZ3Jhdml0eSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIGZpcmVTeXN0ZW0uZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMiwgMCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmRpcmVjdGlvbjIgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDIsIDApO1xuXG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1pbkFuZ3VsYXJTcGVlZCA9IC0xMDtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWF4QW5ndWxhclNwZWVkID0gTWF0aC5QSTtcblxuICAgICAgICAgICAgZmlyZVN5c3RlbS5taW5FbWl0UG93ZXIgPSAxO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5tYXhFbWl0UG93ZXIgPSAzO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS51cGRhdGVTcGVlZCA9IDAuMDA3O1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5sYXllck1hc2sgPSAyO1xuXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlU3lzdGVtID0gZmlyZVN5c3RlbTtcbiAgICAgICAgfVxuICAgIH1cbiIsImltcG9ydCB7QWJzdHJhY3RQYXJ0aWNsZX0gZnJvbSBcIi4vQWJzdHJhY3RQYXJ0aWNsZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgRmlyZXBsYWNlU21va2UgZXh0ZW5kcyBBYnN0cmFjdFBhcnRpY2xlIHtcblxuICAgIGluaXRQYXJ0aWNsZVN5c3RlbSgpIHtcbiAgICAgICAgdmFyIHNtb2tlU3lzdGVtID0gbmV3IEJBQllMT04uR1BVUGFydGljbGVTeXN0ZW0oXCJwYXJ0aWNsZXNcIiwge2NhcGFjaXR5OiAxMDB9LCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICBzbW9rZVN5c3RlbS5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL2ZsYXJlLnBuZ1wiLCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICBzbW9rZVN5c3RlbS5lbWl0dGVyID0gdGhpcy5lbWl0dGVyO1xuICAgICAgICBzbW9rZVN5c3RlbS5taW5FbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLjUsIDEuNSwgMC41KTtcbiAgICAgICAgc21va2VTeXN0ZW0ubWF4RW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoLTAuNSwgMS41LCAtMC41KTtcblxuICAgICAgICBzbW9rZVN5c3RlbS5jb2xvcjEgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMC4xLCAwLjEsIDAuMSwgMS4wKTtcbiAgICAgICAgc21va2VTeXN0ZW0uY29sb3IyID0gbmV3IEJBQllMT04uQ29sb3I0KDAuMSwgMC4xLCAwLjEsIDEuMCk7XG4gICAgICAgIHNtb2tlU3lzdGVtLmNvbG9yRGVhZCA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLCAwLjApO1xuXG4gICAgICAgIHNtb2tlU3lzdGVtLm1pblNpemUgPSAwLjM7XG4gICAgICAgIHNtb2tlU3lzdGVtLm1heFNpemUgPSAxO1xuXG4gICAgICAgIHNtb2tlU3lzdGVtLm1pbkxpZmVUaW1lID0gMC4zO1xuICAgICAgICBzbW9rZVN5c3RlbS5tYXhMaWZlVGltZSA9IDAuNjtcblxuICAgICAgICBzbW9rZVN5c3RlbS5lbWl0UmF0ZSA9IDEwMDtcblxuICAgICAgICBzbW9rZVN5c3RlbS5ibGVuZE1vZGUgPSBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9PTkVPTkU7XG5cbiAgICAgICAgc21va2VTeXN0ZW0uZ3Jhdml0eSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG5cbiAgICAgICAgc21va2VTeXN0ZW0uZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoLTEuNSwgOCwgLTEuNSk7XG4gICAgICAgIHNtb2tlU3lzdGVtLmRpcmVjdGlvbjIgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEuNSwgOCwgMS41KTtcblxuICAgICAgICBzbW9rZVN5c3RlbS5taW5Bbmd1bGFyU3BlZWQgPSA1MDtcbiAgICAgICAgc21va2VTeXN0ZW0ubWF4QW5ndWxhclNwZWVkID0gTWF0aC5QSTtcblxuICAgICAgICBzbW9rZVN5c3RlbS5taW5FbWl0UG93ZXIgPSAwLjU7XG4gICAgICAgIHNtb2tlU3lzdGVtLm1heEVtaXRQb3dlciA9IDEuNTtcbiAgICAgICAgc21va2VTeXN0ZW0udXBkYXRlU3BlZWQgPSAwLjAwNTtcbiAgICAgICAgc21va2VTeXN0ZW0ubGF5ZXJNYXNrID0gMjtcblxuICAgICAgICB0aGlzLnBhcnRpY2xlU3lzdGVtID0gc21va2VTeXN0ZW07XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuXG5leHBvcnQgY2xhc3MgR2F0ZXdheVBhcnRpY2xlcyB7XG5cbiAgICBzdGF0aWMgaW5pdFBhcnRpY2xlU3lzdGVtKGdhbWU6IEdhbWUsIGVtaXR0ZXI6IEJBQllMT04uTWVzaCwgaXNBY3RpdmU6IGJvb2xlYW4pOiBCQUJZTE9OLkdQVVBhcnRpY2xlU3lzdGVtIHtcbiAgICAgICAgbGV0IHBhcnRpY2xlU3lzdGVtID0gbmV3IEJBQllMT04uR1BVUGFydGljbGVTeXN0ZW0oXCJwYXJ0aWNsZXNcIiwge2NhcGFjaXR5OiAxNTB9LCBnYW1lLmdldEJhYnlsb25TY2VuZSgpKTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0ucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9mbGFyZS5wbmdcIiwgZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmVtaXR0ZXIgPSBlbWl0dGVyO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5taW5FbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygtMSwgMCwgLTEpO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5tYXhFbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygxLCAwLCAxKTtcblxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLmNvbG9yMSA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLjcsIDAuOCwgMS4wLCAxKTtcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLmNvbG9yMiA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLjIsIDAuNSwgMS4wLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLmNvbG9yMSA9IG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAwLCAwLjAsIDEpO1xuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uY29sb3IyID0gbmV3IEJBQllMT04uQ29sb3I0KDAuNSwgMCwgMC4wLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5jb2xvckRlYWQgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMCwgMCwgMC4yLCAwLjApO1xuXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLm1pblNpemUgPSAwLjE7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLm1heFNpemUgPSAwLjU7XG5cbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubWluTGlmZVRpbWUgPSAwLjM7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLm1heExpZmVUaW1lID0gMTtcblxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5lbWl0UmF0ZSA9IDE1MDtcblxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5ibGVuZE1vZGUgPSBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9PTkVPTkU7XG5cbiAgICAgICAgcGFydGljbGVTeXN0ZW0uZ3Jhdml0eSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgOS44MSwgMCk7XG5cbiAgICAgICAgcGFydGljbGVTeXN0ZW0uZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmRpcmVjdGlvbjIgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAuMjUsIDApO1xuXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLm1pbkFuZ3VsYXJTcGVlZCA9IDA7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLm1heEFuZ3VsYXJTcGVlZCA9IE1hdGguUEk7XG5cbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubWluRW1pdFBvd2VyID0gMC41O1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5tYXhFbWl0UG93ZXIgPSAxLjU7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLnVwZGF0ZVNwZWVkID0gMC4wMDQ7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmxheWVyTWFzayA9IDI7XG5cbiAgICAgICAgcmV0dXJuIHBhcnRpY2xlU3lzdGVtO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIENsaWNrUGFydGljbGVzIHtcblxuICAgIHN0YXRpYyBnZXRQYXJ0aWNsZXMoc2NlbmU6IEJBQllMT04uU2NlbmUpIHtcbiAgICAgICAgbGV0IHBhcnRpY2xlU3lzdGVtID0gbmV3IEJBQllMT04uUGFydGljbGVTeXN0ZW0oXCJjbGlja1BhcnRpY2xlc1wiLCA1MCwgc2NlbmUpO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL2ZsYXJlLnBuZ1wiLCBzY2VuZSk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmxheWVyTWFzayA9IDI7XG5cbiAgICAgICAgcGFydGljbGVTeXN0ZW0uY29sb3IxID0gbmV3IEJBQllMT04uQ29sb3I0KDAuNywgMC44LCAxLjAsIDEuMCk7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmNvbG9yMiA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLjIsIDAuNSwgMS4wLCAxLjApO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5jb2xvckRlYWQgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMCwgMCwgMC4yLCAwLjApO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5lbWl0dGVyID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAyLCAwKTsgLy8gdGhlIHN0YXJ0aW5nIGxvY2F0aW9uXG5cbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubWluU2l6ZSA9IDAuNTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubWF4U2l6ZSA9IDAuNTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubWluTGlmZVRpbWUgPSAwLjU7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLm1heExpZmVUaW1lID0gMS41O1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5lbWl0UmF0ZSA9IDIwO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS50YXJnZXRTdG9wRHVyYXRpb24gPSAwLjI7XG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmNyZWF0ZVBvaW50RW1pdHRlcihuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEsIDApKTtcblxuICAgICAgICAvLyBTcGVlZFxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5taW5FbWl0UG93ZXIgPSAxO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5tYXhFbWl0UG93ZXIgPSAzO1xuXG5cbiAgICAgICAgcmV0dXJuIHBhcnRpY2xlU3lzdGVtO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RQYXJ0aWNsZX0gZnJvbSBcIi4uL0Fic3RyYWN0UGFydGljbGVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIEhlYWwgZXh0ZW5kcyBBYnN0cmFjdFBhcnRpY2xlIHtcblxuICAgICAgICBpbml0UGFydGljbGVTeXN0ZW0oKSB7XG4gICAgICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCk7XG4gICAgICAgICAgICBsZXQgZW1pdHRlciA9IEJBQllMT04uTWVzaC5DcmVhdGVCb3goXCJlbWl0dGVyMFwiLCAwLjEsIHNjZW5lKTtcbiAgICAgICAgICAgIGVtaXR0ZXIuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBlbWl0dGVyLnBhcmVudCA9IHRoaXMuZW1pdHRlcjtcblxuICAgICAgICAgICAgbGV0IGZpcmVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbShcInBhcnRpY2xlc1wiLCAxMDAwLCBzY2VuZSk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvZmxhcmUucG5nXCIsIHNjZW5lKTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWluU2l6ZSA9IDAuMztcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWF4U2l6ZSA9IDAuMztcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWluRW1pdFBvd2VyID0gMS4wO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5tYXhFbWl0UG93ZXIgPSAxO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5taW5MaWZlVGltZSA9IDE7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1heExpZmVUaW1lID0gMTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0uZW1pdFJhdGUgPSAyMDA7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX09ORU9ORTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0ubWluRW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLm1heEVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5ncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCA5LCAwKTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0uZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLmRpcmVjdGlvbjIgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xuICAgICAgICAgICAgZmlyZVN5c3RlbS5jb2xvcjEgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMC43LCAwLjgsIDEuMCwgMS4wKTtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0uY29sb3IyID0gbmV3IEJBQllMT04uQ29sb3I0KDAuMiwgMC41LCAxLjAsIDEuMCk7XG4gICAgICAgICAgICBmaXJlU3lzdGVtLnRhcmdldFN0b3BEdXJhdGlvbiA9IDAuODtcbiAgICAgICAgICAgIGZpcmVTeXN0ZW0uZW1pdHRlciA9IGVtaXR0ZXI7XG5cbiAgICAgICAgICAgIHRoaXMucGFydGljbGVTeXN0ZW0gPSBmaXJlU3lzdGVtO1xuICAgICAgICB9XG4gICAgfVxuIiwiaW1wb3J0IHtBYnN0cmFjdFBhcnRpY2xlfSBmcm9tIFwiLi4vQWJzdHJhY3RQYXJ0aWNsZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgU2hpZWxkQXR0YWNrIGV4dGVuZHMgQWJzdHJhY3RQYXJ0aWNsZSB7XG5cbiAgICBpbml0UGFydGljbGVTeXN0ZW0oKSB7XG4gICAgICAgIGxldCBib3ggPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUJveChcImJ4MFwiLCB7c2l6ZTogMX0sIHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgIGJveC52aXNpYmlsaXR5ID0gMDtcbiAgICAgICAgYm94LnNjYWxpbmcgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEsIDEsIDAuMSk7XG4gICAgICAgIGJveC5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMC4xKTtcbiAgICAgICAgYm94LnBhcmVudCA9IHRoaXMuZW1pdHRlcjtcblxuICAgICAgICBib3guYXR0YWNoVG9Cb25lKHRoaXMuZW1pdHRlci5za2VsZXRvbi5ib25lc1sxM10sIHRoaXMuZW1pdHRlcik7XG5cbiAgICAgICAgbGV0IGZpcmVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbShcInBhcnRpY2xlc1wiLCAxMDAwLCB0aGlzLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICBmaXJlU3lzdGVtLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvZmxhcmUucG5nXCIsIHRoaXMuZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgIGZpcmVTeXN0ZW0uZW1pdHRlciA9IGJveDtcbiAgICAgICAgZmlyZVN5c3RlbS5taW5TaXplID0gMTtcbiAgICAgICAgZmlyZVN5c3RlbS5tYXhTaXplID0gMTtcbiAgICAgICAgZmlyZVN5c3RlbS5taW5FbWl0UG93ZXIgPSAwO1xuICAgICAgICBmaXJlU3lzdGVtLm1heEVtaXRQb3dlciA9IDE7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWluTGlmZVRpbWUgPSAwLjI7XG4gICAgICAgIGZpcmVTeXN0ZW0ubWF4TGlmZVRpbWUgPSAwLjI7XG4gICAgICAgIGZpcmVTeXN0ZW0uZW1pdFJhdGUgPSAxNTA7XG4gICAgICAgIGZpcmVTeXN0ZW0uYmxlbmRNb2RlID0gQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfT05FT05FO1xuICAgICAgICBmaXJlU3lzdGVtLm1pbkVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0xLCAtMSwgLTEpO1xuICAgICAgICBmaXJlU3lzdGVtLm1heEVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEsIDEsIDEpO1xuICAgICAgICBmaXJlU3lzdGVtLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xuICAgICAgICBmaXJlU3lzdGVtLmRpcmVjdGlvbjEgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xuICAgICAgICBmaXJlU3lzdGVtLmRpcmVjdGlvbjIgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xuICAgICAgICBmaXJlU3lzdGVtLmNvbG9yMSA9IG5ldyBCQUJZTE9OLkNvbG9yNCgxLCAxLCAxLCAxKTtcbiAgICAgICAgZmlyZVN5c3RlbS5jb2xvcjIgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMSwgMSwgMSwgMSk7XG4gICAgICAgIGZpcmVTeXN0ZW0udXBkYXRlU3BlZWQgPSAwLjAxO1xuXG4gICAgICAgIHRoaXMucGFydGljbGVTeXN0ZW0gPSBmaXJlU3lzdGVtO1xuICAgIH1cbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0U29saWRQYXJ0aWNsZSB7XG5cbiAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZTtcbiAgICBwcm90ZWN0ZWQgc2hhcGU6IEJBQllMT04uTWVzaDtcbiAgICBwcm90ZWN0ZWQgcGFyZW50OiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcbiAgICBwcm90ZWN0ZWQgY29sbGlkZXI6IEJBQllMT04uTWVzaDtcbiAgICBwdWJsaWMgcGFydGljbGVTeXN0ZW06IEJBQllMT04uUGFydGljbGVTeXN0ZW07XG4gICAgcHVibGljIHNwc01lc2g6IEJBQllMT04uTWVzaDtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHBhcmVudDogQkFCWUxPTi5BYnN0cmFjdE1lc2gsIHNoYXBlOiBCQUJZTE9OLk1lc2gsIGlzQ29sbGlkZXI6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgICAgICBpZiAoaXNDb2xsaWRlcikge1xuICAgICAgICAgICAgdGhpcy5jb2xsaWRlciA9IEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlQm94KFwiYm94XCIsIHtoZWlnaHQ6IDEwfSwgZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSk7XG4gICAgICAgICAgICB0aGlzLmNvbGxpZGVyLnZpc2liaWxpdHkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50LnZpc2liaWxpdHkgPSAwO1xuICAgICAgICBwYXJlbnQuaXNQaWNrYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGJ1aWxkU1BTKGNvdW50OiBudW1iZXIpOiBBYnN0cmFjdFNvbGlkUGFydGljbGU7XG59XG4iLCJpbXBvcnQge0Fic3RyYWN0U29saWRQYXJ0aWNsZX0gZnJvbSBcIi4vQWJzdHJhY3RTb2xpZFBhcnRpY2xlU3lzdGVtXCI7XG5pbXBvcnQge0NvbGxpc2lvbnN9IGZyb20gXCIuLi8uLi9Jbml0aWFsaXplcnMvQ29sbGlzaW9uc1wiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgTmF0dXJlIGV4dGVuZHMgQWJzdHJhY3RTb2xpZFBhcnRpY2xlIHtcblxuICAgICAgICBwdWJsaWMgYnVpbGRTUFMoY291bnQ6IG51bWJlcik6IEFic3RyYWN0U29saWRQYXJ0aWNsZSB7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgICAgIGxldCBwYXJlbnRQb3NpdGlvbnMgPSB0aGlzLnBhcmVudC5nZXRWZXJ0aWNlc0RhdGEoQkFCWUxPTi5WZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKTtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbkxlbmd0aCA9IHBhcmVudFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGxldCBteUJ1aWxkZXIgPSBmdW5jdGlvbiAocGFydGljbGUsIGksIHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tUG9zaXRpb24gPSAyO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMyhwYXJlbnRQb3NpdGlvbnNbKHMgKiByYW5kb21Qb3NpdGlvbiArIHMpXSwgcGFyZW50UG9zaXRpb25zW3MgKiByYW5kb21Qb3NpdGlvbiArIHMgKyAxXSwgcGFyZW50UG9zaXRpb25zW3MgKiByYW5kb21Qb3NpdGlvbiArIHMgKyAyXSk7XG5cbiAgICAgICAgICAgICAgICBpZihzZWxmLmNvbGxpZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdDb2xsaWRlciA9IHNlbGYuY29sbGlkZXIuY3JlYXRlSW5zdGFuY2UoJ3Nwc19uYXR1cmVfY29sbGlzaW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbGxpZGVyLnBvc2l0aW9uLnggPSBwb3NpdGlvbi54O1xuICAgICAgICAgICAgICAgICAgICBuZXdDb2xsaWRlci5wb3NpdGlvbi55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29sbGlkZXIucG9zaXRpb24ueiA9IHBvc2l0aW9uLno7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbGxpZGVyLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIENvbGxpc2lvbnMuc2V0Q29sbGlkZXIoZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKSwgbmV3Q29sbGlkZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKyAwLjU7XG4gICAgICAgICAgICAgICAgcGFydGljbGUuc2NhbGluZy55ID0gcmFuZG9tO1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnNjYWxpbmcueCA9IHJhbmRvbTtcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5zY2FsaW5nLnogPSByYW5kb207XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgc3BzID0gbmV3IEJBQllMT04uU29saWRQYXJ0aWNsZVN5c3RlbSgnc3BzTmF0dXJlJywgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpLCB7dXBkYXRhYmxlOiBmYWxzZX0pO1xuICAgICAgICAgICAgc3BzLmFkZFNoYXBlKHRoaXMuc2hhcGUsIGNvdW50LCB7cG9zaXRpb25GdW5jdGlvbjogbXlCdWlsZGVyfSk7XG4gICAgICAgICAgICBsZXQgc3BzTWVzaCA9IHNwcy5idWlsZE1lc2goKTtcbiAgICAgICAgICAgIHNwc01lc2gubWF0ZXJpYWwgPSB0aGlzLnNoYXBlLm1hdGVyaWFsO1xuICAgICAgICAgICAgdGhpcy5zcHNNZXNoID0gc3BzTWVzaDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG4iLCJpbXBvcnQge0Fic3RyYWN0U29saWRQYXJ0aWNsZX0gZnJvbSBcIi4vQWJzdHJhY3RTb2xpZFBhcnRpY2xlU3lzdGVtXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBOYXR1cmVCbG9jayBleHRlbmRzIEFic3RyYWN0U29saWRQYXJ0aWNsZSB7XG5cbiAgICBwdWJsaWMgYnVpbGRTUFMoY291bnQ6IG51bWJlcik6IEFic3RyYWN0U29saWRQYXJ0aWNsZSB7XG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSB0aGlzLnBhcmVudC5nZXRWZXJ0aWNlc0RhdGEoQkFCWUxPTi5WZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKTtcbiAgICAgICAgbGV0IG15QnVpbGRlciA9IGZ1bmN0aW9uKHBhcnRpY2xlLCBpLCBzKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tUG9zaXRpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqNSk7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKHBvc2l0aW9uc1tzKnJhbmRvbVBvc2l0aW9uKjNdLCBwb3NpdGlvbnNbcypyYW5kb21Qb3NpdGlvbiozKzFdLCBwb3NpdGlvbnNbcypyYW5kb21Qb3NpdGlvbiozKzJdKTtcbiAgICAgICAgICAgIHBhcnRpY2xlLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKSArIDE7XG4gICAgICAgICAgICBwYXJ0aWNsZS5zY2FsaW5nLnkgPSByYW5kb207XG4gICAgICAgICAgICBwYXJ0aWNsZS5zY2FsaW5nLnggPSByYW5kb207XG4gICAgICAgICAgICBwYXJ0aWNsZS5zY2FsaW5nLnogPSByYW5kb207XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNwcyA9IG5ldyBCQUJZTE9OLlNvbGlkUGFydGljbGVTeXN0ZW0oJ3Nwc05hdHVyZUJsb2NrJywgdGhpcy5nYW1lLmdldEJhYnlsb25TY2VuZSgpLCB7dXBkYXRhYmxlOiBmYWxzZX0pO1xuICAgICAgICBzcHMuYWRkU2hhcGUodGhpcy5zaGFwZSwgY291bnQsIHtwb3NpdGlvbkZ1bmN0aW9uOiBteUJ1aWxkZXJ9KTtcbiAgICAgICAgbGV0IHNwc01lc2ggPSBzcHMuYnVpbGRNZXNoKCk7XG4gICAgICAgIHNwc01lc2gubWF0ZXJpYWwgPSB0aGlzLnNoYXBlLm1hdGVyaWFsO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIFdhbGtTbW9rZSB7XG4gICAgc3RhdGljIGdldFBhcnRpY2xlcyhzY2VuZTogQkFCWUxPTi5TY2VuZSwgZW1pdFJhdGU6IG51bWJlciwgZW1pdHRlcjogQkFCWUxPTi5BYnN0cmFjdE1lc2gpOiBCQUJZTE9OLkdQVVBhcnRpY2xlU3lzdGVtIHtcbiAgICAgICAgbGV0IHNtb2tlU3lzdGVtID0gbmV3IEJBQllMT04uR1BVUGFydGljbGVTeXN0ZW0oXCJwYXJ0aWNsZXNcIiwge2NhcGFjaXR5OiAxMH0sIHNjZW5lKTtcbiAgICAgICAgc21va2VTeXN0ZW0ucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9mbGFyZS5wbmdcIiwgc2NlbmUpO1xuICAgICAgICBzbW9rZVN5c3RlbS5lbWl0dGVyID0gZW1pdHRlcjtcbiAgICAgICAgc21va2VTeXN0ZW0ubWluRW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMC44KTtcbiAgICAgICAgc21va2VTeXN0ZW0ubWF4RW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMC44KTtcblxuICAgICAgICBzbW9rZVN5c3RlbS5jb2xvcjEgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMC4yLCAwLjIsIDAuMSwgMS4wKTtcbiAgICAgICAgc21va2VTeXN0ZW0uY29sb3IyID0gbmV3IEJBQllMT04uQ29sb3I0KDAuMiwgMC4yLCAwLjEsIDEuMCk7XG4gICAgICAgIHNtb2tlU3lzdGVtLmNvbG9yRGVhZCA9IG5ldyBCQUJZTE9OLkNvbG9yNCgwLCAwLCAwLCAwLjApO1xuXG4gICAgICAgIHNtb2tlU3lzdGVtLm1pblNpemUgPSAwLjM7XG4gICAgICAgIHNtb2tlU3lzdGVtLm1heFNpemUgPSAxLjU7XG5cbiAgICAgICAgc21va2VTeXN0ZW0ubWluTGlmZVRpbWUgPSAwLjE1O1xuICAgICAgICBzbW9rZVN5c3RlbS5tYXhMaWZlVGltZSA9IDAuMTU7XG5cbiAgICAgICAgc21va2VTeXN0ZW0uZW1pdFJhdGUgPSBlbWl0UmF0ZTtcblxuICAgICAgICBzbW9rZVN5c3RlbS5ibGVuZE1vZGUgPSBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9PTkVPTkU7XG5cbiAgICAgICAgc21va2VTeXN0ZW0uZ3Jhdml0eSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XG5cbiAgICAgICAgc21va2VTeXN0ZW0uZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgNCwgMCk7XG4gICAgICAgIHNtb2tlU3lzdGVtLmRpcmVjdGlvbjIgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDQsIDApO1xuXG4gICAgICAgIHNtb2tlU3lzdGVtLm1pbkFuZ3VsYXJTcGVlZCA9IDA7XG4gICAgICAgIHNtb2tlU3lzdGVtLm1heEFuZ3VsYXJTcGVlZCA9IE1hdGguUEk7XG5cbiAgICAgICAgc21va2VTeXN0ZW0ubWluRW1pdFBvd2VyID0gMTtcbiAgICAgICAgc21va2VTeXN0ZW0ubWF4RW1pdFBvd2VyID0gMTtcbiAgICAgICAgc21va2VTeXN0ZW0udXBkYXRlU3BlZWQgPSAwLjAwNDtcbiAgICAgICAgc21va2VTeXN0ZW0ubGF5ZXJNYXNrID0gMjtcblxuICAgICAgICByZXR1cm4gc21va2VTeXN0ZW07XG4gICAgfVxufVxuIiwiaW1wb3J0IHtBYnN0cmFjdENoYXJhY3Rlcn0gZnJvbSBcIi4uL0NoYXJhY3RlcnMvQWJzdHJhY3RDaGFyYWN0ZXJcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4vSXRlbXMvSXRlbVwiO1xuaW1wb3J0IHtJdGVtTWFuYWdlcn0gZnJvbSBcIi4vSXRlbXMvSXRlbU1hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIEludmVudG9yeSB7XG5cbiAgICAgICAgcHJvdGVjdGVkIHBsYXllcjogQWJzdHJhY3RDaGFyYWN0ZXI7XG4gICAgICAgIHByb3RlY3RlZCBnYW1lOiBHYW1lO1xuXG4gICAgICAgIC8qKiBFcXVpcGVkIGl0ZW1zICovXG4gICAgICAgIHB1YmxpYyBoZWxtOiBJdGVtO1xuICAgICAgICBwdWJsaWMgZ2xvdmVzOiBJdGVtO1xuICAgICAgICBwdWJsaWMgYm9vdHM6IEl0ZW07XG4gICAgICAgIHB1YmxpYyBhcm1vcjogSXRlbTtcbiAgICAgICAgcHVibGljIHdlYXBvbjogSXRlbTtcbiAgICAgICAgcHVibGljIHNoaWVsZDogSXRlbTtcblxuICAgICAgICBwdWJsaWMgaXRlbXM6IEFycmF5PEl0ZW0+O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIHBsYXllcjogQWJzdHJhY3RDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBjbGVhckl0ZW1zKCkge1xuICAgICAgICAgICAgdGhpcy53ZWFwb24gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zaGllbGQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5oZWxtID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZ2xvdmVzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuYm9vdHMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5hcm1vciA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIGl0ZW1cbiAgICAgICAgICogQHBhcmFtIHNldEl0ZW1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcXVpcEl0ZW0oaXRlbTogSXRlbSwgc2V0SXRlbTogYm9vbGVhbikge1xuICAgICAgICAgICAgaWYgKHNldEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBib25lc051bWJlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXBvbiA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib25lc051bWJlcnMucHVzaCh0aGlzLnBsYXllci5tZXNoLnNrZWxldG9uLmdldEJvbmVJbmRleEJ5TmFtZSgnd2VhcG9uLmJvbmUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGllbGQgPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9uZXNOdW1iZXJzLnB1c2godGhpcy5wbGF5ZXIubWVzaC5za2VsZXRvbi5nZXRCb25lSW5kZXhCeU5hbWUoJ3NoaWVsZC5ib25lJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVsbSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib25lc051bWJlcnMucHVzaCh0aGlzLnBsYXllci5tZXNoLnNrZWxldG9uLmdldEJvbmVJbmRleEJ5TmFtZSgnaGVhZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdsb3ZlcyA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib25lc051bWJlcnMucHVzaCh0aGlzLnBsYXllci5tZXNoLnNrZWxldG9uLmdldEJvbmVJbmRleEJ5TmFtZSgnaGFuZC5MJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9uZXNOdW1iZXJzLnB1c2godGhpcy5wbGF5ZXIubWVzaC5za2VsZXRvbi5nZXRCb25lSW5kZXhCeU5hbWUoJ2hhbmQuUicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb3RzID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvbmVzTnVtYmVycy5wdXNoKHRoaXMucGxheWVyLm1lc2guc2tlbGV0b24uZ2V0Qm9uZUluZGV4QnlOYW1lKCdmb290LkwnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib25lc051bWJlcnMucHVzaCh0aGlzLnBsYXllci5tZXNoLnNrZWxldG9uLmdldEJvbmVJbmRleEJ5TmFtZSgnZm9vdC5SJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJtb3IgPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9uZXNOdW1iZXJzLnB1c2godGhpcy5wbGF5ZXIubWVzaC5za2VsZXRvbi5nZXRCb25lSW5kZXhCeU5hbWUoJ2NoZXN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS5tZXNoID0gdGhpcy5nYW1lLmdldFNjZW5lTWFuZ2VyKCkuYXNzZXRzLmNoYXJhY3Rlci5jcmVhdGVDbG9uZShpdGVtLm1lc2hOYW1lKTtcbiAgICAgICAgICAgICAgICBpdGVtLm1lc2gucGFyZW50ID0gdGhpcy5wbGF5ZXIubWVzaDtcbiAgICAgICAgICAgICAgICBpdGVtLm1lc2guc2tlbGV0b24gPSB0aGlzLnBsYXllci5tZXNoLnNrZWxldG9uO1xuXG4gICAgICAgICAgICAgICAgLy8gYm9uZXNOdW1iZXJzLmZvckVhY2goKGJvbmVOdW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgbWVzaCA9IEJBQllMT04uTWVzaC5DcmVhdGVCb3goJ3Rlc3QnLCAxLCB0aGlzLmdhbWUuZ2V0U2NlbmUoKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIC8vICAgICBtZXNoLmF0dGFjaFRvQm9uZSh0aGlzLnBsYXllci5tZXNoLnNrZWxldG9uLmJvbmVzW2JvbmVOdW1iZXJdLCB0aGlzLnBsYXllci5tZXNoKTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgICAgICAgICAgICAgIGJvbmVzTnVtYmVycy5mb3JFYWNoKChib25lTnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNyZWF0ZVRyYWlsTWVzaChnYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udHJhaWxCb3guYXR0YWNoVG9Cb25lKHRoaXMucGxheWVyLm1lc2guc2tlbGV0b24uYm9uZXNbYm9uZU51bWJlcl0sIHRoaXMucGxheWVyLm1lc2gpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZW1pdEVxdWlwKGl0ZW06IEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ2l0ZW1FcXVpcCcsIHtcbiAgICAgICAgICAgICAgICBpZDogaXRlbS5kYXRhYmFzZUlkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEVxdWlwZWRJdGVtcygpOiBBcnJheTxJdGVtPiB7XG4gICAgICAgICAgICBsZXQgZXF1aXBlZEl0ZW1zID0gW107XG5cbiAgICAgICAgICAgIGVxdWlwZWRJdGVtcy5wdXNoKHRoaXMuaGVsbSk7XG4gICAgICAgICAgICBlcXVpcGVkSXRlbXMucHVzaCh0aGlzLmFybW9yKTtcbiAgICAgICAgICAgIGVxdWlwZWRJdGVtcy5wdXNoKHRoaXMud2VhcG9uKTtcbiAgICAgICAgICAgIGVxdWlwZWRJdGVtcy5wdXNoKHRoaXMuc2hpZWxkKTtcbiAgICAgICAgICAgIGVxdWlwZWRJdGVtcy5wdXNoKHRoaXMuZ2xvdmVzKTtcbiAgICAgICAgICAgIGVxdWlwZWRJdGVtcy5wdXNoKHRoaXMuYm9vdHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gZXF1aXBlZEl0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNob3dTYXNoT3JIYWlyKHNob3dIYWlyOiBib29sZWFuLCBzaG93U2FzaDogYm9vbGVhbikge1xuXG4gICAgICAgICAgICAvL1RPRE86IEJ1Z2dlZCBoYWlyIGluIGNoYXJhY3RlclxuICAgICAgICAgICAgLy8gaWYgKHNob3dIYWlyKSB7XG4gICAgICAgICAgICAvLyAgICAgbGV0IGhlbG0gPSBuZXcgSXRlbSh0aGlzLmdhbWUsIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbmFtZTogXCJIYWlyXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIGltYWdlOiAnaGFpcicsXG4gICAgICAgICAgICAvLyAgICAgICAgIG1lc2hOYW1lOiAnaGFpcicsXG4gICAgICAgICAgICAvLyAgICAgICAgIHR5cGU6IDMsXG4gICAgICAgICAgICAvLyAgICAgICAgIGVudGl0eToge2lkOiAwfSxcbiAgICAgICAgICAgIC8vICAgICAgICAgc3RhdGlzdGljczogbnVsbFxuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICB0aGlzLmVxdWlwSXRlbShoZWxtLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgaWYgKHNob3dTYXNoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFybW9yID0gbmV3IEl0ZW0odGhpcy5nYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU2FzaFwiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogJ3Nhc2gnLFxuICAgICAgICAgICAgICAgICAgICBtZXNoTmFtZTogJ3Nhc2gnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiA2LFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IHtpZDogMH0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY3M6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZXF1aXBJdGVtKGFybW9yLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGRlbGV0ZVNhc2hBbmRIYWlyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVsbSAmJiB0aGlzLmhlbG0ubmFtZSA9PSBcIkhhaXJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVsbS5tZXNoLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYXJtb3IgJiYgdGhpcy5hcm1vci5uYW1lID09IFwiU2FzaFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcm1vci5tZXNoLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybnMge1BsYXllcn1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZW1vdmVJdGVtcygpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gaW52ZW50b3J5SXRlbXNcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRJdGVtcyhpbnZlbnRvcnlJdGVtczogQXJyYXk8YW55Pikge1xuICAgICAgICAgICAgaWYgKGludmVudG9yeUl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtTWFuYWdlciA9IG5ldyBJdGVtTWFuYWdlcihnYW1lKTtcblxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGVsZXRlU2FzaEFuZEhhaXIoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhckl0ZW1zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1NYW5hZ2VyLmluaXRJdGVtc0Zyb21EYXRhYmFzZU9uQ2hhcmFjdGVyKGludmVudG9yeUl0ZW1zLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdhbWUuZ3VpLmludmVudG9yeS5vcGVuZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmd1aS5pbnZlbnRvcnkucmVmcmVzaFBvcHVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vLi4vR2FtZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgSXRlbSB7XG4gICAgICAgIHB1YmxpYyB0eXBlOiBOdW1iZXI7XG4gICAgICAgIHB1YmxpYyBkYXRhYmFzZUlkOiBOdW1iZXI7XG4gICAgICAgIHB1YmxpYyBtZXNoOiBCQUJZTE9OLk1lc2g7XG4gICAgICAgIHB1YmxpYyBtZXNoTmFtZTogc3RyaW5nO1xuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgICAgICBwdWJsaWMgaW1hZ2U6IHN0cmluZztcbiAgICAgICAgcHVibGljIHN0YXRpc3RpY3M6IGFueTtcblxuICAgICAgICAvLy9UcmFpbCBFZmZlY3RcbiAgICAgICAgcHVibGljIHRyYWlsQm94OiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcbiAgICAgICAgcHVibGljIHRyYWlsTWVzaDogQkFCWUxPTi5UcmFpbE1lc2g7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgaXRlbURhdGE6IGFueSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gaXRlbURhdGEubmFtZTtcbiAgICAgICAgICAgIHRoaXMubWVzaE5hbWUgPSBpdGVtRGF0YS5tZXNoTmFtZTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpdGVtRGF0YS5pbWFnZTtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IGl0ZW1EYXRhLnR5cGU7XG4gICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSBpdGVtRGF0YS5zdGF0aXN0aWNzO1xuXG4gICAgICAgICAgICBpZiAoaXRlbURhdGEuZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZUlkID0gaXRlbURhdGEuZW50aXR5LmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGRpc3Bvc2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZXNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNoLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudHJhaWxCb3gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWlsQm94LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudHJhaWxNZXNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFpbE1lc2guZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGNyZWF0ZVRyYWlsTWVzaChnYW1lOiBHYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWlsQm94ID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveCgndGVzdCcsIDEsIGdhbWUuZ2V0QmFieWxvblNjZW5lKCksIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMudHJhaWxCb3gubGF5ZXJNYXNrID0gMjtcbiAgICAgICAgICAgIHRoaXMudHJhaWxCb3gudmlzaWJpbGl0eSA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMudHJhaWxNZXNoID0gbmV3IEJBQllMT04uVHJhaWxNZXNoKFwiVGVzdFwiLCB0aGlzLnRyYWlsQm94LCBnYW1lLmdldEJhYnlsb25TY2VuZSgpLCAwLjIsIDQwLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnRyYWlsTWVzaC5sYXllck1hc2sgPSAyO1xuICAgICAgICAgICAgdGhpcy50cmFpbE1lc2gudmlzaWJpbGl0eSA9IDA7XG5cbiAgICAgICAgICAgIGxldCBtYXRlcmlhbCA9ICBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKCd0cmFpbF9tYXRlcmlhbCcsIGdhbWUuZ2V0QmFieWxvblNjZW5lKCkpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IEJBQllMT04uQ29sb3IzLldoaXRlKCk7XG5cbiAgICAgICAgICAgIHRoaXMudHJhaWxNZXNoLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgICAgIH1cbiAgICB9XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi9HYW1lXCI7XG5pbXBvcnQge0l0ZW19IGZyb20gXCIuL0l0ZW1cIjtcbmltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi4vSW52ZW50b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBJdGVtTWFuYWdlciB7XG5cbiAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZTtcbiAgICBwcm90ZWN0ZWQgaXRlbXM6IEFycmF5PEl0ZW0+O1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBpbnZlbnRvcnlJdGVtc1xuICAgICAqIEBwYXJhbSBpbnZlbnRvcnlcbiAgICAgKiBAcGFyYW0gaGlkZVNoaWVsZEFuZFdlYXBvblxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0SXRlbXNGcm9tRGF0YWJhc2VPbkNoYXJhY3RlcihpbnZlbnRvcnlJdGVtczogQXJyYXk8YW55PiwgaW52ZW50b3J5OiBJbnZlbnRvcnksIGhpZGVTaGllbGRBbmRXZWFwb246IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzaG93U2FzaCA9IHRydWU7XG4gICAgICAgIGxldCBzaG93SGFpciA9IHRydWU7XG5cbiAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIGludmVudG9yeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW1EYXRhYmFzZSkge1xuICAgICAgICAgICAgICAgIGlmIChoaWRlU2hpZWxkQW5kV2VhcG9uICYmIChpdGVtRGF0YWJhc2UudHlwZSA9PSAyIHx8IGl0ZW1EYXRhYmFzZS50eXBlID09IDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtKHNlbGYuZ2FtZSwgaXRlbURhdGFiYXNlKTtcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnkuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlcXVpcCA9IGl0ZW1EYXRhYmFzZS5lbnRpdHkuZXF1aXA7XG4gICAgICAgICAgICAgICAgaW52ZW50b3J5LmVxdWlwSXRlbShpdGVtLCBlcXVpcCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09IDMgJiYgZXF1aXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0hhaXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09IDYgJiYgZXF1aXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Nhc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW52ZW50b3J5LnNob3dTYXNoT3JIYWlyKHNob3dIYWlyLCBzaG93U2FzaCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL0NoYXJhY3RlcnMvUGxheWVyXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi9HYW1lXCI7XG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4uLy4uL0V2ZW50cy9FdmVudHNcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcbmltcG9ydCB7QnV0dG9uLCBSZWN0YW5nbGUsIFRleHRCbG9jaywgQ29udHJvbCwgSW1hZ2UgfSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0U2tpbGwge1xuICAgIHN0YXRpYyBUWVBFID0gMDtcblxuICAgIHByb3RlY3RlZCBwbGF5ZXI6IFBsYXllcjtcbiAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZTtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBhbmltYXRpb25OYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGFuaW1hdGlvblNwZWVkOiBudW1iZXI7XG4gICAgcHVibGljIGFuaW1hdGlvblRpbWU6IG51bWJlcjtcbiAgICBwdWJsaWMgYW5pbWF0aW9uTG9vcDogYm9vbGVhbjtcblxuICAgIHByb3RlY3RlZCBlZmZlY3RFbWl0dGVyO1xuICAgIHByb3RlY3RlZCBpbWFnZTogc3RyaW5nO1xuICAgIHB1YmxpYyBpc1JlYWR5OiBib29sZWFuO1xuICAgIHB1YmxpYyBpc0luVXNlOiBib29sZWFuO1xuXG4gICAgLyoqIEdVSSAqL1xuICAgIHByb3RlY3RlZCBhbmltYXRpb25PdmVybGF5OiBCQUJZTE9OLkFuaW1hdGlvbjtcbiAgICBwcm90ZWN0ZWQgYW5pbWF0aW9uQWxwaGE6IEJBQllMT04uQW5pbWF0aW9uO1xuICAgIHByb3RlY3RlZCBndWlJbWFnZTogQnV0dG9uO1xuICAgIHByb3RlY3RlZCBndWlPdmVybGF5OiBSZWN0YW5nbGU7XG4gICAgcHJvdGVjdGVkIGd1aVRleHQ6IFRleHRCbG9jaztcblxuICAgIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTG9vcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5nYW1lID0gcGxheWVyLmdhbWU7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJEZWZhdWx0cyh0aGlzLmdhbWUpO1xuXG4gICAgICAgIGlmIChwbGF5ZXIuaXNDb250cm9sbGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2tpbGxJbWFnZUluR1VJKCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVySG90S2V5KCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQW5pbWF0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgZ2V0SW1hZ2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRUeXBlKCk7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2hvd0FuaW1hdGlvbihza2lsbFRpbWU6IG51bWJlciwgY29vbGRvd25UaW1lOiBudW1iZXIpO1xuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlZ2lzdGVyRGVmYXVsdHMoZ2FtZTogR2FtZSk7XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJIb3RLZXkoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgbGV0IGxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyID0gZ2FtZS5wbGF5ZXI7XG4gICAgICAgICAgICBzZWxmLmd1aUltYWdlLm9uUG9pbnRlclVwT2JzZXJ2YWJsZS5hZGQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzUmVhZHkgJiYgIXBsYXllci5pc0FueVNraWxsSXNJblVzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHBsYXllci5tb25zdGVyc1RvQXR0YWNrKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vbnN0ZXJUb0F0dGFjayA9IE9iamVjdC5rZXlzKHBsYXllci5tb25zdGVyc1RvQXR0YWNrKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRQb2ludCA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5lbmVtaWVzW21vbnN0ZXJUb0F0dGFja10ubWVzaEZvck1vdmUucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5tZXNoRm9yTW92ZS5sb29rQXQodGFyZ2V0UG9pbnQsIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBwbGF5ZXIubWVzaEZvck1vdmUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIGxldCByb3RhdGlvbiA9IHBsYXllci5tZXNoRm9yTW92ZS5yb3RhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcndhcmRzID0gbmV3IEJBQllMT04uVmVjdG9yMygtKE1hdGguc2luKHJvdGF0aW9uLnkpKSwgMCwgLShNYXRoLmNvcyhyb3RhdGlvbi55KSkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBwb3NpdGlvbi5hZGQoZm9yd2FyZHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCd1c2VTa2lsbCcsIHNlbGYuZ2V0VHlwZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ3NldFRhcmdldFBvaW50Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG5ld1Bvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucnVuUGxheWVyVG9Qb3NpdGlvbihuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKEV2ZW50cy5QTEFZRVJfQ09OTkVDVEVELCBsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRzLlBMQVlFUl9DT05ORUNURUQsIGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd1JlbG9hZEluR1VJKGNvb2xkb3duVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllci5pc0NvbnRyb2xsYWJsZSkge1xuICAgICAgICAgICAgY29uc3QgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3Qgc3BlZWRSYXRpbyA9IDEgLyBjb29sZG93blRpbWU7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcblxuICAgICAgICAgICAgZ2FtZS5nZXRCYWJ5bG9uU2NlbmUoKS5iZWdpbkRpcmVjdEFuaW1hdGlvbihzZWxmLmd1aU92ZXJsYXksIFtzZWxmLmFuaW1hdGlvbk92ZXJsYXldLCAwLCAzMCwgZmFsc2UsIHNwZWVkUmF0aW8sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnYW1lLmdldEJhYnlsb25TY2VuZSgpLmJlZ2luRGlyZWN0QW5pbWF0aW9uKHNlbGYuZ3VpSW1hZ2UsIFtzZWxmLmFuaW1hdGlvbkFscGhhXSwgMCwgMzAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZWxmLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU2tpbGxJbWFnZUluR1VJKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgbGV0IGltYWdlID0gdGhpcy5nZXRJbWFnZVVybCgpO1xuICAgICAgICBsZXQgbnVtYmVyID0gdGhpcy5nZXRUeXBlKCk7XG4gICAgICAgIGxldCBncmlkID0gZ2FtZS5ndWkucGxheWVyQm90dG9tUGFuZWwuZ3VpR3JpZFNraWxscztcblxuICAgICAgICBsZXQgaW1hZ2VTa2lsbCA9IEJ1dHRvbi5DcmVhdGVJbWFnZU9ubHlCdXR0b24oJ2ltYWdlXycgKyBudW1iZXIsIGltYWdlKTtcbiAgICAgICAgaW1hZ2VTa2lsbC53aWR0aCA9IDE7XG4gICAgICAgIGltYWdlU2tpbGwuaGVpZ2h0ID0gMTtcbiAgICAgICAgaW1hZ2VTa2lsbC50aGlja25lc3MgPSAwO1xuICAgICAgICBpbWFnZVNraWxsLmltYWdlLnN0cmV0Y2ggPSBJbWFnZS5TVFJFVENIX1VOSUZPUk07XG5cbiAgICAgICAgbGV0IG92ZXJsYXkgPSBuZXcgUmVjdGFuZ2xlKCk7XG4gICAgICAgIG92ZXJsYXkud2lkdGggPSAxO1xuICAgICAgICBvdmVybGF5LmhlaWdodCA9IDA7XG4gICAgICAgIG92ZXJsYXkuYWxwaGEgPSAwLjc7XG4gICAgICAgIG92ZXJsYXkuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIG92ZXJsYXkuYmFja2dyb3VuZCA9IFwiYmxhY2tcIjtcbiAgICAgICAgb3ZlcmxheS52ZXJ0aWNhbEFsaWdubWVudCA9IENvbnRyb2wuVkVSVElDQUxfQUxJR05NRU5UX0JPVFRPTTtcblxuICAgICAgICBncmlkLmFkZENvbnRyb2woaW1hZ2VTa2lsbCwgMCwgbnVtYmVyIC0gMSk7XG4gICAgICAgIGdyaWQuYWRkQ29udHJvbChvdmVybGF5LCAwLCBudW1iZXIgLSAxKTtcblxuICAgICAgICB0aGlzLmd1aUltYWdlID0gaW1hZ2VTa2lsbDtcbiAgICAgICAgdGhpcy5ndWlPdmVybGF5ID0gb3ZlcmxheTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyQW5pbWF0aW9ucygpIHtcbiAgICAgICAgbGV0IGFuaW1hdGlvbkFscGhhID0gbmV3IEJBQllMT04uQW5pbWF0aW9uKFwiYW5pbWF0aW9uQWxwaGFcIiwgXCJhbHBoYVwiLCAzMCwgQkFCWUxPTi5BbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgQkFCWUxPTi5BbmltYXRpb24uQU5JTUFUSU9OTE9PUE1PREVfQ1lDTEUpO1xuICAgICAgICBhbmltYXRpb25BbHBoYS5zZXRLZXlzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcmFtZTogMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcmFtZTogMTUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJhbWU6IDMwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuXG4gICAgICAgIGxldCBhbmltYXRpb25PdmVybGF5ID0gbmV3IEJBQllMT04uQW5pbWF0aW9uKFwiYW5pbWF0aW9uT3ZlcmxheVwiLCBcImhlaWdodFwiLCAzMCwgQkFCWUxPTi5BbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgQkFCWUxPTi5BbmltYXRpb24uQU5JTUFUSU9OTE9PUE1PREVfQ1lDTEUpO1xuICAgICAgICBhbmltYXRpb25PdmVybGF5LnNldEtleXMoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyYW1lOiAwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyYW1lOiAzMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25PdmVybGF5ID0gYW5pbWF0aW9uT3ZlcmxheTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25BbHBoYSA9IGFuaW1hdGlvbkFscGhhO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vLi4vR2FtZVwiO1xuaW1wb3J0IHtBYnN0cmFjdFNraWxsfSBmcm9tIFwiLi9BYnN0cmFjdFNraWxsXCI7XG5cbmV4cG9ydCBjbGFzcyBCbG9jayBleHRlbmRzIEFic3RyYWN0U2tpbGwge1xuICAgIHN0YXRpYyBUWVBFID0gMjtcblxuICAgIHB1YmxpYyBnZXRUeXBlKCkge1xuICAgICAgICByZXR1cm4gQmxvY2suVFlQRTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJEZWZhdWx0cyhnYW1lOiBHYW1lKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSAnYXNzZXRzL3NraWxscy9ibG9jay5wbmcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQmxvY2snO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbk5hbWUgPSAnYmxvY2tBJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25TcGVlZCA9IDE7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTG9vcCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93QW5pbWF0aW9uKHNraWxsVGltZTogbnVtYmVyLCBjb29sZG93blRpbWU6IG51bWJlcikge1xuICAgICAgICBjb25zdCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2hvd1JlbG9hZEluR1VJKGNvb2xkb3duVGltZSk7XG4gICAgICAgIHNlbGYucGxheWVyLnJ1bkFuaW1hdGlvblNraWxsKHRoaXMuYW5pbWF0aW9uTmFtZSwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5pc0luVXNlID0gdHJ1ZTtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5wbGF5ZXIubWVzaC5za2VsZXRvbi5iZWdpbkFuaW1hdGlvbignbG9vcEJsb2NrJywgdHJ1ZSk7XG4gICAgICAgIH0sIHRoaXMuYW5pbWF0aW9uTG9vcCwgdGhpcy5hbmltYXRpb25TcGVlZCwgZmFsc2UpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5wbGF5ZXIucnVuQW5pbWF0aW9uU2tpbGwoJ2Jsb2NrQicsIG51bGwsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmlzSW5Vc2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBza2lsbFRpbWUpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vLi4vR2FtZVwiO1xuaW1wb3J0IHtBYnN0cmFjdFNraWxsfSBmcm9tIFwiLi9BYnN0cmFjdFNraWxsXCI7XG5pbXBvcnQge0Fic3RyYWN0Q2hhcmFjdGVyfSBmcm9tIFwiLi4vLi4vQ2hhcmFjdGVycy9BYnN0cmFjdENoYXJhY3RlclwiO1xuaW1wb3J0IHtGYXN0QXR0YWNrIGFzIEZhc3RBdHRhY2tQYXJ0aWNsZX0gZnJvbSBcIi4uLy4uL1BhcnRpY2xlcy9Ta2lsbHMvRmFzdEF0dGFja1wiO1xuXG5leHBvcnQgY2xhc3MgRmFzdEF0dGFjayBleHRlbmRzIEFic3RyYWN0U2tpbGwge1xuICAgICAgICBzdGF0aWMgVFlQRSA9IDM7XG5cbiAgICAgICAgcHVibGljIGdldFR5cGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gRmFzdEF0dGFjay5UWVBFO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIHJlZ2lzdGVyRGVmYXVsdHMoZ2FtZTogR2FtZSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9ICdhc3NldHMvc2tpbGxzL2Zhc3RBdHRhY2sucG5nJztcbiAgICAgICAgICAgIHRoaXMubmFtZSA9ICdGYXN0IGF0dGFjayc7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbk5hbWUgPSBBYnN0cmFjdENoYXJhY3Rlci5BTklNQVRJT05fQVRUQUNLXzAxO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TcGVlZCA9IDEuNjtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uTG9vcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAxMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hvd0FuaW1hdGlvbihza2lsbFRpbWU6IG51bWJlciwgY29vbGRvd25UaW1lOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgb2JzZXJ2ZXI7XG4gICAgICAgICAgICB0aGlzLnNob3dSZWxvYWRJbkdVSShjb29sZG93blRpbWUpO1xuXG4gICAgICAgICAgICBpZihzZWxmLnBsYXllci5pbnZlbnRvcnkud2VhcG9uKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbi50cmFpbE1lc2guc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYucGxheWVyLnJ1bkFuaW1hdGlvblNraWxsKHRoaXMuYW5pbWF0aW9uTmFtZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHNlbGYucGxheWVyLmludmVudG9yeS53ZWFwb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbi50cmFpbE1lc2gudmlzaWJpbGl0eSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuaXNJblVzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYoc2VsZi5wbGF5ZXIuaXNDb250cm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ2F0dGFjaycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFBvaW50OiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmlzSW5Vc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbi50cmFpbE1lc2gudmlzaWJpbGl0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5pbnZlbnRvcnkud2VhcG9uLnRyYWlsTWVzaC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH0sIHRoaXMuYW5pbWF0aW9uTG9vcCwgdGhpcy5hbmltYXRpb25TcGVlZCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyLmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICB9LCBza2lsbFRpbWUpO1xuXG4gICAgICAgIH1cblxuICAgIH1cbiIsImltcG9ydCB7SGVhbCBhcyBIZWFsUGFydGljbGV9IGZyb20gXCIuLi8uLi9QYXJ0aWNsZXMvU2tpbGxzL0hlYWxcIjtcbmltcG9ydCB7QWJzdHJhY3RDaGFyYWN0ZXJ9IGZyb20gXCIuLi8uLi9DaGFyYWN0ZXJzL0Fic3RyYWN0Q2hhcmFjdGVyXCI7XG5pbXBvcnQge0Fic3RyYWN0U2tpbGx9IGZyb20gXCIuL0Fic3RyYWN0U2tpbGxcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uLy4uL0dhbWVcIjtcblxuZXhwb3J0IGNsYXNzIEhlYWwgZXh0ZW5kcyBBYnN0cmFjdFNraWxsIHtcbiAgICBzdGF0aWMgVFlQRSA9IDU7XG5cbiAgICBwdWJsaWMgZ2V0VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIEhlYWwuVFlQRTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJEZWZhdWx0cyhnYW1lOiBHYW1lKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSAnYXNzZXRzL3NraWxscy9oZWFsLnBuZyc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdIZWFsJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25OYW1lID0gQWJzdHJhY3RDaGFyYWN0ZXIuQU5JTUFUSU9OX1NUQU5EX1dFQVBPTjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25TcGVlZCA9IDI7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTG9vcCA9IHRydWU7XG4gICAgICAgIHRoaXMuZWZmZWN0RW1pdHRlciA9IG5ldyBIZWFsUGFydGljbGUoZ2FtZSwgdGhpcy5wbGF5ZXIubWVzaCk7XG4gICAgfVxuXG4gICAgc2hvd0FuaW1hdGlvbihza2lsbFRpbWU6IG51bWJlciwgY29vbGRvd25UaW1lOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNob3dSZWxvYWRJbkdVSShjb29sZG93blRpbWUpO1xuXG4gICAgICAgIGxldCBhbHBoYSA9IDA7XG4gICAgICAgIGxldCBhbmltYXRlRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmVmZmVjdEVtaXR0ZXIucGFydGljbGVTeXN0ZW0uZW1pdHRlci5wb3NpdGlvbi54ID0gMiAqIE1hdGguY29zKGFscGhhKTtcbiAgICAgICAgICAgIHNlbGYuZWZmZWN0RW1pdHRlci5wYXJ0aWNsZVN5c3RlbS5lbWl0dGVyLnBvc2l0aW9uLnkgPSAxO1xuICAgICAgICAgICAgc2VsZi5lZmZlY3RFbWl0dGVyLnBhcnRpY2xlU3lzdGVtLmVtaXR0ZXIucG9zaXRpb24ueiA9IDIgKiBNYXRoLnNpbihhbHBoYSk7XG5cbiAgICAgICAgICAgIGFscGhhICs9IDAuMjQgKiBnYW1lLmdldEJhYnlsb25TY2VuZSgpLmdldEFuaW1hdGlvblJhdGlvKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZi5wbGF5ZXIucnVuQW5pbWF0aW9uU2tpbGwoc2VsZi5hbmltYXRpb25OYW1lLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmVmZmVjdEVtaXR0ZXIucGFydGljbGVTeXN0ZW0uc3RhcnQoKTtcbiAgICAgICAgICAgIGdhbWUuZ2V0QmFieWxvblNjZW5lKCkucmVnaXN0ZXJCZWZvcmVSZW5kZXIoYW5pbWF0ZUZ1bmN0aW9uKTtcbiAgICAgICAgICAgIHNlbGYuaXNJblVzZSA9IHRydWU7XG4gICAgICAgIH0sIG51bGwsIHNlbGYuYW5pbWF0aW9uTG9vcCwgc2VsZi5hbmltYXRpb25TcGVlZCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnBsYXllci5hbmltYXRpb24uc3RvcCgpO1xuICAgICAgICAgICAgc2VsZi5lZmZlY3RFbWl0dGVyLnBhcnRpY2xlU3lzdGVtLnN0b3AoKTtcbiAgICAgICAgICAgIGdhbWUuZ2V0QmFieWxvblNjZW5lKCkudW5yZWdpc3RlckJlZm9yZVJlbmRlcihhbmltYXRlRnVuY3Rpb24pO1xuICAgICAgICAgICAgc2VsZi5pc0luVXNlID0gZmFsc2U7XG4gICAgICAgIH0sIHNraWxsVGltZSk7XG5cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7QWJzdHJhY3RTa2lsbH0gZnJvbSBcIi4vQWJzdHJhY3RTa2lsbFwiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vLi4vR2FtZVwiO1xuaW1wb3J0IHtBYnN0cmFjdENoYXJhY3Rlcn0gZnJvbSBcIi4uLy4uL0NoYXJhY3RlcnMvQWJzdHJhY3RDaGFyYWN0ZXJcIjtcbmltcG9ydCB7U2hpZWxkQXR0YWNrIGFzIFNoaWVsZEF0dGFja1BhcnRpY2xlfSBmcm9tIFwiLi4vLi4vUGFydGljbGVzL1NraWxscy9TaGllbGRBdHRhY2tcIjtcblxuZXhwb3J0IGNsYXNzIFNoaWVsZEF0dGFjayBleHRlbmRzIEFic3RyYWN0U2tpbGwge1xuICAgIHN0YXRpYyBUWVBFID0gNDtcblxuICAgIHB1YmxpYyBnZXRUeXBlKCkge1xuICAgICAgICByZXR1cm4gU2hpZWxkQXR0YWNrLlRZUEU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyRGVmYXVsdHMoZ2FtZTogR2FtZSkge1xuICAgICAgICB0aGlzLmltYWdlID0gJ2Fzc2V0cy9za2lsbHMvc2hpZWxkQXR0YWNrLnBuZyc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdTaGllbGQgYXR0YWNrJztcbiAgICAgICAgdGhpcy5hbmltYXRpb25OYW1lID0gQWJzdHJhY3RDaGFyYWN0ZXIuQU5JTUFUSU9OX1NLSUxMXzAxO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblNwZWVkID0gMTtcbiAgICAgICAgdGhpcy5lZmZlY3RFbWl0dGVyID0gbmV3IFNoaWVsZEF0dGFja1BhcnRpY2xlKGdhbWUsIHRoaXMucGxheWVyLm1lc2gpO1xuICAgIH1cblxuICAgIHNob3dBbmltYXRpb24oc2tpbGxUaW1lOiBudW1iZXIsIGNvb2xkb3duVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zaG93UmVsb2FkSW5HVUkoY29vbGRvd25UaW1lKTtcblxuICAgICAgICBzZWxmLnBsYXllci5ydW5BbmltYXRpb25Ta2lsbCh0aGlzLmFuaW1hdGlvbk5hbWUsICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuaXNJblVzZSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmVmZmVjdEVtaXR0ZXIucGFydGljbGVTeXN0ZW0uc3RhcnQoKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnBsYXllci5pc0NvbnRyb2xsYWJsZSkge1xuICAgICAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdhdHRhY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFBvaW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuaXNJblVzZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2VsZi5lZmZlY3RFbWl0dGVyLnBhcnRpY2xlU3lzdGVtLnN0b3AoKTtcbiAgICAgICAgfSwgdGhpcy5hbmltYXRpb25Mb29wLCB0aGlzLmFuaW1hdGlvblNwZWVkKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYucGxheWVyLmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIH0sIHNraWxsVGltZSk7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQge0hlYWx9IGZyb20gXCIuL0hlYWxcIjtcbmltcG9ydCB7U3Ryb25nQXR0YWNrfSBmcm9tIFwiLi9TdHJvbmdBdHRhY2tcIjtcbmltcG9ydCB7QmxvY2t9IGZyb20gXCIuL0Jsb2NrXCI7XG5pbXBvcnQge0Zhc3RBdHRhY2t9IGZyb20gXCIuL0Zhc3RBdHRhY2tcIjtcbmltcG9ydCB7U2hpZWxkQXR0YWNrfSBmcm9tIFwiLi9TaGllbGRBdHRhY2tcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vQ2hhcmFjdGVycy9QbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIFNraWxsc01hbmFnZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRTa2lsbCh0eXBlOiBudW1iZXIsIHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIGxldCBza2lsbCA9IG51bGw7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEhlYWwuVFlQRTpcbiAgICAgICAgICAgICAgICBza2lsbCA9IG5ldyBIZWFsKHBsYXllcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFN0cm9uZ0F0dGFjay5UWVBFOlxuICAgICAgICAgICAgICAgIHNraWxsID0gbmV3IFN0cm9uZ0F0dGFjayhwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBCbG9jay5UWVBFOlxuICAgICAgICAgICAgICAgIHNraWxsID0gbmV3IEJsb2NrKHBsYXllcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZhc3RBdHRhY2suVFlQRTpcbiAgICAgICAgICAgICAgICBza2lsbCA9IG5ldyBGYXN0QXR0YWNrKHBsYXllcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNoaWVsZEF0dGFjay5UWVBFOlxuICAgICAgICAgICAgICAgIHNraWxsID0gbmV3IFNoaWVsZEF0dGFjayhwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNraWxsO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vLi4vR2FtZVwiO1xuaW1wb3J0IHtBYnN0cmFjdFNraWxsfSBmcm9tIFwiLi9BYnN0cmFjdFNraWxsXCI7XG5cbmV4cG9ydCBjbGFzcyBTdHJvbmdBdHRhY2sgZXh0ZW5kcyBBYnN0cmFjdFNraWxsIHtcbiAgICBzdGF0aWMgVFlQRSA9IDE7XG5cbiAgICBwdWJsaWMgZ2V0VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIFN0cm9uZ0F0dGFjay5UWVBFO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWdpc3RlckRlZmF1bHRzKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9ICdhc3NldHMvc2tpbGxzL3N0cm9uZ0F0dGFjay5wbmcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQmxvY2snO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbk5hbWUgPSAnc3Ryb25nQXR0YWNrQSc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU3BlZWQgPSAxO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAyMDAwO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0FuaW1hdGlvbihza2lsbFRpbWU6IG51bWJlciwgY29vbGRvd25UaW1lOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgb2JzZXJ2ZXI7XG4gICAgICAgIHRoaXMuc2hvd1JlbG9hZEluR1VJKGNvb2xkb3duVGltZSk7XG5cbiAgICAgICAgc2VsZi5wbGF5ZXIucnVuQW5pbWF0aW9uU2tpbGwodGhpcy5hbmltYXRpb25OYW1lLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmlzSW5Vc2UgPSB0cnVlO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnBsYXllci5tZXNoLnNrZWxldG9uLmJlZ2luQW5pbWF0aW9uKCdsb29wU3Ryb25nQXR0YWNrJywgdHJ1ZSk7XG4gICAgICAgIH0sIHRoaXMuYW5pbWF0aW9uTG9vcCwgdGhpcy5hbmltYXRpb25TcGVlZCwgZmFsc2UpO1xuXG4gICAgICAgIGlmIChzZWxmLnBsYXllci5pbnZlbnRvcnkud2VhcG9uKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXllci5pbnZlbnRvcnkud2VhcG9uLnRyYWlsTWVzaC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNlbGYucGxheWVyLmludmVudG9yeS53ZWFwb24pIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5pbnZlbnRvcnkud2VhcG9uLnRyYWlsTWVzaC52aXNpYmlsaXR5ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYucGxheWVyLnJ1bkFuaW1hdGlvblNraWxsKCdzdHJvbmdBdHRhY2tCJywgbnVsbCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuaXNJblVzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXIuaW52ZW50b3J5LndlYXBvbi50cmFpbE1lc2gudmlzaWJpbGl0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXllci5pbnZlbnRvcnkud2VhcG9uLnRyYWlsTWVzaC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc2VsZi5wbGF5ZXIuaXNDb250cm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgnYXR0YWNrJywge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRQb2ludDogbnVsbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBza2lsbFRpbWUpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTY2VuZX0gZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcbmltcG9ydCB7IFdhdGVyTWF0ZXJpYWwgfSBmcm9tICdiYWJ5bG9uanMtbWF0ZXJpYWxzJztcbmltcG9ydCB7RW52aXJvbm1lbnRDYXZlRXhpdH0gZnJvbSBcIi4vTW91bnRhaW5zL0NhdmVFeGl0L0Vudmlyb25tZW50Q2F2ZUV4aXRcIjtcbmltcG9ydCB7Rm9nfSBmcm9tIFwiLi4vUGFydGljbGVzL0ZvZ1wiO1xuXG5leHBvcnQgY2xhc3MgQmF0dGxlZ3JvdW5kIGV4dGVuZHMgU2NlbmUge1xuXG4gICAgc3RhdGljIFRZUEUgPSA5OTtcblxuICAgIGluaXRTY2VuZShnYW1lOiBHYW1lKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNjZW5lID0gbmV3IEJBQllMT04uU2NlbmUoZ2FtZS5lbmdpbmUpO1xuICAgICAgICBsZXQgZ3JvdW5kO1xuICAgICAgICBzZWxmXG4gICAgICAgICAgICAuc2V0RGVmYXVsdHMoZ2FtZSwgc2NlbmUpXG4gICAgICAgICAgICAuZXhlY3V0ZVdoZW5SZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpZ2h0ID0gbmV3IEJBQllMT04uRGlyZWN0aW9uYWxMaWdodChcIkRpcmVjdGlvbmFsTGlnaHRcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAtMSwgMCksIHNjZW5lKTtcbiAgICAgICAgICAgICAgICBsaWdodC5pbnRlbnNpdHkgPSAwLjQ7XG4gICAgICAgICAgICAgICAgbGlnaHQucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUwLCAwKTtcbiAgICAgICAgICAgICAgICBsaWdodC5kaXJlY3Rpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAuNDUsIC0yLjUsIDApO1xuXG4gICAgICAgICAgICAgICAgZ3JvdW5kID0gQkFCWUxPTi5NZXNoQnVpbGRlci5DcmVhdGVHcm91bmQoXCJHcm91bmRcIiwge3dpZHRoOiAyNTYsIGhlaWdodDogMjU2fSwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIGdyb3VuZC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihzY2VuZSk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50Q2F2ZUV4aXQoZ2FtZSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIHZhciB3YXRlck1hdGVyaWFsID0gbmV3IFdhdGVyTWF0ZXJpYWwoXCJ3YXRlck1hdGVyaWFsXCIsIHNjZW5lLCBuZXcgQkFCWUxPTi5WZWN0b3IyKDUxMiwgNTEyKSk7XG4gICAgICAgICAgICAgICAgd2F0ZXJNYXRlcmlhbC5idW1wVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCIvL3d3dy5iYWJ5bG9uanMuY29tL2Fzc2V0cy93YXRlcmJ1bXAucG5nXCIsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICB3YXRlck1hdGVyaWFsLndpbmRGb3JjZSA9IC01O1xuICAgICAgICAgICAgICAgIHdhdGVyTWF0ZXJpYWwud2F2ZUhlaWdodCA9IDAuMDU7XG4gICAgICAgICAgICAgICAgd2F0ZXJNYXRlcmlhbC5idW1wSGVpZ2h0ID0gMC4wNTtcbiAgICAgICAgICAgICAgICB3YXRlck1hdGVyaWFsLndhdmVMZW5ndGggPSAwLjE7XG4gICAgICAgICAgICAgICAgd2F0ZXJNYXRlcmlhbC53YXZlU3BlZWQgPSAxLjA7XG4gICAgICAgICAgICAgICAgd2F0ZXJNYXRlcmlhbC5jb2xvckJsZW5kRmFjdG9yID0gMC4xO1xuICAgICAgICAgICAgICAgIHdhdGVyTWF0ZXJpYWwud2F0ZXJDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygwLjEsIDEsIDEpO1xuICAgICAgICAgICAgICAgIHZhciB3YXRlck1lc2ggPSBCQUJZTE9OLk1lc2guQ3JlYXRlR3JvdW5kKFwid2F0ZXJNZXNoXCIsIDI1NiwgMjU2LCAzMiwgc2NlbmUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB3YXRlck1lc2gucG9zaXRpb24ueSA9IDAuNTtcbiAgICAgICAgICAgICAgICB3YXRlck1lc2gubWF0ZXJpYWwgPSB3YXRlck1hdGVyaWFsO1xuICAgICAgICAgICAgICAgIHdhdGVyTWVzaC5sYXllck1hc2sgPSAyO1xuICAgICAgICAgICAgICAgIHdhdGVyTWVzaC5pc1BpY2thYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gQ29uZmlndXJlIHdhdGVyIG1hdGVyaWFsXG4gICAgICAgICAgICAgICAgd2F0ZXJNYXRlcmlhbC5hZGRUb1JlbmRlckxpc3QoZ3JvdW5kKTtcbiAgICAgICAgICAgICAgICB3YXRlck1hdGVyaWFsLmFkZFRvUmVuZGVyTGlzdChzZWxmLmdhbWUucGxheWVyLm1lc2gpO1xuICAgICAgICAgICAgICAgIC8vIC8vIHdhdGVyTWF0ZXJpYWwuYWRkVG9SZW5kZXJMaXN0KHNreWJveCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcGxhbmUgPSBCQUJZTE9OLk1lc2guQ3JlYXRlUGxhbmUoXCJlbnRyYWNlXCIsIDE2LCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgcGxhbmUucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0yMCwgMiwgMTYpO1xuICAgICAgICAgICAgICAgIHBsYW5lLmxheWVyTWFzayA9IDI7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTY2VuZX0gZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCB7RW52aXJvbm1lbnRGb3Jlc3RIb3VzZX0gZnJvbSBcIi4uL0Vudmlyb25tZW50L2Vudmlyb25tZW50Rm9yZXN0SG91c2VcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIEZvcmVzdEhvdXNlIGV4dGVuZHMgU2NlbmUge1xuXG4gICAgc3RhdGljIFRZUEUgPSAyO1xuXG4gICAgaW5pdFNjZW5lKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBCQUJZTE9OLlNjZW5lTG9hZGVyLkxvYWQoXCJhc3NldHMvc2NlbmVzL0ZvcmVzdF9ob3VzZS9cIiwgXCJGb3Jlc3RfaG91c2UuYmFieWxvblwiLCBnYW1lLmVuZ2luZSwgZnVuY3Rpb24gKHNjZW5lKSB7XG4gICAgICAgICAgICBzZWxmXG4gICAgICAgICAgICAgICAgLnNldERlZmF1bHRzKGdhbWUsIHNjZW5lKVxuICAgICAgICAgICAgICAgIC5leGVjdXRlV2hlblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudEZvcmVzdEhvdXNlKGdhbWUpO1xuICAgICAgICAgICAgICAgIH0sIG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U2NlbmV9IGZyb20gXCIuL1NjZW5lXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge0Vudmlyb25tZW50Rm9yZXN0SG91c2VTdGFydH0gZnJvbSBcIi4uL0Vudmlyb25tZW50L2Vudmlyb25tZW50Rm9yZXN0SG91c2VTdGFydFwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgRm9yZXN0SG91c2VTdGFydCBleHRlbmRzIFNjZW5lIHtcblxuICAgIHN0YXRpYyBUWVBFID0gMTtcblxuICAgIGluaXRTY2VuZShnYW1lOiBHYW1lKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgQkFCWUxPTi5TY2VuZUxvYWRlci5Mb2FkKFwiYXNzZXRzL3NjZW5lcy9mb3Jlc3RTdGFydEhvdXNlL1wiLCBcImZvcmVzdEhvdXNlU3RhcnQuYmFieWxvblwiLCBnYW1lLmVuZ2luZSwgZnVuY3Rpb24gKHNjZW5lKSB7XG4gICAgICAgICAgICBzZWxmXG4gICAgICAgICAgICAgICAgLnNldERlZmF1bHRzKGdhbWUsIHNjZW5lKVxuICAgICAgICAgICAgICAgIC5leGVjdXRlV2hlblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudEZvcmVzdEhvdXNlU3RhcnQoZ2FtZSk7XG4gICAgICAgICAgICAgICAgfSwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtFbnZpcm9ubWVudEZvcmVzdEhvdXNlVG9tYn0gZnJvbSBcIi4uL0Vudmlyb25tZW50L2Vudmlyb25tZW50Rm9yZXN0SG91c2VUb21iXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge1NjZW5lfSBmcm9tIFwiLi9TY2VuZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgRm9yZXN0SG91c2VUb21iIGV4dGVuZHMgU2NlbmUge1xuXG4gICAgc3RhdGljIFRZUEUgPSAzO1xuXG4gICAgaW5pdFNjZW5lKGdhbWU6IEdhbWUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIEJBQllMT04uU2NlbmVMb2FkZXIuTG9hZChcImFzc2V0cy9zY2VuZXMvRm9yZXN0X0hvdXNlX1RvbWIvXCIsIFwiRm9yZXN0X0hvdXNlX1RvbWIuYmFieWxvblwiLCBnYW1lLmVuZ2luZSwgZnVuY3Rpb24gKHNjZW5lKSB7XG4gICAgICAgICAgICBzZWxmXG4gICAgICAgICAgICAgICAgLnNldERlZmF1bHRzKGdhbWUsIHNjZW5lKVxuICAgICAgICAgICAgICAgIC5leGVjdXRlV2hlblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudEZvcmVzdEhvdXNlVG9tYihnYW1lLCBzY2VuZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGl0ZW0gPSBuZXcgSXRlbXMuSXRlbShnYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBuYW1lOiAnTG9uZ1N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGltYWdlOiAnc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHN0YXRpc3RpY3M6IHt9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWVzaE5hbWU6ICdzd29yZExvbmcnLFxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSXRlbXMuRHJvcHBlZEl0ZW0uc2hvd0l0ZW0oZ2FtZSwgaXRlbSwge3g6IDIsIHo6LTN9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGl0ZW0gPSBuZXcgSXRlbXMuSXRlbShnYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBuYW1lOiAnc2hpZWxkV29vZGVuU21hbGwnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW1hZ2U6ICdzaGllbGRXb29kZW5TbWFsbCcsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3RhdGlzdGljczoge30sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBtZXNoTmFtZTogJ3NoaWVsZFdvb2RlblNtYWxsJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEl0ZW1zLkRyb3BwZWRJdGVtLnNob3dJdGVtKGdhbWUsIGl0ZW0sIHt4OiA0LCB6Oi03fSwgMCk7XG4gICAgICAgICAgICAgICAgfSwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtGb3Jlc3RIb3VzZX0gZnJvbSBcIi4vRm9yZXN0SG91c2VcIjtcbmltcG9ydCB7Rm9yZXN0SG91c2VTdGFydH0gZnJvbSBcIi4vRm9yZXN0SG91c2VTdGFydFwiO1xuaW1wb3J0IHtGb3Jlc3RIb3VzZVRvbWJ9IGZyb20gXCIuL0ZvcmVzdEhvdXNlVG9tYlwiO1xuaW1wb3J0IHtTZWxlY3RDaGFyYWN0ZXJ9IGZyb20gXCIuL1NlbGVjdENoYXJhY3RlclwiO1xuaW1wb3J0IHtCYXR0bGVncm91bmR9IGZyb20gXCIuL0JhdHRsZWdyb3VuZFwiO1xuaW1wb3J0IHtNb3VudGFpbnNQYXNzfSBmcm9tIFwiLi9Nb3VudGFpbnNQYXNzXCI7XG5pbXBvcnQge1NjZW5lfSBmcm9tIFwiLi9TY2VuZVwiO1xuaW1wb3J0IHtDYXZlRXhpdH0gZnJvbSBcIi4vTW91bnRhaW5zL0NhdmVFeGl0L0NhdmVFeGl0XCI7XG5pbXBvcnQge0FyZW5hfSBmcm9tIFwiLi9Nb3VudGFpbnMvVG93bi9BcmVuYVwiO1xuXG5leHBvcnQgY2xhc3MgTWFuYWdlciB7XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBmYWN0b3J5KHNjZW5lVHlwZTogbnVtYmVyKTogU2NlbmUge1xuICAgICAgICAgICAgbGV0IHNjZW5lID0gbnVsbDtcblxuICAgICAgICAgICAgc3dpdGNoIChzY2VuZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEZvcmVzdEhvdXNlLlRZUEU6XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IEZvcmVzdEhvdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRm9yZXN0SG91c2VTdGFydC5UWVBFOlxuICAgICAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBGb3Jlc3RIb3VzZVN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRm9yZXN0SG91c2VUb21iLlRZUEU6XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IEZvcmVzdEhvdXNlVG9tYigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFNlbGVjdENoYXJhY3Rlci5UWVBFOlxuICAgICAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBTZWxlY3RDaGFyYWN0ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBCYXR0bGVncm91bmQuVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUgPSBuZXcgQmF0dGxlZ3JvdW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgTW91bnRhaW5zUGFzcy5UWVBFOlxuICAgICAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBNb3VudGFpbnNQYXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ2F2ZUV4aXQuVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUgPSBuZXcgQ2F2ZUV4aXQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBcmVuYS5UWVBFOlxuICAgICAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBBcmVuYSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzY2VuZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1dyb25nIHNjZW5lIHR5cGUuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzY2VuZTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG4iLCJpbXBvcnQge1NjZW5lfSBmcm9tIFwiLi4vLi4vU2NlbmVcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uLy4uLy4uL0dhbWVcIjtcbmltcG9ydCB7RW52aXJvbm1lbnRDYXZlRXhpdH0gZnJvbSBcIi4vRW52aXJvbm1lbnRDYXZlRXhpdFwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgQ2F2ZUV4aXQgZXh0ZW5kcyBTY2VuZSB7XG5cbiAgICBzdGF0aWMgVFlQRSA9IDY7XG5cbiAgICBpbml0U2NlbmUoZ2FtZTogR2FtZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIEJBQllMT04uU2NlbmVMb2FkZXIuTG9hZChcImFzc2V0cy9zY2VuZXMvY2F2ZUV4aXQvXCIsIFwiY2F2ZUV4aXQuYmFieWxvblwiLCBnYW1lLmVuZ2luZSwgZnVuY3Rpb24gKHNjZW5lKSB7XG4gICAgICAgICAgICBzZWxmXG4gICAgICAgICAgICAgICAgLnNldERlZmF1bHRzKGdhbWUsIHNjZW5lKVxuICAgICAgICAgICAgICAgIC5leGVjdXRlV2hlblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudENhdmVFeGl0KGdhbWUpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXcgTlBDLkd1YXJkKGdhbWUsIG5ldyBCQUJZTE9OLlZlY3RvcjMoLTExNywgMCwgMTI4KSwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAtNC4zLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldyBOUEMuVHJhZGVyKGdhbWUsIG5ldyBCQUJZTE9OLlZlY3RvcjMoLTEyMiwgMCwgLTE2KSwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLjcsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmV3IE5QQy5CaWdXYXJyaW9yKGdhbWUsIG5ldyBCQUJZTE9OLlZlY3RvcjMoLTEwLCAwLCAtNTMpLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEuNTQsIDApKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7TW91bnRhaW5zRW52aXJvbm1lbnR9IGZyb20gXCIuLi9Nb3VudGFpbnNFbnZpcm9ubWVudFwiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vLi4vLi4vR2FtZVwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnRDYXZlRXhpdCBleHRlbmRzIE1vdW50YWluc0Vudmlyb25tZW50IHtcblxuICAgIGNvbGxpZGVyczogQXJyYXk8QkFCWUxPTi5BYnN0cmFjdE1lc2g+O1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBzY2VuZSA9IGdhbWUuZ2V0QmFieWxvblNjZW5lKCk7XG4gICAgICAgIHRoaXMuY29sbGlkZXJzID0gW107XG4gICAgICAgIHNjZW5lLmdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC05LjgxLCAwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuZS5tZXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzY2VuZU1lc2ggPSA8QkFCWUxPTi5NZXNoPiBzY2VuZS5tZXNoZXNbaV07XG4gICAgICAgICAgICBsZXQgbWVzaE5hbWUgPSBzY2VuZS5tZXNoZXNbaV1bJ25hbWUnXTtcbiAgICAgICAgICAgIGlmIChtZXNoTmFtZS5zZWFyY2goXCJHcm91bmRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihzY2VuZSk7XG4gICAgICAgICAgICAgICAgc2NlbmVNZXNoLnJlY2VpdmVTaGFkb3dzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2guYWx3YXlzU2VsZWN0QXNBY3RpdmVNZXNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzY2VuZU1lc2gubWF0ZXJpYWwgPSB0aGlzLmNyZWF0ZVN0ZW5jaWxNYXRlcmlhbCgnL2Fzc2V0cy9zY2VuZXMvY2F2ZUV4aXQvc3RlbmNpbDEucG5nJywgc2NlbmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kID0gc2NlbmVNZXNoO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc2hOYW1lLnNlYXJjaChcIkJveF9DdWJlXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVycy5wdXNoKHNjZW5lTWVzaCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5pc1BpY2thYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAobWVzaE5hbWUuc2VhcmNoKFwiUm9ja1wiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhZG93T2JqZWN0cy5wdXNoKHNjZW5lTWVzaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZURlZmF1bHRMaWdodChzY2VuZSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb2xsaWRlcnMoc2NlbmUpO1xuICAgICAgICB0aGlzLmZyZWV6ZUFsbE1lc2hlcyhzY2VuZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU3RlY25pbChzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQge0Fic3RyYWN0RW52aXJvbm1lbnR9IGZyb20gXCIuLi8uLi9FbnZpcm9ubWVudC9BYnN0cmFjdEVudmlyb25tZW50XCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5pbXBvcnQge1RlcnJhaW5NYXRlcmlhbH0gIGZyb20gJ2JhYnlsb25qcy1tYXRlcmlhbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTW91bnRhaW5zRW52aXJvbm1lbnQgZXh0ZW5kcyBBYnN0cmFjdEVudmlyb25tZW50IHtcblxuICAgIHByb3RlY3RlZCBjcmVhdGVTdGVuY2lsTWF0ZXJpYWwoc3RlbmNpbFVybDogc3RyaW5nLCBzY2VuZTogQkFCWUxPTi5TY2VuZSk6IFRlcnJhaW5NYXRlcmlhbCB7XG4gICAgICAgIGxldCB0ZXJyYWluTWF0ZXJpYWwgPSBuZXcgVGVycmFpbk1hdGVyaWFsKFwidGVycmFpbk1hdGVyaWFsXCIsIHNjZW5lKTtcbiAgICAgICAgdGVycmFpbk1hdGVyaWFsLm1peFRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKHN0ZW5jaWxVcmwsIHNjZW5lKTtcbiAgICAgICAgdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoXCJhc3NldHMvRW52aXJvbm1lbnQvU3RlbmNpbC9Nb3VudGFpbnMvZGlydC5qcGdcIiwgc2NlbmUpO1xuICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUyID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9FbnZpcm9ubWVudC9TdGVuY2lsL01vdW50YWlucy9ncmFzcy5qcGdcIiwgc2NlbmUpO1xuICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUzID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9FbnZpcm9ubWVudC9TdGVuY2lsL01vdW50YWlucy9yb2NrLmpwZ1wiLCBzY2VuZSk7XG4gICAgICAgIHRlcnJhaW5NYXRlcmlhbC5idW1wVGV4dHVyZTEgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL0Vudmlyb25tZW50L1N0ZW5jaWwvTW91bnRhaW5zL2RpcnRfbm9ybWFsLmpwZ1wiLCBzY2VuZSk7XG4gICAgICAgIHRlcnJhaW5NYXRlcmlhbC5idW1wVGV4dHVyZTIgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL0Vudmlyb25tZW50L1N0ZW5jaWwvTW91bnRhaW5zL2dyYXNzX25vcm1hbC5qcGdcIiwgc2NlbmUpO1xuICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuYnVtcFRleHR1cmUzID0gbmV3IEJBQllMT04uVGV4dHVyZShcImFzc2V0cy9FbnZpcm9ubWVudC9TdGVuY2lsL01vdW50YWlucy9yb2NrX25vcm1hbC5qcGdcIiwgc2NlbmUpO1xuICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUxLnVTY2FsZSA9IHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTEudlNjYWxlID0gMjA7XG4gICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTIudVNjYWxlID0gdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMi52U2NhbGUgPSAyMDtcbiAgICAgICAgdGVycmFpbk1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlMy51U2NhbGUgPSB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUzLnZTY2FsZSA9IDIwO1xuXG5cbiAgICAgICAgcmV0dXJuIHRlcnJhaW5NYXRlcmlhbDtcbiAgICB9XG59XG4iLCJpbXBvcnQge1NjZW5lfSBmcm9tIFwiLi4vLi4vU2NlbmVcIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uLy4uLy4uL0dhbWVcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcblxuZXhwb3J0IGNsYXNzIEFyZW5hIGV4dGVuZHMgU2NlbmUge1xuXG4gICAgc3RhdGljIFRZUEUgPSA5ODtcblxuICAgIGluaXRTY2VuZShnYW1lOiBHYW1lKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNjZW5lID0gbmV3IEJBQllMT04uU2NlbmUoZ2FtZS5lbmdpbmUpO1xuICAgICAgICBzZWxmXG4gICAgICAgICAgICAuc2V0RGVmYXVsdHMoZ2FtZSwgc2NlbmUpXG4gICAgICAgICAgICAuZXhlY3V0ZVdoZW5SZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpZ2h0ID0gbmV3IEJBQllMT04uRGlyZWN0aW9uYWxMaWdodChcIkRpcmVjdGlvbmFsTGlnaHRcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAtMSwgMCksIHNjZW5lKTtcbiAgICAgICAgICAgICAgICBsaWdodC5pbnRlbnNpdHkgPSAxO1xuICAgICAgICAgICAgICAgIGxpZ2h0LnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCA1MCwgMCk7XG4gICAgICAgICAgICAgICAgbGlnaHQuZGlyZWN0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLjQ1LCAtMi41LCAwKTtcblxuICAgICAgICAgICAgICAgIGxldCBncm91bmQgPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUdyb3VuZChcIkdyb3VuZFwiLCB7d2lkdGg6IDQ4LCBoZWlnaHQ6IDQ4fSwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIGdyb3VuZC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihzY2VuZSk7XG4gICAgICAgICAgICAgICAgbGV0IHRlcnJhaW5NYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJHcm91bmRNYXRlcmlhbFwiLCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgdGVycmFpbk1hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgdGVycmFpbk1hdGVyaWFsLnNwZWN1bGFyUG93ZXIgPSAxMDtcbiAgICAgICAgICAgICAgICB0ZXJyYWluTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiYXNzZXRzL3NjZW5lcy9Gb3Jlc3RfaG91c2UvZGlydC5qcGdcIiwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIHRlcnJhaW5NYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS5zY2FsZSgyMCk7XG4gICAgICAgICAgICAgICAgZ3JvdW5kLnJlY2VpdmVTaGFkb3dzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBncm91bmQubWF0ZXJpYWwgPSB0ZXJyYWluTWF0ZXJpYWw7XG5cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIGdhbWUucGxheWVyLnBsYXllckxpZ2h0LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NjZW5lfSBmcm9tIFwiLi9TY2VuZVwiO1xuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtFbnZpcm9ubWVudE1vdW50YWluc1Bhc3N9IGZyb20gXCIuLi9FbnZpcm9ubWVudC9lbnZpcm9ubWVudE1vdW50YWluc1Bhc3NcIjtcbmltcG9ydCB7R3VhcmR9IGZyb20gXCIuLi9DaGFyYWN0ZXJzL25wYy9HdWFyZFwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgTW91bnRhaW5zUGFzcyBleHRlbmRzIFNjZW5lIHtcblxuICAgIHN0YXRpYyBUWVBFID0gNTtcblxuICAgIGluaXRTY2VuZShnYW1lOiBHYW1lKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgQkFCWUxPTi5TY2VuZUxvYWRlci5Mb2FkKFwiYXNzZXRzL3NjZW5lcy9Nb3VudGFpbnNQYXNzL1wiLCBcIk1vdW50YWluc1Bhc3MuYmFieWxvblwiLCBnYW1lLmVuZ2luZSwgZnVuY3Rpb24gKHNjZW5lKSB7XG4gICAgICAgICAgICBzZWxmXG4gICAgICAgICAgICAgICAgLnNldERlZmF1bHRzKGdhbWUsIHNjZW5lKVxuICAgICAgICAgICAgICAgIC5leGVjdXRlV2hlblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudE1vdW50YWluc1Bhc3MoZ2FtZSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBHdWFyZChnYW1lLCBuZXcgQkFCWUxPTi5WZWN0b3IzKC0xMTcsIDAsIDEyOCksIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgLTQuMywgMCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXcgTlBDLlRyYWRlcihnYW1lLCBuZXcgQkFCWUxPTi5WZWN0b3IzKC0xMjIsIDAsIC0xNiksIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMC43LCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldyBOUEMuQmlnV2FycmlvcihnYW1lLCBuZXcgQkFCWUxPTi5WZWN0b3IzKC0xMCwgMCwgLTUzKSwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAxLjU0LCAwKSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQge0NoZXN0IGFzIENoZXN0c09iamVjdHN9IGZyb20gXCIuLi9Jbml0aWFsaXplcnMvQ2hlc3RcIjtcbmltcG9ydCB7UmFuZG9tU3BlY2lhbEl0ZW19IGZyb20gXCIuLi9Jbml0aWFsaXplcnMvUmFuZG9tU3BlY2lhbEl0ZW1cIjtcbmltcG9ydCB7U2xhdnNMb2FkZXJ9IGZyb20gXCIuLi9Mb2FkZXIvU2xhdnNMb2FkZXJcIjtcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi4vRXZlbnRzL0V2ZW50c1wiO1xuaW1wb3J0IHtHYW1lT3B0aW9uc30gZnJvbSBcIi4uL09wdGlvbnMvT3B0aW9uc1wiO1xuaW1wb3J0IHtBYnN0cmFjdEVudmlyb25tZW50fSBmcm9tIFwiLi4vRW52aXJvbm1lbnQvQWJzdHJhY3RFbnZpcm9ubWVudFwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9DaGFyYWN0ZXJzL1BsYXllclwiO1xuaW1wb3J0IHtNb25zdGVyfSBmcm9tIFwiLi4vQ2hhcmFjdGVycy9Nb25zdGVyXCI7XG5pbXBvcnQge1F1ZXN0c30gZnJvbSBcIi4uL0luaXRpYWxpemVycy9RdWVzdHNcIjtcbmltcG9ydCB7QWJzdHJhY3ROcGN9IGZyb20gXCIuLi9DaGFyYWN0ZXJzL25wYy9BYnN0cmFjdE5wY1wiO1xuaW1wb3J0IHtBc3NldHN9IGZyb20gXCIuLi9Bc3NldHNGYWN0b3JpZXMvQXNzZXRzXCI7XG5pbXBvcnQge0dhbWVDYW1lcmF9IGZyb20gXCIuLi9DYW1lcmFzL0dhbWVDYW1lcmFcIjtcbmltcG9ydCB7UGF0aEZpbmRlcn0gZnJvbSBcIi4uL1BhdGhGaW5kZXIvUGF0aEZpbmRlclwiO1xuaW1wb3J0IHtEcm9wcGVkSXRlbX0gZnJvbSBcIi4uL0luaXRpYWxpemVycy9Ecm9wcGVkSXRlbVwiO1xuaW1wb3J0IHtTZWxlY3RDaGFyYWN0ZXJDYW1lcmF9IGZyb20gXCIuLi9DYW1lcmFzL1NlbGVjdENoYXJhY3RlckNhbWVyYVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2NlbmUge1xuICAgIHN0YXRpYyBUWVBFID0gMDtcblxuICAgIHByb3RlY3RlZCBnYW1lOiBHYW1lO1xuICAgIHB1YmxpYyBiYWJ5bG9uU2NlbmU6IEJBQllMT04uU2NlbmU7XG4gICAgcHJvdGVjdGVkIGFzc2V0TWFuYWdlcjogQkFCWUxPTi5Bc3NldHNNYW5hZ2VyO1xuICAgIHB1YmxpYyBvcHRpb25zOiBHYW1lT3B0aW9ucztcbiAgICAvLyBwdWJsaWMgZW52aXJvbm1lbnQ6IEFic3RyYWN0RW52aXJvbm1lbnQ7XG4gICAgcHVibGljIGVudmlyb25tZW50OiBhbnk7XG4gICAgcHVibGljIGVuZW1pZXNBY3RpdmVUYXJnZXRzOiBBcnJheTxhbnk+ID0gW107XG4gICAgcHVibGljIGJhdHRsZU11c2ljOiBCQUJZTE9OLlNvdW5kO1xuICAgIC8qKlxuICAgICAqIER5bmFtaWMgQ29sbGVjdGlvbnNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3RlUGxheWVyczogQXJyYXk8UGxheWVyPiA9IFtdO1xuICAgIHB1YmxpYyBucGNzOiBBcnJheTxBYnN0cmFjdE5wYz4gPSBbXTtcbiAgICBwdWJsaWMgZW5lbWllczogQXJyYXk8TW9uc3Rlcj4gPSBbXTtcbiAgICBwdWJsaWMgcXVlc3RzOiBBcnJheTxRdWVzdHM+ID0gW107XG4gICAgcHVibGljIGNoZXN0czogQXJyYXk8Q2hlc3RzT2JqZWN0cz4gPSBbXTtcbiAgICBwdWJsaWMgcmFuZG9tU3BlY2lhbEl0ZW1zOiBBcnJheTxSYW5kb21TcGVjaWFsSXRlbT4gPSBbXTtcbiAgICBwdWJsaWMgZHJvcHBlZEl0ZW1zOiBBcnJheTxEcm9wcGVkSXRlbT4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEFzc2V0c1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3NldHM6IEFzc2V0cztcblxuICAgIC8qKlxuICAgICAqICBJbnRlcnZhbCB3aXRoIGNoZWNraW5nIGVuZW1pZXMgaW4gZnJ1bXN0cnVtXG4gICAgICovXG4gICAgcHVibGljIGZydW1zdHJ1bUVuZW1pZXNJbnRlcnZhbDtcblxuICAgIC8qKlxuICAgICAqICBQbGF5ZXIgZ28gdG8gYWN0aW9uXG4gICAgICovXG4gICAgcHVibGljIGdvVG9BY3Rpb246IEJBQllMT04uT2JzZXJ2ZXI8YW55PjtcblxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0cyhnYW1lOiBHYW1lLCBzY2VuZTogQkFCWUxPTi5TY2VuZSwgc2VsZWN0Q2hhcmFjdGVyQ2FtZXJhOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgQkFCWUxPTi5TY2VuZUxvYWRlci5DbGVhbkJvbmVNYXRyaXhXZWlnaHRzID0gdHJ1ZTtcbiAgICAgICAgU2xhdnNMb2FkZXIuc2hvd0xvYWRlcldpdGhUZXh0KCdMb2FkaW5nIGdhbWUuLi4nKTtcbiAgICAgICAgc2NlbmUuYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIoc2NlbmUpO1xuICAgICAgICB0aGlzLmFzc2V0TWFuYWdlciA9IG5ldyBCQUJZTE9OLkFzc2V0c01hbmFnZXIoc2NlbmUpO1xuICAgICAgICB0aGlzLmFzc2V0cyA9IG5ldyBBc3NldHMoc2NlbmUpO1xuICAgICAgICB0aGlzLmJhYnlsb25TY2VuZSA9IHNjZW5lO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgICAgIHNjZW5lLmNsZWFyQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMCwgMCwgMCwgMSk7XG4gICAgICAgIHNjZW5lLmNvbGxpc2lvbnNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgc2NlbmUuZm9nRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHNjZW5lLmxlbnNGbGFyZXNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHNjZW5lLnByb2Jlc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgc2NlbmUucG9zdFByb2Nlc3Nlc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICBzY2VuZS5zcHJpdGVzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHNjZW5lLmF1ZGlvRW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgZ2FtZS5zZXRTY2VuZSh0aGlzKTtcblxuICAgICAgICBpZihzZWxlY3RDaGFyYWN0ZXJDYW1lcmEpIHtcbiAgICAgICAgICAgIFNlbGVjdENoYXJhY3RlckNhbWVyYS5pbml0Q2FtZXJhSW5TY2VuZShzY2VuZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHYW1lQ2FtZXJhLmluaXRDYW1lcmFJblNjZW5lKHNjZW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmF0dGxlTXVzaWMgPSBuZXcgQkFCWUxPTi5Tb3VuZChcIkJhdHRsZU11c2ljXCIsIFwiYXNzZXRzL3NvdW5kcy9tdXNpYy9iYXR0bGUubXAzXCIsIHNjZW5lLCBudWxsLCB7XG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgdm9sdW1lOiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5QmF0dGxlTXVzaWMoKSB7XG4gICAgICAgIHRoaXMuYmF0dGxlTXVzaWMucGxheSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wQmF0dGxlTXVzaWMoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5iYXR0bGVNdXNpYy5zZXRWb2x1bWUoMCwgMik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5iYXR0bGVNdXNpYy5zdG9wKCk7XG4gICAgICAgIH0sIDIwMDApXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBsYXlFbmVtaWVzQW5pbWF0aW9uc0luRnJ1bVN0cnVtKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuYmFieWxvblNjZW5lO1xuICAgICAgICBjb25zdCBnYW1lQ2FtZXJhID0gc2NlbmUuZ2V0Q2FtZXJhQnlOYW1lKCdnYW1lQ2FtZXJhJyk7XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmZydW1zdHJ1bUVuZW1pZXNJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuZnJ1bXN0cnVtRW5lbWllc0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5lbmVtaWVzLmZvckVhY2goZW5lbXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5pc0RlYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgaXNBY3RpdmVNZXNoID0gZ2FtZUNhbWVyYS5pc0luRnJ1c3R1bShlbmVteS5tZXNoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWVuZW15LmFuaW1hdGlvbiAmJiBpc0FjdGl2ZU1lc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkucnVuQW5pbWF0aW9uU3RhbmQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVuZW15LmFuaW1hdGlvbiAmJiAhaXNBY3RpdmVNZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15LmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15LmFuaW1hdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBleGVjdXRlV2hlblJlYWR5KG9uUmVhZHk6IEZ1bmN0aW9uLCBvblBsYXllckNvbm5lY3RlZDogRnVuY3Rpb24sIHJlZ2lzdGVyTGlzdGVuZXI6IEJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuYmFieWxvblNjZW5lO1xuICAgICAgICBsZXQgYXNzZXRzTWFuYWdlciA9IHRoaXMuYXNzZXRNYW5hZ2VyO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuXG4gICAgICAgIHNjZW5lLmV4ZWN1dGVXaGVuUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXRzTWFuYWdlci5vbkZpbmlzaCA9IGZ1bmN0aW9uICh0YXNrcykge1xuICAgICAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdjaGFuZ2VTY2VuZVByZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9uUmVhZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgb25SZWFkeSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmUubWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2VuZU1lc2ggPSBzY2VuZS5tZXNoZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lTWVzaC5sYXllck1hc2sgPSAyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLnJ1blJlbmRlckxvb3AoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNlbGYucGxheUVuZW1pZXNBbmltYXRpb25zSW5GcnVtU3RydW0oKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhc3NldHNNYW5hZ2VyLm9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocmVtYWluaW5nQ291bnQsIHRvdGFsQ291bnQsIGxhc3RGaW5pc2hlZFRhc2spIHtcbiAgICAgICAgICAgICAgICBTbGF2c0xvYWRlci5zaG93TG9hZGVyV2l0aFRleHQoJ0xvYWRpbmcgYXNzZXRzLi4uICcgKyByZW1haW5pbmdDb3VudCArICcgb2YgJyArIHRvdGFsQ291bnQgKyAnLicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFzc2V0c01hbmFnZXIubG9hZCgpO1xuXG4gICAgICAgICAgICBpZiAocmVnaXN0ZXJMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob25QbGF5ZXJDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUGxheWVyQ29ubmVjdGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMgPSBuZXcgR2FtZU9wdGlvbnMoZ2FtZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5hZGRNZXNoVG9EeW5hbWljU2hhZG93R2VuZXJhdG9yKGdhbWUucGxheWVyLm1lc2gpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lLmNvbnRyb2xsZXIucmVnaXN0ZXJDb250cm9scyhzY2VuZSk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuc29ja2V0Q2xpZW50LnNvY2tldC5lbWl0KCdjaGFuZ2VTY2VuZVBvc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zb2NrZXRDbGllbnQuc29ja2V0LmVtaXQoJ3JlZnJlc2hHYXRld2F5cycpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgncmVmcmVzaFF1ZXN0cycpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgncmVmcmVzaENoZXN0cycpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQuZW1pdCgncmVmcmVzaFJhbmRvbVNwZWNpYWxJdGVtcycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lLlNIT1dfREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmRlYnVnTGF5ZXIuc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWRNb2RlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRXZlbnRzLlBMQVlFUl9DT05ORUNURUQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRzLlBMQVlFUl9DT05ORUNURUQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGluaXRTY2VuZShnYW1lOiBHYW1lKTtcbn1cbiIsImltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCB7RW52aXJvbm1lbnRTZWxlY3RDaGFyYWN0ZXJ9IGZyb20gXCIuLi9FbnZpcm9ubWVudC9lbnZpcm9ubWVudFNlbGVjdENoYXJhY3RlclwiO1xuaW1wb3J0IHtTY2VuZX0gZnJvbSBcIi4vU2NlbmVcIjtcbmltcG9ydCB7V2Fycmlvcn0gZnJvbSBcIi4uL0NoYXJhY3RlcnMvc2VsZWN0Q2hhcmFjdGVyL1dhcnJpb3JcIjtcbmltcG9ydCB7U2VsZWN0Q2hhcmFjdGVyIGFzIFNlbGVjdENoYXJhY3RlclBhbmVsfSBmcm9tIFwiLi4vR1VJL1NlbGVjdENoYXJhY3RlclwiO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0Q2hhcmFjdGVyIGV4dGVuZHMgU2NlbmUge1xuXG4gICAgc3RhdGljIFRZUEUgPSA0O1xuXG4gICAgaW5pdFNjZW5lKGdhbWU6R2FtZSkge1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHBsYXllcnNUb1NlbGVjdCA9IFtdO1xuICAgICAgICBsZXQgZ3VpID0gbnVsbDtcbiAgICAgICAgQkFCWUxPTi5TY2VuZUxvYWRlci5Mb2FkKFwiYXNzZXRzL3NjZW5lcy9TZWxlY3RfTWFwL1wiLCBcIlNlbGVjdF9NYXAuYmFieWxvblwiLCBnYW1lLmVuZ2luZSwgZnVuY3Rpb24gKHNjZW5lKSB7XG4gICAgICAgICAgICBzZWxmXG4gICAgICAgICAgICAgICAgLnNldERlZmF1bHRzKGdhbWUsIHNjZW5lLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5leGVjdXRlV2hlblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVudmlyb25tZW50U2VsZWN0Q2hhcmFjdGVyKGdhbWUsIHNjZW5lKTtcblxuICAgICAgICAgICAgICAgICAgICBnYW1lLnNvY2tldENsaWVudC5zb2NrZXQub24oJ3Nob3dQbGF5ZXJzVG9TZWxlY3QnLCBmdW5jdGlvbihwbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzVG9TZWxlY3QuZm9yRWFjaCgocGxheWVyU2VsZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyU2VsZWN0Lm1lc2guZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzVG9TZWxlY3QgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyID0gcGxheWVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyc1RvU2VsZWN0LnB1c2gobmV3IFdhcnJpb3IoZ2FtZSwgaSwgcGxheWVyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihndWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWkudGV4dHVyZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXJzVG9TZWxlY3QubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1aSA9IG5ldyBTZWxlY3RDaGFyYWN0ZXJQYW5lbChnYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9LCBudWxsLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4uLy4uL0NoYXJhY3RlcnMvTW9uc3RlclwiO1xuXG5leHBvcnQgY2xhc3MgU2hvd0VuZW1pZXNTb2NrZXRFdmVudCBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtTb2NrZXRJT0NsaWVudH1cbiAgICAgKi9cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbignc2hvd0VuZW1pZXMnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLmVuZW1pZXMgPSBbXTtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZW5lbXlEYXRhLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXlEYXRhLnN0YXRpc3RpY3MuaHAgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld01vbnN0ZXIgPSBuZXcgTW9uc3RlcihnYW1lLCBrZXksIGVuZW15RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5lbmVtaWVzW25ld01vbnN0ZXIuaWRdID0gbmV3TW9uc3RlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7QWJzdHJhY3RDaGFyYWN0ZXJ9IGZyb20gXCIuLi8uLi9DaGFyYWN0ZXJzL0Fic3RyYWN0Q2hhcmFjdGVyXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi9HYW1lXCI7XG5pbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVFbmVtaWVzU29ja2V0RXZlbnQgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNvY2tldC5vbigndXBkYXRlRW5lbXknLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZWRFbmVteSA9IGRhdGEuZW5lbXk7XG4gICAgICAgICAgICBsZXQgZW5lbXlLZXkgPSBkYXRhLmVuZW15S2V5O1xuICAgICAgICAgICAgbGV0IHNjZW5lTWFuYWdlciA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKTtcbiAgICAgICAgICAgIGxldCBlbmVteSA9IHNjZW5lTWFuYWdlci5lbmVtaWVzW2VuZW15S2V5XTtcbiAgICAgICAgICAgIGlmKCFlbmVteSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBtZXNoID0gZW5lbXkubWVzaEZvck1vdmU7XG5cbiAgICAgICAgICAgIGVuZW15LnJldHJpZXZlSGl0KHVwZGF0ZWRFbmVteSk7XG5cbiAgICAgICAgICAgIC8vL2FudHlsYWcgcnVsZVxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlQmV0d2Vlbk9iamVjdHMgPSBHYW1lLmRpc3RhbmNlVmVjdG9yKG1lc2gucG9zaXRpb24sIHVwZGF0ZWRFbmVteS5wb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2VCZXR3ZWVuT2JqZWN0cyA+IDE2KSB7XG4gICAgICAgICAgICAgICAgbWVzaC5wb3NpdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjModXBkYXRlZEVuZW15LnBvc2l0aW9uLngsIHVwZGF0ZWRFbmVteS5wb3NpdGlvbi55LCB1cGRhdGVkRW5lbXkucG9zaXRpb24ueik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY2VuZU1hbmFnZXIuZW5lbWllc0FjdGl2ZVRhcmdldHNbZW5lbXlLZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkudW5yZWdpc3RlckJlZm9yZVJlbmRlcihzY2VuZU1hbmFnZXIuZW5lbWllc0FjdGl2ZVRhcmdldHNbZW5lbXlLZXldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRhcmdldE1lc2ggPSBudWxsO1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLnJlbW90ZVBsYXllcnMuZm9yRWFjaChmdW5jdGlvbiAoc29ja2V0UmVtb3RlUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRFbmVteS50YXJnZXQgPT0gc29ja2V0UmVtb3RlUGxheWVyLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE1lc2ggPSBzb2NrZXRSZW1vdGVQbGF5ZXIubWVzaEZvck1vdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmNvbGxpc2lvbkV2ZW50ID09ICdPbkludGVyc2VjdGlvbkVudGVyVHJpZ2dlckF0dGFjaycpIHtcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXllci5tb25zdGVyc1RvQXR0YWNrW2VuZW15S2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYodXBkYXRlZEVuZW15LmF0dGFjayA9PSB0cnVlICYmIGRhdGEuYXR0YWNrSXNEb25lID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzaC5sb29rQXQodGFyZ2V0TWVzaC5wb3NpdGlvbi5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkucnVuQW5pbWF0aW9uSGl0KEFic3RyYWN0Q2hhcmFjdGVyLkFOSU1BVElPTl9BVFRBQ0tfMDEsIG51bGwsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmVteS5ydW5BbmltYXRpb25TdGFuZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5jb2xsaXNpb25FdmVudCA9PSAnT25JbnRlcnNlY3Rpb25FbnRlclRyaWdnZXJWaXNpYmlsaXR5JyB8fCBkYXRhLmNvbGxpc2lvbkV2ZW50ID09ICdPbkludGVyc2VjdGlvbkV4aXRUcmlnZ2VyQXR0YWNrJykge1xuICAgICAgICAgICAgICAgIGlmIChnYW1lLnBsYXllci5tb25zdGVyc1RvQXR0YWNrW2VuZW15S2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnYW1lLnBsYXllci5tb25zdGVyc1RvQXR0YWNrW2VuZW15S2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzY2VuZU1hbmFnZXIuZW5lbWllc0FjdGl2ZVRhcmdldHNbZW5lbXlLZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1lc2gubG9va0F0KHRhcmdldE1lc2gucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGxldCByb3RhdGlvbiA9IG1lc2gucm90YXRpb247XG4gICAgICAgICAgICAgICAgbGV0IGZvcndhcmRzID0gbmV3IEJBQllMT04uVmVjdG9yMygoTWF0aC5zaW4ocm90YXRpb24ueSkpIC8gZW5lbXkuZ2V0V2Fsa1NwZWVkKCksIDAsIChNYXRoLmNvcyhyb3RhdGlvbi55KSkgLyBlbmVteS5nZXRXYWxrU3BlZWQoKSk7XG4gICAgICAgICAgICAgICAgbWVzaC5tb3ZlV2l0aENvbGxpc2lvbnMoZm9yd2FyZHMpO1xuICAgICAgICAgICAgICAgIGVuZW15LnJ1bkFuaW1hdGlvbldhbGsoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzZWxmLmdhbWUuZ2V0QmFieWxvblNjZW5lKCkucmVnaXN0ZXJCZWZvcmVSZW5kZXIoc2NlbmVNYW5hZ2VyLmVuZW1pZXNBY3RpdmVUYXJnZXRzW2VuZW15S2V5XSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY29sbGlzaW9uRXZlbnQgPT0gJ09uSW50ZXJzZWN0aW9uRXhpdFRyaWdnZXJWaXNpYmlsaXR5Jykge1xuICAgICAgICAgICAgICAgIGVuZW15LnJ1bkFuaW1hdGlvblN0YW5kKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHNjZW5lTWFuYWdlci5lbmVtaWVzQWN0aXZlVGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBzY2VuZU1hbmFnZXIucGxheUJhdHRsZU11c2ljKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHNjZW5lTWFuYWdlci5zdG9wQmF0dGxlTXVzaWMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuLi9Tb2NrZXRFdmVudFwiO1xuXG5leHBvcnQgY2xhc3MgT25BZGRBdHRyaWJ1dGUgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U29ja2V0SU9DbGllbnR9XG4gICAgICovXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdhdHRyaWJ1dGVBZGRlZCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBnYW1lLnBsYXllci5mcmVlQXR0cmlidXRlc1BvaW50cyA9IGRhdGEuYWN0aXZlUGxheWVyLmZyZWVBdHRyaWJ1dGVzUG9pbnRzO1xuICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuc2V0Q2hhcmFjdGVyU3RhdGlzdGljcyhkYXRhLmFjdGl2ZVBsYXllcik7XG5cbiAgICAgICAgICAgIGdhbWUuZ3VpLmF0dHJpYnV0ZXMucmVmcmVzaFBvcHVwKCk7XG4gICAgICAgICAgICBnYW1lLnBsYXllci5yZWZyZXNoRW5lcmd5SW5HdWkoKTtcbiAgICAgICAgICAgIGdhbWUucGxheWVyLnJlZnJlc2hIcEluR3VpKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uL1NvY2tldEV2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBPbkFkZEV4cGVyaWVuY2UgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U29ja2V0SU9DbGllbnR9XG4gICAgICovXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdhZGRFeHBlcmllbmNlJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGdhbWUucGxheWVyLmFkZEV4cGVyaWVuY2UoZGF0YS5leHBlcmllbmNlLCBkYXRhLmV4cGVyaWVuY2VQZXJjZW50YWdlcyk7XG4gICAgICAgICAgICBnYW1lLmd1aS5wbGF5ZXJMb2dzUXVlc3RzLmFkZFRleHQoJ1lvdSBlYXJuZWQgJyArIGRhdGEuZXhwZXJpZW5jZSArICcgZXhwZXJpZW5jZS4nLCAnZ29sZCcpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uL1NvY2tldEV2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBPbk5ld0x2bCBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtTb2NrZXRJT0NsaWVudH1cbiAgICAgKi9cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ25ld0x2bCcsIGZ1bmN0aW9uIChwbGF5ZXJEYXRhKSB7XG4gICAgICAgICAgICBnYW1lLnBsYXllci5mcmVlQXR0cmlidXRlc1BvaW50cyA9IHBsYXllckRhdGEuZnJlZUF0dHJpYnV0ZXNQb2ludHM7XG4gICAgICAgICAgICBnYW1lLnBsYXllci5mcmVlU2tpbGxQb2ludHMgPSBwbGF5ZXJEYXRhLmZyZWVTa2lsbFBvaW50cztcbiAgICAgICAgICAgIGdhbWUucGxheWVyLmx2bCA9IHBsYXllckRhdGEubHZsO1xuICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuZXhwZXJpZW5jZVBlcmNlbnRhZ2VzID0gMDtcbiAgICAgICAgICAgIGdhbWUuZ3VpLmF0dHJpYnV0ZXMucmVmcmVzaFBvcHVwKCk7XG5cbiAgICAgICAgICAgIGdhbWUucGxheWVyLnNldE5ld0x2bCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuLi9Tb2NrZXRFdmVudFwiO1xuXG5leHBvcnQgY2xhc3MgT25SZWZyZXNoUGxheWVyRXF1aXAgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbigndXBkYXRlUGxheWVyRXF1aXAnLCBmdW5jdGlvbiAodXBkYXRlZFBsYXllcikge1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICh1cGRhdGVkUGxheWVyLmFjdGl2ZVBsYXllci5pZCA9PSBnYW1lLnBsYXllci5pZCkge1xuICAgICAgICAgICAgICAgIHBsYXllciA9IGdhbWUucGxheWVyO1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyLnNldENoYXJhY3RlclN0YXRpc3RpY3ModXBkYXRlZFBsYXllci5hY3RpdmVQbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGdhbWUuZ3VpLmF0dHJpYnV0ZXMucmVmcmVzaFBvcHVwKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5yZW1vdGVQbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlbW90ZVBsYXllciwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdGVQbGF5ZXIuaWQgPT0gdXBkYXRlZFBsYXllci5hY3RpdmVQbGF5ZXIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllciA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5yZW1vdGVQbGF5ZXJzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGxheWVyLmludmVudG9yeS5yZW1vdmVJdGVtcygpO1xuICAgICAgICAgICAgcGxheWVyLmludmVudG9yeS5zZXRJdGVtcyh1cGRhdGVkUGxheWVyLmFjdGl2ZVBsYXllci5pdGVtcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uL1NvY2tldEV2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBPblJlbW92ZVBsYXllciBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtTb2NrZXRJT0NsaWVudH1cbiAgICAgKi9cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbigncmVtb3ZlUGxheWVyJywgZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkucmVtb3RlUGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChyZW1vdGVQbGF5ZXIsIGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdGVQbGF5ZXIuaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5yZW1vdGVQbGF5ZXJzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVGcm9tV29ybGQoKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLnJlbW90ZVBsYXllcnMuc3BsaWNlKGtleSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uL1NvY2tldEV2ZW50XCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uLy4uL0NoYXJhY3RlcnMvUGxheWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBPblNob3dQbGF5ZXIgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U29ja2V0SU9DbGllbnR9XG4gICAgICovXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3Nob3dQbGF5ZXInLCBmdW5jdGlvbiAocGxheWVyRGF0YSkge1xuICAgICAgICAgICAgZ2FtZS5zb2NrZXRDbGllbnQucmVnaXN0ZXJFdmVudHMoKTtcblxuICAgICAgICAgICAgZ2FtZS5wbGF5ZXIgPSBuZXcgUGxheWVyKGdhbWUsIHRydWUsIHBsYXllckRhdGEpO1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLnJlbW90ZVBsYXllcnMucHVzaChnYW1lLnBsYXllcik7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZ2FtZS5ldmVudHMucGxheWVyQ29ubmVjdGVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vLi4vQ2hhcmFjdGVycy9QbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIE9uU2hvd1Jvb21QbGF5ZXIgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbignc2hvd1Jvb21QbGF5ZXInLCBmdW5jdGlvbiAocGxheWVyRGF0YSkge1xuICAgICAgICAgICAgbGV0IHBsYXllckV4aXN0cyA9IGZhbHNlO1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLnJlbW90ZVBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmlkID09IHBsYXllckRhdGEuYWN0aXZlUGxheWVyLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmKCFwbGF5ZXJFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkucmVtb3RlUGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoZ2FtZSwgZmFsc2UsIHBsYXllckRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7QWJzdHJhY3RDaGFyYWN0ZXJ9IGZyb20gXCIuLi8uLi9DaGFyYWN0ZXJzL0Fic3RyYWN0Q2hhcmFjdGVyXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuLi8uLi9HYW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBPblVwZGF0ZVBsYXllcnMgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cblxuICAgIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGVQbGF5ZXInLCBmdW5jdGlvbiAodXBkYXRlZFBsYXllcikge1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IG51bGw7XG4gICAgICAgICAgICBpZighdXBkYXRlZFBsYXllci5hY3RpdmVQbGF5ZXIuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5yZW1vdGVQbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlbW90ZVBsYXllciwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW90ZVBsYXllci5pZCA9PSB1cGRhdGVkUGxheWVyLmFjdGl2ZVBsYXllci5pZCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIgPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkucmVtb3RlUGxheWVyc1trZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vL2FjdGlvbiB3aGVuIGhwIG9mIGNoYXJhY3RlciBpcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAocGxheWVyLnN0YXRpc3RpY3MuaHAgIT0gdXBkYXRlZFBsYXllci5hY3RpdmVQbGF5ZXIuc3RhdGlzdGljcy5ocCkge1xuICAgICAgICAgICAgICAgIGxldCBkYW1hZ2UgPSAocGxheWVyLnN0YXRpc3RpY3MuaHAgLSB1cGRhdGVkUGxheWVyLmFjdGl2ZVBsYXllci5zdGF0aXN0aWNzLmhwKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc3RhdGlzdGljcy5ocCA9IHVwZGF0ZWRQbGF5ZXIuYWN0aXZlUGxheWVyLnN0YXRpc3RpY3MuaHA7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5ibG9vZFBhcnRpY2xlcy5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucmVmcmVzaEhwSW5HdWkoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYmxvb2RQYXJ0aWNsZXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2hvd0RhbWFnZShkYW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNDb250cm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5yZWZyZXNoSHBJbkd1aSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5pc0FsaXZlICYmIHBsYXllci5zdGF0aXN0aWNzLmhwIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5pc0FsaXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuaXNEZWF0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubWVzaC5za2VsZXRvbi5iZWdpbkFuaW1hdGlvbignZGVhdGgnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0sIDQwMCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodXBkYXRlZFBsYXllci5hdHRhY2spICYmICFwbGF5ZXIuaXNBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9pbnQgPSB1cGRhdGVkUGxheWVyLnRhcmdldFBvaW50O1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9pbnRWZWN0b3IzID0gbmV3IEJBQllMT04uVmVjdG9yMyh0YXJnZXRQb2ludC54LCAwLCB0YXJnZXRQb2ludC56KTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLm1lc2hGb3JNb3ZlLmxvb2tBdCh0YXJnZXRQb2ludFZlY3RvcjMsIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tBbmltYXRpb24gPSAoR2FtZS5yYW5kb21OdW1iZXIoMSwgMikgPT0gMSkgPyBBYnN0cmFjdENoYXJhY3Rlci5BTklNQVRJT05fQVRUQUNLXzAyIDogQWJzdHJhY3RDaGFyYWN0ZXIuQU5JTUFUSU9OX0FUVEFDS18wMTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucnVuQW5pbWF0aW9uSGl0KGF0dGFja0FuaW1hdGlvbiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmR5bmFtaWNGdW5jdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmdldEJhYnlsb25TY2VuZSgpLnVucmVnaXN0ZXJCZWZvcmVSZW5kZXIocGxheWVyLmR5bmFtaWNGdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHBsYXllci5zdGF0aXN0aWNzLmVuZXJneSA9IHVwZGF0ZWRQbGF5ZXIuYWN0aXZlUGxheWVyLnN0YXRpc3RpY3MuZW5lcmd5O1xuICAgICAgICAgICAgICAgIHBsYXllci5yZWZyZXNoRW5lcmd5SW5HdWkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1cGRhdGVkUGxheWVyLnRhcmdldFBvaW50ICYmICFwbGF5ZXIuaXNDb250cm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9pbnRWZWN0b3IzID0gbmV3IEJBQllMT04uVmVjdG9yMyh1cGRhdGVkUGxheWVyLnRhcmdldFBvaW50LngsIDAsIHVwZGF0ZWRQbGF5ZXIudGFyZ2V0UG9pbnQueik7XG5cbiAgICAgICAgICAgICAgICBwbGF5ZXIucnVuUGxheWVyVG9Qb3NpdGlvbih0YXJnZXRQb2ludFZlY3RvcjMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uL1NvY2tldEV2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBPblVwZGF0ZVBsYXllcnNTa2lsbHMgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U29ja2V0SU9DbGllbnR9XG4gICAgICovXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGVQbGF5ZXJTa2lsbCcsIGZ1bmN0aW9uICh1cGRhdGVkUGxheWVyKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gbnVsbDtcbiAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5yZW1vdGVQbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlbW90ZVBsYXllciwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW90ZVBsYXllci5pZCA9PSB1cGRhdGVkUGxheWVyLmFjdGl2ZVBsYXllci5pZCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIgPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkucmVtb3RlUGxheWVyc1trZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKHVwZGF0ZWRQbGF5ZXIuYWN0aXZlU2tpbGwpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc3RhdGlzdGljcy5lbmVyZ3kgPSB1cGRhdGVkUGxheWVyLmFjdGl2ZVBsYXllci5zdGF0aXN0aWNzLmVuZXJneTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVmcmVzaEVuZXJneUluR3VpKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGwgPSBwbGF5ZXIuc2tpbGxzW3VwZGF0ZWRQbGF5ZXIuYWN0aXZlU2tpbGwudHlwZV07XG4gICAgICAgICAgICAgICAgc2tpbGwuc2hvd0FuaW1hdGlvbih1cGRhdGVkUGxheWVyLmFjdGl2ZVNraWxsLmR1cmF0aW9uKjEwMDAsIHVwZGF0ZWRQbGF5ZXIuYWN0aXZlU2tpbGwuY29vbGRvd25UaW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuLi8uLi9Tb2NrZXRFdmVudFwiO1xuXG5leHBvcnQgY2xhc3MgT25PcGVuQ2hlc3QgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ29wZW5DaGVzdCcsIGRhdGEgPT4ge1xuICAgICAgICAgICAgbGV0IG9wZW5lZCA9IGRhdGEuY2hlc3Qub3BlbmVkO1xuICAgICAgICAgICAgaWYoIW9wZW5lZCkge1xuICAgICAgICAgICAgICAgIGdhbWUuZ3VpLnBsYXllckxvZ3NRdWVzdHMuYWRkVGV4dCgnWW91IGRvIG5vdCBoYXZlIGtleSB0byBvcGVuIGNoZXN0JywgJ3JlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hlc3QgPSBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuY2hlc3RzW2RhdGEuY2hlc3RLZXldO1xuICAgICAgICAgICAgICAgIGNoZXN0LmhpZ2h0bGlnaHRMYXllci5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgY2hlc3QubWVzaC5za2VsZXRvbi5iZWdpbkFuaW1hdGlvbignYWN0aW9uJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNoZXN0Lm1lc2guYWN0aW9uTWFuYWdlci5hY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2hlc3QubWVzaC5hY3Rpb25NYW5hZ2VyLnVucmVnaXN0ZXJBY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uLy4uL1NvY2tldEV2ZW50XCI7XG5pbXBvcnQge0NoZXN0fSBmcm9tIFwiLi4vLi4vLi4vSW5pdGlhbGl6ZXJzL0NoZXN0XCI7XG5cbmV4cG9ydCBjbGFzcyBPblJlZnJlc2hDaGVzdCBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICB0aGlzLnNvY2tldC5vbigncmVmcmVzaENoZXN0cycsIGNoZXN0cyA9PiB7XG4gICAgICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuY2hlc3RzLmZvckVhY2goY2hlc3QgPT4ge1xuICAgICAgICAgICAgICAgIGNoZXN0LmhpZ2h0bGlnaHRMYXllci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5jaGVzdHMgPSBbXTtcblxuICAgICAgICAgICAgY2hlc3RzLmZvckVhY2goKGNoZXN0LCBjaGVzdEtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5jaGVzdHMucHVzaChuZXcgQ2hlc3QoZ2FtZSwgY2hlc3QsIGNoZXN0S2V5KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vLi4vU29ja2V0RXZlbnRcIjtcblxuZXhwb3J0IGNsYXNzIE9uQWRkRHJvcHBlZEl0ZW0gZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2FkZERyb3BwZWRJdGVtJywgZGF0YSA9PiB7XG4gICAgICAgICAgICBpZihkYXRhLml0ZW1LZXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnYW1lLmd1aS5wbGF5ZXJMb2dzUXVlc3RzLmFkZFRleHQoJ1lvdXIgaW52ZW50b3J5IGlzIGZ1bGwnLCAnb3JhbmdlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkcm9wcGVkSXRlbSA9IGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5kcm9wcGVkSXRlbXNbZGF0YS5pdGVtS2V5XTtcbiAgICAgICAgICAgIGlmKGRyb3BwZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgZHJvcHBlZEl0ZW0ucGlja0l0ZW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vLi4vU29ja2V0RXZlbnRcIjtcblxuZXhwb3J0IGNsYXNzIE9uQWRkU3BlY2lhbEl0ZW0gZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2FkZFNwZWNpYWxJdGVtJywgZGF0YSA9PiB7XG4gICAgICAgICAgICBnYW1lLmd1aS5wbGF5ZXJMb2dzUXVlc3RzLmFkZFRleHQoJ1lvdSBlYXJuZWQgJytkYXRhLnZhbHVlKycgJyArIGRhdGEubmFtZSArICcnLCAnZ29sZCcpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uLy4uL1NvY2tldEV2ZW50XCI7XG5pbXBvcnQge1JhbmRvbVNwZWNpYWxJdGVtfSBmcm9tIFwiLi4vLi4vLi4vSW5pdGlhbGl6ZXJzL1JhbmRvbVNwZWNpYWxJdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBPblJlZnJlc2hSYW5kb21TcGVjaWFsSXRlbXMgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3JlZnJlc2hSYW5kb21TcGVjaWFsSXRlbXMnLCByYW5kb21TcGVjaWFsSXRlbXMgPT4ge1xuXG4gICAgICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkucmFuZG9tU3BlY2lhbEl0ZW1zLmZvckVhY2gocmFuZG9tU3BlY2lhbEl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJhbmRvbVNwZWNpYWxJdGVtLm1lc2guZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHJhbmRvbVNwZWNpYWxJdGVtLnRvb2x0aXAuY29udGFpbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLnJhbmRvbVNwZWNpYWxJdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICByYW5kb21TcGVjaWFsSXRlbXMuZm9yRWFjaCgocmFuZG9tU3BlY2lhbEl0ZW0sIHJhbmRvbVNwZWNpYWxJdGVtS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyYW5kb21TcGVjaWFsSXRlbS5waWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLnJhbmRvbVNwZWNpYWxJdGVtcy5wdXNoKG5ldyBSYW5kb21TcGVjaWFsSXRlbShnYW1lLCByYW5kb21TcGVjaWFsSXRlbSwgcmFuZG9tU3BlY2lhbEl0ZW1LZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uLy4uL1NvY2tldEV2ZW50XCI7XG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi8uLi8uLi9QbGF5ZXIvSXRlbXMvSXRlbVwiO1xuaW1wb3J0IHtEcm9wcGVkSXRlbX0gZnJvbSBcIi4uLy4uLy4uL0luaXRpYWxpemVycy9Ecm9wcGVkSXRlbVwiO1xuXG5leHBvcnQgY2xhc3MgT25TaG93RHJvcHBlZEl0ZW0gZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3Nob3dEcm9wcGVkSXRlbScsIGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtKGdhbWUsIGRhdGEuaXRlbSk7XG4gICAgICAgICAgICBnYW1lLmdldFNjZW5lTWFuZ2VyKCkuZHJvcHBlZEl0ZW1zW2RhdGEuaXRlbUtleV0gPSAobmV3IERyb3BwZWRJdGVtKGdhbWUsIGl0ZW0sIGRhdGEucG9zaXRpb24sIGRhdGEuaXRlbUtleSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuLi9Tb2NrZXRFdmVudFwiO1xuaW1wb3J0IHtNYW5hZ2VyfSBmcm9tIFwiLi4vLi4vU2NlbmVzL01hbmFnZXJcIjtcblxuZXhwb3J0IGNsYXNzIE9uQ2hhbmdlU2NlbmUgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U29ja2V0SU9DbGllbnR9XG4gICAgICovXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdjaGFuZ2VTY2VuZScsIHNjZW5lVHlwZSA9PiB7XG4gICAgICAgICAgICBsZXQgc2NlbmUgPSBNYW5hZ2VyLmZhY3Rvcnkoc2NlbmVUeXBlKTtcblxuICAgICAgICAgICAgZ2FtZS5jaGFuZ2VTY2VuZShzY2VuZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4uL1NvY2tldEV2ZW50XCI7XG5pbXBvcnQge0dhdGV3YXl9IGZyb20gXCIuLi8uLi9Jbml0aWFsaXplcnMvR2F0ZXdheXNcIjtcblxuZXhwb3J0IGNsYXNzIE9uUmVmcmVzaEdhdGV3YXlzIGV4dGVuZHMgU29ja2V0RXZlbnQge1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1NvY2tldElPQ2xpZW50fVxuICAgICAqL1xuICAgIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgICAgIGxldCBnYW1lID0gdGhpcy5nYW1lO1xuICAgICAgICBsZXQgZ2F0ZXdheXMgPSBbXTtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3JlZnJlc2hHYXRld2F5cycsIHNjZW5lU2VydmVyRGF0YSA9PiB7XG4gICAgICAgICAgICBnYXRld2F5cy5mb3JFYWNoKGdhdGV3YXkgPT4ge1xuICAgICAgICAgICAgICAgIGdhdGV3YXkucGFydGljbGVTeXN0ZW0uZGlzcG9zZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBnYXRld2F5c0Zyb21TZXJ2ZXIgPSBzY2VuZVNlcnZlckRhdGEuZ2F0ZXdheXM7XG4gICAgICAgICAgICBnYXRld2F5c0Zyb21TZXJ2ZXIuZm9yRWFjaChnYXRld2F5ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZ2F0ZXdheUluR2FtZSA9IG5ldyBHYXRld2F5KGdhbWUsIGdhdGV3YXkub2JqZWN0TmFtZSwgZ2F0ZXdheS5pc0FjdGl2ZSwgZ2F0ZXdheS5vcGVuU2NlbmVUeXBlLCBnYXRld2F5LmVudHJhbmNlTmFtZSk7XG4gICAgICAgICAgICAgICAgZ2F0ZXdheXMucHVzaChnYXRld2F5SW5HYW1lKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge1NvY2tldEV2ZW50fSBmcm9tIFwiLi4vLi4vU29ja2V0RXZlbnRcIjtcblxuZXhwb3J0IGNsYXNzIE9uUXVlc3RSZXF1aXJlbWVudERvbmVJbmZvcm1hdGlvbiBleHRlbmRzIFNvY2tldEV2ZW50IHtcblxuICAgIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3F1ZXN0UmVxdWlyZW1lbnREb25lSW5mb3JtYXRpb24nLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHNlbGYuZ2FtZS5ndWkucGxheWVyTG9nc1F1ZXN0cy5hZGRUZXh0KGRhdGEsICdvcmFuZ2UnKTtcbiAgICAgICAgICAgIHNlbGYuc29ja2V0LmVtaXQoJ3JlZnJlc2hRdWVzdHMnKTtcbiAgICAgICAgICAgIHNlbGYuc29ja2V0LmVtaXQoJ3JlZnJlc2hHYXRld2F5cycpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuLi8uLi9Tb2NrZXRFdmVudFwiO1xuXG5leHBvcnQgY2xhc3MgT25RdWVzdFJlcXVpcmVtZW50SW5mb3JtYXRpb24gZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdxdWVzdFJlcXVpcmVtZW50SW5mb3JtYXRpb24nLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHNlbGYuZ2FtZS5ndWkucGxheWVyTG9nc1F1ZXN0cy5hZGRUZXh0KGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7U29ja2V0RXZlbnR9IGZyb20gXCIuLi8uLi9Tb2NrZXRFdmVudFwiO1xuaW1wb3J0IHtRdWVzdHN9IGZyb20gXCIuLi8uLi8uLi9Jbml0aWFsaXplcnMvUXVlc3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBPblJlZnJlc2hRdWVzdHMgZXh0ZW5kcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNvY2tldC5vbigncmVmcmVzaFF1ZXN0cycsIGRhdGEgPT4ge1xuICAgICAgICAgICAgZ2FtZS5nZXRTY2VuZU1hbmdlcigpLnF1ZXN0cy5mb3JFYWNoKHF1ZXN0ID0+IHtcbiAgICAgICAgICAgICAgICBxdWVzdC5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5xdWVzdHMgPSBbXTtcblxuICAgICAgICAgICAgbGV0IGFjdGl2ZVF1ZXN0ID0gZGF0YS5hY3RpdmVRdWVzdDtcbiAgICAgICAgICAgIGRhdGEucXVlc3RzLmZvckVhY2gocXVlc3QgPT4ge1xuICAgICAgICAgICAgICAgIGdhbWUuZ2V0U2NlbmVNYW5nZXIoKS5xdWVzdHMucHVzaChuZXcgUXVlc3RzKGdhbWUsIHF1ZXN0LCBhY3RpdmVRdWVzdCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNlbGYuc29ja2V0LmVtaXQoJ3JlZnJlc2hHYXRld2F5cycpO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZVF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5nYW1lLmd1aS5wbGF5ZXJRdWVzdEluZm9ybWF0aW9uLmFkZFF1ZXN0KGFjdGl2ZVF1ZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuLi9HYW1lXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTb2NrZXRFdmVudCB7XG5cbiAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZTtcbiAgICBwcm90ZWN0ZWQgc29ja2V0O1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgc29ja2V0KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuc29ja2V0ID0gc29ja2V0O1xuICAgIH1cblxuICAgIGFic3RyYWN0IGxpc3RlbigpO1xufVxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHtTbGF2c0xvYWRlcn0gZnJvbSBcIi4uL0xvYWRlci9TbGF2c0xvYWRlclwiO1xuaW1wb3J0IHtTaG93RW5lbWllc1NvY2tldEV2ZW50fSBmcm9tIFwiLi9FbmVtaWVzL1Nob3dFbmVtaWVzU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7VXBkYXRlRW5lbWllc1NvY2tldEV2ZW50fSBmcm9tIFwiLi9FbmVtaWVzL1VwZGF0ZUVuZW1pZXNTb2NrZXRFdmVudFwiO1xuaW1wb3J0IHtPbk9wZW5DaGVzdH0gZnJvbSBcIi4vU2NlbmUvQ2hlc3RzL09uT3BlbkNoZXN0XCI7XG5pbXBvcnQge09uUmVmcmVzaENoZXN0fSBmcm9tIFwiLi9TY2VuZS9DaGVzdHMvT25SZWZyZXNoQ2hlc3RcIjtcbmltcG9ydCB7T25BZGRTcGVjaWFsSXRlbX0gZnJvbSBcIi4vU2NlbmUvSXRlbXMvT25BZGRTcGVjaWFsSXRlbVwiO1xuaW1wb3J0IHtPblJlZnJlc2hSYW5kb21TcGVjaWFsSXRlbXN9IGZyb20gXCIuL1NjZW5lL0l0ZW1zL09uUmVmcmVzaFJhbmRvbVNwZWNpYWxJdGVtc1wiO1xuaW1wb3J0IHtPblNob3dEcm9wcGVkSXRlbX0gZnJvbSBcIi4vU2NlbmUvSXRlbXMvT25TaG93RHJvcHBlZEl0ZW1cIjtcbmltcG9ydCB7T25RdWVzdFJlcXVpcmVtZW50RG9uZUluZm9ybWF0aW9ufSBmcm9tIFwiLi9TY2VuZS9RdWVzdHMvT25RdWVzdFJlcXVpcmVtZW50RG9uZUluZm9ybWF0aW9uXCI7XG5pbXBvcnQge09uUXVlc3RSZXF1aXJlbWVudEluZm9ybWF0aW9ufSBmcm9tIFwiLi9TY2VuZS9RdWVzdHMvT25RdWVzdFJlcXVpcmVtZW50SW5mb3JtYXRpb25cIjtcbmltcG9ydCB7T25SZWZyZXNoUXVlc3RzfSBmcm9tIFwiLi9TY2VuZS9RdWVzdHMvT25SZWZyZXNoUXVlc3RzXCI7XG5pbXBvcnQge09uQ2hhbmdlU2NlbmV9IGZyb20gXCIuL1NjZW5lL09uQ2hhbmdlU2NlbmVcIjtcbmltcG9ydCB7T25SZWZyZXNoR2F0ZXdheXN9IGZyb20gXCIuL1NjZW5lL09uUmVmcmVzaEdhdGV3YXlzXCI7XG5pbXBvcnQge09uQWRkQXR0cmlidXRlfSBmcm9tIFwiLi9QbGF5ZXIvT25BZGRBdHRyaWJ1dGVcIjtcbmltcG9ydCB7T25BZGRFeHBlcmllbmNlfSBmcm9tIFwiLi9QbGF5ZXIvT25BZGRFeHBlcmllbmNlXCI7XG5pbXBvcnQge09uTmV3THZsfSBmcm9tIFwiLi9QbGF5ZXIvT25OZXdMdmxcIjtcbmltcG9ydCB7T25SZWZyZXNoUGxheWVyRXF1aXB9IGZyb20gXCIuL1BsYXllci9PblJlZnJlc2hQbGF5ZXJFcXVpcFwiO1xuaW1wb3J0IHtPblNob3dQbGF5ZXJ9IGZyb20gXCIuL1BsYXllci9PblNob3dQbGF5ZXJcIjtcbmltcG9ydCB7T25VcGRhdGVQbGF5ZXJzfSBmcm9tIFwiLi9QbGF5ZXIvT25VcGRhdGVQbGF5ZXJzXCI7XG5pbXBvcnQge09uVXBkYXRlUGxheWVyc1NraWxsc30gZnJvbSBcIi4vUGxheWVyL09uVXBkYXRlUGxheWVyc1NraWxsc1wiO1xuaW1wb3J0IHtTb2NrZXRFdmVudH0gZnJvbSBcIi4vU29ja2V0RXZlbnRcIjtcbmltcG9ydCB7T25SZW1vdmVQbGF5ZXJ9IGZyb20gXCIuL1BsYXllci9PblJlbW92ZVBsYXllclwiO1xuaW1wb3J0IHtTZWxlY3RDaGFyYWN0ZXJ9IGZyb20gXCIuLi9TY2VuZXMvU2VsZWN0Q2hhcmFjdGVyXCI7XG5pbXBvcnQge09uQWRkRHJvcHBlZEl0ZW19IGZyb20gXCIuL1NjZW5lL0l0ZW1zL09uQWRkRHJvcHBlZEl0ZW1cIjtcbmltcG9ydCB7T25TaG93Um9vbVBsYXllcn0gZnJvbSBcIi4vUGxheWVyL09uU2hvd1Jvb21QbGF5ZXJcIjtcblxubGV0IGlvID0gcmVxdWlyZSgnc29ja2V0LmlvLWNsaWVudCcpO1xuXG5leHBvcnQgY2xhc3MgU29ja2V0Q2xpZW50IHtcbiAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZTtcbiAgICBwdWJsaWMgc29ja2V0O1xuICAgIHB1YmxpYyBjb25uZWN0aW9uSWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbm5lY3Qoc29ja2V0VXJsOiBzdHJpbmcsIGFjY2Vzc1Rva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgU2xhdnNMb2FkZXIuc2hvd0xvYWRlcldpdGhUZXh0KCdFc3RhYmxpc2hpbmcgY29ubmVjdGlvbiB3aXRoIHNlcnZlci4uLicpO1xuXG4gICAgICAgIHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdChzb2NrZXRVcmwsIHtxdWVyeTogJ2dhbWVUb2tlbj0nICsgYWNjZXNzVG9rZW59KTtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2Nvbm5lY3RfZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICBTbGF2c0xvYWRlci5zaG93TG9hZGVyV2l0aFRleHQoJ1Byb2JsZW0gd2l0aCBjb25uZWN0aW9uIHRvIHNlcnZlcicpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBsYXllckNvbm5lY3RlZCgpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICBjb25zdCBldmVudHMgPSBbXG4gICAgICAgICAgICBuZXcgU2hvd0VuZW1pZXNTb2NrZXRFdmVudChnYW1lLCB0aGlzLnNvY2tldCksXG4gICAgICAgICAgICBuZXcgVXBkYXRlRW5lbWllc1NvY2tldEV2ZW50KGdhbWUsIHRoaXMuc29ja2V0KSxcblxuICAgICAgICAgICAgbmV3IE9uT3BlbkNoZXN0KGdhbWUsIHRoaXMuc29ja2V0KSxcbiAgICAgICAgICAgIG5ldyBPblJlZnJlc2hDaGVzdChnYW1lLCB0aGlzLnNvY2tldCksXG5cbiAgICAgICAgICAgIG5ldyBPbkFkZFNwZWNpYWxJdGVtKGdhbWUsIHRoaXMuc29ja2V0KSxcbiAgICAgICAgICAgIG5ldyBPblJlZnJlc2hSYW5kb21TcGVjaWFsSXRlbXMoZ2FtZSwgdGhpcy5zb2NrZXQpLFxuICAgICAgICAgICAgbmV3IE9uU2hvd0Ryb3BwZWRJdGVtKGdhbWUsIHRoaXMuc29ja2V0KSxcbiAgICAgICAgICAgIG5ldyBPbkFkZERyb3BwZWRJdGVtKGdhbWUsIHRoaXMuc29ja2V0KSxcblxuICAgICAgICAgICAgbmV3IE9uUXVlc3RSZXF1aXJlbWVudERvbmVJbmZvcm1hdGlvbihnYW1lLCB0aGlzLnNvY2tldCksXG4gICAgICAgICAgICBuZXcgT25RdWVzdFJlcXVpcmVtZW50SW5mb3JtYXRpb24oZ2FtZSwgdGhpcy5zb2NrZXQpLFxuICAgICAgICAgICAgbmV3IE9uUmVmcmVzaFF1ZXN0cyhnYW1lLCB0aGlzLnNvY2tldCksXG4gICAgICAgICAgICBuZXcgT25SZWZyZXNoR2F0ZXdheXMoZ2FtZSwgdGhpcy5zb2NrZXQpLFxuXG4gICAgICAgICAgICBuZXcgT25BZGRBdHRyaWJ1dGUoZ2FtZSwgdGhpcy5zb2NrZXQpLFxuICAgICAgICAgICAgbmV3IE9uQWRkRXhwZXJpZW5jZShnYW1lLCB0aGlzLnNvY2tldCksXG4gICAgICAgICAgICBuZXcgT25OZXdMdmwoZ2FtZSwgdGhpcy5zb2NrZXQpLFxuICAgICAgICAgICAgbmV3IE9uUmVmcmVzaFBsYXllckVxdWlwKGdhbWUsIHRoaXMuc29ja2V0KSxcbiAgICAgICAgICAgIG5ldyBPblJlbW92ZVBsYXllcihnYW1lLCB0aGlzLnNvY2tldCksXG4gICAgICAgICAgICBuZXcgT25VcGRhdGVQbGF5ZXJzKGdhbWUsIHRoaXMuc29ja2V0KSxcbiAgICAgICAgICAgIG5ldyBPblNob3dSb29tUGxheWVyKGdhbWUsIHRoaXMuc29ja2V0KSxcbiAgICAgICAgICAgIG5ldyBPblVwZGF0ZVBsYXllcnNTa2lsbHMoZ2FtZSwgdGhpcy5zb2NrZXQpLFxuICAgICAgICBdO1xuXG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudDogU29ja2V0RXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50Lmxpc3RlbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhckV2ZW50cygpIHtcbiAgICAgICAgbGV0IGdhbWUgPSB0aGlzLmdhbWU7XG5cbiAgICAgICAgdGhpcy5zb2NrZXQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIG5ldyBPblNob3dQbGF5ZXIoZ2FtZSwgdGhpcy5zb2NrZXQpLmxpc3RlbigpO1xuICAgICAgICBuZXcgT25DaGFuZ2VTY2VuZShnYW1lLCB0aGlzLnNvY2tldCkubGlzdGVuKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXllckNvbm5lY3RlZCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgZ2FtZSA9IHRoaXMuZ2FtZTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbignY2xpZW50Q29ubmVjdGVkJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGlvbklkID0gZGF0YS5jb25uZWN0aW9uSWQ7XG5cbiAgICAgICAgICAgIHNlbGYuc29ja2V0LmVtaXQoJ2NoYW5nZVNjZW5lJywgU2VsZWN0Q2hhcmFjdGVyLlRZUEUpO1xuICAgICAgICAgICAgbmV3IE9uU2hvd1BsYXllcihnYW1lLCBzZWxmLnNvY2tldCkubGlzdGVuKCk7XG4gICAgICAgICAgICBuZXcgT25DaGFuZ2VTY2VuZShnYW1lLCBzZWxmLnNvY2tldCkubGlzdGVuKCk7XG5cbiAgICAgICAgICAgIC8vIHNlbGYuc29ja2V0LmVtaXQoJ3NlbGVjdENoYXJhY3RlcicsIDEpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==