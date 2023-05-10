import {Module} from "@nestjs/common";
import {SocketClient} from "./socket-client";
import {io, Socket} from "socket.io-client";

@Module({
    providers: [SocketClient],
})
export class SocketModule{
}