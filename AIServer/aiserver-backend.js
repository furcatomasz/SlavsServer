/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BABYLON = __webpack_require__(/*! babylonjs */ \"babylonjs\");\nvar Room_1 = __webpack_require__(/*! ./Room */ \"./Room.ts\");\nvar Enemy_1 = __webpack_require__(/*! ./Enemy */ \"./Enemy.ts\");\nvar RemotePlayer_1 = __webpack_require__(/*! ./RemotePlayer */ \"./RemotePlayer.ts\");\nvar EnemyActionManager_1 = __webpack_require__(/*! ./EnemyActionManager */ \"./EnemyActionManager.ts\");\nvar PlayerActionManager_1 = __webpack_require__(/*! ./PlayerActionManager */ \"./PlayerActionManager.ts\");\nvar AIServer = /** @class */ (function () {\n    function AIServer(canvas, socket) {\n        this.rooms = [];\n        this.socket = socket.connect('http://php-socket:' + 5000, { query: 'monsterServer=1' });\n        this.initEngine(canvas);\n    }\n    AIServer.prototype.getRoomById = function (roomId, createNewIfNotExists) {\n        if (createNewIfNotExists === void 0) { createNewIfNotExists = true; }\n        if ((this.rooms[roomId] == undefined)) {\n            if (!createNewIfNotExists) {\n                return null;\n            }\n            this.rooms[roomId] = new Room_1.Room(this);\n        }\n        return this.rooms[roomId];\n    };\n    AIServer.prototype.initEngine = function (canvas) {\n        var self = this;\n        this.engine = (canvas) ? new BABYLON.Engine(canvas) : new BABYLON.NullEngine();\n        this\n            .socketShowEnemies()\n            .socketUpdateEnemy()\n            .socketPlayerConnected()\n            .socketUpdatePlayer()\n            .removePlayer()\n            .socketCreateRoom();\n        this.engine.runRenderLoop(function () {\n            for (var key in self.rooms) {\n                self.getRoomById(key).scene.render();\n            }\n        });\n    };\n    AIServer.prototype.socketUpdateEnemy = function () {\n        var self = this;\n        this.socket.on('updateEnemy', function (data) {\n            var roomId = data.roomId;\n            var remoteEnemy = data.enemy;\n            var remoteEnemyId = data.enemyKey;\n            var room = self.getRoomById(roomId);\n            var localEnemy = room.enemies[remoteEnemyId];\n            console.log('BABYLON: update enemy - ' + remoteEnemyId);\n            if (remoteEnemy.statistics.hp <= 0) {\n                localEnemy.clearActiveTarget(room);\n                delete room.enemies[remoteEnemyId];\n            }\n        });\n        return this;\n    };\n    AIServer.prototype.socketShowEnemies = function () {\n        var self = this;\n        this.socket.on('createEnemies', function (data) {\n            var roomId = data.roomId;\n            var room = self.getRoomById(roomId);\n            var scene = room.scene;\n            if (room.sceneType != data.sceneType) {\n                console.log('BABYLON: clear enemies - ' + roomId);\n                room.enemies.forEach(function (enemy) {\n                    enemy.clearActiveTarget(room);\n                });\n                room.enemies = [];\n            }\n            room.sceneType = data.sceneType;\n            if (!room.enemies.length) {\n                console.log('BABYLON: create enemies - ' + roomId);\n                data.enemies.forEach(function (enemyData, key) {\n                    var enemy = room.enemies[key];\n                    if (enemyData.statistics.hp > 0 && !enemy) {\n                        room.enemies[key] = new Enemy_1.Enemy(key, enemyData.statistics.walkSpeed, new BABYLON.Vector3(enemyData.position.x, enemyData.position.y, enemyData.position.z), scene);\n                    }\n                });\n            }\n            else {\n                console.log('BABYLON: enemies exists - ' + roomId);\n            }\n        });\n        return this;\n    };\n    AIServer.prototype.socketCreateRoom = function () {\n        var self = this;\n        this.socket.on('createRoom', function (roomId) {\n            var room = self.getRoomById(roomId, false);\n            if (!room) {\n                console.log('BABYLON: crate new room with scene - ' + roomId);\n                self.rooms[roomId] = new Room_1.Room(self);\n            }\n            else {\n                console.log('BABYLON: room exists - ' + roomId);\n            }\n        });\n        return this;\n    };\n    AIServer.prototype.socketPlayerConnected = function () {\n        var self = this;\n        this.socket.on('showPlayer', function (playerData) {\n            console.log('BABYLON: connected new player - ' + playerData.connectionId);\n            var activeCharacter = playerData.activePlayer;\n            var roomId = playerData.activeRoom.id;\n            var room = self.getRoomById(roomId);\n            var scene = room.scene;\n            if (playerData.connectionId !== self.socket.id) {\n                var remotePlayer = new RemotePlayer_1.RemotePlayer(activeCharacter.id, playerData.connectionId, activeCharacter.statistics.walkSpeed, roomId, scene, new BABYLON.Vector3(playerData.position.x, playerData.position.y, playerData.position.z));\n                room.players[activeCharacter.id] = remotePlayer;\n                EnemyActionManager_1.EnemyActionManager.registerPlayerInEnemyActionManager(self, remotePlayer);\n            }\n        });\n        return this;\n    };\n    AIServer.prototype.removePlayer = function () {\n        var self = this;\n        this.socket.on('removePlayer', function (id) {\n            Object.keys(self.rooms).forEach(function (roomId) {\n                var room = self.rooms[roomId];\n                room.players.forEach(function (player, playerId) {\n                    if (player.socketId == id) {\n                        console.log('BABYLON: disconnect player - ' + player.id);\n                        player.dispose(room);\n                        delete room.players[playerId];\n                        if (!Object.keys(room.players).length) {\n                            console.log('remove room');\n                            room.removeRoom();\n                            delete self.rooms[player.roomId];\n                        }\n                    }\n                });\n            });\n        });\n        return this;\n    };\n    AIServer.prototype.socketUpdatePlayer = function () {\n        var self = this;\n        this.socket.on('updatePlayer', function (updatedPlayer) {\n            var characterId = updatedPlayer.activePlayerId;\n            console.log('BABYLON: update player - ' + characterId);\n            if (updatedPlayer.activePlayerAttack == true) {\n                console.log('BABYLON: player attack - ' + characterId);\n                return;\n            }\n            var roomId = updatedPlayer.activeRoomId;\n            var room = self.getRoomById(roomId);\n            var player = room.players[characterId];\n            var scene = room.scene;\n            if (player) {\n                PlayerActionManager_1.PlayerActionManager.goToTarget(scene, player, updatedPlayer.targetPoint, roomId, self);\n            }\n        });\n        return this;\n    };\n    return AIServer;\n}());\nexports.AIServer = AIServer;\n\n\n//# sourceURL=webpack:///./AIServer.ts?");

