import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  phoneNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  firstName: SortOrderSchema.optional(),
  middleName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastName: SortOrderSchema.optional(),
  informal: SortOrderSchema.optional(),
  fax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userMod: SortOrderSchema.optional(),
  dateMod: SortOrderSchema.optional(),
  contactPosition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  accountant: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const AuthorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AuthorOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorOrderByWithRelationInput>;
export const AuthorOrderByWithRelationInputObjectZodSchema = makeSchema();
