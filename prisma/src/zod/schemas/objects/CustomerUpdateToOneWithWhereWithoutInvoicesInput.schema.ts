import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerUpdateWithoutInvoicesInputObjectSchema as CustomerUpdateWithoutInvoicesInputObjectSchema } from './CustomerUpdateWithoutInvoicesInput.schema';
import { CustomerUncheckedUpdateWithoutInvoicesInputObjectSchema as CustomerUncheckedUpdateWithoutInvoicesInputObjectSchema } from './CustomerUncheckedUpdateWithoutInvoicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomerUpdateWithoutInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutInvoicesInputObjectSchema)])
}).strict();
export const CustomerUpdateToOneWithWhereWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutInvoicesInput>;
export const CustomerUpdateToOneWithWhereWithoutInvoicesInputObjectZodSchema = makeSchema();
