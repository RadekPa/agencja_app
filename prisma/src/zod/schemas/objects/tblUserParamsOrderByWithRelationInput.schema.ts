import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblUsersOrderByWithRelationInputObjectSchema as tblUsersOrderByWithRelationInputObjectSchema } from './tblUsersOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  Login: SortOrderSchema.optional(),
  Name: SortOrderSchema.optional(),
  Value: SortOrderSchema.optional(),
  tblUsers: z.lazy(() => tblUsersOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblUserParamsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblUserParamsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsOrderByWithRelationInput>;
export const tblUserParamsOrderByWithRelationInputObjectZodSchema = makeSchema();
