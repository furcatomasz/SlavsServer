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
/******/ 	deferredModules.push(["./indexFrontend.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./AIServer.ts":
/*!*********************!*\
  !*** ./AIServer.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "../../node_modules/babylonjs/babylon.js");
var Room_1 = __webpack_require__(/*! ./Room */ "./Room.ts");
var Enemy_1 = __webpack_require__(/*! ./Enemy */ "./Enemy.ts");
var RemotePlayer_1 = __webpack_require__(/*! ./RemotePlayer */ "./RemotePlayer.ts");
var EnemyActionManager_1 = __webpack_require__(/*! ./EnemyActionManager */ "./EnemyActionManager.ts");
var PlayerActionManager_1 = __webpack_require__(/*! ./PlayerActionManager */ "./PlayerActionManager.ts");
var AIServer = /** @class */ (function () {
    function AIServer(canvas, socket) {
        this.rooms = [];
        this.socket = socket.connect('http:/php-socket:' + 5000, { query: 'monsterServer=1' });
        this.initEngine(canvas);
    }
    AIServer.prototype.getRoomById = function (roomId, createNewIfNotExists) {
        if (createNewIfNotExists === void 0) { createNewIfNotExists = true; }
        if ((this.rooms[roomId] == undefined)) {
            if (!createNewIfNotExists) {
                return null;
            }
            this.rooms[roomId] = new Room_1.Room(this);
        }
        return this.rooms[roomId];
    };
    AIServer.prototype.initEngine = function (canvas) {
        var self = this;
        // this.engine = (canvas) ? new BABYLON.Engine(canvas) : new BABYLON.NullEngine();
        this
            .socketShowEnemies()
            .socketUpdateEnemy()
            .socketPlayerConnected()
            .socketUpdatePlayer()
            .removePlayer()
            .socketCreateRoom();
        this.engine.runRenderLoop(function () {
            for (var key in self.rooms) {
                self.getRoomById(key).scene.render();
            }
        });
    };
    AIServer.prototype.socketUpdateEnemy = function () {
        var self = this;
        this.socket.on('updateEnemy', function (data) {
            var roomId = data.roomId;
            var remoteEnemy = data.enemy;
            var remoteEnemyId = data.enemyKey;
            var room = self.getRoomById(roomId);
            var localEnemy = room.enemies[remoteEnemyId];
            console.log('BABYLON: update enemy - ' + remoteEnemyId);
            if (remoteEnemy.statistics.hp <= 0) {
                localEnemy.clearActiveTarget(room);
                delete room.enemies[remoteEnemyId];
            }
        });
        return this;
    };
    AIServer.prototype.socketShowEnemies = function () {
        var self = this;
        this.socket.on('createEnemies', function (data) {
            var roomId = data.roomId;
            var room = self.getRoomById(roomId);
            var scene = room.scene;
            if (room.sceneType != data.sceneType) {
                console.log('BABYLON: clear enemies - ' + roomId);
                room.enemies.forEach(function (enemy) {
                    enemy.clearActiveTarget(room);
                });
                room.enemies = [];
            }
            room.sceneType = data.sceneType;
            if (!room.enemies.length) {
                console.log('BABYLON: create enemies - ' + roomId);
                data.enemies.forEach(function (enemyData, key) {
                    var enemy = room.enemies[key];
                    if (enemyData.statistics.hp > 0 && !enemy) {
                        room.enemies[key] = new Enemy_1.Enemy(key, enemyData.statistics.walkSpeed, new BABYLON.Vector3(enemyData.position.x, enemyData.position.y, enemyData.position.z), scene);
                    }
                });
            }
            else {
                console.log('BABYLON: enemies exists - ' + roomId);
            }
        });
        return this;
    };
    AIServer.prototype.socketCreateRoom = function () {
        var self = this;
        this.socket.on('createRoom', function (roomId) {
            var room = self.getRoomById(roomId, false);
            if (!room) {
                console.log('BABYLON: crate new room with scene - ' + roomId);
                self.rooms[roomId] = new Room_1.Room(self);
            }
            else {
                console.log('BABYLON: room exists - ' + roomId);
            }
        });
        return this;
    };
    AIServer.prototype.socketPlayerConnected = function () {
        var self = this;
        this.socket.on('showPlayer', function (playerData) {
            console.log('BABYLON: connected new player - ' + playerData.connectionId);
            var activeCharacter = playerData.activePlayer;
            var roomId = playerData.activeRoom.id;
            var room = self.getRoomById(roomId);
            var scene = room.scene;
            if (playerData.connectionId !== self.socket.id) {
                var remotePlayer = new RemotePlayer_1.RemotePlayer(activeCharacter.id, playerData.connectionId, activeCharacter.statistics.walkSpeed, roomId, scene, new BABYLON.Vector3(playerData.position.x, playerData.position.y, playerData.position.z));
                room.players[activeCharacter.id] = remotePlayer;
                EnemyActionManager_1.EnemyActionManager.registerPlayerInEnemyActionManager(self, remotePlayer);
            }
        });
        return this;
    };
    AIServer.prototype.removePlayer = function () {
        var self = this;
        this.socket.on('removePlayer', function (id) {
            Object.keys(self.rooms).forEach(function (roomId) {
                var room = self.rooms[roomId];
                room.players.forEach(function (player, playerId) {
                    if (player.socketId == id) {
                        console.log('BABYLON: disconnect player - ' + player.id);
                        player.dispose(room);
                        delete room.players[playerId];
                        if (!Object.keys(room.players).length) {
                            console.log('remove room');
                            room.removeRoom();
                            delete self.rooms[player.roomId];
                        }
                    }
                });
            });
        });
        return this;
    };
    AIServer.prototype.socketUpdatePlayer = function () {
        var self = this;
        this.socket.on('updatePlayer', function (updatedPlayer) {
            var characterId = updatedPlayer.activePlayerId;
            console.log('BABYLON: update player - ' + characterId);
            if (updatedPlayer.activePlayerAttack == true) {
                console.log('BABYLON: player attack - ' + characterId);
                return;
            }
            var roomId = updatedPlayer.activeRoomId;
            var room = self.getRoomById(roomId);
            var player = room.players[characterId];
            var scene = room.scene;
            if (player) {
                PlayerActionManager_1.PlayerActionManager.goToTarget(scene, player, updatedPlayer.targetPoint, roomId, self);
            }
        });
        return this;
    };
    return AIServer;
}());
exports.AIServer = AIServer;


/***/ }),

