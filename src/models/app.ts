import mongoose from 'mongoose'
import moment from 'moment'

export interface AppModel {
    appName: string,
    description: string,
    _id: string,
    appSecret: string,
    createdAt: any
}

export class AppTransformer {
    public appName: string;
    public description: string;
    public appId: string | undefined;
    public appSecret: string | undefined;
    public created: string | undefined;
    constructor(appModel: AppModel) {
        this.appId = appModel._id;
        this.description = appModel.description;
        this.appName = appModel.appName;
        this.appSecret = appModel.appSecret;
        this.created = moment(appModel.createdAt).format('YYYY-MM-DD HH:mm')
    }
}

const AppSchema = new mongoose.Schema({
    appName: String,
    description: String,
    appSecret: String
}, {timestamps: true})

const App = mongoose.model("App", AppSchema);

export default App;
