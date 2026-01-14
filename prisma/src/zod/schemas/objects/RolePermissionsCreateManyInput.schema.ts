import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  module: z.string().max(255),
  userAccess: z.boolean().optional(),
  advancedAccess: z.boolean().optional(),
  adminAccess: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date()
}).strict();
export const RolePermissionsCreateManyInputObjectSchema: z.ZodType<Prisma.RolePermissionsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RolePermissionsCreateManyInput>;
export const RolePermissionsCreateManyInputObjectZodSchema = makeSchema();
