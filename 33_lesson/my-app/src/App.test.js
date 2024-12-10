import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import { addTodo } from './store/todoSlice';

const mockStore = configureStore([]);

describe('TODO App', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            todos: {
                items: [],
            },
        });
    });

    test('Що сторінка має заголовок TODO', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const heading = screen.getByText(/TODO/i);
        expect(heading).toBeInTheDocument();
    });

    test('Що у поле для тексту можна ввести як цифри, так і букви', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const input = screen.getByPlaceholderText(/Введіть завдання/i);
        fireEvent.change(input, { target: { value: '123abc' } });
        expect(input.value).toBe('123abc');
    });

    test('Можна протестувати, що після натискання на кнопку “Додати” без тексту, ви отримаєте помилку', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const button = screen.getByText(/Додати/i);
        window.alert = jest.fn();

        fireEvent.click(button);
        expect(window.alert).toHaveBeenCalledWith('Поле не може бути порожнім');
    });

    test('Перевірити, що після вписання тексту та натискання на “Додати” отримуємо новий елемент у списку', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const input = screen.getByPlaceholderText(/Введіть завдання/i);
        const button = screen.getByText(/Додати/i);

        fireEvent.change(input, { target: { value: 'Нове завдання' } });
        fireEvent.click(button);

        const actions = store.getActions();
        const expectedPayload = [
            { type: 'todos/addTodo', payload: 'Нове завдання' },
        ];
        expect(actions).toEqual(expectedPayload);

        

        
        // setTimeout(()=>{
        //     expect(screen.getByText('Нове завдання'));
        // })
        await waitFor(() => {
            expect(screen.getByText('Нове завдання')).toBeInTheDocument();
        }, { timeout: 3000 });
    });
});
