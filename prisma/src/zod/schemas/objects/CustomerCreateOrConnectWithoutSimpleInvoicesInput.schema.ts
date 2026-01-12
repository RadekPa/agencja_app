import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutSimpleInvoicesInputObjectSchema as CustomerCreateWithoutSimpleInvoicesInputObjectSchema } from './CustomerCreateWithoutSimpleInvoicesInput.schema';
import { CustomerUncheckedCreateWithoutSimpleInvoicesInputObjectSchema as CustomerUncheckedCreateWithoutSimpleInvoicesInputObjectSchema } from './CustomerUncheckedCreateWithoutSimpleInvoicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerCreateWithoutSimpleInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutSimpleInvoicesInputObjectSchema)])
}).strict();
export const CustomerCreateOrConnectWithoutSimpleInvoicesInputObjectSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutSimpleInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateOrConnectWithoutSimpleInvoicesInput>;
export const CustomerCreateOrConnectWithoutSimpleInvoicesInputObjectZodSchema = makeSchema();
