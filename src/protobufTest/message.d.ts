import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace mypackage. */
export namespace mypackage {

    /** Properties of a MyMessage. */
    interface IMyMessage {

        /** MyMessage name */
        name?: (string|null);

        /** MyMessage age */
        age?: (number|null);
    }

    /** Represents a MyMessage. */
    class MyMessage implements IMyMessage {

        /**
         * Constructs a new MyMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: mypackage.IMyMessage);

        /** MyMessage name. */
        public name: string;

        /** MyMessage age. */
        public age: number;

        /**
         * Creates a new MyMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MyMessage instance
         */
        public static create(properties?: mypackage.IMyMessage): mypackage.MyMessage;

        /**
         * Encodes the specified MyMessage message. Does not implicitly {@link mypackage.MyMessage.verify|verify} messages.
         * @param message MyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mypackage.IMyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MyMessage message, length delimited. Does not implicitly {@link mypackage.MyMessage.verify|verify} messages.
         * @param message MyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mypackage.IMyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MyMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mypackage.MyMessage;

        /**
         * Decodes a MyMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mypackage.MyMessage;

        /**
         * Verifies a MyMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MyMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MyMessage
         */
        public static fromObject(object: { [k: string]: any }): mypackage.MyMessage;

        /**
         * Creates a plain object from a MyMessage message. Also converts values to other types if specified.
         * @param message MyMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mypackage.MyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MyMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MyMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
