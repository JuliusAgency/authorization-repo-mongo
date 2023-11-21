/**
 * Load authorization rules from a definition,
 * when a rules management is not implemented.
 * Runs the initRules once only for each (ACl, RBAC) type.
 */

import { Connection } from 'mongoose';
import { ModelType, rulesModel } from './model';

/**
 * Load a authorization definitions into a Db
 * @param type
 * @param data
 */
export const initRules = async (connection: Connection, type: ModelType, data: unknown) => {
  const model = rulesModel(connection, type);
  const newRules = new model(data);
  await newRules.save();
};
