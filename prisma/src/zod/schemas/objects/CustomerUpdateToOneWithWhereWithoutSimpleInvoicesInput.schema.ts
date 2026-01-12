import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerUpdateWithoutSimpleInvoicesInputObjectSchema as CustomerUpdateWithoutSimpleInvoicesInputObjectSchema } from './CustomerUpdateWithoutSimpleInvoicesInput.schema';
import { CustomerUncheckedUpdateWithoutSimpleInvoicesInputObjectSchema as CustomerUncheckedUpdateWithoutSimpleInvoicesInputObjectSchema } from './CustomerUncheckedUpdateWithoutSimpleInvoicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomerUpdateWithoutSimpleInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutSimpleInvoicesInputObjectSchema)])
}).strict();
export const CustomerUpdateToOneWithWhereWithoutSimpleInvoicesInputObjectSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutSimpleInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutSimpleInvoicesInput>;
export const CustomerUpdateToOneWithWhereWithoutSimpleInvoicesInputObjectZodSchema = makeSchema();
