import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutSimpleInvoicesInputObjectSchema as CustomerCreateWithoutSimpleInvoicesInputObjectSchema } from './CustomerCreateWithoutSimpleInvoicesInput.schema';
import { CustomerUncheckedCreateWithoutSimpleInvoicesInputObjectSchema as CustomerUncheckedCreateWithoutSimpleInvoicesInputObjectSchema } from './CustomerUncheckedCreateWithoutSimpleInvoicesInput.schema';
import { CustomerCreateOrConnectWithoutSimpleInvoicesInputObjectSchema as CustomerCreateOrConnectWithoutSimpleInvoicesInputObjectSchema } from './CustomerCreateOrConnectWithoutSimpleInvoicesInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutSimpleInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutSimpleInvoicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutSimpleInvoicesInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomerCreateNestedOneWithoutSimpleInvoicesInputObjectSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutSimpleInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateNestedOneWithoutSimpleInvoicesInput>;
export const CustomerCreateNestedOneWithoutSimpleInvoicesInputObjectZodSchema = makeSchema();
