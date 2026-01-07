import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerUpdateWithoutInvoicesInputObjectSchema as CustomerUpdateWithoutInvoicesInputObjectSchema } from './CustomerUpdateWithoutInvoicesInput.schema';
import { CustomerUncheckedUpdateWithoutInvoicesInputObjectSchema as CustomerUncheckedUpdateWithoutInvoicesInputObjectSchema } from './CustomerUncheckedUpdateWithoutInvoicesInput.schema';
import { CustomerCreateWithoutInvoicesInputObjectSchema as CustomerCreateWithoutInvoicesInputObjectSchema } from './CustomerCreateWithoutInvoicesInput.schema';
import { CustomerUncheckedCreateWithoutInvoicesInputObjectSchema as CustomerUncheckedCreateWithoutInvoicesInputObjectSchema } from './CustomerUncheckedCreateWithoutInvoicesInput.schema';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomerUpdateWithoutInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutInvoicesInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerCreateWithoutInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutInvoicesInputObjectSchema)]),
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional()
}).strict();
export const CustomerUpsertWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.CustomerUpsertWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpsertWithoutInvoicesInput>;
export const CustomerUpsertWithoutInvoicesInputObjectZodSchema = makeSchema();
