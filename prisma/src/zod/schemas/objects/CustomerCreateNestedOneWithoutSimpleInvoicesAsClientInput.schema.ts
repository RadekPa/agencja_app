import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerCreateWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerCreateOrConnectWithoutSimpleInvoicesAsClientInputObjectSchema as CustomerCreateOrConnectWithoutSimpleInvoicesAsClientInputObjectSchema } from './CustomerCreateOrConnectWithoutSimpleInvoicesAsClientInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutSimpleInvoicesAsClientInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomerCreateNestedOneWithoutSimpleInvoicesAsClientInputObjectSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutSimpleInvoicesAsClientInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateNestedOneWithoutSimpleInvoicesAsClientInput>;
export const CustomerCreateNestedOneWithoutSimpleInvoicesAsClientInputObjectZodSchema = makeSchema();