/***/ "./Enemy.ts":
/*!******************!*\
  !*** ./Enemy.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "../../node_modules/babylonjs/babylon.js");
var Enemy = /** @class */ (function () {
    function Enemy(id, walkSpeed, position, scene) {
        var box = BABYLON.Mesh.CreateBox(id.toString(), 3, scene, false);
        box.checkCollisions = false;
        box.position = position;
        var visibilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', {
            width: 30,
            height: 1,
            size: 30
        }, scene);
        visibilityArea.visibility = 0.5;
        visibilityArea.parent = box;
        this.mesh = box;
        this.visibilityAreaMesh = visibilityArea;
        this.key = id;
        this.attack = false;
        this.target = null;
        this.availableCharactersToAttack = [];
        this.activeObservers = [];
        this.actions = [];
        this.walkSpeed = walkSpeed;
        this.attackInterval = null;
    }
    Enemy.prototype.clearActiveTarget = function (room) {
        var self = this;
        console.log('BABYLON: unregister observer and interval for enemy - ' + this.key);
        this.activeObservers.forEach(function (observer) {
            room.scene.onBeforeRenderObservable.remove(observer);
        });
        room.players.forEach(function (player) {
            self.actions.forEach(function (action) {
                player.mesh.actionManager.unregisterAction(action);
            });
        });
        clearInterval(this.attackInterval);
        this.mesh.dispose();
    };
    return Enemy;
}());
exports.Enemy = Enemy;


/***/ }),

/***/ "./EnemyActionManager.ts":
/*!*******************************!*\
  !*** ./EnemyActionManager.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "../../node_modules/babylonjs/babylon.js");
var EnemyActionManager = /** @class */ (function () {
    function EnemyActionManager() {
    }
    EnemyActionManager.registerPlayerInEnemyActionManager = function (aiServer, player) {
        var playerMesh = player.mesh;
        var characterId = player.id;
        var roomId = player.roomId;
        var room = aiServer.getRoomById(roomId);
        var scene = room.scene;
        room.enemies.forEach(function (enemy, key) {
            var followObserver = function () {
                var mesh = enemy.mesh;
                mesh.lookAt(playerMesh.position.clone(), Math.PI);
                var rotation = mesh.rotation;
                var animationRatio = scene.getAnimationRatio();
                var walkSpeed = enemy.walkSpeed / animationRatio;
                var forwards = new BABYLON.Vector3(-(Math.sin(rotation.y) / walkSpeed), 0, -(Math.cos(rotation.y) / walkSpeed));
                mesh.moveWithCollisions(forwards);
                mesh.position.y = 0;
            };
            var setEnemyTargetFunction = function (enemy, event) {
                aiServer.socket.emit('setEnemyTarget', {
                    enemyKey: enemy.key,
                    position: enemy.mesh.position,
                    roomId: roomId,
                    target: enemy.target,
                    attack: enemy.attack,
                    availableCharactersToAttack: enemy.availableCharactersToAttack,
                    collisionEvent: event
                });
            };
            ////start attack
            var actionStartAttack = playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                parameter: enemy.mesh
            }, function () {
                enemy.availableCharactersToAttack[characterId] = true;
                if (enemy.target == characterId) {
                    enemy.attack = true;
                    setEnemyTargetFunction(enemy, 'OnIntersectionEnterTriggerAttack');
                    enemy.attackInterval = setInterval(function () {
                        setEnemyTargetFunction(enemy, 'OnIntersectionEnterTriggerAttack');
                    }, 1500);
                    scene.onBeforeRenderObservable.remove(enemy.activeObservers[characterId]);
                    console.log('BABYLON: Enemy ' + key + ' start attack player ' + player.id + ', roomID:' + roomId);
                }
            }));
            ////stop attack
            var actionStopAttack = playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
                parameter: enemy.mesh
            }, function () {
                delete enemy.availableCharactersToAttack[characterId];
                if (enemy.target == characterId) {
                    enemy.attack = false;
                    setEnemyTargetFunction(enemy, 'OnIntersectionExitTriggerAttack');
                    clearInterval(enemy.attackInterval);
                    enemy.activeObservers[characterId] = scene.onBeforeRenderObservable.add(followObserver);
                    console.log('BABYLON: Enemy ' + key + ' stop attack player ' + characterId + ', roomID:' + roomId);
                }
            }));
            ///start following
            var actionStartFollowing = playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                parameter: enemy.visibilityAreaMesh
            }, function () {
                if (!enemy.target) {
                    enemy.target = characterId;
                    setEnemyTargetFunction(enemy, 'OnIntersectionEnterTriggerVisibility');
                    scene.onBeforeRenderObservable.remove(enemy.activeObservers[characterId]);
                    enemy.activeObservers[characterId] = scene.onBeforeRenderObservable.add(followObserver);
                    console.log('BABYLON: Enemy ' + key + ' start following player ' + characterId + ', roomID:' + roomId);
                }
            }));
            ///stop following
            var actionStopFollowing = playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
                parameter: enemy.visibilityAreaMesh
            }, function () {
                if (enemy.target) {
                    enemy.target = null;
                    enemy.attack = false;
                    setEnemyTargetFunction(enemy, 'OnIntersectionExitTriggerVisibility');
                    console.log('BABYLON: Enemy ' + key + ' lost player ' + characterId + ', roomID:' + roomId);
                }
                scene.onBeforeRenderObservable.remove(enemy.activeObservers[characterId]);
            }));
            enemy.actions.push(actionStartAttack);
            enemy.actions.push(actionStopAttack);
            enemy.actions.push(actionStartFollowing);
            enemy.actions.push(actionStopFollowing);
        });
    };
    return EnemyActionManager;
}());
exports.EnemyActionManager = EnemyActionManager;


/***/ }),

