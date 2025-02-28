
import { Configuration, DefaultConfig, TodoControllerApi } from "./api";


export const apiClient = () => {
    const config = new Configuration({ basePath: "http://10.102.10.141:8080" });
    return new TodoControllerApi(config)
}