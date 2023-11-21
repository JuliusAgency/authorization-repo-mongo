// import { rulesModel } from 'mongoose';
import { Connection } from 'mongoose';
import { ModelType, rulesModel } from './model';

export const rulesDataSource = (connection: Connection, type: ModelType) => {
  const getRules = async () => {
    const rulesCollection = rulesModel(connection, type);
    const rules = await rulesCollection.find({});
    return rules;
  };

  return { getRules };
};
