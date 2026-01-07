import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutInvoicesInputObjectSchema as CustomerCreateWithoutInvoicesInputObjectSchema } from './CustomerCreateWithoutInvoicesInput.schema';
import { CustomerUncheckedCreateWithoutInvoicesInputObjectSchema as CustomerUncheckedCreateWithoutInvoicesInputObjectSchema } from './CustomerUncheckedCreateWithoutInvoicesInput.schema';
import { CustomerCreateOrConnectWithoutInvoicesInputObjectSchema as CustomerCreateOrConnectWithoutInvoicesInputObjectSchema } from './CustomerCreateOrConnectWithoutInvoicesInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutInvoicesInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutInvoicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutInvoicesInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomerCreateNestedOneWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateNestedOneWithoutInvoicesInput>;
export const CustomerCreateNestedOneWithoutInvoicesInputObjectZodSchema = makeSchema();
