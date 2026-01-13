import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerCreateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerCreateWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerCreateWithoutSimpleInvoicesAsBillToInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInputObjectSchema)])
}).strict();
export const CustomerCreateOrConnectWithoutSimpleInvoicesAsBillToInputObjectSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutSimpleInvoicesAsBillToInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateOrConnectWithoutSimpleInvoicesAsBillToInput>;
export const CustomerCreateOrConnectWithoutSimpleInvoicesAsBillToInputObjectZodSchema = makeSchema();
