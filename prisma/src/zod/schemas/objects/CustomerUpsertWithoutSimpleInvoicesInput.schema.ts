import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerUpdateWithoutSimpleInvoicesInputObjectSchema as CustomerUpdateWithoutSimpleInvoicesInputObjectSchema } from './CustomerUpdateWithoutSimpleInvoicesInput.schema';
import { CustomerUncheckedUpdateWithoutSimpleInvoicesInputObjectSchema as CustomerUncheckedUpdateWithoutSimpleInvoicesInputObjectSchema } from './CustomerUncheckedUpdateWithoutSimpleInvoicesInput.schema';
import { CustomerCreateWithoutSimpleInvoicesInputObjectSchema as CustomerCreateWithoutSimpleInvoicesInputObjectSchema } from './CustomerCreateWithoutSimpleInvoicesInput.schema';
import { CustomerUncheckedCreateWithoutSimpleInvoicesInputObjectSchema as CustomerUncheckedCreateWithoutSimpleInvoicesInputObjectSchema } from './CustomerUncheckedCreateWithoutSimpleInvoicesInput.schema';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomerUpdateWithoutSimpleInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutSimpleInvoicesInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerCreateWithoutSimpleInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutSimpleInvoicesInputObjectSchema)]),
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional()
}).strict();
export const CustomerUpsertWithoutSimpleInvoicesInputObjectSchema: z.ZodType<Prisma.CustomerUpsertWithoutSimpleInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpsertWithoutSimpleInvoicesInput>;
export const CustomerUpsertWithoutSimpleInvoicesInputObjectZodSchema = makeSchema();
