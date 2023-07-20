/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.mypackage = (function() {

    /**
     * Namespace mypackage.
     * @exports mypackage
     * @namespace
     */
    var mypackage = {};

    mypackage.MyMessage = (function() {

        /**
         * Properties of a MyMessage.
         * @memberof mypackage
         * @interface IMyMessage
         * @property {string|null} [name] MyMessage name
         * @property {number|null} [age] MyMessage age
         */

        /**
         * Constructs a new MyMessage.
         * @memberof mypackage
         * @classdesc Represents a MyMessage.
         * @implements IMyMessage
         * @constructor
         * @param {mypackage.IMyMessage=} [properties] Properties to set
         */
        function MyMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MyMessage name.
         * @member {string} name
         * @memberof mypackage.MyMessage
         * @instance
         */
        MyMessage.prototype.name = "";

        /**
         * MyMessage age.
         * @member {number} age
         * @memberof mypackage.MyMessage
         * @instance
         */
        MyMessage.prototype.age = 0;

        /**
         * Creates a new MyMessage instance using the specified properties.
         * @function create
         * @memberof mypackage.MyMessage
         * @static
         * @param {mypackage.IMyMessage=} [properties] Properties to set
         * @returns {mypackage.MyMessage} MyMessage instance
         */
        MyMessage.create = function create(properties) {
            return new MyMessage(properties);
        };

        /**
         * Encodes the specified MyMessage message. Does not implicitly {@link mypackage.MyMessage.verify|verify} messages.
         * @function encode
         * @memberof mypackage.MyMessage
         * @static
         * @param {mypackage.IMyMessage} message MyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MyMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.age);
            return writer;
        };

        /**
         * Encodes the specified MyMessage message, length delimited. Does not implicitly {@link mypackage.MyMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mypackage.MyMessage
         * @static
         * @param {mypackage.IMyMessage} message MyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MyMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MyMessage message from the specified reader or buffer.
         * @function decode
         * @memberof mypackage.MyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mypackage.MyMessage} MyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MyMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mypackage.MyMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.age = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MyMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mypackage.MyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mypackage.MyMessage} MyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MyMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MyMessage message.
         * @function verify
         * @memberof mypackage.MyMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MyMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            return null;
        };

        /**
         * Creates a MyMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mypackage.MyMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mypackage.MyMessage} MyMessage
         */
        MyMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.mypackage.MyMessage)
                return object;
            var message = new $root.mypackage.MyMessage();
            if (object.name != null)
                message.name = String(object.name);
            if (object.age != null)
                message.age = object.age | 0;
            return message;
        };

        /**
         * Creates a plain object from a MyMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mypackage.MyMessage
         * @static
         * @param {mypackage.MyMessage} message MyMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MyMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.age = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            return object;
        };

        /**
         * Converts this MyMessage to JSON.
         * @function toJSON
         * @memberof mypackage.MyMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MyMessage
         * @function getTypeUrl
         * @memberof mypackage.MyMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MyMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mypackage.MyMessage";
        };

        return MyMessage;
    })();

    return mypackage;
})();

module.exports = $root;
