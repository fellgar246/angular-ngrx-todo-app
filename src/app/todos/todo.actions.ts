import { createAction, props } from "@ngrx/store";

export const limpiarTodos = createAction('[Todo] Limpiar Todo');

export const crear = createAction(
  '[Todo] Crear Todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[Todo] Toggle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[Todo] Editar Todo',
  props<{ id: number, texto: string }>()
);

export const borrar = createAction(
  '[Todo] Borrar Todo',
  props<{ id: number}>()
);

export const toggleAll = createAction(
  '[Todo] ToggleAll Todo',
  props<{ completado: boolean }>()
);
