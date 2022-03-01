import { Catch, ConsoleLogger, HttpException } from "@nestjs/common";
import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        // handler arguments
        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();
        const req = ctx.getRequest<Request>();
        // exception
        const statusCode = exception.getStatus();
        const message = exception.getResponse() as string | {statusCode: number, message: string, error: string};
        const timestamp = new Date().toISOString();
        const path = req.originalUrl;

        if (typeof message === "string") {
            res.status(statusCode).json({ statusCode, message, timestamp, path });
        } 
        else {
            res.status(statusCode).json({ ...message, timestamp, path });
        }
    }
}