/***/ }),

/***/ "./Enemy.ts":
/*!******************!*\
  !*** ./Enemy.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BABYLON = __webpack_require__(/*! babylonjs */ \"babylonjs\");\nvar Enemy = /** @class */ (function () {\n    function Enemy(id, walkSpeed, position, scene) {\n        var box = BABYLON.Mesh.CreateBox(id.toString(), 3, scene, false);\n        box.checkCollisions = false;\n        box.position = position;\n        var visibilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', {\n            width: 30,\n            height: 1,\n            size: 30\n        }, scene);\n        visibilityArea.visibility = 0.5;\n        visibilityArea.parent = box;\n        this.mesh = box;\n        this.visibilityAreaMesh = visibilityArea;\n        this.key = id;\n        this.attack = false;\n        this.target = null;\n        this.availableCharactersToAttack = [];\n        this.activeObservers = [];\n        this.actions = [];\n        this.walkSpeed = walkSpeed;\n        this.attackInterval = null;\n    }\n    Enemy.prototype.clearActiveTarget = function (room) {\n        var self = this;\n        console.log('BABYLON: unregister observer and interval for enemy - ' + this.key);\n        this.activeObservers.forEach(function (observer) {\n            room.scene.onBeforeRenderObservable.remove(observer);\n        });\n        room.players.forEach(function (player) {\n            self.actions.forEach(function (action) {\n                player.mesh.actionManager.unregisterAction(action);\n            });\n        });\n        clearInterval(this.attackInterval);\n        this.mesh.dispose();\n    };\n    return Enemy;\n}());\nexports.Enemy = Enemy;\n\n\n//# sourceURL=webpack:///./Enemy.ts?");

/***/ }),

