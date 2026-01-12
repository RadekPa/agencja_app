import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutBookAuthorsInputObjectSchema as CustomerCreateWithoutBookAuthorsInputObjectSchema } from './CustomerCreateWithoutBookAuthorsInput.schema';
import { CustomerUncheckedCreateWithoutBookAuthorsInputObjectSchema as CustomerUncheckedCreateWithoutBookAuthorsInputObjectSchema } from './CustomerUncheckedCreateWithoutBookAuthorsInput.schema';
import { CustomerCreateOrConnectWithoutBookAuthorsInputObjectSchema as CustomerCreateOrConnectWithoutBookAuthorsInputObjectSchema } from './CustomerCreateOrConnectWithoutBookAuthorsInput.schema';
import { CustomerUpsertWithoutBookAuthorsInputObjectSchema as CustomerUpsertWithoutBookAuthorsInputObjectSchema } from './CustomerUpsertWithoutBookAuthorsInput.schema';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateToOneWithWhereWithoutBookAuthorsInputObjectSchema as CustomerUpdateToOneWithWhereWithoutBookAuthorsInputObjectSchema } from './CustomerUpdateToOneWithWhereWithoutBookAuthorsInput.schema';
import { CustomerUpdateWithoutBookAuthorsInputObjectSchema as CustomerUpdateWithoutBookAuthorsInputObjectSchema } from './CustomerUpdateWithoutBookAuthorsInput.schema';
import { CustomerUncheckedUpdateWithoutBookAuthorsInputObjectSchema as CustomerUncheckedUpdateWithoutBookAuthorsInputObjectSchema } from './CustomerUncheckedUpdateWithoutBookAuthorsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutBookAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutBookAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutBookAuthorsInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutBookAuthorsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CustomerWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CustomerWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomerUpdateToOneWithWhereWithoutBookAuthorsInputObjectSchema), z.lazy(() => CustomerUpdateWithoutBookAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutBookAuthorsInputObjectSchema)]).optional()
}).strict();
export const CustomerUpdateOneWithoutBookAuthorsNestedInputObjectSchema: z.ZodType<Prisma.CustomerUpdateOneWithoutBookAuthorsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateOneWithoutBookAuthorsNestedInput>;
export const CustomerUpdateOneWithoutBookAuthorsNestedInputObjectZodSchema = makeSchema();
