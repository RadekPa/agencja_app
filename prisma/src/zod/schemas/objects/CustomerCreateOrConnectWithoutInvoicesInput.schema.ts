import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutInvoicesInputObjectSchema as CustomerCreateWithoutInvoicesInputObjectSchema } from './CustomerCreateWithoutInvoicesInput.schema';
import { CustomerUncheckedCreateWithoutInvoicesInputObjectSchema as CustomerUncheckedCreateWithoutInvoicesInputObjectSchema } from './CustomerUncheckedCreateWithoutInvoicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerCreateWithoutInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutInvoicesInputObjectSchema)])
}).strict();
export const CustomerCreateOrConnectWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateOrConnectWithoutInvoicesInput>;
export const CustomerCreateOrConnectWithoutInvoicesInputObjectZodSchema = makeSchema();
