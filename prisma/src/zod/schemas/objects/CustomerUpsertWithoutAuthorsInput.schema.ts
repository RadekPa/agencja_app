import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerUpdateWithoutAuthorsInputObjectSchema as CustomerUpdateWithoutAuthorsInputObjectSchema } from './CustomerUpdateWithoutAuthorsInput.schema';
import { CustomerUncheckedUpdateWithoutAuthorsInputObjectSchema as CustomerUncheckedUpdateWithoutAuthorsInputObjectSchema } from './CustomerUncheckedUpdateWithoutAuthorsInput.schema';
import { CustomerCreateWithoutAuthorsInputObjectSchema as CustomerCreateWithoutAuthorsInputObjectSchema } from './CustomerCreateWithoutAuthorsInput.schema';
import { CustomerUncheckedCreateWithoutAuthorsInputObjectSchema as CustomerUncheckedCreateWithoutAuthorsInputObjectSchema } from './CustomerUncheckedCreateWithoutAuthorsInput.schema';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomerUpdateWithoutAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutAuthorsInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerCreateWithoutAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutAuthorsInputObjectSchema)]),
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional()
}).strict();
export const CustomerUpsertWithoutAuthorsInputObjectSchema: z.ZodType<Prisma.CustomerUpsertWithoutAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpsertWithoutAuthorsInput>;
export const CustomerUpsertWithoutAuthorsInputObjectZodSchema = makeSchema();
