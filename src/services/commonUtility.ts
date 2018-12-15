import crypto from 'crypto'

export function generateMd5(str: string) :string{
    let md5 = crypto.createHash('md5')
    return md5.update(str, 'utf8').digest('hex');
}

interface Response {
    status: number;
    message: string;
    data: any;
}

class BaseResponse implements Response{
    constructor(public status:number, public message:string, public data:any){

    }
}

export class SuccessResponseData extends BaseResponse{
    constructor(public message:string, public data:any) {
        super(1, message, data)
    }
}

export class ErrorResponseData extends BaseResponse{
    constructor(public message:string, public data:any) {
        super(-1, message, data)
    }
}
