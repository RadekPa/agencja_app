import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './ContactWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ContactWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ContactWhereInputObjectSchema).optional()
}).strict();
export const ContactScalarRelationFilterObjectSchema: z.ZodType<Prisma.ContactScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ContactScalarRelationFilter>;
export const ContactScalarRelationFilterObjectZodSchema = makeSchema();
