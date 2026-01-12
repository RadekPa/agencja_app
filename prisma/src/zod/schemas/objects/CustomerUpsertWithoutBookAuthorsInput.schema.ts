import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerUpdateWithoutBookAuthorsInputObjectSchema as CustomerUpdateWithoutBookAuthorsInputObjectSchema } from './CustomerUpdateWithoutBookAuthorsInput.schema';
import { CustomerUncheckedUpdateWithoutBookAuthorsInputObjectSchema as CustomerUncheckedUpdateWithoutBookAuthorsInputObjectSchema } from './CustomerUncheckedUpdateWithoutBookAuthorsInput.schema';
import { CustomerCreateWithoutBookAuthorsInputObjectSchema as CustomerCreateWithoutBookAuthorsInputObjectSchema } from './CustomerCreateWithoutBookAuthorsInput.schema';
import { CustomerUncheckedCreateWithoutBookAuthorsInputObjectSchema as CustomerUncheckedCreateWithoutBookAuthorsInputObjectSchema } from './CustomerUncheckedCreateWithoutBookAuthorsInput.schema';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomerUpdateWithoutBookAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutBookAuthorsInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerCreateWithoutBookAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutBookAuthorsInputObjectSchema)]),
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional()
}).strict();
export const CustomerUpsertWithoutBookAuthorsInputObjectSchema: z.ZodType<Prisma.CustomerUpsertWithoutBookAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpsertWithoutBookAuthorsInput>;
export const CustomerUpsertWithoutBookAuthorsInputObjectZodSchema = makeSchema();
