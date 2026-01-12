import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutBookAuthorsInputObjectSchema as CustomerCreateWithoutBookAuthorsInputObjectSchema } from './CustomerCreateWithoutBookAuthorsInput.schema';
import { CustomerUncheckedCreateWithoutBookAuthorsInputObjectSchema as CustomerUncheckedCreateWithoutBookAuthorsInputObjectSchema } from './CustomerUncheckedCreateWithoutBookAuthorsInput.schema';
import { CustomerCreateOrConnectWithoutBookAuthorsInputObjectSchema as CustomerCreateOrConnectWithoutBookAuthorsInputObjectSchema } from './CustomerCreateOrConnectWithoutBookAuthorsInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutBookAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutBookAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutBookAuthorsInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomerCreateNestedOneWithoutBookAuthorsInputObjectSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutBookAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateNestedOneWithoutBookAuthorsInput>;
export const CustomerCreateNestedOneWithoutBookAuthorsInputObjectZodSchema = makeSchema();
