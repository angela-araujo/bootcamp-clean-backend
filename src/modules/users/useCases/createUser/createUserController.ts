import { CreateUserUseCase } from '../createUser/createUserUseCase';
import { IUserRepo } from "../../repos/IUserRepo";
import { CreateUserDTO } from '../createUser/createUserDTO';
import {
    IController,
    HttpRequest,
    HttpResponse
} from '../../../../shared/app/Controller';

class CreateUserController {

    public useCase: CreateUserUseCase;

    constructor(useCase: CreateUserUseCase) {
        this.useCase = useCase;
    }

    async handle(request: HttpRequest): Promise<HttpResponse> {

        console.log('Controller Request:', request);

        const response: HttpResponse = {
            statusCode: 200,
            body: 'Funcionou'
        }

        return response;

    }


}

export {
    CreateUserController
}