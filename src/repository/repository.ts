import { ModelType } from './model';
import { rulesDataSource } from './rules-data-source';
import { initRules } from './init-rules';
import { Connection } from 'mongoose';

export { ModelType };
export const rulesRepository = (connection: Connection, type: ModelType = ModelType.ACL) => {
  return rulesDataSource(connection, type);
};
export { initRules };