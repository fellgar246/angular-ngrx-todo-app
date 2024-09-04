import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Vencer a Thanos'),
  new Todo('Salvar el mundo'),
  new Todo('Comprar el pan'),
  new Todo('Aprender Angular')
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        }
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        }
      } else {
        return todo;
      }
    });
  })
)

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
