import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';


@Injectable()
export class CustomLoggerMiddleWare implements NestMiddleware {
    
    private logger = new Logger('HTTP');

    use(req: any, res: any, next: (error?: any) => void) {
        res.on('finish', () => {
            req.uuid = randomUUID();
            this.logger.log(
                `[${req.uuid}][${req.ip}][${req.method}: ${req.originalUrl} - ${res.statusCode}]`
            );
        });
        next();
    }

}