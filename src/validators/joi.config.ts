import * as JoiCore from 'joi';

export const joi = JoiCore.extend({
  base: JoiCore.string(),
  name: 'string',
});

export function validateAsPromise<T>(model: any, schema: any): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    joi.validate(model, schema, <any>{ abortEarly: false, stripUnknown: { objects: true, arrays: false } }, (err, value) => {
      if (err) reject({ validationError: true, message: err.details });
      resolve(value);
    });
  });
}
