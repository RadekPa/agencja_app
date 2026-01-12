import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutBookAuthorsInputObjectSchema as CustomerCreateWithoutBookAuthorsInputObjectSchema } from './CustomerCreateWithoutBookAuthorsInput.schema';
import { CustomerUncheckedCreateWithoutBookAuthorsInputObjectSchema as CustomerUncheckedCreateWithoutBookAuthorsInputObjectSchema } from './CustomerUncheckedCreateWithoutBookAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerCreateWithoutBookAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutBookAuthorsInputObjectSchema)])
}).strict();
export const CustomerCreateOrConnectWithoutBookAuthorsInputObjectSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutBookAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateOrConnectWithoutBookAuthorsInput>;
export const CustomerCreateOrConnectWithoutBookAuthorsInputObjectZodSchema = makeSchema();
