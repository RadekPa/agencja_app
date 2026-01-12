import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutAuthorsInputObjectSchema as CustomerCreateWithoutAuthorsInputObjectSchema } from './CustomerCreateWithoutAuthorsInput.schema';
import { CustomerUncheckedCreateWithoutAuthorsInputObjectSchema as CustomerUncheckedCreateWithoutAuthorsInputObjectSchema } from './CustomerUncheckedCreateWithoutAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerCreateWithoutAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutAuthorsInputObjectSchema)])
}).strict();
export const CustomerCreateOrConnectWithoutAuthorsInputObjectSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateOrConnectWithoutAuthorsInput>;
export const CustomerCreateOrConnectWithoutAuthorsInputObjectZodSchema = makeSchema();