/***/ "./EnemyActionManager.ts":
/*!*******************************!*\
  !*** ./EnemyActionManager.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BABYLON = __webpack_require__(/*! babylonjs */ \"babylonjs\");\nvar EnemyActionManager = /** @class */ (function () {\n    function EnemyActionManager() {\n    }\n    EnemyActionManager.registerPlayerInEnemyActionManager = function (aiServer, player) {\n        var playerMesh = player.mesh;\n        var characterId = player.id;\n        var roomId = player.roomId;\n        var room = aiServer.getRoomById(roomId);\n        var scene = room.scene;\n        room.enemies.forEach(function (enemy, key) {\n            var followObserver = function () {\n                var mesh = enemy.mesh;\n                mesh.lookAt(playerMesh.position.clone(), Math.PI);\n                var rotation = mesh.rotation;\n                var animationRatio = scene.getAnimationRatio();\n                var walkSpeed = enemy.walkSpeed / animationRatio;\n                var forwards = new BABYLON.Vector3(-(Math.sin(rotation.y) / walkSpeed), 0, -(Math.cos(rotation.y) / walkSpeed));\n                mesh.moveWithCollisions(forwards);\n                mesh.position.y = 0;\n            };\n            var setEnemyTargetFunction = function (enemy, event) {\n                aiServer.socket.emit('setEnemyTarget', {\n                    enemyKey: enemy.key,\n                    position: enemy.mesh.position,\n                    roomId: roomId,\n                    target: enemy.target,\n                    attack: enemy.attack,\n                    availableCharactersToAttack: enemy.availableCharactersToAttack,\n                    collisionEvent: event\n                });\n            };\n            ////start attack\n            var actionStartAttack = playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({\n                trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,\n                parameter: enemy.mesh\n            }, function () {\n                enemy.availableCharactersToAttack[characterId] = true;\n                if (enemy.target == characterId) {\n                    enemy.attack = true;\n                    setEnemyTargetFunction(enemy, 'OnIntersectionEnterTriggerAttack');\n                    enemy.attackInterval = setInterval(function () {\n                        setEnemyTargetFunction(enemy, 'OnIntersectionEnterTriggerAttack');\n                    }, 1500);\n                    scene.onBeforeRenderObservable.remove(enemy.activeObservers[characterId]);\n                    console.log('BABYLON: Enemy ' + key + ' start attack player ' + player.id + ', roomID:' + roomId);\n                }\n            }));\n            ////stop attack\n            var actionStopAttack = playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({\n                trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,\n                parameter: enemy.mesh\n            }, function () {\n                delete enemy.availableCharactersToAttack[characterId];\n                if (enemy.target == characterId) {\n                    enemy.attack = false;\n                    setEnemyTargetFunction(enemy, 'OnIntersectionExitTriggerAttack');\n                    clearInterval(enemy.attackInterval);\n                    enemy.activeObservers[characterId] = scene.onBeforeRenderObservable.add(followObserver);\n                    console.log('BABYLON: Enemy ' + key + ' stop attack player ' + characterId + ', roomID:' + roomId);\n                }\n            }));\n            ///start following\n            var actionStartFollowing = playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({\n                trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,\n                parameter: enemy.visibilityAreaMesh\n            }, function () {\n                if (!enemy.target) {\n                    enemy.target = characterId;\n                    setEnemyTargetFunction(enemy, 'OnIntersectionEnterTriggerVisibility');\n                    scene.onBeforeRenderObservable.remove(enemy.activeObservers[characterId]);\n                    enemy.activeObservers[characterId] = scene.onBeforeRenderObservable.add(followObserver);\n                    console.log('BABYLON: Enemy ' + key + ' start following player ' + characterId + ', roomID:' + roomId);\n                }\n            }));\n            ///stop following\n            var actionStopFollowing = playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({\n                trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,\n                parameter: enemy.visibilityAreaMesh\n            }, function () {\n                if (enemy.target) {\n                    enemy.target = null;\n                    enemy.attack = false;\n                    setEnemyTargetFunction(enemy, 'OnIntersectionExitTriggerVisibility');\n                    console.log('BABYLON: Enemy ' + key + ' lost player ' + characterId + ', roomID:' + roomId);\n                }\n                scene.onBeforeRenderObservable.remove(enemy.activeObservers[characterId]);\n            }));\n            enemy.actions.push(actionStartAttack);\n            enemy.actions.push(actionStopAttack);\n            enemy.actions.push(actionStartFollowing);\n            enemy.actions.push(actionStopFollowing);\n        });\n    };\n    return EnemyActionManager;\n}());\nexports.EnemyActionManager = EnemyActionManager;\n\n\n//# sourceURL=webpack:///./EnemyActionManager.ts?");

/***/ }),

