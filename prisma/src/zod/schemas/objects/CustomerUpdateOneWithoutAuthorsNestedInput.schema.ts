import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutAuthorsInputObjectSchema as CustomerCreateWithoutAuthorsInputObjectSchema } from './CustomerCreateWithoutAuthorsInput.schema';
import { CustomerUncheckedCreateWithoutAuthorsInputObjectSchema as CustomerUncheckedCreateWithoutAuthorsInputObjectSchema } from './CustomerUncheckedCreateWithoutAuthorsInput.schema';
import { CustomerCreateOrConnectWithoutAuthorsInputObjectSchema as CustomerCreateOrConnectWithoutAuthorsInputObjectSchema } from './CustomerCreateOrConnectWithoutAuthorsInput.schema';
import { CustomerUpsertWithoutAuthorsInputObjectSchema as CustomerUpsertWithoutAuthorsInputObjectSchema } from './CustomerUpsertWithoutAuthorsInput.schema';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateToOneWithWhereWithoutAuthorsInputObjectSchema as CustomerUpdateToOneWithWhereWithoutAuthorsInputObjectSchema } from './CustomerUpdateToOneWithWhereWithoutAuthorsInput.schema';
import { CustomerUpdateWithoutAuthorsInputObjectSchema as CustomerUpdateWithoutAuthorsInputObjectSchema } from './CustomerUpdateWithoutAuthorsInput.schema';
import { CustomerUncheckedUpdateWithoutAuthorsInputObjectSchema as CustomerUncheckedUpdateWithoutAuthorsInputObjectSchema } from './CustomerUncheckedUpdateWithoutAuthorsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutAuthorsInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutAuthorsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CustomerWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CustomerWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomerUpdateToOneWithWhereWithoutAuthorsInputObjectSchema), z.lazy(() => CustomerUpdateWithoutAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutAuthorsInputObjectSchema)]).optional()
}).strict();
export const CustomerUpdateOneWithoutAuthorsNestedInputObjectSchema: z.ZodType<Prisma.CustomerUpdateOneWithoutAuthorsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateOneWithoutAuthorsNestedInput>;
export const CustomerUpdateOneWithoutAuthorsNestedInputObjectZodSchema = makeSchema();
