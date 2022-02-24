import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const cts = host.switchToHttp();
        const response = cts.getResponse<Response>();
        const request = cts.getRequest<Request>();
        const status = exception.getStatus();
        // Exception에 첫번째 인자로 받은 값을 받을 수 있음
        const error = exception.getResponse(); 

        /**
         * 여기서 반환하는 값이 Exception이 발생되면 응답값으로 사용됨
         * 즉, Exception이 발생되면 이 필터를 통해 Exception이 처리됨
         */
        response
            .status(status)
            .json({
                statusCode: status,
                message: error,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
    }
}