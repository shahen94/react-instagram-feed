import { expect } from 'chai';
import { createAction } from 'redux-actions';
import reducer, { initialState } from '../todos';

describe('Reducers/Todos.reducer.js', () => {
  it('should return initial state', () => {
    const newState = reducer(undefined, {});
    expect(newState).to.be.deep.equal(initialState);
  });
  it('should reduce ADD_TODO action', () => {
    const newTodo = 'newTodo';
    const action = createAction('add todo');
    const newState = reducer([], action(newTodo));
    expect(newState).to.be.deep.equal([{
      id: 0,
      text: newTodo,
      completed: false,
    }]);
  });
  it('should reduce EDIT_TODO action', () => {
    const addAction = createAction('add todo');
    const editAction = createAction('edit todo');
    const addedState = reducer([], addAction('Todo'));
    const newState = reducer(addedState, editAction({
      id: 0,
      text: 'edited',
    }));
    expect(newState).to.be.deep.equal([{
      id: 0,
      text: 'edited',
      completed: false,
    }]);
  });
  it('should reduce DELETE_TODO action', () => {
    const addAction = createAction('add todo');
    const deleteAction = createAction('delete todo');
    const addedState = reducer([], addAction('todo'));
    const removeState = reducer(addedState, deleteAction(0));
    expect(removeState).to.be.deep.equal([]);
  });
  it('should reduce COMPLETE_TODO action', () => {
    const addAction = createAction('add todo');
    const completeAction = createAction('complete todo');
    const addedState = reducer([], addAction('todo'));
    const completeState = reducer(addedState, completeAction(0));
    expect(completeState).to.be.deep.equal([{
      id: 0,
      text: 'todo',
      completed: true,
    }]);
  });
  it('should reduce COMPLETE_ALL action', () => {
    const todos = ['todo1', 'todo2', 'todo3'];
    const addAction = createAction('add todo');
    const completeAllAction = createAction('complete all');
    const addedState = todos.reduce((prev, curr) => (
      reducer(prev, addAction(curr))
    ), []);
    const completedState = reducer(addedState, completeAllAction());
    completedState.forEach(todo => expect(todo.completed).to.be.equal(true));
  });
  it('should reduce CLEAR_COMPLETE action', () => {
    const todos = ['todo1', 'todo2', 'todo3'];
    const addAction = createAction('add todo');
    const completeAction = createAction('complete all');
    const clearAction = createAction('clear complete');
    const addedState = todos.reduce((prev, curr) => (
      reducer(prev, addAction(curr))
    ), []);
    const completedState = reducer(addedState, completeAction());
    const clearedState = reducer(completedState, clearAction());
    expect(clearedState).to.be.deep.equal([]);
  });
});
