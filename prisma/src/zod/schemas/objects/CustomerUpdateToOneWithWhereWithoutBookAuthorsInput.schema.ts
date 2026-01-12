import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerUpdateWithoutBookAuthorsInputObjectSchema as CustomerUpdateWithoutBookAuthorsInputObjectSchema } from './CustomerUpdateWithoutBookAuthorsInput.schema';
import { CustomerUncheckedUpdateWithoutBookAuthorsInputObjectSchema as CustomerUncheckedUpdateWithoutBookAuthorsInputObjectSchema } from './CustomerUncheckedUpdateWithoutBookAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomerUpdateWithoutBookAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutBookAuthorsInputObjectSchema)])
}).strict();
export const CustomerUpdateToOneWithWhereWithoutBookAuthorsInputObjectSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutBookAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutBookAuthorsInput>;
export const CustomerUpdateToOneWithWhereWithoutBookAuthorsInputObjectZodSchema = makeSchema();
