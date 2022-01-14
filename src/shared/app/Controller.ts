type HttpRequest = {
    param?: string,
    query?: string,
    body?: any
}

type HttpResponse = {
    statusCode: number,
    body: any
}

interface IController {
    handle(request: HttpRequest): any
}

export {
    HttpRequest,
    HttpResponse,
    IController
}