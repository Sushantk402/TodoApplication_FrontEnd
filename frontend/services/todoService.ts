import { Configuration , TodoControllerApi } from "../api";

const apiConfig = new Configuration({
    basePath: 'http://localhost:8080/api', 
  });

const todosApi = new TodoControllerApi(apiConfig);

export const TodoService = {
    getAllTodos: async () => {
      try {
        const response = await todosApi.getAll();
        return response.data;
      } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
      }
    },


createTodo: async (todo: { title: string; }) => {
    try {
      const response = await todosApi.create(todo);
      return response.data;
    } catch (error) {
      console.error('Error creating todo:', error);
      throw error;
    }
  },

}