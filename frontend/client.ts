
import { Configuration, DefaultConfig, TodoControllerApi } from "./api";


export const apiClient = () => {
    const config = new Configuration({ basePath: "http://localhost:8080" });   //replace the localhost with the system IP
    return new TodoControllerApi(config)
}