/***/ "./PlayerActionManager.ts":
/*!********************************!*\
  !*** ./PlayerActionManager.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "../../node_modules/babylonjs/babylon.js");
var PlayerActionManager = /** @class */ (function () {
    function PlayerActionManager() {
    }
    PlayerActionManager.goToTarget = function (scene, player, targetPoint, roomId, aiServer) {
        scene.onBeforeRenderObservable.remove(player.renderObserver);
        var mesh = player.mesh;
        var targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
        mesh.lookAt(targetPointVector3, Math.PI);
        player.renderObserver = scene.onBeforeRenderObservable.add(function () {
            if (mesh.intersectsPoint(targetPointVector3)) {
                console.log('BABYLON: player intersect target point - ' + player.id + ', roomID:' + roomId);
                scene.onBeforeRenderObservable.remove(player.renderObserver);
                aiServer.socket.emit('updatePlayerPosition', {
                    playerKey: player.id,
                    position: player.mesh.position,
                    roomId: roomId,
                });
            }
            else {
                var rotation = mesh.rotation;
                var animationRatio = scene.getAnimationRatio();
                var walkSpeed = player.walkSpeed / animationRatio;
                var forwards = new BABYLON.Vector3(-((Math.sin(rotation.y)) / walkSpeed), 0, -(Math.cos(rotation.y) / walkSpeed));
                mesh.moveWithCollisions(forwards);
                mesh.position.y = 0;
            }
        });
    };
    return PlayerActionManager;
}());
exports.PlayerActionManager = PlayerActionManager;


/***/ }),

/***/ "./RemotePlayer.ts":
/*!*************************!*\
  !*** ./RemotePlayer.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "../../node_modules/babylonjs/babylon.js");
var RemotePlayer = /** @class */ (function () {
    function RemotePlayer(characterId, socketId, walkSpeed, roomId, scene, position) {
        this.id = characterId;
        this.socketId = socketId;
        this.walkSpeed = walkSpeed;
        this.roomId = roomId;
        var box = BABYLON.Mesh.CreateBox(characterId.toString(), 3, scene, false);
        box.checkCollisions = false;
        box.position = position;
        box.actionManager = new BABYLON.ActionManager(scene);
        this.mesh = box;
    }
    RemotePlayer.prototype.dispose = function (room) {
        var self = this;
        var scene = room.scene;
        scene.onBeforeRenderObservable.remove(this.renderObserver);
        this.mesh.dispose();
        room.enemies.forEach(function (enemy) {
            if (enemy.target == self.id) {
                clearInterval(enemy.attackInterval);
            }
        });
    };
    return RemotePlayer;
}());
exports.RemotePlayer = RemotePlayer;


/***/ }),

/***/ "./Room.ts":
/*!*****************!*\
  !*** ./Room.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "../../node_modules/babylonjs/babylon.js");
var Room = /** @class */ (function () {
    function Room(aiServer) {
        this.enemies = [];
        this.players = [];
        var sceneForRoom = new BABYLON.Scene(aiServer.engine);
        sceneForRoom.collisionsEnabled = false;
        var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 200, 0), sceneForRoom);
        camera.rotation = new BABYLON.Vector3(1.5, 1, 1);
        this.scene = sceneForRoom;
    }
    Room.prototype.removeRoom = function () {
        this.disposeEnemies();
        this.scene.dispose();
        return this;
    };
    Room.prototype.disposeEnemies = function () {
        var _this = this;
        this.enemies.forEach(function (enemy) {
            enemy.clearActiveTarget(_this);
        });
        return this;
    };
    return Room;
}());
exports.Room = Room;


/***/ }),

/***/ "./indexFrontend.ts":
/*!**************************!*\
  !*** ./indexFrontend.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AIServer_1 = __webpack_require__(/*! ./AIServer */ "./AIServer.ts");
