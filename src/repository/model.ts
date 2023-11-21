/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, Model, Connection } from 'mongoose';

export type Permission = 'create' | 'read' | 'update' | 'delete';

export enum ModelType {
  ACL = 0,
  RBAC = 1,
}

const ResourceSchema = new Schema(
  {
    resource: String,
    permissions: Array<Permission>,
  },
  { _id: false },
);

const RoleSchemaAcl = new Schema(
  {
    role: String,
    resources: [ResourceSchema],
  },
  { _id: false },
);

const AclSchema = new Schema({
  acl: [RoleSchemaAcl],
});

const RoleSchemaRbac = new Schema(
  {
    role: String,
    permissions: Array<Permission>,
  },
  { _id: false },
);

const RbacSchema = new Schema({
  rbac: [RoleSchemaRbac],
});

let Acl: any;
let Rbac: any;

export const rulesModel = (
  connection: Connection,
  type: ModelType = ModelType.ACL,
): typeof Model<unknown> => {
  if (Acl === undefined && Rbac === undefined) {
    Acl = connection.model('Acl', AclSchema);
    Rbac = connection.model('Rbac', RbacSchema);     
  }; 
  return type === ModelType.ACL ?Acl: Rbac;
};
