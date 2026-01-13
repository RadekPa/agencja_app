import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerCreateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerCreateWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerCreateOrConnectWithoutSimpleInvoicesAsBillToInputObjectSchema as CustomerCreateOrConnectWithoutSimpleInvoicesAsBillToInputObjectSchema } from './CustomerCreateOrConnectWithoutSimpleInvoicesAsBillToInput.schema';
import { CustomerWhereUniqueInputObjectSchema as CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutSimpleInvoicesAsBillToInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutSimpleInvoicesAsBillToInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutSimpleInvoicesAsBillToInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomerCreateNestedOneWithoutSimpleInvoicesAsBillToInputObjectSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutSimpleInvoicesAsBillToInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateNestedOneWithoutSimpleInvoicesAsBillToInput>;
export const CustomerCreateNestedOneWithoutSimpleInvoicesAsBillToInputObjectZodSchema = makeSchema();
