import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ContactCountOrderByAggregateInputObjectSchema as ContactCountOrderByAggregateInputObjectSchema } from './ContactCountOrderByAggregateInput.schema';
import { ContactAvgOrderByAggregateInputObjectSchema as ContactAvgOrderByAggregateInputObjectSchema } from './ContactAvgOrderByAggregateInput.schema';
import { ContactMaxOrderByAggregateInputObjectSchema as ContactMaxOrderByAggregateInputObjectSchema } from './ContactMaxOrderByAggregateInput.schema';
import { ContactMinOrderByAggregateInputObjectSchema as ContactMinOrderByAggregateInputObjectSchema } from './ContactMinOrderByAggregateInput.schema';
import { ContactSumOrderByAggregateInputObjectSchema as ContactSumOrderByAggregateInputObjectSchema } from './ContactSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  phoneNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  firstName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  middleName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  informal: SortOrderSchema.optional(),
  fax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userMod: SortOrderSchema.optional(),
  dateMod: SortOrderSchema.optional(),
  contactPosition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  accountant: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ContactCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ContactAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ContactMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ContactMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ContactSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ContactOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ContactOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactOrderByWithAggregationInput>;
export const ContactOrderByWithAggregationInputObjectZodSchema = makeSchema();
