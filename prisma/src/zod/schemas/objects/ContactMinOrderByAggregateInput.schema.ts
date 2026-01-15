import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  phoneNumber: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  middleName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  informal: SortOrderSchema.optional(),
  fax: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  userMod: SortOrderSchema.optional(),
  dateMod: SortOrderSchema.optional(),
  contactPosition: SortOrderSchema.optional(),
  accountant: SortOrderSchema.optional()
}).strict();
export const ContactMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContactMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactMinOrderByAggregateInput>;
export const ContactMinOrderByAggregateInputObjectZodSchema = makeSchema();
