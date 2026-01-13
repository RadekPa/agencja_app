import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerUpdateWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerCreateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerCreateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerCreateWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomerUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerCreateWithoutSimpleInvoicesAsBillToInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInputObjectSchema)]),
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional()
}).strict();
export const CustomerUpsertWithoutSimpleInvoicesAsBillToInputObjectSchema: z.ZodType<Prisma.CustomerUpsertWithoutSimpleInvoicesAsBillToInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpsertWithoutSimpleInvoicesAsBillToInput>;
export const CustomerUpsertWithoutSimpleInvoicesAsBillToInputObjectZodSchema = makeSchema();
