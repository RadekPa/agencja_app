import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutAuthorsInputObjectSchema as CustomerCreateWithoutAuthorsInputObjectSchema } from './CustomerCreateWithoutAuthorsInput.schema';
import { CustomerUncheckedCreateWithoutAuthorsInputObjectSchema as CustomerUncheckedCreateWithoutAuthorsInputObjectSchema } from './CustomerUncheckedCreateWithoutAuthorsInput.schema';
import { CustomerCreateOrConnectWithoutAuthorsInputObjectSchema as CustomerCreateOrConnectWithoutAuthorsInputObjectSchema } from './CustomerCreateOrConnectWithoutAuthorsInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutAuthorsInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutAuthorsInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomerCreateNestedOneWithoutAuthorsInputObjectSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateNestedOneWithoutAuthorsInput>;
export const CustomerCreateNestedOneWithoutAuthorsInputObjectZodSchema = makeSchema();
