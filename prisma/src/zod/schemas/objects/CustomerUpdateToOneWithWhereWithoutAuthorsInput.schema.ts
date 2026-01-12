import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerUpdateWithoutAuthorsInputObjectSchema as CustomerUpdateWithoutAuthorsInputObjectSchema } from './CustomerUpdateWithoutAuthorsInput.schema';
import { CustomerUncheckedUpdateWithoutAuthorsInputObjectSchema as CustomerUncheckedUpdateWithoutAuthorsInputObjectSchema } from './CustomerUncheckedUpdateWithoutAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomerUpdateWithoutAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutAuthorsInputObjectSchema)])
}).strict();
export const CustomerUpdateToOneWithWhereWithoutAuthorsInputObjectSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutAuthorsInput>;
export const CustomerUpdateToOneWithWhereWithoutAuthorsInputObjectZodSchema = makeSchema();
