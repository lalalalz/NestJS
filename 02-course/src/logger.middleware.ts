import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  /**
   * Nest에서 지원하는 로거이고, 생성자 파라미터로 HTTP를 넘겨
   * HTTP를 위한 로거를 생성하게 된다.
   */

  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {

    /**
     * 요청에 대한 서버의 응답이 정상적으로 완료되었을 때, res object에 
     * finish 이벤트가 발생한다. 따라서, 이 이벤트를 이용하여 요청과 응답에 대한
     * 로깅을 해줄 수 있다. 
     */
    res.on('finish', () => {
      this.logger.log(
        `${req.ip}, ${req.method} ${res.statusCode}`, 
        req.originalUrl
      );
    })

    next();
  }
}
