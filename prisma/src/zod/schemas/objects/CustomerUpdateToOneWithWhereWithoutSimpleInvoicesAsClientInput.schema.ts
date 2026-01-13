import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereInputObjectSchema as CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerUpdateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerUpdateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerUpdateWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerUncheckedUpdateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerUncheckedUpdateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerUncheckedUpdateWithoutSimpleInvoicesAsClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomerUpdateWithoutSimpleInvoicesAsClientInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutSimpleInvoicesAsClientInputObjectSchema)])
}).strict();
export const CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsClientInputObjectSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsClientInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsClientInput>;
export const CustomerUpdateToOneWithWhereWithoutSimpleInvoicesAsClientInputObjectZodSchema = makeSchema();
