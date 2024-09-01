import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Vencer a Thanos'),
  new Todo('Salvar el mundo'),
  new Todo('Comprar el pan'),
  new Todo('Aprender Angular')
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)])
)

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
