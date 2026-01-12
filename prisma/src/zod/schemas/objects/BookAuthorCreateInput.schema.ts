import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateNestedOneWithoutBookAuthorsInputObjectSchema as CustomerCreateNestedOneWithoutBookAuthorsInputObjectSchema } from './CustomerCreateNestedOneWithoutBookAuthorsInput.schema'

const makeSchema = () => z.object({
  firstName: z.string(),
  middleName: z.string().optional().nullable(),
  lastName: z.string(),
  description: z.string().optional().nullable(),
  workEmail: z.string().optional().nullable(),
  personalEmail: z.string().optional().nullable(),
  photos: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  client: z.lazy(() => CustomerCreateNestedOneWithoutBookAuthorsInputObjectSchema).optional()
}).strict();
export const BookAuthorCreateInputObjectSchema: z.ZodType<Prisma.BookAuthorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorCreateInput>;
export const BookAuthorCreateInputObjectZodSchema = makeSchema();
