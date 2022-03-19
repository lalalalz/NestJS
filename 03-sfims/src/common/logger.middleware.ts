import { Injectable, NestMiddleware, Logger } from "@nestjs/common";
import { randomUUID } from "crypto";

@Injectable()
export class CustomLoggerMiddleWare implements NestMiddleware {
  private logger = new Logger("HTTP");

  use(req: any, res: any, next: (error?: any) => void) {
    req.uuid = randomUUID();
    this.logger.log(`[IN ][${req.uuid}][${req.ip}][${req.method}: ${req.originalUrl} - XXX]`);

    res.on("finish", () => {
      this.logger.log(`[OUT][${req.uuid}][${req.ip}][${req.method}: ${req.originalUrl} - ${res.statusCode}]`);
    });
    next();
  }
}
