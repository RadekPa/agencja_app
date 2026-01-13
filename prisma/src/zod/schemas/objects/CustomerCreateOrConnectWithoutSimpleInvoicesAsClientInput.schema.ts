import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerCreateWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema)])
}).strict();
export const CustomerCreateOrConnectWithoutSimpleInvoicesAsClientInputObjectSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutSimpleInvoicesAsClientInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateOrConnectWithoutSimpleInvoicesAsClientInput>;
export const CustomerCreateOrConnectWithoutSimpleInvoicesAsClientInputObjectZodSchema = makeSchema();
