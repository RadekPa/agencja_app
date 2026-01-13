import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerUpdateWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomerUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutSimpleInvoicesAsBillToInputObjectSchema)])
}).strict();
export const CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsBillToInputObjectSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsBillToInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsBillToInput>;
export const CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsBillToInputObjectZodSchema = makeSchema();