var socket = __webpack_require__(/*! socket.io-client/dist/socket.io.js */ "../../node_modules/socket.io-client/dist/socket.io.js");
window.addEventListener('DOMContentLoaded', function () {
    new AIServer_1.AIServer(document.getElementById('renderCanvas'), socket);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQUlTZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vRW5lbXkudHMiLCJ3ZWJwYWNrOi8vLy4vRW5lbXlBY3Rpb25NYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL1BsYXllckFjdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vUmVtb3RlUGxheWVyLnRzIiwid2VicGFjazovLy8uL1Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXhGcm9udGVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QztBQUFELENBQUM7QUE3Qlksb0JBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ05qQix3RUFBb0M7QUFDcEMsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxpR0FBb0MsQ0FBQyxDQUFDO0FBRTNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUN4QyxJQUFJLG1CQUFRLENBQW9CLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDckYsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vaW5kZXhGcm9udGVuZC50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcbmltcG9ydCB7Um9vbX0gZnJvbSBcIi4vUm9vbVwiO1xuaW1wb3J0IHtFbmVteX0gZnJvbSBcIi4vRW5lbXlcIjtcbmltcG9ydCB7UmVtb3RlUGxheWVyfSBmcm9tIFwiLi9SZW1vdGVQbGF5ZXJcIjtcbmltcG9ydCB7RW5lbXlBY3Rpb25NYW5hZ2VyfSBmcm9tIFwiLi9FbmVteUFjdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7UGxheWVyQWN0aW9uTWFuYWdlcn0gZnJvbSBcIi4vUGxheWVyQWN0aW9uTWFuYWdlclwiO1xuXG5leHBvcnQgY2xhc3MgQUlTZXJ2ZXIge1xuICAgIHB1YmxpYyBlbmdpbmU6IEJBQllMT04uRW5naW5lO1xuICAgIHByb3RlY3RlZCBzY2VuZTogQkFCWUxPTi5TY2VuZTtcbiAgICBwdWJsaWMgc29ja2V0O1xuICAgIHByb3RlY3RlZCByb29tczogUm9vbVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHNvY2tldCkge1xuICAgICAgICB0aGlzLnNvY2tldCA9IHNvY2tldC5jb25uZWN0KCdodHRwOi8vMTI3LjAuMC4xOicgKyA1MDAwLCB7cXVlcnk6ICdtb25zdGVyU2VydmVyPTEnfSk7XG4gICAgICAgIHRoaXMuaW5pdEVuZ2luZShjYW52YXMpO1xuICAgIH1cblxuICAgIGdldFJvb21CeUlkKHJvb21JZDogc3RyaW5nLCBjcmVhdGVOZXdJZk5vdEV4aXN0czogYm9vbGVhbiA9IHRydWUpOiBSb29tIHtcbiAgICAgICAgaWYgKCh0aGlzLnJvb21zW3Jvb21JZF0gPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgaWYgKCFjcmVhdGVOZXdJZk5vdEV4aXN0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJvb21zW3Jvb21JZF0gPSBuZXcgUm9vbSh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJvb21zW3Jvb21JZF07XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRFbmdpbmUoY2FudmFzKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5lbmdpbmUgPSAoY2FudmFzKSA/IG5ldyBCQUJZTE9OLkVuZ2luZShjYW52YXMpIDogbmV3IEJBQllMT04uTnVsbEVuZ2luZSgpO1xuICAgICAgICB0aGlzXG4gICAgICAgICAgICAuc29ja2V0U2hvd0VuZW1pZXMoKVxuICAgICAgICAgICAgLnNvY2tldFVwZGF0ZUVuZW15KClcbiAgICAgICAgICAgIC5zb2NrZXRQbGF5ZXJDb25uZWN0ZWQoKVxuICAgICAgICAgICAgLnNvY2tldFVwZGF0ZVBsYXllcigpXG4gICAgICAgICAgICAucmVtb3ZlUGxheWVyKClcbiAgICAgICAgICAgIC5zb2NrZXRDcmVhdGVSb29tKCk7XG5cbiAgICAgICAgdGhpcy5lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2VsZi5yb29tcykge1xuICAgICAgICAgICAgICAgIHNlbGYuZ2V0Um9vbUJ5SWQoa2V5KS5zY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNvY2tldFVwZGF0ZUVuZW15KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGVFbmVteScsIGRhdGEgPT4ge1xuICAgICAgICAgICAgbGV0IHJvb21JZCA9IGRhdGEucm9vbUlkO1xuICAgICAgICAgICAgbGV0IHJlbW90ZUVuZW15ID0gZGF0YS5lbmVteTtcbiAgICAgICAgICAgIGxldCByZW1vdGVFbmVteUlkID0gZGF0YS5lbmVteUtleTtcbiAgICAgICAgICAgIGxldCByb29tID0gc2VsZi5nZXRSb29tQnlJZChyb29tSWQpO1xuICAgICAgICAgICAgbGV0IGxvY2FsRW5lbXkgPSByb29tLmVuZW1pZXNbcmVtb3RlRW5lbXlJZF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQkFCWUxPTjogdXBkYXRlIGVuZW15IC0gJyArIHJlbW90ZUVuZW15SWQpO1xuICAgICAgICAgICAgaWYgKHJlbW90ZUVuZW15LnN0YXRpc3RpY3MuaHAgPD0gMCkge1xuICAgICAgICAgICAgICAgIGxvY2FsRW5lbXkuY2xlYXJBY3RpdmVUYXJnZXQocm9vbSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJvb20uZW5lbWllc1tyZW1vdGVFbmVteUlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNvY2tldFNob3dFbmVtaWVzKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdjcmVhdGVFbmVtaWVzJywgZGF0YSA9PiB7XG4gICAgICAgICAgICBsZXQgcm9vbUlkID0gZGF0YS5yb29tSWQ7XG4gICAgICAgICAgICBsZXQgcm9vbSA9IHNlbGYuZ2V0Um9vbUJ5SWQocm9vbUlkKTtcbiAgICAgICAgICAgIGxldCBzY2VuZSA9IHJvb20uc2NlbmU7XG4gICAgICAgICAgICBpZihyb29tLnNjZW5lVHlwZSAhPSBkYXRhLnNjZW5lVHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCQUJZTE9OOiBjbGVhciBlbmVtaWVzIC0gJyArIHJvb21JZCk7XG5cbiAgICAgICAgICAgICAgICByb29tLmVuZW1pZXMuZm9yRWFjaCgoZW5lbXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkuY2xlYXJBY3RpdmVUYXJnZXQocm9vbSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcm9vbS5lbmVtaWVzID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvb20uc2NlbmVUeXBlID0gZGF0YS5zY2VuZVR5cGU7XG4gICAgICAgICAgICBpZiAoIXJvb20uZW5lbWllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQkFCWUxPTjogY3JlYXRlIGVuZW1pZXMgLSAnICsgcm9vbUlkKTtcbiAgICAgICAgICAgICAgICBkYXRhLmVuZW1pZXMuZm9yRWFjaCgoZW5lbXlEYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gcm9vbS5lbmVtaWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmVteURhdGEuc3RhdGlzdGljcy5ocCA+IDAgJiYgIWVuZW15KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb29tLmVuZW1pZXNba2V5XSA9IG5ldyBFbmVteShrZXksIGVuZW15RGF0YS5zdGF0aXN0aWNzLndhbGtTcGVlZCwgbmV3IEJBQllMT04uVmVjdG9yMyhlbmVteURhdGEucG9zaXRpb24ueCwgZW5lbXlEYXRhLnBvc2l0aW9uLnksIGVuZW15RGF0YS5wb3NpdGlvbi56KSwgc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCQUJZTE9OOiBlbmVtaWVzIGV4aXN0cyAtICcgKyByb29tSWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzb2NrZXRDcmVhdGVSb29tKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdjcmVhdGVSb29tJywgcm9vbUlkID0+IHtcbiAgICAgICAgICAgIGxldCByb29tID0gc2VsZi5nZXRSb29tQnlJZChyb29tSWQsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICghcm9vbSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCQUJZTE9OOiBjcmF0ZSBuZXcgcm9vbSB3aXRoIHNjZW5lIC0gJyArIHJvb21JZCk7XG4gICAgICAgICAgICAgICAgc2VsZi5yb29tc1tyb29tSWRdID0gbmV3IFJvb20oc2VsZik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCQUJZTE9OOiByb29tIGV4aXN0cyAtICcgKyByb29tSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc29ja2V0UGxheWVyQ29ubmVjdGVkKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdzaG93UGxheWVyJywgcGxheWVyRGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQkFCWUxPTjogY29ubmVjdGVkIG5ldyBwbGF5ZXIgLSAnICsgcGxheWVyRGF0YS5jb25uZWN0aW9uSWQpO1xuICAgICAgICAgICAgbGV0IGFjdGl2ZUNoYXJhY3RlciA9IHBsYXllckRhdGEuYWN0aXZlUGxheWVyO1xuICAgICAgICAgICAgbGV0IHJvb21JZCA9IHBsYXllckRhdGEuYWN0aXZlUm9vbS5pZDtcbiAgICAgICAgICAgIGxldCByb29tID0gc2VsZi5nZXRSb29tQnlJZChyb29tSWQpO1xuICAgICAgICAgICAgbGV0IHNjZW5lID0gcm9vbS5zY2VuZTtcblxuICAgICAgICAgICAgaWYgKHBsYXllckRhdGEuY29ubmVjdGlvbklkICE9PSBzZWxmLnNvY2tldC5pZCkge1xuICAgICAgICAgICAgICAgIGxldCByZW1vdGVQbGF5ZXIgPSBuZXcgUmVtb3RlUGxheWVyKFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGFyYWN0ZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckRhdGEuY29ubmVjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGFyYWN0ZXIuc3RhdGlzdGljcy53YWxrU3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIHJvb21JZCxcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUsXG4gICAgICAgICAgICAgICAgICAgIG5ldyBCQUJZTE9OLlZlY3RvcjMocGxheWVyRGF0YS5wb3NpdGlvbi54LCBwbGF5ZXJEYXRhLnBvc2l0aW9uLnksIHBsYXllckRhdGEucG9zaXRpb24ueilcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgcm9vbS5wbGF5ZXJzW2FjdGl2ZUNoYXJhY3Rlci5pZF0gPSByZW1vdGVQbGF5ZXI7XG4gICAgICAgICAgICAgICAgRW5lbXlBY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyUGxheWVySW5FbmVteUFjdGlvbk1hbmFnZXIoc2VsZiwgcmVtb3RlUGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbW92ZVBsYXllcigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNvY2tldC5vbigncmVtb3ZlUGxheWVyJywgaWQgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2VsZi5yb29tcykuZm9yRWFjaCgocm9vbUlkKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJvb20gPSBzZWxmLnJvb21zW3Jvb21JZF07XG4gICAgICAgICAgICAgICAgcm9vbS5wbGF5ZXJzLmZvckVhY2goKHBsYXllciwgcGxheWVySWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5zb2NrZXRJZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JBQllMT046IGRpc2Nvbm5lY3QgcGxheWVyIC0gJyArIHBsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZGlzcG9zZShyb29tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByb29tLnBsYXllcnNbcGxheWVySWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhyb29tLnBsYXllcnMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUgcm9vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb20ucmVtb3ZlUm9vbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLnJvb21zW3BsYXllci5yb29tSWRdO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzb2NrZXRVcGRhdGVQbGF5ZXIoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3VwZGF0ZVBsYXllcicsIHVwZGF0ZWRQbGF5ZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVySWQgPSB1cGRhdGVkUGxheWVyLmFjdGl2ZVBsYXllcklkO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQkFCWUxPTjogdXBkYXRlIHBsYXllciAtICcgKyBjaGFyYWN0ZXJJZCk7XG4gICAgICAgICAgICBpZiAodXBkYXRlZFBsYXllci5hY3RpdmVQbGF5ZXJBdHRhY2sgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCQUJZTE9OOiBwbGF5ZXIgYXR0YWNrIC0gJyArIGNoYXJhY3RlcklkKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgcm9vbUlkID0gdXBkYXRlZFBsYXllci5hY3RpdmVSb29tSWQ7XG4gICAgICAgICAgICBjb25zdCByb29tID0gc2VsZi5nZXRSb29tQnlJZChyb29tSWQpO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyID0gcm9vbS5wbGF5ZXJzW2NoYXJhY3RlcklkXTtcbiAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gcm9vbS5zY2VuZTtcbiAgICAgICAgICAgIGlmKHBsYXllcikge1xuICAgICAgICAgICAgICAgIFBsYXllckFjdGlvbk1hbmFnZXIuZ29Ub1RhcmdldChzY2VuZSwgcGxheWVyLCB1cGRhdGVkUGxheWVyLnRhcmdldFBvaW50LCByb29tSWQsIHNlbGYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbiIsImltcG9ydCAqIGFzIEJBQllMT04gZnJvbSBcImJhYnlsb25qc1wiO1xuaW1wb3J0IHtSb29tfSBmcm9tIFwiLi9Sb29tXCI7XG5cbmV4cG9ydCBjbGFzcyBFbmVteSB7XG4gICAgbWVzaDogQkFCWUxPTi5BYnN0cmFjdE1lc2g7XG4gICAga2V5OiBudW1iZXI7XG4gICAgdGFyZ2V0OiBudW1iZXI7XG4gICAgYXR0YWNrOiBib29sZWFuO1xuICAgIGFjdGl2ZU9ic2VydmVyczogQkFCWUxPTi5PYnNlcnZlcjxhbnk+W107XG4gICAgYWN0aW9uczogQkFCWUxPTi5JQWN0aW9uW107XG4gICAgd2Fsa1NwZWVkOiBudW1iZXI7XG4gICAgdmlzaWJpbGl0eUFyZWFNZXNoOiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcbiAgICBhdmFpbGFibGVDaGFyYWN0ZXJzVG9BdHRhY2s6IGJvb2xlYW5bXTtcbiAgICBhdHRhY2tJbnRlcnZhbDtcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHdhbGtTcGVlZDogbnVtYmVyLCBwb3NpdGlvbjogQkFCWUxPTi5WZWN0b3IzLCBzY2VuZTogQkFCWUxPTi5TY2VuZSkge1xuICAgICAgICBsZXQgYm94ID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveChpZC50b1N0cmluZygpLCAzLCBzY2VuZSwgZmFsc2UpO1xuICAgICAgICBib3guY2hlY2tDb2xsaXNpb25zID0gZmFsc2U7XG4gICAgICAgIGJveC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgIGxldCB2aXNpYmlsaXR5QXJlYSA9IEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlQm94KCdlbmVteV92aXNpdmlsaXR5QXJlYScsIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgICAgIHNpemU6IDMwXG4gICAgICAgIH0sIHNjZW5lKTtcbiAgICAgICAgdmlzaWJpbGl0eUFyZWEudmlzaWJpbGl0eSA9IDAuNTtcbiAgICAgICAgdmlzaWJpbGl0eUFyZWEucGFyZW50ID0gYm94O1xuXG4gICAgICAgIHRoaXMubWVzaCA9IGJveDtcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5QXJlYU1lc2ggPSB2aXNpYmlsaXR5QXJlYTtcbiAgICAgICAgdGhpcy5rZXkgPSBpZDtcbiAgICAgICAgdGhpcy5hdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLmF2YWlsYWJsZUNoYXJhY3RlcnNUb0F0dGFjayA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZU9ic2VydmVycyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy53YWxrU3BlZWQgPSB3YWxrU3BlZWQ7XG4gICAgICAgIHRoaXMuYXR0YWNrSW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckFjdGl2ZVRhcmdldChyb29tOiBSb29tKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coJ0JBQllMT046IHVucmVnaXN0ZXIgb2JzZXJ2ZXIgYW5kIGludGVydmFsIGZvciBlbmVteSAtICcgKyB0aGlzLmtleSk7XG4gICAgICAgIHRoaXMuYWN0aXZlT2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICByb29tLnNjZW5lLm9uQmVmb3JlUmVuZGVyT2JzZXJ2YWJsZS5yZW1vdmUob2JzZXJ2ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcm9vbS5wbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgICAgICAgc2VsZi5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHBsYXllci5tZXNoLmFjdGlvbk1hbmFnZXIudW5yZWdpc3RlckFjdGlvbihhY3Rpb24pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdHRhY2tJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMubWVzaC5kaXNwb3NlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tIFwiYmFieWxvbmpzXCI7XG5pbXBvcnQge0FJU2VydmVyfSBmcm9tIFwiLi9BSVNlcnZlclwiO1xuaW1wb3J0IHtSZW1vdGVQbGF5ZXJ9IGZyb20gXCIuL1JlbW90ZVBsYXllclwiO1xuaW1wb3J0IHtFbmVteX0gZnJvbSBcIi4vRW5lbXlcIjtcblxuZXhwb3J0IGNsYXNzIEVuZW15QWN0aW9uTWFuYWdlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUGxheWVySW5FbmVteUFjdGlvbk1hbmFnZXIoYWlTZXJ2ZXI6IEFJU2VydmVyLCBwbGF5ZXI6IFJlbW90ZVBsYXllcikge1xuICAgICAgICBjb25zdCBwbGF5ZXJNZXNoID0gcGxheWVyLm1lc2g7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlcklkID0gcGxheWVyLmlkO1xuICAgICAgICBjb25zdCByb29tSWQgPSBwbGF5ZXIucm9vbUlkO1xuICAgICAgICBjb25zdCByb29tID0gYWlTZXJ2ZXIuZ2V0Um9vbUJ5SWQocm9vbUlkKTtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByb29tLnNjZW5lO1xuXG4gICAgICAgIHJvb20uZW5lbWllcy5mb3JFYWNoKChlbmVteSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb2xsb3dPYnNlcnZlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzaCA9IGVuZW15Lm1lc2g7XG4gICAgICAgICAgICAgICAgbWVzaC5sb29rQXQocGxheWVyTWVzaC5wb3NpdGlvbi5jbG9uZSgpLCBNYXRoLlBJKTtcblxuICAgICAgICAgICAgICAgIGxldCByb3RhdGlvbiA9IG1lc2gucm90YXRpb247XG4gICAgICAgICAgICAgICAgbGV0IGFuaW1hdGlvblJhdGlvID0gc2NlbmUuZ2V0QW5pbWF0aW9uUmF0aW8oKTtcbiAgICAgICAgICAgICAgICBsZXQgd2Fsa1NwZWVkID0gZW5lbXkud2Fsa1NwZWVkIC8gYW5pbWF0aW9uUmF0aW87XG5cbiAgICAgICAgICAgICAgICBsZXQgZm9yd2FyZHMgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0oTWF0aC5zaW4ocm90YXRpb24ueSkgLyB3YWxrU3BlZWQpLCAwLCAtKE1hdGguY29zKHJvdGF0aW9uLnkpIC8gd2Fsa1NwZWVkKSk7XG4gICAgICAgICAgICAgICAgbWVzaC5tb3ZlV2l0aENvbGxpc2lvbnMoZm9yd2FyZHMpO1xuICAgICAgICAgICAgICAgIG1lc2gucG9zaXRpb24ueSA9IDA7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgc2V0RW5lbXlUYXJnZXRGdW5jdGlvbiA9IChlbmVteTogRW5lbXksIGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBhaVNlcnZlci5zb2NrZXQuZW1pdCgnc2V0RW5lbXlUYXJnZXQnLCB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15S2V5OiBlbmVteS5rZXksXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlbmVteS5tZXNoLnBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICByb29tSWQ6IHJvb21JZCxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBlbmVteS50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjazogZW5lbXkuYXR0YWNrLFxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVDaGFyYWN0ZXJzVG9BdHRhY2s6IGVuZW15LmF2YWlsYWJsZUNoYXJhY3RlcnNUb0F0dGFjayxcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uRXZlbnQ6IGV2ZW50XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLy8vc3RhcnQgYXR0YWNrXG4gICAgICAgICAgICBjb25zdCBhY3Rpb25TdGFydEF0dGFjayA9IHBsYXllck1lc2guYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbih7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uSW50ZXJzZWN0aW9uRW50ZXJUcmlnZ2VyLFxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcjogZW5lbXkubWVzaFxuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVuZW15LmF2YWlsYWJsZUNoYXJhY3RlcnNUb0F0dGFja1tjaGFyYWN0ZXJJZF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS50YXJnZXQgPT0gY2hhcmFjdGVySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkuYXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW5lbXlUYXJnZXRGdW5jdGlvbihlbmVteSwgJ09uSW50ZXJzZWN0aW9uRW50ZXJUcmlnZ2VyQXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15LmF0dGFja0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW5lbXlUYXJnZXRGdW5jdGlvbihlbmVteSwgJ09uSW50ZXJzZWN0aW9uRW50ZXJUcmlnZ2VyQXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDE1MDApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLm9uQmVmb3JlUmVuZGVyT2JzZXJ2YWJsZS5yZW1vdmUoZW5lbXkuYWN0aXZlT2JzZXJ2ZXJzW2NoYXJhY3RlcklkXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCQUJZTE9OOiBFbmVteSAnICsga2V5ICsgJyBzdGFydCBhdHRhY2sgcGxheWVyICcgKyBwbGF5ZXIuaWQgKyAnLCByb29tSUQ6JyArIHJvb21JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAvLy8vc3RvcCBhdHRhY2tcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvblN0b3BBdHRhY2sgPSBwbGF5ZXJNZXNoLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oe1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IEJBQllMT04uQWN0aW9uTWFuYWdlci5PbkludGVyc2VjdGlvbkV4aXRUcmlnZ2VyLFxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcjogZW5lbXkubWVzaFxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbmVteS5hdmFpbGFibGVDaGFyYWN0ZXJzVG9BdHRhY2tbY2hhcmFjdGVySWRdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LnRhcmdldCA9PSBjaGFyYWN0ZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBlbmVteS5hdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW5lbXlUYXJnZXRGdW5jdGlvbihlbmVteSwgJ09uSW50ZXJzZWN0aW9uRXhpdFRyaWdnZXJBdHRhY2snKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChlbmVteS5hdHRhY2tJbnRlcnZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZW5lbXkuYWN0aXZlT2JzZXJ2ZXJzW2NoYXJhY3RlcklkXSA9IHNjZW5lLm9uQmVmb3JlUmVuZGVyT2JzZXJ2YWJsZS5hZGQoZm9sbG93T2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQkFCWUxPTjogRW5lbXkgJyArIGtleSArICcgc3RvcCBhdHRhY2sgcGxheWVyICcgKyBjaGFyYWN0ZXJJZCArICcsIHJvb21JRDonICsgcm9vbUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIC8vL3N0YXJ0IGZvbGxvd2luZ1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uU3RhcnRGb2xsb3dpbmcgPSBwbGF5ZXJNZXNoLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oe1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IEJBQllMT04uQWN0aW9uTWFuYWdlci5PbkludGVyc2VjdGlvbkVudGVyVHJpZ2dlcixcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6IGVuZW15LnZpc2liaWxpdHlBcmVhTWVzaFxuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZW5lbXkudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15LnRhcmdldCA9IGNoYXJhY3RlcklkO1xuICAgICAgICAgICAgICAgICAgICBzZXRFbmVteVRhcmdldEZ1bmN0aW9uKGVuZW15LCAnT25JbnRlcnNlY3Rpb25FbnRlclRyaWdnZXJWaXNpYmlsaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLm9uQmVmb3JlUmVuZGVyT2JzZXJ2YWJsZS5yZW1vdmUoZW5lbXkuYWN0aXZlT2JzZXJ2ZXJzW2NoYXJhY3RlcklkXSk7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15LmFjdGl2ZU9ic2VydmVyc1tjaGFyYWN0ZXJJZF0gPSBzY2VuZS5vbkJlZm9yZVJlbmRlck9ic2VydmFibGUuYWRkKGZvbGxvd09ic2VydmVyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JBQllMT046IEVuZW15ICcgKyBrZXkgKyAnIHN0YXJ0IGZvbGxvd2luZyBwbGF5ZXIgJyArIGNoYXJhY3RlcklkICsgJywgcm9vbUlEOicgKyByb29tSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgLy8vc3RvcCBmb2xsb3dpbmdcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvblN0b3BGb2xsb3dpbmcgPSBwbGF5ZXJNZXNoLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24obmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oe1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IEJBQllMT04uQWN0aW9uTWFuYWdlci5PbkludGVyc2VjdGlvbkV4aXRUcmlnZ2VyLFxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcjogZW5lbXkudmlzaWJpbGl0eUFyZWFNZXNoXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBlbmVteS50YXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBlbmVteS5hdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RW5lbXlUYXJnZXRGdW5jdGlvbihlbmVteSwgJ09uSW50ZXJzZWN0aW9uRXhpdFRyaWdnZXJWaXNpYmlsaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCQUJZTE9OOiBFbmVteSAnICsga2V5ICsgJyBsb3N0IHBsYXllciAnICsgY2hhcmFjdGVySWQgKyAnLCByb29tSUQ6JyArIHJvb21JZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2NlbmUub25CZWZvcmVSZW5kZXJPYnNlcnZhYmxlLnJlbW92ZShlbmVteS5hY3RpdmVPYnNlcnZlcnNbY2hhcmFjdGVySWRdKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgZW5lbXkuYWN0aW9ucy5wdXNoKGFjdGlvblN0YXJ0QXR0YWNrKTtcbiAgICAgICAgICAgIGVuZW15LmFjdGlvbnMucHVzaChhY3Rpb25TdG9wQXR0YWNrKTtcbiAgICAgICAgICAgIGVuZW15LmFjdGlvbnMucHVzaChhY3Rpb25TdGFydEZvbGxvd2luZyk7XG4gICAgICAgICAgICBlbmVteS5hY3Rpb25zLnB1c2goYWN0aW9uU3RvcEZvbGxvd2luZyk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tIFwiYmFieWxvbmpzXCI7XG5pbXBvcnQge1JlbW90ZVBsYXllcn0gZnJvbSBcIi4vUmVtb3RlUGxheWVyXCI7XG5pbXBvcnQge0FJU2VydmVyfSBmcm9tIFwiLi9BSVNlcnZlclwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyQWN0aW9uTWFuYWdlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdvVG9UYXJnZXQoc2NlbmU6IEJBQllMT04uU2NlbmUsIHBsYXllcjogUmVtb3RlUGxheWVyLCB0YXJnZXRQb2ludDogYW55LCByb29tSWQ6IHN0cmluZywgYWlTZXJ2ZXI6IEFJU2VydmVyKSB7XG4gICAgICAgIHNjZW5lLm9uQmVmb3JlUmVuZGVyT2JzZXJ2YWJsZS5yZW1vdmUocGxheWVyLnJlbmRlck9ic2VydmVyKTtcbiAgICAgICAgbGV0IG1lc2ggPSBwbGF5ZXIubWVzaDtcbiAgICAgICAgbGV0IHRhcmdldFBvaW50VmVjdG9yMyA9IG5ldyBCQUJZTE9OLlZlY3RvcjModGFyZ2V0UG9pbnQueCwgMCwgdGFyZ2V0UG9pbnQueik7XG4gICAgICAgIG1lc2gubG9va0F0KHRhcmdldFBvaW50VmVjdG9yMywgTWF0aC5QSSk7XG5cbiAgICAgICAgcGxheWVyLnJlbmRlck9ic2VydmVyID0gc2NlbmUub25CZWZvcmVSZW5kZXJPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAobWVzaC5pbnRlcnNlY3RzUG9pbnQodGFyZ2V0UG9pbnRWZWN0b3IzKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCQUJZTE9OOiBwbGF5ZXIgaW50ZXJzZWN0IHRhcmdldCBwb2ludCAtICcgKyBwbGF5ZXIuaWQgKyAnLCByb29tSUQ6JyArIHJvb21JZCk7XG4gICAgICAgICAgICAgICAgc2NlbmUub25CZWZvcmVSZW5kZXJPYnNlcnZhYmxlLnJlbW92ZShwbGF5ZXIucmVuZGVyT2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgIGFpU2VydmVyLnNvY2tldC5lbWl0KCd1cGRhdGVQbGF5ZXJQb3NpdGlvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyS2V5OiBwbGF5ZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwbGF5ZXIubWVzaC5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcm9vbUlkOiByb29tSWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCByb3RhdGlvbiA9IG1lc2gucm90YXRpb247XG4gICAgICAgICAgICAgICAgbGV0IGFuaW1hdGlvblJhdGlvID0gc2NlbmUuZ2V0QW5pbWF0aW9uUmF0aW8oKTtcbiAgICAgICAgICAgICAgICBsZXQgd2Fsa1NwZWVkID0gcGxheWVyLndhbGtTcGVlZCAvIGFuaW1hdGlvblJhdGlvO1xuXG4gICAgICAgICAgICAgICAgbGV0IGZvcndhcmRzID0gbmV3IEJBQllMT04uVmVjdG9yMygtKChNYXRoLnNpbihyb3RhdGlvbi55KSkgLyB3YWxrU3BlZWQpLCAwLCAtKE1hdGguY29zKHJvdGF0aW9uLnkpIC8gd2Fsa1NwZWVkKSk7XG4gICAgICAgICAgICAgICAgbWVzaC5tb3ZlV2l0aENvbGxpc2lvbnMoZm9yd2FyZHMpO1xuICAgICAgICAgICAgICAgIG1lc2gucG9zaXRpb24ueSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEJBQllMT04gZnJvbSBcImJhYnlsb25qc1wiO1xuaW1wb3J0IHtSb29tfSBmcm9tIFwiLi9Sb29tXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW1vdGVQbGF5ZXIge1xuICAgIGlkOiBudW1iZXI7XG4gICAgc29ja2V0SWQ6IHN0cmluZztcbiAgICB3YWxrU3BlZWQ6IG51bWJlcjtcbiAgICByb29tSWQ6IHN0cmluZztcbiAgICBtZXNoOiBCQUJZTE9OLkFic3RyYWN0TWVzaDtcbiAgICByZW5kZXJPYnNlcnZlcjogQkFCWUxPTi5PYnNlcnZlcjxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoY2hhcmFjdGVySWQ6IG51bWJlciwgc29ja2V0SWQ6IHN0cmluZywgd2Fsa1NwZWVkOiBudW1iZXIsIHJvb21JZDogc3RyaW5nLCBzY2VuZTogQkFCWUxPTi5TY2VuZSwgcG9zaXRpb246IEJBQllMT04uVmVjdG9yMykge1xuICAgICAgICB0aGlzLmlkID0gY2hhcmFjdGVySWQ7XG4gICAgICAgIHRoaXMuc29ja2V0SWQgPSBzb2NrZXRJZDtcbiAgICAgICAgdGhpcy53YWxrU3BlZWQgPSB3YWxrU3BlZWQ7XG4gICAgICAgIHRoaXMucm9vbUlkID0gcm9vbUlkO1xuXG4gICAgICAgIGxldCBib3ggPSBCQUJZTE9OLk1lc2guQ3JlYXRlQm94KGNoYXJhY3RlcklkLnRvU3RyaW5nKCksIDMsIHNjZW5lLCBmYWxzZSk7XG4gICAgICAgIGJveC5jaGVja0NvbGxpc2lvbnMgPSBmYWxzZTtcbiAgICAgICAgYm94LnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIGJveC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihzY2VuZSk7XG4gICAgICAgIHRoaXMubWVzaCA9IGJveDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwb3NlKHJvb206IFJvb20pIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcm9vbS5zY2VuZTtcbiAgICAgICAgc2NlbmUub25CZWZvcmVSZW5kZXJPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLnJlbmRlck9ic2VydmVyKTtcbiAgICAgICAgdGhpcy5tZXNoLmRpc3Bvc2UoKTtcblxuICAgICAgICByb29tLmVuZW1pZXMuZm9yRWFjaCgoZW5lbXkpID0+IHtcbiAgICAgICAgICAgIGlmKGVuZW15LnRhcmdldCA9PSBzZWxmLmlkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChlbmVteS5hdHRhY2tJbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG59XG4iLCJpbXBvcnQge0VuZW15fSBmcm9tICcuL0VuZW15JztcbmltcG9ydCB7UmVtb3RlUGxheWVyfSBmcm9tIFwiLi9SZW1vdGVQbGF5ZXJcIjtcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSBcImJhYnlsb25qc1wiO1xuaW1wb3J0IHtTY2VuZX0gZnJvbSBcImJhYnlsb25qc1wiO1xuaW1wb3J0IHtBSVNlcnZlcn0gZnJvbSBcIi4vQUlTZXJ2ZXJcIjtcblxuZXhwb3J0IGNsYXNzIFJvb20ge1xuICAgIGVuZW1pZXM6IEVuZW15W10gPSBbXTtcbiAgICBwbGF5ZXJzOiBSZW1vdGVQbGF5ZXJbXSA9IFtdO1xuICAgIHNjZW5lOiBTY2VuZTtcbiAgICBzY2VuZVR5cGU6IE51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGFpU2VydmVyOiBBSVNlcnZlcikge1xuICAgICAgICBsZXQgc2NlbmVGb3JSb29tID0gbmV3IEJBQllMT04uU2NlbmUoYWlTZXJ2ZXIuZW5naW5lKTtcbiAgICAgICAgc2NlbmVGb3JSb29tLmNvbGxpc2lvbnNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBjYW1lcmEgPSBuZXcgQkFCWUxPTi5GcmVlQ2FtZXJhKFwiQ2FtZXJhXCIsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMjAwLCAwKSwgc2NlbmVGb3JSb29tKTtcbiAgICAgICAgY2FtZXJhLnJvdGF0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygxLjUsIDEsIDEpO1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVGb3JSb29tO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVSb29tKCkge1xuICAgICAgICB0aGlzLmRpc3Bvc2VFbmVtaWVzKCk7XG4gICAgICAgIHRoaXMuc2NlbmUuZGlzcG9zZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwb3NlRW5lbWllcygpIHtcbiAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goKGVuZW15KSA9PiB7XG4gICAgICAgICAgICBlbmVteS5jbGVhckFjdGl2ZVRhcmdldCh0aGlzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0FJU2VydmVyfSBmcm9tIFwiLi9BSVNlcnZlclwiO1xubGV0IHNvY2tldCA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQvZGlzdC9zb2NrZXQuaW8uanMnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbmV3IEFJU2VydmVyKDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuZGVyQ2FudmFzJyksIHNvY2tldCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=