import { io } from 'socket.io-client';

//* For prod
// const socket = !!window
// 	? io(process.env.NEXT_PUBLIC_SERVER_BASE_URL!)
// 	: null;

const socket = io(process.env.NEXT_PUBLIC_SERVER_BASE_URL!);
export default socket;
