import { createAction, props } from "@ngrx/store";

export const crear = createAction(
  '[Todo] Crear Todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[Todo] Toggle Todo',
  props<{ id: number }>()
);
