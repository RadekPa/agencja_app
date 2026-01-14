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
export const RolePermissionsCreateInputObjectSchema: z.ZodType<Prisma.RolePermissionsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RolePermissionsCreateInput>;
export const RolePermissionsCreateInputObjectZodSchema = makeSchema();