/***/ "./PlayerActionManager.ts":
/*!********************************!*\
  !*** ./PlayerActionManager.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BABYLON = __webpack_require__(/*! babylonjs */ \"babylonjs\");\nvar PlayerActionManager = /** @class */ (function () {\n    function PlayerActionManager() {\n    }\n    PlayerActionManager.goToTarget = function (scene, player, targetPoint, roomId, aiServer) {\n        scene.onBeforeRenderObservable.remove(player.renderObserver);\n        var mesh = player.mesh;\n        var targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);\n        mesh.lookAt(targetPointVector3, Math.PI);\n        player.renderObserver = scene.onBeforeRenderObservable.add(function () {\n            if (mesh.intersectsPoint(targetPointVector3)) {\n                console.log('BABYLON: player intersect target point - ' + player.id + ', roomID:' + roomId);\n                scene.onBeforeRenderObservable.remove(player.renderObserver);\n                aiServer.socket.emit('updatePlayerPosition', {\n                    playerKey: player.id,\n                    position: player.mesh.position,\n                    roomId: roomId,\n                });\n            }\n            else {\n                var rotation = mesh.rotation;\n                var animationRatio = scene.getAnimationRatio();\n                var walkSpeed = player.walkSpeed / animationRatio;\n                var forwards = new BABYLON.Vector3(-((Math.sin(rotation.y)) / walkSpeed), 0, -(Math.cos(rotation.y) / walkSpeed));\n                mesh.moveWithCollisions(forwards);\n                mesh.position.y = 0;\n            }\n        });\n    };\n    return PlayerActionManager;\n}());\nexports.PlayerActionManager = PlayerActionManager;\n\n\n//# sourceURL=webpack:///./PlayerActionManager.ts?");

/***/ }),

/***/ "./RemotePlayer.ts":
/*!*************************!*\
  !*** ./RemotePlayer.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BABYLON = __webpack_require__(/*! babylonjs */ \"babylonjs\");\nvar RemotePlayer = /** @class */ (function () {\n    function RemotePlayer(characterId, socketId, walkSpeed, roomId, scene, position) {\n        this.id = characterId;\n        this.socketId = socketId;\n        this.walkSpeed = walkSpeed;\n        this.roomId = roomId;\n        var box = BABYLON.Mesh.CreateBox(characterId.toString(), 3, scene, false);\n        box.checkCollisions = false;\n        box.position = position;\n        box.actionManager = new BABYLON.ActionManager(scene);\n        this.mesh = box;\n    }\n    RemotePlayer.prototype.dispose = function (room) {\n        var self = this;\n        var scene = room.scene;\n        scene.onBeforeRenderObservable.remove(this.renderObserver);\n        this.mesh.dispose();\n        room.enemies.forEach(function (enemy) {\n            if (enemy.target == self.id) {\n                clearInterval(enemy.attackInterval);\n            }\n        });\n    };\n    return RemotePlayer;\n}());\nexports.RemotePlayer = RemotePlayer;\n\n\n//# sourceURL=webpack:///./RemotePlayer.ts?");

/***/ }),

/***/ "./Room.ts":
/*!*****************!*\
  !*** ./Room.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BABYLON = __webpack_require__(/*! babylonjs */ \"babylonjs\");\nvar Room = /** @class */ (function () {\n    function Room(aiServer) {\n        this.enemies = [];\n        this.players = [];\n        var sceneForRoom = new BABYLON.Scene(aiServer.engine);\n        sceneForRoom.collisionsEnabled = false;\n        var camera = new BABYLON.FreeCamera(\"Camera\", new BABYLON.Vector3(0, 200, 0), sceneForRoom);\n        camera.rotation = new BABYLON.Vector3(1.5, 1, 1);\n        this.scene = sceneForRoom;\n    }\n    Room.prototype.removeRoom = function () {\n        this.disposeEnemies();\n        this.scene.dispose();\n        return this;\n    };\n    Room.prototype.disposeEnemies = function () {\n        var _this = this;\n        this.enemies.forEach(function (enemy) {\n            enemy.clearActiveTarget(_this);\n        });\n        return this;\n    };\n    return Room;\n}());\nexports.Room = Room;\n\n\n//# sourceURL=webpack:///./Room.ts?");

/***/ }),

/***/ "./indexBackend.ts":
/*!*************************!*\
  !*** ./indexBackend.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar AIServer_1 = __webpack_require__(/*! ./AIServer */ \"./AIServer.ts\");\nvar socket = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nnew AIServer_1.AIServer(null, socket);\n\n\n//# sourceURL=webpack:///./indexBackend.ts?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./indexBackend.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./indexBackend.ts */\"./indexBackend.ts\");\n\n\n//# sourceURL=webpack:///multi_./indexBackend.ts?");

/***/ }),

/***/ "babylonjs":
/*!****************************!*\
  !*** external "babylonjs" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babylonjs\");\n\n//# sourceURL=webpack:///external_%22babylonjs%22?");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io-client\");\n\n//# sourceURL=webpack:///external_%22socket.io-client%22?");

/***/ })

/******/ });