import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en todoItem', () => {

    const todo = {
        id:1,
        description: 'Ejemplo de todo',
        done:false
    };
    
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks());
  

    test('Debe de mostrar el todo pendiente de completar', () => {
      
        render(<TodoItem 
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);


        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe(' list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')

    });
    
    test('Debe de mostrar el componente completado', () => {
      
        todo.done= true;

        render(<TodoItem 
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);



        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through')

    });

    test('Span debe de llamar toggletodo cuando se hace click', () => {

        render(<TodoItem 
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalled();
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('Boton debe de llamar el deleteTodo', () => {

        render(<TodoItem 
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeleteTodoMock}
        />);

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalled();
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });
    
    
})
