import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerUpdateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerUpdateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerUpdateWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerUncheckedUpdateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerUncheckedUpdateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerUncheckedUpdateWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerCreateWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomerUpdateWithoutSimpleInvoicesAsClientInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutSimpleInvoicesAsClientInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema)]),
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional()
}).strict();
export const CustomerUpsertWithoutSimpleInvoicesAsClientInputObjectSchema: z.ZodType<Prisma.CustomerUpsertWithoutSimpleInvoicesAsClientInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpsertWithoutSimpleInvoicesAsClientInput>;
export const CustomerUpsertWithoutSimpleInvoicesAsClientInputObjectZodSchema = makeSchema();
