import "./config/dotenv";
import {
    server,
    port,
    origin
} from './shared/infra/server';

server.listen(port, () => {
    console.log(`Server listening on port ${port} and origin ${origin.origin}.`);
});